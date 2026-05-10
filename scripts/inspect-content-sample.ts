/**
 * One-shot: download a Tagalog and a Shona english-from-X lesson sample
 * + the language-english flipcard JSON, and print the first chunk to
 * confirm whether content is correctly per-speaker or all defaulting to
 * Shona. Delete after diagnosis.
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
  for (const path of [
    'lessons/language-english/tagalog/m01-l01-hello.json',
    'lessons/language-english/shona/m01-l01-hello.json',
    'flipcards/language-english.json',
  ]) {
    const { data, error } = await supabase.storage
      .from('course-content')
      .download(path);
    if (error || !data) { console.log(`\n=== ${path}\nFAILED: ${error?.message}`); continue; }
    const text = await new Response(data).text();
    console.log(`\n=== ${path} (${text.length} bytes)`);
    // First 800 chars
    console.log(text.slice(0, 800));
    console.log('---');
  }
})();
