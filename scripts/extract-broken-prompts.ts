/**
 * Extract every broken prompt across all 10 speaker variants of
 * language-english/. A "broken prompt" is one where the prompt text
 * (after stripping the trailing parenthetical scaffolding like "(sa English)")
 * is identical to the first entry of the correct[] array — i.e., the
 * question is asked in the target language and answered in the target
 * language. Useless self-referential prompts.
 *
 * Affects:
 *   - activeRecall.prompts[]
 *   - exercises[type=translate].prompt
 *
 * Also extracts chunks where target == native (cross-contamination).
 *
 * Output: scripts/broken-prompts.json
 *   {
 *     speakers: {
 *       tagalog: {
 *         "m01-l01-hello.json": [
 *           { path: "activeRecall.prompts[0]", english: "Hello",
 *             scaffold: "(sa English)", correct: ["Hello", "hello", ...] },
 *           ...
 *         ]
 *       }
 *     }
 *   }
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

const SPEAKERS = ['shona', 'ndebele', 'french', 'chinese', 'tagalog', 'hindi', 'japanese', 'korean', 'spanish', 'portuguese'];

interface BrokenItem {
  path: string;
  english: string;        // The English text the user should ANSWER with
  scaffold: string;       // The "(in <lang>)" suffix to keep
  correct: string[];
}

const result: { speakers: Record<string, Record<string, BrokenItem[]>> } = { speakers: {} };

function splitPromptScaffold(text: string): { leading: string; suffix: string } {
  const m = text.match(/^(.+?)\s*(\([^)]+\)\s*)?$/);
  if (!m) return { leading: text, suffix: '' };
  return { leading: m[1].trim(), suffix: m[2] ?? '' };
}

function isBroken(promptText: string, correct: string[]): boolean {
  const norm = (s: string) => s.replace(/[?.!]+$/, '').trim().toLowerCase();
  const { leading } = splitPromptScaffold(promptText);
  return !!correct[0] && norm(leading) === norm(correct[0]);
}

async function processSpeaker(speaker: string) {
  const { data: list } = await supabase.storage
    .from('course-content')
    .list(`lessons/language-english/${speaker}`, { limit: 1000 });
  const names = (list ?? []).filter((f) => f.name.endsWith('.json')).map((f) => f.name);
  result.speakers[speaker] = {};
  for (const name of names) {
    const path = `lessons/language-english/${speaker}/${name}`;
    const { data: blob, error } = await supabase.storage.from('course-content').download(path);
    if (error || !blob) continue;
    const json = JSON.parse(await new Response(blob).text());
    const issues: BrokenItem[] = [];

    // activeRecall
    if (Array.isArray(json.activeRecall?.prompts)) {
      json.activeRecall.prompts.forEach((p: any, i: number) => {
        if (Array.isArray(p.correct) && isBroken(p.prompt ?? '', p.correct)) {
          const { suffix } = splitPromptScaffold(p.prompt ?? '');
          issues.push({
            path: `activeRecall.prompts[${i}]`,
            english: p.correct[0],
            scaffold: suffix,
            correct: p.correct,
          });
        }
      });
    }

    // exercises type=translate
    if (Array.isArray(json.exercises)) {
      json.exercises.forEach((ex: any, i: number) => {
        if (ex.type === 'translate' && Array.isArray(ex.correct) && isBroken(ex.prompt ?? '', ex.correct)) {
          issues.push({
            path: `exercises[${i}].prompt`,
            english: ex.correct[0],
            scaffold: '',
            correct: ex.correct,
          });
        }
      });
    }

    // chunks where native == target — extract for translation
    if (Array.isArray(json.chunks)) {
      json.chunks.forEach((c: any, i: number) => {
        if (c.target && c.native && c.target.trim() === c.native.trim()) {
          issues.push({
            path: `chunks[${i}].native`,
            english: c.target,
            scaffold: '',
            correct: [c.target],
          });
        }
      });
    }

    if (issues.length) {
      result.speakers[speaker][name] = issues;
    }
  }
  const lessonCount = Object.keys(result.speakers[speaker]).length;
  const issueCount = Object.values(result.speakers[speaker]).reduce((a, b) => a + b.length, 0);
  console.log(`${speaker}: ${lessonCount} affected lessons, ${issueCount} broken prompts`);
}

(async () => {
  for (const sp of SPEAKERS) await processSpeaker(sp);
  fs.writeFileSync('scripts/broken-prompts.json', JSON.stringify(result, null, 2));
  // Also build a unique-source dedup view per speaker.
  const dedup: Record<string, string[]> = {};
  for (const [sp, lessons] of Object.entries(result.speakers)) {
    const set = new Set<string>();
    for (const issues of Object.values(lessons)) for (const i of issues) set.add(i.english);
    dedup[sp] = [...set].sort();
  }
  fs.writeFileSync('scripts/broken-prompts-unique-sources.json', JSON.stringify(dedup, null, 2));
  const totalUnique = Object.values(dedup).reduce((a, b) => a + b.length, 0);
  console.log(`\nTotal unique English source phrases (across all speakers): ${totalUnique}`);
  console.log(`Wrote scripts/broken-prompts.json + scripts/broken-prompts-unique-sources.json`);
})();
