import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createSupabaseServer } from '@/lib/supabase-server';
import SignOutButton from '@/components/SignOutButton';
import StatCard from '@/components/profile/StatCard';
import ProfileSettings from '@/components/profile/ProfileSettings';
import OwnedCompanionsGrid from '@/components/profile/OwnedCompanionsGrid';
import DangerZone from '@/components/profile/DangerZone';

// Full web profile screen — mirrors the mobile (tabs)/profile.tsx in spirit
// but trimmed to what the web bundle actually needs:
//   • Header (display name + email + sign out)
//   • Stat cards (tokens · XP · 7-day streak)
//   • Inline editable settings (display name, languages, ability)
//   • Owned companions grid (free + paid)
//   • Recent XP feed (last 20 events)
//   • Account meta (email, linked providers)
//   • Danger zone (clear chat, delete account — both Coming soon for v1)
//
// All data fetching is server-side via createSupabaseServer. Client-side
// pieces (settings inputs, danger zone) are small islands.
export default async function ProfilePage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  // Compute "lessons completed in last 7 days" for the Streak card. We
  // count xp_events rows where event_type starts with 'lesson_' over the
  // last 7 days — close enough to the mobile streak heuristic without
  // pulling lesson_progress here.
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const [
    { data: profile },
    { data: credits },
    { data: recentXp },
    { data: ownedCompanions },
    { count: lessonsThisWeek },
  ] = await Promise.all([
    supabase
      .from('profiles')
      .select('display_name, xp, app_language, active_language_pack, ability_level')
      .eq('id', user.id)
      .maybeSingle(),
    supabase.from('user_credits').select('balance').eq('user_id', user.id).maybeSingle(),
    supabase
      .from('xp_events')
      .select('event_type, amount, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20),
    supabase
      .from('user_companion_customizations')
      .select('preset_id, is_paid')
      .eq('user_id', user.id),
    supabase
      .from('xp_events')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .like('event_type', 'lesson_%')
      .gte('created_at', sevenDaysAgo),
  ]);

  const identities = user.identities ?? [];
  const linkedProviders = identities.map((i) => i.provider).filter((p) => p !== 'email');

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/chat" className="text-white/70 hover:text-white">← Back to chat</Link>
          <SignOutButton />
        </div>

        <h1 className="text-3xl font-bold mb-1">{profile?.display_name ?? user.email}</h1>
        <p className="text-white/60 mb-8">{user.email}</p>

        {/* Stat row */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <StatCard
            label="Tokens"
            value={(credits?.balance ?? 0).toLocaleString()}
            href="/cart"
            hrefLabel="Top up"
          />
          <StatCard
            label="XP earned"
            value={(profile?.xp ?? 0).toLocaleString()}
            hint="Used for course unlocks and airdrop eligibility"
          />
          <StatCard
            label="Streak"
            value={`${lessonsThisWeek ?? 0}`}
            hint="Lessons in the last 7 days"
          />
        </div>

        {/* Settings */}
        <h2 className="text-xl font-semibold mb-3">Settings</h2>
        <div className="mb-8">
          <ProfileSettings
            userId={user.id}
            initial={{
              display_name: profile?.display_name ?? null,
              app_language: profile?.app_language ?? null,
              active_language_pack: profile?.active_language_pack ?? null,
              ability_level: profile?.ability_level ?? null,
            }}
          />
        </div>

        {/* Owned companions */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Your companions</h2>
          <Link href="/cart" className="text-secondary text-sm hover:underline">Unlock more →</Link>
        </div>
        <div className="mb-8">
          <OwnedCompanionsGrid owned={ownedCompanions ?? []} />
        </div>

        {/* Recent XP */}
        <h2 className="text-xl font-semibold mb-3">Recent XP</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-8">
          {(recentXp ?? []).length === 0 && (
            <div className="px-5 py-8 text-white/50 text-center">
              No XP events yet — chat with Rwen or complete a lesson to start.
            </div>
          )}
          {(recentXp ?? []).map((e, i) => (
            <div
              key={i}
              className="px-5 py-3 flex items-center justify-between border-b border-white/5 last:border-b-0"
            >
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

        {/* Account */}
        <h2 className="text-xl font-semibold mb-3">Account</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-8">
          <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
            <div className="text-white/80">Email</div>
            <div className="text-white/60">{user.email}</div>
          </div>
          <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
            <div className="text-white/80">Linked sign-in</div>
            <div className="text-white/60">
              {linkedProviders.length > 0 ? linkedProviders.join(' · ') : 'Email & password'}
            </div>
          </div>
          <Link href="/profile/change-password" className="px-5 py-3 flex items-center justify-between hover:bg-white/5 transition">
            <div className="text-white/80">Change password</div>
            <div className="text-white/40">→</div>
          </Link>
        </div>

        {/* Danger zone */}
        <h2 className="text-xl font-semibold mb-3">Danger zone</h2>
        <DangerZone />
      </div>
    </main>
  );
}
