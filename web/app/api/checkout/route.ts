import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getStripe } from '@/lib/stripe';
import { getWebProduct } from '@/lib/products-web';
import { priceAudToStripeCents, webPriceFor } from '@/lib/pricing-web';

// Creates a Stripe Checkout session for ANY web product (token pack,
// companion unlock, or companion build). On payment success Stripe sends a
// webhook to /api/stripe-webhook which dispatches by kind — token packs run
// grant_tokens, unlocks insert a paid user_companion_customizations row,
// build inserts a placeholder. All three grant XP. Supabase is the cross-
// platform source of truth (RC webhook on mobile writes the same tables).
//
// Backwards compat: the old shape `{ packId }` still works. Prefer the new
// `{ productId }` shape going forward.
export async function POST(req: Request) {
  const body = await req.json();
  const productId: string | undefined = body.productId ?? body.packId;
  if (!productId) {
    return NextResponse.json({ error: 'missing_product' }, { status: 400 });
  }

  const product = getWebProduct(productId);
  if (!product) {
    return NextResponse.json({ error: 'unknown_product' }, { status: 400 });
  }

  const price = webPriceFor(productId);
  if (!price) {
    return NextResponse.json({ error: 'unknown_product' }, { status: 400 });
  }

  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'no_auth' }, { status: 401 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

  // Different success URLs by kind so the post-purchase page can show the
  // right "you got X" message. The webhook is authoritative — these URLs
  // are just UX.
  const successPath =
    product.kind === 'tokens'           ? '/chat?topped_up=1' :
    product.kind === 'companion_unlock' ? `/chat?unlocked=${product.presetId}` :
    /* companion_build */                 '/profile?companion_built=1';

  const session = await getStripe().checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    customer_email: user.email ?? undefined,
    line_items: [{
      price_data: {
        currency: 'aud',
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: priceAudToStripeCents(price.aud),
      },
      quantity: 1,
    }],
    // Metadata is the bridge between Stripe and our webhook. Keep keys
    // stable — the webhook switches on `kind` to route the fulfilment.
    metadata: {
      user_id:    user.id,
      product_id: product.id,
      kind:       product.kind,
      tokens:     String(product.tokens ?? 0),
      preset_id:  product.presetId ?? '',
      xp_reward:  String(product.xpReward),
    },
    success_url: `${appUrl}${successPath}`,
    cancel_url:  `${appUrl}/cart`,
  });

  return NextResponse.json({ url: session.url });
}
