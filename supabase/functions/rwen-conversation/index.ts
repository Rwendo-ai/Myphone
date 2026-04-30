// Rwen Conversation Edge Function
// ElevenLabs Custom LLM → Claude API → OpenAI-compatible response

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, xi-api-key, x-eleven-secret',
};

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

function openAiResponse(content: string) {
  return new Response(
    JSON.stringify({
      id: `chatcmpl-rwen-${Date.now()}`,
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: 'claude-haiku',
      choices: [{
        index: 0,
        message: { role: 'assistant', content },
        logprobs: null,
        finish_reason: 'stop',
      }],
      usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
      system_fingerprint: null,
    }),
    { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
  );
}

async function fetchProfile(userId: string) {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );
  const { data, error } = await supabase.rpc('get_ai_prompt_data', { p_user_id: userId });
  if (error) console.error('Profile RPC error:', error);
  return data;
}

function buildPrompt(profile: any, lessonContext?: string): string {
  const name       = profile?.display_name || 'friend';
  const pack       = profile?.active_language_pack || 'shona-english';
  const targetLang = pack === 'shona-english' ? 'Shona' : 'English';
  const nativeLang = pack === 'shona-english' ? 'English' : 'Shona';
  const path       = profile?.primary_path || 'learn';
  const ability    = profile?.ability_level || 'beginner';
  const connection = profile?.personal_connection;
  const challenges = (profile?.challenges || []).join(', ');
  const reasons    = (profile?.learning_reasons || []).join(', ');
  const streak     = profile?.streak_days || 0;
  const compType   = profile?.companion_type;

  const companionDesc =
    compType === 'friend'  ? 'close trusted friend' :
    compType === 'support' ? 'empathetic emotional support' :
    compType === 'study'   ? 'enthusiastic study buddy' :
    compType === 'work'    ? 'professional sounding board' : 'warm companion';

  return `You are Rwen, a warm chameleon companion in the Rwendo app. You are in a LIVE VOICE conversation with ${name}.

VOICE RULES — critical:
- Maximum 2-3 SHORT sentences per response
- No lists, no markdown, no bullet points
- Natural speech only — like talking to a friend
- One question per turn then stop and listen

ABOUT ${name}: native ${nativeLang}, learning ${targetLang}, ${ability} level, ${streak} day streak
${path === 'learn' && reasons ? `Learning because: ${reasons}` : ''}
${path === 'learn' && challenges ? `Struggles with: ${challenges}` : ''}
${connection ? `Personal motivation: "${connection}"` : ''}
${path === 'companion' ? `You are ${name}'s ${companionDesc} — friendship first` : ''}

Use 1-2 ${targetLang} words naturally per response. Never say "As an AI".
${lessonContext ? `Currently working on: ${lessonContext}. Help with this specifically.` : ''}`;
}

function getDefaultPrompt(): string {
  return `You are Rwen, a warm chameleon in the Rwendo language learning app. This is a LIVE VOICE conversation. Keep responses to 2-3 short sentences only. No lists or markdown. Be warm and encouraging. Use Shona words naturally: Mhoro (hello), Ndatenda (thank you), Zvakanaka (good). Never say "As an AI".`;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS });
  }

  console.log('Request received:', req.method, req.url);

  let body: any = {};
  try {
    const text = await req.text();
    console.log('Raw body length:', text.length);
    if (text.length > 0) {
      body = JSON.parse(text);
    }
  } catch (e) {
    console.error('Body parse error:', e);
  }

  // Extract user context
  const userId = body?.custom_llm_extra_body?.user_id || body?.dynamic_variables?.user_id || null;
  const lessonContext = body?.custom_llm_extra_body?.lesson_context || null;

  console.log('userId:', userId, 'lessonContext:', lessonContext);

  // Get messages — ensure at least one user message
  const rawMessages: { role: string; content: string }[] = body.messages || [];
  const messages = rawMessages.filter((m: any) => m.role !== 'system');

  // If no messages (test ping), return a greeting
  if (messages.length === 0) {
    console.log('No messages — returning test greeting');
    return openAiResponse('Mhoro! I am Rwen, ready to help you learn. Zvakanaka!');
  }

  // Build system prompt
  let systemPrompt = getDefaultPrompt();
  if (userId) {
    try {
      const profile = await fetchProfile(userId);
      if (profile) {
        systemPrompt = buildPrompt(profile, lessonContext);
        console.log('Built personalised prompt for:', profile.display_name);
      }
    } catch (e) {
      console.error('Profile fetch failed:', e);
    }
  }

  // Call Claude
  try {
    const claudeRes = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': Deno.env.get('CLAUDE_API_KEY') ?? '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 150,
        system: systemPrompt,
        messages: messages.map((m: any) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: String(m.content || ''),
        })),
      }),
    });

    console.log('Claude status:', claudeRes.status);

    if (!claudeRes.ok) {
      const err = await claudeRes.text();
      console.error('Claude error body:', err);
      return openAiResponse('Ndine urombo — let me try again in a moment.');
    }

    const claudeData = await claudeRes.json();
    const replyText = claudeData.content?.[0]?.text ?? 'Ndine urombo — let me try again.';
    console.log('Reply:', replyText.substring(0, 50));

    return openAiResponse(replyText);

  } catch (e) {
    console.error('Claude fetch error:', e);
    return openAiResponse('Ndine urombo — something went wrong. Try again.');
  }
});
