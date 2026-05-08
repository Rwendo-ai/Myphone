-- Connections v1: handles, follows, likes, comments.
--
-- Builds on the traveller_profiles + traveller_posts tables from
-- 20260507_traveller_connections.sql. This migration adds the social-graph
-- and engagement primitives needed for a feed users can actually use.
--
-- Three new tables + 1 column + 1 functional index:
--   1. traveller_profiles.handle    — unique @handle per user
--   2. traveller_follows            — follower → followed relationships
--   3. traveller_post_likes         — post + user (many-to-many) likes
--   4. traveller_post_comments      — threaded responses to posts
--
-- All RLS policies follow the same pattern as the existing tables:
-- read = authenticated public for the feed; write = own rows only.

-- ─── handles on traveller_profiles ──────────────────────────────────────────
ALTER TABLE public.traveller_profiles
  ADD COLUMN IF NOT EXISTS handle text;

-- Case-insensitive uniqueness — `Joe` and `joe` should collide. NULLs allowed
-- so existing rows can backfill on next profile edit.
CREATE UNIQUE INDEX IF NOT EXISTS idx_traveller_profiles_handle_unique
  ON public.traveller_profiles (lower(handle))
  WHERE handle IS NOT NULL;

-- Format check: 3-20 chars, letters/numbers/underscores only.
ALTER TABLE public.traveller_profiles
  DROP CONSTRAINT IF EXISTS traveller_profiles_handle_format;
ALTER TABLE public.traveller_profiles
  ADD CONSTRAINT traveller_profiles_handle_format
  CHECK (handle IS NULL OR handle ~ '^[A-Za-z0-9_]{3,20}$');

-- ─── traveller_follows ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.traveller_follows (
  follower_id  uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  followed_id  uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at   timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (follower_id, followed_id),
  CHECK (follower_id <> followed_id)
);

CREATE INDEX IF NOT EXISTS idx_traveller_follows_followed ON public.traveller_follows (followed_id);

ALTER TABLE public.traveller_follows ENABLE ROW LEVEL SECURITY;

-- Anyone authenticated can see the social graph (drives follower counts +
-- "people you follow" feeds). Writes require ownership of the follower side.
CREATE POLICY "follows_select_all"  ON public.traveller_follows
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "follows_insert_own"  ON public.traveller_follows
  FOR INSERT TO authenticated WITH CHECK (follower_id = auth.uid());
CREATE POLICY "follows_delete_own"  ON public.traveller_follows
  FOR DELETE TO authenticated USING (follower_id = auth.uid());

-- ─── traveller_post_likes ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.traveller_post_likes (
  post_id     uuid NOT NULL REFERENCES public.traveller_posts(id) ON DELETE CASCADE,
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (post_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_post_likes_post  ON public.traveller_post_likes (post_id);
CREATE INDEX IF NOT EXISTS idx_post_likes_user  ON public.traveller_post_likes (user_id);

ALTER TABLE public.traveller_post_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "post_likes_select_all"  ON public.traveller_post_likes
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "post_likes_insert_own"  ON public.traveller_post_likes
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "post_likes_delete_own"  ON public.traveller_post_likes
  FOR DELETE TO authenticated USING (user_id = auth.uid());

-- ─── traveller_post_comments ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.traveller_post_comments (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id     uuid NOT NULL REFERENCES public.traveller_posts(id) ON DELETE CASCADE,
  author_id   uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body        text NOT NULL CHECK (length(body) BETWEEN 1 AND 500),
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_post_comments_post  ON public.traveller_post_comments (post_id, created_at);
CREATE INDEX IF NOT EXISTS idx_post_comments_author ON public.traveller_post_comments (author_id, created_at DESC);

ALTER TABLE public.traveller_post_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "post_comments_select_all"  ON public.traveller_post_comments
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "post_comments_insert_own" ON public.traveller_post_comments
  FOR INSERT TO authenticated WITH CHECK (author_id = auth.uid());
CREATE POLICY "post_comments_delete_own" ON public.traveller_post_comments
  FOR DELETE TO authenticated USING (author_id = auth.uid());
