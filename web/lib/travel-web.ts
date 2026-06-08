'use server';

import { revalidatePath } from 'next/cache';
import { createSupabaseServer } from './supabase-server';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface TravellerProfile {
  user_id: string;
  display_name: string;
  bio: string | null;
  photo_url: string | null;
  current_country_code: string | null;
  current_city: string | null;
  target_country_codes: string[];
  age: number | null;
  gender: string | null;
  languages_speaking: string[];
  languages_learning: string[];
  is_public: boolean;
}

export interface FeedAuthor {
  user_id: string;
  display_name: string;
  photo_url: string | null;
  current_country_code: string | null;
  current_city: string | null;
}

export interface FeedPost {
  id: string;
  author_id: string;
  body: string;
  destination_country_code: string | null;
  destination_city: string | null;
  created_at: string;
  like_count: number;
  comment_count: number;
  viewer_liked: boolean;
  viewer_follows_author: boolean;
  author: FeedAuthor | null;
}

export interface PostComment {
  id: string;
  post_id: string;
  author_id: string;
  body: string;
  created_at: string;
  author: FeedAuthor | null;
}

// ─── Profile ────────────────────────────────────────────────────────────────

export async function getMyTravellerProfile(userId: string): Promise<TravellerProfile | null> {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase
    .from('traveller_profiles')
    .select(
      'user_id, display_name, bio, photo_url, current_country_code, current_city, target_country_codes, age, gender, languages_speaking, languages_learning, is_public',
    )
    .eq('user_id', userId)
    .maybeSingle();
  if (error) return null;
  if (!data) return null;
  return {
    user_id: data.user_id,
    display_name: data.display_name,
    bio: data.bio,
    photo_url: data.photo_url,
    current_country_code: data.current_country_code,
    current_city: data.current_city,
    target_country_codes: data.target_country_codes ?? [],
    age: data.age,
    gender: data.gender,
    languages_speaking: data.languages_speaking ?? [],
    languages_learning: data.languages_learning ?? [],
    is_public: data.is_public,
  };
}

// ─── Feed ───────────────────────────────────────────────────────────────────

export async function getFeed(viewerId: string, limit = 50): Promise<FeedPost[]> {
  const supabase = await createSupabaseServer();

  // 1) Posts (most recent).
  const { data: posts, error } = await supabase
    .from('traveller_posts')
    .select(
      'id, author_id, body, destination_country_code, destination_city, created_at',
    )
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error || !posts || posts.length === 0) return [];

  const postIds = posts.map((p) => p.id);
  const authorIds = Array.from(new Set(posts.map((p) => p.author_id)));

  // 2) Author profile rows.
  const [authorsRes, likesRes, commentsRes, viewerLikesRes, viewerFollowsRes] = await Promise.all([
    supabase
      .from('traveller_profiles')
      .select('user_id, display_name, photo_url, current_country_code, current_city')
      .in('user_id', authorIds),
    supabase
      .from('traveller_post_likes')
      .select('post_id')
      .in('post_id', postIds),
    supabase
      .from('traveller_post_comments')
      .select('post_id')
      .in('post_id', postIds),
    supabase
      .from('traveller_post_likes')
      .select('post_id')
      .eq('user_id', viewerId)
      .in('post_id', postIds),
    supabase
      .from('traveller_follows')
      .select('followed_id')
      .eq('follower_id', viewerId)
      .in('followed_id', authorIds),
  ]);

  const authorMap = new Map<string, FeedAuthor>();
  for (const a of authorsRes.data ?? []) {
    authorMap.set(a.user_id, {
      user_id: a.user_id,
      display_name: a.display_name,
      photo_url: a.photo_url,
      current_country_code: a.current_country_code,
      current_city: a.current_city,
    });
  }

  const likeCount = new Map<string, number>();
  for (const row of likesRes.data ?? []) {
    likeCount.set(row.post_id, (likeCount.get(row.post_id) ?? 0) + 1);
  }
  const commentCount = new Map<string, number>();
  for (const row of commentsRes.data ?? []) {
    commentCount.set(row.post_id, (commentCount.get(row.post_id) ?? 0) + 1);
  }
  const viewerLikedSet = new Set((viewerLikesRes.data ?? []).map((r) => r.post_id));
  const viewerFollowsSet = new Set((viewerFollowsRes.data ?? []).map((r) => r.followed_id));

  return posts.map((p) => ({
    id: p.id,
    author_id: p.author_id,
    body: p.body,
    destination_country_code: p.destination_country_code,
    destination_city: p.destination_city,
    created_at: p.created_at,
    like_count: likeCount.get(p.id) ?? 0,
    comment_count: commentCount.get(p.id) ?? 0,
    viewer_liked: viewerLikedSet.has(p.id),
    viewer_follows_author: viewerFollowsSet.has(p.author_id),
    author: authorMap.get(p.author_id) ?? null,
  }));
}

// ─── Single post + comments (for /travel/[postId]) ──────────────────────────

export async function getPost(viewerId: string, postId: string): Promise<{
  post: FeedPost;
  comments: PostComment[];
} | null> {
  const supabase = await createSupabaseServer();

  const { data: post } = await supabase
    .from('traveller_posts')
    .select('id, author_id, body, destination_country_code, destination_city, created_at')
    .eq('id', postId)
    .maybeSingle();
  if (!post) return null;

  const [authorRes, commentsRes, likeCountRes, viewerLikeRes, viewerFollowRes] = await Promise.all([
    supabase
      .from('traveller_profiles')
      .select('user_id, display_name, photo_url, current_country_code, current_city')
      .eq('user_id', post.author_id)
      .maybeSingle(),
    supabase
      .from('traveller_post_comments')
      .select('id, post_id, author_id, body, created_at')
      .eq('post_id', postId)
      .order('created_at', { ascending: true }),
    supabase
      .from('traveller_post_likes')
      .select('post_id', { count: 'exact', head: true })
      .eq('post_id', postId),
    supabase
      .from('traveller_post_likes')
      .select('post_id')
      .eq('post_id', postId)
      .eq('user_id', viewerId)
      .maybeSingle(),
    supabase
      .from('traveller_follows')
      .select('followed_id')
      .eq('follower_id', viewerId)
      .eq('followed_id', post.author_id)
      .maybeSingle(),
  ]);

  // Hydrate comment authors in a single query.
  const commentRows = commentsRes.data ?? [];
  const commentAuthorIds = Array.from(new Set(commentRows.map((c) => c.author_id)));
  let commentAuthorMap = new Map<string, FeedAuthor>();
  if (commentAuthorIds.length > 0) {
    const { data: authors } = await supabase
      .from('traveller_profiles')
      .select('user_id, display_name, photo_url, current_country_code, current_city')
      .in('user_id', commentAuthorIds);
    for (const a of authors ?? []) {
      commentAuthorMap.set(a.user_id, {
        user_id: a.user_id,
        display_name: a.display_name,
        photo_url: a.photo_url,
        current_country_code: a.current_country_code,
        current_city: a.current_city,
      });
    }
  }

  const author: FeedAuthor | null = authorRes.data
    ? {
        user_id: authorRes.data.user_id,
        display_name: authorRes.data.display_name,
        photo_url: authorRes.data.photo_url,
        current_country_code: authorRes.data.current_country_code,
        current_city: authorRes.data.current_city,
      }
    : null;

  const feedPost: FeedPost = {
    id: post.id,
    author_id: post.author_id,
    body: post.body,
    destination_country_code: post.destination_country_code,
    destination_city: post.destination_city,
    created_at: post.created_at,
    like_count: likeCountRes.count ?? 0,
    comment_count: commentRows.length,
    viewer_liked: !!viewerLikeRes.data,
    viewer_follows_author: !!viewerFollowRes.data,
    author,
  };

  const comments: PostComment[] = commentRows.map((c) => ({
    id: c.id,
    post_id: c.post_id,
    author_id: c.author_id,
    body: c.body,
    created_at: c.created_at,
    author: commentAuthorMap.get(c.author_id) ?? null,
  }));

  return { post: feedPost, comments };
}

// ─── Mutations (server actions) ─────────────────────────────────────────────

export async function createTravellerProfile(input: {
  display_name: string;
  bio?: string;
  current_country_code?: string;
  current_city?: string;
  target_country_codes?: string[];
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: 'not-signed-in' };

  const display_name = input.display_name.trim();
  if (!display_name) return { ok: false, error: 'display-name-required' };
  if (display_name.length > 60) return { ok: false, error: 'display-name-too-long' };

  const { error } = await supabase.from('traveller_profiles').upsert(
    {
      user_id: user.id,
      display_name,
      bio: input.bio?.trim() || null,
      current_country_code: input.current_country_code?.trim().toUpperCase() || null,
      current_city: input.current_city?.trim() || null,
      target_country_codes: (input.target_country_codes ?? [])
        .map((c) => c.trim().toUpperCase())
        .filter(Boolean),
      is_public: true,
    },
    { onConflict: 'user_id' },
  );
  if (error) return { ok: false, error: error.message };
  revalidatePath('/travel');
  return { ok: true };
}

export async function createPost(input: {
  body: string;
  destination_country_code?: string;
  destination_city?: string;
}): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: 'not-signed-in' };

  const body = input.body.trim();
  if (!body) return { ok: false, error: 'body-required' };
  if (body.length > 500) return { ok: false, error: 'body-too-long' };

  // Posting requires a traveller_profile row (so the feed can render an author).
  const { data: prof } = await supabase
    .from('traveller_profiles')
    .select('user_id')
    .eq('user_id', user.id)
    .maybeSingle();
  if (!prof) return { ok: false, error: 'profile-required' };

  const { data, error } = await supabase
    .from('traveller_posts')
    .insert({
      author_id: user.id,
      body,
      destination_country_code: input.destination_country_code?.trim().toUpperCase() || null,
      destination_city: input.destination_city?.trim() || null,
    })
    .select('id')
    .single();
  if (error || !data) return { ok: false, error: error?.message ?? 'insert-failed' };
  revalidatePath('/travel');
  return { ok: true, id: data.id };
}

export async function togglePostLike(postId: string): Promise<
  { ok: true; liked: boolean } | { ok: false; error: string }
> {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: 'not-signed-in' };

  // Check existing like.
  const { data: existing } = await supabase
    .from('traveller_post_likes')
    .select('post_id')
    .eq('post_id', postId)
    .eq('user_id', user.id)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from('traveller_post_likes')
      .delete()
      .eq('post_id', postId)
      .eq('user_id', user.id);
    if (error) return { ok: false, error: error.message };
    revalidatePath('/travel');
    revalidatePath(`/travel/${postId}`);
    return { ok: true, liked: false };
  }

  const { error } = await supabase
    .from('traveller_post_likes')
    .insert({ post_id: postId, user_id: user.id });
  if (error) return { ok: false, error: error.message };
  revalidatePath('/travel');
  revalidatePath(`/travel/${postId}`);
  return { ok: true, liked: true };
}

export async function toggleFollow(targetUserId: string): Promise<
  { ok: true; following: boolean } | { ok: false; error: string }
> {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: 'not-signed-in' };
  if (user.id === targetUserId) return { ok: false, error: 'cannot-follow-self' };

  const { data: existing } = await supabase
    .from('traveller_follows')
    .select('followed_id')
    .eq('follower_id', user.id)
    .eq('followed_id', targetUserId)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from('traveller_follows')
      .delete()
      .eq('follower_id', user.id)
      .eq('followed_id', targetUserId);
    if (error) return { ok: false, error: error.message };
    revalidatePath('/travel');
    return { ok: true, following: false };
  }

  const { error } = await supabase
    .from('traveller_follows')
    .insert({ follower_id: user.id, followed_id: targetUserId });
  if (error) return { ok: false, error: error.message };
  revalidatePath('/travel');
  return { ok: true, following: true };
}

export async function createComment(input: {
  postId: string;
  body: string;
}): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: 'not-signed-in' };

  const body = input.body.trim();
  if (!body) return { ok: false, error: 'body-required' };
  if (body.length > 500) return { ok: false, error: 'body-too-long' };

  const { data, error } = await supabase
    .from('traveller_post_comments')
    .insert({ post_id: input.postId, author_id: user.id, body })
    .select('id')
    .single();
  if (error || !data) return { ok: false, error: error?.message ?? 'insert-failed' };
  revalidatePath(`/travel/${input.postId}`);
  revalidatePath('/travel');
  return { ok: true, id: data.id };
}
