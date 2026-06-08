import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getPost } from '@/lib/travel-web';
import PostCard from '@/components/travel/PostCard';
import CommentComposer from '@/components/travel/CommentComposer';
import { relativeTime } from '@/components/travel/relative-time';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ postId: string }>;
}

export default async function PostDetailPage({ params }: PageProps) {
  const { postId } = await params;

  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/sign-in');

  const data = await getPost(user.id, postId);
  if (!data) notFound();

  const { post, comments } = data;

  return (
    <main className="px-4 pt-8 pb-6 max-w-2xl mx-auto space-y-4">
      <Link href="/travel" className="text-sm text-white/60 hover:text-white">
        ← Back to travel
      </Link>

      <PostCard post={post} viewerId={user.id} />

      <section className="space-y-3">
        <h2 className="text-lg font-bold">
          {comments.length} {comments.length === 1 ? 'reply' : 'replies'}
        </h2>

        <CommentComposer postId={post.id} />

        {comments.map((c) => {
          const name = c.author?.display_name ?? 'Traveller';
          const initial = name.slice(0, 1).toUpperCase();
          return (
            <article
              key={c.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-3"
            >
              {c.author?.photo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.author.photo_url}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover bg-white/10 shrink-0"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white/80 shrink-0">
                  {initial}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm truncate">{name}</span>
                  <span className="text-xs text-white/40">{relativeTime(c.created_at)}</span>
                </div>
                <p className="text-sm text-white/90 mt-1 whitespace-pre-wrap break-words">
                  {c.body}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
