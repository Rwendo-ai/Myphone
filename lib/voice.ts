// Playback: expo-audio (modern)
// Recording: expo-av (still works in SDK 54, migrate when expo-audio recording is stable)
import { createAudioPlayer } from 'expo-audio';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import { RWEN_VOICES, RwenVoiceKey } from './SettingsContext';

const ELEVENLABS_KEY   = process.env.EXPO_PUBLIC_ELEVENLABS_KEY ?? '';
const ELEVENLABS_MODEL = 'eleven_flash_v2_5';

let audioPlayer: ReturnType<typeof createAudioPlayer> | null = null;
let currentRecording: Audio.Recording | null = null;

// Recording config that engages the OS-level voice processing pipeline
// (echo cancellation, noise suppression, auto-gain). On Android this means
// audio source 7 = VOICE_COMMUNICATION; on iOS it means the audio session
// is in voice-chat mode. Without this, speakerphone TTS bleeds back into
// the mic and is transcribed as user input — the loop you saw earlier.
const VOICE_CHAT_RECORDING: Audio.RecordingOptions = {
  isMeteringEnabled: true,
  android: {
    extension: '.m4a',
    outputFormat: Audio.AndroidOutputFormat.MPEG_4,
    audioEncoder: Audio.AndroidAudioEncoder.AAC,
    sampleRate: 16000,
    numberOfChannels: 1,
    bitRate: 64000,
    // MediaRecorder.AudioSource.VOICE_COMMUNICATION = 7. The expo-av type
    // doesn't expose this property in its public typing yet, but it's
    // honoured at runtime and this is the only way to engage Android's
    // hardware AEC for full-duplex voice without WebRTC. Cast escapes the
    // TS check.
    ...({ audioSource: 7 } as Record<string, number>),
  },
  ios: {
    extension: '.m4a',
    outputFormat: Audio.IOSOutputFormat.MPEG4AAC,
    audioQuality: Audio.IOSAudioQuality.MEDIUM,
    sampleRate: 16000,
    numberOfChannels: 1,
    bitRate: 64000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {
    mimeType: 'audio/webm',
    bitsPerSecond: 64000,
  },
};

// ─── TEXT TO SPEECH ───────────────────────────────────────────────────────────

export async function speakText(text: string, voiceKey: RwenVoiceKey = 'male_warm'): Promise<void> {
  if (!ELEVENLABS_KEY) return;
  const voiceId = RWEN_VOICES[voiceKey].id;

  try {
    stopSpeaking();

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': ELEVENLABS_KEY,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg',
        },
        body: JSON.stringify({
          text,
          model_id: ELEVENLABS_MODEL,
          voice_settings: { stability: 0.5, similarity_boost: 0.8, style: 0.3, use_speaker_boost: true },
          output_format: 'mp3_44100_128',
        }),
      }
    );

    if (!response.ok) { console.error('ElevenLabs TTS error:', response.status); return; }

    const arrayBuffer = await response.arrayBuffer();
    const base64 = arrayBufferToBase64(arrayBuffer);
    const uri = `data:audio/mpeg;base64,${base64}`;

    const player = createAudioPlayer({ uri });
    audioPlayer = player;
    player.play();
  } catch (e) {
    console.error('speakText error:', e);
  }
}

export function stopSpeaking(): void {
  try {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.remove();
      audioPlayer = null;
    }
  } catch {}
}

// ─── SPEECH TO TEXT ───────────────────────────────────────────────────────────

export async function startRecording(): Promise<void> {
  try {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') { console.warn('Microphone permission not granted'); return; }

    // Clean up any orphaned recording before starting a new one. expo-av
    // throws "Only one Recording object can be prepared at a given time" if
    // a prior session crashed mid-flow or the user taps the mic rapidly.
    if (currentRecording) {
      try { await currentRecording.stopAndUnloadAsync(); } catch {}
      currentRecording = null;
    }

    // Audio session for full-duplex voice. The key flag is
    // interruptionModeAndroid: DoNotMix combined with our VOICE_COMMUNICATION
    // recording source (audioSource: 7), which engages Android's hardware AEC
    // so TTS playback does not bleed back into the mic. iOS gets the same
    // via voice-chat mode (set via interruptionModeIOS: DoNotMix +
    // playsInSilentModeIOS).
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
      shouldDuckAndroid: true,
      // Speaker is the default; we keep it that way so users don't have to
      // hold the phone to their ear. The VOICE_COMMUNICATION audio source
      // makes speakerphone safe for full-duplex.
      playThroughEarpieceAndroid: false,
    });

    const { recording } = await Audio.Recording.createAsync(VOICE_CHAT_RECORDING);
    currentRecording = recording;
  } catch (e) {
    console.error('startRecording error:', e);
    // If creation failed, make sure we don't leave a half-prepared recording
    // around for the next attempt.
    if (currentRecording) {
      try { await currentRecording.stopAndUnloadAsync(); } catch {}
      currentRecording = null;
    }
  }
}

/**
 * Returns metering info from the active recording. Used by the voice mode UI
 * to drive the orb pulse with actual audio levels. Resolves to null if no
 * recording is active or metering data isn't available yet.
 */
export async function getRecordingMetering(): Promise<number | null> {
  if (!currentRecording) return null;
  try {
    const status = await currentRecording.getStatusAsync();
    if (status.isRecording && typeof status.metering === 'number') {
      return status.metering;
    }
    return null;
  } catch {
    return null;
  }
}

export async function stopRecordingAndTranscribe(languageCode: string = 'en'): Promise<string | null> {
  if (!currentRecording) return null;
  try {
    await currentRecording.stopAndUnloadAsync();
    const uri = currentRecording.getURI();
    currentRecording = null;

    // Restore audio mode for playback. Keep DoNotMix so TTS doesn't get
    // ducked by other apps mid-reply.
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
    });

    if (!uri || !ELEVENLABS_KEY) return null;

    const formData = new FormData();
    formData.append('file', { uri, type: 'audio/m4a', name: 'recording.m4a' } as any);
    formData.append('model_id', 'scribe_v1');
    // ElevenLabs Scribe accepts ISO 639-1 codes; the user's speaker pack
    // already exposes one (en/sn/fr/zh/tl). Falls back to English for any
    // non-supported speaker.
    formData.append('language_code', languageCode);

    const response = await fetch('https://api.elevenlabs.io/v1/speech-to-text', {
      method: 'POST',
      headers: { 'xi-api-key': ELEVENLABS_KEY },
      body: formData,
    });

    if (!response.ok) { console.error('STT error:', response.status, await response.text()); return null; }
    const data = await response.json();
    return data.text ?? null;
  } catch (e) {
    console.error('transcribe error:', e);
    return null;
  }
}

/**
 * True iff TTS is currently playing. Used by the voice mode UI to hold off
 * starting the next listen turn until Rwen has finished speaking.
 */
export function isCurrentlySpeaking(): boolean {
  return audioPlayer !== null;
}

/**
 * Plays TTS and resolves only after the audio finishes. Lets voice-mode
 * pacing be straightforward: await speakAndWait() then start listening.
 */
export async function speakTextAndWait(text: string, voiceKey: RwenVoiceKey = 'male_warm'): Promise<void> {
  if (!ELEVENLABS_KEY) return;
  await speakText(text, voiceKey);
  // Poll for end. expo-audio doesn't expose a clean "finished" promise,
  // so we wait until the player is removed (which speakText does on
  // its own when the user calls stopSpeaking()), or until ~30s safety.
  const start = Date.now();
  while (audioPlayer !== null && Date.now() - start < 30000) {
    await new Promise((r) => setTimeout(r, 100));
    try {
      const status = audioPlayer?.currentStatus;
      if (status && (status as any).didJustFinish) break;
      if (status && !(status as any).playing && !(status as any).isLoaded) break;
    } catch {
      break;
    }
  }
}

export function isCurrentlyRecording(): boolean { return currentRecording !== null; }

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}
