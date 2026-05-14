import { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useEntitlements } from '../hooks/useEntitlements';
import { useCart } from '../lib/CartContext';
import { presentPaywall } from '../lib/purchases';
import {
  getTokenPacks,
  getCourseSubscriptions,
  getCompanionUnlocks,
  type Product,
} from '../data/products';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';

/**
 * Cart screen — single surface for every paid action.
 *
 * Two-tab layout (v5, 2026-05-14):
 *   • Items — line items the user has added but not yet purchased,
 *             with a quick add-tokens strip at the top + subtotal +
 *             checkout button. Default tab when cart has items.
 *   • Shop  — the product browse surface. "Add companion tokens"
 *             heading with three compact squares (1,000/$10,
 *             5,500/$50, 12,000/$100). Default tab when cart is empty.
 *
 * Future: a Companions section will appear in the Shop tab once the
 * unlock catalogue is wired (currently companions are gated by tier;
 * v6 switches to $5 one-off purchase or 5,000 XP redemption per
 * companion).
 */
type Tab = 'items' | 'shop';

export default function CartScreen() {
  const { tier, hasPaidTier, balance } = useEntitlements();
  const cart = useCart();

  // Open to Items if the cart has anything; otherwise Shop.
  const [tab, setTab] = useState<Tab>(cart.count > 0 ? 'items' : 'shop');
  const [busy, setBusy] = useState(false);

  const tokenPacks = useMemo(() => getTokenPacks(), []);
  const courseSubs = useMemo(() => getCourseSubscriptions(), []);
  const companions = useMemo(() => getCompanionUnlocks(), []);

  const handleCheckout = async () => {
    if (busy || cart.count === 0) return;
    setBusy(true);
    try {
      const ok = await presentPaywall();
      if (!ok) {
        Alert.alert(
          'Coming soon',
          'In-app purchases are being finalised with the App Store. Your cart is saved — check back shortly.',
        );
      } else {
        cart.clear();
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={8}>
          <Text style={styles.backText}>←</Text>
        </Pressable>
        <Text style={styles.title}>Cart</Text>
      </View>

      {/* Tab switcher */}
      <View style={styles.tabBar}>
        <TabButton
          label={`Items${cart.count > 0 ? ` (${cart.count})` : ''}`}
          active={tab === 'items'}
          onPress={() => setTab('items')}
        />
        <TabButton label="Shop" active={tab === 'shop'} onPress={() => setTab('shop')} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Status card — shown on both tabs */}
        <View style={styles.statusCard}>
          <View style={styles.statusRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.statusLabel}>Your plan</Text>
              <Text style={styles.statusValue}>{tier === 'free' ? 'Free' : `Pro · ${formatTierLabel(tier)}`}</Text>
            </View>
            <View style={styles.balancePill}>
              <Text style={styles.balanceLabel}>Tokens</Text>
              <Text style={styles.balanceValue}>{balance.toLocaleString()}</Text>
            </View>
          </View>
          {!hasPaidTier && cart.count === 0 && (
            <Text style={styles.statusHint}>
              Pay-as-you-go tokens for talking with your companions. One balance, used across text, voice, and lipsync.
            </Text>
          )}
        </View>

        {tab === 'items' ? (
          <ItemsTab cart={cart} tokenPacks={tokenPacks} onCheckout={handleCheckout} busy={busy} />
        ) : (
          <ShopTab tokenPacks={tokenPacks} courseSubs={courseSubs} companions={companions} />
        )}

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function TabButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.tabBtn, active && styles.tabBtnActive]}>
      <Text style={[styles.tabBtnText, active && styles.tabBtnTextActive]}>{label}</Text>
    </Pressable>
  );
}

// ─── Shop tab ──────────────────────────────────────────────────────────────

function ShopTab({
  tokenPacks,
  courseSubs,
  companions,
}: {
  tokenPacks: Product[];
  courseSubs: Product[];
  companions: Product[];
}) {
  const cart = useCart();

  // Course + companion dropdown open state
  const [coursesOpen, setCoursesOpen]       = useState(false);
  const [companionsOpen, setCompanionsOpen] = useState(false);

  // Stub: first-course + first-companion are server-persisted (next session).
  // For now, the empty-state buttons are wired to open the same dropdown.
  const hasFreeCourse    = false;
  const hasFreeCompanion = false;

  return (
    <View>
      {/* Tokens */}
      <Text style={styles.sectionTitle}>Add companion tokens</Text>
      <Text style={styles.sectionSub}>
        Tap a pack to add it to your cart. Tokens pay for all AI use — text, voice, lipsync, lipsync plus. Never expire.
      </Text>
      <View style={styles.squareGrid}>
        {tokenPacks.map((p) => (
          <TokenSquare
            key={p.id}
            product={p}
            inCart={cart.has(p.id)}
            onPress={() => cart.add(p.id)}
          />
        ))}
      </View>

      {/* Courses */}
      <Text style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>Subscribe to a course</Text>
      <Text style={styles.sectionSub}>
        $9.99/month per course. Unlocks all lessons + the in-course AI tutor (Tendai). First 2 units of any course are free without AI.
      </Text>
      {!hasFreeCourse ? (
        <Pressable
          style={({ pressed }) => [styles.bigCta, pressed && styles.bigCtaPressed]}
          onPress={() => setCoursesOpen((v) => !v)}
        >
          <Text style={styles.bigCtaIcon}>🎓</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.bigCtaTitle}>Start your free trial</Text>
            <Text style={styles.bigCtaSub}>Pick any course — first 2 units free, no card needed.</Text>
          </View>
          <Text style={styles.bigCtaChevron}>{coursesOpen ? '▴' : '▾'}</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [styles.ctaRow, pressed && styles.ctaRowPressed]}
          onPress={() => setCoursesOpen((v) => !v)}
        >
          <Text style={styles.ctaRowTitle}>Buy another course</Text>
          <Text style={styles.ctaRowChevron}>{coursesOpen ? '▴' : '▾'}</Text>
        </Pressable>
      )}
      {coursesOpen && (
        <View style={styles.dropdown}>
          {courseSubs.map((p) => (
            <CatalogRow
              key={p.id}
              product={p}
              inCart={cart.has(p.id)}
              priceLabel={`A$${p.baseAud.toFixed(2)} / mo`}
              altLabel={p.xpPrice ? `or ${p.xpPrice.toLocaleString()} XP` : undefined}
              onPress={() => cart.add(p.id)}
            />
          ))}
        </View>
      )}

      {/* Companions */}
      <Text style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>Unlock a companion</Text>
      <Text style={styles.sectionSub}>
        Rwen + your first chosen companion are free. Any additional companion is $4.99 one-time or 4,990 tokens.
      </Text>
      {!hasFreeCompanion ? (
        <Pressable
          style={({ pressed }) => [styles.bigCta, pressed && styles.bigCtaPressed]}
          onPress={() => setCompanionsOpen((v) => !v)}
        >
          <Text style={styles.bigCtaIcon}>✨</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.bigCtaTitle}>Choose your companion</Text>
            <Text style={styles.bigCtaSub}>One free with token purchase. Locks on first chat.</Text>
          </View>
          <Text style={styles.bigCtaChevron}>{companionsOpen ? '▴' : '▾'}</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [styles.ctaRow, pressed && styles.ctaRowPressed]}
          onPress={() => setCompanionsOpen((v) => !v)}
        >
          <Text style={styles.ctaRowTitle}>Buy another companion</Text>
          <Text style={styles.ctaRowChevron}>{companionsOpen ? '▴' : '▾'}</Text>
        </Pressable>
      )}
      {companionsOpen && (
        <View style={styles.dropdown}>
          {companions.map((p) => (
            <CatalogRow
              key={p.id}
              product={p}
              inCart={cart.has(p.id)}
              priceLabel={`A$${p.baseAud.toFixed(2)}`}
              altLabel="or 4,990 tokens"
              onPress={() => cart.add(p.id)}
            />
          ))}
        </View>
      )}
    </View>
  );
}

function CatalogRow({
  product,
  inCart,
  priceLabel,
  altLabel,
  onPress,
}: {
  product: Product;
  inCart: boolean;
  priceLabel: string;
  altLabel?: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.catalogRow,
        inCart && styles.catalogRowInCart,
        pressed && !inCart && styles.catalogRowPressed,
      ]}
      onPress={onPress}
      disabled={inCart}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.catalogTitle}>{product.displayName}</Text>
        {altLabel && <Text style={styles.catalogAlt}>{altLabel}</Text>}
      </View>
      <View style={styles.catalogRight}>
        <Text style={styles.catalogPrice}>{priceLabel}</Text>
        <Text style={inCart ? styles.catalogInCart : styles.catalogAdd}>
          {inCart ? 'In cart ✓' : 'Add'}
        </Text>
      </View>
    </Pressable>
  );
}

function TokenSquare({
  product,
  inCart,
  onPress,
}: {
  product: Product;
  inCart: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.square,
        product.recommended && styles.squareRecommended,
        inCart && styles.squareInCart,
        pressed && styles.squarePressed,
      ]}
      onPress={onPress}
    >
      {product.recommended && <Text style={styles.squareBadge}>BEST</Text>}
      <Text
        style={styles.squareTokens}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.6}
      >
        {product.tokens?.toLocaleString()}
      </Text>
      <Text style={styles.squareTokensLabel}>tokens</Text>
      <View style={styles.squareDivider} />
      <Text
        style={styles.squarePrice}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.7}
      >
        A${product.baseAud.toFixed(0)}
      </Text>
      {inCart ? <Text style={styles.squareInCartLabel}>In cart ✓</Text> : <Text style={styles.squareAddLabel}>Tap to add</Text>}
    </Pressable>
  );
}

// ─── Items tab ─────────────────────────────────────────────────────────────

function ItemsTab({
  cart,
  tokenPacks,
  onCheckout,
  busy,
}: {
  cart: ReturnType<typeof useCart>;
  tokenPacks: Product[];
  onCheckout: () => void;
  busy: boolean;
}) {
  const lines = cart.getLines();

  if (lines.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyEmoji}>🛒</Text>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptySub}>
          Switch to Shop to browse token packs and companion unlocks.
        </Text>
      </View>
    );
  }

  return (
    <View>
      {/* Quick-add tokens strip — even when reviewing the cart you can add more */}
      <Text style={styles.sectionTitle}>Add companion tokens</Text>
      <View style={styles.squareGrid}>
        {tokenPacks.map((p) => (
          <TokenSquare
            key={p.id}
            product={p}
            inCart={cart.has(p.id)}
            onPress={() => cart.add(p.id)}
          />
        ))}
      </View>

      {/* Line items */}
      <Text style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>In your cart</Text>
      {lines.map(({ product, quantity }) => (
        <LineRow
          key={product.id}
          product={product}
          quantity={quantity}
          onMinus={() => cart.setQty(product.id, quantity - 1)}
          onPlus={() => cart.setQty(product.id, quantity + 1)}
          onRemove={() => cart.remove(product.id)}
        />
      ))}

      {/* Subtotal + checkout */}
      <View style={styles.subtotalCard}>
        <View style={styles.subtotalRow}>
          <Text style={styles.subtotalLabel}>Subtotal</Text>
          <Text style={styles.subtotalValue}>A${cart.subtotalAud.toFixed(2)}</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.checkoutBtn,
            (busy || cart.count === 0) && styles.checkoutBtnDisabled,
            pressed && !busy && styles.checkoutBtnPressed,
          ]}
          onPress={onCheckout}
          disabled={busy || cart.count === 0}
        >
          <Text style={styles.checkoutBtnText}>{busy ? 'Loading…' : 'Checkout'}</Text>
        </Pressable>
        <Pressable onPress={() => cart.clear()} hitSlop={8}>
          <Text style={styles.clearLink}>Clear cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

function LineRow({
  product,
  quantity,
  onMinus,
  onPlus,
  onRemove,
}: {
  product: Product;
  quantity: number;
  onMinus: () => void;
  onPlus: () => void;
  onRemove: () => void;
}) {
  const lineTotal = product.baseAud * quantity;
  return (
    <View style={styles.lineRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.lineTitle}>{product.displayName}</Text>
        {product.tokens && (
          <Text style={styles.lineSub}>{(product.tokens * quantity).toLocaleString()} tokens</Text>
        )}
      </View>
      <View style={styles.qtyControl}>
        <Pressable onPress={onMinus} hitSlop={6} style={styles.qtyBtn}>
          <Text style={styles.qtyBtnText}>−</Text>
        </Pressable>
        <Text style={styles.qtyValue}>{quantity}</Text>
        <Pressable onPress={onPlus} hitSlop={6} style={styles.qtyBtn}>
          <Text style={styles.qtyBtnText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.linePrice}>
        <Text style={styles.linePriceText}>A${lineTotal.toFixed(2)}</Text>
        <Pressable onPress={onRemove} hitSlop={6}>
          <Text style={styles.lineRemove}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function formatTierLabel(tier: string): string {
  switch (tier) {
    case 'text':         return 'Text';
    case 'voice':        return 'Voice';
    case 'lipsync_low':  return 'Lipsync · Low';
    case 'lipsync_high': return 'Lipsync · High';
    case 'ultra':        return 'Ultra';
    default:             return tier;
  }
}

// ─── Styles ────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.primary,
  },
  backBtn: { padding: Spacing.sm, marginRight: Spacing.sm },
  backText: { color: Colors.white, fontSize: FontSize.xxl },
  title: { color: Colors.white, fontSize: FontSize.xl, fontWeight: FontWeight.bold },

  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  tabBtn: {
    flex: 1,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabBtnActive: { borderBottomColor: Colors.primary },
  tabBtnText: { color: Colors.gray[500], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  tabBtnTextActive: { color: Colors.primary },

  scrollContent: { padding: Spacing.lg },

  statusCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  statusLabel: { color: Colors.gray[500], fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
  statusValue: { color: Colors.gray[800], fontSize: FontSize.xl, fontWeight: FontWeight.bold, marginTop: Spacing.xs },
  statusHint: { color: Colors.gray[600], fontSize: FontSize.sm, marginTop: Spacing.sm },
  balancePill: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
  },
  balanceLabel: { color: Colors.white, opacity: 0.8, fontSize: 10, fontWeight: FontWeight.bold, letterSpacing: 1 },
  balanceValue: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, marginTop: 2 },

  sectionTitle: { color: Colors.gray[800], fontSize: FontSize.lg, fontWeight: FontWeight.bold, marginBottom: Spacing.xs },
  sectionSub: { color: Colors.gray[500], fontSize: FontSize.sm, marginBottom: Spacing.md },

  squareGrid: { flexDirection: 'row', gap: Spacing.sm, justifyContent: 'space-between' },
  square: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    alignItems: 'center',
    minHeight: 130,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
  },
  squareRecommended: { borderColor: '#F4B400', borderWidth: 2 },
  squareInCart: { backgroundColor: '#EDF7EF', borderColor: '#3DA864', borderWidth: 2 },
  squarePressed: { opacity: 0.75 },
  squareBadge: {
    position: 'absolute',
    top: -8,
    backgroundColor: '#F4B400',
    color: Colors.white,
    fontSize: 9,
    fontWeight: FontWeight.bold,
    letterSpacing: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  squareTokens: { color: Colors.primary, fontSize: 22, fontWeight: FontWeight.bold, marginTop: 4 },
  squareTokensLabel: { color: Colors.gray[500], fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, marginTop: 1 },
  squareDivider: { width: 24, height: 1, backgroundColor: Colors.gray[200], marginVertical: Spacing.sm },
  squarePrice: { color: Colors.gray[800], fontSize: 22, fontWeight: FontWeight.bold },
  squareAddLabel: { color: Colors.gray[500], fontSize: 10, marginTop: 4 },
  squareInCartLabel: { color: '#3DA864', fontSize: 10, fontWeight: FontWeight.bold, marginTop: 4 },

  // Big CTA card for "Start your free trial" / "Choose your companion".
  bigCta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bigCtaPressed: { opacity: 0.85 },
  bigCtaIcon: { fontSize: 28 },
  bigCtaTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  bigCtaSub: { color: Colors.white, opacity: 0.85, fontSize: FontSize.xs, marginTop: 2 },
  bigCtaChevron: { color: Colors.white, fontSize: FontSize.lg },

  // Smaller "Buy another" toggle once user has their free pick.
  ctaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  ctaRowPressed: { opacity: 0.7 },
  ctaRowTitle: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  ctaRowChevron: { color: Colors.gray[500], fontSize: FontSize.lg },

  // Dropdown container — list of catalog products.
  dropdown: {
    marginTop: Spacing.sm,
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
  },
  catalogRow: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  catalogRowInCart: { backgroundColor: '#EDF7EF', borderColor: '#3DA864' },
  catalogRowPressed: { opacity: 0.7 },
  catalogTitle: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  catalogAlt: { color: Colors.gray[500], fontSize: FontSize.xs, marginTop: 2 },
  catalogRight: { alignItems: 'flex-end' },
  catalogPrice: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  catalogAdd: { color: Colors.primary, fontSize: FontSize.xs, fontWeight: FontWeight.bold, marginTop: 2 },
  catalogInCart: { color: '#3DA864', fontSize: FontSize.xs, fontWeight: FontWeight.bold, marginTop: 2 },

  emptyState: { alignItems: 'center', paddingVertical: Spacing.xxl },
  emptyEmoji: { fontSize: 56, marginBottom: Spacing.md },
  emptyTitle: { color: Colors.gray[800], fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  emptySub: { color: Colors.gray[500], fontSize: FontSize.sm, marginTop: Spacing.xs, textAlign: 'center', paddingHorizontal: Spacing.lg },

  lineRow: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  lineTitle: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  lineSub: { color: Colors.gray[500], fontSize: FontSize.xs, marginTop: 2 },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[100],
    borderRadius: BorderRadius.sm,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  qtyBtn: { paddingHorizontal: 8, paddingVertical: 2 },
  qtyBtnText: { color: Colors.primary, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  qtyValue: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold, minWidth: 18, textAlign: 'center' },
  linePrice: { alignItems: 'flex-end' },
  linePriceText: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  lineRemove: { color: Colors.gray[500], fontSize: FontSize.xs, marginTop: 2 },

  subtotalCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginTop: Spacing.lg,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  subtotalLabel: { color: Colors.gray[600], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  subtotalValue: { color: Colors.gray[800], fontSize: FontSize.xxl, fontWeight: FontWeight.bold },
  checkoutBtn: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  checkoutBtnDisabled: { opacity: 0.5 },
  checkoutBtnPressed: { opacity: 0.85 },
  checkoutBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  clearLink: { color: Colors.gray[500], fontSize: FontSize.sm, textAlign: 'center', marginTop: Spacing.md },
});
