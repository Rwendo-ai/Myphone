import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { createSupabaseAdmin } from '@/lib/supabase-admin';

// Stripe webhook — runs server-side, verifies signature, then writes to
// Supabase using the service role. This is THE source-of-truth bridge
// between Stripe payments and the web-purchased products. RevenueCat
// writes to the same tables on the mobile side, so a token bought on web
// shows up in mobile (and a companion unlocked on mobile shows up on web).
//
// Dispatch by `kind` from the Checkout-session metadata:
//   • tokens           → grant_tokens RPC + XP
//   • companion_unlock → upsert user_companion_customizations (paid) + XP
//   • companion_build  → insert placeholder paid row + XP
//
// Idempotency: every grant path checks for an existing row tagged with
// session.id before writing. Stripe retries webhooks; we must not double-
// grant on retry.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature');
  if (!sig) return new NextResponse('No signature', { status: 400 });

  const rawBody = await req.text();
  let event: import('stripe').Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'sig verify failed';
    return new NextResponse(`Webhook Error: ${msg}`, { status: 400 });
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ ok: true, ignored: event.type });
  }

  const session = event.data.object as import('stripe').Stripe.Checkout.Session;
  const meta = session.metadata ?? {};
  const userId    = meta.user_id;
  const productId = meta.product_id ?? meta.pack_id;            // back-compat
  const kind      = (meta.kind as string | undefined) ?? 'tokens';
  const tokens    = parseInt(meta.tokens ?? '0', 10);
  const presetId  = meta.preset_id ?? '';
  const xpReward  = parseInt(meta.xp_reward ?? '0', 10);

  if (!userId || !productId) {
    console.error('[stripe-webhook] missing metadata', meta);
    return new NextResponse('missing metadata', { status: 400 });
  }

  const admin = createSupabaseAdmin();

  // Per-kind fulfilment. Each path is responsible for its own idempotency
  // check because the "what counts as a duplicate" key differs (token
  // ledger row vs companion row vs build row).
  try {
    if (kind === 'tokens') {
      if (tokens <= 0) return new NextResponse('bad tokens', { status: 400 });

      const { data: existing } = await admin
        .from('token_ledger')
        .select('id')
        .eq('user_id', userId)
        .filter('metadata->>stripe_session_id', 'eq', session.id)
        .maybeSingle();
      if (existing) {
        return NextResponse.json({ ok: true, idempotent: true, kind });
      }

      const { error: grantErr } = await admin.rpc('grant_tokens', {
        p_user_id:    userId,
        p_amount:     tokens,
        p_reason:     'pack_purchase',
        p_product_id: `stripe_${productId}`,
        p_metadata:   { stripe_session_id: session.id, source: 'web' },
      });
      if (grantErr) {
        console.error('[stripe-webhook] grant_tokens failed', grantErr.message);
        return new NextResponse('grant failed', { status: 500 });
      }

      await grantXp(admin, userId, xpReward, 'purchase_tokens', {
        stripe_session_id: session.id, source: 'web', product_id: productId,
      });
      return NextResponse.json({ ok: true, kind, granted: tokens, xp: xpReward });
    }

    if (kind === 'companion_unlock') {
      if (!presetId) return new NextResponse('missing preset_id', { status: 400 });

      // Idempotency — if a paid row already exists for this preset, skip.
      // We don't have a per-session column on user_companion_customizations,
      // so we treat "paid row for this preset exists" as the dedupe key.
      // Re-running the webhook is harmless then.
      const { data: existing } = await admin
        .from('user_companion_customizations')
        .select('user_id')
        .eq('user_id', userId)
        .eq('preset_id', presetId)
        .eq('is_paid', true)
        .maybeSingle();
      if (existing) {
        return NextResponse.json({ ok: true, idempotent: true, kind });
      }

      const { error: upsertErr } = await admin
        .from('user_companion_customizations')
        .upsert(
          {
            user_id:   userId,
            preset_id: presetId,
            is_paid:   true,
          },
          { onConflict: 'user_id,preset_id' },
        );
      if (upsertErr) {
        console.error('[stripe-webhook] unlock upsert failed', upsertErr.message);
        return new NextResponse('unlock failed', { status: 500 });
      }

      await grantXp(admin, userId, xpReward, 'purchase_companion_unlock', {
        stripe_session_id: session.id, source: 'web', preset_id: presetId,
      });
      return NextResponse.json({ ok: true, kind, preset: presetId, xp: xpReward });
    }

    if (kind === 'companion_build') {
      // v1: web build wizard isn't shipped — we insert a placeholder paid
      // row so the entitlement exists. The user will be able to claim it
      // by completing the wizard when it lands (the wizard finds an
      // unclaimed paid row and writes the build's identity into it).
      //
      // Idempotency: check xp_events for the matching session id since we
      // don't yet have a dedicated builds table on the web side.
      const { data: existing } = await admin
        .from('xp_events')
        .select('user_id')
        .eq('user_id', userId)
        .eq('event_type', 'purchase_companion_build')
        .filter('metadata->>stripe_session_id', 'eq', session.id)
        .maybeSingle();
      if (existing) {
        return NextResponse.json({ ok: true, idempotent: true, kind });
      }

      // Placeholder: drop a paid row with a synthetic preset id so the
      // user has a visible "build slot" in their roster until they
      // configure it. Using a unique preset id per build (build_v1_<sessId>)
      // avoids conflicting with their preset unlocks.
      const placeholderId = `build_v1_${session.id.slice(-8)}`;
      const { error: insertErr } = await admin
        .from('user_companion_customizations')
        .upsert(
          {
            user_id:   userId,
            preset_id: placeholderId,
            is_paid:   true,
          },
          { onConflict: 'user_id,preset_id' },
        );
      if (insertErr) {
        // Non-fatal — keep going so we still grant the XP and the user
        // isn't stuck. The build wizard can recover by reading
        // xp_events.
        console.error('[stripe-webhook] build placeholder failed', insertErr.message);
      }

      await grantXp(admin, userId, xpReward, 'purchase_companion_build', {
        stripe_session_id: session.id, source: 'web', product_id: productId,
      });
      return NextResponse.json({ ok: true, kind, xp: xpReward });
    }

    return NextResponse.json({ ok: true, ignored_kind: kind });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error('[stripe-webhook] dispatch error', msg);
    return new NextResponse('dispatch failed', { status: 500 });
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────────

async function grantXp(
  admin: ReturnType<typeof createSupabaseAdmin>,
  userId: string,
  amount: number,
  eventType: string,
  metadata: Record<string, unknown>,
) {
  if (amount <= 0) return;
  await admin.from('xp_events').insert({
    user_id:    userId,
    event_type: eventType,
    amount,
    metadata,
  });
  await admin.rpc('admin_bump_xp', { p_user_id: userId, p_amount: amount });
}
