/**
 * ElevenLabs audio generator for flip cards.
 *
 * Mirrors scripts/generate-phrasebook-audio.ts. For each card in the chosen
 * course's flipcards.ts, calls ElevenLabs TTS once on the `target` field,
 * uploads the MP3 to Supabase Storage at `audio/flipcards/<courseId>/<id>.mp3`,
 * and writes a per-course audio manifest.
 *
 * Run:
 *   npx tsx scripts/generate-flipcard-audio.ts language-shona
 *   npx tsx scripts/generate-flipcard-audio.ts all       # all 10 courses sequentially
 *
 * Estimated cost: ~$0.65 per course × 10 = ~$6.50 total at $0.18/1k chars.
 */

import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

import LANGUAGE_SHONA from '../data/courses/language-shona/flipcards';
import LANGUAGE_ENGLISH from '../data/courses/language-english/flipcards';
import LANGUAGE_FRENCH from '../data/courses/language-french/flipcards';
import LANGUAGE_CHINESE from '../data/courses/language-chinese/flipcards';
import LANGUAGE_TAGALOG from '../data/courses/language-tagalog/flipcards';
import LANGUAGE_SPANISH from '../data/courses/language-spanish/flipcards';
import LANGUAGE_PORTUGUESE from '../data/courses/language-portuguese/flipcards';
import LANGUAGE_HINDI from '../data/courses/language-hindi/flipcards';
import LANGUAGE_JAPANESE from '../data/courses/language-japanese/flipcards';
import LANGUAGE_KOREAN from '../data/courses/language-korean/flipcards';
import LANGUAGE_NDEBELE from '../data/courses/language-ndebele/flipcards';
import LANGUAGE_ENGLISH_FROM_NDEBELE from '../data/courses/language-english/flipcards-from-ndebele';
import type { FlipCard } from '../types/flipcards';

dotenv.config({ path: '.env.local' });
dotenv.config();

const ELEVENLABS_KEY = process.env.ELEVENLABS_KEY ?? process.env.EXPO_PUBLIC_ELEVENLABS_KEY ?? '';
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!ELEVENLABS_KEY) { console.error('Missing ELEVENLABS_KEY'); process.exit(1); }
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) { console.error('Missing Supabase creds'); process.exit(1); }

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const FLIPCARDS_BY_COURSE: Record<string, FlipCard[]> = {
  'language-shona': LANGUAGE_SHONA,
  'language-english': LANGUAGE_ENGLISH,
  'language-french': LANGUAGE_FRENCH,
  'language-chinese': LANGUAGE_CHINESE,
  'language-tagalog': LANGUAGE_TAGALOG,
  'language-spanish': LANGUAGE_SPANISH,
  'language-portuguese': LANGUAGE_PORTUGUESE,
  'language-hindi': LANGUAGE_HINDI,
  'language-japanese': LANGUAGE_JAPANESE,
  'language-korean': LANGUAGE_KOREAN,
  'language-ndebele': LANGUAGE_NDEBELE,
  'language-english-from-ndebele': LANGUAGE_ENGLISH_FROM_NDEBELE,
};

// Multilingual George across the board for v1.
const VOICE = { id: 'JBFqnCBsd6RMkjVDRZzb', modelId: 'eleven_multilingual_v2', name: 'George (multilingual)' };

async function generateAudio(text: string): Promise<Buffer> {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE.id}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'xi-api-key': ELEVENLABS_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text, model_id: VOICE.modelId, voice_settings: { stability: 0.6, similarity_boost: 0.75 } }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return Buffer.from(await res.arrayBuffer());
}

async function uploadAudio(courseId: string, cardId: string, audio: Buffer): Promise<string> {
  const path = `flipcards/${courseId}/${cardId}.mp3`;
  const { error } = await supabase.storage.from('audio').upload(path, audio, { contentType: 'audio/mpeg', upsert: true });
  if (error) throw new Error(`Upload ${path}: ${error.message}`);
  return path;
}

async function audioExists(courseId: string, cardId: string): Promise<boolean> {
  const { data } = await supabase.storage.from('audio').list(`flipcards/${courseId}`, { search: `${cardId}.mp3`, limit: 1 });
  return (data ?? []).some(f => f.name === `${cardId}.mp3`);
}

async function ensureBucket(): Promise<void> {
  const { data } = await supabase.storage.listBuckets();
  if (!data?.some(b => b.id === 'audio')) {
    const { error } = await supabase.storage.createBucket('audio', { public: true });
    if (error && !error.message.toLowerCase().includes('exists')) throw error;
  }
}

interface ManifestEntry { id: string; audioPath: string; charCount: number; }
interface AudioManifest { courseId: string; voice: string; generatedAt: string; entries: ManifestEntry[]; }

async function syncManifest(courseId: string, manifest: AudioManifest): Promise<void> {
  const json = JSON.stringify(manifest, null, 2);
  const { error } = await supabase.storage.from('audio').upload(
    `flipcards/${courseId}/manifest.json`,
    Buffer.from(json),
    { contentType: 'application/json', upsert: true },
  );
  if (error) throw error;
}

async function generateForCourse(courseId: string, force: boolean): Promise<{ generated: number; skipped: number; failed: number; chars: number }> {
  const cards = FLIPCARDS_BY_COURSE[courseId];
  if (!cards) throw new Error(`Unknown course: ${courseId}`);

  console.log(`\n=== ${courseId} (${cards.length} cards) ===`);
  const entries: ManifestEntry[] = [];
  let generated = 0, skipped = 0, failed = 0, chars = 0;

  for (const card of cards) {
    process.stdout.write(`  ${card.id} `);
    try {
      if (!force && (await audioExists(courseId, card.id))) {
        entries.push({ id: card.id, audioPath: `flipcards/${courseId}/${card.id}.mp3`, charCount: card.target.length });
        skipped++;
        process.stdout.write('cached\n');
        continue;
      }
      const audio = await generateAudio(card.target);
      const path = await uploadAudio(courseId, card.id, audio);
      entries.push({ id: card.id, audioPath: path, charCount: card.target.length });
      chars += card.target.length;
      generated++;
      process.stdout.write(`✓\n`);
      await new Promise(r => setTimeout(r, 150));
    } catch (e) {
      failed++;
      process.stdout.write(`✗ ${e instanceof Error ? e.message.slice(0, 60) : ''}\n`);
    }
  }

  await syncManifest(courseId, {
    courseId,
    voice: VOICE.name,
    generatedAt: new Date().toISOString(),
    entries,
  });

  console.log(`  Done: ${generated} generated, ${skipped} cached, ${failed} failed. ${chars} chars.`);
  return { generated, skipped, failed, chars };
}

(async () => {
  const args = process.argv.slice(2);
  const target = args.find(a => !a.startsWith('--')) ?? 'language-shona';
  const force = args.includes('--force');

  await ensureBucket();

  const courses = target === 'all' ? Object.keys(FLIPCARDS_BY_COURSE) : [target];
  let total = { generated: 0, skipped: 0, failed: 0, chars: 0 };
  for (const c of courses) {
    const r = await generateForCourse(c, force);
    total.generated += r.generated;
    total.skipped += r.skipped;
    total.failed += r.failed;
    total.chars += r.chars;
  }

  const cost = (total.chars / 1000) * 0.18;
  console.log(`\nALL DONE. ${total.generated} generated, ${total.skipped} cached, ${total.failed} failed.`);
  console.log(`Total chars billed: ${total.chars}. Approx cost: $${cost.toFixed(2)} USD.`);
})().catch(e => { console.error(e); process.exit(1); });
