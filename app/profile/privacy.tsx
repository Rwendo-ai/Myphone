import { View, Text, StyleSheet, ScrollView, Pressable, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function PrivacyScreen() {
  const { user } = useAuth();
  const [clearing, setClearing] = useState(false);

  const handleClearConversations = () => {
    if (!user) return;
    Alert.alert(
      'Clear conversation history?',
      'This permanently deletes every message you\'ve exchanged with Rwen. Your lesson progress and account stay intact. This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear all',
          style: 'destructive',
          onPress: async () => {
            setClearing(true);
            const { error } = await supabase
              .from('conversations')
              .delete()
              .eq('user_id', user.id);
            setClearing(false);
            if (error) {
              Alert.alert('Could not clear', error.message);
              return;
            }
            Alert.alert('Cleared', 'Your conversation history has been deleted.');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Privacy settings" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.introText}>
            Manage what data Rwendo keeps about you. For the full policy, read the Privacy Policy.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Your data</Text>
        <View style={styles.card}>
          <Pressable style={styles.row} onPress={handleClearConversations} disabled={clearing}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>Clear conversation history</Text>
              <Text style={styles.rowSub}>Delete every message you've sent to Rwen.</Text>
            </View>
            {clearing ? <ActivityIndicator color={Colors.primary} /> : <Text style={styles.chevron}>›</Text>}
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.row} onPress={() => router.push('/profile/export')}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>Export my data</Text>
              <Text style={styles.rowSub}>Download a copy of your profile, progress, and conversations.</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>What we share</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>Anthropic (Claude)</Text>
              <Text style={styles.rowSub}>Receives your messages to generate Rwen's replies. Not used for training.</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>ElevenLabs (voice)</Text>
              <Text style={styles.rowSub}>Generates Rwen's voice and transcribes yours. Audio deleted within 24 hours.</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>Supabase (database)</Text>
              <Text style={styles.rowSub}>Stores your account, progress, and conversation history.</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Your rights</Text>
        <View style={styles.card}>
          <Pressable style={styles.row} onPress={() => router.push('/(legal)/privacy-policy')}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>Privacy Policy</Text>
              <Text style={styles.rowSub}>Full detail of what we collect and why.</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
          <View style={styles.divider} />
          <Pressable style={styles.row} onPress={() => router.push('/(legal)/terms-of-service')}>
            <View style={styles.rowMain}>
              <Text style={styles.rowLabel}>Terms of Service</Text>
              <Text style={styles.rowSub}>Rules for using Rwendo.</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </View>

        <Text style={styles.note}>
          To delete your entire account, return to Profile → Delete Account & All Data.
        </Text>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.md },
  intro: { backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.md },
  introText: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22 },
  sectionTitle: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.gray[400], textTransform: 'uppercase', letterSpacing: 1, marginTop: Spacing.sm },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: Spacing.md, gap: Spacing.sm },
  rowMain: { flex: 1, gap: 2 },
  rowLabel: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  rowSub: { fontSize: FontSize.xs, color: Colors.gray[500], lineHeight: 18 },
  chevron: { fontSize: FontSize.xl, color: Colors.gray[300] },
  divider: { height: 1, backgroundColor: Colors.gray[100], marginHorizontal: Spacing.md },
  note: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center', lineHeight: 18, paddingHorizontal: Spacing.md, marginTop: Spacing.md },
});
