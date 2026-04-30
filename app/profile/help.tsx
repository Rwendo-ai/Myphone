import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const FAQ = [
  {
    q: 'How do I talk to Rwen?',
    a: 'Tap the Rwen tab in the centre of the bottom bar. You can type a message or hold the mic button to speak. Tap the 🎙 icon in the top right to start a hands-free conversation.',
  },
  {
    q: 'Why does Rwen sometimes get things wrong?',
    a: 'Rwen is an AI (Claude). AI can make mistakes — including factual errors and odd translations. Treat Rwen as a conversation partner, not a textbook. For anything critical, double-check with a human Shona speaker.',
  },
  {
    q: 'How do I earn XP?',
    a: 'Complete lessons in the Learn tab. Each correct answer earns XP, and finishing a lesson awards a bonus. Your daily XP goal resets every day.',
  },
  {
    q: 'How does the streak work?',
    a: 'Open the app and complete at least one activity each day to keep your streak alive. Miss a day and the streak resets to 1.',
  },
  {
    q: 'Can I change Rwen\'s voice?',
    a: 'Yes — go to Profile → Rwen\'s Voice and pick from George, Charlie, Jessica, or Alice. The change applies to text-to-speech immediately.',
  },
  {
    q: 'Is my conversation with Rwen private?',
    a: 'Your messages are sent to Anthropic (Claude) for processing and stored in Supabase for up to 12 months. Anthropic does NOT use your conversations to train its models. Voice recordings are deleted within 24 hours. See the Privacy Policy for full detail.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Subscriptions are managed through your app store (App Store or Google Play). EU/UK users have a 14-day cooling-off period during which you can cancel for a full refund.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Profile → Delete Account & All Data. This removes your profile, lesson progress, and conversation history within 30 days. The action cannot be undone.',
  },
  {
    q: 'I found a bug — what do I do?',
    a: 'Tap "Contact Us" below or email support@rwendo.app. Include your device, app version, and what you were doing when the bug happened.',
  },
  {
    q: 'When is real-time conversation coming?',
    a: 'It\'s in development. Hands-free voice calls with Rwen will arrive with the Companion subscription tier in an upcoming update.',
  },
];

export default function HelpScreen() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Help & FAQ" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.intro}>Quick answers to the questions Rwen hears most.</Text>

        {FAQ.map((item, i) => {
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
          onPress={() =>
            Linking.openURL('mailto:support@rwendo.app?subject=Rwendo support').catch(() => {})
          }
        >
          <Text style={styles.contactBtnText}>Still stuck? Email support@rwendo.app</Text>
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
