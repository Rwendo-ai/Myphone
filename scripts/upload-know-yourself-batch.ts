/**
 * Upload a batch of Knowing Yourself lessons + reinforcement cards.
 *
 * Reads JSON files from scripts/know-yourself-batch/lessons/*.json and
 * scripts/know-yourself-batch/cards/*.json, pushes them to:
 *   course-content/lessons/know-yourself/english/<id>.json
 *   course-content/reinforcement-cards/know-yourself/m<NN>.json
 *
 * Idempotent (upsert). Run after writing the batch JSON files.
 */
import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const BATCH_DIR = path.resolve(__dirname, 'know-yourself-batch');

async function uploadFile(localPath: string, storagePath: string): Promise<number> {
  const body = fs.readFileSync(localPath);
  const { error } = await supabase.storage
    .from('course-content')
    .upload(storagePath, body, { contentType: 'application/json', upsert: true });
  if (error) throw new Error(`${storagePath}: ${error.message}`);
  return body.length;
}

(async () => {
  let lessonCount = 0, cardCount = 0, totalBytes = 0;

  const lessonsDir = path.join(BATCH_DIR, 'lessons');
  if (fs.existsSync(lessonsDir)) {
    for (const file of fs.readdirSync(lessonsDir).filter(f => f.endsWith('.json'))) {
      const id = file.replace(/\.json$/, '');
      const bytes = await uploadFile(
        path.join(lessonsDir, file),
        `lessons/know-yourself/english/${id}.json`,
      );
      console.log(`  lesson ${id.padEnd(40)} ${bytes.toLocaleString()} bytes`);
      lessonCount++;
      totalBytes += bytes;
    }
  }

  const cardsDir = path.join(BATCH_DIR, 'cards');
  if (fs.existsSync(cardsDir)) {
    for (const file of fs.readdirSync(cardsDir).filter(f => f.endsWith('.json'))) {
      const mNN = file.replace(/\.json$/, '');
      const bytes = await uploadFile(
        path.join(cardsDir, file),
        `reinforcement-cards/know-yourself/${mNN}.json`,
      );
      console.log(`  cards  ${mNN.padEnd(40)} ${bytes.toLocaleString()} bytes`);
      cardCount++;
      totalBytes += bytes;
    }
  }

  console.log(`\nDone. ${lessonCount} lessons + ${cardCount} card decks = ${totalBytes.toLocaleString()} bytes.`);
})();
