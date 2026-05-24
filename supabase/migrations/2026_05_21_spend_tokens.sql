-- spend_tokens RPC + token_ledger audit table.
--
-- v1 launch monetisation (2026-05-21). The companion `grant_tokens` RPC
-- already exists in this project (used by the RevenueCat webhook) and
-- writes to public.user_credits.balance on top-up. This migration adds
-- the spend side:
--
--   * public.token_ledger          — append-only audit row per spend or
--                                    grant. Lets us reconstruct any
--                                    user's balance from history if the
--                                    credits row ever drifts.
--   * public.spend_tokens(...)     — atomic deduct. Returns the new
--                                    balance on success, or -1 if the
--                                    user doesn't have enough tokens.
--                                    Caller MUST check the return.
--
-- Idempotent — re-running drops & recreates the function, leaves data.

-- ─── token_ledger ──────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.token_ledger (
  id          bigserial PRIMARY KEY,
  user_id     uuid       NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- Positive on grants, negative on spends. Keeps both flows in one stream.
  delta       integer    NOT NULL,
  -- Balance AFTER applying delta. Lets reads reconstruct point-in-time.
  balance_after integer  NOT NULL,
  -- Free-form. Examples: 'pack_purchase', 'monthly_allowance',
  -- 'ai_text', 'ai_voice', 'ai_lipsync', 'refund', 'admin_grant'.
  reason      text       NOT NULL,
  -- Optional feature key for spend rows (text / voice / lipsync*).
  feature_key text,
  -- Optional pack / product identifier for grant rows.
  product_id  text,
  -- Free-form metadata blob (chars-charged, minutes-deducted, RC event id…).
  metadata    jsonb      NOT NULL DEFAULT '{}'::jsonb,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_token_ledger_user_created
  ON public.token_ledger (user_id, created_at DESC);

ALTER TABLE public.token_ledger ENABLE ROW LEVEL SECURITY;

-- Users can read their own ledger. Writes happen only via SECURITY DEFINER
-- RPCs (spend_tokens / grant_tokens), never directly.
DROP POLICY IF EXISTS "token_ledger_select_own" ON public.token_ledger;
CREATE POLICY "token_ledger_select_own"
  ON public.token_ledger FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- ─── spend_tokens(p_user_id, p_amount, p_reason, p_feature_key, p_metadata)
--
-- Atomically deducts p_amount from public.user_credits.balance for
-- p_user_id. Returns the NEW balance on success, or -1 if the user has
-- insufficient tokens. Inserts a token_ledger row on success.
--
-- SECURITY DEFINER so it can write across RLS — and so an Edge Function
-- using the service-role key (or a logged-in client) gets the same path.

CREATE OR REPLACE FUNCTION public.spend_tokens(
  p_user_id     uuid,
  p_amount      integer,
  p_reason      text,
  p_feature_key text DEFAULT NULL,
  p_metadata    jsonb DEFAULT '{}'::jsonb
) RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_new_balance integer;
BEGIN
  IF p_amount IS NULL OR p_amount <= 0 THEN
    RAISE EXCEPTION 'spend_tokens: p_amount must be > 0';
  END IF;

  -- Atomic conditional decrement. The WHERE clause prevents going negative,
  -- so we either succeed and return the new balance, or no row updates and
  -- we return -1 to signal insufficient funds. No SELECT-then-UPDATE race.
  UPDATE public.user_credits
     SET balance    = balance - p_amount,
         updated_at = now()
   WHERE user_id = p_user_id
     AND balance >= p_amount
  RETURNING balance INTO v_new_balance;

  IF NOT FOUND THEN
    -- Insufficient balance (or user has no credits row at all).
    RETURN -1;
  END IF;

  INSERT INTO public.token_ledger (
    user_id, delta, balance_after, reason, feature_key, metadata
  ) VALUES (
    p_user_id, -p_amount, v_new_balance, p_reason, p_feature_key, p_metadata
  );

  RETURN v_new_balance;
END;
$$;

REVOKE ALL ON FUNCTION public.spend_tokens(uuid, integer, text, text, jsonb) FROM public;
GRANT  EXECUTE ON FUNCTION public.spend_tokens(uuid, integer, text, text, jsonb) TO authenticated, service_role;

-- ─── Free-tier daily text quota ────────────────────────────────────────────
--
-- v1 launch: every signed-in user gets 5 free text messages per UTC day even
-- with zero token balance. After that they must top up. Voice / lipsync
-- are ALWAYS paid; there is no free voice quota.
--
-- We track usage on the existing user_credits row to avoid an extra join.
-- A counter + a date marker is enough — if the marker is older than today,
-- consume_free_message resets it before charging.

ALTER TABLE public.user_credits
  ADD COLUMN IF NOT EXISTS free_messages_used_today integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS free_messages_day        date    NOT NULL DEFAULT CURRENT_DATE;

-- consume_free_message(p_user_id) → boolean
--
-- Atomic check-and-increment of the daily free-message counter. Returns
-- TRUE on success, FALSE when the user has already used today's quota.
-- A missing user_credits row is treated as 0 used today and inserted
-- on-demand so brand-new users can chat immediately without a separate
-- bootstrap step.

CREATE OR REPLACE FUNCTION public.consume_free_message(
  p_user_id  uuid,
  p_limit    integer DEFAULT 5
) RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_used integer;
BEGIN
  -- Ensure a row exists. Default-zero balance is fine.
  INSERT INTO public.user_credits (user_id, balance, free_messages_used_today, free_messages_day)
    VALUES (p_user_id, 0, 0, CURRENT_DATE)
    ON CONFLICT (user_id) DO NOTHING;

  -- Reset the day-counter if we've rolled past midnight UTC.
  UPDATE public.user_credits
     SET free_messages_used_today = 0,
         free_messages_day        = CURRENT_DATE
   WHERE user_id = p_user_id
     AND free_messages_day < CURRENT_DATE;

  -- Atomic increment under the cap.
  UPDATE public.user_credits
     SET free_messages_used_today = free_messages_used_today + 1,
         updated_at               = now()
   WHERE user_id = p_user_id
     AND free_messages_used_today < p_limit
  RETURNING free_messages_used_today INTO v_used;

  IF NOT FOUND THEN
    RETURN false;  -- Quota exhausted for today.
  END IF;

  INSERT INTO public.token_ledger (
    user_id, delta, balance_after, reason, feature_key, metadata
  )
  SELECT p_user_id, 0, balance, 'free_text_message', 'text',
         jsonb_build_object('free_used_today', v_used, 'free_limit', p_limit)
    FROM public.user_credits
   WHERE user_id = p_user_id;

  RETURN true;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_free_message(uuid, integer) FROM public;
GRANT  EXECUTE ON FUNCTION public.consume_free_message(uuid, integer) TO authenticated, service_role;
