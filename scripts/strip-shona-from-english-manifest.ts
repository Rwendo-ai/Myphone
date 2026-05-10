/**
 * One-shot fix: data/courses/language-english/manifest.ts has lesson
 * titles like "Hello — Mhoro" (Shona word baked into shared manifest).
 * The manifest is shared by all 10 speaker variants of language-english,
 * so non-Shona speakers see Shona on the unit list. Strip the
 * suffix " — <native word>" to leave speaker-neutral titles.
 *
 *   "Hello — Mhoro"          → "Hello"
 *   "Good morning — Mangwanani" → "Good morning"
 *   "Polite \"How are you?\" forms" → unchanged (no em-dash)
 *
 * Run once, then delete this script.
 */
import * as fs from 'fs';
import * as path from 'path';

const file = path.resolve(__dirname, '../data/courses/language-english/manifest.ts');
const text = fs.readFileSync(file, 'utf8');

// Match `"title": "X — Y"` and replace with `"title": "X"`.
// The em-dash `—` (U+2014) is the only signal — only manifest titles use it.
const next = text.replace(
  /"title":\s*"([^"]+?)\s*—\s*[^"]+"/g,
  (_match, prefix) => `"title": "${prefix.trim()}"`,
);

const stripped = (text.match(/"title":\s*"[^"]+\s—/g) ?? []).length;
fs.writeFileSync(file, next);
console.log(`Stripped ${stripped} native-language suffixes from manifest titles.`);
