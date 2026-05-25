-- Per-user "I cleared my chat view" marker.
--
-- When the user taps the ⌫ icon on the chat tab we want the on-screen
-- messages to disappear AND stay disappeared after a reload — but the
-- AI's memory pipeline (companion_summaries, companion_facts, recent
-- recap) keeps reading the full conversations table, so the AI still
-- remembers everything for personality / continuity.
--
-- We do that with one timestamp on profiles: loadConversationHistory
-- filters `conversations.created_at > chat_view_cleared_at`. AI memory
-- reads ignore the marker.
--
-- Idempotent. Safe to re-run.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS chat_view_cleared_at timestamptz;
