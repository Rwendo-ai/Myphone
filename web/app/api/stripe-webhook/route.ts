import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createSupabaseAdmin } from '@/lib/supabase-admin';

// Stripe webhook — runs server-side, verifies signature, then writes to
// Supabase using the service role. This is THE source-of-truth bridge
// between Stripe payments and the user_credits balance shared with the
// mobile app. The RevenueCat webhook on the mobile side calls the same
// grant_tokens RPC, so a token bought on web shows up in the mobile app
// (and vice versa) the next time useEntitlements refetches.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature');
  if (!sig) return new NextResponse('No signature', { status: 400 });

  const rawBody = await req.text();
  let event: import('stripe').Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'sig verify failed';
    return new NextResponse(`Webhook Error: ${msg}`, { status: 400 });
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ ok: true, ignored: event.type });
  }

  const session = event.data.object as import('stripe').Stripe.Checkout.Session;
  const meta = session.metadata ?? {};
  const userId = meta.user_id;
  const packId = meta.pack_id;
  const tokens = parseInt(meta.tokens ?? '0', 10);

  if (!userId || !packId || tokens <= 0) {
    console.error('[stripe-webhook] missing metadata', meta);
    return new NextResponse('missing metadata', { status: 400 });
  }

  // Idempotency — if this stripe event already granted tokens, skip.
  const admin = createSupabaseAdmin();
  const { data: existing } = await admin
    .from('token_ledger')
    .select('id')
    .eq('user_id', userId)
    .filter('metadata->>stripe_session_id', 'eq', session.id)
    .maybeSingle();
  if (existing) {
    return NextResponse.json({ ok: true, idempotent: true });
  }

  // Grant tokens — same RPC the RC webhook uses. The mobile app reads
  // user_credits.balance on focus, so this lands cross-platform.
  const { error: grantErr } = await admin.rpc('grant_tokens', {
    p_user_id:    userId,
    p_amount:     tokens,
    p_reason:     'pack_purchase',
    p_product_id: `stripe_${packId}`,
    p_metadata:   { stripe_session_id: session.id, source: 'web' },
  });
  if (grantErr) {
    console.error('[stripe-webhook] grant_tokens failed', grantErr.message);
    return new NextResponse('grant failed', { status: 500 });
  }

  // Grant XP — mirrors the mobile RC webhook's purchase-XP rules.
  // 100/600/1500 XP for the 10/50/100 dollar packs respectively.
  const xpReward = packId === 'tokens_10' ? 100 : packId === 'tokens_50' ? 600 : packId === 'tokens_100' ? 1500 : 0;
  if (xpReward > 0) {
    await admin.from('xp_events').insert({
      user_id:    userId,
      event_type: 'purchase_tokens',
      amount:     xpReward,
      metadata:   { stripe_session_id: session.id, source: 'web', pack_id: packId },
    });
    await admin.rpc('admin_bump_xp', { p_user_id: userId, p_amount: xpReward });
  }

  return NextResponse.json({ ok: true, granted: tokens, xp: xpReward });
}
