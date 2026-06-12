'use client';

import { useState } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { signInWithGoogle } from '@/lib/auth-providers';
import { AuthCard } from '@/components/auth/AuthCard';
import { ProviderButton } from '@/components/auth/ProviderButton';
import { EmailPasswordForm } from '@/components/auth/EmailPasswordForm';

// Sign-in / sign-up. Mirrors the mobile app's auth surface: OAuth bar at
// the top (Google live; Apple + crypto wallet land when the mobile app's
// OAUTH_READY flags flip), email + password below. Same Supabase
// accounts across web, iOS, and Android.
export default function SignInPage() {
  const [oauthLoading, setOauthLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGoogle() {
    setOauthLoading(true);
    setError(null);
    const supabase = createSupabaseBrowser();
    const { error } = await signInWithGoogle(supabase);
    if (error) {
      setError(error.message);
      setOauthLoading(false);
    }
    // On success the user is redirected to Google, then bounced back to /auth/callback.
  }

  return (
    <AuthCard title="Welcome" subtitle="Sign in or create your account">
      <ProviderButton onClick={handleGoogle} variant="primary" loading={oauthLoading}>
        Continue with Google
      </ProviderButton>
      {error && <p className="text-error mt-3 text-sm text-center" role="alert">{error}</p>}

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 border-t border-white/10" />
        <span className="text-white/40 text-xs uppercase tracking-wider">or</span>
        <div className="flex-1 border-t border-white/10" />
      </div>

      <EmailPasswordForm />

      <p className="text-white/40 text-xs text-center mt-8">
        Same account works across web, iOS, and Android.
      </p>
    </AuthCard>
  );
}
