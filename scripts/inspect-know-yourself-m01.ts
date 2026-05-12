/**
 * Pull one Knowing Yourself m01 lesson from storage so we can inspect
 * the canonical shape before authoring m02 lessons.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

(async () => {
  const { data, error } = await supabase.storage
    .from('course-content')
    .download('lessons/know-yourself/english/m01-l01-looking-and-seeing.json');
  if (error || !data) { console.error(error); process.exit(1); }
  console.log(await new Response(data).text());
})();
