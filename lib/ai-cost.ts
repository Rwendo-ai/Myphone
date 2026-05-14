/**
 * AI feature cost in tokens — client-side hint for UX.
 *
 * The server-side `ai_feature_cost` Supabase table is the authoritative
 * source: the AI proxy reads from it when deducting credits via the
 * `spend_tokens` RPC. This file exists so the client can show "this voice
 * call will use ~5 tokens/min" etc. without a round-trip — but if the
 * server table is updated, the server prevails.
 *
 * Naming (v5, 2026-05-14): four feature tiers — text, voice, lipsync,
 * lipsync_plus. The lipsync tier was previously split into lipsync_low /
 * lipsync_high; renamed to match customer-facing terminology.
 */

export type AiFeatureKey = 'text' | 'voice' | 'lipsync' | 'lipsync_plus' | 'lipsync_custom';

/** Token cost per use. Voice/lipsync costs are per-minute estimates.
 *
 * NOTE: lipsync values match the Google design-plan placeholders. Real
 * Simli (~$0.40/min) and Sync Labs (~$0.70/min) costs make these too
 * low to break even — realistic launch values are closer to:
 *   lipsync: 50, lipsync_plus: 100, lipsync_custom: 55.
 * Revisit before launch. See docs/LIPSYNC-INTEGRATION.md.
 */
export const AI_FEATURE_COST: Record<AiFeatureKey, number> = {
  text:           1,
  voice:          5,
  lipsync:        3,   // Simli engine, archetype image
  lipsync_plus:   10,  // Sync Labs engine, archetype 6s idling video
  lipsync_custom: 5,   // Simli engine, user-uploaded photo (custom companion)
};

export const AI_FEATURE_LABEL: Record<AiFeatureKey, string> = {
  text:           'Text',
  voice:          'Voice',
  lipsync:        'Lipsync',
  lipsync_plus:   'Lipsync Plus',
  lipsync_custom: 'Lipsync (Custom)',
};

/** UX helper — return e.g. "5 tokens / min" for voice. */
export function describeFeatureCost(feature: AiFeatureKey): string {
  const cost = AI_FEATURE_COST[feature];
  if (feature === 'text') return `${cost} token per message`;
  return `${cost} tokens / min`;
}
