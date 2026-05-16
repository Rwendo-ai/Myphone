# Rwendo — Documentation Index
*All project documentation in one place*
*Last updated: 2026-05-12*

---

## UPDATE INSTRUCTIONS
When adding a new .md file:
- [ ] Add it to this index with a one-line description
- [ ] Add "UPDATE INSTRUCTIONS" section at top of the new file
- [ ] Update JOBS.md (the rolling punch list) if it changes the to-do list

---

## Start here

| File | What it's for |
|---|---|
| [PROJECT-PROMPT.md](./PROJECT-PROMPT.md) | **The briefing.** Paste into a new AI session to onboard them. Covers tech stack, pricing, current state, where to start work next. |
| [JOBS.md](./JOBS.md) | **The action doc.** Rolling punch list — done / in-progress / blocked / next / later. |
| [STATUS-2026-05-12.md](./STATUS-2026-05-12.md) | Latest dated snapshot. |

---

## Core Project Docs

| File | Description | Last Updated |
|---|---|---|
| [PROJECT_OVERVIEW.md](../PROJECT_OVERVIEW.md) | Build status, tech stack, done/todo list | 2026-05-01 |
| [PRODUCT-DESIGN.md](./PRODUCT-DESIGN.md) | Three-pack architecture (speaker × course × jurisdiction), pricing, roadmap | 2026-05-01 |
| [PAYWALL-DESIGN.md](./PAYWALL-DESIGN.md) | v3 5-tier pricing ladder + token packs + lifetime SKU | 2026-05-10 |
| [REINFORCEMENT-CARDS-TRANSLATION.md](./REINFORCEMENT-CARDS-TRANSLATION.md) | End-of-module card schema + runtime translation pipeline | 2026-05-11 |
| [LEGAL-REQUIREMENTS.md](./LEGAL-REQUIREMENTS.md) | Full legal research (Apple, Google, GDPR, COPPA, BIPA, AU) | 2026-04-30 |
| [DATABASE-DESIGN.md](./DATABASE-DESIGN.md) | Database schema (v3), tables, functions, migration plan | 2026-04-30 |
| [PHASE-H-REVENUECAT.md](./PHASE-H-REVENUECAT.md) | Phase H deployment plan — what to do when accounts are ready | 2026-05-01 |
| [PACK-AUTHORING-SPEAKER.md](./PACK-AUTHORING-SPEAKER.md) | Self-contained recipe for authoring a new speaker pack | 2026-04-30 |
| [PACK-AUTHORING-COURSE.md](./PACK-AUTHORING-COURSE.md) | Self-contained recipe for authoring a new course pack | 2026-04-30 |
| [PACK-AUTHORING-JURISDICTION.md](./PACK-AUTHORING-JURISDICTION.md) | Self-contained recipe for authoring a new jurisdiction pack | 2026-04-30 |
| [supabase-migrations/005-three-pack-architecture.sql](./supabase-migrations/005-three-pack-architecture.sql) | v3 schema migration | 2026-04-30 |
| [supabase/functions/README.md](../supabase/functions/README.md) | Edge function deployment instructions | 2026-05-01 |
| [LIPSYNC-INTEGRATION.md](./LIPSYNC-INTEGRATION.md) | Lipsync engines, asset library, pricing reality check | 2026-05-14 |
| [SIMLI-DIRECT-INTEGRATION.md](./SIMLI-DIRECT-INTEGRATION.md) | **v1 lipsync path (optional)** — Conv AI stays the brain; Simli WebRTC tapped as a side-car. Scaffolded for testing, only ships if quality is "clean enough". | 2026-05-16 |
| [SELF-HOSTING-STRATEGY.md](./SELF-HOSTING-STRATEGY.md) | Open-source replacement landscape (TTS/STT/Lipsync/LLM) on Contabo — reference for later cost reduction | 2026-05-15 |
| [CUSTOM-COMPANION-WIZARD-V2.md](./CUSTOM-COMPANION-WIZARD-V2.md) | $39.99 bespoke-companion wizard spec (8 steps, 10 images + 3 videos) | 2026-05-16 |

---

## Curriculum

The 8 Build Yourself track plans + master scaffold live in `docs/curriculum/`:

| File | Description |
|---|---|
| [curriculum/MASTER-SCAFFOLD.md](./curriculum/MASTER-SCAFFOLD.md) | 400-lesson language-course master scaffold |
| [curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md](./curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md) | 100-lesson Build Yourself plan (10 units) — only track with multi-unit scope |
| [curriculum/TRACK-HARD-CONVERSATIONS-WORK-PLAN.md](./curriculum/TRACK-HARD-CONVERSATIONS-WORK-PLAN.md) | 8-lesson single-unit plan |
| [curriculum/TRACK-PARENTING-UNDER-PRESSURE-PLAN.md](./curriculum/TRACK-PARENTING-UNDER-PRESSURE-PLAN.md) | 12-lesson single-unit plan |
| [curriculum/TRACK-MONEY-AND-MEANING-PLAN.md](./curriculum/TRACK-MONEY-AND-MEANING-PLAN.md) | 10-lesson single-unit plan |
| [curriculum/TRACK-GRIEF-HONESTLY-PLAN.md](./curriculum/TRACK-GRIEF-HONESTLY-PLAN.md) | 10-lesson single-unit plan |
| [curriculum/TRACK-SLEEP-REPAIRED-PLAN.md](./curriculum/TRACK-SLEEP-REPAIRED-PLAN.md) | 8-lesson single-unit plan |
| [curriculum/TRACK-LOST-CONFIDENCE-PLAN.md](./curriculum/TRACK-LOST-CONFIDENCE-PLAN.md) | 8-lesson single-unit plan |
| [curriculum/TRACK-CARING-AGING-PARENT-PLAN.md](./curriculum/TRACK-CARING-AGING-PARENT-PLAN.md) | 10-lesson single-unit plan |
| [curriculum/CHRISTIAN-FOUNDATION-SPEC.md](./curriculum/CHRISTIAN-FOUNDATION-SPEC.md) | Editorial spec — read before authoring any Build Yourself lesson |
| [curriculum/LEARNING_METHODOLOGY.md](./curriculum/LEARNING_METHODOLOGY.md) | The 10 pedagogical pillars |
| [curriculum/lesson-template.md](./curriculum/lesson-template.md) | Lesson authoring template |
| [curriculum/AUTHORING-PROGRESS.md](./curriculum/AUTHORING-PROGRESS.md) | Status tracker for the authoring run |

---

## Legal Documents (for lawyer review)

| File | Description | Status |
|---|---|---|
| [legal/privacy-policy.md](./legal/privacy-policy.md) | Full Privacy Policy (12 sections, Rwendo-specific) | ⬜ Needs lawyer review |
| [legal/terms-of-service.md](./legal/terms-of-service.md) | Full Terms of Service (arbitration, liability cap, AI disclaimer) | ⬜ Needs lawyer review |

---

## Product Design

| File | Description | Last Updated |
|---|---|---|
| [curriculum/onboarding-design.md](./curriculum/onboarding-design.md) | Full onboarding flow design, all 3 paths, AI profile construction | 2026-04-30 |
| [curriculum/LEARNING_METHODOLOGY.md](./curriculum/LEARNING_METHODOLOGY.md) | The Rwendo Method, 10 SLA pillars, lesson anatomy | 2026-04-27 |
| [curriculum/lesson-template.md](./curriculum/lesson-template.md) | Template for authoring lessons | 2026-04-27 |
| [curriculum/module-01-greetings.md](./curriculum/module-01-greetings.md) | Module 1 lesson outlines | 2026-04-27 |

---

## Tech Stack Docs

| File | Description |
|---|---|
| [stack/elevenlabs-conversational.md](./stack/elevenlabs-conversational.md) | ElevenLabs Conversational AI (real-time voice), pricing, setup |
| [stack/elevenlabs.md](./stack/elevenlabs.md) | ElevenLabs TTS/STT basics |
| [stack/claude-api.md](./stack/claude-api.md) | Claude API setup and usage |
| [stack/supabase.md](./stack/supabase.md) | Supabase setup |
| [stack/revenuecat.md](./stack/revenuecat.md) | RevenueCat payments |
| [stack/react-native-expo.md](./stack/react-native-expo.md) | Expo setup notes |
| [stack/nodejs-backend.md](./stack/nodejs-backend.md) | Fastify backend (not yet built) |
| [stack/deepgram.md](./stack/deepgram.md) | Deepgram STT (Phase 2) |
| [stack/posthog-sentry.md](./stack/posthog-sentry.md) | Analytics and crash reporting |
| [stack/redis.md](./stack/redis.md) | Redis caching (Phase 2) |

---

## Database Migrations (run in order in Supabase SQL Editor)

| File | Status | What it does |
|---|---|---|
| (inline SQL, early dev) | ✅ Run | Base tables: profiles, lesson_progress, conversations |
| [supabase-migrations/002-functions.sql](./supabase-migrations/002-functions.sql) | ✅ Run | add_xp and delete_user functions |
| [supabase-migrations/003-consolidated-schema.sql](./supabase-migrations/003-consolidated-schema.sql) | ⬜ Run next | Pack system, user_packs, subscriptions, parental_codes, new profile columns |
| [supabase-migrations/004-account-management.sql](./supabase-migrations/004-account-management.sql) | ⬜ Run after 003 | EU cooling-off, usage tracking, indexes, country detection |
| [supabase-migrations/005-three-pack-architecture.sql](./supabase-migrations/005-three-pack-architecture.sql) | ⬜ Run after 004 | NEW jurisdictions table, available_packs.pack_kind, profile.speaker_pack_id / active_course_ids / jurisdiction_id with non-destructive backfill from legacy columns. Three-pack composition model — see PRODUCT-DESIGN.md §3 + DATABASE-DESIGN.md §10. |

---

## Credentials & Keys (NOT in git)

| Key | Location | Used for |
|---|---|---|
| Supabase URL + anon key | .env | Database connection |
| Claude API key | .env | AI responses |
| ElevenLabs API key | .env | Voice TTS + STT |
| ElevenLabs Voice ID | .env | Rwen's voice |
| RevenueCat API key | .env (when added) | Subscriptions |

---

## External Accounts

| Service | Account | Purpose |
|---|---|---|
| Supabase | benocooney@gmail.com | Database + Auth |
| Anthropic | benocooney@gmail.com | Claude API |
| ElevenLabs | existing subscription | TTS + STT |
| Apple Developer | ⬜ Not yet | iOS App Store |
| Google Play Console | ⬜ Not yet | Android Play Store |
| RevenueCat | ⬜ Not yet | Subscription management |
