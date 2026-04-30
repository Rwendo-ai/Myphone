-- ════════════════════════════════════════════════════════════════════════════
-- RWENDO — COMPLETE CONSOLIDATED SCHEMA v2.0
-- Run this in Supabase SQL Editor
-- This expands existing tables and adds new ones
-- ONE database, multiple well-designed tables = correct architecture
-- ════════════════════════════════════════════════════════════════════════════

-- ─── 1. EXPAND PROFILES ──────────────────────────────────────────────────────
-- Add all new columns to existing profiles table

alter table public.profiles
  -- Display
  add column if not exists email text,

  -- Demographics (for AI personalisation + legal compliance)
  add column if not exists gender text,
  add column if not exists date_of_birth date,
  add column if not exists age_range text,
  add column if not exists is_minor boolean default false,

  -- App & language settings
  add column if not exists app_language text default 'english',

  -- Onboarding completion
  add column if not exists onboarding_complete boolean default false,
  add column if not exists primary_path text,

  -- Learning profile (collected during onboarding)
  add column if not exists active_language_pack_id text default 'shona-english',
  add column if not exists ability_level text,
  add column if not exists learning_reasons text[],
  add column if not exists time_commitment text,
  add column if not exists learning_challenges text[],
  add column if not exists personal_connection text,

  -- Companion profile (collected during onboarding)
  add column if not exists companion_type text,
  add column if not exists companion_topics text[],
  add column if not exists rwen_personality jsonb,

  -- Voice preference
  add column if not exists rwen_voice_key text default 'male_warm',

  -- Parental relationship
  add column if not exists is_parent_account boolean default false,
  add column if not exists parent_id uuid references public.profiles(id),

  -- Legal consent timestamps (null = not yet agreed)
  add column if not exists terms_agreed_at timestamptz,
  add column if not exists privacy_agreed_at timestamptz,
  add column if not exists age_confirmed_at timestamptz,
  add column if not exists ai_disclosed_at timestamptz,
  add column if not exists voice_consent_at timestamptz,

  -- Metadata
  add column if not exists updated_at timestamptz default now();

-- ─── 2. AVAILABLE PACKS — The catalogue ──────────────────────────────────────
-- Every pack that exists in the system, regardless of who owns it

create table if not exists public.available_packs (
  id text primary key,
  -- e.g. 'shona-english', 'english-shona', 'ai-companion', 'travel-zimbabwe'

  pack_type text not null,
  -- 'language' | 'feature' | 'content' | 'cultural'

  name text not null,
  description text,

  -- Language pack fields
  spoken_language_id text,   -- 'english' | 'shona' | 'french'
  learned_language_id text,  -- 'shona' | 'english' | 'french'

  -- Feature pack field
  feature_key text,
  -- 'ai_companion' | 'voice' | 'travel' | 'community' | 'premium'

  -- Visual identity (each pack has its own theme)
  primary_color text,
  secondary_color text,
  accent_color text,
  flag_emoji text,
  cover_image_url text,

  -- Pricing
  revenuecat_product_id text,
  price_aud decimal(10,2),
  is_free boolean default false,
  is_subscription boolean default false,
  subscription_period text, -- 'monthly' | 'annual'

  -- Status
  is_active boolean default true,
  is_coming_soon boolean default false,
  requires_pack_id text, -- e.g. ai-companion requires a language pack first
  sort_order integer default 0,

  created_at timestamptz default now()
);

-- Seed the available packs
insert into public.available_packs (id, pack_type, name, description, spoken_language_id, learned_language_id, flag_emoji, is_free, sort_order)
values
  ('shona-english', 'language', 'Learn Shona', 'English speakers learning Shona — 100 lessons, A2 fluency', 'english', 'shona', '🇿🇼', false, 1),
  ('english-shona', 'language', 'Dzidza ChiRungu', 'Shona speakers learning English — 100 lessons, A2 fluency', 'shona', 'english', '🇬🇧', false, 2)
on conflict (id) do nothing;

insert into public.available_packs (id, pack_type, name, description, feature_key, is_free, is_subscription, subscription_period, price_aud, sort_order, is_coming_soon)
values
  ('ai-companion-text', 'feature', 'AI Companion — Text', 'Rwen as your text companion. 500 messages/month.', 'ai_companion', false, true, 'monthly', 10.00, 10, false),
  ('ai-companion-voice', 'feature', 'AI Companion — Voice', 'Rwen speaks to you. 200 voiced messages/month.', 'voice', false, true, 'monthly', 15.00, 11, false),
  ('ai-companion-realtime', 'feature', 'Companion Mode', '60 min real-time conversation/month. ElevenLabs Agents.', 'ai_realtime', false, true, 'monthly', 25.00, 12, false),
  ('ai-premium', 'feature', 'Premium Companion', '120 min + avatar lipsync. Most immersive experience.', 'premium', false, true, 'monthly', 45.00, 13, false),
  ('travel-zimbabwe', 'feature', 'Zimbabwe Travel', 'Phrasebook, cultural guide, Victoria Falls, kombi navigation.', 'travel', false, false, null, 4.99, 20, true),
  ('community', 'feature', 'Community', 'Connect with learners and native speakers.', 'community', false, false, null, null, 30, true)
on conflict (id) do nothing;

-- ─── 3. USER PACKS — What each user owns ─────────────────────────────────────

create table if not exists public.user_packs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  pack_id text references public.available_packs(id) not null,

  -- How acquired
  acquisition_type text default 'purchase',
  -- 'purchase' | 'free' | 'parent_grant' | 'promo' | 'trial'

  revenuecat_entitlement_id text,

  -- Status
  is_active boolean default true,
  purchased_at timestamptz default now(),
  expires_at timestamptz,  -- null = permanent/subscription managed by RevenueCat

  -- Usage limits (reset monthly)
  usage_count integer default 0,       -- messages or sessions used this period
  usage_limit integer,                  -- null = unlimited
  usage_reset_at timestamptz,          -- when usage resets

  unique(user_id, pack_id)
);

-- RLS
alter table public.user_packs enable row level security;
create policy "Users can view own packs" on public.user_packs for select using (auth.uid() = user_id);
create policy "Users can insert own packs" on public.user_packs for insert with check (auth.uid() = user_id);
create policy "Users can update own packs" on public.user_packs for update using (auth.uid() = user_id);
grant select, insert, update on public.user_packs to authenticated;

-- Make available_packs readable by all (it's a catalogue)
alter table public.available_packs enable row level security;
create policy "Anyone can view available packs" on public.available_packs for select using (true);
grant select on public.available_packs to authenticated, anon;

-- ─── 4. EXPAND LESSON PROGRESS ───────────────────────────────────────────────
alter table public.lesson_progress
  add column if not exists pack_id text references public.available_packs(id),
  add column if not exists total_questions integer,
  add column if not exists time_spent_seconds integer;

-- ─── 5. EXPAND CONVERSATIONS ─────────────────────────────────────────────────
alter table public.conversations
  add column if not exists pack_context text,
  -- which pack/feature this conversation was in
  -- e.g. 'ai-companion-text' | 'lesson-m01-l01' | 'travel-zimbabwe'

  add column if not exists session_id uuid;
  -- groups messages from the same conversation session

-- ─── 6. PARENTAL CODES ───────────────────────────────────────────────────────
-- Parents generate a code. Child enters it during onboarding.

create table if not exists public.parental_codes (
  id uuid primary key default gen_random_uuid(),
  parent_user_id uuid references public.profiles(id) on delete cascade not null,

  code text not null unique,
  -- 8-character alphanumeric, e.g. 'RWEN4729'
  -- Generated by parent in Profile → Family → Add Child

  -- What the child account is allowed to do
  allowed_pack_ids text[] default array['shona-english'],
  max_age_rating text default 'teen',  -- 'kids' | 'teen' | 'all'
  -- 'kids' = language learning only, no AI companion
  -- 'teen' = language + basic AI companion (age-appropriate)
  -- 'all' = full access

  -- Child account linked
  is_used boolean default false,
  child_user_id uuid references public.profiles(id),
  used_at timestamptz,

  -- Code lifecycle
  created_at timestamptz default now(),
  expires_at timestamptz default (now() + interval '7 days')
);

alter table public.parental_codes enable row level security;
create policy "Parents can manage own codes" on public.parental_codes
  for all using (auth.uid() = parent_user_id);
create policy "Anyone can look up unused codes" on public.parental_codes
  for select using (is_used = false and expires_at > now());
grant select, insert, update on public.parental_codes to authenticated;

-- ─── 7. SUBSCRIPTIONS (mirrors RevenueCat, for offline/fast lookups) ─────────

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,

  revenuecat_customer_id text,
  active_tier text default 'free',
  -- 'free' | 'text_ai' | 'voice' | 'companion' | 'premium'

  -- Usage tracking (reset monthly)
  ai_messages_used integer default 0,
  ai_messages_limit integer default 0,      -- 0 = no AI access
  voice_messages_used integer default 0,
  voice_messages_limit integer default 0,   -- 0 = no voice
  realtime_minutes_used decimal default 0,
  realtime_minutes_limit decimal default 0, -- 0 = no realtime

  -- Current billing period
  period_start timestamptz,
  period_end timestamptz,

  updated_at timestamptz default now(),
  unique(user_id)
);

alter table public.subscriptions enable row level security;
create policy "Users view own subscription" on public.subscriptions for select using (auth.uid() = user_id);
create policy "Users update own subscription" on public.subscriptions for update using (auth.uid() = user_id);
create policy "Users insert own subscription" on public.subscriptions for insert with check (auth.uid() = user_id);
grant select, insert, update on public.subscriptions to authenticated;

-- ─── 8. AUTO-CREATE SUBSCRIPTION RECORD ON SIGNUP ───────────────────────────

create or replace function public.handle_new_user_complete()
returns trigger as $$
begin
  -- Create profile
  insert into public.profiles (id, username, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    new.email
  )
  on conflict (id) do update set email = new.email;

  -- Create subscription record (free tier)
  insert into public.subscriptions (user_id, active_tier)
  values (new.id, 'free')
  on conflict (user_id) do nothing;

  return new;
end;
$$ language plpgsql security definer;

-- Replace old trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user_complete();

-- ─── 9. FUNCTION: GENERATE PARENTAL CODE ─────────────────────────────────────

create or replace function public.generate_parental_code(p_parent_id uuid)
returns text as $$
declare
  v_code text;
  v_chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; -- no ambiguous chars
  v_exists boolean;
begin
  loop
    -- Generate 8-character code
    v_code := '';
    for i in 1..8 loop
      v_code := v_code || substr(v_chars, floor(random() * length(v_chars) + 1)::int, 1);
    end loop;

    -- Check uniqueness
    select exists(select 1 from public.parental_codes where code = v_code) into v_exists;
    exit when not v_exists;
  end loop;

  -- Insert code
  insert into public.parental_codes (parent_user_id, code)
  values (p_parent_id, v_code);

  return v_code;
end;
$$ language plpgsql security definer;

-- ─── 10. FUNCTION: REDEEM PARENTAL CODE ──────────────────────────────────────

create or replace function public.redeem_parental_code(p_code text, p_child_id uuid)
returns jsonb as $$
declare
  v_code_record record;
begin
  -- Find valid code
  select * into v_code_record
  from public.parental_codes
  where code = upper(p_code)
    and is_used = false
    and expires_at > now();

  if not found then
    return jsonb_build_object('success', false, 'error', 'Invalid or expired code');
  end if;

  -- Mark code as used
  update public.parental_codes
  set is_used = true, child_user_id = p_child_id, used_at = now()
  where id = v_code_record.id;

  -- Link child to parent
  update public.profiles
  set parent_id = v_code_record.parent_user_id, is_minor = true
  where id = p_child_id;

  -- Grant child access to allowed packs
  insert into public.user_packs (user_id, pack_id, acquisition_type)
  select p_child_id, unnest(v_code_record.allowed_pack_ids), 'parent_grant'
  on conflict (user_id, pack_id) do nothing;

  return jsonb_build_object(
    'success', true,
    'max_age_rating', v_code_record.max_age_rating,
    'allowed_packs', v_code_record.allowed_pack_ids
  );
end;
$$ language plpgsql security definer;

-- ─── 11. HELPER: CHECK PACK ACCESS ───────────────────────────────────────────

create or replace function public.user_has_pack(p_user_id uuid, p_pack_id text)
returns boolean as $$
begin
  return exists (
    select 1 from public.user_packs
    where user_id = p_user_id
      and pack_id = p_pack_id
      and is_active = true
      and (expires_at is null or expires_at > now())
  );
end;
$$ language plpgsql security definer;

-- ─── GRANT PERMISSIONS ───────────────────────────────────────────────────────

grant select, insert, update on public.profiles to authenticated;
grant select, insert, update on public.lesson_progress to authenticated;
grant select, insert on public.conversations to authenticated;
grant select, insert, update on public.subscriptions to authenticated;
grant select, insert, update on public.user_packs to authenticated;
grant select, insert, update on public.parental_codes to authenticated;
grant select on public.available_packs to authenticated, anon;

-- ════════════════════════════════════════════════════════════════════════════
-- SCHEMA SUMMARY:
--
-- profiles          — who the user is (expanded with full onboarding data)
-- available_packs   — the product catalogue (language packs, feature packs)
-- user_packs        — what each user owns/has access to
-- lesson_progress   — which lessons are complete (per user, per pack)
-- conversations     — AI chat history (per user, tagged by pack context)
-- parental_codes    — parent generates → child redeems → lite account linked
-- subscriptions     — mirrors RevenueCat for fast offline tier checks
--
-- ONE database. SEVEN tables. Clean, extensible, correct.
-- ════════════════════════════════════════════════════════════════════════════
