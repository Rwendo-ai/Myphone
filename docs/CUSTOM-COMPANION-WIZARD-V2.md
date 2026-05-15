# Custom Companion Wizard v2 — Spec

**Status (2026-05-16):** spec, no implementation yet.
**Supersedes:** the lightweight wizard at `app/build-companion.tsx` (which stays as the *quick* path during v1).
**Cost to user:** $39.99 one-time → unlimited use of one bespoke companion.

This spec captures the design Bowen described in the 2026-05-16
session. Build this AFTER the customization layer (free preset
rename/face/voice swap) is shipping.

---

## What the user gets for $39.99

- A bespoke companion with **their** chosen name, face, voice, personality and soul
- **10 portrait images** of the same character in different scenes (for use in chat header, profile, sharing)
- **3 idling videos** of the character (for the ambient face backdrop + chat header video)
- Voice that matches the description they gave us (or one they picked from ElevenLabs library)
- Permanent ownership — they can edit the look/voice later but no further generations beyond their quota
- 2 "format adjustments" (re-roll the images) included before the asset set is locked

---

## Flow (8 steps)

```
1. Build Custom CTA          (entry from Companions tab + onboarding)
        ↓
2. Quick Pay $39.99           (inline RevenueCat; stays on the build screen — no nav away)
        ↓
3. Name                       (single text field; 2-32 chars, no profanity check)
        ↓
4. Voice                      (5 ElevenLabs candidates + paragraph refine + audio preview)
        ↓
5. Look                       (dropdown attributes + paragraph + optional photo upload)
        ↓
6. Image gen (×5)             (fal.ai Flux pipeline; pick favourite; 2 re-rolls allowed)
        ↓
7. Soul + Personality + Prompt (3 paragraphs that compose the system prompt)
        ↓
8. Animate + Confirm          (Kling video gen; reveal final character; save)
```

### 1. Entry / paywall

CTA "Build your custom companion · $39.99" shows up in two places:
- The Companion picker sheet (the new dropdown on the chat header)
- The Companions tab grid (alongside the preset cards)

Tapping it opens the wizard. The first action is the paywall — but
**critically**: the paywall renders *inline* in the wizard screen, not
as a modal that pushes the user away. RevenueCat's
`react-native-purchases-ui` paywall can render embedded — use that
mode. If the purchase fails or is cancelled, the wizard backs out.
If it succeeds, the wizard advances to step 3.

`custom_companions` row is created with `status = 'pending_paid'` at
step 1. RevenueCat webhook flips it to `paid` on success (the existing
`revenuecat-webhook` Edge Function handles this — `companion_build`
product → `markMostRecentDraftPaid` helper).

### 2. Name

Plain text input. Validation:
- 2 to 32 characters
- No profanity (run through `lib/profanity.ts` — exists)
- Not "Rwen" (reserved)

Save to `custom_companions.name` immediately on blur.

### 3. Voice — 5 candidates + paragraph + preview

Layout:
- Title: "How do they sound?"
- Subtitle: "Describe their voice in a sentence. We'll suggest 5 voices."
- Paragraph text input (placeholder: "warm, calm, slight British accent")
- Below the input: 5 voice cards (audio preview button + name + vibe tag)
- The user can:
  - Tap a card → that voice gets selected
  - Edit the paragraph → "Refresh suggestions" button → calls a function that maps the description to the 5 closest voices in `VOICE_LIBRARY`
- Mandatory selection before "Next"

Backend: a single Edge Function `voice-suggest`:
- Input: paragraph
- Calls Claude with a prompt like "Given this voice description, pick the 5 most matching voices from our library: [...VOICE_LIBRARY array]. Return an array of voice IDs."
- Returns `{ voice_ids: string[] }`

Audio preview: ElevenLabs's voice library exposes preview MP3 URLs on
each voice. Add `previewUrl` to `VoiceOption` and stream on tap.

Saves `custom_companions.voice_id` immediately on selection.

### 4. Look — attribute dropdowns + paragraph + optional photo

Two-column form layout (single column on small screens):

| Attribute        | Dropdown options                                                        |
|------------------|-------------------------------------------------------------------------|
| Hair             | short / medium / long / shoulder / shaved / curly / wavy / straight     |
| Eyes             | blue / brown / green / hazel / grey / amber / dark / unusual            |
| Mouth            | full lips / thin lips / neutral / soft smile / serious                  |
| Skin colour      | very fair / fair / olive / tan / brown / dark / very dark               |
| Fullness         | slim / lean / athletic / soft / curvy / chubby                          |
| Appearance       | minimalist / put-together / striking / bookish / artistic / outdoorsy   |
| Chin             | rounded / defined / strong / soft / pointed                             |
| Eyebrows         | thick / arched / soft / straight / minimal                              |
| Ears             | small / medium / pierced / hidden by hair / prominent                   |

Plus:
- A long-form paragraph: "Tell us anything else about how they should look"
- Optional photo upload (existing `pickAndUploadCompanionPhoto` from `lib/companion-photo.ts`)

**If a photo is uploaded:** the dropdowns are dimmed and step 5 (image
gen) is replaced by a "We'll use your photo as the starting point"
confirmation. The 10-image generation in step 5 still happens, but the
prompt is conditioned on the uploaded photo.

Saves all attributes to `custom_companions.appearance_attrs` (jsonb).

### 5. Image generation (5 candidates, 2 re-rolls allowed)

Backend: extend `scripts/generate-archetype-assets.ts` into a callable
Edge Function `companion-image-generate`:
- Input: `{ custom_companion_id, batch_seed?: string }`
- Reads name + appearance_attrs + optional uploaded photo
- Builds a Flux prompt using the same template as the human archetypes
- Calls fal.ai Flux 1.1 Pro 5 times (different seeds)
- Uploads all 5 to `companion-assets/custom/<custom_companion_id>/preview_<n>.jpg`
- Returns 5 URLs

Wizard UI:
- 5-up grid of preview cards
- Tap to expand any card to fullscreen
- "Choose this one" CTA on each
- "Try different versions" button → triggers another batch (counter: "You have 2 re-rolls left", then "1 left", then disabled)
- After the user picks: lock the selection, write `custom_companions.avatar_image_url`

### 6. Soul + Personality + Prompt

Three paragraph inputs:

1. **Soul** (1 sentence) — "What is the heart of this companion? In one line."
2. **Personality** (paragraph) — "How do they show up in conversation? Warm or stoic? Curious or quiet?"
3. **System prompt** (multi-paragraph, OPTIONAL — advanced users only)

After the user fills these, a helper Edge Function `companion-prompt-compose`:
- Takes name + soul + personality + (optional) user system prompt
- Calls Claude to compose a full system prompt in the same shape as
  the preset templates (with `{{name}}`, `{{learnedLang}}` slots)
- Returns the composed prompt
- User can preview + edit before saving

Saves to `custom_companions.system_prompt`, `.personality_text`, `.soul_text`.

### 7. Animate + reveal (final step)

Backend: `companion-asset-generate-final` Edge Function (or extend the
existing one):

Generates the rest of the asset bundle:
- **9 more portraits** in different scenes (the chosen one is already saved)
  - "in a sunny park", "at home with coffee", "by a window", "outdoors at sunset",
    "reading", "laughing", "at a desk", "in a cosy chair", "with their pet"
- **3 idling videos** via Kling 1.6 image-to-video (6s each, looping)
  - Idle 1: breathing + blinking (the default)
  - Idle 2: thinking / looking up (for "thinking" UI state)
  - Idle 3: listening / nodding (for "listening" UI state)
- Optionally trigger Simli face_id generation if user paid for the
  premium lipsync addon

This step takes a few minutes. Show a friendly loading screen:
- "We're bringing [name] to life..."
- Progress bar segments: "Portraits", "Animation", "Voice tuning"
- The wizard does NOT block — let the user use the rest of the app
  while it generates. Push notification on completion.

On completion, the wizard finishes with:
- Reveal screen: full-screen animated avatar, voice greeting plays
- "Meet [name]" headline
- "Take them to your chat" CTA → navigates to companion tab with the
  new companion selected

---

## Schema additions

```sql
alter table public.custom_companions
  add column if not exists appearance_attrs jsonb,
  add column if not exists personality_text text,
  add column if not exists soul_text       text,
  add column if not exists reroll_count    integer not null default 0,
  add column if not exists portrait_urls   text[]    not null default '{}', -- the 10 portraits
  add column if not exists idle_video_urls text[]    not null default '{}'; -- the 3 idle videos
```

---

## Cost to the business per $39.99 build

| Component                | Cost     | Notes |
|--------------------------|----------|-------|
| Voice suggestion (Claude)| ~$0.01   | one prompt |
| Image gen — 5 previews   | ~$0.20   | Flux 1.1 Pro × 5 |
| Re-rolls (up to 2)       | ~$0.40   | only if used |
| Image gen — 9 final      | ~$0.36   | Flux × 9 |
| Video gen — 3 idle       | ~$0.60   | Kling × 3 |
| Simli face id (optional) | $0.50    | one-off Trinity generation |
| Prompt composition       | ~$0.02   | Claude |
| **Total**                | **~$2.09** | excluding storage |

Margin per sale: $39.99 − $2.09 − Apple/Google 30% = **~$25.90**.
The premium tier exists precisely to subsidise the per-minute losses
on the lipsync features.

---

## What's deferred from this spec

- **Multi-character builds** (one user, multiple custom companions) — possible later but for $39.99 each they're each separately purchased
- **Full-body / AR-ready output** — Bowen mentioned wanting full-body, no-background asset for future AR use cases. Skipped in v2 (the 1024×1024 portrait + 6s idle is enough for the chat backdrop). Revisit in a v3 when AR features land.
- **Voice cloning from user upload** — wait until ElevenLabs Voice Design is in our flow OR self-hosted XTTS/Chatterbox is up
- **Re-generation after purchase** — user can edit name/voice but the 10 image / 3 video assets are locked at purchase. If they want a redo, $9.99 add-on (out of scope for now)
