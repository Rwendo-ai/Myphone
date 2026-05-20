/**
 * AI feature cost in tokens — client-side hint + server-side metering rates.
 *
 * v1 launch (2026-05-21): one unified token currency, paid-only. XP is
 * a separate, earned currency and never pays for AI minutes.
 *
 *   Base rate: 1 token = A$0.01 retail (100 tokens / A$1).
 *   Text:   1 token per 100 output characters (Claude response).
 *   Voice: 30 tokens / min (ElevenLabs Conv AI; ~30% margin after store cut).
 *   Lipsync: hidden in v1 — SDKs not integrated. Rates kept here for when
 *     they ship; current real-cost numbers ($0.40–0.70/min) are above
 *     these so they're loss-making — DO NOT enable lipsync until rates
 *     are raised AND server-side metering is live.
 *
 * The server-side `ai_feature_cost` Supabase table is the authoritative
 * source for the `spend_tokens` RPC. This file mirrors it for client UX
 * (e.g. "this voice minute will cost ~30 tokens" warnings).
 */

export type AiFeatureKey = 'text' | 'voice' | 'lipsync' | 'lipsync_plus' | 'lipsync_custom';

/** Characters per token for text billing. Charged on the AI's response
 *  output only — input is free. Round up at the per-message boundary
 *  (a 250-char reply costs 3 tokens, not 2.5). */
export const TEXT_CHARS_PER_TOKEN = 100;

/** Tokens per minute for time-billed features (voice + lipsync). */
export const AI_FEATURE_TOKENS_PER_MIN: Record<Exclude<AiFeatureKey, 'text'>, number> = {
  voice:          30,
  lipsync:        80,  // hidden in v1 — Simli $0.40/min → ~30% margin at 80/min
  lipsync_plus:   140, // hidden in v1 — Sync Labs $0.70/min → ~30% margin at 140/min
  lipsync_custom: 90,  // hidden in v1 — Simli + Trinity face → ~30% margin
};

export const AI_FEATURE_LABEL: Record<AiFeatureKey, string> = {
  text:           'Text',
  voice:          'Voice',
  lipsync:        'Lipsync',
  lipsync_plus:   'Lipsync Plus',
  lipsync_custom: 'Lipsync (Custom)',
};

/** Compute the token cost of a text response. Round up so partial
 *  100-char blocks still cost a whole token (server side does the same). */
export function textTokenCost(responseChars: number): number {
  if (responseChars <= 0) return 0;
  return Math.ceil(responseChars / TEXT_CHARS_PER_TOKEN);
}

/** UX helper — short hint for each feature. */
export function describeFeatureCost(feature: AiFeatureKey): string {
  if (feature === 'text') return `1 token per ${TEXT_CHARS_PER_TOKEN} chars`;
  return `${AI_FEATURE_TOKENS_PER_MIN[feature]} tokens / min`;
}
