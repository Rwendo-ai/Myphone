import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { getUnit, getCourseUnit } from '../../data/lessons';
import { getLessonManifest, getCourseModuleMeta } from '../../lib/manifests';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function UnitScreen() {
  const { t } = useTranslation('learn');
  const { id } = useLocalSearchParams<{ id: string }>();

  // Synthesised unit IDs follow `${courseId}::mNN` and resolve from the
  // course's manifest. Legacy IDs (greetings, survival, …) come from
  // hand-authored UNITS in data/lessons.ts.
  let unit = getUnit(id);
  if (!unit && id?.includes('::m')) {
    const courseId = id.slice(0, id.indexOf('::m'));
    const manifest = getLessonManifest(courseId);
    if (manifest) unit = getCourseUnit(id, manifest, getCourseModuleMeta(courseId));
  }

  if (!unit) return null;

  // Resolve which course this unit belongs to so the lesson screen can load
  // from the correct Storage path regardless of activeCourseId. Synthesised
  // units carry the course id in `packId`; legacy hand-authored units use
  // legacy pack ids that map 1:1 to language courses.
  const legacyToCourse: Record<string, string> = {
    'shona-english': 'language-shona',
    'english-shona': 'language-english',
  };
  const courseId = legacyToCourse[unit.packId] ?? unit.packId;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </Pressable>
        <Text style={styles.unitEmoji}>{unit.emoji}</Text>
        <Text style={styles.title}>{unit.title}</Text>
        <Text style={styles.description}>{unit.description}</Text>
      </View>

      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        <Text style={styles.sectionLabel}>{t('unit.section_label')}</Text>
        {unit.lessons.map((lesson, index) => (
          <Pressable
            key={lesson.id}
            style={styles.lessonCard}
            onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: lesson.id, courseId } })}
          >
            <View style={styles.lessonNumber}>
              <Text style={styles.lessonNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.lessonInfo}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <Text style={styles.lessonMeta}>{t('unit.xp_value', { count: lesson.xpReward })}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}
        <View style={{ height: Spacing.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  backBtn: {
    alignSelf: 'flex-start',
    paddingVertical: Spacing.sm,
  },
  backText: {
    color: Colors.white,
    fontSize: FontSize.xxl,
  },
  unitEmoji: { fontSize: 56 },
  title: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  },
  description: {
    fontSize: FontSize.md,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  list: { flex: 1, backgroundColor: Colors.accent },
  listContent: { padding: Spacing.lg, gap: Spacing.sm },
  sectionLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.gray[400],
    letterSpacing: 1,
    marginBottom: Spacing.xs,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  lessonNumber: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lessonNumberText: {
    color: Colors.white,
    fontWeight: FontWeight.bold,
    fontSize: FontSize.md,
  },
  lessonInfo: { flex: 1 },
  lessonTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.gray[800],
  },
  lessonMeta: {
    fontSize: FontSize.sm,
    color: Colors.gray[400],
    marginTop: 2,
  },
  chevron: {
    fontSize: FontSize.xl,
    color: Colors.gray[300],
  },
});
