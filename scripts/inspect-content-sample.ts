/**
 * Diagnostic: dump Tagalog m01-l01-hello CURRENT state from storage,
 * highlighting any English-where-Tagalog-should-be content.
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
    .download('lessons/language-english/tagalog/m01-l01-hello.json');
  if (error || !data) { console.error(error); process.exit(1); }
  const json = JSON.parse(await new Response(data).text());

  // Print the sections most likely to have buttons / labels / mission text
  console.log('=== title');
  console.log(json.title);
  console.log('\n=== activeRecall');
  console.log(JSON.stringify(json.activeRecall, null, 2));
  console.log('\n=== mission');
  console.log(JSON.stringify(json.mission, null, 2));
  console.log('\n=== phase8');
  console.log(JSON.stringify(json.phase8, null, 2));
  console.log('\n=== exercises (translate type prompts)');
  for (const ex of json.exercises ?? []) {
    if (ex.type === 'translate') {
      console.log(`  prompt: ${ex.prompt}  →  correct: ${JSON.stringify(ex.correct)}`);
    }
  }
})();
