/**
 * Phrasebook content shared types.
 *
 * Travel phrasebook is intentionally distinct from the language-course flip
 * cards (see docs/FLIP-CARDS-DESIGN.md). Phrasebook = the 50 things you
 * actually need on the ground; flip cards = the 500-word vocab pack tied
 * to the lesson curriculum. They overlap but the phrasebook prioritises
 * "say this when X happens" while flip cards prioritise lesson coverage.
 */

export interface TravelPhrase {
  /** Stable ID, scoped to category. */
  id: string;
  /** The phrase in the destination language (e.g. Shona). */
  target: string;
  /** Translation in the user's spoken language (currently authored in English). */
  native: string;
  /** Optional phonetic guide for tricky pronunciation. */
  phonetic?: string;
  /** Optional path to ElevenLabs MP3 in Storage at flipcards/<courseId>/audio.
   *  Phase 2 wires audio playback. */
  audioPath?: string;
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
