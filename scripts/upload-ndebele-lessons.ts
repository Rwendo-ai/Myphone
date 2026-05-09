/**
 * Upload Ndebele course lessons to Supabase Storage.
 *
 * Walks `data/courses/language-ndebele/english/curriculum/` for the
 * English-speaker variant of the Ndebele course (110 lessons across
 * 11 modules) and `data/courses/language-english/ndebele/curriculum/`
 * for the Ndebele-speaker variant of English (100 lessons, 10 modules).
 *
 * Each .ts file is dynamically imported, JSON-serialised, and pushed to:
 *   lessons/language-ndebele/english/<lessonId>.json
 *   lessons/language-english/ndebele/<lessonId>.json
 *
 * Run:  npx tsx scripts/upload-ndebele-lessons.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) { console.error('Missing Supabase creds'); process.exit(1); }

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
const BUCKET = 'course-content';

interface UploadTarget {
  courseId: string;
  speakerId: string;
  curriculumDir: string;
}

const TARGETS: UploadTarget[] = [
  {
    courseId: 'language-ndebele',
    speakerId: 'english',
    curriculumDir: path.join('data', 'courses', 'language-ndebele', 'english', 'curriculum'),
  },
  {
    courseId: 'language-english',
    speakerId: 'ndebele',
    curriculumDir: path.join('data', 'courses', 'language-english', 'ndebele', 'curriculum'),
  },
];

async function uploadLesson(target: UploadTarget, lessonId: string, lesson: unknown): Promise<number> {
  const json = JSON.stringify(lesson);
  const bytes = Buffer.from(json);
  const path = `lessons/${target.courseId}/${target.speakerId}/${lessonId}.json`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, bytes, {
    contentType: 'application/json',
    upsert: true,
  });
  if (error) throw new Error(`upload ${path}: ${error.message}`);
  return bytes.length;
}

async function processTarget(target: UploadTarget) {
  console.log(`\n=== ${target.courseId}/${target.speakerId} ===`);
  if (!fs.existsSync(target.curriculumDir)) {
    console.log(`  curriculum dir not found: ${target.curriculumDir}`);
    return { uploaded: 0, failed: 0, bytes: 0 };
  }

  const files = fs.readdirSync(target.curriculumDir)
    .filter(f => f.endsWith('.ts') && /^m\d{2}-l\d{2}\.ts$/.test(f))
    .sort();

  let uploaded = 0;
  let failed = 0;
  let totalBytes = 0;

  for (const file of files) {
    const lessonId = file.replace(/\.ts$/, '');
    process.stdout.write(`  ${lessonId} `);
    try {
      const modulePath = pathToFileURL(path.resolve(target.curriculumDir, file)).href;
      const mod = await import(modulePath);
      const lesson = mod.default;
      if (!lesson || typeof lesson !== 'object') {
        process.stdout.write(`✗ no default export\n`);
        failed++;
        continue;
      }
      const bytes = await uploadLesson(target, lessonId, lesson);
      totalBytes += bytes;
      uploaded++;
      process.stdout.write(`✓ ${bytes.toLocaleString()} bytes\n`);
    } catch (e) {
      failed++;
      process.stdout.write(`✗ ${e instanceof Error ? e.message.slice(0, 80) : ''}\n`);
    }
  }

  console.log(`  Uploaded: ${uploaded}, failed: ${failed}, ${totalBytes.toLocaleString()} bytes`);
  return { uploaded, failed, bytes: totalBytes };
}

(async () => {
  let totalUploaded = 0;
  let totalFailed = 0;
  let totalBytes = 0;

  for (const target of TARGETS) {
    const result = await processTarget(target);
    totalUploaded += result.uploaded;
    totalFailed += result.failed;
    totalBytes += result.bytes;
  }

  console.log(`\nDONE. ${totalUploaded} lessons uploaded, ${totalFailed} failed, ${(totalBytes / 1024).toFixed(0)} KB total.`);
})().catch(e => { console.error(e); process.exit(1); });
