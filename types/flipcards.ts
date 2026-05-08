/**
 * Flip card / vocabulary entry schema.
 *
 * Designed to be the single source of truth for vocab — surfaces:
 *   - Flip Cards (under each unit on the learn tab)
 *   - Toolbox Dictionary (per-user lookup)
 *   - Phrasebook (when entries carry the 'phrase' tag and travel context)
 *
 * 500 cards per language course, 10 modules of 50. Module N's difficulty
 * roughly matches the lesson curriculum's module N.
 */

export interface FlipCard {
  /** `m01-c01` format — module-prefixed for grouping. */
  id: string;
  /** Module bucket (1-10). 50 cards per module. */
  module: number;
  /** The word/phrase in the LEARNED language (e.g. Shona for `language-shona` course). */
  target: string;
  /** Translation in the SPOKEN language (English by default; varies by course's source language). */
  native: string;
  /** Short optional hint — part of speech, register, usage cue.
   *  e.g. "noun", "greeting (formal)", "verb, used with elders". */
  hint?: string;
  /** Romanization for non-Latin scripts (Hangul, Devanagari, kanji, etc.). */
  phonetic?: string;
  /** Filled by scripts/generate-flipcard-audio.ts after the bulk run. */
  audioPath?: string;
  /** Filled by scripts/generate-flipcard-images.ts after the bulk run. */
  imagePath?: string;
}

export type FlipCardManifest = FlipCard[];
