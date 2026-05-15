/**
 * Sanity check — list the updated_at timestamps for each archetype
 * portrait in Supabase Storage so we can confirm whether the recent
 * re-rolls actually replaced the files or whether the upload silently
 * failed and the user is just seeing the original.
 */
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

(async () => {
  const ids = ['sarah','marcus','aiko','yuki','olu','lin','carlos','aisha','erik','priya','joon','margaret','nova','giulio','astra','hassan','bea','eleanor','mateo','tane'];

  for (const id of ids) {
    const { data, error } = await supabase.storage
      .from('companion-assets')
      .list(`archetypes/${id}`, { limit: 5 });
    if (error || !data) { console.log(`${id.padEnd(10)} ERROR: ${error?.message ?? 'no data'}`); continue; }
    const file = data.find((f) => f.name === 'portrait.jpg');
    if (!file) { console.log(`${id.padEnd(10)} NO PORTRAIT`); continue; }
    console.log(`${id.padEnd(10)} updated_at=${file.updated_at}  size=${(file as any).metadata?.size ?? '?'}`);
  }
})();
