import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getUnitsForPack } from '../../data/lessons';
import { useSettings } from '../../lib/SettingsContext';
import { useProgress } from '../../hooks/useProgress';
import { useDailyXpGoal } from '../../lib/preferences';
import { COURSES } from '../../data/courses';
import { CoursePackId } from '../../types/packs';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

type TrackType = 'language' | 'ai-companion' | 'travel';

export default function LearnScreen() {
  const { t } = useTranslation('learn');
  const { t: tCommon } = useTranslation('common');
  const { activePack, spokenLanguage, learnedLanguage, courses, ownedCourseIds, starterCourseId } = useSettings();
  const { xp, streakDays, completedLessons, refresh } = useProgress();
  const { goal: dailyXpGoal } = useDailyXpGoal();

  // Track selection: 'language' (default — show curriculum), 'ai-companion', 'travel'
  const [selectedTrack, setSelectedTrack] = useState<TrackType>('language');

  const units = getUnitsForPack(activePack.id);
  const greeting = spokenLanguage.ui.greeting;
  const headerTitle = `${learnedLanguage.flag}  ${learnedLanguage.name}`;
  const dailyXpProgress = Math.min((xp % dailyXpGoal) / dailyXpGoal, 1);

  // Tracks the user could see in this view, with their entitlement status
  const tracks = [
    {
      type: 'language' as TrackType,
      emoji: learnedLanguage.flag,
      title: t('tab.tracks.language_title'),
      sub: t('tab.tracks.language_sub', { lang: learnedLanguage.name }),
      active: ownedCourseIds.includes('language-shona') || starterCourseId === 'language-shona',
    },
    {
      type: 'ai-companion' as TrackType,
      emoji: '🦎',
      title: t('tab.tracks.companion_title'),
      sub: t('tab.tracks.companion_sub'),
      active: ownedCourseIds.includes('ai-companion'),
      comingSoon: !COURSES['ai-companion'].meta.isActive,
    },
    {
      type: 'travel' as TrackType,
      emoji: '✈️',
      title: t('tab.tracks.travel_title'),
      sub: t('tab.tracks.travel_sub'),
      active: false,
      comingSoon: true,
    },
  ];

  const handleTrackTap = (track: typeof tracks[0]) => {
    if (track.type === 'language') {
      setSelectedTrack('language');
      return;
    }
    if (track.type === 'ai-companion') {
      if (track.comingSoon) return;
      router.push('/(tabs)/companion');
      return;
    }
    if (track.type === 'travel') {
      router.push('/(tabs)/travel');
      return;
    }
  };

  // Refresh progress every time this tab is focused (e.g. after completing a lesson)
  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
          </View>
          <View style={styles.streakBadge}>
            <Text style={styles.streakEmoji}>🔥</Text>
            <Text style={styles.streakText}>{streakDays}</Text>
          </View>
        </View>

        <View style={styles.xpCard}>
          <View style={styles.xpRow}>
            <Text style={styles.xpLabel}>{t('tab.daily_xp')}</Text>
            <Text style={styles.xpValue}>{tCommon('xp_progress', { current: xp % dailyXpGoal, goal: dailyXpGoal })}</Text>
          </View>
          <View style={styles.xpBarBg}>
            <View style={[styles.xpBarFill, { width: `${dailyXpProgress * 100}%` }]} />
          </View>
        </View>

        {/* Track selection cards (Phase G) */}
        <Text style={styles.sectionTitle}>{t('tab.tracks_title')}</Text>
        <View style={styles.trackRow}>
          {tracks.map(track => (
            <Pressable
              key={track.type}
              style={[
                styles.trackCard,
                track.type === selectedTrack && styles.trackCardSelected,
                track.comingSoon && styles.trackCardLocked,
              ]}
              onPress={() => handleTrackTap(track)}
              disabled={track.comingSoon && track.type !== 'travel'}
            >
              <Text style={styles.trackEmoji}>{track.emoji}</Text>
              <Text style={[styles.trackTitle, track.comingSoon && styles.lockedText]}>{track.title}</Text>
              <Text style={[styles.trackSub, track.comingSoon && styles.lockedText]}>{track.sub}</Text>
              {track.comingSoon && (
                <View style={styles.trackBadge}>
                  <Text style={styles.trackBadgeText}>{t('tab.tracks.soon')}</Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>

        {selectedTrack !== 'language' ? null : units.length === 0 ? (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonEmoji}>{learnedLanguage.flag}</Text>
            <Text style={styles.comingSoonTitle}>
              {t('tab.coming_soon_title', { lang: learnedLanguage.name })}
            </Text>
            <Text style={styles.comingSoonSub}>
              {t('tab.coming_soon_sub')}
            </Text>
          </View>
        ) : (
          <>
            <Text style={styles.sectionTitle}>{t('tab.units')}</Text>
            {units.map((unit, index) => {
              const completedCount = unit.lessons.filter(l => completedLessons.has(l.id)).length;
              const isLocked = index > 0 && units[index - 1].lessons.filter(l => completedLessons.has(l.id)).length < units[index - 1].lessons.length;
              return (
                <Pressable
                  key={unit.id}
                  style={[styles.unitCard, isLocked && styles.unitCardLocked]}
                  disabled={isLocked}
                  onPress={() => router.push(`/unit/${unit.id}`)}
                >
                  <View style={styles.unitEmoji}>
                    <Text style={styles.unitEmojiText}>{isLocked ? '🔒' : unit.emoji}</Text>
                  </View>
                  <View style={styles.unitInfo}>
                    <Text style={[styles.unitTitle, isLocked && styles.lockedText]}>{unit.title}</Text>
                    <Text style={[styles.unitDesc, isLocked && styles.lockedText]}>{unit.description}</Text>
                    <View style={styles.unitMeta}>
                      <Text style={styles.unitMetaText}>{t('tab.lesson_count', { count: unit.lessons.length })}</Text>
                      {!isLocked && <Text style={styles.unitProgress}>{t('tab.unit_progress', { completed: completedCount, total: unit.lessons.length })}</Text>}
                    </View>
                    {!isLocked && (
                      <View style={styles.progressBarBg}>
                        <View style={[styles.progressBarFill, { width: `${(completedCount / unit.lessons.length) * 100}%` }]} />
                      </View>
                    )}
                  </View>
                </Pressable>
              );
            })}
          </>
        )}

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  container: { flex: 1, backgroundColor: Colors.accent },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  greeting: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', fontWeight: FontWeight.medium },
  headerTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  streakEmoji: { fontSize: 16 },
  streakText: { color: Colors.streak, fontWeight: FontWeight.bold, fontSize: FontSize.md },
  xpCard: {
    backgroundColor: Colors.primary,
    marginHorizontal: Spacing.lg,
    marginTop: -1,
    marginBottom: Spacing.md,
    padding: Spacing.md,
    borderBottomLeftRadius: BorderRadius.lg,
    borderBottomRightRadius: BorderRadius.lg,
  },
  xpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: Spacing.xs },
  xpLabel: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm },
  xpValue: { color: Colors.xp, fontSize: FontSize.sm, fontWeight: FontWeight.bold },
  xpBarBg: { height: 6, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: BorderRadius.full },
  xpBarFill: { height: 6, backgroundColor: Colors.xp, borderRadius: BorderRadius.full },
  sectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.gray[800],
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  unitCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  unitCardLocked: { opacity: 0.6 },
  trackRow: {
    flexDirection: 'row', gap: Spacing.sm,
    paddingHorizontal: Spacing.lg, marginBottom: Spacing.md,
  },
  trackCard: {
    flex: 1,
    backgroundColor: Colors.white, borderRadius: BorderRadius.lg,
    padding: Spacing.md, gap: 4,
    borderWidth: 2, borderColor: Colors.white,
    shadowColor: Colors.black, shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 1,
    alignItems: 'flex-start', position: 'relative',
  },
  trackCardSelected: { borderColor: Colors.primary, backgroundColor: '#EFF6FF' },
  trackCardLocked: { opacity: 0.6 },
  trackEmoji: { fontSize: 24 },
  trackTitle: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  trackSub: { fontSize: FontSize.xs, color: Colors.gray[500] },
  trackBadge: { position: 'absolute', top: 6, right: 6, backgroundColor: Colors.gray[200], paddingHorizontal: 6, paddingVertical: 2, borderRadius: BorderRadius.full },
  trackBadgeText: { fontSize: 9, color: Colors.gray[600], fontWeight: FontWeight.bold },
  unitEmoji: {
    width: 56, height: 56,
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitEmojiText: { fontSize: 28 },
  unitInfo: { flex: 1, gap: 4 },
  unitTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  unitDesc: { fontSize: FontSize.sm, color: Colors.gray[500] },
  lockedText: { color: Colors.gray[400] },
  unitMeta: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  unitMetaText: { fontSize: FontSize.xs, color: Colors.gray[400] },
  unitProgress: { fontSize: FontSize.xs, color: Colors.secondary, fontWeight: FontWeight.medium },
  progressBarBg: { height: 4, backgroundColor: Colors.gray[100], borderRadius: BorderRadius.full, marginTop: 6 },
  progressBarFill: { height: 4, backgroundColor: Colors.secondary, borderRadius: BorderRadius.full },
  comingSoon: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.xl,
    gap: Spacing.md,
  },
  comingSoonEmoji: { fontSize: 56 },
  comingSoonTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.gray[700],
    textAlign: 'center',
  },
  comingSoonSub: {
    fontSize: FontSize.md,
    color: Colors.gray[400],
    textAlign: 'center',
    lineHeight: 22,
  },
});
