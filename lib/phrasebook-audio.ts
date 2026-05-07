/**
 * Phrasebook audio loader + player.
 *
 * On screen open, fetches `audio/phrasebook/<countryCode>/manifest.json`
 * (a small ~5 KB JSON listing phraseId → audioPath). Caches in module memory.
 *
 * Playback uses expo-audio's createAudioPlayer. We re-use a single player
 * instance per phrasebook session — switching phrases tears down the old
 * player and spins up a new one. Keeps memory low and avoids overlap.
 */

import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { supabase } from './supabase';

interface AudioManifestEntry { id: string; audioPath: string; charCount: number; }
interface AudioManifest {
  countryCode: string;
  voice: string;
  generatedAt: string;
  entries: AudioManifestEntry[];
}

const cache = new Map<string, AudioManifest>();

export async function loadAudioManifest(countryCode: string): Promise<AudioManifest | null> {
  if (cache.has(countryCode)) return cache.get(countryCode)!;
  try {
    const { data } = await supabase.storage
      .from('audio')
      .download(`phrasebook/${countryCode}/manifest.json`);
    if (!data) return null;
    const text = await new Response(data).text();
    const manifest = JSON.parse(text) as AudioManifest;
    cache.set(countryCode, manifest);
    return manifest;
  } catch {
    return null;
  }
}

export function getAudioPathForPhrase(manifest: AudioManifest | null, phraseId: string): string | null {
  if (!manifest) return null;
  return manifest.entries.find(e => e.id === phraseId)?.audioPath ?? null;
}

/**
 * Resolve a Storage path to a public URL we can hand to the audio player.
 * The `audio` bucket is created public by the generation script — that
 * skips the signed-URL roundtrip every play.
 */
export function publicUrl(audioPath: string): string {
  const { data } = supabase.storage.from('audio').getPublicUrl(audioPath);
  return data.publicUrl;
}

let activePlayer: AudioPlayer | null = null;

/** Stop any currently-playing audio. Safe to call when nothing is playing. */
export function stopPhraseAudio(): void {
  try { activePlayer?.pause(); } catch {}
  try { activePlayer?.remove(); } catch {}
  activePlayer = null;
}

/**
 * Play the phrase's audio. Tears down any prior player so the user can
 * tap from one phrase to another without overlap. Resolves when playback
 * starts (not when it ends) — fire-and-forget.
 */
export async function playPhraseAudio(audioPath: string): Promise<void> {
  stopPhraseAudio();
  const url = publicUrl(audioPath);
  const player = createAudioPlayer({ uri: url });
  activePlayer = player;
  player.play();
}
