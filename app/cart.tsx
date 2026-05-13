import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useEntitlements } from '../hooks/useEntitlements';
import { presentPaywall } from '../lib/purchases';
import {
  getMonthlyTiers,
  getYearlyTiers,
  getTokenPacks,
  type Product,
} from '../data/products';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';

/**
 * Cart screen — single surface for every paid action in the app.
 *
 * Layout order (v4, 2026-05-13):
 *   1. Current plan + token balance card
 *   2. AI Tokens — top + centre (this is the primary purchase surface)
 *   3. Pro tiers (monthly) — for users who want a subscription baseline
 *   4. Yearly variants for the top two tiers
 *
 * Tokens are first because they are how casual users buy AI usage without
 * committing to a subscription, and how tier subscribers top up beyond
 * their monthly allowance.
 *
 * Tapping any product calls RevenueCat's hosted paywall which handles the
 * actual purchase flow. Once IAP products are wired up in App Store
 * Connect + Play Console + RevenueCat dashboard, this screen will surface
 * live store-localised pricing instead of the AUD base price.
 */
export default function CartScreen() {
  const { tier, hasPaidTier, balance } = useEntitlements();
  const [busy, setBusy] = useState(false);

  const handleBuy = async (product: Product) => {
    if (busy) return;
    setBusy(true);
    try {
      const ok = await presentPaywall();
      if (!ok) {
        Alert.alert(
          'Coming soon',
          'In-app purchases are being finalised with the App Store. Check back shortly.',
        );
      }
    } finally {
      setBusy(false);
    }
  };

  const tokenPacks = getTokenPacks();
  const tierProducts = getMonthlyTiers();
  const yearlyProducts = getYearlyTiers();

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
          {!hasPaidTier && (
            <Text style={styles.statusHint}>
              Top up tokens any time. Subscribe to unlock voice, lipsync, and the full companion experience.
            </Text>
          )}
        </View>

        {/* ─── AI Tokens — primary purchase surface ─── */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>AI Tokens</Text>
          <Text style={styles.heroSub}>
            Pay-as-you-go credit for talking with your companions. One balance, used across text, voice, and lipsync.
          </Text>
          {tokenPacks.map((p) => (
            <TokenRow key={p.id} product={p} onPress={() => handleBuy(p)} disabled={busy} />
          ))}
          <Text style={styles.heroFootnote}>
            Bigger packs include bonus tokens. Tokens never expire.
          </Text>
        </View>

        {/* ─── Pro tiers — monthly ─── */}
        <Text style={styles.sectionTitle}>Pro · Monthly</Text>
        <Text style={styles.sectionSub}>
          Unlock voice and video features. Every tier comes with a monthly token allowance and includes all courses.
        </Text>
        {tierProducts.map((p) => (
          <ProductRow key={p.id} product={p} onPress={() => handleBuy(p)} disabled={busy} />
        ))}

        {/* ─── Yearly variants ─── */}
        <Text style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>Pro · Yearly</Text>
        <Text style={styles.sectionSub}>
          About 33% off the monthly equivalent. Available on the top two tiers.
        </Text>
        {yearlyProducts.map((p) => (
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

function TokenRow({ product, onPress, disabled }: { product: Product; onPress: () => void; disabled: boolean }) {
  // Pull a short bonus/description blurb (skip the first sentence which is
  // just the token count; use the second if present, else fall back).
  const parts = product.description.split('.').map((s) => s.trim()).filter(Boolean);
  const blurb = parts.length > 1 ? parts[1] : parts[0];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.tokenRow,
        product.recommended && styles.tokenRowRecommended,
        pressed && !disabled && styles.tokenRowPressed,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {product.recommended && (
        <View style={styles.tokenRowBadge}>
          <Text style={styles.tokenRowBadgeText}>BEST VALUE</Text>
        </View>
      )}
      <View style={styles.tokenRowLeft}>
        <Text style={styles.tokenRowPrice} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>
          A${product.baseAud.toFixed(0)}
        </Text>
        <Text style={styles.tokenRowBlurb} numberOfLines={2}>{blurb}</Text>
      </View>
      <View style={styles.tokenRowRight}>
        <Text style={styles.tokenRowTokens} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>
          {product.tokens?.toLocaleString()}
        </Text>
        <Text style={styles.tokenRowTokensLabel}>tokens</Text>
      </View>
    </Pressable>
  );
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

  heroSection: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  heroTitle: { color: Colors.white, fontSize: FontSize.xxl, fontWeight: FontWeight.bold },
  heroSub: { color: Colors.white, opacity: 0.85, fontSize: FontSize.sm, marginTop: Spacing.xs, marginBottom: Spacing.lg },
  heroFootnote: { color: Colors.white, opacity: 0.7, fontSize: FontSize.xs, marginTop: Spacing.md, textAlign: 'center' },
  tokenRow: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    position: 'relative',
  },
  tokenRowRecommended: { borderWidth: 2, borderColor: '#F4B400' },
  tokenRowPressed: { opacity: 0.75 },
  tokenRowBadge: {
    position: 'absolute',
    top: -10,
    left: Spacing.md,
    backgroundColor: '#F4B400',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tokenRowBadgeText: { color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold, letterSpacing: 1 },
  tokenRowLeft: { flex: 1, paddingRight: Spacing.md },
  tokenRowPrice: { color: Colors.gray[800], fontSize: 28, fontWeight: FontWeight.bold },
  tokenRowBlurb: { color: Colors.gray[600], fontSize: FontSize.sm, marginTop: 2 },
  tokenRowRight: { alignItems: 'flex-end', minWidth: 100 },
  tokenRowTokens: { color: Colors.primary, fontSize: 22, fontWeight: FontWeight.bold },
  tokenRowTokensLabel: { color: Colors.gray[500], fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 },

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
