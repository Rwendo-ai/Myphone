# Rwendo — Project Overview
*Last updated: 2026-05-09*

> **For the most current status snapshot + handoff for the next session, see [docs/STATUS-2026-05-09.md](docs/STATUS-2026-05-09.md).** This file covers stable architecture and long-term direction; the status doc covers what shipped this week and what's next.

> "The journey of a thousand words begins with one step."

## What We Are Building
A cross-platform mobile app (iOS + Android) built with React Native + Expo SDK 54.
Rwendo is a multi-language, multi-course, multi-jurisdiction product. Users choose at onboarding what language they speak (drives the whole UI) and which course(s) they're taking — Learn a Language, AI Companion (Replika-style relationship), or Travel.
The mascot and companion is Rwen — a chameleon powered by Claude AI and ElevenLabs voice.

**APP NAME:** Rwendo (Shona for "journey")
**MASCOT:** Rwen — 8 PNG poses (transparent WebP, 512×512). 3D .glb ready for EAS build.

---

## Pack Architecture (load-bearing — see [docs/PRODUCT-DESIGN.md](docs/PRODUCT-DESIGN.md) §3)

The app is composed of three orthogonal pack types. A user's runtime experience is the **composition** of one piece from each:

```
SPEAKER PACK     × COURSE PACK(s)         × JURISDICTION PACK
"what I read in"   "what I'm doing"          "where I live"
─────────────────────────────────────────────────────────────
english            language-shona            AU
shona              language-english          GB
french (future)    ai-companion              US
tagalog (future)   travel-zimbabwe           EU / ZW
```

Speaker pack drives ALL readable text in the app (UI strings, AI prompts, greetings, tips, narration). Course pack drives content (curriculum / starter cards / phrasebook). Jurisdiction pack drives legal text, currency, age threshold, crisis resources. The static-content principle: the only runtime-dynamic surfaces are Claude's live replies inside conversations + Claude's lazy translation of source-English lessons (deterministic transform of authored content).

```
data/speakers/{english,shona,french,chinese,tagalog}/   locale, AI prompt, greetings, voices, tips
data/courses/<course-id>/                                meta + manifest.ts (lesson list, light)
data/jurisdictions/{AU,GB,US,EU,ZW,FR,PH}/               privacy + ToS + currency + crisis lines
                                                          ↓
Supabase Storage `course-content` bucket                  lesson bodies stream on demand
  lessons/<courseId>/<speakerId>/<lessonId>.json          (cache-first, explicit uninstall only)
```

**Streaming pivot (2026-05-05):** lesson bodies are no longer bundled in the JS binary. Each course ships a tiny manifest (~7 KB) listing its lessons; the device downloads each `.json` from Supabase Storage on first open and caches locally. Trade-off: brief load on first open of a course; payoff: 30-50 MB lighter binary, ship lessons without an EAS rebuild, and lazy translation can write into the same path scheme.

Adding a new language to the system = drop a single `data/speakers/<id>/` directory; lessons translate themselves on first open via the lazy-translation Edge Function (next phase).

**v1 packs:** **11 speakers** populated — `english`, `shona`, `ndebele`, `french`, `chinese`, `tagalog`, `hindi`, `spanish`, `portuguese`, `japanese`, `korean`. **19 courses** in Storage (10 directional language pairs × English ↔ {Shona/Ndebele/French/Chinese/Tagalog/Hindi/Spanish/Portuguese/Japanese/Korean}, plus 8 self-development "Build Yourself" courses, plus AI Companion). Jurisdictions `AU`, `GB`, `US`, `EU`, `ZW`, `FR`, `PH` populated; others as `{ extends: 'AU' }` stubs.

**Streaming pivot (extended 2026-05-09):** travel content (phrasebooks × 11, cultural guides × 11, safari, flipcards × 11 = ~6,000 vocab entries) now also streams from Supabase Storage. Bundle drops further by ~624 KB. Pattern: registries + types + UI bundled, all content (lessons, phrasebook, culture, safari, flipcards, post images) streams on demand.

---

## Tech Stack
- **Frontend:** React Native 0.81.5 + Expo SDK 54, TypeScript, Hermes engine, new architecture
- **Routing:** expo-router (file-based)
- **Database/Auth:** Supabase (PostgreSQL + RLS) ✅
- **OAuth:** Google ✅ (via `expo-auth-session` + Supabase hosted OAuth, no native dep), Apple ⬜ (gated on Apple Dev account), Crypto wallet (XRPL) ⬜ (gated on WalletConnect setup). Facebook explicitly excluded.
- **AI:** Claude Haiku 4.5 with prompt caching — rich personalised prompt from companion preset + memory + profile ✅
- **Voice TTS:** ElevenLabs ✅ (Rwen speaks responses, turn-based fallback)
- **Voice STT:** ElevenLabs Scribe ✅ (turn-based fallback path)
- **Real-time conversation:** ElevenAgents WebSocket via hand-rolled client ([lib/conv-ai-ws.ts](lib/conv-ai-ws.ts)) + `@speechmatics/expo-two-way-audio` for PCM I/O ✅ — full-duplex live conversation working in Android dev build. Replaced the broken `@elevenlabs/react-native` + LiveKit stack.
- **ElevenLabs Agent:** `agent_8501kqhw371ff7zatpp9dmj66ea9` (Rwen Shell — public agent, no system prompt server-side, all overrides flow from client at session start)
- **Edge Function:** `rwen-chat` deployed (Claude webhook). `rwen-tts` and `rwen-stt` exist as code, awaiting deploy + env-flag flip to remove client-side keys.
- **2D Avatar:** 8 Rwen poses (transparent WebP) ✅
- **3D Avatar:** rwen_final.glb (20MB, all animations) ⬜ deferred to v1.5
- **Payments:** RevenueCat ✅ SDK wired (2026-05-09) — `react-native-purchases` + `react-native-purchases-ui` installed, `lib/purchases.ts` is the wrapper, `app/profile/plans.tsx` triggers the hosted paywall, `hooks/useEntitlements.ts` is the reactive read. Test API keys live in `.env.local`. Production keys + App Store Connect / Play Console product creation + RevenueCat dashboard mapping + webhook Edge Function are still required before purchases work end-to-end. See [docs/PAYWALL-DESIGN.md](docs/PAYWALL-DESIGN.md).
- **Analytics:** PostHog ⬜ not yet
- **Crash:** Sentry ⬜ not yet
- **Email:** Supabase Auth (transactional/auth) ✅, Resend or SendGrid ⬜ for marketing/welcome emails (planned)

---

## Visual Identity
- Primary: `#1A3C6E` | Secondary: `#4A90D9` | Accent: `#F5F7FA`
- XP/Gold: `#F5A623` | Streak: `#FF6B35`
- 6 colour themes selectable in Profile (applies globally via SettingsContext)

---

## Navigation (5 tabs)
```
🏠 Home Dashboard  |  📚 Learn  |  🦎 RWEN (centre elevated)  |  ✈️ Travel  |  👤 Profile
```

---

## The Rwendo Learning Method
7-Phase Lesson: Hook → Chunks (3 max) → Pattern → Practice → Dialogue → Recall → Mission
5 Exercise Types: match_pairs, fill_blank, translate (typed), build_sentence, multiple_choice
Based on 10 SLA pillars. Max 3 new chunks per lesson. 5-7 min per lesson.

---

## Curriculum Status

**576 lessons authored across 13 courses, all uploaded to Supabase Storage** (`course-content` bucket). Lessons stream on demand — no longer bundled in the JS binary. See [docs/PRODUCT-DESIGN.md §3.11](docs/PRODUCT-DESIGN.md) for the streaming architecture, [docs/DATABASE-DESIGN.md "Storage buckets"](docs/DATABASE-DESIGN.md) for path scheme.

### Languages (5 courses, all in Storage at `lessons/<courseId>/english/`)
- **language-shona** — 100 lessons ✅ (English speaker variant; the original full curriculum)
- **language-english** — 100 lessons ✅ (Shona speaker variant — target=English, native=Shona)
- **language-french** — 100 lessons ✅
- **language-chinese** — 100 lessons ✅
- **language-tagalog** — 100 lessons ✅

Each follows the 7-phase Rwendo Method (hook / chunks / pattern / practice / dialogue / recall / mission).

### Build Yourself umbrella (8 self-development courses, English-source, in Storage)

**Editorial direction:** Christian foundation underneath, neutral surface, no overt religious language, no other-religion framing. See [docs/curriculum/CHRISTIAN-FOUNDATION-SPEC.md](docs/curriculum/CHRISTIAN-FOUNDATION-SPEC.md). The 2026-05-05 audit found Buddhist/MBSR/Neff saturation across several existing tracks; rewrites pending per the spec. Language courses (above) are explicitly out of scope — cultural notes there legitimately reflect regional religion.

- **know-yourself** — 10 lessons ⚠️ pending rewrite (Buddhist-saturated; full plan rewritten 2026-05-05 in [docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md](docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md); Units 2-10 still outlined)
- **hard-conversations-work** — 8 lessons ✅ (one m01-l01 fix flagged)
- **parenting-under-pressure** — 12 lessons ⚠️ Neff references in m01-l07 to rewrite
- **money-and-meaning** — 10 lessons ⚠️ Neff/Buddhist refs in m01-l03, m01-l04 to rewrite
- **grief-honestly** — 10 lessons ⚠️ Buddhist 49-day in m01-l10 cultural list to swap (Bonanno-grounded, NOT Kübler-Ross)
- **sleep-repaired** — 8 lessons ✅ clean (CBT-I)
- **lost-confidence** — 8 lessons ⚠️ Neff (m01-l04) and Suzuki Zen (m01-l07) to rewrite
- **caring-aging-parent** — 10 lessons ⚠️ Neff references in m01-l06 to rewrite (Pauline Boss / ambiguous loss)

### AI Companion (separate tab, conversational — not a 7-phase curriculum)
- **ai-companion / english** — 50 starter cards + 6 Topic flows + memory schema + crisis triggers ✅
- **ai-companion / shona** — Phase K stub re-exporting English with handoff translated. Full Shona authoring deferred.

### Non-English speaker variants (every language and Build Yourself course)
⬜ **Lazy translation Edge Function** (next phase) — Claude translates source-English JSON on first non-English-speaker open, uploads to Storage at `lessons/<courseId>/<speakerId>/<lessonId>.json`. Cached globally so every subsequent same-language user gets a hit. Until this lands, non-English speakers see English content with their language pack's UI chrome.

---

## AI Architecture

### Text chat (working)
- User types → Claude Haiku 4.5 with companion-aware system prompt + recent conversation recap + memory facts → reply rendered + saved to `conversations` table
- Single save path: `appendConversationTurn` in [lib/conversation-memory.ts](lib/conversation-memory.ts)
- Prompt is built per-turn from: MISSION_PILLARS + active companion preset + user profile + speaker pack + recent dialogue (last 10 turns) + companion_facts (top-k)

### Voice mode (full-duplex, working)
- Hand-rolled WebSocket client to ElevenAgents endpoint ([lib/conv-ai-ws.ts](lib/conv-ai-ws.ts))
- `@speechmatics/expo-two-way-audio` provides 16 kHz / 16-bit / mono PCM in both directions (matches ElevenLabs byte-for-byte)
- Init message sends per-session overrides: system prompt (full Rwendo identity), first message (localised greeting), language (speaker.isoCode), voice_id (active companion's preferred voice)
- Server LLM is Gemini 2.5 (configured in agent dashboard); we override its prompt entirely so it speaks as Rwen/Maya/Tendai/etc. instead of a default chatbot
- Transcripts stream into the same chat list as text — unified message timeline
- Voice transcripts persist via the same `appendConversationTurn` writer

### Headless hook
- [hooks/useConvAISession.ts](hooks/useConvAISession.ts) — used by both inline (`app/(tabs)/companion.tsx`) and full-screen (`app/companion/voice-conv.tsx`) entry points
- `voiceEngine` setting in SettingsContext picks `'conv_ai'` (default, full-duplex) vs `'turn_based'` (fallback for flaky devices)

### Memory architecture (Phase 2 in progress)
- `companion_facts` table — pgvector-indexed semantic memory; populated by an extraction pipeline (TBD — Edge Function or scheduled job)
- `companion_summaries` table — weekly compressed summaries (TBD)
- `loadRecentConversationRecap` formats recent dialogue as plain-text recap injected into prompt's `{{recentContext}}` slot
- `loadCompanionFacts` returns top-k facts → prompt's `{{memoryContext}}` slot

---

## Monetisation Tiers (AUD)
| Tier | Price | Features |
|---|---|---|
| Free | $0 | Lessons only |
| Text AI | $10/mo | 500 AI messages |
| Voice | $15/mo | 200 voiced messages (push-to-talk) |
| Companion | $25/mo | 60 min real-time conversation |
| Premium | $45/mo | 120 min + avatar lipsync |

RevenueCat handles billing. Not yet implemented.

---

## Database (Supabase — Sydney region)
14 tables: profiles, available_packs, user_packs, lesson_progress, conversations, parental_codes, subscriptions, jurisdictions, user_dictionary, lesson_notes, companions, companion_facts, companion_summaries, feedback_responses

Key functions: `get_ai_prompt_data`, `add_xp`, `delete_user`, `generate_parental_code`, `redeem_parental_code`, `user_has_pack`, `start_subscription`, `cancel_subscription` (EU 14-day cooling off), `increment_usage`, `record_consents` (extended 2026-05-04 with marketing + info-protection params), `enforce_companion_age_gate` (trigger).

Recent migrations (2026-05): `add_delete_policy_conversations`, `add_consent_columns`, `extend_record_consents`, `enforce_companion_age_gate`.

See: [docs/DATABASE-DESIGN.md](docs/DATABASE-DESIGN.md) for full schema.

---

## Auth + Onboarding Flow

### Auth (signup → verify → onboarding)
1. **Welcome** screen — Get Started / I have an account
2. **Sign-up** ([app/(auth)/sign-up.tsx](app/(auth)/sign-up.tsx))
   - OAuth bar at top (currently shows "Continue with Google"; Apple + Crypto wallet hidden behind `OAUTH_READY` flags in [lib/oauth.ts](lib/oauth.ts))
   - Email + password + username form
   - 3 consent checkboxes: combined legal (required), info-protection promise (required), marketing opt-in (optional, GDPR-compliant)
3. **6-digit OTP verification** ([app/(auth)/verify-code.tsx](app/(auth)/verify-code.tsx))
   - Supabase emails a custom-templated email (Rwen waving + 6-digit code)
   - Auto-fill on iOS, paste support, auto-submit on 6 digits
   - Resend code button
4. **Onboarding** (after first sign-in)
   - Language (sets `app_language` AND `speaker_pack_id` — they sync)
   - Gender, age (DOB used for COPPA + age-gating Aria)
   - Path: Learn / AI Friend / Travel
   - Path-specific questions
   - Voice selection (curated per speaker pack)
   - Saves to `profiles` → `onboarding_complete = true` → enters app

### Companion-tab age gating
- `CompanionPreset.ageGate?: number` — Aria has `ageGate: 18`
- Three-layer enforcement: client filter (preset card hidden), client guard (`handleActivate` blocks), Postgres trigger `enforce_companion_age_gate` (last line of defence)
- Under-18s never see Aria's card. List looks shorter, no "locked" badge, no awareness she exists. Clean UX.

---

## Legal
- Privacy Policy: [docs/legal/privacy-policy.md](docs/legal/privacy-policy.md) ⬜ NEEDS LAWYER REVIEW
- Terms of Service: [docs/legal/terms-of-service.md](docs/legal/terms-of-service.md) ⬜ NEEDS LAWYER REVIEW
- Legal requirements research: [docs/LEGAL-REQUIREMENTS.md](docs/LEGAL-REQUIREMENTS.md)
- Onboarding design: [docs/curriculum/onboarding-design.md](docs/curriculum/onboarding-design.md)
- **Sign-up consents (3 boxes — down from 4)**: combined legal (Terms + Privacy + Age + AI disclosure, required), info-protection promise (required), marketing opt-in (optional). Recorded via `record_consents` RPC with timestamps in `profiles`.
- **GDPR/CASL/PECR/Spam Act compliance**: marketing emails only sent to users who explicitly opted in (`marketing_consent_at IS NOT NULL`). Marketing emails must include unsubscribe link + sender identity (not yet wired — needs Resend + Edge Function).
- Voice consent needed before first mic use (BIPA compliance) ⬜

---

## ✅ DONE — Phases A through N landed (Phase H is plan-only)

### Architecture (A → E.0)
- ✅ `bdf4dd7` **Phase A** — lesson schema rename `target`/`native` (1994 keys across 100 files)
- ✅ `afa9f66` **Phase B** — pack-aware curriculum loading
- ✅ `093b98b` / `2a160b6` / `66ca95c` / `9d208e3` **Phase C** — i18next + en locale extraction
- ✅ `e92e3f6` tsc cleanup — project type-clean
- ✅ `8904538` / `74ab471` **Phase D** — Shona (sn) UI translation drafted with `__warnings`. Awaiting native review.
- ✅ `42e5ccc` In-app App Language switcher
- ✅ `44cf85f` design rewrite — three-pack model in `PRODUCT-DESIGN.md` / `PROJECT_OVERVIEW.md` / `DATABASE-DESIGN.md`
- ✅ `698ef21` **Phase E.0** — three-pack architecture refactor (`data/speakers/`, `data/courses/`, `data/jurisdictions/`)
- ✅ `8336e0f` Profile voice picker reads `speaker.voices`
- ✅ `8292485` DB migration `005-three-pack-architecture.sql` — **needs run in Supabase SQL Editor**

### Phase E → N
- ✅ `84e6121` **Phase E** — module gating + `DEV_UNLOCK_ALL` + `scripts/create-demo-account.md`
- ✅ `2671af2` **Phase I** — onboarding jurisdiction step + dynamic `minAge`
- ✅ `f50e85c` **Phase G** — Learn tab track selector (Language / AI Companion / Travel cards)
- ✅ `b6a2a7e` **Phase F** — Phase 8 schema + lesson-completion teaser card
- ✅ `ea8d66b` **Phase L** — methodology + companion-philosophy in-app screens
- ✅ `0993016` **Phase J** — AI Companion English content (10 starter cards, 6 Topics, 5 depth levels, 30 memory facts, crisis triggers); Shona variant stubbed for K
- ✅ `b045fe5` **Phase K stub** — `language-english/shona/curriculum/m01-l01.ts` example proves second variant works
- ✅ `4807f60` **Phase M (code)** — `rwen-chat`, `rwen-tts`, `rwen-stt` edge functions + `EXPO_PUBLIC_USE_EDGE_FUNCTIONS` flag. **Functions need deploy** before TestFlight.
- ✅ `2c1db1f` **Phase N** — legal screens read `jurisdiction.{name, coolingOffDays}`; per-region banner; lawyer fills text into `jurisdiction.privacyPolicyMd` / `.termsOfServiceMd`
- 🔶 `746c030` **Phase H plan** — `docs/PHASE-H-REVENUECAT.md`. External-account-blocked. Architecture is RevenueCat-shaped.

### Streaming pivot (2026-05-05) — UNCOMMITTED, ready to commit
- ✅ 576 lessons uploaded to Supabase Storage (`course-content` bucket) at `lessons/<courseId>/<speakerId>/<lessonId>.json`
- ✅ `lib/lesson-loader.ts` — cache-first reads from `${documentDirectory}lessons/`, Storage fallback, install / uninstall / disk-bytes helpers
- ✅ Per-course `manifest.ts` files generated (~7 KB / course, 13 courses) for Learn-tab unit rendering without lesson bodies
- ✅ Lesson screen rewritten to async `loadLessonAsync(courseId, speakerId, id)`; loading + error states with retry-via-back
- ✅ Unit screen passes `courseId` via route param so loader hits correct Storage path even when `activeCourseId` is stale
- ✅ Per-course module meta in `lib/manifests.ts` (self-development tracks have proper unit titles, not the language-course "Greetings & Respect")
- ✅ Bundled `data/courses/<id>/<speaker>/curriculum/` directories deleted (576 files); typecheck clean
- ✅ Storage RLS: authenticated users read; service-role-only write
- ✅ React Native Blob `.text()` quirk handled: `await new Response(data).text()` in loader
- ✅ DEV_UNLOCK_ALL now also bypasses the locked/owned course-pill split on the Learn tab so the developer can preview every course

### Build Yourself umbrella (parallel agent runs, 2026-05-04)
- ✅ Knowing Yourself Unit 1 (10 lessons) + 7 micro-tracks (66 lessons total) authored by 8 parallel Opus 4.7 agents per `docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md` and `docs/curriculum/TRACK-*-PLAN.md`. All 76 self-dev lessons in Storage.
- ✅ Three agents (Grief, Parenting, Aging Parent) independently flagged the need for deterministic crisis-resource rendering — `crisisHandoff?: boolean` field added to `LessonData` in `types/lesson.ts`. Runtime wiring still pending.

### Core
- Expo app running on Samsung S23 Ultra via phone hotspot WiFi
- 5-tab navigation with elevated Rwen centre button
- Auth: sign up (password validation + 4 consent checkboxes), sign in, sign out, session persists
- Age gate: under 18 blocked, Family Plan teaser shown
- Profile loads on login: theme, avatar, voice, app_language from Supabase
- Profile picture upload to Supabase Storage (avatars bucket)
- Colour themes: 6 options, apply globally via SettingsContext
- Rwen PNG poses: 8 poses, transparent WebP, used throughout app
- Home dashboard: greeting, XP/streak, continue card, Rwen tip, quick access
- Travel screen: coming soon teaser with 6 features, Victoria Falls spotlight
- Profile tab: full settings hub, voice selector, language switcher, legal links, sign out, delete account

### Learning
- 100 lessons authored (language-shona / english speaker variant, Modules 1-10, 7-phase Rwendo Method)
- 5 exercise types all working with key= fix (no stale state between questions)
- XP saves to Supabase on lesson completion
- Streak tracking (daily, updates on open)
- Quit confirmation in lessons
- Keyboard never hides text inputs

### AI & Voice
- Claude Haiku with rich personalised system prompt ✅ (currently English-only — Phase E.0 makes it speaker-driven)
- Profile data fetched from Supabase (get_ai_prompt_data RPC) with 10min cache
- Conversation history (last 40 messages) loaded from Supabase
- ElevenLabs TTS: Rwen speaks ✅
- ElevenLabs STT: user holds mic → transcribed → sent to Claude ✅
- Voice on/off toggle in companion
- 4 voice options selectable in Profile (currently global; Phase E.0 makes them speaker-pack-curated)
- ElevenLabs Agent created and published
- Supabase Edge Function rwen-conversation deployed (Claude webhook)

### Legal & Compliance
- Privacy Policy (12 sections, Rwendo-specific) — currently single English file; Phase E.0 + Phase N make this jurisdiction-driven
- Terms of Service (arbitration, liability cap, AI disclaimers) — same
- Both linked from sign-up and Profile
- In-app AI disclosure on companion header
- Age gate blocks under 18 (currently hardcoded; Phase N reads from `jurisdiction.minAge`)

---

## ⬜ TODO

### 🔴 External work (blocked on user)
1. **Run `005-three-pack-architecture.sql`** in Supabase SQL Editor. Until this runs, new sign-ups don't get the v3 profile fields populated automatically. Code falls back to legacy fields so the app still works pre-migration.
2. **Deploy 3 edge functions** (`rwen-chat`, `rwen-tts`, `rwen-stt`) + set `ANTHROPIC_KEY` / `ELEVENLABS_KEY` Supabase secrets. After verify, set `EXPO_PUBLIC_USE_EDGE_FUNCTIONS=1` and remove `EXPO_PUBLIC_CLAUDE_KEY` / `EXPO_PUBLIC_ELEVENLABS_KEY` from production `.env`. **HARD PREREQUISITE** before TestFlight / Play Internal Testing.
3. **Native-Shona reviewer pass** on the sn locale `__warnings` (Phase D follow-up)
4. **Phase H accounts** — Apple Developer ($149 AUD/yr) + Google Play Console ($30 USD) + RevenueCat. Then Phase H wiring per `docs/PHASE-H-REVENUECAT.md`.
5. **Lawyer review** of Privacy Policy + Terms of Service per jurisdiction. Authored markdown drops into `data/jurisdictions/<id>/{privacyPolicyMd, termsOfServiceMd}`.
6. **EAS Build** — for `@elevenlabs/react-native` real-time + App Store / Play Store submission.
7. **App Store assets** — icons all sizes, screenshots, descriptions.

### 🟡 Authoring backlog (deferred)
- Phase K: ~99 remaining `language-english/shona/curriculum/` lessons (Shona-speaker-learning-English curriculum). Pipeline per PRODUCT-DESIGN.md §4.4.
- Phase K: full Shona AI Companion variant content (starter cards, topics, memory schema). Currently re-exports English with the speakerId swapped.
- Phase F: per-lesson `phase8` scripted scenarios on the existing 100 Shona lessons. v1 fallback uses lesson title as auto-context.
- Phase D: home tip mirrors for any speaker pack added beyond English / Shona.

### 🟢 Post-launch (v1.x)
- ElevenLabs real-time conversation (after EAS Build): voice-signed-url Edge Function, hands-free call UI.
- Custom Shona voice clone (~$1-2k recording session).
- Forex alignment of pricing per jurisdiction (Phase H likely handles via RevenueCat localised pricing).
- Memory-extraction Claude job for AI Companion (periodic pass over `conversations` → `companion_memory` JSONB).
- Memory UI panel inside Companion tab.
- Crisis-trigger detection wired into `processMessage` before Claude call (composes course pack + jurisdiction pack).
- **Wire `crisisHandoff` runtime** — three Build-Yourself courses (Grief, Parenting Under Pressure, Caring for an Aging Parent) flagged lessons that should render the jurisdiction's crisis resources instead of the normal mission. `LessonData.crisisHandoff` is now in the schema; lesson screen needs to read it and render `jurisdiction.crisisResources` when true.
- Voice consent checkbox before first mic use (BIPA, US Illinois).
- **Lazy translation Edge Function** — Claude translates source-English lesson JSON for non-English speakers on first open, uploads to Storage, caches globally. ~$0.12 / lesson amortised. Until shipped, non-English speakers see English lesson content with their language pack's UI chrome.
- Sentry + PostHog before any wider beta.

### 🟢 Phase 2
- Sync.io avatar lipsync at Premium tier
- ElevenLabs Conversational AI (Custom LLM webhook) at Companion tier
- Travel section content (per-jurisdiction destination guides)
- Community features
- Children's Family Plan (parental consent flow)
- SRS review mode

### 🟡 Important (post-launch v1.x)
- ElevenLabs real-time conversation (after EAS Build): voice-signed-url Edge Function, hands-free call UI
- Custom Shona voice clone (~$1-2k recording session) for the `shona` speaker pack
- Forex alignment of pricing across jurisdictions
- Supabase DPAs (supabase.com/dpa, check Anthropic + ElevenLabs terms)

### 🟢 Phase 2
- Fastify backend (alternative to Edge Functions if Edge Function limits become a problem)
- Sync.io avatar lipsync at Premium tier
- ElevenLabs Conversational AI (Custom LLM webhook) at Companion tier
- Downloadable pack architecture (lazy-load packs from Supabase Storage when there are 10+ speakers)
- Travel section content (per-jurisdiction destination guides)
- Community features
- PostHog + Sentry
- Children's Family Plan (parental consent flow)
- SRS review mode

---

## Key File Locations
```
app/(tabs)/index.tsx          — Home Dashboard
app/(tabs)/learn.tsx          — Lessons
app/(tabs)/companion.tsx      — Chat + inline voice orb
app/(tabs)/companions.tsx     — Companion picker (preset cards, age-gated)
app/(tabs)/travel.tsx         — Travel (coming soon)
app/(tabs)/profile.tsx        — Settings hub (voice engine toggle, erase chat history, etc.)
app/(auth)/welcome.tsx        — Welcome screen with Rwen waving
app/(auth)/sign-up.tsx        — Registration: OAuth bar + email + 3 consents
app/(auth)/sign-in.tsx        — Sign in: OAuth bar + email
app/(auth)/verify-code.tsx    — 6-digit OTP verification post-signup
app/(auth)/onboarding.tsx     — Full onboarding flow (language, age, path, voice)
app/(legal)/privacy-policy.tsx, terms-of-service.tsx — Per-jurisdiction legal screens
app/companion/voice-conv.tsx  — Legacy full-screen voice route (uses useConvAISession hook)
app/companion/voice-turn.tsx  — Turn-based fallback (no Conv AI deps)
app/companion/voice.tsx       — Dispatcher (picks engine via voiceEngine setting)
app/lesson/[id].tsx           — 7-phase lesson engine
app/unit/[id].tsx             — Unit screen (lesson list)

lib/claude.ts                  — Claude API + companion-aware prompt builder + prompt caching
lib/voice.ts                   — ElevenLabs TTS + STT (turn-based path)
lib/conv-ai-ws.ts              — Hand-rolled WebSocket client to ElevenAgents
lib/conversation-memory.ts     — Single save path: appendConversationTurn, loadRecentConversationRecap, loadCompanionFacts
lib/companion-prompts.ts       — buildCompanionPrompt + buildCompanionGreeting
lib/active-companion.ts        — fetchActiveCompanionPresetId, resolvePreset, ageGateMet
lib/oauth.ts                   — Google sign-in (+ Apple/Crypto stubs gated by OAUTH_READY)
lib/supabase.ts                — Supabase client
lib/AuthContext.tsx            — Auth: signUp, signIn, verifySignupOtp, resendSignupOtp, signOut
lib/SettingsContext.tsx        — Speaker pack, theme, avatar, voice, voice engine, active companion
lib/i18n.ts                    — i18next setup with 5 locales
lib/entitlements.ts            — Tier gates (free/text/voice/companion/premium)
lib/progress.ts                — XP/lesson Supabase functions
lib/storage.ts                 — Avatar upload
hooks/useConvAISession.ts      — Headless voice session hook (used by inline + full-screen)
hooks/useProgress.ts           — Progress hook

data/companions/presets.ts     — 7 companion presets + MISSION_PILLARS + ageGate
data/speakers/{english,shona,french,chinese,tagalog}/  — 5 speaker packs with locale + voices + AI prompt + greetings
data/courses/                  — Course packs per language
data/jurisdictions/            — Per-region legal/currency/age/crisis configs

supabase/functions/rwen-chat/  — Claude webhook Edge Function (deployed)
supabase/functions/rwen-tts/, rwen-stt/  — Code exists, awaiting deploy
docs/STATUS-2026-05-04.md      — Most current snapshot + handoff
docs/PRODUCT-DESIGN.md         — Detailed product design
docs/DATABASE-DESIGN.md        — Full DB schema
docs/AI-COMPANION-PLAN.md      — Companion architecture + memory plan
docs/PHASE-H-REVENUECAT.md     — Payment integration plan
docs/legal/                    — Privacy Policy + Terms (need lawyer)
docs/curriculum/               — Lesson template + module specs
docs/stack/                    — Per-vendor architecture notes (ElevenLabs, Supabase, RevenueCat, etc.)
```

---

## Supabase Project
- URL: https://jkjznverqjaokmtvbpqv.supabase.co
- Region: Sydney (ap-southeast-2)
- **Tables (14)**: profiles, available_packs, user_packs, lesson_progress, conversations, parental_codes, subscriptions, jurisdictions, user_dictionary, lesson_notes, companions, companion_facts, companion_summaries, feedback_responses
- **Storage**:
  - `avatars` bucket (public) — user profile pictures
  - `rwendo-email-signup-asset` bucket (public) — auth/welcome email images (Rwen waving etc.)
  - `course-content` bucket — lesson JSONs (uploaded but not yet read by app)
- **Edge Functions**: `rwen-chat` deployed; `rwen-tts` + `rwen-stt` written, awaiting deploy
- **Auth providers**: Email + password ✅, Google OAuth ✅, Apple/Crypto wallet ⬜ (planned)
- **Auth email template**: Custom branded HTML for signup confirmation, with Rwen waving + 6-digit OTP
- **RPC**: `record_consents` (extended for marketing + info-protection consents), `get_ai_prompt_data`, `add_xp`, etc.
