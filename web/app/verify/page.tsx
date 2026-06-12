'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { flushPendingConsents } from '@/lib/pending-consents';
import { AuthCard } from '@/components/auth/AuthCard';

// /verify — 6-digit OTP after sign-up, web counterpart to
// app/(auth)/verify-code.tsx. Supabase has emailed the code (the
// "Confirm signup" template renders {{ .Token }}). Six individual
// boxes with paste + auto-submit; the emailed confirmation link also
// works as a fallback (it lands on /auth/callback?next=/onboarding).
// On success we record any stashed consents, then hard-navigate so the
// auth cookies reach the server components.

const CODE_LENGTH = 6;
const RESEND_COOLDOWN_S = 60;

function VerifyForm() {
  const email = useSearchParams().get('email') ?? '';
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const code = digits.join('');

  async function verify(token: string) {
    if (!email || verifying) return;
    setVerifying(true);
    setError(null);
    const supabase = createSupabaseBrowser();
    const { error: verifyError } = await supabase.auth.verifyOtp({ email, token, type: 'signup' });
    if (verifyError) {
      setError("That code didn't match — check the latest email and try again.");
      setDigits(Array(CODE_LENGTH).fill(''));
      setVerifying(false);
      inputsRef.current[0]?.focus();
      return;
    }
    // Session exists now — record the consents stashed at sign-up.
    // Failures keep the stash; /onboarding flushes again as a retry.
    await flushPendingConsents(supabase);
    window.location.assign('/onboarding');
  }

  // Auto-submit the moment all six digits are in.
  useEffect(() => {
    if (code.length === CODE_LENGTH && !verifying) verify(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  function setDigit(index: number, value: string) {
    const clean = value.replace(/[^0-9]/g, '');
    if (!clean) {
      setDigits((d) => d.map((v, i) => (i === index ? '' : v)));
      return;
    }
    // Paste / autofill: distribute all digits starting at this box.
    setDigits((d) => {
      const next = [...d];
      for (let i = 0; i < clean.length && index + i < CODE_LENGTH; i++) next[index + i] = clean[i];
      return next;
    });
    const target = Math.min(index + clean.length, CODE_LENGTH - 1);
    inputsRef.current[target]?.focus();
  }

  function onKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  async function resend() {
    if (!email || cooldown > 0) return;
    setError(null);
    setInfo(null);
    const supabase = createSupabaseBrowser();
    const { error: resendError } = await supabase.auth.resend({ type: 'signup', email });
    if (resendError) {
      setError(resendError.message);
      return;
    }
    setInfo(`New code sent to ${email}.`);
    setCooldown(RESEND_COOLDOWN_S);
  }

  if (!email) {
    return (
      <p className="text-white/70 text-center">
        Missing email address.{' '}
        <Link href="/sign-up" className="text-secondary font-semibold hover:underline">
          Start over
        </Link>
      </p>
    );
  }

  return (
    <>
      <div className="flex justify-center gap-2 mb-6" role="group" aria-label="6-digit verification code">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => { inputsRef.current[i] = el; }}
            type="text"
            inputMode="numeric"
            autoComplete={i === 0 ? 'one-time-code' : 'off'}
            maxLength={CODE_LENGTH} // allow full paste into any box
            value={d}
            disabled={verifying}
            onChange={(e) => setDigit(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            aria-label={`Digit ${i + 1}`}
            className="w-11 h-14 text-center text-2xl font-bold bg-white/10 border border-white/15 rounded-xl text-white focus:outline-none focus:border-secondary disabled:opacity-50 tabular-nums"
          />
        ))}
      </div>

      <button
        onClick={() => verify(code)}
        disabled={code.length < CODE_LENGTH || verifying}
        className="w-full py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-40"
      >
        {verifying ? 'Verifying…' : 'Verify'}
      </button>

      {error && <p className="text-error text-sm text-center mt-4" role="alert">{error}</p>}
      {info && <p className="text-success text-sm text-center mt-4">{info}</p>}

      <p className="text-white/40 text-xs text-center mt-6">
        Can't find it? Check your spam folder — or use the confirmation link in the same email.
      </p>

      <button
        onClick={resend}
        disabled={cooldown > 0}
        className="w-full text-center text-secondary text-sm font-semibold mt-4 hover:underline disabled:text-white/40 disabled:no-underline"
      >
        {cooldown > 0 ? `Resend code in ${cooldown}s` : 'Resend code'}
      </button>

      <p className="text-white/50 text-sm text-center mt-6">
        Wrong email?{' '}
        <Link href="/sign-up" className="text-secondary font-semibold hover:underline">
          Sign up again
        </Link>
      </p>
    </>
  );
}

export default function VerifyPage() {
  return (
    <AuthCard title="Check your email" subtitle="We sent you a 6-digit code">
      <Suspense fallback={<p className="text-white/50 text-center">Loading…</p>}>
        <VerifyForm />
      </Suspense>
    </AuthCard>
  );
}
