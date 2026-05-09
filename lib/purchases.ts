/**
 * RevenueCat SDK wrapper. STUBBED until SDK is installed.
 *
 * Once `react-native-purchases` is installed (`npx expo install
 * react-native-purchases`) and the RevenueCat dashboard is configured per
 * docs/PAYWALL-DESIGN.md §2, replace the stubs in this file with real
 * Purchases.* calls.
 *
 * The shape of the public API (initPurchases / getOfferings /
 * purchaseProduct / restorePurchases / getActiveEntitlements) won't change —
 * the rest of the app can already integrate against this.
 */

import type { Product } from '../data/products';
import { PRODUCTS_BY_ID } from '../data/products';

// ─── Types (mirror RevenueCat shapes — keep small) ──────────────────────────

export interface ActiveEntitlement {
  identifier: string;       // e.g. 'companion_text', 'course_shona'
  isActive: boolean;
  willRenew: boolean;
  periodType: 'normal' | 'trial' | 'intro';
  expirationDate: string | null;
  productIdentifier: string;
}

export interface PurchaseResult {
  success: boolean;
  product?: Product;
  errorMessage?: string;
  /** Was the user already subscribed / had this entitlement? */
  alreadyOwned?: boolean;
}

// ─── Public API ─────────────────────────────────────────────────────────────

let initialised = false;

export async function initPurchases(userId: string): Promise<void> {
  if (initialised) return;
  // TODO: Once SDK is installed:
  //   import Purchases from 'react-native-purchases';
  //   await Purchases.configure({
  //     apiKey: Platform.OS === 'ios'
  //       ? process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY!
  //       : process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY!,
  //     appUserID: userId,
  //   });
  initialised = true;
}

/** Pull the active offerings from RevenueCat. Used by the plans screen to
 *  show real local prices. Stub returns the catalogue with placeholder AUD
 *  prices. */
export async function getOfferings(): Promise<Product[]> {
  // TODO: Once SDK is installed:
  //   const offerings = await Purchases.getOfferings();
  //   const current = offerings.current;
  //   return current.availablePackages.map(pkg => ({
  //     ...PRODUCTS_BY_STORE_ID[pkg.product.identifier],
  //     localPriceString: pkg.product.priceString,
  //   }));
  return Object.values(PRODUCTS_BY_ID);
}

/** Trigger the platform purchase flow for one product. Returns success +
 *  the product on completion. Stub always returns failure for now. */
export async function purchaseProduct(productId: string): Promise<PurchaseResult> {
  const product = PRODUCTS_BY_ID[productId];
  if (!product) return { success: false, errorMessage: 'Unknown product' };

  // TODO: Once SDK is installed:
  //   try {
  //     const offerings = await Purchases.getOfferings();
  //     const pkg = offerings.current?.availablePackages.find(
  //       (p) => p.product.identifier === product.storeId,
  //     );
  //     if (!pkg) throw new Error('Package not found in current offering');
  //     const { customerInfo } = await Purchases.purchasePackage(pkg);
  //     return { success: true, product };
  //   } catch (e: any) {
  //     if (e.userCancelled) return { success: false, errorMessage: 'Cancelled' };
  //     return { success: false, errorMessage: e.message };
  //   }

  return {
    success: false,
    errorMessage: 'Purchases SDK not configured yet — see docs/PAYWALL-DESIGN.md',
  };
}

/** Standard "Restore Purchases" button handler. Required by Apple. */
export async function restorePurchases(): Promise<PurchaseResult> {
  // TODO: Once SDK is installed:
  //   try {
  //     const customerInfo = await Purchases.restorePurchases();
  //     return { success: true };
  //   } catch (e: any) {
  //     return { success: false, errorMessage: e.message };
  //   }
  return { success: false, errorMessage: 'Purchases SDK not configured yet' };
}

/** Read the user's currently-active entitlements. Used by `lib/entitlements.ts`
 *  to gate premium features. Stub returns empty (everyone is free-tier). */
export async function getActiveEntitlements(): Promise<ActiveEntitlement[]> {
  // TODO: Once SDK is installed:
  //   const customerInfo = await Purchases.getCustomerInfo();
  //   return Object.values(customerInfo.entitlements.active).map((e) => ({
  //     identifier: e.identifier,
  //     isActive: e.isActive,
  //     willRenew: e.willRenew,
  //     periodType: e.periodType,
  //     expirationDate: e.expirationDate,
  //     productIdentifier: e.productIdentifier,
  //   }));
  return [];
}

/** Listener — call once at app boot to keep entitlements in sync when
 *  RevenueCat fires an update (e.g. mid-session refresh after webhook). */
export function listenEntitlements(_handler: (entitlements: ActiveEntitlement[]) => void): () => void {
  // TODO: Once SDK is installed:
  //   const cb = (info: CustomerInfo) => handler(mapEntitlements(info));
  //   Purchases.addCustomerInfoUpdateListener(cb);
  //   return () => Purchases.removeCustomerInfoUpdateListener(cb);
  return () => { /* no-op stub */ };
}
