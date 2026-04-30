import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const FEATURE_KEYS = ['phrasebook', 'culture', 'money', 'transport', 'travellers', 'safari'] as const;
const FEATURE_EMOJIS: Record<(typeof FEATURE_KEYS)[number], string> = {
  phrasebook:  '🗺️',
  culture:     '🏛️',
  money:       '💱',
  transport:   '🛫',
  travellers:  '👥',
  safari:      '🦁',
};

export default function TravelScreen() {
  const { t } = useTranslation('common');

  const openNotifyEmail = () => {
    const subject = encodeURIComponent(t('travel.notify.email_subject'));
    const body = encodeURIComponent(t('travel.notify.email_body'));
    Linking.openURL(`mailto:hello@rwendo.app?subject=${subject}&body=${body}`).catch(() =>
      Alert.alert(t('travel.notify.fallback_title'), t('travel.notify.fallback_body'))
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hero */}
        <LinearGradient colors={['#1A3C6E', '#0D2140']} style={styles.hero}>
          <View style={styles.heroContent}>
            <View style={styles.heroText}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{t('travel.coming_soon_badge')}</Text>
              </View>
              <Text style={styles.heroTitle}>{t('travel.hero_title')}</Text>
              <Text style={styles.heroSub}>
                {t('travel.hero_sub')}
              </Text>
            </View>
            <RwenImage pose="arms_spread" size={130} />
          </View>

          {/* Teaser stats */}
          <View style={styles.teaserRow}>
            <View style={styles.teaserItem}>
              <Text style={styles.teaserValue}>6</Text>
              <Text style={styles.teaserLabel}>{t('travel.teaser.features')}</Text>
            </View>
            <View style={styles.teaserDivider} />
            <View style={styles.teaserItem}>
              <Text style={styles.teaserValue}>🇿🇼</Text>
              <Text style={styles.teaserLabel}>{t('travel.teaser.zimbabwe')}</Text>
            </View>
            <View style={styles.teaserDivider} />
            <View style={styles.teaserItem}>
              <Text style={styles.teaserValue}>∞</Text>
              <Text style={styles.teaserLabel}>{t('travel.teaser.connections')}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>{t('travel.whats_coming')}</Text>

          {FEATURE_KEYS.map((key) => (
            <View key={key} style={styles.featureCard}>
              <View style={styles.featureEmoji}>
                <Text style={styles.featureEmojiText}>{FEATURE_EMOJIS[key]}</Text>
              </View>
              <View style={styles.featureInfo}>
                <Text style={styles.featureTitle}>{t(`travel.features.${key}.title`)}</Text>
                <Text style={styles.featureDesc}>{t(`travel.features.${key}.desc`)}</Text>
              </View>
              <View style={styles.lockBadge}>
                <Text style={styles.lockText}>{t('travel.lock_soon')}</Text>
              </View>
            </View>
          ))}

          {/* Notify me card */}
          <View style={styles.notifyCard}>
            <RwenImage pose="waving" size={80} />
            <Text style={styles.notifyTitle}>{t('travel.notify.title')}</Text>
            <Text style={styles.notifyText}>
              {t('travel.notify.body')}
            </Text>
            <Pressable style={styles.notifyBtn} onPress={openNotifyEmail}>
              <Text style={styles.notifyBtnText}>{t('travel.notify.button')}</Text>
            </Pressable>
          </View>

          {/* Victoria Falls teaser */}
          <View style={styles.spotlightCard}>
            <Text style={styles.spotlightLabel}>{t('travel.spotlight.label')}</Text>
            <Text style={styles.spotlightTitle}>{t('travel.spotlight.title')}</Text>
            <Text style={styles.spotlightShona}>{t('travel.spotlight.shona_name')}</Text>
            <Text style={styles.spotlightMeaning}>{t('travel.spotlight.meaning')}</Text>
            <Text style={styles.spotlightDesc}>
              {t('travel.spotlight.desc')}
            </Text>
          </View>

          <View style={{ height: Spacing.xxl }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  hero: { padding: Spacing.lg, paddingBottom: Spacing.xl },
  heroContent: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: Spacing.lg },
  heroText: { flex: 1, gap: Spacing.sm },
  badge: { alignSelf: 'flex-start', backgroundColor: Colors.streak, paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full },
  badgeText: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.white, letterSpacing: 1 },
  heroTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white, lineHeight: 36 },
  heroSub: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', lineHeight: 20 },
  teaserRow: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: BorderRadius.lg, padding: Spacing.md },
  teaserItem: { flex: 1, alignItems: 'center', gap: 2 },
  teaserValue: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  teaserLabel: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' },
  teaserDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.1)' },

  content: { backgroundColor: Colors.accent, padding: Spacing.lg, gap: Spacing.md },
  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[800] },

  featureCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  featureEmoji: { width: 48, height: 48, borderRadius: BorderRadius.md, backgroundColor: Colors.accent, alignItems: 'center', justifyContent: 'center' },
  featureEmojiText: { fontSize: 24 },
  featureInfo: { flex: 1, gap: 2 },
  featureTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  featureDesc: { fontSize: FontSize.xs, color: Colors.gray[500], lineHeight: 16 },
  lockBadge: { backgroundColor: Colors.gray[100], paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full },
  lockText: { fontSize: FontSize.xs, color: Colors.gray[500], fontWeight: FontWeight.medium },

  notifyCard: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.md,
  },
  notifyTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white, textAlign: 'center' },
  notifyText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 20 },
  notifyBtn: { backgroundColor: Colors.secondary, paddingVertical: Spacing.sm, paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full },
  notifyBtnText: { color: Colors.white, fontWeight: FontWeight.bold, fontSize: FontSize.sm },

  spotlightCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    gap: Spacing.xs,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  spotlightLabel: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.secondary, letterSpacing: 1, textTransform: 'uppercase' },
  spotlightTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.gray[800] },
  spotlightShona: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.primary },
  spotlightMeaning: { fontSize: FontSize.sm, color: Colors.gray[400], fontStyle: 'italic', marginBottom: Spacing.xs },
  spotlightDesc: { fontSize: FontSize.md, color: Colors.gray[700], lineHeight: 22 },
});
