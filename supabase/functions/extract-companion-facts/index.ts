// Companion-fact extractor.
//
// Called fire-and-forget from lib/claude.ts after every successful chat
// reply. Looks at the user's last message + the AI's reply and asks
// Claude Haiku: "did anything in this exchange reveal a fact worth
// permanently remembering about the user?"
//
// Output schema enforced via prompt:
//   [{ type: 'fact'|'emotion'|'plan'|'preference'|'person', content: '...' }, …]
// Empty array on no-op.
//
// Each extracted fact goes through upsert_companion_fact RPC, which
// dedup-by-(user, type, content) and bumps weight on a repeat — so
// mentioning your sister three times across the week converges on one
// row with weight=3 (more memorable to the prompt builder later).
//
// Cost guard: caller can pass `skip: true` to early-return (saves a
// Claude call when the turn is clearly trivial — see lib/claude.ts).
//
// Auth: requires a Supabase user JWT. The extractor reads the caller
// from the JWT and writes via SECURITY DEFINER RPC — no userId in body.
//
// Deploy:
//   supabase functions deploy extract-companion-facts
// Required secret (already set if Anthropic is wired):
//   supabase secrets set ANTHROPIC_KEY=sk-ant-...

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL          = 'claude-haiku-4-5-20251001';
const MAX_TOKENS     = 300;

const SYSTEM_PROMPT = `You extract long-term-memory-worthy facts about a user from a single chat exchange.

OUTPUT FORMAT — strict JSON array, nothing else. Empty array if nothing worth remembering:
[
  { "type": "fact" | "emotion" | "plan" | "preference" | "person", "content": "<one short sentence>" }
]

GUIDANCE:
- "fact"       — durable biographical truth ("Lives in Sydney", "Grew up speaking Shona at home")
- "emotion"    — significant emotional state, especially major ones ("Lost his wife in 2024", "Anxious about job interview tomorrow")
- "plan"       — concrete upcoming intent ("Wedding on 12 Oct 2026", "Travelling to Zimbabwe next month")
- "preference" — durable taste / habit ("Hates small talk", "Prefers morning workouts")
- "person"     — important relationship ("Daughter named Mia, age 7", "Brother John, lives in UK")

DO NOT extract:
- Trivia about the current conversation ("said hello", "asked about weather")
- Things the AI said — only user-revealed facts
- Hedged / hypothetical statements ("might go on holiday")
- Facts already obviously inferrable from the user profile

If nothing meaningful was revealed, output: []

Output ONLY the JSON array. No explanation, no markdown fence, no preamble.`;

interface ReqBody {
  /** The user's last message. */
  userMessage: string;
  /** The assistant's reply (helps disambiguate context). */
  assistantReply: string;
  /** Optional — turn UUID for source-tracking on the facts row. */
  sourceTurnId?: string;
}

interface ExtractedFact {
  type: 'fact' | 'emotion' | 'plan' | 'preference' | 'person';
  content: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });
  if (req.method !== 'POST') return jsonError(405, 'method_not_allowed', 'POST only');

  let body: ReqBody;
  try { body = await req.json(); } catch { return jsonError(400, 'bad_json', 'Body must be JSON'); }
  if (!body.userMessage || !body.assistantReply) {
    return jsonError(400, 'bad_input', 'userMessage and assistantReply required');
  }

  // Auth via JWT.
  const authHeader = req.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) return jsonError(401, 'no_auth', 'Bearer required');
  const supa = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const { data: { user } } = await supa.auth.getUser();
  if (!user) return jsonError(401, 'invalid_token', 'No user');

  // Skip trivial exchanges (saves Claude calls). Either side under 20 chars
  // is almost always greetings, acknowledgements, or quick clarifications.
  if (body.userMessage.length < 20 || body.assistantReply.length < 20) {
    return json({ ok: true, extracted: 0, skipped: 'too_short' });
  }

  // Call Claude Haiku.
  const claudeRes = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type':       'application/json',
      'x-api-key':          Deno.env.get('ANTHROPIC_KEY')!,
      'anthropic-version':  '2023-06-01',
    },
    body: JSON.stringify({
      model:      MODEL,
      max_tokens: MAX_TOKENS,
      system:     SYSTEM_PROMPT,
      messages: [{
        role: 'user',
        content:
          `USER said: """${body.userMessage}"""\n\n` +
          `AI replied: """${body.assistantReply}"""\n\n` +
          `Extract facts as JSON array.`,
      }],
    }),
  });

  if (!claudeRes.ok) {
    const txt = await claudeRes.text().catch(() => '');
    console.error('[extract-facts] claude error', claudeRes.status, txt);
    return jsonError(502, 'claude_error', 'Claude returned non-200');
  }
  const data = await claudeRes.json();
  const raw: string = data.content?.[0]?.text ?? '[]';

  // Parse Claude's output. Be defensive — even with a strict prompt the
  // model sometimes wraps the array in a markdown fence or adds prose.
  let facts: ExtractedFact[] = [];
  try {
    const jsonStr = raw.replace(/^[\s`]*(?:json)?\s*\[?/, '[').replace(/\][\s`]*$/, ']');
    facts = JSON.parse(jsonStr) as ExtractedFact[];
  } catch {
    try {
      const m = raw.match(/\[[\s\S]*\]/);
      if (m) facts = JSON.parse(m[0]) as ExtractedFact[];
    } catch { /* ignore */ }
  }
  if (!Array.isArray(facts) || facts.length === 0) {
    return json({ ok: true, extracted: 0 });
  }

  // Service-role client for the upsert RPC.
  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  let writtenCount = 0;
  for (const f of facts) {
    if (!f.type || !f.content) continue;
    if (typeof f.content !== 'string' || f.content.length < 4 || f.content.length > 400) continue;
    if (!['fact','emotion','plan','preference','person'].includes(f.type)) continue;
    const { error } = await admin.rpc('upsert_companion_fact', {
      p_user_id:        user.id,
      p_fact_type:      f.type,
      p_content:        f.content.trim(),
      p_source_turn_id: body.sourceTurnId ?? null,
    });
    if (error) {
      console.warn('[extract-facts] upsert failed:', error.message);
      continue;
    }
    writtenCount++;
  }

  return json({ ok: true, extracted: writtenCount });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function jsonError(status: number, code: string, message: string): Response {
  return json({ error: { code, message } }, status);
}
