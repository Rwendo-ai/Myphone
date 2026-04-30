// Playback: expo-audio (modern)
// Recording: expo-av (still works in SDK 54, migrate when expo-audio recording is stable)
import { createAudioPlayer } from 'expo-audio';
import { Audio } from 'expo-av';
import { RWEN_VOICES, RwenVoiceKey } from './SettingsContext';

const ELEVENLABS_KEY   = process.env.EXPO_PUBLIC_ELEVENLABS_KEY ?? '';
const ELEVENLABS_MODEL = 'eleven_flash_v2_5';

let audioPlayer: ReturnType<typeof createAudioPlayer> | null = null;
let currentRecording: Audio.Recording | null = null;

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

    await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });

    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    currentRecording = recording;
  } catch (e) {
    console.error('startRecording error:', e);
  }
}

export async function stopRecordingAndTranscribe(): Promise<string | null> {
  if (!currentRecording) return null;
  try {
    await currentRecording.stopAndUnloadAsync();
    const uri = currentRecording.getURI();
    currentRecording = null;

    // Restore audio mode for playback
    await Audio.setAudioModeAsync({ allowsRecordingIOS: false, playsInSilentModeIOS: true });

    if (!uri || !ELEVENLABS_KEY) return null;

    const formData = new FormData();
    formData.append('file', { uri, type: 'audio/m4a', name: 'recording.m4a' } as any);
    formData.append('model_id', 'scribe_v1');
    formData.append('language_code', 'en');

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

export function isCurrentlyRecording(): boolean { return currentRecording !== null; }

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}
