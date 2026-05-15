/**
 * Register the 20 archetype portraits with Tavus to create Replica IDs.
 *
 * Tavus's flow:
 *   POST https://tavusapi.com/v2/replicas with JSON body:
 *     { train_image_url, voice_name, replica_name, model_name: 'phoenix-4' }
 *   Response is async — returns replica_id with status "started".
 *   The replica trains for ~5-15 min in the background; we don't need
 *   to wait, the replica_id is permanent and usable once trained.
 *
 * Voice mapping: each archetype gets a stock Tavus voice name. Easy to
 * change later via PATCH on the replica.
 *
 * Usage:
 *   npx tsx scripts/register-tavus-replicas.ts
 *   npx tsx scripts/register-tavus-replicas.ts --only sarah,marcus
 *   npx tsx scripts/register-tavus-replicas.ts --check-only    # status only
 *
 * Env required: TAVUS_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
 */
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
dotenv.config();

const TAVUS_API_KEY             = process.env.TAVUS_API_KEY;
const SUPABASE_URL              = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!TAVUS_API_KEY)             throw new Error('TAVUS_API_KEY not set in .env');
if (!SUPABASE_URL)              throw new Error('SUPABASE_URL not set');
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY not set');

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const TAVUS_BASE = 'https://tavusapi.com/v2';

interface Args { only?: string[]; checkOnly: boolean; }
function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const out: Args = { checkOnly: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--only')             out.only      = argv[++i].split(',').map((s) => s.trim());
    else if (a === '--check-only')  out.checkOnly = true;
  }
  return out;
}

interface Archetype {
  id:                string;
  name:              string;
  image_url:         string;
  tavus_replica_id:  string | null;
  tavus_voice_name:  string | null;
}

// Default Tavus voice assignments per archetype. Best-fit picks from the
// stock voice library (gender/age vibe match). Easy to override later.
const VOICE_MAP: Record<string, string> = {
  // Female archetypes
  sarah:    'beth',     // professional female
  aiko:     'destiny',  // young studio female
  lin:      'celine',   // casual creative female
  aisha:    'dawn',     // pro female
  priya:    'anna',     // warm casual female
  margaret: 'beth',     // older professional female
  astra:    'destiny',  // young creative female
  bea:      'celine',   // playful female
  eleanor:  'anna',     // warm older female
  // Male archetypes
  marcus:   'charlie',  // confident male studio
  yuki:     'benjamin', // pro mature male
  olu:      'benjamin', // pro mature male
  carlos:   'daniel',   // casual office male
  erik:     'darius',   // outdoor casual male
  joon:     'danny',    // young casual male
  giulio:   'daniel',   // warm older male
  hassan:   'benjamin', // pro mature male
  mateo:    'daniel',   // casual creative male
  tane:     'charlie',  // pro mature male
  // Androgynous / neutral
  nova:     'charlie',  // gender-neutral middle register
};

async function loadArchetypes(only?: string[]): Promise<Archetype[]> {
  let q = supabase
    .from('companion_archetypes')
    .select('id, name, image_url, tavus_replica_id, tavus_voice_name')
    .eq('is_active', true)
    .order('display_order');
  if (only?.length) q = q.in('id', only);
  const { data, error } = await q;
  if (error || !data) throw new Error(`load: ${error?.message ?? 'no data'}`);
  return data as Archetype[];
}

async function createReplica(arch: Archetype, voiceName: string): Promise<string> {
  const body = {
    train_image_url: arch.image_url,
    voice_name:      voiceName,
    replica_name:    `Rwendo · ${arch.name}`,
    model_name:      'phoenix-4',
  };
  const res = await fetch(`${TAVUS_BASE}/replicas`, {
    method:  'POST',
    headers: {
      'x-api-key':   TAVUS_API_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`POST /replicas: ${res.status} ${text.substring(0, 300)}`);
  let parsed: Record<string, unknown> = {};
  try { parsed = JSON.parse(text); } catch { /* keep empty */ }
  const replicaId = parsed['replica_id'] ?? parsed['id'];
  if (!replicaId || typeof replicaId !== 'string') {
    throw new Error(`no replica_id in response: ${text.substring(0, 300)}`);
  }
  return replicaId;
}

async function checkReplicaStatus(replicaId: string): Promise<string> {
  const res = await fetch(`${TAVUS_BASE}/replicas/${encodeURIComponent(replicaId)}`, {
    headers: { 'x-api-key': TAVUS_API_KEY! },
  });
  const text = await res.text();
  if (!res.ok) return `http_${res.status}`;
  let body: Record<string, unknown> = {};
  try { body = JSON.parse(text); } catch { /* keep empty */ }
  return String(body['status'] ?? 'unknown');
}

(async () => {
  const args       = parseArgs();
  const archetypes = await loadArchetypes(args.only);
  if (!archetypes.length) { console.error('no archetypes match filter'); process.exit(1); }
  console.log(`Loaded ${archetypes.length} archetype(s)`);

  // ─── Check-only mode ──────────────────────────────────────────────────
  if (args.checkOnly) {
    console.log(`\n── Status check ──`);
    for (const a of archetypes) {
      if (!a.tavus_replica_id) { console.log(`  ${a.id.padEnd(10)} no replica_id yet`); continue; }
      const status = await checkReplicaStatus(a.tavus_replica_id);
      console.log(`  ${a.id.padEnd(10)} ${a.tavus_replica_id.padEnd(15)} status=${status}`);
    }
    return;
  }

  // ─── Submit ───────────────────────────────────────────────────────────
  console.log(`\n── Submitting ${archetypes.length} replica(s) to Tavus (Phoenix-4) ──`);
  let ok = 0;
  const failed: string[] = [];

  // Submit in parallel — Tavus generally tolerates concurrent replica
  // creation requests on paid tiers. If we hit rate limits we'll adjust.
  const results = await Promise.allSettled(
    archetypes.map(async (a) => {
      if (a.tavus_replica_id) {
        console.log(`  ${a.id.padEnd(10)} already has replica_id=${a.tavus_replica_id}`);
        return a.id;
      }
      const voice = a.tavus_voice_name ?? VOICE_MAP[a.id] ?? 'charlie';
      const replicaId = await createReplica(a, voice);
      const { error } = await supabase
        .from('companion_archetypes')
        .update({
          tavus_replica_id: replicaId,
          tavus_voice_name: voice,
          updated_at:       new Date().toISOString(),
        })
        .eq('id', a.id);
      if (error) throw new Error(`db update: ${error.message}`);
      console.log(`  ${a.id.padEnd(10)} voice=${voice.padEnd(9)} replica_id=${replicaId}`);
      return a.id;
    }),
  );

  results.forEach((r, i) => {
    if (r.status === 'fulfilled') ok++;
    else { failed.push(archetypes[i].id); console.error(`  ✗ ${archetypes[i].id}: ${r.reason?.message ?? r.reason}`); }
  });

  console.log(`\n────────────────────────────`);
  console.log(`Submitted: ${ok}/${archetypes.length}`);
  if (failed.length) {
    console.log(`Failed: ${failed.join(', ')}`);
    console.log(`Retry: --only ${failed.join(',')}`);
  }
  console.log(`\nReplica training is async (~5-15 min). Run --check-only to see status.`);
  if (failed.length) process.exit(1);
})();
