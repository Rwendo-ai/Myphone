# Pipecat Client Flow

Companion piece to `PIPECAT-ARCHITECTURE.md`. That doc explains *what*
the system is. This one explains *what happens, in order*, when a user
starts a premium-tier session — and how to debug the common failures.

## End-to-end flow when a user starts a premium session

```
┌────────────────────┐      1. user taps Start Session
│  RN client (Expo)  │
│  usePipecatSession │
└──────┬─────────────┘
       │
       │  2. POST /functions/v1/pipecat-bot-start
       │     body:    { tier, companion_id, source }
       │     headers: Authorization: Bearer <user JWT>
       ▼
┌────────────────────────┐
│  Edge Function         │
│  pipecat-bot-start     │
│                        │
│  a. Verify user JWT    │
│  b. POST Daily REST    │  3. create room
│      /v1/rooms         │
│  c. POST Daily REST    │  4. mint user_token (non-owner)
│      /v1/meeting-tokens│     mint bot_token   (owner)
│  d. POST worker /start │  5. tell worker to spawn bot
│     with bot_token     │
└──────┬─────────────────┘
       │
       │  6. response: { room_url, user_token, session_id }
       ▼
┌────────────────────┐
│  RN client         │
│                    │
│  e. Daily          │  7. createCallObject()
│     .createCallObject
│                    │
│  f. daily.join     │  8. join({ url: room_url, token: user_token })
└──────┬─────────────┘
       │
       │     ┌─────────────────────────────────────┐
       │     │ Daily.co Cloud SFU                 │
       │     │ (the room is now multi-party:      │
       │     │  the user + the bot)               │
       │     └─────────────────────────────────────┘
       │                          ▲
       │                          │ (the worker has, in parallel,
       │                          │  spawned bot.py as a subprocess
       │                          │  which uses the bot_token to
       │                          │  join the same room — see
       │                          │  worker/bot.py)
       ▼
┌────────────────────┐
│  RN client events  │
│                    │
│  participant-joined│  → user_name === 'rwendo-bot'
│                    │    grab tracks.video.persistentTrack
│                    │    grab tracks.audio.persistentTrack
│                    │    setState('active')
│                    │
│  track-started     │  → audio   → setAgentSpeaking(true)
│  track-stopped     │  → audio   → setAgentSpeaking(false)
│                    │
│  app-message       │  → optional transcripts pushed by worker
│  transcription-    │
│  message           │  → Daily's built-in transcription (off by
│                    │    default; worker would call startTranscription
│                    │    if/when we enable it from the bot side)
└────────────────────┘
```

The remote video track is then handed to `<LipsyncVideo>` via the
new `remoteVideoTrack` prop, which renders it via Daily's
`<DailyMediaView>`. Audio plays automatically — Daily's RN SDK pipes
remote audio to the default speaker for any participant whose audio
track is subscribed.

## Handoff between Edge Function, worker, and client

| Step                              | Where         | Notes |
|-----------------------------------|---------------|-------|
| Mint room + tokens                | Edge Function | Daily REST. 1h room TTL, eject-on-expire. |
| Spawn bot subprocess              | Worker        | `/start` is fire-and-forget for the Edge Function — it returns once the subprocess is launched. |
| User joins Daily room             | RN client     | Uses **user_token** (non-owner). Audio publish enabled, video publish disabled (we don't show the user's face). |
| Bot joins Daily room              | Worker bot.py | Uses **bot_token** (owner). Audio + video publish enabled when tier ≠ 'voice'. |
| Audio user → bot                  | Daily SFU     | Default subscribe semantics — bot receives user mic, runs through Deepgram → Claude. |
| Audio + video bot → user          | Daily SFU     | Bot publishes ElevenLabs TTS audio (and Simli video frames when tier in lipsync,lipsync_custom). RN client subscribes automatically. |
| Transcript persistence            | Worker        | The Pipecat bot is the only thing with the LLM context — it's responsible for writing turns to `public.conversations`. The client should NOT try to persist transcripts; if it sees them in `app-message`/`transcription-message` it's only for display. |
| Token / minute metering           | Worker        | TODO. The bot needs to debit `user_credits` per minute. Open question in `PIPECAT-ARCHITECTURE.md`. |
| Session teardown                  | Both          | User taps End → `daily.leave()` on client. Bot sees `participant-left`, queues `EndFrame`, exits. Subprocess dies → worker has no resource leak. |

## Troubleshooting matrix

| Symptom                                              | Most likely cause                                                                | What to check |
|------------------------------------------------------|----------------------------------------------------------------------------------|---------------|
| `Daily SDK not installed` from the hook              | dev-client wasn't rebuilt after `npm i`                                          | `eas build --profile development --platform <ios/android>` per `PIPECAT-CLIENT-INSTALL.md` |
| `pipecat-bot-start failed (500): worker unavailable` | Worker not reachable from Supabase                                               | Supabase secret `PIPECAT_BOT_URL` is set + the worker container is running + the tunnel/ingress is up |
| `pipecat-bot-start failed (500): daily not configured` | Daily secrets missing                                                          | Supabase secrets `DAILY_API_KEY` + `DAILY_DOMAIN` |
| `Could not join Daily room`                          | Token expired, room name typo, network                                           | Check `room_url` in the response; both tokens have 1h TTL — restart the session |
| State stuck at `connecting`                          | RN side joined, bot side hasn't                                                  | Check worker logs (`docker compose logs -f`). Most common: `ANTHROPIC_API_KEY` or `ELEVENLABS_API_KEY` missing in worker `.env` |
| **No remote video appears** (audio works)            | `tier === 'voice'` (bot publishes no camera), or Simli call failed in the bot     | Worker log will say `Simli requested but pipecat-ai[simli] not installed`, or `Simli avatar attached face_id=...` — second is the success case |
| **No remote video appears** (audio also missing)     | Bot crashed before joining                                                       | `docker compose logs` — usually a missing API key or a Deepgram model name typo |
| **Audio cuts out mid-reply**                         | App back-grounded without audio background mode                                  | `app.json` has `UIBackgroundModes: ['audio']` — confirm it survived the last EAS build. Also check user didn't switch to silent-mode on iOS |
| **Audio cuts out repeatedly**                        | Daily VAD interrupting too eagerly (bot thinks user is barging in)               | Worker: lower `SileroVADAnalyzer` sensitivity, or set `allow_interruptions=False` in `PipelineParams` temporarily to confirm |
| Transcripts never appear in the test screen          | Worker isn't publishing them via Daily — expected for now                        | This is currently a TODO. The worker writes turns straight to Supabase via the same path text chat uses. The test screen will stay blank until we add `sendAppMessage` calls in `worker/bot.py` |
| Bot voice is too quiet / loud                        | Default device routing                                                            | Test on a real device with hardware buttons; the simulator playback level is not representative |
| `Native module DailyClient could not be found`       | Running in Expo Go (not the dev client)                                          | Always use `expo start --dev-client` after the EAS rebuild |
| Hook never leaves `closing`                          | Daily `destroy()` rejected — usually because join never finished                 | The hook still resets to `idle` after the leave/destroy promise settles. If it hangs, the call object is in an unrecoverable state; reload the app |

## Useful log lines to look for

**Worker / bot side:**

```
Starting bot — tier=lipsync companion=Sarah user=…
User joined: <session_id>
Simli avatar attached face_id=…
Bot session ended cleanly
```

**Edge Function (Supabase Dashboard → Functions → pipecat-bot-start → Logs):**

```
daily room create failed: 401 …          ← bad DAILY_API_KEY
worker /start failed: 502 …              ← worker unreachable
```

**Client (Metro / device logs):**

```
[Daily] joined-meeting room=<room_name>
[Daily] participant-joined session_id=… user_name=rwendo-bot
```

(These last two are emitted by Daily's RN SDK at info level. If you
don't see them, the hook never reached `call.join()`.)
