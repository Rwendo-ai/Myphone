/**
 * Headless hook for a Pipecat (voice + lipsync) session on top of
 * Daily.co's RN SDK.
 *
 * This is the premium-tier counterpart to `useConvAISession`. The two
 * coexist:
 *   - useConvAISession   → v1 / ambient launch — ElevenLabs Conv AI
 *                          WebSocket, no avatar video
 *   - usePipecatSession  → v2 / premium — Daily room, bot subprocess
 *                          on the VPS, Simli avatar video
 *
 * Flow:
 *   1. start({ tier, companion_id, source }) → POST pipecat-bot-start
 *   2. Edge Function mints a Daily room + tokens and spawns the bot
 *   3. We call Daily.createCallObject() and join the room
 *   4. We watch participants; when "rwendo-bot" appears we expose its
 *      video track via `remoteVideoTrack` for <LipsyncVideo> to render
 *   5. stop() → daily.leave() + destroy()
 *
 * The hook is intentionally Daily-only on the client side — no
 * `@pipecat-ai/client-js` RTVI layer for now. Daily transcript events
 * give us everything we need; the RTVI client adds another layer of
 * indirection without buying anything useful here.
 *
 * Requires: `@daily-co/react-native-daily-js` + a dev-client rebuild.
 * See `docs/PIPECAT-CLIENT-INSTALL.md`.
 */

import { useCallback, useEffect, useRef, useState } from 'react';

import { useAuth } from '../lib/AuthContext';
import { supabase } from '../lib/supabase';
import {
  startPipecatSession,
  LipsyncTier,
  PipecatSessionStartResponse,
} from '../lib/pipecat-session';

// ─── Daily SDK — dynamic require so this file still type-checks before
// the native module is installed. The actual import happens inside
// start() so a missing module surfaces as a clean error string rather
// than a Metro bundler crash on app boot. ───────────────────────────
type DailyCall = any;       // imported lazily
type MediaStreamTrack = any;

const BOT_USER_NAME = 'rwendo-bot';

export type PipecatSessionState = 'idle' | 'connecting' | 'active' | 'closing';

export interface UsePipecatSessionParams {
  onUserTranscript?: (text: string) => void;
  onAgentResponse?:  (text: string) => void;
}

export interface PipecatSessionStartArgs {
  tier:         LipsyncTier;
  companion_id: string;
  source:       'archetype' | 'custom';
}

export interface PipecatSessionControls {
  state:            PipecatSessionState;
  agentSpeaking:    boolean;
  /** Daily MediaStreamTrack for the bot's video, or null when no
   *  video is being published yet (voice-tier session, or before the
   *  bot has joined). Pass to `<LipsyncVideo remoteVideoTrack={...} />`. */
  remoteVideoTrack: MediaStreamTrack | null;
  /** Audio is handled internally by Daily — no track to render — but
   *  we expose it for advanced callers that want their own
   *  visualisation (e.g. waveform). */
  remoteAudioTrack: MediaStreamTrack | null;
  error:            string | null;
  /** The session_id returned by the Edge Function — surfaced for
   *  logging / future transcript correlation. */
  sessionId:        string | null;
  start: (req: PipecatSessionStartArgs) => Promise<void>;
  stop:  () => void;
  clearError: () => void;
}

export function usePipecatSession(p: UsePipecatSessionParams = {}): PipecatSessionControls {
  const { user } = useAuth();

  const [state,            setState]            = useState<PipecatSessionState>('idle');
  const [agentSpeaking,    setAgentSpeaking]    = useState(false);
  const [remoteVideoTrack, setRemoteVideoTrack] = useState<MediaStreamTrack | null>(null);
  const [remoteAudioTrack, setRemoteAudioTrack] = useState<MediaStreamTrack | null>(null);
  const [error,            setError]            = useState<string | null>(null);
  const [sessionId,        setSessionId]        = useState<string | null>(null);

  // Handlers stay in a ref so changes don't restart the session.
  const handlersRef = useRef(p);
  handlersRef.current = p;

  // The active Daily call object (created on start, destroyed on stop).
  const callRef = useRef<DailyCall | null>(null);
  // Track the bot participant's session_id so we know which tracks to
  // surface as "the avatar". The bot joins as user_name='rwendo-bot'.
  const botSessionIdRef = useRef<string | null>(null);

  // ── Cleanup on unmount ───────────────────────────────────────────
  useEffect(() => {
    return () => {
      const call = callRef.current;
      callRef.current = null;
      botSessionIdRef.current = null;
      if (call) {
        try { call.leave(); } catch {}
        try { call.destroy(); } catch {}
      }
    };
  }, []);

  // ── Wire Daily events for a fresh call object ────────────────────
  const wireEvents = useCallback((call: DailyCall) => {
    // Joined the meeting — wait for bot to appear.
    call.on('joined-meeting', () => {
      setState('active');
    });

    // Bot participant joined / updated — capture its video + audio tracks.
    const onParticipant = (ev: any) => {
      const p = ev?.participant;
      if (!p || p.local) return;
      if (p.user_name === BOT_USER_NAME) {
        botSessionIdRef.current = p.session_id;
      }
      if (p.session_id !== botSessionIdRef.current) return;

      // Prefer the modern tracks shape; fall back to the deprecated
      // top-level fields for older Daily versions.
      const videoTrack = p.tracks?.video?.persistentTrack ?? p.tracks?.video?.track ?? null;
      const audioTrack = p.tracks?.audio?.persistentTrack ?? p.tracks?.audio?.track ?? null;
      // Only update when the reference actually changes — avoids
      // re-rendering <LipsyncVideo> on every audio-level tick.
      setRemoteVideoTrack((prev) => (prev === videoTrack ? prev : videoTrack));
      setRemoteAudioTrack((prev) => (prev === audioTrack ? prev : audioTrack));
    };
    call.on('participant-joined',  onParticipant);
    call.on('participant-updated', onParticipant);

    call.on('participant-left', (ev: any) => {
      const p = ev?.participant;
      if (!p) return;
      if (p.session_id === botSessionIdRef.current) {
        botSessionIdRef.current = null;
        setRemoteVideoTrack(null);
        setRemoteAudioTrack(null);
      }
    });

    // track-started/-stopped — secondary signal we use for the
    // "agent speaking" indicator (the bot publishes audio while
    // ElevenLabs is streaming; goes silent otherwise).
    call.on('track-started', (ev: any) => {
      if (ev?.participant?.session_id !== botSessionIdRef.current) return;
      if (ev?.track?.kind === 'audio') setAgentSpeaking(true);
    });
    call.on('track-stopped', (ev: any) => {
      if (ev?.participant?.session_id !== botSessionIdRef.current) return;
      if (ev?.track?.kind === 'audio') setAgentSpeaking(false);
    });

    // Transcripts — Daily emits 'transcription-message' when the bot
    // calls startTranscription, and 'app-message' when the bot sends
    // arbitrary payloads via sendAppMessage. The current Pipecat
    // pipeline (worker/bot.py) doesn't push transcripts to either yet
    // — TODO once the worker writes them, decode here and call the
    // handlers. For now the worker should write to Supabase directly.
    call.on('transcription-message', (ev: any) => {
      if (!ev?.text) return;
      const isBot = ev.participantId === botSessionIdRef.current;
      if (isBot) handlersRef.current.onAgentResponse?.(ev.text);
      else       handlersRef.current.onUserTranscript?.(ev.text);
    });
    call.on('app-message', (ev: any) => {
      // Convention if the worker later opts to push transcripts via
      // sendAppMessage: { type: 'transcript', role: 'user' | 'bot', text: '...' }
      const d = ev?.data;
      if (!d || typeof d !== 'object' || d.type !== 'transcript') return;
      if (d.role === 'user') handlersRef.current.onUserTranscript?.(String(d.text ?? ''));
      else                   handlersRef.current.onAgentResponse?.(String(d.text ?? ''));
    });

    call.on('error', (ev: any) => {
      const msg = ev?.errorMsg || ev?.error?.message || 'Daily error';
      setError(msg);
    });

    call.on('left-meeting', () => {
      // Server-side disconnect or local leave — either way drop the
      // remote track refs so <LipsyncVideo> returns to its placeholder.
      setRemoteVideoTrack(null);
      setRemoteAudioTrack(null);
      setAgentSpeaking(false);
    });
  }, []);

  // ── start ───────────────────────────────────────────────────────
  const start = useCallback(async (req: PipecatSessionStartArgs): Promise<void> => {
    setError(null);
    if (state !== 'idle') {
      setError('Session already running.');
      return;
    }
    if (!user) {
      setError('Sign in first.');
      return;
    }

    setState('connecting');

    // Lazy-load the Daily native SDK so the rest of the app still
    // boots if the dev-client hasn't been rebuilt yet.
    let Daily: any;
    try {
      // Indirect require — Metro will still bundle it when present,
      // but the catch below converts a missing module into a user-
      // friendly error.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      Daily = require('@daily-co/react-native-daily-js').default;
    } catch (e) {
      setError(
        'Daily SDK not installed. Run the install script in docs/PIPECAT-CLIENT-INSTALL.md and rebuild the dev client.',
      );
      setState('idle');
      return;
    }

    // Fetch the user's current JWT from Supabase. AuthContext exposes
    // the session, but we read it fresh here so a token-refresh
    // mid-flight isn't missed.
    let authToken = '';
    try {
      const { data } = await supabase.auth.getSession();
      authToken = data.session?.access_token ?? '';
    } catch (e) {
      setError('Could not read auth session.');
      setState('idle');
      return;
    }
    if (!authToken) {
      setError('No auth token — sign in again.');
      setState('idle');
      return;
    }

    // ── Mint the room + tokens via the Edge Function ────────────
    let resp: PipecatSessionStartResponse;
    try {
      resp = await startPipecatSession(req, authToken);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not start session.');
      setState('idle');
      return;
    }
    setSessionId(resp.session_id);

    // ── Create the call object and join the room ────────────────
    let call: DailyCall;
    try {
      call = Daily.createCallObject({
        // We're an audio + lipsync-video consumer. The bot publishes
        // both; the user publishes audio only.
        audioSource: true,
        videoSource: false,
        subscribeToTracksAutomatically: true,
      });
    } catch (e) {
      setError(`Daily.createCallObject failed: ${e instanceof Error ? e.message : String(e)}`);
      setState('idle');
      return;
    }

    callRef.current = call;
    wireEvents(call);

    try {
      await call.join({ url: resp.room_url, token: resp.user_token });
      // Defensive — if the bot is already in the room when we join,
      // we won't get a participant-joined event for it. Sync once.
      const all = call.participants();
      for (const id of Object.keys(all)) {
        const p = all[id];
        if (!p || p.local) continue;
        if (p.user_name === BOT_USER_NAME) {
          botSessionIdRef.current = p.session_id;
          const vt = p.tracks?.video?.persistentTrack ?? p.tracks?.video?.track ?? null;
          const at = p.tracks?.audio?.persistentTrack ?? p.tracks?.audio?.track ?? null;
          if (vt) setRemoteVideoTrack(vt);
          if (at) setRemoteAudioTrack(at);
        }
      }
    } catch (e) {
      setError(`Could not join Daily room: ${e instanceof Error ? e.message : String(e)}`);
      try { call.destroy(); } catch {}
      callRef.current = null;
      botSessionIdRef.current = null;
      setState('idle');
      return;
    }
  }, [state, user, wireEvents]);

  // ── stop ────────────────────────────────────────────────────────
  const stop = useCallback(() => {
    setState('closing');
    const call = callRef.current;
    callRef.current = null;
    botSessionIdRef.current = null;
    setAgentSpeaking(false);
    setRemoteVideoTrack(null);
    setRemoteAudioTrack(null);
    setSessionId(null);
    if (call) {
      // Fire-and-forget — we don't want stop() to be async to keep the
      // API tight. Daily's leave/destroy chain handles cleanup
      // internally even if we don't await.
      Promise.resolve()
        .then(() => call.leave())
        .catch(() => {})
        .then(() => call.destroy())
        .catch(() => {});
    }
    setState('idle');
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {
    state,
    agentSpeaking,
    remoteVideoTrack,
    remoteAudioTrack,
    error,
    sessionId,
    start,
    stop,
    clearError,
  };
}
