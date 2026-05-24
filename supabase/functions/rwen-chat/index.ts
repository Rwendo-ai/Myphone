// Rwen Chat Edge Function — in-app text chat path.
//
// Replaces lib/claude.ts's direct Anthropic call so the EXPO_PUBLIC_CLAUDE_KEY
// can be removed from the client bundle. Required before any external
// distribution (TestFlight / Play Internal Testing) per PRODUCT-DESIGN.md
// §8 Phase M.
//
// Distinct from rwen-conversation (the ElevenLabs Custom-LLM webhook).
//
// v1 launch billing model (2026-05-21):
//   - Cost = ceil(reply_chars / TEXT_CHARS_PER_TOKEN). Charged AFTER Claude
//     replies; we know the exact response length.
//   - Spend path: try tokens first (spend_tokens RPC). If user is out
//     of tokens, fall back to the daily free-message quota
//     (consume_free_message RPC, default 5/day). If both are exhausted
//     the user gets a clean 402 and we never call Claude — no wasted
//     API spend.
//
// Auth: requires a Supabase user JWT in the Authorization header.
//
// Deploy:
//   supabase functions deploy rwen-chat
// Set secrets:
//   supabase secrets set ANTHROPIC_KEY=sk-ant-...

import { createClient, type SupabaseClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL          = 'claude-haiku-4-5-20251001';
const MAX_TOKENS     = 350;

const TEXT_CHARS_PER_TOKEN  = 100; // mirror of lib/ai-cost.ts
const FREE_MESSAGES_PER_DAY = 5;

interface ChatMessage { role: 'user' | 'assistant'; content: string; }

interface RequestBody {
  userMessage: string;
  history: ChatMessage[];
  systemPrompt: string;
  lessonContext?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS });
  }

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

  // Auth: verify Supabase JWT.
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

  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  // Pre-flight: can this user afford a response at all? Either they have
  // any token balance, or they have free-message quota left for today.
  // Reading is cheap; lets us avoid calling Claude when we'd just have
  // to refuse the user. The actual deduction happens AFTER Claude, when
  // we know the real character count.
  const { canPay, hasTokens, freeRemaining } = await checkAffordability(admin, user.id);
  if (!canPay) {
    return jsonError(
      402,
      'payment_required',
      'You\'ve used today\'s free messages. Top up tokens to keep chatting.',
      { freeRemaining: 0, balance: 0 },
    );
  }

  await admin.from('conversations').insert({
    user_id: user.id,
    role: 'user',
    content: body.userMessage,
    pack_context: body.lessonContext ?? null,
  });

  const messages: ChatMessage[] = [
    ...body.history.slice(-20),
    { role: 'user', content: body.userMessage },
  ];

  const claudeRes = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         Deno.env.get('ANTHROPIC_KEY')!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model:      MODEL,
      max_tokens: MAX_TOKENS,
      system:     body.systemPrompt,
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

  await admin.from('conversations').insert({
    user_id: user.id,
    role: 'rwen',
    content: reply,
    pack_context: body.lessonContext ?? null,
  });

  // Billing: tokens first (paying users use what they bought). Fall back
  // to free quota only if balance is empty. We use the affordability
  // snapshot here — a tiny race window where balance could change between
  // checkAffordability and now is acceptable; worst case we charge a free
  // message when tokens were also available, which never overcharges.
  const cost = textTokenCost(reply.length);
  let usedFree = false;
  let newBalance: number | null = null;

  if (hasTokens) {
    const { data, error } = await admin.rpc('spend_tokens', {
      p_user_id:     user.id,
      p_amount:      cost,
      p_reason:      'ai_text',
      p_feature_key: 'text',
      p_metadata:    { reply_chars: reply.length, lesson: body.lessonContext ?? null },
    });
    if (error) {
      console.warn('spend_tokens error:', error.message);
    } else if (typeof data === 'number' && data >= 0) {
      newBalance = data;
    } else {
      // Insufficient — race against affordability snapshot. Try free quota.
      if (freeRemaining > 0) {
        const { data: ok } = await admin.rpc('consume_free_message', {
          p_user_id: user.id, p_limit: FREE_MESSAGES_PER_DAY,
        });
        usedFree = !!ok;
      }
    }
  } else {
    const { data: ok } = await admin.rpc('consume_free_message', {
      p_user_id: user.id, p_limit: FREE_MESSAGES_PER_DAY,
    });
    usedFree = !!ok;
  }

  return new Response(
    JSON.stringify({
      reply,
      cost,
      balance:        newBalance,
      usedFree,
      freeRemaining:  Math.max(0, freeRemaining - (usedFree ? 1 : 0)),
    }),
    { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } },
  );
});

function textTokenCost(responseChars: number): number {
  if (responseChars <= 0) return 0;
  return Math.ceil(responseChars / TEXT_CHARS_PER_TOKEN);
}

async function checkAffordability(
  admin: SupabaseClient,
  userId: string,
): Promise<{ canPay: boolean; hasTokens: boolean; freeRemaining: number }> {
  const { data } = await admin
    .from('user_credits')
    .select('balance, free_messages_used_today, free_messages_day')
    .eq('user_id', userId)
    .maybeSingle();

  // No row yet → user just signed up. They have 0 tokens but full free quota.
  if (!data) {
    return { canPay: true, hasTokens: false, freeRemaining: FREE_MESSAGES_PER_DAY };
  }

  const balance = data.balance ?? 0;
  const today   = new Date().toISOString().slice(0, 10);
  const used    = data.free_messages_day === today ? (data.free_messages_used_today ?? 0) : 0;
  const freeRemaining = Math.max(0, FREE_MESSAGES_PER_DAY - used);

  return {
    canPay:   balance > 0 || freeRemaining > 0,
    hasTokens: balance > 0,
    freeRemaining,
  };
}

function jsonError(status: number, code: string, message: string, extra?: Record<string, unknown>) {
  return new Response(
    JSON.stringify({ error: { code, message, ...extra } }),
    { status, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } },
  );
}
