# Rwendo — Documentation Index
*All project documentation in one place*
*Last updated: 2026-04-30*

---

## UPDATE INSTRUCTIONS
When adding a new .md file:
- [ ] Add it to this index with a one-line description
- [ ] Add "UPDATE INSTRUCTIONS" section at top of the new file
- [ ] Update PROJECT_OVERVIEW.md if it affects build status

---

## Core Project Docs

| File | Description | Last Updated |
|---|---|---|
| [PROJECT_OVERVIEW.md](../PROJECT_OVERVIEW.md) | Build status, tech stack, done/todo list | 2026-05-01 |
| [PRODUCT-DESIGN.md](./PRODUCT-DESIGN.md) | Three-pack architecture (speaker × course × jurisdiction), pricing, roadmap | 2026-05-01 |
| [LEGAL-REQUIREMENTS.md](./LEGAL-REQUIREMENTS.md) | Full legal research (Apple, Google, GDPR, COPPA, BIPA, AU) | 2026-04-30 |
| [DATABASE-DESIGN.md](./DATABASE-DESIGN.md) | Database schema (v3), tables, functions, migration plan | 2026-04-30 |
| [PHASE-H-REVENUECAT.md](./PHASE-H-REVENUECAT.md) | Phase H deployment plan — what to do when accounts are ready | 2026-05-01 |
| [PACK-AUTHORING-SPEAKER.md](./PACK-AUTHORING-SPEAKER.md) | Self-contained recipe for authoring a new speaker pack (UI/AI/voice/tips) | 2026-04-30 |
| [PACK-AUTHORING-COURSE.md](./PACK-AUTHORING-COURSE.md) | Self-contained recipe for authoring a new course pack (language/ai-companion/travel) | 2026-04-30 |
| [PACK-AUTHORING-JURISDICTION.md](./PACK-AUTHORING-JURISDICTION.md) | Self-contained recipe for authoring a new jurisdiction pack (legal/currency/age/crisis) | 2026-04-30 |
| [supabase-migrations/005-three-pack-architecture.sql](./supabase-migrations/005-three-pack-architecture.sql) | v3 schema migration — **needs run in Supabase SQL Editor** | 2026-04-30 |
| [supabase/functions/README.md](../supabase/functions/README.md) | Edge function deployment instructions | 2026-05-01 |

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
