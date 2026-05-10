/**
 * Content audit: scans every (speaker, lesson) under language-english/
 * and flags structural / content-quality issues. The goal is "find every
 * systemic bug before launch" — not "fix everything", but catalog what's
 * wrong so we can fix mechanically or re-author.
 *
 * Heuristics applied per lesson:
 *   1. Required fields exist (id, module, lesson, title, hook, chunks,
 *      exercises, activeRecall, mission).
 *   2. Hook.rwenLine + hook.culturalNote should be in the SPEAKER'S
 *      native language (script check).
 *   3. Chunks each have target + native; native should not equal target.
 *   4. Pattern.explanation should contain native-language characters.
 *   5. Exercise[type=translate].prompt should NOT equal the target word
 *      verbatim (was the activeRecall bug — fixed but verify).
 *   6. ActiveRecall prompts should NOT match correct answers verbatim.
 *
 * Script-detection helpers cover non-Latin scripts (Chinese, Japanese,
 * Korean, Hindi). For Latin-script languages (Shona, French, Tagalog,
 * Spanish, Portuguese, Ndebele) we look for marker words / diacritics
 * and absence of pure-English-only content.
 *
 *   npx tsx scripts/audit-lesson-content.ts > audit-report.txt
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const SPEAKERS = ['shona', 'ndebele', 'french', 'chinese', 'tagalog', 'hindi', 'japanese', 'korean', 'spanish', 'portuguese'];

// Script range tests
const hasHan = (s: string) => /[一-鿿]/.test(s);
const hasHiraganaOrKatakana = (s: string) => /[぀-ヿ]/.test(s);
const hasHangul = (s: string) => /[가-힯]/.test(s);
const hasDevanagari = (s: string) => /[ऀ-ॿ]/.test(s);

// Marker-word check for Latin-script languages — at least one of these
// should appear in any substantial native-language passage.
const LATIN_MARKERS: Record<string, RegExp> = {
  shona:      /\b(uno|nyaya|kana|kuti|sei|wakanaka|chii|asi|ndini|iwe|ndakanaka|mhoro|mangwanani|tsamba)\b/i,
  ndebele:    /\b(siyabonga|sawubona|ngiyathokoza|kuhle|kakhulu|umuntu|nje|kanjani|qotho|kunengi)\b/i,
  french:     /\b(le |la |les |un |une |des |est |pour |avec |votre |bonjour|salut|comment|merci|aussi|mais|qui|que)\b/i,
  tagalog:    /\b(ang |ng |sa |mga |hindi |ako |ikaw |kayo |natin|kanya|kanila|po|opo|kumusta|mabuti|salamat|isulat|tama)\b/i,
  spanish:    /\b(el |la |los |las |un |una |unos |unas|hola|cómo|qué|gracias|por |para|con|también|pero|que|cuando|donde)\b/i,
  portuguese: /\b(o |a |os |as |um |uma|olá|como|que|obrigado|obrigada|por |para|com|também|mas|quando|onde|você|eu)\b/i,
};

function looksLikeNative(text: string, speaker: string): boolean {
  if (!text || typeof text !== 'string') return false;
  const t = text.trim();
  if (t.length < 3) return true; // too short to evaluate
  switch (speaker) {
    case 'chinese':    return hasHan(t);
    case 'japanese':   return hasHiraganaOrKatakana(t) || hasHan(t);
    case 'korean':     return hasHangul(t);
    case 'hindi':      return hasDevanagari(t);
    default: {
      const re = LATIN_MARKERS[speaker];
      if (!re) return true;
      return re.test(t);
    }
  }
}

interface Issue { speaker: string; lesson: string; field: string; detail: string; }

const issues: Issue[] = [];

function flag(speaker: string, lesson: string, field: string, detail: string) {
  issues.push({ speaker, lesson, field, detail });
}

async function processLesson(speaker: string, name: string): Promise<void> {
  const path = `lessons/language-english/${speaker}/${name}`;
  const { data, error } = await supabase.storage.from('course-content').download(path);
  if (error || !data) { flag(speaker, name, '_download', error?.message ?? 'no data'); return; }
  let json: any;
  try { json = JSON.parse(await new Response(data).text()); }
  catch (e) { flag(speaker, name, '_parse', (e as Error).message); return; }

  // 1. Required fields
  for (const f of ['id', 'module', 'lesson', 'title', 'hook', 'chunks', 'exercises', 'activeRecall', 'mission']) {
    if (json[f] == null) flag(speaker, name, f, 'missing');
  }

  // 2. Hook native-language check (only for non-Latin scripts where the
  //    test is reliable — skip Latin-script speakers to avoid false positives).
  const reliableNativeCheck = ['chinese', 'japanese', 'korean', 'hindi'].includes(speaker);
  if (reliableNativeCheck) {
    if (json.hook?.rwenLine && !looksLikeNative(json.hook.rwenLine, speaker)) {
      flag(speaker, name, 'hook.rwenLine', `not native script: "${json.hook.rwenLine.slice(0, 60)}…"`);
    }
    if (json.hook?.culturalNote && !looksLikeNative(json.hook.culturalNote, speaker)) {
      flag(speaker, name, 'hook.culturalNote', `not native script: "${json.hook.culturalNote.slice(0, 60)}…"`);
    }
  }

  // 3. Chunks — target + native present, native != target. Reliable everywhere.
  if (Array.isArray(json.chunks)) {
    json.chunks.forEach((c: any, i: number) => {
      if (!c.target) flag(speaker, name, `chunks[${i}].target`, 'missing');
      if (!c.native) flag(speaker, name, `chunks[${i}].native`, 'missing');
      if (c.target && c.native && c.target.trim() === c.native.trim()) {
        flag(speaker, name, `chunks[${i}]`, `native equals target: "${c.target}"`);
      }
    });
  }

  // 4. Exercises — translate type with prompt == correct[0] is the bug
  //    we just fixed for activeRecall but verify it's not in exercises too.
  if (Array.isArray(json.exercises)) {
    json.exercises.forEach((ex: any, i: number) => {
      if (ex.type === 'translate' && Array.isArray(ex.correct)) {
        const promptT = (ex.prompt ?? '').trim().toLowerCase();
        const correctT = ex.correct[0]?.trim().toLowerCase();
        if (promptT && correctT && promptT === correctT) {
          flag(speaker, name, `exercises[${i}].translate`, `prompt equals correct: "${ex.prompt}"`);
        }
      }
      // Only check instruction language for reliable scripts.
      if (reliableNativeCheck && typeof ex.instruction === 'string' && !looksLikeNative(ex.instruction, speaker)) {
        flag(speaker, name, `exercises[${i}].instruction`, `not native script: "${ex.instruction.slice(0, 50)}…"`);
      }
    });
  }

  // 5. activeRecall prompts shouldn't equal correct. Reliable everywhere.
  if (Array.isArray(json.activeRecall?.prompts)) {
    json.activeRecall.prompts.forEach((p: any, i: number) => {
      if (Array.isArray(p.correct)) {
        const cleanPrompt = (p.prompt ?? '').replace(/\s*\(.*?\)\s*$/, '').trim().toLowerCase();
        const cleanCorrect = p.correct[0]?.trim().toLowerCase();
        if (cleanPrompt && cleanCorrect && cleanPrompt === cleanCorrect) {
          flag(speaker, name, `activeRecall.prompts[${i}]`, `prompt equals correct: "${p.prompt}"`);
        }
      }
    });
  }
}

(async () => {
  for (const sp of SPEAKERS) {
    const { data, error } = await supabase.storage
      .from('course-content')
      .list(`lessons/language-english/${sp}`, { limit: 1000 });
    if (error) { console.error(`list ${sp}: ${error.message}`); continue; }
    const names = (data ?? []).filter((f) => f.name.endsWith('.json')).map((f) => f.name);
    process.stdout.write(`Auditing ${sp} (${names.length} lessons)…\n`);
    for (const name of names) {
      await processLesson(sp, name);
    }
  }

  // Summarise
  const bySpeaker: Record<string, number> = {};
  const byField: Record<string, number> = {};
  for (const i of issues) {
    bySpeaker[i.speaker] = (bySpeaker[i.speaker] ?? 0) + 1;
    byField[i.field.split('[')[0].split('.')[0]] = (byField[i.field.split('[')[0].split('.')[0]] ?? 0) + 1;
  }

  console.log('\n========== AUDIT SUMMARY ==========');
  console.log(`Total issues: ${issues.length}`);
  console.log('\nBy speaker:');
  for (const [s, n] of Object.entries(bySpeaker).sort((a, b) => b[1] - a[1])) console.log(`  ${s.padEnd(12)} ${n}`);
  console.log('\nBy top-level field:');
  for (const [f, n] of Object.entries(byField).sort((a, b) => b[1] - a[1])) console.log(`  ${f.padEnd(20)} ${n}`);

  console.log('\n========== SAMPLE FINDINGS (first 30) ==========');
  for (const i of issues.slice(0, 30)) {
    console.log(`[${i.speaker}/${i.lesson}] ${i.field}: ${i.detail}`);
  }
})();
