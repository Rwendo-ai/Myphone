import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import TabBar from '@/components/nav/TabBar';

// Signed-in routes group. Wraps every page under /(app) with:
//   - Auth guard (redirects to /sign-in if no session)
//   - Bottom tab bar
//   - Bottom padding so content doesn't sit under the tab bar
export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-[#0D2140] text-white">
      <div className="pb-24">{children}</div>
      <TabBar />
    </div>
  );
}
