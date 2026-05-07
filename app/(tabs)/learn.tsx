import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getUnitsForPack, getUnitsForCourse } from '../../data/lessons';
import { getLessonManifest, getCourseModuleMeta } from '../../lib/manifests';
import { useSettings } from '../../lib/SettingsContext';
import { useProgress } from '../../hooks/useProgress';
import { useDailyXpGoal } from '../../lib/preferences';
import { CoursePack, CoursePackId } from '../../types/packs';
import { DEV_UNLOCK_ALL } from '../../constants/dev';
import ProfilePicButton from '../../components/ProfilePicButton';
import {
  isCourseInstalled,
  courseDiskBytes,
  installCourse,
  uninstallCourse,
} from '../../lib/lesson-loader';

// Mid-market launch price per language course. Per-jurisdiction localisation
// lives in `available_packs.prices_by_jurisdiction` (queried once when the
// purchase flow is wired). RevenueCat will eventually be the source of truth.
const COURSE_PRICE_AUD = 14.99;

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

// The Learn tab is the "course hub". It surfaces only educational courses
// — Languages and Build Yourself (self-development). The AI Companion and
// Travel are not courses — they live on their own tabs.
type CourseCategory = 'languages' | 'build-yourself';

// Map a course pack to its Learn-tab category. The discriminator lives on
// the pack itself (course.meta.type) so adding a new category = new type
// + new entry here.
function categoryForCourse(course: CoursePack): CourseCategory | null {
  if (course.meta.type === 'language')         return 'languages';
  if (course.meta.type === 'self-development') return 'build-yourself';
  return null;
}

// Today's units table is keyed by legacy pack ID. Used only for `language-shona`
// where 10 hand-authored units exist with richer descriptions than the
// manifest synthesis. Every other course (including language-english, which
// now has 100 lessons across 4 speaker variants) goes through the manifest
// path so all 10 units render.
function courseIdToLegacyPackId(courseId: CoursePackId): string | null {
  if (courseId === 'language-shona')   return 'shona-english';
  return null;
}


export default function LearnScreen() {
  const { t } = useTranslation('learn');
  const { t: tCommon } = useTranslation('common');
  const {
    spokenLanguage, learnedLanguage,
    courses, activeCourseId, setActiveCourseId,
    entitlementContext, speaker,
  } = useSettings();
  const speakerId = speaker.id;
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
      DEV_UNLOCK_ALL
      || entitlementContext.starterCourseId === courseId
      || entitlementContext.ownedCourseIds.includes(courseId),
    [entitlementContext.starterCourseId, entitlementContext.ownedCourseIds],
  );

  const initialCategory: CourseCategory = useMemo(() => {
    const active = educationalCourses.find(c => c.meta.id === activeCourseId);
    return (active && categoryForCourse(active)) ?? 'languages';
  }, [educationalCourses, activeCourseId]);

  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>(initialCategory);
  const [showMoreCourses, setShowMoreCourses] = useState(false);

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

  const otherOwnedInCategory = useMemo(
    () => ownedInCategory.filter(c => c.meta.id !== courseToShow?.meta.id),
    [ownedInCategory, courseToShow],
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
    // 2) Synthesised units for every language course — derived from the
    //    static lesson manifest + shared MODULE_META map. Manifests carry
    //    only id/module/lesson/title/xpReward; full lesson content streams
    //    from Supabase Storage on first open.
    const manifest = getLessonManifest(courseToShow.meta.id);
    if (manifest && manifest.length > 0) {
      return getUnitsForCourse(
        courseToShow.meta.id,
        manifest,
        getCourseModuleMeta(courseToShow.meta.id),
      );
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseToShow, spokenLanguage.id]);

  const greeting = spokenLanguage.ui.greeting;
  const headerTitle = `${learnedLanguage.flag}  ${learnedLanguage.name}`;
  const dailyXpProgress = Math.min((xp % dailyXpGoal) / dailyXpGoal, 1);

  const categories: Array<{ key: CourseCategory; emoji: string; label: string }> = [
    { key: 'languages',      emoji: '🌍', label: t('tab.categories.languages') },
    { key: 'build-yourself', emoji: '🌱', label: t('tab.categories.build_yourself', { defaultValue: 'Build Yourself' }) },
  ];

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

  // ─── Install state for the active course ─────────────────────────────────
  // Tracks whether the active course's lessons are downloaded to local disk
  // and how many KB they take. Surfaced as a tap-to-manage row under the
  // active course pill. All wiring lives in `lib/lesson-loader.ts`.
  const [installState, setInstallState] = useState<{
    installed: boolean;
    bytes: number;
    pending?: 'install' | 'uninstall';
  }>({ installed: false, bytes: 0 });

  const refreshInstallState = useCallback(async () => {
    if (!courseToShow) return;
    const installed = await isCourseInstalled(courseToShow.meta.id, speakerId);
    const bytes = installed ? await courseDiskBytes(courseToShow.meta.id, speakerId) : 0;
    setInstallState({ installed, bytes });
  }, [courseToShow, speakerId]);

  useEffect(() => { refreshInstallState(); }, [refreshInstallState]);

  const handleManageStorage = useCallback(() => {
    if (!courseToShow) return;
    const courseId = courseToShow.meta.id;
    const manifest = getLessonManifest(courseId);
    const lessonIds = (manifest ?? []).map((m) => m.id);

    if (installState.installed) {
      Alert.alert(
        courseToShow.meta.displayName,
        `Installed · ${formatBytes(installState.bytes)}\n\nFree this space? Lessons will re-download next time you open them.`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Free space',
            style: 'destructive',
            onPress: async () => {
              setInstallState((s) => ({ ...s, pending: 'uninstall' }));
              await uninstallCourse(courseId, speakerId);
              await refreshInstallState();
            },
          },
        ],
      );
      return;
    }

    Alert.alert(
      courseToShow.meta.displayName,
      `Download all ${lessonIds.length} lessons for offline use? (~${Math.max(1, Math.round(lessonIds.length * 5))} KB)`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Download',
          onPress: async () => {
            setInstallState((s) => ({ ...s, pending: 'install' }));
            await installCourse(courseId, speakerId, lessonIds);
            await refreshInstallState();
          },
        },
      ],
    );
  }, [courseToShow, installState, speakerId, refreshInstallState]);

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

        {courseToShow && (
          <View style={styles.coursePillSection}>
            <Pressable
              style={[styles.coursePill, styles.coursePillActive]}
              onPress={() => handleSelectCourse(courseToShow)}
            >
              <Text style={styles.coursePillEmoji}>{courseToShow.meta.emoji}</Text>
              <Text style={[styles.coursePillLabel, styles.coursePillLabelActive]}>
                {courseToShow.meta.displayName}
              </Text>
              <Text style={styles.coursePillCheck}>✓</Text>
            </Pressable>
            <Pressable style={styles.storageRow} onPress={handleManageStorage} disabled={!!installState.pending}>
              <Text style={styles.storageRowIcon}>
                {installState.pending === 'install' ? '⏳'
                  : installState.pending === 'uninstall' ? '🗑️'
                  : installState.installed ? '💾' : '⬇️'}
              </Text>
              <Text style={styles.storageRowText}>
                {installState.pending === 'install' ? 'Downloading…'
                  : installState.pending === 'uninstall' ? 'Freeing space…'
                  : installState.installed
                    ? `Installed · ${formatBytes(installState.bytes)}`
                    : 'Tap to download for offline use'}
              </Text>
              {!installState.pending && (
                <Text style={styles.storageRowAction}>{installState.installed ? 'Manage' : 'Download'}</Text>
              )}
            </Pressable>
          </View>
        )}

        {(otherOwnedInCategory.length > 0 || lockedInCategory.length > 0) && (
          <View style={styles.coursePillSection}>
            <Pressable
              style={[styles.buyAnotherCard, showMoreCourses && styles.buyAnotherCardOpen]}
              onPress={() => setShowMoreCourses((s) => !s)}
            >
              <View style={styles.buyAnotherIconWrap}>
                <Text style={styles.buyAnotherIcon}>{showMoreCourses ? '−' : '+'}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.buyAnotherTitle}>
                  {t('tab.next_course.label', { defaultValue: 'Get your next course' })}
                </Text>
                <Text style={styles.buyAnotherSub}>
                  {showMoreCourses
                    ? `${otherOwnedInCategory.length + lockedInCategory.length} available · tap to hide`
                    : `${otherOwnedInCategory.length + lockedInCategory.length} available`}
                </Text>
              </View>
              <Text style={styles.buyAnotherChevron}>{showMoreCourses ? '▾' : '▸'}</Text>
            </Pressable>

            {showMoreCourses && (
              <>
                {otherOwnedInCategory.map(course => (
                  <Pressable
                    key={course.meta.id}
                    style={styles.coursePill}
                    onPress={() => handleSelectCourse(course)}
                  >
                    <Text style={styles.coursePillEmoji}>{course.meta.emoji}</Text>
                    <Text style={styles.coursePillLabel}>{course.meta.displayName}</Text>
                  </Pressable>
                ))}
                {lockedInCategory.map(course => (
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
              </>
            )}
          </View>
        )}

        {coursesInCategory.length === 0 ? (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonEmoji}>
              {selectedCategory === 'build-yourself' ? '🌱' : '🌍'}
            </Text>
            <Text style={styles.comingSoonTitle}>
              {selectedCategory === 'build-yourself'
                ? t('tab.empty_category.build_yourself_title', { defaultValue: 'Build Yourself courses coming online' })
                : t('tab.empty_category.languages_title', { defaultValue: 'No language courses for your speaker pack yet' })}
            </Text>
            <Text style={styles.comingSoonSub}>
              {selectedCategory === 'build-yourself'
                ? t('tab.empty_category.build_yourself_body', { defaultValue: 'Knowing Yourself, Hard Conversations, Sleep, Money, Grief — eight self-development courses authored. Surfacing here as the runtime catches up.' })
                : t('tab.empty_category.languages_body', { defaultValue: 'Pick a different speaker pack in Profile to see courses.' })}
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
  storageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: BorderRadius.md,
  },
  storageRowIcon: { fontSize: 16 },
  storageRowText: { flex: 1, fontSize: FontSize.sm, color: Colors.gray[700] },
  storageRowAction: { fontSize: FontSize.sm, color: Colors.secondary, fontWeight: FontWeight.bold },
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
