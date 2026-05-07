/**
 * Builds the dynamic system prompt for both text chat AND voice mode.
 *
 * The prompt is composed at session start from:
 *   - The active companion's preset.systemPromptTemplate (or custom soul.md
 *     for Soul-tier users)
 *   - User profile context (name, streak, xp, learning path, ability)
 *   - Memory context (top-k relevant facts via semantic recall — Phase 2)
 *   - Recent context (last weekly summary — Phase 2)
 *
 * Text mode uses the result via lib/claude.ts. Voice mode uses it via
 * lib/conversational-ai.ts (passed as overrides.agent.prompt.prompt to the
 * ElevenLabs Conversational AI session).
 */

import type { CompanionPreset } from '../data/companions/presets';
import { MISSION_PILLARS } from '../data/companions/presets';
import type { UserProfile } from './claude';
import type { SpeakerPack } from '../types/packs';

export interface CompanionPromptInput {
  /** The persona to use — preset or custom (custom replaces template entirely) */
  preset: CompanionPreset;
  /** User profile from Supabase (or null on first run before profile loads) */
  profile: UserProfile | null;
  /** Active speaker pack — drives reply language + greetings (the user's NATIVE language) */
  speaker: SpeakerPack;
  /**
   * The English name of the language the user is currently LEARNING — derived
   * by the caller from `useSettings().learnedLanguage.name` (which itself
   * derives from speaker + activeCourseId in v3 SettingsContext).
   * Required because the legacy `profile.active_language_pack` is unreliable
   * for non-English speakers (defaults to 'shona-english').
   */
  learnedLang: string;
  /** Display name fallback if profile missing */
  fallbackName: string;
  /** Optional: lesson context when launched from a lesson Phase 8 card */
  lessonContext?: string;
  /** Optional: memory recall — top-k facts about the user (Phase 2) */
  memoryFacts?: string[];
  /** Optional: weekly summary callback (Phase 2) */
  weeklySummary?: string;
  /** Optional: stated goals (used by Sam-coach preset) */
  statedGoals?: string;
  /** Optional: recent commitments (used by Sam-coach preset) */
  recentCommitments?: string;
}

/**
 * Replace `{{token}}` placeholders in the preset's systemPromptTemplate with
 * actual user data. Tokens not provided are replaced with sensible defaults
 * so the prompt stays well-formed.
 */
export function buildCompanionPrompt(input: CompanionPromptInput): string {
  const { preset, profile, speaker, learnedLang, fallbackName, lessonContext, memoryFacts, weeklySummary, statedGoals, recentCommitments } = input;

  const name = profile?.display_name?.trim() || fallbackName;
  const spokenLang = speaker.englishName;
  const ability = profile?.ability_level || 'beginner';
  const streak = profile?.streak_days ?? 0;
  const xp = profile?.xp ?? 0;
  const lessonsCompleted = profile?.completed_lessons ?? 0;
  const tier = profile?.subscription_tier || 'free';

  const memoryContext = memoryFacts && memoryFacts.length > 0
    ? memoryFacts.map(f => `- ${f}`).join('\n')
    : '(No prior memory yet — this is one of your first conversations.)';

  const recentContext = weeklySummary
    ? weeklySummary
    : lessonContext
      ? `${name} just finished a lesson and asks: "${lessonContext}"`
      : '(No specific recent context.)';

  const tokens: Record<string, string> = {
    name,
    learnedLang,
    spokenLang,
    ability,
    streak: String(streak),
    xp: String(xp),
    lessonsCompleted: String(lessonsCompleted),
    tier,
    memoryContext,
    recentContext,
    stated_goals: statedGoals || '(not yet set)',
    recent_commitments: recentCommitments || '(none yet)',
  };

  // Mission pillars first — they apply to every preset, every tier, every
  // conversation. The persona template comes after, and the speaker-pack
  // guardrails close it. Order matters: mission > persona > guardrails.
  let prompt = `${MISSION_PILLARS}\n\n────────────────────────\n\n${preset.systemPromptTemplate}`;
  for (const [token, value] of Object.entries(tokens)) {
    prompt = prompt.replaceAll(`{{${token}}}`, value);
  }

  // Append the speaker pack's guardrails — same conversation rules text-mode
  // uses, in the user's spoken language. Keeps voice-mode and text-mode tone
  // consistent.
  if (speaker.aiSystemPrompt?.guardrails) {
    prompt += `\n\n${speaker.aiSystemPrompt.guardrails}`;
  }

  return prompt;
}

/**
 * Build a localised first-message greeting for voice mode.
 * Picked from the speaker's time-of-day greetings + a contextual hook based
 * on whether this is a fresh chat, a lesson follow-up, or a streak milestone.
 */
export function buildCompanionGreeting(
  preset: CompanionPreset,
  speaker: SpeakerPack,
  name: string,
  lessonContext?: string,
): string {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
  const greeting = speaker.greetings[timeOfDay].word;

  if (lessonContext) {
    return `${greeting}, ${name}. You just finished a lesson — want me to walk through ${lessonContext} with you?`;
  }
  return `${greeting}, ${name}. ${preset.tagline}. What's on your mind?`;
}
