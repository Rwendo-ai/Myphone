'use client';

import { useState } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signInWithGoogle() {
    setLoading(true);
    setError(null);
    const supabase = createSupabaseBrowser();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/chat`,
      },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    }
    // On success the user is redirected to Google, then bounced back to /auth/callback.
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-primary to-[#0D2140] px-6">
      <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h1 className="text-3xl font-bold mb-2 text-center">Welcome back</h1>
        <p className="text-white/60 text-center mb-8">Sign in to chat with your companion</p>
        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="w-full py-3 bg-white text-primary font-semibold rounded-full hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? 'Redirecting…' : 'Continue with Google'}
        </button>
        {error && <p className="text-error mt-4 text-sm text-center">{error}</p>}
        <p className="text-white/40 text-xs text-center mt-8">
          Same account works across web, iOS, and Android.
        </p>
      </div>
    </main>
  );
}
