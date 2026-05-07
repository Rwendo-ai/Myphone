/**
 * One-off uploader for the new language-english speaker variants
 * (french, chinese, tagalog). Mirrors upload-self-dev-lessons-to-storage.ts
 * but walks the per-speaker variant directories.
 *
 * Storage path scheme (already used by every other course):
 *     lessons/<courseId>/<speakerId>/<lessonId>.json
 *
 * The lesson screen calls loadLessonAsync(courseId, speakerId, lessonId)
 * which goes cache → Storage → English fallback. After this runs, French/
 * Chinese/Tagalog speakers learning English get their own variant; before
 * this run they were falling back to the Shona-speaker variant.
 *
 * Run:  npx tsx scripts/upload-language-english-variants-to-storage.ts
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
const COURSE_ID = 'language-english';
const SPEAKER_IDS = ['french', 'chinese', 'tagalog'];

async function uploadVariant(speakerId: string) {
  const dir = path.join('data', 'courses', COURSE_ID, speakerId, 'curriculum');
  if (!fs.existsSync(dir)) {
    console.warn(`  skip ${speakerId} — no ${speakerId}/curriculum directory`);
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
        console.warn(`  ${speakerId}/${fileBase}: no default export with .id`);
        failed++;
        continue;
      }

      const storagePath = `lessons/${COURSE_ID}/${speakerId}/${lesson.id}.json`;
      const json = JSON.stringify(lesson, null, 2);

      const { error } = await supabase.storage
        .from(BUCKET)
        .upload(storagePath, json, {
          contentType: 'application/json',
          upsert: true,
        });

      if (error) {
        console.error(`  ${storagePath}: ${error.message}`);
        failed++;
      } else {
        uploaded++;
      }
    } catch (e) {
      console.error(`  ${speakerId}/${fileBase}: ${e instanceof Error ? e.message : e}`);
      failed++;
    }
  }

  return { uploaded, failed };
}

(async () => {
  console.log(`Uploading ${COURSE_ID} speaker variants to ${BUCKET} bucket\n`);
  const totals = { uploaded: 0, failed: 0 };
  for (const speakerId of SPEAKER_IDS) {
    console.log(`${speakerId}:`);
    const { uploaded, failed } = await uploadVariant(speakerId);
    console.log(`  → ${uploaded} uploaded, ${failed} failed\n`);
    totals.uploaded += uploaded;
    totals.failed += failed;
  }
  console.log(`Done. Total: ${totals.uploaded} uploaded, ${totals.failed} failed.`);
  process.exit(totals.failed > 0 ? 1 : 0);
})();
