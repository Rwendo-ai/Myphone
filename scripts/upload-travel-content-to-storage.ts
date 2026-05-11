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
import AUSTRALIA_PHRASEBOOK from '../data/travel/phrasebook/australia';
import USA_PHRASEBOOK from '../data/travel/phrasebook/united-states';

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
import AUSTRALIA_GUIDE from '../data/travel/culture/australia';
import USA_GUIDE from '../data/travel/culture/united-states';

import AFRICA_TOP_10 from '../data/travel/safari/africa-top-10';
import AUSTRALIA_TOP_10 from '../data/travel/safari/australia-top-10';
import USA_TOP_10 from '../data/travel/safari/usa-top-10';

// Flipcards used to be uploaded by this script to travel-content/flipcards/
// but they've since moved to the course-content bucket + a per-speaker
// keying scheme (flipcards/language-english-from-<speaker>.json). Use
// scripts/generate-and-upload-english-flipcards.ts for the per-speaker
// English decks; single-speaker course decks use their own upload paths.

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
  AU: AUSTRALIA_PHRASEBOOK, US: USA_PHRASEBOOK,
};

const GUIDES = {
  ZW: ZIMBABWE_GUIDE, 'ZW-ND': ZIMBABWE_NDEBELE_GUIDE, GB: UK_GUIDE, FR: FRANCE_GUIDE,
  CN: CHINA_GUIDE, PH: PHILIPPINES_GUIDE, ES: SPAIN_GUIDE,
  PT: PORTUGAL_GUIDE, IN: INDIA_GUIDE, JP: JAPAN_GUIDE, KR: KOREA_GUIDE,
  AU: AUSTRALIA_GUIDE, US: USA_GUIDE,
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
    for (const [name, payload] of [
      ['africa-top-10', AFRICA_TOP_10],
      ['australia-top-10', AUSTRALIA_TOP_10],
      ['usa-top-10', USA_TOP_10],
    ] as const) {
      const bytes = await uploadJson(`safari/${name}.json`, payload);
      console.log(`  ${name.padEnd(20)} ✓ ${bytes.toLocaleString()} bytes`);
    }
  }
  if (target === 'flipcards') {
    console.log('\nFlipcards moved to course-content bucket. Run scripts/generate-and-upload-english-flipcards.ts instead.');
  }

  console.log('\nDone.');
})().catch(e => { console.error(e); process.exit(1); });
