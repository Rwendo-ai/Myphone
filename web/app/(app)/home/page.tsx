import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getDashboardData, packLabel } from '@/lib/home-web';
import GreetingCard from '@/components/home/GreetingCard';
import ContinueLearningCard from '@/components/home/ContinueLearningCard';
import RecentChatCard from '@/components/home/RecentChatCard';
import StreakCard from '@/components/home/StreakCard';
import TravelTeaserCard from '@/components/home/TravelTeaserCard';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const data = await getDashboardData(user.id, user.email ?? null);

  const displayName =
    data.profile?.username?.trim() ||
    user.email?.split('@')[0] ||
    'Traveller';

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto space-y-4">
      <GreetingCard
        displayName={displayName}
        xp={data.profile?.xp ?? 0}
        credits={data.credits}
      />
      <ContinueLearningCard packLabel={packLabel(data.profile?.active_language_pack_id)} />
      <RecentChatCard messages={data.recentConversations} />
      <StreakCard lessonsToday={data.todayLessonsCompleted} xpToday={data.totalXpToday} />
      <TravelTeaserCard
        currentCity={data.profile?.current_city ?? null}
        currentCountryCode={data.profile?.current_country_code ?? null}
      />
    </main>
  );
}
