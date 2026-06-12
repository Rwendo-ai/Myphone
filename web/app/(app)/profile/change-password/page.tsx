'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

// /profile/change-password — web counterpart to
// app/profile/change-password.tsx. Re-authenticates with the current
// password (signInWithPassword) before updateUser, so a stolen open
// session can't silently rotate the password. Same password policy as
// sign-up. Google-only accounts have no password — hint instead of fail.

const inputClass =
  'w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary';

export default function ChangePasswordPage() {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const nextValid = useMemo(
    () =>
      next.length >= 8 &&
      /[A-Z]/.test(next) &&
      /[a-z]/.test(next) &&
      /[0-9]/.test(next) &&
      /[^A-Za-z0-9]/.test(next),
    [next],
  );
  const canSubmit = current.length > 0 && nextValid && next === confirm && !busy;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setBusy(true);
    setError(null);
    const supabase = createSupabaseBrowser();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.email) {
      setError('No signed-in account found.');
      setBusy(false);
      return;
    }
    // Re-auth with the current password before allowing the change.
    const { error: reauthError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: current,
    });
    if (reauthError) {
      setError("Current password didn't match. If you signed up with Google, your account has no password to change.");
      setBusy(false);
      return;
    }
    const { error: updateError } = await supabase.auth.updateUser({ password: next });
    if (updateError) {
      setError(updateError.message);
      setBusy(false);
      return;
    }
    setDone(true);
    setBusy(false);
  }

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-md mx-auto">
        <Link href="/profile" className="text-white/70 hover:text-white text-sm">← Back to profile</Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">Change password</h1>
        <p className="text-white/60 mb-8">8+ characters with upper, lower, number, and special.</p>

        {done ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-success font-semibold mb-2">Password updated ✓</p>
            <p className="text-white/60 text-sm mb-6">Use the new password next time you sign in.</p>
            <Link href="/profile" className="inline-block px-6 py-2.5 bg-secondary text-primary font-semibold rounded-full hover:opacity-90 transition">
              Back to profile
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <input
              type="password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              placeholder="Current password"
              autoComplete="current-password"
              className={inputClass}
            />
            <input
              type="password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              placeholder="New password"
              autoComplete="new-password"
              className={inputClass}
            />
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm new password"
              autoComplete="new-password"
              className={inputClass}
            />
            {next.length > 0 && !nextValid && (
              <p className="text-white/40 text-xs">Needs 8+ characters, upper & lower case, a number, and a special character.</p>
            )}
            {confirm.length > 0 && next !== confirm && (
              <p className="text-warning text-xs">Passwords don't match yet.</p>
            )}
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-40"
            >
              {busy ? 'Updating…' : 'Update password'}
            </button>
            {error && <p className="text-error text-sm text-center" role="alert">{error}</p>}
          </form>
        )}
      </div>
    </main>
  );
}
