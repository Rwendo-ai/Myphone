# Pipecat Architecture

**Status (2026-05-16):** worker scaffolded, awaiting Daily.co credentials.
**Replaces:** the LiveKit Agents direction we briefly explored (Pipecat
is purpose-built for voice AI companions, easier to self-host on CPU
VPS, and ships first-class Simli + Tavus + HeyGen plugins).

---

## Two products, one architecture

### v1 launch — Ambient face + voice (ships first)

The actual product we launch with:

- Looping 6s face videos already in `companion-assets/archetypes/<id>/idling.mp4`
  play softly behind the chat — the companion is *present*, not summoned
- Voice chat continues using the existing `useConvAISession` hook
  (ElevenLabs Conv AI WebSocket) — no Pipecat needed for v1
- Daily voice ritual: push notification → tap → see Sarah's face,
  hear Sarah's voice message (pre-generated overnight)
- No real-time lipsync — that's a v2 premium feature

This is the launch product. It uses what you already have.

### v2 premium — Real-time lipsync (built in parallel)

When a paying user enables the "Live Sarah" premium tier:

```
 ┌──────────────────┐                       ┌─────────────────────┐
 │  Expo app (RN)   │                       │   Daily.co room     │
 │                  │                       │                     │
 │  @pipecat-ai/    │ ─── audio + video ────│  free tier covers   │
 │  react-native-   │                       │  ~165 hrs/mo        │
 │  daily-transport │                       │                     │
 └──────────────────┘                       └──────────┬──────────┘
                                                       │ same room
                                                       ▼
                                            ┌────────────────────────────┐
                                            │  Pipecat bot (Python)      │
                                            │  on your Contabo VPS       │
                                            │                            │
                                            │    Deepgram STT            │
                                            │    Claude (Anthropic)      │
                                            │    ElevenLabs TTS          │
                                            │    Simli avatar            │
                                            │                            │
                                            └────────────────────────────┘
```

The bot is the brain. For each session it:
1. Joins the user's Daily room
2. Receives audio frames from the user
3. Pipes them through Deepgram → Claude → ElevenLabs → Simli
4. Pushes lipsynced video + audio back into the room
5. The RN client renders the video track

---

## What lives where

| Component                       | Where                                          |
|---------------------------------|------------------------------------------------|
| WebRTC transport (Daily.co SFU) | SaaS, free tier (~165 hrs/mo)                 |
| Pipecat bot (Python container)  | Contabo VPS (CPU only, ~$8/mo you already pay)|
| STT (Deepgram)                  | SaaS (~$0.0043/min)                           |
| LLM (Claude)                    | SaaS (already paying)                         |
| TTS (ElevenLabs)                | SaaS (already paying)                         |
| Avatar (Simli)                  | SaaS (already paying, Sarah deployed)         |
| Looping idle videos             | Supabase Storage (already there)              |
| RN client                       | Your phone                                    |

No GPU required anywhere on your hardware. The VPS just orchestrates
SaaS API calls.

---

## Per-minute cost when a premium lipsync session is active

| Component        | $/min    | Notes |
|------------------|----------|-------|
| VPS              | ~$0.0001 | already paying |
| Daily.co         | $0       | free tier |
| Deepgram STT     | $0.0043  | nova-3 streaming |
| Claude Haiku     | ~$0.02   | typical turn rate |
| ElevenLabs TTS   | $0.10    | bigger chunk |
| Simli avatar     | $0.40    | bigger chunk |
| **Total**        | **~$0.53** | full lipsync session |
| Voice only       | ~$0.13  | drops Simli |

For ambient launch product (looped video + voice):
- Voice only: ~$0.13/min (Claude + ElevenLabs Conv AI)
- Lipsync upgrade: +$0.40/min (Simli)

---

## Pricing reset needed before launch

The current `ai_feature_cost` table values lose money on every lipsync
minute. From [LIPSYNC-INTEGRATION.md](LIPSYNC-INTEGRATION.md):

| Feature        | Today (tokens/min) | Real cost | Suggested launch |
|----------------|--------------------|-----------|------------------|
| lipsync        | 3                  | $0.53/min | 60               |
| lipsync_custom | 5                  | $0.53/min | 60               |
| lipsync_plus   | 10                 | n/a       | n/a (defer)      |

Update via a migration when ready to enable lipsync. Until then,
lipsync remains gated behind premium subscription, not metered.

---

## Build sequence

### Phase 0 — v1 launch (no Pipecat yet)

- [ ] Build `<AmbientFace>` component — full-screen background looping
      video for the active companion
- [ ] Wire into companion tab and chat screen as a backdrop
- [ ] Pre-generate 3-4 more idle variants per archetype via Kling
      (~$16 one-time)
- [ ] Daily voice ritual (push notification + greeting MP3)
- [ ] Ship to TestFlight

### Phase 1 — Pipecat worker (local dev)

- [x] `worker/` directory with Python Pipecat
- [x] `bot.py` — one session pipeline
- [x] `server.py` — HTTP endpoint that spawns bot subprocesses
- [x] `Dockerfile` + `docker-compose.yml`
- [x] Edge Function `pipecat-bot-start`
- [ ] Sign up Daily.co, fill in `.env`
- [ ] `docker compose up --build` — verify it boots
- [ ] Test session from CLI without RN app

### Phase 2 — RN client integration

- [ ] `npm i @pipecat-ai/client-js @pipecat-ai/react-native-daily-transport @daily-co/daily-react @daily-co/react-native-daily-js`
- [ ] EAS dev-client rebuild (new native module)
- [ ] `lib/pipecat-session.ts` — wrapper around RTVI client
- [ ] `hooks/usePipecatSession.ts` — replaces useConvAISession for premium tier
- [ ] `components/LipsyncVideo.tsx` — render the bot's video track via `<DailyVideo>`

### Phase 3 — VPS production deploy

- [ ] Point `bot.rwendo.app` (or chosen subdomain) at the VPS IP
- [ ] Install Docker + Caddy on the VPS
- [ ] `docker compose up -d`
- [ ] Caddy reverse proxy with auto-TLS
- [ ] Set `PIPECAT_BOT_URL` + `BOT_SHARED_SECRET` Supabase secrets

### Phase 4 — End-to-end test

- [ ] Open app on phone
- [ ] Tap "Live Sarah" premium toggle
- [ ] App calls `pipecat-bot-start` → Daily room minted → bot dispatched
- [ ] Sarah's face appears (lipsynced), Sarah's voice replies
- [ ] End session — bot exits cleanly

---

## Open questions for later

- **Bot lifecycle on Windows dev:** `subprocess.Popen` + `start_new_session=True`
  works cross-platform but on Windows the process tree behaves differently
  on crash. Test specifically.
- **Token deduction in real-time:** the bot needs to debit tokens/min
  while running. Either the bot writes to `user_credits` each minute
  via Supabase, or a separate metering cron reconciles after the session
  ends.
- **Transcript persistence:** currently `useConvAISession` writes turns
  to `public.conversations` via `appendConversationTurn`. The Pipecat
  bot should do the same so chat history is unified.
- **Concurrent sessions per VPS:** 1 vCPU + 1GB RAM per session is
  enough since all heavy lifting is in SaaS. VPS 20 (8 vCPU, 24GB)
  can host ~6 concurrent comfortably.

---

## Why Pipecat, not LiveKit Agents

Same conclusion the research came to:

| Dimension                       | Pipecat | LiveKit Agents |
|---------------------------------|---------|----------------|
| Plugin maturity (Simli, Tavus)  | First-class core services | Plugins exist, less central |
| Self-host on small CPU VPS      | Single Python container | Needs 4c/8GB per agent |
| AI companion deployment stories | Built for this           | Built for multi-party SFU |
| RN client                       | `@pipecat-ai/react-native-daily-transport` confirmed working | Mature but tied to LiveKit |
| Service swap (EL → Coqui later) | One line — that's the framework's point | One line, more coupled |

We can always re-export Pipecat sessions over LiveKit later (it has a
LiveKit transport too) if multi-party calls become a feature.

---

## Reference

- [Pipecat repo](https://github.com/pipecat-ai/pipecat)
- [Pipecat Simli integration](https://docs.pipecat.ai/server/services/video/simli)
- [Pipecat services index](https://docs.pipecat.ai/llms.txt)
- [Pipecat RN daily transport](https://www.npmjs.com/package/@pipecat-ai/react-native-daily-transport)
- [Daily.co dashboard](https://dashboard.daily.co)
