/**
 * Canonical product catalogue. Single source of truth for:
 *   - The plans / paywall screen UI
 *   - lib/purchases.ts (RevenueCat wrapper)
 *   - Server webhook handler (purchase events → entitlements + credits)
 *   - lib/xp-events.ts (purchase XP rewards)
 *
 * Pricing model (locked 2026-05-10 — v3):
 *
 * 5-tier subscription ladder. Each tier INCLUDES every feature of lower
 * tiers + a monthly token allowance for AI usage.
 *
 *   Free          1 companion (Rwen) · 10 msgs/day · 2 free starter modules
 *                 · 3 AI msgs/lesson
 *   Text   $4/mo  All companions, text-only · all courses + travel
 *                 · $2 tokens/mo
 *   Voice  $5/mo  Above + voice-to-voice · $2 tokens/mo
 *   Lipsync Low   $10/mo  Above + low-quality lipsync · $3 tokens/mo
 *   Lipsync High  $25/mo  Above + high-quality lipsync · $10 tokens/mo
 *                         (also has yearly option)
 *   Ultra  $29.99/mo  Above + custom companion (edit soul) · ~$15 tokens/mo
 *                     (also has yearly option)
 *   Ultra Lifetime $399  All Ultra forever + 15% off all token packs
 *
 * Tokens (consumable balance, server-tracked):
 *   1 token ≈ 1 text message; voice + lipsync consume more per use.
 *   When a tier's monthly allowance runs out, user buys top-up packs.
 *   Pack pricing targets ~35% margin over real AI cost on Apple/Google.
 *
 * Currency is base AUD; RevenueCat localises per region.
 *
 * Spec: docs/PAYWALL-DESIGN.md.
 */

export type ProductCategory =
  | 'tier_subscription'
  | 'lifetime_purchase'
  | 'token_pack';

/** The five paid tiers, in ascending order. The numeric rank lets
 *  entitlement checks do `userTier >= requiredTier`. */
export type SubscriptionTierKey =
  | 'text'
  | 'voice'
  | 'lipsync_low'
  | 'lipsync_high'
  | 'ultra';

export const TIER_RANK: Record<SubscriptionTierKey | 'free', number> = {
  free: 0,
  text: 1,
  voice: 2,
  lipsync_low: 3,
  lipsync_high: 4,
  ultra: 5,
};

export interface Product {
  id: string;
  /** Apple/Google store product ID. Same string used in RevenueCat. */
  storeId: string;
  /** RevenueCat entitlement granted. Subscription tiers grant
   *  `tier_<key>`. Lifetime grants `tier_ultra` + `lifetime_buyer`.
   *  Token packs grant `ai_credits` (a numeric balance, not a boolean
   *  flag — server-tracked via webhook). */
  entitlement: string;
  category: ProductCategory;
  displayName: string;
  description: string;
  /** Base AUD retail price. */
  baseAud: number;
  /** XP awarded on successful purchase. */
  xpReward: number;
  /** For tiers, which tier this represents. */
  tier?: SubscriptionTierKey;
  /** Billing period in days. 30 = monthly, 365 = yearly, 0 = lifetime. */
  periodDays?: number;
  /** Monthly token allowance for subscription tiers (in dollar-equivalent
   *  cents — server converts to actual token count using current AI prices). */
  monthlyTokenAllowanceCents?: number;
  /** For token packs, how many tokens the pack grants. */
  tokens?: number;
  /** Marketing flag. */
  recommended?: boolean;
}

// ─── Tier subscriptions (monthly) ──────────────────────────────────────────

const TIER_MONTHLY: Product[] = [
  {
    id: 'tier_text_monthly',
    storeId: 'rwendo_text_monthly_v1',
    entitlement: 'tier_text',
    category: 'tier_subscription',
    tier: 'text',
    displayName: 'Text Companion',
    description: 'Unlimited text · all companions · all courses · $2 tokens/mo',
    baseAud: 4.00,
    xpReward: 50,
    periodDays: 30,
    monthlyTokenAllowanceCents: 200,
  },
  {
    id: 'tier_voice_monthly',
    storeId: 'rwendo_voice_monthly_v1',
    entitlement: 'tier_voice',
    category: 'tier_subscription',
    tier: 'voice',
    displayName: 'Voice Companion',
    description: 'Voice-to-voice · text · all companions · $2 tokens/mo',
    baseAud: 5.00,
    xpReward: 75,
    periodDays: 30,
    monthlyTokenAllowanceCents: 200,
  },
  {
    id: 'tier_lipsync_low_monthly',
    storeId: 'rwendo_lipsync_low_monthly_v1',
    entitlement: 'tier_lipsync_low',
    category: 'tier_subscription',
    tier: 'lipsync_low',
    displayName: 'Lipsync · Low',
    description: 'Low-quality lipsync · voice · text · $3 tokens/mo',
    baseAud: 10.00,
    xpReward: 150,
    periodDays: 30,
    monthlyTokenAllowanceCents: 300,
  },
  {
    id: 'tier_lipsync_high_monthly',
    storeId: 'rwendo_lipsync_high_monthly_v1',
    entitlement: 'tier_lipsync_high',
    category: 'tier_subscription',
    tier: 'lipsync_high',
    displayName: 'Lipsync · High',
    description: 'High-quality lipsync · everything below · $10 tokens/mo',
    baseAud: 25.00,
    xpReward: 350,
    periodDays: 30,
    monthlyTokenAllowanceCents: 1000,
    recommended: true,
  },
  {
    id: 'tier_ultra_monthly',
    storeId: 'rwendo_ultra_monthly_v1',
    entitlement: 'tier_ultra',
    category: 'tier_subscription',
    tier: 'ultra',
    displayName: 'Ultra · Custom Companion',
    description: 'Edit-soul custom companion · everything below · $15 tokens/mo',
    baseAud: 29.99,
    xpReward: 500,
    periodDays: 30,
    monthlyTokenAllowanceCents: 1500,
  },
];

// ─── Yearly variants (only top two tiers per spec) ─────────────────────────
//
// Lipsync High + Ultra get yearly options at ~33% off. Lower tiers stay
// monthly-only — their entry price is already low enough that yearly adds
// friction without proportional revenue.

const TIER_YEARLY: Product[] = [
  {
    id: 'tier_lipsync_high_yearly',
    storeId: 'rwendo_lipsync_high_yearly_v1',
    entitlement: 'tier_lipsync_high',
    category: 'tier_subscription',
    tier: 'lipsync_high',
    displayName: 'Lipsync · High · Yearly',
    description: 'Yearly billing — 33% off vs monthly · $10 tokens/mo',
    baseAud: 199.00,           // $25/mo × 12 × 0.66 = $198, rounded
    xpReward: 4000,
    periodDays: 365,
    monthlyTokenAllowanceCents: 1000,
  },
  {
    id: 'tier_ultra_yearly',
    storeId: 'rwendo_ultra_yearly_v1',
    entitlement: 'tier_ultra',
    category: 'tier_subscription',
    tier: 'ultra',
    displayName: 'Ultra · Yearly',
    description: 'Yearly billing — 33% off vs monthly · $15 tokens/mo',
    baseAud: 239.00,           // $29.99/mo × 12 × 0.66 ≈ $238
    xpReward: 5000,
    periodDays: 365,
    monthlyTokenAllowanceCents: 1500,
    recommended: true,
  },
];

// ─── Lifetime (one only) ───────────────────────────────────────────────────
//
// Ultra forever + 15% off every future token pack purchase. The 15%
// discount is enforced server-side at purchase time (RC webhook checks
// for `lifetime_buyer` entitlement and adjusts credits granted upward).

const LIFETIME: Product[] = [
  {
    id: 'ultra_lifetime',
    storeId: 'rwendo_ultra_lifetime_v1',
    entitlement: 'tier_ultra',
    category: 'lifetime_purchase',
    tier: 'ultra',
    displayName: 'Ultra · Lifetime',
    description: 'Pay once. Ultra forever. 15% off every future token pack.',
    baseAud: 399.00,
    xpReward: 8000,
    periodDays: 0,
    monthlyTokenAllowanceCents: 1500,
  },
];

// ─── Token packs (consumables) ─────────────────────────────────────────────
//
// Top-up beyond a tier's monthly allowance. Apple/Google pricing targets
// ~35% margin over real AI cost. Web pricing (when added post-launch) at
// 15% margin per spec — those are different SKUs in a future commit.

const TOKEN_PACKS: Product[] = [
  {
    id: 'tokens_small',
    storeId: 'rwendo_tokens_small_v1',
    entitlement: 'ai_credits',
    category: 'token_pack',
    displayName: '$2 of Tokens',
    description: 'Small top-up — covers a typical day of heavy use.',
    baseAud: 2.99,
    xpReward: 30,
    tokens: 200,
  },
  {
    id: 'tokens_medium',
    storeId: 'rwendo_tokens_medium_v1',
    entitlement: 'ai_credits',
    category: 'token_pack',
    displayName: '$5 of Tokens',
    description: 'Best value — a couple weeks of heavy use.',
    baseAud: 7.49,
    xpReward: 80,
    tokens: 500,
    recommended: true,
  },
  {
    id: 'tokens_large',
    storeId: 'rwendo_tokens_large_v1',
    entitlement: 'ai_credits',
    category: 'token_pack',
    displayName: '$10 of Tokens',
    description: 'Bulk pack — for power users and creators.',
    baseAud: 14.99,
    xpReward: 175,
    tokens: 1000,
  },
];

// ─── Aggregates / lookups ──────────────────────────────────────────────────

export const ALL_PRODUCTS: Product[] = [
  ...TIER_MONTHLY,
  ...TIER_YEARLY,
  ...LIFETIME,
  ...TOKEN_PACKS,
];

export const PRODUCTS_BY_ID: Record<string, Product> = Object.fromEntries(
  ALL_PRODUCTS.map((p) => [p.id, p]),
);

export const PRODUCTS_BY_STORE_ID: Record<string, Product> = Object.fromEntries(
  ALL_PRODUCTS.map((p) => [p.storeId, p]),
);

/** RevenueCat entitlement IDs — the canonical strings used in the dashboard
 *  and matched by lib/entitlements.ts. Order = tier ladder (low → high). */
export const TIER_ENTITLEMENT_IDS: Record<SubscriptionTierKey, string> = {
  text: 'tier_text',
  voice: 'tier_voice',
  lipsync_low: 'tier_lipsync_low',
  lipsync_high: 'tier_lipsync_high',
  ultra: 'tier_ultra',
};

/** Per-feature minimum tier (for canUseAiFeature). */
export const FEATURE_MIN_TIER: Record<'text' | 'voice' | 'lipsync_low' | 'lipsync_high' | 'custom_companion', SubscriptionTierKey> = {
  text: 'text',
  voice: 'voice',
  lipsync_low: 'lipsync_low',
  lipsync_high: 'lipsync_high',
  custom_companion: 'ultra',
};

/** Lifetime-buyer flag. Granted by the lifetime SKU; gives 15% off all
 *  future token pack purchases (server adjusts credits at webhook time). */
export const LIFETIME_BUYER_ENTITLEMENT_ID = 'lifetime_buyer';

/** AI credits balance entitlement. Server tracks the numeric balance in
 *  `user_credits.balance`; this entitlement just signals "user has tokens". */
export const CREDITS_ENTITLEMENT_ID = 'ai_credits';

export function getProduct(id: string): Product | undefined {
  return PRODUCTS_BY_ID[id];
}

export function getTierProducts(): Product[] {
  return [...TIER_MONTHLY, ...TIER_YEARLY];
}

export function getMonthlyTiers(): Product[] {
  return TIER_MONTHLY;
}

export function getYearlyTiers(): Product[] {
  return TIER_YEARLY;
}

export function getLifetimeProducts(): Product[] {
  return LIFETIME;
}

export function getTokenPacks(): Product[] {
  return TOKEN_PACKS;
}
