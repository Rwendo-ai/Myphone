-- ════════════════════════════════════════════════════════════════════════════
-- RWENDO — ACCOUNT MANAGEMENT, EU COMPLIANCE & INDEXES
-- Migration 004
-- Run AFTER 003-consolidated-schema.sql
-- ════════════════════════════════════════════════════════════════════════════

-- ─── 1. ADD COUNTRY & EU FIELDS TO PROFILES ──────────────────────────────────

alter table public.profiles
  add column if not exists country_code text,       -- ISO 3166-1 alpha-2
  add column if not exists is_eu_customer boolean default false,
  add column if not exists is_uk_customer boolean default false;

-- ─── 2. ADD EU COOLING-OFF TO SUBSCRIPTIONS ──────────────────────────────────

alter table public.subscriptions
  add column if not exists cooling_off_ends_at timestamptz,
  add column if not exists country_code text,         -- snapshot at subscription time
  add column if not exists cancelled_at timestamptz,
  add column if not exists cancellation_reason text,
  add column if not exists refund_issued boolean default false,
  add column if not exists refund_amount_aud decimal(10,2),
  add column if not exists refund_issued_at timestamptz;

-- ─── 3. PERFORMANCE INDEXES ──────────────────────────────────────────────────

-- Lesson progress: most common query is by user_id
create index if not exists idx_lesson_progress_user
  on public.lesson_progress(user_id);

-- Lesson progress: also need to look up specific lessons
create index if not exists idx_lesson_progress_user_lesson
  on public.lesson_progress(user_id, lesson_id);

-- Conversations: latest messages first per user
create index if not exists idx_conversations_user_created
  on public.conversations(user_id, created_at desc);

-- Conversations: filter by session
create index if not exists idx_conversations_session
  on public.conversations(session_id) where session_id is not null;

-- User packs: fast pack access check (active packs only)
create index if not exists idx_user_packs_user
  on public.user_packs(user_id);

create index if not exists idx_user_packs_active
  on public.user_packs(user_id, is_active)
  where is_active = true;

-- Parental codes: fast code lookup (unused only)
create index if not exists idx_parental_codes_code
  on public.parental_codes(code)
  where is_used = false;

-- Profiles: country queries for legal compliance
create index if not exists idx_profiles_country
  on public.profiles(country_code) where country_code is not null;

-- ─── 4. EU COUNTRY LIST ──────────────────────────────────────────────────────
-- Used to auto-set is_eu_customer when country_code is provided

create or replace function public.set_customer_region(p_country_code text)
returns jsonb as $$
declare
  v_eu_countries text[] := array[
    'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI',
    'FR','GR','HR','HU','IE','IT','LT','LU','LV','MT',
    'NL','PL','PT','RO','SE','SI','SK'
  ];
begin
  return jsonb_build_object(
    'is_eu', p_country_code = any(v_eu_countries),
    'is_uk', p_country_code = 'GB',
    'cooling_off_days', case
      when p_country_code = any(v_eu_countries) then 14
      when p_country_code = 'GB' then 14
      else 0
    end
  );
end;
$$ language plpgsql immutable;

-- ─── 5. UPDATE PROFILE COUNTRY ───────────────────────────────────────────────

create or replace function public.update_user_country(
  p_user_id uuid,
  p_country_code text
)
returns void as $$
declare
  v_region jsonb;
begin
  v_region := public.set_customer_region(upper(p_country_code));

  update public.profiles
  set
    country_code = upper(p_country_code),
    is_eu_customer = (v_region->>'is_eu')::boolean,
    is_uk_customer = (v_region->>'is_uk')::boolean,
    updated_at = now()
  where id = p_user_id;
end;
$$ language plpgsql security definer;

-- ─── 6. START SUBSCRIPTION (sets cooling-off for EU/UK) ──────────────────────

create or replace function public.start_subscription(
  p_user_id uuid,
  p_tier text,
  p_revenuecat_customer_id text,
  p_period_start timestamptz default now(),
  p_period_end timestamptz default null
)
returns void as $$
declare
  v_profile record;
  v_cooling_off_days integer;
  v_cooling_off_ends timestamptz;
  v_ai_limit integer;
  v_voice_limit integer;
  v_realtime_limit decimal;
begin
  -- Get user's country/region
  select country_code, is_eu_customer, is_uk_customer
  into v_profile
  from public.profiles where id = p_user_id;

  -- Set cooling-off period for EU/UK
  if v_profile.is_eu_customer or v_profile.is_uk_customer then
    v_cooling_off_ends := p_period_start + interval '14 days';
  else
    v_cooling_off_ends := null;
  end if;

  -- Set usage limits by tier
  case p_tier
    when 'free' then
      v_ai_limit := 0; v_voice_limit := 0; v_realtime_limit := 0;
    when 'text_ai' then
      v_ai_limit := 500; v_voice_limit := 0; v_realtime_limit := 0;
    when 'voice' then
      v_ai_limit := 999999; v_voice_limit := 200; v_realtime_limit := 0;
    when 'companion' then
      v_ai_limit := 999999; v_voice_limit := 999999; v_realtime_limit := 60;
    when 'premium' then
      v_ai_limit := 999999; v_voice_limit := 999999; v_realtime_limit := 120;
    else
      v_ai_limit := 0; v_voice_limit := 0; v_realtime_limit := 0;
  end case;

  -- Upsert subscription record
  insert into public.subscriptions (
    user_id,
    revenuecat_customer_id,
    active_tier,
    ai_messages_limit,
    voice_messages_limit,
    realtime_minutes_limit,
    ai_messages_used,
    voice_messages_used,
    realtime_minutes_used,
    cooling_off_ends_at,
    country_code,
    period_start,
    period_end,
    updated_at
  )
  values (
    p_user_id,
    p_revenuecat_customer_id,
    p_tier,
    v_ai_limit,
    v_voice_limit,
    v_realtime_limit,
    0, 0, 0,
    v_cooling_off_ends,
    v_profile.country_code,
    p_period_start,
    p_period_end,
    now()
  )
  on conflict (user_id) do update set
    revenuecat_customer_id = excluded.revenuecat_customer_id,
    active_tier = excluded.active_tier,
    ai_messages_limit = excluded.ai_messages_limit,
    voice_messages_limit = excluded.voice_messages_limit,
    realtime_minutes_limit = excluded.realtime_minutes_limit,
    ai_messages_used = 0,
    voice_messages_used = 0,
    realtime_minutes_used = 0,
    cooling_off_ends_at = excluded.cooling_off_ends_at,
    period_start = excluded.period_start,
    period_end = excluded.period_end,
    cancelled_at = null,
    updated_at = now();
end;
$$ language plpgsql security definer;

-- ─── 7. CHECK EU COOLING-OFF ─────────────────────────────────────────────────

create or replace function public.check_eu_cooling_off(p_user_id uuid)
returns jsonb as $$
declare
  v_sub record;
begin
  select * into v_sub from public.subscriptions where user_id = p_user_id;

  if not found then
    return jsonb_build_object('in_cooling_off', false, 'cooling_off_ends_at', null);
  end if;

  return jsonb_build_object(
    'in_cooling_off', v_sub.cooling_off_ends_at is not null
                      and v_sub.cooling_off_ends_at > now(),
    'cooling_off_ends_at', v_sub.cooling_off_ends_at,
    'days_remaining', case
      when v_sub.cooling_off_ends_at > now()
      then ceil(extract(epoch from (v_sub.cooling_off_ends_at - now())) / 86400)
      else 0
    end,
    'eligible_for_refund', v_sub.cooling_off_ends_at is not null
                           and v_sub.cooling_off_ends_at > now()
                           and not v_sub.refund_issued
  );
end;
$$ language plpgsql security definer;

-- ─── 8. CANCEL SUBSCRIPTION ──────────────────────────────────────────────────

create or replace function public.cancel_subscription(
  p_user_id uuid,
  p_reason text default null
)
returns jsonb as $$
declare
  v_sub record;
  v_cooling_off jsonb;
  v_refund_eligible boolean;
begin
  select * into v_sub from public.subscriptions where user_id = p_user_id;
  if not found then
    return jsonb_build_object('success', false, 'error', 'No subscription found');
  end if;

  -- Check cooling-off
  v_cooling_off := public.check_eu_cooling_off(p_user_id);
  v_refund_eligible := (v_cooling_off->>'eligible_for_refund')::boolean;

  -- Record cancellation
  update public.subscriptions
  set
    cancelled_at = now(),
    cancellation_reason = p_reason,
    updated_at = now()
  where user_id = p_user_id;

  -- Downgrade to free immediately if in cooling-off
  if v_refund_eligible then
    update public.subscriptions
    set active_tier = 'free', ai_messages_limit = 0,
        voice_messages_limit = 0, realtime_minutes_limit = 0
    where user_id = p_user_id;
  end if;

  return jsonb_build_object(
    'success', true,
    'refund_eligible', v_refund_eligible,
    'refund_message', case
      when v_refund_eligible
      then 'You are eligible for a full refund under EU/UK consumer law. Refund will be processed within 14 days.'
      else 'Cancellation recorded. Access continues until end of billing period.'
    end
  );
end;
$$ language plpgsql security definer;

-- ─── 9. USAGE TRACKING ───────────────────────────────────────────────────────

create or replace function public.increment_usage(
  p_user_id uuid,
  p_usage_type text,  -- 'ai_message' | 'voice_message' | 'realtime_minutes'
  p_amount decimal default 1
)
returns jsonb as $$
declare
  v_sub record;
  v_used decimal;
  v_limit decimal;
  v_over_limit boolean;
begin
  select * into v_sub from public.subscriptions where user_id = p_user_id;

  if not found then
    return jsonb_build_object('allowed', false, 'reason', 'No subscription');
  end if;

  case p_usage_type
    when 'ai_message' then
      v_used := v_sub.ai_messages_used;
      v_limit := v_sub.ai_messages_limit;
    when 'voice_message' then
      v_used := v_sub.voice_messages_used;
      v_limit := v_sub.voice_messages_limit;
    when 'realtime_minutes' then
      v_used := v_sub.realtime_minutes_used;
      v_limit := v_sub.realtime_minutes_limit;
    else
      return jsonb_build_object('allowed', false, 'reason', 'Unknown usage type');
  end case;

  -- 0 limit = no access, 999999 = effectively unlimited
  if v_limit = 0 then
    return jsonb_build_object(
      'allowed', false,
      'reason', 'Feature not available on your current plan',
      'upgrade_required', true
    );
  end if;

  -- Check limit (skip check if limit is 999999)
  v_over_limit := v_limit < 999999 and v_used + p_amount > v_limit;

  if v_over_limit then
    return jsonb_build_object(
      'allowed', false,
      'reason', 'Monthly limit reached',
      'used', v_used,
      'limit', v_limit,
      'topup_available', true
    );
  end if;

  -- Increment usage
  case p_usage_type
    when 'ai_message' then
      update public.subscriptions
      set ai_messages_used = ai_messages_used + p_amount, updated_at = now()
      where user_id = p_user_id;
    when 'voice_message' then
      update public.subscriptions
      set voice_messages_used = voice_messages_used + p_amount, updated_at = now()
      where user_id = p_user_id;
    when 'realtime_minutes' then
      update public.subscriptions
      set realtime_minutes_used = realtime_minutes_used + p_amount, updated_at = now()
      where user_id = p_user_id;
  end case;

  return jsonb_build_object(
    'allowed', true,
    'used', v_used + p_amount,
    'limit', case when v_limit = 999999 then null else v_limit end,
    'remaining', case when v_limit = 999999 then null else v_limit - (v_used + p_amount) end
  );
end;
$$ language plpgsql security definer;

-- ─── 10. RESET MONTHLY USAGE (call at billing period renewal) ────────────────

create or replace function public.reset_monthly_usage(p_user_id uuid)
returns void as $$
begin
  update public.subscriptions
  set
    ai_messages_used = 0,
    voice_messages_used = 0,
    realtime_minutes_used = 0,
    usage_reset_at = now(),
    updated_at = now()
  where user_id = p_user_id;

  -- Also reset user_packs usage counts
  update public.user_packs
  set usage_count = 0, usage_reset_at = now()
  where user_id = p_user_id;
end;
$$ language plpgsql security definer;

-- ─── 11. GET AI PROMPT DATA (single query for Claude context) ────────────────

create or replace function public.get_ai_prompt_data(p_user_id uuid)
returns jsonb as $$
declare
  v_profile record;
  v_sub record;
  v_completed_count integer;
begin
  select * into v_profile from public.profiles where id = p_user_id;
  select * into v_sub from public.subscriptions where user_id = p_user_id;

  select count(*) into v_completed_count
  from public.lesson_progress where user_id = p_user_id;

  return jsonb_build_object(
    'display_name', v_profile.username,
    'gender', v_profile.gender,
    'app_language', v_profile.app_language,
    'primary_path', v_profile.primary_path,
    'active_language_pack', v_profile.active_language_pack_id,
    'ability_level', v_profile.ability_level,
    'learning_reasons', v_profile.learning_reasons,
    'time_commitment', v_profile.time_commitment,
    'challenges', v_profile.learning_challenges,
    'personal_connection', v_profile.personal_connection,
    'companion_type', v_profile.companion_type,
    'companion_topics', v_profile.companion_topics,
    'rwen_personality', v_profile.rwen_personality,
    'xp', v_profile.xp,
    'streak_days', v_profile.streak_days,
    'completed_lessons', v_completed_count,
    'subscription_tier', coalesce(v_sub.active_tier, 'free')
  );
end;
$$ language plpgsql security definer;

-- ─── 12. ADMIN: SUSPEND ACCOUNT ──────────────────────────────────────────────
-- Call from service role only (e.g. Fastify backend with service key)

create or replace function public.admin_suspend_account(
  p_user_id uuid,
  p_reason text
)
returns void as $$
begin
  -- Deactivate all packs
  update public.user_packs
  set is_active = false
  where user_id = p_user_id;

  -- Downgrade subscription
  update public.subscriptions
  set active_tier = 'suspended',
      ai_messages_limit = 0,
      voice_messages_limit = 0,
      realtime_minutes_limit = 0,
      cancellation_reason = p_reason,
      updated_at = now()
  where user_id = p_user_id;
end;
$$ language plpgsql security definer;

-- ─── 13. SCHEDULED: DELETE OLD CONVERSATIONS (12-month retention) ────────────
-- Call this via a scheduled job (e.g. pg_cron or external cron)

create or replace function public.cleanup_old_conversations()
returns integer as $$
declare
  v_deleted integer;
begin
  delete from public.conversations
  where created_at < now() - interval '12 months';

  get diagnostics v_deleted = row_count;
  return v_deleted;
end;
$$ language plpgsql security definer;

-- ─── 14. CONSENT RECORDING ───────────────────────────────────────────────────

create or replace function public.record_consents(
  p_user_id uuid,
  p_terms boolean default false,
  p_privacy boolean default false,
  p_age boolean default false,
  p_ai_disclosure boolean default false,
  p_voice boolean default false
)
returns void as $$
begin
  update public.profiles
  set
    terms_agreed_at      = case when p_terms then now() else terms_agreed_at end,
    privacy_agreed_at    = case when p_privacy then now() else privacy_agreed_at end,
    age_confirmed_at     = case when p_age then now() else age_confirmed_at end,
    ai_disclosed_at      = case when p_ai_disclosure then now() else ai_disclosed_at end,
    voice_consent_at     = case when p_voice then now() else voice_consent_at end,
    updated_at           = now()
  where id = p_user_id;
end;
$$ language plpgsql security definer;

-- ─── GRANTS ───────────────────────────────────────────────────────────────────

grant execute on function public.update_user_country to authenticated;
grant execute on function public.check_eu_cooling_off to authenticated;
grant execute on function public.cancel_subscription to authenticated;
grant execute on function public.increment_usage to authenticated;
grant execute on function public.get_ai_prompt_data to authenticated;
grant execute on function public.generate_parental_code to authenticated;
grant execute on function public.redeem_parental_code to authenticated;
grant execute on function public.record_consents to authenticated;

-- admin functions: service_role only (don't grant to authenticated)
-- public.admin_suspend_account
-- public.reset_monthly_usage
-- public.cleanup_old_conversations

-- ════════════════════════════════════════════════════════════════════════════
-- SUMMARY OF NEW FUNCTIONS:
--
-- set_customer_region(country_code)    → is EU/UK? cooling-off days?
-- update_user_country(user_id, code)   → set country + EU/UK flags
-- start_subscription(user_id, tier...) → create/update sub + cooling-off
-- check_eu_cooling_off(user_id)        → in cooling-off? days remaining?
-- cancel_subscription(user_id, reason) → cancel + refund eligibility check
-- increment_usage(user_id, type, amt)  → track usage, check limits
-- reset_monthly_usage(user_id)         → reset at billing renewal
-- get_ai_prompt_data(user_id)          → all fields for Claude system prompt
-- admin_suspend_account(user_id)       → freeze account (service role only)
-- cleanup_old_conversations()          → delete 12mo+ old messages
-- record_consents(user_id, ...)        → timestamp legal consents
-- ════════════════════════════════════════════════════════════════════════════
