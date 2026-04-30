import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader';
import RwenImage from '../../components/rwen/RwenImage';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface Tier {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  current?: boolean;
}

const TIERS: Tier[] = [
  {
    id: 'free',
    name: 'Free',
    price: 'A$0',
    tagline: 'Learn at your own pace',
    features: [
      '100 Shona lessons (full Rwendo Method)',
      'XP, streaks, achievements',
      'No AI companion',
    ],
    current: true,
  },
  {
    id: 'text_ai',
    name: 'Text AI',
    price: 'A$10/mo',
    tagline: 'Chat with Rwen in writing',
    features: [
      'Everything in Free',
      '500 AI messages per month',
      'Personalised lesson tips',
    ],
  },
  {
    id: 'voice',
    name: 'Voice',
    price: 'A$15/mo',
    tagline: 'Hear and speak with Rwen',
    features: [
      'Everything in Text AI',
      '200 voice replies (push-to-talk)',
      '4 voice options',
    ],
  },
  {
    id: 'companion',
    name: 'Companion',
    price: 'A$25/mo',
    tagline: 'Hands-free conversation',
    features: [
      'Everything in Voice',
      '60 min real-time conversation',
      'Unlimited text & voice replies',
    ],
    highlight: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'A$45/mo',
    tagline: 'The full Rwen experience',
    features: [
      'Everything in Companion',
      '120 min real-time conversation',
      '3D Rwen with lip-sync (coming soon)',
    ],
  },
];

export default function PlansScreen() {
  const handleUpgrade = (tierName: string) => {
    Alert.alert(
      `${tierName} — coming soon`,
      'Subscriptions launch with our next update. We\'re working with RevenueCat to make billing smooth and refund-friendly. Sit tight!',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Plans" subtitle="Pick the journey that fits you" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <RwenImage pose="arms_spread" size={80} />
          <Text style={styles.heroTitle}>Built for every stage</Text>
          <Text style={styles.heroSub}>
            Start free with all 100 lessons. Upgrade when you want Rwen as your conversation partner.
          </Text>
        </View>

        {TIERS.map((tier) => (
          <View
            key={tier.id}
            style={[
              styles.tierCard,
              tier.highlight && styles.tierCardHighlight,
              tier.current && styles.tierCardCurrent,
            ]}
          >
            {tier.highlight ? (
              <View style={styles.popularBadge}>
                <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
              </View>
            ) : null}
            {tier.current ? (
              <View style={styles.currentBadge}>
                <Text style={styles.currentBadgeText}>YOUR PLAN</Text>
              </View>
            ) : null}

            <View style={styles.tierHead}>
              <Text style={styles.tierName}>{tier.name}</Text>
              <Text style={styles.tierPrice}>{tier.price}</Text>
            </View>
            <Text style={styles.tierTagline}>{tier.tagline}</Text>

            <View style={styles.featureList}>
              {tier.features.map((f, i) => (
                <View key={i} style={styles.featureRow}>
                  <Text style={styles.featureCheck}>✓</Text>
                  <Text style={styles.featureText}>{f}</Text>
                </View>
              ))}
            </View>

            {!tier.current ? (
              <Pressable
                style={[styles.tierBtn, tier.highlight && styles.tierBtnHighlight]}
                onPress={() => handleUpgrade(tier.name)}
              >
                <Text style={[styles.tierBtnText, tier.highlight && styles.tierBtnTextHighlight]}>
                  Upgrade to {tier.name}
                </Text>
              </Pressable>
            ) : null}
          </View>
        ))}

        <Text style={styles.footnote}>
          EU/UK customers get a 14-day cooling-off period with full refund. Cancel any time.
        </Text>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.md },
  heroCard: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  heroTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  heroSub: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 20 },
  tierCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    gap: Spacing.sm,
    borderWidth: 2,
    borderColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    position: 'relative',
  },
  tierCardHighlight: { borderColor: Colors.xp },
  tierCardCurrent: { borderColor: Colors.success },
  popularBadge: {
    position: 'absolute',
    top: -10,
    alignSelf: 'center',
    backgroundColor: Colors.xp,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
  },
  popularBadgeText: { color: Colors.white, fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
  currentBadge: {
    position: 'absolute',
    top: -10,
    alignSelf: 'center',
    backgroundColor: Colors.success,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
  },
  currentBadgeText: { color: Colors.white, fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
  tierHead: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 },
  tierName: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  tierPrice: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.primary },
  tierTagline: { fontSize: FontSize.sm, color: Colors.gray[500] },
  featureList: { gap: Spacing.xs, paddingVertical: Spacing.sm },
  featureRow: { flexDirection: 'row', gap: Spacing.sm, alignItems: 'flex-start' },
  featureCheck: { color: Colors.secondary, fontSize: FontSize.md, fontWeight: FontWeight.bold, width: 16 },
  featureText: { flex: 1, fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 20 },
  tierBtn: {
    backgroundColor: Colors.gray[100],
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    marginTop: Spacing.xs,
  },
  tierBtnHighlight: { backgroundColor: Colors.xp },
  tierBtnText: { color: Colors.gray[700], fontSize: FontSize.md, fontWeight: FontWeight.bold },
  tierBtnTextHighlight: { color: Colors.white },
  footnote: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center', lineHeight: 18, marginTop: Spacing.md },
});
