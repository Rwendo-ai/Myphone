import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { useSettings } from '../../lib/SettingsContext';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { CoursePack, CoursePackId } from '../../types/packs';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

/**
 * Language Pack screen.
 *
 * Surfaces the language courses available to THIS user's speaker pack,
 * exactly the same set that appears under "Languages" in the Learn tab.
 *   - English speaker → 4 courses (Learn Shona / French / Chinese / Tagalog)
 *   - Shona / French / Chinese / Tagalog speaker → 1 course (Learn English,
 *     with the speaker's variant of the content)
 *
 * Selection sets `activeCourseId` (the same setter the Learn tab uses) so
 * the user's pick is reflected everywhere immediately.
 *
 * The legacy pair-based PACKS system (data/packs.ts) was retired here in
 * favour of the new course architecture.
 */

const COMING_SOON: Array<{ id: string; flag: string; name: string }> = [
  { id: 'language-spanish',    flag: '🇪🇸', name: 'Spanish' },
  { id: 'language-portuguese', flag: '🇵🇹', name: 'Portuguese' },
  { id: 'language-arabic',     flag: '🇸🇦', name: 'Arabic' },
  { id: 'language-japanese',   flag: '🇯🇵', name: 'Japanese' },
  { id: 'language-korean',     flag: '🇰🇷', name: 'Korean' },
];

export default function LanguagePackScreen() {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const { speaker, courses, activeCourseId, setActiveCourseId } = useSettings();

  // Just the language courses this speaker can actually use. Same filter
  // the Learn tab applies; keeps the two surfaces in sync by construction.
  const languageCourses = useMemo(
    () => courses.filter((c) => c.meta.type === 'language'),
    [courses],
  );

  const handleSelect = async (course: CoursePack) => {
    setActiveCourseId(course.meta.id);
    if (user) {
      // Persist to profiles.active_course_ids (text[]) so the next session
      // resumes where the user left off. Single-active for v1 — write the
      // pick as a one-element array.
      await supabase
        .from('profiles')
        .update({
          active_course_ids: [course.meta.id],
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);
    }
    router.back();
  };

  const handleComingSoon = (name: string) => {
    Alert.alert(
      `${name} — coming soon`,
      `${name} isn't available yet. We'll let you know when it lands.`,
    );
  };

  // The "available" line under each card — different message for the
  // course we know is fully authored across multiple speakers (language-
  // english) vs single-speaker courses still in early state.
  const subForCourse = (course: CoursePack): string => {
    if (course.meta.id === 'language-english') {
      return `${speaker.englishName} speaker variant — 100 lessons`;
    }
    return `For ${speaker.englishName} speakers — 100 lessons`;
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title={t('language_pack_screen.title')}
        subtitle={
          languageCourses.length === 1
            ? `As a ${speaker.englishName} speaker, one language course is currently available to you.`
            : `As a ${speaker.englishName} speaker, ${languageCourses.length} language courses are available to you.`
        }
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>{t('language_pack_screen.available_now')}</Text>

        {languageCourses.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🌍</Text>
            <Text style={styles.emptyTitle}>No language courses for your speaker pack yet</Text>
            <Text style={styles.emptySub}>
              Switch your App Language in Profile to see different course options.
            </Text>
          </View>
        )}

        {languageCourses.map((course) => {
          const isActive = (activeCourseId as CoursePackId | null) === course.meta.id;
          return (
            <Pressable
              key={course.meta.id}
              style={[styles.card, isActive && styles.cardActive]}
              onPress={() => handleSelect(course)}
            >
              <Text style={styles.flag}>{course.meta.emoji}</Text>
              <View style={styles.cardMain}>
                <Text style={styles.cardTitle}>{course.meta.displayName}</Text>
                <Text style={styles.cardSub}>{subForCourse(course)}</Text>
              </View>
              {isActive ? <Text style={styles.check}>✓</Text> : null}
            </Pressable>
          );
        })}

        <Text style={styles.sectionTitle}>{t('language_pack_screen.coming_soon_section')}</Text>
        {COMING_SOON.map((pack) => (
          <Pressable
            key={pack.id}
            style={[styles.card, styles.cardLocked]}
            onPress={() => handleComingSoon(pack.name)}
          >
            <Text style={[styles.flag, styles.flagLocked]}>{pack.flag}</Text>
            <View style={styles.cardMain}>
              <Text style={[styles.cardTitle, styles.lockedText]}>{pack.name}</Text>
              <Text style={[styles.cardSub, styles.lockedText]}>{t('language_pack_screen.coming_soon_label')}</Text>
            </View>
            <Text style={styles.lock}>🔒</Text>
          </Pressable>
        ))}

        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.sm },
  sectionTitle: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.gray[400],
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: Spacing.sm,
    marginBottom: Spacing.xs,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  cardActive: { borderColor: Colors.primary, backgroundColor: '#EFF6FF' },
  cardLocked: { opacity: 0.7 },
  flag: { fontSize: 28, width: 40, textAlign: 'center' },
  flagLocked: { opacity: 0.6 },
  cardMain: { flex: 1, gap: 2 },
  cardTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  cardSub: { fontSize: FontSize.xs, color: Colors.gray[500] },
  lockedText: { color: Colors.gray[400] },
  check: { fontSize: FontSize.xl, color: Colors.primary, fontWeight: FontWeight.bold },
  lock: { fontSize: FontSize.lg },

  emptyState: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  emptyEmoji: { fontSize: 56 },
  emptyTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[700], textAlign: 'center' },
  emptySub: { fontSize: FontSize.sm, color: Colors.gray[400], textAlign: 'center', lineHeight: 20 },
});
