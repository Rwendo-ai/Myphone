/**
 * One-off: walks every course's curriculum directory and writes a small
 * manifest.ts file containing just the metadata the Learn tab needs to render
 * unit lists (id, module, lesson, title, xpReward). Then the heavy lesson
 * content files can be deleted from the binary; full content streams from
 * Storage via lib/lesson-loader.ts.
 *
 * Output: data/courses/<id>/manifest.ts — exports a `LESSON_MANIFEST`
 * array of { id, module, lesson, title, xpReward }.
 *
 * Run:  npx tsx scripts/generate-course-manifests.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';

const COURSES = [
  'language-shona',
  'language-english',
  'language-french',
  'language-chinese',
  'language-tagalog',
  'know-yourself',
  'hard-conversations-work',
  'parenting-under-pressure',
  'money-and-meaning',
  'grief-honestly',
  'sleep-repaired',
  'lost-confidence',
  'caring-aging-parent',
];

interface LessonMeta {
  id: string;
  module: number;
  lesson: number;
  title: string;
  xpReward: number;
}

async function generateForCourse(courseId: string): Promise<number> {
  // Each course has lessons under english/ except language-english which
  // is shona/.
  const speakerVariant = courseId === 'language-english' ? 'shona' : 'english';
  const dir = path.join('data', 'courses', courseId, speakerVariant, 'curriculum');

  if (!fs.existsSync(dir)) {
    console.warn(`  skip ${courseId} — no ${speakerVariant}/curriculum directory`);
    return 0;
  }

  const files = fs.readdirSync(dir).filter((f) => /^m\d{2}-l\d{2}\.ts$/.test(f));
  const manifest: LessonMeta[] = [];

  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(path.resolve(dir, file)).href);
      const lesson = mod.default ?? mod.lesson;
      if (!lesson) continue;
      manifest.push({
        id: lesson.id,
        module: lesson.module,
        lesson: lesson.lesson,
        title: lesson.title,
        xpReward: lesson.xpReward ?? 25,
      });
    } catch (e) {
      console.error(`  ${courseId}/${file}: ${e instanceof Error ? e.message : e}`);
    }
  }

  // Sort by module, then lesson — order matters for the Learn tab unit list.
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
 * Regenerate with:  npx tsx scripts/generate-course-manifests.ts
 *
 * DO NOT EDIT BY HAND.
 */

export interface LessonMeta {
  id: string;
  module: number;
  lesson: number;
  title: string;
  xpReward: number;
}

export const LESSON_MANIFEST: LessonMeta[] = ${JSON.stringify(manifest, null, 2)};

export default LESSON_MANIFEST;
`;

  const outPath = path.join('data', 'courses', courseId, 'manifest.ts');
  fs.writeFileSync(outPath, out);
  return manifest.length;
}

(async () => {
  console.log('Generating per-course manifests…\n');
  let total = 0;
  for (const courseId of COURSES) {
    const count = await generateForCourse(courseId);
    console.log(`${courseId}: ${count} lessons`);
    total += count;
  }
  console.log(`\nDone. ${total} lessons across ${COURSES.length} courses.`);
})();
