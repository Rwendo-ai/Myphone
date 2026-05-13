/**
 * AI feature cost in tokens — client-side hint for UX.
 *
 * The server-side `ai_feature_cost` Supabase table is the authoritative
 * source: the AI proxy reads from it when deducting credits via the
 * `spend_tokens` RPC. This file exists so the client can show "this voice
 * call will use ~5 tokens/min" etc. without a round-trip — but if the
 * server table is updated, the server prevails.
 *
 * Keep this in sync with the seed data in the
 * `payment_gateway_tables_v1` migration.
 */

export type AiFeatureKey = 'text' | 'voice' | 'lipsync_low' | 'lipsync_high';

/** Token cost per use. Voice/lipsync costs are per-minute estimates. */
export const AI_FEATURE_COST: Record<AiFeatureKey, number> = {
  text:         1,
  voice:        5,
  lipsync_low:  20,
  lipsync_high: 50,
};

export const AI_FEATURE_LABEL: Record<AiFeatureKey, string> = {
  text:         'Text',
  voice:        'Voice',
  lipsync_low:  'Lipsync · Low',
  lipsync_high: 'Lipsync · High',
};

/** UX helper — return e.g. "5 tokens / min" for voice. */
export function describeFeatureCost(feature: AiFeatureKey): string {
  const cost = AI_FEATURE_COST[feature];
  if (feature === 'text') return `${cost} token per message`;
  return `${cost} tokens / min`;
}
