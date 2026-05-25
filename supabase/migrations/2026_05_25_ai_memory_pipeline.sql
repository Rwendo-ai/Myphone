-- AI long-term memory pipeline — producer side.
--
-- The reader (lib/conversation-memory.ts loadCompanionFacts +
-- loadRecentConversationRecap) has been pulling from these tables since
-- 2026-05-09 but the producers never existed. After this migration:
--
--   * companion_facts          — extracted truths about the user, written
--                                by the extract-companion-facts Edge
--                                Function on every chat turn.
--   * companion_summaries      — weekly compressed history, written by
--                                the compress-old-conversations job.
--
-- These tables MAY already exist in this project from older
-- planning-doc-driven scaffolding; CREATE IF NOT EXISTS makes the
-- migration safe to run either way.
--
-- v1 deliberately skips pgvector / semantic recall. Recency + recency-
-- weighted top-K is enough for the first wave of users. Embedding-based
-- retrieval lands when a power user has > 50 facts and the prompt starts
-- bloating.

-- ─── companion_facts ──────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.companion_facts (
  id                  uuid       PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             uuid       NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- 'fact' is the catch-all; 'emotion', 'plan', 'preference', 'person'
  -- are recognised by lib/conversation-memory.loadCompanionFacts for
  -- tag-prefixed prompt rendering.
  fact_type           text       NOT NULL DEFAULT 'fact'
                                 CHECK (fact_type IN ('fact','emotion','plan','preference','person')),
  content             text       NOT NULL,
  -- Bumped every time the user mentions the same thing again. Caps for
  -- top-K recall (a fact mentioned 6 times sticks; one mentioned once
  -- ages out as more recent facts arrive).
  weight              integer    NOT NULL DEFAULT 1,
  -- Loose duplicate-guard. Distinct content hashes a different row;
  -- semantic equality is a v2 problem.
  source_turn_id      uuid,
  last_reinforced_at  timestamptz NOT NULL DEFAULT now(),
  created_at          timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_companion_facts_user_reinforced
  ON public.companion_facts (user_id, last_reinforced_at DESC);

ALTER TABLE public.companion_facts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "companion_facts_select_own" ON public.companion_facts;
CREATE POLICY "companion_facts_select_own"
  ON public.companion_facts FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

GRANT SELECT ON public.companion_facts TO authenticated;

-- ─── companion_summaries ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.companion_summaries (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- ISO Monday of the week being summarised (so weeks are deterministic).
  week_starting date        NOT NULL,
  summary       text        NOT NULL,
  turn_count    integer     NOT NULL DEFAULT 0,
  created_at    timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, week_starting)
);

CREATE INDEX IF NOT EXISTS idx_companion_summaries_user_week
  ON public.companion_summaries (user_id, week_starting DESC);

ALTER TABLE public.companion_summaries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "companion_summaries_select_own" ON public.companion_summaries;
CREATE POLICY "companion_summaries_select_own"
  ON public.companion_summaries FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

GRANT SELECT ON public.companion_summaries TO authenticated;

-- ─── upsert_companion_fact(p_user_id, p_fact_type, p_content, p_source_turn_id)
--
-- Inserts a new fact OR bumps weight + last_reinforced_at on an existing
-- one with the same (user_id, fact_type, content). This makes the
-- extractor idempotent — re-extracting "lives in Sydney" from a later
-- turn doesn't duplicate the row, it just reinforces it.
--
-- Service-role only — called by the extract-companion-facts Edge
-- Function, never directly by the client.

CREATE OR REPLACE FUNCTION public.upsert_companion_fact(
  p_user_id        uuid,
  p_fact_type      text,
  p_content        text,
  p_source_turn_id uuid DEFAULT NULL
) RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_id uuid;
BEGIN
  -- Try to find an existing fact with the same (user, type, content).
  SELECT id INTO v_id
    FROM public.companion_facts
   WHERE user_id    = p_user_id
     AND fact_type  = p_fact_type
     AND content    = p_content
   LIMIT 1;

  IF FOUND THEN
    UPDATE public.companion_facts
       SET weight             = weight + 1,
           last_reinforced_at = now()
     WHERE id = v_id;
    RETURN v_id;
  END IF;

  INSERT INTO public.companion_facts (user_id, fact_type, content, source_turn_id)
       VALUES (p_user_id, p_fact_type, p_content, p_source_turn_id)
  RETURNING id INTO v_id;
  RETURN v_id;
END;
$$;

REVOKE ALL ON FUNCTION public.upsert_companion_fact(uuid, text, text, uuid) FROM public;
GRANT  EXECUTE ON FUNCTION public.upsert_companion_fact(uuid, text, text, uuid) TO service_role;
