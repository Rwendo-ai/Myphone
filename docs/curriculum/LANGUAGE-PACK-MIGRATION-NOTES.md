# Language-Pack Migration Notes

This doc records the conventions and decisions used when migrating the
existing 100-lesson Shona-English curriculum into the new language-pack
architecture (`data/language-packs/`).

## 1. Concept-key naming conventions

Every chunk in every existing lesson maps to a stable, language-agnostic
**concept_key**. These keys are the contract between language packs:
filling a new pack means populating values for the same set of keys that
every other pack already populates.

Conventions used:

- `lower_snake_case`, ASCII only, no diacritics or punctuation.
- **Semantic, not phonetic**. `morning_greeting`, not `mangwanani`.
- **English-anchored gloss**. The literal English meaning is the canonical
  cross-pack identifier, even when the same concept lives in 5 languages.
- **Politeness register encoded in the key when it changes the word**.
  e.g. `morning_wellness_question_respect` (Mamuka sei?) vs
  `morning_wellness_question_casual` (Wamuka sei?). When the same key
  could yield two different forms in the same language, splitting the
  key keeps each pack's entry single-valued.
- **Module-namespaced keys for grammar lessons that don't translate
  slot-for-slot**. e.g. `m04l01_pair_a` for the Shona Mu/Va noun-class
  vs English a/an article lessons. These slots still receive a chunk in
  every pack, but each pack supplies whichever local example illustrates
  the lesson's grammatical point. The concept_key here is "an
  illustrative pair for lesson X", not a universal semantic concept.
- **Module-shared keys for verbs that are universal** (e.g. `i_went`,
  `i_will_go`, `question_what`). These are reused across packs because
  every language has a way to express them.

In total **211 concept_keys** exist across the 100 lessons, split:

- ~150 universal semantic concepts (greetings, family, food, emotions,
  travel, numbers, time, money, action verbs, identity, hospitality).
- ~60 module-namespaced grammar slots (M04 noun-class/articles ×9,
  M08 auxiliary-verb pairs ×7) — each pack fills these with locally
  appropriate illustrations.

## 2. Ambiguous mappings & how they were resolved

A handful of chunks were not 1:1 across the two existing curriculum
directions. Decisions:

- **`farewell_stay_well` (Sara zvakanaka) vs English `Goodbye`**: Shona
  encodes who-stays/who-leaves in two distinct words; English does not.
  The concept_key uses `farewell_stay_well` for the leaver-says variant
  and `farewell_go_well` for the stayer-says variant. The English pack
  fills both slots — `farewell_stay_well` → "Goodbye", `farewell_go_well`
  → "Take care" — collapsing them into the closest English idioms but
  preserving distinct slots so a third language with a who-leaves marker
  (e.g. Japanese) can still slot in cleanly.
- **`paternal_uncle_older` / `_younger` etc.**: Shona has separate words
  (Babamukuru / Babamunini); English has one word ("uncle"). The English
  pack repeats the same English word with a literal-gloss disambiguator
  ("Uncle (paternal, older)"), preserving the slot. Asymmetric; English
  loses information here intentionally.
- **`peanut_butter_sauce` (dovi)**: No clean English equivalent. Pack
  uses "peanut butter" with a literal note; this is an instance where
  the cultural note in the Shona pack does the heavy lifting and the
  English-pack chunk is just a passable approximation.
- **`m04l*` and `m08l*` namespaced slots**: Where the underlying lessons
  are about distinct grammatical systems (Shona noun classes vs English
  articles), no cross-language semantic concept exists. We use
  module-namespaced keys + per-pack-meaningful examples. This is the
  cleanest available compromise without inventing concepts that exist
  only in one language.
- **`i_have_a_student` literal**: The original Shona chunk was
  `Ndiri murwi weshoko` (a student "of the word" — a Tendai/Mwari
  inflection). In English we used the more common "I'm a student".
  Concept key remains `i_am_a_student`. Some literary nuance is lost.

## 3. Same concept, different cultural framing

The whole point of the architecture: the **concept_keys** are shared,
but the **cultural notes** in each pack describe the target language's
culture, not a translation of any other pack's notes.

Worked example, `m01-l01` (concept_keys: `morning_greeting`,
`morning_wellness_question_respect`, `morning_wellness_response`):

- **Shona pack** `lesson_context['m01-l01']`:
  - title: "Mangwanani — Greetings in Shona"
  - cultural_note: explains tsika, the wellness-check obligation,
    Ndamuka mushe, the social weight of skipping a greeting.
- **English pack** `lesson_context['m01-l01']`:
  - title: "Hello — Your First English Greetings"
  - cultural_note: explains how English greetings encode closeness via
    tone rather than separate forms; contrasts with Shona's tsika and
    Japanese's formality tiers.

Both lessons use the **same skeleton** (same phase order, same concept
slots), and both compose into a renderable lesson when paired with the
opposite pack as `native_pack`. An English-speaker learning Shona sees
Mangwanani on the target side, "Good morning" on the native side, and a
note about Shona tsika. A Shona-speaker learning English sees "Good
morning" on the target side, Mangwanani on the native side, and a note
about English-speaking culture's softer greeting registers.

## 4. What's still missing for French / Chinese / Tagalog

To extend to these three packs (the next ~3 PRs), each needs:

1. **`concepts: Record<concept_key, ConceptEntry>`** — every one of
   the ~211 concept_keys filled with that language's word, literal
   English gloss, language-appropriate phonetic guide (pinyin+tone
   for Mandarin, IPA-ish for French, Tagalog phonetic), emoji, and
   `audio_ref: null` until ElevenLabs IDs are recorded.
2. **`lesson_context: Record<lesson_id, LessonContextEntry>`** for all
   100 positions — title, hook, and cultural_note in **English source**.
   Each pack's cultural_notes describe THAT language's culture
   (French-speaking world, Mandarin-speaking world, Tagalog/Filipino
   world). They are **not translations** of the Shona or English notes.
3. **`ui_strings`** — about 9 keys for navigation chrome, translated
   into the language's own form for use when that language is the user's
   native UI language.
4. **`metadata.voices`** — ElevenLabs voice IDs that work for the
   language. French and Chinese have native ElevenLabs voices; Tagalog
   may need to share the multilingual George/Alice voices we use for
   Shona until a custom voice is commissioned.
5. **`metadata.greetings`** — three time-of-day greetings in the new
   language for the Rwen onboarding screen (`Bonjour` / `Bon après-midi`
   / `Bonsoir`, etc.).

The grammar-pivot lessons (M04 articles vs noun classes, M08 auxiliary
vs verb conjugation) need extra thought per language: for French the
M04 module would teach articles (parallel to English); for Mandarin
there are no articles or noun classes, so the M04 slots may end up
filled with classifier examples (个/zhi/etc.); for Tagalog the M04
slots could showcase ng-marker grammar. Each pack author decides what
illustrative examples to put in `m04l01_pair_a`...`pair_c` etc. The
universal slots (`i_went`, `i_will_go`, `question_what` etc.) work
naturally for all four target languages.

## 5. Files of record

- `data/language-packs/types.ts` — type contract (frozen)
- `data/language-packs/skeletons.ts` — 100 LessonSkeleton entries
- `data/language-packs/english/index.ts` — English pack (211 concepts,
  100 lesson_contexts, 9 ui_strings, voice metadata)
- `data/language-packs/shona/index.ts` — Shona pack (same shape)
- `supabase/migrations/seed_language_packs_and_skeletons.sql` —
  generated seed (re-runnable; idempotent UPSERT)
- `scripts/generate-seed-sql.ts` — generator (run after pack edits)
