import { CoursePack, CoursePackId } from '../../types/packs';
import languageShona      from './language-shona';
import languageEnglish    from './language-english';
import languageFrench     from './language-french';
import languageChinese    from './language-chinese';
import languageTagalog    from './language-tagalog';
import languageHindi      from './language-hindi';
import languageSpanish    from './language-spanish';
import languagePortuguese from './language-portuguese';
import languageJapanese   from './language-japanese';
import languageKorean     from './language-korean';
import aiCompanion        from './ai-companion';

// Build Yourself umbrella — self-development courses authored by Opus 4.7
// per the methodology in docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md.
import knowYourself           from './know-yourself';
import hardConversationsWork  from './hard-conversations-work';
import parentingUnderPressure from './parenting-under-pressure';
import moneyAndMeaning        from './money-and-meaning';
import griefHonestly          from './grief-honestly';
import sleepRepaired          from './sleep-repaired';
import lostConfidence         from './lost-confidence';
import caringAgingParent      from './caring-aging-parent';

export const COURSES: Record<CoursePackId, CoursePack> = {
  // Language courses (target × native composition; bilingual rendering)
  'language-shona':      languageShona,
  'language-english':    languageEnglish,
  'language-french':     languageFrench,
  'language-chinese':    languageChinese,
  'language-tagalog':    languageTagalog,
  'language-hindi':      languageHindi,
  'language-spanish':    languageSpanish,
  'language-portuguese': languagePortuguese,
  'language-japanese':   languageJapanese,
  'language-korean':     languageKorean,

  // AI Companion course (relationship-style)
  'ai-companion':     aiCompanion,

  // Build Yourself umbrella — self-development monolingual courses,
  // authored in English source, translated to user's spoken language
  // at runtime (Claude lazy-translation, planned next session).
  'know-yourself':              knowYourself,
  'hard-conversations-work':    hardConversationsWork,
  'parenting-under-pressure':   parentingUnderPressure,
  'money-and-meaning':          moneyAndMeaning,
  'grief-honestly':             griefHonestly,
  'sleep-repaired':             sleepRepaired,
  'lost-confidence':            lostConfidence,
  'caring-aging-parent':        caringAgingParent,
};

export const COURSE_IDS = Object.keys(COURSES) as CoursePackId[];

/**
 * Resolve a course pack by ID.
 */
export function getCourse(id: CoursePackId | string | null | undefined): CoursePack | undefined {
  if (!id) return undefined;
  return COURSES[id];
}

// Lesson loading is no longer synchronous. Lesson screens call
// `loadLessonAsync(courseId, speakerId, lessonId)` from `lib/lesson-loader`,
// which reads from local cache first and falls back to Supabase Storage.
// Lesson content is NOT bundled — courses ship as manifests only and
// download-on-demand on first open. See docs/PACK-AUTHORING-COURSE.md.

export {
  languageShona, languageEnglish, languageFrench, languageChinese, languageTagalog,
  languageHindi, languageSpanish, languagePortuguese, languageJapanese, languageKorean,
  aiCompanion,
  knowYourself, hardConversationsWork, parentingUnderPressure, moneyAndMeaning,
  griefHonestly, sleepRepaired, lostConfidence, caringAgingParent,
};
