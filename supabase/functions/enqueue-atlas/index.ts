// Enqueue Atlas — kicks off lipsync-atlas generation for a companion.
//
// Called from the custom-companion wizard at step 5 (the moment the user
// commits their final portrait). Also callable from a one-off launch-prep
// script for free preset companions.
//
// THIS FUNCTION DOES NOT CALL THE GPU WORKER. It only inserts a row in
// atlas_generation_jobs(status='pending') and flips the companion's
// atlas_status to 'pending'. A worker process (Phase 1 of the atlas
// build — see docs/stack/lipsync-atlas.md Section 5) polls or webhook-
// subscribes to this table and runs MuseTalk against the portrait. Until
// the worker exists, jobs sit at 'pending' forever and the client falls
// back to AmbientFace silently.
//
// Auth: requires a Supabase user JWT.
//
// Deploy:
//   supabase functions deploy enqueue-atlas

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface RequestBody {
  /** 'custom' or 'archetype' — which table the companion lives in. */
  companion_kind: 'custom' | 'archetype';
  /** custom_companions.id (uuid) or companion_archetypes.id (text). */
  companion_id:   string;
  /** Public URL of the portrait to generate the atlas from. */
  portrait_url:   string;
  /** Optional override; defaults to 'musetalk-v1.2'. */
  generator?:     string;
}

interface SuccessResponse {
  job_id: string;
  status: 'pending';
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });
  if (req.method !== 'POST')   return json({ error: 'method not allowed' }, 405);

  // ─── Auth ────────────────────────────────────────────────────────────
  const auth = req.headers.get('authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return json({ error: 'unauthorized' }, 401);

  const userClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: auth } } },
  );
  const { data: userData, error: userErr } = await userClient.auth.getUser();
  if (userErr || !userData.user) return json({ error: 'unauthorized' }, 401);
  const userId = userData.user.id;

  // ─── Validate request ────────────────────────────────────────────────
  let body: RequestBody;
  try { body = await req.json(); } catch { return json({ error: 'invalid json' }, 400); }
  if (!body?.companion_kind || !body?.companion_id || !body?.portrait_url) {
    return json({ error: 'missing companion_kind / companion_id / portrait_url' }, 400);
  }
  if (body.companion_kind !== 'custom' && body.companion_kind !== 'archetype') {
    return json({ error: 'companion_kind must be custom or archetype' }, 400);
  }

  // Reject obvious URL nonsense early — full preflight (landmark check
  // for usable portrait) happens on the worker, not here.
  try {
    const u = new URL(body.portrait_url);
    if (u.protocol !== 'https:') return json({ error: 'portrait_url must be https' }, 400);
  } catch {
    return json({ error: 'portrait_url is not a valid URL' }, 400);
  }

  const generator = body.generator ?? 'musetalk-v1.2';

  // ─── Service-role client for the privileged writes below ─────────────
  // We need this because:
  //   (a) we want to verify the companion exists in either table even
  //       when RLS would hide archetype rows from the user;
  //   (b) we want to flip atlas_status on the companion row regardless
  //       of whether the user owns it (e.g. archetypes are bulk-baked).
  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  // ─── Verify ownership / existence ────────────────────────────────────
  if (body.companion_kind === 'custom') {
    const { data, error } = await admin
      .from('custom_companions')
      .select('id, user_id, status')
      .eq('id', body.companion_id)
      .maybeSingle();
    if (error || !data) return json({ error: 'custom companion not found' }, 404);
    if (data.user_id !== userId) return json({ error: 'forbidden' }, 403);
    if (data.status !== 'paid') return json({ error: 'custom companion not paid yet' }, 402);
  } else {
    // 'archetype' — anyone authenticated can request a bake (used by
    // the launch-prep script run by the team). Validate it exists.
    const { data, error } = await admin
      .from('companion_archetypes')
      .select('id')
      .eq('id', body.companion_id)
      .maybeSingle();
    if (error || !data) return json({ error: 'archetype not found' }, 404);
  }

  // ─── Coalesce: if a pending/running job already exists for this
  // companion, return its id instead of creating a duplicate.
  // ─────────────────────────────────────────────────────────────────────
  const { data: existing } = await admin
    .from('atlas_generation_jobs')
    .select('id, status')
    .eq('companion_kind', body.companion_kind)
    .eq('companion_id',   body.companion_id)
    .in('status', ['pending', 'running'])
    .maybeSingle();

  if (existing) {
    return json<SuccessResponse>({
      job_id: existing.id,
      status: 'pending',
    });
  }

  // ─── Insert the job + flip companion atlas_status ────────────────────
  const { data: inserted, error: insertErr } = await admin
    .from('atlas_generation_jobs')
    .insert({
      companion_kind: body.companion_kind,
      companion_id:   body.companion_id,
      user_id:        userId,
      status:         'pending',
      generator,
      portrait_url:   body.portrait_url,
    })
    .select('id')
    .single();
  if (insertErr || !inserted) {
    console.error('atlas job insert failed:', insertErr);
    return json({ error: 'could not enqueue' }, 500);
  }

  // Flip the companion row. Best-effort — if it fails the worker can
  // also do it when it picks up the job.
  const targetTable = body.companion_kind === 'custom' ? 'custom_companions' : 'companion_archetypes';
  await admin
    .from(targetTable)
    .update({ atlas_status: 'pending', atlas_generator: generator })
    .eq('id', body.companion_id);

  return json<SuccessResponse>({
    job_id: inserted.id,
    status: 'pending',
  });
});

function json<T = unknown>(body: T, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}
