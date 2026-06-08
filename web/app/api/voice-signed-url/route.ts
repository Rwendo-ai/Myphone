import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';

/**
 * Issue a short-lived ElevenLabs Conv AI WebSocket signed URL.
 *
 * The browser cannot hold the `xi-api-key` (it's server-only — never exposed
 * via NEXT_PUBLIC_). We mint a signed URL here using the server-side env var
 * and hand it back. ElevenLabs's signed URLs are good for ~15 min and tie a
 * single WebSocket session to our account without revealing the key.
 *
 * Requires the user to be signed in so we don't burn quota on anon traffic.
 */
export async function POST() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY || process.env.ELEVENLABS_KEY;
  const agentId = process.env.ELEVENLABS_AGENT_ID;
  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: 'voice_not_configured', message: 'ElevenLabs env vars missing on server' },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${encodeURIComponent(agentId)}`,
      { headers: { 'xi-api-key': apiKey } },
    );
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      return NextResponse.json(
        { error: 'eleven_error', status: res.status, body: t.slice(0, 500) },
        { status: 502 },
      );
    }
    const json = (await res.json()) as { signed_url?: string };
    if (!json.signed_url) {
      return NextResponse.json({ error: 'no_signed_url' }, { status: 502 });
    }
    return NextResponse.json({ signed_url: json.signed_url, agent_id: agentId });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'unknown';
    return NextResponse.json({ error: 'fetch_failed', message: msg }, { status: 502 });
  }
}
