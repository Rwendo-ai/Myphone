'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { signInWithGoogle, signUpWithEmail } from '@/lib/auth-providers';
import { savePendingConsents } from '@/lib/pending-consents';
import { AuthCard } from '@/components/auth/AuthCard';
import { ProviderButton } from '@/components/auth/ProviderButton';

// /sign-up — web counterpart to app/(auth)/sign-up.tsx. Same contract:
// username + email + password (8+ / upper / lower / digit / special),
// two required consents + optional marketing, Google OAuth at top.
// On submit Supabase emails a 6-digit code and we route to /verify.
// Consents are stashed locally and recorded once a session exists
// (lib/pending-consents.ts) — more reliable than the mobile flow.

function PasswordRule({ met, text }: { met: boolean; text: string }) {
  return (
    <li className={`flex items-center gap-2 text-xs ${met ? 'text-white/80' : 'text-white/40'}`}>
      <span className={met ? 'text-success' : 'text-white/30'}>{met ? '✓' : '○'}</span>
      {text}
    </li>
  );
}

function ConsentCheckbox({
  checked,
  onChange,
  children,
  muted = false,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <span
        aria-hidden
        className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center text-xs font-bold shrink-0 transition ${
          checked ? 'bg-secondary border-secondary text-primary' : 'border-white/40 group-hover:border-white/60'
        }`}
      >
        {checked && '✓'}
      </span>
      <span className={`text-sm leading-snug ${muted ? 'text-white/55' : 'text-white/75'}`}>{children}</span>
    </label>
  );
}

export default function SignUpPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeLegal, setAgreeLegal] = useState(false);
  const [agreeInfoProtection, setAgreeInfoProtection] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const rules = useMemo(
    () => ({
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    }),
    [password],
  );
  const passwordValid = Object.values(rules).every(Boolean);
  const requiredConsents = agreeLegal && agreeInfoProtection;
  const canSubmit = !!email.trim() && !!username.trim() && passwordValid && requiredConsents && !busy;

  async function handleGoogle() {
    // OAuth users tick the boxes too — consent is not a password thing.
    if (!requiredConsents) {
      setError('Tick the two required boxes first, then continue with Google.');
      return;
    }
    setOauthLoading(true);
    setError(null);
    // Stash so /onboarding records them once the session exists.
    savePendingConsents({ legal: agreeLegal, infoProtection: agreeInfoProtection, marketing: agreeMarketing });
    const supabase = createSupabaseBrowser();
    const { error } = await signInWithGoogle(supabase);
    if (error) {
      setError(error.message);
      setOauthLoading(false);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setBusy(true);
    setError(null);
    const supabase = createSupabaseBrowser();
    const { error: signUpError } = await signUpWithEmail(supabase, email.trim(), password, username.trim());
    if (signUpError) {
      setError(signUpError.message);
      setBusy(false);
      return;
    }
    savePendingConsents({ legal: agreeLegal, infoProtection: agreeInfoProtection, marketing: agreeMarketing });
    // Supabase has emailed the 6-digit code (and a fallback link).
    router.push(`/verify?email=${encodeURIComponent(email.trim())}`);
  }

  return (
    <AuthCard title="Create your account" subtitle="One account across web, iOS, and Android">
      <ProviderButton onClick={handleGoogle} variant="primary" loading={oauthLoading}>
        Continue with Google
      </ProviderButton>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 border-t border-white/10" />
        <span className="text-white/40 text-xs uppercase tracking-wider">or</span>
        <div className="flex-1 border-t border-white/10" />
      </div>

      <form onSubmit={submit} className="space-y-3" noValidate>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="nickname"
          className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
          className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="new-password"
            className="w-full px-4 py-3 pr-16 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-sm hover:text-white transition"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {password.length > 0 && !passwordValid && (
          <ul className="space-y-1 px-1">
            <PasswordRule met={rules.length} text="At least 8 characters" />
            <PasswordRule met={rules.upper} text="An uppercase letter" />
            <PasswordRule met={rules.lower} text="A lowercase letter" />
            <PasswordRule met={rules.number} text="A number" />
            <PasswordRule met={rules.special} text="A special character" />
          </ul>
        )}

        <div className="space-y-3 pt-2">
          <ConsentCheckbox checked={agreeLegal} onChange={setAgreeLegal}>
            I agree to the{' '}
            <Link href="/terms" target="_blank" className="text-secondary font-semibold hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" target="_blank" className="text-secondary font-semibold hover:underline">
              Privacy Policy
            </Link>
            , confirm I'm 13 or older, and understand Rwen is an AI.
          </ConsentCheckbox>
          <ConsentCheckbox checked={agreeInfoProtection} onChange={setAgreeInfoProtection}>
            I understand my data will never be sold or shared with third parties.
          </ConsentCheckbox>
          <ConsentCheckbox checked={agreeMarketing} onChange={setAgreeMarketing} muted>
            I'd like product emails and promotional offers. (Optional)
          </ConsentCheckbox>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {busy ? 'Creating account…' : 'Create account'}
        </button>
        {!requiredConsents && (
          <p className="text-white/40 text-xs text-center">Tick the two required boxes to continue.</p>
        )}
        {error && <p className="text-error text-sm text-center" role="alert">{error}</p>}
      </form>

      <p className="text-white/60 text-sm text-center mt-6">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-secondary font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </AuthCard>
  );
}
