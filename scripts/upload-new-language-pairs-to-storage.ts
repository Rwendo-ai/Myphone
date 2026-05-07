/**
 * Uploader for the 5 new language pairs added 2026-05-05/06:
 *   - Hindi    ↔ English
 *   - Spanish  ↔ English
 *   - Portuguese ↔ English
 *   - Japanese ↔ English
 *   - Korean   ↔ English
 *
 * Walks both directions:
 *   - Forward:  data/courses/language-{X}/english/curriculum/  → Storage `lessons/language-{X}/english/`
 *   - Reverse:  data/courses/language-english/{X}/curriculum/  → Storage `lessons/language-english/{X}/`
 *
 * Idempotent (upsert).
 */
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
const BUCKET = 'course-content';

const NEW_LANGUAGES = ['hindi', 'spanish', 'portuguese', 'japanese', 'korean'];

interface UploadResult {
  uploaded: number;
  failed: number;
}

async function uploadVariant(courseId: string, speakerId: string): Promise<UploadResult> {
  const dir = path.join('data', 'courses', courseId, speakerId, 'curriculum');
  if (!fs.existsSync(dir)) {
    console.warn(`  skip ${courseId}/${speakerId} — no curriculum directory`);
    return { uploaded: 0, failed: 0 };
  }

  const files = fs.readdirSync(dir).filter((f) => /^m\d{2}-l\d{2}\.ts$/.test(f));
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    const fileBase = file.replace(/\.ts$/, '');
    const absPath = path.resolve(dir, file);
    try {
      const mod = await import(pathToFileURL(absPath).href);
      const lesson = mod.default ?? mod.lesson;
      if (!lesson || !lesson.id) {
        console.warn(`  ${courseId}/${speakerId}/${fileBase}: no default export with .id`);
        failed++;
        continue;
      }

      const storagePath = `lessons/${courseId}/${speakerId}/${lesson.id}.json`;
      const json = JSON.stringify(lesson, null, 2);

      const { error } = await supabase.storage
        .from(BUCKET)
        .upload(storagePath, json, { contentType: 'application/json', upsert: true });

      if (error) {
        console.error(`  ${storagePath}: ${error.message}`);
        failed++;
      } else {
        uploaded++;
      }
    } catch (e) {
      console.error(`  ${courseId}/${speakerId}/${fileBase}: ${e instanceof Error ? e.message : e}`);
      failed++;
    }
  }
  return { uploaded, failed };
}

(async () => {
  console.log(`Uploading 5 new language pairs to ${BUCKET} bucket\n`);
  const totals = { uploaded: 0, failed: 0 };

  // Forward direction: language-{X}/english/
  console.log('--- FORWARD direction (English speaker → X) ---');
  for (const lang of NEW_LANGUAGES) {
    const courseId = `language-${lang}`;
    console.log(`${courseId} / english:`);
    const r = await uploadVariant(courseId, 'english');
    console.log(`  → ${r.uploaded} uploaded, ${r.failed} failed`);
    totals.uploaded += r.uploaded;
    totals.failed += r.failed;
  }

  console.log('');
  console.log('--- REVERSE direction (X speaker → English) ---');
  for (const lang of NEW_LANGUAGES) {
    console.log(`language-english / ${lang}:`);
    const r = await uploadVariant('language-english', lang);
    console.log(`  → ${r.uploaded} uploaded, ${r.failed} failed`);
    totals.uploaded += r.uploaded;
    totals.failed += r.failed;
  }

  console.log(`\nDone. Total: ${totals.uploaded} uploaded, ${totals.failed} failed.`);
  process.exit(totals.failed > 0 ? 1 : 0);
})();
