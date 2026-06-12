import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import SideNav from '@/components/nav/SideNav';

// Signed-in routes group. Wraps every page under /(app) with:
//   - Auth guard (redirects to /sign-in if no session)
//   - Side menu (persistent sidebar on desktop, top bar + drawer on mobile)
//   - Left padding on desktop / top padding on mobile so content clears the nav
export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-[#0D2140] text-white">
      <SideNav />
      <div className="pt-14 md:pt-0 md:pl-60">{children}</div>
    </div>
  );
}
