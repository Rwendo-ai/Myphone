/**
 * Web product catalogue — reformatted/trimmed view of the mobile catalogue
 * at data/products.ts. Same product IDs, same prices (v1), but flatter shape
 * because the web UI doesn't need RevenueCat store IDs, tier ranks, or
 * monthly-token-allowance bookkeeping.
 *
 * THREE PRODUCT KINDS surfaced on web v1:
 *   • tokens            — 3 packs ($10/$50/$100 AUD)
 *   • companion_unlock  — 7 presets, $4.99 AUD each one-time
 *   • companion_build   — 1 product, $39.99 AUD one-time
 *
 * Total: 11 products.
 *
 * Subscription tiers + course subscriptions are NOT yet surfaced on web —
 * those land in a follow-up once we wire Stripe Subscriptions.
 *
 * Keep this file in sync with data/products.ts on the mobile side. The
 * webhook handler at app/api/stripe-webhook/route.ts reads the kind off the
 * Stripe session metadata to decide which grant path to run.
 */

export type WebProductKind = 'tokens' | 'companion_unlock' | 'companion_build';

export interface WebProduct {
  /** Stable id — matches data/products.ts on mobile. */
  id: string;
  kind: WebProductKind;
  /** Human label for cart cards / Stripe line item. */
  name: string;
  /** One-line description. */
  description: string;
  /** Companion preset id (only for companion_unlock). */
  presetId?: string;
  /** Tokens granted on purchase (only for tokens kind). */
  tokens?: number;
  /** Base AUD price — what Stripe charges. */
  priceAud: number;
  /** Informational USD price for future display. NOT what we charge. */
  priceUsd: number;
  /** XP awarded server-side on purchase webhook. */
  xpReward: number;
  /** Marketing badge ("BEST" / "RECOMMENDED" etc.) — optional. */
  badge?: string;
}

// ─── Token packs (3) ──────────────────────────────────────────────────────
// 100 tokens per A$1 base rate. Larger packs include a bonus to reward bulk
// purchase. Mirrors the mobile TOKEN_PACKS exactly (canonical: data/products.ts).

const TOKEN_PACKS: WebProduct[] = [
  {
    id: 'tokens_10',
    kind: 'tokens',
    name: '$10 of Tokens',
    description: '1,000 tokens · about a week of moderate use',
    tokens: 1000,
    priceAud: 10,
    priceUsd: 6.6,
    xpReward: 100,
  },
  {
    id: 'tokens_50',
    kind: 'tokens',
    name: '$50 of Tokens',
    description: '5,500 tokens · 10% bonus · best value',
    tokens: 5500,
    priceAud: 50,
    priceUsd: 33,
    xpReward: 600,
    badge: 'BEST VALUE',
  },
  {
    id: 'tokens_100',
    kind: 'tokens',
    name: '$100 of Tokens',
    description: '12,000 tokens · 20% bonus · power users',
    tokens: 12000,
    priceAud: 100,
    priceUsd: 66,
    xpReward: 1500,
  },
];

// ─── Companion unlocks (7) ────────────────────────────────────────────────
// $4.99 AUD one-time per preset. Rwen + first-chosen companion are free
// (handled server-side); the rest are bought from this list. The presetId
// matches user_companion_customizations.preset_id and the COMPANION_PRESETS
// keys in data/companions/presets.ts.

const COMPANION_PRESETS: Array<{ id: string; name: string; emoji: string; tagline: string }> = [
  { id: 'tendai', name: 'Tendai', emoji: '📚', tagline: 'A friend who notices when you nail it' },
  { id: 'maya',   name: 'Maya',   emoji: '🌷', tagline: 'A gentle friend who listens deeply' },
  { id: 'kai',    name: 'Kai',    emoji: '🌍', tagline: 'A travel buddy who pushes you outside' },
  { id: 'sam',    name: 'Sam',    emoji: '🏔️', tagline: 'A friend who pushes — and remembers what you said' },
  { id: 'lumi',   name: 'Lumi',   emoji: '🌙', tagline: 'A reflective companion for the questions you avoid' },
  { id: 'aria',   name: 'Aria',   emoji: '🎵', tagline: 'Warm, flirty companion (18+)' },
  { id: 'zeke',   name: 'Zeke',   emoji: '⛓️', tagline: 'Crypto-curious mentor (13+)' },
];

const COMPANION_UNLOCKS: WebProduct[] = COMPANION_PRESETS.map(({ id, name, emoji, tagline }) => ({
  id:          `companion_${id}`,
  kind:        'companion_unlock' as const,
  name:        `${emoji} ${name}`,
  description: tagline,
  presetId:    id,
  priceAud:    4.99,
  priceUsd:    3.29,
  xpReward:    50,
}));

// ─── Companion build (1) ──────────────────────────────────────────────────
// $39.99 AUD one-time. Each purchase unlocks ONE custom-built companion via
// the build wizard. Webhook marks a draft as paid (or creates a placeholder
// row for now since the web build wizard isn't shipped yet).

const COMPANION_BUILD: WebProduct = {
  id:          'companion_build_v1',
  kind:        'companion_build',
  name:        '✨ Build a Companion',
  description: 'Design a custom AI companion — name, personality, voice, look. Yours forever.',
  priceAud:    39.99,
  priceUsd:    26.39,
  xpReward:    500,
};

// ─── Aggregates ───────────────────────────────────────────────────────────

export const PRODUCTS_WEB: WebProduct[] = [
  ...TOKEN_PACKS,
  ...COMPANION_UNLOCKS,
  COMPANION_BUILD,
];

export function getWebProduct(id: string): WebProduct | undefined {
  return PRODUCTS_WEB.find((p) => p.id === id);
}

export function getTokenPacksWeb(): WebProduct[] {
  return TOKEN_PACKS;
}

export function getCompanionUnlocksWeb(): WebProduct[] {
  return COMPANION_UNLOCKS;
}

export function getCompanionBuildWeb(): WebProduct {
  return COMPANION_BUILD;
}
