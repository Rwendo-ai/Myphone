# Rwendo — Product Design

*Last updated: 2026-05-04. Owner: Ben.*

> Status snapshots for what's shipped vs in-flight live in `docs/STATUS-YYYY-MM-DD.md`. The most current is [STATUS-2026-05-04.md](STATUS-2026-05-04.md). This doc is the canonical product design and architecture; status docs are the rolling progress log.

This is the canonical design doc for **how Rwendo actually works** as a multi-language, multi-course, multi-jurisdiction, multi-tier product. It covers five entangled topics:

1. **The pack model** — three orthogonal pack types (speaker × course × jurisdiction) compose into one user experience. This is the load-bearing architecture; everything else is built on it.
2. The two lesson tracks (Language curriculum + AI Companion as a relationship)
3. The pricing model (4 free modules of starter pack, AI tiers, token-based overage)
4. The static-content principle (only Claude's live replies are dynamic; every other byte the user reads is authored content sitting in a pack)
5. Distribution & jurisdiction handling (per-region legal, currency, age thresholds)

## Decision log

### Locked 2026-04-30 (architecture)

- **Pack model**: Rwendo runs on three orthogonal pack types that compose at runtime into a single user experience:
  - **Speaker pack** — locale (UI strings), AI system prompt template, greetings, voice options, tips, narration, social conventions. Drives ALL readable text in the app. One active per user, set at signup.
  - **Course pack** — curriculum (language courses) / starter cards + Topics (AI Companion) / phrasebook + cultural guide (Travel). Authored fresh per speaker because cultural framing differs from each starting point. One or more active per user, gated by entitlements.
  - **Jurisdiction pack** — privacy-policy text, terms-of-service text, age threshold, currency, refund rights, crisis resources. One active per user, set by declared country at signup.
- **Identifier convention**: composed IDs at runtime, not pair-strings. A user's runtime context is `speaker:english + course:[language-shona, ai-companion] + jurisdiction:AU`. Legacy `shona-english` etc. survive in `available_packs.id` as derived aliases for backward compatibility but new code keys on the three-part composition.
- **Static vs dynamic**: every speaker / course / jurisdiction pack is STATIC content. The ONLY dynamic surface in the entire app is Claude's live replies inside an open conversation. Everything else — every label, prompt, greeting, ToS clause, currency symbol, voice clip — is authored content sitting in the right slot of the right pack.
- **AI prompts are speaker-driven**: Claude is instructed in the speaker's language. A French speaker's Rwen has been told (in French) "you are a French-speaking companion called Rwen". A Shona speaker's Rwen is instructed in Shona. The persona shape is shared; the language of instruction flips.
- **Bundle everything in v1**: every authored speaker pack, course pack, and jurisdiction pack ships in the binary. Lazy-loading from Supabase Storage is Phase 5+ work, when there are 10+ speaker packs to motivate it.
- **Speakers at v1**: `english` and `shona` both populated. Adding any future speaker = drop in a single `data/speakers/<id>/` directory.
- **Jurisdictions at v1**: ship `AU` populated (lawyer-reviewed pre-launch). Others (`GB`, `US`, `EU`, `ZW`) ship as `{ extends: 'AU' }` stubs that the lawyer fills in pre-launch per region.
- **Currency**: per-jurisdiction. Forex alignment with live FX rates is a v1.x concern — initial pricing is locked per jurisdiction.

### Locked 2026-05-05 (streaming architecture)
- Lesson bodies stream from Supabase Storage (`course-content` bucket), NOT bundled in JS binary. See §3.11.
- Cache-first read, explicit uninstall only (no auto-eviction).
- Each course bundles a small `manifest.ts` for unit-list rendering; lesson IDs source-of-truth.
- 576 authored lessons across 13 courses uploaded to Storage; binary trimmed of `data/courses/<id>/*/curriculum/` directories.
- Lesson screen reads `courseId` from route param (passed by unit screen), falls back to `activeCourseId`.
- Next phase: Claude lazy translation Edge Function for non-English speakers.

### Locked 2026-05-04 (auth + voice + monetisation direction)

- **Auth methods (priority order)**: email + password (primary), Google (secondary), Apple (secondary, iOS only — gated on Apple Developer account), crypto wallet via WalletConnect → XRPL (tertiary, tucked at bottom). Apple/Crypto stay hidden behind `OAUTH_READY` flags until their providers are configured. Facebook explicitly out — privacy concerns + redundancy with Google.
- **Signup consents**: 3 checkboxes, not 4. (1) Combined legal — Terms + Privacy + 13+ + AI disclosure (required). (2) Privacy promise — data not sold/shared (required). (3) Marketing — opt-in for promo emails (optional, GDPR/CASL/PECR-compliant). The previous 4-box flow is consolidated; Spotify/Discord/Netflix all do this.
- **Email verification**: 6-digit OTP, not magic link. Custom-branded HTML email (Rwen waving + 6-digit code in big monospace) replaces Supabase default. Code expires 60 min, resend supported.
- **Two-email strategy**: auth email is transactional and clean (just the code). A separate "welcome email" sent ~5 min later (gated by marketing consent) carries the web-pricing pitch — keeps Apple anti-steering clean by separating auth from marketing.
- **Voice mode**: hand-rolled WebSocket client to ElevenAgents replaces the broken `@elevenlabs/react-native` + LiveKit SDK. Uses `@speechmatics/expo-two-way-audio` for PCM I/O. Per-session overrides (system prompt, first message, language, voice_id) drive the agent's behaviour from the client at session start. Single-source-of-truth for voice transcripts: same `conversations` table as text chat.
- **Companion age gating**: feature-level, not app-level. Under-18s use the app, just don't see Aria. Three layers: Companions tab filter, client guard in `handleActivate`, Postgres trigger as defence-in-depth. Adding new gated presets is a one-line change.
- **KYC philosophy**: tier KYC by feature, not at signup. Free signup = email + DOB. Subscription buy = Stripe-handled card fingerprint. Token cash-out to wallet (when XPRL ships) = full KYC required by AUSTRAC. Romantic content = stronger DOB verification when scope demands.
- **Monetisation surfaces (planned)**: iOS = RevenueCat + Apple IAP (mandatory for in-app digital goods). Android = RevenueCat + Google Play Billing primary, plus optional "buy on web" link (Google rules permit). Web = Stripe direct (no platform tax). Email-driven web purchase pitch lives in welcome email, NOT in-app (Apple anti-steering). Inflated iOS prices vs cheaper web prices is the standard pattern.
- **App Store risk mitigation**: web pricing only mentioned in marketing email + on web; never inside the iOS app. XP-rewards landing page (rwendo.app/xp) genuinely hosts XP balance/dashboard with token purchase as one section among others — defensible as commerce, not steering.

### Locked 2026-04-30 (product)

- **Pricing**: 5 tiers matching schema seed — Free, Text AI $10, Voice $15, Companion $25, Premium $45.
- **Annual plans**: ship at launch alongside monthly. Standard 40% annual discount. Auto-renew default on.
- **Overage**: token-based ("Rwen credits") priced at averaged cost-per-minute. Generic credit usable across text/voice/realtime.
- **Free 4 modules**: applies *only* to the first language course the user activates, ever. Subsequent course packs are paid from day 1.
- **AI Companion**: not a 60-lesson curriculum. It's a relationship that grows with the user — open conversation, memory, depth levels. See §2.2.
- **Phase 8 cadence**: 6 text exchanges (12 messages) OR 3 minutes voice — whichever comes first, unless the user ends earlier.
- **Schema rename**: lesson types use `target` / `native` (not `shona` / `english`). Filenames stay as-is. — DONE
- **Phase order**: strict sequential A → B → C ... no parallel work for the code phases.
- **Launch scope**: ship both `language-shona` and `language-english` course packs on day one (with English and Shona speaker variants of each), the AI Companion course pack (English + Shona speaker variants), AU jurisdiction populated, and an in-app methodology page.
- **AI Companion course**: visible at launch. The conversation IS the product. Curriculum cards/topics are scaffolding, not gating.
- **Translation workflow**: AI-authored (Claude), verified by a second AI pass and a human spot-check. Per-speaker authoring (not per-pair) — content for "Learn Shona authored for an English speaker" is a different artifact from "Learn Shona authored for a French speaker".
- **RevenueCat**: confirmed. Free up to $2,500/mo MTR, 1% above. Negligible at our stage.

Everything below is the design behind those decisions. **§3 is the load-bearing one** — read that first if you're new to the doc.

---

## 1. The reality check (current state)

Before designing forward, here's what's actually in the codebase vs what the docs and schema imply.

### What's working / done

| Layer | Status | Notes |
|---|---|---|
| **Lesson schema rename** | ✅ Done in commit `bdf4dd7`. `Chunk`, `PatternExample`, `DialogueLine`, `userChoices` use `target` / `native` keys. 1994 keys renamed across 100 curriculum files. |
| **Pack-aware curriculum loading** | ✅ Done in `afa9f66`. `data/curriculum/<pack-id>/` directory + `getCurriculumLesson(packId, lessonId)` resolver. Lesson screen reads `activePack.id` from `useSettings()`. |
| **i18n infrastructure** | ✅ Done in `093b98b`. `i18next` + `react-i18next` + `expo-localization` wired. `lib/i18n.ts` synchronous init. `setAppLanguage()` flips at runtime. |
| **English locale (en) full extraction** | ✅ Done in `2a160b6` / `66ca95c` / `9d208e3`. Every hardcoded UI string in `app/` and `components/` extracted to `locales/en/{common,auth,learn,rwen,achievements}.json`. |
| **Shona locale (sn) draft** | ✅ Drafted in `8904538` with per-file `__warnings` for native-speaker review. Awaiting native pass. Tip mirror-not-translate fix in `74ab471`. |
| **In-app language switcher** | ✅ Done in `42e5ccc`. Profile → "App Language" flips locale instantly + persists to Supabase. |
| **`available_packs` table** | ✅ Well-designed. `pack_type` column distinguishes `'language'` from `'feature'`/`'content'`/`'cultural'`. 8 packs seeded. The schema is **already three-pack-ready** — `pack_type` is the discriminator. |
| **`user_packs`, `subscriptions`, `user_has_pack()` RPC** | ✅ Schema exists. | Code never inserts/reads. Module gating not yet wired. |

### Gaps the new pack model exposes

| Layer | Gap |
|---|---|
| **No "speaker pack" entity in code** | A speaker pack should bundle UI locale + AI system prompt + greetings + voice options + tips + onboarding script. Today these are scattered: `locales/<id>/` (locale only), `lib/SettingsContext.tsx` (voice IDs hardcoded), `lib/claude.ts` + edge function (prompts hardcoded English), home tab (`getShonaGreeting` hardcoded Shona), tips array embedded in JSON. Need to consolidate into `data/speakers/<id>/`. |
| **Course packs are implicit** | The schema's `pack_type='feature'` is unused; AI Companion has no content surface; Travel is hardcoded English. Need `data/courses/{language-shona,language-english,ai-companion,travel-zimbabwe}/<speaker-id>/` directory. |
| **Per-pair curriculum is the wrong granularity** | Today curriculum is keyed by `<spoken>-<learned>` pair. Should be `data/courses/<course-id>/<speaker-id>/` — the course is the entity, the speaker is a variant of its content. Adding French = drop `english/`, `shona/`, `french/` sub-packs into each course; you don't author a separate `french-shona` AND `french-english` course in parallel namespaces. |
| **No jurisdiction concept anywhere** | ToS/Privacy in `app/(legal)/` are single English files. Age check hardcoded 18. No currency model. EU/UK 14-day cooling-off lives in `subscriptions.cooling_off_ends_at` but all the surrounding text is one-language-only. Crisis resources for the AI Companion (per design §2.2) have no per-region storage. |
| **AI prompts hardcoded English** | `lib/claude.ts` and `supabase/functions/rwen-conversation/index.ts` build prompts with English-language instructions. A Shona-speaking user gets an AI that's been told (in English) about them — works, but inconsistent with "everything readable is in the speaker's language". The system prompt template should live in `data/speakers/<id>/ai-system-prompt.ts`. |
| **Onboarding hardcodes "Shona"** | `step_learn_ability.title` ("How much Shona do you know?"), `step_learn_reasons.title`, `step_learn_connection.{title,sub}`, the connection placeholder examples — all hardcode the en-speaker-learning-Shona direction. Should pull `learnedLanguage.name` from the active course. |
| **Home greeting hero hardcodes Shona** | `getShonaGreeting()` always returns `Mangwanani`/`Masikati`/`Manheru`. The "big" hero word should be the active course's target language. |
| **Module gating** | Doesn't exist. Every lesson is unlocked for any signed-in user. Phase E ships gating. |
| **AI section per lesson (Phase 8)** | Doesn't exist. The 7th phase is "Mission" (a journaling prompt). Phase F ships per-lesson AI. |
| **AI Companion course pack content** | Doesn't exist. The Companion tab is a free-form chat. Phase J ships starter cards + Topics + memory + depth levels per the §2.2 design. |

**Tl;dr:** the schema is 6 months ahead of the code AND the data folder layout. This doc (specifically §3) defines the structure that closes the gap. Phase E.0 in §8 is the refactor that makes it real.

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

## 3. The pack architecture (load-bearing)

> "Every pack and prompt really is just static and needs to be put in the right space. The only non-static element is when the AI talks with the person."

This is the central concept of the app. Every other section assumes this model. **Read this section before doing any architectural work.**

### 3.1 The three pack types

Rwendo runs on three orthogonal pack types. A user's runtime experience is the **composition** of one piece from each.

| Pack | What it contains | Active count per user | Set by |
|---|---|---|---|
| **Speaker pack** | UI locale, AI system prompt template, greetings, voice options, tips, narration, social/formality conventions, fonts/scripts. | 1 | "What language do you speak?" at signup |
| **Course pack** | Curriculum (language courses), starter cards + Topics + memory schema (AI Companion), phrasebook + cultural guide (Travel). Authored fresh per speaker. | 1 or more (entitlement-gated) | Path choice + purchases |
| **Jurisdiction pack** | Privacy-policy text, terms-of-service text, age threshold, currency, refund rights, crisis resources, data residency disclosures. | 1 | Declared country at signup |

A user is the join: `speaker × course[] × jurisdiction`. The runtime composes the experience from those three pieces.

### 3.2 Why this model

The previous version of this doc described a `(spoken, learned)` pair (`shona-english`, `english-shona`) and treated UI locale as a separate i18n concern. That model breaks the moment you ship the third language: tip content, AI prompts, onboarding question wording, terms-of-service text all start drifting because each lives in its own scattered place. The single pair-string also collapses two genuinely independent dimensions (what I read in vs what I'm learning), and ignores a third that the design needs from launch (where I live → what laws apply, what currency, what crisis resources).

The three-pack model fixes all three:

- **Speaker pack** centralises everything readable. Add a Tagalog speaker pack = drop in one directory and the whole app reads in Tagalog from sign-up forward.
- **Course pack** is the entity that gets purchased. Variants per speaker live inside it as content artifacts, not separate products. "Learn Shona" is the SKU; the English-speaker variant and the French-speaker variant of that course are sub-folders of the same course.
- **Jurisdiction pack** makes legal/regional concerns first-class instead of scattered if-statements. AU is populated v1; GB/US/EU/ZW ship as `{ extends: 'AU' }` stubs that the lawyer fills in pre-launch.

### 3.3 The static-content principle

Every byte in every speaker / course / jurisdiction pack is **static authored content**. The ONLY dynamic surfaces in the entire app are Claude's live replies inside an open conversation **and** Claude's lazy translation of source-English lesson JSON for non-English speakers (cached per-lesson, see §3.11). Voice clips, transcripts, tips, prompts, ToS clauses, currency strings, age thresholds, lesson chunks, crisis line numbers — every one of these is a string sitting in a JSON or TS file in the right pack slot.

This principle drives implementation:

- No free-form AI generation at runtime — only Claude conversations (Companion + Phase 8) and lazy translation (deterministic transform of authored source).
- No region-detection magic at runtime. The user's `jurisdiction_id` is a column on `profiles`; everything keys on it.
- **Speaker packs, jurisdiction packs, and course manifests are bundled at build time.** Lesson *content* is NOT — it streams from Supabase Storage on first open and caches locally per device (§3.11). This keeps the binary small (~30–50 MB lighter than the bundled-curriculum approach) and lets us ship new lessons without an EAS rebuild.

### 3.4 Identifier convention

IDs are flat strings, composed at runtime, not joined into pair-strings.

| Pack type | ID format | Examples |
|---|---|---|
| Speaker | language ISO code (or close) | `english`, `shona`, `french`, `tagalog`, `japanese` |
| Course | `<course-type>-<target>` for language courses; `<course-type>` for non-language | `language-shona`, `language-english`, `ai-companion`, `travel-zimbabwe` |
| Jurisdiction | ISO 3166-1 alpha-2 country code | `AU`, `GB`, `US`, `EU` (the bloc), `ZW` |

A user record carries three fields:

```
profiles.speaker_pack_id       text  e.g. 'english'
profiles.active_course_ids     text[] e.g. ['language-shona', 'ai-companion']
profiles.jurisdiction_id       text  e.g. 'AU'
```

(Migration path from existing schema: §3.8 below.)

The legacy `available_packs.id` values (`shona-english`, `english-shona`) survive as backward-compatibility aliases that decompose to `(speaker:english, course:language-shona)` and `(speaker:shona, course:language-english)` respectively. New code keys on the three-part composition; only the migration script touches the old IDs.

### 3.5 File layout

Each pack is a directory under `data/`. Adding a new pack = drop in a directory; nothing else in the codebase needs to know about it.

```
data/speakers/{english,shona,french,...}/
  index.ts              ISO code, flag emoji, native name, voice IDs
  locale/               every UI string in this language
    common.json         (was locales/<id>/common.json)
    auth.json           (was locales/<id>/auth.json)
    learn.json          ...
    rwen.json           ...
    achievements.json   ...
  ai-system-prompt.ts   Claude system prompt template, written in this language
  greetings.ts          { morning, afternoon, evening } — used by home hero
  tips.ts               home tab "Rwen's tip today" array, authored from this speaker's POV
  narration.ts          Travel/cultural-guide narration in this language
  conventions.ts        formality patterns, name conventions, fonts, anything else

data/courses/
  language-shona/
    index.ts            metadata, pricing keys, course type='language', target='shona'
    manifest.ts         auto-generated lesson list { id, module, lesson, title, xpReward }
                        — bundled (light, ~7 KB/course); used by Learn tab to render units
                        without needing the lesson bodies. Source-of-truth for lesson IDs.
                        Regenerate: `npx tsx scripts/generate-course-manifests.ts`.
  language-english/
    index.ts
    manifest.ts
  ai-companion/
    index.ts            course type='ai-companion', no target language
    {english,shona,french}/
      starter-cards.ts  conversation starter cards in this speaker's language
      topics/{process-day,decide,stuck,...}.ts
      depth-levels.ts   level progression copy
      memory-schema.ts  shape of "things Rwen remembers"
      crisis-triggers.ts  speaker-language phrase list (works WITH jurisdiction.crisisResources)
  travel-zimbabwe/
    index.ts
    {english,shona,french}/
      phrasebook.ts cultural-guide.ts ...

# Lesson bodies (the 7-phase JSON) live in Supabase Storage, NOT in the repo:
#   <course-content bucket>/lessons/<courseId>/<speakerId>/<lessonId>.json
# Authoring source (TS files) is kept under scripts/ for re-uploading; see §3.11.

data/jurisdictions/
  AU/
    index.ts            age threshold (16 in AU per Privacy Act 1988 amend), currency='AUD',
                        cooling_off_days=0 (no statutory right outside EU/UK; we honour
                        Apple/Google store policies), crisis_lines=[Lifeline, Beyond Blue]
    privacy-policy.md   AU-specific Privacy Policy
    terms-of-service.md AU-specific ToS
    crisis-resources.ts numbers + URLs
  GB/  index.ts: { extends: 'AU' } until lawyer authors UK-specific text
  US/  index.ts: { extends: 'AU' } — placeholder
  EU/  index.ts: { extends: 'AU' } — placeholder
  ZW/  index.ts: { extends: 'AU' } — placeholder
```

The legacy locations migrate as follows:

- `locales/<id>/*.json` → `data/speakers/<id>/locale/*.json` (mechanical move)
- `data/languages/<id>.ts` → `data/speakers/<id>/index.ts` (renamed, expanded)
- `data/curriculum/<pair>/*.ts` → `data/courses/language-<target>/<speaker>/curriculum/*.ts` (e.g. `data/curriculum/shona-english/` becomes `data/courses/language-shona/english/curriculum/`)
- `data/packs.ts` becomes a thin re-export from the new structure for backward compat, then deleted in a follow-up.

### 3.6 Runtime composition

`useSettings()` exposes:

```ts
{
  speaker: SpeakerPack,             // resolved from profiles.speaker_pack_id
  courses: CoursePack[],            // resolved from profiles.active_course_ids
  jurisdiction: JurisdictionPack,   // resolved from profiles.jurisdiction_id
  activeCourseId: string | null,    // which course is foregrounded right now
}
```

Every render path keys on these:

| Surface | Comes from |
|---|---|
| All UI strings via `t(...)` | `speaker.locale.<namespace>` |
| Home hero "big" greeting | active course's target language → if course is `language-shona`, big greeting is the Shona word; if course is `ai-companion`, big greeting is the speaker's word (greeting with yourself) |
| Home hero subtitle | `speaker.locale.home.greetings.<timeOfDay>` |
| Home tips array | `speaker.tips` (authored from this speaker's POV — different idioms for different speakers) |
| Lesson chunks `target` field | active language-course's curriculum (in target language) |
| Lesson chunks `native` field | active language-course's curriculum's speaker variant (in speaker's language) |
| AI Claude system prompt | `speaker.aiSystemPromptTemplate` + course-specific addon (e.g. Phase 8 lesson context, Companion persona) |
| Voice options in Profile | `speaker.voiceIds` — speaker-pack curates which voices work for that language |
| Privacy Policy / Terms screens | `jurisdiction.privacyPolicy` / `jurisdiction.termsOfService` |
| Currency display in Plans screen | `jurisdiction.currency` (and price lookup per region) |
| Age check in onboarding | `jurisdiction.minAge` |
| Crisis trigger handoff message in Companion | `jurisdiction.crisisResources` + `course.crisisTriggers` (speaker-language phrase list) |

If any of these read from anywhere else (a hardcoded `'Mangwanani'`, a hardcoded `18`, a hardcoded English Claude prompt), it's a leak — file an issue and route it through the right pack.

### 3.7 Composition examples

**English speaker, learning Shona, lives in Australia:**
- `speaker:english + courses:[language-shona] + jurisdiction:AU`
- UI in English. Big home greeting in Shona ("Mangwanani"). Tips introduce Shona idioms. AI prompt instructs Claude in English. Privacy Policy is AU-specific. AUD prices. Lifeline crisis number.

**Shona speaker, learning English AND has AI Companion, lives in UK:**
- `speaker:shona + courses:[language-english, ai-companion] + jurisdiction:GB`
- UI in Shona. Big home greeting in English ("Hello"). Tips introduce English idioms (mirror of en tips). AI prompt instructs Claude in Shona. Privacy Policy is UK-specific (14-day cooling-off). GBP prices. UK Samaritans crisis number.

**French speaker, AI Companion only, lives in France:**
- `speaker:french + courses:[ai-companion] + jurisdiction:EU`
- UI in French. No big language-learning home hero (the AI Companion course doesn't have a target language to highlight). Tips/cards in French. AI prompt instructs Claude in French. EU Privacy Policy with 14-day cooling-off. EUR prices. France crisis numbers via `EU.crisisResources` (or a future `FR` jurisdiction if we author one).

**Down-the-track scenario (Phase 6+):** Shona speaker on their phone has a video conversation with a French speaker on theirs. Each phone reads its own speaker pack — the same shared experience renders in both languages on opposite ends. The architecture has to support this from the start; the alternative is two apps.

### 3.8 DB migration path

Existing schema (see DATABASE-DESIGN.md §1 profiles, §2 available_packs):

```
profiles.app_language               → profiles.speaker_pack_id   (rename, value space same)
profiles.active_language_pack_id    → profiles.active_course_ids[0] (single → array; legacy
                                       'shona-english' decomposes to ['language-shona']
                                       on read for users whose speaker_pack_id='english')
profiles.country_code               → profiles.jurisdiction_id   (mapped, e.g. ZA→ZW only if
                                       Zimbabwean-Shona context, else ISO-direct)
profiles.is_eu_customer / .is_uk_customer  → derived view, kept for legacy compat
```

`available_packs` gains a `pack_kind` column distinguishing `speaker` / `course` / `jurisdiction` (subset of existing `pack_type` taxonomy). Existing rows like `shona-english` get a derived view that exposes them as a course pack with `target_language='shona'`. Real schema changes:

- Add `available_packs.pack_kind` enum
- Add `jurisdictions` table (id, name, currency, min_age, refund_rights jsonb, is_eu, is_uk)
- Add `profiles.speaker_pack_id`, `profiles.active_course_ids text[]`, `profiles.jurisdiction_id` (FK to jurisdictions)
- View / function that decomposes legacy `app_language` + `active_language_pack_id` into the new three fields for unmigrated rows

See DATABASE-DESIGN.md §10 for the migration SQL plan.

### 3.9 The Shona voice problem

ElevenLabs has **no native Shona voice** in their library. The 4 voices currently configured (George, Charlie, Jessica, Alice) are all English voices. When Rwen speaks Shona today, it's an English voice mispronouncing Shona words — workable for English-speaking learners, but unacceptable for a Shona speaker pack.

Voice options live in `data/speakers/<id>/index.ts`. Each speaker pack curates which voice IDs work for that language. The `english` speaker pack lists the 4 ElevenLabs voices. The `shona` speaker pack v1 lists Multilingual v2 voices with phonetic hints (mediocre but workable); v1.x adds a custom Shona clone (~$1-2k recording session per design doc §3.5 history). Adding French = the `french` speaker pack picks French-native ElevenLabs voices.

This puts voice choice where it belongs: with the speaker pack, not as global app config.

### 3.10 What other apps do

For grounding, here's how the major players solve the 1-app-many-languages problem:

- **Duolingo (~40 UI languages, ~100 courses):** UI strings in JSON per language (= speaker pack locale). Courses are blobs loaded from CDN keyed by `<from>-<to>` pair. They fold UI-language and course-from-language together by convention; we don't, because we have non-language courses (AI Companion, Travel) where there's no "from→to" semantics.
- **Babbel (~14 UI languages, ~14 courses):** Identical pattern, smaller scope. Stricter pairing — UI language has to match "from" of course. Limiting.
- **Memrise:** Crowd-sourced courses with fixed UI (8 UI languages). Doesn't model "from→to" in UI; courses just declare their target language. Closer to our course-pack idea but no jurisdiction concept.
- **Rosetta Stone:** Famously **does not** translate the lesson surface — uses immersion / images only. Their UI translates but lessons are picture-based. Rwendo deliberately doesn't go this route — chunks need glosses, and glosses are speaker-language-specific.

**Conclusion:** No major player has the three-pack model. Duolingo gets two of three (locale + course). The jurisdiction layer is original to this design and is the load-bearing piece for shipping a single binary that's legally compliant globally.

### 3.11 Lesson streaming architecture (locked 2026-05-05)

**Decision:** Lesson bodies are not bundled in the JS binary. Each `.json` file streams from Supabase Storage on first open, caches locally, and stays cached until the user explicitly uninstalls the pack.

**Why:** With 13 courses × ~50 lessons average × multiple speaker variants, bundling everything would push the APK well past 100 MB. Most users only ever open one or two courses. Streaming keeps the binary lean and lets us ship/edit lessons without an EAS rebuild.

**Storage layout** (Supabase bucket `course-content`):
```
lessons/<courseId>/<speakerId>/<lessonId>.json
```
Authoring is English-source. Non-English speaker variants are populated lazily by the translation Edge Function (next phase) and end up at the same path scheme.

**Device cache** (per `expo-file-system/legacy`):
```
${documentDirectory}lessons/<courseId>/<speakerId>/<lessonId>.json
```

**Loader contract** (`lib/lesson-loader.ts`):
- `loadLessonAsync(courseId, speakerId, lessonId)` — cache-first read; on miss, downloads from Storage, writes to cache, returns parsed JSON. Tries the user's speaker variant first, falls back to the english variant. Throws if neither exists.
- `installCourse(courseId, speakerId, lessonIds, onProgress?)` — pre-fetches every lesson in a course (~500 KB for 100 lessons). Used by the Learn-tab "install" button so users aren't blindsided on a flight.
- `uninstallCourse(courseId, speakerId)` — wipes cached files; the user's `user_packs` ownership row stays so re-install requires no re-purchase.
- `courseDiskBytes` / `totalCachedBytes` / `isCourseInstalled` — reporting helpers for the storage UI.

**Eviction:** explicit only. No LRU, no cache-pressure eviction. A user who downloads the Sleep Repaired course onto a phone before a long flight should not have it silently disappear because they opened a different course. Trade-off accepted for the surprise-avoidance.

**Fallback chain in the loader:**
1. `${user_speaker}/${lessonId}.json` in cache
2. `english/${lessonId}.json` in cache (source-of-truth)
3. `${user_speaker}/${lessonId}.json` in Storage
4. `english/${lessonId}.json` in Storage
5. Throw "lesson not found" — UI shows error screen with Back button

**Lazy translation (next phase, todo #10):** when an authenticated non-English speaker opens an english-only lesson, an Edge Function calls Claude to translate the JSON to their speaker language, uploads the result to Storage, and the loader caches it. Every subsequent user in that language gets a cache hit. Cost: ~$0.12/lesson amortised across all that-language users.

**Manifest indirection:** the Learn tab needs to know what lessons exist to render unit lists, *without* downloading lesson bodies. Each course bundles a tiny `manifest.ts` (~7 KB) listing `{id, module, lesson, title, xpReward}` per lesson. Generated by `scripts/generate-course-manifests.ts` after authoring; bundled at build time.

**Routing contract:** the unit screen passes `courseId` to the lesson screen via route param so the loader hits the correct Storage path even when `activeCourseId` is stale (cross-category navigation). The lesson screen prefers the route param, falls back to `activeCourseId` for direct deep-links.

---

## 4. i18n is the locale slot of the speaker pack

i18next is still the runtime tool, but conceptually the locale JSON files are no longer a top-level concern — they're one slot inside each speaker pack. This section covers the i18n machinery; §3 covers where it sits.

### 4.1 Library choice

`i18next` + `react-i18next` + `expo-localization`. Already installed (commit `093b98b`).

- Mature, well-maintained, battle-tested in RN/Expo apps.
- Namespaced translations (5 namespaces: common / auth / learn / rwen / achievements).
- Pluralisation, formatting, fallback chains built in.
- Compatible with Crowdin/Lokalise for future translation management.

### 4.2 Where the locale files live

After the §3 refactor:

```
data/speakers/<id>/locale/
  common.json       Profile, Home, nav, actions, App Language switcher
  auth.json         sign-up, sign-in, onboarding, consents
  learn.json        Learn tab, unit screen, lesson chrome, exercises
  rwen.json         Companion screen UI, Rwen status labels
  achievements.json achievement names + descriptions
```

`lib/i18n.ts` registers resources by walking the speakers registry: for each speaker, mount its `locale/*` files under that speaker's ID. Adding a new speaker = drop in a directory, the registry picks it up.

### 4.3 Launch scope

Both `english` and `shona` speaker packs ship at v1 with full locale JSON. **This is non-negotiable** — the architecture isn't proven until it works in both directions, and the first commercial offering is bilingual.

Curriculum content (chunks, dialogue, mission text, hook narrative) is NOT in `locale/*.json`. It lives in `data/courses/<course-id>/<speaker-id>/curriculum/*.ts` because it's course content, not UI chrome (per §3.5 file layout).

### 4.4 Translation workflow (AI-authored, AI-verified, human-checked)

Per speaker pack:

1. **Draft pass** — Claude (Opus) translates `data/speakers/english/locale/*.json` into the target speaker's locale. Explicit instructions: preserve placeholders, plurals, tone. Crucially, the prompt warns the translator to **mirror, not translate** when the source has embedded foreign-language anchors (e.g. an English `tips.json` that introduces Shona idioms — the Shona speaker pack version should introduce English idioms, not echo the same Shona phrases). Output includes a top-level `__warnings: [{key, note}]` array of items the drafter flagged. (See `8904538` for the sn worked example.)
2. **Verification pass** — A second Claude call reviews for naturalness, tone, accuracy. Adds to `__warnings`.
3. **Human spot-check** — Native speaker reviews flagged items + samples 10% of unflagged. ~half a day's work per language, ~A$200.
4. **Apply review** — Notes integrated, `__warnings` cleared, locale ships.

The `__warnings` array is inert at runtime (i18next never resolves it; nothing keys on `__warnings.*`), so it can stay in the JSON through the review cycle and be removed when verified.

### 4.5 The hard problem: cultural baking

> "There are cultural elements baked into the learning process."

A literal translation of "Greetings & Respect" into French loses the *tsika* concept. Two answers:

1. **UI chrome is translated** (instructions, button labels, "Tap to continue"). This goes through `i18next`. It's the locale slot of each speaker pack.
2. **Course content is authored fresh per (course, speaker) pair.** A French speaker learning Shona gets the same Shona target words but French explanations of *tsika*, French cultural framing, French Hook narrative. Same lesson **structure**, different **soul**. This is why courses have per-speaker sub-packs (`data/courses/language-shona/{english,french}/...`) — there is no machine path from one to the other that does justice to the framing.

**Cost implication:** adding a new speaker pack to an existing course is curriculum re-authoring, not translation. Realistic v1 scope: `language-shona` and `language-english` and `ai-companion` courses each with `english` and `shona` speaker variants. v2+: pick the next speaker based on user demand and add variants to whichever courses we want them in.

### 4.6 Mirror-not-translate strings

Strings that embed cross-language anchors (the home tips array, parts of the AI Companion welcome, parts of the cultural notes) need to be **mirrored** in each speaker pack, not translated. The mirror swaps which language is the "anchor" content and which is the "explanation".

Example (home tips):

```
en speaker tips: "In Shona, 'Ukama igasva hunozadziswa nekudya' — relationships are
                 completed by sharing food. Share what you learn today."
                 (English chrome, Shona anchor — pedagogical for an EN speaker)

sn speaker tips: "MuChiNgezi: 'It takes a village to raise a child' — zvinoreva mwana
                 anokurirwa nemhuri yose. Govera zvaunodzidza nhasi."
                 (Shona chrome, English anchor — pedagogical for an SN speaker)
```

These get a special note in the translator's prompt during the draft pass: "this string must mirror the language pattern; do not echo the source language's anchor". Worked example committed in `74ab471`.

### 4.7 Onboarding sets the speaker pack at the very first step

The first onboarding question is "what language do you speak?" which writes `profiles.speaker_pack_id` AND immediately calls `setAppLanguage()`. From that question forward, every subsequent screen of onboarding is rendered in the chosen speaker's language.

Phase E.0 (§8) wires this. Currently the language selection at onboarding writes to Supabase but doesn't flip the running session — the workaround was the in-app App Language switcher in Profile (commit `42e5ccc`).

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

## 6.5 Voice mode architecture (current)

After multiple sessions fighting `@elevenlabs/react-native` (the official SDK is broken on RN per GitHub issues #515, #605, #641, #676 — confirmed by ElevenLabs support), Rwendo runs full-duplex Conv AI through a hand-rolled WebSocket client.

### Why hand-rolled

- The official `@elevenlabs/react-native` SDK transitively depends on browser-only DOM APIs (`document.createElement`, `AudioContext`) inside `@elevenlabs/client`. The polyfill cascade approach produced unstable behaviour and the SDK's LiveKit version was incompatible with the current ElevenAgents server.
- ElevenLabs support told us directly that the WebSocket protocol is the supported path until their Q1-2026 RN re-architecture lands.
- The WebSocket protocol itself is simple: one init message (`conversation_initiation_client_data`) with overrides + dynamic_variables, then alternating `user_audio_chunk` (base64 PCM) → `audio` (base64 PCM) frames with text events interleaved.

### Layers

1. **PCM I/O** — `@speechmatics/expo-two-way-audio`. Fixed 16 kHz / 16-bit / mono, hardware AEC, noise suppression. Matches ElevenLabs's wire format byte-for-byte. New native module → triggers EAS rebuild when the version bumps.
2. **WebSocket client** — `lib/conv-ai-ws.ts`. Pure-JS, no Buffer dep, stack-safe base64 codec for the 20 ms frames the audio module emits at ~50 Hz.
3. **Headless hook** — `hooks/useConvAISession.ts`. Loads memory + companion preset + speaker pack, mints session ID, owns the session lifecycle, fires consumer-supplied transcript callbacks, persists every turn through `appendConversationTurn`.
4. **Two consumers** — inline orb in `app/(tabs)/companion.tsx` (default), full-screen orb at `app/companion/voice-conv.tsx` (legacy/fallback). Both hooks the same hook.
5. **Engine fallback** — `voiceEngine` setting in SettingsContext switches between `'conv_ai'` and `'turn_based'` (the existing record → STT → Claude → TTS loop). Lets a user with a flaky native audio module recover without us shipping a build.

### Override flow at session start

- `system_prompt` ← full Rwendo identity built from MISSION_PILLARS + active companion preset's template + user profile + speaker pack guardrails + recent conversation recap + companion_facts
- `first_message` ← localised greeting from `buildCompanionGreeting` (uses speaker pack's time-of-day greeting + companion's tagline)
- `language` ← `speaker.isoCode` (en/sn/fr/zh/tl)
- `voice_id` ← user's profile `rwenVoice` selection if any, else active companion's `defaultVoiceId`, else `RWEN_VOICES.male_warm`

The agent in the dashboard is a SHELL — empty system prompt, default Eric voice, Gemini 2.5 LLM. All Rwendo identity flows from the override at session start. Security → Overrides → all four toggles must be ON in the agent dashboard for this to work.

### Single save path

Both text and voice persist via `appendConversationTurn` in `lib/conversation-memory.ts`. Rows land in `public.conversations` keyed by `user_id` + `session_id`. Future modes (avatar/lipsync, lesson Phase 8) just call the same writer.

---

## 6.6 Auth flow + signup consents (current)

### Sign-up screen

- OAuth bar at top (Google active, Apple/Crypto gated by `OAUTH_READY` flags)
- Email + password + username form
- 3 consent checkboxes:
  1. Combined legal — Terms + Privacy + 13+ + AI disclosure (required, with inline links to the per-jurisdiction legal screens)
  2. Privacy promise — "Rwendo will not sell or share my personal information" (required)
  3. Marketing — opt-in for promotional emails (optional, unchecked default — required by GDPR/CASL/PECR/AU Spam Act)

### 6-digit OTP verification

- Supabase emails a custom-branded HTML email (Rwen waving on blue gradient + 6-digit code in big monospace)
- `app/(auth)/verify-code.tsx` accepts the code: auto-focus, paste/autofill (iOS one-time-code hint), auto-submit on 6 digits, resend button
- AuthContext exposes `verifySignupOtp(email, token)` and `resendSignupOtp(email)`

### Onboarding (after first sign-in)

Unchanged from earlier design — language → gender → age → path → path-specific questions → voice → home.

### Two-email strategy

- **Auth email**: transactional, just the code. Subject line carries the code: `Your Rwendo code: {{ .Token }}`
- **Welcome email** (planned): sent ~5 min later via Supabase Edge Function + Resend/SendGrid. Includes web-pricing pitch and the rwendo.app/xp link. Marketing-consent gated. Apple anti-steering clean because (a) it's outside the app, (b) the auth email is purely transactional, (c) the link goes to a real product surface (XP dashboard) not just a payment funnel.

### Companion age gating in detail

- `CompanionPreset.ageGate?: number` field on the preset
- Aria has `ageGate: 18`; all others are open
- Three layers of enforcement:
  1. Companions tab filters via `ageGateMet(preset, userDob)` before rendering the cards. Under-18 user simply doesn't see Aria.
  2. `handleActivate` checks again before writing — handles edge cases like deep-link tampering.
  3. Postgres trigger `enforce_companion_age_gate` rejects any INSERT or UPDATE setting `companions.preset_id = 'aria'` when the user's DOB shows them under 18. Defends against tampered clients and stolen JWTs.

Adding a new age-gated preset later is a 2-line change (`ageGate: <num>` in `presets.ts`, and a new `WHEN` branch in the trigger CASE).

### KYC philosophy

Tier KYC by what the user is doing, not at signup. Three escalation levels:

| Stage | Verification |
|---|---|
| Free signup | Email + age affirmation (DOB at onboarding) |
| Buy subscription | Card fingerprint via Stripe / RevenueCat (handles light KYC + fraud) |
| Cash out XPRL tokens to a wallet | Full KYC (ID + selfie + address) — required by AUSTRAC for digital currency exchange operators |
| Romantic / Aria-tier content for borderline-age users | Enhanced DOB verification (Persona/Sumsub) — only if the legal risk demands it |

KYC at signup kills 20-30% of conversions. KYC at the right moment (e.g., right before a withdrawal) is friction users accept.

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

This is the **minimum** code path to ship the design above. Phases are roughly equal in size (1-3 days each). Strict sequential order — no parallel work for code phases.

### Phase A — Lesson schema generalisation ✅ DONE (`bdf4dd7`)

- Renamed `Chunk.shona` → `Chunk.target`, `Chunk.english` → `Chunk.native`. Same for `DialogueLine`, `PatternExample`, `ActiveRecallPrompt`.
- Mechanical migration of all 100 curriculum files (1994 keys renamed).
- Updated lesson engine to read the new fields.
- No user-visible change.

### Phase B — Curriculum directory restructure ✅ DONE (`afa9f66`)

- Moved `data/curriculum/m01-l01-mangwanani.ts` → `data/curriculum/shona-english/m01-l01-mangwanani.ts`.
- Added `data/curriculum/index.ts` with `getCurriculumLesson(packId, lessonId)` resolver.
- Lesson screen reads `activePack.id` from `useSettings()`.
- Phase E.0 supersedes the directory naming (moves it under `data/courses/language-shona/english/curriculum/`) but the resolver pattern carries forward.

### Phase C — i18next + en locale ✅ DONE (`093b98b`, `2a160b6`, `66ca95c`, `9d208e3`)

- Installed `i18next`, `react-i18next`, `expo-localization`.
- `lib/i18n.ts` wired with synchronous init + `setAppLanguage()` runtime flip.
- Every hardcoded English string in `app/`/`components/` extracted to `locales/en/{common,auth,learn,rwen,achievements}.json` (~250 strings).
- ProfileLoader fetches `profile.app_language` and calls `setAppLanguage()`.

### Phase D — Shona locale (sn) draft ✅ DONE (`8904538`, `74ab471`, `42e5ccc`)

- All 5 namespaces drafted in Shona with per-file `__warnings` for native-speaker review (~250 strings).
- Mirror-not-translate fix to home tips committed in `74ab471`.
- In-app App Language switcher in Profile (`42e5ccc`) — instant flip + persists.
- AWAITING native-speaker review pass; integrate notes in a follow-up commit.

### Phase E.0 — Three-pack architecture refactor (NEW, current priority)

The big restructure §3 calls for. Must come before Phase E (gating) because gating keys on the new pack model.

- Create `data/speakers/{english,shona}/` directories. Each contains:
  - `index.ts` (metadata moved from `data/languages/<id>.ts`, expanded with voice IDs, currency hints, ISO code)
  - `locale/` (the existing `locales/<id>/*.json` files, moved)
  - `ai-system-prompt.ts` (move hardcoded English prompt out of `lib/claude.ts` + edge function; author Shona equivalent)
  - `greetings.ts` (`{ morning, afternoon, evening }` per speaker)
  - `tips.ts` (move home tips array out of `locale/common.json` into a typed export)
- Create `data/courses/{language-shona,language-english,ai-companion}/` directories. Each contains:
  - `index.ts` (course metadata, `revenuecat_product_id`, target language for language courses)
  - `<speaker-id>/curriculum/` for language courses (move existing `data/curriculum/shona-english/*.ts` → `data/courses/language-shona/english/curriculum/`)
  - `<speaker-id>/{starter-cards,topics,depth-levels,memory-schema,crisis-triggers}.ts` for AI Companion (stub files for now; populate in Phase J)
- Create `data/jurisdictions/{AU,GB,US,EU,ZW}/` directories. AU populated; others `{ extends: 'AU' }` stubs.
- New types in `types/packs.ts`: `SpeakerPack`, `CoursePack`, `JurisdictionPack`, `RuntimePackContext`.
- `lib/i18n.ts` resource registration walks `data/speakers/*/locale/*` instead of `locales/<id>/*`.
- `useSettings()` exposes `{ speaker, courses[], jurisdiction, activeCourseId }` resolved from profile fields.
- Update onboarding to write the new profile fields (`speaker_pack_id`, `active_course_ids`, `jurisdiction_id`) AND the legacy ones for migration safety.
- Fix the leaks identified in §1 reality check:
  - Onboarding `step_learn_*` strings: parameterise with `{{lang}}` from active course's target.
  - Home greeting hero: pull `getShonaGreeting()`-equivalent from active course's target speaker pack.
  - Tips array: pull from `speaker.tips` (already authored differently per speaker post-Phase D).
  - AI prompt: pull from `speaker.aiSystemPromptTemplate`.
- Migration: legacy `data/curriculum/`, `data/languages/`, `locales/` paths get thin re-exports from the new layout for one release, then deleted.
- Total: ~2 working days. UNBLOCKS everything downstream.

### Phase E — Module gating (after E.0)

- Add `lib/entitlements.ts`: `canAccessLesson(userId, lessonId, courseId)` returns `{ allowed: boolean, reason: 'free' | 'subscription_required' | 'course_required' }`.
- For modules 1-4 of *starter* course (the first language course the user ever activates): free. For modules 5-10: requires Text AI tier or above. For any non-starter course: requires that course's `user_packs` row.
- Lesson screen shows locked state with CTA to `/profile/plans`.
- Wire `subscriptions.active_tier` into the entitlement check.
- **Dev bypass**: `constants/dev.ts` exports `DEV_UNLOCK_ALL = process.env.EXPO_PUBLIC_DEV_UNLOCK_ALL === '1'`. Every gate short-circuits to `{ allowed: true }` when set. Stripped from production EAS builds.
- **Demo-account script**: `scripts/create-demo-account.ts` creates a synthetic user with `active_tier='premium'` and `user_packs` rows for every course. Tests real gating without bypasses.

### Phase F — Phase 8 (AI conversation in lesson)

- Add `phase8` to `LessonData` schema.
- Backfill `phase8` on the 100 existing lessons (mechanical authoring, ~1 day).
- Lesson result screen shows locked Phase 8 card if user lacks AI tier.
- For paid users: Claude integration with lesson-context system prompt composed from `speaker.aiSystemPromptTemplate` + lesson-specific addon. Reuses `lib/claude.ts` (which becomes a thin wrapper around the rwen-chat edge function after Phase M).

### Phase G — Two-track Learn tab

- Update Learn tab: instead of showing units immediately, show cards for each active course.
- Tap a language course → existing curriculum flow.
- Tap AI Companion → new conversation surface (Phase J content).

### Phase H — RevenueCat wiring

- Create RevenueCat account, set up products matching the 5-tier model.
- Update `available_packs.revenuecat_product_id` with real IDs.
- On purchase, write to `user_packs` and update `subscriptions.active_tier`.
- Plans screen "Upgrade" → real RevenueCat paywall.
- Currency display reads from `jurisdiction.currency`.

### Phase I — Onboarding refinements (largely subsumed by E.0)

- Make speaker-language selection at onboarding flip the UI immediately (E.0 wires this).
- Add jurisdiction declaration step (new — pick country at signup, writes `profiles.jurisdiction_id`).
- If user picks "AI Companion" path at onboarding, route to Plans screen with Text AI pre-selected (no free experience for that course).

### Phase J — AI Companion course content (relationship, not curriculum)

- Author content into `data/courses/ai-companion/{english,shona}/`:
  - ~50 conversation starter cards per speaker (text + system prompt fragments)
  - ~6 Topic flows per speaker (system prompts + turn-count targets)
  - Depth-level progression logic (cumulative interaction → level)
  - Memory extraction pass (periodic Claude job distilling `conversations` into `companion_memory` JSONB)
  - Memory UI panel inside Companion tab
  - Crisis-trigger detection layer composes `course.crisisTriggers` (speaker-language phrases) with `jurisdiction.crisisResources` (region phone numbers)
- Total: ~3-4 days of authoring + ~2-3 days of code

### Phase K — Second speaker × course variant: language-english/shona/ + ai-companion/shona/

- The "shona speaker, learning english" experience: 100 lessons authored fresh for Shona-speakers learning English.
- Lives at `data/courses/language-english/shona/curriculum/`.
- Same lesson structure as language-shona/english/, all `target` fields in English, all `native` fields in Shona.
- Cultural framing rewritten from a Shona perspective (not translated from the english variant).
- AI-authored draft + AI verification + native-speaker spot-check (workflow §4.4).
- Same workflow for `data/courses/ai-companion/shona/` — Shona starter cards + Topics.
- Total: ~5-7 days using the AI-authoring pipeline.

### Phase L — In-app methodology screens

- `app/profile/methodology.tsx` — language track pedagogy (the SLA research from §7).
- `app/profile/companion-philosophy.tsx` — AI Companion philosophy.
- "Why this works" card on Learn tab → links to methodology.
- About screen gets a section linking to both.
- Each lives in `speaker.locale.methodology.*` so it flips with the speaker.
- Total: ~1 day.

### Phase M — Move API keys server-side (BLOCKER for any external testing)

(Unchanged in scope from previous version of this doc — see lines that follow.)

### Phase N — Jurisdiction packs populated (lawyer-fillable)

- Currently AU is populated; GB/US/EU/ZW are `{ extends: 'AU' }` stubs.
- Lawyer fills in per-region Privacy Policy + Terms of Service per `data/jurisdictions/<id>/`.
- Wire age threshold to read from `jurisdiction.minAge` (drops the hardcoded 18).
- Wire currency display to `jurisdiction.currency` (drops AUD assumption).
- Wire crisis resources display to `jurisdiction.crisisResources` (per AI Companion design §2.2).
- Forex alignment of pricing across jurisdictions is v1.x — initial prices are locked per region.
- Total: ~1-2 days of code + lawyer time for content.

### Phase L — In-app methodology screens

- `app/profile/methodology.tsx` — language track pedagogy (the SLA research from §7)
- `app/profile/companion-philosophy.tsx` — AI Companion philosophy
- "Why this works" card on Learn tab → links to methodology
- About screen gets a section linking to both
- Total: ~1 day

### Phase M — Move API keys server-side (BLOCKER for any external testing)

**This is non-negotiable before giving the app to anyone, even one trusted tester.** Right now `lib/claude.ts` and `lib/voice.ts` call Anthropic and ElevenLabs APIs directly from the client with the keys baked into the bundle via `.env`. The first technically curious person who unzips the APK can extract those keys and run up bills on your accounts. RN bundles are inherently extractable; assume any client-side key is already public.

The Supabase Edge Function pattern already exists for one path (`rwen-conversation` proxies Claude). Extend it:

- **`rwen-tts` Edge Function**: accepts text + voice_id, calls ElevenLabs TTS server-side, returns audio.
- **`rwen-stt` Edge Function**: accepts audio blob, calls ElevenLabs STT server-side, returns transcript.
- **`rwen-chat` Edge Function**: accepts user message + conversation history, calls Claude server-side, returns reply. Replaces the direct Anthropic call in `lib/claude.ts`.
- All three enforce auth (require valid Supabase JWT), apply rate limiting, and check `subscriptions` for quota before forwarding the call.
- `lib/claude.ts` and `lib/voice.ts` become thin wrappers that hit Supabase instead of provider APIs.
- Remove `EXPO_PUBLIC_ANTHROPIC_KEY` and `EXPO_PUBLIC_ELEVENLABS_KEY` from `.env` entirely. Only `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` remain (the anon key is safe in the client because RLS protects data).
- Total: ~2 days.

**Phase M ordering**: must be done before Phase H (RevenueCat) and before any TestFlight / Play Internal Testing distribution. Recommend slotting it immediately after Phase F (Phase 8 / AI conversation per lesson), so the AI plumbing is solid in one place before paywalls are wired around it.

### Total (revised after the three-pack lock)

Phases A–D **DONE**. Remaining:

- Phase E.0 (three-pack architecture refactor): ~2 days. **Current priority — unblocks everything.**
- Phases E–I (code): ~8–10 days post-E.0
- Phase J (AI Companion course content + memory infra): ~5–7 days
- Phase K (second speaker × course variants): ~5–7 days, can run in parallel with code post-E.0
- Phase L (in-app methodology screens): ~1 day
- Phase M (API keys server-side): ~2 days
- Phase N (jurisdiction packs populated): ~1–2 days code + lawyer time

**Critical path to launch: ~22–28 working days of focused work** including the architecture refactor. Content (Phase K) runs in parallel with code (E–I) after E.0 lands.

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

## 11. Distribution & beta testing

Three concentric rings of distribution, in order of formality.

### Ring 1 — Solo developer testing (today)

Run on your Samsung S23 Ultra via Expo Go (`expo start`) on the local network. No formal distribution. **API keys exposed locally** — fine while only you have access.

### Ring 2 — Trusted internal testers (5-10 people)

Use **EAS Build with internal distribution**:

```
eas build --profile internal --platform android
eas build --profile internal --platform ios   # requires Apple Developer ($149)
```

Generates an APK + a shareable install link. Friend/family testers click the link, install on their device. Less formal than store distribution; the file *can* be reshared, but for a small trusted circle this is fine.

**Mandatory before this ring:**
- ✅ Phase M (API keys server-side) — otherwise testers can extract keys
- ✅ Crash logging (Sentry) — you'll want to see what breaks on their devices
- ✅ A simple beta NDA in writing — legal recourse if anyone leaks

### Ring 3 — Open beta (50-1000 people)

Use **TestFlight (iOS)** + **Google Play Internal Testing track**:
- Apple Developer Account ($149/yr) → TestFlight: invite by email/Apple ID, max 10,000 testers, builds expire 90 days, no IPA leaks (delivered through TestFlight app).
- Google Play Console ($30 one-off) → Internal Testing track: invite by email, max 100 testers, no expiry, delivered through Play Store so testers can't redistribute.
- Both platforms enforce non-redistribution at the OS level. This is the strongest distribution control you'll get short of full launch.

**Mandatory before this ring:**
- ✅ Everything from Ring 2
- ✅ Privacy Policy + Terms hosted at public URLs (rwendo.app/privacy etc.) — required by both stores
- ✅ App icon in all sizes, screenshots, store listing copy
- ✅ Production EAS build profile separate from internal/dev (no `EXPO_PUBLIC_DEV_UNLOCK_ALL`)
- ✅ Crash + analytics live (Sentry + PostHog)

### What about IP/curriculum theft?

The 100 lesson curriculum is the most copy-able asset (and someone determined enough could decompile any RN app and extract the lesson JSON). Realistic risk assessment:

- **Low**: someone steals the lesson list and ships a competing app. The chunks ("Mangwanani") aren't copyrightable; the structure (7-phase Rwendo Method) is. Trade dress + named methodology give you light protection. The moat is the AI experience, the cultural framing, the brand — not the word list.
- **Negligible**: someone steals the ELEVENLABS / ANTHROPIC keys *if you've done Phase M*. If you haven't, this is the actual concrete risk.
- **None**: someone reverse-engineers Rwen's prompt to clone the personality. Prompts will leak via API requests anyway; the value is in the iteration speed and the data, not the secret sauce.

**Practical posture: harden Phase M, use TestFlight/Internal Testing for any non-trivial tester pool, and don't lose sleep over curriculum theft.** Spend the worry budget on getting users instead.

---

## 11.5 Jurisdiction packs (legal, currency, age, crisis resources)

Per §3, each user has exactly one active jurisdiction pack. It owns everything that varies by where the user lives.

### What a jurisdiction pack contains

```ts
// data/jurisdictions/<id>/index.ts
{
  id: 'AU',
  name: 'Australia',
  countryCodes: ['AU'],          // Some packs (EU bloc) cover many ISO codes
  currency: { code: 'AUD', symbol: 'A$' },
  minAge: 16,                    // AU Privacy Act 1988 amendment threshold
  refundRights: {
    coolingOffDays: 0,           // No statutory right outside EU/UK; Apple/Google policies still apply
    refundUrl: 'https://apps.apple.com/...'
  },
  languageOfRecord: 'english',   // Which speaker pack the lawyer-vetted text is authored in
  voiceConsentRequired: false,   // BIPA only matters for Illinois (US)
  dataResidency: 'AU',           // Where the user's data physically sits
  crisisResources: [
    { name: 'Lifeline', phone: '13 11 14', url: 'https://www.lifeline.org.au', context: 'crisis_general' },
    { name: 'Beyond Blue', phone: '1300 22 4636', url: 'https://www.beyondblue.org.au', context: 'mental_health' },
    { name: '13YARN', phone: '13 92 76', url: 'https://www.13yarn.org.au', context: 'indigenous_specific' },
  ],
  consentDisclosures: {
    // Speaker-language strings that get inserted into onboarding's consent checkboxes
    aiPartnerProcessor: 'Anthropic (Claude AI) — operates from US, GDPR-compliant DPA with Australian residents',
    voiceProcessor: 'ElevenLabs (voice) — operates from US, audio deleted within 24h',
    dataController: 'Rwendo Pty Ltd (Australian entity once incorporated)',
  }
}
```

`privacy-policy.md` and `terms-of-service.md` sit in the same directory as authored text. The in-app `(legal)/privacy-policy.tsx` and `(legal)/terms-of-service.tsx` screens load whichever jurisdiction is active.

### v1 jurisdiction roster

| ID | Status | Content state | Lawyer review |
|---|---|---|---|
| `AU` | Populated | All fields authored (English) | Pre-launch |
| `GB` | `{ extends: 'AU' }` | UK-specific Privacy Policy + Terms required (14-day cooling-off) | Pre-launch |
| `US` | `{ extends: 'AU' }` | US Privacy + Terms; CCPA disclosures; BIPA voice consent for IL | Pre-launch |
| `EU` | `{ extends: 'AU' }` | GDPR Privacy Policy; 14-day cooling-off; multiple language ToS by member state | Pre-launch |
| `ZW` | `{ extends: 'AU' }` | Local Zimbabwean ToS; ZWL/USD currency dual-display | Pre-launch (low priority — minimal Shona-speaker base in Zimbabwe likely paying via mobile money) |

The `extends` pattern means: every field not overridden falls back to AU. Lawyer reviews each pack and overrides what differs. No code changes when a region's text gets fleshed out — just edits to the jurisdiction directory.

### Detection vs declaration

User declares jurisdiction at signup (a step in onboarding, post-Phase E.0). We can pre-fill from device locale or IP-geo as a hint, but the user confirms. RevenueCat reports purchase country which we cross-check; if there's a divergence, the user wins (they live where they say they do, even if travelling).

### Currency (deferred decision)

For v1, prices are stored per jurisdiction in `available_packs.prices_by_jurisdiction jsonb` (or a separate `pack_prices` table — see DATABASE-DESIGN.md §10). Initial values are locked manually per region.

Forex alignment with live FX rates is a v1.x concern. The trigger to revisit: when we have customers in 5+ jurisdictions and price drift is causing visible disparity. At that point, options are:
- Daily refresh against a free FX feed (e.g. ECB), with manual override for marketing campaigns
- Anchor on USD and convert at purchase time
- Honour the platform's localised pricing tier (Apple/Google have built-in price tiers per region)

Most likely we'll let RevenueCat manage cross-currency pricing once it's wired (Phase H), and the jurisdiction pack just stores the marketing display price.

### Crisis resources composition

The AI Companion (per §2.2) has crisis triggers — phrase patterns in the user's speaker language that match suicidal ideation, self-harm, etc. When a trigger fires, Rwen surfaces a handoff:

```
[speaker.locale] → "What you're describing is bigger than what I'm built for."
[jurisdiction.crisisResources] → "Please contact: Lifeline 13 11 14 (24/7)"
```

The phrase list lives in `data/courses/ai-companion/<speaker>/crisis-triggers.ts` (course content, speaker-language). The handoff phone numbers live in `data/jurisdictions/<id>/crisis-resources.ts` (jurisdiction content). Composition at runtime gives the right phone number to the right user in the right language.

---

## 12. State of the build

What's done (commits in chronological order):

**A → D + tsc cleanup**
- `bdf4dd7` Phase A: lesson schema rename target/native — all 100 curriculum files migrated
- `afa9f66` Phase B: pack-aware curriculum loading
- `093b98b` Phase C.1: i18n infrastructure
- `2a160b6` Phase C.2.a: main tabs strings
- `66ca95c` Phase C.2.b: auth flows strings
- `9d208e3` Phase C.2.c: profile sub-screens, lesson chrome, components strings
- `e92e3f6` tsc cleanup — project type-clean
- `8904538` Phase D: Shona (sn) UI translation drafted with `__warnings`
- `74ab471` Phase D fix: home tips mirror-not-translate
- `42e5ccc` In-app App Language switcher

**Three-pack architecture**
- `44cf85f` design rewrite — `PRODUCT-DESIGN.md` / `PROJECT_OVERVIEW.md` / `DATABASE-DESIGN.md` updated to three-pack model
- `698ef21` Phase E.0: code refactor — `data/speakers/`, `data/courses/`, `data/jurisdictions/`, `useSettings()` v3 surface
- `8336e0f` Profile voice picker reads `speaker.voices`
- `8292485` DB migration `005-three-pack-architecture.sql` — **needs run in Supabase SQL Editor**

**Phase E → N**
- `84e6121` Phase E: module gating + DEV_UNLOCK_ALL + demo account doc
- `2671af2` Phase I: jurisdiction step in onboarding + dynamic minAge
- `f50e85c` Phase G: Learn tab track selector (Language / AI Companion / Travel cards)
- `b6a2a7e` Phase F: Phase 8 schema + lesson-completion teaser card
- `ea8d66b` Phase L: methodology + companion-philosophy screens
- `0993016` Phase J: AI Companion English content authored (10 cards, 6 Topics, 5 levels, 30-fact memory schema, crisis triggers)
- `b045fe5` Phase K stub: language-english/shona/m01-l01.ts proves second variant works
- `4807f60` Phase M (code): rwen-chat / rwen-tts / rwen-stt edge functions + opt-in client wiring
- `2c1db1f` Phase N (architecture): legal screens read jurisdiction.{name, coolingOffDays}
- `746c030` Phase H plan: `docs/PHASE-H-REVENUECAT.md` (external-account-blocked)

**External work blocked on user**

- Run `005-three-pack-architecture.sql` in Supabase SQL Editor.
- Deploy 3 edge functions + set `ANTHROPIC_KEY` / `ELEVENLABS_KEY` secrets. Then flip `EXPO_PUBLIC_USE_EDGE_FUNCTIONS=1` and remove client-side keys.
- Native-Shona reviewer pass on the sn locale `__warnings`.
- Phase H accounts (Apple Developer + Play Console + RevenueCat).
- Lawyer pass on per-region Privacy / Terms of Service.

**Authoring backlog** (deferred per content scope)

- Phase K: 99 remaining `language-english/shona/curriculum/` lessons + full Shona AI Companion variant.
- Phase F: per-lesson `phase8` scripted scenarios on the 100 existing Shona lessons.

The architecture is in place. What remains is content authoring + external services + content review.

**Phase A is ready to start when you say "Phase A go".** It's a clean, mechanical 1-2 day chunk:
1. Rename `Chunk.shona` → `Chunk.target`, `Chunk.english` → `Chunk.native`. Same for `DialogueLine`, `PatternExample`, `ActiveRecallPrompt`.
2. Run a search-and-replace across all 100 curriculum files in `data/curriculum/`.
3. Update `app/lesson/[id].tsx` (lesson engine) to read the new fields.
4. Update the 5 exercise components in `components/exercises/` to read the new fields.
5. Run `tsc` to confirm zero new type errors.
6. Manual test: load lesson m01-l01 on device, verify it renders identically.

No user-visible change. Just unblocks Phase B (directory restructure for two-pack support) and everything after.
