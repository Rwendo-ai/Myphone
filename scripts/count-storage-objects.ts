/**
 * Counts every JSON object in the course-content bucket — the true total
 * of lesson instances uploaded across all (course, speaker) pairs.
 *
 * Manifest counts are per-course (576 total) because lesson IDs are
 * identical across speaker variants. Storage object counts are higher —
 * each speaker variant has its own copy of every lesson.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const BUCKET = 'course-content';

const COURSES = [
  'language-shona', 'language-english', 'language-french', 'language-chinese', 'language-tagalog',
  'know-yourself', 'hard-conversations-work', 'parenting-under-pressure', 'money-and-meaning',
  'grief-honestly', 'sleep-repaired', 'lost-confidence', 'caring-aging-parent',
];

(async () => {
  let grandTotal = 0;
  for (const course of COURSES) {
    // List the speaker variant directories under this course
    const { data: speakers } = await supabase.storage
      .from(BUCKET)
      .list(`lessons/${course}`, { limit: 100 });
    const speakerNames = (speakers ?? []).filter((s) => !s.name.endsWith('.json')).map((s) => s.name);

    let courseTotal = 0;
    const breakdown: string[] = [];
    for (const speaker of speakerNames) {
      const { data } = await supabase.storage
        .from(BUCKET)
        .list(`lessons/${course}/${speaker}`, { limit: 200 });
      const count = (data ?? []).filter((f) => f.name.endsWith('.json')).length;
      courseTotal += count;
      breakdown.push(`${speaker}=${count}`);
    }
    console.log(`${course.padEnd(28)} ${courseTotal.toString().padStart(4)}  [${breakdown.join(', ')}]`);
    grandTotal += courseTotal;
  }
  console.log(`\nGRAND TOTAL: ${grandTotal} JSON objects in Storage`);
})();
