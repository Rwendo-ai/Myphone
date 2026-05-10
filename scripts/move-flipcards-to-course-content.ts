/**
 * One-shot move: flipcards/<courseId>.json files live in `travel-content`
 * (public bucket) but flip cards are course content, not travel content.
 * Move to `course-content` (private, authed-read). The lesson screen + flip-
 * card screen need to be on the same bucket for the offline-install flow
 * to make sense.
 *
 * After this script:
 *   - course-content/flipcards/<courseId>.json (NEW)
 *   - travel-content/flipcards/* (deleted)
 *
 * Run once, then update lib/travel-content-loader.ts (or split flipcard
 * loader out) to point at course-content.
 *
 *   npx tsx scripts/move-flipcards-to-course-content.ts
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

(async () => {
  const { data: list, error: listError } = await supabase.storage
    .from('travel-content')
    .list('flipcards', { limit: 1000 });
  if (listError) { console.error(listError); process.exit(1); }
  const files = (list ?? []).filter((f) => f.name.endsWith('.json'));
  console.log(`Found ${files.length} flipcard files in travel-content/flipcards`);

  let moved = 0;
  for (const f of files) {
    const src = `flipcards/${f.name}`;
    const dst = `flipcards/${f.name}`;
    const { data: blob, error: dlError } = await supabase.storage
      .from('travel-content')
      .download(src);
    if (dlError || !blob) {
      console.error(`  ${src}: download failed ${dlError?.message}`);
      continue;
    }
    const buffer = Buffer.from(await blob.arrayBuffer());
    const { error: upError } = await supabase.storage
      .from('course-content')
      .upload(dst, buffer, { contentType: 'application/json', upsert: true });
    if (upError) {
      console.error(`  ${dst}: upload failed ${upError.message}`);
      continue;
    }
    console.log(`  ${f.name} → course-content`);
    moved++;
  }

  // Delete originals from travel-content
  if (moved > 0) {
    const paths = files.map((f) => `flipcards/${f.name}`);
    const { error: rmError } = await supabase.storage
      .from('travel-content')
      .remove(paths);
    if (rmError) console.error('Remove error:', rmError);
    else console.log(`Deleted ${paths.length} originals from travel-content`);
  }

  console.log(`\nDone. ${moved}/${files.length} moved.`);
})();
