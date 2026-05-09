/**
 * Storage-driven manifest regenerator.
 *
 * Post-streaming-pivot the local lesson .ts files are temporary authoring
 * artifacts; the authoritative state lives in Supabase Storage. This script
 * walks the `course-content` bucket, pulls each lesson's metadata
 * (id, module, lesson, title, xpReward), and writes per-course manifest.ts
 * files keyed off Storage rather than local source files.
 *
 * For language courses, lesson IDs are identical across every speaker variant
 * (the `chunk.target` differs, but module/lesson/title/xpReward don't), so
 * we read from one variant per course.
 *
 * Run:  npx tsx scripts/generate-manifests-from-storage.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
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

interface LessonMeta {
  id: string;
  module: number;
  lesson: number;
  title: string;
  xpReward: number;
  version: number;
}

// Each course needs a "primary" speaker variant to read manifest metadata from.
// (IDs/titles/xp are identical across variants of the same course.)
const COURSES: Array<{ id: string; primarySpeaker: string }> = [
  { id: 'language-shona',           primarySpeaker: 'english' },
  { id: 'language-english',         primarySpeaker: 'shona'   },
  { id: 'language-french',          primarySpeaker: 'english' },
  { id: 'language-chinese',         primarySpeaker: 'english' },
  { id: 'language-tagalog',         primarySpeaker: 'english' },
  { id: 'language-hindi',           primarySpeaker: 'english' },
  { id: 'language-spanish',         primarySpeaker: 'english' },
  { id: 'language-portuguese',      primarySpeaker: 'english' },
  { id: 'language-japanese',        primarySpeaker: 'english' },
  { id: 'language-korean',          primarySpeaker: 'english' },
  { id: 'language-ndebele',         primarySpeaker: 'english' },
  { id: 'know-yourself',            primarySpeaker: 'english' },
  { id: 'hard-conversations-work',  primarySpeaker: 'english' },
  { id: 'parenting-under-pressure', primarySpeaker: 'english' },
  { id: 'money-and-meaning',        primarySpeaker: 'english' },
  { id: 'grief-honestly',           primarySpeaker: 'english' },
  { id: 'sleep-repaired',           primarySpeaker: 'english' },
  { id: 'lost-confidence',          primarySpeaker: 'english' },
  { id: 'caring-aging-parent',      primarySpeaker: 'english' },
];

async function listLessonFiles(courseId: string, speakerId: string): Promise<string[]> {
  const prefix = `lessons/${courseId}/${speakerId}/`;
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .list(`lessons/${courseId}/${speakerId}`, { limit: 1000 });
  if (error) {
    console.error(`  list ${prefix}: ${error.message}`);
    return [];
  }
  return (data ?? [])
    .filter((f) => f.name.endsWith('.json'))
    .map((f) => `${prefix}${f.name}`);
}

async function downloadLesson(storagePath: string): Promise<LessonMeta | null> {
  const { data, error } = await supabase.storage.from(BUCKET).download(storagePath);
  if (error || !data) {
    console.error(`  download ${storagePath}: ${error?.message ?? 'no data'}`);
    return null;
  }
  try {
    const text = await data.text();
    const json = JSON.parse(text);
    return {
      id: json.id,
      module: json.module,
      lesson: json.lesson,
      title: json.title,
      xpReward: json.xpReward ?? 25,
      version: typeof json.version === 'number' ? json.version : 1,
    };
  } catch (e) {
    console.error(`  parse ${storagePath}: ${e instanceof Error ? e.message : e}`);
    return null;
  }
}

async function generateForCourse(courseId: string, primarySpeaker: string): Promise<number> {
  const files = await listLessonFiles(courseId, primarySpeaker);
  if (files.length === 0) {
    console.warn(`  ${courseId}: no lessons in Storage at lessons/${courseId}/${primarySpeaker}/`);
    return 0;
  }

  const manifest: LessonMeta[] = [];
  for (const file of files) {
    const meta = await downloadLesson(file);
    if (meta) manifest.push(meta);
  }

  manifest.sort((a, b) => a.module - b.module || a.lesson - b.lesson);

  const out = `/**
 * Auto-generated lesson manifest for ${courseId}.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/${courseId}/<speakerId>/<lessonId>.json
 *
 * This manifest carries ONLY the metadata the Learn tab needs to render
 * the unit list (id, module, lesson, title, xpReward) so we don't have
 * to bundle every lesson's full content in the JS binary.
 *
 * Regenerate with:  npx tsx scripts/generate-manifests-from-storage.ts
 *
 * DO NOT EDIT BY HAND.
 */

export interface LessonMeta {
  id: string;
  module: number;
  lesson: number;
  title: string;
  xpReward: number;
  /** Content version for cache invalidation. Defaults to 1 if absent in the
   *  Storage JSON. Bump in the lesson's source file and re-upload to force
   *  devices to refetch on next open. */
  version?: number;
}

export const LESSON_MANIFEST: LessonMeta[] = ${JSON.stringify(manifest, null, 2)};

export default LESSON_MANIFEST;
`;

  const outPath = path.join('data', 'courses', courseId, 'manifest.ts');
  fs.writeFileSync(outPath, out);
  return manifest.length;
}

(async () => {
  console.log('Generating per-course manifests from Storage…\n');
  let total = 0;
  for (const { id, primarySpeaker } of COURSES) {
    const count = await generateForCourse(id, primarySpeaker);
    console.log(`${id}: ${count} lessons (read from ${primarySpeaker} variant)`);
    total += count;
  }
  console.log(`\nDone. ${total} lessons across ${COURSES.length} courses.`);
})();
