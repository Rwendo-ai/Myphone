/**
 * DB-mirror entitlement reader.
 *
 * The authoritative source is RevenueCat (live, push-updated). But while
 * we're in test-key mode — or when the RC SDK fails to initialise on a
 * given device — useEntitlements has no entitlements to surface, and the
 * app falls back to free tier even when the user has paid.
 *
 * The `user_entitlements` table is populated by the `revenuecat-webhook`
 * Edge Function on every purchase / renewal / cancellation. Reading from
 * it gives us a near-real-time mirror that works even when the SDK is
 * skipped.
 *
 * Used by `useEntitlements` as a fallback when getActiveEntitlements()
 * returns empty AND a user is signed in.
 */

import { supabase } from './supabase';
import type { ActiveEntitlement } from './purchases';

/**
 * Fetch the user's currently-active entitlements from the Supabase mirror.
 * Filters out rows whose expires_at is in the past.
 *
 * Returns an empty array if the user is signed-out, the table is missing,
 * or the user has never made a purchase.
 */
export async function fetchEntitlementsFromDb(userId: string): Promise<ActiveEntitlement[]> {
  try {
    const { data, error } = await supabase
      .from('user_entitlements')
      .select('entitlement, expires_at')
      .eq('user_id', userId);

    if (error || !data) return [];

    const now = Date.now();
    return data
      .filter((row) => !row.expires_at || new Date(row.expires_at).getTime() > now)
      .map((row) => ({
        identifier:        row.entitlement,
        isActive:          true,
        willRenew:         false,
        periodType:        'NORMAL',
        expirationDate:    row.expires_at,
        productIdentifier: '',
      }));
  } catch {
    return [];
  }
}

/** Fetch the user's current token balance. Returns 0 if no row. */
export async function fetchCreditBalanceFromDb(userId: string): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('user_credits')
      .select('balance')
      .eq('user_id', userId)
      .maybeSingle();

    if (error || !data) return 0;
    return data.balance ?? 0;
  } catch {
    return 0;
  }
}
