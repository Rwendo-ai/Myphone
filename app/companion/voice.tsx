/**
 * Voice mode dispatcher.
 *
 * Routes to one of two engines based on `voiceEngine` in SettingsContext:
 *   - `conv_ai`    → ./voice-conv.tsx — full-duplex ElevenAgents over WebSocket
 *   - `turn_based` → ./voice-turn.tsx — listen → transcribe → reply → speak loop
 *
 * `conv_ai` is the default. We keep the turn-based path on disk because it has
 * zero native-module risk (works in Expo Go) and is our fallback if Conv AI
 * misbehaves on a given device.
 */

import React from 'react';
import { useSettings } from '../../lib/SettingsContext';
import VoiceTurnScreen from './voice-turn';
import VoiceConvScreen from './voice-conv';

export default function VoiceScreen() {
  const { voiceEngine } = useSettings();
  return voiceEngine === 'conv_ai' ? <VoiceConvScreen /> : <VoiceTurnScreen />;
}
