# Authoring a New Speaker Pack — Self-Contained Recipe

> **Audience:** an LLM agent that has been handed only this file and the repo, with one task: produce a complete speaker pack for a single language. No other context required.

> **Scope:** one language per agent run. Run the agent N times for N languages.

---

## 1. What a speaker pack is

Rwendo runs on three orthogonal pack types that compose at runtime:

- **Speaker pack** *(this file is about creating one)* — drives every readable byte in the app: UI labels, headings, AI prompts, narration, greetings, voice options, tips. ONE active per user.
- **Course pack** — the curriculum or content the user is learning (Shona, English, AI Companion, Know Yourself, etc.). One or more active.
- **Jurisdiction pack** — country-bound stuff: privacy/terms text, currency, age threshold, crisis lines.

A user is the join: `speaker × courses[] × jurisdiction`.

When a user opens the app in their speaker language, EVERY sentence they read comes from the speaker pack — the home greeting, the lesson chrome, the legal screen banner, the voice dropdown, the AI's persona instructions sent to Claude. The course pack provides target-language vocabulary; the speaker pack provides the explanations and surroundings.

**Adding a new speaker pack unlocks the app for users who speak that language**, regardless of which courses they go on to take. It does NOT add curriculum content for those users to consume — that's per (speaker, course) variant authoring, scoped in `PACK-AUTHORING-COURSE.md`.

## 2. The single input the agent needs

When you start, you should have these 7 facts about the language:

| Field | Example | Notes |
|---|---|---|
| `id` | `french` | Lowercase, no spaces. Stable forever — used as folder name + pack ID. |
| `isoCode` | `fr` | ISO 639-1 (preferred) or 639-3 if no 639-1. |
| `nativeName` | `Français` | Endonym — what the language calls itself. |
| `englishName` | `French` | Exonym — what English speakers call it. |
| `flag` | `🇫🇷` | Emoji flag. Use the country most associated with the language. |
| `direction` | `ltr` | `ltr` or `rtl`. Most languages are `ltr`. |
| `voices` | (researched) | See §5 — at least 2 ElevenLabs voice IDs that speak this language. |

If you don't have all 7, stop and ask. Don't proceed with placeholder values.

## 3. Pre-authoring research checklist

Before writing any files, gather:

1. **Voice IDs.** Visit ElevenLabs voice library. Find voices marked as supporting this language (or that work well via the `eleven_multilingual_v2` model). You need 4 — ideally 2 male + 2 female with different tones. Note the voice IDs (long alphanumeric strings) and the human names.
2. **Time-of-day greetings.** What's the natural short word for "Hello" in the morning, afternoon, evening contexts? Some languages use one greeting all day (e.g. French `Bonjour`); others differentiate (Shona has Mangwanani / Masikati / Manheru). Note: `phrase` form is the longer "Good morning"-style construction; `word` is the shorter / hero-display form.
3. **8 native idioms or proverbs.** For the home tips array (see §6.4 — mirror-not-translate). These should be culturally meaningful sayings in this language.
4. **AI persona text** authored in this language. Don't translate the English persona — author it natively. ~3 short paragraphs total.
5. **Full UI translation, ~250 strings.** See §6.5 for canonical key structure and the `__warnings` review pattern.

Do not start file creation until all 5 are gathered. Authoring without this material produces broken packs.

## 4. Files to create

For language ID `{LANG_ID}` (e.g. `french`), create:

```
data/speakers/{LANG_ID}/
  index.ts
  greetings.ts
  tips.ts
  ai-system-prompt.ts
  locale/
    common.json
    auth.json
    learn.json
    rwen.json
    achievements.json
```

Templates for each file follow.

### 4.1 `data/speakers/{LANG_ID}/index.ts`

```ts
import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const {LANG_ID}: SpeakerPack = {
  id: '{LANG_ID}',
  isoCode: '{ISO_CODE}',
  nativeName: '{NATIVE_NAME}',
  englishName: '{ENGLISH_NAME}',
  flag: '{FLAG_EMOJI}',
  direction: '{ltr|rtl}',
  voices: [
    { id: '{ELEVENLABS_ID_1}', key: 'male_warm',    name: '{VOICE_NAME_1}', description: '{NATIVE_DESCRIPTOR_1}', gender: 'male' },
    { id: '{ELEVENLABS_ID_2}', key: 'male_energy',  name: '{VOICE_NAME_2}', description: '{NATIVE_DESCRIPTOR_2}', gender: 'male' },
    { id: '{ELEVENLABS_ID_3}', key: 'female_warm',  name: '{VOICE_NAME_3}', description: '{NATIVE_DESCRIPTOR_3}', gender: 'female' },
    { id: '{ELEVENLABS_ID_4}', key: 'female_clear', name: '{VOICE_NAME_4}', description: '{NATIVE_DESCRIPTOR_4}', gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default {LANG_ID};
```

The 4 `key` values (`male_warm`, `male_energy`, `female_warm`, `female_clear`) MUST match exactly — they're stable identifiers used across speaker packs. The voice `name` and `description` should be in this speaker's language.

### 4.2 `data/speakers/{LANG_ID}/greetings.ts`

```ts
import { SpeakerPack } from '../../../types/packs';

const greetings: SpeakerPack['greetings'] = {
  morning:   { word: '{NATIVE_SHORT_AM}', phrase: '{NATIVE_LONG_AM}' },
  afternoon: { word: '{NATIVE_SHORT_PM}', phrase: '{NATIVE_LONG_PM}' },
  evening:   { word: '{NATIVE_SHORT_EVE}', phrase: '{NATIVE_LONG_EVE}' },
};

export default greetings;
```

`word` is what shows in the home tab BIG hero text (one word ideally). `phrase` is the longer subtitle form ("Good morning" equivalent).

### 4.3 `data/speakers/{LANG_ID}/tips.ts`

```ts
/**
 * Home-tab "Rwen's tip today" array — {ENGLISH_NAME} speaker pack.
 *
 * MIRROR not translate. Authored from a {ENGLISH_NAME}-speaking learner's POV
 * — the user already speaks {ENGLISH_NAME}, so tips introduce content from
 * the languages they're LEARNING (in their {NATIVE_NAME} chrome).
 *
 * AWAITING NATIVE-SPEAKER REVIEW.
 */
const tips: string[] = [
  "{TIP_1_in_native_chrome_with_target_language_anchor}",
  "{TIP_2}",
  "{TIP_3}",
  "{TIP_4}",
  "{TIP_5}",
  "{TIP_6}",
  "{TIP_7}",
  "{TIP_8}",
];

export default tips;
```

**The mirror-not-translate rule** (critical, easy to get wrong):

The English speaker pack's tips contain English chrome wrapping Shona phrases — pedagogically useful for an English speaker learning Shona. Do NOT translate those English tips into the new language word-for-word, because the embedded Shona phrases would become tautological if the new pack's user is learning Shona too.

Instead, author 8 fresh tips for THIS speaker pack's user. The chrome is in this speaker's language. The anchor phrases (the cultural/pedagogical content) are in whatever language they're learning. Since one speaker pack supports multiple courses, mix anchors across plausible learning targets.

Worked examples:

- English speaker → Shona idiom inside English chrome:
  *"In Shona, 'Ukama igasva hunozadziswa nekudya' — relationships are completed by sharing food."*
- French speaker → Shona idiom inside French chrome:
  *"En shona : « Ukama igasva hunozadziswa nekudya » — les relations se complètent en partageant le repas."*
- French speaker → English idiom inside French chrome (if they're learning English):
  *"En anglais : « It takes a village to raise a child » — c'est tout un village qui élève un enfant."*

Author all 8 tips. Mark them under `__warnings` in the locale JSON for native review.

### 4.4 `data/speakers/{LANG_ID}/ai-system-prompt.ts`

```ts
import { SpeakerAiSystemPrompt } from '../../../types/packs';

/**
 * Claude system prompt template for the {ENGLISH_NAME} speaker pack.
 *
 * Authored in {NATIVE_NAME}. The runtime composes:
 *   persona + user-context-block (see contextTemplate) + guardrails
 *
 * Tokens used in contextTemplate:
 *   {{name}} {{streak}} {{streakDesc}} {{xp}} {{lessonsCompleted}} {{tier}}
 *   {{learnedLang}} {{spokenLang}} {{ability}} {{timePerDay}}
 *   {{reasons}} {{challenges}} {{connection}}
 *   {{toneDesc}} {{listenerDesc}} {{pathContext}} {{lessonContextLine}}
 */
const aiSystemPrompt: SpeakerAiSystemPrompt = {
  persona:
    "{PERSONA_PARAGRAPH_in_native_language}",

  guardrails:
    "{GUARDRAILS_PARAGRAPH_in_native_language_with_response_rules}",

  contextTemplate:
    "{CONTEXT_BLOCK_TEMPLATE_in_native_language_with_double_brace_tokens}",
};

export default aiSystemPrompt;
```

The persona must establish: who Rwen is (a chameleon companion), the cultural pride aspect (Zimbabwean/Shona — yes, even for non-Shona speakers, since Rwen IS culturally Shona; the speaker just reads about Rwen in their language), the language used for replies (this speaker's language).

The guardrails must include: 2-4 sentences max per response, max 1 exclamation per response, no bullet points in casual chat, no "As an AI..." breaks, no shaming mistakes.

The contextTemplate uses `{{name}}` etc. tokens that lib/claude.ts substitutes at runtime. Match the en pattern at `data/speakers/english/ai-system-prompt.ts` — the token list is the same regardless of speaker language.

### 4.5 `data/speakers/{LANG_ID}/locale/*.json`

Five files: `common.json`, `auth.json`, `learn.json`, `rwen.json`, `achievements.json`.

**Canonical structure**: each file MUST have the same keys as the corresponding file in `data/speakers/english/locale/`. Read those English files; they are the source of truth for what keys exist and what shape each value has (string, array, nested object).

**Workflow**:

1. Copy each `data/speakers/english/locale/<file>.json` to `data/speakers/{LANG_ID}/locale/<file>.json`.
2. Translate every leaf string value to {NATIVE_NAME}. Keep keys, structure, plural forms, and `{{placeholders}}` exactly as they appear.
3. Add a top-level `__warnings: [{ "key": "...", "note": "..." }]` array at the start of each file flagging items where a native reviewer should check your decisions. Especially flag:
   - Onboarding consent text (legal precision matters)
   - Mixed-language strings that appear elsewhere (`messages.welcome` in `rwen.json` has `Mhoro` verbatim — does it stay verbatim in this speaker's pack, or should it become this speaker's "Hello"?)
   - Place names — keep canonical spellings (Harare, Zimbabwe)
   - Vendor names (Anthropic, Claude, ElevenLabs, Supabase, RevenueCat) — keep English
4. The `__warnings` array is inert at runtime — i18next never reads it, so it can stay through the review cycle and be removed when verified.

**Mirror-not-translate rule applies to a few specific strings.** Search the en `common.json` for `home.tips` (handled in §4.3 above; this is just a reminder that the JSON's `home.tips` array stays empty / placeholder — actual tips live in `tips.ts`). Also `rwen.messages.welcome` and `rwen.messages.error_generic` mix Shona greetings with English chrome — for any non-English speaker pack, decide whether the Shona greeting stays verbatim (it's Rwen's signature) or flips.

**Validation**: a properly-authored speaker pack has zero key-shape divergence from English. After authoring, this should output nothing:
```bash
node -e "const en=require('./data/speakers/english/locale/common.json'); const x=require('./data/speakers/{LANG_ID}/locale/common.json'); const flat=(o,p='')=>Object.entries(o).flatMap(([k,v])=>typeof v==='object'&&!Array.isArray(v)?flat(v,p+k+'.'):[p+k]); const en_=flat(en).sort(); const x_=flat(x).filter(k=>!k.startsWith('__warnings')).sort(); console.log({missing:en_.filter(k=>!x_.includes(k)),extra:x_.filter(k=>!en_.includes(k))});"
```
Repeat for each of the 5 files.

## 5. Voice ID research

Before authoring, find voice IDs that speak this language well. Sources:

- ElevenLabs voice library at https://elevenlabs.io/voice-library — filter by language
- ElevenLabs "Multilingual v2" model supports any language with any voice, but quality varies by language
- For widely-spoken languages (French, Spanish, Mandarin, etc.), there are native voices available — prefer those
- For under-resourced languages (Shona, Tagalog, etc.), use multilingual v2 with the same English-trained voices and accept mediocre prosody. Plan to add a custom voice clone later (~$1-2k per language for a 30-min recording session)

For each of the 4 voice slots, you need:
- An ElevenLabs voice ID (long alphanumeric, e.g. `JBFqnCBsd6RMkjVDRZzb`)
- A persona name (the voice's character — e.g. George, Charlie). Localise the names if culturally appropriate, or keep the original.
- A short description in this speaker's language (e.g. en: "Warm storyteller" → fr: "Conteur chaleureux")
- gender: 'male' / 'female' / 'neutral'

The keys (`male_warm`, `male_energy`, `female_warm`, `female_clear`) are stable across all speaker packs and do NOT translate. Apps reference voices by key.

## 6. Registry updates

After creating the files, edit two registry files.

### 6.1 `data/speakers/index.ts`

Existing pattern:
```ts
import { SpeakerPack, SpeakerPackId } from '../../types/packs';
import english from './english';
import shona from './shona';

export const SPEAKERS: Record<SpeakerPackId, SpeakerPack> = {
  english,
  shona,
};
```

Add the new speaker:
```ts
import { SpeakerPack, SpeakerPackId } from '../../types/packs';
import english from './english';
import shona from './shona';
import {LANG_ID} from './{LANG_ID}';      // ADD

export const SPEAKERS: Record<SpeakerPackId, SpeakerPack> = {
  english,
  shona,
  {LANG_ID},                              // ADD
};
```

### 6.2 `lib/i18n.ts`

Existing pattern (5 imports + resources entry per speaker):
```ts
import enCommon from '../data/speakers/english/locale/common.json';
import enAuth from '../data/speakers/english/locale/auth.json';
... (5 imports per speaker)

export const SUPPORTED_LANGUAGES = ['en', 'sn'] as const;
const resources = {
  en: { common: enCommon, ... },
  sn: { common: snCommon, ... },
};
```

Add the new speaker:
1. Add 5 imports at the top:
   ```ts
   import xCommon from '../data/speakers/{LANG_ID}/locale/common.json';
   import xAuth from '../data/speakers/{LANG_ID}/locale/auth.json';
   import xLearn from '../data/speakers/{LANG_ID}/locale/learn.json';
   import xRwen from '../data/speakers/{LANG_ID}/locale/rwen.json';
   import xAchievements from '../data/speakers/{LANG_ID}/locale/achievements.json';
   ```
2. Add the ISO code to `SUPPORTED_LANGUAGES`:
   ```ts
   export const SUPPORTED_LANGUAGES = ['en', 'sn', '{ISO_CODE}'] as const;
   ```
3. Add a resources entry keyed by ISO code:
   ```ts
   {ISO_CODE}: {
     common: xCommon,
     auth: xAuth,
     learn: xLearn,
     rwen: xRwen,
     achievements: xAchievements,
   },
   ```
4. Update the `setAppLanguage` mapping to handle the legacy speaker name → ISO code conversion if relevant (e.g. `lang === '{LANG_ID}' ? '{ISO_CODE}' : ...`).

## 7. Database row

Insert into `available_packs` table via Supabase SQL Editor:

```sql
INSERT INTO public.available_packs (id, pack_kind, name, description, is_free, is_active, sort_order)
VALUES (
  'speaker:{LANG_ID}',
  'speaker',
  '{ENGLISH_NAME} speaker pack',
  'UI, AI prompt, greetings, voices, tips authored in {NATIVE_NAME}.',
  true,
  true,
  0
)
ON CONFLICT (id) DO NOTHING;
```

This row is the catalogue entry — it doesn't store pack content (that's in the data/ files). It exists so `user_packs.pack_id` can FK to it.

## 8. Ship it — from authored files to live for users

A drafted pack is just files. Going live for real users is a 4-stage pipeline. This section is the canonical end-to-end recipe — the registry edits in §6 and the SQL insert in §7 are pieces of it.

### 8.1 Where each artifact lives

| Stage | Artifact | Location |
|---|---|---|
| **Authored** | TypeScript + JSON files | `data/speakers/{LANG_ID}/` (in git) |
| **Code-wired** | Pack registered in two registries | `data/speakers/index.ts` (`SPEAKERS` map) AND `lib/i18n.ts` (`SUPPORTED_LANGUAGES` + `resources` map) |
| **Database** | Catalogue row | `available_packs` table — one row, FK target for `user_packs.pack_id` |
| **Bundled** | Compiled into the app binary | `eas build` picks up the pack automatically — speaker packs are bundled in v1 (lazy-load is Phase 2) |
| **Distributed** | Released to users | App Store + Play Store binary release; existing users get it on app update |

### 8.2 The pipeline (in order)

1. **Author + commit** the pack files per §4 of this guide.
2. **Wire the code registries** per §6 — the pack is invisible until both `SPEAKERS` and `lib/i18n.ts` reference it.
3. **`npx tsc --noEmit` clean**, push to main, CI passes.
4. **Run the SQL insert from §7** in the Supabase SQL Editor (project `benocooney@gmail.com`'s Rwendo project). Without this row, anything that tries to FK to `pack_id = 'speaker:{LANG_ID}'` will fail RLS.
5. **Cut a release build** with `eas build` (iOS + Android). The new locale rides the binary.
6. **Distribute** via TestFlight + Play internal-testing first, then production submission. App Store review = 1-7 days; Play Store = same-day to 24h.
7. **Existing users** get the new pack the next time they update the app. They can switch to it from Profile → App Language.

### 8.3 No-OTA constraint (v1)

In v1, speaker packs are **bundled**. There's no over-the-air locale shipping — adding a new speaker pack to existing installs requires a new binary release. This is acceptable because:

- A speaker pack is small (~50KB JSON × 5 files + ~10KB TypeScript). Bundling 20 speakers is still under 1.5MB total.
- Speaker packs change rarely once authored. Hot-fixing typos waits for the next release cycle.
- A locale that fails to render is a broken UX. Bundling avoids the "downloaded a corrupt pack" failure mode.

**Phase 2 trigger**: when the registry hits ~10+ packs OR a single hot-fix is urgent, move to lazy-load via Supabase Storage + AsyncStorage cache. The `lib/i18n.ts` resources map can fetch JSON dynamically without changing call sites.

### 8.4 User discovery — how a real user encounters the new speaker

After the binary release:

- **New users** (signup): the pack appears as an option in the onboarding "Choose your language" step. Required: pack ID is in `SUPPORTED_LANGUAGES` (lib/i18n.ts §6.2) **and** the onboarding screen's option list (`app/(auth)/onboarding.tsx` — search for the speaker-options array). Adding to `SUPPORTED_LANGUAGES` is automatic from §6.2; adding to onboarding options is a separate edit and easy to miss.
- **Existing users**: switch via Profile → App Language. The Profile screen lists every entry in `SUPPORTED_LANGUAGES`, so once §6.2 is done existing users see it. Selecting it persists `profiles.app_language` and re-renders the UI in the new pack.
- **AI replies in the new language**: requires the pack's `aiSystemPrompt.persona` + `guardrails` + `contextTemplate` (§4.4) to be authored in this speaker's language — Claude infers the response language from the system prompt.

### 8.5 What can break in production

- **Pack registered in `SPEAKERS` but missing from `lib/i18n.ts` resources.** User picks the language, sees English fallback (or worse, missing-key warnings). Validate by `i18n.changeLanguage('{ISO_CODE}')` in dev before release.
- **Missing `available_packs` row.** Any code path that writes `user_packs.pack_id = 'speaker:{LANG_ID}'` will hit FK violation. Run the insert.
- **Voice IDs retired.** ElevenLabs voice IDs occasionally get deactivated. If `voice.id` returns 404 from the ElevenLabs API at TTS time, voice playback breaks for that speaker. Mitigation: keep at least one fallback voice across all packs (e.g. George `JBFqnCBsd6RMkjVDRZzb`); hot-fix by replacing the ID and shipping a new build. Phase 2 moves voices to a Supabase row so this can hot-fix without a release.
- **Onboarding picker not updated.** Pack is in `SUPPORTED_LANGUAGES` but onboarding doesn't list it as a choice. New users can't pick it; existing users can via Profile.

## 9. Validation gates

Before declaring done, run all of these:

1. **TypeScript**: `npx tsc --noEmit` exits 0. No new errors.
2. **Locale shape**: each of the 5 locale JSONs has identical key structure to the English equivalents (run the validation snippet from §4.5).
3. **Self-test**: open `data/speakers/{LANG_ID}/index.ts` in an editor — `LANG_ID`, voice IDs, greetings, all populated, no `{PLACEHOLDER}` strings remaining.
4. **i18n test**: in the app, set `i18n.changeLanguage('{ISO_CODE}')` programmatically — every screen renders without "missing translation" warnings.
5. **`__warnings` review**: every locale file's `__warnings` array contains 5-15 items flagged for native review. Empty `__warnings` is suspicious — it usually means the author missed cultural nuance.

## 10. Common mistakes to avoid

- **Translating tips word-for-word from English.** Re-read §4.3 — they MUST mirror, not translate.
- **Leaving the AI system prompt in English.** The persona/guardrails MUST be in this speaker's language. Claude reads it as the system prompt and replies in whatever language it sees most.
- **Adding extra keys to locale JSONs that aren't in the English version.** UI code only reads keys that exist in en — extras are dead. Don't add new namespaces or top-level sections.
- **Forgetting registry updates.** Files alone don't ship — the SPEAKERS map and `lib/i18n.ts` must reference them or they're invisible at runtime.
- **Using English voice descriptions.** The `voice.description` field shows in the Profile → Rwen's Voice picker. Author it in this speaker's language.
- **Skipping `__warnings`.** A pack with no flagged items hasn't been honestly self-reviewed. Plan on flagging at minimum: legal/consent text, mixed-language strings, voice naming choices, formality decisions.

## 11. Boundary — what a speaker pack does NOT contain

Don't put in a speaker pack:

- **Curriculum content** (chunks, lessons, exercises). Those go in `data/courses/<course-id>/{LANG_ID}/curriculum/` — see `PACK-AUTHORING-COURSE.md`.
- **Privacy policy / terms of service text**. That's per-jurisdiction (`data/jurisdictions/<id>/`) — see `PACK-AUTHORING-JURISDICTION.md`.
- **Voice TTS recordings of full lesson dialogue**. Voice clips are generated at runtime by ElevenLabs from the curriculum text. The speaker pack only carries voice IDs, not audio.
- **AI Companion starter cards or Topics**. Those live in `data/courses/ai-companion/{LANG_ID}/` — they're course content for one specific course (AI Companion). Adding a speaker pack does NOT add Companion content; that's a follow-up Phase K task.

## 12. Worked example: minimum French speaker pack

The 7 inputs:
- `id`: `french`
- `isoCode`: `fr`
- `nativeName`: `Français`
- `englishName`: `French`
- `flag`: `🇫🇷`
- `direction`: `ltr`
- voices: 4 multilingual v2 voices that handle French well

`data/speakers/french/index.ts`:
```ts
import { SpeakerPack } from '../../../types/packs';
import greetings from './greetings';
import tips from './tips';
import aiSystemPrompt from './ai-system-prompt';

const french: SpeakerPack = {
  id: 'french',
  isoCode: 'fr',
  nativeName: 'Français',
  englishName: 'French',
  flag: '🇫🇷',
  direction: 'ltr',
  voices: [
    { id: 'JBFqnCBsd6RMkjVDRZzb', key: 'male_warm',    name: 'Georges', description: 'Conteur chaleureux',    gender: 'male' },
    { id: 'IKne3meq5aSn9XLyUdCD', key: 'male_energy',  name: 'Charlie', description: 'Énergique, confiant',   gender: 'male' },
    { id: 'cgSgspJ2msm6clMCkdW9', key: 'female_warm',  name: 'Jessica', description: 'Joueuse, lumineuse',    gender: 'female' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', key: 'female_clear', name: 'Alice',   description: 'Claire, captivante',    gender: 'female' },
  ],
  defaultVoiceKey: 'male_warm',
  greetings,
  tips,
  aiSystemPrompt,
};

export default french;
```

`data/speakers/french/greetings.ts`:
```ts
import { SpeakerPack } from '../../../types/packs';

const greetings: SpeakerPack['greetings'] = {
  morning:   { word: 'Bonjour',  phrase: 'Bonjour' },
  afternoon: { word: 'Bonjour',  phrase: 'Bon après-midi' },
  evening:   { word: 'Bonsoir',  phrase: 'Bonsoir' },
};

export default greetings;
```

(French uses `Bonjour` for morning AND afternoon in casual settings — note this in `__warnings`.)

`data/speakers/french/tips.ts` (sketch — 8 entries authored fresh):
```ts
const tips: string[] = [
  "Tout grand voyage commence par un 'Mhoro'. Tu as déjà fait le premier pas.",
  "En shona : « Ukama igasva hunozadziswa nekudya » — les relations se complètent en partageant le repas. Partage ce que tu apprends aujourd'hui.",
  // ... 6 more
];

export default tips;
```

Then locale JSONs translated, registry updates applied, DB row inserted, `npx tsc --noEmit` clean, `__warnings` flagged. Done — the app now supports French speakers.

## 13. The acceptance criterion

A speaker pack is shippable when:
- All 4 + 5 = 9 files exist in `data/speakers/{LANG_ID}/`
- `SPEAKERS` registry includes it
- `lib/i18n.ts` imports the 5 locale files and registers them under the ISO code
- `available_packs` has a `speaker:{LANG_ID}` row
- `tsc --noEmit` exits 0
- A native speaker has reviewed the `__warnings` items (this gate is human, not agent — flag for review before declaring complete)

The agent declares the pack "drafted" when 1-5 are met. The native review is a separate human step — flag clearly which `__warnings` items need pass-through.
