import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import ScreenHeader from '../../components/ScreenHeader';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const APP_VERSION = Constants.expoConfig?.version ?? '1.0.0';

export default function AboutScreen() {
  const { t } = useTranslation('common');
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('about.title')} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <RwenImage pose="waving" size={120} />
          <Text style={styles.appName}>{t('about.app_name')}</Text>
          <Text style={styles.tagline}>{t('about.tagline')}</Text>
          <Text style={styles.version}>{t('about.version_label', { version: APP_VERSION })}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('about.what_card.title')}</Text>
          <Text style={styles.cardBody}>
            {t('about.what_card.body')}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('about.meet_card.title')}</Text>
          <Text style={styles.cardBody}>
            {t('about.meet_card.body')}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('about.method_card.title')}</Text>
          <Text style={styles.cardBody}>
            {t('about.method_card.body')}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('about.builders_card.title')}</Text>
          <Text style={styles.cardBody}>
            {t('about.builders_card.body')}
          </Text>
        </View>

        <Pressable
          style={styles.linkRow}
          onPress={() => Linking.openURL('https://rwendo.app').catch(() => {})}
        >
          <Text style={styles.linkText}>{t('about.link')}</Text>
          <Text style={styles.linkArrow}>↗</Text>
        </Pressable>

        <Text style={styles.footer}>{t('about.footer')}</Text>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.md },
  hero: { alignItems: 'center', gap: Spacing.xs, paddingVertical: Spacing.lg },
  appName: { fontSize: FontSize.display, fontWeight: FontWeight.extrabold, color: Colors.primary, letterSpacing: -1 },
  tagline: { fontSize: FontSize.md, color: Colors.gray[500] },
  version: { fontSize: FontSize.xs, color: Colors.gray[400], marginTop: Spacing.xs },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: Spacing.sm,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.primary },
  cardBody: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22 },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
  },
  linkText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold },
  linkArrow: { color: Colors.secondary, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  footer: { textAlign: 'center', color: Colors.gray[400], fontSize: FontSize.sm, lineHeight: 22, marginTop: Spacing.md },
});
