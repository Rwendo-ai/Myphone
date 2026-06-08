import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getMyTravellerProfile, getFeed } from '@/lib/travel-web';
import TravellerProfileCard from '@/components/travel/TravellerProfileCard';
import PostComposer from '@/components/travel/PostComposer';
import PostCard from '@/components/travel/PostCard';

export const dynamic = 'force-dynamic';

export default async function TravelPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const [profile, posts] = await Promise.all([
    getMyTravellerProfile(user.id),
    getFeed(user.id, 50),
  ]);

  const defaultName =
    user.email?.split('@')[0] ?? 'Traveller';

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto space-y-4">
      <header>
        <h1 className="text-3xl font-extrabold">Travel</h1>
        <p className="text-white/60 text-sm mt-1">
          Where you are, where you&apos;re going — and who&apos;s on the way.
        </p>
      </header>

      <TravellerProfileCard initial={profile} defaultName={defaultName} />

      <PostComposer hasProfile={!!profile} />

      <section className="space-y-3">
        <h2 className="text-lg font-bold pt-2">Recent posts</h2>
        {posts.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white/60">
            No posts yet. {profile
              ? 'Be the first to share where you’re heading.'
              : 'Create your traveller profile above to get started.'}
          </div>
        ) : (
          posts.map((p) => <PostCard key={p.id} post={p} viewerId={user.id} />)
        )}
      </section>
    </main>
  );
}
