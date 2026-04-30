-- ============================================================================
-- 005-three-pack-architecture.sql
--
-- Migration to Rwendo schema v3 — the three-pack composition model.
-- See docs/PRODUCT-DESIGN.md §3 for the architecture and
-- docs/DATABASE-DESIGN.md §10 for the migration plan.
--
-- This migration is NON-DESTRUCTIVE: legacy columns are preserved as shadows
-- for one release. Backfill from legacy → v3 happens in this script so that
-- existing users continue to work without re-onboarding. The cleanup
-- migration 006 (run ~1 month later) drops the legacy columns.
--
-- Run order:
--   1. 002-functions.sql           ✅ already run
--   2. 003-consolidated-schema.sql ✅ already run
--   3. 004-account-management.sql  ✅ already run
--   4. 005-three-pack-architecture.sql  ← THIS FILE
--   5. 006-drop-legacy-pack-columns.sql ← runs ~1 month after 005 ships
--
-- Run in Supabase SQL Editor as service role (or via supabase CLI).
-- ============================================================================

begin;

-- ────────────────────────────────────────────────────────────────────────────
-- 1. jurisdictions table
-- ────────────────────────────────────────────────────────────────────────────

create table if not exists public.jurisdictions (
  id                       text primary key,
  name                     text not null,
  country_codes            text[] not null,
  extends                  text references public.jurisdictions(id),
  currency_code            text not null,
  currency_symbol          text not null,
  min_age                  integer not null default 13,
  cooling_off_days         integer not null default 0,
  voice_consent_required   boolean not null default false,
  data_residency           text not null default 'global',
  language_of_record       text not null default 'english',
  is_eu                    boolean not null default false,
  is_uk                    boolean not null default false,
  privacy_policy_md        text,
  terms_of_service_md      text,
  crisis_resources         jsonb not null default '[]'::jsonb,
  consent_disclosures      jsonb not null default '{}'::jsonb,
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now()
);

alter table public.jurisdictions enable row level security;
drop policy if exists "jurisdictions_read_all" on public.jurisdictions;
create policy "jurisdictions_read_all" on public.jurisdictions
  for select using (true);

-- Seed v1 jurisdictions
insert into public.jurisdictions (id, name, country_codes, currency_code, currency_symbol, min_age, cooling_off_days, voice_consent_required, data_residency, is_eu, is_uk, language_of_record)
values
  ('AU', 'Australia',      array['AU'],                                                                                          'AUD', 'A$', 16,  0, false, 'AU', false, false, 'english'),
  ('GB', 'United Kingdom', array['GB'],                                                                                          'GBP', '£',  13, 14, false, 'EU', false, true,  'english'),
  ('US', 'United States',  array['US'],                                                                                          'USD', '$',  13,  0, true,  'US', false, false, 'english'),
  ('EU', 'European Union', array['AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR','HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK'], 'EUR', '€',  16, 14, false, 'EU', true,  false, 'english'),
  ('ZW', 'Zimbabwe',       array['ZW'],                                                                                          'USD', '$',  13,  0, false, 'global', false, false, 'english')
on conflict (id) do nothing;

update public.jurisdictions set extends = 'AU' where id in ('GB', 'US', 'EU', 'ZW');

-- ────────────────────────────────────────────────────────────────────────────
-- 2. available_packs gets pack_kind discriminator + v3 columns
-- ────────────────────────────────────────────────────────────────────────────

alter table public.available_packs add column if not exists pack_kind              text;
alter table public.available_packs add column if not exists target_language_id     text;
alter table public.available_packs add column if not exists course_type            text;
alter table public.available_packs add column if not exists available_for_speakers text[];
alter table public.available_packs add column if not exists prices_by_jurisdiction jsonb default '{}'::jsonb;

-- Backfill pack_kind for existing rows (from the v2 pack_type taxonomy)
update public.available_packs
   set pack_kind = 'course',
       course_type = 'language',
       target_language_id = learned_language_id,
       available_for_speakers = array[spoken_language_id]
 where pack_type = 'language' and pack_kind is null;

update public.available_packs
   set pack_kind = 'tier-addon'
 where id in ('ai-companion-text', 'ai-companion-voice', 'ai-companion-realtime', 'ai-premium')
   and pack_kind is null;

update public.available_packs
   set pack_kind = 'course',
       course_type = 'travel'
 where id = 'travel-zimbabwe' and pack_kind is null;

-- Insert v3 speaker packs (always free, bundled at v1)
insert into public.available_packs (id, pack_kind, name, description, is_free, is_active, sort_order)
values
  ('speaker:english', 'speaker', 'English speaker pack', 'UI, AI prompt, greetings, voices, tips authored in English.', true, true, 0),
  ('speaker:shona',   'speaker', 'Shona speaker pack',   'UI, AI prompt, greetings, voices, tips authored in Shona.',   true, true, 0)
on conflict (id) do nothing;

-- Insert v3 jurisdiction packs as catalogue rows so user_packs can FK to them
insert into public.available_packs (id, pack_kind, name, is_free, is_active, sort_order)
values
  ('jurisdiction:AU', 'jurisdiction', 'Australia',      true, true, 0),
  ('jurisdiction:GB', 'jurisdiction', 'United Kingdom', true, true, 0),
  ('jurisdiction:US', 'jurisdiction', 'United States',  true, true, 0),
  ('jurisdiction:EU', 'jurisdiction', 'European Union', true, true, 0),
  ('jurisdiction:ZW', 'jurisdiction', 'Zimbabwe',       true, true, 0)
on conflict (id) do nothing;

-- Insert v3 composite course packs (alongside the legacy 'shona-english' etc.)
insert into public.available_packs (id, pack_kind, course_type, target_language_id, available_for_speakers, name, description, is_free, is_active, sort_order)
values
  ('course:language-shona',   'course', 'language',     'shona',   array['english','shona'], 'Learn Shona',
   '100 lessons across 10 modules, full 7-phase Rwendo Method.', false, true,  10),
  ('course:language-english', 'course', 'language',     'english', array['shona'],            'Learn English',
   '100 lessons authored from a Shona speaker''s perspective. Coming with Phase K.', false, false, 11),
  ('course:ai-companion',     'course', 'ai-companion', null,      array['english','shona'], 'AI Companion',
   'A relationship that grows with you — open conversation, memory, depth levels.', false, false, 20)
on conflict (id) do nothing;

-- ────────────────────────────────────────────────────────────────────────────
-- 3. profiles new columns
-- ────────────────────────────────────────────────────────────────────────────

alter table public.profiles add column if not exists speaker_pack_id   text;
alter table public.profiles add column if not exists active_course_ids text[] default '{}';
alter table public.profiles add column if not exists jurisdiction_id   text references public.jurisdictions(id);

-- Backfill from legacy columns (idempotent)
update public.profiles
   set speaker_pack_id = coalesce(speaker_pack_id, app_language)
 where speaker_pack_id is null and app_language is not null;

update public.profiles
   set jurisdiction_id = coalesce(
     jurisdiction_id,
     case
       when is_uk_customer = true then 'GB'
       when is_eu_customer = true then 'EU'
       when country_code = 'AU' then 'AU'
       when country_code = 'US' then 'US'
       when country_code = 'ZW' then 'ZW'
       when country_code = 'GB' then 'GB'
       else 'AU'
     end
   )
 where jurisdiction_id is null;

update public.profiles
   set active_course_ids = case
     when active_language_pack_id = 'shona-english'  then array['course:language-shona']
     when active_language_pack_id = 'english-shona'  then array['course:language-english']
     else '{}'::text[]
   end
 where (active_course_ids is null or active_course_ids = '{}')
   and active_language_pack_id is not null;

create index if not exists idx_profiles_speaker_pack    on public.profiles(speaker_pack_id);
create index if not exists idx_profiles_jurisdiction    on public.profiles(jurisdiction_id);
create index if not exists idx_profiles_active_courses  on public.profiles using gin (active_course_ids);

-- ────────────────────────────────────────────────────────────────────────────
-- 4. Decomposition helper for backward-compat reads
-- ────────────────────────────────────────────────────────────────────────────

create or replace function public.decompose_legacy_pack(p_pair text, p_country text)
returns table(speaker_pack_id text, course_id text, jurisdiction_id text)
language sql stable as $$
  select
    case p_pair
      when 'shona-english' then 'english'
      when 'english-shona' then 'shona'
      else 'english'
    end,
    case p_pair
      when 'shona-english' then 'course:language-shona'
      when 'english-shona' then 'course:language-english'
      else 'course:language-shona'
    end,
    case
      when p_country = 'GB' then 'GB'
      when p_country = 'US' then 'US'
      when p_country = 'ZW' then 'ZW'
      when p_country = 'AU' then 'AU'
      when p_country in ('AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR','HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK') then 'EU'
      else 'AU'
    end;
$$;

-- ────────────────────────────────────────────────────────────────────────────
-- 5. handle_new_user_complete — make sure new sign-ups get sensible defaults
-- ────────────────────────────────────────────────────────────────────────────

-- The existing trigger creates a profiles row + subscriptions row on auth.users INSERT.
-- We want new rows to also default to speaker_pack_id='english', jurisdiction_id='AU'
-- when not specified. The trigger's default values will pick these up automatically
-- once the columns have defaults set.

alter table public.profiles alter column speaker_pack_id set default 'english';
alter table public.profiles alter column jurisdiction_id set default 'AU';

-- ────────────────────────────────────────────────────────────────────────────
-- 6. Sanity check view — useful when validating the migration
-- ────────────────────────────────────────────────────────────────────────────

create or replace view public.v_profile_pack_composition as
  select
    p.id                                  as user_id,
    p.username                            as username,
    p.speaker_pack_id                     as speaker,
    p.active_course_ids                   as active_courses,
    p.jurisdiction_id                     as jurisdiction,
    -- legacy shadow values (drop in v3.1)
    p.app_language                        as legacy_app_language,
    p.active_language_pack_id             as legacy_active_pack,
    p.country_code                        as legacy_country_code,
    p.is_eu_customer                      as legacy_is_eu,
    p.is_uk_customer                      as legacy_is_uk
  from public.profiles p;

commit;

-- ============================================================================
-- POST-RUN VERIFICATION
-- ============================================================================
-- After running this migration, sanity-check with:
--
--   select count(*), pack_kind from public.available_packs group by pack_kind;
--   -- expected ~8 'course', 5 'jurisdiction', 2 'speaker', 4 'tier-addon'
--
--   select count(*) from public.jurisdictions;
--   -- expected 5
--
--   select count(*) as profiles_total,
--          count(*) filter (where speaker_pack_id is not null) as has_speaker,
--          count(*) filter (where jurisdiction_id is not null) as has_jurisdiction
--     from public.profiles;
--   -- has_speaker and has_jurisdiction should both equal profiles_total
--
--   select * from public.v_profile_pack_composition limit 5;
-- ============================================================================
