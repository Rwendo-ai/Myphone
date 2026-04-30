import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader';
import { useProgress } from '../../hooks/useProgress';
import { useSettings } from '../../lib/SettingsContext';
import { getUnitsForPack } from '../../data/lessons';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface Achievement {
  id: string;
  emoji: string;
  title: string;
  description: string;
  unlocked: boolean;
  progress?: { current: number; total: number };
}

export default function AchievementsScreen() {
  const { xp, streakDays, completedLessons } = useProgress();
  const { activePack } = useSettings();

  const units = getUnitsForPack(activePack.id);
  const totalLessons = units.reduce((sum, u) => sum + u.lessons.length, 0);
  const lessonCount = completedLessons.size;

  const completedModules = units.filter((u) =>
    u.lessons.every((l) => completedLessons.has(l.id))
  ).length;

  const achievements: Achievement[] = [
    {
      id: 'first_lesson',
      emoji: '🌱',
      title: 'First Steps',
      description: 'Completed your very first lesson.',
      unlocked: lessonCount >= 1,
    },
    {
      id: 'streak_3',
      emoji: '🔥',
      title: 'Three-Day Spark',
      description: '3 days in a row.',
      unlocked: streakDays >= 3,
      progress: { current: Math.min(streakDays, 3), total: 3 },
    },
    {
      id: 'streak_7',
      emoji: '🏕️',
      title: 'Week Warrior',
      description: 'Kept your streak alive for 7 days.',
      unlocked: streakDays >= 7,
      progress: { current: Math.min(streakDays, 7), total: 7 },
    },
    {
      id: 'streak_30',
      emoji: '🌍',
      title: 'Month of Mhoro',
      description: '30-day streak. Rwen is proud.',
      unlocked: streakDays >= 30,
      progress: { current: Math.min(streakDays, 30), total: 30 },
    },
    {
      id: 'xp_100',
      emoji: '⭐',
      title: 'Bright Spark',
      description: 'Earned 100 XP.',
      unlocked: xp >= 100,
      progress: { current: Math.min(xp, 100), total: 100 },
    },
    {
      id: 'xp_500',
      emoji: '🌟',
      title: 'Rising Star',
      description: 'Earned 500 XP.',
      unlocked: xp >= 500,
      progress: { current: Math.min(xp, 500), total: 500 },
    },
    {
      id: 'xp_1000',
      emoji: '✨',
      title: 'Constellation',
      description: 'Earned 1,000 XP.',
      unlocked: xp >= 1000,
      progress: { current: Math.min(xp, 1000), total: 1000 },
    },
    {
      id: 'module_1',
      emoji: '📕',
      title: 'Module Master',
      description: 'Completed your first module.',
      unlocked: completedModules >= 1,
    },
    {
      id: 'module_5',
      emoji: '📚',
      title: 'Halfway There',
      description: 'Completed 5 modules.',
      unlocked: completedModules >= 5,
      progress: { current: Math.min(completedModules, 5), total: 5 },
    },
    {
      id: 'lessons_25',
      emoji: '🪴',
      title: 'Quarter Climber',
      description: 'Completed 25 lessons.',
      unlocked: lessonCount >= 25,
      progress: { current: Math.min(lessonCount, 25), total: 25 },
    },
    {
      id: 'lessons_50',
      emoji: '🌳',
      title: 'Halfway Tree',
      description: 'Completed 50 lessons.',
      unlocked: lessonCount >= 50,
      progress: { current: Math.min(lessonCount, 50), total: 50 },
    },
    {
      id: 'graduated',
      emoji: '🎓',
      title: 'Rwendo Graduate',
      description: `Completed all ${totalLessons} lessons.`,
      unlocked: totalLessons > 0 && lessonCount >= totalLessons,
      progress: { current: lessonCount, total: totalLessons },
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title="Achievements"
        subtitle={`${unlockedCount} of ${achievements.length} unlocked`}
      />
      <ScrollView contentContainerStyle={styles.content}>
        {achievements.map((a) => (
          <View key={a.id} style={[styles.card, !a.unlocked && styles.cardLocked]}>
            <Text style={[styles.emoji, !a.unlocked && styles.emojiLocked]}>{a.emoji}</Text>
            <View style={styles.cardMain}>
              <Text style={[styles.cardTitle, !a.unlocked && styles.cardTitleLocked]}>{a.title}</Text>
              <Text style={styles.cardDesc}>{a.description}</Text>
              {a.progress && !a.unlocked ? (
                <View style={styles.progressWrap}>
                  <View style={styles.progressBg}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${(a.progress.current / a.progress.total) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.progressText}>
                    {a.progress.current} / {a.progress.total}
                  </Text>
                </View>
              ) : null}
            </View>
            {a.unlocked ? <Text style={styles.check}>✓</Text> : null}
          </View>
        ))}

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.sm },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  cardLocked: { opacity: 0.55 },
  emoji: { fontSize: 36 },
  emojiLocked: { opacity: 0.5 },
  cardMain: { flex: 1, gap: 2 },
  cardTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  cardTitleLocked: { color: Colors.gray[600] },
  cardDesc: { fontSize: FontSize.xs, color: Colors.gray[500], lineHeight: 18 },
  progressWrap: { gap: 4, marginTop: 6 },
  progressBg: { height: 4, backgroundColor: Colors.gray[100], borderRadius: BorderRadius.full },
  progressFill: { height: 4, backgroundColor: Colors.secondary, borderRadius: BorderRadius.full },
  progressText: { fontSize: FontSize.xs, color: Colors.gray[400] },
  check: { fontSize: FontSize.xl, color: Colors.success, fontWeight: FontWeight.bold },
});
