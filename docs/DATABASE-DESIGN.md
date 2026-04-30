# Rwendo — Database Design
*Version: 2.0*
*Last updated: 2026-04-30*

---

## UPDATE INSTRUCTIONS
When updating this file, also update:
- [ ] `PROJECT_OVERVIEW.md` → Database section
- [ ] `docs/supabase-migrations/` → add new SQL file for schema changes
- [ ] `lib/supabase.ts` → if connection config changes
- [ ] `lib/progress.ts` → if progress-related queries change
- [ ] `lib/claude.ts` → if profile fields used in AI prompt change

---

## Architecture Overview

Rwendo uses **one PostgreSQL database** (hosted on Supabase, Sydney region) with **seven core tables**.

> One database. Multiple well-designed tables. This is correct architecture.
> Do NOT create separate databases for different features.

```
┌─────────────────────────────────────────────────────────┐
│                  RWENDO DATABASE                        │
│                                                         │
│  profiles          — who the user is                    │
│  available_packs   — product catalogue                  │
│  user_packs        — what each user owns                │
│  lesson_progress   — learning history                   │
│  conversations     — AI chat history                    │
│  parental_codes    — parent→child account linking       │
│  subscriptions     — tier + usage + billing status      │
│                                                         │
│  + Functions, RLS policies, indexes                     │
└─────────────────────────────────────────────────────────┘
```

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
| is_minor | boolean | true if under 18 |
| app_language | text | en/sn — sets UI language |
| onboarding_complete | boolean | false = force onboarding |
| primary_path | text | learn/companion/travel |
| active_language_pack_id | text | FK to available_packs |
| ability_level | text | beginner/basics/conversational/intermediate |
| learning_reasons | text[] | Array of reason codes |
| time_commitment | text | 5min/10min/20min/30min+ |
| learning_challenges | text[] | Array of challenge codes |
| personal_connection | text | Free text — feeds AI prompt |
| companion_type | text | friend/emotional/work/study |
| companion_topics | text[] | Topics user wants to discuss |
| rwen_personality | jsonb | {serious_playful: 0-1, listener_talker: 0-1} |
| rwen_voice_key | text | male_warm/male_energy/female_warm/female_clear |
| xp | integer | Total XP earned |
| streak_days | integer | Current streak |
| last_active_date | date | For streak calculation |
| country_code | text | ISO 3166-1 alpha-2 (GB, AU, DE...) |
| is_eu_customer | boolean | true for EU/EEA countries |
| is_uk_customer | boolean | true for UK |
| is_parent_account | boolean | Has child accounts |
| parent_id | uuid | FK to profiles (if child account) |
| terms_agreed_at | timestamptz | Legal consent timestamp |
| privacy_agreed_at | timestamptz | Legal consent timestamp |
| age_confirmed_at | timestamptz | Legal consent timestamp |
| ai_disclosed_at | timestamptz | Legal consent timestamp |
| voice_consent_at | timestamptz | BIPA compliance |
| created_at | timestamptz | Account creation |
| updated_at | timestamptz | Last profile update |

**Indexes:** id (PK), parent_id, country_code, active_language_pack_id

---

### 2. available_packs
The product catalogue. What can be purchased or unlocked.

| Column | Type | Notes |
|---|---|---|
| id | text | PK — e.g. 'shona-english', 'ai-companion-text' |
| pack_type | text | language/feature/content/cultural |
| name | text | Display name |
| description | text | Marketing description |
| spoken_language_id | text | 'english'/'shona' (language packs only) |
| learned_language_id | text | 'shona'/'english' (language packs only) |
| feature_key | text | 'ai_companion'/'travel'/'community' (feature packs) |
| primary_color | text | Hex — pack theme |
| secondary_color | text | Hex — pack theme |
| flag_emoji | text | Visual identifier |
| revenuecat_product_id | text | Maps to RevenueCat product |
| price_aud | decimal | Display price |
| is_free | boolean | Whether it's free |
| is_subscription | boolean | Recurring vs one-time |
| subscription_period | text | 'monthly'/'annual' |
| is_active | boolean | Whether purchasable |
| is_coming_soon | boolean | Show teaser but not purchasable |
| requires_pack_id | text | Pre-requisite pack |
| sort_order | integer | Display order |

**RLS:** Anyone can read (it's a catalogue). Only service role can write.

**Current packs:**
- `shona-english` — Learn Shona (for English speakers)
- `english-shona` — Dzidza ChiRungu (for Shona speakers)
- `ai-companion-text` — Text AI $10/mo
- `ai-companion-voice` — Voice AI $15/mo
- `ai-companion-realtime` — Companion $25/mo
- `ai-premium` — Premium $45/mo
- `travel-zimbabwe` — Travel (coming soon)
- `community` — Community (coming soon)

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
AI chat history. One row per message.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK → profiles |
| role | text | 'user' or 'rwen' |
| content | text | Message text |
| pack_context | text | Which pack context (ai-companion-text, lesson-m01-l01) |
| session_id | uuid | Groups messages from same session |
| created_at | timestamptz | Message timestamp |

**RLS:** Users can read/insert own rows. No update/delete by user.
**Retention:** 12 months rolling — rows older than 12 months are deleted by scheduled job.

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

| File | When | What |
|---|---|---|
| (inline SQL) | Early dev | Created profiles, lesson_progress, add_xp, delete_user, RLS |
| 002-functions.sql | Early dev | add_xp and delete_user functions |
| 003-consolidated-schema.sql | 2026-04-30 | Full expansion: packs, user_packs, subscriptions, parental_codes, new profile columns |
| 004-account-management.sql | 2026-04-30 | EU cooling off, indexes, account controls, country detection |

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
