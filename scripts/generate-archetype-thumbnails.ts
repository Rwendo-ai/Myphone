/**
 * Generate 256×256 ~25 KB thumbnails for every active archetype.
 *
 * Why this exists: the face-picker UIs (CompanionPickerSheet,
 * CompanionProfileSheet's face dropdown, companions tab preset cards)
 * all need to show small face thumbnails. Pre-thumbnail they were
 * pulling the full 1024×1024 ~500 KB portrait JPEG, which is wasted
 * bandwidth on every picker render. With thumbnail_url populated, the
 * pickers fetch ~25 KB each; the full portrait + idle MP4 only load
 * when AmbientFace renders the active companion.
 *
 * Source: each archetype's portrait at
 *   companion-assets/archetypes/<id>/portrait.jpg
 * Output:
 *   companion-assets/archetypes/<id>/thumbnail.jpg     (256×256, q=80)
 * Plus: companion_archetypes.thumbnail_url updated for each.
 *
 * Run once after the add_thumbnail_url migration; safe to re-run
 * (overwrites in Storage + updates DB regardless).
 *
 *   npx tsx scripts/generate-archetype-thumbnails.ts
 *   npx tsx scripts/generate-archetype-thumbnails.ts --only sarah,marcus
 *
 * Env: SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY from .env / .env.local.
 */
import * as dotenv from 'dotenv';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
dotenv.config();

const SUPABASE_URL              = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL)              throw new Error('SUPABASE_URL not set');
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY not set');

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const BUCKET     = 'companion-assets';
const THUMB_SIZE = 256;
const THUMB_Q    = 80;

interface Args { only?: string[]; }
function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const out: Args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--only') out.only = argv[++i].split(',').map((s) => s.trim());
  }
  return out;
}

interface Row { id: string; name: string; image_url: string | null; thumbnail_url: string | null; }

async function loadArchetypes(only?: string[]): Promise<Row[]> {
  let q = supabase
    .from('companion_archetypes')
    .select('id, name, image_url, thumbnail_url')
    .eq('is_active', true)
    .order('display_order');
  if (only?.length) q = q.in('id', only);
  const { data, error } = await q;
  if (error || !data) throw new Error(`load: ${error?.message ?? 'no data'}`);
  return data as Row[];
}

async function downloadPortrait(url: string): Promise<Buffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`portrait download: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function toThumbnail(buf: Buffer): Promise<Buffer> {
  return sharp(buf)
    .resize({ width: THUMB_SIZE, height: THUMB_SIZE, fit: 'cover', position: 'top' })
    .jpeg({ quality: THUMB_Q, mozjpeg: true })
    .toBuffer();
}

async function uploadThumbnail(id: string, buf: Buffer): Promise<string> {
  const path = `archetypes/${id}/thumbnail.jpg`;
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, buf, {
      contentType: 'image/jpeg',
      cacheControl: '31536000',  // 1 year — thumbnails are immutable per archetype
      upsert: true,
    });
  if (error) throw new Error(`upload: ${error.message}`);
  const { data: publicData } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return publicData.publicUrl;
}

async function updateRow(id: string, thumbnail_url: string): Promise<void> {
  const { error } = await supabase
    .from('companion_archetypes')
    .update({ thumbnail_url })
    .eq('id', id);
  if (error) throw new Error(`db update: ${error.message}`);
}

async function processOne(row: Row): Promise<void> {
  if (!row.image_url) {
    console.log(`  ${row.id.padEnd(10)} skip (no image_url)`);
    return;
  }
  const portrait = await downloadPortrait(row.image_url);
  const thumb    = await toThumbnail(portrait);
  const url      = await uploadThumbnail(row.id, thumb);
  await updateRow(row.id, url);
  console.log(`  ${row.id.padEnd(10)} ${(thumb.byteLength / 1024).toFixed(1).padStart(5)} KB → ${url}`);
}

(async () => {
  const args = parseArgs();
  const rows = await loadArchetypes(args.only);
  console.log(`Processing ${rows.length} archetype(s)…\n`);

  const failed: string[] = [];
  for (const row of rows) {
    try { await processOne(row); }
    catch (e) { failed.push(row.id); console.error(`  ${row.id.padEnd(10)} ✗ ${(e as Error).message}`); }
  }
  console.log(`\n────────────────────────────`);
  console.log(`Done. ${rows.length - failed.length}/${rows.length} succeeded.`);
  if (failed.length) {
    console.log(`Failed: ${failed.join(', ')}`);
    process.exit(1);
  }
})();
