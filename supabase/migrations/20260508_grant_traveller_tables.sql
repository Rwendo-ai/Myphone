-- The traveller_* tables had RLS policies but no table-level GRANTs to the
-- `authenticated` role, so PostgREST returned 403 "permission denied for
-- table" before RLS could even be evaluated. Supabase auto-grants when a
-- table is created via the dashboard, but raw-SQL DDL via MCP needs the
-- grants set explicitly.

GRANT SELECT, INSERT, UPDATE, DELETE ON public.traveller_profiles      TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.traveller_match_prefs   TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.traveller_posts         TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.traveller_follows       TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.traveller_post_likes    TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.traveller_post_comments TO authenticated;

GRANT USAGE ON SCHEMA public TO authenticated;
