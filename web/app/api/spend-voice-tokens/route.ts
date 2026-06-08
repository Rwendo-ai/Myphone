import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { AI_FEATURE_TOKENS_PER_MIN } from '@/lib/ai-cost';

/**
 * Heartbeat token-spend for the browser voice session.
 *
 * Client calls this every 30s while a voice session is active. We deduct a
 * proportional slice of the per-minute voice rate via the existing
 * `spend_tokens` RPC (same path the mobile heartbeat uses).
 *
 * Returns:
 *   - { balance: number, ok: true }                — success
 *   - { ok: false, reason: 'out_of_tokens' }       — RPC returned -1
 *   - { error: ... }, non-2xx                      — system failure
 */
const HEARTBEAT_SECONDS = 30;
const TOKENS_PER_HEARTBEAT = Math.ceil(
  (AI_FEATURE_TOKENS_PER_MIN.voice * HEARTBEAT_SECONDS) / 60,
);

export async function POST() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: { code: 'no_auth' } }, { status: 401 });
  }

  const { data, error } = await supabase.rpc('spend_tokens', {
    p_user_id:     user.id,
    p_amount:      TOKENS_PER_HEARTBEAT,
    p_reason:      'ai_voice',
    p_feature_key: 'voice',
    p_metadata:    { seconds: HEARTBEAT_SECONDS, surface: 'web' },
  });
  if (error) {
    return NextResponse.json(
      { error: { code: 'rpc_failed', message: error.message } },
      { status: 502 },
    );
  }
  if (typeof data === 'number' && data === -1) {
    return NextResponse.json({ ok: false, reason: 'out_of_tokens' }, { status: 402 });
  }

  // Read fresh balance for the UI.
  const { data: credits } = await supabase
    .from('user_credits')
    .select('balance')
    .eq('user_id', user.id)
    .maybeSingle();

  return NextResponse.json({ ok: true, balance: credits?.balance ?? null });
}
