'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

// /profile/export — GDPR/CCPA data export, web counterpart to
// app/profile/export.tsx. Web does it properly: a real .json file
// download, and the bundle includes dictionary + XP events the mobile
// export doesn't yet cover. Everything is RLS-scoped to the signed-in
// user, fetched client-side.

type Counts = { lessons: number; conversations: number; dictionary: number; xpEvents: number };

async function fetchExport() {
  const supabase = createSupabaseBrowser();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const [profileRes, lessonsRes, convRes, dictRes, xpRes] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase.from('lesson_progress').select('*').eq('user_id', user.id),
    supabase.from('conversations').select('*').eq('user_id', user.id).order('created_at', { ascending: true }),
    supabase.from('user_dictionary').select('*').eq('user_id', user.id),
    supabase.from('xp_events').select('*').eq('user_id', user.id).order('created_at', { ascending: true }),
  ]);

  return {
    exportedAt: new Date().toISOString(),
    account: { userId: user.id, email: user.email, createdAt: user.created_at },
    profile: profileRes.data ?? null,
    lessonProgress: lessonsRes.data ?? [],
    conversations: convRes.data ?? [],
    dictionary: dictRes.data ?? [],
    xpEvents: xpRes.data ?? [],
  };
}

export default function ExportPage() {
  const [busy, setBusy] = useState(false);
  const [counts, setCounts] = useState<Counts | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function preview() {
    setBusy(true);
    setError(null);
    try {
      const data = await fetchExport();
      if (!data) throw new Error('Not signed in.');
      setCounts({
        lessons: data.lessonProgress.length,
        conversations: data.conversations.length,
        dictionary: data.dictionary.length,
        xpEvents: data.xpEvents.length,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load your data.');
    } finally {
      setBusy(false);
    }
  }

  async function download() {
    setBusy(true);
    setError(null);
    try {
      const data = await fetchExport();
      if (!data) throw new Error('Not signed in.');
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rwendo-export-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Export failed.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-md mx-auto">
        <Link href="/profile" className="text-white/70 hover:text-white text-sm">← Back to profile</Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">Export my data</h1>
        <p className="text-white/60 mb-8">
          Everything Rwendo stores about you — profile, lesson progress, conversations, dictionary,
          and XP history — as a single JSON file. Yours to keep.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
          {counts && (
            <ul className="text-sm text-white/70 space-y-1 mb-2">
              <li>📚 {counts.lessons} lesson records</li>
              <li>💬 {counts.conversations} conversation turns</li>
              <li>📖 {counts.dictionary} dictionary words</li>
              <li>⭐ {counts.xpEvents} XP events</li>
            </ul>
          )}
          <button
            onClick={preview}
            disabled={busy}
            className="w-full py-3 border border-white/15 text-white/80 rounded-full hover:bg-white/5 transition disabled:opacity-50"
          >
            {busy && !counts ? 'Checking…' : 'Preview what’s included'}
          </button>
          <button
            onClick={download}
            disabled={busy}
            className="w-full py-3 bg-secondary text-primary font-bold rounded-full hover:opacity-90 transition disabled:opacity-50"
          >
            {busy ? 'Preparing…' : 'Download JSON'}
          </button>
          {error && <p className="text-error text-sm text-center" role="alert">{error}</p>}
        </div>
      </div>
    </main>
  );
}
