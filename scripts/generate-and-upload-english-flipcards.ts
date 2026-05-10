/**
 * Generate 8 per-speaker English flipcard decks from the source Shona-
 * perspective deck + per-speaker native translations, then upload to
 * Supabase Storage at:
 *   course-content/flipcards/language-english-from-<speaker>.json
 *
 * Source: data/courses/language-english/flipcards.ts (500 cards, English
 *         targets + Shona natives + English hints).
 * Per-speaker translations: scripts/flipcard-translations-<speaker>.json
 *         flat map of card-id → native (speaker's language).
 *
 * Output schema (FlipCard[]): keeps id, module, target, hint (English)
 * unchanged; swaps native to the speaker's language. Phonetic field
 * dropped (the source has phonetic guidance for English which doesn't
 * apply to a per-speaker deck where target is what they're learning).
 *
 * Idempotent (upsert).
 *
 *   npx tsx scripts/generate-and-upload-english-flipcards.ts
 */
import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

import { FLIPCARDS as SOURCE } from '../data/courses/language-english/flipcards';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const SPEAKERS = ['tagalog', 'french', 'spanish', 'portuguese', 'hindi', 'japanese', 'korean', 'chinese'];

interface FlipCard {
  id: string; module: number; target: string; native: string; hint?: string;
}

async function processSpeaker(speaker: string) {
  const txPath = path.resolve(__dirname, `flipcard-translations-${speaker}.json`);
  if (!fs.existsSync(txPath)) {
    console.warn(`  skip ${speaker}: no translations file`);
    return;
  }
  const translations: Record<string, string> = JSON.parse(fs.readFileSync(txPath, 'utf8'));

  const cards: FlipCard[] = [];
  let missing = 0;
  for (const src of SOURCE) {
    const native = translations[src.id];
    if (!native) { missing++; continue; }
    const card: FlipCard = {
      id: src.id,
      module: src.module,
      target: src.target,
      native,
    };
    if (src.hint) card.hint = src.hint;
    cards.push(card);
  }

  const storagePath = `flipcards/language-english-from-${speaker}.json`;
  const body = JSON.stringify(cards);
  const { error } = await supabase.storage
    .from('course-content')
    .upload(storagePath, body, { contentType: 'application/json', upsert: true });

  if (error) {
    console.error(`  ${speaker}: upload error ${error.message}`);
  } else {
    console.log(`  ${speaker}: ${cards.length} cards uploaded (${missing} missing translations)`);
  }
}

(async () => {
  console.log(`Generating + uploading per-speaker English flipcards`);
  for (const sp of SPEAKERS) {
    await processSpeaker(sp);
  }
  console.log('Done.');
})();
