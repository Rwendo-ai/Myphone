/**
 * LipsyncVideo — the avatar pane used during voice + lipsync calls.
 *
 * Picks the right rendering engine based on tier:
 *   - 'lipsync'        → Simli (static high-res image, real-time audio-driven mouth)
 *   - 'lipsync_custom' → Simli with user-uploaded photo (Custom-tier companion)
 *   - 'lipsync_plus'   → Sync Labs (silent 6-second idling MP4, audio-driven)
 *   - 'voice'          → no video, but we still render the static image
 *                        so the UI stays composed (engine pane is hidden)
 *
 * v1 STATUS (this commit): renders the static asset (image / video) only.
 * The actual audio-stream-driven lip movement is NOT wired yet — that's
 * the next sub-turn once Simli + Sync Labs API keys + SDKs are in place.
 *
 * INTEGRATION POINTS for the next sub-turn:
 *
 *   1. Install + initialise the Simli SDK
 *        npm i @simli/simli-react-native
 *      In LowTierPane below, replace the <Image> render with the Simli
 *      RealtimeAvatar component, passing the audioStream from ElevenLabs
 *      Conv AI plus the imageUrl (archetype) or simliFaceId (custom).
 *
 *   2. Install + initialise the Sync Labs SDK (Sync.so / Sync 3)
 *        npm i sync-realtime-sdk          (name TBD by Sync.so)
 *      In HighTierPane, replace the <Video> render with Sync's realtime
 *      component, passing audioStream + videoUrl (the 6s idling MP4).
 *
 *   3. Plumb the ElevenLabs Conv AI audio stream into both. The chat
 *      screen invokes useElevenLabsConvAI() (or similar) and passes
 *      the stream prop into <LipsyncVideo>.
 */

import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';

export type LipsyncTier = 'voice' | 'lipsync' | 'lipsync_custom' | 'lipsync_plus';

export interface CompanionAssets {
  /** Display name (for accessibility + the "SDK pending" placeholder). */
  name: string;
  /** Background tint when no image — emoji+colour fallback. */
  avatarColor?: string;
  /** Emoji fallback when no image. */
  emoji?: string;
  /** High-res still image — Simli engine source. */
  imageUrl?: string | null;
  /** 6-second silent idling MP4 — Sync Labs engine source. */
  idlingVideoUrl?: string | null;
  /** Simli Face ID — Custom-tier companion only, set after Replicate
   *  processing of the uploaded photo. */
  simliFaceId?: string | null;
}

interface Props {
  tier: LipsyncTier;
  assets: CompanionAssets;
  /** Real-time audio stream from ElevenLabs Conv AI. Not used until
   *  the SDK integrations land in the next sub-turn. */
  audioStreamRef?: unknown;
  /** Height of the pane in dp. Defaults to 360. */
  height?: number;
}

export default function LipsyncVideo({ tier, assets, height = 360 }: Props) {
  if (tier === 'voice') {
    return <VoiceFallbackPane assets={assets} height={height} />;
  }
  if (tier === 'lipsync_plus') {
    return <HighTierPane assets={assets} height={height} />;
  }
  // lipsync OR lipsync_custom → Simli engine
  return <LowTierPane assets={assets} height={height} custom={tier === 'lipsync_custom'} />;
}

// ─── Voice tier — no lipsync, static portrait ──────────────────────────────

function VoiceFallbackPane({ assets, height }: { assets: CompanionAssets; height: number }) {
  return (
    <View style={[styles.pane, { height, backgroundColor: assets.avatarColor ?? Colors.primary }]}>
      {assets.imageUrl ? (
        <Image source={{ uri: assets.imageUrl }} style={StyleSheet.absoluteFillObject} resizeMode="cover" />
      ) : (
        <Text style={styles.emoji}>{assets.emoji ?? '✨'}</Text>
      )}
    </View>
  );
}

// ─── Lipsync (Low) — Simli engine ──────────────────────────────────────────
// v1: static image. v2: Simli realtime avatar (replace <Image> below).

function LowTierPane({ assets, height, custom }: { assets: CompanionAssets; height: number; custom: boolean }) {
  // TODO(next-sub-turn): swap to <SimliRealtimeAvatar ... />.
  // For now we render the static high-res image, with a "Lipsync pending"
  // overlay that disappears once the SDK is wired.
  const sdkReady = false; // flip when @simli/simli-react-native is wired

  return (
    <View style={[styles.pane, { height }]}>
      {assets.imageUrl ? (
        <Image source={{ uri: assets.imageUrl }} style={StyleSheet.absoluteFillObject} resizeMode="cover" />
      ) : (
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: assets.avatarColor ?? Colors.primary, alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={styles.emoji}>{assets.emoji ?? '✨'}</Text>
        </View>
      )}
      {!sdkReady && (
        <View style={styles.overlay}>
          <ActivityIndicator color={Colors.white} />
          <Text style={styles.overlayTitle}>
            {custom ? `${assets.name}'s custom lipsync` : `${assets.name} · Lipsync`}
          </Text>
          <Text style={styles.overlaySub}>
            Simli SDK integration pending. The static portrait is shown for now;
            real-time mouth movement comes once the SDK is wired.
          </Text>
        </View>
      )}
    </View>
  );
}

// ─── Lipsync Plus (High) — Sync Labs engine ────────────────────────────────
// v1: idling video looped. v2: Sync Labs realtime (audio-driven).

function HighTierPane({ assets, height }: { assets: CompanionAssets; height: number }) {
  const sdkReady = false;
  const [videoReady, setVideoReady] = useState(false);

  // Reset readiness when source changes
  useEffect(() => { setVideoReady(false); }, [assets.idlingVideoUrl]);

  return (
    <View style={[styles.pane, { height }]}>
      {assets.idlingVideoUrl ? (
        <Video
          source={{ uri: assets.idlingVideoUrl }}
          style={StyleSheet.absoluteFillObject}
          resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay
          isMuted
          onLoad={() => setVideoReady(true)}
        />
      ) : assets.imageUrl ? (
        <Image source={{ uri: assets.imageUrl }} style={StyleSheet.absoluteFillObject} resizeMode="cover" />
      ) : (
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: assets.avatarColor ?? Colors.primary, alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={styles.emoji}>{assets.emoji ?? '✨'}</Text>
        </View>
      )}
      {!sdkReady && (
        <View style={styles.overlay}>
          <ActivityIndicator color={Colors.white} />
          <Text style={styles.overlayTitle}>{assets.name} · Lipsync Plus</Text>
          <Text style={styles.overlaySub}>
            Sync Labs SDK integration pending. The idling video is looped here;
            real-time audio-driven lipsync ships in the next iteration.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pane: {
    width: '100%',
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  emoji: { fontSize: 72 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  overlayTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  overlaySub: { color: 'rgba(255,255,255,0.85)', fontSize: FontSize.sm, textAlign: 'center' },
});
