import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';

// Marketing landing. Signed-in users skip straight to /chat.
export default async function HomePage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect('/chat');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-primary to-[#0D2140]">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Rwendo</h1>
      <p className="text-xl md:text-2xl text-white/80 mb-2">Your AI companion for talking, learning, and growing.</p>
      <p className="text-white/60 mb-10 max-w-xl">
        Voice and text chat with companions that remember you. Learn languages,
        navigate hard moments, and grow at your own pace.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/sign-in"
          className="px-8 py-3 bg-secondary text-primary font-semibold rounded-full hover:opacity-90 transition"
        >
          Get started
        </Link>
        <a
          href="https://play.google.com/store/apps/details?id=app.rwendo.rwendo"
          className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition"
        >
          Get the app
        </a>
      </div>
    </main>
  );
}
