# Demo account script

How to create a synthetic test user with Premium tier + every course active. Useful for testing real gating logic without setting `EXPO_PUBLIC_DEV_UNLOCK_ALL=1`.

This is a manual script run in the Supabase SQL Editor (service role) — it can't run from the app because creating users in `auth.users` requires admin privileges that aren't exposed to the client.

## Prerequisites

- Migration `005-three-pack-architecture.sql` has been run.
- You have access to the Supabase SQL Editor (service role).

## Run

Open Supabase → SQL Editor → New query, paste the SQL below, click Run.

```sql
-- ============================================================================
-- Demo account: rwendo-demo@example.com / Demo!1234
-- Premium tier, every course active, AU jurisdiction.
-- ============================================================================

-- 1. Create the auth user (idempotent — safe to re-run)
DO $$
DECLARE
  v_user_id uuid;
BEGIN
  -- Try to find existing demo user
  SELECT id INTO v_user_id FROM auth.users WHERE email = 'rwendo-demo@example.com';

  IF v_user_id IS NULL THEN
    -- Create the auth user via admin API call (Supabase exposes this as a function)
    INSERT INTO auth.users (
      instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
      created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
    )
    VALUES (
      '00000000-0000-0000-0000-000000000000',
      gen_random_uuid(),
      'authenticated',
      'authenticated',
      'rwendo-demo@example.com',
      crypt('Demo!1234', gen_salt('bf')),
      now(),
      now(),
      now(),
      '', '', '', ''
    )
    RETURNING id INTO v_user_id;
  END IF;

  -- 2. Profile (handle_new_user_complete trigger should already have created
  --    a row when the user was inserted; we update it with rich demo data)
  UPDATE public.profiles SET
    username                  = 'Demo Learner',
    gender                    = 'prefer_not_to_say',
    speaker_pack_id           = 'english',
    active_course_ids         = array['course:language-shona', 'course:ai-companion'],
    jurisdiction_id           = 'AU',
    onboarding_complete       = true,
    primary_path              = 'learn',
    ability_level             = 'basics',
    learning_reasons          = array['fun', 'travel'],
    time_commitment           = '20min',
    rwen_voice_key            = 'male_warm',
    -- legacy shadow fields (drop in v3.1)
    app_language              = 'english',
    active_language_pack_id   = 'shona-english',
    country_code              = 'AU',
    is_eu_customer            = false,
    is_uk_customer            = false,
    -- consent timestamps
    terms_agreed_at           = now(),
    privacy_agreed_at         = now(),
    age_confirmed_at          = now(),
    ai_disclosed_at           = now(),
    -- counters
    xp                        = 1500,
    streak_days               = 7
  WHERE id = v_user_id;

  -- 3. Subscriptions row — Premium tier, never expires
  INSERT INTO public.subscriptions (
    user_id, active_tier, ai_messages_used, ai_messages_limit,
    voice_messages_used, voice_messages_limit, realtime_minutes_used, realtime_minutes_limit,
    country_code, period_start, period_end, updated_at
  )
  VALUES (
    v_user_id, 'premium', 0, 999999, 0, 999999, 0, 999999,
    'AU', now(), now() + interval '100 years', now()
  )
  ON CONFLICT (user_id) DO UPDATE SET
    active_tier = 'premium',
    ai_messages_limit = 999999,
    voice_messages_limit = 999999,
    realtime_minutes_limit = 999999,
    period_end = now() + interval '100 years',
    updated_at = now();

  -- 4. user_packs — give them every course pack
  INSERT INTO public.user_packs (user_id, pack_id, acquisition_type, is_active, purchased_at)
  SELECT v_user_id, id, 'free', true, now()
    FROM public.available_packs
   WHERE pack_kind = 'course' AND id IN ('course:language-shona', 'course:ai-companion')
  ON CONFLICT (user_id, pack_id) DO UPDATE SET is_active = true;

  RAISE NOTICE 'Demo account ready: rwendo-demo@example.com / Demo!1234 (user_id %)', v_user_id;
END $$;
```

## Verify

```sql
SELECT * FROM v_profile_pack_composition WHERE username = 'Demo Learner';
SELECT user_id, active_tier, ai_messages_limit FROM subscriptions
  WHERE user_id = (SELECT id FROM auth.users WHERE email = 'rwendo-demo@example.com');
SELECT pack_id, is_active FROM user_packs
  WHERE user_id = (SELECT id FROM auth.users WHERE email = 'rwendo-demo@example.com');
```

## Sign in on device

Open the app → Sign in with `rwendo-demo@example.com` / `Demo!1234`. You should land in `/(tabs)` with:

- Premium tier (no module gating)
- Both Language Shona and AI Companion courses available
- Pre-populated XP (1500) and streak (7 days) so the home screen has visible progress

## Reset

```sql
DELETE FROM auth.users WHERE email = 'rwendo-demo@example.com';
-- Cascades to profiles, subscriptions, user_packs, lesson_progress, conversations.
```
