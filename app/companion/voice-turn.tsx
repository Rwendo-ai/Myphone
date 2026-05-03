/**
 * Voice mode — turn-based.
 *
 * After hours of fighting LiveKit/ElevenLabs Conv AI server-protocol issues
 * in React Native, we abandoned that path. This screen uses the building
 * blocks we already have working:
 *
 *   1. expo-av records mic audio with VOICE_COMMUNICATION source (Android)
 *      / voice-chat audio session (iOS). Both engage hardware AEC so
 *      speakerphone TTS doesn't bleed into the mic.
 *   2. ElevenLabs Scribe (lib/voice.stopRecordingAndTranscribe) STTs.
 *   3. lib/claude.sendMessage hits Claude with the active companion's
 *      preset system prompt + memory context.
 *   4. lib/voice.speakText streams ElevenLabs TTS back over the speaker.
 *   5. Loop: listen → reply → listen.
 *
 * Trade-offs vs full-duplex Conv AI:
 *   - Latency between turns: ~2s vs ~500ms. Acceptable for v1.
 *   - Can't interrupt Rwen mid-sentence by speaking — user has to tap to
 *     interrupt. We expose a "stop" button.
 *   - But it WORKS without server-protocol mismatches, native module gaps,
 *     polyfill cascades, or LiveKit version hell.
 *
 * Lipsync (Phase 4) works the same way: ElevenLabs TTS exposes character-
 * level timestamps we can drive blendshapes / Live2D mouth poses from,
 * regardless of whether voice mode is turn-based or full-duplex.
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
import { useAuth } from '../../lib/AuthContext';
import { useSettings } from '../../lib/SettingsContext';
import { sendMessage, type ChatMessage } from '../../lib/claude';
import {
  startRecording,
  stopRecordingAndTranscribe,
  isCurrentlyRecording,
  speakText,
  stopSpeaking,
  isCurrentlySpeaking,
} from '../../lib/voice';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

type Mode = 'idle' | 'listening' | 'thinking' | 'speaking';

interface TranscriptLine {
  id: string;
  role: 'user' | 'rwen';
  text: string;
}

export default function VoiceScreen() {
  const { lessonContext } = useLocalSearchParams<{ lessonContext?: string }>();
  const { user } = useAuth();
  const { speaker, rwenVoice, activeCompanionPresetId } = useSettings();

  const [mode, setMode] = useState<Mode>('idle');
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Conversation history for Claude — kept in a ref so the loop can read
  // the latest without forcing re-renders.
  const historyRef = useRef<ChatMessage[]>([]);
  // Track whether the user wants the loop to keep going (set when they tap
  // start, cleared when they tap End). The async chain checks this between
  // turns to decide whether to listen again.
  const loopActiveRef = useRef(false);
  // Set to true by handleOrbTap when the user taps the orb during 'listening'
  // to signal "stop recording, send to Claude". The runTurn loop polls this
  // and is the ONLY place that calls stopRecordingAndTranscribe — avoids
  // the double-call race where two callers both try to consume the audio.
  const userStoppedListeningRef = useRef(false);

  // Orb pulse animation — bigger when listening or speaking.
  const orbScale = useRef(new Animated.Value(1)).current;
  const orbAnimRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (mode === 'listening' || mode === 'speaking') startPulse();
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

  // Run one listen → think → speak → loop turn.
  const runTurn = useCallback(async () => {
    if (!user) {
      setError('Sign in first.');
      return;
    }
    try {
      // 1. Listen
      userStoppedListeningRef.current = false;
      setMode('listening');
      await startRecording();

      // 2. Wait for user to tap orb to signal "I'm done speaking" (or End).
      //    No auto-VAD here — keeps the UI explicit. The orb tap during
      //    'listening' sets userStoppedListeningRef = true, which we poll.
      while (loopActiveRef.current && !userStoppedListeningRef.current) {
        await new Promise((r) => setTimeout(r, 100));
      }
      if (!loopActiveRef.current) {
        // User hit End. Clean up the in-flight recording.
        try { await stopRecordingAndTranscribe(speaker.isoCode); } catch {}
        setMode('idle');
        return;
      }

      // 3. Transcribe (single call — only the runTurn loop owns this path,
      //    handleOrbTap only sets the signal flag).
      setMode('thinking');
      const text = await stopRecordingAndTranscribe(speaker.isoCode);
      if (!text || !text.trim()) {
        // No speech detected (silent recording, mic permission issue,
        // or transcription returned empty). Show a hint and go idle.
        setError("Didn't catch that. Tap the orb and try again.");
        setMode('idle');
        return;
      }
      setError(null);
      setTranscript((prev) => [...prev, { id: `u-${Date.now()}`, role: 'user', text }]);

      // 4. Claude
      const reply = await sendMessage(
        user.id,
        text,
        historyRef.current,
        speaker,
        lessonContext,
        activeCompanionPresetId,
      );
      historyRef.current = [
        ...historyRef.current,
        { role: 'user', content: text },
        { role: 'assistant', content: reply },
      ];
      setTranscript((prev) => [...prev, { id: `r-${Date.now()}`, role: 'rwen', text: reply }]);

      // 5. Speak
      if (loopActiveRef.current) {
        setMode('speaking');
        await speakText(reply, rwenVoice);
        // Wait until TTS finishes (or user hits stop).
        while (loopActiveRef.current && isCurrentlySpeaking()) {
          await new Promise((r) => setTimeout(r, 100));
        }
      }

      setMode('idle');
    } catch (e) {
      console.error('voice turn error:', e);
      setError(e instanceof Error ? e.message : 'Voice turn failed.');
      setMode('idle');
    }
  }, [user, speaker, lessonContext, activeCompanionPresetId, rwenVoice]);

  const handleOrbTap = () => {
    if (mode === 'idle') {
      // Start a turn: kick off listening.
      setError(null);
      loopActiveRef.current = true;
      runTurn();
    } else if (mode === 'listening') {
      // Signal the runTurn loop that the user is done. The loop will then
      // call stopRecordingAndTranscribe ONCE and proceed to Claude.
      userStoppedListeningRef.current = true;
    } else if (mode === 'speaking') {
      // Interrupt Rwen mid-reply.
      stopSpeaking();
    }
  };

  const handleStop = () => {
    loopActiveRef.current = false;
    stopSpeaking();
    setMode('idle');
  };

  const handleClose = () => {
    handleStop();
    router.back();
  };

  const statusLabel =
    error ? error :
    mode === 'idle'      ? 'Tap the orb to talk' :
    mode === 'listening' ? 'Listening… tap orb when done' :
    mode === 'thinking'  ? 'Thinking…' :
    /* speaking */         'Speaking… tap orb to interrupt';

  const orbColor =
    mode === 'listening' ? Colors.success :
    mode === 'speaking'  ? Colors.xp :
    mode === 'thinking'  ? Colors.gray[400] :
                           Colors.secondary;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={handleClose} style={styles.closeBtn} hitSlop={10}>
          <Text style={styles.closeText}>×</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Voice</Text>
        <Pressable onPress={handleStop} style={styles.endBtn} hitSlop={10}>
          <Text style={styles.endBtnText}>End</Text>
        </Pressable>
      </View>

      <View style={styles.orbWrap}>
        <Pressable onPress={handleOrbTap} disabled={mode === 'thinking'}>
          <Animated.View
            style={[
              styles.orb,
              {
                transform: [{ scale: orbScale }],
                backgroundColor: orbColor,
                opacity: mode === 'thinking' ? 0.6 : 1,
              },
            ]}
          >
            {mode === 'thinking' && <ActivityIndicator color={Colors.white} size="large" />}
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
        Tap the orb to start speaking. Tap again when you're done. Tap during
        a reply to interrupt.
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
