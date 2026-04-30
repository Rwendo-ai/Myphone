import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import RwenImage from '../../components/rwen/RwenImage';
import ScreenHeader from '../../components/ScreenHeader';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const APP_VERSION = Constants.expoConfig?.version ?? '1.0.0';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="About Rwendo" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <RwenImage pose="waving" size={120} />
          <Text style={styles.appName}>Rwendo</Text>
          <Text style={styles.tagline}>Every journey begins with hello</Text>
          <Text style={styles.version}>Version {APP_VERSION}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>What is Rwendo?</Text>
          <Text style={styles.cardBody}>
            Rwendo (Shona for "journey") is a language learning app and AI companion. Learn Shona with Rwen — a friendly chameleon powered by Claude AI and ElevenLabs voice — through a 7-phase lesson method based on second language acquisition research.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Meet Rwen</Text>
          <Text style={styles.cardBody}>
            Rwen is a chameleon, a creature that adapts to its surroundings. Rwen learns about you and adapts the way it speaks, teaches, and supports you. The more you talk, the better Rwen knows you.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>The Rwendo Method</Text>
          <Text style={styles.cardBody}>
            7 phases per lesson: Hook → Chunks → Pattern → Practice → Dialogue → Recall → Mission. Maximum 3 new chunks per lesson. 5–7 minutes per lesson. Built around 10 SLA pillars including spaced repetition, comprehensible input, and meaningful output.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Built by</Text>
          <Text style={styles.cardBody}>
            A solo developer based in Australia who believes language learning should feel like a conversation with a friend, not a chore.
          </Text>
        </View>

        <Pressable
          style={styles.linkRow}
          onPress={() => Linking.openURL('https://rwendo.app').catch(() => {})}
        >
          <Text style={styles.linkText}>rwendo.app</Text>
          <Text style={styles.linkArrow}>↗</Text>
        </Pressable>

        <Text style={styles.footer}>Made with ❤️ for everyone learning Shona{'\n'}Mhoro!</Text>

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
