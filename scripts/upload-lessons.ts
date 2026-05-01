// Upload all authored lesson content to Supabase Storage.
// Run with: npx tsx scripts/upload-lessons.ts
//
// Reads .env.local for SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.
// Walks data/courses/{course}/{speaker}/curriculum/*.ts, converts each
// LessonData export to JSON, uploads to private bucket 'course-content'.
//
// Storage path layout:
//   lessons/{course-id}/{speaker-id}/{lesson-id}.json
//
// Also upserts catalogue rows for language-french + language-chinese
// (which weren't in migration 005).

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createClient } from '@supabase/supabase-js';
import type { LessonData } from '../types/lesson';

// ── env ──────────────────────────────────────────────────────────────────────
const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(Boolean)
    .filter(l => !l.startsWith('#'))
    .map(l => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const url = env.SUPABASE_URL!;
const key = env.SUPABASE_SERVICE_ROLE_KEY!;
if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const BUCKET = 'course-content';

// ── 1. Ensure the bucket exists (private) ────────────────────────────────────
async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets();
  if (buckets?.some(b => b.name === BUCKET)) {
    console.log(`[bucket] '${BUCKET}' exists`);
    return;
  }
  const { error } = await supabase.storage.createBucket(BUCKET, {
    public: false,
    fileSizeLimit: 1024 * 1024, // 1MB per lesson — generous
    allowedMimeTypes: ['application/json'],
  });
  if (error) throw new Error(`createBucket: ${error.message}`);
  console.log(`[bucket] '${BUCKET}' created (private, 1MB limit)`);
}

// ── 2. Upsert catalogue rows for new courses ─────────────────────────────────
async function upsertNewCatalogueRows() {
  const newRows = [
    {
      id: 'course:language-french',
      pack_kind: 'course',
      course_type: 'language',
      target_language_id: 'french',
      available_for_speakers: ['english'],
      name: 'Learn French',
      description: 'English speakers learning French — module 1 authored, full curriculum coming.',
      is_free: false,
      is_active: true,
      is_coming_soon: true,
      sort_order: 12,
      flag_emoji: '🇫🇷',
      primary_color: '#0055A4',
      secondary_color: '#EF4135',
    },
    {
      id: 'course:language-chinese',
      pack_kind: 'course',
      course_type: 'language',
      target_language_id: 'chinese',
      available_for_speakers: ['english'],
      name: 'Learn Mandarin',
      description: 'English speakers learning Mandarin — module 1 authored, full curriculum coming.',
      is_free: false,
      is_active: true,
      is_coming_soon: true,
      sort_order: 13,
      flag_emoji: '🇨🇳',
      primary_color: '#DE2910',
      secondary_color: '#FFDE00',
    },
    {
      id: 'course:language-tagalog',
      pack_kind: 'course',
      course_type: 'language',
      target_language_id: 'tagalog',
      available_for_speakers: ['english'],
      name: 'Learn Tagalog',
      description: 'English speakers learning Tagalog (Filipino) — full A2 curriculum.',
      is_free: false,
      is_active: true,
      is_coming_soon: true,
      sort_order: 14,
      flag_emoji: '🇵🇭',
      primary_color: '#0038A8',
      secondary_color: '#CE1126',
    },
  ];
  const { error } = await supabase
    .from('available_packs')
    .upsert(newRows, { onConflict: 'id' });
  if (error) throw new Error(`upsert available_packs: ${error.message}`);
  console.log(`[catalogue] upserted ${newRows.length} new course rows (language-french, language-chinese)`);
}

// ── 3. Walk lesson files and upload ──────────────────────────────────────────
async function uploadCourseVariant(courseId: string, speakerId: string) {
  const dir = `data/courses/${courseId}/${speakerId}/curriculum`;
  let files: string[];
  try {
    files = readdirSync(dir).filter(f => /^m\d{2}-l\d{2}\.ts$/.test(f));
  } catch {
    console.log(`[skip] ${courseId}/${speakerId} — no curriculum directory`);
    return { uploaded: 0, errors: 0 };
  }

  let uploaded = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = join(process.cwd(), dir, file);
    let lesson: LessonData;
    try {
      // tsx loads .ts files via dynamic import
      const mod = await import(pathToFileURL(filePath).href);
      lesson = mod.default as LessonData;
      if (!lesson || !lesson.id) {
        console.log(`  [warn] ${file} — no default export with .id`);
        errors++;
        continue;
      }
    } catch (e) {
      console.log(`  [error] ${file} — import failed: ${(e as Error).message}`);
      errors++;
      continue;
    }

    const json = JSON.stringify(lesson, null, 2);
    const path = `lessons/${courseId}/${speakerId}/${lesson.id}.json`;
    const { error } = await supabase.storage.from(BUCKET).upload(path, json, {
      contentType: 'application/json',
      upsert: true, // re-runnable
    });
    if (error) {
      console.log(`  [error] ${file} → ${path}: ${error.message}`);
      errors++;
      continue;
    }
    uploaded++;
  }

  console.log(`[uploaded] ${courseId}/${speakerId}: ${uploaded} lessons (${errors} errors)`);
  return { uploaded, errors };
}

// ── main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('=== Rwendo lesson upload ===\n');

  await ensureBucket();
  await upsertNewCatalogueRows();

  console.log('\n--- Uploading lesson content ---');
  const variants: Array<[string, string]> = [
    ['language-shona',   'english'],
    ['language-english', 'shona'],
    ['language-french',  'english'],
    ['language-chinese', 'english'],
    ['language-tagalog', 'english'],
  ];

  let totalUploaded = 0;
  let totalErrors = 0;
  for (const [course, speaker] of variants) {
    const r = await uploadCourseVariant(course, speaker);
    totalUploaded += r.uploaded;
    totalErrors += r.errors;
  }

  console.log('\n=== Summary ===');
  console.log(`Total lessons uploaded: ${totalUploaded}`);
  console.log(`Total errors:           ${totalErrors}`);
  console.log(`\nVerify in dashboard:    Storage → ${BUCKET} → lessons/`);
}

main().catch(e => {
  console.error('FAIL:', e);
  process.exit(1);
});
