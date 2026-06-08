'use client';

import type { SupabaseClient } from '@supabase/supabase-js';

// Auth-provider helpers — one function per supported sign-in path. Each
// accepts the browser Supabase client so callers can construct it once
// and reuse. All functions return a `{ error }` shape that mirrors what
// supabase-js returns directly, so callers can render `error.message`
// inline without extra plumbing.
//
// Crypto wallet is intentionally NOT implemented in v1. We render a
// "coming soon" button on the UI side and `signInWithCryptoWallet`
// throws a sentinel error so the UI can show a friendly message
// without us shipping wagmi/web3 deps (heavy bundle).

export type AuthError = { message: string };

export type SignUpResult = {
  error: AuthError | null;
  needsOnboarding: boolean;
};

/** Web origin for OAuth/email-confirm redirects. Safe in SSR — falls back
 *  to '' (Supabase appends to its own URL when origin is blank). */
function siteOrigin(): string {
  if (typeof window === 'undefined') return '';
  return window.location.origin;
}

export async function signInWithEmail(
  supabase: SupabaseClient,
  email: string,
  password: string,
): Promise<{ error: AuthError | null }> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error: error ? { message: error.message } : null };
}

export async function signUpWithEmail(
  supabase: SupabaseClient,
  email: string,
  password: string,
  displayName: string,
): Promise<SignUpResult> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // displayName lands on user_metadata so the onboarding wizard can
      // pre-fill the username field. Final write into profiles.username
      // happens at onboarding-complete time.
      data: { display_name: displayName },
      emailRedirectTo: `${siteOrigin()}/auth/callback?next=/onboarding`,
    },
  });
  if (error) return { error: { message: error.message }, needsOnboarding: false };
  // If email confirmation is OFF in the Supabase project, a session is
  // returned immediately and we route to onboarding. If confirmation is
  // ON, session is null until the user clicks the email link — we still
  // signal needsOnboarding=true so the UI can show "check your email".
  const needsOnboarding = !!data.user;
  return { error: null, needsOnboarding };
}

export async function signInWithGoogle(
  supabase: SupabaseClient,
): Promise<{ error: AuthError | null }> {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${siteOrigin()}/auth/callback?next=/home` },
  });
  return { error: error ? { message: error.message } : null };
}

export async function signInWithApple(
  supabase: SupabaseClient,
): Promise<{ error: AuthError | null }> {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'apple',
    options: { redirectTo: `${siteOrigin()}/auth/callback?next=/home` },
  });
  return { error: error ? { message: error.message } : null };
}

/** Crypto wallet sign-in — stubbed for v1. SIWE flow lands in a follow-up
 *  (wagmi + a Supabase Edge Function that verifies the signature). The
 *  UI catches the sentinel string and shows a "coming soon" message. */
export async function signInWithCryptoWallet(
  _supabase: SupabaseClient,
): Promise<{ error: AuthError | null }> {
  throw new Error('coming_soon');
}
