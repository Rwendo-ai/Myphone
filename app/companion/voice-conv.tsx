/**
 * Voice mode — full-duplex via ElevenLabs ElevenAgents over our hand-rolled
 * WebSocket client (see lib/conv-ai-ws.ts).
 *
 * Audio I/O is handled by `@speechmatics/expo-two-way-audio`, which gives us:
 *   - 16kHz / 16-bit / mono PCM mic frames via `onMicrophoneData` event
 *     (matches ElevenLabs's wire format byte-for-byte)
 *   - PCM output via `playPCMData` (hardware-routed; AEC handled internally)
 *
 * Why not the official `@elevenlabs/react-native` SDK: it's broken on RN
 * (LiveKit version mismatch + DOM-API leaks). See docs/stack/elevenlabs.md
 * and elevenlabs/packages issues #515, #605, #641. ElevenLabs support told
 * us directly to use the WebSocket protocol instead.
 *
 * Pacing: there is no client-side turn manager. The agent decides when to
 * listen / speak / interrupt; we just stream audio in and play audio out.
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Animated,
  Easing,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import {
  initialize,
  tearDown,
  toggleRecording,
  playPCMData,
  bypassVoiceProcessing,
  useMicrophonePermissions,
  useExpoTwoWayAudioEventListener,
} from '@speechmatics/expo-two-way-audio';

import { useAuth } from '../../lib/AuthContext';
import { useSettings, RWEN_VOICES } from '../../lib/SettingsContext';
import { ConvAISession } from '../../lib/conv-ai-ws';
import { fetchUserProfile } from '../../lib/claude';
import { resolvePreset } from '../../lib/active-companion';
import { buildCompanionPrompt, buildCompanionGreeting } from '../../lib/companion-prompts';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const ELEVENLABS_KEY = process.env.EXPO_PUBLIC_ELEVENLABS_KEY ?? '';
const ELEVENLABS_AGENT_ID = process.env.EXPO_PUBLIC_ELEVENLABS_AGENT_ID ?? '';

type Mode = 'idle' | 'connecting' | 'active' | 'closing';

interface TranscriptLine {
  id: string;
  role: 'user' | 'rwen';
  text: string;
}

export default function VoiceConvScreen() {
  const { lessonContext } = useLocalSearchParams<{ lessonContext?: string }>();
  const { user } = useAuth();
  const { speaker, rwenVoice, activeCompanionPresetId } = useSettings();

  const [mode, setMode] = useState<Mode>('idle');
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [agentSpeaking, setAgentSpeaking] = useState(false);

  // The active session — null when idle.
  const sessionRef = useRef<ConvAISession | null>(null);
  // Mic frame counter — used to start sending only after WS init succeeds so
  // we don't send audio that the server would silently drop.
  const isStreamingRef = useRef(false);
  // Live caption buffer for the current agent turn (cleared on interruption).
  const liveCaptionRef = useRef<string>('');

  // Permission gating — hook from the audio module, mirrors expo-camera shape.
  const [micPerm, requestMicPerm] = useMicrophonePermissions();

  // Orb pulse animation
  const orbScale = useRef(new Animated.Value(1)).current;
  const orbAnimRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (mode === 'active') startPulse();
    else stopPulse();
    return stopPulse;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  function startPulse() {
    if (orbAnimRef.current) return;
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(orbScale, {
          toValue: 1.15,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(orbScale, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    anim.start();
    orbAnimRef.current = anim;
  }
  function stopPulse() {
    if (orbAnimRef.current) {
      orbAnimRef.current.stop();
      orbAnimRef.current = null;
    }
    Animated.timing(orbScale, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  // ─── Mic stream → WebSocket ─────────────────────────────────────────────────
  // Every PCM frame from the native module is forwarded straight to the server.
  // The agent does VAD server-side; we don't gate locally.
  useExpoTwoWayAudioEventListener('onMicrophoneData', (ev) => {
    if (!isStreamingRef.current) return;
    const session = sessionRef.current;
    if (session && session.isOpen()) session.sendUserAudio(ev.data);
  });

  // Cleanup on unmount — make sure recording stops + native module tears down
  // so the next mount starts from a clean state.
  useEffect(() => {
    return () => {
      try { isStreamingRef.current = false; toggleRecording(false); } catch {}
      try { sessionRef.current?.close(); } catch {}
      sessionRef.current = null;
      try { tearDown(); } catch {}
    };
  }, []);

  // ─── Connect ────────────────────────────────────────────────────────────────
  const handleStart = useCallback(async () => {
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

    setMode('connecting');

    try {
      // Initialize native audio engine. Voice processing on (= AEC + noise
      // suppression). Speakerphone TTS won't bleed back into the mic.
      await initialize();
      bypassVoiceProcessing(false);
    } catch (e) {
      setError('Audio engine failed to initialise. Reinstall the dev build.');
      setMode('idle');
      return;
    }

    // Compose the per-session system prompt + greeting using the active
    // companion preset (Rwen, Maya, Aria, etc.) and the user's profile +
    // speaker pack. The agent's server-side prompt is overridden entirely by
    // this — the Rwendo identity wins.
    const profile = await fetchUserProfile(user.id).catch(() => null);
    const preset = resolvePreset(activeCompanionPresetId);
    const fallbackName = user.email?.split('@')[0] ?? 'friend';

    const systemPrompt = buildCompanionPrompt({
      preset,
      profile,
      speaker,
      fallbackName,
      lessonContext: typeof lessonContext === 'string' ? lessonContext : undefined,
    });

    const firstMessage = buildCompanionGreeting(
      preset,
      speaker,
      profile?.display_name ?? fallbackName,
      typeof lessonContext === 'string' ? lessonContext : undefined,
    );

    // Voice id: prefer a voice from the speaker pack matching the user's
    // selected key (e.g. 'male_warm'), else fall back to the legacy
    // RWEN_VOICES table that ships with the app bundle.
    const voiceFromPack = speaker.voices.find((v) => v.key === rwenVoice);
    const voiceId = voiceFromPack?.id ?? RWEN_VOICES[rwenVoice]?.id ?? RWEN_VOICES.male_warm.id;

    const session = new ConvAISession(
      {
        agentId: ELEVENLABS_AGENT_ID,
        apiKey: ELEVENLABS_KEY,
        // Signed URL works for both public + private agents and is what
        // ElevenLabs recommends for any production-shaped client.
        useSignedUrl: true,
        overrides: {
          systemPrompt,
          firstMessage,
          language: speaker.isoCode,
          voiceId,
        },
      },
      {
        onConnected: () => {
          setMode('active');
          // Start streaming mic only after the server has accepted overrides.
          isStreamingRef.current = true;
          try { toggleRecording(true); } catch {}
        },
        onDisconnected: (code, reason) => {
          isStreamingRef.current = false;
          try { toggleRecording(false); } catch {}
          setAgentSpeaking(false);
          // Clean disconnects (1000) shouldn't show as errors.
          if (code !== 1000 && mode !== 'closing') {
            setError(`Voice session ended (${code}). ${reason || ''}`.trim());
          }
          setMode('idle');
        },
        onError: (err) => {
          console.error('[ConvAI]', err);
          setError(err.message);
        },
        onUserTranscript: (text) => {
          if (!text.trim()) return;
          setTranscript((prev) => [
            ...prev,
            { id: `u-${Date.now()}-${Math.random()}`, role: 'user', text },
          ]);
        },
        onAgentResponse: (text) => {
          if (!text.trim()) return;
          liveCaptionRef.current = '';
          setTranscript((prev) => [
            ...prev,
            { id: `r-${Date.now()}-${Math.random()}`, role: 'rwen', text },
          ]);
        },
        onAgentResponseDelta: (delta) => {
          // We could surface partial captions here if we want a live "typing"
          // effect. For v1, we just wait for the full agent_response event.
          liveCaptionRef.current += delta;
        },
        onAudio: (pcm) => {
          setAgentSpeaking(true);
          try { playPCMData(pcm); } catch (e) { console.warn('playPCMData', e); }
        },
        onInterruption: () => {
          // The server tells us the user interrupted. Native playback queue
          // can't be cleanly flushed in @speechmatics/expo-two-way-audio v0.1,
          // so any audio already buffered will play out (~50–100ms). The
          // server stops sending new audio immediately. Caption resets.
          liveCaptionRef.current = '';
          setAgentSpeaking(false);
        },
      },
    );

    sessionRef.current = session;

    try {
      await session.connect();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not connect.');
      setMode('idle');
      try { toggleRecording(false); } catch {}
      sessionRef.current = null;
    }
  }, [user, micPerm, requestMicPerm, activeCompanionPresetId, speaker, rwenVoice, lessonContext, mode]);

  // ─── Disconnect ─────────────────────────────────────────────────────────────
  const handleEnd = useCallback(() => {
    setMode('closing');
    isStreamingRef.current = false;
    try { toggleRecording(false); } catch {}
    try { sessionRef.current?.close(); } catch {}
    sessionRef.current = null;
    setAgentSpeaking(false);
    setMode('idle');
  }, []);

  const handleOrbTap = () => {
    if (mode === 'idle') handleStart();
    else if (mode === 'active' && agentSpeaking) {
      // Tap to interrupt — tells the server to stop the agent immediately.
      sessionRef.current?.triggerInterrupt();
      setAgentSpeaking(false);
    }
  };

  const handleClose = () => {
    handleEnd();
    router.back();
  };

  const statusLabel =
    error ? error :
    mode === 'idle'       ? 'Tap the orb to start' :
    mode === 'connecting' ? 'Connecting…' :
    mode === 'closing'    ? 'Ending…' :
    agentSpeaking         ? 'Speaking… tap orb to interrupt' :
    'Listening — just talk';

  const orbColor =
    mode === 'connecting' || mode === 'closing' ? Colors.gray[400] :
    mode === 'active' && agentSpeaking          ? Colors.xp :
    mode === 'active'                            ? Colors.success :
                                                   Colors.secondary;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={handleClose} style={styles.closeBtn} hitSlop={10}>
          <Text style={styles.closeText}>×</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Voice</Text>
        <Pressable onPress={handleEnd} style={styles.endBtn} hitSlop={10}>
          <Text style={styles.endBtnText}>End</Text>
        </Pressable>
      </View>

      <View style={styles.orbWrap}>
        <Pressable onPress={handleOrbTap} disabled={mode === 'connecting' || mode === 'closing'}>
          <Animated.View
            style={[
              styles.orb,
              {
                transform: [{ scale: orbScale }],
                backgroundColor: orbColor,
                opacity: mode === 'connecting' || mode === 'closing' ? 0.6 : 1,
              },
            ]}
          >
            {(mode === 'connecting' || mode === 'closing') && (
              <ActivityIndicator color={Colors.white} size="large" />
            )}
          </Animated.View>
        </Pressable>
        <Text style={styles.statusText}>{statusLabel}</Text>
      </View>

      <ScrollView
        style={styles.transcript}
        contentContainerStyle={styles.transcriptContent}
        showsVerticalScrollIndicator={false}
      >
        {transcript.map((line) => (
          <View
            key={line.id}
            style={[
              styles.bubble,
              line.role === 'user' ? styles.bubbleUser : styles.bubbleRwen,
            ]}
          >
            <Text
              style={[
                styles.bubbleText,
                line.role === 'user' && styles.bubbleTextUser,
              ]}
            >
              {line.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.hint}>
        Just talk — Rwen listens continuously and will reply when you pause.
        Tap the orb while it's speaking to cut it off.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0A1628' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  closeBtn: { padding: 6 },
  closeText: { color: Colors.white, fontSize: 32, fontWeight: FontWeight.medium, lineHeight: 32 },
  headerTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  endBtn: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  endBtnText: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.medium },

  orbWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xl,
  },
  orb: {
    width: 220,
    height: 220,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 40,
    elevation: 12,
  },
  statusText: {
    marginTop: Spacing.lg,
    color: 'rgba(255,255,255,0.85)',
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    textAlign: 'center',
    paddingHorizontal: Spacing.lg,
  },

  transcript: { flex: 1, paddingHorizontal: Spacing.lg },
  transcriptContent: { paddingVertical: Spacing.md, gap: Spacing.sm },
  bubble: {
    maxWidth: '85%',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  bubbleUser: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.secondary,
  },
  bubbleRwen: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  bubbleText: { color: 'rgba(255,255,255,0.95)', fontSize: FontSize.md, lineHeight: 22 },
  bubbleTextUser: { color: Colors.white },

  hint: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.5)',
    fontSize: FontSize.xs,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
});
