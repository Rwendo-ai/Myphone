import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createSupabaseServer } from '@/lib/supabase-server';
import SignOutButton from '@/components/SignOutButton';

export default async function ProfilePage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const [{ data: profile }, { data: credits }, { data: recentXp }] = await Promise.all([
    supabase.from('profiles').select('display_name, xp').eq('id', user.id).maybeSingle(),
    supabase.from('user_credits').select('balance').eq('user_id', user.id).maybeSingle(),
    supabase.from('xp_events').select('event_type, amount, created_at').eq('user_id', user.id).order('created_at', { ascending: false }).limit(10),
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-[#0D2140] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/chat" className="text-white/70 hover:text-white">← Back to chat</Link>
          <SignOutButton />
        </div>

        <h1 className="text-3xl font-bold mb-1">{profile?.display_name ?? user.email}</h1>
        <p className="text-white/60 mb-8">{user.email}</p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-white/60 text-sm">Tokens</div>
            <div className="text-3xl font-bold mt-1">{(credits?.balance ?? 0).toLocaleString()}</div>
            <Link href="/cart" className="text-secondary text-sm hover:underline mt-2 inline-block">Top up →</Link>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-white/60 text-sm">XP earned</div>
            <div className="text-3xl font-bold mt-1">{(profile?.xp ?? 0).toLocaleString()}</div>
            <div className="text-white/40 text-xs mt-2">Used for course unlocks and airdrop eligibility</div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-3">Recent XP</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {(recentXp ?? []).length === 0 && (
            <div className="px-5 py-8 text-white/50 text-center">No XP events yet — chat with Rwen or complete a lesson to start.</div>
          )}
          {(recentXp ?? []).map((e, i) => (
            <div key={i} className="px-5 py-3 flex items-center justify-between border-b border-white/5 last:border-b-0">
              <div>
                <div className="font-medium">{e.event_type.replace(/_/g, ' ')}</div>
                <div className="text-white/40 text-xs">{new Date(e.created_at).toLocaleString()}</div>
              </div>
              <div className={`font-semibold ${e.amount >= 0 ? 'text-success' : 'text-error'}`}>
                {e.amount >= 0 ? '+' : ''}{e.amount} XP
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
