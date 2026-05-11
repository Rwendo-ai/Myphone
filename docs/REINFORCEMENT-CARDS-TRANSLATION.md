# Reinforcement Cards — Translation Pipeline

**Status:** Pipeline designed; runtime translation Edge Function pending deploy.
**Source of truth:** English. Cards are authored in English in `data/reinforcement-cards/*.ts` and uploaded as JSON to `course-content/reinforcement-cards/<courseId>/m<NN>.json`.

---

## 1. The problem

Build Yourself reinforcement cards are densely written prose — insights, scripts, prompts. Authoring them per-speaker (10 languages × 8 tracks × eventually 10 modules × ~10 cards = 8,000+ entries) is expensive and slow. The same content needs to land in:

- English (source, always)
- Shona, isiNdebele, French, Mandarin, Tagalog, Hindi, Spanish, Portuguese, Japanese, Korean (10 target speakers)

Per-speaker authoring would also drift over time (rewording an English card means re-authoring 10 translations). Translation needs to flow from one source.

---

## 2. The pipeline

```
                                 ┌────────────────────────────────────┐
[Authoring]                      │ data/reinforcement-cards/*.ts (EN) │
                                 └────────────────┬───────────────────┘
                                                  │ upload-reinforcement-cards.ts
                                                  ▼
                                 ┌────────────────────────────────────┐
[Storage] English source         │ reinforcement-cards/<cid>/mNN.json │
                                 └────────────────┬───────────────────┘
                                                  │
                              Speaker == english? │ Speaker != english?
                                  ┌───────────────┴────────┐
                                  ▼                        ▼
                              load + done            check pre-translated
                                                     mNN.<speakerId>.json
                                                            │
                                                  exists? ──┴── no
                                                            │
                                                            ▼
                                              POST /functions/v1/translate-cards
                                                            │
                                                            ▼
                                              Edge Function calls Claude API
                                                            │
                                              caches result to storage at
                                              reinforcement-cards/<cid>/mNN.<speakerId>.json
                                                            │
                                              also writes row to
                                              lesson_translation_cache table
                                                            │
                                                            ▼
                                              returns translated cards
                                                            │
                                                            ▼
                                              cached on device for next open
```

---

## 3. Why translate at runtime rather than pre-author

**Pro:**
- One English source of truth — easy to edit, version, audit
- New speakers join the platform without an authoring run
- Edits flow to all translations next time a user opens the card
- Cost is small: ~1,000 tokens per card × ~80 cards per track × $0.005/1K tokens = ~$0.40 per (track, language) — and only paid once because results are cached forever
- Translation quality is current (Claude 4.7 understands nuance better than 2019-era MT)

**Con:**
- First load for a new (track, module, language) combo takes ~3-8 sec for the translation to come back. Mitigated by:
  - Background pre-warming popular tracks for the user's speaker language on app boot
  - Showing the English source immediately with a "translating…" badge on top of each card while the speaker version loads

---

## 4. Implementation status

### ✓ Done
- English source-of-truth files in `data/reinforcement-cards/*.ts` (8 tracks, Module 1)
- Upload script `scripts/upload-reinforcement-cards.ts` pushes them to storage
- Loader `lib/reinforcement-card-loader.ts` checks for `mNN.<speakerId>.json` first, falls back to English source
- Display screen `app/cards/[courseId]/[module].tsx` renders any variant from any language
- The `public.lesson_translation_cache` table already exists in Supabase (created in the connections migration; intended for lesson translation but works for cards too)

### ⏳ Pending (next session)
- `supabase/functions/translate-cards/index.ts` — Edge Function:
  - Input: `{ courseId, module, targetSpeakerId }`
  - Reads source from `course-content/reinforcement-cards/<courseId>/m<NN>.json`
  - Checks `lesson_translation_cache` for `(courseId, mNN, speakerId)` row — if present, returns its `translation` field
  - Otherwise calls Claude API with the source array + a translation prompt that:
    - Preserves the JSON structure
    - Translates `title`, `body`, `reflectionQuestion`, `sampleScript`, `moveUnderneath`, `permission`, `tryThis`, `tonightTactic`, `evidencePrompt`, `afterLine`
    - Leaves `id`, `module`, `variant` untouched
    - Keeps tone matched to the variant (insight = contemplative; tip = practical; permission = warm)
  - Writes result to storage at `reinforcement-cards/<courseId>/m<NN>.<speakerId>.json`
  - Writes row to `lesson_translation_cache` for future hits
  - Returns the cards

- Client-side trigger: when `loadReinforcementCards` doesn't find the per-speaker variant and the user isn't an English speaker, it should call the Edge Function to translate (currently it just falls back to English silently)

### Translation prompt template (proposed)

```
You are translating reinforcement-card content from English to {TARGET_LANGUAGE} for
a self-development app. The user is a {TARGET_LANGUAGE} speaker. Translate each
field naturally — not literally. Preserve:

- The same tone (contemplative for "insight" cards, practical for "tip" cards,
  warm and validating for "permission" cards, etc.)
- Cultural calibration: if the English uses an idiom that doesn't translate,
  substitute a {TARGET_LANGUAGE}-natural equivalent that carries the same emotional
  weight, not a literal translation.
- Do NOT translate proper nouns, code-like terms, or IDs.
- Keep brevity. Don't pad. The English source is deliberately tight.

Return ONLY valid JSON, the same shape as the input, with fields translated.
```

---

## 5. Cost model

Per (track, module, target speaker) translation:
- Source ≈ 4-6 KB JSON ≈ 1,500-2,000 input tokens
- Output ≈ similar size ≈ 1,500-2,000 output tokens
- Claude Sonnet 4.6: $3/M input, $15/M output → roughly **$0.04 per translation**
- 8 tracks × 1 module × 10 speakers = 80 translations × $0.04 = **$3.20** to pre-warm everything currently authored
- As Knowing Yourself Module 2-10 ships, that scales linearly: 9 × 10 = 90 more translations = **$3.60 added**

This is *one-time per (track, module, speaker)* — once cached the cost is zero forever. By the time the user platform grows large enough that incremental translation matters, the catalog will be cached.

---

## 6. Lesson body translation (future, same pattern)

The same pipeline extends to full lesson bodies (the 8-phase `LessonData` JSON). The schema is bigger but the approach is identical: English source-of-truth, Claude-translated per speaker on first request, cached.

This is the path for Knowing Yourself Module 2-10 once authored — author once in English, runtime-translate to the user's language. No need to do 10 hand-authored variants per lesson.

---

## 7. Trade-offs we accepted

1. **First-open latency.** A new (track, module, speaker) takes 3-8 sec on first open. Acceptable in a Build Yourself flow where the user is reading reflectively; would be wrong for instant lookup (which is why flipcards are pre-authored per-speaker, not translated).

2. **Quality variance.** Some idioms / cultural calibrations may need human polish. The pipeline writes results to storage, so we can manually edit the JSON after a few users have seen it. No need to re-translate.

3. **No audio.** Reinforcement cards are read, not listened. We don't generate ElevenLabs audio per card. Future: optional audio for the body field via the same lazy-generate pattern.
