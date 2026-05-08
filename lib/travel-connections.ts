/**
 * Travel Connections API client.
 *
 * Wraps the three Supabase tables (traveller_profiles, traveller_match_prefs,
 * traveller_posts) with TS-friendly types and small ergonomic helpers. All
 * mutating calls assume an authenticated user; supabase RLS enforces
 * ownership at the database level.
 */

import { supabase } from './supabase';

export interface TravellerProfile {
  user_id: string;
  display_name: string;
  /** Unique @handle for follow/mention. 3-20 chars, [A-Za-z0-9_]. */
  handle: string | null;
  age: number | null;
  gender: 'female' | 'male' | 'nonbinary' | 'prefer_not_to_say' | null;
  bio: string | null;
  photo_url: string | null;
  languages_speaking: string[];
  languages_learning: string[];
  current_country_code: string | null;
  current_city: string | null;
  target_country_codes: string[];
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface MatchPrefs {
  user_id: string;
  similar_age: boolean;
  similar_age_window: number;
  similar_gender: boolean;
}

export interface TravellerPost {
  id: string;
  author_id: string;
  body: string;
  destination_country_code: string | null;
  destination_city: string | null;
  travel_dates: string | null;
  image_path: string | null;
  image_alt: string | null;
  created_at: string;
}

export interface FeedPost extends TravellerPost {
  /** Joined author display info — populated by getFeed via two-step query. */
  author?: Pick<TravellerProfile, 'display_name' | 'handle' | 'photo_url' | 'age' | 'gender' | 'current_country_code'>;
  /** Engagement counts hydrated by getFeed. */
  likeCount: number;
  commentCount: number;
  /** Whether the viewer has liked this post. */
  likedByMe: boolean;
}

export interface PostComment {
  id: string;
  post_id: string;
  author_id: string;
  body: string;
  created_at: string;
  author?: Pick<TravellerProfile, 'display_name' | 'handle' | 'photo_url'>;
}

// ─── Profile ────────────────────────────────────────────────────────────────

export async function getMyProfile(userId: string): Promise<TravellerProfile | null> {
  const { data, error } = await supabase
    .from('traveller_profiles')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data as TravellerProfile | null;
}

export async function upsertProfile(p: Partial<TravellerProfile> & { user_id: string; display_name: string }): Promise<TravellerProfile> {
  const { data, error } = await supabase
    .from('traveller_profiles')
    .upsert(p, { onConflict: 'user_id' })
    .select()
    .single();
  if (error) throw error;
  return data as TravellerProfile;
}

// ─── Match prefs ────────────────────────────────────────────────────────────

export async function getMyMatchPrefs(userId: string): Promise<MatchPrefs | null> {
  const { data, error } = await supabase
    .from('traveller_match_prefs')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data as MatchPrefs | null;
}

export async function upsertMatchPrefs(p: Partial<MatchPrefs> & { user_id: string }): Promise<MatchPrefs> {
  const { data, error } = await supabase
    .from('traveller_match_prefs')
    .upsert(p, { onConflict: 'user_id' })
    .select()
    .single();
  if (error) throw error;
  return data as MatchPrefs;
}

// ─── Feed ───────────────────────────────────────────────────────────────────

/**
 * Pull recent posts. If `destinationCountryCode` is provided, scope the feed
 * to that country. If `viewerId` is provided, hydrates the `likedByMe` field
 * so the UI can render filled vs unfilled like buttons without a per-post
 * round-trip.
 *
 * Three queries total: posts → profile join → engagement aggregations.
 * Acceptable for a 50-post feed; switch to a Postgres view or RPC if we
 * paginate beyond a few hundred.
 */
export async function getFeed(opts: {
  destinationCountryCode?: string;
  limit?: number;
  viewerId?: string;
  /** When set, only show posts from authors the viewer follows + their own posts. */
  followingOnly?: boolean;
} = {}): Promise<FeedPost[]> {
  let q = supabase.from('traveller_posts').select('*').order('created_at', { ascending: false }).limit(opts.limit ?? 50);
  if (opts.destinationCountryCode) {
    q = q.eq('destination_country_code', opts.destinationCountryCode);
  }

  if (opts.followingOnly && opts.viewerId) {
    const { data: follows } = await supabase
      .from('traveller_follows')
      .select('followed_id')
      .eq('follower_id', opts.viewerId);
    const ids = (follows ?? []).map(f => f.followed_id).concat([opts.viewerId]);
    q = q.in('author_id', ids);
  }

  const { data: posts, error } = await q;
  if (error) throw error;
  if (!posts || posts.length === 0) return [];

  // Hydrate author profiles in a single follow-up query.
  const authorIds = Array.from(new Set(posts.map(p => p.author_id)));
  const postIds = posts.map(p => p.id);
  const [authorsResult, likesResult, commentsResult, viewerLikesResult] = await Promise.all([
    supabase
      .from('traveller_profiles')
      .select('user_id, display_name, handle, photo_url, age, gender, current_country_code, is_public')
      .in('user_id', authorIds),
    supabase.from('traveller_post_likes').select('post_id').in('post_id', postIds),
    supabase.from('traveller_post_comments').select('post_id').in('post_id', postIds),
    opts.viewerId
      ? supabase.from('traveller_post_likes').select('post_id').eq('user_id', opts.viewerId).in('post_id', postIds)
      : Promise.resolve({ data: [] as { post_id: string }[] }),
  ]);

  const byId = new Map<string, NonNullable<FeedPost['author']>>();
  (authorsResult.data ?? []).forEach(a => {
    if (!a.is_public) return;
    byId.set(a.user_id, {
      display_name: a.display_name,
      handle: a.handle,
      photo_url: a.photo_url,
      age: a.age,
      gender: a.gender,
      current_country_code: a.current_country_code,
    });
  });

  // Tally likes / comments per post.
  const likeCounts = new Map<string, number>();
  (likesResult.data ?? []).forEach(r => likeCounts.set(r.post_id, (likeCounts.get(r.post_id) ?? 0) + 1));
  const commentCounts = new Map<string, number>();
  (commentsResult.data ?? []).forEach(r => commentCounts.set(r.post_id, (commentCounts.get(r.post_id) ?? 0) + 1));
  const likedByMe = new Set<string>((viewerLikesResult.data ?? []).map((r: { post_id: string }) => r.post_id));

  return (posts as TravellerPost[]).map(p => ({
    ...p,
    author: byId.get(p.author_id),
    likeCount: likeCounts.get(p.id) ?? 0,
    commentCount: commentCounts.get(p.id) ?? 0,
    likedByMe: likedByMe.has(p.id),
  }));
}

export async function createPost(p: {
  author_id: string;
  body: string;
  destination_country_code?: string;
  destination_city?: string;
  travel_dates?: string;
  image_path?: string;
  image_alt?: string;
}): Promise<TravellerPost> {
  const { data, error } = await supabase
    .from('traveller_posts')
    .insert(p)
    .select()
    .single();
  if (error) throw error;
  return data as TravellerPost;
}

export async function deletePost(postId: string): Promise<void> {
  const { error } = await supabase.from('traveller_posts').delete().eq('id', postId);
  if (error) throw error;
}

export async function getMyPosts(userId: string, limit = 20): Promise<TravellerPost[]> {
  const { data, error } = await supabase
    .from('traveller_posts')
    .select('*')
    .eq('author_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as TravellerPost[];
}

// ─── Handles ────────────────────────────────────────────────────────────────

/**
 * Check whether a handle is available. Case-insensitive match. Returns true
 * if the handle is free OR is already owned by `excludeUserId` (so the
 * onboarding screen can re-validate without flagging the user's own handle).
 */
export async function isHandleAvailable(handle: string, excludeUserId?: string): Promise<boolean> {
  if (!/^[A-Za-z0-9_]{3,20}$/.test(handle)) return false;
  let q = supabase
    .from('traveller_profiles')
    .select('user_id', { count: 'exact', head: true })
    .ilike('handle', handle);
  if (excludeUserId) q = q.neq('user_id', excludeUserId);
  const { count, error } = await q;
  if (error) throw error;
  return (count ?? 0) === 0;
}

/** Look up a profile by @handle. Used by the user-profile screen. */
export async function getProfileByHandle(handle: string): Promise<TravellerProfile | null> {
  const { data, error } = await supabase
    .from('traveller_profiles')
    .select('*')
    .ilike('handle', handle)
    .maybeSingle();
  if (error) throw error;
  return data as TravellerProfile | null;
}

// ─── Follows ────────────────────────────────────────────────────────────────

export async function followUser(followerId: string, followedId: string): Promise<void> {
  const { error } = await supabase.from('traveller_follows').insert({ follower_id: followerId, followed_id: followedId });
  if (error && !error.message.toLowerCase().includes('duplicate')) throw error;
}

export async function unfollowUser(followerId: string, followedId: string): Promise<void> {
  const { error } = await supabase
    .from('traveller_follows')
    .delete()
    .eq('follower_id', followerId)
    .eq('followed_id', followedId);
  if (error) throw error;
}

export async function isFollowing(followerId: string, followedId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('traveller_follows')
    .select('follower_id')
    .eq('follower_id', followerId)
    .eq('followed_id', followedId)
    .maybeSingle();
  if (error) throw error;
  return !!data;
}

export async function getFollowCounts(userId: string): Promise<{ followers: number; following: number }> {
  const [followersResult, followingResult] = await Promise.all([
    supabase.from('traveller_follows').select('*', { count: 'exact', head: true }).eq('followed_id', userId),
    supabase.from('traveller_follows').select('*', { count: 'exact', head: true }).eq('follower_id', userId),
  ]);
  return {
    followers: followersResult.count ?? 0,
    following: followingResult.count ?? 0,
  };
}

// ─── Likes ──────────────────────────────────────────────────────────────────

export async function likePost(postId: string, userId: string): Promise<void> {
  const { error } = await supabase.from('traveller_post_likes').insert({ post_id: postId, user_id: userId });
  if (error && !error.message.toLowerCase().includes('duplicate')) throw error;
}

export async function unlikePost(postId: string, userId: string): Promise<void> {
  const { error } = await supabase
    .from('traveller_post_likes')
    .delete()
    .eq('post_id', postId)
    .eq('user_id', userId);
  if (error) throw error;
}

// ─── Comments ───────────────────────────────────────────────────────────────

export async function getComments(postId: string): Promise<PostComment[]> {
  const { data: comments, error } = await supabase
    .from('traveller_post_comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  if (!comments || comments.length === 0) return [];

  const authorIds = Array.from(new Set(comments.map(c => c.author_id)));
  const { data: authors } = await supabase
    .from('traveller_profiles')
    .select('user_id, display_name, handle, photo_url, is_public')
    .in('user_id', authorIds);
  const byId = new Map<string, NonNullable<PostComment['author']>>();
  (authors ?? []).forEach(a => {
    if (!a.is_public) return;
    byId.set(a.user_id, { display_name: a.display_name, handle: a.handle, photo_url: a.photo_url });
  });

  return (comments as PostComment[]).map(c => ({ ...c, author: byId.get(c.author_id) }));
}

export async function addComment(postId: string, authorId: string, body: string): Promise<PostComment> {
  const { data, error } = await supabase
    .from('traveller_post_comments')
    .insert({ post_id: postId, author_id: authorId, body })
    .select()
    .single();
  if (error) throw error;
  return data as PostComment;
}

export async function deleteComment(commentId: string): Promise<void> {
  const { error } = await supabase.from('traveller_post_comments').delete().eq('id', commentId);
  if (error) throw error;
}

// ─── Hashtag extraction ─────────────────────────────────────────────────────

/** Pull #tags out of a post body. Lowercased, deduped, capped at 10. */
export function extractHashtags(body: string): string[] {
  const matches = body.match(/#([A-Za-z0-9_]{2,30})/g) ?? [];
  const unique = Array.from(new Set(matches.map(t => t.slice(1).toLowerCase())));
  return unique.slice(0, 10);
}

// ─── Match-prefs filter (client-side) ───────────────────────────────────────

/**
 * Filter a feed in-memory based on the viewer's match prefs. If `similar_age`
 * is set, hide posts whose author's age falls outside ±window of viewer.
 * If `similar_gender` is set, hide posts whose author has a different gender.
 *
 * Posts whose author is missing (deleted profile, private profile) always
 * pass through — the post itself is public, only author hydration is gated.
 */
export function filterFeedByPrefs(
  posts: FeedPost[],
  viewerPrefs: MatchPrefs | null,
  viewerProfile: TravellerProfile | null,
): FeedPost[] {
  if (!viewerPrefs || !viewerProfile) return posts;
  return posts.filter(p => {
    if (!p.author) return true;
    if (viewerPrefs.similar_age && viewerProfile.age && p.author.age) {
      if (Math.abs(p.author.age - viewerProfile.age) > viewerPrefs.similar_age_window) return false;
    }
    if (viewerPrefs.similar_gender && viewerProfile.gender && p.author.gender) {
      if (p.author.gender !== viewerProfile.gender) return false;
    }
    return true;
  });
}
