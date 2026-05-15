/**
 * Standalone test screen for the Pipecat lipsync path.
 *
 * Lets us validate `usePipecatSession` end-to-end without touching the
 * main companion tab (which still uses the v1 ambient/ConvAI path).
 *
 * Wired via expo-router — there is no entry in the tab bar. To reach
 * this screen during dev:
 *
 *   import { router } from 'expo-router';
 *   router.push('/companion/lipsync-test');
 *
 * The cleanest way is a hidden long-press on the Profile tab (or any
 * dev-only button you wire later). For now you can also paste
 *   rwendo://companion/lipsync-test
 * into the Expo Go / dev-client deep link prompt.
 *
 * Prerequisites:
 *   1. `npm i ...` from docs/PIPECAT-CLIENT-INSTALL.md
 *   2. EAS dev-client rebuild
 *   3. Worker reachable at $PIPECAT_BOT_URL with Daily/Deepgram/etc keys
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

import { usePipecatSession } from '../../hooks/usePipecatSession';
import LipsyncVideo from '../../components/LipsyncVideo';
import {
  loadActiveArchetypes,
  type CompanionArchetype,
} from '../../lib/companion-customization';
import type { LipsyncTier } from '../../lib/pipecat-session';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const TIER_OPTIONS: { id: LipsyncTier; label: string; sub: string }[] = [
  { id: 'voice',          label: 'Voice',          sub: 'audio only — no avatar video' },
  { id: 'lipsync',        label: 'Lipsync',        sub: 'archetype face + Simli' },
  { id: 'lipsync_custom', label: 'Lipsync Custom', sub: 'user-uploaded face + Simli' },
];

export default function LipsyncTestScreen() {
  const [tier, setTier]           = useState<LipsyncTier>('lipsync');
  const [archetypes, setArchetypes] = useState<CompanionArchetype[]>([]);
  const [companionId, setCompanionId] = useState<string | null>(null);
  const [loadingArchetypes, setLoadingArchetypes] = useState(true);
  const [transcript, setTranscript] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);

  const session = usePipecatSession({
    onUserTranscript: (text) => setTranscript((p) => [...p, { role: 'user', text }]),
    onAgentResponse:  (text) => setTranscript((p) => [...p, { role: 'bot',  text }]),
  });

  // Load archetypes once.
  useEffect(() => {
    let cancelled = false;
    loadActiveArchetypes()
      .then((list) => {
        if (cancelled) return;
        setArchetypes(list);
        if (list.length > 0 && !companionId) setCompanionId(list[0].id);
      })
      .finally(() => { if (!cancelled) setLoadingArchetypes(false); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedArchetype = useMemo(
    () => archetypes.find((a) => a.id === companionId) ?? null,
    [archetypes, companionId],
  );

  const canStart =
    session.state === 'idle' && !!companionId && !loadingArchetypes;

  const onStart = async () => {
    if (!companionId) return;
    await session.start({
      tier,
      companion_id: companionId,
      source: 'archetype', // this test screen only does archetypes
    });
  };

  return (
    <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text style={styles.back}>← Back</Text>
        </Pressable>
        <Text style={styles.title}>Pipecat Lipsync Test</Text>
        <View style={{ width: 50 }} />
      </View>

      {session.state === 'active' ? (
        // ── Active session view ──────────────────────────────────────
        <View style={styles.activeWrap}>
          <LipsyncVideo
            tier={tier}
            assets={{
              name: selectedArchetype?.name ?? 'Companion',
              imageUrl: selectedArchetype?.image_url ?? null,
              idlingVideoUrl: selectedArchetype?.idling_video_url ?? null,
              simliFaceId: selectedArchetype?.simli_face_id ?? null,
            }}
            height={420}
            remoteVideoTrack={session.remoteVideoTrack}
            remoteAudioTrack={session.remoteAudioTrack}
          />

          <ScrollView style={styles.transcript} contentContainerStyle={{ padding: Spacing.md }}>
            {transcript.length === 0 ? (
              <Text style={styles.transcriptHint}>
                Speak — transcripts appear here once the worker is wired to
                publish them. (Worker currently writes turns directly to
                Supabase; this view only shows what Daily forwards.)
              </Text>
            ) : (
              transcript.map((line, i) => (
                <Text
                  key={i}
                  style={[styles.transcriptLine, line.role === 'user' && styles.transcriptUser]}
                >
                  <Text style={styles.transcriptRole}>
                    {line.role === 'user' ? 'You: ' : 'Bot: '}
                  </Text>
                  {line.text}
                </Text>
              ))
            )}
          </ScrollView>
        </View>
      ) : (
        // ── Configuration view ───────────────────────────────────────
        <ScrollView contentContainerStyle={styles.configBody}>
          <Text style={styles.sectionLabel}>Tier</Text>
          {TIER_OPTIONS.map((opt) => (
            <Pressable
              key={opt.id}
              style={[styles.row, tier === opt.id && styles.rowActive]}
              onPress={() => setTier(opt.id)}
              disabled={session.state !== 'idle'}
            >
              <View style={[styles.radio, tier === opt.id && styles.radioActive]} />
              <View style={{ flex: 1 }}>
                <Text style={styles.rowLabel}>{opt.label}</Text>
                <Text style={styles.rowSub}>{opt.sub}</Text>
              </View>
            </Pressable>
          ))}

          <Text style={[styles.sectionLabel, { marginTop: Spacing.lg }]}>Companion</Text>
          {loadingArchetypes ? (
            <ActivityIndicator color={Colors.primary} />
          ) : archetypes.length === 0 ? (
            <Text style={styles.empty}>No active archetypes — seed the table first.</Text>
          ) : (
            archetypes.map((a) => (
              <Pressable
                key={a.id}
                style={[styles.row, companionId === a.id && styles.rowActive]}
                onPress={() => setCompanionId(a.id)}
                disabled={session.state !== 'idle'}
              >
                <View style={[styles.radio, companionId === a.id && styles.radioActive]} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.rowLabel}>{a.name}</Text>
                  <Text style={styles.rowSub}>
                    {a.simli_face_id ? `simli=${a.simli_face_id.substring(0, 8)}…` : 'no simli face'}
                    {' · '}
                    {a.voice_id ? `voice=${a.voice_id.substring(0, 8)}…` : 'no voice'}
                  </Text>
                </View>
              </Pressable>
            ))
          )}

          <Pressable
            style={[styles.cta, !canStart && styles.ctaDisabled]}
            onPress={onStart}
            disabled={!canStart}
          >
            {session.state === 'connecting' ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.ctaText}>Start Session</Text>
            )}
          </Pressable>
        </ScrollView>
      )}

      {/* ── Footer: status + end-session ──────────────────────────────── */}
      <View style={styles.footer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.status}>
            state: <Text style={styles.statusValue}>{session.state}</Text>
            {session.agentSpeaking ? '  ·  speaking' : ''}
            {session.sessionId ? `  ·  ${session.sessionId.substring(0, 8)}` : ''}
          </Text>
          {session.error ? (
            <Pressable onPress={session.clearError}>
              <Text style={styles.error}>error: {session.error} (tap to dismiss)</Text>
            </Pressable>
          ) : null}
        </View>

        {session.state !== 'idle' && (
          <Pressable
            style={styles.endBtn}
            onPress={() => session.stop()}
            disabled={session.state === 'closing'}
          >
            <Text style={styles.endBtnText}>End Session</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray[200],
  },
  back: { color: Colors.primary, fontSize: FontSize.md },
  title: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.gray[800] },
  configBody: { padding: Spacing.lg, paddingBottom: Spacing.xxl },
  sectionLabel: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.gray[500],
    textTransform: 'uppercase',
    marginBottom: Spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
    gap: Spacing.md,
  },
  rowActive: { backgroundColor: '#E8F0FE', borderWidth: 1, borderColor: Colors.secondary },
  radio: {
    width: 20, height: 20, borderRadius: 10,
    borderWidth: 2, borderColor: Colors.gray[400],
  },
  radioActive: { borderColor: Colors.secondary, backgroundColor: Colors.secondary },
  rowLabel: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  rowSub: { fontSize: FontSize.sm, color: Colors.gray[500], marginTop: 2 },
  empty: { color: Colors.gray[500], fontStyle: 'italic' },
  cta: {
    marginTop: Spacing.xl,
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  ctaDisabled: { opacity: 0.4 },
  ctaText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  activeWrap: { flex: 1, padding: Spacing.md, gap: Spacing.md },
  transcript: {
    flex: 1, backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
  },
  transcriptHint: { color: Colors.gray[500], fontStyle: 'italic' },
  transcriptLine: { fontSize: FontSize.md, color: Colors.gray[800], marginBottom: Spacing.xs },
  transcriptUser: { color: Colors.gray[600] },
  transcriptRole: { fontWeight: FontWeight.semibold },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    padding: Spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray[200],
  },
  status: { fontSize: FontSize.sm, color: Colors.gray[600] },
  statusValue: { fontWeight: FontWeight.bold, color: Colors.gray[800] },
  error: { fontSize: FontSize.sm, color: Colors.error, marginTop: 2 },
  endBtn: {
    backgroundColor: Colors.error,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  endBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});
