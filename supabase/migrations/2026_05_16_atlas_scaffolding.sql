-- ===========================================================================
-- 2026_05_16_atlas_scaffolding.sql
--
-- Scaffolds the viseme-atlas lipsync pipeline per docs/stack/lipsync-atlas.md
-- Section 11. NO worker exists yet — these columns + table let the client
-- and the Edge Function be built while the GPU pipeline is on a separate
-- track. atlas_status defaults to 'not_started' so the AmbientFace fallback
-- handles every existing companion until atlases are baked.
--
-- Three things land here:
--   1. atlas_* columns on custom_companions (per-user bespoke companions)
--   2. atlas_* columns on companion_archetypes (the shared free presets)
--   3. atlas_generation_jobs table — polymorphic over both kinds via
--      (companion_kind, companion_id)
-- ===========================================================================

-- ──────────────────────────────────────────────────────────────────────────
-- 1. atlas_* columns on custom_companions
-- ──────────────────────────────────────────────────────────────────────────

alter table public.custom_companions
  add column if not exists atlas_url          text,
  add column if not exists atlas_version      int          default 1,
  add column if not exists atlas_generated_at timestamptz,
  add column if not exists atlas_generator    text,
  add column if not exists atlas_status       text not null default 'not_started';

-- Enum-like check on atlas_status. Cheaper than a real enum to evolve.
alter table public.custom_companions
  drop constraint if exists chk_custom_companions_atlas_status;
alter table public.custom_companions
  add constraint chk_custom_companions_atlas_status
  check (atlas_status in ('not_started', 'pending', 'running', 'ready', 'failed'));

-- ──────────────────────────────────────────────────────────────────────────
-- 2. atlas_* columns on companion_archetypes (free presets / shared faces)
-- ──────────────────────────────────────────────────────────────────────────

alter table public.companion_archetypes
  add column if not exists atlas_url          text,
  add column if not exists atlas_version      int          default 1,
  add column if not exists atlas_generated_at timestamptz,
  add column if not exists atlas_generator    text,
  add column if not exists atlas_status       text not null default 'not_started';

alter table public.companion_archetypes
  drop constraint if exists chk_companion_archetypes_atlas_status;
alter table public.companion_archetypes
  add constraint chk_companion_archetypes_atlas_status
  check (atlas_status in ('not_started', 'pending', 'running', 'ready', 'failed'));

-- ──────────────────────────────────────────────────────────────────────────
-- 3. atlas_generation_jobs — polymorphic queue table
--
-- companion_kind = 'custom' → joins to custom_companions(id) on companion_id
-- companion_kind = 'archetype' → joins to companion_archetypes(id) on companion_id
--
-- We don't enforce the FK because Postgres doesn't support conditional FKs;
-- the Edge Function validates the target row before insert.
-- ──────────────────────────────────────────────────────────────────────────

create table if not exists public.atlas_generation_jobs (
  id              uuid        primary key default gen_random_uuid(),
  companion_kind  text        not null,
  companion_id    text        not null,          -- text so archetypes (text PK) and custom companions (uuid PK) both fit
  user_id         uuid        references auth.users(id) on delete set null,
  status          text        not null default 'pending',
  generator       text        not null default 'musetalk-v1.2',
  portrait_url    text        not null,
  attempt         int         not null default 0,
  error           text,
  started_at      timestamptz,
  finished_at     timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  constraint chk_atlas_jobs_kind   check (companion_kind in ('custom', 'archetype')),
  constraint chk_atlas_jobs_status check (status in ('pending', 'running', 'done', 'failed'))
);

create index if not exists idx_atlas_jobs_status_created
  on public.atlas_generation_jobs (status, created_at);
create index if not exists idx_atlas_jobs_companion
  on public.atlas_generation_jobs (companion_kind, companion_id);
create index if not exists idx_atlas_jobs_user
  on public.atlas_generation_jobs (user_id);

-- RLS: users can read jobs that belong to them. The worker uses service-role
-- to write, bypassing RLS.
alter table public.atlas_generation_jobs enable row level security;

drop policy if exists "self_select_jobs" on public.atlas_generation_jobs;
create policy "self_select_jobs"
  on public.atlas_generation_jobs
  for select
  using (auth.uid() = user_id);

-- updated_at touch trigger
create or replace function public.touch_atlas_jobs()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end$$;

drop trigger if exists trg_touch_atlas_jobs on public.atlas_generation_jobs;
create trigger trg_touch_atlas_jobs
  before update on public.atlas_generation_jobs
  for each row execute procedure public.touch_atlas_jobs();
