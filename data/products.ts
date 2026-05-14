/**
 * Canonical product catalogue. Single source of truth for:
 *   - The plans / paywall screen UI
 *   - lib/purchases.ts (RevenueCat wrapper)
 *   - Server webhook handler (purchase events → entitlements + credits)
 *   - lib/xp-events.ts (purchase XP rewards)
 *
 * Pricing model (v4, locked 2026-05-13):
 *
 * 5-tier subscription ladder + token packs. Each tier INCLUDES every
 * feature of lower tiers + a monthly token allowance for AI usage.
 *
 *   Free          1 companion (Rwen) · 10 msgs/day · 2 free starter modules
 *                 · 3 AI msgs/lesson
 *   Text   $4/mo  All companions, text-only · all courses + travel
 *                 · $2 tokens/mo allowance
 *   Voice  $5/mo  Above + voice-to-voice · $2 tokens/mo
 *   Lipsync Low   $10/mo  Above + low-quality lipsync · $3 tokens/mo
 *   Lipsync High  $25/mo  Above + high-quality lipsync · $10 tokens/mo
 *                         (also has yearly option)
 *   Ultra  $29.99/mo  Above + custom companion (edit soul) · $15 tokens/mo
 *                     (also has yearly option)
 *
 * Tokens are the unified consumable currency for AI usage. Different
 * features cost different numbers of tokens per use (text < voice <
 * lipsync-low < lipsync-high). The per-feature cost table lives at
 * `lib/ai-cost.ts` (client) and mirrors the `ai_feature_cost` Supabase
 * table (server-authoritative, so we can adjust without re-deploying).
 *
 * A user on any tier can use any feature their tier permits — tokens
 * are deducted from a single balance at the per-feature rate. Top-up
 * packs are the only way to buy more tokens.
 *
 * Currency is base AUD; RevenueCat localises per region.
 *
 * Spec: docs/PAYWALL-DESIGN.md.
 *
 * v3 → v4 changes (2026-05-13):
 *   - Removed lifetime SKU (user direction: "I don't want lifetime option for now").
 *   - Token packs repriced to $10 / $50 / $100 (was $2.99 / $7.49 / $14.99)
 *     with bulk discounts on the larger packs.
 *   - Token packs are the primary purchase surface in the cart UI now.
 */

export type ProductCategory =
  | 'tier_subscription'
  | 'token_pack'
  | 'course_subscription'
  | 'companion_unlock'
  | 'companion_build';

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
   *  `tier_<key>`. Token packs grant `ai_credits` (a numeric balance,
   *  not a boolean flag — server-tracked via webhook). */
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
  /** Billing period in days. 30 = monthly, 365 = yearly. */
  periodDays?: number;
  /** Monthly token allowance for subscription tiers (in dollar-equivalent
   *  cents — server converts to actual token count using current AI prices). */
  monthlyTokenAllowanceCents?: number;
  /** For token packs, how many tokens the pack grants. */
  tokens?: number;
  /** For course subscriptions — which course this product unlocks. */
  courseId?: string;
  /** For companion unlocks — which companion preset this unlocks. */
  companionId?: string;
  /** XP redemption price — costs the user N XP instead of $X. Used by
   *  the XP-redemption flow (currently course subs only — companions
   *  can be redeemed for tokens instead). */
  xpPrice?: number;
  /** Marketing flag. */
  recommended?: boolean;
}

// ─── Token packs (consumables) — the primary purchase surface ──────────────
//
// Tokens are the unified currency for AI usage across all features (text,
// voice, lipsync low, lipsync high). The per-feature cost is defined in
// `lib/ai-cost.ts` and on the server in the `ai_feature_cost` table.
//
// Pricing targets ~30-40% margin over real Apple/Google cost (which takes
// 30% before our cut). Larger packs include a bonus on top of the base rate
// to reward bulk purchase — this is also the most profitable per transaction
// because the fixed payment-processing cost is the same regardless of size.
//
// Base rate: 100 tokens per A$1.
//   $10  →  1,000 tokens   (base rate, entry point)
//   $50  →  5,500 tokens   (10% bonus, recommended)
//   $100 → 12,000 tokens   (20% bonus, power users)

const TOKEN_PACKS: Product[] = [
  {
    id: 'tokens_10',
    storeId: 'rwendo_tokens_10_v1',
    entitlement: 'ai_credits',
    category: 'token_pack',
    displayName: '$10 of Tokens',
    description: '1,000 tokens. About a week of moderate AI use.',
    baseAud: 10.00,
    xpReward: 100,
    tokens: 1000,
  },
  {
    id: 'tokens_50',
    storeId: 'rwendo_tokens_50_v1',
    entitlement: 'ai_credits',
    category: 'token_pack',
    displayName: '$50 of Tokens',
    description: '5,500 tokens. 10% bonus — best value.',
    baseAud: 50.00,
    xpReward: 600,
    tokens: 5500,
    recommended: true,
  },
  {
    id: 'tokens_100',
    storeId: 'rwendo_tokens_100_v1',
    entitlement: 'ai_credits',
    category: 'token_pack',
    displayName: '$100 of Tokens',
    description: '12,000 tokens. 20% bonus — for power users.',
    baseAud: 100.00,
    xpReward: 1500,
    tokens: 12000,
  },
];

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
    description: 'Low-quality lipsync video · voice · text · $3 tokens/mo',
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
  },
];

// ─── Course subscriptions ──────────────────────────────────────────────────
//
// Each course is a $9.99/mo subscription (v5 pricing, 2026-05-14). The
// subscription unlocks the full course beyond the free trial (m01-m02) AND
// includes ~2000 XP-equivalent of in-course AI tutor (Tendai) usage per
// month — toolbox Q&A inside lessons + the Phase 8 end-of-lesson session.
//
// Free trial: every user gets the first 2 modules of any course for free
// without AI access. Subscribing unlocks the rest.
//
// XP redemption: a course can also be unlocked for one month at the cost
// of 9,990 XP (no real-money required) — handled by an XP-redemption flow,
// not by RC. The xpPrice field signals availability of that path.
//
// One product per courseId. Keep list in sync with data/courses/index.ts.

const COURSE_CATALOG: Array<{ courseId: string; displayName: string; emoji?: string }> = [
  // Language courses
  { courseId: 'language-shona',      displayName: 'Shona',       emoji: '🇿🇼' },
  { courseId: 'language-english',    displayName: 'English',     emoji: '🇬🇧' },
  { courseId: 'language-french',     displayName: 'French',      emoji: '🇫🇷' },
  { courseId: 'language-chinese',    displayName: 'Mandarin',    emoji: '🇨🇳' },
  { courseId: 'language-tagalog',    displayName: 'Tagalog',     emoji: '🇵🇭' },
  { courseId: 'language-hindi',      displayName: 'Hindi',       emoji: '🇮🇳' },
  { courseId: 'language-spanish',    displayName: 'Spanish',     emoji: '🇪🇸' },
  { courseId: 'language-portuguese', displayName: 'Portuguese',  emoji: '🇵🇹' },
  { courseId: 'language-japanese',   displayName: 'Japanese',    emoji: '🇯🇵' },
  { courseId: 'language-korean',     displayName: 'Korean',      emoji: '🇰🇷' },
  { courseId: 'language-ndebele',    displayName: 'isiNdebele',  emoji: '🇿🇼' },
  // Build Yourself
  { courseId: 'know-yourself',            displayName: 'Knowing Yourself',          emoji: '🌱' },
  { courseId: 'hard-conversations-work',  displayName: 'Hard Conversations',        emoji: '🗣️' },
  { courseId: 'parenting-under-pressure', displayName: 'Parenting Under Pressure',  emoji: '🌳' },
  { courseId: 'money-and-meaning',        displayName: 'Money & Meaning',            emoji: '🧭' },
  { courseId: 'grief-honestly',           displayName: 'Grief Honestly',             emoji: '🌊' },
  { courseId: 'sleep-repaired',           displayName: 'Sleep Repaired',             emoji: '🌙' },
  { courseId: 'lost-confidence',          displayName: 'Lost Confidence',            emoji: '🧱' },
  { courseId: 'caring-aging-parent',      displayName: 'Caring for an Aging Parent', emoji: '🪴' },
];

const COURSE_SUBSCRIPTIONS: Product[] = COURSE_CATALOG.map(({ courseId, displayName, emoji }) => ({
  id:           `course_${courseId}_monthly`,
  storeId:      `rwendo_course_${courseId}_monthly_v1`,
  entitlement:  `course_${courseId}`,
  category:     'course_subscription',
  displayName:  `${emoji ?? ''} ${displayName}`.trim(),
  description:  '$9.99/month. Full course + AI tutor included.',
  baseAud:      9.99,
  xpReward:     100,
  periodDays:   30,
  courseId,
  xpPrice:      9990, // Alternative: redeem 9,990 XP for one month.
}));

// ─── Companion unlocks ─────────────────────────────────────────────────────
//
// Rwen + the user's first-chosen companion are free. Every additional
// companion is a $4.99 AUD one-time unlock (or 4,990 tokens via the
// token-redemption flow — handled server-side, not via RC).
//
// Six unlock products. A given user only needs to buy 5 of them — the
// 6th is whichever they "claimed" first as their free companion. The
// first-chosen-companion lock happens server-side when they first send
// a message to that companion.
//
// Keep list in sync with data/companions/presets.ts.

const COMPANION_CATALOG: Array<{ companionId: string; displayName: string; emoji?: string }> = [
  { companionId: 'tendai', displayName: 'Tendai',         emoji: '🇿🇼' },
  { companionId: 'maya',   displayName: 'Maya',           emoji: '🌺' },
  { companionId: 'kai',    displayName: 'Kai',            emoji: '🌊' },
  { companionId: 'sam',    displayName: 'Sam',            emoji: '☀️' },
  { companionId: 'lumi',   displayName: 'Lumi',           emoji: '✨' },
  { companionId: 'aria',   displayName: 'Aria (18+)',     emoji: '🎵' },
  { companionId: 'zeke',   displayName: 'Zeke · Crypto (13+)', emoji: '⛓️' },
];

// ─── Build a Companion ($39.99 one-time) ───────────────────────────────────
//
// One product, purchased N times by power users. Each purchase unlocks
// ONE custom companion they built via the build wizard (custom_companions
// table, status='paid' on RC webhook receipt).
//
// What's included in the $39.99 (v1):
//   - Custom name, tagline, emoji, avatar colour
//   - Personality wizard (5 sliders + free-text)
//   - Topic strengths multi-select
//   - Stock voice picker (~12 curated ElevenLabs voices)
//   - AI-composed system prompt (Claude composes from wizard answers)
//   - Persistent ownership — companion stays in their roster forever
//
// Coming in v2 (separate work):
//   - ElevenLabs Voice Design (generated voice from text description)
//   - AI-generated avatar portrait (text-to-image)
//   - Live chat preview in-wizard
//   - Agent-style tool use (web search, memory)

const COMPANION_BUILD_PRODUCT: Product = {
  id:           'companion_build_v1',
  storeId:      'rwendo_companion_build_v1',
  entitlement:  'companion_build',     // not unique-per-build; RC delivers an
                                       // event per purchase and the webhook
                                       // marks the matching draft as paid.
  category:     'companion_build',
  displayName:  'Build a Companion',
  description:  '$39.99 one-time. Design a custom AI companion — name, personality, voice, look. Yours forever.',
  baseAud:      39.99,
  xpReward:     500,
};

const COMPANION_UNLOCKS: Product[] = COMPANION_CATALOG.map(({ companionId, displayName, emoji }) => ({
  id:           `companion_${companionId}`,
  storeId:      `rwendo_companion_${companionId}_v1`,
  entitlement:  `companion_${companionId}`,
  category:     'companion_unlock',
  displayName:  `${emoji ?? ''} ${displayName}`.trim(),
  description:  '$4.99 one-time. Unlocks this companion across text, voice, and lipsync.',
  baseAud:      4.99,
  xpReward:     50,
  companionId,
}));

// ─── Aggregates / lookups ──────────────────────────────────────────────────

export const ALL_PRODUCTS: Product[] = [
  ...TOKEN_PACKS,
  ...COURSE_SUBSCRIPTIONS,
  ...COMPANION_UNLOCKS,
  COMPANION_BUILD_PRODUCT,
  // Legacy subscription tiers — defined but no longer surfaced in any UI.
  // The full tier-removal refactor (canUseAiFeature → token-balance check)
  // happens in a follow-up turn.
  ...TIER_MONTHLY,
  ...TIER_YEARLY,
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

export function getTokenPacks(): Product[] {
  return TOKEN_PACKS;
}

export function getCourseSubscriptions(): Product[] {
  return COURSE_SUBSCRIPTIONS;
}

export function getCourseSubscription(courseId: string): Product | undefined {
  return COURSE_SUBSCRIPTIONS.find((p) => p.courseId === courseId);
}

export function getCompanionUnlocks(): Product[] {
  return COMPANION_UNLOCKS;
}

export function getCompanionUnlock(companionId: string): Product | undefined {
  return COMPANION_UNLOCKS.find((p) => p.companionId === companionId);
}

export function getCompanionBuildProduct(): Product {
  return COMPANION_BUILD_PRODUCT;
}
