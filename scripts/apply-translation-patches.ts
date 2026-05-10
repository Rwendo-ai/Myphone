/**
 * Apply translation-patches.json to storage. For each speaker covered in
 * the patches file, walk every lesson the broken-prompts.json said had
 * issues, and patch each broken prompt to use the native translation.
 *
 * The patch keys are the English source phrases (correct[0] of the broken
 * prompt). The values are the speaker-language equivalents we want shown
 * as the prompt instead of the English self-reference.
 *
 * For each broken item from broken-prompts.json:
 *   - lookup translation via item.english
 *   - new prompt = `${translation} ${item.scaffold}` (preserves "(sa English)" etc.)
 *   - For chunks[].native: just replaces native with translation (no scaffold)
 *
 * After patching, re-uploads the lesson file with upsert.
 */
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

interface BrokenItem {
  path: string;
  english: string;
  scaffold: string;
  correct: string[];
}

const broken = JSON.parse(fs.readFileSync('scripts/broken-prompts.json', 'utf8')) as {
  speakers: Record<string, Record<string, BrokenItem[]>>;
};
const patches = JSON.parse(fs.readFileSync('scripts/translation-patches.json', 'utf8')) as
  Record<string, Record<string, string>>;

function setByPath(obj: any, path: string, value: any): boolean {
  // Path forms: "activeRecall.prompts[0]", "exercises[2].prompt", "chunks[1].native"
  const parts: { key: string; index?: number }[] = [];
  const re = /([^.\[\]]+)(?:\[(\d+)\])?/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(path))) {
    parts.push({ key: m[1], index: m[2] !== undefined ? Number(m[2]) : undefined });
  }
  // Walk and set the prompt subkey for activeRecall/exercises, the native subkey for chunks.
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    cur = cur?.[p.key];
    if (p.index !== undefined) cur = cur?.[p.index];
    if (cur == null) return false;
  }
  const last = parts[parts.length - 1];
  if (last.index !== undefined) {
    // Container is the array element; we want to set a known subkey.
    const arr = cur?.[last.key];
    if (!Array.isArray(arr)) return false;
    const elem = arr[last.index];
    if (elem == null) return false;
    if (path.includes('activeRecall.prompts[')) elem.prompt = value;
    else if (path.includes('chunks[') && path.endsWith('.native')) elem.native = value;
    else if (path.includes('exercises[') && path.endsWith('.prompt')) elem.prompt = value;
    return true;
  }
  cur[last.key] = value;
  return true;
}

(async () => {
  const totals: Record<string, { lessons: number; patches: number; missing: number }> = {};
  for (const [speaker, table] of Object.entries(patches)) {
    if (!broken.speakers[speaker]) { console.warn(`No broken-prompts entry for ${speaker}`); continue; }
    totals[speaker] = { lessons: 0, patches: 0, missing: 0 };
    for (const [lessonName, items] of Object.entries(broken.speakers[speaker])) {
      const path = `lessons/language-english/${speaker}/${lessonName}`;
      const { data: blob, error } = await supabase.storage.from('course-content').download(path);
      if (error || !blob) { console.error(`download ${path}: ${error?.message}`); continue; }
      const json = JSON.parse(await new Response(blob).text());

      let touched = 0;
      for (const item of items) {
        const tx = table[item.english];
        if (!tx) {
          totals[speaker].missing++;
          continue;
        }
        let newValue: string;
        if (item.path.includes('chunks[') && item.path.endsWith('.native')) {
          newValue = tx;
        } else {
          newValue = item.scaffold ? `${tx} ${item.scaffold.trim()}` : tx;
        }
        if (setByPath(json, item.path, newValue)) {
          touched++;
        }
      }
      if (touched > 0) {
        const { error: upError } = await supabase.storage
          .from('course-content')
          .upload(path, JSON.stringify(json, null, 2), { contentType: 'application/json', upsert: true });
        if (upError) {
          console.error(`upload ${path}: ${upError.message}`);
        } else {
          totals[speaker].lessons++;
          totals[speaker].patches += touched;
        }
      }
    }
    const t = totals[speaker];
    console.log(`${speaker}: ${t.lessons} lessons updated, ${t.patches} prompts patched, ${t.missing} missing translations`);
  }
})();
