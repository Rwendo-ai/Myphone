/**
 * One-off uploader: walks the 8 self-development course directories and pushes
 * every authored lesson .ts to the `course-content` Supabase Storage bucket
 * as JSON, matching the path scheme already used by the 5 language courses:
 *
 *     lessons/<courseId>/<speakerId>/<lessonId>.json
 *
 * After this runs, the streaming lesson loader (lib/lesson-loader.ts) can
 * pull any course's lessons from Storage on demand, cache them locally,
 * and the app stops bundling 576 lesson files in its JS binary.
 *
 * Run with:  npx tsx scripts/upload-self-dev-lessons-to-storage.ts
 *
 * Idempotent: uses upsert so re-running just overwrites with the latest
 * authored content.
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import * as dotenv from 'dotenv';

// Load .env.local first (where SUPABASE_SERVICE_ROLE_KEY lives), then .env
// as a fallback. Default `dotenv/config` only loads .env.
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

const SELF_DEV_COURSE_IDS = [
  'know-yourself',
  'hard-conversations-work',
  'parenting-under-pressure',
  'money-and-meaning',
  'grief-honestly',
  'sleep-repaired',
  'lost-confidence',
  'caring-aging-parent',
];

async function uploadCourse(courseId: string) {
  const dir = path.join('data', 'courses', courseId, 'english', 'curriculum');
  if (!fs.existsSync(dir)) {
    console.warn(`  skip ${courseId} — no english/curriculum directory`);
    return { uploaded: 0, skipped: 0, failed: 0 };
  }

  // Each lesson is a .ts file that default-exports a LessonData object. We
  // import them dynamically (tsx handles the TS), serialize to JSON, then
  // upload. The lesson screen will fetch and parse this JSON at runtime.
  const files = fs.readdirSync(dir).filter((f) => /^m\d{2}-l\d{2}\.ts$/.test(f));
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    const lessonId = file.replace(/\.ts$/, '');
    const absPath = path.resolve(dir, file);
    try {
      // Dynamic import the lesson module. On Windows, ESM dynamic imports
      // require file:// URLs, not bare drive-letter paths.
      const mod = await import(pathToFileURL(absPath).href);
      const lesson = mod.default ?? mod.lesson;
      if (!lesson || !lesson.id) {
        console.warn(`  ${courseId}/${lessonId}: no default export with .id`);
        failed++;
        continue;
      }

      // Use the lesson's own .id (e.g. 'm01-l01-bonjour') as the storage
      // path's filename — matches the pattern used by the language courses.
      const storagePath = `lessons/${courseId}/english/${lesson.id}.json`;
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
      console.error(`  ${courseId}/${lessonId}: ${e instanceof Error ? e.message : e}`);
      failed++;
    }
  }

  return { uploaded, failed };
}

(async () => {
  console.log(`Uploading self-development lessons to ${BUCKET} bucket\n`);
  const totals = { uploaded: 0, failed: 0 };
  for (const courseId of SELF_DEV_COURSE_IDS) {
    console.log(`${courseId}:`);
    const { uploaded, failed } = await uploadCourse(courseId);
    console.log(`  → ${uploaded} uploaded, ${failed} failed\n`);
    totals.uploaded += uploaded;
    totals.failed += failed;
  }
  console.log(`Done. Total: ${totals.uploaded} uploaded, ${totals.failed} failed.`);
  process.exit(totals.failed > 0 ? 1 : 0);
})();
