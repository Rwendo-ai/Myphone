/**
 * Local cart state.
 *
 * Holds items the user has added but not yet checked out. Persists across
 * navigation but not across cold starts — losing a pending cart on app
 * restart is fine (and is what most ecommerce apps do for guest carts).
 *
 * Items are referenced by product id from `data/products.ts`. The cart
 * itself doesn't know about RevenueCat — it's a pure intent-collector.
 * The checkout button on the cart screen turns the cart into a series
 * of RC purchase calls (one per item).
 *
 * For token packs we allow multi-quantity (you can add three of the
 * $10 pack). For companion unlocks (Phase 2) quantity is always 1 —
 * you can't own the same companion twice.
 */

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ALL_PRODUCTS, type Product } from '../data/products';

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  items: CartLine[];
  /** Number of unique product lines (badge count). */
  count: number;
  /** Total quantity across all lines (e.g. for "3 items"). */
  totalUnits: number;
  /** Subtotal in AUD. */
  subtotalAud: number;
  add: (productId: string, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  has: (productId: string) => boolean;
  getLines: () => Array<{ product: Product; quantity: number }>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);

  const add = useCallback((productId: string, qty: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((l) => l.productId === productId);
      if (existing) {
        // Companion unlocks are quantity=1 max; everything else allows stacking.
        const isCompanion = productId.startsWith('companion_');
        if (isCompanion) return prev;
        return prev.map((l) =>
          l.productId === productId ? { ...l, quantity: l.quantity + qty } : l,
        );
      }
      return [...prev, { productId, quantity: qty }];
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setItems((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((l) => l.productId !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((l) => (l.productId === productId ? { ...l, quantity: qty } : l)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const has = useCallback((productId: string) => items.some((l) => l.productId === productId), [items]);

  const getLines = useCallback((): Array<{ product: Product; quantity: number }> => {
    return items
      .map((l) => {
        const product = ALL_PRODUCTS.find((p) => p.id === l.productId);
        return product ? { product, quantity: l.quantity } : null;
      })
      .filter((x): x is { product: Product; quantity: number } => x !== null);
  }, [items]);

  const { count, totalUnits, subtotalAud } = useMemo(() => {
    let units = 0;
    let aud = 0;
    for (const line of items) {
      const product = ALL_PRODUCTS.find((p) => p.id === line.productId);
      if (!product) continue;
      units += line.quantity;
      aud += product.baseAud * line.quantity;
    }
    return { count: items.length, totalUnits: units, subtotalAud: aud };
  }, [items]);

  const value: CartContextValue = {
    items,
    count,
    totalUnits,
    subtotalAud,
    add,
    remove,
    setQty,
    clear,
    has,
    getLines,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
