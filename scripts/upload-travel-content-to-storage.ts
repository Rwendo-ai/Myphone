/**
 * Upload travel content (phrasebook / culture / safari / flipcards) to
 * Supabase Storage as JSON, then the app lazy-fetches at runtime.
 *
 * Mirrors the lesson streaming pivot — local TS modules remain the
 * authoring source-of-truth, Storage is the runtime source.
 *
 * Bucket: `travel-content` (created on first run if missing). Public so
 * the app reads via getPublicUrl rather than signed URLs.
 *
 * Path scheme:
 *   phrasebook/<countryCode>.json
 *   culture/<countryCode>.json
 *   safari/africa-top-10.json
 *   flipcards/<courseId>.json
 *
 * Run:  npx tsx scripts/upload-travel-content-to-storage.ts
 *       npx tsx scripts/upload-travel-content-to-storage.ts phrasebook
 *       npx tsx scripts/upload-travel-content-to-storage.ts flipcards
 */

import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

import ZIMBABWE_PHRASEBOOK from '../data/travel/phrasebook/zimbabwe';
import ZIMBABWE_NDEBELE_PHRASEBOOK from '../data/travel/phrasebook/zimbabwe-ndebele';
import UK_PHRASEBOOK from '../data/travel/phrasebook/united-kingdom';
import FRANCE_PHRASEBOOK from '../data/travel/phrasebook/france';
import CHINA_PHRASEBOOK from '../data/travel/phrasebook/china';
import PHILIPPINES_PHRASEBOOK from '../data/travel/phrasebook/philippines';
import SPAIN_PHRASEBOOK from '../data/travel/phrasebook/spain';
import PORTUGAL_PHRASEBOOK from '../data/travel/phrasebook/portugal';
import INDIA_PHRASEBOOK from '../data/travel/phrasebook/india';
import JAPAN_PHRASEBOOK from '../data/travel/phrasebook/japan';
import KOREA_PHRASEBOOK from '../data/travel/phrasebook/korea';

import ZIMBABWE_GUIDE from '../data/travel/culture/zimbabwe';
import ZIMBABWE_NDEBELE_GUIDE from '../data/travel/culture/zimbabwe-ndebele';
import UK_GUIDE from '../data/travel/culture/united-kingdom';
import FRANCE_GUIDE from '../data/travel/culture/france';
import CHINA_GUIDE from '../data/travel/culture/china';
import PHILIPPINES_GUIDE from '../data/travel/culture/philippines';
import SPAIN_GUIDE from '../data/travel/culture/spain';
import PORTUGAL_GUIDE from '../data/travel/culture/portugal';
import INDIA_GUIDE from '../data/travel/culture/india';
import JAPAN_GUIDE from '../data/travel/culture/japan';
import KOREA_GUIDE from '../data/travel/culture/korea';

import AFRICA_TOP_10 from '../data/travel/safari/africa-top-10';

import LANGUAGE_SHONA_FLIPCARDS from '../data/courses/language-shona/flipcards';
import LANGUAGE_ENGLISH_FLIPCARDS from '../data/courses/language-english/flipcards';
import LANGUAGE_FRENCH_FLIPCARDS from '../data/courses/language-french/flipcards';
import LANGUAGE_CHINESE_FLIPCARDS from '../data/courses/language-chinese/flipcards';
import LANGUAGE_TAGALOG_FLIPCARDS from '../data/courses/language-tagalog/flipcards';
import LANGUAGE_SPANISH_FLIPCARDS from '../data/courses/language-spanish/flipcards';
import LANGUAGE_PORTUGUESE_FLIPCARDS from '../data/courses/language-portuguese/flipcards';
import LANGUAGE_HINDI_FLIPCARDS from '../data/courses/language-hindi/flipcards';
import LANGUAGE_JAPANESE_FLIPCARDS from '../data/courses/language-japanese/flipcards';
import LANGUAGE_KOREAN_FLIPCARDS from '../data/courses/language-korean/flipcards';
import LANGUAGE_NDEBELE_FLIPCARDS from '../data/courses/language-ndebele/flipcards';
import LANGUAGE_ENGLISH_FROM_NDEBELE_FLIPCARDS from '../data/courses/language-english/flipcards-from-ndebele';

dotenv.config({ path: '.env.local' });
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) { console.error('Missing Supabase creds'); process.exit(1); }

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
const BUCKET = 'travel-content';

const PHRASEBOOKS = {
  ZW: ZIMBABWE_PHRASEBOOK, 'ZW-ND': ZIMBABWE_NDEBELE_PHRASEBOOK, GB: UK_PHRASEBOOK, FR: FRANCE_PHRASEBOOK,
  CN: CHINA_PHRASEBOOK, PH: PHILIPPINES_PHRASEBOOK, ES: SPAIN_PHRASEBOOK,
  PT: PORTUGAL_PHRASEBOOK, IN: INDIA_PHRASEBOOK, JP: JAPAN_PHRASEBOOK, KR: KOREA_PHRASEBOOK,
};

const GUIDES = {
  ZW: ZIMBABWE_GUIDE, 'ZW-ND': ZIMBABWE_NDEBELE_GUIDE, GB: UK_GUIDE, FR: FRANCE_GUIDE,
  CN: CHINA_GUIDE, PH: PHILIPPINES_GUIDE, ES: SPAIN_GUIDE,
  PT: PORTUGAL_GUIDE, IN: INDIA_GUIDE, JP: JAPAN_GUIDE, KR: KOREA_GUIDE,
};

const FLIPCARDS = {
  'language-shona':       LANGUAGE_SHONA_FLIPCARDS,
  'language-english':     LANGUAGE_ENGLISH_FLIPCARDS,
  'language-french':      LANGUAGE_FRENCH_FLIPCARDS,
  'language-chinese':     LANGUAGE_CHINESE_FLIPCARDS,
  'language-tagalog':     LANGUAGE_TAGALOG_FLIPCARDS,
  'language-spanish':     LANGUAGE_SPANISH_FLIPCARDS,
  'language-portuguese':  LANGUAGE_PORTUGUESE_FLIPCARDS,
  'language-hindi':       LANGUAGE_HINDI_FLIPCARDS,
  'language-japanese':    LANGUAGE_JAPANESE_FLIPCARDS,
  'language-korean':      LANGUAGE_KOREAN_FLIPCARDS,
  'language-ndebele':     LANGUAGE_NDEBELE_FLIPCARDS,
  // English-from-Ndebele variant — Ndebele speakers learning English get a
  // flip-card set with native column in Ndebele instead of Shona.
  'language-english-from-ndebele': LANGUAGE_ENGLISH_FROM_NDEBELE_FLIPCARDS,
};

async function ensureBucket(): Promise<void> {
  const { data } = await supabase.storage.listBuckets();
  if (!data?.some(b => b.id === BUCKET)) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true });
    if (error && !error.message.toLowerCase().includes('exists')) {
      throw new Error(`Could not create '${BUCKET}' bucket: ${error.message}`);
    }
  }
}

async function uploadJson(path: string, payload: unknown): Promise<number> {
  const json = JSON.stringify(payload);
  const bytes = Buffer.from(json);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, bytes, { contentType: 'application/json', upsert: true });
  if (error) throw new Error(`upload ${path}: ${error.message}`);
  return bytes.length;
}

async function uploadCategory<T>(name: string, dict: Record<string, T>, pathFor: (key: string) => string) {
  console.log(`\n=== ${name} (${Object.keys(dict).length} entries) ===`);
  let totalBytes = 0;
  for (const [key, value] of Object.entries(dict)) {
    process.stdout.write(`  ${key.padEnd(20)} `);
    try {
      const bytes = await uploadJson(pathFor(key), value);
      totalBytes += bytes;
      process.stdout.write(`✓ ${bytes.toLocaleString()} bytes\n`);
    } catch (e) {
      process.stdout.write(`✗ ${e instanceof Error ? e.message : ''}\n`);
    }
  }
  console.log(`  Total: ${totalBytes.toLocaleString()} bytes`);
}

(async () => {
  const target = process.argv[2] ?? 'all';
  await ensureBucket();

  if (target === 'all' || target === 'phrasebook') {
    await uploadCategory('phrasebook', PHRASEBOOKS, k => `phrasebook/${k}.json`);
  }
  if (target === 'all' || target === 'culture') {
    await uploadCategory('culture', GUIDES, k => `culture/${k}.json`);
  }
  if (target === 'all' || target === 'safari') {
    console.log(`\n=== safari ===`);
    const bytes = await uploadJson('safari/africa-top-10.json', AFRICA_TOP_10);
    console.log(`  africa-top-10  ✓ ${bytes.toLocaleString()} bytes`);
  }
  if (target === 'all' || target === 'flipcards') {
    await uploadCategory('flipcards', FLIPCARDS, k => `flipcards/${k}.json`);
  }

  console.log('\nDone.');
})().catch(e => { console.error(e); process.exit(1); });
