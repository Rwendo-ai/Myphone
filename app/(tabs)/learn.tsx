import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getUnitsForPack, getUnitsForCourse } from '../../data/lessons';
import { getCourse } from '../../data/courses';
import { useSettings } from '../../lib/SettingsContext';
import { useProgress } from '../../hooks/useProgress';
import { useDailyXpGoal } from '../../lib/preferences';
import { CoursePack, CoursePackId } from '../../types/packs';
import { DEV_UNLOCK_ALL } from '../../constants/dev';
import ProfilePicButton from '../../components/ProfilePicButton';

// Mid-market launch price per language course. Per-jurisdiction localisation
// lives in `available_packs.prices_by_jurisdiction` (queried once when the
// purchase flow is wired). RevenueCat will eventually be the source of truth.
const COURSE_PRICE_AUD = 14.99;
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

// The Learn tab is the "course hub". It surfaces only educational courses
// (Languages, AI courses, Know Yourself). The AI Companion and Travel are
// not courses — they live on their own tabs.
type CourseCategory = 'languages' | 'ai-courses' | 'know-yourself';

// v1 only ships language courses; AI courses and Know Yourself are placeholders
// until their first course is authored. When a non-language educational course
// pack is added, give it a meta.type that this map turns into the right category.
function categoryForCourse(course: CoursePack): CourseCategory | null {
  if (course.meta.type === 'language') return 'languages';
  return null;
}

// Today's units table is keyed by legacy pack ID. Once non-language educational
// courses ship, units should migrate to course-ID keys directly.
function courseIdToLegacyPackId(courseId: CoursePackId): string | null {
  if (courseId === 'language-shona')   return 'shona-english';
  if (courseId === 'language-english') return 'english-shona';
  return null;
}

/**
 * Synchronously load the bundled curriculum for a course. Each course has
 * a single authored variant in v1 (english speakers learning X, or shona
 * speakers learning English). Non-native-speaker users fall back to that
 * authored variant — see Phase K for proper per-speaker authoring.
 */
function tryRequireCurriculum(courseId: CoursePackId): Record<string, { id: string; module: number; lesson: number; title: string; xpReward: number }> | undefined {
  try {
    /* eslint-disable @typescript-eslint/no-var-requires */
    if (courseId === 'language-shona')   return require('../../data/courses/language-shona/english/curriculum').default;
    if (courseId === 'language-english') return require('../../data/courses/language-english/shona/curriculum').default;
    if (courseId === 'language-french')  return require('../../data/courses/language-french/english/curriculum').default;
    if (courseId === 'language-chinese') return require('../../data/courses/language-chinese/english/curriculum').default;
    if (courseId === 'language-tagalog') return require('../../data/courses/language-tagalog/english/curriculum').default;
    /* eslint-enable @typescript-eslint/no-var-requires */
  } catch {
    return undefined;
  }
  return undefined;
}

export default function LearnScreen() {
  const { t } = useTranslation('learn');
  const { t: tCommon } = useTranslation('common');
  const {
    spokenLanguage, learnedLanguage,
    courses, activeCourseId, setActiveCourseId,
    entitlementContext,
  } = useSettings();
  const { xp, streakDays, completedLessons, refresh } = useProgress();
  const { goal: dailyXpGoal } = useDailyXpGoal();

  // Every authored educational course is rendered; the visual treatment splits
  // into owned vs. locked based on the user's entitlements (starter +
  // user_packs rows). DEV_UNLOCK_ALL deliberately does NOT bypass this split
  // — the developer wants to preview what testers will see. DEV_UNLOCK_ALL
  // still lets the developer enter locked courses (canAccessLesson honours
  // the flag), so tapping a locked card opens the lesson screen as normal in
  // dev, while testers without the flag get the buy alert.
  const educationalCourses = useMemo(
    () => courses.filter(c => categoryForCourse(c) !== null),
    [courses],
  );

  const isOwned = useCallback(
    (courseId: CoursePackId) =>
      entitlementContext.starterCourseId === courseId
      || entitlementContext.ownedCourseIds.includes(courseId),
    [entitlementContext.starterCourseId, entitlementContext.ownedCourseIds],
  );

  const initialCategory: CourseCategory = useMemo(() => {
    const active = educationalCourses.find(c => c.meta.id === activeCourseId);
    return (active && categoryForCourse(active)) ?? 'languages';
  }, [educationalCourses, activeCourseId]);

  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>(initialCategory);
  const [showLocked, setShowLocked] = useState(false);

  const coursesInCategory = useMemo(
    () => educationalCourses.filter(c => categoryForCourse(c) === selectedCategory),
    [educationalCourses, selectedCategory],
  );

  const ownedInCategory = useMemo(
    () => coursesInCategory.filter(c => isOwned(c.meta.id)),
    [coursesInCategory, isOwned],
  );

  const lockedInCategory = useMemo(
    () => coursesInCategory.filter(c => !isOwned(c.meta.id)),
    [coursesInCategory, isOwned],
  );

  const courseToShow = useMemo(
    () => ownedInCategory.find(c => c.meta.id === activeCourseId) ?? ownedInCategory[0],
    [ownedInCategory, activeCourseId],
  );

  const units = useMemo(() => {
    if (!courseToShow) return [];
    // 1) Hand-authored UNITS metadata for legacy packs (shona-english,
    //    english-shona). Richest data — module titles, vocabulary hints,
    //    XP — written by hand in data/lessons.ts.
    const legacy = courseIdToLegacyPackId(courseToShow.meta.id);
    if (legacy) {
      const handAuthored = getUnitsForPack(legacy);
      if (handAuthored.length > 0) return handAuthored;
    }
    // 2) Synthesised units for the other 3 language courses (french /
    //    chinese / tagalog) — derived at runtime from the course's
    //    bundled curriculum + the shared MODULE_META map.
    const course = getCourse(courseToShow.meta.id);
    const variant = course?.variants[spokenLanguage.id as string]
                  ?? course?.variants.english
                  ?? course?.variants.shona;
    const lessonsRecord: Record<string, { id: string; module: number; lesson: number; title: string; xpReward: number }> | undefined =
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      tryRequireCurriculum(courseToShow.meta.id);
    if (lessonsRecord) {
      return getUnitsForCourse(courseToShow.meta.id, Object.values(lessonsRecord));
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseToShow, spokenLanguage.id]);

  const greeting = spokenLanguage.ui.greeting;
  const headerTitle = `${learnedLanguage.flag}  ${learnedLanguage.name}`;
  const dailyXpProgress = Math.min((xp % dailyXpGoal) / dailyXpGoal, 1);

  const categories: Array<{ key: CourseCategory; emoji: string; label: string }> = [
    { key: 'languages',     emoji: '🌍', label: t('tab.categories.languages') },
    { key: 'ai-courses',    emoji: '🤖', label: t('tab.categories.ai_courses') },
    { key: 'know-yourself', emoji: '🌱', label: t('tab.categories.know_yourself') },
  ];

  const buyLabelKey: Record<CourseCategory, string> = {
    'languages':     'tab.buy.language_course',
    'ai-courses':    'tab.buy.ai_course',
    'know-yourself': 'tab.buy.know_yourself_course',
  };

  const handleSelectCourse = (course: CoursePack) => {
    if (course.meta.id !== activeCourseId) setActiveCourseId(course.meta.id);
  };

  const handleBuyCourse = (course: CoursePack) => {
    Alert.alert(
      `Buy ${course.meta.displayName}`,
      `Unlock all 100 lessons of ${course.meta.displayName} for $${COURSE_PRICE_AUD.toFixed(2)} AUD.\n\nIn-app purchases are coming soon — we'll let you know when this is live.`,
      [{ text: 'OK', style: 'default' }],
    );
  };

  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
          </View>
          <View style={styles.headerRightCluster}>
            <View style={styles.streakBadge}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakText}>{streakDays}</Text>
            </View>
            <ProfilePicButton variant="light" />
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

        <Text style={styles.sectionTitle}>{t('tab.categories_title')}</Text>
        <View style={styles.categoryRow}>
          {categories.map(cat => {
            const selected = cat.key === selectedCategory;
            return (
              <Pressable
                key={cat.key}
                style={[styles.categoryCard, selected && styles.categoryCardSelected]}
                onPress={() => setSelectedCategory(cat.key)}
              >
                <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
                <Text style={[styles.categoryLabel, selected && styles.categoryLabelSelected]}>{cat.label}</Text>
              </Pressable>
            );
          })}
        </View>

        {ownedInCategory.length > 0 && (
          <View style={styles.coursePillSection}>
            {ownedInCategory.map(course => {
              const isActive = course.meta.id === (courseToShow?.meta.id ?? null);
              return (
                <Pressable
                  key={course.meta.id}
                  style={[styles.coursePill, isActive && styles.coursePillActive]}
                  onPress={() => handleSelectCourse(course)}
                >
                  <Text style={styles.coursePillEmoji}>{course.meta.emoji}</Text>
                  <Text style={[styles.coursePillLabel, isActive && styles.coursePillLabelActive]}>
                    {course.meta.displayName}
                  </Text>
                  {isActive && <Text style={styles.coursePillCheck}>✓</Text>}
                </Pressable>
              );
            })}
          </View>
        )}

        {lockedInCategory.length > 0 && (
          <View style={styles.coursePillSection}>
            <Pressable
              style={[styles.buyAnotherCard, showLocked && styles.buyAnotherCardOpen]}
              onPress={() => setShowLocked((s) => !s)}
            >
              <View style={styles.buyAnotherIconWrap}>
                <Text style={styles.buyAnotherIcon}>{showLocked ? '−' : '+'}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.buyAnotherTitle}>{t(buyLabelKey[selectedCategory])}</Text>
                <Text style={styles.buyAnotherSub}>
                  {showLocked
                    ? `${lockedInCategory.length} available · tap to hide`
                    : `${lockedInCategory.length} available · from $${COURSE_PRICE_AUD.toFixed(2)}`}
                </Text>
              </View>
              <Text style={styles.buyAnotherChevron}>{showLocked ? '▾' : '▸'}</Text>
            </Pressable>

            {showLocked && lockedInCategory.map(course => (
              <Pressable
                key={course.meta.id}
                style={[styles.coursePill, styles.coursePillLocked]}
                onPress={() => handleBuyCourse(course)}
              >
                <Text style={[styles.coursePillEmoji, styles.lockedDim]}>{course.meta.emoji}</Text>
                <Text style={[styles.coursePillLabel, styles.lockedDim]}>
                  {course.meta.displayName}
                </Text>
                <Text style={styles.coursePillPrice}>${COURSE_PRICE_AUD.toFixed(2)}</Text>
                <Text style={styles.coursePillLock}>🔒</Text>
              </Pressable>
            ))}
          </View>
        )}

        {coursesInCategory.length === 0 ? (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonEmoji}>
              {selectedCategory === 'ai-courses' ? '🤖' : '🌱'}
            </Text>
            <Text style={styles.comingSoonTitle}>
              {t(selectedCategory === 'ai-courses'
                ? 'tab.empty_category.ai_courses_title'
                : 'tab.empty_category.know_yourself_title')}
            </Text>
            <Text style={styles.comingSoonSub}>
              {t(selectedCategory === 'ai-courses'
                ? 'tab.empty_category.ai_courses_body'
                : 'tab.empty_category.know_yourself_body')}
            </Text>
          </View>
        ) : ownedInCategory.length === 0 ? (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonEmoji}>🔒</Text>
            <Text style={styles.comingSoonTitle}>No courses unlocked yet</Text>
            <Text style={styles.comingSoonSub}>
              Pick a language above to start your journey.
            </Text>
          </View>
        ) : units.length === 0 ? (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonEmoji}>{learnedLanguage.flag}</Text>
            <Text style={styles.comingSoonTitle}>
              {t('tab.coming_soon_title', { lang: learnedLanguage.name })}
            </Text>
            <Text style={styles.comingSoonSub}>{t('tab.coming_soon_sub')}</Text>
          </View>
        ) : (
          <>
            <Text style={styles.sectionTitle}>{t('tab.units')}</Text>
            {units.map((unit, index) => {
              const completedCount = unit.lessons.filter(l => completedLessons.has(l.id)).length;
              const previousIncomplete = index > 0
                && units[index - 1].lessons.filter(l => completedLessons.has(l.id)).length < units[index - 1].lessons.length;
              // Unit-progression lock — bypassed for the developer so they
              // can preview every unit without grinding through prerequisites.
              const isLocked = previousIncomplete && !DEV_UNLOCK_ALL;
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
  headerRightCluster: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
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
  categoryRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    alignItems: 'center',
    gap: 6,
    borderWidth: 2,
    borderColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  categoryCardSelected: { borderColor: Colors.primary, backgroundColor: '#EFF6FF' },
  categoryEmoji: { fontSize: 26 },
  categoryLabel: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.gray[700], textAlign: 'center' },
  categoryLabelSelected: { color: Colors.primary },
  coursePillSection: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  coursePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
    borderWidth: 2,
    borderColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  coursePillActive: { borderColor: Colors.primary },
  coursePillEmoji: { fontSize: 24 },
  coursePillLabel: { flex: 1, fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  coursePillLabelActive: { color: Colors.primary },
  coursePillCheck: { fontSize: FontSize.md, color: Colors.primary, fontWeight: FontWeight.bold },
  buyAnotherPill: {
    backgroundColor: 'transparent',
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.gray[300],
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  buyAnotherLabel: { fontSize: FontSize.sm, color: Colors.gray[600], fontWeight: FontWeight.medium },

  // Expandable "Buy another language course" card
  buyAnotherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    gap: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  buyAnotherCardOpen: {
    borderColor: Colors.secondary,
    backgroundColor: '#F0F7FF',
  },
  buyAnotherIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyAnotherIcon: {
    color: Colors.white,
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    lineHeight: FontSize.lg + 4,
  },
  buyAnotherTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.gray[800],
  },
  buyAnotherSub: {
    fontSize: FontSize.xs,
    color: Colors.gray[500],
    marginTop: 2,
  },
  buyAnotherChevron: {
    fontSize: FontSize.md,
    color: Colors.gray[400],
  },
  lockedHeader: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.gray[500],
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  coursePillLocked: {
    backgroundColor: Colors.gray[50],
    borderColor: Colors.gray[200],
    borderStyle: 'dashed',
  },
  lockedDim: {
    opacity: 0.55,
  },
  coursePillPrice: {
    marginLeft: 'auto',
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.secondary,
  },
  coursePillLock: {
    fontSize: FontSize.md,
    marginLeft: Spacing.xs,
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
