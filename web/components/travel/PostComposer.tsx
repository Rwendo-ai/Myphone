'use client';

import { useState, useTransition } from 'react';
import { createPost } from '@/lib/travel-web';
import { COUNTRIES } from './countries';

export default function PostComposer({ hasProfile }: { hasProfile: boolean }) {
  const [body, setBody]       = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity]       = useState('');
  const [error, setError]     = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  if (!hasProfile) {
    // No composer until profile exists — the empty-state CTA above leads here.
    return null;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await createPost({
        body,
        destination_country_code: country || undefined,
        destination_city: city || undefined,
      });
      if (res.ok) {
        setBody('');
        setCity('');
        setCountry('');
      } else {
        setError(humanError(res.error));
      }
    });
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3"
    >
      <h2 className="text-lg font-bold">Share an update</h2>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        maxLength={500}
        rows={3}
        placeholder="Where are you heading? Looking to meet anyone?"
        className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/30 resize-none"
      />
      <div className="grid grid-cols-[1fr_2fr] gap-2">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-black/30 border border-white/10 rounded-lg px-2 py-2 text-sm outline-none focus:border-white/30"
        >
          <option value="">Destination —</option>
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City (optional)"
          className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/30"
        />
      </div>

      {error && <p className="text-error text-sm">{error}</p>}

      <div className="flex items-center justify-between">
        <p className="text-xs text-white/40">{body.length}/500</p>
        <button
          type="submit"
          disabled={isPending || !body.trim()}
          className="px-4 py-2 bg-secondary text-primary font-semibold rounded-full disabled:opacity-50"
        >
          {isPending ? 'Posting…' : 'Post'}
        </button>
      </div>
    </form>
  );
}

function humanError(code: string): string {
  switch (code) {
    case 'body-required':     return 'Write something first.';
    case 'body-too-long':     return 'Post is too long (500 max).';
    case 'profile-required':  return 'Create a traveller profile above before posting.';
    case 'not-signed-in':     return 'Please sign in again to post.';
    default:                  return code;
  }
}
