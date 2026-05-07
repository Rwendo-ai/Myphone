# Authoring a New Course Pack — Self-Contained Recipe

> **Audience:** an LLM agent that has been handed only this file and the repo, with one task: produce a complete course pack of one of three types (language / ai-companion / travel / future). No other context required.

> **Scope:** one course pack per agent run. A course pack contains content for one or more **speaker variants** — author them one at a time inside the same run, or split across runs.

---

## 1. What a course pack is

Rwendo runs on three orthogonal pack types:

- **Speaker pack** — drives all readable text in the app (UI, AI prompts, narration, voices, tips). One active per user.
- **Course pack** *(this file is about creating one)* — the curriculum or content the user is learning. ONE OR MORE active per user.
- **Jurisdiction pack** — country-bound stuff: privacy/terms text, currency, age threshold, crisis lines.

A user is the join: `speaker × courses[] × jurisdiction`.

A course pack is the **purchasable product**. Users buy "Learn Shona" or "AI Companion" or "Know Yourself" — one product, one course pack ID. But the **content** inside a course pack is authored per speaker variant: the English-speaker variant of Learn Shona is a different folder of authored content from the French-speaker variant. Same SKU, different content artifacts.

The runtime composes the experience: the user's speaker pack drives UI and AI; the active course's speaker variant drives lesson content; the jurisdiction pack drives legal/currency. Adding a new speaker pack alone (per `PACK-AUTHORING-SPEAKER.md`) doesn't give that user any course content — that requires authoring at least one course variant for the new speaker.

## 1.5 Storage architecture — post-streaming-pivot (2026-05-05)

**Course content lives in Supabase Storage, not in the binary.** This is a hard pivot from the original v1 design (which bundled all lesson `.ts` files into the EAS build).

| Artifact | Where it lives now |
|---|---|
| Course `index.ts` (`CoursePackMeta`) | Bundled — `data/courses/<courseId>/index.ts` |
| Per-course manifest (lesson IDs + titles + module/unit meta) | Bundled — `data/courses/<courseId>/manifest.ts` |
| **Lesson bodies** (`LessonData` JSON — chunks, exercises, dialogue, mission, phase8) | **Storage — `lessons/<courseId>/<speakerId>/<lessonId>.json`** |
| Speaker packs (UI/AI/locale) | Bundled — small + rarely change |
| Jurisdiction packs (legal/crisis/currency) | Bundled |

**Why:** 30-50 MB lighter binary + ship/edit lessons without an EAS rebuild + lazy translation flywheel (a translation paid for by one user is cached globally for every subsequent same-speaker user).

**Authoring → live workflow:**

1. Author lesson `.ts` files locally at `data/courses/<courseId>/<speakerId>/curriculum/m{NN}-l{NN}.ts` (temporary working files; conform to `LessonData` from `types/lesson.ts`).
2. Run `npx tsc --noEmit` — must exit 0 before upload.
3. Upload via `scripts/upload-self-dev-lessons-to-storage.ts` (or equivalent for language courses) — converts each `.ts` to JSON and uploads to `lessons/<courseId>/<speakerId>/<lessonId>.json` with `upsert: true` (atomic replace).
4. Regenerate `data/courses/<courseId>/manifest.ts` via `scripts/generate-course-manifests.ts` so the Learn tab can list units/lessons without the bodies.
5. Delete the source `.ts` files from `data/courses/<courseId>/<speakerId>/curriculum/` (they were temporary). Only `manifest.ts` and the course `index.ts` stay in git.
6. Update `data/courses/<courseId>/index.ts` `availableForSpeakers` if a new speaker variant was added.
7. Commit the manifest + index changes. Don't commit lesson `.ts` files.

**Runtime read path** (`lib/lesson-loader.ts`):
1. AsyncStorage cache (per device, persistent until uninstall) →
2. Supabase Storage at `lessons/<courseId>/<speakerId>/<lessonId>.json` →
3. English fallback at `lessons/<courseId>/english/<lessonId>.json` (when the speaker variant doesn't exist yet).

**Cache invalidation:** new lessons can include a `version` field; loader compares cached vs Storage on read; mismatch triggers refetch. Add `version: 2` (or higher) when re-uploading edited lessons so existing devices pick up the change instead of serving stale cache.

**`getLessonSync` is gone.** Pre-pivot, each language course exported a sync resolver (`getCourseLesson` switched on courseId). Post-pivot, the lesson screen calls `loadLessonAsync(courseId, speakerId, lessonId)` and the loader handles cache + Storage + fallback. **Do not add `getLessonSync` to new courses.** References to it in §8, §11, §13, §16 below are pre-pivot and should be ignored.

## 2. Course types

Three shapes exist today; new types can be added but require type-system extension (see §11).

| Type | Purpose | Examples | Variant content |
|---|---|---|---|
| `language` | Learn a target language | `language-shona`, `language-english`, `language-french` (future) | 100 lessons (`m01-l01.ts ... m10-l10.ts`) per speaker variant |
| `ai-companion` | Relationship + AI Companion | `ai-companion` | Starter cards, Topics, depth-levels, memory schema, crisis triggers per speaker |
| `travel` | Phrasebook + cultural guide for a destination | `travel-zimbabwe`, future `travel-japan` | Phrasebook + cultural guide per speaker |
| (future) | e.g. `know-yourself`, `language-shona-advanced` | TBD | TBD — extends the type system |

Adding a course pack of an existing type is purely authoring + registry work. Adding a course pack of a NEW type (e.g. `know-yourself`) needs new TypeScript types + new content shape definitions — see §11.

## 3. The single input the agent needs

Before starting, you need:

| Field | Example | Notes |
|---|---|---|
| `id` | `language-shona`, `ai-companion`, `know-yourself` | Stable forever. Lowercase, hyphen-separated. |
| `type` | `language`, `ai-companion`, `travel` | Must be one of the existing types unless extending §11. |
| `displayName` | `Learn Shona`, `AI Companion`, `Know Yourself` | The UI label. In English — courses are named in English regardless of speaker variants. |
| `targetLanguageId` | `shona` (for `language-*`) or `undefined` (others) | Only set for type=`language`. |
| `availableForSpeakers` | `['english']`, `['english', 'shona']` | Speaker IDs of variants that exist. Start with one. |
| `revenuecatProductId` | `null` (v1) | Wired in Phase H. Leave null. |
| `emoji` | `🇿🇼`, `🦎`, `🧠` | Visual identity. |
| `primaryColor` / `secondaryColor` | hex | Optional theme override. Defaults are in `data/courses/language-shona/index.ts`. |

If you don't have all 8, stop and ask.

## 4. Files to create (top-level)

For course pack ID `{COURSE_ID}` (e.g. `know-yourself`):

```
data/courses/{COURSE_ID}/
  index.ts                      ← course metadata (BUNDLED in git)
  manifest.ts                   ← lesson IDs + titles + unit meta (BUNDLED — for Learn tab)
  {SPEAKER_ID}/                 ← TEMPORARY authoring folder per §1.5; deleted after upload
    [content files — see §5/§6/§7 per type]
```

Per §1.5: the per-speaker folder is a working directory during authoring. Lesson bodies upload to Supabase Storage, then the local files are deleted. Only `index.ts` and `manifest.ts` stay in git.

The course-level `index.ts` template:

```ts
import { CoursePack, CoursePackMeta } from '../../../types/packs';
// import speaker-variant content as needed below

const meta: CoursePackMeta = {
  id: '{COURSE_ID}',
  type: '{language|ai-companion|travel}',
  displayName: '{ENGLISH_NAME}',
  targetLanguageId: '{shona|english|undefined}',
  availableForSpeakers: ['{SPEAKER_ID_1}'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '{EMOJI}',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {
    {SPEAKER_ID_1}: {
      speakerId: '{SPEAKER_ID_1}',
      // pick ONE depending on type:
      curriculumLoader: async () => (await import('./{SPEAKER_ID_1}/curriculum')).default,  // type=language
      companionLoader:  async () => (await import('./{SPEAKER_ID_1}')).default,             // type=ai-companion
      travelLoader:     async () => (await import('./{SPEAKER_ID_1}')).default,             // type=travel
    },
  },
};

export default pack;
```

For language-type courses, also export a sync resolver for the lesson screen:

```ts
import { LessonData } from '../../../types/lesson';

export function getLessonSync(speakerId: string, lessonId: string): LessonData | undefined {
  if (speakerId === '{SPEAKER_ID_1}') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const lessons = require('./{SPEAKER_ID_1}/curriculum').default as Record<string, LessonData>;
    return lessons[lessonId];
  }
  return undefined;
}
```

## 5. Variant content — type=`language`

For `data/courses/{COURSE_ID}/{SPEAKER_ID}/` where the user is a `{SPEAKER_ID}` speaker learning `targetLanguageId`:

Create:
```
{SPEAKER_ID}/
  curriculum/
    m01-l01.ts ... m10-l10.ts    ← 100 lesson files
    index.ts                       ← lessons map + default export
```

Each lesson file matches the `LessonData` interface in `types/lesson.ts`. The interface (read it before authoring):

```ts
export interface LessonData {
  id: string;                    // 'm01-l01-mangwanani'
  module: number;                // 1
  lesson: number;                // 1
  title: string;
  estimatedMinutes: number;
  xpReward: number;
  hook: { rwenLine: string; culturalNote: string };
  chunks: Chunk[];               // max 3 lexical chunks
  pattern: Pattern;              // grammatical/morphological pattern
  exercises: Exercise[];         // 3-6 mixed exercises
  rwenDialogue: { intro: string; lines: DialogueLine[] };
  activeRecall: { instruction: string; prompts: ActiveRecallPrompt[] };
  mission: { title: string; task: string; rwenSignoff: string };
  phase8?: Phase8Config;         // optional per-lesson AI conversation
}
```

Each `Chunk` has `target` (the word being learned, in `targetLanguageId`) and `native` (the translation, in `{SPEAKER_ID}`). Same pattern for `DialogueLine.userChoices`, `PatternExample`, etc.

**The 7-phase Rwendo Method** is a hard structure — every lesson must include all 7 phases:

1. **Hook** — Cultural framing, Rwen sets context. ~2 sentences.
2. **Chunks** — Max 3 new lexical chunks. Each is a meaningful unit (not a single word). Author with `target`, `native`, optional `literal` (morpheme breakdown), `emoji`, `phonetic`.
3. **Pattern** — One grammatical or morphological pattern. Includes 3-5 examples showing the pattern.
4. **Practice** — 3-6 exercises. 5 types: `match_pairs`, `fill_blank`, `translate`, `build_sentence`, `multiple_choice`. Mix at least 3 types per lesson.
5. **Dialogue** — Branching scripted conversation. Rwen plays a character. User picks from 2-3 choices; correct ones advance, wrong ones get gentle recasts.
6. **Active recall** — 2-4 no-look prompts. User must produce target-language output from memory.
7. **Mission** — A real-world micro-task ("greet someone with Mangwanani today"). Brief, actionable.

**Authoring conventions**:
- Cultural framing of the Hook is from THIS speaker's perspective — not translated from another variant. A French speaker learning Shona gets French cultural framing of *tsika*, not English-translated-to-French.
- Lesson IDs match the file name (`m01-l01-<slug>`). The `<slug>` is in the target language usually (the chunk being taught, e.g. `mangwanani`).
- `xpReward`: 25 for standard lessons, 30-35 for slightly harder, 50+ for module-cap conversation lessons (m*-l10).

**Curriculum scale**: 100 lessons per pack. 10 modules of 10 lessons each. Module 1 is greetings (lowest-stakes way to produce real output day one). Module 10 is integration (proverbs, storytelling, full A2 scenarios).

**The `m01-l01.ts` file template**: read `data/courses/language-shona/english/curriculum/m01-l01.ts` for a complete worked example. Use it as the reference shape. Don't translate it — author fresh for the new (course, speaker) pair.

**The `curriculum/index.ts` file template**:

```ts
import { LessonData } from '../../../../../types/lesson';
import m01l01 from './m01-l01';
import m01l02 from './m01-l02';
// ... 100 imports total

export const lessons: Record<string, LessonData> = {
  'm01-l01-{slug}': m01l01,
  'm01-l02-{slug}': m01l02,
  // ... 100 entries
};

export default lessons;
```

**Authoring effort**: ~5-7 working days per (course, speaker) pair using the AI-drafted + human-reviewed pipeline (PRODUCT-DESIGN.md §4.4, summarised below in §9).

## 6. Variant content — type=`ai-companion`

For `data/courses/ai-companion/{SPEAKER_ID}/`:

Create:
```
{SPEAKER_ID}/
  index.ts              ← assembles everything below
  starter-cards.ts      ← ~10 conversation starter cards
  topics.ts             ← 6 multi-turn structured flows
  depth-levels.ts       ← 5 progression levels
  memory-schema.ts      ← ~30 fact slots Rwen will track
  crisis-triggers.ts    ← regex patterns for crisis detection
```

The types are in `types/ai-companion.ts`. Read that file — it's the authoritative shape definition. Highlights:

- **StarterCard**: `{ id, label, systemPrompt, showWhen?: { timeOfDay?, dayOfWeek?, minDepthLevel?, requiresMemory? }, hasCrisisFooter? }`
- **Topic**: `{ id, label, description, targetTurns, systemPrompt, minDepthLevel }`
- **DepthLevel**: `{ level (1-5), name, unlockDays, unlockMessages, shortDescription, unlocks }`
- **MemoryFact**: `{ key, label, category, editable }`
- **CrisisTrigger**: `{ context, pattern (regex), severity }`
- **CompanionContent**: bundles all of the above + a `crisisHandoffLine` string

**Authoring conventions**:
- Starter cards are tappable cards in the Companion UI. ~10 per speaker. Mix open-ended ("How was your day?"), context-aware ("You mentioned X last week..."), and gated ("I'm in a weird mood." — has crisis footer).
- Topics are multi-turn flows (5-7 turns). 6 standard ones: Process my day / Help me decide / I'm stuck / Tell me about yourself / Reflect on my week / Practice a [target language] conversation.
- Depth-level thresholds are the same across all speakers (Day 0 / Day 7+30msg / Day 30+200msg / Day 90+800msg / Day 365). Only the names + descriptions change per speaker.
- Memory schema: ~30 facts across categories (people / work / goals / preferences / milestones / context). Same shape across speakers — only labels translate.
- Crisis triggers: regex patterns IN THIS SPEAKER'S LANGUAGE that match suicidal ideation, self-harm, domestic violence, mental-health distress. **Critical**: needs native speaker review for accuracy AND clinical review for completeness before launch.
- `crisisHandoffLine`: a single string in this speaker's language, e.g. "What you're describing is bigger than what I'm built for. Please reach out to one of these — they're trained for this and they're free:". The runtime appends jurisdiction-specific crisis numbers after this line.

**Worked example**: read `data/courses/ai-companion/english/` — full English variant authored. The Shona variant at `data/courses/ai-companion/shona/index.ts` is currently a stub re-exporting English; that's what NOT to ship.

**Authoring effort**: ~3-4 working days authoring + ~2-3 days code per speaker variant (memory schema is mostly translation; cards/topics need fresh copy; crisis triggers need clinical review).

## 7. Variant content — type=`travel`

For `data/courses/{COURSE_ID}/{SPEAKER_ID}/` where `{COURSE_ID}` is e.g. `travel-zimbabwe`:

Travel packs aren't fully spec'd in v1 (Phase 2 work). The current scaffold is `data/courses/travel-zimbabwe/` — empty placeholder. When ready, the structure will be:

```
{SPEAKER_ID}/
  phrasebook.ts         ← phrases by situation (airport, hotel, market, emergency)
  cultural-guide.ts     ← tsika, customs, what to expect
  destinations.ts       ← Harare, Victoria Falls, Bulawayo, etc.
  practical.ts          ← currency, kombi routes, money, visa
```

Types for travel content don't exist yet. Adding a travel pack today = stubbing the directory + waiting for the content shape definitions in Phase 2.

## 8. Registry updates

After creating the course pack files, edit `data/courses/index.ts`:

Existing pattern:
```ts
import { CoursePack, CoursePackId } from '../../types/packs';
import languageShona, { getLessonSync as getShonaLessonSync } from './language-shona';
import languageEnglish, { getLessonSync as getEnglishLessonSync } from './language-english';
import aiCompanion from './ai-companion';

export const COURSES: Record<CoursePackId, CoursePack> = {
  'language-shona':   languageShona,
  'language-english': languageEnglish,
  'ai-companion':     aiCompanion,
};
```

Add the new course:
1. Import it:
   ```ts
   import {COURSE_ID_camel} from './{COURSE_ID}';
   ```
2. Register it:
   ```ts
   '{COURSE_ID}': {COURSE_ID_camel},
   ```

Post-pivot (§1.5), there is no `getCourseLesson` sync resolver per course. The lesson screen calls `loadLessonAsync(courseId, speakerId, lessonId)` from `lib/lesson-loader.ts`, which goes cache → Storage → English fallback. New courses don't need any per-course resolver work.

Database row in `available_packs`:

```sql
INSERT INTO public.available_packs (id, pack_kind, course_type, target_language_id, available_for_speakers, name, description, is_free, is_active, sort_order)
VALUES (
  '{COURSE_ID}',                                            -- 'course:know-yourself' or just '{COURSE_ID}' depending on prefix convention
  'course',
  '{language|ai-companion|travel}',
  '{TARGET_LANG_ID|null}',
  ARRAY[{available_for_speakers}],                          -- ['english', 'shona']
  '{ENGLISH_NAME}',
  '{description}',
  false,                                                    -- is_free; courses are paid by default
  true,
  10                                                        -- sort_order; tier-addons sort 0, courses ~10+
)
ON CONFLICT (id) DO NOTHING;
```

## 9. Authoring pipeline (per speaker variant)

The cadence per PRODUCT-DESIGN.md §4.4 is:

1. **Draft pass** — Claude (Opus) drafts the full content from a prompt that includes the course intent, speaker culture, and lesson template. Output goes to the variant directory as TypeScript files.
2. **Verification pass** — A second Claude call reviews drafts for naturalness, tone consistency, accuracy, mirror-not-translate compliance, factual errors. Adds `__warnings: []` array per file flagging items.
3. **Native-speaker spot-check** — Native speaker reviews flagged items + samples 10% of unflagged. ~1 day per speaker variant + AU$200 reviewer fee.
4. **Apply review** — Reviewer notes integrated, `__warnings` cleared (or kept-and-noted), variant ships.

**For language-type courses, this scales to ~5-7 days per (course, speaker) pair.** Don't underestimate — 100 lessons of fresh authoring with culturally-grounded Hook narratives is real work.

## 10. Ship it — from authored files to live for users

Adding a course is more complex than a speaker or jurisdiction pack because courses are usually **paid** (RevenueCat) and the content is large (100 lessons × N speaker variants). Post-streaming-pivot (see §1.5), the **lesson bodies live in Supabase Storage; only the course metadata + manifest are in git + the binary**.

### 10.1 Where each artifact lives

| Stage | Artifact | Location |
|---|---|---|
| **Authored (locally)** | Lesson `.ts` files | `data/courses/{COURSE_ID}/{SPEAKER_ID}/curriculum/` — temporary, deleted after upload |
| **Bundled (git)** | Course metadata + lesson manifest | `data/courses/{COURSE_ID}/index.ts` + `manifest.ts` |
| **Storage** | Lesson bodies as JSON | `course-content` bucket → `lessons/{COURSE_ID}/{SPEAKER_ID}/{LESSON_ID}.json` |
| **Code-wired** | `COURSES` registry | `data/courses/index.ts` |
| **Database** | Catalogue row | `available_packs` table — one row per course pack |
| **Storefront** | IAP product (paid courses only) | RevenueCat dashboard + App Store Connect + Google Play Console |
| **Runtime read path** | Cache → Storage → English fallback | `lib/lesson-loader.ts` |
| **Live** | Visible in Learn tab + buyable | After Storage upload + DB row + (for paid) RevenueCat product activation |
| **Owned** | Per-user entitlement | `user_packs` row with `pack_id = '{COURSE_ID}'` (written by RevenueCat webhook on purchase, or by onboarding for the starter course) |

### 10.2 The pipeline (in order)

1. **Author** the lesson `.ts` files locally per §4-7.
2. **`npx tsc --noEmit` clean** — every `.ts` must conform to `LessonData` (or `CompanionContent`, etc.) before upload.
3. **Upload to Storage** via `scripts/upload-self-dev-lessons-to-storage.ts` (self-development) or the language-course equivalent. The script converts each `.ts` to JSON and uploads to `lessons/{COURSE_ID}/{SPEAKER_ID}/{LESSON_ID}.json` with `upsert: true`.
4. **Regenerate manifest** via `scripts/generate-course-manifests.ts`. The Learn tab reads `manifest.ts` to list units + lessons without downloading bodies.
5. **Delete the local lesson `.ts` files** (they're temporary). Only `index.ts` + `manifest.ts` stay in git.
6. **Wire the code registry** per §8 (only on first speaker variant of a new course, or when adding a new speaker variant).
7. **Update `availableForSpeakers`** in the course `index.ts` if a new speaker variant landed in Storage.
8. **Run the `available_packs` SQL insert** from §8 in the Supabase SQL Editor (one-time per course).
9. **Phase H — RevenueCat setup** (skip entirely for free courses):
   1. Create a product in App Store Connect (auto-renewable subscription OR non-consumable; Rwendo's model is per-course non-consumable + tier subscription).
   2. Create the same product in Google Play Console.
   3. Map both to one entitlement in the RevenueCat dashboard.
   4. `UPDATE available_packs SET revenuecat_product_id = '<rc-id>' WHERE id = '{COURSE_ID}'`.
   5. For region-priced courses, populate `available_packs.prices_by_jurisdiction` jsonb (e.g. `{"AU": 9.99, "EU": 6.99, "US": 7.99, "ZW": 0.50}`).
10. **Cut a release build** with `eas build` ONLY when the manifest or course `index.ts` changed (most lesson edits don't require a rebuild — the binary just reads the manifest). New courses, new units, or new speaker variants need a build; lesson body edits do not.
11. **Test purchase end-to-end** in App Store sandbox / Play Store internal test track — RevenueCat ships a sandbox preview environment. After a successful test purchase, the RevenueCat webhook should fire → write `user_packs` row → the Learn tab on next refresh shows the course as owned.
12. **Submit for app review** when a binary rebuild was needed. App Store: 1-7 days; Play Store: hours-days. New IAP products may be flagged for review.
13. **Release.** Production users see the course in the Learn tab "Get your next course" CTA → in-app purchase → ownership written via webhook → Learn tab updates on next focus.

### 10.3 Storage as source-of-truth (post-pivot)

In v1 (pre-pivot, original spec) all course content was bundled in the EAS build. As of 2026-05-05 the streaming pivot moved every lesson body to Supabase Storage. **Don't bundle lesson `.ts` files in git** — they get deleted after upload. The runtime cost is one Storage HEAD + GET on first lesson open per device per lesson; subsequent opens hit the per-device AsyncStorage cache instantly.

Sizing math: a typical 7-phase lesson is ~5-10 KB JSON. 100 lessons × 5 speaker variants = 500 lessons ≈ 2-5 MB total per course in Storage. The 13 courses currently in Storage hold 576 lessons (~2.5 MB). Storage is cheap; the binary-size win is enormous (30-50 MB lighter at install, faster cold-start).

**When a course `.ts` file edit DOES need an EAS rebuild:**
- New course pack added (course `index.ts` is new)
- `availableForSpeakers` array changes (the binary reads this to decide what to show)
- Manifest entries added / removed (new lessons or unit reshuffling)
- Course metadata changes (displayName, emoji, primaryColor)

**When a course content change does NOT need a rebuild** (Storage upload is enough):
- Lesson body edits (chunks, exercises, dialogue, mission text)
- New speaker variant of an existing course (after `availableForSpeakers` is added; that part still needs a binary update)
- Translation pass (lazy or eager) — translated lessons land in Storage at the speaker-variant path

**Cache busting:** add a `version` field inside the JSON for any lesson you've edited post-launch. The loader compares cached vs Storage version; mismatch refetches. Without a version bump, devices that already cached the old lesson keep serving it forever.

### 10.4 RevenueCat / IAP gotchas (Phase H)

- **Don't populate `available_packs.revenuecat_product_id` until the IAP product is APPROVED** in both App Store + Play Store. Otherwise the app calls StoreKit/BillingClient for a non-existent product and the Buy flow crashes or shows an empty modal.
- **Free courses skip the entire RevenueCat step.** Set `is_free: true` on the catalogue row, leave `revenuecatProductId: null` in the meta. The Learn tab "Buy" CTA hides for free courses; first activation auto-writes `user_packs` without a purchase event.
- **Test on a real device with a sandbox account.** The simulator does not run StoreKit. Play Store sandbox has its own quirks — use the internal-testing track, not local emulator.
- **Pricing per jurisdiction**: when `prices_by_jurisdiction` differs from the App Store's auto-tier price for a region, the App Store wins for the actual purchase price — our jsonb is for displaying the "from $X" tease in marketing surfaces. To set a different store-side price, configure it in App Store Connect / Play Console pricing tiers.

### 10.5 User discovery + ownership flow

- The Learn tab filters courses by `entitlementContext.ownedCourseIds + starterCourseId` via `canAccessCourse()` (`lib/entitlements.ts`). Adding a course to the registry makes it **discoverable** in the Buy CTA but not **owned** — ownership flows from `user_packs`.
- **New users** get their starter course via onboarding: the chosen language pack auto-writes a `user_packs` row + sets `profiles.starter_course_id`. This is free (the starter is always free for modules 1-4).
- **Existing users** buy additional courses via Learn tab "Buy another X course" → IAP → RevenueCat webhook → `user_packs` row → Learn tab refreshes (it re-reads `entitlementContext` on focus via `useFocusEffect`).
- **Until Phase H is live**, the Buy CTA shows a "Course store coming soon" alert — see `app/(tabs)/learn.tsx`'s `handleBuyAnother`. Replace that alert body once RevenueCat is wired.

### 10.6 What can break in production

- **`availableForSpeakers` mismatch.** If a course's `availableForSpeakers` doesn't include the user's speaker, the course is hidden from that user **even if they own it**. Audit when adding new variants — add the speaker ID to the array or the variant content is dead.
- **Lessons uploaded to Storage but manifest not regenerated.** The Learn tab reads `manifest.ts` to list units/lessons. If you upload new lessons but don't re-run `scripts/generate-course-manifests.ts` + commit the manifest, the binary doesn't know the new lessons exist. The Storage objects are orphaned.
- **Unauthored speaker variant referenced in `availableForSpeakers`.** The Learn tab lists the course for that speaker, but tapping a unit hits the loader's English fallback at best, or a 404 if no English variant exists. Either upload the variant to Storage or remove the speaker from the array until ready.
- **RevenueCat webhook not firing.** Test post-purchase: `SELECT * FROM user_packs WHERE user_id = '<test_user>'` should show the new row within seconds of a sandbox purchase. If not, check the RevenueCat → Supabase webhook config.
- **Course registered but `available_packs` row missing.** In-app the course appears (since the registry is the runtime source); but any DB query that joins `user_packs` to `available_packs` returns no rows. The user "owns" something that doesn't exist in the catalogue — analytics + admin dashboards break.

## 11. Adding a new course type

If `know-yourself` (or any future type) doesn't fit `language` / `ai-companion` / `travel`:

1. Add the new type to `CourseType` in `types/packs.ts`:
   ```ts
   export type CourseType = 'language' | 'ai-companion' | 'travel' | 'self-development';
   ```
2. Define the content shape — add a new file `types/<type>.ts` parallel to `types/ai-companion.ts` defining what content a variant carries. For `know-yourself`, this might be: practice exercises, journaling prompts, frameworks, weekly arcs.
3. Add a loader to `CoursePackVariant` in `types/packs.ts`:
   ```ts
   export interface CoursePackVariant {
     ...
     selfDevelopmentLoader?: () => Promise<unknown>;
   }
   ```
4. Wire the loader in `data/courses/index.ts`'s sync resolver if applicable.
5. Build the variant content per the new shape.

**Don't extend `CourseType` lightly.** Each new type is a new content surface in the app, with its own UI affordances. Talk to the product owner before adding one.

## 12. Validation gates

Before declaring done, run:

1. **TypeScript**: `npx tsc --noEmit` exits 0. Every authored `.ts` lesson file conforms to `LessonData`. Every AI Companion variant conforms to `CompanionContent`.
2. **Course is registered**: `data/courses/index.ts` imports the new pack and includes it in the `COURSES` map.
3. **Manifest is current**: `data/courses/{COURSE_ID}/manifest.ts` lists every lesson ID that exists for the variant in Storage.
4. **At least one variant is uploaded to Storage**: `lessons/{COURSE_ID}/{SPEAKER_ID}/{LESSON_ID}.json` resolves for every lesson in the manifest. Not just metadata.
5. **DB row exists**: `SELECT 1 FROM available_packs WHERE id = '{COURSE_ID}'`.
6. **Lesson screen smoke test** (language types): open a lesson by ID via `/lesson/<lesson-id>` (with the right `?courseId=...` route param). The lesson loader fetches from Storage on cold cache, renders without "Lesson not found", all 7 phases play through. Re-open from warm cache loads in <500 ms.
7. **`__warnings` review**: every uploaded lesson has flagged items for review. Empty arrays = unreviewed.

## 13. Common mistakes to avoid

- **Translating curriculum from another speaker variant.** Cultural framing is per-speaker. Re-author the Hook narratives, dialogue scenarios, mission tasks for THIS speaker's perspective. Translation is fine for the chunks themselves (target words don't change) but the surrounding prose does.
- **Inventing new course types without spec'ing them.** §11 is a path; don't take it without a real reason.
- **Authoring fewer than 100 lessons for a language pack.** Modules 1-4 are free; modules 5-10 are paid (Phase E gating). Shipping 50 lessons effectively means modules 5+ are empty paid content. Either ship 100 or mark the course `isComingSoon: true`.
- **Forgetting to set `availableForSpeakers`.** If you author a Shona variant of a course but don't add `'shona'` to the array, the runtime won't surface the variant.
- **Bundling lesson `.ts` files in git.** Post-pivot, lesson bodies live in Storage. Source `.ts` files in `data/courses/{COURSE_ID}/{SPEAKER_ID}/curriculum/` are temporary authoring artifacts. After upload + manifest regeneration, delete them. `.gitignore` should keep them from being committed.
- **Forgetting to bump `version` when re-uploading edited lessons.** Devices that cached the old version keep serving it. Add `version: 2` (or higher) to the JSON.

## 14. Boundary — what a course pack does NOT contain

Don't put in a course pack:

- **UI strings** (button labels, screen titles, error messages). Those go in `data/speakers/<speaker-id>/locale/*.json` — see `PACK-AUTHORING-SPEAKER.md`.
- **AI persona / guardrails / system prompt template**. Speaker pack territory.
- **Privacy policy text or jurisdiction-specific consent disclosures**. See `PACK-AUTHORING-JURISDICTION.md`.
- **Crisis phone numbers** (the actual numbers — Samaritans, Lifeline, etc.). Those are jurisdiction-specific. The course pack carries the *trigger phrases* in this speaker's language; the jurisdiction pack carries the phone numbers; the runtime composes them.

## 15. Worked example: outline of a `know-yourself` course

Inputs:
- `id`: `know-yourself`
- `type`: `self-development` (NEW — would extend §11)
- `displayName`: `Know Yourself`
- `targetLanguageId`: undefined
- `availableForSpeakers`: `['english']` initially
- `emoji`: `🧠`

Files (assuming new type added):
```
data/courses/know-yourself/
  index.ts                           ← course metadata
  english/
    index.ts                         ← assembles content below
    practices.ts                     ← daily/weekly practices
    journal-prompts.ts               ← prompts for reflective writing
    frameworks.ts                    ← Big Five, Values, Strengths exercises
    weekly-arcs.ts                   ← 12-week thematic progression
```

This is illustrative — actual `know-yourself` design is product-owner work.

## 16. The acceptance criterion

A course pack with one speaker variant is shippable when:
- Course-level `index.ts` exists with valid `CoursePackMeta`
- `manifest.ts` exists and lists every lesson ID for the variant
- One speaker variant is fully **authored AND uploaded to Storage** (curriculum / companion content / travel content per §5/§6/§7) — local `.ts` files deleted after upload
- `data/courses/index.ts` includes it in `COURSES`
- `availableForSpeakers` lists every speaker variant that exists in Storage
- `available_packs` row exists
- `tsc --noEmit` exits 0
- A native speaker (for the speaker variant's language) has spot-checked content (post-upload — read JSON from Storage or the staging copy)

The agent declares "drafted" when all but the native review are met. Native review is a human gate.
