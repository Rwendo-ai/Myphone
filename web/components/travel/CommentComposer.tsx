'use client';

import { useState, useTransition } from 'react';
import { createComment } from '@/lib/travel-web';

export default function CommentComposer({ postId }: { postId: string }) {
  const [body, setBody] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await createComment({ postId, body });
      if (res.ok) {
        setBody('');
      } else {
        setError(res.error);
      }
    });
  }

  return (
    <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        maxLength={500}
        rows={2}
        placeholder="Reply…"
        className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/30 resize-none"
      />
      {error && <p className="text-error text-sm">{error}</p>}
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/40">{body.length}/500</p>
        <button
          type="submit"
          disabled={isPending || !body.trim()}
          className="px-4 py-1.5 bg-secondary text-primary font-semibold rounded-full disabled:opacity-50 text-sm"
        >
          {isPending ? 'Posting…' : 'Reply'}
        </button>
      </div>
    </form>
  );
}
