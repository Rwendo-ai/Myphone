import { CoursePack, CoursePackMeta } from '../../../types/packs';
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
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
