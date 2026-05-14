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

export type AiFeatureKey = 'text' | 'voice' | 'lipsync' | 'lipsync_plus';

/** Token cost per use. Voice/lipsync costs are per-minute estimates. */
export const AI_FEATURE_COST: Record<AiFeatureKey, number> = {
  text:         1,
  voice:        5,
  lipsync:      20,
  lipsync_plus: 50,
};

export const AI_FEATURE_LABEL: Record<AiFeatureKey, string> = {
  text:         'Text',
  voice:        'Voice',
  lipsync:      'Lipsync',
  lipsync_plus: 'Lipsync Plus',
};

/** UX helper — return e.g. "5 tokens / min" for voice. */
export function describeFeatureCost(feature: AiFeatureKey): string {
  const cost = AI_FEATURE_COST[feature];
  if (feature === 'text') return `${cost} token per message`;
  return `${cost} tokens / min`;
}
