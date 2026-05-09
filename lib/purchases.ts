/**
 * RevenueCat SDK wrapper. Real implementation now that
 * `react-native-purchases` is installed.
 *
 * Initialise at app boot (after the user is logged in so we can pass
 * appUserID = user.id — keeps RevenueCat customer rows linked to our
 * Supabase auth users). See app/_layout.tsx for the call site.
 *
 * Public API:
 *   - initPurchases(userId)
 *   - getOfferings()              — read available products with localised pricing
 *   - presentPaywall()            — show RevenueCat's hosted paywall UI
 *   - presentCustomerCenter()     — show subscription management UI
 *   - purchaseProduct(storeId)    — programmatic purchase (alternative to paywall)
 *   - restorePurchases()          — required by Apple
 *   - getActiveEntitlements()     — read current entitlements
 *   - hasEntitlement(id)          — quick check helper
 *   - listenEntitlements(handler) — subscribe to changes
 */

import { Platform } from 'react-native';
import Purchases, {
  LOG_LEVEL,
  type CustomerInfo,
  type PurchasesPackage,
} from 'react-native-purchases';
import RevenueCatUI, { PAYWALL_RESULT } from 'react-native-purchases-ui';

// ─── Public types ──────────────────────────────────────────────────────────

export interface ActiveEntitlement {
  identifier: string;
  isActive: boolean;
  willRenew: boolean;
  periodType: string;
  expirationDate: string | null;
  productIdentifier: string;
}

export interface PurchaseResult {
  success: boolean;
  errorMessage?: string;
  cancelled?: boolean;
}

export interface OfferingProduct {
  identifier: string;
  productIdentifier: string;
  priceString: string;
  title: string;
  description: string;
}

// ─── State ──────────────────────────────────────────────────────────────────

let initialised = false;

// ─── Init ──────────────────────────────────────────────────────────────────

/**
 * Configure the SDK. Call once at app boot, after the user is signed in.
 * Idempotent — calling twice is safe.
 *
 * Pass the Supabase user.id as `userId` so RevenueCat's appUserID matches
 * our auth identity. This lets the webhook handler look up the user by
 * the same id when receiving purchase events.
 */
export async function initPurchases(userId: string | null): Promise<void> {
  const iosKey     = process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY ?? '';
  const androidKey = process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY ?? '';

  if (Platform.OS === 'ios' && !iosKey) {
    console.warn('[purchases] EXPO_PUBLIC_REVENUECAT_IOS_KEY not set — purchases disabled');
    return;
  }
  if (Platform.OS === 'android' && !androidKey) {
    console.warn('[purchases] EXPO_PUBLIC_REVENUECAT_ANDROID_KEY not set — purchases disabled');
    return;
  }

  // Verbose logs in dev only — production should set ERROR or WARN.
  if (__DEV__) Purchases.setLogLevel(LOG_LEVEL.VERBOSE);

  const apiKey = Platform.OS === 'ios' ? iosKey : androidKey;

  if (!initialised) {
    Purchases.configure({ apiKey, appUserID: userId ?? undefined });
    initialised = true;
  } else if (userId) {
    // Subsequent calls — re-identify if the userId changed (sign-out + sign-in).
    try {
      await Purchases.logIn(userId);
    } catch (e) {
      console.warn('[purchases] logIn failed', e);
    }
  }
}

/** Call on sign-out so the next user starts with a fresh anonymous session. */
export async function logoutPurchases(): Promise<void> {
  if (!initialised) return;
  try {
    await Purchases.logOut();
  } catch (e) {
    console.warn('[purchases] logOut failed', e);
  }
}

// ─── Offerings ─────────────────────────────────────────────────────────────

/**
 * Read the current offering's available packages with localised pricing.
 * Used to render a custom plans UI; the hosted paywall reads this internally
 * so you don't need to call it before presentPaywall().
 */
export async function getOfferings(): Promise<OfferingProduct[]> {
  try {
    const offerings = await Purchases.getOfferings();
    const current = offerings.current;
    if (!current) return [];
    return current.availablePackages.map((pkg: PurchasesPackage) => ({
      identifier: pkg.identifier,
      productIdentifier: pkg.product.identifier,
      priceString: pkg.product.priceString,
      title: pkg.product.title,
      description: pkg.product.description,
    }));
  } catch (e) {
    console.warn('[purchases] getOfferings failed', e);
    return [];
  }
}

// ─── Paywall ───────────────────────────────────────────────────────────────

/**
 * Present RevenueCat's hosted paywall UI. Configure the paywall in the
 * RevenueCat dashboard (Project → Paywalls).
 *
 * Returns true if the user purchased or restored, false if cancelled / error.
 */
export async function presentPaywall(): Promise<boolean> {
  try {
    const result = await RevenueCatUI.presentPaywall();
    switch (result) {
      case PAYWALL_RESULT.PURCHASED:
      case PAYWALL_RESULT.RESTORED:
        return true;
      case PAYWALL_RESULT.NOT_PRESENTED:
      case PAYWALL_RESULT.ERROR:
      case PAYWALL_RESULT.CANCELLED:
      default:
        return false;
    }
  } catch (e) {
    console.warn('[purchases] presentPaywall failed', e);
    return false;
  }
}

/**
 * Same as presentPaywall but only shows the paywall if the user does NOT
 * already have the entitlement. Use this when entering a gated screen.
 */
export async function presentPaywallIfNeeded(entitlementId: string): Promise<boolean> {
  try {
    const result = await RevenueCatUI.presentPaywallIfNeeded({
      requiredEntitlementIdentifier: entitlementId,
    });
    return result === PAYWALL_RESULT.PURCHASED || result === PAYWALL_RESULT.RESTORED;
  } catch (e) {
    console.warn('[purchases] presentPaywallIfNeeded failed', e);
    return false;
  }
}

/**
 * Present the Customer Center — a hosted UI for managing the user's
 * subscription (plan, billing, cancellation, support). Required by
 * Apple's App Store guidelines for any subscription app, and a much
 * better UX than rolling your own.
 *
 * Add an "Account" / "Manage subscription" button to the Profile screen
 * that calls this.
 */
export async function presentCustomerCenter(): Promise<void> {
  try {
    await RevenueCatUI.presentCustomerCenter();
  } catch (e) {
    console.warn('[purchases] presentCustomerCenter failed', e);
  }
}

// ─── Direct purchase (alt to paywall UI) ───────────────────────────────────

/**
 * Programmatic purchase. Most apps just use the hosted paywall (see
 * presentPaywall) — this is for cases where you want a custom UI.
 */
export async function purchaseProduct(storeId: string): Promise<PurchaseResult> {
  try {
    const offerings = await Purchases.getOfferings();
    const current = offerings.current;
    if (!current) return { success: false, errorMessage: 'No current offering' };

    const pkg = current.availablePackages.find(p => p.product.identifier === storeId);
    if (!pkg) return { success: false, errorMessage: `Product ${storeId} not in current offering` };

    await Purchases.purchasePackage(pkg);
    return { success: true };
  } catch (e: any) {
    if (e?.userCancelled) return { success: false, cancelled: true };
    return { success: false, errorMessage: e?.message ?? 'Purchase failed' };
  }
}

/** Standard "Restore Purchases" handler. Required by Apple. */
export async function restorePurchases(): Promise<PurchaseResult> {
  try {
    await Purchases.restorePurchases();
    return { success: true };
  } catch (e: any) {
    return { success: false, errorMessage: e?.message ?? 'Restore failed' };
  }
}

// ─── Entitlements ──────────────────────────────────────────────────────────

function mapEntitlements(info: CustomerInfo): ActiveEntitlement[] {
  return Object.values(info.entitlements.active).map((e) => ({
    identifier: e.identifier,
    isActive: e.isActive,
    willRenew: e.willRenew,
    periodType: String(e.periodType),
    expirationDate: e.expirationDate,
    productIdentifier: e.productIdentifier,
  }));
}

export async function getActiveEntitlements(): Promise<ActiveEntitlement[]> {
  try {
    const info = await Purchases.getCustomerInfo();
    return mapEntitlements(info);
  } catch (e) {
    console.warn('[purchases] getCustomerInfo failed', e);
    return [];
  }
}

/** Quick check: does the user currently have a given entitlement?
 *  Use 'Rwendo Pro' for the all-access pro tier, or course-specific ids
 *  once we configure individual courses. */
export async function hasEntitlement(entitlementId: string): Promise<boolean> {
  try {
    const info = await Purchases.getCustomerInfo();
    return info.entitlements.active[entitlementId] !== undefined;
  } catch {
    return false;
  }
}

/** Subscribe to entitlement changes. Returns an unsubscribe function. */
export function listenEntitlements(handler: (entitlements: ActiveEntitlement[]) => void): () => void {
  const cb = (info: CustomerInfo) => handler(mapEntitlements(info));
  Purchases.addCustomerInfoUpdateListener(cb);
  return () => Purchases.removeCustomerInfoUpdateListener(cb);
}
