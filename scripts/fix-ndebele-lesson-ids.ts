/**
 * One-shot fix: Ndebele variant of language-english curriculum source files
 * have id: 'mNN-lNN' (short) when manifest expects id: 'mNN-lNN-<descriptor>'.
 * This script reads the manifest and rewrites each source file's id line to
 * match. Run once, then delete this script.
 *
 *   npx tsx scripts/fix-ndebele-lesson-ids.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { LESSON_MANIFEST } from '../data/courses/language-english/manifest';

const CURRICULUM_DIR = path.resolve(__dirname, '../data/courses/language-english/ndebele/curriculum');

let updated = 0;
let skipped = 0;

for (const file of fs.readdirSync(CURRICULUM_DIR)) {
  if (!/^m\d{2}-l\d{2}\.ts$/.test(file)) continue;
  const base = file.replace(/\.ts$/, '');
  const [mPart, lPart] = base.split('-');
  const moduleNum = Number(mPart.slice(1));
  const lessonNum = Number(lPart.slice(1));

  const manifestEntry = LESSON_MANIFEST.find(
    (m) => m.module === moduleNum && m.lesson === lessonNum,
  );
  if (!manifestEntry) {
    console.warn(`  ${file}: no manifest entry`);
    skipped++;
    continue;
  }

  const filePath = path.join(CURRICULUM_DIR, file);
  const text = fs.readFileSync(filePath, 'utf8');
  const target = `id: '${manifestEntry.id}'`;
  const pattern = new RegExp(`id:\\s*'m\\d{2}-l\\d{2}'`);

  if (text.includes(target)) {
    skipped++;
    continue;
  }

  if (!pattern.test(text)) {
    console.warn(`  ${file}: no id line matched`);
    skipped++;
    continue;
  }

  const next = text.replace(pattern, target);
  fs.writeFileSync(filePath, next);
  console.log(`  ${file}: id -> ${manifestEntry.id}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped.`);
