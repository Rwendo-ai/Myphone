# Simli Direct Integration (no Pipecat, no Daily.co, no Deepgram)

**Status (2026-05-16):** scaffolded — needs `react-native-webrtc` install + EAS dev-client rebuild.

The chosen path for lipsync. **Keeps ElevenLabs Conv AI as the one and
only voice engine** — Simli is wired in as a side car that takes the
audio Conv AI is already producing and renders a lipsynced face.

The Pipecat / Daily.co / Deepgram scaffold built earlier in this session
remains committed but **is not used** by v1. Treat it as a v2 option
for when we want to drop Conv AI and assemble a cheaper brain.

---

## The picture

```
RN app
│
├─ ElevenLabs Conv AI WebSocket (lib/conv-ai-ws.ts — unchanged)
│      ↓ mic in
│      ↑ PCM audio out  ← we tap this stream
│
└─ NEW: lib/simli-webrtc.ts (SimliConnection)
        ↑ POST /compose/token        — get session_token
        ↑ WS  /compose/webrtc/p2p    — offer/answer signalling
        ↑ WS  binary frames           — PCM Int16 16kHz mono audio
        ↓ WebRTC RTCPeerConnection   — receives video track
        ↓ <RTCView> in LipsyncVideo  — renders the face
```

**One WebRTC connection out to Simli's servers. Conv AI keeps doing its
thing.** Audio Conv AI is playing through the user's speakers is *also*
forwarded to Simli over a WebSocket so Simli can drive the avatar's
mouth.

---

## Why this and not Pipecat

Pipecat is a framework that owns the *whole* voice pipeline — it expects
to do STT, call the LLM, do TTS itself, all internally. There is no
"wrap Conv AI" plugin in Pipecat (it has `ElevenLabsTTSService`, no
Conversational AI bridge). Picking Pipecat meant tearing out Conv AI
and building the brain from parts (Deepgram STT + Claude + EL TTS).
We don't want that. ElevenLabs Conv AI works.

Going direct to Simli is the correct match for the actual product:
- Conv AI stays the source of truth for voice and conversation
- Simli is a pure lipsync renderer fed from Conv AI's output
- No third-party transport service (no Daily.co)
- No additional vendors to sign up for

---

## What you need to install

```bash
# In the repo root, NOT in worker/
npm i react-native-webrtc \
      @config-plugins/react-native-webrtc \
      react-native-get-random-values
```

Then add the config plugin to `app.json`:

```json
{
  "expo": {
    "plugins": [
      "@config-plugins/react-native-webrtc"
    ]
  }
}
```

iOS permissions in `app.json`:
```json
"ios": {
  "infoPlist": {
    "NSMicrophoneUsageDescription": "Used so your companion can hear you.",
    "NSCameraUsageDescription": "Used for video features."
  }
}
```

Android permissions in `app.json`:
```json
"android": {
  "permissions": [
    "RECORD_AUDIO",
    "CAMERA",
    "MODIFY_AUDIO_SETTINGS"
  ]
}
```

Then **rebuild the dev client** — react-native-webrtc is a native
module, OTA can't deliver it:

```bash
eas build --profile development --platform ios
eas build --profile development --platform android
```

---

## Files

| File                                | Status                |
|-------------------------------------|-----------------------|
| `lib/simli-webrtc.ts`              | NEW — connection manager class |
| `hooks/useSimliAvatar.ts`          | NEW — React hook surface       |
| `components/LipsyncVideo.tsx`      | UPDATED — render RTCView when track present |
| `hooks/useConvAISession.ts`        | UPDATED — exposes `onAudioFrame` callback so the Simli hook can listen |
| `app/companion/lipsync-test.tsx`   | UPDATED — uses new useSimliAvatar instead of Pipecat |

---

## Simli WebRTC protocol (what we implement)

Sourced from `https://docs.simli.com/api-reference/simli-webrtc`.

1. **POST `https://api.simli.ai/compose/token`** with headers
   `x-simli-api-key` + `Content-Type: application/json` and body:
   ```json
   {
     "faceId":           "<archetype simli_face_id>",
     "handleSilence":    true,
     "maxSessionLength": 600,
     "maxIdleTime":      120
   }
   ```
   Response: `{ "session_token": "..." }`

2. **(Optional) GET `https://api.simli.ai/compose/ice`** with same auth
   header. Returns an array of ICE server configs. Skip for v1 and let
   the default Google STUN handle it.

3. **Open WebSocket** `wss://api.simli.ai/compose/webrtc/p2p?session_token=<token>&enableSFU=false`

4. Client creates `RTCPeerConnection`, adds:
   - `addTransceiver('audio', { direction: 'recvonly' })`
   - `addTransceiver('video', { direction: 'recvonly' })`
   Both `recvonly` — we send audio over the WS binary channel, not the peer connection.

5. Client creates offer, sets local description, sends as JSON:
   ```json
   { "sdp": "...", "type": "offer" }
   ```

6. Server replies with answer:
   ```json
   { "sdp": "...", "type": "answer" }
   ```
   Client sets remote description. Track event fires; we grab the
   video track.

7. **To drive lipsync:** send binary PCM frames over the same WebSocket.
   Format: **PCM Int16, 16 kHz, mono, max 65,536 bytes per chunk
   (6,000 bytes ideal).**

---

## Audio bridge from Conv AI to Simli

ElevenLabs Conv AI already emits PCM frames via the `onAudio(pcm)`
callback in `useConvAISession`. We add an `onAudioFrame?: (pcm) => void`
optional handler — when set, every frame Conv AI plays through the
speakers is *also* handed to that callback.

`useSimliAvatar` registers itself as the listener and forwards each
frame through the SimliConnection's WebSocket.

**Format assumption:** Conv AI emits 16-bit PCM at 16 kHz mono — the
exact format Simli expects. No resampling needed. If Conv AI's format
ever changes, this is where it'll break. Document and watch.

---

## Tier wiring

The Companion picker / Profile sheet selects a face — its
`archetype.simli_face_id` is what we pass to the Simli session.

The chat screen decides whether to attach Simli at all:
- `tier === 'voice'`           → no Simli (just Conv AI voice)
- `tier === 'lipsync'`         → Simli with archetype face_id
- `tier === 'lipsync_custom'`  → Simli with custom_companions.simli_face_id

Currently we don't have a tier selector in the UI; that ships when
the entitlements/paywall hookup lands. For testing, `app/companion/lipsync-test.tsx`
forces `tier='lipsync'` so you can verify the path end-to-end.

---

## Limitations / known gaps

- **No ICE server fetch.** Defaults to public STUN. Should be fine for
  most networks; if connections fail on enterprise networks, add the
  `/compose/ice` call.
- **No reconnect-on-drop.** If the WS drops mid-session, the user just
  sees the video freeze. Adequate for v1; add reconnect later.
- **Audio bridge is best-effort.** If Conv AI's playback gets buffered
  / drops, the lipsync will lag. Acceptable for the typical chat use
  case; not acceptable for a recording.
- **Free Simli tier still rate-limited.** Sarah's face is on the Hobby
  plan ($1998 credits remaining). At ~$0.40/min we have enough credit
  for ~80 hours of testing. Plan upgrade required before launch.
