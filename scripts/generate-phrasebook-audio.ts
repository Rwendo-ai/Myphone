/**
 * ElevenLabs audio generator for the travel phrasebook.
 *
 * For each phrase in `data/travel/phrasebook/<country>.ts`, calls ElevenLabs
 * text-to-speech once, saves the MP3 to Supabase Storage at
 * `audio/phrasebook/<countryCode>/<phraseId>.mp3`, and writes the resulting
 * audioPath back into a per-country audio manifest the app reads at runtime.
 *
 * Why a manifest instead of inlining audioPath into the .ts source: the
 * source files are bundled into the JS binary; updating them requires an
 * EAS rebuild. The manifest is a small JSON that we sync to Storage and
 * the app fetches on first phrasebook open. New audio = no rebuild.
 *
 * Run:
 *   npx tsx scripts/generate-phrasebook-audio.ts ZW
 *   npx tsx scripts/generate-phrasebook-audio.ts ZW --force   # regenerate all
 *
 * Cost: ~$0.18 per 1,000 chars. 50 Shona phrases ≈ 1,500 chars ≈ $0.27.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

import ZIMBABWE_PHRASEBOOK from '../data/travel/phrasebook/zimbabwe';
import type { PhrasebookCategory } from '../data/travel/phrasebook/types';

dotenv.config({ path: '.env.local' });
dotenv.config();

const ELEVENLABS_KEY = process.env.ELEVENLABS_KEY ?? process.env.EXPO_PUBLIC_ELEVENLABS_KEY ?? '';
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!ELEVENLABS_KEY) { console.error('Missing ELEVENLABS_KEY in .env.local'); process.exit(1); }
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) { console.error('Missing Supabase creds in .env.local'); process.exit(1); }

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ─── Voice config ───────────────────────────────────────────────────────────
// We pick a multilingual voice for languages without a native ElevenLabs voice.
// George (yX5kg7Bf2L8GgB1F8gqJ) — multilingual, warm, works for English + most.
// Override per-country when we license a native voice for that language.
const VOICE_BY_COUNTRY: Record<string, { id: string; modelId: string; name: string }> = {
  ZW: { id: 'JBFqnCBsd6RMkjVDRZzb', modelId: 'eleven_multilingual_v2', name: 'George (multilingual)' },
};
const DEFAULT_VOICE = { id: 'JBFqnCBsd6RMkjVDRZzb', modelId: 'eleven_multilingual_v2', name: 'George (multilingual)' };

const PHRASEBOOKS: Record<string, PhrasebookCategory[]> = {
  ZW: ZIMBABWE_PHRASEBOOK,
};

// ─── ElevenLabs TTS call ────────────────────────────────────────────────────
async function generateAudio(text: string, voiceId: string, modelId: string): Promise<Buffer> {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': ELEVENLABS_KEY,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: { stability: 0.6, similarity_boost: 0.75 },
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`ElevenLabs ${res.status}: ${body.slice(0, 200)}`);
  }
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}

// ─── Storage upload ─────────────────────────────────────────────────────────
async function uploadAudio(countryCode: string, phraseId: string, audio: Buffer): Promise<string> {
  const path = `phrasebook/${countryCode}/${phraseId}.mp3`;
  const { error } = await supabase.storage
    .from('audio')
    .upload(path, audio, { contentType: 'audio/mpeg', upsert: true });
  if (error) throw new Error(`Storage upload ${path}: ${error.message}`);
  return path;
}

async function audioExistsInStorage(countryCode: string, phraseId: string): Promise<boolean> {
  const { data } = await supabase.storage
    .from('audio')
    .list(`phrasebook/${countryCode}`, { search: `${phraseId}.mp3`, limit: 1 });
  return (data ?? []).some(f => f.name === `${phraseId}.mp3`);
}

async function ensureBucket(): Promise<void> {
  const { data } = await supabase.storage.listBuckets();
  if (!data?.some(b => b.id === 'audio')) {
    const { error } = await supabase.storage.createBucket('audio', { public: true });
    if (error && !error.message.toLowerCase().includes('exists')) {
      throw new Error(`Could not create 'audio' bucket: ${error.message}`);
    }
  }
}

// ─── Manifest management ────────────────────────────────────────────────────
interface AudioManifestEntry { id: string; audioPath: string; charCount: number; }
interface AudioManifest {
  countryCode: string;
  voice: string;
  generatedAt: string;
  entries: AudioManifestEntry[];
}

async function syncManifest(countryCode: string, manifest: AudioManifest): Promise<void> {
  const json = JSON.stringify(manifest, null, 2);
  const { error } = await supabase.storage
    .from('audio')
    .upload(`phrasebook/${countryCode}/manifest.json`, Buffer.from(json), { contentType: 'application/json', upsert: true });
  if (error) throw new Error(`Manifest upload: ${error.message}`);
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const countryCode = (args.find(a => !a.startsWith('--')) ?? 'ZW').toUpperCase();
  const force = args.includes('--force');

  const phrasebook = PHRASEBOOKS[countryCode];
  if (!phrasebook) { console.error(`No phrasebook authored for ${countryCode}`); process.exit(1); }
  const voice = VOICE_BY_COUNTRY[countryCode] ?? DEFAULT_VOICE;

  console.log(`Generating phrasebook audio for ${countryCode}`);
  console.log(`Voice: ${voice.name} (${voice.id}), model: ${voice.modelId}\n`);

  await ensureBucket();

  const flat = phrasebook.flatMap(c => c.phrases);
  console.log(`${flat.length} phrases across ${phrasebook.length} categories.\n`);

  const entries: AudioManifestEntry[] = [];
  let totalChars = 0;
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const phrase of flat) {
    process.stdout.write(`  ${phrase.id.padEnd(6)} "${phrase.target.slice(0, 30).padEnd(30)}" `);
    try {
      if (!force && await audioExistsInStorage(countryCode, phrase.id)) {
        process.stdout.write('  cached\n');
        entries.push({ id: phrase.id, audioPath: `phrasebook/${countryCode}/${phrase.id}.mp3`, charCount: phrase.target.length });
        skipped++;
        continue;
      }
      const audio = await generateAudio(phrase.target, voice.id, voice.modelId);
      const audioPath = await uploadAudio(countryCode, phrase.id, audio);
      entries.push({ id: phrase.id, audioPath, charCount: phrase.target.length });
      totalChars += phrase.target.length;
      generated++;
      process.stdout.write(`✓ (${audio.length} bytes)\n`);
      // 200 ms gap between calls — well under ElevenLabs rate limits, polite
      // for free-tier accounts.
      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      failed++;
      const msg = e instanceof Error ? e.message : String(e);
      process.stdout.write(`✗ ${msg.slice(0, 80)}\n`);
    }
  }

  const manifest: AudioManifest = {
    countryCode,
    voice: voice.name,
    generatedAt: new Date().toISOString(),
    entries,
  };
  await syncManifest(countryCode, manifest);

  const cost = (totalChars / 1000) * 0.18;
  console.log(`\nDone. ${generated} generated, ${skipped} cached, ${failed} failed.`);
  console.log(`Chars billed this run: ${totalChars}. Approx cost: $${cost.toFixed(3)} USD.`);
  console.log(`Manifest: phrasebook/${countryCode}/manifest.json`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
