/**
 * One-shot fix: 9 of 10 speaker variants of language-english have
 * activeRecall.prompts authored as `"<English target> (in English)"` →
 * expects English back. Useless — the user sees the answer in the prompt.
 *
 * Correct shape (Ndebele variant got it right): native-language form of
 * the target, asking the user to recall the English. We rebuild prompts
 * by mapping each prompt's leading target text to the corresponding
 * chunk's native value:
 *
 *   Before (Tagalog):  prompt="Hello (sa English)"        correct=["Hello", ...]
 *   After:             prompt="Kumusta (sa English)"      correct=["Hello", ...]
 *
 * Script downloads each lesson, rewrites the activeRecall.prompts in
 * place, re-uploads. Idempotent (running twice is harmless — the second
 * pass finds no chunk match and skips).
 *
 * Skips Ndebele entirely.
 *
 *   npx tsx scripts/fix-active-recall-prompts.ts
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const SPEAKERS = ['shona', 'french', 'chinese', 'tagalog', 'hindi', 'japanese', 'korean', 'spanish', 'portuguese'];

interface Chunk { target: string; native: string; }
interface Prompt { prompt: string; correct: string[]; }

function rebuildPrompt(prompt: Prompt, chunks: Chunk[]): Prompt {
  const text = prompt.prompt;
  // Match leading target up to " (..." parenthetical or end-of-string.
  // E.g. "Hello (sa English)" → leading="Hello", suffix=" (sa English)"
  // Or fully-target "Hello" with no suffix → leading="Hello"
  const m = text.match(/^(.+?)\s*(\([^)]+\)\s*)?$/);
  if (!m) return prompt;
  const leading = m[1].trim();
  const suffix = m[2] ?? '';
  // Find chunk whose target matches (case-insensitive, strip trailing punctuation
  // so "How are you?" matches "How are you")
  const norm = (s: string) => s.replace(/[?.!]+$/, '').trim().toLowerCase();
  const chunk = chunks.find((c) => norm(c.target) === norm(leading));
  if (!chunk || !chunk.native) return prompt;
  // Already correct? Don't double-rewrite.
  if (norm(leading) === norm(chunk.native)) return prompt;
  return {
    prompt: suffix ? `${chunk.native} ${suffix.trim()}` : chunk.native,
    correct: prompt.correct,
  };
}

async function listLessonNames(speaker: string): Promise<string[]> {
  const { data, error } = await supabase.storage
    .from('course-content')
    .list(`lessons/language-english/${speaker}`, { limit: 1000 });
  if (error) throw error;
  return (data ?? []).filter((f) => f.name.endsWith('.json')).map((f) => f.name);
}

async function processLesson(speaker: string, name: string): Promise<'updated' | 'skipped' | 'no_recall'> {
  const path = `lessons/language-english/${speaker}/${name}`;
  const { data: blob, error } = await supabase.storage.from('course-content').download(path);
  if (error || !blob) throw new Error(`download ${path}: ${error?.message}`);
  const json = JSON.parse(await new Response(blob).text());
  if (!json.activeRecall?.prompts || !Array.isArray(json.chunks)) {
    return 'no_recall';
  }
  const chunks = json.chunks as Chunk[];
  const before = JSON.stringify(json.activeRecall.prompts);
  json.activeRecall.prompts = json.activeRecall.prompts.map((p: Prompt) => rebuildPrompt(p, chunks));
  const after = JSON.stringify(json.activeRecall.prompts);
  if (before === after) return 'skipped';

  const { error: upError } = await supabase.storage
    .from('course-content')
    .upload(path, JSON.stringify(json, null, 2), { contentType: 'application/json', upsert: true });
  if (upError) throw new Error(`upload ${path}: ${upError.message}`);
  return 'updated';
}

(async () => {
  const totals: Record<string, { updated: number; skipped: number; no_recall: number }> = {};
  for (const sp of SPEAKERS) {
    totals[sp] = { updated: 0, skipped: 0, no_recall: 0 };
    const names = await listLessonNames(sp);
    process.stdout.write(`${sp}: ${names.length} lessons …`);
    for (const name of names) {
      try {
        const result = await processLesson(sp, name);
        totals[sp][result]++;
      } catch (e) {
        console.error(`\n  ${sp}/${name}: ${(e as Error).message}`);
      }
    }
    const t = totals[sp];
    console.log(` ${t.updated} updated, ${t.skipped} skipped, ${t.no_recall} no-recall`);
  }
})();
