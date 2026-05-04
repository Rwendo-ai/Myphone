import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Knowing Yourself — the Build Yourself umbrella's core course.
 *
 * 10 units × 10 lessons = 100 lessons authored from a 7-phase
 * Rwendo Method base, anchored to evidence-based traditions: CBT, ACT,
 * IFS, MBSR, positive psychology, growth mindset, Stoicism, attachment
 * theory, NVC, polyvagal, habit science, modern grief science, and more.
 *
 * v1 status: Unit 1 (10 lessons) authored. Units 2-10 are outlined in
 * the curriculum plan and queued for follow-up agent runs.
 *
 * Plan: `docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md`.
 *
 * Audience: every adult — parents, teachers, students, retired folks.
 * NOT a business productivity course; NOT a therapy substitute.
 */
const meta: CoursePackMeta = {
  id: 'know-yourself',
  type: 'self-development',
  displayName: 'Knowing Yourself',
  targetLanguageId: undefined,
  // Authored in English; runtime translation by Claude per the speaker
  // pack the user is currently using.
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🌱',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
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

/** Synchronously fetch a Knowing Yourself lesson. Falls back to the
 *  English source-of-truth for any speaker. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
