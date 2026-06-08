import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import ChatShell from '@/components/companion/ChatShell';

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

  // ChatShell is a client component that wraps the existing TokenBar +
  // ChatComposer with the companion picker, profile sheet, and voice orb.
  // The server still fetches the initial balance + verifies auth here.
  return <ChatShell userId={user.id} initialBalance={balance} />;
}
