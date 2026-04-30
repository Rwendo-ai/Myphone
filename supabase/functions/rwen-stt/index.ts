// Rwen STT Edge Function — speech-to-text via ElevenLabs.
//
// Replaces lib/voice.ts's direct ElevenLabs STT call so the API key
// stays server-side. PRODUCT-DESIGN.md §8 Phase M.
//
// Auth: Supabase JWT. No quota check — STT is cheap and counts toward
// the same voice_messages_used bucket as TTS in v1.
//
// Body: multipart/form-data with an 'audio' file field.
//
// Deploy:
//   supabase functions deploy rwen-stt

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const ELEVENLABS_STT_URL = 'https://api.elevenlabs.io/v1/speech-to-text';

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });
  if (req.method !== 'POST')    return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS });

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

  // Forward the multipart body to ElevenLabs
  const formData = await req.formData().catch(() => null);
  if (!formData) return jsonError(400, 'invalid_body', 'multipart/form-data required');
  const audio = formData.get('audio');
  if (!(audio instanceof File)) {
    return jsonError(400, 'no_audio', "'audio' file field required");
  }

  const elFormData = new FormData();
  elFormData.append('file',     audio);
  elFormData.append('model_id', 'scribe_v1');

  const sttRes = await fetch(ELEVENLABS_STT_URL, {
    method: 'POST',
    headers: { 'xi-api-key': Deno.env.get('ELEVENLABS_KEY')! },
    body:    elFormData,
  });

  if (!sttRes.ok) {
    const err = await sttRes.text().catch(() => '');
    console.error('STT error', sttRes.status, err);
    return jsonError(502, 'stt_error', `ElevenLabs returned ${sttRes.status}`, { detail: err });
  }

  const data = await sttRes.json();
  return new Response(
    JSON.stringify({ text: data.text ?? '' }),
    { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } },
  );
});

function jsonError(status: number, code: string, message: string, extra?: Record<string, unknown>) {
  return new Response(
    JSON.stringify({ error: { code, message, ...extra } }),
    { status, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } },
  );
}
