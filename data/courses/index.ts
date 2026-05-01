import { CoursePack, CoursePackId } from '../../types/packs';
import { LessonData } from '../../types/lesson';
import languageShona, { getLessonSync as getShonaLessonSync } from './language-shona';
import languageEnglish, { getLessonSync as getEnglishLessonSync } from './language-english';
import languageFrench, { getLessonSync as getFrenchLessonSync } from './language-french';
import languageChinese, { getLessonSync as getChineseLessonSync } from './language-chinese';
import languageTagalog, { getLessonSync as getTagalogLessonSync } from './language-tagalog';
import aiCompanion from './ai-companion';

export const COURSES: Record<CoursePackId, CoursePack> = {
  'language-shona':   languageShona,
  'language-english': languageEnglish,
  'language-french':  languageFrench,
  'language-chinese': languageChinese,
  'language-tagalog': languageTagalog,
  'ai-companion':     aiCompanion,
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
    case 'language-shona':   return getShonaLessonSync(speakerId, lessonId);
    case 'language-english': return getEnglishLessonSync(speakerId, lessonId);
    case 'language-french':  return getFrenchLessonSync(speakerId, lessonId);
    case 'language-chinese': return getChineseLessonSync(speakerId, lessonId);
    case 'language-tagalog': return getTagalogLessonSync(speakerId, lessonId);
    default: return undefined;
  }
}

export { languageShona, languageEnglish, languageFrench, languageChinese, languageTagalog, aiCompanion };
