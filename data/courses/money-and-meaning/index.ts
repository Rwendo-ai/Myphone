import { CoursePack, CoursePackMeta } from '../../../types/packs';
/**
 * Money and Meaning — self-development micro-course pack.
 *
 * Build Yourself umbrella sibling of `know-yourself`. Ten lessons, one unit,
 * 5–10 minutes each. About the user's relationship with money — emotional,
 * relational, philosophical. NOT financial advice; the product disclaimer
 * ("Rwen is an AI, not a financial advisor — check with a licensed
 * professional") is implicit in every lesson's tone and explicit in the
 * hook of Lesson 1.
 *
 * Plan: `docs/curriculum/TRACK-MONEY-AND-MEANING-PLAN.md`.
 *
 * v1 status: English source-of-truth authored. Other speaker variants
 * fall back to English at load time — fresh per-speaker authoring is
 * follow-up work along the same Phase K lines as the language packs.
 */
const meta: CoursePackMeta = {
  id: 'money-and-meaning',
  type: 'self-development',
  displayName: 'Money and Meaning',
  targetLanguageId: undefined,
  // Authored in English; runtime translation by Claude per the speaker
  // pack the user is currently using. Fresh per-speaker authoring is a
  // future workstream.
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '💰',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
