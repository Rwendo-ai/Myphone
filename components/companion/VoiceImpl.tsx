/**
 * Voice mode — full-screen "orb" UI for the ElevenLabs Conversational AI session.
 *
 * Tap the orb to start. The orb pulses with audio levels (input when the user
 * speaks, output when Rwen speaks). Transcripts fade in below as text. Tap the
 * stop button to end.
 *
 * Echo cancellation, voice activity detection, interruption handling — all
 * provided by ElevenLabs Conversational AI via WebRTC. We don't do any of it
 * manually. This screen just renders the state.
 *
 * REQUIRES: dev-client build (Expo Go won't load WebRTC). Build via
 * `eas build --profile development --platform android` and install the APK.
 */

// Browser-global polyfills MUST run before @elevenlabs/react-native loads.
// The ElevenLabs/LiveKit stack assumes Event, CloseEvent, AudioContext,
// document exist as globals — RN doesn't have them. Without these stubs,
// the audio-track attach crashes with "Property 'document' doesn't exist"
// and the WebRTC reconnect loop spins until the server kicks the session.
import './voice-polyfills';

// Side-effectful import: registers WebRTC globals + LiveKit audio session
// strategy with @elevenlabs/client. This file is dynamically required from
// app/companion/voice.tsx so the import only runs when voice mode is opened
// in the dev-client APK (it would crash at module-load time in Expo Go).
import '@elevenlabs/react-native';

import React, { useEffect, useRef, useState } from 'react';
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
import { ConversationProvider, useConversation } from '@elevenlabs/react';

import { useAuth } from '../../lib/AuthContext';
import { useSettings } from '../../lib/SettingsContext';
import { fetchUserProfile, type UserProfile } from '../../lib/claude';
import { buildVoiceSessionOptions, isVoiceModeConfigured } from '../../lib/conversational-ai';
import { COMPANION_PRESETS } from '../../data/companions/presets';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface TranscriptLine {
  id: string;
  role: 'user' | 'agent';
  text: string;
}

export default function VoiceScreen() {
  return (
    <ConversationProvider>
      <VoiceScreenInner />
    </ConversationProvider>
  );
}

function VoiceScreenInner() {
  const { lessonContext } = useLocalSearchParams<{ lessonContext?: string }>();
  const { user } = useAuth();
  const { rwenVoice, speaker } = useSettings();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);

  const orbScale = useRef(new Animated.Value(1)).current;
  const orbPulseRef = useRef<Animated.CompositeAnimation | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      setErrorMsg(null);
      setIsStarting(false);
    },
    onDisconnect: () => {
      stopPulse();
    },
    onError: (err) => {
      console.error('voice session error:', err);
      setErrorMsg(typeof err === 'string' ? err : 'Voice session error.');
      setIsStarting(false);
    },
    onMessage: (msg: any) => {
      // ElevenLabs emits messages of various shapes; we only display the ones
      // we care about (user transcripts + agent text responses).
      if (!msg || typeof msg !== 'object') return;
      if (msg.type === 'user_transcript' && msg.text) {
        setTranscript((prev) => [
          ...prev,
          { id: `${Date.now()}-u`, role: 'user', text: msg.text },
        ]);
      } else if (msg.type === 'agent_response' && msg.text) {
        setTranscript((prev) => [
          ...prev,
          { id: `${Date.now()}-a`, role: 'agent', text: msg.text },
        ]);
      } else if (msg.message && typeof msg.message === 'string') {
        // Generic message format used by some SDK versions.
        const role: 'user' | 'agent' = msg.source === 'user' ? 'user' : 'agent';
        setTranscript((prev) => [...prev, { id: `${Date.now()}-${role[0]}`, role, text: msg.message }]);
      }
    },
  });

  const status = conversation.status;
  const isConnected = status === 'connected';
  const isSpeaking = conversation.isSpeaking;
  const isListening = conversation.isListening;

  // Pulse animation: bigger when speaking/listening, idle scale otherwise.
  useEffect(() => {
    if (isConnected && (isSpeaking || isListening)) {
      startPulse();
    } else {
      stopPulse();
    }
    return stopPulse;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, isSpeaking, isListening]);

  function startPulse() {
    if (orbPulseRef.current) return;
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(orbScale, {
          toValue: 1.18,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(orbScale, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    anim.start();
    orbPulseRef.current = anim;
  }

  function stopPulse() {
    if (orbPulseRef.current) {
      orbPulseRef.current.stop();
      orbPulseRef.current = null;
    }
    Animated.timing(orbScale, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  // Load profile once for prompt building.
  useEffect(() => {
    if (!user) return;
    fetchUserProfile(user.id).then(setProfile);
  }, [user]);

  const handleStart = async () => {
    if (!user) {
      setErrorMsg('Sign in first.');
      return;
    }
    if (!isVoiceModeConfigured()) {
      setErrorMsg('Voice mode is not configured. ELEVENLABS_AGENT_ID missing.');
      return;
    }
    setIsStarting(true);
    setTranscript([]);
    try {
      const options = buildVoiceSessionOptions({
        // v1: always use Rwen preset. Phase 1 looks up the user's active
        // companion from the `companions` table and uses that.
        preset: COMPANION_PRESETS.rwen,
        profile,
        speaker,
        voiceKey: rwenVoice,
        fallbackName: user.email?.split('@')[0] || 'friend',
        lessonContext,
      });
      conversation.startSession(options);
    } catch (e) {
      console.error('startSession failed', e);
      setErrorMsg('Could not start voice session.');
      setIsStarting(false);
    }
  };

  const handleStop = () => {
    conversation.endSession();
    setTranscript([]);
  };

  const handleClose = () => {
    if (isConnected) conversation.endSession();
    router.back();
  };

  const statusLabel =
    errorMsg ? errorMsg :
    !isConnected && isStarting ? 'Connecting…' :
    !isConnected             ? 'Tap to start a conversation' :
    isSpeaking               ? 'Rwen is speaking' :
    isListening              ? 'Listening…' :
    'Connected — go ahead';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={handleClose} style={styles.closeBtn} hitSlop={10}>
          <Text style={styles.closeText}>×</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Voice mode</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.orbWrap}>
        <Pressable onPress={isConnected ? undefined : handleStart} disabled={isConnected || isStarting}>
          <Animated.View
            style={[
              styles.orb,
              {
                transform: [{ scale: orbScale }],
                backgroundColor: isSpeaking
                  ? Colors.xp
                  : isListening
                    ? Colors.success
                    : Colors.secondary,
                opacity: isConnected ? 1 : 0.85,
              },
            ]}
          >
            {isStarting && <ActivityIndicator color={Colors.white} size="large" />}
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
              line.role === 'user' ? styles.bubbleUser : styles.bubbleAgent,
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

      {isConnected && (
        <Pressable style={styles.stopBtn} onPress={handleStop}>
          <Text style={styles.stopBtnText}>End conversation</Text>
        </Pressable>
      )}

      <Text style={styles.hint}>
        {isConnected
          ? 'Talk naturally — interrupt Rwen any time, he stops.'
          : 'Tap the orb to begin. Voice mode needs the dev-client build to work.'}
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
  bubbleAgent: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  bubbleText: { color: 'rgba(255,255,255,0.95)', fontSize: FontSize.md, lineHeight: 22 },
  bubbleTextUser: { color: Colors.white },

  stopBtn: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.error + 'CC',
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  stopBtnText: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
  },
  hint: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.5)',
    fontSize: FontSize.xs,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
});
