import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Hard Conversations at Work course pack.
 *
 * Self-development track under the "Build Yourself" umbrella, parallel to
 * Knowing Yourself. 8 lessons, one unit, English source-of-truth.
 * Translations to other speaker languages happen at runtime via Claude.
 *
 * Track plan: `docs/curriculum/TRACK-HARD-CONVERSATIONS-WORK-PLAN.md`.
 * Lessons: `data/courses/hard-conversations-work/english/curriculum/`.
 */
const meta: CoursePackMeta = {
  id: 'hard-conversations-work',
  type: 'self-development',
  displayName: 'Hard Conversations at Work',
  targetLanguageId: undefined,
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '💬',
  primaryColor: '#3B5C7A',
  secondaryColor: '#D9A45B',
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

/** Synchronous lookup for the lesson screen. English is the source-of-truth
 *  variant; other speakers fall through to it until per-speaker authoring
 *  or runtime translation lands. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
