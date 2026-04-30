import { View, Text, StyleSheet, ScrollView, Pressable, Alert, Share, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function ExportScreen() {
  const { t } = useTranslation('common');
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
      Alert.alert(t('export_screen.load_error_title'), t('export_screen.load_error_body'));
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
      Alert.alert(t('export_screen.load_error_title'), t('export_screen.load_error_body'));
      return;
    }
    try {
      await Share.share({
        title: t('export_screen.share_title'),
        message: JSON.stringify(data, null, 2),
      });
    } catch {
      // user cancelled or share unavailable - ignore
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('export_screen.title')} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>{t('export_screen.hero_title')}</Text>
          <Text style={styles.body}>
            {t('export_screen.hero_body')}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>{t('export_screen.section_included')}</Text>
        <View style={styles.list}>
          <Item label={t('export_screen.items.account.label')}         desc={t('export_screen.items.account.desc')} />
          <Item label={t('export_screen.items.profile.label')}         desc={t('export_screen.items.profile.desc')} />
          <Item label={t('export_screen.items.lesson_progress.label')} desc={t('export_screen.items.lesson_progress.desc')} />
          <Item label={t('export_screen.items.conversations.label')}   desc={t('export_screen.items.conversations.desc')} />
        </View>

        {counts ? (
          <View style={styles.countsBox}>
            <Text style={styles.countsTitle}>{t('export_screen.summary_title')}</Text>
            <Text style={styles.countsLine}>{counts.profile ? t('export_screen.summary_profile_included') : t('export_screen.summary_profile_missing')}</Text>
            <Text style={styles.countsLine}>{t('export_screen.summary_lessons', { count: counts.lessons })}</Text>
            <Text style={styles.countsLine}>{t('export_screen.summary_messages', { count: counts.conversations })}</Text>
          </View>
        ) : null}

        <View style={styles.actions}>
          <Pressable
            style={[styles.btnSecondary, loading && styles.btnDisabled]}
            onPress={handlePreview}
            disabled={loading}
          >
            <Text style={styles.btnSecondaryText}>{t('export_screen.preview_btn')}</Text>
          </Pressable>

          <Pressable
            style={[styles.btnPrimary, loading && styles.btnDisabled]}
            onPress={handleShare}
            disabled={loading}
          >
            {loading
              ? <ActivityIndicator color={Colors.white} />
              : <Text style={styles.btnPrimaryText}>{t('export_screen.share_btn')}</Text>
            }
          </Pressable>
        </View>

        <Text style={styles.note}>
          {t('export_screen.note')}
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
