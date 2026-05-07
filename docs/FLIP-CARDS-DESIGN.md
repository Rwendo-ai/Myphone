# Flip Cards (Vocabulary Pack) — Design Doc

**Started:** 2026-05-06
**Owner:** Bowen
**Status:** Design pass — no implementation. Sits between the manifest streaming
pivot (done) and the Travel/Phrasebook expansion in [LANGUAGE-SECTION-DESIGN.md](./LANGUAGE-SECTION-DESIGN.md).

---

## 0. Why this doc exists

The user asked for "flip cards under each unit, 500 words per language course,
images, ElevenLabs single-word audio." This doc decides the schema, storage
layout, audio pipeline, UI placement, and download/cost economics before any
code is written.

This is the spec referenced as item B6 / list item 2 in
[STATUS-2026-05-06.md](./STATUS-2026-05-06.md).

---

## 1. The shape of a flip card

```ts
interface FlipCard {
  /** Stable id, slug-style: 'm03-mangwanani' (module-prefixed for grouping) */
  id: string;
  /** Module this card belongs to (1..10). Cards are grouped per module under
   *  the matching unit on the unit page. 50 cards × 10 modules = 500 / course. */
  module: number;
  /** Front of the card — the word/phrase in the LEARNED language. */
  target: string;
  /** Back of the card — translation in the user's SPOKEN (speaker pack) language. */
  native: string;
  /** Short part-of-speech / register hint shown small under target.
   *  e.g. "noun", "greeting (formal)". Optional — many cards omit this. */
  hint?: string;
  /** Stock image hosted in Storage. Path relative to the bucket root. */
  imagePath: string;
  /** ElevenLabs-generated audio for the target word, hosted in Storage.
   *  Single-word, ~1-2 seconds. */
  audioPath: string;
  /** Content version — same semantics as LessonData.version (cache-bust). */
  version?: number;
}
```

500 cards per course = 50 cards × 10 modules. Cards are authored once per
**course** (course = directional pair, e.g. `language-spanish` for English
speakers learning Spanish). Each course's 500 cards live under one Storage
prefix and ship a single manifest entry.

---

## 2. Storage layout

Mirrors the lesson layout in `course-content/lessons/<courseId>/...`.

```
flipcards/<courseId>/
  manifest.json                   (the FlipCard[] array, ~50 KB / course)
  audio/<cardId>.mp3              (ElevenLabs output, ~5-15 KB each)
  images/<cardId>.webp            (stock photo, ~30-80 KB each, webp for size)
```

**Per-course size budget:**
- 500 audio files × ~10 KB = 5 MB
- 500 images × ~50 KB = 25 MB
- Manifest JSON: ~50 KB
- **Total per course: ~30 MB**

This is the largest content blob in the app. We download it only when the
user opts in (see §6) — it does NOT ship with the lesson pack on first
install.

---

## 3. ElevenLabs audio pipeline

### 3.1 Generation script

`scripts/generate-flipcard-audio.ts` (one-shot, run once per course):

1. Read the authored manifest at `data/courses/<courseId>/flipcards.ts`
   (source-of-truth lives in TypeScript at author time; uploaded to
   Storage on completion).
2. For each card, call ElevenLabs `text-to-speech` API:
   - Voice: course's `defaultVoiceId` (matches the speaker pack's preferred
     voice for that learned language — e.g. Spanish course uses a Spanish
     voice).
   - Model: `eleven_multilingual_v2` (handles every language we support).
   - Text: `card.target` (the word/phrase being taught).
3. Save MP3 to `flipcards/<courseId>/audio/<cardId>.mp3` in Supabase Storage.
4. Stamp the manifest's `audioPath` field.

API key: `ELEVENLABS_KEY` (already in env, used by `lib/conv-ai-ws.ts`).

### 3.2 Cost estimate

ElevenLabs pricing (Creator tier, 2026): **$0.18 / 1000 characters**.

- Avg word length × 500 cards: ~6 chars × 500 = 3000 chars per course
- Cost per course: **~$0.54**
- 18 courses (10 language + 8 build-yourself if we extend it): **~$10 total** for first-pass generation

**One-time cost.** Audio is regenerated only when a card's text changes
(version bump → re-run script for affected ids). Negligible.

### 3.3 Voice selection per course

The course's preferred voice is stored on `CoursePack.meta` as
`defaultVoiceId` (already exists for AI Companion presets). We pick:

| Course | Voice |
|---|---|
| `language-shona` | TBD — sourced when we author Shona pack |
| `language-spanish` | A Spanish-native ElevenLabs voice (e.g. Mateo) |
| `language-japanese` | A Japanese-native ElevenLabs voice |
| ... | ... |

Falls back to George (English) if no native voice is wired — better than
silent, worse than authentic.

---

## 4. Image pipeline

### 4.1 Source

Stock images, sourced via:
- **Primary:** Pexels API (`PEXELS_API_KEY`) — free tier, attribution-free for
  app use. 200 requests/hour limit; 500 cards = ~3 hours throttled.
- **Fallback:** Unsplash API for terms Pexels misses.
- **Manual override:** If both APIs miss (rare for concrete nouns), the author
  records a placeholder note; we fill manually before ship.

### 4.2 Generation script

`scripts/generate-flipcard-images.ts`:

1. For each card without `imagePath`, query Pexels for `card.target` (or
   `card.native` for non-Latin scripts).
2. Pick the top result. Download.
3. Convert to webp (smaller than jpeg, supported on iOS 14+ / Android 4+).
4. Upload to `flipcards/<courseId>/images/<cardId>.webp`.
5. Stamp the manifest's `imagePath`.

### 4.3 Cost

Pexels API: free with attribution requirement satisfied via a single
"Photos by Pexels" link in Profile → About. **$0.**

---

## 5. UI placement

Cards are surfaced under each unit page in the learning flow. Layout:

```
┌─ Unit 3 — Greetings & Introductions ────┐
│  [unit hero / progress bar]              │
│                                          │
│  Lessons (10)                            │
│  ☑ Lesson 1 — Mangwanani                 │
│  ☑ Lesson 2 — Self-introduction          │
│  ...                                     │
│                                          │
│  ─── Flip cards (50) ───                 │
│  [carousel of cards or grid]             │
│  - tap card → flip animation             │
│  - tap audio icon → play ElevenLabs MP3  │
└──────────────────────────────────────────┘
```

The flip-card row appears under the Lessons list, above the Mission
section. If the cards aren't downloaded yet, the row collapses to a single
"Download flip cards · 30 MB" CTA.

### 5.1 Card interactions

- **Tap card** — flip animation (`react-native-flip-card` or a custom
  `Animated.View` rotation). Front shows target + image; back shows native
  + image dimmed.
- **Tap audio icon** — play `audioPath` via expo-av. Auto-plays first time
  the card is opened (one-shot per card per session).
- **Swipe left/right** — next/previous card. Carousel uses `FlatList` with
  `pagingEnabled` and `snapToInterval = cardWidth`.
- **Long-press** — saves to a per-user "favourites" list (stored locally
  via AsyncStorage; no Supabase round-trip). Future iteration.

### 5.2 Locked state

Same gating model as lessons — `entitlements.canAccessLesson` extends to
`canAccessFlipCards(courseId)`. If the user owns the course, they own the
cards. No separate purchase.

---

## 6. Download flow

Flip cards are NOT bundled with the course on first install (lessons are
~500 KB total; cards are 30 MB — order of magnitude bigger). The user opts
in:

1. **Trigger:** First time the user opens a unit page after the course is
   active, a single banner appears at the top: `"Get flip cards for this
   course (30 MB)"` with a Download button.
2. **Download:** Same `installCourse`-style sequential GET pattern from
   `lib/lesson-loader.ts`. New file: `lib/flipcard-loader.ts` mirrors that
   structure.
3. **Cache:** Files written to `<documentDir>/flipcards/<courseId>/...`.
   On uninstall (Profile → Storage), wipe the whole `flipcards/<courseId>`
   directory. The course's `user_packs` ownership row stays.
4. **Per-card lazy load:** If the user skips the bulk download, each card
   that becomes visible falls back to a single-card download. This is
   slow on flaky networks but never blocks the lesson flow.

### 6.1 Manifest sync

`flipcards/<courseId>/manifest.json` ships with the bulk download. We
deliberately don't bundle it in the JS binary — it's another 50 KB × 18
courses = ~1 MB. Pull on first card-section open instead.

---

## 7. Authoring workflow

Per course, one Opus-4.7 agent run:

1. Generate `data/courses/<courseId>/flipcards.ts` — 500 cards covering the
   most common words/phrases in the learned language, grouped by module.
2. Module 1 covers greeting / introduction vocabulary; Module 10 covers
   advanced/edge-case terms. Mirrors the lesson curriculum's progression.
3. Word-list sources: 1000-most-common-words frequency lists (Anki has
   open-source decks for every language we support), filtered to 500 by
   relevance to the lesson curriculum's themes.
4. Author writes the cards with `target`, `native`, `hint?`. `imagePath`
   and `audioPath` are filled by the generation scripts post-author.

Per course: ~2 hours of Claude time + ~10 minutes of script runs +
$0.54 ElevenLabs cost.

---

## 8. Schema additions

### `data/courses/<courseId>/flipcards.ts`

```ts
import type { FlipCard } from '../../../types/flipcards';

export const FLIPCARDS: FlipCard[] = [
  { id: 'm01-c01', module: 1, target: 'mangwanani', native: 'good morning', hint: 'greeting', imagePath: '', audioPath: '' },
  ...
];
```

### `types/flipcards.ts` (new)

```ts
export interface FlipCard { ... }  // (as above)
```

### `lib/flipcard-loader.ts` (new)

Mirrors `lib/lesson-loader.ts`:
- `loadFlipCardManifest(courseId): Promise<FlipCard[]>`
- `installFlipCards(courseId, onProgress?): Promise<InstallProgress>`
- `uninstallFlipCards(courseId): Promise<void>`
- `flipCardDiskBytes(courseId): Promise<number>`

### `lib/manifests.ts`

Add a parallel `getFlipCardManifest(courseId)` once we ship — but reads
from local cache, not the JS bundle.

---

## 9. What this doc does NOT decide

- **Spaced repetition** — we ship a static carousel first; SRS scheduling
  (Anki-style) is a phase-2 add. Cards already have the schema for it
  (`module` is the difficulty proxy).
- **User-authored cards** — long-press to add a custom word from a lesson
  is in the future-iterations bucket. v1 ships only authored cards.
- **Image attribution UX** — Pexels link in Profile → About is the
  minimum viable; a per-card credit overlay is phase 2.
- **Travel-pack flip cards** — when Travel packs ship, they get their own
  flipcard set (e.g. "Zimbabwe 200 cards" focused on travel-specific
  vocab). Same schema; different `courseId` / `packId`.

---

## 10. Implementation order (when we get to it)

1. **Schema + types** (`types/flipcards.ts`, `data/courses/.../flipcards.ts` for one course as proof) — ~30 min
2. **Author one course's 500 cards** (Opus agent) — ~2 hr
3. **Audio generation script** + run for that course — ~30 min code + ~10 min run
4. **Image generation script** + run for that course — ~30 min code + ~3 hr throttled run
5. **Storage upload script** — ~30 min
6. **`lib/flipcard-loader.ts`** — ~1 hr
7. **UI — carousel under unit page** — ~3-4 hr
8. **Download banner + install flow integration** — ~2 hr
9. **Test on phone** — ~1 hr
10. **Roll out to remaining 17 courses** — automated authoring pipeline ~$10 + ~36 hr Opus time

Total estimate to ship one course end-to-end: **~2 days of focused work.**
Rolling out to all 18: **~3 weeks of authoring + scripts running in
background.**

---

## 11. Open questions

- **Is there a free OSS frequency-list source we trust for every language we
  ship?** Need to validate Hindi, Tagalog, Korean before committing.
- **ElevenLabs voice availability** — we know we have voices for English,
  Spanish, French, Japanese. Need to check Shona, Hindi, Tagalog explicitly.
  If absent, fall back to multilingual voice with native pronunciation.
- **iOS audio session category** — need to confirm `expo-av`'s default
  doesn't conflict with the AI Companion's `expo-two-way-audio` session.
  Likely needs `Audio.setAudioModeAsync` toggle when entering/leaving the
  flip-card view.
- **Images for abstract concepts** (e.g. "dignity", "vocation" — appear in
  Build Yourself course flip-cards if we extend there) — Pexels won't have
  good matches. Decide: skip image, use generic icon, or commission a
  small illustration set.
