import { ScrollView, Text, StyleSheet, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useSettings } from '../../lib/SettingsContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const SECTIONS = [
  {
    title: '1. Acceptance',
    body: `By creating an account or using Rwendo, you agree to these Terms. If you do not agree, do not use Rwendo.\n\n⚠️ These Terms contain a binding arbitration clause (Section 15) and class action waiver. Please read carefully.`,
    highlight: true,
  },
  {
    title: '2. Eligibility',
    body: `Minimum age: 13 years old.\nFull AI Companion features: Recommended 18+.\nUnder 13: Requires verified parental consent.\nUsers 13-17: Language learning available; some companion features restricted.\n\nParents/guardians of users under 18 accept these Terms on the minor's behalf and take responsibility for their use.`,
  },
  {
    title: '3. The Service',
    body: `Rwendo provides gamified language learning, an AI companion (Rwen), and voice interaction features.\n\nService availability: We do not guarantee uninterrupted service. We are not liable for outages. No refunds solely for downtime under 72 continuous hours.\n\nWe reserve the right to add, modify, or remove features at any time. Continued use constitutes acceptance of changes.`,
  },
  {
    title: '4. Subscriptions & Payments',
    body: `Free tier is available with limited features.\n\nPaid subscriptions are billed in advance through Apple App Store or Google Play. We do not store your payment card details.\n\nFree trials: Your payment method will be charged at trial end unless cancelled beforehand.\n\nCancellation: Cancel anytime via your App Store/Google Play account. Access continues until end of paid period. No partial-period refunds except as required by Australian Consumer Law.`,
  },
  {
    title: '5. AI Disclaimer — CRITICAL',
    body: `Rwen is powered by Anthropic's Claude AI. Rwen is NOT a human.\n\nAI responses may contain errors, inaccuracies, incorrect language guidance, or mistranslations. We make NO warranty regarding AI accuracy.\n\nRwen is NOT a substitute for:\n• Professional language instruction\n• Medical or mental health care\n• Legal or financial advice\n• Professional translation\n\nYOU USE AI-GENERATED CONTENT ENTIRELY AT YOUR OWN RISK.\n\nEmotional AI Companion: Rwen does not have genuine feelings or consciousness. Rwen cannot replace human relationships. Rwen is not a mental health service.\n\nIf you are in crisis: Lifeline (AUS) 13 11 14 | 988 (USA) | 116 123 (UK)`,
    highlight: true,
  },
  {
    title: '6. Acceptable Use',
    body: `You may not use Rwendo to:\n• Harass, threaten, or harm others\n• Generate or distribute illegal content\n• Create or distribute sexual content involving minors (immediate termination + law enforcement reporting)\n• Attempt to "jailbreak" or manipulate the AI\n• Extract our curriculum, system prompts, or proprietary data\n• Create automated accounts (bots)\n• Violate any applicable law`,
  },
  {
    title: '7. Intellectual Property',
    body: `All Rwendo content — curriculum, Rwen's character, app code, branding, and AI configuration — is our property. You may not reproduce, distribute, or create derivative works without written permission.\n\nYou retain ownership of content you create. You grant us a limited licence to process it to provide the service.`,
  },
  {
    title: '8. Disclaimer of Warranties',
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, RWENDO IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.\n\nWE DO NOT WARRANT THAT:\n• The service will be uninterrupted or error-free\n• AI content is accurate or suitable\n• Use of Rwendo will result in language proficiency\n• Data will never be lost\n\nNothing here excludes guarantees under Australian Consumer Law that cannot be excluded.`,
    highlight: true,
  },
  {
    title: '9. Limitation of Liability — CRITICAL',
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, RWENDO IS NOT LIABLE FOR:\n• Indirect, incidental, consequential, or punitive damages\n• Loss of profits, data, or business\n• Reliance on AI-generated content\n• Third-party service failures (Anthropic, ElevenLabs, Supabase)\n• Harm from AI companion interactions\n\nOUR TOTAL LIABILITY IS CAPPED AT THE GREATER OF:\n(a) AUD $100, OR\n(b) Amounts you paid us in the 12 months before the claim.`,
    highlight: true,
  },
  {
    title: '10. Indemnification',
    body: `You agree to indemnify and hold harmless Rwendo from claims, damages, and costs arising from:\n• Your violation of these Terms\n• Your violation of applicable law\n• Content you submit\n• Use of your account by others with your permission`,
  },
  {
    title: '11. Dispute Resolution & Arbitration — CRITICAL',
    body: `BINDING ARBITRATION: Disputes shall be resolved by binding arbitration in Melbourne, Australia under ACICA Expedited Rules, not in court.\n\nCLASS ACTION WAIVER: You waive any right to bring or participate in any class action against Rwendo. Claims may only be brought individually.\n\nExceptions: Injunctive relief and COPPA claims may be pursued in court.\n\nGoverning law: Victoria, Australia.\n\nInformal resolution first: Contact legal@rwendo.app and allow 30 days for informal resolution before initiating arbitration.`,
    highlight: true,
  },
  {
    title: '12. Termination',
    body: `You may delete your account at any time via Settings → Account → Delete Account.\n\nWe may terminate or suspend your account at any time for violations of these Terms.\n\nSections 5, 7, 8, 9, 10, 11 survive termination.`,
  },
  {
    title: '13. Contact',
    body: `Legal matters: legal@rwendo.app\nPrivacy matters: privacy@rwendo.app\nSupport: support@rwendo.app`,
  },
];

export default function TermsOfServiceScreen() {
  const { jurisdiction } = useSettings();
  // Phase N: when jurisdiction.termsOfServiceMd is authored, render that.
  // Until then the AU baseline below applies.
  const usesBaseline = !jurisdiction.termsOfServiceMd || jurisdiction.id === 'AU';

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
        <Text style={styles.title}>Terms of Service</Text>
        <Text style={styles.date}>Effective: 1 May 2026 · {jurisdiction.name}</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {usesBaseline && jurisdiction.id !== 'AU' && (
          <View style={styles.regionalBanner}>
            <Text style={styles.regionalBannerText}>
              You're viewing the Australian Terms template. {jurisdiction.coolingOffDays > 0
                ? `${jurisdiction.name} customers also have a ${jurisdiction.coolingOffDays}-day cooling-off period for subscriptions; refunds during that window are guaranteed even outside our normal policy.`
                : `A ${jurisdiction.name}-specific version is being prepared.`}
            </Text>
          </View>
        )}
        <View style={styles.warning}>
          <Text style={styles.warningTitle}>⚠️ Important</Text>
          <Text style={styles.warningText}>
            These Terms include an AI disclaimer, limitation of liability, binding arbitration clause, and class action waiver. Please read all sections marked ⚠️ carefully.
          </Text>
        </View>
        {SECTIONS.map((section, i) => (
          <View key={i} style={[styles.section, section.highlight && styles.sectionHighlight]}>
            <Text style={[styles.sectionTitle, section.highlight && styles.sectionTitleHighlight]}>{section.title}</Text>
            <Text style={styles.sectionBody}>{section.body}</Text>
          </View>
        ))}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Full legal text: docs.rwendo.app/terms{'\n'}
            Contact: legal@rwendo.app{'\n'}
            Last updated: 1 May 2026
          </Text>
        </View>
        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.white },
  header: { backgroundColor: Colors.primary, padding: Spacing.lg, gap: 4 },
  backBtn: { marginBottom: Spacing.sm },
  backText: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.md },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.white },
  date: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.6)' },
  scroll: { flex: 1 },
  content: { padding: Spacing.lg, gap: Spacing.md },
  warning: { backgroundColor: '#FEF3C7', borderRadius: BorderRadius.lg, padding: Spacing.md, gap: 4, borderLeftWidth: 4, borderLeftColor: Colors.xp },
  warningTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: '#92400E' },
  warningText: { fontSize: FontSize.sm, color: '#78350F', lineHeight: 20 },
  section: { gap: Spacing.sm, borderBottomWidth: 1, borderBottomColor: Colors.gray[100], paddingBottom: Spacing.md },
  sectionHighlight: { backgroundColor: '#FFF7ED', borderRadius: BorderRadius.md, padding: Spacing.md, borderLeftWidth: 3, borderLeftColor: Colors.streak },
  sectionTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.primary },
  sectionTitleHighlight: { color: '#C2410C' },
  sectionBody: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22 },
  footer: { backgroundColor: Colors.gray[50], borderRadius: BorderRadius.lg, padding: Spacing.md },
  footerText: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center', lineHeight: 18 },
  regionalBanner: { backgroundColor: '#DBEAFE', borderRadius: BorderRadius.lg, padding: Spacing.md, borderWidth: 1, borderColor: '#3B82F6' },
  regionalBannerText: { fontSize: FontSize.xs, color: '#1E40AF', lineHeight: 18 },
});
