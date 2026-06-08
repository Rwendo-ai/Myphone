import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createSupabaseServer } from '@/lib/supabase-server';
import { TOKEN_PACKS } from '@/lib/stripe';
import CheckoutButton from '@/components/CheckoutButton';

export default async function CartPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const { data: credits } = await supabase
    .from('user_credits')
    .select('balance')
    .eq('user_id', user.id)
    .maybeSingle();

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-[#0D2140] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/chat" className="text-white/70 hover:text-white">← Back to chat</Link>
          <div className="text-white/60 text-sm">Current balance: <span className="text-white font-semibold">{(credits?.balance ?? 0).toLocaleString()}</span></div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Add tokens</h1>
        <p className="text-white/60 mb-8">Tokens pay for AI chat — text and voice. They never expire.</p>

        <div className="grid gap-4">
          {TOKEN_PACKS.map((pack) => (
            <div key={pack.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <div className="text-xl font-bold">{pack.label}</div>
                <div className="text-white/60 text-sm">{pack.desc}</div>
              </div>
              <CheckoutButton packId={pack.id} priceAud={pack.priceAud} />
            </div>
          ))}
        </div>

        <p className="text-white/40 text-xs mt-8 text-center">
          Payments processed by Stripe. Mobile users pay via the App Store or Google Play; web users pay here. Either way, tokens land in the same account.
        </p>
      </div>
    </main>
  );
}
