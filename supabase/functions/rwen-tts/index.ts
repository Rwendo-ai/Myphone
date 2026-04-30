// Rwen TTS Edge Function — text-to-speech via ElevenLabs.
//
// Replaces lib/voice.ts's direct ElevenLabs call so EXPO_PUBLIC_ELEVENLABS_KEY
// can be removed from the client bundle. PRODUCT-DESIGN.md §8 Phase M.
//
// Auth: Supabase JWT.
// Quota: subscriptions.voice_messages_limit / voice_messages_used.
//
// Deploy:
//   supabase functions deploy rwen-tts
//   supabase secrets set ELEVENLABS_KEY=sk_...

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const ELEVENLABS_TTS_URL = 'https://api.elevenlabs.io/v1/text-to-speech';
const DEFAULT_MODEL_ID   = 'eleven_multilingual_v2';

interface RequestBody {
  text: string;
  voiceId: string;
  modelId?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });
  if (req.method !== 'POST')    return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS });

  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return jsonError(400, 'invalid_json', 'Body must be JSON');
  }
  if (!body.text || !body.voiceId) {
    return jsonError(400, 'invalid_args', 'text and voiceId required');
  }

  const authHeader = req.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return jsonError(401, 'no_auth', 'Bearer token required');
  }
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const { data: { user }, error: userErr } = await supabase.auth.getUser();
  if (userErr || !user) return jsonError(401, 'invalid_token', 'Could not resolve user');

  // Quota check
  const adminClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );
  const { data: sub } = await adminClient
    .from('subscriptions')
    .select('active_tier, voice_messages_used, voice_messages_limit')
    .eq('user_id', user.id)
    .single();
  if (!sub) return jsonError(403, 'no_subscription', 'No subscription record');
  if (sub.voice_messages_limit !== null && sub.voice_messages_used >= sub.voice_messages_limit) {
    return jsonError(429, 'quota_exceeded', 'Monthly voice limit reached', { tier: sub.active_tier });
  }

  // Call ElevenLabs
  const ttsRes = await fetch(`${ELEVENLABS_TTS_URL}/${body.voiceId}`, {
    method: 'POST',
    headers: {
      'xi-api-key':   Deno.env.get('ELEVENLABS_KEY')!,
      'Content-Type': 'application/json',
      'Accept':       'audio/mpeg',
    },
    body: JSON.stringify({
      text:     body.text,
      model_id: body.modelId ?? DEFAULT_MODEL_ID,
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    }),
  });

  if (!ttsRes.ok) {
    const err = await ttsRes.text().catch(() => '');
    console.error('TTS error', ttsRes.status, err);
    return jsonError(502, 'tts_error', `ElevenLabs returned ${ttsRes.status}`, { detail: err });
  }

  // Increment usage
  await adminClient
    .from('subscriptions')
    .update({ voice_messages_used: (sub.voice_messages_used ?? 0) + 1, updated_at: new Date().toISOString() })
    .eq('user_id', user.id);

  // Stream the audio back
  return new Response(ttsRes.body, {
    headers: {
      ...CORS_HEADERS,
      'Content-Type':         'audio/mpeg',
      'Cache-Control':        'no-store',
      'X-Tier':               sub.active_tier,
      'X-Voice-Messages-Used': String((sub.voice_messages_used ?? 0) + 1),
    },
  });
});

function jsonError(status: number, code: string, message: string, extra?: Record<string, unknown>) {
  return new Response(
    JSON.stringify({ error: { code, message, ...extra } }),
    { status, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } },
  );
}
