# Rwendo — Project Overview
*Last updated: 2026-04-30*

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

Speaker pack drives ALL readable text in the app (UI strings, AI prompts, greetings, tips, narration). Course pack drives content (curriculum / starter cards / phrasebook), authored fresh per speaker. Jurisdiction pack drives legal text, currency, age threshold, crisis resources. **Static content only** — the only dynamic surface is Claude's live replies inside an open conversation.

```
data/speakers/{english,shona,...}/         locale, AI prompt, greetings, voices, tips
data/courses/<course-id>/<speaker-id>/     curriculum / cards / phrasebook
data/jurisdictions/{AU,GB,US,EU,ZW}/       privacy + ToS + currency + crisis lines
```

Adding a new language to the system = drop a single `data/speakers/<id>/` directory and contribute speaker variants to whichever courses you want.

**v1 packs:** speakers `english` + `shona` populated; courses `language-shona`, `language-english`, `ai-companion` (each with English + Shona speaker variants); jurisdiction `AU` populated, others as `{ extends: 'AU' }` stubs.

---

## Tech Stack
- **Frontend:** React Native + Expo SDK 54, TypeScript
- **Routing:** expo-router (file-based)
- **Database/Auth:** Supabase (PostgreSQL + RLS) ✅
- **AI:** Claude Haiku 4.5 — rich personalised prompt from onboarding profile ✅
- **Voice TTS:** ElevenLabs ✅ (Rwen speaks responses)
- **Voice STT:** ElevenLabs ✅ (user speaks, hold mic)
- **Real-time conversation:** @elevenlabs/react-native + LiveKit ⬜ NEEDS EAS BUILD
- **ElevenLabs Agent:** agent_3001kqecd7hzf37vdrraz2zq79mw (created, published, Custom LLM configured)
- **Edge Function:** rwen-conversation (deployed to Supabase, Claude webhook)
- **2D Avatar:** 8 Rwen poses (transparent WebP) ✅
- **3D Avatar:** rwen_final.glb (20MB, all animations) ⬜ needs EAS build
- **Payments:** RevenueCat ⬜ not yet implemented
- **Analytics:** PostHog ⬜ not yet
- **Crash:** Sentry ⬜ not yet
- **Backend:** Node.js + Fastify ⬜ not yet (API keys still in app .env)

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
### language-shona / english speaker variant — 100 lessons ✅ COMPLETE
Modules 1-10, 10 lessons each, full 7-phase structure. Lives at `data/curriculum/shona-english/` today; moves to `data/courses/language-shona/english/curriculum/` in Phase E.0.
### language-english / shona speaker variant — ⬜ curriculum to author (Phase K)
Same lesson structure, target=English, native=Shona. Cultural framing rewritten from a Shona-speaker's perspective.
### ai-companion / english speaker variant — ⬜ to author (Phase J)
~50 starter cards + 6 Topic flows + memory schema + crisis triggers (English-speaker phrase list).
### ai-companion / shona speaker variant — ⬜ to author (Phase J/K)
Same, in Shona.

---

## AI Architecture
**Current (working):**
- User types or holds mic → ElevenLabs STT → text
- Text + conversation history → Supabase rpc get_ai_prompt_data → rich Claude prompt
- Claude Haiku responds → ElevenLabs TTS → Rwen speaks
- Full user profile baked into prompt: name, reasons, personal_connection, challenges, ability, companion_type etc.
- Conversation history saves to Supabase conversations table

**Planned (needs EAS Build):**
- @elevenlabs/react-native + LiveKit for hands-free real-time conversation
- Agent connects to rwen-conversation Edge Function via Custom LLM webhook
- Signed URL via voice-signed-url Edge Function (to be created)
- Dynamic variables pass user_id → Edge Function fetches profile → builds rich prompt

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
7 tables: profiles, available_packs, user_packs, lesson_progress, conversations, parental_codes, subscriptions

Key functions: get_ai_prompt_data, add_xp, delete_user, generate_parental_code, redeem_parental_code, user_has_pack, start_subscription, cancel_subscription (EU 14-day cooling off), increment_usage, record_consents

See: docs/DATABASE-DESIGN.md for full schema.

---

## Onboarding Flow (fully built)
1. Language selection (sets app_language)
2. Gender
3. Age verification (under 18 → blocked, Family Plan coming soon teaser)
4. Path choice: Learn / AI Friend / Travel (coming soon)
5. Path-specific questions (ability, reasons, time, challenges, personal_connection for Learn; companion_type, topics for Companion)
6. Voice selection (George/Charlie/Jessica/Alice)
7. Saves full profile to Supabase → onboarding_complete = true → enters app

---

## Legal
- Privacy Policy: docs/legal/privacy-policy.md ⬜ NEEDS LAWYER REVIEW
- Terms of Service: docs/legal/terms-of-service.md ⬜ NEEDS LAWYER REVIEW
- Legal requirements research: docs/LEGAL-REQUIREMENTS.md
- Onboarding design: docs/curriculum/onboarding-design.md
- Sign-up has 4 consent checkboxes (Terms, Privacy, Age 18+, AI disclosure)
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
- Voice consent checkbox before first mic use (BIPA, US Illinois).
- Lazy-load packs from Supabase Storage (when speaker count > 10).
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
app/(tabs)/companion.tsx      — Rwen AI chat (push-to-talk + text)
app/(tabs)/travel.tsx         — Travel (coming soon)
app/(tabs)/profile.tsx        — Settings hub
app/(auth)/onboarding.tsx     — Full onboarding flow (all paths)
app/(auth)/sign-up.tsx        — Registration + consent checkboxes
app/(auth)/welcome.tsx        — Welcome screen with Rwen waving
app/(legal)/privacy-policy.tsx — In-app Privacy Policy
app/(legal)/terms-of-service.tsx — In-app Terms of Service
app/lesson/[id].tsx           — 7-phase lesson engine
app/unit/[id].tsx             — Unit screen (lesson list)

lib/claude.ts                 — Claude API + rich prompt builder
lib/voice.ts                  — ElevenLabs TTS + STT
lib/supabase.ts               — Supabase client
lib/AuthContext.tsx            — Auth + onboarding_complete
lib/SettingsContext.tsx        — Pack, theme, avatar, voice (loads from Supabase on login)
lib/progress.ts               — XP/lesson Supabase functions
lib/storage.ts                — Avatar upload to Supabase Storage
hooks/useProgress.ts          — Progress hook

data/curriculum/shona-english/   100 lesson files. Phase E.0 moves to data/courses/language-shona/english/curriculum/
data/lessons.ts               — Unit/lesson registry (thin Lesson type for unit lists)
data/packs.ts                 — Legacy pair registry. Phase E.0 deprecates in favour of the three-pack composition.
data/languages/               — english.ts, shona.ts. Phase E.0 moves to data/speakers/{english,shona}/index.ts
locales/{en,sn}/              — UI translation JSON. Phase E.0 moves to data/speakers/<id>/locale/
constants/themes.ts           — 6 colour themes

supabase/functions/rwen-conversation/ — Claude webhook Edge Function
docs/legal/                   — Privacy Policy + Terms (need lawyer)
docs/DATABASE-DESIGN.md       — Full DB schema
docs/DOCS-INDEX.md            — All documentation index
docs/LEGAL-REQUIREMENTS.md    — Legal research
docs/curriculum/onboarding-design.md — Full onboarding design
```

---

## Supabase Project
- URL: https://jkjznverqjaokmtvbpqv.supabase.co
- Region: Sydney (ap-southeast-2)
- Tables: profiles, available_packs, user_packs, lesson_progress, conversations, parental_codes, subscriptions
- Storage: avatars bucket (public)
- Edge Functions: rwen-conversation (deployed, --no-verify-jwt)
