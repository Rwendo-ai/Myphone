// Port of mobile lib/ai-cost.ts — same per-feature rates so the web
// shows identical "this costs X tokens" copy.

export const TEXT_CHARS_PER_TOKEN = 100;

export const AI_FEATURE_TOKENS_PER_MIN = {
  voice:          30,
  lipsync:        80,
  lipsync_plus:   140,
  lipsync_custom: 90,
} as const;

export function textTokenCost(responseChars: number): number {
  if (responseChars <= 0) return 0;
  return Math.ceil(responseChars / TEXT_CHARS_PER_TOKEN);
}
