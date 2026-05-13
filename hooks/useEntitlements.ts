/**
 * useEntitlements — reactive RevenueCat entitlements.
 *
 * Reads the current set of active entitlements on mount, then subscribes
 * to RevenueCat updates so the UI flips state automatically when:
 *   - Purchase succeeds (paywall closes → entitlement appears)
 *   - Subscription expires
 *   - User restores purchases
 *   - Webhook back-grants from a server-side promo
 *
 * DB-mirror fallback (v4, 2026-05-13):
 *   When the RC SDK is in test-key skip-mode — or returns no entitlements
 *   for a signed-in user — we fall back to reading `user_entitlements`
 *   from Supabase. The mirror is populated by the `revenuecat-webhook`
 *   Edge Function on every purchase event, so the user experience matches
 *   "live" RC even before production keys are wired.
 *
 * Usage:
 *   const { tier, hasPaidTier, hasFeature, has, loading, balance } = useEntitlements();
 *   if (tier === 'ultra') { ... }
 *   if (hasFeature('voice')) { ... }
 */

import { useEffect, useMemo, useState } from 'react';
import {
  getActiveEntitlements,
  listenEntitlements,
  type ActiveEntitlement,
} from '../lib/purchases';
import { fetchEntitlementsFromDb, fetchCreditBalanceFromDb } from '../lib/entitlements-db';
import { useAuth } from '../lib/AuthContext';
import {
  TIER_RANK,
  FEATURE_MIN_TIER,
  type SubscriptionTierKey,
} from '../data/products';
import { tierFromEntitlements, type SubscriptionTier } from '../lib/entitlements';

export interface EntitlementsState {
  loading: boolean;
  entitlements: ActiveEntitlement[];
  /** Highest active tier ('free' through 'ultra'). */
  tier: SubscriptionTier;
  /** Convenience: has any paid tier (text+). */
  hasPaidTier: boolean;
  /** Current token balance from the DB mirror. */
  balance: number;
  /** Does the user's tier reach the minimum for this feature? */
  hasFeature: (feature: keyof typeof FEATURE_MIN_TIER) => boolean;
  /** Does the user hold a specific entitlement id? */
  has: (entitlementId: string) => boolean;
  /** Refetch the DB mirror — call after a purchase succeeds to flip
   *  state immediately rather than waiting for the next listener tick. */
  refresh: () => Promise<void>;
}

export function useEntitlements(): EntitlementsState {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [entitlements, setEntitlements] = useState<ActiveEntitlement[]>([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadAll = useMemo(() => {
    return async () => {
      // 1. Try RC SDK first.
      const rcEntitlements = await getActiveEntitlements();
      // 2. If empty and signed in, fall back to DB mirror.
      let combined = rcEntitlements;
      if (userId && rcEntitlements.length === 0) {
        combined = await fetchEntitlementsFromDb(userId);
      }
      // 3. Always read the token balance from the DB (RC doesn't track
      //    numeric balances — only entitlement booleans).
      const bal = userId ? await fetchCreditBalanceFromDb(userId) : 0;
      return { combined, bal };
    };
  }, [userId]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    loadAll().then(({ combined, bal }) => {
      if (cancelled) return;
      setEntitlements(combined);
      setBalance(bal);
      setLoading(false);
    });

    // RC live listener — when the SDK is enabled this gives us push
    // updates on entitlement changes. In test-key skip mode this is a
    // no-op (the unsubscribe returned is a no-op too).
    const unsubscribe = listenEntitlements(async (es) => {
      if (cancelled) return;
      if (es.length > 0) {
        setEntitlements(es);
      } else if (userId) {
        // RC pushed an empty update — re-read DB in case the webhook has
        // landed an update RC doesn't yet know about.
        const fromDb = await fetchEntitlementsFromDb(userId);
        if (!cancelled) setEntitlements(fromDb);
      } else {
        setEntitlements([]);
      }
    });

    return () => { cancelled = true; unsubscribe(); };
  }, [loadAll, userId]);

  const activeIds = useMemo(
    () => entitlements.filter((e) => e.isActive).map((e) => e.identifier),
    [entitlements],
  );

  const tier = useMemo(() => tierFromEntitlements(activeIds), [activeIds]);

  const has = (id: string) => activeIds.includes(id);

  const hasFeature = (feature: keyof typeof FEATURE_MIN_TIER) => {
    const required = FEATURE_MIN_TIER[feature] as SubscriptionTierKey;
    return TIER_RANK[tier] >= TIER_RANK[required];
  };

  const refresh = async () => {
    const { combined, bal } = await loadAll();
    setEntitlements(combined);
    setBalance(bal);
  };

  return {
    loading,
    entitlements,
    tier,
    hasPaidTier: tier !== 'free',
    balance,
    hasFeature,
    has,
    refresh,
  };
}
