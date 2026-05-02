/**
 * ElevenLabs Conversational AI session config builder.
 *
 * The agent in ElevenLabs (EXPO_PUBLIC_ELEVENLABS_AGENT_ID) is a SHELL —
 * no system prompt, no fixed voice. We override everything per session at
 * `startSession()` time, which is what makes Rwen feel like *this* user's
 * Rwen instead of a generic chatbot.
 *
 * The actual hook (`useConversation` from @elevenlabs/react) must be used
 * inside a component wrapped by `<ConversationProvider>`. See
 * components/companion/VoiceImpl.tsx for the consumer.
 *
 * IMPORTANT: this file does NOT statically import '@elevenlabs/react-native'.
 * That package's RN entry runs `registerGlobals()` from @livekit/react-native
 * at module-load time, which fails in Expo Go (no native WebRTC module).
 * The polyfill import lives at the top of VoiceImpl.tsx and only runs when
 * VoiceImpl is dynamically loaded by app/companion/voice.tsx via require().
 */

import type { CompanionPreset } from '../data/companions/presets';
import type { UserProfile } from './claude';
import type { SpeakerPack } from '../types/packs';
import { buildCompanionPrompt, buildCompanionGreeting } from './companion-prompts';
import { RWEN_VOICES, type RwenVoiceKey } from './SettingsContext';

const AGENT_ID = process.env.EXPO_PUBLIC_ELEVENLABS_AGENT_ID ?? '';

export interface VoiceSessionInput {
  preset: CompanionPreset;
  profile: UserProfile | null;
  speaker: SpeakerPack;
  voiceKey: RwenVoiceKey;
  fallbackName: string;
  /** When opened from a lesson's Phase 8 — voice mode primes around the lesson */
  lessonContext?: string;
  /** Phase 2 memory: top-k relevant facts about the user */
  memoryFacts?: string[];
  /** Phase 2 weekly summary callback */
  weeklySummary?: string;
}

/**
 * Build the SDK's `startSession` options object from the active companion +
 * user context. Pass the result directly to `conversation.startSession(...)`.
 */
export function buildVoiceSessionOptions(input: VoiceSessionInput) {
  const {
    preset,
    profile,
    speaker,
    voiceKey,
    fallbackName,
    lessonContext,
    memoryFacts,
    weeklySummary,
  } = input;

  const name = profile?.display_name?.trim() || fallbackName;
  const systemPrompt = buildCompanionPrompt({
    preset,
    profile,
    speaker,
    fallbackName: name,
    lessonContext,
    memoryFacts,
    weeklySummary,
  });
  const firstMessage = buildCompanionGreeting(preset, speaker, name, lessonContext);

  // Voice ID: prefer the user's chosen voice. Fall back to the preset's default.
  const userVoiceId = RWEN_VOICES[voiceKey]?.id;
  const voiceId = userVoiceId || preset.defaultVoiceId;

  // ElevenLabs Conv AI supports a fixed list of agent languages; Shona ('sn')
  // isn't on it, so we map unsupported speaker languages to 'en' for the
  // metadata flag. The system prompt still steers Rwen to use the speaker's
  // language for replies, including Shona phrases.
  const supportedLanguages = new Set([
    'en', 'fr', 'zh', 'tl', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'ar', 'hi',
    'ru', 'pl', 'tr', 'nl', 'sv', 'da', 'fi', 'no', 'cs', 'el', 'he', 'th',
    'vi', 'id', 'ms', 'uk', 'hu', 'ro', 'bg', 'hr', 'sk', 'sl', 'sr', 'ca',
  ]);
  const language = (supportedLanguages.has(speaker.isoCode)
    ? speaker.isoCode
    : 'en') as 'en' | 'fr' | 'zh' | 'tl' | 'es';

  return {
    agentId: AGENT_ID,
    connectionType: 'webrtc' as const,
    overrides: {
      agent: {
        prompt: { prompt: systemPrompt },
        firstMessage,
        language,
      },
      tts: {
        voiceId,
      },
    },
    // userId is logged on the ElevenLabs dashboard for analytics + abuse handling.
    userId: profile?.display_name || fallbackName,
    // Dynamic variables — exposed if the agent's saved prompt uses them.
    // Right now the agent shell has no prompt, so these are decorative for v1
    // but useful once we add agent-side prompt fragments.
    dynamicVariables: {
      user_name: name,
      streak_days: profile?.streak_days ?? 0,
      xp: profile?.xp ?? 0,
      lessons_completed: profile?.completed_lessons ?? 0,
      learned_language: profile?.active_language_pack || speaker.englishName,
      ability_level: profile?.ability_level || 'beginner',
    },
  };
}

/**
 * True iff the env has a valid agent ID. Used by the UI to gate the voice
 * mode entry point — without this, the SDK call will 401 immediately.
 */
export function isVoiceModeConfigured(): boolean {
  return AGENT_ID.length > 0;
}
