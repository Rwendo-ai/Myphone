import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Sleep, Repaired — self-development micro-course under the Build Yourself umbrella.
 *
 * v1 status: 8 lessons authored in English. Single-unit, behavioural sleep micro-course
 * anchored in CBT-I (Carney & Manber), Russell Foster's chronobiology, Matthew Walker's
 * sleep architecture (cited carefully — some popular claims overreach), and ACT-based
 * acceptance work for the anxiety-sleep loop.
 *
 * See `docs/curriculum/TRACK-SLEEP-REPAIRED-PLAN.md` for the full track plan,
 * three named worked-case audiences, and pedagogical decisions.
 */
const meta: CoursePackMeta = {
  id: 'sleep-repaired',
  type: 'self-development',
  displayName: 'Sleep, Repaired',
  targetLanguageId: undefined,
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🌙',
  primaryColor: '#1A2B4A',
  secondaryColor: '#7A8FB8',
};

const pack: CoursePack = {
  meta,
  variants: {
    english: {
      speakerId: 'english',
      curriculumLoader: async () => {
        const mod = await import('./english/curriculum');
        return mod.default ?? mod.lessons;
      },
    },
  },
};

/** Synchronous lesson lookup. Falls back to the english variant for any speaker
 *  until per-speaker variants are authored. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
