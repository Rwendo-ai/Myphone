# ElevenLabs — Rwendo Voice Stack

Last researched: 2026-05-03

## Purpose

ElevenLabs powers the voice surface of Rwendo:

- **Rwen's spoken voice** — TTS for every spoken response, lesson pronunciations, and avatar dialogue
- **Real-time companion conversation** — full-duplex voice chat (target via ElevenAgents Conversational AI; currently broken — see below)
- **Speech-to-Text (Scribe)** — transcribes the user's microphone audio for the turn-based fallback path and for short voice notes
- **Lipsync timing** — character-level timestamps from the with-timestamps TTS endpoint, intended to drive avatar mouth shapes
- **Voice cloning at the Soul tier** — Professional Voice Clone (PVC) so users can create their own AI companion voice (Creator+ ElevenLabs plan required for PVC)

## Current state of integration in Rwendo (as of 2026-05-03)

| Piece | Status | Notes |
|---|---|---|
| TTS (batch) | Works | Used for pre-generated dictionary / lesson audio. `eleven_multilingual_v2` for native-speaker reference, `eleven_flash_v2_5` for Rwen lines. |
| TTS (streaming) | Works | `/v1/text-to-speech/{voice_id}/stream`, used in turn-based companion mode. |
| Scribe STT | Works | `/v1/speech-to-text` (multipart), model `scribe_v2`. Drives the turn-based loop's transcribe step. |
| Real-time Conv AI (`@elevenlabs/react-native`) | **BROKEN** | See "Critical issue" below. The package installs but the LiveKit handshake fails on connect. |
| Lipsync timestamps | Not yet wired | Endpoint exists (`/v1/text-to-speech/{voice_id}/with-timestamps`) but we haven't routed it into the avatar yet. |
| Voice cloning (PVC for Soul tier) | Not yet wired | Endpoint exists; gated behind ElevenLabs Creator+ plan. |

### Known issues with our current `@elevenlabs/react-native@1.1.4` install

We are on the **latest stable** version on npm (published 2026-04-29). The breakage is not a stale-version problem — it is a known, currently-shipping defect in the SDK plus a server-side LiveKit version mismatch.

1. **Browser-globals leak in `@elevenlabs/client@1.4.0`.** `@elevenlabs/react-native@1.1.4` depends on `@elevenlabs/client@1.4.0` (transitively, via `@elevenlabs/react@1.3.0`). The client's WebRTC `TrackSubscribed` handler (`WebRTCConnection.ts` lines 355-401) calls `document.createElement('audio')`, `document.body.appendChild`, `AudioContext`, and `AudioWorkletNode` — none of which exist in React Native. This is tracked as **issue #641 (open)** in `elevenlabs/packages` ("WebRTC TrackSubscribed handler uses web-only DOM APIs"). The proposed fix from the reporter: "Guard the DOM-specific code in the TrackSubscribed handler … relying on LiveKit's native audio playback instead." That fix has not landed.

2. **LiveKit "v1 RTC path not found" + 502.** Our logs show:
   ```
   Initial connection failed: v1 RTC path not found.
   Consider upgrading your LiveKit server version – Retrying
   ```
   followed by 502 Bad Gateway from `wss://livekit.rtc.elevenlabs.io/rtc?...&sdk=reactnative&version=2.18.7&protocol=16`.
   This is **issue #515** in `elevenlabs/packages` ("conversation.status not updating to connected state"), which was **closed as not planned** with a note that it would be addressed by a Q1-2026 React Native SDK re-architecture. Other users hit it through Apr 2026 (#676 "WebRTC connection fails: could not establish pc connection", closed Apr 14).

3. **Peer-dep version split.**
   - `@elevenlabs/react-native@1.1.4` peer-deps `@livekit/react-native-webrtc@^137.0.2` and `@livekit/react-native@^2.9.2`.
   - But the **latest** `@livekit/react-native@2.10.2` peer-deps `@livekit/react-native-webrtc@^144.0.0`.
   - We installed both at `--legacy-peer-deps` to satisfy ElevenLabs's pinned `137.x`. The LiveKit server speaks a newer protocol than our client, hence the v1-RTC-path error.

4. **WebSocket fallback also broken on RN.** Per **issue #605** (open, 2026-03-19): "When starting a voice (non-text-only) conversation over WebSocket in React Native, the connection disconnects immediately." Maintainer comment confirms: "Use WebRTC voice conversations instead of WebSocket until this is resolved." So the ElevenLabs JS SDK's WebSocket-voice path is **not** a viable workaround on React Native today — only text-only WebSocket conversations work.

## Product surface (current as of research date)

ElevenLabs has reorganised its docs and now markets three product clusters:

- **ElevenAgents** — real-time conversational AI (formerly "Conversational AI")
- **ElevenCreative** — voices, voice cloning, dubbing, sound effects, music
- **ElevenAPI** — TTS, STT (Scribe), streaming endpoints

The product previously called "Conversational AI" is now **ElevenAgents**. Doc URLs moved from `/docs/conversational-ai/*` to `/docs/eleven-agents/*` — most of the old links 404.

### 1. ElevenAgents (real-time Conversational AI)

**What it is.** A managed pipeline that bundles:
- Fine-tuned ASR (proprietary, plus Scribe v2 fallback)
- Your choice of LLM (see list below)
- ElevenLabs TTS (Flash v2.5 / Multilingual v2 / v3)
- A proprietary turn-taking model
- Real-time event subscriptions, RAG knowledge bases, tool calling, A/B testing, conversation analytics

**Architecture.** Two transports, with the SDK auto-selecting:
- **WebRTC (LiveKit)** — default for voice. The React Native SDK uses this exclusively in practice (its WebSocket voice path is currently broken — see issue #605).
- **WebSocket** — text-only or signed-URL flows. Also used by some web/mobile integrations and by all telephony connectors. Endpoint: `wss://api.elevenlabs.io/v1/convai/conversation?agent_id={agent_id}`.

**Available SDKs (per docs, May 2026):**
- `@elevenlabs/react-native` — current latest **1.1.4** (published 2026-04-29). RC `1.0.0-rc.1` exists on the `next` tag but is older than `1.1.4`.
- `@elevenlabs/react` — current latest **1.3.0**. Re-exports `@elevenlabs/client`.
- `@elevenlabs/client` — current latest **1.4.0** (browser JS).
- `@elevenlabs/elevenlabs-js` — server-side SDK
- Python SDK (`elevenlabs`)
- iOS SDK (Swift)
- Embed widget: `<elevenlabs-convai agent-id="...">` + `https://unpkg.com/@elevenlabs/convai-widget-embed`

There is **no listed "Android-native" SDK** beyond what the React Native SDK provides via LiveKit.

**React Native install (verbatim from docs):**
```bash
npm install @elevenlabs/react-native @livekit/react-native @livekit/react-native-webrtc livekit-client
```
The doc explicitly says: *"This SDK was designed and built for use with the Expo framework"* and *"cannot be used with Expo Go"* — Expo dev build is mandatory.

**Permissions:**
- iOS `Info.plist`: `NSMicrophoneUsageDescription`
- Android `AndroidManifest.xml`: `<uses-permission android:name="android.permission.RECORD_AUDIO" />`

**Quickstart code (verbatim from docs):**
```tsx
import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
} from '@elevenlabs/react-native'; // re-exports @elevenlabs/react

function App() {
  return (
    <ConversationProvider>
      <Agent />
    </ConversationProvider>
  );
}

function Agent() {
  const { startSession, endSession } = useConversationControls();
  const { status } = useConversationStatus();
  if (status === 'connected') return <Button onPress={endSession} title="End" />;
  return <Button onPress={() => startSession({ agentId: 'agent_xxx' })} title="Start" />;
}
```

Hooks exposed: `useConversation`, `useConversationControls`, `useConversationStatus`, `useConversationMode`, plus `onGuardrailTriggered` callback (added in 0.6.0).

**Authentication options:** `agentId` (public agent), `signedUrl` (private agent — get via `GET https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=...` with `xi-api-key`), or `conversationToken`.

**Dynamic variables (per-user prompt injection):**
- Use `{{var_name}}` in system prompt / first message / tool params
- Pass at session start as `dynamic_variables`
- Built-in `system__*` variables: `system__conversation_id`, `system__time_utc`, `system__caller_id`, ~15 total
- Prefix with `secret__` to skip sending to the LLM provider (header-only use)

**Overrides (per-conversation custom config — must be enabled in dashboard Security tab first):**
```json
{
  "agent": {
    "prompt": { "prompt": "User: Sarah, balance: $5000" },
    "first_message": "Mhoro Sarah!",
    "language": "en"
  },
  "tts": { "voice_id": "<rwen_voice_id>", "stability": 0.7 }
}
```
Override-able fields: system prompt, first message, language, voice_id, TTS stability/speed/similarity_boost, LLM model, text-only mode.

**WebSocket protocol (relevant when not using LiveKit WebRTC):**
- Endpoint: `wss://api.elevenlabs.io/v1/convai/conversation?agent_id={agent_id}`
- Initial client message: `{"type": "conversation_initiation_client_data"}`
- User audio frames: `{"user_audio_chunk": "<base64 PCM>"}`
- Server events: `conversation_initiation_metadata`, `audio` (base64 + alignment), `user_transcript`, `agent_response`, `agent_response_correction`, `agent_response_metadata`, `agent_chat_response_part` (streaming text deltas: start/delta/stop), `agent_response_complete`, `client_tool_call`, `agent_tool_response`, `vad_score` (0-1), `mcp_tool_call` (states: loading/awaiting_approval/success/failure), `interruption`, `ping`, `guardrail_triggered`
- Client → server: `pong`, `client_tool_result`
- Audio sample rate / encoding details are **not stated explicitly in the public docs** (the JS reference uses the `voice-stream` package which "automatically encodes the audio in base64").

**LLM choices (per `/docs/eleven-agents/customization/llm`):**
- OpenAI: GPT-5, GPT-4o, GPT-4o Mini, GPT-4.1, GPT-4 Turbo, GPT-3.5 Turbo
- Anthropic: Claude Sonnet 4.5, Claude Sonnet 4, Claude Haiku 4.5, Claude 3.5 Sonnet, Claude 3 Haiku
- Google: Gemini 3 Pro Preview, Gemini 2.5 Flash, Gemini 2.0 Flash variants
- ElevenLabs-hosted: GLM-4.5-Air, Qwen3-30B-A3B, GPT-OSS-120B
- Custom LLM (your own OpenAI-compatible endpoint)

LLM tokens are billed pass-through ("typically denoted in USD per 1 million tokens unless specified otherwise"); fees show in the dashboard and deduct from ElevenLabs credits.

**ElevenAgents pricing (from `https://elevenlabs.io/pricing/agents`, all tiers):**
| Item | Cost |
|---|---|
| Standard call | **$0.080 / minute** |
| Additional call (over included minutes) | $0.080 / minute |
| Burst (over concurrency limit) | $0.160 / minute |
| Text message | $0.003 / message |
| LLM tokens | At cost (varies by model) |
| Telephony provider | At cost |

### 2. Text-to-Speech

**Convert (non-streaming):**
```
POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}
Headers: Content-Type: application/json, xi-api-key: <key>
Body: {
  "text": "...",
  "model_id": "eleven_multilingual_v2",
  "voice_settings": { "stability": 0.5, "similarity_boost": 0.75 }
}
Query: ?output_format=mp3_44100_128
Response: binary audio
```

**Stream:**
```
POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream
Query: ?output_format=mp3_44100_128&optimize_streaming_latency=0..4&enable_logging=true
Body: { "text", "model_id", "voice_settings", "language_code" (ISO-639-1) }
Response: text/event-stream
```

**With timestamps (for lipsync):**
```
POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/with-timestamps
Body: { "text", "model_id"?, "voice_settings"?, "language_code"?, "apply_text_normalization"? }
Response: {
  "audio_base64": "...",
  "alignment": {
    "characters": ["H","i",...],
    "character_start_times_seconds": [0.0, 0.07, ...],
    "character_end_times_seconds":   [0.07, 0.13, ...]
  },
  "normalized_alignment": { same shape, on normalized text }
}
```

**Models (current, from `/docs/overview/models`):**
| Model | Languages | Char limit / call | Latency | Notes |
|---|---|---|---|---|
| `eleven_v3` | 70+ | 5,000 (~5 min) | Higher | Highest emotional range; audiobooks, character dialogue |
| `eleven_multilingual_v2` | 29 | 10,000 (~10 min) | Mid | Most stable for long form |
| `eleven_flash_v2_5` | 32 | 40,000 (~40 min) | **~75 ms** | Cheapest. **50% lower price/char.** Recommended for real-time. |
| `eleven_turbo_v2_5` | 32 | — | Higher than Flash | **Deprecated** — use Flash v2.5. |
| `eleven_turbo_v2` | English | — | — | **Deprecated** — superseded by Flash v2. |

**Voice settings (current shape):** `stability`, `similarity_boost`, `style`, `use_speaker_boost`, plus `speed` (0.7–1.2). Phoneme/IPA pronunciation control: Flash v2 only. Default `stability: 0.5`, `similarity_boost: 0.75`.

**TTS pricing (per pricing page):**
- "1 text character = 1 credit" for standard models
- "Between 0.5 and 1 credit per character" for newer (Flash) models — 50% cheaper
- "Low-latency TTS as low as 5c/minute" (Business tier)
- Effective per-minute audio: ~$0.18/min on Creator, ~$0.17/min on Pro (per pricing page summary)

### 3. Speech-to-Text (Scribe)

```
POST https://api.elevenlabs.io/v1/speech-to-text
Content-Type: multipart/form-data
xi-api-key: <key>
Fields: file (audio/video; max 3.0 GB; min 100ms),
        model_id ("scribe_v2" or "scribe_v1"),
        language_code (ISO-639-1/ISO-639-3, optional — auto-detect if absent),
        diarize, timestamps_granularity, ...
```

**Scribe v2** highlights:
- 90+ languages (vs 29 for legacy `scribe_v1`)
- Word-level timestamps
- Speaker diarization up to 32 speakers
- Entity detection
- Realtime streaming endpoint exists at `/v1/speech-to-text/realtime` but the docs page 404'd at research time — schema not confirmed.

**Pricing.** Public docs do not surface Scribe per-minute pricing as a single number; it is included in the credit pool. To confirm: check the dashboard's pay-as-you-go calculator at `https://elevenlabs.io/app/subscription`.

### 4. Voice library + cloning

- **Library:** 5,000+ public voices, 70+ languages.
- **Instant Voice Clone (IVC):** any tier; near-instant from short samples; less accurate for unusual accents.
- **Professional Voice Clone (PVC):** **Creator+ plan required**. Trains a custom model; takes 3–6 hours.
- For Rwendo Soul tier: PVC is the right tool, gated behind our Creator+ ElevenLabs subscription.

### 5. Timestamps + lipsync

- The with-timestamps endpoint above gives character-level start/end times in seconds — direct mouth-shape input.
- ElevenLabs does **not** expose viseme classes (A/E/I/O/U-style mouth shapes) directly. We map characters → visemes ourselves on-device.
- The ElevenAgents `audio` event also includes alignment data per chunk, so lipsync is feasible during real-time conversation too — once the RN SDK works.
- No separate lipsync charge; included in TTS character count.

### 6. Sound effects, music, dubbing

Available via ElevenCreative. Not currently relevant to Rwendo.

## Recommended path for Rwendo's real-time voice

Given the broken state of `@elevenlabs/react-native`, the maintainers' admission that fixing it requires a "re-architecture" (issue #515, closed not-planned), and the fact that even the WebSocket fallback is broken on RN (#605), we have three honest options:

**Option A — Stay turn-based until ElevenLabs ships the RN re-architecture.** Continue with our working loop: `expo-av` record → Scribe → Claude → ElevenLabs Flash v2.5 stream → `expo-av` playback. Total round-trip ~1.5–2.5 s. Not full-duplex but reliable. Watch `elevenlabs/packages` releases — when a release explicitly closes #641 and #605, re-evaluate.

**Option B — Build our own WebSocket Conv AI client in pure JS.** Skip the LiveKit/WebRTC SDK entirely. Open the WebSocket to `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=...` ourselves, send raw PCM frames as base64 in `user_audio_chunk` messages, render incoming `audio` events through `expo-audio` / `expo-av`. The protocol is documented; the only risk is the "WebSocket voice disconnects immediately on RN" bug (#605) — but that bug is in their JS SDK's MediaDeviceInput layer, NOT in the server protocol. A hand-rolled client that captures with `expo-av`'s recorder and writes base64 frames over a `ws://` socket should sidestep the SDK entirely. Estimate: 1–2 weeks of work; gives us full-duplex without depending on the broken SDK.

**Option C — WebView bridge to the JS SDK.** Embed the working `@elevenlabs/react` SDK inside a hidden `<WebView>` and bridge mic / speaker via `postMessage`. Works because the JS SDK is healthy on web. Audio routing through WebView in RN is fragile and adds latency; not recommended unless A/B both fail.

**Recommendation: pursue A as the launch path, prototype B in parallel.** Ship the turn-based loop, but invest in B so that when it works we own the integration and aren't blocked by ElevenLabs's RN release cadence. Do **not** spend more cycles polyfilling browser globals into `@elevenlabs/client@1.4.x` — the maintainers themselves have flagged the RN port as needing rearchitecture.

## Migration plan from current broken state

1. **Pin and roll forward TTS / STT only.** Keep the working REST endpoints. Move all real-time experiments behind a feature flag (`feature.realtime_voice`).
2. **Remove `@elevenlabs/react-native` from the bundle.** It cannot work today; keeping it loaded just adds risk of polyfill leaks. Replace its usage sites with the turn-based loop.
3. **Stand up the turn-based loop as the default Companion experience.** Optimise: speculative TTS streaming, partial Scribe transcripts, prefetched first phoneme.
4. **Spike Option B (hand-rolled WebSocket Conv AI).** Smallest possible repro: PCM mic capture via `expo-av`, base64 to ElevenLabs WebSocket, base64 audio out to `expo-audio`. If the RN platform accepts raw PCM in/out of a WebSocket cleanly, productionise.
5. **Watch upstream.** Subscribe to `elevenlabs/packages` releases. When `@elevenlabs/react-native` ships a version whose changelog mentions "fixes WebRTC TrackSubscribed in React Native" or "RN re-architecture", re-evaluate Option A → SDK swap.
6. **Wire lipsync.** Add `with_timestamps=true` to TTS calls; map `alignment.characters` → viseme ids → Skia avatar driver. This is independent of the Conv AI fix.

## Pricing summary table

| Feature | Cost | Notes |
|---|---|---|
| ElevenAgents call | **$0.080 / min** | Same on every paid tier |
| ElevenAgents burst | $0.160 / min | When over concurrency limit |
| ElevenAgents text msg | $0.003 / msg | Text-only sessions |
| ElevenAgents LLM tokens | At cost | Varies by selected LLM |
| TTS Flash v2.5 (real-time) | ~0.5 credit/char (50% off standard) | Recommended for Rwen |
| TTS Multilingual v2 | 1 credit/char | Stable for long form |
| TTS effective rate | ~$0.17–0.18 / min | Creator/Pro plans |
| TTS with-timestamps | Same as TTS + standard streaming surcharge | Returns alignment array |
| Scribe v2 STT | Pulled from credit pool | Per-minute number not surfaced publicly |
| Instant Voice Clone (IVC) | Any tier | Free with subscription |
| Professional Voice Clone (PVC) | Creator+ plan required ($11/mo+) | 3–6 h training |
| ElevenLabs subscription tiers | Free 10k credits • Starter $6/30k • Creator $11/121k • Pro $99/600k • Scale $299/1.8M • Business $990/6M | Monthly credit pool |

## Useful links (verified 2026-05-03)

- ElevenAgents overview: https://elevenlabs.io/docs/eleven-agents/overview
- React Native SDK: https://elevenlabs.io/docs/eleven-agents/libraries/react-native
- React SDK: https://elevenlabs.io/docs/eleven-agents/libraries/react
- WebSocket protocol: https://elevenlabs.io/docs/eleven-agents/libraries/web-sockets
- Dynamic variables: https://elevenlabs.io/docs/eleven-agents/customization/personalization/dynamic-variables
- Overrides: https://elevenlabs.io/docs/eleven-agents/customization/personalization/overrides
- Models: https://elevenlabs.io/docs/overview/models
- TTS convert: https://elevenlabs.io/docs/api-reference/text-to-speech/convert
- TTS stream: https://elevenlabs.io/docs/api-reference/text-to-speech/stream
- TTS with-timestamps: https://elevenlabs.io/docs/api-reference/text-to-speech/convert-with-timestamps
- Scribe STT: https://elevenlabs.io/docs/api-reference/speech-to-text/convert
- Voice cloning: https://elevenlabs.io/docs/eleven-creative/voices/voice-cloning
- ElevenAgents pricing: https://elevenlabs.io/pricing/agents
- npm `@elevenlabs/react-native`: https://www.npmjs.com/package/@elevenlabs/react-native
- GitHub repo: https://github.com/elevenlabs/packages
- Issue #641 (DOM APIs in RN): https://github.com/elevenlabs/packages/issues/641
- Issue #605 (WS voice disconnects on RN): https://github.com/elevenlabs/packages/issues/605
- Issue #515 (RTC v1 path / not-planned): https://github.com/elevenlabs/packages/issues/515

## Gotchas (kept from previous version)

- ElevenLabs API key must stay server-side — never in the React Native app
- Generated audio files can be large — compress to MP3 128kbps before storing
- Voice cloning requires consent — voice actor must sign off
- Shona pronunciation: validate with native speaker; use IPA for stubborn words (Flash v2 only supports phoneme tags today)
- Cache common Rwen phrases (greetings, encouragements) — don't regenerate
