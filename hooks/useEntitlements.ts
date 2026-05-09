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
 *   const { hasPro, entitlements, loading } = useEntitlements();
 *   if (hasPro) { ... }
 */

import { useEffect, useState } from 'react';
import {
  getActiveEntitlements,
  listenEntitlements,
  type ActiveEntitlement,
} from '../lib/purchases';

export interface EntitlementsState {
  loading: boolean;
  entitlements: ActiveEntitlement[];
  /** Convenience flag — does the user have the all-access "Rwendo Pro"? */
  hasPro: boolean;
  /** Generic check for any entitlement id. Use for course-specific gates
   *  (e.g. 'course_shona') once individual courses are configured in RC. */
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

  const has = (id: string) => entitlements.some((e) => e.identifier === id && e.isActive);

  return {
    loading,
    entitlements,
    hasPro: has('Rwendo Pro'),
    has,
  };
}
