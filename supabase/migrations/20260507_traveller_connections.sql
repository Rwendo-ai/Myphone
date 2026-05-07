-- Meet Travellers (Connections) — schema for the Travel Mode connection hub.
--
-- Three tables:
--   1. traveller_profiles    — public profile per user
--   2. traveller_match_prefs — own filter preferences (private)
--   3. traveller_posts       — public feed of travel posts
--
-- Messaging is deferred to a future migration. The feed + profile + match
-- preferences are enough for v1 — users can already see who's heading where
-- and post their own plans.
--
-- All tables use auth.users.id for the user reference. RLS is on for every
-- table; policies are explicit per-row read/write rules.

-- ─── traveller_profiles ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.traveller_profiles (
  user_id          uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name     text         NOT NULL,
  age              integer      CHECK (age >= 13 AND age <= 120),
  gender           text         CHECK (gender IN ('female','male','nonbinary','prefer_not_to_say')),
  bio              text         CHECK (length(bio) <= 500),
  photo_url        text,
  languages_speaking  text[]    DEFAULT '{}'::text[],
  languages_learning  text[]    DEFAULT '{}'::text[],
  -- Where the user IS now. Used for "who's in this city right now?" queries.
  current_country_code   text,
  current_city           text,
  -- Country codes the user is heading to. Drives the destination feed filter.
  target_country_codes   text[] DEFAULT '{}'::text[],
  is_public        boolean      NOT NULL DEFAULT true,
  created_at       timestamptz  NOT NULL DEFAULT now(),
  updated_at       timestamptz  NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_traveller_profiles_targets ON public.traveller_profiles USING gin (target_country_codes);
CREATE INDEX IF NOT EXISTS idx_traveller_profiles_current ON public.traveller_profiles (current_country_code);

ALTER TABLE public.traveller_profiles ENABLE ROW LEVEL SECURITY;

-- Anyone authenticated can read public profiles.
CREATE POLICY "traveller_profiles_select_public"
  ON public.traveller_profiles FOR SELECT
  TO authenticated
  USING (is_public = true OR user_id = auth.uid());

-- Users can only insert/update/delete their own profile row.
CREATE POLICY "traveller_profiles_insert_own"
  ON public.traveller_profiles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "traveller_profiles_update_own"
  ON public.traveller_profiles FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "traveller_profiles_delete_own"
  ON public.traveller_profiles FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- ─── traveller_match_prefs ──────────────────────────────────────────────────
-- Strictly private. Each user sees / edits only their own row.
CREATE TABLE IF NOT EXISTS public.traveller_match_prefs (
  user_id            uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  similar_age        boolean NOT NULL DEFAULT false,
  similar_age_window integer NOT NULL DEFAULT 5 CHECK (similar_age_window BETWEEN 1 AND 30),
  similar_gender     boolean NOT NULL DEFAULT false,
  created_at         timestamptz NOT NULL DEFAULT now(),
  updated_at         timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.traveller_match_prefs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "match_prefs_select_own" ON public.traveller_match_prefs
  FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "match_prefs_insert_own" ON public.traveller_match_prefs
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "match_prefs_update_own" ON public.traveller_match_prefs
  FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "match_prefs_delete_own" ON public.traveller_match_prefs
  FOR DELETE TO authenticated USING (user_id = auth.uid());

-- ─── traveller_posts ────────────────────────────────────────────────────────
-- The public feed. Anyone authenticated can read; only authors can write
-- their own posts.
CREATE TABLE IF NOT EXISTS public.traveller_posts (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id         uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body              text NOT NULL CHECK (length(body) BETWEEN 1 AND 500),
  destination_country_code text,
  destination_city  text,
  -- Loose date strings for v1 ("June 2026", "Jul 15-22") — full daterange comes
  -- later when we wire a real date picker.
  travel_dates      text,
  created_at        timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_traveller_posts_destination ON public.traveller_posts (destination_country_code, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_traveller_posts_author      ON public.traveller_posts (author_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_traveller_posts_recent      ON public.traveller_posts (created_at DESC);

ALTER TABLE public.traveller_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "traveller_posts_select_all" ON public.traveller_posts
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "traveller_posts_insert_own" ON public.traveller_posts
  FOR INSERT TO authenticated WITH CHECK (author_id = auth.uid());

CREATE POLICY "traveller_posts_delete_own" ON public.traveller_posts
  FOR DELETE TO authenticated USING (author_id = auth.uid());

-- Trigger to keep updated_at fresh on profile edits.
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON public.traveller_profiles;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.traveller_profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS set_updated_at ON public.traveller_match_prefs;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.traveller_match_prefs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
