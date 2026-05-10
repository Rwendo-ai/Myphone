/**
 * Extract the 500 unique English targets from language-english/flipcards.ts
 * with their module and hint (which stays English across speakers). Writes
 * scripts/english-flipcard-source.json — the canonical work-list for
 * authoring per-speaker native columns.
 */
import * as fs from 'fs';
import { FLIPCARDS } from '../data/courses/language-english/flipcards';

const out = FLIPCARDS.map((c) => ({
  id: c.id,
  module: c.module,
  target: c.target,
  hint: c.hint ?? '',
}));

fs.writeFileSync('scripts/english-flipcard-source.json', JSON.stringify(out, null, 2));
console.log(`Wrote ${out.length} source cards.`);

// Just-targets list for quick translation prompt-building
const targets = out.map((c) => `${c.id}\t${c.target}`).join('\n');
fs.writeFileSync('scripts/english-flipcard-targets.tsv', targets);
console.log('Wrote tab-separated id→target list.');
