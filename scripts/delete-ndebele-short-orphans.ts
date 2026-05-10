/**
 * One-shot cleanup: removes the orphan short-form ndebele lesson files in
 * Storage that were left behind from an earlier upload that used the wrong
 * (short) lesson ids. The long-form files were uploaded fresh by
 * upload-language-english-variants-to-storage.ts ndebele. After this
 * script runs, only the long-form (mNN-lNN-<descriptor>.json) files
 * remain. Run once, then delete this script.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

(async () => {
  const { data, error } = await supabase.storage
    .from('course-content')
    .list('lessons/language-english/ndebele', { limit: 1000 });
  if (error) { console.error(error); process.exit(1); }
  const orphans = (data ?? [])
    .map((d) => d.name)
    .filter((n) => /^m\d{2}-l\d{2}\.json$/.test(n))
    .map((n) => `lessons/language-english/ndebele/${n}`);
  console.log(`Found ${orphans.length} orphan files to delete.`);
  if (orphans.length === 0) { process.exit(0); }
  const { error: rmError } = await supabase.storage
    .from('course-content')
    .remove(orphans);
  if (rmError) { console.error(rmError); process.exit(1); }
  console.log(`Deleted ${orphans.length} orphans.`);
})();
