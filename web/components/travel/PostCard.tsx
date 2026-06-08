import Link from 'next/link';
import type { FeedPost } from '@/lib/travel-web';
import { relativeTime } from './relative-time';
import { countryFlag, countryName } from './countries';
import LikeButton from './LikeButton';
import FollowButton from './FollowButton';

export default function PostCard({
  post,
  viewerId,
}: {
  post: FeedPost;
  viewerId: string;
}) {
  const name = post.author?.display_name ?? 'Traveller';
  const initial = name.slice(0, 1).toUpperCase();
  const destFlag = countryFlag(post.destination_country_code);
  const destLabel = post.destination_city
    ? `${post.destination_city}, ${countryName(post.destination_country_code)}`.replace(/, $/, '')
    : countryName(post.destination_country_code);

  return (
    <article className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <header className="flex items-center gap-3">
        {post.author?.photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.author.photo_url}
            alt=""
            className="w-10 h-10 rounded-full object-cover bg-white/10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white/80">
            {initial}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold truncate">{name}</span>
            <FollowButton
              targetUserId={post.author_id}
              initialFollowing={post.viewer_follows_author}
              isSelf={post.author_id === viewerId}
            />
          </div>
          <div className="text-xs text-white/50">
            {relativeTime(post.created_at)}
            {post.author?.current_country_code && (
              <>
                {' · '}
                {countryFlag(post.author.current_country_code)}{' '}
                {post.author.current_city || countryName(post.author.current_country_code)}
              </>
            )}
          </div>
        </div>
      </header>

      <Link href={`/travel/${post.id}`} className="block mt-3">
        <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">{post.body}</p>

        {destLabel && (
          <p className="text-sm text-secondary mt-3">
            {destFlag} Heading to {destLabel}
          </p>
        )}
      </Link>

      <footer className="flex items-center gap-4 mt-4 pt-3 border-t border-white/5">
        <LikeButton
          postId={post.id}
          initialLiked={post.viewer_liked}
          initialCount={post.like_count}
        />
        <Link
          href={`/travel/${post.id}`}
          className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition"
        >
          <span aria-hidden>💬</span>
          <span>{post.comment_count}</span>
        </Link>
      </footer>
    </article>
  );
}
