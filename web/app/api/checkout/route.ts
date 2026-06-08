import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getStripe, findTokenPack } from '@/lib/stripe';

// Creates a Stripe Checkout session for a token pack. On payment success
// Stripe sends a webhook to /api/stripe-webhook which calls grant_tokens
// on Supabase — the source of truth across mobile + web.
export async function POST(req: Request) {
  const { packId } = await req.json();
  const pack = findTokenPack(packId);
  if (!pack) {
    return NextResponse.json({ error: 'unknown_pack' }, { status: 400 });
  }

  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'no_auth' }, { status: 401 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

  const session = await getStripe().checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    customer_email: user.email ?? undefined,
    line_items: [{
      price_data: {
        currency: 'aud',
        product_data: {
          name: pack.label,
          description: pack.desc,
        },
        unit_amount: pack.priceAud * 100,
      },
      quantity: 1,
    }],
    metadata: {
      user_id: user.id,
      pack_id: pack.id,
      tokens:  String(pack.tokens),
    },
    success_url: `${appUrl}/chat?topped_up=1`,
    cancel_url:  `${appUrl}/cart`,
  });

  return NextResponse.json({ url: session.url });
}
