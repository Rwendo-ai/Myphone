import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';

// /api/chat — server proxy to the rwen-chat Supabase Edge Function.
// We invoke from the server (not the browser) so we never expose the
// Anthropic key path, and we forward the user's JWT via the @supabase/ssr
// session for RLS + billing.
export async function POST(req: Request) {
  const { message } = await req.json();
  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: { code: 'bad_input', message: 'message required' } }, { status: 400 });
  }

  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: { code: 'no_auth', message: 'Sign in first' } }, { status: 401 });
  }

  // Build the conversation history Claude sees. The rwen-chat Edge
  // Function expects (userMessage, history, systemPrompt, lessonContext).
  // For the v1 web app we pass a short recent history + a minimal system
  // prompt. The mobile app builds a much richer prompt — we'll mirror
  // that in phase 2 once the web product is validated.
  const { data: rows } = await supabase
    .from('conversations')
    .select('role, content')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(20);
  const history = (rows ?? [])
    .slice()
    .reverse()
    .map((r) => ({ role: r.role === 'rwen' ? 'assistant' : 'user', content: r.content }));

  const systemPrompt =
    `You are Rwen — a warm, attentive AI companion. The user is chatting with you on the web. Keep replies concise (2–4 sentences) unless they ask for depth. Remember anything they share for next time.`;

  // Invoke the same Edge Function the mobile app calls.
  const { data, error } = await supabase.functions.invoke('rwen-chat', {
    body: { userMessage: message, history, systemPrompt },
  });
  if (error) {
    if (/payment_required/i.test(error.message)) {
      return NextResponse.json(
        { error: { code: 'payment_required', message: 'Top up tokens' } },
        { status: 402 },
      );
    }
    return NextResponse.json({ error: { code: 'edge_error', message: error.message } }, { status: 502 });
  }

  // Read the fresh balance so the UI bar can update in lockstep with the deduction.
  const { data: credits } = await supabase
    .from('user_credits')
    .select('balance')
    .eq('user_id', user.id)
    .maybeSingle();

  return NextResponse.json({
    reply:   (data as { reply: string }).reply,
    balance: credits?.balance ?? null,
  });
}
