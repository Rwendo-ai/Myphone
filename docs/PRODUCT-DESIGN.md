# Rwendo — Product Design

*Last updated: 2026-04-30. Owner: Ben.*

This is the canonical design doc for **how Rwendo actually works** as a multi-language, multi-pack, multi-tier product. It covers four entangled topics:

1. The two lesson tracks (Language curriculum and AI Companion curriculum)
2. The pack architecture that scales from 2 to 100 languages without 100 apps
3. The i18n strategy that makes the whole UI flip into the user's spoken language
4. The pricing model (4 free modules, AI tiers, overage policy)

Everything below is a proposal based on the discussion of 2026-04-30. Implementation has **not** started — the existing code partially matches the schema but does not match this design. See §8 (Implementation roadmap) and §9 (Open questions) at the end.

---

## 1. The reality check (current state)

Before designing forward, here's what's actually in the codebase vs what the docs and schema imply:

| Layer | Status | Gap |
|---|---|---|
| **`available_packs` table** | ✅ Well-designed. Distinguishes `pack_type='language'` vs `pack_type='feature'`. All pricing fields present. 8 packs seeded with correct prices. | None at the data layer — this is the most forward-looking piece. |
| **`user_packs` table** | ✅ Tracks ownership with `is_active`, `expires_at`, monthly `usage_count` / `usage_limit`. | Code never inserts/reads from it. |
| **`subscriptions` table** | ✅ Mirrors RevenueCat tier with quotas (`ai_messages_limit` etc.). Trigger creates a "free" record on signup. | Code never reads it. The Profile screen hardcodes "Free Plan". |
| **`user_has_pack()` RPC** | ✅ Exists. | Never called. |
| **`data/packs.ts`** | Only the 2 language packs. No feature packs. | Should mirror `available_packs` table or be replaced by a runtime fetch. |
| **`data/languages/index.ts`** | Only `english` + `shona` registered. (`french.ts` exists but is unregistered.) | Adding a language = drop a file + add to index. Trivial. |
| **`types/lesson.ts`** | **Hardcoded `shona: string` and `english: string` fields** on `Chunk`, `DialogueLine`, `PatternExample`. | This is the load-bearing problem. To support arbitrary pack pairs the schema needs `target` / `native` (or `learned` / `spoken`) keys instead of language names. |
| **Curriculum (100 lesson files)** | All match the hardcoded shape. | Will need a migration when the type is renamed. Mechanical but unskippable. |
| **Lesson engine** (`app/lesson/[id].tsx`) | Reads `chunk.shona` / `chunk.english` directly. | Same migration as above. |
| **UI strings** | Every label is hardcoded English. Profile says `"Daily XP goal"`, Home says `"Talk to Rwen"`, etc. | No `t()` system. Needs i18next + JSON locale files. |
| **Module gating** | Doesn't exist. Every lesson is unlocked for any signed-in user. | Needs an entitlement check at lesson entry, plus a "locked" UI state. |
| **AI section per lesson** | Doesn't exist. The 7th phase is "Mission" (a journaling prompt). | New phase + Claude integration + locked overlay. |
| **AI Companion track** | Doesn't exist as a curriculum. The Companion tab is a free-form chat. | New product surface: structured conversational lessons. |

**Tl;dr:** the schema is 6 months ahead of the code. This doc closes the gap.

---

## 2. Two lesson tracks

When the user taps **Learn**, they choose between two structured curricula. Each track is its own product surface with its own pricing.

### 2.1 Language track (existing, but needs generalising)

**Goal:** A2 conversational fluency in the learner's chosen language.

**Method:** The existing 7-phase Rwendo Method, grounded in second-language acquisition (SLA) research:

1. **Hook** — Cultural framing, Rwen sets context.
2. **Chunks** — Max 3 new lexical chunks per lesson. Each is a meaningful unit (not a single word). Backed by Lewis (1993) on the lexical approach.
3. **Pattern** — One grammatical or morphological pattern per lesson. Surfacing the rule explicitly aids retention (Ellis, 2002).
4. **Practice** — 5 exercise types (`match_pairs`, `fill_blank`, `translate`, `build_sentence`, `multiple_choice`). Comprehensible-input-then-output (Krashen / Swain).
5. **Dialogue** — Branching scripted conversation with feedback. Recasts errors gently per Long (1996).
6. **Active recall** — No-look testing, with retrieval-strengthened encoding (Roediger & Karpicke, 2006).
7. **Mission** — A real-world micro-task. Spaced repetition cue for the next session.

**With AI tier — phase 8 (NEW):**
8. **Converse with Rwen** — A 2-3 minute lesson-contextualised conversation. Rwen's prompt is primed with this lesson's chunks, the learner's profile, and a goal ("guide the learner to use Mangwanani naturally in greeting"). Free tier sees a locked teaser; paid tier sees a real conversation. See §6.

**Curriculum scale:** 100 lessons per pack, organised into 10 modules of 10 lessons. First module is greetings (the lowest-stakes way to get a learner to produce real output on day one).

### 2.2 AI Companion track (NEW — proposed)

**Goal:** Build the rapport and conversational habits to make Rwen genuinely useful as an AI friend, language partner, journal, or coach.

**Why a curriculum (vs. a free-form chat):** Without scaffolding, conversations with AI companions decay into either novelty churn (Replika engagement studies) or therapeutic rabbit-holes the AI shouldn't be running. A structured intro curriculum sets expectations, models good prompts, and teaches the user *how to use the companion well*. This is a real edge over Replika/Pi.

**Method:** A 6-phase shape adapted from coaching and CBT structures (without claiming to be therapy):

1. **Welcome / Frame** — Rwen explains what this conversation is about.
2. **Open prompt** — Rwen asks a real question. The user types or speaks.
3. **Reflection** — Rwen reflects what it heard back, in the user's words. Demonstrates active listening.
4. **Deepen** — One follow-up question that goes one level deeper.
5. **Reframe / pattern** — Rwen names the pattern it's noticing (a strength, a value, a recurring frustration).
6. **Tiny commitment** — A single small action the user could take this week, framed as "if you want — no pressure."

**Curriculum scale:** Proposal — 60 lessons across 6 modules:

- M1: **Knowing yourself** (10 lessons) — values, history, who you are when you're at your best
- M2: **Knowing others** (10) — relationships, listening, conflict
- M3: **The day-to-day** (10) — work, focus, energy, habits
- M4: **The hard stuff** (10) — fear, grief, anger (with crisis-resource handoffs baked in)
- M5: **Curiosity & growth** (10) — learning, creativity, hobbies
- M6: **The future** (10) — direction, hope, regret, decisions

**Free tier:** First 4 modules of either track. Second and subsequent packs (whether language or companion) are paid from day one — see §5.

**Critical guardrail:** The AI Companion curriculum **never** claims to be therapy. Every "hard stuff" lesson surfaces a "this is too big for Rwen — call XYZ" affordance. The Privacy Policy and Terms already disclaim this; we honour it here.

---

## 3. The pack architecture (real)

> "I want to do this with packs. So each lesson requires 2 packs — one speaking language and one learning language."

The schema already gets this right. The code needs to catch up.

### 3.1 The two-pack contract

Every learner session at runtime resolves **two pack identifiers**:

- **`spoken_language_id`** — what the user reads/hears the UI in (chrome, instructions, Rwen's narration). Set once at signup.
- **`active_language_pack_id`** — the curriculum being studied. Has its own `learned_language_id`. Defaults to whatever pack the user "starts" with.

The curriculum ID encodes both: `'shona-english'` means "spoken=english, learned=shona". So one pack is one learning direction. To go in the opposite direction (Shona speaker learning English), you load the `'english-shona'` pack.

**Examples:**

| User's spoken | Wants to learn | Active pack | UI is in | Curriculum is in |
|---|---|---|---|---|
| English | Shona | `shona-english` | English | Shona vocab + English explanations |
| Shona | English | `english-shona` | Shona | English vocab + Shona explanations |
| English | French | `french-english` | English | French vocab + English explanations |
| Spanish | Shona | `shona-spanish` | Spanish | Shona vocab + Spanish explanations |

A pack is **always written for a specific (spoken, learned) pair**. Authors writing the english-shona curriculum are translating not only target words but also every cultural note and dialogue prompt into Shona.

### 3.2 Why "two packs" matters technically

Right now, `types/lesson.ts` has:

```ts
export interface Chunk {
  shona: string;     // ← hardcoded
  english: string;   // ← hardcoded
  ...
}
```

This needs to become:

```ts
export interface Chunk {
  target: string;        // the word being learned
  native: string;        // the user's spoken-language translation
  literal?: string;      // morpheme-by-morpheme breakdown, in native
  emoji: string;
  phonetic: string;
  ...
}
```

Same for `DialogueLine`, `PatternExample`, etc. The lesson **author** authors per-pack — i.e. `m01-l01-mangwanani.ts` lives under `data/curriculum/shona-english/` and contains target=Shona, native=English. A future `data/curriculum/shona-french/m01-l01-mangwanani.ts` would have the same Shona target words but French in the `native` field.

### 3.3 From 2 to 100 languages

**Adding a new language to the system requires:**

1. **A language definition** — `data/languages/<id>.ts` (script, flag, name, ISO code). One file, ~20 lines.
2. **A UI translation** — `locales/<id>.json` (every UI string). Crowdin / Lokalise can handle this; it's an ops cost, not a code cost.
3. **One or more pack curricula** — `data/curriculum/<spoken>-<learned>/<lesson>.ts` per direction you want to support.
4. **A row in `available_packs`** — already in DB, just needs the right `id`, `revenuecat_product_id`, and `price_aud`.
5. **Voice configuration** — ElevenLabs voice IDs that can speak that language naturally (already mapped per-voice for English; needs same for Shona, French, etc.).

**No native-app split.** It's one binary. The `i18next` instance switches namespace based on `profile.app_language`. The `LanguagePack` registry resolves `data/languages/<id>.ts` by ID. The lesson loader picks `data/curriculum/<active_pack_id>/...`.

**Pack discovery:** Eventually, packs are not bundled into the app at all — they're downloaded from Supabase Storage on demand. Schema's `available_packs.cover_image_url` already hints at this. Phase 5+ (see roadmap).

### 3.4 What other apps do

For grounding, here's how the major players solve the 1-app-many-languages problem (so we don't reinvent):

- **Duolingo (~40 UI languages, ~100 courses):** UI strings in JSON per language. Course content is an opaque blob loaded on demand from CDN. Course identifier is `<from>-<to>` like ours. You can run UI in language X while studying language Y (e.g., Spanish UI, Japanese course).
- **Babbel (~14 UI languages, ~14 courses):** Identical pattern, smaller scope. Stricter pairing — UI language has to match "from" of course.
- **Memrise:** Crowd-sourced courses with fixed UI (8 UI languages). Doesn't model "from→to" in UI; courses just declare their target language.
- **Rosetta Stone:** Famously **does not** translate the lesson surface — uses immersion / images only. Their UI translates but lessons are picture-based. Rwendo deliberately doesn't go this route — chunks need glosses.

**Conclusion:** Duolingo's "UI language separate from course pair" is the right precedent. We follow it.

---

## 4. i18n implementation strategy

### 4.1 Library choice

Recommendation: **`i18next` + `react-i18next` + `expo-localization`**.

- Mature, well-maintained, battle-tested in RN/Expo apps.
- Namespaced translations (chrome / lessons / errors as separate JSON files).
- Lazy-loadable per locale (don't ship 100 JSON files in the bundle).
- Pluralisation, formatting, fallback chains all built in.
- Compatible with Crowdin/Lokalise for translation management.

### 4.2 Locale file structure

```
locales/
  en/
    common.json       (~50 strings — Profile, Home, nav)
    auth.json         (~30 strings — sign-up, sign-in, onboarding)
    learn.json        (~40 strings — Learn tab, unit screen, lesson chrome)
    rwen.json         (~20 strings — Companion screen UI)
    achievements.json (~15 strings)
  sn/
    (same files, in Shona)
  fr/
    ...
```

**Cultural note keys** in lessons are NOT in `locales/`. They're in the curriculum file itself (`data/curriculum/shona-english/m01-l01-mangwanani.ts`) because they're pack-specific, not UI-chrome.

### 4.3 The hard problem: cultural baking

> "The problem with surface translation is there is cultural elements baked into the learning process."

This is real. A literal translation of "Greetings & Respect" into French loses the *tsika* concept. Two answers:

1. **Lesson chrome is translated** (instructions, button labels, error messages, "Tap to continue"). This goes through `i18next`.
2. **Lesson content is authored fresh per pack.** A French speaker learning Shona gets the same Shona target words but French explanations of *tsika*, French cultural framing, and a French version of the Hook narrative. Same lesson **structure**, different **soul**. This is exactly why each (spoken, learned) pair is a separate authored pack — there is no machine path from English-Shona to French-Shona that does justice to the cultural framing.

**Cost implication:** Adding a new spoken-language to an existing target = a curriculum re-authoring, not a translation. We should not promise users 100 spoken languages × N target languages without an authoring plan. Realistic v1 scope: English-Shona only. v2: add Shona-English (your other direction). v3+: pick the next pair based on user demand.

### 4.4 Onboarding sets `app_language`

Already half-wired:

- The schema has `profiles.app_language text default 'english'`.
- Onboarding asks for it but currently does nothing structural with it (the UI stays in English).
- Fix: on every app boot and on the onboarding save, call `i18next.changeLanguage(profile.app_language)`. Now every key resolves into the correct locale.

---

## 5. Pricing model

Per the conversation, the rules are:

- **Starter pack** (chosen at signup): first **4 modules free**. Modules 5-10 require a subscription.
- **Subsequent packs** (any added after the first): paid from day 1.
- **AI features** (per-lesson Phase 8 conversation, free chat with Rwen, voice, real-time): paid from day 1.
- **AI Companion path at signup**: not free at all — subscription required.
- **Travel section**: TBD; aim is largely free if AI cost can be avoided.
- **Overage**: if a user exceeds usage limits set by their tier, they pay per-unit overage.
- **Margins**: not so close to cost that we can't promote. Promo headroom is mandatory.

### 5.1 Tier structure (CONFIRMED 2026-04-30 — matches schema seed)

| Tier | Monthly | What you get | Notes |
|---|---|---|---|
| **Free** | $0 | First 4 modules of starter language pack. Local progress, streaks, achievements. **No AI of any kind, no Phase 8, locked teaser only.** | Funnel. Most users will not convert; that's expected. |
| **Text AI** | A$10 | All modules of all owned language packs + 500 AI text messages/month + Phase 8 (text mode) + AI Companion track | First paid tier. **Module 5+ gating clears here.** A user who wants modules 5-10 has to take the AI features along with them — accepted tradeoff for a simpler tier matrix. |
| **Voice** | A$15 | Text AI + 200 voiced replies/month (push-to-talk) + 4 voice options | Adds TTS and STT. |
| **Companion** | A$25 | Voice + 60 min/month real-time conversation with Rwen (ElevenLabs Agents) | Hands-free, real-time. |
| **Premium** | A$45 | Companion + 120 min/month + Claude Opus model + lipsync avatar (when ready) | Top tier. The "professional" AI option from the conversation. |

These match the current `available_packs` seed (`ai-companion-text` $10, `ai-companion-voice` $15, `ai-companion-realtime` $25, `ai-premium` $45). No schema changes needed for pricing.

**Pack add-ons (one-off, not subscription):**

| Add-on | Price | What |
|---|---|---|
| Second language pack | A$19.99 one-time, OR A$4/mo | Unlocks a second curriculum. Required even if you have a top-tier subscription if you want a 2nd or 3rd language. |
| Travel: Zimbabwe | A$4.99 one-time | Phrasebook + cultural guide. (Schema seed has this; agree.) |

**Promotional headroom:** All prices end in `.99`, all leave at least 50% gross margin after Anthropic + ElevenLabs + Supabase costs. See §5.2 for the cost math. Quarterly discount = 25% off, annual = 40% off, common in this category.

### 5.2 Cost coverage (rough numbers, A$ at 2026 rates)

Per-month costs to serve one user, assuming they fully use their tier:

| Tier | Variable cost | Price | Gross margin | Notes |
|---|---|---|---|---|
| Free | ~$0.05 (Supabase) | $0 | -$0.05 | Funnel cost. |
| Text AI | $1.50 (Haiku, 500 msgs at ~5K tokens each, mostly input cached) | $10 | $8.50 (85%) | Healthy. |
| Voice | $1.50 + $1.20 (TTS, 200 replies × ~3000 chars at ElevenLabs Pro) | $15 | $12.30 (82%) | Healthy. |
| Companion | $2.70 + $10.80 (60 min ElevenLabs Agents at $0.18/min) | $25 | $11.50 (46%) | Tightest tier — heavy users pull margin to ~38%. Watch this. |
| Premium | $5.50 (Opus) + $21.60 (120 min) | $45 | $17.90 (40%) | Acceptable. The Opus model is the differentiator. |

**Every tier clears 40% gross margin.** Enough room to discount 25-30% in a promo and still profit. **Companion is the danger zone** — if a user pushes 60 min flat every month and is on a heavy quarterly discount, margin collapses. Mitigation: hard cap on real-time minutes (already in schema as `realtime_minutes_limit`); overage starts at minute 61.

### 5.3 Overage policy

When a user hits their cap mid-month, the app:

1. Stops the call / blocks the message.
2. Surfaces an "Add more" sheet with priced overage units:
   - 100 extra text messages: A$2.99
   - 50 extra voice replies: A$3.99
   - 30 extra real-time minutes: A$11.99
3. User chooses to upgrade tier (next sub period) or buy overage now.

Overage prices are 2-2.5× cost, conservatively. Keeps margin intact even if users buy heavy overage.

**Hard cap option:** for users who are nervous about open-ended billing, a per-month spend cap they can set (default infinite). Hits the cap → service stops until next period. Recommended toggle: `subscriptions.spend_cap_aud`.

### 5.4 What this means for the Plans screen we just shipped

The `/profile/plans` screen built today already matches: $0 / $10 / $15 / $25 / $45. **No change needed** to the Plans screen until RevenueCat is wired. At that point the "Upgrade" buttons swap from `Alert` to RevenueCat paywall.

---

## 6. Per-lesson AI element (Phase 8)

> "I want in each and every lesson is an ai section. A section if paid for (unlocked has a conversational bit with rwen."

### 6.1 The flow

**For free / Learner-tier users:**

After completing Phase 7 (Mission), the lesson result screen shows:

```
🎉 Lesson complete! +25 XP

[Continue]

──────── Locked ────────
🦎 Practice with Rwen
Have a 2-minute conversation about
"Mangwanani — Good Morning". Rwen
will use what you just learned.

[Unlock with Text Friend  →]
```

The locked card is a real CTA, not a dummy. Tapping it goes to `/profile/plans` with the Text Friend tier highlighted.

**For Text Friend or higher:**

The locked card is replaced by:

```
🦎 Practice with Rwen — 2 min
Try out Mangwanani in conversation.
Rwen will react like a Shona speaker
at a market stall.

[Start →]
```

Tapping starts a real Claude conversation with a lesson-context prompt:

- **System prompt addition:** "You are Rwen. The learner just completed lesson m01-l01-mangwanani. They have learned: Mangwanani, Mamuka sei?, Ndamuka kana mamukawo. Stay in role as a Shona speaker the learner is meeting at a market in Harare at 7am. Greet them. Wait for their reply. Use only chunks from this lesson and Module 1. If they make a mistake, gently recast (don't lecture). After 4-6 exchanges, end with a celebratory line in Shona and English."
- **Tier difference:** Text mode at $14.99, voice push-to-talk at $19.99, hands-free at $29.99, Opus model at $49.99.

### 6.2 Schema additions

In `LessonData`:

```ts
phase8: {
  scenario: string;          // "Greeting an elder at a Harare market at 7am"
  rwenRole: string;          // "Market stall owner, ~50yo, kind"
  successCriteria: string;   // "Used 'mamuka sei' (respectful), responded warmly"
  estimatedMinutes: 2 | 3 | 4;
}
```

In `lesson_progress`:

```sql
alter table public.lesson_progress
  add column if not exists ai_phase_completed boolean default false,
  add column if not exists ai_phase_score integer;  -- 0-100, scored by Claude
```

### 6.3 Why "lesson-contextualised AI" beats free chat

The current Companion tab is open-ended — the user can talk about anything. That's fine but it doesn't reinforce *what they just learned*. Phase 8 is bounded: same chunks, same module, real-world scenario. This is closer to TalkPal / Lingvist's AI exercises and is the highest-converting feature in those products (per their public marketing).

---

## 7. Best learning practices — sources and rationale

For the Language track:

- **Lewis (1993) — The Lexical Approach.** Why we use 3 chunks/lesson rather than vocabulary lists.
- **Krashen (1982) — Input Hypothesis & Swain (1985) — Output Hypothesis.** Why every lesson moves from input → controlled output → free output.
- **Long (1996) — Interaction Hypothesis.** Why the dialogue phase uses recasts (Rwen rephrases learner errors correctly without explicitly correcting).
- **Roediger & Karpicke (2006) — Test-enhanced learning.** Why active recall (Phase 6) is its own phase, not just exercises.
- **Ebbinghaus / Bahrick — spaced repetition.** Why missions ask for next-day use; why we should ship an SRS review mode in v2.
- **Cohen & Dörnyei (2002) — strategy training.** Why each module ends with a "putting it together" lesson.

For the AI Companion track:

- **Rogers (1957) — therapeutic conditions.** Why reflection (phase 3) is core.
- **Beck (1979) — cognitive therapy structures.** Why we use a "naming the pattern" phase (5) — surfacing implicit beliefs aids change. (We are NOT therapists; we just borrow the conversational structure.)
- **Tiny Habits (Fogg, 2020).** Why phase 6 commitments are deliberately small.
- **Replika engagement studies.** Why structure beats free-form for retention.

These will inform how I write the Companion curriculum. Citations belong in `docs/curriculum/LEARNING_METHODOLOGY.md` (existing) — that file should be expanded; this section is just a pointer.

---

## 8. Implementation roadmap

This is the **minimum** code path to ship the design above. Phases are roughly equal in size (1-3 days each).

### Phase A — Lesson schema generalisation (BLOCKER for everything else)

- Rename `Chunk.shona` → `Chunk.target`, `Chunk.english` → `Chunk.native`. Same for `DialogueLine`, `PatternExample`, `ActiveRecallPrompt`.
- Mechanical migration of all 100 curriculum files.
- Update lesson engine to read the new fields.
- No user-visible change. Just unblocks everything else.

### Phase B — Curriculum directory restructure

- Move `data/curriculum/m01-l01-mangwanani.ts` → `data/curriculum/shona-english/m01-l01-mangwanani.ts`.
- Update `data/lessons.ts` to load curriculum based on active pack ID.
- Add a `getCurriculumLesson(packId, lessonId)` resolver.
- Now the codebase is structurally ready for a second pack (English-Shona, French-English, etc.).

### Phase C — i18next + first locale

- Install `i18next`, `react-i18next`, `expo-localization`.
- Create `locales/en/*.json` with every UI string from the existing screens. ~150-200 strings.
- Refactor every hardcoded English string in `app/`, `components/` to use `t('key')`.
- On boot, set i18next language to `profile.app_language`. (Falls back to device locale, then English.)
- No user-visible change yet — still English.

### Phase D — First non-English UI (Shona)

- Create `locales/sn/*.json` — translate every key.
- Test on device: set `profile.app_language = 'shona'`, the whole app should flip.
- This is the proof-of-concept moment. Once it works for Shona, it works for any language.

### Phase E — Module gating

- Add `entitlement.ts` lib: `canAccessLesson(userId, lessonId, packId)` returns `{ allowed: boolean, reason: 'free' | 'subscription_required' | 'pack_required' }`.
- For modules 1-4 of starter pack: free. For modules 5-10: requires `Learner` tier or above. For any non-starter pack: requires that pack's `user_packs` row.
- Lesson screen shows locked state with CTA to `/profile/plans`.
- Wire `subscriptions.active_tier` into the entitlement check.

### Phase F — Phase 8 (AI conversation in lesson)

- Add `phase8` to `LessonData` schema.
- Backfill `phase8` on the 100 existing lessons. (Mechanical authoring, ~1 day.)
- Lesson result screen shows locked Phase 8 card if user lacks AI tier.
- For paid users: full Claude integration with lesson-context system prompt. Reuses existing `lib/claude.ts`, just with an additional system prompt layer.

### Phase G — Two lesson tracks UI

- Update Learn tab: instead of showing units immediately, show 2 cards (Language / AI Companion).
- Tap Language → existing flow.
- Tap AI Companion → new track with its own modules. Same gating, same Phase 8 (which is the entire lesson here, not a phase).

### Phase H — RevenueCat wiring

- Create RevenueCat account, set up products matching the 6-tier model.
- Update `available_packs.revenuecat_product_id` with real IDs.
- On purchase, write to `user_packs` and update `subscriptions.active_tier`.
- Plans screen "Upgrade" → real RevenueCat paywall.

### Phase I — Onboarding fix-ups

- Make `app_language` selection at onboarding *actually flip* the UI immediately (calls Phase C/D plumbing).
- If user picks "AI Companion" path at onboarding, route them to a Plans screen with Text Friend pre-selected — no free experience for them.

### Phase J — Authoring the AI Companion curriculum (MVP)

- **Pre-launch MVP: 6 lessons of Module 1 ("Knowing yourself").** Probably 2-3 days of structured writing.
- Each lesson follows the 6-phase Companion shape from §2.2 and uses a Phase 8-style Claude integration as the lesson body itself.
- **Post-launch:** Modules 2-6 (54 lessons) author in parallel and ship monthly. Real changelog so users see momentum.

### Total

~10-12 working days for Phases A through I. Phase J runs in parallel as content authoring.

---

## 9. Open questions

These need answers before any of the above is implemented. Marking each with the Phase it blocks.

1. **(blocks A)** When we rename `shona`/`english` → `target`/`native` in lesson types, do we also rename the curriculum files? (e.g. `m01-l01-mangwanani.ts` is fine since it's a Shona word, but file headers / comments reference English explicitly.) — **Recommend: only rename type fields, leave files structurally identical.**

2. **(blocks E)** Is the user's "starter pack" the one chosen at signup, or always `shona-english` for now? If a user picks "Spanish for English speakers" at onboarding 6 months from now, are modules 1-4 of *Spanish* free? **Recommend: yes, "starter pack" = the first pack the user activates, regardless of language.** This is fairer.

3. **(blocks H)** Do we want **annual** plans at launch, or only monthly? Annual at -40% is industry standard but adds RevenueCat complexity. **Recommend: launch with monthly only, add annual after first month of telemetry.**

4. **(blocks F)** Phase 8 conversation length — fixed (3 minutes? 6 exchanges?) or open-ended until user ends? **Recommend: 4-6 exchanges, ended by Rwen with a clear celebratory line. Prevents runaway costs.**

5. **(blocks G)** Does the Learn tab show two cards (Language / AI Companion) immediately at v1, or only after both curricula exist? **DECIDED 2026-04-30: ship both tracks at launch. AI Companion track has a 6-lesson MVP (Module 1 only — "Knowing yourself"); Modules 2-6 ship month-by-month with a real changelog. AI lessons are a hot, marketable feature and should be at launch, not a coming-soon tile.**

6. **(blocks D)** Translation logistics: are you authoring the Shona UI translation yourself, or hiring a Shona speaker? **Strong recommend: hire a native speaker for at minimum a final pass on the full `locales/sn/*.json`.** UI translation is one of the highest-leverage things to get right.

7. **(blocks all)** Does this design feel right? Is there anything in the conversation that I've misunderstood and over-/under-scoped? Read this whole doc and push back on anything that doesn't match what you meant.

---

## 10. What I am not doing right now

To stay honest: this doc is design only. I have **not yet** done any of the following, even though some are tempting:

- Renamed any lesson types or curriculum files.
- Installed `i18next`.
- Touched the Plans screen pricing.
- Wired any pack-entitlement check.
- Authored any AI Companion lesson.
- Modified the lesson engine.

Phase A starts the moment you OK this doc (or push back).
