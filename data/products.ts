/**
 * Canonical product catalogue. Single source of truth for:
 *   - The plans screen UI
 *   - lib/purchases.ts (RevenueCat wrapper) — maps these IDs to
 *     RevenueCat product IDs from the dashboard
 *   - Server webhook handler — maps purchase events back to entitlements
 *   - lib/xp-events.ts — purchase XP rewards reference these IDs
 *
 * Pricing is base AUD. Local pricing per jurisdiction is handled by
 * RevenueCat (which uses the App Store / Play Store equivalent in each
 * region). We don't compute conversions client-side.
 *
 * Spec source: docs/PAYWALL-DESIGN.md (locked 2026-05-09).
 */

export type ProductCategory = 'course' | 'companion_subscription' | 'credit_bundle';

export interface Product {
  id: string;
  /** Apple/Google store product ID. Same string used in RevenueCat. */
  storeId: string;
  /** Internal RevenueCat entitlement granted by this purchase. For
   *  consumables (courses, credit bundles), the entitlement is one-shot. */
  entitlement: string;
  category: ProductCategory;
  displayName: string;
  description: string;
  /** Base AUD price. Final price is whatever the store charges (may differ
   *  by region; RevenueCat handles localisation). Display this only as a
   *  hint until the SDK returns real pricing. */
  baseAud: number;
  /** XP awarded to the user on successful purchase. See lib/xp-events.ts. */
  xpReward: number;
  /** For courses, which language pair this unlocks. */
  courseId?: string;
  /** For subscriptions, what tier this represents. */
  tier?: 'text' | 'visual_low' | 'visual_high';
  /** For credit bundles, how many credits + of what kind. */
  credits?: { kind: 'text' | 'voice' | 'lipsync'; amount: number };
}

// ─── Courses (one-time purchase per language) ──────────────────────────────

const COURSES: Product[] = [
  { id: 'course_shona',      storeId: 'course_shona_v1',      entitlement: 'course_shona',      category: 'course', displayName: 'Learn Shona',        description: 'Full 100-lesson Shona course',        baseAud: 14.99, xpReward: 100, courseId: 'language-shona' },
  { id: 'course_ndebele',    storeId: 'course_ndebele_v1',    entitlement: 'course_ndebele',    category: 'course', displayName: 'Learn isiNdebele',   description: '110-lesson course with click primer', baseAud: 14.99, xpReward: 100, courseId: 'language-ndebele' },
  { id: 'course_french',     storeId: 'course_french_v1',     entitlement: 'course_french',     category: 'course', displayName: 'Learn French',       description: 'Full French curriculum',              baseAud: 14.99, xpReward: 100, courseId: 'language-french' },
  { id: 'course_chinese',    storeId: 'course_chinese_v1',    entitlement: 'course_chinese',    category: 'course', displayName: 'Learn Mandarin',     description: 'Mandarin Chinese with pinyin',        baseAud: 14.99, xpReward: 100, courseId: 'language-chinese' },
  { id: 'course_tagalog',    storeId: 'course_tagalog_v1',    entitlement: 'course_tagalog',    category: 'course', displayName: 'Learn Tagalog',      description: 'Filipino / Tagalog course',           baseAud: 14.99, xpReward: 100, courseId: 'language-tagalog' },
  { id: 'course_spanish',    storeId: 'course_spanish_v1',    entitlement: 'course_spanish',    category: 'course', displayName: 'Learn Spanish',      description: 'Castilian Spanish curriculum',        baseAud: 14.99, xpReward: 100, courseId: 'language-spanish' },
  { id: 'course_portuguese', storeId: 'course_portuguese_v1', entitlement: 'course_portuguese', category: 'course', displayName: 'Learn Portuguese',   description: 'European Portuguese course',          baseAud: 14.99, xpReward: 100, courseId: 'language-portuguese' },
  { id: 'course_hindi',      storeId: 'course_hindi_v1',      entitlement: 'course_hindi',      category: 'course', displayName: 'Learn Hindi',        description: 'Hindi with Devanagari',               baseAud: 14.99, xpReward: 100, courseId: 'language-hindi' },
  { id: 'course_japanese',   storeId: 'course_japanese_v1',   entitlement: 'course_japanese',   category: 'course', displayName: 'Learn Japanese',     description: 'Japanese with kana + kanji',          baseAud: 14.99, xpReward: 100, courseId: 'language-japanese' },
  { id: 'course_korean',     storeId: 'course_korean_v1',     entitlement: 'course_korean',     category: 'course', displayName: 'Learn Korean',       description: 'Korean with Hangul',                  baseAud: 14.99, xpReward: 100, courseId: 'language-korean' },
  { id: 'course_english',    storeId: 'course_english_v1',    entitlement: 'course_english',    category: 'course', displayName: 'Learn English',      description: 'English for non-native speakers',     baseAud: 14.99, xpReward: 100, courseId: 'language-english' },
];

// ─── AI Companion Subscriptions ────────────────────────────────────────────

const SUBSCRIPTIONS: Product[] = [
  {
    id: 'companion_text',
    storeId: 'companion_text_monthly_v1',
    entitlement: 'companion_text',
    category: 'companion_subscription',
    tier: 'text',
    displayName: 'Companion — Text',
    description: 'Unlimited text chat with any companion. 30 messages/day baseline.',
    baseAud: 2.99,
    xpReward: 100,
  },
  {
    id: 'companion_visual_low',
    storeId: 'companion_visual_low_monthly_v1',
    entitlement: 'companion_visual_low',
    category: 'companion_subscription',
    tier: 'visual_low',
    displayName: 'Companion — Visual',
    description: 'One low-tier visual avatar + 30 text msgs/day + 10 voice min/day.',
    baseAud: 5.99,
    xpReward: 250,
  },
  {
    id: 'companion_visual_high',
    storeId: 'companion_visual_high_monthly_v1',
    entitlement: 'companion_visual_high',
    category: 'companion_subscription',
    tier: 'visual_high',
    displayName: 'Companion — Premium',
    description: 'High-tier avatar with lipsync. 50 text msgs + 30 voice min + 5 lipsync clips per day.',
    baseAud: 11.99,
    xpReward: 500,
  },
];

// ─── AI Credit Bundles (consumables — top up usage) ────────────────────────

const CREDIT_BUNDLES: Product[] = [
  {
    id: 'credit_text_100',
    storeId: 'credit_text_100_v1',
    entitlement: 'credits_text',
    category: 'credit_bundle',
    displayName: '100 Text Credits',
    description: '100 extra text-AI messages on top of your daily quota.',
    baseAud: 1.99,
    xpReward: 30,
    credits: { kind: 'text', amount: 100 },
  },
  {
    id: 'credit_voice_30min',
    storeId: 'credit_voice_30min_v1',
    entitlement: 'credits_voice',
    category: 'credit_bundle',
    displayName: '30 Voice Minutes',
    description: '30 extra voice conversation minutes.',
    baseAud: 3.99,
    xpReward: 50,
    credits: { kind: 'voice', amount: 30 },
  },
  {
    id: 'credit_lipsync_5',
    storeId: 'credit_lipsync_5_v1',
    entitlement: 'credits_lipsync',
    category: 'credit_bundle',
    displayName: '5 Lipsync Clips',
    description: '5 lipsync video generations from your companion.',
    baseAud: 9.99,
    xpReward: 100,
    credits: { kind: 'lipsync', amount: 5 },
  },
];

export const ALL_PRODUCTS: Product[] = [...COURSES, ...SUBSCRIPTIONS, ...CREDIT_BUNDLES];

export const PRODUCTS_BY_ID: Record<string, Product> = Object.fromEntries(
  ALL_PRODUCTS.map(p => [p.id, p]),
);

export const PRODUCTS_BY_STORE_ID: Record<string, Product> = Object.fromEntries(
  ALL_PRODUCTS.map(p => [p.storeId, p]),
);

export function getProduct(id: string): Product | undefined {
  return PRODUCTS_BY_ID[id];
}

export function getCoursesForSale(): Product[] {
  return COURSES;
}

export function getSubscriptionTiers(): Product[] {
  return SUBSCRIPTIONS;
}

export function getCreditBundles(): Product[] {
  return CREDIT_BUNDLES;
}
