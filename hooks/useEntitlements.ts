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
 * Usage:
 *   const { tier, hasPaidTier, hasFeature, has, loading } = useEntitlements();
 *   if (tier === 'ultra') { ... }
 *   if (hasFeature('voice')) { ... }
 */

import { useEffect, useMemo, useState } from 'react';
import {
  getActiveEntitlements,
  listenEntitlements,
  type ActiveEntitlement,
} from '../lib/purchases';
import {
  TIER_RANK,
  FEATURE_MIN_TIER,
  LIFETIME_BUYER_ENTITLEMENT_ID,
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
  /** Lifetime buyer flag → 15% off all token-pack purchases (server-applied). */
  isLifetimeBuyer: boolean;
  /** Does the user's tier reach the minimum for this feature? */
  hasFeature: (feature: keyof typeof FEATURE_MIN_TIER) => boolean;
  /** Does the user hold a specific entitlement id? */
  has: (entitlementId: string) => boolean;
}

export function useEntitlements(): EntitlementsState {
  const [entitlements, setEntitlements] = useState<ActiveEntitlement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getActiveEntitlements().then((es) => {
      if (cancelled) return;
      setEntitlements(es);
      setLoading(false);
    });

    const unsubscribe = listenEntitlements((es) => {
      if (!cancelled) setEntitlements(es);
    });

    return () => { cancelled = true; unsubscribe(); };
  }, []);

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

  return {
    loading,
    entitlements,
    tier,
    hasPaidTier: tier !== 'free',
    isLifetimeBuyer: has(LIFETIME_BUYER_ENTITLEMENT_ID),
    hasFeature,
    has,
  };
}
