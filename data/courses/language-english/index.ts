import { CoursePack, CoursePackMeta } from '../../../types/packs';
/**
 * Learn English course pack — target language = English.
 *
 * v1 status: full 100-lesson curriculum authored for FOUR speaker variants
 * — Shona, French, Chinese (Mandarin), and Tagalog. Lessons live in
 * Supabase Storage at `lessons/language-english/<speakerId>/<lessonId>.json`
 * (post-streaming-pivot — see PACK-AUTHORING-COURSE.md §1.5). The local
 * `<speakerId>/curriculum/` folders are temporary authoring artifacts
 * deleted after upload.
 */
const meta: CoursePackMeta = {
  id: 'language-english',
  type: 'language',
  displayName: 'Learn English',
  targetLanguageId: 'english',
  // Every speaker EXCEPT english natives. All variants live in Storage
  // with identical lesson IDs across variants.
  availableForSpeakers: ['shona', 'french', 'chinese', 'tagalog', 'hindi', 'spanish', 'portuguese', 'japanese', 'korean'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,                 // 100 lessons authored across 4 speaker variants
  emoji: '🇬🇧',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
