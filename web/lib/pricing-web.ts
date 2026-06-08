/**
 * Web pricing layer — platform-specific overlay over the canonical product
 * catalogue (data/products.ts on mobile, products-web.ts here on web).
 *
 * ─── WHY THIS EXISTS ────────────────────────────────────────────────────────
 * Web and mobile have DIFFERENT pricing realities:
 *
 *   App Store / Play Store (mobile):
 *     • Take ~30% commission (15% on subscriptions after y1).
 *     • Display the locally-taxed price (Apple/Google handle VAT/GST collection).
 *     • Localise per-region from a price-tier table.
 *
 *   Stripe / direct pay (web):
 *     • Zero platform commission — we keep ~97% after Stripe's 2.9%+30¢.
 *     • Tax NOT auto-collected unless we enable Stripe Tax (we have not).
 *     • Charges in whatever currency we set on the line item.
 *
 * For v1 we deliberately MIRROR the mobile AUD prices on web. Users see the
 * same number whether they buy on iOS, Android, or web. This trades margin
 * for trust — if a user notices a different price on web vs mobile, they'll
 * (correctly) feel manipulated.
 *
 * But the price LIVES in this file so we can vary it later. Plausible future
 * moves:
 *   • Slight discount on web ("save the App Store cut") — 10-20% off.
 *   • Tax-inclusive vs tax-exclusive display once Stripe Tax is on.
 *   • USD pricing for non-AU customers (currently we only quote AUD).
 *
 * The shape is: each product → { aud, usd, displayPriceAud }. The webhook
 * and Checkout session use the AUD number (Stripe is configured for AUD);
 * the USD number is purely informational / future-proofing.
 *
 * ─── PRICING DECISIONS (locked 2026-06-08) ──────────────────────────────────
 *   Token packs:        match mobile exactly. $10, $50, $100 AUD.
 *   Companion unlock:   match mobile exactly. $4.99 AUD each.
 *   Companion build:    match mobile exactly. $39.99 AUD one-time.
 *
 * USD is computed at a static 0.66 AUD→USD rate (mid-2026 ballpark) for
 * display only. We do NOT charge in USD — the Stripe session is AUD.
 *
 * Update this file (and products-web.ts) when prices change. The mobile
 * canonical file at data/products.ts is the long-term anchor.
 */

import { PRODUCTS_WEB, type WebProduct } from './products-web';

const AUD_TO_USD = 0.66;

export interface WebPrice {
  /** Price the user pays in AUD (this is what Stripe charges). */
  aud: number;
  /** Display-only USD equivalent. NOT what Stripe charges. */
  usd: number;
  /** Pre-formatted AUD price string for cards/buttons. */
  displayPriceAud: string;
}

/**
 * Resolve the web price for a product id. Returns null for unknown ids so
 * callers can decide whether to 400 or fall back.
 *
 * v1: identical to the AUD base price defined in products-web.ts. The
 * indirection exists so v2 can vary by platform without touching the
 * catalogue.
 */
export function webPriceFor(productId: string): WebPrice | null {
  const product: WebProduct | undefined = PRODUCTS_WEB.find((p) => p.id === productId);
  if (!product) return null;
  return {
    aud: product.priceAud,
    usd: Math.round(product.priceAud * AUD_TO_USD * 100) / 100,
    displayPriceAud: formatAud(product.priceAud),
  };
}

/** "A$10" for whole-dollar amounts, "A$4.99" otherwise. */
export function formatAud(amount: number): string {
  if (Number.isInteger(amount)) return `A$${amount}`;
  return `A$${amount.toFixed(2)}`;
}

/** Stripe wants amounts as integer cents. Centralised so we don't fan
 *  rounding bugs across the codebase. */
export function priceAudToStripeCents(amountAud: number): number {
  return Math.round(amountAud * 100);
}
