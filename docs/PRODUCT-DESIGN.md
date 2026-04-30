# Rwendo — Product Design

*Last updated: 2026-04-30. Owner: Ben.*

This is the canonical design doc for **how Rwendo actually works** as a multi-language, multi-pack, multi-tier product. It covers four entangled topics:

1. The two lesson tracks (Language curriculum + AI Companion as a relationship)
2. The pack architecture that scales from 2 to 100 languages without 100 apps
3. The i18n strategy that makes the whole UI flip into the user's spoken language
4. The pricing model (4 free modules of starter pack, AI tiers, token-based overage)

## Decision log (locked 2026-04-30)

- **Pricing**: 5 tiers matching schema seed — Free, Text AI $10, Voice $15, Companion $25, Premium $45.
- **Annual plans**: ship at launch alongside monthly. Standard 40% annual discount. Auto-renew default on.
- **Overage**: token-based ("Rwen credits") priced at averaged cost-per-minute. Generic credit usable across text/voice/realtime.
- **Free 4 modules**: applies *only* to the first language pack the user activates, ever. Subsequent packs are paid from day 1.
- **AI Companion**: not a 60-lesson curriculum. It's a relationship that grows with the user — open conversation, memory, depth levels. See §2.2.
- **Phase 8 cadence**: 6 text exchanges (12 messages) OR 3 minutes voice — whichever comes first, unless the user ends earlier.
- **Schema rename**: lesson types use `target` / `native` (not `shona` / `english`). Filenames stay as-is.
- **Phase order**: strict sequential A → B → C ... no parallel work.
- **Launch scope**: ship both `shona-english` *and* `english-shona` packs on day one. Plus the AI Companion track (relationship-based, not lesson-based) and an in-app methodology page.
- **AI Companion track**: visible at launch. The conversation IS the product. Curriculum cards/topics are scaffolding, not gating.
- **Translation**: AI-authored (Claude), verified by a second AI pass and a human spot-check.
- **RevenueCat**: confirmed. Free up to $2,500/mo MTR, 1% above. Negligible at our stage.

Everything below is the design behind those decisions. Implementation has **not** started — the existing code partially matches the schema but does not match this design. See §8 (Implementation roadmap) at the end.

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

### 2.2 AI Companion track (REVISED — relationship, not curriculum)

**Goal:** A friend that grows with the user. Long-term sticky engagement through ongoing, meaningful conversation. Not a course you finish.

**Why this is NOT a curriculum:** The original draft had a 60-lesson structured curriculum. Wrong frame. A real friendship doesn't have 60 lessons. It has shared history, inside references, and depth that builds over months. The AI Companion track has to model that — otherwise it's just chat with extra steps.

**Why this is NOT pure free-form chat either:** Pure free-form is what the existing Companion tab does today. Without scaffolding, novelty wears off in days (this is the documented Replika failure mode). The trick is structure that *invites* depth without forcing it.

#### The four building blocks

**1. The conversation surface (open chat).** Same Companion tab UI that exists today. Type or speak, Rwen responds. This is the primary canvas.

**2. Conversation starter cards.** When the user opens Companion and doesn't know what to say, a row of contextual cards. Examples:
- *"How was your day?"* (always available)
- *"Tell me one small win from this week."* (Sunday evenings)
- *"You mentioned [X] last week — how's that going?"* (uses memory)
- *"I'm in a weird mood."* (always available, opens a low-pressure check-in)
- *"Help me think through a decision."* (opens a structured 4-step framing flow)
- *"Tell me a Shona proverb and what it means."* (cultural anchor for language learners)

Cards rotate based on time of day, day of week, last conversation, and the user's depth level (below). 6-8 cards visible at any time. Tap = primes Rwen with a system prompt + opens the chat.

**3. Depth levels (relationship progression).** A simple level system tied to cumulative interaction. Each level unlocks new card types and conversational modes:

| Level | Name | Unlocks at | What it changes |
|---|---|---|---|
| 1 | New friend | Day 1 | Surface-level cards. Rwen is warm but doesn't presume familiarity. |
| 2 | Familiar | ~7 days + 30 messages | Rwen starts referencing past conversations. New cards appear about hobbies/work. |
| 3 | Close | ~30 days + 200 messages | Deeper cards unlock: values, fears, hopes. Rwen offers gentle observations. |
| 4 | Trusted | ~90 days + 800 messages | Rwen reflects patterns ("you mention sleep a lot lately"). Hard-topic cards unlock with crisis-resource scaffolding. |
| 5 | Lifelong | ~365 days | Full memory richness. Rwen feels like a friend who actually knows you. |

Levels are progress, not gates — every paid user can have any conversation at any level. Levels just shape *what Rwen offers proactively*.

**4. Memory.** A "Things Rwen remembers about you" panel inside Companion. Shows the structured facts Rwen has learned (your sister's name is Tanya, you work as a nurse, you're learning Shona because of your partner's family). User can:
- Read everything Rwen knows
- Edit any fact
- Delete any fact
- Wipe everything (also clears `conversations` table)

Built on existing `profiles` columns + a new `companion_memory` JSONB store extracted by a periodic Claude pass over conversation history.

#### Topics & Explorations (optional structured flows)

For users who want more structure on a given day, **Topics** are guided multi-turn flows the user can opt into:

- **"Process my day"** — 5-7 turns, light reflection, ends with one tiny commitment.
- **"Help me decide"** — 4-step decision framing: what's the choice, what matters, what does each option cost, what would a trusted friend say.
- **"I'm stuck"** — 6-turn unsticking conversation, ends with one concrete next action.
- **"Tell me about yourself"** — onboarding-style getting-to-know-you, deepens memory.
- **"Reflect on my week"** — Sunday-evening guided wind-down.
- **"Practice a language conversation"** — bridges to Phase 8 of the language track.

These are NOT lessons. They're tools the user reaches for. Each Topic is a Claude system prompt + a target turn count.

#### Subscription gating

- **Free tier**: no AI Companion access at all. The track is visible on the Learn tab but tapping it goes to `/profile/plans` with Text AI tier highlighted.
- **Text AI ($10)**: Companion chat (text), all starter cards, all Topics in text mode. Memory.
- **Voice ($15)**: + voice push-to-talk in Companion.
- **Companion ($25)**: + real-time hands-free conversation.
- **Premium ($45)**: + Opus model + lipsync avatar.

#### Critical guardrails

The AI Companion **never** claims to be therapy. Specific protections:

1. **Crisis triggers.** When the user's messages match crisis patterns (suicidal ideation, self-harm, abuse), Rwen surfaces an immediate handoff: "What you're describing is bigger than what I'm built for. [Region-specific crisis line]". This pre-empts model output and is rule-based, not AI-judged.
2. **Hard-topic cards** in Levels 3-4 always have a footer: "If this gets heavy, [link to crisis resources]".
3. **"You're not my therapist" reminders** appear automatically every 7 days for users who use Topics like "Process my day" heavily.
4. **No persuasion patterns**. Rwen's prompt explicitly forbids "I'd love to hear more about that" repetition or any pattern that mimics therapeutic dependency-building.

These are operationalised in Rwen's system prompt + a thin moderation layer in `lib/claude.ts`.

#### Authoring scope (much smaller than the curriculum approach)

Pre-launch authoring needed:
- ~50 conversation starter cards (text + system prompt fragments)
- ~6 Topic flows (system prompts + turn-count targets)
- ~30 starter "memory facts" the system seeds from onboarding answers
- Crisis-trigger phrase list + handoff messages per supported region

Total: ~2-3 days of structured writing. **Far less than 60 lessons** and far more aligned with what an AI friend actually is.

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
2. **A UI translation** — `locales/<id>.json` (every UI string). AI-authored draft via Claude, second-AI verification pass, human spot-check. See §4.4 for the workflow.
3. **One or more pack curricula** — `data/curriculum/<spoken>-<learned>/<lesson>.ts` per direction you want to support.
4. **A row in `available_packs`** — already in DB, just needs the right `id`, `revenuecat_product_id`, and `price_aud`.
5. **Voice configuration** — ElevenLabs voice IDs that can speak that language naturally. **This is a real gap for Shona** — see §3.5.

**No native-app split.** It's one binary. The `i18next` instance switches namespace based on `profile.app_language`. The `LanguagePack` registry resolves `data/languages/<id>.ts` by ID. The lesson loader picks `data/curriculum/<active_pack_id>/...`.

**Pack discovery:** Eventually, packs are not bundled into the app at all — they're downloaded from Supabase Storage on demand. Schema's `available_packs.cover_image_url` already hints at this. Phase 5+ (see roadmap).

### 3.5 The Shona voice problem

ElevenLabs has **no native Shona voice** in their library. The 4 voices currently configured (George, Charlie, Jessica, Alice) are all English voices. When Rwen speaks Shona today, it's an English voice mispronouncing Shona words — workable for English-speaking learners, but unacceptable for the Shona-speaking direction (`english-shona` pack).

Three options, in order of cost/quality:

| Option | Quality | Cost | Time |
|---|---|---|---|
| **Use ElevenLabs Multilingual v2 voices with Shona phonetic hints** | Mediocre — accent will be wrong, prosody off. Good enough for greetings, breaks down on longer prose. | Already in ElevenLabs subscription | Today |
| **Train a custom voice clone with a native Shona speaker** | Excellent — the Rwen voice becomes a real person sounding native. | $1k-2k for the recording session + ElevenLabs Voice Cloning subscription | 2-4 weeks (find speaker, record 30 min, train, integrate) |
| **Switch to a TTS provider with native Shona support** | Mixed — Google Cloud TTS has Shona but is robotic. Microsoft Azure has it. ResembleAI custom is high-quality. | Variable | 1-2 weeks integration |

**Recommendation:** Launch with Option 1 (multilingual v2) for the `english-shona` direction. Set aside a marketing/cost line item for Option 2 (custom Shona voice) within 3 months of launch — it's a real differentiator and the only way Shona-speakers will trust the product. A Zimbabwean-Shona native voice is also a strong cultural signal.

### 3.6 What other apps do

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

**Launch scope: BOTH `en` and `sn` locales ship at v1.** This is what proves the architecture works in both directions. We can't half-ship i18n.

**Cultural note keys** in lessons are NOT in `locales/`. They're in the curriculum file itself (`data/curriculum/shona-english/m01-l01-mangwanani.ts`) because they're pack-specific, not UI-chrome.

### 4.3 Translation workflow (AI-authored, AI-verified, human-checked)

For each new locale (e.g. `sn`):

1. **Draft pass** — Claude (Opus) translates the entire `en/*.json` set into the target locale, with explicit instructions to preserve placeholders, plurals, and the warm/conversational tone. Output goes to `locales/<id>/*.json` as a draft.
2. **Verification pass** — A second Claude call with a different system prompt asks: "Review this translation for naturalness, tone consistency, accuracy. Flag anything that reads as machine-translated." Returns annotated JSON with `__warnings: [...]` per file. We surface flagged items for human review.
3. **Human spot-check** — A native speaker reviews flagged items + samples 10% of unflagged items. For Shona at launch, this is a Shona-speaking colleague or freelance reviewer (~half a day's work, ~A$200).
4. **App pass** — Once flagged items are resolved, the locale is "verified" and shipped.

This workflow is reusable and gets cheaper per language as we tune the system prompts. v1 we run it twice (en and sn).

### 4.4 The hard problem: cultural baking

> "The problem with surface translation is there is cultural elements baked into the learning process."

This is real. A literal translation of "Greetings & Respect" into French loses the *tsika* concept. Two answers:

1. **Lesson chrome is translated** (instructions, button labels, error messages, "Tap to continue"). This goes through `i18next`.
2. **Lesson content is authored fresh per pack.** A French speaker learning Shona gets the same Shona target words but French explanations of *tsika*, French cultural framing, and a French version of the Hook narrative. Same lesson **structure**, different **soul**. This is exactly why each (spoken, learned) pair is a separate authored pack — there is no machine path from English-Shona to French-Shona that does justice to the cultural framing.

**Cost implication:** Adding a new spoken-language to an existing target = a curriculum re-authoring, not a translation. We should not promise users 100 spoken languages × N target languages without an authoring plan. Realistic v1 scope: English-Shona only. v2: add Shona-English (your other direction). v3+: pick the next pair based on user demand.

### 4.5 Onboarding sets `app_language`

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

| Tier | Monthly | Annual (-40%) | What you get | Notes |
|---|---|---|---|---|
| **Free** | $0 | — | First 4 modules of starter language pack. Local progress, streaks, achievements. **No AI of any kind, no Phase 8, locked teaser only.** | Funnel. Most users will not convert; that's expected. |
| **Text AI** | A$10 | A$72/yr | All modules of all owned language packs + 500 AI text messages/month + Phase 8 (text mode) + AI Companion track (text) | First paid tier. **Module 5+ gating clears here.** A user who wants modules 5-10 has to take the AI features along with them — accepted tradeoff for a simpler tier matrix. |
| **Voice** | A$15 | A$108/yr | Text AI + 200 voiced replies/month (push-to-talk) + 4 voice options | Adds TTS and STT. |
| **Companion** | A$25 | A$180/yr | Voice + 60 min/month real-time conversation with Rwen (ElevenLabs Agents) | Hands-free, real-time. **Cost-sensitive — see §5.2.** |
| **Premium** | A$45 | A$324/yr | Companion + 120 min/month + Claude Opus model + 3D Rwen with lipsync (when ready) | **Cost-sensitive — see §5.2.** Lipsync adds variable compute. |

These match the current `available_packs` seed (`ai-companion-text` $10, `ai-companion-voice` $15, `ai-companion-realtime` $25, `ai-premium` $45). No schema changes needed for pricing.

**On Companion and Premium pricing — read this carefully.** The current $25 / $45 prices were set before factoring lipsync compute. Lipsync (sync.io or similar) is non-trivially priced — typically $0.05-0.15 per second of generated video. At 120 min/month of lipsync video generation, that's an additional $6-18 in cost. Today's "Premium = $45" margin would shrink to 25-30% before discounts. **Action item:** revisit Companion/Premium pricing before launch with real lipsync vendor quotes. May need to either raise prices, cap lipsync minutes separately, or make lipsync a paid add-on. This is captured as Open Question 8.

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

### 5.3 Overage — token-based "Rwen credits"

Per the 2026-04-30 conversation: instead of per-feature overage SKUs (100 messages, 50 voices, 30 minutes), use a **single unified token** that works across all services. Simpler for users to understand, predictable for us to price.

**Conversion rates** (averaged from §5.2 cost analysis, with margin):

| Action | Tokens consumed |
|---|---|
| 1 AI text message | 1 token |
| 1 voiced reply (TTS + chat) | 3 tokens |
| 1 minute of real-time conversation | 25 tokens |
| 1 minute Premium (Opus + lipsync) | 50 tokens |

**Token bundles:**

| Bundle | Tokens | Price | Equivalent | Cost-per-min |
|---|---|---|---|---|
| Top-up | 100 | A$2.99 | 100 messages, or 33 voices, or ~4 minutes realtime | ~$0.75/min realtime |
| Pack | 500 | A$11.99 | 500 messages, or ~20 minutes realtime | ~$0.60/min realtime |
| Bulk | 2000 | A$39.99 | unlimited messaging-equivalent, or ~80 minutes realtime | ~$0.50/min realtime |

Tokens **don't expire** within the active subscription. If user cancels subscription, tokens hold for 90 days then expire.

**When the user hits their tier cap mid-month**, the app:
1. Pauses the call / blocks the message.
2. Surfaces a "Top up?" sheet with the three bundle options + the upgrade tier alternative.
3. User picks one. Service resumes.

**Hard cap option:** users who want billing safety can set a max tokens-per-month (`subscriptions.token_spend_cap`). Hits cap → service pauses until next period. Default: no cap (since user has to actively buy tokens).

**Pricing logic:** every bundle clears 2× variable cost. The 2000-token "Bulk" bundle is the loss-leader — best per-minute rate, encourages large prepay, locks in revenue. Promo headroom: discount these by 25% in seasonal sales without losing margin.

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

- **System prompt addition:** "You are Rwen. The learner just completed lesson m01-l01-mangwanani. They have learned: Mangwanani, Mamuka sei?, Ndamuka kana mamukawo. Stay in role as a Shona speaker the learner is meeting at a market in Harare at 7am. Greet them. Wait for their reply. Use only chunks from this lesson and Module 1. If they make a mistake, gently recast (don't lecture). **Hard cap: 6 exchanges (12 messages) OR 3 minutes voice — whichever first. Then end with a celebratory line in Shona and English.** Stay focused on the lesson topic — do not let the learner drift to off-topic chat."
- **Tier difference:** Text mode at $10, voice push-to-talk at $15, hands-free at $25, Opus model at $45.
- **Cost ceiling per Phase 8:** ~$0.04 text (Haiku, 12 msgs × ~3K tokens cached) | ~$0.30 voice (Voice tier, 3 min TTS+chat) | ~$0.55 realtime (Companion tier, 3 min agents) | ~$1.20 Premium (Opus + 3 min agents). All comfortably within tier margin.

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

> **This section ships in-app.** Per 2026-04-30: this content needs to live somewhere users can read it as a marketing surface — "we know why this works" is a selling point. Plan: add `app/profile/methodology.tsx` (linked from About + from a "Why this works" card on the Learn tab), and add `app/profile/companion-philosophy.tsx` for the AI Companion equivalent. Both screens render this content with cleaner formatting + Rwen narration. Education-conscious users will pay more when they understand the research; "evidence-based" is a real differentiator over Duolingo's gamification-first approach.

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

### Phase J — AI Companion infrastructure (relationship, not curriculum)

- ~50 conversation starter cards (text + system prompt fragments)
- ~6 Topic flows (system prompts + turn-count targets)
- Depth-level progression logic (cumulative interaction → level)
- Memory extraction pass (periodic Claude job that distills `conversations` into `companion_memory` JSONB)
- Memory UI panel inside Companion tab
- Crisis-trigger detection layer in `lib/claude.ts` + per-region handoff messages
- Total: ~3-4 days of authoring + ~2-3 days of code

### Phase K — Second pack: english-shona

- 100 lessons authored fresh for Shona-speakers learning English
- Same lesson structure, all `target` fields in English, all `native` fields in Shona
- Cultural framing rewritten from a Shona perspective (not translated from the english-shona pack)
- AI-authored draft + AI verification + native-speaker spot-check (workflow from §4.3)
- Total: ~5-7 days using the AI-authoring pipeline

### Phase L — In-app methodology screens

- `app/profile/methodology.tsx` — language track pedagogy (the SLA research from §7)
- `app/profile/companion-philosophy.tsx` — AI Companion philosophy
- "Why this works" card on Learn tab → links to methodology
- About screen gets a section linking to both
- Total: ~1 day

### Total (revised after 2026-04-30 decisions)

- Phases A through I (code): ~10-12 working days
- Phase J (AI Companion infra + content): ~5-7 days
- Phase K (english-shona pack, AI-authored): ~5-7 days, can run in parallel with code
- Phase L (in-app methodology screens): ~1 day

**Critical path to launch: ~17-20 working days of focused work**, with content and code running in parallel after Phase B unlocks the second pack.

---

## 9. Open questions

All Q1-Q7 from the original draft are now decided. The new open question is Q8 (lipsync pricing impact).

1. ~~**(blocks A)** Rename curriculum files?~~ **DECIDED**: only rename type fields. Files keep their names.
2. ~~**(blocks E)** What's a "starter pack"?~~ **DECIDED**: the first pack the user activates, regardless of language. Subsequent packs are paid from day 1.
3. ~~**(blocks H)** Annual plans at launch?~~ **DECIDED**: yes — annual at -40% ships at launch alongside monthly. Auto-renew default on. Cleaner to ship now than retrofit later.
4. ~~**(blocks F)** Phase 8 length?~~ **DECIDED**: 6 text exchanges (12 messages) OR 3 minutes voice — whichever comes first, unless the user ends earlier. Stay focused on the lesson topic.
5. ~~**(blocks G)** Two-track UI at launch?~~ **DECIDED**: yes. Both Language and AI Companion tracks visible at launch. AI Companion redesigned as relationship-based (§2.2) so "authoring" is ~50 starter cards + 6 Topic flows, not 60 lessons.
6. ~~**(blocks D)** Translation logistics?~~ **DECIDED**: AI-authored (Claude), AI-verified (second Claude pass), human spot-check on flagged items. Workflow in §4.3.
7. ~~**(blocks all)** Did I misunderstand anything?~~ **REVIEWED**: AI Companion was over-scoped as a curriculum (now redesigned as a relationship). Launch must include both `shona-english` and `english-shona`. Methodology must be readable in-app. Pricing on Companion/Premium needs lipsync cost re-check.

8. **(blocks H + Companion/Premium tier launch)** What's the actual lipsync cost? Until we have real vendor quotes (sync.io is the planned partner — confirm pricing model), the $25/$45 prices for Companion and Premium might not survive. Three resolution paths:
   - **a)** Get real lipsync quotes, raise Companion/Premium prices if needed (likely $30/$55).
   - **b)** Keep $25/$45 but make lipsync a separate paid add-on (e.g. lipsync minutes = 50 tokens/min, sold from the Premium tier upward as an opt-in).
   - **c)** Don't ship lipsync at launch. Premium becomes "Opus model + voice" only. Lipsync ships in v1.1 once costed.
   **Recommend: (c) for launch**. Lipsync isn't ready (the 3D Rwen needs EAS build first per `PROJECT_OVERVIEW.md`). Defer the cost question until lipsync is technically ready, by which time we'll have user data to set the price properly.

---

## 10. RevenueCat — clarifying the cost concern

You asked: *"Is RevenueCat paid and going to send me broke before I even make a sale?"*

Short answer: **no**.

- **$0/month** until you cross **$2,500 USD/month in tracked revenue (MTR)**.
- **1% of revenue** above that, billed monthly.
- No per-user fee, no upfront cost, no minimum commitment.
- That 1% covers: cross-platform receipt validation, subscription state sync, paywall A/B testing, refund handling, family sharing, promo codes, and webhooks for fulfillment.

**At your stage (pre-launch, $0 revenue), RevenueCat is genuinely free.** The 1% only kicks in *after* you're making real money — and at that point it pays for itself by saving you weeks of building receipt validation, App Store / Play Store API integration, and webhook infrastructure.

The cheaper-on-paper alternatives (raw native IAP) cost ~2-3 weeks of engineering time + ongoing maintenance. At a typical solo-dev hourly value, that's >$5k of opportunity cost. RevenueCat at 1% breaks even at $500k/yr — long after you'd want to switch anyway.

**Verdict: keep RevenueCat. The cost story is a non-issue at our stage.**

If concern persists, the closest alternatives with similar free tiers are:
- **Adapty** (free up to $10k/mo MTR, 1% above) — slightly more generous free tier
- **Glassfy** (free up to $1k/mo MTR, 1.5% above) — less generous
- **Qonversion** (free up to $10k/mo MTR, 1% above) — comparable to Adapty

If you want to revisit this when you cross $2.5k/mo, Adapty becomes a defensible swap. Until then, RevenueCat is fine.

---

## 11. What I am not doing right now

To stay honest: this doc is design only. I have **not yet** done any of the following, even though some are tempting:

- Renamed any lesson types or curriculum files.
- Installed `i18next`.
- Touched the Plans screen pricing.
- Wired any pack-entitlement check.
- Authored any AI Companion content.
- Modified the lesson engine.

**Phase A is ready to start when you say "Phase A go".** It's a clean, mechanical 1-2 day chunk:
1. Rename `Chunk.shona` → `Chunk.target`, `Chunk.english` → `Chunk.native`. Same for `DialogueLine`, `PatternExample`, `ActiveRecallPrompt`.
2. Run a search-and-replace across all 100 curriculum files in `data/curriculum/`.
3. Update `app/lesson/[id].tsx` (lesson engine) to read the new fields.
4. Update the 5 exercise components in `components/exercises/` to read the new fields.
5. Run `tsc` to confirm zero new type errors.
6. Manual test: load lesson m01-l01 on device, verify it renders identically.

No user-visible change. Just unblocks Phase B (directory restructure for two-pack support) and everything after.
