import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function HelpScreen() {
  const { t } = useTranslation('common');
  const [open, setOpen] = useState<number | null>(null);
  const faq = t('help.faq', { returnObjects: true }) as { q: string; a: string }[];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('help.title')} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.intro}>{t('help.intro')}</Text>

        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <Pressable
              key={i}
              style={styles.faqCard}
              onPress={() => setOpen(isOpen ? null : i)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{item.q}</Text>
                <Text style={styles.faqChevron}>{isOpen ? '−' : '+'}</Text>
              </View>
              {isOpen ? <Text style={styles.faqAnswer}>{item.a}</Text> : null}
            </Pressable>
          );
        })}

        <Pressable
          style={styles.contactBtn}
          onPress={() => {
            const subject = encodeURIComponent(t('profile.support_rows.contact_email_subject'));
            Linking.openURL(`mailto:support@rwendo.app?subject=${subject}`).catch(() => {});
          }}
        >
          <Text style={styles.contactBtnText}>{t('help.contact_btn')}</Text>
        </Pressable>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.sm },
  intro: { fontSize: FontSize.md, color: Colors.gray[600], marginBottom: Spacing.sm },
  faqCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  faqHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: Spacing.sm },
  faqQuestion: { flex: 1, fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  faqChevron: { fontSize: FontSize.xl, color: Colors.secondary, fontWeight: FontWeight.bold, width: 20, textAlign: 'center' },
  faqAnswer: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22, marginTop: Spacing.sm },
  contactBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  contactBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});
