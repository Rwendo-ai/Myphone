import { View, Text, StyleSheet, ScrollView, Pressable, Alert, Switch, Image, ActivityIndicator, Share, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, router } from 'expo-router';
import { useCallback, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import { useAuth } from '../../lib/AuthContext';
import { deleteAccount } from '../../lib/progress';
import { useProgress } from '../../hooks/useProgress';
import { useSettings, RWEN_VOICES, RwenVoiceKey } from '../../lib/SettingsContext';
import { useDailyXpGoal, useDailyReminders } from '../../lib/preferences';
import { pickAndUploadAvatar } from '../../lib/storage';
import { supabase } from '../../lib/supabase';
import { THEMES } from '../../constants/themes';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
}

function SettingsRow({ label, value, onPress, danger }: {
  label: string; value?: string; onPress?: () => void; danger?: boolean;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress} disabled={!onPress}>
      <Text style={[styles.rowLabel, danger && { color: Colors.error }]}>{label}</Text>
      <View style={styles.rowRight}>
        {value && <Text style={styles.rowValue}>{value}</Text>}
        {onPress && <Text style={styles.rowChevron}>›</Text>}
      </View>
    </Pressable>
  );
}

export default function ProfileScreen() {
  const { t } = useTranslation('common');
  const { user, signOut } = useAuth();
  const { xp, streakDays, username, completedLessons, refresh } = useProgress();
  const { rwenVoice, setRwenVoice, learnedLanguage, spokenLanguage, theme, setThemeId, avatarUrl, setAvatarUrl } = useSettings();
  const { goal: dailyXpGoal } = useDailyXpGoal();
  const { enabled: remindersOn, setEnabled: setRemindersOn } = useDailyReminders();
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  const handleAvatarPress = async () => {
    if (!user) return;
    setUploadingAvatar(true);
    const url = await pickAndUploadAvatar(user.id);
    if (url) {
      setAvatarUrl(url);
      await supabase.from('profiles').update({ avatar_url: url }).eq('id', user.id);
    }
    setUploadingAvatar(false);
  };

  const handleThemeSelect = async (themeId: string) => {
    setThemeId(themeId);
    if (user) await supabase.from('profiles').update({ theme_id: themeId }).eq('id', user.id);
  };
  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  const displayName = username || user?.email?.split('@')[0] || t('fallback_learner');
  const initial = displayName[0]?.toUpperCase() ?? 'L';

  const handleSignOut = () => {
    Alert.alert(t('profile.sign_out.confirm_title'), t('profile.sign_out.confirm_body'), [
      { text: t('actions.cancel'), style: 'cancel' },
      { text: t('profile.sign_out.confirm_action'), style: 'destructive', onPress: signOut },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      t('profile.delete_account.confirm_title'),
      t('profile.delete_account.confirm_body'),
      [
        { text: t('actions.cancel'), style: 'cancel' },
        {
          text: t('profile.delete_account.confirm_action'),
          style: 'destructive',
          onPress: async () => {
            try { if (user) await deleteAccount(user.id); }
            catch { Alert.alert(t('profile.delete_account.error_title'), t('profile.delete_account.error_body')); }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Profile hero */}
        <LinearGradient colors={theme.gradient} style={styles.hero}>
          <View style={styles.avatarRow}>
            {/* Tappable avatar */}
            <Pressable style={styles.avatarWrap} onPress={handleAvatarPress} disabled={uploadingAvatar}>
              {avatarUrl
                ? <Image source={{ uri: avatarUrl }} style={styles.avatarImage} />
                : <View style={[styles.avatar, { backgroundColor: theme.secondary }]}>
                    <Text style={styles.avatarInitial}>{initial}</Text>
                  </View>
              }
              {uploadingAvatar
                ? <View style={styles.avatarOverlay}><ActivityIndicator color="#fff" /></View>
                : <View style={styles.avatarBadge}><Text style={styles.avatarBadgeText}>📷</Text></View>
              }
            </Pressable>
            <View style={styles.heroInfo}>
              <Text style={styles.heroName}>{displayName}</Text>
              <Text style={styles.heroEmail}>{user?.email}</Text>
              <Text style={[styles.heroLang, { color: theme.secondary }]}>
                {spokenLanguage.flag} → {learnedLanguage.flag} {learnedLanguage.name}
              </Text>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{xp}</Text>
              <Text style={styles.statLabel}>{t('profile.stats.total_xp')}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>🔥 {streakDays}</Text>
              <Text style={styles.statLabel}>{t('profile.stats.streak')}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{completedLessons.size}</Text>
              <Text style={styles.statLabel}>{t('profile.stats.lessons')}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>

          {/* Subscription */}
          <Section title={t('profile.sections.my_plan')}>
            <View style={styles.planCard}>
              <View>
                <Text style={styles.planName}>{t('profile.plan.free_name')}</Text>
                <Text style={styles.planDesc}>{t('profile.plan.free_desc')}</Text>
              </View>
              <Pressable style={styles.upgradeBtn} onPress={() => router.push('/profile/plans')}>
                <Text style={styles.upgradeBtnText}>{t('profile.plan.upgrade')}</Text>
              </Pressable>
            </View>
            <SettingsRow label={t('profile.plan.view_all_plans')} onPress={() => router.push('/profile/plans')} />
          </Section>

          {/* Colour Theme */}
          <Section title={t('profile.sections.colour_theme')}>
            <View style={styles.themeGrid}>
              {Object.values(THEMES).map((th) => (
                <Pressable
                  key={th.id}
                  style={[styles.themeChip, theme.id === th.id && styles.themeChipActive]}
                  onPress={() => handleThemeSelect(th.id)}
                >
                  <View style={[styles.themeSwatch, { backgroundColor: th.primary }]}>
                    <View style={[styles.themeSwatchInner, { backgroundColor: th.secondary }]} />
                  </View>
                  <Text style={[styles.themeChipLabel, theme.id === th.id && { color: Colors.primary, fontWeight: FontWeight.bold }]}>
                    {th.emoji} {th.name}
                  </Text>
                  {theme.id === th.id && <Text style={styles.themeCheck}>✓</Text>}
                </Pressable>
              ))}
            </View>
          </Section>

          {/* Rwen's Voice */}
          <Section title={t('profile.sections.rwens_voice')}>
            <View style={styles.voiceGrid}>
              {(Object.keys(RWEN_VOICES) as RwenVoiceKey[]).map((key) => (
                <Pressable
                  key={key}
                  style={[styles.voiceCard, rwenVoice === key && styles.voiceCardActive]}
                  onPress={() => setRwenVoice(key)}
                >
                  <Text style={styles.voiceGender}>{key.startsWith('female') ? '👩' : '👨'}</Text>
                  <Text style={[styles.voiceName, rwenVoice === key && styles.voiceNameActive]}>{t(`profile.voices.${key}.name`)}</Text>
                  <Text style={styles.voiceDesc}>{t(`profile.voices.${key}.description`)}</Text>
                  {rwenVoice === key && <Text style={styles.voiceCheck}>✓</Text>}
                </Pressable>
              ))}
            </View>
          </Section>

          {/* Learning preferences */}
          <Section title={t('profile.sections.learning')}>
            <SettingsRow
              label={t('profile.learning.language_pack')}
              value={`${spokenLanguage.flag} → ${learnedLanguage.flag}`}
              onPress={() => router.push('/profile/language-pack')}
            />
            <SettingsRow
              label={t('profile.learning.daily_xp_goal')}
              value={t('profile.learning.daily_xp_value', { count: dailyXpGoal })}
              onPress={() => router.push('/profile/daily-goal')}
            />
            <Pressable
              style={styles.row}
              onPress={() => {
                const next = !remindersOn;
                setRemindersOn(next);
                if (next) {
                  Alert.alert(
                    t('profile.learning.reminders_enabled_title'),
                    t('profile.learning.reminders_enabled_body')
                  );
                }
              }}
            >
              <Text style={styles.rowLabel}>{t('profile.learning.daily_reminders')}</Text>
              <Switch
                value={remindersOn}
                onValueChange={setRemindersOn}
                trackColor={{ true: Colors.secondary }}
                thumbColor={Colors.white}
              />
            </Pressable>
          </Section>

          {/* Progress */}
          <Section title={t('profile.sections.my_progress')}>
            <SettingsRow label={t('profile.progress_rows.completed_lessons')} value={String(completedLessons.size)} />
            <SettingsRow label={t('profile.progress_rows.current_streak')} value={t('profile.progress_rows.streak_days', { count: streakDays })} />
            <SettingsRow label={t('profile.progress_rows.total_xp_earned')} value={String(xp)} />
            <SettingsRow label={t('profile.progress_rows.achievements')} onPress={() => router.push('/profile/achievements')} />
          </Section>

          {/* Account */}
          <Section title={t('profile.sections.account')}>
            <SettingsRow label={t('profile.account_rows.edit_profile')} onPress={() => router.push('/profile/edit')} />
            <SettingsRow label={t('profile.account_rows.change_password')} onPress={() => router.push('/profile/change-password')} />
            <SettingsRow label={t('profile.account_rows.privacy_settings')} onPress={() => router.push('/profile/privacy')} />
            <SettingsRow label={t('profile.account_rows.export_data')} onPress={() => router.push('/profile/export')} />
          </Section>

          {/* Legal */}
          <Section title={t('profile.sections.legal')}>
            <SettingsRow label={t('profile.legal_rows.terms')} onPress={() => router.push('/(legal)/terms-of-service')} />
            <SettingsRow label={t('profile.legal_rows.privacy_policy')} onPress={() => router.push('/(legal)/privacy-policy')} />
          </Section>

          {/* Support */}
          <Section title={t('profile.sections.support')}>
            <SettingsRow label={t('profile.support_rows.help_faq')} onPress={() => router.push('/profile/help')} />
            <SettingsRow label={t('profile.support_rows.about')} onPress={() => router.push('/profile/about')} />
            <SettingsRow
              label={t('profile.support_rows.contact_us')}
              onPress={() => {
                const subject = encodeURIComponent(t('profile.support_rows.contact_email_subject'));
                Linking.openURL(`mailto:support@rwendo.app?subject=${subject}`).catch(() =>
                  Alert.alert(t('profile.support_rows.no_email_app_title'), t('profile.support_rows.no_email_app_body'))
                );
              }}
            />
          </Section>

          {/* Sign out / delete */}
          <Section title="">
            <Pressable style={styles.signOutBtn} onPress={handleSignOut}>
              <Text style={styles.signOutText}>{t('profile.sign_out.button')}</Text>
            </Pressable>
            <Pressable style={styles.deleteBtn} onPress={handleDeleteAccount}>
              <Text style={styles.deleteText}>{t('profile.delete_account.button')}</Text>
            </Pressable>
          </Section>

          <View style={{ height: Spacing.xxl }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  hero: { padding: Spacing.lg, gap: Spacing.lg },
  avatarRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  avatarWrap: { position: 'relative', width: 72, height: 72 },
  avatar: {
    width: 72, height: 72, borderRadius: 36,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarImage: { width: 72, height: 72, borderRadius: 36 },
  avatarOverlay: {
    position: 'absolute', inset: 0, borderRadius: 36,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center', justifyContent: 'center',
  },
  avatarBadge: {
    position: 'absolute', bottom: -2, right: -2,
    width: 24, height: 24, borderRadius: 12,
    backgroundColor: Colors.secondary,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: Colors.white,
  },
  avatarBadgeText: { fontSize: 10 },
  avatarInitial: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.white },
  heroInfo: { flex: 1, gap: 3 },
  heroName: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  heroEmail: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.5)' },
  heroLang: { fontSize: FontSize.sm, color: Colors.secondary, fontWeight: FontWeight.medium },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
  },
  statItem: { flex: 1, alignItems: 'center', gap: 2 },
  statValue: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.white },
  statLabel: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' },
  statDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.1)' },

  content: { backgroundColor: Colors.accent },
  section: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.lg },
  sectionTitle: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.gray[400], textTransform: 'uppercase', letterSpacing: 1, marginBottom: Spacing.sm },
  sectionContent: { backgroundColor: Colors.white, borderRadius: BorderRadius.lg, overflow: 'hidden', shadowColor: Colors.black, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.04, shadowRadius: 4, elevation: 1 },

  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.gray[50] },
  rowLabel: { fontSize: FontSize.md, color: Colors.gray[700] },
  rowRight: { flexDirection: 'row', alignItems: 'center', gap: Spacing.xs },
  rowValue: { fontSize: FontSize.sm, color: Colors.gray[400] },
  rowChevron: { fontSize: FontSize.xl, color: Colors.gray[300] },

  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[50],
  },
  planName: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  planDesc: { fontSize: FontSize.xs, color: Colors.gray[400] },
  upgradeBtn: { backgroundColor: Colors.xp, paddingHorizontal: Spacing.md, paddingVertical: Spacing.xs, borderRadius: BorderRadius.full },
  upgradeBtnText: { color: Colors.white, fontWeight: FontWeight.bold, fontSize: FontSize.sm },

  themeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, padding: Spacing.md },
  themeChip: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.sm,
    borderRadius: BorderRadius.lg, borderWidth: 2,
    borderColor: Colors.gray[100], padding: Spacing.sm,
    backgroundColor: Colors.gray[50], minWidth: '45%',
  },
  themeChipActive: { borderColor: Colors.primary, backgroundColor: '#EFF6FF' },
  themeSwatch: { width: 32, height: 32, borderRadius: 8, justifyContent: 'flex-end', alignItems: 'flex-end', overflow: 'hidden' },
  themeSwatchInner: { width: 16, height: 16, borderTopLeftRadius: 8 },
  themeChipLabel: { flex: 1, fontSize: FontSize.xs, color: Colors.gray[600] },
  themeCheck: { color: Colors.primary, fontWeight: FontWeight.bold, fontSize: FontSize.sm },
  voiceGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, padding: Spacing.md },
  voiceCard: { flex: 1, minWidth: '45%', borderRadius: BorderRadius.md, borderWidth: 2, borderColor: Colors.gray[100], padding: Spacing.md, alignItems: 'center', gap: 3, backgroundColor: Colors.gray[50] },
  voiceCardActive: { borderColor: Colors.secondary, backgroundColor: '#EFF6FF' },
  voiceGender: { fontSize: 28 },
  voiceName: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.gray[700] },
  voiceNameActive: { color: Colors.primary },
  voiceDesc: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center' },
  voiceCheck: { color: Colors.secondary, fontWeight: FontWeight.bold },

  signOutBtn: {
    backgroundColor: Colors.white,
    margin: Spacing.lg,
    marginBottom: Spacing.sm,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  signOutText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[700] },
  deleteBtn: { alignItems: 'center', paddingVertical: Spacing.sm, marginHorizontal: Spacing.lg },
  deleteText: { fontSize: FontSize.sm, color: Colors.error },
});
