/**
 * Upload reinforcement card decks to Supabase Storage.
 *
 * Source files live in data/reinforcement-cards/<courseId>-m<NN>.ts
 * exporting a ReinforcementCard[] as default. We push them to:
 *   course-content/reinforcement-cards/<courseId>/m<NN>.json
 *
 *   npx tsx scripts/upload-reinforcement-cards.ts
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

import KNOW_YOURSELF_M01           from '../data/reinforcement-cards/know-yourself-m01';
import HARD_CONVERSATIONS_M01      from '../data/reinforcement-cards/hard-conversations-work-m01';
import PARENTING_M01               from '../data/reinforcement-cards/parenting-under-pressure-m01';
import MONEY_AND_MEANING_M01       from '../data/reinforcement-cards/money-and-meaning-m01';
import GRIEF_HONESTLY_M01          from '../data/reinforcement-cards/grief-honestly-m01';
import SLEEP_REPAIRED_M01          from '../data/reinforcement-cards/sleep-repaired-m01';
import LOST_CONFIDENCE_M01         from '../data/reinforcement-cards/lost-confidence-m01';
import CARING_AGING_PARENT_M01     from '../data/reinforcement-cards/caring-aging-parent-m01';

dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const DECKS: Array<{ courseId: string; module: number; cards: unknown }> = [
  { courseId: 'know-yourself',           module: 1, cards: KNOW_YOURSELF_M01 },
  { courseId: 'hard-conversations-work', module: 1, cards: HARD_CONVERSATIONS_M01 },
  { courseId: 'parenting-under-pressure', module: 1, cards: PARENTING_M01 },
  { courseId: 'money-and-meaning',       module: 1, cards: MONEY_AND_MEANING_M01 },
  { courseId: 'grief-honestly',          module: 1, cards: GRIEF_HONESTLY_M01 },
  { courseId: 'sleep-repaired',          module: 1, cards: SLEEP_REPAIRED_M01 },
  { courseId: 'lost-confidence',         module: 1, cards: LOST_CONFIDENCE_M01 },
  { courseId: 'caring-aging-parent',     module: 1, cards: CARING_AGING_PARENT_M01 },
];

(async () => {
  for (const { courseId, module, cards } of DECKS) {
    const mNN = `m${String(module).padStart(2, '0')}`;
    const path = `reinforcement-cards/${courseId}/${mNN}.json`;
    const body = JSON.stringify(cards);
    const { error } = await supabase.storage
      .from('course-content')
      .upload(path, body, { contentType: 'application/json', upsert: true });
    const cardCount = Array.isArray(cards) ? cards.length : 0;
    if (error) console.error(`✗ ${courseId} ${mNN}: ${error.message}`);
    else console.log(`✓ ${courseId.padEnd(28)} ${mNN}  ${cardCount} cards  (${body.length.toLocaleString()} bytes)`);
  }
})();
