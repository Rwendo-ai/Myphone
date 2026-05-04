/* eslint-disable */
// One-shot extraction script for the language-pack migration.
// Reads all 100 Shona lessons + 100 English-target lessons (well, 1 of them)
// using ts-node-style inline strip parsing -- actually we just read the
// source text and pull out the structural fields we need.
const fs = require('fs');
const path = require('path');

const SHONA_DIR = path.resolve(__dirname, '..', 'data', 'courses', 'language-shona', 'english', 'curriculum');
const ENGLISH_DIR = path.resolve(__dirname, '..', 'data', 'courses', 'language-english', 'shona', 'curriculum');

function lessonFiles(dir) {
  return fs.readdirSync(dir)
    .filter(f => /^m\d{2}-l\d{2}\.ts$/.test(f))
    .sort();
}

function extractField(src, name) {
  // Match 'name: "..."' or "name: '...'" or `name: \`...\`` (no nested quotes), or template literals with concat
  // Robust enough for our hand-authored lessons.
  const re = new RegExp(`\\b${name}\\s*:\\s*("|')`, 'g');
  const m = re.exec(src);
  if (!m) return null;
  const quote = m[1];
  let i = m.index + m[0].length;
  let out = '';
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { out += src[i + 1]; i += 2; continue; }
    if (c === quote) break;
    out += c;
    i += 1;
  }
  return out;
}

function extractLesson(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const id = extractField(src, 'id');
  const title = extractField(src, 'title');
  // hook is an object — pull rwenLine + culturalNote inside
  const hookMatch = src.match(/hook\s*:\s*\{([\s\S]*?)\}\s*,\s*chunks/);
  let rwenLine = null;
  let culturalNote = null;
  if (hookMatch) {
    rwenLine = extractField(hookMatch[1], 'rwenLine');
    culturalNote = extractField(hookMatch[1], 'culturalNote');
  }
  // chunks
  const chunksMatch = src.match(/chunks\s*:\s*\[([\s\S]*?)\]\s*,\s*pattern/);
  const chunks = [];
  if (chunksMatch) {
    const body = chunksMatch[1];
    // Split on top-level objects: each chunk starts with `{`
    const objRe = /\{([\s\S]*?)\}\s*,?/g;
    let cm;
    while ((cm = objRe.exec(body)) !== null) {
      const chunkBody = cm[1];
      chunks.push({
        id: extractField(chunkBody, 'id'),
        target: extractField(chunkBody, 'target'),
        native: extractField(chunkBody, 'native'),
        literal: extractField(chunkBody, 'literal'),
        emoji: extractField(chunkBody, 'emoji'),
        phonetic: extractField(chunkBody, 'phonetic'),
      });
    }
  }
  return { file: path.basename(filePath), id, title, rwenLine, culturalNote, chunks };
}

const out = { shona: [], english: [] };
for (const f of lessonFiles(SHONA_DIR)) {
  out.shona.push(extractLesson(path.join(SHONA_DIR, f)));
}
for (const f of lessonFiles(ENGLISH_DIR)) {
  out.english.push(extractLesson(path.join(ENGLISH_DIR, f)));
}

const outPath = path.resolve(__dirname, 'extracted-curriculum.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`Wrote ${outPath}`);
console.log(`Shona lessons: ${out.shona.length}, English lessons: ${out.english.length}`);
