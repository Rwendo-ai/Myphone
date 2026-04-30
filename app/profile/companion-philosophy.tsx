import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import ScreenHeader from '../../components/ScreenHeader';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

/**
 * Our AI Companion philosophy.
 *
 * Sources the principles from PRODUCT-DESIGN.md §2.2. Phase L of the
 * design roadmap. Content is en-authored with i18n fallback for other
 * speakers.
 */
export default function CompanionPhilosophyScreen() {
  const { t } = useTranslation('common');
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title={t('companion_philosophy.title')}
        subtitle={t('companion_philosophy.subtitle')}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <RwenImage pose="waving" size={100} />
          <Text style={styles.heroBody}>{t('companion_philosophy.hero_body')}</Text>
        </View>

        <Section
          title={t('companion_philosophy.relationship.title')}
          body={t('companion_philosophy.relationship.body')}
        />
        <Section
          title={t('companion_philosophy.depth.title')}
          body={t('companion_philosophy.depth.body')}
        />
        <Section
          title={t('companion_philosophy.memory.title')}
          body={t('companion_philosophy.memory.body')}
        />
        <Section
          title={t('companion_philosophy.guardrails.title')}
          body={t('companion_philosophy.guardrails.body')}
        />
        <Section
          title={t('companion_philosophy.not_therapy.title')}
          body={t('companion_philosophy.not_therapy.body')}
        />

        <Text style={styles.footer}>{t('companion_philosophy.footer')}</Text>
        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.md },
  hero: { alignItems: 'center', gap: Spacing.md, paddingVertical: Spacing.lg },
  heroBody: { fontSize: FontSize.md, color: Colors.gray[700], textAlign: 'center', lineHeight: 24, paddingHorizontal: Spacing.md },
  card: {
    backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.md, gap: Spacing.sm,
    shadowColor: Colors.black, shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  cardTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.primary },
  cardBody: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22 },
  footer: { textAlign: 'center', color: Colors.gray[500], fontSize: FontSize.sm, lineHeight: 22, marginTop: Spacing.md, fontStyle: 'italic' },
});
