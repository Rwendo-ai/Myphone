# Rwendo — Project Overview
*Last updated: 2026-04-30*

> "The journey of a thousand words begins with one step."

## What We Are Building
A cross-platform mobile app (iOS + Android) built with React Native + Expo SDK 54.
Rwendo is a gamified language learning app AND AI companion platform.
Users choose at onboarding: Learn a Language, Create an AI Friend, or Travel (coming soon).
The mascot and companion is Rwen — a chameleon powered by Claude AI and ElevenLabs voice.

**APP NAME:** Rwendo (Shona for "journey")
**MASCOT:** Rwen — 8 PNG poses (transparent WebP, 512×512). 3D .glb ready for EAS build.

---

## Language Pack Architecture
```
data/languages/  english.ts | shona.ts (standalone, reusable)
data/packs.ts    shona-english (✅ 100 lessons) | english-shona (⬜ to author)
Supabase         available_packs table seeded with 8 packs
```
Adding a new language = add language file + pack entry + curriculum. Zero engine changes.

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
### shona-english — 100 lessons ✅ COMPLETE
Modules 1-10, 10 lessons each, full 7-phase structure
### english-shona — ⬜ curriculum to author (structure in place)

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

## ✅ DONE

### Core
- Expo app running on Samsung S23 Ultra via phone hotspot WiFi
- 5-tab navigation with elevated Rwen centre button
- Language pack architecture (extensible to 100+ languages)
- Auth: sign up (password validation + 4 consent checkboxes), sign in, sign out, session persists
- Age gate: under 18 blocked, Family Plan teaser shown
- Profile loads on login: theme, avatar, voice from Supabase
- Profile picture upload to Supabase Storage (avatars bucket)
- Colour themes: 6 options, apply globally via SettingsContext
- Rwen PNG poses: 8 poses, transparent WebP, used throughout app
- Home dashboard: greeting, XP/streak, continue card, Rwen tip, quick access
- Travel screen: coming soon teaser with 6 features, Victoria Falls spotlight
- Profile tab: full settings hub, voice selector, legal links, sign out, delete account

### Learning
- 100 lessons authored (shona-english, Modules 1-10, 7-phase Rwendo Method)
- 5 exercise types all working with key= fix (no stale state between questions)
- XP saves to Supabase on lesson completion
- Streak tracking (daily, updates on open)
- Quit confirmation in lessons
- Keyboard never hides text inputs

### AI & Voice
- Claude Haiku with rich personalised system prompt ✅
- Profile data fetched from Supabase (get_ai_prompt_data RPC) with 10min cache
- Conversation history (last 40 messages) loaded from Supabase
- ElevenLabs TTS: Rwen speaks ✅
- ElevenLabs STT: user holds mic → transcribed → sent to Claude ✅
- Voice on/off toggle in companion
- 4 voice options selectable in Profile
- ElevenLabs Agent created and published
- Supabase Edge Function rwen-conversation deployed (Claude webhook)

### Legal & Compliance
- Privacy Policy (12 sections, Rwendo-specific)
- Terms of Service (arbitration, liability cap, AI disclaimers)
- Both linked from sign-up and Profile
- In-app AI disclosure on companion header
- Age gate blocks under 18

---

## ⬜ TODO — Launch Requirements

### 🔴 Critical
1. **Code audit** — remove dead code, fix broken tabs, clean up (use Opus 4.7)
2. **EAS Build** — required for:
   - @elevenlabs/react-native real-time conversation (LiveKit native modules)
   - App Store / Google Play submission
3. **RevenueCat** — gate AI features by subscription tier
4. **Apple Developer account** ($149 AUD/yr) + **Google Play Console** ($30 USD)
5. **App Store assets** — icons all sizes, screenshots, descriptions
6. **Lawyer review** of Privacy Policy + Terms of Service
7. **Voice consent checkbox** before first mic use (BIPA legal requirement)

### 🟡 Important
8. ElevenLabs real-time conversation (after EAS Build):
   - voice-signed-url Edge Function
   - @elevenlabs/react-native + LiveKit integration
   - Replace push-to-talk UI with hands-free call UI
9. English-Shona curriculum (100 lessons)
10. Claude prompt builder using full onboarding profile (partially done)
11. Supabase DPAs (supabase.com/dpa, check Anthropic + ElevenLabs terms)

### 🟢 Phase 2
- Fastify backend (move API keys server-side)
- Sync.io avatar lipsync at Premium tier
- ElevenLabs Conversational AI at Companion tier
- Downloadable pack architecture (for 100+ languages)
- Travel section content
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

data/curriculum/              — 100 lesson files (m01-l01 through m10-l10)
data/lessons.ts               — Unit/lesson registry
data/packs.ts                 — Language pack registry
data/languages/               — english.ts, shona.ts
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
