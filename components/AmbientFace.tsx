/**
 * AmbientFace — a small looping video of the companion's face.
 *
 * Renders the companion's idling MP4 in whatever size the caller asks
 * for. Uses `expo-av`'s native `isLooping` — no crossfade, no double-
 * video tricks. Bowen's call (2026-05-16): "I want a loop somehow where
 * first and last image is the same, no transition."
 *
 * The old crossfade implementation tried to hide loop drift in the
 * source video by fading between two synchronized Video instances. The
 * fade was visible on his device as a "blackout" between cycles —
 * worse than just letting the video loop natively. Trust the generator
 * to produce a clean loop (tightened motion prompt + return-to-pose
 * instruction land that 90% of the time); regenerate the clip if a
 * specific archetype loops badly.
 *
 * Usage:
 *   <AmbientFace videoUrl={...} imageUrl={...} emoji="🌷" size={120} />
 *
 *   - When videoUrl is set: render <Video isLooping>
 *   - Else when imageUrl is set: render <Image>
 *   - Else: render emoji on a tinted background
 *
 * Sizing: pass any width/height (square). For the tab-bar avatar use
 * ~52. For the chat-header avatar ~48. For the voice-mode preview ~96.
 */

import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Colors } from '../constants/colors';

interface Props {
  /** Companion's idling video — from companion_archetypes.idling_video_url. */
  videoUrl?: string | null;
  /** Fallback still image if no video — companion_archetypes.image_url
   *  or the smaller thumbnail_url. */
  imageUrl?: string | null;
  /** Emoji fallback when neither asset is available. */
  emoji?: string;
  /** Background tint when emoji is shown. */
  tintColor?: string;
  /**
   * Square edge size in dp. Defaults to 96 (good for the voice-mode
   * preview). The component is always square; pass an explicit
   * `borderRadius` if you want anything other than half (circle).
   */
  size?: number;
  /** Corner radius in dp. Defaults to `size / 2` (perfect circle). */
  borderRadius?: number;
  /** Optional border for visual definition over similar-coloured backgrounds. */
  borderColor?: string;
  borderWidth?: number;
}

export default function AmbientFace({
  videoUrl,
  imageUrl,
  emoji,
  tintColor,
  size = 96,
  borderRadius,
  borderColor,
  borderWidth = 0,
}: Props) {
  // Reset to a fresh Video when source changes so iOS doesn't replay
  // the previous companion's clip momentarily during the swap.
  const [key, setKey] = useState(0);
  useEffect(() => { setKey((k) => k + 1); }, [videoUrl, imageUrl]);

  const radius = borderRadius ?? size / 2;
  const wrapStyle = [
    styles.wrap,
    {
      width: size,
      height: size,
      borderRadius: radius,
      backgroundColor: tintColor ?? Colors.primary,
      borderColor: borderColor ?? 'transparent',
      borderWidth,
    },
  ];

  if (videoUrl) {
    return (
      <View style={wrapStyle}>
        <Video
          key={key}
          source={{ uri: videoUrl }}
          style={[StyleSheet.absoluteFillObject, { borderRadius: radius }]}
          resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay
          isMuted
        />
      </View>
    );
  }

  if (imageUrl) {
    return (
      <View style={wrapStyle}>
        <Image
          source={{ uri: imageUrl }}
          style={[StyleSheet.absoluteFillObject, { borderRadius: radius }]}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <View style={wrapStyle}>
      <Text style={[styles.emoji, { fontSize: Math.round(size * 0.5) }]}>{emoji ?? '✨'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  emoji: { textAlign: 'center' },
});
