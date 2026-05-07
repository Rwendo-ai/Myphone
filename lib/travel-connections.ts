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
  created_at: string;
}

export interface FeedPost extends TravellerPost {
  /** Joined author display info — populated by getFeed via two-step query. */
  author?: Pick<TravellerProfile, 'display_name' | 'photo_url' | 'age' | 'gender' | 'current_country_code'>;
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
 * to that country (used by the Travel hub's connections card). Match-prefs
 * filtering happens client-side because it requires comparing each post's
 * author profile against the viewer's prefs — easier as a JS filter than
 * SQL given the loose schema.
 */
export async function getFeed(opts: {
  destinationCountryCode?: string;
  limit?: number;
} = {}): Promise<FeedPost[]> {
  let q = supabase.from('traveller_posts').select('*').order('created_at', { ascending: false }).limit(opts.limit ?? 50);
  if (opts.destinationCountryCode) {
    q = q.eq('destination_country_code', opts.destinationCountryCode);
  }
  const { data: posts, error } = await q;
  if (error) throw error;
  if (!posts || posts.length === 0) return [];

  // Hydrate author profiles in a single follow-up query — cheaper than a
  // join when public-feed reads are common and we may end up paginating.
  const authorIds = Array.from(new Set(posts.map(p => p.author_id)));
  const { data: authors } = await supabase
    .from('traveller_profiles')
    .select('user_id, display_name, photo_url, age, gender, current_country_code, is_public')
    .in('user_id', authorIds);

  const byId = new Map<string, NonNullable<FeedPost['author']>>();
  (authors ?? []).forEach(a => {
    if (!a.is_public) return; // hide author info but keep the post
    byId.set(a.user_id, {
      display_name: a.display_name,
      photo_url: a.photo_url,
      age: a.age,
      gender: a.gender,
      current_country_code: a.current_country_code,
    });
  });

  return (posts as TravellerPost[]).map(p => ({ ...p, author: byId.get(p.author_id) }));
}

export async function createPost(p: {
  author_id: string;
  body: string;
  destination_country_code?: string;
  destination_city?: string;
  travel_dates?: string;
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
