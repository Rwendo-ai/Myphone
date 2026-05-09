/**
 * Flip-card registry — DEPRECATED bundled imports.
 *
 * The 5,000-entry vocab corpus now lives in Supabase Storage at
 * `travel-content/flipcards/<courseId>.json`. App code should use
 * `loadFlipCards(courseId)` or `loadFlipCardsForModule(courseId, n)` from
 * `lib/travel-content-loader.ts`.
 *
 * Authoring TS files (`data/courses/<courseId>/flipcards.ts`) remain as the
 * upload-script source-of-truth — the unit screen used to read them
 * synchronously to gate the flip-card CTA, but now resolves availability
 * via a quick Storage HEAD instead (see lib/travel-content-loader.ts).
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

/** Async availability check — does this course have flip cards in Storage? */
export function hasFlipCards(courseId: string): boolean {
  return FLIPCARD_COURSES.includes(courseId);
}
