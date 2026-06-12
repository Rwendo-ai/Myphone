'use client';

import { useState } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';

// "Danger zone" panel — clear chat + delete account, both live against
// the same backend paths the mobile app uses:
//   - conversations rows are RLS-deletable by their owner
//   - delete_user RPC (security definer) drops the auth user, which
//     cascade-deletes profiles / lesson_progress / conversations
export default function DangerZone() {
  const [busy, setBusy] = useState<null | 'clear' | 'delete'>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function clearHistory() {
    if (busy) return;
    const sure = window.confirm(
      'Permanently delete every text and voice turn? Your companion will forget everything you’ve told it. This cannot be undone.',
    );
    if (!sure) return;
    setBusy('clear');
    setNotice(null);
    const supabase = createSupabaseBrowser();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setBusy(null);
      return;
    }
    const { error } = await supabase.from('conversations').delete().eq('user_id', user.id);
    setBusy(null);
    setNotice(error ? `Couldn't clear history: ${error.message}` : 'Conversation history cleared.');
  }

  async function deleteAccount() {
    if (busy) return;
    const typed = window.prompt(
      'This permanently removes your account and ALL data (profile, progress, conversations) on every device. Type DELETE to confirm.',
    );
    if (typed !== 'DELETE') return;
    setBusy('delete');
    setNotice(null);
    const supabase = createSupabaseBrowser();
    const { error } = await supabase.rpc('delete_user');
    if (error) {
      setBusy(null);
      setNotice(`Couldn't delete the account: ${error.message}`);
      return;
    }
    await supabase.auth.signOut();
    window.location.assign('/');
  }

  return (
    <div className="border border-error/30 bg-error/5 rounded-2xl p-5">
      <div className="text-error font-semibold mb-3">Danger zone</div>
      <div className="grid gap-2">
        <button
          onClick={clearHistory}
          disabled={!!busy}
          className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10 disabled:opacity-50"
        >
          <div className="text-white text-sm font-medium">
            {busy === 'clear' ? 'Clearing…' : 'Clear conversation history'}
          </div>
          <div className="text-white/50 text-xs">
            Permanently delete every text and voice turn. The companion forgets everything.
          </div>
        </button>
        <button
          onClick={deleteAccount}
          disabled={!!busy}
          className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition border border-error/20 disabled:opacity-50"
        >
          <div className="text-error text-sm font-medium">
            {busy === 'delete' ? 'Deleting…' : 'Delete account'}
          </div>
          <div className="text-white/50 text-xs">Permanently remove your account and all data, on every device.</div>
        </button>
      </div>
      {notice && <p className="text-white/70 text-xs mt-3">{notice}</p>}
    </div>
  );
}
