'use client';

import { useState, useTransition } from 'react';
import { toggleFollow } from '@/lib/travel-web';

export default function FollowButton({
  targetUserId,
  initialFollowing,
  isSelf,
}: {
  targetUserId: string;
  initialFollowing: boolean;
  isSelf: boolean;
}) {
  const [following, setFollowing] = useState(initialFollowing);
  const [isPending, startTransition] = useTransition();

  if (isSelf) return null;

  function onClick() {
    const next = !following;
    setFollowing(next);
    startTransition(async () => {
      const res = await toggleFollow(targetUserId);
      if (!res.ok) setFollowing(!next);
      else setFollowing(res.following);
    });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isPending}
      className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition ${
        following
          ? 'border-white/20 text-white/70 hover:text-white'
          : 'border-secondary text-secondary hover:bg-secondary hover:text-primary'
      }`}
    >
      {following ? 'Following' : 'Follow'}
    </button>
  );
}
