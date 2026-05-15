/**
 * Standalone test screen for the Simli-direct lipsync path.
 *
 * Lets us validate the Simli WebRTC connection + Conv AI audio bridge
 * end-to-end without touching the main companion tab.
 *
 * To reach during dev:
 *   import { router } from 'expo-router';
 *   router.push('/companion/lipsync-test');
 *
 * Prerequisites:
 *   1. `npm i react-native-webrtc @config-plugins/react-native-webrtc react-native-get-random-values`
 *   2. EAS dev-client rebuild (react-native-webrtc is a native module)
 *   3. Pick a companion archetype with a populated simli_face_id
 *      (Sarah at 793e6f73-… works today).
 *
 * See docs/SIMLI-DIRECT-INTEGRATION.md for the full picture.
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useConvAISession } from '../../hooks/useConvAISession';
import { useSimliAvatar }  from '../../hooks/useSimliAvatar';
import LipsyncVideo from '../../components/LipsyncVideo';
import {
  loadActiveArchetypes,
  type CompanionArchetype,
} from '../../lib/companion-customization';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function LipsyncTestScreen() {
  const [archetypes, setArchetypes]               = useState<CompanionArchetype[]>([]);
  const [companionId, setCompanionId]             = useState<string | null>(null);
  const [loadingArchetypes, setLoadingArchetypes] = useState(true);
  const [transcript, setTranscript]               = useState<{ role: 'user' | 'rwen'; text: string }[]>([]);
  const [simliError, setSimliError]               = useState<string | null>(null);

  // Avatar (Simli) — needs the chosen archetype's face_id.
  const selectedArchetype = useMemo(
    () => archetypes.find((a) => a.id === companionId) ?? null,
    [archetypes, companionId],
  );
  const simli = useSimliAvatar({
    faceId:  selectedArchetype?.simli_face_id ?? null,
    onError: (e) => setSimliError(e.message),
  });

  // Voice (ElevenLabs Conv AI) — forwards every audio frame to Simli.
  const voice = useConvAISession({
    onUserTranscript: (text) => setTranscript((p) => [...p, { role: 'user', text }]),
    onAgentResponse:  (text) => setTranscript((p) => [...p, { role: 'rwen', text }]),
    onAudioFrame:     (pcm)  => simli.pushAudio(pcm),
  });

  // Load archetypes once.
  useEffect(() => {
    let cancelled = false;
    loadActiveArchetypes()
      .then((list) => {
        if (cancelled) return;
        // Only show archetypes that have a Simli face_id — the rest can't lipsync.
        const ready = list.filter((a) => !!a.simli_face_id);
        setArchetypes(ready);
        if (ready.length > 0) setCompanionId(ready[0].id);
      })
      .finally(() => { if (!cancelled) setLoadingArchetypes(false); });
    return () => { cancelled = true; };
  }, []);

  // Bring up Simli once Conv AI is active (otherwise we'd have no audio
  // to drive the lipsync with anyway).
  useEffect(() => {
    if (voice.state === 'active' && simli.state === 'idle' && selectedArchetype?.simli_face_id) {
      simli.start().catch((e) => setSimliError(e?.message ?? 'simli start failed'));
    }
    if (voice.state === 'idle' && simli.state !== 'idle' && simli.state !== 'closed') {
      simli.stop();
    }
  }, [voice.state, simli, selectedArchetype]);

  const handleStart = async () => {
    setSimliError(null);
    setTranscript([]);
    await voice.start();
  };

  const handleStop = () => {
    voice.stop();
    simli.stop();
  };

  const active = voice.state === 'active';

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Text style={styles.headerClose}>×</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Lipsync Test (Simli-direct)</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        {/* Companion picker */}
        <Text style={styles.sectionTitle}>Companion</Text>
        {loadingArchetypes ? (
          <ActivityIndicator color={Colors.secondary} />
        ) : archetypes.length === 0 ? (
          <Text style={styles.muted}>
            No archetypes with a Simli face_id are active yet. Register one via
            scripts/register-simli-faces.ts then re-load this screen.
          </Text>
        ) : (
          <View style={styles.archetypeRow}>
            {archetypes.map((a) => (
              <Pressable
                key={a.id}
                onPress={() => !active && setCompanionId(a.id)}
                style={[styles.archetypeChip, companionId === a.id && styles.archetypeChipActive, active && styles.archetypeChipDisabled]}
              >
                <Text style={[styles.archetypeChipText, companionId === a.id && styles.archetypeChipTextActive]}>
                  {a.name}
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Video pane */}
        <Text style={styles.sectionTitle}>Avatar</Text>
        <LipsyncVideo
          tier="lipsync"
          assets={{
            name:           selectedArchetype?.name ?? 'Companion',
            imageUrl:       selectedArchetype?.image_url ?? null,
            idlingVideoUrl: selectedArchetype?.idling_video_url ?? null,
            simliFaceId:    selectedArchetype?.simli_face_id ?? null,
          }}
          simliStream={simli.remoteStream}
          height={360}
        />

        {/* Controls */}
        <View style={styles.controls}>
          {!active ? (
            <Pressable
              onPress={handleStart}
              disabled={!selectedArchetype?.simli_face_id || voice.state === 'connecting'}
              style={[styles.cta, !selectedArchetype?.simli_face_id && styles.ctaDisabled]}
            >
              {voice.state === 'connecting' ? (
                <ActivityIndicator color={Colors.white} />
              ) : (
                <Text style={styles.ctaText}>Start session</Text>
              )}
            </Pressable>
          ) : (
            <Pressable onPress={handleStop} style={[styles.cta, styles.ctaStop]}>
              <Text style={styles.ctaText}>End session</Text>
            </Pressable>
          )}
        </View>

        {/* Status */}
        <View style={styles.statusBox}>
          <Text style={styles.statusLine}>voice: {voice.state}{voice.agentSpeaking ? ' (speaking)' : ''}</Text>
          <Text style={styles.statusLine}>simli: {simli.state}</Text>
          {voice.error && <Text style={styles.statusErr}>voice error: {voice.error}</Text>}
          {simliError    && <Text style={styles.statusErr}>simli error: {simliError}</Text>}
        </View>

        {/* Transcript */}
        {transcript.length > 0 && (
          <View style={styles.transcript}>
            <Text style={styles.sectionTitle}>Transcript</Text>
            {transcript.map((t, i) => (
              <View key={i} style={[styles.bubble, t.role === 'user' ? styles.bubbleUser : styles.bubbleRwen]}>
                <Text style={styles.bubbleText}>{t.text}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.gray[50] },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm,
    borderBottomWidth: 1, borderBottomColor: Colors.gray[200], backgroundColor: Colors.white,
  },
  headerClose: { fontSize: 28, color: Colors.gray[600], lineHeight: 28 },
  headerTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[900] },

  body: { padding: Spacing.lg, gap: Spacing.md },
  sectionTitle: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.gray[600], marginTop: Spacing.sm },
  muted:        { fontSize: FontSize.sm, color: Colors.gray[500] },

  archetypeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  archetypeChip: {
    paddingHorizontal: Spacing.md, paddingVertical: 6,
    borderRadius: BorderRadius.full, backgroundColor: Colors.white,
    borderWidth: 1, borderColor: Colors.gray[200],
  },
  archetypeChipActive:   { backgroundColor: Colors.secondary, borderColor: Colors.secondary },
  archetypeChipDisabled: { opacity: 0.5 },
  archetypeChipText:        { fontSize: FontSize.sm, color: Colors.gray[700], fontWeight: FontWeight.medium },
  archetypeChipTextActive:  { color: Colors.white },

  controls: { marginTop: Spacing.md },
  cta: {
    backgroundColor: Colors.secondary, paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg, alignItems: 'center',
  },
  ctaStop:     { backgroundColor: Colors.error },
  ctaDisabled: { opacity: 0.4 },
  ctaText:     { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },

  statusBox: { backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.md, gap: 4, borderWidth: 1, borderColor: Colors.gray[200] },
  statusLine: { fontSize: FontSize.xs, fontFamily: undefined, color: Colors.gray[700] },
  statusErr:  { fontSize: FontSize.xs, color: Colors.error, marginTop: 4 },

  transcript: { gap: Spacing.sm, marginTop: Spacing.md },
  bubble:     { maxWidth: '85%', padding: Spacing.sm, borderRadius: BorderRadius.lg },
  bubbleUser: { alignSelf: 'flex-end',  backgroundColor: Colors.secondary },
  bubbleRwen: { alignSelf: 'flex-start', backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.gray[200] },
  bubbleText: { fontSize: FontSize.sm, color: Colors.gray[800] },
});
