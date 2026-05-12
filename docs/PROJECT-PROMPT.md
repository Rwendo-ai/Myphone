# Rwendo — Project Prompt

A single-document briefing for picking up work on Rwendo. Paste this into
a fresh AI conversation and it will know what we're building, where we
are, what's blocked, and what to do next.

**Last updated:** 2026-05-12

---

## 1. What Rwendo is

Rwendo is a React Native (Expo SDK 54) iOS + Android app combining:

- **AI companion chat** (Rwen + named personas: Tendai, Maya, Kai, Sam, Lumi, Aria) — text and voice (ElevenLabs Conv AI), eventually with visual avatars
- **Language learning** — 11 courses (Shona, English, French, Mandarin, Tagalog, Spanish, Portuguese, Hindi, Japanese, Korean, isiNdebele), 100 lessons each, with per-speaker variants for the English course
- **Build Yourself** — 8 self-development tracks (Knowing Yourself, Hard Conversations, Parenting, Money & Meaning, Grief, Sleep, Lost Confidence, Caring for an Aging Parent). All anchored on the Christian-foundation editorial spec (`docs/CHRISTIAN-FOUNDATION-SPEC.md`) — neutral surface, no overt religious framing.
- **Travel Mode** — 13 destinations with phrasebooks, cultural guides, top-10 iconic places, money/FX, flights (Skyscanner affiliate), hotels (Booking.com affiliate), and a Connections social feed with follow/like/comment/photo support
- **XP economy** — server-validated earned currency, redeemable for digital products; cannot buy AI credits (compute cost is real money)

Source language for all content is **English**; runtime translation by Claude API caches per-speaker.

---

## 2. Tech stack

- **Frontend**: Expo SDK 54, React Native (new architecture enabled), Expo Router, react-native-safe-area-context, expo-audio, expo-file-system, expo-secure-store, react-i18next
- **Backend**: Supabase (Postgres + RLS + Storage + Edge Functions). Schema: `auth.users`, `profiles`, `lesson_progress`, `xp_events`, `traveller_profiles`, `traveller_posts`, `companions`, etc.
- **AI**: Claude API (Sonnet 4.6) for text + lesson translation. ElevenLabs (TTS + Conv AI WebSocket) for voice.
- **Payments**: RevenueCat (`react-native-purchases` + `react-native-purchases-ui`). Currently using TEST API keys; production swap is gated on dashboard work.
- **Distribution**: EAS Build + EAS Update. Three OTA channels: `testflight` (iOS TestFlight), `preview` (Android internal APK), `development` (Android dev client). All three linked to their branches as of 2026-05-12.

---

## 3. Pricing model (v3, locked 2026-05-10)

5-tier subscription ladder + lifetime + token packs. Source-of-truth: `data/products.ts`.

| Tier | AUD/mo | Yearly | What's in it |
|---|---|---|---|
| Free | — | — | Rwen only · 10 msgs/day · 2 free starter modules · 3 AI msgs/lesson |
| Text | $4 | — | All companions text · all courses · travel |
| Voice | $5 | — | + voice-to-voice |
| Lipsync Low | $10 | — | + low-quality lipsync video |
| Lipsync High | $25 | $199 | + high-quality lipsync |
| Ultra | $29.99 | $239 | + custom companion (edit-soul) |
| Ultra Lifetime | A$399 once | | + 15% off all token packs forever |

Token packs (consumables for AI usage beyond tier daily caps):
- A$2.99 → 200 tokens
- A$7.49 → 500 tokens (recommended)
- A$14.99 → 1000 tokens

Pricing margins target ~35% over real AI cost on Apple/Google (after their 30% cut). Web pricing (post-launch) at 15% margin — separate SKUs.

Entitlement enforcement: `lib/entitlements.ts`. Hard-coded `OWNER_USER_IDS` list bypasses every gate (5 users: Bowen primary + 1 secondary + 3 testers).

---

## 4. Where we are right now (2026-05-12)

### Working end-to-end
- Both phones (Bowen's iPhone, girlfriend's iPhone, Bowen's Android) running latest code via TestFlight build 3 / preview APK
- All 3 OTA channels delivering updates correctly (channel-branch linkage was broken 24+ hours; fixed 2026-05-11)
- 11 language courses with per-speaker content for the multi-speaker English course (10 speakers × 100 English lessons in storage = 1,000 lessons)
- 11 flipcard decks (10 English variants + 11 single-speaker target-language decks) = ~10,500 flipcards in storage
- 13 Travel destinations including AU + US with phrasebook + culture + iconic places
- Knowing Yourself **Unit 1 + Unit 2 = 20 full lesson bodies** in storage
- 8 Build Yourself tracks each with Module 1 reinforcement card deck (82 cards)
- Knowing Yourself extra: **all 10 unit reinforcement card decks** (120 cards total)
- Connections feed open, follow/unfollow per-post-card, ages 18+ gate
- Cart screen with full v3 pricing surface (purchases gated until production RC keys)
- Owner bypass live for 5 user IDs

### Authored but not in production
- Knowing Yourself **Modules 3-10 lesson bodies** — 90 lessons remaining. Titles render via manifest; opening an unauthored lesson shows "lesson not found" gracefully.

### Not yet built / wired
- RevenueCat dashboard (entitlements, products, paywall UI)
- IAP products in App Store Connect + Play Console (11 products each)
- `supabase/functions/revenuecat-webhook/` — Edge Function for purchase event handling (skeleton exists; deploy pending)
- `supabase/functions/translate-cards/` — Edge Function for per-speaker reinforcement card translation (designed in `docs/REINFORCEMENT-CARDS-TRANSLATION.md`)
- Free-tier quota tracking (server-side counters)
- Per-state Australian destinations (NSW top 5 etc. — content authoring)
- Multi-module expansion of 7 short Build Yourself tracks (curriculum design + authoring)

---

## 5. The 8 Build Yourself tracks — current state

| Track | Planned scope | Authored lessons | Reinforcement cards |
|---|---|---|---|
| Knowing Yourself | 10 units × 10 lessons = **100 planned** | 20 (Units 1-2) | All 10 decks ✓ |
| Hard Conversations at Work | 1 unit × 8 lessons (by design) | 8 ✓ | 1 deck ✓ |
| Parenting Under Pressure | 1 unit × 12 lessons (by design) | 12 ✓ | 1 deck ✓ |
| Money & Meaning | 1 unit × 10 lessons (by design) | 10 ✓ | 1 deck ✓ |
| Grief Honestly | 1 unit × 10 lessons (by design) | 10 ✓ | 1 deck ✓ |
| Sleep Repaired | 1 unit × 8 lessons (by design) | 8 ✓ | 1 deck ✓ |
| Lost Confidence | 1 unit × 8 lessons (by design) | 8 ✓ | 1 deck ✓ |
| Caring for an Aging Parent | 1 unit × 10 lessons (by design) | 10 ✓ | 1 deck ✓ |

**Critical**: the 7 short tracks were designed as single-unit courses. Their plans in `docs/curriculum/TRACK-*.md` do not include Modules 2-10. Expanding them requires curriculum design work first (decide what each new module would teach), then authoring. This is in the ⚪ backlog of `JOBS.md`.

Only **Knowing Yourself** has Modules 2-10 planned. Module 2 is authored; Modules 3-10 are the immediate next content priority.

---

## 6. Reinforcement card system

Authored in `data/reinforcement-cards/`, uploaded to `course-content/reinforcement-cards/<courseId>/m<NN>.json` via `scripts/upload-reinforcement-cards.ts` or `scripts/upload-know-yourself-batch.ts`.

Eight variants, one per track:

| Variant | Track | Shape |
|---|---|---|
| insight | Knowing Yourself | concept + reflection question |
| scenario | Hard Conversations | situation + sample script + NVC move underneath |
| tip | Parenting | moment + permission + try-this |
| decision | Money & Meaning | situation + values question |
| permission | Grief Honestly | feeling + validation + practice |
| tonight | Sleep Repaired | concrete bedtime tactic |
| capability | Lost Confidence | past-evidence prompt |
| moment | Caring for an Aging Parent | hard situation + script + after-line |

Loader: `lib/reinforcement-card-loader.ts` (speaker-aware, cache-first, falls back to English source when per-speaker file missing). Display: `app/cards/[courseId]/[module].tsx` (variant-aware layout). CTA wired on `app/unit/[id].tsx`.

Translation pipeline (designed, not deployed): English source-of-truth → Edge Function calls Claude API on first request for a non-English speaker → result cached at `m<NN>.<speakerId>.json`. See `docs/REINFORCEMENT-CARDS-TRANSLATION.md`.

---

## 7. Lesson schema

`types/lesson.ts → LessonData`:

```ts
{
  id: string;                    // "m02-l01-where-in-your-body"
  module: number;                // 1-10
  lesson: number;                // 1-10
  title: string;
  estimatedMinutes: number;      // typically 5-8
  xpReward: number;              // 25 standard, 50 on m??-l10 module caps
  hook: { rwenLine, culturalNote };
  chunks: Chunk[];               // exactly 3 per Rule of Three
  pattern: { name, explanation, examples };
  exercises: Exercise[];         // 6 per lesson, mixing 3+ of 5 types
  rwenDialogue: { intro, lines };
  activeRecall: { instruction, prompts };
  mission: { title, task, rwenSignoff };
  phase8: { scenario, rwenRole, successCriteria, estimatedMinutes, bonusXp };
  version: 1;
}
```

Storage path: `course-content/lessons/<courseId>/<speakerId>/<lessonId>.json`.

Authoring guide: `docs/curriculum/lesson-template.md` + `docs/curriculum/LEARNING_METHODOLOGY.md`.

---

## 8. Editorial principles (read before authoring)

- **Christian-foundation editorial spec** (`docs/CHRISTIAN-FOUNDATION-SPEC.md`) — neutral surface, dignity-based self-kindness frame (not Neff's three pillars), no Buddhist saturation, no other-religion framing
- **Rule of Three** — exactly 3 chunks per lesson
- **Cognitive sequencing** — body before emotion before cognition before values (polyvagal-aware ordering, not the inverse "change your thoughts" of most self-help)
- **Identity-first framing** — "I am someone who…" not "I'm trying to…"
- **Every lesson ends with a 5-minute action**, not an insight
- **Hard truths included** — every unit contains at least one lesson on something uncomfortable (mortality, betrayal, shame, etc.)
- **Sources named honestly** — when a frame comes from CBT, ACT, NVC, polyvagal theory, Stoicism, attribute it. Don't launder ideas

---

## 9. The Phase 8 conversation (per lesson)

Every authored lesson includes a `phase8` block that drives a 2-4 minute AI conversation after the user finishes the lesson. The lesson's chunks/pattern/title auto-prime Claude's context; the `scenario`, `rwenRole`, and `successCriteria` shape the dialogue. The user gets `bonusXp` (typically 5) for completing it. Phase 8 is gated by AI tier (text+).

This is load-bearing for self-development tracks because the missions are interpersonal/reflective and benefit from real conversation rather than journaling.

---

## 10. How to author the next module (Knowing Yourself Module 3)

1. Read `docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md` §3 for the 10 lesson titles of Unit 3 (Feelings, Honestly)
2. Read `data/courses/know-yourself/manifest.ts` — m03 entries are already there with titles + ids
3. Read one of the m01 lessons in Storage as the canonical shape — pull with `scripts/inspect-know-yourself-m01.ts`
4. Author 10 lesson JSONs in `scripts/know-yourself-batch/lessons/m03-l*.json` matching `LessonData`
5. Run `npx tsx scripts/upload-know-yourself-batch.ts` to push them
6. Commit + push OTA to all 3 branches: `eas update --branch testflight ...` × 3
7. Mark Module 3 done in JOBS.md
8. Module 3's reinforcement card deck is **already authored + in storage** — no action needed

Repeat for Modules 4-10.

---

## 11. Key file locations

```
app/
  _layout.tsx                      Root layout, AuthProvider + SettingsProvider chain
  (tabs)/index.tsx                 Home tab
  (tabs)/learn.tsx                 Learn tab (Languages + Build Yourself)
  (tabs)/companion.tsx             AI Chat tab
  (tabs)/companions.tsx            Companion picker tab
  (tabs)/travel.tsx                Travel hub tab
  cart.tsx                         Cart screen — pricing tiers + token packs
  cards/[courseId]/[module].tsx    Reinforcement card display
  flipcards/[courseId]/[module].tsx Flipcard display
  lesson/[id].tsx                  Lesson runner (7 phases + Phase 8)
  unit/[id].tsx                    Unit screen with lesson list + card CTAs
  travel/connections.tsx           Connections feed + compose

lib/
  entitlements.ts                  Tier ladder + OWNER_USER_IDS bypass
  purchases.ts                     RevenueCat SDK wrapper (test-key guarded)
  manifests.ts                     Lesson manifest registry + module meta
  reinforcement-card-loader.ts     Speaker-aware card loader with fallback
  flipcard-loader.ts               Speaker-aware flipcard loader
  lesson-loader.ts                 Lesson streaming + cache
  travel-content-loader.ts         Travel content streaming (phrasebook/culture/safari)
  SettingsContext.tsx              Tier derivation from RC + speaker/course state

data/
  products.ts                      v3 product catalogue (5 tiers + lifetime + tokens)
  courses/<courseId>/manifest.ts   Lesson metadata per course
  courses/<courseId>/flipcards.ts  Flipcard decks (single-speaker courses)
  courses/language-english/flipcards-from-<speaker>.ts
                                   English flipcards per speaker variant
  reinforcement-cards/<track>-m<NN>.ts
                                   Reinforcement card decks (English source)
  travel/phrasebook/<country>.ts   Phrasebook content
  travel/culture/<country>.ts      Cultural guides
  travel/safari/<region>-top-10.ts Iconic places

scripts/
  upload-*-to-storage.ts           One-off upload scripts for each content type
  upload-know-yourself-batch.ts    Batch upload for Knowing Yourself
  extract-broken-prompts.ts        Audit tool for lesson content quality
  apply-translation-patches.ts     Apply per-language fixes
  generate-and-upload-english-flipcards.ts  Per-speaker flipcard generator

docs/
  JOBS.md                          Rolling punch list (this is the action doc)
  PROJECT-PROMPT.md                This file
  STATUS-2026-05-12.md             Latest status snapshot
  PAYWALL-DESIGN.md                v3 pricing spec
  PRODUCT-DESIGN.md                Full product spec
  CHRISTIAN-FOUNDATION-SPEC.md     Editorial spec (read before authoring)
  REINFORCEMENT-CARDS-TRANSLATION.md  Translation pipeline design
  curriculum/                      All 8 Build Yourself track plans + master scaffold
```

---

## 12. Owner accounts (full access)

These 5 Supabase `auth.users.id` values are whitelisted in `lib/entitlements.ts → OWNER_USER_IDS`. Sign in as any of them to bypass every paywall, quota, and lock:

```
60f2f862-a58e-4afc-ae1d-d2bcd39ae5b4  bowencooney@gmail.com   (owner)
47f6148a-0131-48d3-beac-f56ea7f08727  aussi3bs@gmail.com      (owner)
d3737a86-5f37-4f0b-9b0a-11ea3f6ba80e  charmiephotos1@gmail.com (tester)
bbf622c9-1d62-4ebf-b6d0-56c30d7cc16d  johnsonmakoti@hotmail.co.uk (tester)
4b868d72-51a4-4c4e-85d7-11d704c79201  jmakoti35@gmail.com     (tester)
```

---

## 13. Common gotchas

- **Channel-branch linkage**: When creating a new EAS build profile/channel, run `eas channel:edit <channel> --branch <branch>` immediately. Otherwise OTAs disappear into a void with no error.
- **RC test keys in release builds**: SDK shows a blocking dialog. `lib/purchases.ts` already guards against `test_`-prefixed keys; will auto-unblock when production keys land in env.
- **iOS OTA first-launch behavior**: First launch downloads in background; force-quit + reopen applies. Don't expect content on first open of a fresh install.
- **Lesson cache invalidation**: Devices cache lesson JSON per id. Bumping `version` in the manifest triggers refetch on next open. If a deployed lesson changes content but not version, cached devices stay stale until manual cache clear.
- **`destination-australia` / `destination-usa` keys**: These are NOT CoursePackIds — they're stored in `DESTINATIONS_BY_COURSE` so they appear in the picker but `getDestinationForCourse` ignores them.

---

## 14. The "what to do next" priority order

1. **Knowing Yourself Module 3 lesson bodies** — 10 lessons. Pattern is set; cards are already shipped.
2. Continue 4, 5, 6, 7, 8, 9, 10 as separate sessions
3. Deploy `revenuecat-webhook` Edge Function (once production RC keys exist)
4. Deploy `translate-cards` Edge Function
5. Free-tier quota server enforcement
6. Per-state Australian destinations (content)
7. Production RC dashboard work (blocked on user)
8. App Store + Play Store IAP products (blocked on user)

Anything that requires curriculum design (e.g., expanding the 7 short Build Yourself tracks) needs a strategy decision before authoring — flag it for the user, don't just invent.
