import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { getUnitsForPack } from '../../data/lessons';
import { useSettings } from '../../lib/SettingsContext';
import { useProgress } from '../../hooks/useProgress';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const DAILY_XP_GOAL = 50;

export default function LearnScreen() {
  const { activePack, spokenLanguage, learnedLanguage } = useSettings();
  const { xp, streakDays, completedLessons, refresh } = useProgress();

  const units = getUnitsForPack(activePack.id);
  const greeting = spokenLanguage.ui.greeting;
  const headerTitle = `${learnedLanguage.flag}  ${learnedLanguage.name}`;
  const dailyXpProgress = Math.min((xp % DAILY_XP_GOAL) / DAILY_XP_GOAL, 1);

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
            <Text style={styles.xpLabel}>Daily XP</Text>
            <Text style={styles.xpValue}>{xp % DAILY_XP_GOAL} / {DAILY_XP_GOAL} XP</Text>
          </View>
          <View style={styles.xpBarBg}>
            <View style={[styles.xpBarFill, { width: `${dailyXpProgress * 100}%` }]} />
          </View>
        </View>

        {units.length === 0 ? (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonEmoji}>{learnedLanguage.flag}</Text>
            <Text style={styles.comingSoonTitle}>
              {learnedLanguage.name} curriculum coming soon
            </Text>
            <Text style={styles.comingSoonSub}>
              We're building the lessons now. Check back soon!
            </Text>
          </View>
        ) : (
          <>
            <Text style={styles.sectionTitle}>Units</Text>
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
                      <Text style={styles.unitMetaText}>{unit.lessons.length} lessons</Text>
                      {!isLocked && <Text style={styles.unitProgress}>{completedCount}/{unit.lessons.length} done</Text>}
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
