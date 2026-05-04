import { CoursePack, CoursePackId } from '../../types/packs';
import { LessonData } from '../../types/lesson';
import languageShona, { getLessonSync as getShonaLessonSync } from './language-shona';
import languageEnglish, { getLessonSync as getEnglishLessonSync } from './language-english';
import languageFrench, { getLessonSync as getFrenchLessonSync } from './language-french';
import languageChinese, { getLessonSync as getChineseLessonSync } from './language-chinese';
import languageTagalog, { getLessonSync as getTagalogLessonSync } from './language-tagalog';
import aiCompanion from './ai-companion';

// Build Yourself umbrella — self-development courses authored by Opus 4.7
// per the methodology in docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md.
import knowYourself,           { getLessonSync as getKnowYourselfLessonSync }     from './know-yourself';
import hardConversationsWork,  { getLessonSync as getHardConvLessonSync }         from './hard-conversations-work';
import parentingUnderPressure, { getLessonSync as getParentingLessonSync }        from './parenting-under-pressure';
import moneyAndMeaning,        { getLessonSync as getMoneyLessonSync }            from './money-and-meaning';
import griefHonestly,          { getLessonSync as getGriefLessonSync }            from './grief-honestly';
import sleepRepaired,          { getLessonSync as getSleepLessonSync }            from './sleep-repaired';
import lostConfidence,         { getLessonSync as getLostConfidenceLessonSync }   from './lost-confidence';
import caringAgingParent,      { getLessonSync as getCaringAgingParentLessonSync } from './caring-aging-parent';

export const COURSES: Record<CoursePackId, CoursePack> = {
  // Language courses (target × native composition; bilingual rendering)
  'language-shona':   languageShona,
  'language-english': languageEnglish,
  'language-french':  languageFrench,
  'language-chinese': languageChinese,
  'language-tagalog': languageTagalog,

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

/**
 * Synchronously fetch a lesson from the active course's speaker variant.
 * Used by the lesson screen which renders right after navigation — no time
 * for an async load. v1 packs are bundled in the binary so the require()
 * inside each course's getLessonSync hits the JS module cache after first
 * use.
 */
export function getCourseLesson(
  courseId: CoursePackId | string | null | undefined,
  speakerId: string,
  lessonId: string,
): LessonData | undefined {
  if (!courseId) return undefined;
  switch (courseId) {
    case 'language-shona':            return getShonaLessonSync(speakerId, lessonId);
    case 'language-english':          return getEnglishLessonSync(speakerId, lessonId);
    case 'language-french':           return getFrenchLessonSync(speakerId, lessonId);
    case 'language-chinese':          return getChineseLessonSync(speakerId, lessonId);
    case 'language-tagalog':          return getTagalogLessonSync(speakerId, lessonId);
    case 'know-yourself':             return getKnowYourselfLessonSync(speakerId, lessonId);
    case 'hard-conversations-work':   return getHardConvLessonSync(speakerId, lessonId);
    case 'parenting-under-pressure':  return getParentingLessonSync(speakerId, lessonId);
    case 'money-and-meaning':         return getMoneyLessonSync(speakerId, lessonId);
    case 'grief-honestly':            return getGriefLessonSync(speakerId, lessonId);
    case 'sleep-repaired':            return getSleepLessonSync(speakerId, lessonId);
    case 'lost-confidence':           return getLostConfidenceLessonSync(speakerId, lessonId);
    case 'caring-aging-parent':       return getCaringAgingParentLessonSync(speakerId, lessonId);
    default: return undefined;
  }
}

export {
  languageShona, languageEnglish, languageFrench, languageChinese, languageTagalog,
  aiCompanion,
  knowYourself, hardConversationsWork, parentingUnderPressure, moneyAndMeaning,
  griefHonestly, sleepRepaired, lostConfidence, caringAgingParent,
};
