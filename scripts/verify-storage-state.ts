/**
 * Sanity check: lists Storage contents per course/speaker so we can confirm
 * what the device should be able to fetch.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const BUCKET = 'course-content';

const TARGETS: Array<[string, string]> = [
  ['know-yourself', 'english'],
  ['language-english', 'shona'],
  ['language-english', 'french'],
  ['language-english', 'chinese'],
  ['language-english', 'tagalog'],
  ['lost-confidence', 'english'],
  ['parenting-under-pressure', 'english'],
];

(async () => {
  for (const [course, speaker] of TARGETS) {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .list(`lessons/${course}/${speaker}`, { limit: 200 });
    if (error) {
      console.log(`${course}/${speaker}: ERROR ${error.message}`);
      continue;
    }
    const json = (data ?? []).filter((f) => f.name.endsWith('.json'));
    console.log(`${course}/${speaker}: ${json.length} JSON files`);
    // Spot-check first 3
    json.slice(0, 3).forEach((f) => console.log(`  ${f.name}`));
  }
})();
