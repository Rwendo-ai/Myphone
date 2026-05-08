/**
 * Flip-card registry. Reads the per-course flipcards.ts files and exposes a
 * helper for the unit screen + audio generation script.
 *
 * Like the lesson manifest, this is bundled in the JS binary — the data is
 * 5,000 small entries, ~500 KB total. Fine for v1; consider streaming if
 * we extend to 10+ courses.
 */

import LANGUAGE_SHONA from '../data/courses/language-shona/flipcards';
import LANGUAGE_ENGLISH from '../data/courses/language-english/flipcards';
import LANGUAGE_FRENCH from '../data/courses/language-french/flipcards';
import LANGUAGE_CHINESE from '../data/courses/language-chinese/flipcards';
import LANGUAGE_TAGALOG from '../data/courses/language-tagalog/flipcards';
import LANGUAGE_SPANISH from '../data/courses/language-spanish/flipcards';
import LANGUAGE_PORTUGUESE from '../data/courses/language-portuguese/flipcards';
import LANGUAGE_HINDI from '../data/courses/language-hindi/flipcards';
import LANGUAGE_JAPANESE from '../data/courses/language-japanese/flipcards';
import LANGUAGE_KOREAN from '../data/courses/language-korean/flipcards';
import type { FlipCard } from '../types/flipcards';

const FLIPCARDS_BY_COURSE: Record<string, FlipCard[]> = {
  'language-shona': LANGUAGE_SHONA,
  'language-english': LANGUAGE_ENGLISH,
  'language-french': LANGUAGE_FRENCH,
  'language-chinese': LANGUAGE_CHINESE,
  'language-tagalog': LANGUAGE_TAGALOG,
  'language-spanish': LANGUAGE_SPANISH,
  'language-portuguese': LANGUAGE_PORTUGUESE,
  'language-hindi': LANGUAGE_HINDI,
  'language-japanese': LANGUAGE_JAPANESE,
  'language-korean': LANGUAGE_KOREAN,
};

export function getFlipCardsForCourse(courseId: string): FlipCard[] | undefined {
  return FLIPCARDS_BY_COURSE[courseId];
}

/** Cards filtered to a specific module. Used by the unit screen which shows
 *  the cards belonging to whatever unit the user is viewing. */
export function getFlipCardsForModule(courseId: string, module: number): FlipCard[] {
  const all = getFlipCardsForCourse(courseId) ?? [];
  return all.filter(c => c.module === module);
}

export const FLIPCARD_COURSES = Object.keys(FLIPCARDS_BY_COURSE);
