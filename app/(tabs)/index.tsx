import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import RwenImage from '../../components/rwen/RwenImage';
import { useAuth } from '../../lib/AuthContext';
import { useSettings } from '../../lib/SettingsContext';
import { useProgress } from '../../hooks/useProgress';
import { getUnitsForPack } from '../../data/lessons';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const DAILY_XP_GOAL = 50;

function getShonaGreeting(): { shona: string; english: string; rwen: string } {
  const hour = new Date().getHours();
  if (hour < 12) return { shona: 'Mangwanani', english: 'Good morning', rwen: 'waving' };
  if (hour < 17) return { shona: 'Masikati', english: 'Good afternoon', rwen: 'idle' };
  return { shona: 'Manheru', english: 'Good evening', rwen: 'idle' };
}

function getRwenTip(completedCount: number, currentModule: number): string {
  const tips = [
    "Every great journey begins with 'Mhoro'. You've already taken the first step.",
    "In Shona, 'Ukama igasva hunozadziswa nekudya' — relationships are completed by sharing food. Share what you learn today.",
    "The prefix Ma- for elders, Wa- for friends. One letter, a world of respect.",
    "Sadza is more than food — it's identity. When you eat sadza, you eat Zimbabwe.",
    "Chara chimwe hachitswanyi inda — one finger cannot kill a louse. Keep building, word by word.",
    "Rwen tip: practice your last lesson out loud today. Speaking is 10× more effective than reading.",
    "Makadii? — three syllables that open every door in Zimbabwe.",
    "You're learning a language spoken by millions. Every word you master is a connection made.",
  ];
  return tips[completedCount % tips.length];
}

export default function HomeScreen() {
  const { user } = useAuth();
  const { activePack, learnedLanguage, spokenLanguage, theme, avatarUrl } = useSettings();
  const { xp, streakDays, username, completedLessons, refresh } = useProgress();

  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  const units = getUnitsForPack(activePack.id);
  const totalLessons = units.reduce((sum, u) => sum + u.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPct = totalLessons > 0 ? completedCount / totalLessons : 0;

  // Find next lesson
  let nextLesson = null;
  let nextUnit = null;
  outer: for (const unit of units) {
    for (const lesson of unit.lessons) {
      if (!completedLessons.has(lesson.id)) {
        nextLesson = lesson;
        nextUnit = unit;
        break outer;
      }
    }
  }

  const currentModule = units.findIndex(u => u.lessons.some(l => !completedLessons.has(l.id))) + 1;
  const greeting = getShonaGreeting();
  const tip = getRwenTip(completedCount, currentModule);
  const dailyXpProgress = Math.min((xp % DAILY_XP_GOAL) / DAILY_XP_GOAL, 1);
  const displayName = username || user?.email?.split('@')[0] || 'friend';

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hero section */}
        <LinearGradient colors={theme.gradient} style={styles.hero}>
          <View style={styles.heroTop}>
            <View>
              <Text style={styles.greatingShona}>{greeting.shona}!</Text>
              <Text style={styles.heroName}>{displayName}</Text>
              <Text style={styles.heroSub}>{greeting.english} — Day {streakDays > 0 ? streakDays : 1} of your journey</Text>
            </View>
            <RwenImage pose={greeting.rwen as any} size={110} />
          </View>

          {/* Stats row */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{xp}</Text>
              <Text style={styles.statLabel}>XP</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>🔥 {streakDays}</Text>
              <Text style={styles.statLabel}>Streak</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{completedCount}</Text>
              <Text style={styles.statLabel}>Lessons</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{Math.round(progressPct * 100)}%</Text>
              <Text style={styles.statLabel}>{learnedLanguage.name}</Text>
            </View>
          </View>

          {/* Daily XP bar */}
          <View style={styles.xpBarSection}>
            <View style={styles.xpBarRow}>
              <Text style={styles.xpBarLabel}>Daily goal</Text>
              <Text style={styles.xpBarValue}>{xp % DAILY_XP_GOAL} / {DAILY_XP_GOAL} XP</Text>
            </View>
            <View style={styles.xpBarBg}>
              <View style={[styles.xpBarFill, { width: `${dailyXpProgress * 100}%` }]} />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>

          {/* Talk to Rwen card */}
          <Pressable style={styles.rwenCard} onPress={() => router.push('/(tabs)/companion')}>
            <View style={styles.rwenCardLeft}>
              <Text style={styles.rwenCardTitle}>Talk to Rwen</Text>
              <Text style={styles.rwenCardSub}>Your AI companion is ready</Text>
            </View>
            <View style={styles.rwenCardRight}>
              <RwenImage pose="waving" size={64} />
            </View>
          </Pressable>

          {/* Continue learning card */}
          {nextLesson && nextUnit ? (
            <Pressable
              style={styles.continueCard}
              onPress={() => router.push(`/lesson/${nextLesson!.id}`)}
            >
              <View style={styles.continueLeft}>
                <Text style={styles.continueLabel}>CONTINUE LEARNING</Text>
                <Text style={styles.continueTitle}>{nextLesson.title}</Text>
                <Text style={styles.continueUnit}>{nextUnit.emoji} {nextUnit.title}</Text>
              </View>
              <View style={styles.continueArrow}>
                <Text style={styles.continueArrowText}>→</Text>
              </View>
            </Pressable>
          ) : (
            <View style={[styles.continueCard, { opacity: 0.7 }]}>
              <Text style={styles.continueTitle}>🎉 All lessons complete!</Text>
              <Text style={styles.continueUnit}>More coming soon</Text>
            </View>
          )}

          {/* Rwen's tip */}
          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <RwenImage pose="thinking" size={36} />
              <Text style={styles.tipTitle}>Rwen's Tip Today</Text>
            </View>
            <Text style={styles.tipText}>{tip}</Text>
          </View>

          {/* Quick actions */}
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickGrid}>
            <Pressable style={styles.quickCard} onPress={() => router.push('/(tabs)/learn')}>
              <Text style={styles.quickEmoji}>📚</Text>
              <Text style={styles.quickLabel}>All Lessons</Text>
            </Pressable>
            <Pressable style={styles.quickCard} onPress={() => router.push('/(tabs)/companion')}>
              <Text style={styles.quickEmoji}>💬</Text>
              <Text style={styles.quickLabel}>Chat</Text>
            </Pressable>
            <Pressable style={styles.quickCard} onPress={() => router.push('/(tabs)/travel')}>
              <Text style={styles.quickEmoji}>✈️</Text>
              <Text style={styles.quickLabel}>Travel</Text>
            </Pressable>
            <Pressable style={styles.quickCard} onPress={() => router.push('/(tabs)/profile')}>
              <Text style={styles.quickEmoji}>⚙️</Text>
              <Text style={styles.quickLabel}>Settings</Text>
            </Pressable>
          </View>

          {/* Language info */}
          <View style={styles.journeyCard}>
            <Text style={styles.journeyTitle}>
              {learnedLanguage.flag} Your {learnedLanguage.name} Journey
            </Text>
            <Text style={styles.journeyText}>
              {completedCount} of {totalLessons} lessons complete across {units.length} modules.{'\n'}
              {totalLessons - completedCount > 0
                ? `${totalLessons - completedCount} lessons to A2 fluency.`
                : 'A2 fluency achieved! 🎉'}
            </Text>
          </View>

          <View style={{ height: Spacing.xxl }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  hero: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.lg },
  heroTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.lg },
  greatingShona: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.xp },
  heroName: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white },
  heroSub: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.6)', marginTop: 2 },
  statsRow: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: BorderRadius.lg, padding: Spacing.md, marginBottom: Spacing.md },
  statItem: { flex: 1, alignItems: 'center', gap: 2 },
  statValue: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.white },
  statLabel: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 },
  statDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.1)' },
  xpBarSection: { gap: 6 },
  xpBarRow: { flexDirection: 'row', justifyContent: 'space-between' },
  xpBarLabel: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.5)' },
  xpBarValue: { fontSize: FontSize.xs, color: Colors.xp, fontWeight: FontWeight.bold },
  xpBarBg: { height: 6, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: BorderRadius.full },
  xpBarFill: { height: 6, backgroundColor: Colors.xp, borderRadius: BorderRadius.full },

  content: { backgroundColor: Colors.accent, padding: Spacing.lg, gap: Spacing.md },

  rwenCard: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  rwenCardLeft: { gap: 4 },
  rwenCardTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  rwenCardSub: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.6)' },
  rwenCardRight: {},

  continueCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  continueLeft: { flex: 1, gap: 4 },
  continueLabel: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.secondary, letterSpacing: 1 },
  continueTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  continueUnit: { fontSize: FontSize.sm, color: Colors.gray[500] },
  continueArrow: { width: 36, height: 36, borderRadius: BorderRadius.full, backgroundColor: Colors.secondary, alignItems: 'center', justifyContent: 'center' },
  continueArrowText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  tipCard: {
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
  tipHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  tipTitle: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.gray[600], textTransform: 'uppercase', letterSpacing: 0.5 },
  tipText: { fontSize: FontSize.md, color: Colors.gray[700], lineHeight: 22 },

  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[800], marginTop: Spacing.sm },
  quickGrid: { flexDirection: 'row', gap: Spacing.sm },
  quickCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
    gap: 6,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  quickEmoji: { fontSize: 28 },
  quickLabel: { fontSize: FontSize.xs, color: Colors.gray[600], fontWeight: FontWeight.medium, textAlign: 'center' },

  journeyCard: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  journeyTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.white },
  journeyText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', lineHeight: 20 },
});
