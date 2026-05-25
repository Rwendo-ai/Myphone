-- XP system — backbone for engagement rewards + the planned crypto airdrop.
--
-- The client (lib/xp-events.ts) has been calling award_xp() and redeem_xp()
-- since 2026-05-09 but the RPCs never existed. Every call has been silently
-- failing. This migration creates the missing tables + RPCs so XP starts
-- accumulating per the locked rules.
--
-- Components:
--   * public.xp_events      — append-only audit row per grant or redemption
--   * public.profiles.xp    — current total (denormalised mirror of sum(amount))
--   * public.award_xp(...)  — atomic grant with throttle enforcement
--   * public.redeem_xp(...) — atomic spend with balance check
--
-- Throttle rules (per lib/xp-events.ts spec):
--   * login, post_create, comment_create, post_like, user_follow,
--     ai_text_use, ai_voice_use, ai_lipsync_use → once per hour per user
--   * lesson_complete → deduped by metadata->>'lesson_id' (once ever per lesson)
--   * purchase_* → no cap (real-money, server-validated upstream)
--
-- Idempotent.

-- ─── xp_events ─────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.xp_events (
  id          uuid       PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid       NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- Free-form (login, ai_text_use, lesson_complete, purchase_tokens, redeem, …).
  event_type  text       NOT NULL,
  -- Positive on grants, negative on redemptions. Keeps both in one stream.
  amount      integer    NOT NULL,
  metadata    jsonb      NOT NULL DEFAULT '{}'::jsonb,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_xp_events_user_created
  ON public.xp_events (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_xp_events_user_event_time
  ON public.xp_events (user_id, event_type, created_at DESC);

ALTER TABLE public.xp_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "xp_events_select_own" ON public.xp_events;
CREATE POLICY "xp_events_select_own"
  ON public.xp_events FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

GRANT SELECT ON public.xp_events TO authenticated;

-- ─── profiles.xp ───────────────────────────────────────────────────────────

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS xp integer NOT NULL DEFAULT 0;

-- ─── award_xp(p_event_type, p_amount, p_metadata) → integer (new total)
--
-- SECURITY DEFINER so RLS doesn't block the cross-table writes. Auth ID
-- read from the caller's JWT (auth.uid()) — the function never accepts
-- p_user_id, eliminating spoof risk from the client.

CREATE OR REPLACE FUNCTION public.award_xp(
  p_event_type text,
  p_amount     integer,
  p_metadata   jsonb DEFAULT '{}'::jsonb
) RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id     uuid := auth.uid();
  v_recent      integer;
  v_lesson_id   text;
  v_new_total   integer;
  v_metadata    jsonb := COALESCE(p_metadata, '{}'::jsonb);
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'award_xp: no auth.uid() — caller must be signed in';
  END IF;
  IF p_amount IS NULL OR p_amount <= 0 THEN
    RAISE EXCEPTION 'award_xp: p_amount must be > 0';
  END IF;

  -- ── Throttle ───────────────────────────────────────────────────────────
  -- purchase_* events have no cap — real-money, server-validated by the
  -- RevenueCat webhook upstream.
  IF p_event_type LIKE 'purchase_%' THEN
    NULL;
  ELSIF p_event_type = 'lesson_complete' THEN
    -- Deduped by lesson_id forever. Each lesson is rewarded once ever.
    v_lesson_id := v_metadata->>'lesson_id';
    IF v_lesson_id IS NULL OR v_lesson_id = '' THEN
      RAISE EXCEPTION 'award_xp: lesson_complete requires metadata.lesson_id';
    END IF;
    SELECT 1 INTO v_recent
      FROM public.xp_events
     WHERE user_id    = v_user_id
       AND event_type = 'lesson_complete'
       AND metadata->>'lesson_id' = v_lesson_id
     LIMIT 1;
    IF FOUND THEN
      -- Already rewarded for this lesson — return current total, no-op.
      SELECT xp INTO v_new_total FROM public.profiles WHERE id = v_user_id;
      RETURN COALESCE(v_new_total, 0);
    END IF;
  ELSE
    -- Universal hourly throttle for engagement events (login, ai_*_use,
    -- post_create, comment_create, post_like, user_follow).
    SELECT 1 INTO v_recent
      FROM public.xp_events
     WHERE user_id    = v_user_id
       AND event_type = p_event_type
       AND created_at > now() - INTERVAL '1 hour'
     LIMIT 1;
    IF FOUND THEN
      SELECT xp INTO v_new_total FROM public.profiles WHERE id = v_user_id;
      RETURN COALESCE(v_new_total, 0);
    END IF;
  END IF;

  -- ── Grant ──────────────────────────────────────────────────────────────
  INSERT INTO public.xp_events (user_id, event_type, amount, metadata)
  VALUES (v_user_id, p_event_type, p_amount, v_metadata);

  -- Atomic increment on profiles.xp. INSERT-on-conflict pattern in case
  -- the profile row hasn't been created yet (race on first login).
  INSERT INTO public.profiles (id, xp)
       VALUES (v_user_id, p_amount)
  ON CONFLICT (id) DO UPDATE
     SET xp = public.profiles.xp + p_amount
  RETURNING xp INTO v_new_total;

  RETURN v_new_total;
END;
$$;

REVOKE ALL ON FUNCTION public.award_xp(text, integer, jsonb) FROM public;
GRANT  EXECUTE ON FUNCTION public.award_xp(text, integer, jsonb) TO authenticated, service_role;

-- ─── redeem_xp(p_product_id, p_xp_cost, p_metadata) → integer (new total)
--
-- Atomic spend. Returns the new total on success, or RAISES on insufficient
-- balance — the client (lib/xp-events.ts) catches and surfaces a friendly
-- "not enough XP" toast. SECURITY DEFINER same as award_xp.

CREATE OR REPLACE FUNCTION public.redeem_xp(
  p_product_id text,
  p_xp_cost    integer,
  p_metadata   jsonb DEFAULT '{}'::jsonb
) RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id   uuid := auth.uid();
  v_new_total integer;
  v_metadata  jsonb := COALESCE(p_metadata, '{}'::jsonb) || jsonb_build_object('product_id', p_product_id);
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'redeem_xp: no auth.uid() — caller must be signed in';
  END IF;
  IF p_xp_cost IS NULL OR p_xp_cost <= 0 THEN
    RAISE EXCEPTION 'redeem_xp: p_xp_cost must be > 0';
  END IF;

  -- Atomic conditional decrement.
  UPDATE public.profiles
     SET xp = xp - p_xp_cost
   WHERE id = v_user_id
     AND xp >= p_xp_cost
  RETURNING xp INTO v_new_total;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'redeem_xp: insufficient balance';
  END IF;

  INSERT INTO public.xp_events (user_id, event_type, amount, metadata)
  VALUES (v_user_id, 'redeem', -p_xp_cost, v_metadata);

  RETURN v_new_total;
END;
$$;

REVOKE ALL ON FUNCTION public.redeem_xp(text, integer, jsonb) FROM public;
GRANT  EXECUTE ON FUNCTION public.redeem_xp(text, integer, jsonb) TO authenticated, service_role;

-- ─── admin_bump_xp(p_user_id, p_amount) → integer (new total)
--
-- Service-role-only helper for the RevenueCat webhook. Bypasses auth.uid()
-- because webhooks run with no caller JWT, and the throttle because
-- real-money purchases are server-validated upstream. The audit row in
-- xp_events is inserted by the WEBHOOK directly (with rc_event_id for
-- idempotency); this RPC only handles the atomic profiles.xp increment.

CREATE OR REPLACE FUNCTION public.admin_bump_xp(
  p_user_id uuid,
  p_amount  integer
) RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_new_total integer;
BEGIN
  IF p_user_id IS NULL THEN
    RAISE EXCEPTION 'admin_bump_xp: p_user_id required';
  END IF;
  IF p_amount IS NULL OR p_amount = 0 THEN
    RAISE EXCEPTION 'admin_bump_xp: p_amount must be non-zero';
  END IF;

  INSERT INTO public.profiles (id, xp)
       VALUES (p_user_id, p_amount)
  ON CONFLICT (id) DO UPDATE
     SET xp = public.profiles.xp + p_amount
  RETURNING xp INTO v_new_total;

  RETURN v_new_total;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_bump_xp(uuid, integer) FROM public;
GRANT  EXECUTE ON FUNCTION public.admin_bump_xp(uuid, integer) TO service_role;
