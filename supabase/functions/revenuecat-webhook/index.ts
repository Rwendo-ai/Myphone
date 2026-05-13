// RevenueCat webhook handler.
//
// Receives purchase / renewal / cancellation events from RevenueCat and
// updates the local mirror tables:
//   - user_entitlements (per-user → per-entitlement, with expires_at)
//   - user_credits      (token balance, via grant_tokens RPC)
//   - ai_credit_transactions (audit log, written by grant_tokens)
//
// Events handled:
//   INITIAL_PURCHASE / RENEWAL / TRANSFER on tier_* product → upsert entitlement
//                                                              + grant monthly
//                                                              token allowance
//   INITIAL_PURCHASE / NON_RENEWING_PURCHASE on token pack  → grant tokens
//   CANCELLATION / EXPIRATION on tier_* product             → expire entitlement
//
// Auth: RevenueCat sends a Bearer token configured in the RC dashboard.
// We compare to REVENUECAT_WEBHOOK_SECRET in env. If the secret isn't set,
// the function 503s — fail-closed.
//
// Idempotency: events are deduplicated via the revenuecat_webhook_events
// table (primary key event_id). Reprocessing the same event is a no-op.
//
// Deploy:
//   supabase functions deploy revenuecat-webhook
// Set secrets:
//   supabase secrets set REVENUECAT_WEBHOOK_SECRET=<choose-a-strong-string>
//   (and also configure that same string in the RC dashboard webhook auth)

import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface RcEventEnvelope {
  api_version?: string;
  event: RcEvent;
}

interface RcEvent {
  type: string;                      // 'INITIAL_PURCHASE' | 'RENEWAL' | 'CANCELLATION' | 'EXPIRATION' | 'NON_RENEWING_PURCHASE' | ...
  id: string;                        // unique per event — use for idempotency
  app_user_id: string;               // we set this to Supabase user.id when calling RC
  product_id: string;                // Apple/Google store product ID (matches storeId in data/products.ts)
  store: string;                     // 'APP_STORE' | 'PLAY_STORE' | ...
  environment: string;               // 'SANDBOX' | 'PRODUCTION'
  expiration_at_ms?: number;
  purchased_at_ms: number;
  currency?: string;
  price?: number;                    // local currency price
  entitlement_ids?: string[];        // entitlement IDs RC has computed for this purchase
}

// ─── Product → handler config (must stay in sync with data/products.ts) ────
//
// Token packs: tokens granted on purchase. Subscription tiers: entitlement
// id granted, and how many tokens come with each month's allowance.
const TOKEN_PACK_GRANTS: Record<string, number> = {
  rwendo_tokens_10_v1:  1000,
  rwendo_tokens_50_v1:  5500,
  rwendo_tokens_100_v1: 12000,
};

const TIER_PRODUCT_TO_ENTITLEMENT: Record<string, { entitlement: string; monthlyTokens: number }> = {
  rwendo_text_monthly_v1:         { entitlement: 'tier_text',         monthlyTokens: 200 },
  rwendo_voice_monthly_v1:        { entitlement: 'tier_voice',        monthlyTokens: 200 },
  rwendo_lipsync_low_monthly_v1:  { entitlement: 'tier_lipsync_low',  monthlyTokens: 300 },
  rwendo_lipsync_high_monthly_v1: { entitlement: 'tier_lipsync_high', monthlyTokens: 1000 },
  rwendo_ultra_monthly_v1:        { entitlement: 'tier_ultra',        monthlyTokens: 1500 },
  rwendo_lipsync_high_yearly_v1:  { entitlement: 'tier_lipsync_high', monthlyTokens: 1000 },
  rwendo_ultra_yearly_v1:         { entitlement: 'tier_ultra',        monthlyTokens: 1500 },
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  // ─── Auth ─────────────────────────────────────────────────────────────
  const expectedSecret = Deno.env.get('REVENUECAT_WEBHOOK_SECRET');
  if (!expectedSecret) {
    // Fail closed if the secret isn't configured. The function is live
    // but no events will be accepted until the secret is set.
    return json({ error: 'webhook secret not configured' }, 503);
  }
  const auth = req.headers.get('authorization') ?? '';
  const presented = auth.startsWith('Bearer ') ? auth.slice(7) : auth;
  if (presented !== expectedSecret) {
    return json({ error: 'unauthorized' }, 401);
  }

  // ─── Parse ────────────────────────────────────────────────────────────
  let envelope: RcEventEnvelope;
  try {
    envelope = await req.json();
  } catch {
    return json({ error: 'invalid json' }, 400);
  }
  const event = envelope?.event;
  if (!event?.id || !event.type || !event.app_user_id) {
    return json({ error: 'missing required event fields' }, 400);
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    { auth: { persistSession: false } },
  );

  // ─── Idempotency ──────────────────────────────────────────────────────
  // Try to record the event. If insert conflicts on event_id, we've
  // already processed it — return 200 quickly so RC stops retrying.
  const { error: insertErr } = await supabase
    .from('revenuecat_webhook_events')
    .insert({
      event_id:   event.id,
      event_type: event.type,
      user_id:    isUuid(event.app_user_id) ? event.app_user_id : null,
      product_id: event.product_id ?? null,
      raw:        event,
    });

  if (insertErr && insertErr.code === '23505') {
    // Duplicate — already processed.
    return json({ ok: true, deduped: true });
  }
  if (insertErr) {
    return json({ error: 'idempotency log insert failed', detail: insertErr.message }, 500);
  }

  // ─── Route ────────────────────────────────────────────────────────────
  if (!isUuid(event.app_user_id)) {
    // RC sometimes sends anonymous IDs ('$RCAnonymousID:...') before login.
    // We record the event for diagnostics but cannot apply it.
    return json({ ok: true, skipped: 'anonymous app_user_id' });
  }
  const userId = event.app_user_id;
  const productId = event.product_id;

  try {
    if (event.type === 'INITIAL_PURCHASE' || event.type === 'NON_RENEWING_PURCHASE') {
      if (productId && TOKEN_PACK_GRANTS[productId] !== undefined) {
        await grantTokenPack(supabase, userId, productId, TOKEN_PACK_GRANTS[productId]);
        return json({ ok: true, action: 'token_pack_granted' });
      }
      if (productId && TIER_PRODUCT_TO_ENTITLEMENT[productId]) {
        const cfg = TIER_PRODUCT_TO_ENTITLEMENT[productId];
        await upsertEntitlement(supabase, userId, cfg.entitlement, event.expiration_at_ms);
        // Grant the first month's tokens. Renewals re-grant via the
        // RENEWAL event handler below.
        await grantMonthlyAllowance(supabase, userId, productId, cfg.monthlyTokens);
        return json({ ok: true, action: 'tier_purchased' });
      }
    }

    if (event.type === 'RENEWAL') {
      if (productId && TIER_PRODUCT_TO_ENTITLEMENT[productId]) {
        const cfg = TIER_PRODUCT_TO_ENTITLEMENT[productId];
        await upsertEntitlement(supabase, userId, cfg.entitlement, event.expiration_at_ms);
        await grantMonthlyAllowance(supabase, userId, productId, cfg.monthlyTokens);
        return json({ ok: true, action: 'tier_renewed' });
      }
    }

    if (event.type === 'TRANSFER') {
      // RC notifies that an entitlement moved from one user_id to another.
      // For simplicity, we re-apply the entitlement to the current
      // app_user_id and let RC handle removal from the previous user.
      if (productId && TIER_PRODUCT_TO_ENTITLEMENT[productId]) {
        const cfg = TIER_PRODUCT_TO_ENTITLEMENT[productId];
        await upsertEntitlement(supabase, userId, cfg.entitlement, event.expiration_at_ms);
        return json({ ok: true, action: 'tier_transferred' });
      }
    }

    if (event.type === 'CANCELLATION' || event.type === 'EXPIRATION') {
      if (productId && TIER_PRODUCT_TO_ENTITLEMENT[productId]) {
        const cfg = TIER_PRODUCT_TO_ENTITLEMENT[productId];
        // Mark expired immediately on cancellation; for expiration the
        // expiration_at_ms is already in the past. Either way we set
        // expires_at to now() so useEntitlements ignores it.
        await expireEntitlement(supabase, userId, cfg.entitlement);
        return json({ ok: true, action: 'tier_expired' });
      }
    }

    // Any other event type (PRODUCT_CHANGE, BILLING_ISSUE, etc.) is
    // acknowledged but not acted on yet. Record-only via the
    // idempotency log above.
    return json({ ok: true, action: 'noop', type: event.type });
  } catch (e: any) {
    return json({ error: 'handler failed', detail: e?.message ?? String(e) }, 500);
  }
});

// ─── Helpers ────────────────────────────────────────────────────────────

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function isUuid(s: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
}

async function grantTokenPack(
  // deno-lint-ignore no-explicit-any
  supabase: any,
  userId: string,
  productId: string,
  tokens: number,
) {
  const { data, error } = await supabase.rpc('grant_tokens', {
    p_user_id:    userId,
    p_amount:     tokens,
    p_reason:     'pack_purchase',
    p_product_id: productId,
    p_metadata:   {},
  });
  if (error) throw new Error(`grant_tokens failed: ${error.message}`);
  return data;
}

async function grantMonthlyAllowance(
  // deno-lint-ignore no-explicit-any
  supabase: any,
  userId: string,
  productId: string,
  tokens: number,
) {
  if (tokens <= 0) return;
  const { error } = await supabase.rpc('grant_tokens', {
    p_user_id:    userId,
    p_amount:     tokens,
    p_reason:     'monthly_allowance',
    p_product_id: productId,
    p_metadata:   {},
  });
  if (error) throw new Error(`grant_tokens (monthly) failed: ${error.message}`);
}

async function upsertEntitlement(
  // deno-lint-ignore no-explicit-any
  supabase: any,
  userId: string,
  entitlement: string,
  expirationAtMs?: number,
) {
  const expires_at = expirationAtMs ? new Date(expirationAtMs).toISOString() : null;
  const { error } = await supabase
    .from('user_entitlements')
    .upsert({
      user_id:    userId,
      entitlement,
      expires_at,
      source:     'revenuecat',
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,entitlement' });
  if (error) throw new Error(`upsert entitlement failed: ${error.message}`);
}

async function expireEntitlement(
  // deno-lint-ignore no-explicit-any
  supabase: any,
  userId: string,
  entitlement: string,
) {
  const { error } = await supabase
    .from('user_entitlements')
    .update({ expires_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq('user_id', userId)
    .eq('entitlement', entitlement);
  if (error) throw new Error(`expire entitlement failed: ${error.message}`);
}
