/**
 * Vocab content shared types.
 *
 * One database, three surfaces. A vocab entry can carry tags marking it as a
 * `word` (single-token lookup, useful for the toolbox dictionary), a `phrase`
 * (multi-token functional unit, useful for the phrasebook), a `flipcard`
 * (curated learning unit), or any combination. The audio file generated
 * from `target` works in every surface — generate once, play anywhere.
 *
 * Surface filters:
 *   - Phrasebook         → tags includes 'phrase' (or omitted = phrase)
 *   - Flip cards         → tags includes 'flipcard'
 *   - Dictionary toolbox → all entries for the active course
 */

export type VocabTag = 'word' | 'phrase' | 'flipcard';

export interface TravelPhrase {
  /** Stable ID, scoped to category. */
  id: string;
  /** The phrase in the destination language (e.g. Shona). */
  target: string;
  /** Translation in the user's spoken language (currently authored in English). */
  native: string;
  /** Optional phonetic guide for tricky pronunciation. */
  phonetic?: string;
  /** Optional path to ElevenLabs MP3 in Supabase Storage. Bucket: `audio`,
   *  path: `phrasebook/<countryCode>/<id>.mp3`. */
  audioPath?: string;
  /** Surface markers. Default behaviour when omitted: treat as 'phrase' (the
   *  phrasebook is the historical home of these entries). */
  tags?: VocabTag[];
}

export interface PhrasebookCategory {
  id: string;
  title: string;
  emoji: string;
  /** When false, only the first 4-6 phrases of the category render in the
   *  free preview; the rest are gated behind course ownership. */
  free: boolean;
  phrases: TravelPhrase[];
}
