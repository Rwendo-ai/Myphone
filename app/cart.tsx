import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useEntitlements } from '../hooks/useEntitlements';
import { presentPaywall } from '../lib/purchases';
import {
  getMonthlyTiers,
  getYearlyTiers,
  getLifetimeProducts,
  getTokenPacks,
  type Product,
} from '../data/products';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';

/**
 * Cart screen — single surface for every paid action in the app.
 *
 * What's in here:
 *   - Your current plan + token balance (top card)
 *   - Pro tiers (monthly Text → Voice → Lipsync Low → Lipsync High → Ultra,
 *     plus yearly options on the top two, plus the Lifetime SKU)
 *   - AI token packs (small / medium / large)
 *
 * Tapping any product calls RevenueCat's hosted paywall (presentPaywall)
 * which handles the actual purchase flow. Once IAP products are wired up
 * in App Store Connect + Play Console + RevenueCat dashboard, this screen
 * will surface live store-localised pricing instead of the AUD base price.
 */
export default function CartScreen() {
  const { tier, hasPaidTier, isLifetimeBuyer } = useEntitlements();
  const [busy, setBusy] = useState(false);

  const handleBuy = async (product: Product) => {
    if (busy) return;
    setBusy(true);
    try {
      const ok = await presentPaywall();
      if (!ok) {
        // Paywall not configured yet OR user cancelled — show friendly hint.
        Alert.alert(
          'Coming soon',
          'In-app purchases are being finalised with the App Store. Check back shortly.',
        );
      }
    } finally {
      setBusy(false);
    }
  };

  const tierProducts = getMonthlyTiers();
  const yearlyProducts = getYearlyTiers();
  const lifetimeProducts = getLifetimeProducts();
  const tokenPacks = getTokenPacks();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={8}>
          <Text style={styles.backText}>←</Text>
        </Pressable>
        <Text style={styles.title}>Cart</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Current state card */}
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Your plan</Text>
          <Text style={styles.statusValue}>{tier === 'free' ? 'Free' : `Pro · ${formatTierLabel(tier)}`}</Text>
          {isLifetimeBuyer && (
            <Text style={styles.lifetimeBadge}>★ Lifetime · 15% off all token packs</Text>
          )}
          {!hasPaidTier && (
            <Text style={styles.statusHint}>
              Unlock all courses, the AI companion, and your first $2 of tokens — from A$4/month.
            </Text>
          )}
        </View>

        {/* Pro tiers — monthly */}
        <Text style={styles.sectionTitle}>Pro · Monthly</Text>
        <Text style={styles.sectionSub}>
          Pick the tier that matches how you want to use the AI companion. Every tier includes all courses + travel.
        </Text>
        {tierProducts.map((p) => (
          <ProductRow key={p.id} product={p} onPress={() => handleBuy(p)} disabled={busy} />
        ))}

        {/* Yearly variants */}
        <Text style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>Pro · Yearly</Text>
        <Text style={styles.sectionSub}>
          Yearly billing — about 33% off the monthly equivalent. Available on the top two tiers.
        </Text>
        {yearlyProducts.map((p) => (
          <ProductRow key={p.id} product={p} onPress={() => handleBuy(p)} disabled={busy} />
        ))}

        {/* Lifetime */}
        <Text style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>Lifetime</Text>
        <Text style={styles.sectionSub}>
          Pay once. Ultra forever. Lifetime buyers also get 15% off every future token pack.
        </Text>
        {lifetimeProducts.map((p) => (
          <ProductRow key={p.id} product={p} onPress={() => handleBuy(p)} disabled={busy} />
        ))}

        {/* Token packs */}
        <Text style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>AI Token Packs</Text>
        <Text style={styles.sectionSub}>
          Top-up for heavy AI usage. Each tier comes with a monthly token allowance; packs add to that balance.
        </Text>
        {tokenPacks.map((p) => (
          <ProductRow key={p.id} product={p} onPress={() => handleBuy(p)} disabled={busy} />
        ))}

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

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

function ProductRow({ product, onPress, disabled }: { product: Product; onPress: () => void; disabled: boolean }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.row,
        product.recommended && styles.rowRecommended,
        pressed && !disabled && styles.rowPressed,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {product.recommended && <Text style={styles.recommendedTag}>Recommended</Text>}
      <View style={styles.rowMain}>
        <View style={{ flex: 1 }}>
          <Text style={styles.rowTitle}>{product.displayName}</Text>
          <Text style={styles.rowSub}>{product.description}</Text>
        </View>
        <View style={styles.rowPrice}>
          <Text style={styles.priceText}>A${product.baseAud.toFixed(2)}</Text>
          {product.periodDays === 30 && <Text style={styles.priceSub}>/ month</Text>}
          {product.periodDays === 365 && <Text style={styles.priceSub}>/ year</Text>}
          {product.periodDays === 0 && product.category === 'lifetime_purchase' && <Text style={styles.priceSub}>once</Text>}
        </View>
      </View>
    </Pressable>
  );
}

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
  scrollContent: { padding: Spacing.lg },
  statusCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  statusLabel: { color: Colors.gray[500], fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
  statusValue: { color: Colors.gray[800], fontSize: FontSize.xl, fontWeight: FontWeight.bold, marginTop: Spacing.xs },
  statusHint: { color: Colors.gray[600], fontSize: FontSize.sm, marginTop: Spacing.sm },
  lifetimeBadge: { color: '#F4B400', fontSize: FontSize.sm, fontWeight: FontWeight.bold, marginTop: Spacing.xs },
  sectionTitle: { color: Colors.gray[800], fontSize: FontSize.lg, fontWeight: FontWeight.bold, marginTop: Spacing.md, marginBottom: Spacing.xs },
  sectionSub: { color: Colors.gray[500], fontSize: FontSize.sm, marginBottom: Spacing.md },
  row: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  rowRecommended: { borderWidth: 2, borderColor: Colors.primary },
  rowPressed: { opacity: 0.7 },
  recommendedTag: {
    color: Colors.primary,
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    letterSpacing: 1,
    marginBottom: Spacing.xs,
  },
  rowMain: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  rowTitle: { color: Colors.gray[800], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  rowSub: { color: Colors.gray[600], fontSize: FontSize.sm, marginTop: 2 },
  rowPrice: { alignItems: 'flex-end' },
  priceText: { color: Colors.gray[800], fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  priceSub: { color: Colors.gray[500], fontSize: FontSize.xs, marginTop: 2 },
});
