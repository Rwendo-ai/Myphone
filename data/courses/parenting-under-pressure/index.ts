import { CoursePack, CoursePackMeta } from '../../../types/packs';
/**
 * Parenting Under Pressure — self-development track under the
 * "Build Yourself" umbrella, parallel to Knowing Yourself.
 *
 * 12 lessons, one unit. Audience: parents at any stage —
 * toddlers through teens through adult kids. Written for a single
 * mum in Lagos, a stay-at-home dad in Sydney, and a grandparent
 * raising a grandchild in Manila.
 *
 * Plan: `docs/curriculum/TRACK-PARENTING-UNDER-PRESSURE-PLAN.md`.
 */
const meta: CoursePackMeta = {
  id: 'parenting-under-pressure',
  type: 'self-development',
  displayName: 'Parenting Under Pressure',
  targetLanguageId: undefined,
  // English source-of-truth; runtime translation by Claude per the
  // Knowing Yourself pattern.
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '👨‍👩‍👧',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
