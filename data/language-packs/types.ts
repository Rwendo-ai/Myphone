/**
 * Type definitions for the language-pack architecture.
 *
 * Each language has ONE pack. Packs compose at runtime: when a user opens
 * a lesson, the app pulls (a) the target language's pack — for the words
 * being learned + cultural notes about that language, and (b) the user's
 * spoken language's pack — for the native side of every chunk + UI strings.
 *
 * Cultural notes are authored in English (source-of-truth) inside the
 * target language's pack. When a non-English speaker opens the lesson,
 * Claude translates the English source into their language and the result
 * is cached globally in `lesson_translation_cache` for free reuse.
 *
 * Adding a new language = drop a new pack into data/language-packs/<id>/
 * + insert one row into Supabase. It pairs instantly with all existing packs.
 */

export interface ConceptEntry {
  /** The actual word/phrase in this language. e.g. "Mangwanani" for shona.morning_greeting */
  word: string;
  /** A literal English translation of the word (constant across packs for the same concept). */
  literal: string;
  /** Pronunciation guide. Format varies by language (English: simple syllables; Mandarin: pinyin + tone). */
  phonetic: string;
  /** Visual mnemonic. */
  emoji: string;
  /** Optional ElevenLabs / Supabase Storage path for native pronunciation audio. Null at v1. */
  audio_ref: string | null;
}

export interface LessonContextEntry {
  /** Lesson title in source-language (English). Translated to user's spoken language at render time. */
  title: string;
  /** Hook line from Rwen — opens the lesson with cultural context + emotional anchor. English source. */
  hook: string;
  /** Cultural note grounding the lesson in the TARGET language's culture. English source. */
  cultural_note: string;
}

export interface LanguagePackMetadata {
  default_voice_key: string;
  voices: Array<{
    key: string;          // 'male_warm', 'female_warm', etc. — stable handle
    id: string;           // ElevenLabs voice id
    name: string;         // Display name ('George', 'Jessica', etc.)
    description: string;
  }>;
  greetings: {
    morning:   { word: string; phrase: string };
    afternoon: { word: string; phrase: string };
    evening:   { word: string; phrase: string };
  };
}

export interface LanguagePack {
  /** Stable id — matches profiles.speaker_pack_id and active_course_ids 'course:language-X' suffix. */
  id: string;
  /** ISO 639-1 code — drives i18n key resolution + ElevenLabs language overrides. */
  iso_code: string;
  /** Display name in this language's own form (endonym). 'Français', 'ChiShona'. */
  display_name: string;
  flag_emoji: string;

  /**
   * Vocabulary keyed by universal concept_key. Every pack uses the SAME
   * concept keys — adding a pack = filling these slots, not inventing new
   * ones. Concept keys are defined in the lesson_skeletons table.
   */
  concepts: Record<string, ConceptEntry>;

  /**
   * Per-lesson cultural framing. Authored in English source. Used when
   * this language is the LEARN target — the cultural note is about THIS
   * language's culture, displayed in the user's spoken language (translated
   * by Claude on first access).
   */
  lesson_context: Record<string, LessonContextEntry>;

  /** UI strings for when this language is the user's spoken/native language. */
  ui_strings: Record<string, string>;

  /** Voice + greeting metadata. Drives AI persona + TTS voice selection. */
  metadata: LanguagePackMetadata;
}

/**
 * Universal lesson template. Defines what concept slots a lesson uses;
 * doesn't contain any language-specific content. Each lesson skeleton
 * is shared across every (target × native) course pair.
 */
export interface LessonSkeleton {
  id: string;                  // 'm01-l01'
  module: number;
  lesson: number;
  /** Which concept_keys this lesson teaches. Order matters — chunks render in this order. */
  concept_keys: string[];
  /** The 7-phase exercise template, slot-based. Phases reference concept_keys. */
  phases: LessonPhase[];
  estimated_minutes: number;
  xp_reward: number;
}

/** A phase in the 7-phase Rwendo Method, parameterised by concept_keys. */
export type LessonPhase =
  | { type: 'hook'; show: ('hook' | 'cultural_note')[] }
  | { type: 'chunks'; show: ('concepts')[] }
  | { type: 'recall'; items: string[] }   // concept_keys
  | { type: 'mission'; text_key: string } // localised in lesson_context
  | { type: 'pattern'; concept_keys: string[] }
  | { type: 'practice'; exercise_type: 'match_pairs' | 'translate' | 'multiple_choice'; concept_keys: string[] }
  | { type: 'dialogue'; lines: Array<{ speaker: 'rwen' | 'user'; concept_key?: string; text_en?: string }> };
