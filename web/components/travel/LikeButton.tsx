'use client';

import { useState, useTransition } from 'react';
import { togglePostLike } from '@/lib/travel-web';

export default function LikeButton({
  postId,
  initialLiked,
  initialCount,
}: {
  postId: string;
  initialLiked: boolean;
  initialCount: number;
}) {
  // Optimistic local state — we update immediately and reconcile if the server
  // disagrees. Cheap because the operation is idempotent at our level.
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);
  const [isPending, startTransition] = useTransition();

  function onClick() {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setCount((c) => c + (nextLiked ? 1 : -1));

    startTransition(async () => {
      const res = await togglePostLike(postId);
      if (!res.ok) {
        // Revert.
        setLiked(!nextLiked);
        setCount((c) => c + (nextLiked ? -1 : 1));
      } else if (res.liked !== nextLiked) {
        // Server settled on a different state — reconcile.
        setLiked(res.liked);
        setCount(initialCount + (res.liked ? 1 : 0) - (initialLiked ? 1 : 0));
      }
    });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isPending}
      className={`inline-flex items-center gap-1 text-sm transition ${
        liked ? 'text-secondary' : 'text-white/60 hover:text-white'
      }`}
      aria-pressed={liked}
      aria-label={liked ? 'Unlike post' : 'Like post'}
    >
      <span aria-hidden>{liked ? '♥' : '♡'}</span>
      <span>{count}</span>
    </button>
  );
}
