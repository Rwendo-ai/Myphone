/**
 * Canonical product catalogue. Single source of truth for:
 *   - The plans / paywall screen UI
 *   - lib/purchases.ts (RevenueCat wrapper) — maps these IDs to
 *     RevenueCat product IDs from the dashboard
 *   - Server webhook handler — maps purchase events back to entitlements
 *   - lib/xp-events.ts — purchase XP rewards reference these IDs
 *
 * Pricing model (locked 2026-05-10):
 *   - Travel section is FREE for everyone (no paywall).
 *   - Courses are FREE with any Pro tier — we built them, no marginal cost.
 *   - Free tier: 2 free modules (20 lessons) of the user's first chosen
 *     course + 3 free AI text messages per lesson.
 *   - AI is the real cost driver, so Pro caps daily AI usage and heavy users
 *     buy credit packs.
 *
 * Pricing is base AUD. Local pricing per jurisdiction is handled by
 * RevenueCat (which uses the App Store / Play Store equivalent in each
 * region). We don't compute conversions client-side.
 *
 * Spec source: docs/PAYWALL-DESIGN.md.
 */

export type ProductCategory = 'pro_subscription' | 'pro_lifetime' | 'credit_bundle';

export interface Product {
  id: string;
  /** Apple/Google store product ID. Same string used in RevenueCat. */
  storeId: string;
  /** Internal RevenueCat entitlement granted by this purchase. All Pro
   *  tiers grant the same `rwendo_pro` entitlement; the difference is
   *  billing cadence and price. Credit bundles grant `credits_text`. */
  entitlement: string;
  category: ProductCategory;
  displayName: string;
  description: string;
  /** Base AUD price. Final price is whatever the store charges (may differ
   *  by region; RevenueCat handles localisation). Display this only as a
   *  hint until the SDK returns real pricing. */
  baseAud: number;
  /** XP awarded on successful purchase. See lib/xp-events.ts. */
  xpReward: number;
  /** For subscriptions, billing period in days for display ("/ month",
   *  "/ year"). 0 for lifetime. */
  periodDays?: number;
  /** For credit bundles, how many text-AI messages this grants. */
  credits?: number;
  /** Marketing flag — whether to badge as the recommended option. */
  recommended?: boolean;
}

// ─── Rwendo Pro (the only subscription) ────────────────────────────────────
//
// Pro grants:
//   - All courses unlocked (every language + every Build Yourself track)
//   - AI text companion in course-companion mode (~50 messages/day soft cap)
//   - Travel section (already free; just no nag screens)
//
// Three billing options, all granting the same `rwendo_pro` entitlement:
//   - Monthly: A$9.99/mo
//   - Yearly:  A$79/yr (33% off — the conversion driver)
//   - Lifetime: A$199 once (cap to first 1000 buyers — urgency)

const PRO_TIERS: Product[] = [
  {
    id: 'pro_monthly',
    storeId: 'rwendo_pro_monthly_v1',
    entitlement: 'rwendo_pro',
    category: 'pro_subscription',
    displayName: 'Pro · Monthly',
    description: 'All courses · AI companion · 50 msgs/day',
    baseAud: 9.99,
    xpReward: 100,
    periodDays: 30,
  },
  {
    id: 'pro_yearly',
    storeId: 'rwendo_pro_yearly_v1',
    entitlement: 'rwendo_pro',
    category: 'pro_subscription',
    displayName: 'Pro · Yearly',
    description: 'All courses · AI companion · best value (33% off)',
    baseAud: 79.00,
    xpReward: 1200,
    periodDays: 365,
    recommended: true,
  },
  {
    id: 'pro_lifetime',
    storeId: 'rwendo_pro_lifetime_v1',
    entitlement: 'rwendo_pro',
    category: 'pro_lifetime',
    displayName: 'Pro · Lifetime',
    description: 'Pay once. Pro forever. Limited to first 1000 buyers.',
    baseAud: 199.00,
    xpReward: 3000,
    periodDays: 0,
  },
];

// ─── AI Credit Bundles (consumables) ───────────────────────────────────────
//
// For users who exceed Pro's 50/day cap or want unlimited course-companion
// + free-roam companion conversations. Credits are decremented per AI text
// message used beyond the daily cap. Voice / lipsync are out of scope for
// v1 (handled by the visual avatar tiers in a later release).

const CREDIT_BUNDLES: Product[] = [
  {
    id: 'credits_100',
    storeId: 'rwendo_credits_100_v1',
    entitlement: 'credits_text',
    category: 'credit_bundle',
    displayName: '100 AI Credits',
    description: '100 extra messages — small top-up.',
    baseAud: 4.99,
    xpReward: 50,
    credits: 100,
  },
  {
    id: 'credits_300',
    storeId: 'rwendo_credits_300_v1',
    entitlement: 'credits_text',
    category: 'credit_bundle',
    displayName: '300 AI Credits',
    description: '300 messages — best value bundle.',
    baseAud: 9.99,
    xpReward: 150,
    credits: 300,
    recommended: true,
  },
  {
    id: 'credits_750',
    storeId: 'rwendo_credits_750_v1',
    entitlement: 'credits_text',
    category: 'credit_bundle',
    displayName: '750 AI Credits',
    description: '750 messages — for heavy users.',
    baseAud: 19.99,
    xpReward: 400,
    credits: 750,
  },
];

export const ALL_PRODUCTS: Product[] = [...PRO_TIERS, ...CREDIT_BUNDLES];

export const PRODUCTS_BY_ID: Record<string, Product> = Object.fromEntries(
  ALL_PRODUCTS.map((p) => [p.id, p]),
);

export const PRODUCTS_BY_STORE_ID: Record<string, Product> = Object.fromEntries(
  ALL_PRODUCTS.map((p) => [p.storeId, p]),
);

/** The RevenueCat entitlement that grants Pro access. Single source of
 *  truth — used by lib/entitlements.ts and useEntitlements consumers. */
export const PRO_ENTITLEMENT_ID = 'rwendo_pro';

/** The credits entitlement (consumable balance, server-tracked). */
export const CREDITS_ENTITLEMENT_ID = 'credits_text';

export function getProduct(id: string): Product | undefined {
  return PRODUCTS_BY_ID[id];
}

export function getProTiers(): Product[] {
  return PRO_TIERS;
}

export function getCreditBundles(): Product[] {
  return CREDIT_BUNDLES;
}
