// Quick verification — list files in the course-content bucket and confirm shape.
import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

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

const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

console.log('=== Storage verification ===\n');

const variants = [
  ['language-shona',   'english'],
  ['language-english', 'shona'],
  ['language-french',  'english'],
  ['language-chinese', 'english'],
];

for (const [course, speaker] of variants) {
  const { data, error } = await supabase.storage
    .from('course-content')
    .list(`lessons/${course}/${speaker}`, { limit: 200, sortBy: { column: 'name', order: 'asc' } });
  if (error) {
    console.log(`[!] ${course}/${speaker}: ${error.message}`);
    continue;
  }
  console.log(`[+] ${course}/${speaker}: ${data?.length ?? 0} lesson files`);
  if (data && data.length > 0) {
    console.log(`    First: ${data[0].name} (${data[0].metadata?.size ?? '?'} bytes)`);
    console.log(`    Last:  ${data[data.length - 1].name}`);
  }
}

console.log('\n=== Catalogue rows for new courses ===\n');
const { data: ap, error: apErr } = await supabase
  .from('available_packs')
  .select('id, pack_kind, course_type, target_language_id, available_for_speakers, is_active, is_coming_soon')
  .in('id', ['course:language-french', 'course:language-chinese'])
  .order('id');

if (apErr) console.log('error:', apErr.message);
else for (const r of ap ?? []) {
  console.log(`  ${r.id}`);
  console.log(`    kind=${r.pack_kind}, type=${r.course_type}, target=${r.target_language_id}`);
  console.log(`    speakers=${JSON.stringify(r.available_for_speakers)}, active=${r.is_active}, coming_soon=${r.is_coming_soon}`);
}

console.log('\n=== Sample fetched JSON (lazy-load preview) ===\n');
const { data: sample, error: sampleErr } = await supabase.storage
  .from('course-content')
  .download('lessons/language-french/english/m01-l01-bonjour.json');
if (sampleErr) console.log('error:', sampleErr.message);
else if (sample) {
  const text = await sample.text();
  const parsed = JSON.parse(text);
  console.log(`  m01-l01-bonjour.json (${text.length} bytes)`);
  console.log(`    title:        ${parsed.title}`);
  console.log(`    chunks:       ${parsed.chunks.length}`);
  console.log(`    exercises:    ${parsed.exercises.length}`);
  console.log(`    has phase8:   ${!!parsed.phase8} (bonusXp: ${parsed.phase8?.bonusXp})`);
}
