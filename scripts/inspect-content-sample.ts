/**
 * Spot-check: print the cards where native equals target for one speaker
 * to confirm those are legitimate loanwords (not bugs).
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
  for (const sp of ['tagalog', 'french']) {
    const { data } = await supabase.storage
      .from('course-content')
      .download(`flipcards/language-english-from-${sp}.json`);
    if (!data) continue;
    const cards = JSON.parse(await new Response(data).text()) as Array<{ id: string; target: string; native: string }>;
    console.log(`\n=== ${sp} native==target cases:`);
    for (const c of cards) {
      if (c.native.trim().toLowerCase() === c.target.trim().toLowerCase()) {
        console.log(`  ${c.id}: "${c.target}" → "${c.native}"`);
      }
    }
  }
})();
