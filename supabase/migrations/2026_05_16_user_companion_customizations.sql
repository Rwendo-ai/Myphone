-- ===========================================================================
-- 2026_05_16_user_companion_customizations.sql
--
-- Adds the third layer of the companion model: per-user customization that
-- links a PRESET (personality / system prompt — data/companions/presets.ts)
-- to an ARCHETYPE (face + idle video — companion_archetypes table) and a
-- chosen voice + custom display name.
--
-- The model is now:
--
--   PRESET (8 personalities — code-owned)        — Maya, Tendai, Sam, …
--      ↓ (user_companion_customizations)
--   ARCHETYPE (20+ face/voice assets — db rows) — Sarah, Mateo, Aiko, …
--
-- A user "owns" a preset by having a row in user_companion_customizations.
-- Rwen is granted automatically on signup. Other free presets are claimed
-- via the free-pick flow (claimFreePreset → limit 1 extra on free tier).
-- Paid tiers unlock the rest.
--
-- Asset generation for non-human archetypes (rex, kermit, blossom etc.) is
-- a SEPARATE task — those rows ship with is_active=false so they don't
-- appear in the face picker until the assets pipeline fills in image_url
-- and idling_video_url.
-- ===========================================================================

-- ──────────────────────────────────────────────────────────────────────────
-- TABLE: user_companion_customizations
-- ──────────────────────────────────────────────────────────────────────────

create table if not exists public.user_companion_customizations (
  user_id           uuid not null references auth.users(id) on delete cascade,
  preset_id         text not null,                                            -- 'maya', 'tendai', etc. (matches data/companions/presets.ts)
  custom_name       text,                                                     -- if null, use preset.name
  face_archetype_id text references public.companion_archetypes(id),          -- if null, use preset.emoji
  voice_id          text,                                                     -- ElevenLabs voice id; if null, use preset.defaultVoiceId
  owned_at          timestamptz not null default now(),                       -- when the user first claimed this preset
  is_paid           boolean not null default false,                           -- false for free claims (Rwen + 1 free pick)
  updated_at        timestamptz not null default now(),
  primary key (user_id, preset_id)
);

-- Useful for "what presets does this user own?" queries.
create index if not exists idx_ucc_user
  on public.user_companion_customizations (user_id);

-- ──────────────────────────────────────────────────────────────────────────
-- RLS — user reads/writes only their own rows.
-- ──────────────────────────────────────────────────────────────────────────

alter table public.user_companion_customizations enable row level security;

drop policy if exists "self_select" on public.user_companion_customizations;
create policy "self_select"
  on public.user_companion_customizations
  for select
  using (auth.uid() = user_id);

drop policy if exists "self_insert" on public.user_companion_customizations;
create policy "self_insert"
  on public.user_companion_customizations
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "self_update" on public.user_companion_customizations;
create policy "self_update"
  on public.user_companion_customizations
  for update
  using (auth.uid() = user_id);

drop policy if exists "self_delete" on public.user_companion_customizations;
create policy "self_delete"
  on public.user_companion_customizations
  for delete
  using (auth.uid() = user_id);

-- ──────────────────────────────────────────────────────────────────────────
-- TRIGGER: touch updated_at on every change.
-- ──────────────────────────────────────────────────────────────────────────

create or replace function public.touch_user_companion_customizations()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end$$;

drop trigger if exists trg_touch_ucc on public.user_companion_customizations;
create trigger trg_touch_ucc
  before update on public.user_companion_customizations
  for each row execute procedure public.touch_user_companion_customizations();

-- ──────────────────────────────────────────────────────────────────────────
-- TRIGGER: every new auth.users row automatically owns Rwen.
-- security definer so the function runs as the table owner (the trigger
-- fires under the postgres role on signup; RLS would otherwise block the
-- insert since auth.uid() is null in that context).
-- ──────────────────────────────────────────────────────────────────────────

create or replace function public.grant_rwen_on_user_create()
returns trigger language plpgsql security definer as $$
begin
  insert into public.user_companion_customizations (user_id, preset_id, is_paid)
  values (new.id, 'rwen', false)
  on conflict (user_id, preset_id) do nothing;
  return new;
end$$;

drop trigger if exists trg_grant_rwen on auth.users;
create trigger trg_grant_rwen
  after insert on auth.users
  for each row execute procedure public.grant_rwen_on_user_create();

-- ──────────────────────────────────────────────────────────────────────────
-- Backfill: every EXISTING user gets Rwen too.
-- Idempotent — on conflict do nothing.
-- ──────────────────────────────────────────────────────────────────────────

insert into public.user_companion_customizations (user_id, preset_id, is_paid)
select id, 'rwen', false from auth.users
on conflict (user_id, preset_id) do nothing;

-- ──────────────────────────────────────────────────────────────────────────
-- SEED: 10 new non-human archetype rows.
--
-- DB rows only. image_url / idling_video_url / simli_face_id /
-- tavus_replica_id are left null — asset generation is a separate task.
-- is_active = false so the face picker hides them until assets land.
-- ──────────────────────────────────────────────────────────────────────────

insert into public.companion_archetypes (id, name, display_order, is_active)
values
  ('rex',        'Rex (Dog)',          21, false),
  ('luna_dog',   'Luna (Dog)',         22, false),
  ('kermit',     'Kermit (Frog)',      23, false),
  ('whiskers',   'Whiskers (Cat)',     24, false),
  ('mochi',      'Mochi (Cat)',        25, false),
  ('coco_koala', 'Coco (Koala)',       26, false),
  ('storm',      'Storm (Horse)',      27, false),
  ('barnaby',    'Barnaby (Teddy)',    28, false),
  ('blossom',    'Blossom (Flower)',   29, false),
  ('zorp',       'Zorp (Alien)',       30, false)
on conflict (id) do nothing;
