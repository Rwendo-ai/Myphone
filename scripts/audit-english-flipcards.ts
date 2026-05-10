/**
 * Audit the 10 English flipcard decks in storage. Verifies:
 *   - Card count == 500
 *   - All ids present (m01-c01 through m10-c50)
 *   - target stays English (matches source flipcards.ts)
 *   - native is non-empty
 *   - native != target (caught the "Hello/Hello" bug pre-launch)
 *
 * Reports per-speaker stats.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

import { FLIPCARDS as SOURCE } from '../data/courses/language-english/flipcards';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const ALL_SPEAKERS = ['shona', 'ndebele', 'tagalog', 'french', 'spanish', 'portuguese', 'hindi', 'japanese', 'korean', 'chinese'];

const sourceById = new Map(SOURCE.map((c) => [c.id, c]));

async function audit(speaker: string) {
  const path = `flipcards/language-english-from-${speaker}.json`;
  const { data, error } = await supabase.storage.from('course-content').download(path);
  if (error || !data) { console.log(`${speaker.padEnd(12)} MISSING — ${error?.message}`); return; }
  const cards = JSON.parse(await new Response(data).text()) as Array<{ id: string; target: string; native: string }>;
  let nativeEqualsTarget = 0;
  let nativeEmpty = 0;
  let targetMismatch = 0;
  const seenIds = new Set<string>();
  for (const c of cards) {
    seenIds.add(c.id);
    if (!c.native || c.native.trim() === '') nativeEmpty++;
    if (c.native && c.native.trim().toLowerCase() === c.target.trim().toLowerCase()) nativeEqualsTarget++;
    const src = sourceById.get(c.id);
    if (src && src.target !== c.target) targetMismatch++;
  }
  const missingIds = [...sourceById.keys()].filter((id) => !seenIds.has(id));
  console.log(
    `${speaker.padEnd(12)} count=${cards.length} ` +
    `missing-ids=${missingIds.length} ` +
    `native-empty=${nativeEmpty} ` +
    `native==target=${nativeEqualsTarget} ` +
    `target-mismatch=${targetMismatch}` +
    `${nativeEqualsTarget > 0 || nativeEmpty > 0 || targetMismatch > 0 || cards.length !== 500 ? '  ❌' : '  ✓'}`,
  );
}

(async () => {
  console.log('Auditing English flipcard decks in storage:');
  for (const sp of ALL_SPEAKERS) await audit(sp);
})();
