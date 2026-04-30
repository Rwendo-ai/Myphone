import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import RwenImage from '../../components/rwen/RwenImage';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

type TierKey = 'free' | 'text_ai' | 'voice' | 'companion' | 'premium';
const TIER_KEYS: TierKey[] = ['free', 'text_ai', 'voice', 'companion', 'premium'];
const TIER_HIGHLIGHT: Record<TierKey, boolean> = { free: false, text_ai: false, voice: false, companion: true,  premium: false };
const TIER_CURRENT:   Record<TierKey, boolean> = { free: true,  text_ai: false, voice: false, companion: false, premium: false };

export default function PlansScreen() {
  const { t } = useTranslation('common');

  const handleUpgrade = (tierName: string) => {
    Alert.alert(
      t('plans_screen.alert_title', { name: tierName }),
      t('plans_screen.alert_body'),
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('plans_screen.title')} subtitle={t('plans_screen.subtitle')} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <RwenImage pose="arms_spread" size={80} />
          <Text style={styles.heroTitle}>{t('plans_screen.hero_title')}</Text>
          <Text style={styles.heroSub}>
            {t('plans_screen.hero_body')}
          </Text>
        </View>

        {TIER_KEYS.map((id) => {
          const highlight = TIER_HIGHLIGHT[id];
          const current = TIER_CURRENT[id];
          const name = t(`plans_screen.tiers.${id}.name`);
          const features = t(`plans_screen.tiers.${id}.features`, { returnObjects: true }) as string[];
          return (
            <View
              key={id}
              style={[
                styles.tierCard,
                highlight && styles.tierCardHighlight,
                current && styles.tierCardCurrent,
              ]}
            >
              {highlight ? (
                <View style={styles.popularBadge}>
                  <Text style={styles.popularBadgeText}>{t('plans_screen.popular_badge')}</Text>
                </View>
              ) : null}
              {current ? (
                <View style={styles.currentBadge}>
                  <Text style={styles.currentBadgeText}>{t('plans_screen.current_badge')}</Text>
                </View>
              ) : null}

              <View style={styles.tierHead}>
                <Text style={styles.tierName}>{name}</Text>
                <Text style={styles.tierPrice}>{t(`plans_screen.tiers.${id}.price`)}</Text>
              </View>
              <Text style={styles.tierTagline}>{t(`plans_screen.tiers.${id}.tagline`)}</Text>

              <View style={styles.featureList}>
                {features.map((f, i) => (
                  <View key={i} style={styles.featureRow}>
                    <Text style={styles.featureCheck}>✓</Text>
                    <Text style={styles.featureText}>{f}</Text>
                  </View>
                ))}
              </View>

              {!current ? (
                <Pressable
                  style={[styles.tierBtn, highlight && styles.tierBtnHighlight]}
                  onPress={() => handleUpgrade(name)}
                >
                  <Text style={[styles.tierBtnText, highlight && styles.tierBtnTextHighlight]}>
                    {t('plans_screen.upgrade_to', { name })}
                  </Text>
                </Pressable>
              ) : null}
            </View>
          );
        })}

        <Text style={styles.footnote}>
          {t('plans_screen.footnote')}
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
