import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import ScreenHeader from '../../components/ScreenHeader';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

/**
 * Why our language method works.
 *
 * Sources the principles from PRODUCT-DESIGN.md §7. Phase L of the design
 * roadmap. The content is authored once in English; sn / future locales
 * pick it up via i18next fallback chain (en is the fallback). When the
 * Phase D follow-up translates this, the keys are already structured.
 */
export default function MethodologyScreen() {
  const { t } = useTranslation('common');
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title={t('methodology.title')}
        subtitle={t('methodology.subtitle')}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <RwenImage pose="thinking" size={100} />
          <Text style={styles.heroBody}>{t('methodology.hero_body')}</Text>
        </View>

        <Section
          title={t('methodology.phases.title')}
          body={t('methodology.phases.body')}
        />
        <Section
          title={t('methodology.lexical.title')}
          body={t('methodology.lexical.body')}
          citation="Lewis (1993) — The Lexical Approach"
        />
        <Section
          title={t('methodology.input_output.title')}
          body={t('methodology.input_output.body')}
          citation="Krashen (1982) Input Hypothesis · Swain (1985) Output Hypothesis"
        />
        <Section
          title={t('methodology.recasts.title')}
          body={t('methodology.recasts.body')}
          citation="Long (1996) — Interaction Hypothesis"
        />
        <Section
          title={t('methodology.recall.title')}
          body={t('methodology.recall.body')}
          citation="Roediger & Karpicke (2006) — Test-enhanced learning"
        />
        <Section
          title={t('methodology.spacing.title')}
          body={t('methodology.spacing.body')}
          citation="Ebbinghaus / Bahrick — spaced repetition"
        />

        <Text style={styles.footer}>{t('methodology.footer')}</Text>
        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, body, citation }: { title: string; body: string; citation?: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{body}</Text>
      {citation ? <Text style={styles.cardCitation}>— {citation}</Text> : null}
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
  cardCitation: { fontSize: FontSize.xs, color: Colors.gray[400], fontStyle: 'italic', marginTop: 2 },
  footer: { textAlign: 'center', color: Colors.gray[500], fontSize: FontSize.sm, lineHeight: 22, marginTop: Spacing.md, fontStyle: 'italic' },
});
