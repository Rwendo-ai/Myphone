/**
 * One-off: delete stale Storage objects left behind when a lesson rewrite
 * changed the lesson's slug (and therefore its filename) — the new lesson
 * was uploaded at a new path, but the old one is orphaned in Storage.
 *
 * Specific stale objects from the 2026-05-05 Christian-foundation rewrite:
 *   - know-yourself m01-l03 (slug: voice-in-your-head → thought-isnt-verdict)
 *   - know-yourself m01-l09 (slug: sitting-with → staying-with)
 *   - parenting-under-pressure m01-l07 (slug: self-compassion-after → kindness-after)
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

const STALE = [
  'lessons/know-yourself/english/m01-l03-voice-in-your-head.json',
  'lessons/know-yourself/english/m01-l09-sitting-with-what-you-avoid.json',
  'lessons/parenting-under-pressure/english/m01-l07-self-compassion-after-screwing-up.json',
];

(async () => {
  const { data, error } = await supabase.storage.from('course-content').remove(STALE);
  if (error) { console.error(error); process.exit(1); }
  console.log(`Removed ${data?.length ?? 0} stale objects:`);
  data?.forEach((d) => console.log(`  ${d.name}`));
})();
