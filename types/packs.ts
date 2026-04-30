/**
 * Three-pack architecture types.
 *
 * Per docs/PRODUCT-DESIGN.md §3, Rwendo runs on three orthogonal pack types
 * that compose at runtime into a single user experience:
 *
 *   - SpeakerPack      — what the user reads / hears the app in
 *   - CoursePack       — what the user is doing (language course / AI Companion / Travel)
 *   - JurisdictionPack — where the user lives (legal text, currency, age, crisis lines)
 *
 * A user is the join: speaker × course[] × jurisdiction.
 */

export type SpeakerPackId      = string; // 'english', 'shona', 'french', ...
export type CoursePackId       = string; // 'language-shona', 'language-english', 'ai-companion', 'travel-zimbabwe', ...
export type JurisdictionPackId = string; // 'AU', 'GB', 'US', 'EU', 'ZW', ...

// ─────────────────────────────────────────────────────────────────────────────
// SpeakerPack — drives ALL readable text in the app
// ─────────────────────────────────────────────────────────────────────────────

export interface VoiceOption {
  /** ElevenLabs voice ID (or other provider's ID later) */
  id: string;
  /** Voice key used in the UI as a stable handle (e.g. 'male_warm') */
  key: string;
  /** Display name shown to the user (the voice's persona name) */
  name: string;
  /** Tone descriptor */
  description: string;
  /** Gender presentation */
  gender: 'male' | 'female' | 'neutral';
}

export interface TimeOfDayGreeting {
  /** The greeting word in this speaker's language ('Mangwanani' for sn, 'Hello' for en when used as the "big" hero) */
  word: string;
  /** A short subtitle phrase ('Good morning' for en — used in the home subtitle) */
  phrase: string;
}

export interface SpeakerPack {
  id: SpeakerPackId;
  /** ISO 639-1 / 639-3 code where applicable */
  isoCode: string;
  /** Endonym — what the language calls itself ('English', 'ChiShona', 'Français') */
  nativeName: string;
  /** Exonym — what other languages call it. Defaults to `nativeName`. */
  englishName: string;
  /** Emoji flag */
  flag: string;
  /** Script direction */
  direction: 'ltr' | 'rtl';
  /** Voice options that work natively (or near-native) for this language */
  voices: VoiceOption[];
  /** Default voice key when the user first activates this pack */
  defaultVoiceKey: string;
  /** Time-of-day greetings, used by home hero + AI greetings */
  greetings: {
    morning: TimeOfDayGreeting;
    afternoon: TimeOfDayGreeting;
    evening: TimeOfDayGreeting;
  };
  /** Home tab "Rwen's tip today" array, authored from this speaker's POV.
   *  IMPORTANT: must mirror, not translate — see PRODUCT-DESIGN.md §4.6. */
  tips: string[];
  /** Claude system prompt template, written in this speaker's language.
   *  Built dynamically with user profile context — see lib/claude.ts. */
  aiSystemPrompt: SpeakerAiSystemPrompt;
}

export interface SpeakerAiSystemPrompt {
  /** The persona statement, in this language. e.g. "You are Rwen, a chameleon..." */
  persona: string;
  /** The behavioural guardrails, in this language. e.g. "Never claim to be human..." */
  guardrails: string;
  /** Speaker-language phrasing for the user-context block. Token-substituted at runtime. */
  contextTemplate: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// CoursePack — what the user is doing
// ─────────────────────────────────────────────────────────────────────────────

export type CourseType = 'language' | 'ai-companion' | 'travel';

export interface CoursePackMeta {
  id: CoursePackId;
  type: CourseType;
  /** Display name (in `languageOfRecord` of the pack — usually English) */
  displayName: string;
  /** For type='language': the target language being learned */
  targetLanguageId?: string;
  /** Speaker pack IDs that have authored variants of this course */
  availableForSpeakers: SpeakerPackId[];
  /** Maps to RevenueCat product. null for free courses. */
  revenuecatProductId: string | null;
  /** Whether this course is purchasable */
  isActive: boolean;
  /** Whether this course is shown but not yet purchasable */
  isComingSoon: boolean;
  /** Visual identity */
  emoji: string;
  /** Theme override */
  primaryColor?: string;
  secondaryColor?: string;
}

export interface CoursePack {
  meta: CoursePackMeta;
  /** Speaker variants. Key: speaker pack ID. Value: speaker-specific content for this course.
   *  At runtime, the active variant is chosen by the user's speaker_pack_id. */
  variants: Record<SpeakerPackId, CoursePackVariant>;
}

export interface CoursePackVariant {
  speakerId: SpeakerPackId;
  /** For language courses: lesson curriculum keyed by lesson ID.
   *  Lazy-loaded to keep the pack registry light. */
  curriculumLoader?: () => Promise<Record<string, unknown>>;
  /** For AI Companion courses: starter cards, topics, depth-level copy, etc. */
  companionLoader?: () => Promise<unknown>;
  /** For travel courses: phrasebook, cultural guide. */
  travelLoader?: () => Promise<unknown>;
}

// ─────────────────────────────────────────────────────────────────────────────
// JurisdictionPack — where the user lives
// ─────────────────────────────────────────────────────────────────────────────

export interface CrisisResource {
  name: string;
  phone: string;
  url: string;
  /** What kind of crisis this resource handles */
  context: 'crisis_general' | 'mental_health' | 'domestic_violence' | 'indigenous_specific' | 'youth' | string;
}

export interface ConsentDisclosures {
  /** Speaker-language string explaining the AI processor (e.g. "Anthropic, processes from US...") */
  aiPartnerProcessor: string;
  /** Same for the voice processor */
  voiceProcessor: string;
  /** The legal entity acting as data controller */
  dataController: string;
}

export interface JurisdictionPack {
  id: JurisdictionPackId;
  name: string;
  /** ISO codes this pack covers. Some packs (EU bloc) cover many. */
  countryCodes: string[];
  /** If unspecified fields fall back to another jurisdiction. */
  extends?: JurisdictionPackId;
  currency: { code: string; symbol: string };
  /** Minimum user age (in years) for this jurisdiction. e.g. AU=16, US=13. */
  minAge: number;
  /** Statutory cooling-off period in days. EU=14, GB=14, AU=0. */
  coolingOffDays: number;
  /** Whether explicit voice consent is required (BIPA-style). Only true for US-IL. */
  voiceConsentRequired: boolean;
  /** Where user data must physically reside */
  dataResidency: 'EU' | 'AU' | 'US' | 'global';
  /** Which speaker pack the legal text is authored in */
  languageOfRecord: SpeakerPackId;
  isEu: boolean;
  isUk: boolean;
  /** Privacy Policy markdown body */
  privacyPolicyMd: string;
  /** Terms of Service markdown body */
  termsOfServiceMd: string;
  /** Crisis resources for the AI Companion's crisis-trigger handoff */
  crisisResources: CrisisResource[];
  /** Speaker-language strings used in onboarding consent checkboxes */
  consentDisclosures: ConsentDisclosures;
}

// ─────────────────────────────────────────────────────────────────────────────
// RuntimePackContext — what useSettings() composes
// ─────────────────────────────────────────────────────────────────────────────

export interface RuntimePackContext {
  /** The single active speaker pack — drives all readable text */
  speaker: SpeakerPack;
  /** All courses the user has entitlements for */
  courses: CoursePack[];
  /** The active jurisdiction — drives legal, currency, age, crisis */
  jurisdiction: JurisdictionPack;
  /** Which course is foregrounded in the UI right now (e.g. when a lesson screen is open) */
  activeCourseId: CoursePackId | null;
}

/** Helper for resolving a jurisdiction's effective fields with `extends` fallback. */
export type ResolvedJurisdiction = Required<Omit<JurisdictionPack, 'extends'>>;
