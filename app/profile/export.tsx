import { View, Text, StyleSheet, ScrollView, Pressable, Alert, Share, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function ExportScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState<{ profile: boolean; lessons: number; conversations: number } | null>(null);

  const fetchExport = async () => {
    if (!user) return null;

    const [profileRes, lessonsRes, conversationsRes] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', user.id).single(),
      supabase.from('lesson_progress').select('*').eq('user_id', user.id),
      supabase
        .from('conversations')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true }),
    ]);

    return {
      exportedAt: new Date().toISOString(),
      account: {
        userId: user.id,
        email: user.email,
        createdAt: user.created_at,
      },
      profile: profileRes.data ?? null,
      lessonProgress: lessonsRes.data ?? [],
      conversations: conversationsRes.data ?? [],
    };
  };

  const handlePreview = async () => {
    setLoading(true);
    const data = await fetchExport();
    setLoading(false);
    if (!data) {
      Alert.alert('Could not load', 'Please try again in a moment.');
      return;
    }
    setCounts({
      profile: data.profile !== null,
      lessons: data.lessonProgress.length,
      conversations: data.conversations.length,
    });
  };

  const handleShare = async () => {
    setLoading(true);
    const data = await fetchExport();
    setLoading(false);
    if (!data) {
      Alert.alert('Could not load', 'Please try again in a moment.');
      return;
    }
    try {
      await Share.share({
        title: 'My Rwendo data',
        message: JSON.stringify(data, null, 2),
      });
    } catch {
      // user cancelled or share unavailable - ignore
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Export my data" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Your data, in one file</Text>
          <Text style={styles.body}>
            Generate a JSON copy of your profile, lesson progress, and conversation history with Rwen. You can email it to yourself, save it to Files, or send it anywhere your device supports.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>What's included</Text>
        <View style={styles.list}>
          <Item label="Account" desc="Email, account creation date" />
          <Item label="Profile" desc="Display name, learning preferences, settings" />
          <Item label="Lesson progress" desc="Every completed lesson with score and XP" />
          <Item label="Conversations" desc="All messages exchanged with Rwen" />
        </View>

        {counts ? (
          <View style={styles.countsBox}>
            <Text style={styles.countsTitle}>Summary</Text>
            <Text style={styles.countsLine}>Profile: {counts.profile ? 'included' : 'missing'}</Text>
            <Text style={styles.countsLine}>Lesson records: {counts.lessons}</Text>
            <Text style={styles.countsLine}>Messages: {counts.conversations}</Text>
          </View>
        ) : null}

        <View style={styles.actions}>
          <Pressable
            style={[styles.btnSecondary, loading && styles.btnDisabled]}
            onPress={handlePreview}
            disabled={loading}
          >
            <Text style={styles.btnSecondaryText}>Preview what's there</Text>
          </Pressable>

          <Pressable
            style={[styles.btnPrimary, loading && styles.btnDisabled]}
            onPress={handleShare}
            disabled={loading}
          >
            {loading
              ? <ActivityIndicator color={Colors.white} />
              : <Text style={styles.btnPrimaryText}>Generate & share</Text>
            }
          </Pressable>
        </View>

        <Text style={styles.note}>
          Your data is generated on-device from Supabase and only sent where you choose to share it. Nothing is uploaded to a third-party.
        </Text>

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Item({ label, desc }: { label: string; desc: string }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <Text style={styles.itemDesc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.md },
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
  title: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.primary },
  body: { fontSize: FontSize.sm, color: Colors.gray[700], lineHeight: 22 },
  sectionTitle: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.gray[400], textTransform: 'uppercase', letterSpacing: 1, marginTop: Spacing.sm },
  list: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  item: { padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.gray[50] },
  itemLabel: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  itemDesc: { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 2 },
  countsBox: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: 4,
  },
  countsTitle: { color: Colors.white, fontWeight: FontWeight.bold, fontSize: FontSize.sm, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  countsLine: { color: 'rgba(255,255,255,0.85)', fontSize: FontSize.sm },
  actions: { gap: Spacing.sm, marginTop: Spacing.md },
  btnPrimary: {
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  btnPrimaryText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  btnSecondary: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  btnSecondaryText: { color: Colors.gray[700], fontSize: FontSize.md, fontWeight: FontWeight.semibold },
  btnDisabled: { opacity: 0.6 },
  note: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center', lineHeight: 18, marginTop: Spacing.md },
});
