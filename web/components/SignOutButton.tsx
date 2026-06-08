'use client';

import { useRouter } from 'next/navigation';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

export default function SignOutButton() {
  const router = useRouter();
  async function signOut() {
    const supabase = createSupabaseBrowser();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }
  return (
    <button
      onClick={signOut}
      className="text-white/70 hover:text-white text-sm border border-white/10 px-4 py-1.5 rounded-full"
    >
      Sign out
    </button>
  );
}
