# Lipsync Integration

**Status (2026-05-14):** scaffolding complete. SDKs + asset library pending.

This document captures what's still needed to take Lipsync from
placeholder to live for users.

---

## The three tiers (per the Google design plan)

| Tier            | Engine     | Asset used                  | Cost to us     | Tokens / min |
| --------------- | ---------- | --------------------------- | -------------- | ------------ |
| Lipsync         | Simli      | High-res JPG (archetype)    | ~$0.40/min     | **3**        |
| Lipsync Plus    | Sync Labs  | 6-second silent MP4 (idling)| ~$0.70/min     | **10**       |
| Lipsync Custom  | Simli      | User-uploaded photo         | ~$0.40/min + 1x Replicate Face ID gen | **5** |

### Pricing reality check

Token rate is 100 tokens = A$1. With Apple/Google taking ~30%:

- **Lipsync**: user pays $0.03/min, cost is $0.40/min → **$0.37/min loss**
- **Lipsync Plus**: user pays $0.10/min, cost is $0.70/min → **$0.60/min loss**

These numbers came from the Google brainstorm; they don't cover the
actual cost. Before any user can run a paid lipsync session for more
than a minute or two, pricing must be adjusted. Suggested launch values:

- `lipsync`: **50 tokens/min** ($0.50/min user-pays)
- `lipsync_plus`: **100 tokens/min** ($1.00/min user-pays)
- `lipsync_custom`: **55 tokens/min** (covers Simli + Face ID amortisation)

Set these by updating the `ai_feature_cost` table.

---

## What's built (this turn)

- ✅ `public.companion_archetypes` table with 10 placeholder rows
  (Aiko, Marcus, Sarah, Yuki, Olu, Lin, Carlos, Aisha, Erik, Priya)
- ✅ `public.custom_companions` extended with `avatar_image_url`,
  `idling_video_url`, `simli_face_id`
- ✅ `companion-assets` Supabase Storage bucket (public read; users can
  write to their own `custom/<uid>/` subpath)
- ✅ `ai_feature_cost` row for `lipsync_custom`
- ✅ `lib/ai-cost.ts` — `AiFeatureKey` updated to include `lipsync_custom`
- ✅ `lib/custom-companions.ts` — `CustomCompanionDraft` extended
- ✅ `lib/companion-photo.ts` — ImagePicker + Supabase Storage upload
- ✅ `components/LipsyncVideo.tsx` — engine-switching placeholder
  component. Renders the static asset, shows "SDK pending" overlay
- ✅ Build wizard avatar step — photo upload added alongside emoji/colour
- ✅ `supabase/functions/lipsync-session-start` — Edge Function stub that
  returns engine + assets + voice_id + tokens/min for a chat session

## What's pending

### 1. Asset library (10 archetype packs)

For each of the 10 archetypes you need:

- **Thumbnail JPG** — square, 256×256, friendly portrait
- **High-res image** — 1024×1024 or higher, used by Simli engine
- **6-second silent MP4** — character blinking + breathing, looped, used
  by Sync Labs engine. ~720p is enough.
- **ElevenLabs voice ID** — voice cloned/picked per archetype. The
  defaults are in `data/companions/presets.ts` for the named companions;
  archetypes need their own voice mapping.
- **System prompt** — persona string. Currently NULL in the seed rows.

**Where they go:**

- Assets upload to Supabase Storage bucket `companion-assets/archetypes/<id>/`
  (e.g. `companion-assets/archetypes/aiko/thumbnail.jpg`,
  `companion-assets/archetypes/aiko/image.jpg`,
  `companion-assets/archetypes/aiko/idling.mp4`)
- Then update `companion_archetypes` rows with the public URLs:

```sql
update public.companion_archetypes set
  thumbnail_url    = 'https://<project>.supabase.co/storage/v1/object/public/companion-assets/archetypes/aiko/thumbnail.jpg',
  image_url        = '... /image.jpg',
  idling_video_url = '... /idling.mp4',
  voice_id         = '<elevenlabs-voice-id>',
  system_prompt    = $$You are Aiko ...$$
  where id = 'aiko';
```

### 2. Simli SDK integration

- Sign up at [simli.com](https://simli.com) → grab API key.
- Set as Supabase secret: `supabase secrets set SIMLI_API_KEY=...`
- Set as client env var if the SDK is client-only: `EXPO_PUBLIC_SIMLI_KEY=...`
- npm install (name TBD by Simli): `npm i @simli/simli-react-native`
- In `components/LipsyncVideo.tsx → LowTierPane`, replace the static
  `<Image>` with the Simli realtime avatar component. Pass:
  - `imageUrl` (archetype) OR `simliFaceId` (custom)
  - `audioStream` from ElevenLabs Conv AI
- Flip the `sdkReady` const to `true`.

### 3. Sync Labs (Sync.so) SDK integration

- Sign up at [sync.so](https://sync.so) → grab API key.
- Set as Supabase secret: `supabase secrets set SYNCLABS_API_KEY=...`
- npm install: package name TBD by Sync.so
- In `components/LipsyncVideo.tsx → HighTierPane`, replace the looped
  `<Video>` with Sync's realtime component. Pass:
  - `videoUrl` (the 6s idling MP4)
  - `audioStream` from ElevenLabs Conv AI
- Flip the `sdkReady` const to `true`.

### 4. Replicate Face ID generation (Custom tier)

For the Lipsync Custom tier, the user uploads a photo. Simli needs a
Face ID generated from that photo before it can drive lipsync.

- Sign up at [replicate.com](https://replicate.com) → grab API token.
- `supabase secrets set REPLICATE_API_TOKEN=...`
- Create a new Edge Function `companion-photo-process`:
  - Input: `{ custom_companion_id, avatar_image_url }`
  - Calls Replicate to generate the Face ID for Simli
  - Writes the returned ID back to `custom_companions.simli_face_id`
- Call this after the build wizard photo upload step (or after purchase
  completes — your call on UX).

### 5. ElevenLabs Conv AI bridge

The audio that drives both Simli and Sync Labs comes from the
ElevenLabs Conversational AI agent (mic input → LLM → voice out, all
in one SDK call). The chat screen already has audio-via-`expo-audio`
playing back text replies; for true real-time lipsync you need to:

1. Migrate the companion chat screen to use the ElevenLabs Conv AI
   websocket (or their `react-native-sdk` if released).
2. Tap the outgoing audio stream and pass a stream/buffer reference
   into `<LipsyncVideo audioStreamRef={...} />`.
3. Simli + Sync Labs both accept an audio stream and produce a video
   stream — they handle the lipsync mathematics internally.

### 6. Realistic launch pricing

Before any user can use lipsync, run a migration to set proper
`ai_feature_cost` values. See the table above.

---

## File map (this turn)

- `lib/ai-cost.ts` — adds `lipsync_custom`
- `lib/custom-companions.ts` — extends draft with photo fields
- `lib/companion-photo.ts` — new file: ImagePicker + Storage upload
- `components/LipsyncVideo.tsx` — new file: engine-switching component
- `app/build-companion.tsx` — avatar step rebuilt with photo option
- `supabase/functions/lipsync-session-start/index.ts` — new function
- Migration `lipsync_v1_scaffolding`

## File map (next sub-turn)

- `components/LipsyncVideo.tsx` — swap in Simli + Sync Labs SDKs
- `supabase/functions/companion-photo-process/index.ts` — Replicate
  Face ID generation
- Chat screen — switch to ElevenLabs Conv AI websocket + pipe audio
  into `<LipsyncVideo>`
- Companion archetype assets — uploaded to Storage by you, URLs
  populated via SQL or admin panel

