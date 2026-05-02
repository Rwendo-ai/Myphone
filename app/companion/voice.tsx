/**
 * Voice mode route — light wrapper that dynamically loads the actual
 * implementation only when this screen is opened.
 *
 * Why dynamic require: the ElevenLabs Conversational AI SDK (and its
 * @livekit/react-native dependency) registers WebRTC globals at module-load
 * time. Those native modules don't exist in Expo Go, so a static import
 * crashes the Metro bundle for the entire app. By deferring the require()
 * to mount-time, the JS bundle compiles fine in Expo Go and the user sees
 * a friendly "needs dev-client" screen if they try to open voice mode there.
 *
 * In the dev-client APK (`eas build --profile development --platform android`)
 * the require succeeds and the full orb UI loads.
 */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator, NativeModules } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

// Direct check: does this runtime have WebRTC available? @livekit/react-native-
// webrtc throws at MODULE LOAD time (not lazy) if NativeModules.WebRTCModule is
// null. So we check that exact thing before allowing any require() chain that
// would touch the SDK. Belt-and-braces: we also check Constants.execution-
// Environment in case some custom build reports WebRTCModule as something
// truthy-but-broken.
const HAS_WEBRTC_NATIVE = NativeModules?.WebRTCModule != null;
const IS_EXPO_GO =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient ||
  Constants.appOwnership === 'expo';
const VOICE_AVAILABLE = HAS_WEBRTC_NATIVE && !IS_EXPO_GO;

export default function VoiceScreen() {
  const [Impl, setImpl] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(
    !VOICE_AVAILABLE
      ? "This build doesn't have WebRTC. Voice mode needs the dev-client APK from `eas build --profile development --platform android`."
      : null,
  );

  useEffect(() => {
    // Skip the require entirely if WebRTC native module isn't present —
    // attempting it would throw "WebRTC native module not found" at module
    // load time before our try/catch can save us.
    if (!VOICE_AVAILABLE) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mod = require('../../components/companion/VoiceImpl');
      if (!mod?.default) {
        throw new Error('VoiceImpl module loaded but exposed no default export.');
      }
      setImpl(() => mod.default);
    } catch (e) {
      const detail = e instanceof Error ? e.message : String(e);
      setError(detail);
    }
  }, []);

  if (error) {
    return <DevBuildRequired error={error} />;
  }
  if (!Impl) {
    return (
      <SafeAreaView style={styles.loadingSafe}>
        <ActivityIndicator color={Colors.white} size="large" />
        <Text style={styles.loadingText}>Loading voice mode…</Text>
      </SafeAreaView>
    );
  }
  return <Impl />;
}

function DevBuildRequired({ error }: { error: string }) {
  return (
    <SafeAreaView style={styles.fallbackSafe} edges={['top', 'bottom']}>
      <Text style={styles.fallbackEmoji}>🎙️</Text>
      <Text style={styles.fallbackTitle}>Voice mode needs the dev build</Text>
      <Text style={styles.fallbackBody}>
        Rwen's voice mode uses native WebRTC for echo cancellation and natural
        turn-taking. Expo Go can't load WebRTC, so this only works after you
        install the dev-client APK from EAS Build.
      </Text>
      <Text style={styles.fallbackHint}>
        Run{'\n'}
        <Text style={styles.fallbackCode}>
          eas build --profile development --platform android
        </Text>
        {'\n'}then install the APK on your phone.
      </Text>
      <Text style={styles.fallbackError}>Detail: {error}</Text>
      <Pressable style={styles.fallbackBtn} onPress={() => router.back()}>
        <Text style={styles.fallbackBtnText}>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingSafe: {
    flex: 1,
    backgroundColor: '#0A1628',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
  },
  loadingText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: FontSize.sm,
  },
  fallbackSafe: {
    flex: 1,
    backgroundColor: '#0A1628',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  fallbackEmoji: { fontSize: 64, marginBottom: Spacing.md },
  fallbackTitle: {
    color: Colors.white,
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    textAlign: 'center',
  },
  fallbackBody: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: FontSize.md,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: Spacing.md,
  },
  fallbackHint: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: FontSize.sm,
    textAlign: 'center',
    marginTop: Spacing.sm,
  },
  fallbackCode: {
    fontFamily: 'monospace',
    color: Colors.xp,
    fontSize: FontSize.sm,
  },
  fallbackError: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: FontSize.xs,
    textAlign: 'center',
    paddingHorizontal: Spacing.md,
    marginTop: Spacing.md,
  },
  fallbackBtn: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  fallbackBtnText: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
  },
});
