'use client';

import { useState } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import {
  signInWithEmail,
  signUpWithEmail,
} from '@/lib/auth-providers';

// Email + password form with sign-in/sign-up toggle. On successful
// sign-in we hard-navigate to /home so the new auth cookies propagate
// to the next request (App Router server components otherwise stay on
// the cached pre-auth render). On successful sign-up we route to
// /onboarding.
//
// Forgot-password is intentionally NOT shipped in this batch — see the
// agent report. Users who forget can sign in via Google.
export function EmailPasswordForm() {
  const [mode, setMode] = useState<'sign_in' | 'sign_up'>('sign_in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (mode === 'sign_up' && !displayName.trim()) {
      setError('Pick a display name so your companion knows what to call you.');
      return;
    }
    setBusy(true);
    const supabase = createSupabaseBrowser();
    try {
      if (mode === 'sign_in') {
        const { error: signInError } = await signInWithEmail(supabase, email, password);
        if (signInError) {
          setError(signInError.message);
          setBusy(false);
          return;
        }
        // Full nav so server components re-render with the auth cookie.
        window.location.assign('/home');
      } else {
        const { error: signUpError, needsOnboarding } = await signUpWithEmail(
          supabase,
          email,
          password,
          displayName.trim(),
        );
        if (signUpError) {
          setError(signUpError.message);
          setBusy(false);
          return;
        }
        if (needsOnboarding) {
          window.location.assign('/onboarding');
        } else {
          // Email confirmation enabled on the Supabase project — show
          // a friendly prompt rather than silently appearing to fail.
          setInfo('Check your email for a confirmation link to finish setting up your account.');
          setBusy(false);
        }
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Something went wrong.';
      setError(msg);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      {mode === 'sign_up' && (
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display name"
          autoComplete="nickname"
          className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
        />
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete={mode === 'sign_in' ? 'email' : 'email'}
        className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete={mode === 'sign_in' ? 'current-password' : 'new-password'}
        className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
      />
      <button
        type="submit"
        disabled={busy}
        className="w-full py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-50"
      >
        {busy ? 'Working…' : mode === 'sign_in' ? 'Sign in' : 'Create account'}
      </button>
      {error && <p className="text-error text-sm text-center" role="alert">{error}</p>}
      {info && <p className="text-success text-sm text-center">{info}</p>}
      <button
        type="button"
        onClick={() => {
          setMode(mode === 'sign_in' ? 'sign_up' : 'sign_in');
          setError(null);
          setInfo(null);
        }}
        className="w-full text-center text-white/60 text-sm hover:text-white transition"
      >
        {mode === 'sign_in'
          ? "Don't have an account? Sign up"
          : 'Already have an account? Sign in'}
      </button>
    </form>
  );
}
