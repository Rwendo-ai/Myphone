import { ScrollView, Text, StyleSheet, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useSettings } from '../../lib/SettingsContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

// ─── Privacy Policy content ────────────────────────────────────────────────────
// Full text is in docs/legal/privacy-policy.md
// This screen renders a readable version

const SECTIONS = [
  {
    title: '1. Who We Are',
    body: `Rwendo is a language learning and AI companion platform operated as a sole trader based in Australia.\n\nContact: privacy@rwendo.app`,
  },
  {
    title: '2. Information We Collect',
    body: `Account Registration: Name, email, password (encrypted), date of birth, gender (optional).\n\nProfile & Preferences: Interface language, language being learned, ability level, learning goals, daily commitment, personal challenges.\n\nConversation Data: Messages you send to Rwen are processed by Anthropic's Claude AI and stored for up to 12 months.\n\nVoice Data: When you use voice features, audio is sent to ElevenLabs for speech-to-text conversion and deleted within 24 hours. No voiceprints are created or stored.\n\nTechnical Data: Device type, IP address, crash logs, app performance data.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `To provide and personalise the service: account management, lesson delivery, AI companion conversations.\n\nTo build Rwen's AI prompt: Your name, learning goals, and context are included in the prompt we send to Claude so Rwen can give you relevant, personalised responses.\n\nFor safety and security: fraud detection, content moderation.\n\nFor service improvement: anonymised usage analytics.\n\nFor legal compliance.`,
  },
  {
    title: '4. Artificial Intelligence (Claude)',
    body: `Rwen is powered by Anthropic's Claude API.\n\nIMPORTANT: Anthropic does NOT use API conversations to train its AI models. Your conversations are retained by Anthropic for up to 30 days for safety monitoring only, then deleted.\n\nWe send to Claude: your message, conversation history, and a personalised system prompt including your name and learning context.\n\nClaude may make mistakes. AI responses are not professional language instruction, therapy, or advice.`,
  },
  {
    title: '5. Voice Processing (ElevenLabs)',
    body: `Text-to-speech: Rwen's responses are sent to ElevenLabs to generate voice audio. No personal data about you is sent.\n\nSpeech-to-text: Your voice recordings are sent to ElevenLabs for transcription and deleted within 24 hours. No voiceprint is stored.\n\nIllinois users: Voice data is treated as biometric information per BIPA. Your consent is recorded before first use.`,
  },
  {
    title: '6. Third-Party Services',
    body: `Supabase (database): Stores your account, progress, conversations. supabase.com/privacy\n\nAnthropic (Claude AI): Processes your messages. privacy.claude.com\n\nElevenLabs (voice): Processes voice audio. elevenlabs.io/privacy\n\nRevenueCat (subscriptions): Manages subscription status. revenuecat.com/privacy\n\nWe do NOT sell your data. We do NOT share your data with advertisers.`,
  },
  {
    title: '7. Data Retention',
    body: `Conversation history: 12 months\nVoice recordings: 24 hours (deleted by ElevenLabs)\nAccount data: Duration of account + 30 days after deletion\nPayment records: 7 years (tax law)\nCrash logs: 90 days\n\nWhen you delete your account, personal data is deleted within 30 days.`,
  },
  {
    title: '8. Children\'s Privacy',
    body: `Minimum age: 13 years old.\n\nUnder 13: We do not collect data from children under 13 without verified parental consent. If discovered, we immediately restrict the account and contact the parent.\n\nUsers 13-17: Language learning is available. AI Companion features may be restricted. We do not use minors' data for advertising or profiling.\n\nParents may request access, correction, or deletion of their child's data by emailing privacy@rwendo.app.`,
  },
  {
    title: '9. Your Rights',
    body: `Access: Download your data via Settings → Privacy → Download My Data.\n\nDeletion: Delete your account via Settings → Account → Delete Account.\n\nCorrection: Update profile via Settings → Edit Profile.\n\nWithdraw consent: Disable voice features via Settings → Privacy.\n\nEU/UK users: Additional rights including data portability, restriction, and objection. Lodge complaints with your national data protection authority.\n\nAustralian users: Lodge complaints with the OAIC (oaic.gov.au).`,
  },
  {
    title: '10. Security',
    body: `We use encryption in transit and at rest, access controls, and regular security reviews.\n\nNo method of internet transmission is 100% secure. We cannot guarantee absolute security.\n\nIn the event of a data breach posing risk of harm, we will notify you and relevant authorities as required by law.`,
  },
  {
    title: '11. International Transfers',
    body: `Your data may be processed in the USA by Anthropic, ElevenLabs, Supabase, and RevenueCat.\n\nEU/UK users: Transfers are protected by EU-US Data Privacy Framework and Standard Contractual Clauses.\n\nAustralian users: We take reasonable steps to ensure overseas recipients handle your data consistently with Australian Privacy Principles.`,
  },
  {
    title: '12. Contact',
    body: `Privacy questions: privacy@rwendo.app\nResponse time: Within 30 days.\n\nComplaints if not satisfied:\n• UK/EU: Your national data protection authority\n• Australia: oaic.gov.au\n• USA (COPPA): ftc.gov`,
  },
];

export default function PrivacyPolicyScreen() {
  const { jurisdiction } = useSettings();
  // Phase N: when jurisdiction.privacyPolicyMd is authored (lawyer pass), the
  // screen will render that markdown. Until then the AU baseline below applies.
  const usesBaseline = !jurisdiction.privacyPolicyMd || jurisdiction.id === 'AU';

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.date}>Effective: 1 May 2026 · {jurisdiction.name}</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {!usesBaseline ? null : jurisdiction.id !== 'AU' && (
          <View style={styles.regionalBanner}>
            <Text style={styles.regionalBannerText}>
              You're viewing the Australian Privacy Policy template. A {jurisdiction.name}-specific version is being prepared — please email privacy@rwendo.app for region-specific questions.
            </Text>
          </View>
        )}
        <View style={styles.intro}>
          <Text style={styles.introText}>
            This Privacy Policy explains what data Rwendo collects, how we use it, and your rights. We are committed to protecting your privacy.
          </Text>
        </View>
        {SECTIONS.map((section, i) => (
          <View key={i} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionBody}>{section.body}</Text>
          </View>
        ))}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Full legal text available at: docs.rwendo.app/privacy{'\n'}
            Contact: privacy@rwendo.app
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
  content: { padding: Spacing.lg, gap: Spacing.lg },
  intro: { backgroundColor: Colors.accent, borderRadius: BorderRadius.lg, padding: Spacing.md },
  introText: { fontSize: FontSize.md, color: Colors.gray[700], lineHeight: 22 },
  section: { gap: Spacing.sm, borderBottomWidth: 1, borderBottomColor: Colors.gray[100], paddingBottom: Spacing.lg },
  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.primary },
  sectionBody: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22 },
  footer: { backgroundColor: Colors.gray[50], borderRadius: BorderRadius.lg, padding: Spacing.md },
  footerText: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center', lineHeight: 18 },
  regionalBanner: { backgroundColor: '#FEF3C7', borderRadius: BorderRadius.lg, padding: Spacing.md, borderWidth: 1, borderColor: '#FBBF24' },
  regionalBannerText: { fontSize: FontSize.xs, color: '#92400E', lineHeight: 18 },
});
