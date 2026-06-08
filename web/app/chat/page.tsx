import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createSupabaseServer } from '@/lib/supabase-server';
import TokenBar from '@/components/TokenBar';
import ChatComposer from '@/components/ChatComposer';

export default async function ChatPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const { data: credits } = await supabase
    .from('user_credits')
    .select('balance')
    .eq('user_id', user.id)
    .maybeSingle();
  const balance = credits?.balance ?? 0;

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-primary to-[#0D2140]">
      <header className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div>
          <div className="font-bold text-lg">Rwen</div>
          <div className="text-xs text-white/60">AI companion</div>
        </div>
        <div className="flex items-center gap-3">
          <TokenBar balance={balance} />
          <Link href="/profile" className="text-white/70 hover:text-white text-sm">Profile</Link>
        </div>
      </header>
      <div className="flex-1 max-w-3xl w-full mx-auto">
        <ChatComposer userId={user.id} />
      </div>
    </main>
  );
}
