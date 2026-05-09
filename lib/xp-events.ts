/**
 * XP event client. Wraps the `award_xp` and `redeem_xp` Supabase RPCs.
 *
 * Throttling rules (locked 2026-05-09):
 *   - Universal: once per hour per (user, event_type). Logging in 20 times
 *     in an hour earns one login XP, not twenty.
 *   - lesson_complete: dedup'd by lesson_id only (each lesson rewarded
 *     once ever, but multiple different lessons in the same hour ALL
 *     earn XP — completing a curriculum is its own legitimate stream).
 *   - purchase_*: no cap (real-money purchases are server-validated by
 *     the RevenueCat webhook; per-hour cap would block legitimate
 *     same-session purchases like course + subscription).
 *
 * Throttle is enforced server-side in award_xp() so a modified client
 * can't bypass it.
 *
 * Economic model:
 *   XP earned through engagement, AI usage (per-hour throttled), purchases.
 *   XP can be spent on digital products (courses, AI companion subscriptions).
 *   XP CANNOT be spent on AI credits (compute cost is real, paid via subscription).
 *   Travel free; 10 free text-AI messages per day; 1 free starter companion.
 */

import { supabase } from './supabase';

/** Canonical event types. Add a new entry here BEFORE calling awardXp. */
export type XpEventType =
  // Per-hour-throttled (server enforces one award per hour per user)
  | 'login'
  | 'post_create'
  | 'comment_create'
  | 'post_like'
  | 'user_follow'
  | 'ai_text_use'
  | 'ai_voice_use'
  | 'ai_lipsync_use'
  // Per-lesson dedup (each lesson rewarded once ever; multiple different
  // lessons in the same hour all earn XP)
  | 'lesson_complete'
  // No cap (real-money purchase, server-validated upstream)
  | 'purchase_text_ai_period'
  | 'purchase_lipsync_period'
  | 'purchase_course'
  | 'purchase_top_tier';

/** Canonical XP amounts per event. Tight scale per user spec — small
 *  values feel earned, top-tier purchase caps at 1000. */
export const XP_AMOUNTS: Record<XpEventType, number> = {
  login: 5,
  post_create: 10,
  comment_create: 3,
  post_like: 1,
  user_follow: 2,
  ai_text_use: 5,
  ai_voice_use: 5,
  ai_lipsync_use: 5,
  lesson_complete: 25,        // base — actual lesson xp comes from manifest
  purchase_text_ai_period: 100,
  purchase_lipsync_period: 500,
  purchase_course: 100,
  purchase_top_tier: 1000,
};

/** Award XP. Returns the user's new total. Server-side caps may silently
 *  no-op (returns current total unchanged) — that's intentional, the UI
 *  shouldn't celebrate a 5-XP gain that didn't happen. */
export async function awardXp(
  eventType: XpEventType,
  amount: number = XP_AMOUNTS[eventType],
  metadata?: Record<string, unknown>,
): Promise<number> {
  const { data, error } = await supabase.rpc('award_xp', {
    p_event_type: eventType,
    p_amount: amount,
    p_metadata: metadata ?? null,
  });
  if (error) {
    // Don't throw on award failures — XP is incidental, never a hard block.
    console.warn('[xp] award failed', eventType, error.message);
    return 0;
  }
  return (data as number) ?? 0;
}

/** Redeem XP for a digital product. Throws if insufficient balance.
 *  Caller should catch and show a friendly "not enough XP" toast. */
export async function redeemXp(
  productId: string,
  xpCost: number,
  metadata?: Record<string, unknown>,
): Promise<number> {
  const { data, error } = await supabase.rpc('redeem_xp', {
    p_product_id: productId,
    p_xp_cost: xpCost,
    p_metadata: metadata ?? null,
  });
  if (error) throw new Error(error.message);
  return (data as number) ?? 0;
}

/** Pull recent XP event history for the "XP history" UI. */
export async function getRecentEvents(limit: number = 50): Promise<Array<{
  id: string;
  event_type: string;
  amount: number;
  metadata: Record<string, unknown> | null;
  created_at: string;
}>> {
  const { data, error } = await supabase
    .from('xp_events')
    .select('id, event_type, amount, metadata, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as Array<{
    id: string;
    event_type: string;
    amount: number;
    metadata: Record<string, unknown> | null;
    created_at: string;
  }>;
}
