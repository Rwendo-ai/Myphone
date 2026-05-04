/**
 * Voice mode — full-screen orb screen for ElevenAgents Conv AI.
 *
 * Keeps the legacy "tap voice button → push a screen" entry path working as
 * a fallback. The newer inline experience (tap voice → small orb appears in
 * the chat composer, transcripts join the chat list) lives in the Companion
 * tab and uses the same `useConvAISession` hook this screen does.
 */

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
import { router } from 'expo-router';

import { useConvAISession } from '../../hooks/useConvAISession';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface TranscriptLine {
  id: string;
  role: 'user' | 'rwen';
  text: string;
}

export default function VoiceConvScreen() {
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);

  const { state, agentSpeaking, error, start, stop, interrupt } = useConvAISession({
    onUserTranscript: (text) => {
      setTranscript((prev) => [
        ...prev,
        { id: `u-${Date.now()}-${Math.random()}`, role: 'user', text },
      ]);
    },
    onAgentResponse: (text) => {
      setTranscript((prev) => [
        ...prev,
        { id: `r-${Date.now()}-${Math.random()}`, role: 'rwen', text },
      ]);
    },
  });

  // Auto-start the session on mount — legacy route entry expects a session
  // is already running by the time this screen appears.
  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Orb pulse animation
  const orbScale = useRef(new Animated.Value(1)).current;
  const orbAnimRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (state === 'active') startPulse();
    else stopPulse();
    return stopPulse;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function startPulse() {
    if (orbAnimRef.current) return;
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(orbScale, { toValue: 1.15, duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(orbScale, { toValue: 1,    duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
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
    Animated.timing(orbScale, { toValue: 1, duration: 250, useNativeDriver: true }).start();
  }

  const handleOrbTap = () => {
    if (state === 'idle') start();
    else if (state === 'active' && agentSpeaking) interrupt();
  };

  const handleClose = () => { stop(); router.back(); };

  const statusLabel =
    error ? error :
    state === 'idle'       ? 'Tap the orb to start' :
    state === 'connecting' ? 'Connecting…' :
    state === 'closing'    ? 'Ending…' :
    agentSpeaking          ? 'Speaking… tap orb to interrupt' :
    'Listening — just talk';

  const orbColor =
    state === 'connecting' || state === 'closing' ? Colors.gray[400] :
    state === 'active' && agentSpeaking            ? Colors.xp :
    state === 'active'                              ? Colors.success :
                                                      Colors.secondary;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={handleClose} style={styles.closeBtn} hitSlop={10}>
          <Text style={styles.closeText}>×</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Voice</Text>
        <Pressable onPress={stop} style={styles.endBtn} hitSlop={10}>
          <Text style={styles.endBtnText}>End</Text>
        </Pressable>
      </View>

      <View style={styles.orbWrap}>
        <Pressable onPress={handleOrbTap} disabled={state === 'connecting' || state === 'closing'}>
          <Animated.View
            style={[
              styles.orb,
              {
                transform: [{ scale: orbScale }],
                backgroundColor: orbColor,
                opacity: state === 'connecting' || state === 'closing' ? 0.6 : 1,
              },
            ]}
          >
            {(state === 'connecting' || state === 'closing') && (
              <ActivityIndicator color={Colors.white} size="large" />
            )}
          </Animated.View>
        </Pressable>
        <Text style={styles.statusText}>{statusLabel}</Text>
      </View>

      <ScrollView style={styles.transcript} contentContainerStyle={styles.transcriptContent} showsVerticalScrollIndicator={false}>
        {transcript.map((line) => (
          <View key={line.id} style={[styles.bubble, line.role === 'user' ? styles.bubbleUser : styles.bubbleRwen]}>
            <Text style={[styles.bubbleText, line.role === 'user' && styles.bubbleTextUser]}>
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
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm },
  closeBtn: { padding: 6 },
  closeText: { color: Colors.white, fontSize: 32, fontWeight: FontWeight.medium, lineHeight: 32 },
  headerTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  endBtn: { paddingHorizontal: Spacing.md, paddingVertical: 6, borderRadius: BorderRadius.full, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  endBtnText: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.medium },

  orbWrap: { alignItems: 'center', justifyContent: 'center', paddingVertical: Spacing.xl },
  orb: { width: 220, height: 220, borderRadius: 110, alignItems: 'center', justifyContent: 'center', shadowColor: Colors.secondary, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 40, elevation: 12 },
  statusText: { marginTop: Spacing.lg, color: 'rgba(255,255,255,0.85)', fontSize: FontSize.md, fontWeight: FontWeight.medium, textAlign: 'center', paddingHorizontal: Spacing.lg },

  transcript: { flex: 1, paddingHorizontal: Spacing.lg },
  transcriptContent: { paddingVertical: Spacing.md, gap: Spacing.sm },
  bubble: { maxWidth: '85%', paddingVertical: Spacing.sm, paddingHorizontal: Spacing.md, borderRadius: BorderRadius.lg },
  bubbleUser: { alignSelf: 'flex-end', backgroundColor: Colors.secondary },
  bubbleRwen: { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.1)' },
  bubbleText: { color: 'rgba(255,255,255,0.95)', fontSize: FontSize.md, lineHeight: 22 },
  bubbleTextUser: { color: Colors.white },

  hint: { textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, paddingHorizontal: Spacing.lg, paddingBottom: Spacing.md },
});
