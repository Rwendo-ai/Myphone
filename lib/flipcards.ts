/**
 * Flip-card availability registry.
 *
 * The 5,000+ entry vocab corpora live in Supabase Storage (course-content
 * bucket). Use `loadFlipCards(courseId, speakerId)` from
 * `lib/flipcard-loader.ts` to fetch the actual content (per-speaker for
 * language-english; single-set for every other course).
 *
 * `hasFlipCards(courseId)` answers "should I show the flip-card CTA on
 * this course's unit screen?" — gates per course only. The loader handles
 * speaker-variant lookup + fallback (see flipcard-loader.ts).
 *
 * Authoring TS files (`data/courses/<courseId>/flipcards.ts` etc.) remain
 * the upload-script source-of-truth.
 */

export const FLIPCARD_COURSES = [
  'language-shona',
  'language-english',
  'language-french',
  'language-chinese',
  'language-tagalog',
  'language-spanish',
  'language-portuguese',
  'language-hindi',
  'language-japanese',
  'language-korean',
  'language-ndebele',
];

export function hasFlipCards(courseId: string): boolean {
  return FLIPCARD_COURSES.includes(courseId);
}
