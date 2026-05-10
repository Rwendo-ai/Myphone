/**
 * Flip-card availability registry.
 *
 * The 5,000+ entry vocab corpora live in Supabase Storage (course-content
 * bucket). Use `loadFlipCards(courseId, speakerId)` from
 * `lib/flipcard-loader.ts` to fetch the actual content.
 *
 * `hasFlipCards(courseId, speakerId)` answers "should I show the flip-card
 * CTA on this course's unit screen?" — gates per-speaker so non-Shona /
 * non-Ndebele speakers don't see a CTA that would resolve to wrong-
 * language content.
 *
 * Authoring TS files (`data/courses/<courseId>/flipcards.ts` etc.) remain
 * the upload-script source-of-truth.
 */

/** Single-speaker courses — only English speakers learn these, so flip
 *  cards exist as a single set per course. */
const SINGLE_SPEAKER_FLIPCARD_COURSES = new Set<string>([
  'language-shona',
  'language-french',
  'language-chinese',
  'language-tagalog',
  'language-spanish',
  'language-portuguese',
  'language-hindi',
  'language-japanese',
  'language-korean',
  'language-ndebele',
]);

/** Multi-speaker course (language-english) — flip cards are per-speaker.
 *  Only the speakers in this set have authored card decks. Add to this
 *  list when a new speaker variant is uploaded as
 *  flipcards/language-english-from-<speaker>.json. */
const ENGLISH_FLIPCARD_SPEAKERS = new Set<string>([
  'shona',
  'ndebele',
]);

export function hasFlipCards(courseId: string, speakerId: string): boolean {
  if (courseId === 'language-english') {
    return ENGLISH_FLIPCARD_SPEAKERS.has(speakerId);
  }
  return SINGLE_SPEAKER_FLIPCARD_COURSES.has(courseId);
}

/** Legacy export — kept for one release for any caller still passing only
 *  courseId. New callers should pass speakerId. */
export const FLIPCARD_COURSES = [...SINGLE_SPEAKER_FLIPCARD_COURSES, 'language-english'];
