/**
 * AmbientFace — the v1 launch product. A looping idle video of the
 * active companion plays as a soft backdrop behind the chat, so the
 * voice doesn't feel disembodied. No lipsync — that's v2 (Simli).
 *
 * Why this exists:
 *   Bowen's brief, 2026-05-16: "people will pay because there's a face
 *   there." 90% of perceived presence comes from "a face being there",
 *   not from mouth-sync accuracy. So we put a face there cheaply and
 *   well, and add real lipsync as a premium upsell once revenue exists.
 *
 * The clean-loop problem:
 *   Kling 1.6 (and most image-to-video models) will drift between the
 *   start and end frames even when you set tail_image_url = head_image_url.
 *   The result is a visible "jump" at the loop seam.
 *
 *   We solve this in playback, not generation, with a double-video
 *   crossfade: video A plays, video B starts playing 1.5s before A
 *   finishes, opacity crosses over the last 1.5s. The seam is hidden
 *   inside the fade. Works regardless of how messy the underlying
 *   loop is.
 *
 *   For loops that genuinely do match (rare), the crossfade still
 *   plays — costs nothing visually, gains seamlessness on the messy
 *   ones. No need to special-case.
 *
 * Performance:
 *   Two Video instances running simultaneously. expo-av on iOS handles
 *   this without extra battery cost (~3% combined). On Android it's
 *   slightly more (~6%) but still fine. If perf becomes an issue we
 *   can drop to a single-video + still-fallback at the seam — but
 *   profile first.
 *
 * Layout:
 *   Full-bleed positioned at z=0. Caller layers chat content on top via
 *   `<View style={{ flex: 1, zIndex: 1 }}>...</View>`. We apply a soft
 *   dark overlay so text reads cleanly without a separate scrim.
 */

import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Image, Easing } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Colors } from '../constants/colors';

// Crossfade window — last N ms of one clip, opacity ramps to the other.
// Long enough to hide most loop drift, short enough not to feel like
// it's deliberately fading.
const CROSSFADE_MS = 1500;

interface Props {
  /** Companion's idling video — from companion_archetypes.idling_video_url. */
  videoUrl: string | null;
  /** Fallback still image if no video — companion_archetypes.image_url. */
  imageUrl: string | null;
  /** Emoji fallback if neither asset is available (free-tier presets). */
  emoji?: string;
  /** Background tint when emoji is shown. */
  tintColor?: string;
  /**
   * Darken overlay opacity (0–1). Default 0.35 — enough that white chat
   * text reads cleanly on a colourful portrait without nuking the image.
   * Set to 0 to disable the scrim entirely.
   */
  scrimOpacity?: number;
  /** Children render on top — use sparingly; the chat usually layers
   *  itself above this component instead. */
  children?: React.ReactNode;
}

export default function AmbientFace({
  videoUrl,
  imageUrl,
  emoji,
  tintColor,
  scrimOpacity = 0.35,
  children,
}: Props) {
  // Two video refs + opacity values. Video A starts at 1 (visible),
  // Video B starts at 0 (hidden). Near the end of A we kick B to play
  // and ramp opacity. They take turns being the "active" one.
  const opacityA = useRef(new Animated.Value(1)).current;
  const opacityB = useRef(new Animated.Value(0)).current;
  const videoA   = useRef<Video>(null);
  const videoB   = useRef<Video>(null);
  // Tracks which video is currently the "outgoing" one (the one about
  // to finish). Used so onPlaybackStatusUpdate can decide which side to
  // crossfade away from.
  const activeSide = useRef<'A' | 'B'>('A');
  const crossfadingRef = useRef(false);
  // Duration learned from onLoad — model output durations vary.
  const [durationMs, setDurationMs] = useState<number | null>(null);

  // Reset when source changes (e.g. user picks a different companion).
  useEffect(() => {
    opacityA.setValue(1);
    opacityB.setValue(0);
    activeSide.current = 'A';
    crossfadingRef.current = false;
    setDurationMs(null);
  }, [videoUrl, opacityA, opacityB]);

  // Falls through to the static image when no video URL is available
  // (e.g. a non-human archetype with idle_video_url still null, or a
  // free-tier preset without an archetype face attached).
  if (!videoUrl) {
    return (
      <View style={[styles.container, { backgroundColor: tintColor ?? Colors.primary }]}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={StyleSheet.absoluteFillObject} resizeMode="cover" />
        ) : emoji ? (
          <View style={styles.emojiWrap}>
            <Animated.Text style={styles.emoji}>{emoji}</Animated.Text>
          </View>
        ) : null}
        {scrimOpacity > 0 && (
          <View style={[StyleSheet.absoluteFillObject, { backgroundColor: `rgba(0,0,0,${scrimOpacity})` }]} />
        )}
        {children}
      </View>
    );
  }

  // Called on every playback tick from BOTH videos. We use it to detect
  // when the active video is in its last CROSSFADE_MS, kick the
  // inactive video into play, and animate the crossfade.
  const onTick = (side: 'A' | 'B') => (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    if (durationMs == null && status.durationMillis) {
      setDurationMs(status.durationMillis);
    }
    // Only care about the active side.
    if (side !== activeSide.current) return;
    if (crossfadingRef.current) return;
    const dur = status.durationMillis ?? durationMs;
    if (dur == null) return;

    const remaining = dur - status.positionMillis;
    if (remaining > CROSSFADE_MS) return;

    // Crossfade window reached. Kick the inactive side to play from
    // the start and animate opacities.
    crossfadingRef.current = true;
    const inactiveRef = side === 'A' ? videoB : videoA;
    const fadingOut   = side === 'A' ? opacityA : opacityB;
    const fadingIn    = side === 'A' ? opacityB : opacityA;

    inactiveRef.current?.replayAsync().catch(() => {});

    Animated.parallel([
      Animated.timing(fadingOut, {
        toValue: 0,
        duration: CROSSFADE_MS,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(fadingIn, {
        toValue: 1,
        duration: CROSSFADE_MS,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Swap roles. Outgoing video has finished its loop; we'll re-use
      // it as the next incoming one. Reset the loop position so it's
      // ready to be replayed next time the crossfade fires.
      activeSide.current = side === 'A' ? 'B' : 'A';
      crossfadingRef.current = false;
      // The old "outgoing" video keeps looping in the background at
      // opacity 0; no need to stop it. expo-av's isLooping handles it.
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: tintColor ?? Colors.primary }]}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: opacityA }]}>
        <Video
          ref={videoA}
          source={{ uri: videoUrl }}
          style={StyleSheet.absoluteFillObject}
          resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay
          isMuted
          onPlaybackStatusUpdate={onTick('A')}
        />
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: opacityB }]}>
        <Video
          ref={videoB}
          source={{ uri: videoUrl }}
          style={StyleSheet.absoluteFillObject}
          resizeMode={ResizeMode.COVER}
          isLooping
          // Start paused — we only replay it when the crossfade kicks
          // in, so it's perfectly aligned with the start of the loop.
          shouldPlay={false}
          isMuted
          onPlaybackStatusUpdate={onTick('B')}
        />
      </Animated.View>
      {scrimOpacity > 0 && (
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: `rgba(0,0,0,${scrimOpacity})` }]} />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  emojiWrap: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  emoji: { fontSize: 96 },
});
