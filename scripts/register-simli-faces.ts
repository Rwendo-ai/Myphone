/**
 * Register the 20 archetype portraits with Simli to create Face IDs.
 *
 * Two-phase design:
 *   Phase A — Submit all archetypes in parallel. Each POST returns a
 *             face_id almost immediately (status: queued). Save the
 *             face_id to companion_archetypes.simli_face_id right away.
 *   Phase B — Poll all face_ids in parallel until each is in a terminal
 *             state. Trinity generation takes several minutes; doing
 *             20 in parallel keeps wall-clock to the slowest single one.
 *
 * Usage:
 *   npx tsx scripts/register-simli-faces.ts                  # full pipeline
 *   npx tsx scripts/register-simli-faces.ts --only sarah
 *   npx tsx scripts/register-simli-faces.ts --submit-only    # POST, skip poll
 *   npx tsx scripts/register-simli-faces.ts --check-only     # poll existing
 */
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';

dotenv.config({ path: '.env.local' });
dotenv.config();

const SIMLI_API_KEY             = process.env.SIMLI_API_KEY;
const SUPABASE_URL              = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SIMLI_API_KEY)             throw new Error('SIMLI_API_KEY not set in .env');
if (!SUPABASE_URL)              throw new Error('SUPABASE_URL not set');
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY not set');

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const SIMLI_BASE          = 'https://api.simli.ai';
const POLL_EVERY_MS       = 15_000;
const POLL_TIMEOUT_MS     = 20 * 60_000; // 20 min global

interface Args { only?: string[]; submitOnly: boolean; checkOnly: boolean; }
function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const out: Args = { submitOnly: false, checkOnly: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--only')             out.only       = argv[++i].split(',').map((s) => s.trim());
    else if (a === '--submit-only') out.submitOnly = true;
    else if (a === '--check-only')  out.checkOnly  = true;
  }
  return out;
}

interface Archetype { id: string; name: string; image_url: string; simli_face_id: string | null; }

async function loadArchetypes(only?: string[]): Promise<Archetype[]> {
  let q = supabase
    .from('companion_archetypes')
    .select('id, name, image_url, simli_face_id')
    .eq('is_active', true)
    .order('display_order');
  if (only?.length) q = q.in('id', only);
  const { data, error } = await q;
  if (error || !data) throw new Error(`load: ${error?.message ?? 'no data'}`);
  return data as Archetype[];
}

async function downloadPortrait(url: string): Promise<Buffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`portrait download: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function toSquare(buf: Buffer): Promise<Buffer> {
  return sharp(buf)
    .resize({ width: 1024, height: 1024, fit: 'cover', position: 'top' })
    .jpeg({ quality: 92 })
    .toBuffer();
}

async function submitOne(arch: Archetype): Promise<string> {
  const raw  = await downloadPortrait(arch.image_url);
  const buf  = await toSquare(raw);
  const form = new FormData();
  const blob = new Blob([new Uint8Array(buf)], { type: 'image/jpeg' });
  form.append('image', blob, `${arch.id}.jpg`);

  const url  = `${SIMLI_BASE}/faces/trinity?face_name=${encodeURIComponent(arch.id)}`;
  const res  = await fetch(url, {
    method:  'POST',
    headers: { 'x-simli-api-key': SIMLI_API_KEY! },
    body:    form,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`POST ${arch.id}: ${res.status} ${text.substring(0, 200)}`);

  let body: Record<string, unknown> = {};
  try { body = JSON.parse(text); } catch { /* keep empty */ }
  const cand = body['face_id'] ?? body['id'] ?? body['character_uid'] ?? body['request_id'];
  if (!cand || typeof cand !== 'string') throw new Error(`no face_id in response: ${text.substring(0, 200)}`);
  return cand;
}

async function checkStatus(faceId: string): Promise<{ done: boolean; failed: boolean; status: string; queue?: number }> {
  const url = `${SIMLI_BASE}/faces/trinity/generation_status?face_id=${encodeURIComponent(faceId)}`;
  const res = await fetch(url, { headers: { 'x-simli-api-key': SIMLI_API_KEY! } });
  const text = await res.text();
  if (!res.ok) return { done: false, failed: false, status: `http_${res.status}` };
  let body: Record<string, unknown> = {};
  try { body = JSON.parse(text); } catch { /* keep empty */ }
  const status = String(body['status'] ?? '').toLowerCase();
  const queue  = typeof body['queue_position'] === 'number' ? (body['queue_position'] as number) : undefined;
  const done   = ['completed', 'success', 'ready', 'finished', 'done'].some((s) => status.includes(s));
  const failed = ['error', 'failed', 'rejected'].some((s) => status.includes(s));
  return { done, failed, status, queue };
}

// ─── Phase A: submit ─────────────────────────────────────────────────────
async function submitAll(archetypes: Archetype[]): Promise<Record<string, string>> {
  console.log(`\n── Phase A: submitting ${archetypes.length} face(s) to Simli ──`);
  const ids: Record<string, string> = {};
  const results = await Promise.allSettled(
    archetypes.map(async (a) => {
      if (a.simli_face_id) {
        console.log(`  ${a.id.padEnd(10)} already has face_id=${a.simli_face_id}`);
        return { id: a.id, faceId: a.simli_face_id };
      }
      const faceId = await submitOne(a);
      const { error } = await supabase
        .from('companion_archetypes')
        .update({ simli_face_id: faceId, updated_at: new Date().toISOString() })
        .eq('id', a.id);
      if (error) throw new Error(`db update ${a.id}: ${error.message}`);
      console.log(`  ${a.id.padEnd(10)} submitted face_id=${faceId}`);
      return { id: a.id, faceId };
    }),
  );
  let failed = 0;
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') ids[r.value.id] = r.value.faceId;
    else { failed++; console.error(`  ✗ ${archetypes[i].id}: ${r.reason?.message ?? r.reason}`); }
  });
  if (failed > 0) console.log(`  ${failed} submission(s) failed`);
  return ids;
}

// ─── Phase B: poll ───────────────────────────────────────────────────────
async function pollAll(ids: Record<string, string>): Promise<{ ready: string[]; failed: string[]; pending: string[] }> {
  const allIds = Object.entries(ids);
  if (allIds.length === 0) return { ready: [], failed: [], pending: [] };
  console.log(`\n── Phase B: polling ${allIds.length} face(s) until generation completes ──`);
  const started = Date.now();
  const ready   = new Set<string>();
  const failed  = new Set<string>();
  while (ready.size + failed.size < allIds.length && Date.now() - started < POLL_TIMEOUT_MS) {
    const pending = allIds.filter(([id]) => !ready.has(id) && !failed.has(id));
    const statuses = await Promise.all(pending.map(async ([id, faceId]) => [id, await checkStatus(faceId)] as const));
    const now = new Date().toISOString().substring(11, 19);
    for (const [id, s] of statuses) {
      if (s.done)        { ready.add(id);  console.log(`  [${now}] ✓ ${id.padEnd(10)} done`); }
      else if (s.failed) { failed.add(id); console.log(`  [${now}] ✗ ${id.padEnd(10)} ${s.status}`); }
      else               { console.log(`  [${now}]   ${id.padEnd(10)} ${s.status}${s.queue !== undefined ? ` (queue=${s.queue})` : ''}`); }
    }
    if (ready.size + failed.size < allIds.length) await new Promise((r) => setTimeout(r, POLL_EVERY_MS));
  }
  const pending = allIds.filter(([id]) => !ready.has(id) && !failed.has(id)).map(([id]) => id);
  return { ready: [...ready], failed: [...failed], pending };
}

// ─── Main ────────────────────────────────────────────────────────────────
(async () => {
  const args = parseArgs();
  const archetypes = await loadArchetypes(args.only);
  if (!archetypes.length) { console.error('no archetypes match filter'); process.exit(1); }
  console.log(`Loaded ${archetypes.length} archetype(s)`);

  let faceIds: Record<string, string> = {};
  if (args.checkOnly) {
    for (const a of archetypes) if (a.simli_face_id) faceIds[a.id] = a.simli_face_id;
    console.log(`Found ${Object.keys(faceIds).length} face(s) to poll`);
  } else {
    faceIds = await submitAll(archetypes);
    if (args.submitOnly) {
      console.log(`\n── Phase A complete. ${Object.keys(faceIds).length} face(s) submitted. Run with --check-only to poll. ──`);
      return;
    }
  }

  const result = await pollAll(faceIds);
  console.log(`\n────────────────────────────`);
  console.log(`Ready:   ${result.ready.length}/${Object.keys(faceIds).length}  (${result.ready.join(', ')})`);
  if (result.failed.length)  console.log(`Failed:  ${result.failed.length}  (${result.failed.join(', ')})`);
  if (result.pending.length) console.log(`Pending: ${result.pending.length}  (${result.pending.join(', ')})  — retry with --check-only`);
  if (result.failed.length || result.pending.length) process.exit(1);
})();
