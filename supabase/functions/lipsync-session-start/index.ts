// Lipsync Session Start — picks the right engine + asset URLs for a
// chat session based on the chosen companion and tier.
//
// Called by the client when the user opens a chat in voice/lipsync/
// lipsync_plus mode. Returns:
//   - engine: 'simli' | 'sync_labs' | 'none' (for plain voice)
//   - asset URLs (image / idling video / Simli Face ID)
//   - ElevenLabs voice ID
//   - tokens_per_min (so the client can show a usage rate to the user)
//
// The actual real-time audio pipe — ElevenLabs Conv AI → Claude → voice
// generation → Simli/Sync Labs SDK — runs client-side once the SDKs are
// in place. This function only assembles the session config.
//
// Auth: requires a Supabase user JWT. The function uses RLS-aware
// reads so users only see their own custom companions.
//
// Deploy:
//   supabase functions deploy lipsync-session-start

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

type Tier = 'voice' | 'lipsync' | 'lipsync_custom' | 'lipsync_plus';

interface RequestBody {
  tier: Tier;
  /** archetype id (e.g. 'aiko') or custom_companions.id (uuid) */
  companion_id: string;
  /** 'archetype' (companion_archetypes table) or 'custom' (custom_companions table) */
  source: 'archetype' | 'custom';
}

interface SessionConfig {
  engine: 'simli' | 'sync_labs' | 'none';
  voice_id: string | null;
  image_url: string | null;
  idling_video_url: string | null;
  simli_face_id: string | null;
  system_prompt: string | null;
  tokens_per_min: number;
  display_name: string;
}

const TOKENS_PER_MIN: Record<Tier, number> = {
  voice:          5,
  lipsync:        3,
  lipsync_custom: 5,
  lipsync_plus:   10,
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });
  if (req.method !== 'POST')   return json({ error: 'Method not allowed' }, 405);

  const auth = req.headers.get('authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return json({ error: 'unauthorized' }, 401);

  let body: RequestBody;
  try { body = await req.json(); } catch { return json({ error: 'invalid json' }, 400); }
  if (!body?.tier || !body?.companion_id || !body?.source) {
    return json({ error: 'missing tier / companion_id / source' }, 400);
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: auth } } },
  );

  // ─── Fetch the companion record ──────────────────────────────────────
  let record: Partial<SessionConfig> = {};
  let displayName = 'Companion';

  if (body.source === 'archetype') {
    const { data, error } = await supabase
      .from('companion_archetypes')
      .select('name, voice_id, image_url, idling_video_url, system_prompt')
      .eq('id', body.companion_id)
      .eq('is_active', true)
      .maybeSingle();
    if (error || !data) return json({ error: 'archetype not found' }, 404);
    displayName = data.name ?? 'Companion';
    record = {
      voice_id:         data.voice_id,
      image_url:        data.image_url,
      idling_video_url: data.idling_video_url,
      simli_face_id:    null,
      system_prompt:    data.system_prompt,
    };
  } else {
    const { data, error } = await supabase
      .from('custom_companions')
      .select('name, voice_id, avatar_image_url, idling_video_url, simli_face_id, system_prompt, status')
      .eq('id', body.companion_id)
      .maybeSingle();
    if (error || !data) return json({ error: 'custom companion not found' }, 404);
    if (data.status !== 'paid') return json({ error: 'custom companion not paid yet' }, 402);
    displayName = data.name ?? 'Companion';
    record = {
      voice_id:         data.voice_id,
      image_url:        data.avatar_image_url,
      idling_video_url: data.idling_video_url,
      simli_face_id:    data.simli_face_id,
      system_prompt:    data.system_prompt,
    };
  }

  // ─── Pick engine ─────────────────────────────────────────────────────
  let engine: SessionConfig['engine'] = 'none';
  if (body.tier === 'lipsync_plus')     engine = 'sync_labs';
  else if (body.tier === 'lipsync' ||
           body.tier === 'lipsync_custom') engine = 'simli';

  const config: SessionConfig = {
    engine,
    voice_id:         record.voice_id ?? null,
    image_url:        record.image_url ?? null,
    idling_video_url: record.idling_video_url ?? null,
    simli_face_id:    record.simli_face_id ?? null,
    system_prompt:    record.system_prompt ?? null,
    tokens_per_min:   TOKENS_PER_MIN[body.tier],
    display_name:     displayName,
  };

  return json(config);
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}
