import { CoursePack, CoursePackMeta } from '../../../types/packs';
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
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
