/**
 * One-shot: rename flipcards/language-english.json →
 * flipcards/language-english-from-shona.json. The file was authored from
 * the Shona-speaker perspective (every native field is Shona), and using
 * a generic "language-english" name made every non-Shona speaker get
 * Shona flipcards. Renaming gives the file an honest path; the loader's
 * lookup logic is updated separately to pick the right file per speaker.
 *
 * Run once, then delete this script.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const SRC = 'flipcards/language-english.json';
const DST = 'flipcards/language-english-from-shona.json';

(async () => {
  const { data, error } = await supabase.storage
    .from('course-content')
    .download(SRC);
  if (error || !data) { console.error(`Download ${SRC} failed:`, error); process.exit(1); }
  const buffer = Buffer.from(await data.arrayBuffer());

  const { error: upError } = await supabase.storage
    .from('course-content')
    .upload(DST, buffer, { contentType: 'application/json', upsert: true });
  if (upError) { console.error(`Upload ${DST} failed:`, upError); process.exit(1); }
  console.log(`Copied ${SRC} → ${DST}`);

  const { error: rmError } = await supabase.storage
    .from('course-content')
    .remove([SRC]);
  if (rmError) { console.error(`Delete ${SRC} failed:`, rmError); process.exit(1); }
  console.log(`Deleted ${SRC}`);
})();
