/**
 * Headless hook for an ElevenAgents WebSocket voice session.
 *
 * Handles the full plumbing — native audio init, WebSocket lifecycle,
 * per-session prompt + greeting + memory composition, and persistence of
 * every turn through `lib/conversation-memory.ts` (the single save path
 * used by text chat too).
 *
 * The consumer just decides what to do with transcripts (e.g. push them
 * into a chat message list) via the optional handlers, and renders some
 * UI driven by the returned state.
 *
 * Used by:
 *   - `app/companion/voice-conv.tsx` — full-screen orb + transcript view
 *   - `app/(tabs)/companion.tsx`     — inline orb in the chat composer
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  initialize,
  tearDown,
  toggleRecording,
  playPCMData,
  bypassVoiceProcessing,
  useMicrophonePermissions,
  useExpoTwoWayAudioEventListener,
} from '@speechmatics/expo-two-way-audio';
import { useLocalSearchParams } from 'expo-router';

import { useAuth } from '../lib/AuthContext';
import { useSettings, RWEN_VOICES } from '../lib/SettingsContext';
import { ConvAISession } from '../lib/conv-ai-ws';
import { fetchUserProfile } from '../lib/claude';
import { resolvePreset } from '../lib/active-companion';
import { buildCompanionPrompt, buildCompanionGreeting } from '../lib/companion-prompts';
import {
  loadRecentConversationRecap,
  loadCompanionFacts,
  appendConversationTurn,
} from '../lib/conversation-memory';

const ELEVENLABS_KEY = process.env.EXPO_PUBLIC_ELEVENLABS_KEY ?? '';
const ELEVENLABS_AGENT_ID = process.env.EXPO_PUBLIC_ELEVENLABS_AGENT_ID ?? '';

export type ConvAIState = 'idle' | 'connecting' | 'active' | 'closing';

export interface ConvAIHandlers {
  /** Called once the user's turn is finalised by the server. */
  onUserTranscript?: (text: string) => void;
  /** Called once the agent's full reply text is available. */
  onAgentResponse?: (text: string) => void;
}

export interface ConvAIControls {
  state: ConvAIState;
  agentSpeaking: boolean;
  error: string | null;
  /** Begin a session — handles permission prompt, audio init, WS connect. */
  start: () => Promise<void>;
  /** End the session and tear down audio + WS cleanly. */
  stop: () => void;
  /** Cut the agent off mid-reply. No-op if it isn't speaking. */
  interrupt: () => void;
  /** Clear any error message — e.g. before retrying start(). */
  clearError: () => void;
}

export function useConvAISession(handlers: ConvAIHandlers = {}): ConvAIControls {
  const { lessonContext } = useLocalSearchParams<{ lessonContext?: string }>();
  const { user } = useAuth();
  const { speaker, activeCompanionPresetId, rwenVoice, learnedLanguage } = useSettings();

  const [state, setState] = useState<ConvAIState>('idle');
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sessionRef = useRef<ConvAISession | null>(null);
  const isStreamingRef = useRef(false);
  const sessionIdRef = useRef<string>('');

  // Latest handlers stay in a ref so the mic-data and event callbacks always
  // see the current consumer functions without forcing a session restart.
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  const [micPerm, requestMicPerm] = useMicrophonePermissions();

  // Mic frames → WebSocket. Native module fires this every ~80ms.
  useExpoTwoWayAudioEventListener('onMicrophoneData', (ev) => {
    if (!isStreamingRef.current) return;
    const session = sessionRef.current;
    if (session && session.isOpen()) session.sendUserAudio(ev.data);
  });

  // Cleanup on unmount.
  useEffect(() => {
    return () => {
      try { isStreamingRef.current = false; toggleRecording(false); } catch {}
      try { sessionRef.current?.close(); } catch {}
      sessionRef.current = null;
      try { tearDown(); } catch {}
    };
  }, []);

  const start = useCallback(async (): Promise<void> => {
    setError(null);
    if (!user) { setError('Sign in first.'); return; }
    if (!ELEVENLABS_KEY || !ELEVENLABS_AGENT_ID) {
      setError('Voice not configured. Check ELEVENLABS env vars.');
      return;
    }

    // Permission
    if (!micPerm?.granted) {
      const next = await requestMicPerm();
      if (!next.granted) { setError('Microphone permission required.'); return; }
    }

    setState('connecting');

    try {
      await initialize();
      bypassVoiceProcessing(false);
    } catch {
      setError('Audio engine failed to initialise. Reinstall the dev build.');
      setState('idle');
      return;
    }

    // Memory: pull the user's recent dialogue + top-k facts so the agent picks
    // up where they left off across text + voice (single conversations table).
    // Best-effort — failures degrade to no recap rather than blocking start.
    const [profile, recentRecap, memoryFacts] = await Promise.all([
      fetchUserProfile(user.id).catch(() => null),
      loadRecentConversationRecap(user.id).catch(() => ''),
      loadCompanionFacts(user.id).catch(() => []),
    ]);

    const preset = resolvePreset(activeCompanionPresetId);
    const fallbackName = user.email?.split('@')[0] ?? 'friend';

    const systemPrompt = buildCompanionPrompt({
      preset,
      profile,
      speaker,
      learnedLang: learnedLanguage.name,
      fallbackName,
      lessonContext: typeof lessonContext === 'string' ? lessonContext : undefined,
      memoryFacts,
      weeklySummary: recentRecap || undefined,
    });

    // Group every turn from this voice call under one session_id. Falls back
    // to undefined (column is nullable) when crypto.randomUUID isn't
    // available — Postgres `uuid` columns reject non-UUID strings, so a
    // homemade fallback would silently kill every save.
    sessionIdRef.current =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : '';

    const firstMessage = buildCompanionGreeting(
      preset,
      speaker,
      profile?.display_name ?? fallbackName,
      typeof lessonContext === 'string' ? lessonContext : undefined,
    );

    // Voice id resolution priority:
    //   1. The user's profile-selected voice (rwenVoice) — wins if they
    //      picked one explicitly in Profile → Rwen's Voice. This includes
    //      speaker-pack-curated voices like "Ms. Walker" that aren't in
    //      RWEN_VOICES.
    //   2. The active companion preset's default voice — applied automatically
    //      when the user picks a companion (see app/(tabs)/companions.tsx).
    //   3. Last-ditch fallback to George.
    const voiceFromPack = speaker.voices.find((v) => v.key === rwenVoice);
    const userPickedVoiceId = voiceFromPack?.id ?? RWEN_VOICES[rwenVoice]?.id;
    const resolvedVoiceId = userPickedVoiceId ?? preset.defaultVoiceId ?? RWEN_VOICES.male_warm.id;

    // Conv AI session-language fallback. ElevenLabs's `language` override
    // only accepts a small set of ISO 639-1 codes. Shona (sn) and Tagalog
    // (tl) aren't natively supported and either error out or get silently
    // dropped — the agent then refuses to start. We fall back to English
    // for those cases. The system prompt still tells the AI to respond in
    // the user's language, so Rwen replies in Shona/Tagalog text — the
    // voice just reads it with English pronunciation rules. Imperfect but
    // working, vs. no conversation at all. Move to native voices when we
    // commission custom voice clones for those packs.
    const ELEVENLABS_SUPPORTED = new Set(['en', 'fr', 'zh', 'es', 'de', 'it', 'pt', 'pl', 'hi', 'ar', 'ja', 'ko', 'nl', 'tr', 'sv', 'id', 'da', 'fi', 'no', 'cs', 'ro', 'ru', 'sk', 'ms']);
    const sessionLanguage = ELEVENLABS_SUPPORTED.has(speaker.isoCode) ? speaker.isoCode : 'en';

    const session = new ConvAISession(
      {
        agentId: ELEVENLABS_AGENT_ID,
        apiKey: ELEVENLABS_KEY,
        // Public-agent path. See voice-conv.tsx comment for why.
        useSignedUrl: false,
        overrides: {
          systemPrompt,
          firstMessage,
          language: sessionLanguage,
          // Voice follows the user's picked voice in Profile → Rwen's Voice,
          // which itself auto-syncs when they pick a companion. So picking
          // Maya gives Jessica, then manually picking Ms. Walker gives Ms.
          // Walker — explicit user choice always wins. Requires Security →
          // Overrides → Voice toggle ON + the agent published.
          voiceId: resolvedVoiceId,
        },
      },
      {
        onConnected: () => {
          setState('active');
          isStreamingRef.current = true;
          try { toggleRecording(true); } catch {}
        },
        onDisconnected: (code, reason) => {
          isStreamingRef.current = false;
          try { toggleRecording(false); } catch {}
          setAgentSpeaking(false);
          if (code !== 1000) {
            setError(`Voice session ended (${code}). ${reason || ''}`.trim());
          }
          setState('idle');
        },
        onError: (err) => {
          console.error('[ConvAI]', err);
          setError(err.message);
        },
        onUserTranscript: (text) => {
          if (!text.trim()) return;
          handlersRef.current.onUserTranscript?.(text);
          appendConversationTurn(user.id, 'user', text, {
            sessionId: sessionIdRef.current || undefined,
            packContext: typeof lessonContext === 'string' ? lessonContext : undefined,
          }).catch((e) => console.warn('[ConvAI] save user turn failed:', e));
        },
        onAgentResponse: (text) => {
          if (!text.trim()) return;
          handlersRef.current.onAgentResponse?.(text);
          appendConversationTurn(user.id, 'rwen', text, {
            sessionId: sessionIdRef.current || undefined,
            packContext: typeof lessonContext === 'string' ? lessonContext : undefined,
          }).catch((e) => console.warn('[ConvAI] save rwen turn failed:', e));
        },
        onAudio: (pcm) => {
          setAgentSpeaking(true);
          try { playPCMData(pcm); } catch (e) { console.warn('playPCMData', e); }
        },
        onInterruption: () => {
          // The server stops sending audio. Any chunks already in the native
          // playback queue (~50–100ms worth) will finish playing — there's
          // no flush API in @speechmatics/expo-two-way-audio v0.1.
          setAgentSpeaking(false);
        },
      },
    );

    sessionRef.current = session;

    try {
      await session.connect();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not connect.');
      setState('idle');
      try { toggleRecording(false); } catch {}
      sessionRef.current = null;
    }
  }, [user, micPerm, requestMicPerm, activeCompanionPresetId, speaker, rwenVoice, lessonContext]);

  const stop = useCallback(() => {
    setState('closing');
    isStreamingRef.current = false;
    try { toggleRecording(false); } catch {}
    try { sessionRef.current?.close(); } catch {}
    sessionRef.current = null;
    setAgentSpeaking(false);
    setState('idle');
  }, []);

  const interrupt = useCallback(() => {
    sessionRef.current?.triggerInterrupt();
    setAgentSpeaking(false);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { state, agentSpeaking, error, start, stop, interrupt, clearError };
}
