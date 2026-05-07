# Rwendo — Database Design
*Version: 3.0 — three-pack architecture*
*Last updated: 2026-04-30*

---

## UPDATE INSTRUCTIONS
When updating this file, also update:
- [ ] `PROJECT_OVERVIEW.md` → Pack Architecture + Database sections
- [ ] `docs/PRODUCT-DESIGN.md` → §3 if pack model semantics change, §3.8 if migration changes
- [ ] `docs/supabase-migrations/` → add new SQL file for schema changes
- [ ] `lib/supabase.ts` → if connection config changes
- [ ] `lib/progress.ts` → if progress-related queries change
- [ ] `lib/claude.ts` → if profile fields used in AI prompt change

---

## Architecture Overview

Rwendo uses **one PostgreSQL database** (hosted on Supabase, Sydney region). The schema is being upgraded from v2 (seven tables, pair-string pack model) to v3 (eight tables, three-pack composition model — see [docs/PRODUCT-DESIGN.md](./PRODUCT-DESIGN.md) §3).

> One database. Multiple well-designed tables. This is correct architecture.
> Do NOT create separate databases for different features.

```
┌─────────────────────────────────────────────────────────────────┐
│                  RWENDO DATABASE (v3)                           │
│                                                                 │
│  profiles          — who the user is                            │
│  available_packs   — product catalogue (pack_kind: speaker /    │
│                      course / jurisdiction / addon)             │
│  user_packs        — what each user owns                        │
│  jurisdictions     — legal/regional packs (NEW v3)              │
│  lesson_progress   — learning history                           │
│  conversations     — AI chat history                            │
│  parental_codes    — parent→child account linking               │
│  subscriptions     — tier + usage + billing status              │
│                                                                 │
│  + Functions, RLS policies, indexes                             │
└─────────────────────────────────────────────────────────────────┘
```

### v2 → v3 migration overview

The v2 schema has the right shape but conflates two ideas: `available_packs` rows like `shona-english` are simultaneously "the language curriculum from English to Shona" AND "the runtime pack a user activates". v3 separates these:

- A user's **speaker pack** comes from the new `profiles.speaker_pack_id` column.
- A user's **course packs** come from the new `profiles.active_course_ids text[]` column (multiple courses now allowed: language + AI Companion).
- A user's **jurisdiction pack** comes from the new `profiles.jurisdiction_id` column (FK to `jurisdictions`).
- `available_packs` gains a `pack_kind` discriminator and stays the source of truth for purchasable products.

Legacy fields (`profiles.app_language`, `profiles.active_language_pack_id`, `profiles.country_code`) are kept for one release as backward-compat shadows. Phase E.0 writes both old and new fields. A subsequent migration drops the legacy fields.

See §10 for the migration plan and SQL.

---

## Tables

### 1. profiles
The central user record. Everything about who this person is.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK, references auth.users |
| username | text | Display name |
| email | text | For contact/legal |
| gender | text | male/female/nonbinary/prefer_not_to_say |
| date_of_birth | date | Used for age verification |
| age_range | text | Derived from DOB |
| is_minor | boolean | true if under jurisdiction.minAge |
| **speaker_pack_id (v3)** | text | NEW. e.g. 'english', 'shona'. The single dominant choice that drives all readable text. Replaces app_language. |
| **active_course_ids (v3)** | text[] | NEW. e.g. ['language-shona', 'ai-companion']. User can have multiple active courses. Replaces single active_language_pack_id. |
| **jurisdiction_id (v3)** | text | NEW. FK to jurisdictions. Drives legal text, currency, age threshold, crisis resources. e.g. 'AU', 'GB', 'EU'. |
| ~~app_language~~ | text | LEGACY v2. Shadowed by speaker_pack_id during migration; dropped in v3.1. |
| ~~active_language_pack_id~~ | text | LEGACY v2. Shadowed by active_course_ids[0] during migration; dropped in v3.1. |
| ~~country_code~~ | text | LEGACY v2. Shadowed by jurisdiction_id during migration; dropped in v3.1. |
| ~~is_eu_customer~~ | boolean | LEGACY v2. Derive from jurisdictions.is_eu via join; dropped in v3.1. |
| ~~is_uk_customer~~ | boolean | LEGACY v2. Same. |
| onboarding_complete | boolean | false = force onboarding |
| primary_path | text | learn/companion/travel — informs which course pack to suggest first |
| ability_level | text | beginner/basics/conversational/intermediate |
| learning_reasons | text[] | Array of reason codes |
| time_commitment | text | 5min/10min/20min/30min+ |
| learning_challenges | text[] | Array of challenge codes |
| personal_connection | text | Free text — feeds AI prompt |
| companion_type | text | friend/emotional/work/study |
| companion_topics | text[] | Topics user wants to discuss |
| rwen_personality | jsonb | {serious_playful: 0-1, listener_talker: 0-1} |
| rwen_voice_key | text | male_warm/male_energy/female_warm/female_clear — speaker-pack curated |
| xp | integer | Total XP earned |
| streak_days | integer | Current streak |
| last_active_date | date | For streak calculation |
| is_parent_account | boolean | Has child accounts |
| parent_id | uuid | FK to profiles (if child account) |
| terms_agreed_at | timestamptz | Legal consent timestamp (per active jurisdiction) |
| privacy_agreed_at | timestamptz | Legal consent timestamp (per active jurisdiction) |
| age_confirmed_at | timestamptz | Legal consent timestamp |
| ai_disclosed_at | timestamptz | Legal consent timestamp |
| voice_consent_at | timestamptz | BIPA compliance (only required for US-IL jurisdiction) |
| **info_protection_acknowledged_at** | timestamptz | NEW 2026-05-04. When user ticked the "data stays private, won't be sold or shared" checkbox at signup. Distinct from terms/privacy ToS consent. Required by signup flow. |
| **marketing_consent_at** | timestamptz | NEW 2026-05-04. When user opted in to marketing emails. NULL = no consent. Required by GDPR/CASL/PECR/AU Spam Act before sending any marketing email. |
| created_at | timestamptz | Account creation |
| updated_at | timestamptz | Last profile update |

**Indexes:** id (PK), parent_id, jurisdiction_id, speaker_pack_id, GIN on active_course_ids

---

### 2. available_packs
The product catalogue. What can be purchased or unlocked. **In v3 this becomes the catalogue of all three pack kinds** (speaker / course / jurisdiction) plus subscription-tier add-ons.

| Column | Type | Notes |
|---|---|---|
| id | text | PK — e.g. 'speaker:english', 'course:language-shona', 'jurisdiction:AU', 'tier:text-ai' |
| **pack_kind (v3)** | text | NEW. enum: 'speaker', 'course', 'jurisdiction', 'tier-addon'. Discriminator for the three-pack model. |
| pack_type | text | LEGACY v2 — language/feature/content/cultural. Kept for one release; pack_kind is the new authority. |
| name | text | Display name (in `languageOfRecord` of the pack — usually English) |
| description | text | Marketing description |
| **target_language_id (v3)** | text | For pack_kind='course' AND course_type='language'. e.g. 'shona' for the language-shona course. |
| **course_type (v3)** | text | For pack_kind='course'. enum: 'language', 'ai-companion', 'travel'. Replaces feature_key. |
| **available_for_speakers (v3)** | text[] | For pack_kind='course'. Which speaker variants exist. e.g. ['english', 'shona']. |
| ~~spoken_language_id~~ | text | LEGACY v2. Drops in v3.1. |
| ~~learned_language_id~~ | text | LEGACY v2. Renamed to target_language_id; stays as shadow column. |
| ~~feature_key~~ | text | LEGACY v2. Subsumed by course_type + pack_kind. |
| primary_color | text | Hex — pack theme (mostly for course packs) |
| secondary_color | text | Hex — pack theme |
| flag_emoji | text | Visual identifier |
| revenuecat_product_id | text | Maps to RevenueCat product. Speaker and jurisdiction packs are not purchasable (always free), so this is null for them. |
| **prices_by_jurisdiction (v3)** | jsonb | NEW. e.g. `{"AU": 10.00, "GB": 5.99, "EU": 6.99, "US": 6.99}`. Replaces single price_aud. |
| price_aud | decimal | LEGACY v2. Falls back when prices_by_jurisdiction missing for a region. |
| is_free | boolean | Whether it's free |
| is_subscription | boolean | Recurring vs one-time |
| subscription_period | text | 'monthly'/'annual' |
| is_active | boolean | Whether purchasable |
| is_coming_soon | boolean | Show teaser but not purchasable |
| requires_pack_id | text | Pre-requisite pack |
| sort_order | integer | Display order |

**RLS:** Anyone can read (it's a catalogue). Only service role can write.

**Current packs (v3 IDs):**

Speaker packs (always free; bundled at v1):
- `speaker:english`
- `speaker:shona`

Course packs:
- `course:language-shona` — target=shona, available_for_speakers=['english', 'shona'] (sn variant is Shona-speaker reading material about their own language for review purposes; primarily english variant)
- `course:language-english` — target=english, available_for_speakers=['shona'] for v1 (en speakers don't need a learn-English course)
- `course:ai-companion` — type='ai-companion', no target_language; available_for_speakers=['english', 'shona']
- `course:travel-zimbabwe` — type='travel', destination=ZW; coming soon

Jurisdiction packs (always free; bundled at v1):
- `jurisdiction:AU`, `jurisdiction:GB`, `jurisdiction:US`, `jurisdiction:EU`, `jurisdiction:ZW`

Subscription tier add-ons (subsume the old AI-companion-text/voice/realtime packs):
- `tier:text-ai` — $10/mo, unlocks Text AI on whatever course is active
- `tier:voice` — $15/mo
- `tier:companion` — $25/mo
- `tier:premium` — $45/mo

Legacy v2 IDs (`shona-english`, `english-shona`, `ai-companion-text`, etc.) survive as backward-compat aliases — see §10 migration for the decomposition view.

---

### 2.5. jurisdictions (NEW v3)
Legal/regional pack catalogue. One row per jurisdiction.

| Column | Type | Notes |
|---|---|---|
| id | text | PK. ISO 3166-1 alpha-2 ('AU', 'GB', 'US', 'EU', 'ZW') or pseudo-region ('EU' = bloc) |
| name | text | Display name ('Australia', 'United Kingdom', 'European Union', 'Zimbabwe') |
| country_codes | text[] | Which ISO codes this pack covers (EU pack covers all 27 EU members) |
| extends | text | If this jurisdiction inherits unspecified fields from another. e.g. GB.extends='AU' until lawyer fills in UK-specific text. |
| currency_code | text | ISO 4217 ('AUD', 'GBP', 'USD', 'EUR') |
| currency_symbol | text | Display symbol ('A$', '£', '$', '€') |
| min_age | integer | Minimum user age for this jurisdiction. AU=16, EU=16, GB=13, US=13, etc. Drops the hardcoded 18 in onboarding. |
| cooling_off_days | integer | Statutory refund window. EU=14, GB=14, AU=0, US=0. |
| voice_consent_required | boolean | BIPA-style explicit consent before mic use. Only true for US-IL. |
| data_residency | text | Where user data must physically reside. 'EU', 'AU', 'US', 'global'. Influences Supabase region choice for that user's data. |
| language_of_record | text | Which speaker pack the legal text is authored in. Defaults to 'english' for v1; some EU jurisdictions may need member-state languages. |
| is_eu | boolean | true for the EU bloc and its member states |
| is_uk | boolean | true for GB |
| privacy_policy_md | text | Markdown body of Privacy Policy. ~5-15kb each. |
| terms_of_service_md | text | Markdown body of Terms of Service. ~5-15kb each. |
| crisis_resources | jsonb | Array of `{ name, phone, url, context }` per AI Companion design §2.2 |
| consent_disclosures | jsonb | Speaker-language strings injected into onboarding consent checkboxes |
| created_at | timestamptz | |
| updated_at | timestamptz | |

**RLS:** Anyone can read (it's a catalogue). Only service role can write.

**Migration:** at v3 launch, this table holds 5 rows: AU (fully populated, lawyer-vetted) and GB/US/EU/ZW (each `extends='AU'` placeholder rows). The lawyer fills in per-region text pre-launch.

**Why a separate table not a directory:** the legal text is large (~10kb each) and changes infrequently but importantly (every Privacy Policy revision is a legal event). Storing in DB lets us version it, track when each user agreed to which version (`profiles.privacy_agreed_at` + a future `consent_versions` audit log), and avoid forcing app updates for legal text revisions.

---

### 3. user_packs
What each user owns. The bridge between catalogue and user.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK → profiles |
| pack_id | text | FK → available_packs |
| acquisition_type | text | purchase/free/parent_grant/promo/trial |
| revenuecat_entitlement_id | text | RevenueCat reference |
| is_active | boolean | Currently active |
| purchased_at | timestamptz | When acquired |
| expires_at | timestamptz | null = permanent/managed by RevenueCat |
| usage_count | integer | Messages/sessions used this period |
| usage_limit | integer | null = unlimited |
| usage_reset_at | timestamptz | When usage resets |

**Unique constraint:** (user_id, pack_id)
**RLS:** Users can read/write own rows only.

---

### 4. lesson_progress
One row per completed lesson per user.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK → profiles |
| lesson_id | text | e.g. 'm01-l01-mangwanani' |
| pack_id | text | FK → available_packs |
| completed_at | timestamptz | When finished |
| score | integer | Correct answers |
| total_questions | integer | Total questions |
| xp_earned | integer | XP awarded |
| time_spent_seconds | integer | Time in lesson |

**Unique constraint:** (user_id, lesson_id)
**RLS:** Users can read/write own rows only.

---

### 5. conversations
AI chat history. One row per message. **Single source of truth for both text and voice mode** since 2026-05-03 — both go through `appendConversationTurn` in [lib/conversation-memory.ts](../lib/conversation-memory.ts).

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK → profiles |
| role | text | 'user' or 'rwen' |
| content | text | Message text |
| pack_context | text | Which pack context (ai-companion-text, lesson-m01-l01) |
| session_id | uuid | Groups messages from same voice session — NULL for text turns. UUID minted client-side via `crypto.randomUUID()`. |
| created_at | timestamptz | Message timestamp |

**RLS:**
- SELECT: `auth.uid() = user_id`
- INSERT: `auth.uid() = user_id`
- DELETE: `auth.uid() = user_id` (added 2026-05-04 to support the "Erase saved chat history" button)
- UPDATE: no policy — rows are append-only

**Loaded for chat display:** [`loadConversationHistory`](../lib/claude.ts) returns the latest 40 rows ordered ASC for rendering. Bug fix 2026-05-04: the previous `order asc + limit 40` was returning the FIRST 40 rows forever and hiding everything new; switched to `order desc + limit 40` then JS-side reverse.

**Loaded for memory recap at voice-session start:** [`loadRecentConversationRecap`](../lib/conversation-memory.ts) returns last 10 turns formatted as "Last time you spoke: [user]: ...\n[rwen]: ...". Injected into the prompt's `{{recentContext}}` slot.

**Retention:** 12 months rolling — rows older than 12 months are deleted by scheduled job (planned).

---

### 6. parental_codes
Parent generates → child enters → linked lite account created.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| parent_user_id | uuid | FK → profiles |
| code | text | UNIQUE 8-char alphanumeric (e.g. RWEN4729) |
| allowed_pack_ids | text[] | What the child can access |
| max_age_rating | text | 'kids'/'teen'/'all' |
| is_used | boolean | Whether redeemed |
| child_user_id | uuid | FK → profiles (once used) |
| used_at | timestamptz | When redeemed |
| created_at | timestamptz | Code creation |
| expires_at | timestamptz | Code expiry (7 days from creation) |

**RLS:** Parents can manage own codes. Anyone can look up unused, unexpired codes.

---

### 7. subscriptions
Mirrors RevenueCat for fast offline tier checks and usage tracking.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK → profiles, UNIQUE |
| revenuecat_customer_id | text | RC reference |
| active_tier | text | free/text_ai/voice/companion/premium |
| ai_messages_used | integer | This billing period |
| ai_messages_limit | integer | 0 = no access |
| voice_messages_used | integer | This billing period |
| voice_messages_limit | integer | 0 = no access |
| realtime_minutes_used | decimal | This billing period |
| realtime_minutes_limit | decimal | 0 = no access |
| cooling_off_ends_at | timestamptz | EU/UK: 14 days after first subscription |
| in_cooling_off | boolean | Computed: cooling_off_ends_at > now() |
| country_code | text | Copied from profile at subscription time |
| period_start | timestamptz | Current billing period start |
| period_end | timestamptz | Current billing period end |
| cancelled_at | timestamptz | If cancelled |
| cancellation_reason | text | User-provided reason |
| updated_at | timestamptz | Last sync from RevenueCat |

**Unique constraint:** (user_id)
**RLS:** Users can read/update own row.

---

## Recently added (Phase voice + auth, 2026-05)

### Tables added since v3 baseline

These were added incrementally in Phase voice + companion work; full schemas visible in the live DB via `mcp__supabase__list_tables`.

- `companions` — user's owned companion roster. PK `id` (uuid). Columns: `user_id`, `preset_id`, `name`, `relationship_type`, `voice_id`, `avatar_id`, `system_prompt`, `personality_md`, `soul_md`, `trust_score`, `is_active`. Partial unique index on `(user_id) WHERE is_active = true` enforces 0-or-1 active companion per user.
- `companion_facts` — pgvector-indexed semantic memory. Columns: `user_id`, `companion_id`, `fact_type ∈ {fact, plan, emotion, preference, person}`, `content`, `embedding vector`, `confidence`, `last_reinforced_at`. Empty for now; populated by future extraction pipeline.
- `companion_summaries` — weekly compressed summaries. Columns: `user_id`, `companion_id`, `week_starting date`, `summary text`. Empty; populated by future scheduled job.
- `user_dictionary` — saved words from lessons + AI + manual. Drives the in-lesson dictionary popover. Columns include `user_id`, `course_id`, `target_word`, `native_word`, `literal`, `notes`, `source ∈ {lesson, ai, manual}`, `source_lesson_id`.
- `lesson_notes` — per-lesson user notes. PK `(user_id, course_id, lesson_id)`.
- `feedback_responses` — survey/rating capture. Columns include `user_id`, `trigger ∈ {first_session, first_lesson, weekly, paywall, manual}`, `rating 1-5`, `responses jsonb`, `speaker_pack_id`, `app_version`.

### RLS policies added 2026-05-04

```sql
-- Lets the "Erase saved chat history" button actually delete.
-- Without this, RLS denied DELETE silently and the action was a no-op.
CREATE POLICY "Users can delete own conversations"
  ON public.conversations
  FOR DELETE
  USING (auth.uid() = user_id);
```

### Trigger added 2026-05-04 — companion age gating

```sql
CREATE OR REPLACE FUNCTION public.enforce_companion_age_gate()
RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE v_dob date; v_age integer; v_gate integer;
BEGIN
  v_gate := CASE NEW.preset_id
    WHEN 'aria' THEN 18
    ELSE NULL
  END;
  IF v_gate IS NULL THEN RETURN NEW; END IF;

  SELECT date_of_birth INTO v_dob FROM public.profiles WHERE id = NEW.user_id;
  IF v_dob IS NULL THEN
    RAISE EXCEPTION 'companion preset % requires age verification (no DOB on file)', NEW.preset_id
      USING ERRCODE = '42501';
  END IF;
  v_age := EXTRACT(YEAR FROM age(v_dob));
  IF v_age < v_gate THEN
    RAISE EXCEPTION 'companion preset % requires age %', NEW.preset_id, v_gate
      USING ERRCODE = '42501';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER companions_age_gate_insert
  BEFORE INSERT ON public.companions
  FOR EACH ROW EXECUTE FUNCTION public.enforce_companion_age_gate();

CREATE TRIGGER companions_age_gate_update
  BEFORE UPDATE OF preset_id ON public.companions
  FOR EACH ROW EXECUTE FUNCTION public.enforce_companion_age_gate();
```

This is the server-side defence-in-depth backstop for client-side age filtering in the Companions tab. Even with a tampered client, an under-18 user cannot insert or update a row with `preset_id = 'aria'` (or any future age-gated preset added to the CASE statement).

### RPC extended 2026-05-04

`record_consents` now takes two extra params:

```sql
record_consents(
  p_user_id uuid,
  p_terms boolean DEFAULT false,
  p_privacy boolean DEFAULT false,
  p_age boolean DEFAULT false,
  p_ai_disclosure boolean DEFAULT false,
  p_voice boolean DEFAULT false,
  p_info_protection boolean DEFAULT false,  -- NEW
  p_marketing boolean DEFAULT false          -- NEW
)
```

Writes to `info_protection_acknowledged_at` and `marketing_consent_at` if their respective param is true (otherwise leaves the column unchanged — same idempotent pattern as existing fields).

### Migrations applied 2026-05-04

```
add_delete_policy_conversations
add_consent_columns
extend_record_consents
enforce_companion_age_gate
```

---

## Storage buckets (added 2026-05-05)

### `course-content`

Holds streaming lesson bodies. The JS binary ships with course manifests (light metadata) but no lesson content; the device downloads each `.json` on first open and caches locally per `lib/lesson-loader.ts`.

**Path scheme:**
```
lessons/<courseId>/<speakerId>/<lessonId>.json
```

Examples:
- `lessons/language-shona/english/m01-l01-mangwanani.json` — Shona lesson, English-speaker variant (source-of-truth)
- `lessons/know-yourself/english/m01-l01-looking-and-seeing.json` — self-development lesson, English source
- `lessons/language-shona/french/m01-l01-mangwanani.json` — Claude-translated French variant (populated by lazy-translation Edge Function on first French-speaker open)

**Object format:** UTF-8 JSON, conforming to `LessonData` in `types/lesson.ts` (the 7-phase Rwendo Method shape — hook / chunks / pattern / practice / dialogue / recall / mission).

**Volume at 2026-05-05:**
- 576 lesson files uploaded across 13 courses
- All under `lessons/<courseId>/english/` (source variant only)
- Average ~5 KB / lesson; total bucket size < 3 MB

**RLS policies:**

```sql
-- Authenticated users can read every lesson. Read access is the only
-- thing the loader needs; ownership / entitlement gating happens at the
-- application layer (lib/entitlements.ts canAccessLesson) before the
-- loader is even called for a given lesson.
create policy "course_content_authenticated_read"
  on storage.objects for select
  using (bucket_id = 'course-content' and auth.role() = 'authenticated');

-- Only the service-role key can write. Authoring uploads run via
-- scripts/upload-self-dev-lessons-to-storage.ts using SUPABASE_SERVICE_ROLE_KEY.
-- The lazy-translation Edge Function will write here too once deployed.
create policy "course_content_service_write"
  on storage.objects for insert
  with check (bucket_id = 'course-content' and auth.role() = 'service_role');
```

**Why a private bucket with authenticated read** instead of fully public:
- Prevents trivial scraping of paid lesson content via `getPublicUrl`.
- Pairs with the application-layer `canAccessLesson` check that already exists; bucket access is necessary-but-not-sufficient.
- Re-using anon-key auth means no signed-URL roundtrip per lesson — `supabase.storage.from('course-content').download(path)` works directly in the loader.

**React Native quirk:** `data.text()` on the Blob returned by `supabase.storage.download()` is undefined on RN (the polyfilled Blob lacks the method). The loader wraps with `await new Response(data).text()` instead. See `lib/lesson-loader.ts:97-99`.

**Manifest source-of-truth:** `data/courses/<courseId>/manifest.ts` holds the bundled lesson list. Authoring source files live under `scripts/` (not deployed) for re-uploading. Regenerate manifests after authoring with:
```
npx tsx scripts/generate-course-manifests.ts
```

**Future variants:** the lazy-translation Edge Function (next phase) will populate `lessons/<courseId>/<non-english-speaker>/<lessonId>.json` on demand, so a French speaker who opens a Knowing Yourself lesson triggers a one-time Claude translation that benefits every subsequent French speaker.

---

## Functions

### add_xp(p_user_id, p_xp)
Adds XP to profiles. Called on lesson completion.

### delete_user()
Deletes auth.users record → cascades to all tables. GDPR compliance.

### handle_new_user_complete()
Trigger: fires on auth.users INSERT. Creates profiles row + subscriptions row.

### generate_parental_code(p_parent_id)
Creates unique 8-char code, inserts into parental_codes. Returns the code.

### redeem_parental_code(p_code, p_child_id)
Validates code → links child to parent → grants allowed packs → returns result.

### user_has_pack(p_user_id, p_pack_id)
Returns boolean. Used to gate features. Fast, indexed lookup.

### check_eu_cooling_off(p_user_id)
Returns boolean. True if user is in EU/UK 14-day cooling-off period.
During cooling-off: cancellation must result in full refund.

### reset_monthly_usage(p_user_id)
Resets usage_count on user_packs. Called at billing period renewal.

### get_user_ai_prompt_data(p_user_id)
Returns all profile fields needed to build Claude system prompt.
Single query replaces multiple individual queries.

---

## EU/UK 14-Day Cooling-Off Period

**Legal basis:** EU Consumer Rights Directive 2011/83/EU | UK Consumer Contracts Regulations 2013

**Implementation:**

```
User subscribes
       ↓
Is user EU or UK customer?  (check profiles.is_eu_customer / is_uk_customer)
       ↓ YES
Set subscriptions.cooling_off_ends_at = now() + 14 days
       ↓
During cooling-off:
  - User can cancel and receive full refund
  - Show "Cancel for free — 14 day guarantee" in UI
  - Track in subscriptions.in_cooling_off
       ↓
After cooling-off:
  - Normal cancellation (no automatic refund)
  - Standard terms apply
```

**Country detection — in order of reliability:**
1. User selects country during registration (ask in onboarding)
2. RevenueCat provides purchase country (most accurate for payment)
3. Device locale (fallback)
4. Default to EU rules if uncertain (safest legally)

**EU countries** (is_eu_customer = true):
AT, BE, BG, CY, CZ, DE, DK, EE, ES, FI, FR, GR, HR, HU, IE, IT, LT, LU, LV, MT, NL, PL, PT, RO, SE, SI, SK

**UK** (is_uk_customer = true): GB

---

## Database Best Practices Applied

### 1. Row Level Security (RLS) on all tables ✅
Every table has RLS enabled. Users can only access their own data.

### 2. Cascade deletes ✅
Deleting auth.users → cascades to all profile-linked tables.
Deleting profiles → cascades to lesson_progress, conversations, user_packs, subscriptions.

### 3. Constraints
- NOT NULL on all required fields
- CHECK constraints on enum-like fields (role IN ('user', 'rwen'))
- UNIQUE constraints where duplicates must be prevented
- Foreign key constraints for referential integrity

### 4. Indexes (performance)
```sql
-- Add after running 003 migration:
create index if not exists idx_lesson_progress_user on public.lesson_progress(user_id);
create index if not exists idx_conversations_user_created on public.conversations(user_id, created_at desc);
create index if not exists idx_user_packs_user on public.user_packs(user_id);
create index if not exists idx_user_packs_active on public.user_packs(user_id, is_active) where is_active = true;
create index if not exists idx_parental_codes_code on public.parental_codes(code) where is_used = false;
```

### 5. Audit timestamps ✅
All tables have created_at. Key tables also have updated_at.
Consent timestamps (terms_agreed_at etc.) provide legal audit trail.

### 6. Security definer functions ✅
Functions that access multiple tables or auth data use SECURITY DEFINER.
This ensures consistent permissions regardless of calling user's role.

### 7. Soft data retention
Conversations: 12-month rolling delete (scheduled function, not hard delete).
Payment records: 7 years (Australian tax law) — kept in subscriptions.
Voice audio: Never stored in database (deleted at ElevenLabs within 24h).

### 8. No personally identifiable data in logs
Supabase logs are configured to exclude request bodies.
AI conversation content is not logged at infrastructure level.

### 9. Connection pooling
Supabase uses PgBouncer. App uses pooling mode.
When Fastify backend is built: use `?pgbouncer=true` in connection string.

### 10. Never store secrets in database
API keys (Claude, ElevenLabs) live in .env / environment variables only.
RevenueCat webhook secrets stored in Supabase Edge Function secrets, not tables.

---

## Migration History

| File / migration | When | What |
|---|---|---|
| (inline SQL) | Early dev | Created profiles, lesson_progress, add_xp, delete_user, RLS |
| 002-functions.sql | Early dev | add_xp and delete_user functions |
| 003-consolidated-schema.sql | 2026-04-30 | Full expansion: packs, user_packs, subscriptions, parental_codes, new profile columns |
| 004-account-management.sql | 2026-04-30 | EU cooling off, indexes, account controls, country detection |
| 005-three-pack-architecture.sql | Phase E.0 | jurisdictions table + new profile columns (speaker_pack_id, active_course_ids, jurisdiction_id) + available_packs.pack_kind + decomposition view for legacy IDs. See §10. |
| (companion phase, multiple) | Phase J onwards | companions, companion_facts (pgvector), companion_summaries, user_dictionary, lesson_notes, feedback_responses |
| add_delete_policy_conversations | 2026-05-04 | DELETE policy on conversations so the in-app "Erase saved chat history" button works |
| add_consent_columns | 2026-05-04 | profiles.marketing_consent_at + profiles.info_protection_acknowledged_at |
| extend_record_consents | 2026-05-04 | record_consents RPC gains p_info_protection + p_marketing params |
| enforce_companion_age_gate | 2026-05-04 | Trigger blocks under-age activation of age-gated companion presets (Aria 18+) |

---

## §10. v3 Migration plan (Phase E.0)

The migration from v2 (pair-string pack model) to v3 (three-pack composition model) is non-destructive: legacy columns are preserved as shadow values for one release. Phase E.0 lands the schema + writes both old and new fields. A subsequent v3.1 migration drops the legacy columns once all clients have updated.

### Schema changes

```sql
-- 005-three-pack-architecture.sql

begin;

-- ─── jurisdictions table (new) ──────────────────────────────────────────────
create table public.jurisdictions (
  id                       text primary key,           -- 'AU', 'GB', 'EU', etc.
  name                     text not null,
  country_codes            text[] not null,            -- e.g. ['AU'] or all 27 EU codes
  extends                  text references public.jurisdictions(id),
  currency_code            text not null,              -- ISO 4217
  currency_symbol          text not null,
  min_age                  integer not null default 13,
  cooling_off_days         integer not null default 0,
  voice_consent_required   boolean not null default false,
  data_residency           text not null default 'global',
  language_of_record       text not null default 'english',
  is_eu                    boolean not null default false,
  is_uk                    boolean not null default false,
  privacy_policy_md        text,                       -- nullable while extends fallback applies
  terms_of_service_md      text,
  crisis_resources         jsonb not null default '[]',
  consent_disclosures      jsonb not null default '{}',
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now()
);

alter table public.jurisdictions enable row level security;
create policy "jurisdictions_read_all" on public.jurisdictions for select using (true);

-- Seed v1 jurisdictions
insert into public.jurisdictions (id, name, country_codes, currency_code, currency_symbol, min_age, cooling_off_days, is_eu, is_uk, language_of_record)
values
  ('AU', 'Australia',      array['AU'],                                                                                          'AUD', 'A$', 16, 0, false, false, 'english'),
  ('GB', 'United Kingdom', array['GB'],                                                                                          'GBP', '£', 13, 14, false, true, 'english'),
  ('US', 'United States',  array['US'],                                                                                          'USD', '$', 13, 0, false, false, 'english'),
  ('EU', 'European Union', array['AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR','HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK'], 'EUR', '€', 16, 14, true, false, 'english'),
  ('ZW', 'Zimbabwe',       array['ZW'],                                                                                          'USD', '$', 13, 0, false, false, 'english');

update public.jurisdictions set extends = 'AU' where id in ('GB', 'US', 'EU', 'ZW');

-- ─── available_packs.pack_kind (new) ────────────────────────────────────────
alter table public.available_packs add column if not exists pack_kind text;
alter table public.available_packs add column if not exists target_language_id text;
alter table public.available_packs add column if not exists course_type text;
alter table public.available_packs add column if not exists available_for_speakers text[];
alter table public.available_packs add column if not exists prices_by_jurisdiction jsonb default '{}';

-- Backfill pack_kind for existing rows
update public.available_packs set pack_kind = 'course', course_type = 'language',
       target_language_id = learned_language_id,
       available_for_speakers = array[spoken_language_id]
  where pack_type = 'language';
update public.available_packs set pack_kind = 'tier-addon'
  where id in ('ai-companion-text', 'ai-companion-voice', 'ai-companion-realtime', 'ai-premium');
update public.available_packs set pack_kind = 'course', course_type = 'travel'
  where id = 'travel-zimbabwe';

-- Insert speaker packs (v3 — these didn't exist as catalogue rows before)
insert into public.available_packs (id, pack_kind, name, is_free, is_active)
values
  ('speaker:english', 'speaker', 'English speaker pack', true, true),
  ('speaker:shona',   'speaker', 'Shona speaker pack',   true, true);

-- Insert jurisdiction packs as catalogue rows (so user_packs can reference them)
insert into public.available_packs (id, pack_kind, name, is_free, is_active)
values
  ('jurisdiction:AU', 'jurisdiction', 'Australia',      true, true),
  ('jurisdiction:GB', 'jurisdiction', 'United Kingdom', true, true),
  ('jurisdiction:US', 'jurisdiction', 'United States',  true, true),
  ('jurisdiction:EU', 'jurisdiction', 'European Union', true, true),
  ('jurisdiction:ZW', 'jurisdiction', 'Zimbabwe',       true, true);

-- Composite course IDs (the v3 'course:language-shona' alongside the legacy 'shona-english')
insert into public.available_packs (id, pack_kind, course_type, target_language_id, available_for_speakers, name, is_free)
values
  ('course:language-shona',   'course', 'language',     'shona',   array['english','shona'], 'Learn Shona',   false),
  ('course:language-english', 'course', 'language',     'english', array['shona'],            'Learn English', false),
  ('course:ai-companion',     'course', 'ai-companion', null,      array['english','shona'], 'AI Companion',  false);

-- ─── profiles new columns ───────────────────────────────────────────────────
alter table public.profiles add column if not exists speaker_pack_id text;
alter table public.profiles add column if not exists active_course_ids text[] default '{}';
alter table public.profiles add column if not exists jurisdiction_id text references public.jurisdictions(id);

-- Backfill from legacy columns
update public.profiles set
  speaker_pack_id = coalesce(speaker_pack_id, app_language),
  jurisdiction_id = coalesce(jurisdiction_id,
    case
      when is_uk_customer then 'GB'
      when is_eu_customer then 'EU'
      when country_code = 'AU' then 'AU'
      when country_code = 'US' then 'US'
      when country_code = 'ZW' then 'ZW'
      else 'AU'   -- safe default; user confirms during next onboarding pass
    end),
  active_course_ids = coalesce(
    nullif(active_course_ids, '{}'),
    case
      when active_language_pack_id = 'shona-english'  then array['course:language-shona']
      when active_language_pack_id = 'english-shona'  then array['course:language-english']
      else '{}'
    end
  );

create index if not exists idx_profiles_speaker_pack    on public.profiles(speaker_pack_id);
create index if not exists idx_profiles_jurisdiction    on public.profiles(jurisdiction_id);
create index if not exists idx_profiles_active_courses  on public.profiles using gin (active_course_ids);

-- ─── user_packs.pack_id can now reference v3 IDs ────────────────────────────
-- No schema change needed — pack_id is a text FK to available_packs.id and v3 added the new IDs.

-- ─── decomposition view for backward-compat ─────────────────────────────────
-- A read-time helper: takes a legacy pair-string and returns the v3 (speaker, course, jurisdiction) decomposition
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
      when p_country in ('AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR','HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK') then 'EU'
      when p_country = 'US' then 'US'
      when p_country = 'ZW' then 'ZW'
      else 'AU'
    end;
$$;

commit;
```

### Application code migration (Phase E.0)

1. **Read path**: `useSettings()` reads `profiles.speaker_pack_id`, `profiles.active_course_ids`, `profiles.jurisdiction_id` (with fallback to legacy fields if new ones are null — backward compat for users who logged in pre-migration).
2. **Write path**: `setActivePack`, `setAppLanguage`, etc. write to BOTH the new and the legacy columns until v3.1 drops the legacy ones.
3. **Onboarding**: writes new fields directly. Legacy fields are populated via a `before insert` trigger for one release.

### v3.1 cleanup migration (one release after E.0 ships)

```sql
-- 006-drop-legacy-pack-columns.sql (lands ~1 month after 005)
alter table public.profiles drop column app_language;
alter table public.profiles drop column active_language_pack_id;
alter table public.profiles drop column country_code;
alter table public.profiles drop column is_eu_customer;
alter table public.profiles drop column is_uk_customer;
alter table public.available_packs drop column spoken_language_id;
alter table public.available_packs drop column learned_language_id;
alter table public.available_packs drop column feature_key;
alter table public.available_packs drop column pack_type;
alter table public.available_packs drop column price_aud;
drop function public.decompose_legacy_pack(text, text);
```

The 1-month gap between 005 and 006 lets us catch any user who hasn't opened the app since pre-E.0 — their legacy columns get backfilled the next time they log in.

---

## Data Retention Schedule (aligned with Privacy Policy)

| Data | Retention | Method |
|---|---|---|
| Conversation history | 12 months | Scheduled delete job |
| Voice recordings | 24 hours | ElevenLabs auto-deletes |
| Account data | Until deletion + 30 days | Manual delete on request |
| Payment records | 7 years | Australian tax law |
| Crash/analytics | 90 days | Supabase log rotation |
| Consent timestamps | Duration of account | Legal requirement |
| Parental codes | 7 days from creation | Auto-expires |

---

## Access Patterns (for query optimisation)

| Query | Frequency | Index |
|---|---|---|
| Get user profile | Every request | PK (id) |
| Check pack access | Every feature load | idx_user_packs_active |
| Load lesson progress | Learn tab focus | idx_lesson_progress_user |
| Load conversations | Companion tab open | idx_conversations_user_created |
| Validate parental code | Registration only | idx_parental_codes_code |
| Check subscription tier | Every AI call | PK (user_id) on subscriptions |
