// Rwen Chat Edge Function — in-app text chat path.
//
// Replaces lib/claude.ts's direct Anthropic call so the EXPO_PUBLIC_CLAUDE_KEY
// can be removed from the client bundle. Required before any external
// distribution (TestFlight / Play Internal Testing) per PRODUCT-DESIGN.md
// §8 Phase M.
//
// Distinct from rwen-conversation (which is the ElevenLabs Custom LLM
// webhook returning OpenAI-format). This endpoint returns a simpler
// { reply: string } shape that lib/claude.ts consumes.
//
// Auth: requires a valid Supabase user JWT in the Authorization header.
// Rate-limit / quota check: looks up subscriptions.active_tier for the
// user and enforces ai_messages_limit / ai_messages_used.
//
// Deploy:
//   supabase functions deploy rwen-chat
// Set secrets:
//   supabase secrets set ANTHROPIC_KEY=sk-ant-...

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL          = 'claude-haiku-4-5-20251001';
const MAX_TOKENS     = 350;

interface ChatMessage { role: 'user' | 'assistant'; content: string; }

interface RequestBody {
  /** The user's new message */
  userMessage: string;
  /** Conversation history (last N turns). The function trims server-side too. */
  history: ChatMessage[];
  /** System prompt composed by the client (persona + guardrails + user context) */
  systemPrompt: string;
  /** Optional lesson context for Phase 8 mode */
  lessonContext?: string;
}

Deno.serve(async (req: Request) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS });
  }

  // Parse + validate body
  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return jsonError(400, 'invalid_json', 'Body must be JSON');
  }
  if (!body.userMessage || typeof body.userMessage !== 'string') {
    return jsonError(400, 'invalid_message', 'userMessage required');
  }
  if (!body.systemPrompt || typeof body.systemPrompt !== 'string') {
    return jsonError(400, 'invalid_prompt', 'systemPrompt required');
  }

  // Auth: verify Supabase JWT
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
  if (userErr || !user) {
    return jsonError(401, 'invalid_token', 'Could not resolve user from JWT');
  }

  // Quota check: ai_messages_used vs limit on the subscription tier
  const adminClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );
  const { data: sub } = await adminClient
    .from('subscriptions')
    .select('active_tier, ai_messages_used, ai_messages_limit')
    .eq('user_id', user.id)
    .single();
  if (!sub) {
    return jsonError(403, 'no_subscription', 'No subscription record');
  }
  if (sub.ai_messages_limit !== null && sub.ai_messages_used >= sub.ai_messages_limit) {
    return jsonError(429, 'quota_exceeded', 'Monthly AI message limit reached', { tier: sub.active_tier });
  }

  // Save the user message
  await adminClient.from('conversations').insert({
    user_id: user.id,
    role: 'user',
    content: body.userMessage,
    pack_context: body.lessonContext ?? null,
  });

  // Compose Claude messages
  const messages: ChatMessage[] = [
    ...body.history.slice(-20),
    { role: 'user', content: body.userMessage },
  ];

  // Call Claude
  const claudeRes = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         Deno.env.get('ANTHROPIC_KEY')!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model:   MODEL,
      max_tokens: MAX_TOKENS,
      system:  body.systemPrompt,
      messages,
    }),
  });

  if (!claudeRes.ok) {
    const errBody = await claudeRes.text().catch(() => '');
    console.error('Claude error', claudeRes.status, errBody);
    return jsonError(502, 'claude_error', `Claude returned ${claudeRes.status}`, { detail: errBody });
  }

  const claudeData = await claudeRes.json();
  const reply: string = claudeData.content?.[0]?.text ?? "Ndine urombo — I'm having a moment. Try again?";

  // Save Rwen's reply
  await adminClient.from('conversations').insert({
    user_id: user.id,
    role: 'rwen',
    content: reply,
    pack_context: body.lessonContext ?? null,
  });

  // Increment usage
  await adminClient
    .from('subscriptions')
    .update({ ai_messages_used: (sub.ai_messages_used ?? 0) + 1, updated_at: new Date().toISOString() })
    .eq('user_id', user.id);

  return new Response(
    JSON.stringify({ reply, tier: sub.active_tier, usage: (sub.ai_messages_used ?? 0) + 1 }),
    { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } },
  );
});

function jsonError(status: number, code: string, message: string, extra?: Record<string, unknown>) {
  return new Response(
    JSON.stringify({ error: { code, message, ...extra } }),
    { status, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } },
  );
}
