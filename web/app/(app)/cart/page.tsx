import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createSupabaseServer } from '@/lib/supabase-server';
import {
  getTokenPacksWeb,
  getCompanionUnlocksWeb,
  getCompanionBuildWeb,
} from '@/lib/products-web';
import TokenPackCard from '@/components/cart/TokenPackCard';
import CompanionUnlockCard from '@/components/cart/CompanionUnlockCard';
import CompanionBuildCard from '@/components/cart/CompanionBuildCard';

// Full web cart — three product sections matching mobile cart.tsx:
//   1. Add tokens (3 packs)
//   2. Unlock a companion (7 presets, owned ones disabled)
//   3. Build a custom companion ($39.99 one-time)
//
// Each card POSTs to /api/checkout with productId, which builds a Stripe
// Checkout session. The webhook is the source of truth — it grants tokens
// / inserts the customization row / awards XP based on `kind` metadata.
//
// We don't render subscription tiers here yet — Stripe Subscriptions wiring
// lands in a follow-up. For v1 the only paid surface is one-time purchases.
export default async function CartPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const [{ data: credits }, { data: profile }, { data: ownedRows }] = await Promise.all([
    supabase.from('user_credits').select('balance').eq('user_id', user.id).maybeSingle(),
    supabase.from('profiles').select('xp').eq('id', user.id).maybeSingle(),
    supabase
      .from('user_companion_customizations')
      .select('preset_id, is_paid')
      .eq('user_id', user.id),
  ]);

  const ownedPresetIds = new Set((ownedRows ?? []).map((r) => r.preset_id));

  const tokenPacks       = getTokenPacksWeb();
  const companionUnlocks = getCompanionUnlocksWeb();
  const companionBuild   = getCompanionBuildWeb();

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8 gap-4">
          <Link href="/chat" className="text-white/70 hover:text-white">← Back to chat</Link>
          <div className="flex items-center gap-3 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <span className="text-white/60">Tokens</span>{' '}
              <span className="text-white font-semibold">{(credits?.balance ?? 0).toLocaleString()}</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <span className="text-white/60">XP</span>{' '}
              <span className="text-white font-semibold">{(profile?.xp ?? 0).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Shop</h1>
        <p className="text-white/60 mb-8">
          One balance across mobile and web. Tokens, companions, and a custom build — all live in the same account.
        </p>

        {/* Tokens */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Add tokens</h2>
          <p className="text-white/60 text-sm mb-4">
            Tokens pay for AI chat — text and voice. They never expire.
          </p>
          <div className="grid gap-4">
            {tokenPacks.map((p) => (
              <TokenPackCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Companion unlocks */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Unlock a companion</h2>
          <p className="text-white/60 text-sm mb-4">
            Rwen + your first chosen companion are free. Any additional companion is A$4.99 one-time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {companionUnlocks.map((p) => (
              <CompanionUnlockCard
                key={p.id}
                product={p}
                owned={p.presetId ? ownedPresetIds.has(p.presetId) : false}
              />
            ))}
          </div>
        </section>

        {/* Companion build */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Build a custom companion</h2>
          <p className="text-white/60 text-sm mb-4">
            Want one that's truly yours? Design a companion from scratch — personality, voice, look.
          </p>
          <CompanionBuildCard product={companionBuild} />
        </section>

        <p className="text-white/40 text-xs mt-8 text-center">
          Payments processed by Stripe. Mobile users pay via the App Store or Google Play; web users pay here. Either way, your tokens and companions land in the same account.
        </p>
      </div>
    </main>
  );
}
