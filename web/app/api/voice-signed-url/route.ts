import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';

/**
 * Issue a short-lived ElevenLabs Conv AI WebSocket signed URL.
 *
 * Calls the `rwen-convai-url` Supabase Edge Function which holds both the
 * ElevenLabs API key AND the default agent id in Supabase secrets. The
 * web server therefore needs NO ElevenLabs config — the secrets live in
 * one place (Supabase) shared by web + mobile.
 *
 * Requires the user to be signed in.
 */
export async function POST() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  // Pass-through call. Supabase JS auto-attaches the user's JWT in the
  // Authorization header for verify_jwt-protected Edge Functions.
  const { data, error } = await supabase.functions.invoke('rwen-convai-url', {
    body: {}, // empty — Edge Function uses elevenlabs_agent_id from secrets
  });
  if (error) {
    return NextResponse.json(
      { error: 'edge_failed', message: error.message },
      { status: 502 },
    );
  }
  const { signed_url, agent_id } = (data ?? {}) as { signed_url?: string; agent_id?: string };
  if (!signed_url) {
    return NextResponse.json({ error: 'no_signed_url' }, { status: 502 });
  }
  return NextResponse.json({ signed_url, agent_id });
}
