'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { signInWithEmail } from '@/lib/auth-providers';

// Email + password sign-in. On success we hard-navigate to /home so the
// new auth cookies propagate to the next request (App Router server
// components otherwise stay on the cached pre-auth render).
//
// Sign-UP lives on its own page (/sign-up) — it needs the consent
// checkboxes and password rules, so the old inline toggle is gone.
//
// Forgot-password is intentionally NOT shipped in this batch — see the
// agent report. Users who forget can sign in via Google.
export function EmailPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    setBusy(true);
    const supabase = createSupabaseBrowser();
    try {
      const { error: signInError } = await signInWithEmail(supabase, email, password);
      if (signInError) {
        setError(signInError.message);
        setBusy(false);
        return;
      }
      // Full nav so server components re-render with the auth cookie.
      window.location.assign('/home');
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Something went wrong.';
      setError(msg);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
        className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="current-password"
        className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
      />
      <button
        type="submit"
        disabled={busy}
        className="w-full py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-50"
      >
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
      {error && <p className="text-error text-sm text-center" role="alert">{error}</p>}
      <p className="text-center text-white/60 text-sm">
        Don't have an account?{' '}
        <Link href="/sign-up" className="text-secondary font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
