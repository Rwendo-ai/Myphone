/**
 * Diagnostic: dump activeRecall section across all 10 speaker variants
 * of language-english/m01-l01-hello to confirm whether the prompts are
 * authored correctly (native-language prompt → target-language answer).
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const SPEAKERS = ['shona', 'ndebele', 'french', 'chinese', 'tagalog', 'hindi', 'japanese', 'korean', 'spanish', 'portuguese'];

(async () => {
  for (const sp of SPEAKERS) {
    const { data, error } = await supabase.storage
      .from('course-content')
      .download(`lessons/language-english/${sp}/m01-l01-hello.json`);
    if (error || !data) { console.log(`${sp}: SKIP (${error?.message})`); continue; }
    const json = JSON.parse(await new Response(data).text());
    const ar = json.activeRecall;
    if (!ar) { console.log(`${sp}: no activeRecall`); continue; }
    console.log(`\n=== ${sp}`);
    for (const p of ar.prompts ?? []) {
      console.log(`  prompt: ${p.prompt}`);
      console.log(`  correct: ${JSON.stringify(p.correct)}`);
    }
  }
})();
