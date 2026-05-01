# AI Companion — Plan & Diagnosis

**Author:** session 2026-05-01
**Status:** Phase 0 in progress

---

## What was broken (and why we can't patch it)

The current auto-conversation mode in `app/(tabs)/companion.tsx` runs this DIY loop:

```
User taps 🎙 →
  Rwen greets via ElevenLabs TTS (audio plays through phone speaker) →
    expo-av starts recording →
      Phone speaker output BLEEDS BACK INTO THE MIC (no echo cancellation) →
        OpenAI Whisper transcribes Rwen's own voice as user input →
          Claude is called with garbage input →
            Rwen replies "I don't understand, are you running another app?" →
              Loop
```

**Two compounding bugs:**

1. **No echo cancellation.** `expo-av` doesn't expose the phone's built-in echo-canceller (AEC). Anything Rwen says through the speaker leaks into the mic and gets transcribed as the user's next utterance. This is unfixable in pure JS — needs platform AEC, which requires WebRTC.

2. **Audio session conflict.** `expo-av` (recording) and `expo-audio` (playback) use slightly different audio session APIs. After a recording session, the audio route on Android sometimes stays in record-only mode, so subsequent TTS playback is silent.

Patching either bug individually doesn't help, because the architecture is fundamentally incompatible with proper full-duplex voice on a phone speaker. Both issues vanish the moment we move to WebRTC.

**Action taken:** the auto-conversation toggle (top-right mic button) has been disabled with a friendly placeholder explaining voice mode is being upgraded. Text mode + push-to-talk-to-text (bottom mic) are unaffected and still work.

---

## The replacement: ElevenLabs Conversational AI

ElevenLabs released **Conversational AI** in 2024 as a managed product. It handles everything the DIY loop tried to do, but properly:

- ✅ WebRTC under the hood — phone-native echo cancellation works
- ✅ Server-side voice activity detection (VAD) — no manual silence timers
- ✅ Interruption handling — user can talk over Rwen and he stops gracefully
- ✅ 500ms first-audio latency
- ✅ Connects to Claude / GPT / their own LLMs (we use Claude)
- ✅ React Native SDK exists: `@elevenlabs/react-native`
- ✅ Per-session prompt overrides — the key feature Sonnet missed

### How dynamic context works (the part Sonnet got wrong)

Sonnet's earlier attempt baked Rwen's persona, voice, and prompts into a static ElevenLabs Agent profile. That breaks personalisation — every user gets the same Rwen.

The right pattern: **the agent in ElevenLabs is a SHELL.** You override the system prompt, voice, and first message at session start.

```ts
await conversation.startSession({
  agentId: process.env.EXPO_PUBLIC_ELEVENLABS_AGENT_ID,  // The shell
  overrides: {
    agent: {
      prompt: { prompt: builtSystemPrompt },   // Full personalisation
      firstMessage: builtGreeting,
      language: speaker.isoCode,
    },
    tts: { voiceId: profile.rwen_voice_id },    // User's chosen voice
    // LLM is configured server-side on the agent (Claude Haiku)
  },
});
```

`builtSystemPrompt` is the same prompt builder used by the text chat (`lib/claude.ts → buildSystemPrompt`), now reused for voice. Same brain, different mouth.

### Per-tier UI

| Tier | UI shown when voice mode active |
|---|---|
| Free / Text only | Voice mode locked behind paywall — upgrade CTA |
| Voice (`text_ai+`) | **Orb mode** — full-screen pulsing orb keyed off audio levels, transcripts fade in beneath, ChatGPT-style |
| Soul | Orb mode + Live2D avatar (Phase 5) |
| Premium | 3D rigged or photoreal avatar (Phase 5+) |

---

## Hard requirement: EAS Build (custom dev client)

`@elevenlabs/react-native` requires `react-native-webrtc`, which is **not supported in Expo Go**. We must move to EAS Build before this work can land.

### What needs to happen first

1. Apple Developer account application (you, $99/yr) — kicks off so the approval clock is ticking
2. Google Play Console account ($25 one-time) — fast approval
3. `eas.json` config with `preview` and `production` profiles
4. First EAS dev build — installable on your two phones, replaces Expo Go for development
5. THEN: `npm install @elevenlabs/react-native react-native-webrtc`, build the orb UI, ship

Approximate timeline: 3-5 days from kicking off Apple Dev to a working voice mode.

---

## File-by-file build plan (post-EAS-Build)

### `lib/conversational-ai.ts` (new)
Wraps `@elevenlabs/react-native`'s `useConversation` hook with our session-start logic. Builds the override config from the active companion + user profile + speaker pack. Single entry point: `useRwenConversation()`.

### `lib/companion-prompts.ts` (new)
Extracts and reuses the prompt-building logic from `lib/claude.ts` so text mode and voice mode share the same system prompt + memory + lesson context.

### `app/companion/voice.tsx` (new)
Full-screen orb mode. Pulsing circle keyed off ElevenLabs's audio-level events. Transcript bubbles fade in beneath. Single tap to start, single tap to end. No keyboard.

### `app/(tabs)/companion.tsx` (existing, modified)
Re-enables the top-right mic button. Tapping it routes to `/companion/voice` instead of the broken DIY loop.

### `data/companions/presets.ts` (new)
Five preset companions with full persona definitions:
- **Rwen** — chameleon, Shona-cultural-pride, default
- **Maya** — warm friend, gentle, supportive
- **Tendai** — patient tutor, education-focused
- **Sam** — coach, push you, accountability-focused
- **Lumi** — journaling companion, reflective, asks deep questions

Each: persona prompt, default voice, default avatar, relationship type, free/paid flag.

### `app/companion/builder.tsx` (new — Phase 1)
The 10-question setup interview. Generates a custom persona from user answers, saves to `companions` table.

### `app/companion/settings.tsx` (new — Phase 1)
Settings page for the active companion: change voice, change name, personality sliders (warm/aloof, playful/serious, talkative/laconic). Soul tier: edit `personality.md`/`soul.md` directly.

---

## Database schema (Phase 0 — built tonight)

### `companions` table
One row per (user, companion). Multiple companions per user at higher tiers.

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `user_id` | uuid FK profiles | |
| `preset_id` | text | If based on a preset (rwen/maya/tendai/sam/lumi); null if custom |
| `name` | text | Display name (user can rename) |
| `relationship_type` | text | friend / mentor / tutor / coach / partner |
| `voice_id` | text | ElevenLabs voice ID |
| `avatar_id` | text | Live2D / 3D / photoreal asset ID |
| `system_prompt` | text | Built persona prompt (Soul tier can edit) |
| `personality_md` | text | User-editable personality (Soul tier) |
| `soul_md` | text | User-editable values (Soul tier) |
| `trust_score` | int | 0-100, grows with conversations |
| `is_active` | boolean | Active companion (only one active at a time per user) |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

### `companion_facts` table
The "facts about me" memory store. Auto-extracted by the memory pipeline.

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `user_id` | uuid FK profiles | |
| `companion_id` | uuid FK companions | Which companion learned this |
| `fact_type` | text | fact / plan / emotion / preference / person |
| `content` | text | "User has a dog named Max" |
| `embedding` | vector(1536) | pgvector for semantic recall |
| `confidence` | numeric | 0-1, decays over time unless reinforced |
| `last_reinforced_at` | timestamptz | |
| `created_at` | timestamptz | |

### `companion_summaries` table
Weekly compressed summaries. Distillation of `companion_facts` + conversation tone.

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `user_id` | uuid FK profiles | |
| `companion_id` | uuid FK companions | |
| `week_starting` | date | |
| `summary` | text | "Ben is finishing Module 2 of Shona, has been stressed about work, asked thoughtful questions about pronunciation." |
| `created_at` | timestamptz | |

All three tables get RLS policies + GRANT for the `authenticated` role.

---

## Memory algorithm (Phase 2 — week 3-4)

Three asynchronous passes, all run server-side or as fire-and-forget client jobs:

### 1. Active extraction (after every 5 messages)
```
Input: last 5 user messages
Model: Claude Haiku (cheap, ~$0.001/pass)
Prompt: "Extract any new facts, plans, emotions, preferences, people from these messages. Return JSON array. Skip mundane greetings."
Output: rows inserted into companion_facts
```

### 2. Semantic recall (start of every conversation)
```
On session start:
  1. Embed the last user message + topic words
  2. Vector search companion_facts for top 5 most relevant entries
  3. Inject into system prompt:
     "What you know about [name]:
       - Has a dog named Max (3 weeks ago)
       - Stressed about mum's health (last Sunday)
       - Started learning Shona for upcoming trip (2 weeks ago)"
```

### 3. Weekly compression (Sunday morning)
```
Cron job, runs Sundays:
  1. Fetch all conversations from past 7 days
  2. Fetch all new companion_facts from past 7 days
  3. Sonnet summary call (~$0.05/user/week):
     "Summarise this user's week with their companion in 4-6 sentences. Tone, topics, milestones."
  4. Insert into companion_summaries
  5. Push notification: "Rwen has been thinking about your week. Tap to see."
```

The first session of the new week, Rwen opens with a callback to the summary. **This is the moment that makes users tell their friends about the app.**

---

## Pricing recap (locked 2026-05-01)

| Tier | Monthly | Annual (~17% off) | What it unlocks |
|---|---|---|---|
| Free | $0 | $0 | Rwen the chameleon. 30 messages/day. 7-day memory. Text only. |
| Text Companion | **$9.99** | **$99.99** | Memory works. AI tutor inside lessons. 5 preset companions. |
| Voice Companion | **$14.99** | **$149.99** | + Voice mode (orb UI). 100 voice msgs/mo cap. |
| Soul | **$39.99** | **$399.99** | + Edit personality.md / soul.md. Multiple companions. Lifetime memory. Custom avatars. |

Add-ons (one-time, pure margin):
- $1.99 Live2D avatar build
- $9.99 3D rigged avatar (ReadyPlayerMe-style)
- $24.99 photorealistic avatar (HeyGen-style)
- $14.99 voice clone
- $2.99/mo extra companion slot

Web price = list price above. In-app price = list × 1.5 (to cover Apple/Google's 30% cut + still profit).

---

## Open questions for next session

1. **ElevenLabs subscription tier** — Conversational AI needs Creator ($22/mo) or higher. Confirm before WebRTC SDK install.
2. **Apple Developer account** — has the application started? Needed before iOS EAS build.
3. **Google Play Console** — needed before Android EAS build (or do we go APK-direct first?).
4. **Memory privacy controls** — what does the user want re: data deletion? Suggested default: 30-day delete-on-request, full export, opt-out of memory entirely.
