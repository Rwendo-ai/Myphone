# Rwendo Pipecat Worker

Self-hosted voice + lipsync bot for the Rwendo companion app.
Runs as a single Python container — deploys to your Contabo VPS, or to
any Docker host.

See [../docs/PIPECAT-ARCHITECTURE.md](../docs/PIPECAT-ARCHITECTURE.md)
for the full architecture.

---

## What it does

When a user opens a voice/lipsync chat in the RN app:

```
1. RN client → Edge Function `pipecat-bot-start`
   ("I want to chat with Sarah, lipsync tier")
2. Edge Function:
     - Authenticates the user
     - Mints a Daily room + tokens (one for the user, one for the bot)
     - POSTs this server's /start endpoint with the session config
3. server.py spawns bot.py as a subprocess
4. bot.py joins the same Daily room as the user, runs:
     mic → Deepgram STT → Claude → ElevenLabs TTS → [Simli avatar] → room
5. When the user leaves, bot.py exits cleanly
```

---

## Local development

### 1. Sign up for the SaaS pieces

| Service     | Free tier?                       | URL |
|-------------|----------------------------------|-----|
| Daily.co    | Yes — 10k participant-mins/mo    | https://dashboard.daily.co |
| Deepgram    | Yes — $200 credit on signup      | https://console.deepgram.com |
| Anthropic   | Pay-as-you-go (already in app)   | https://console.anthropic.com |
| ElevenLabs  | Already in app                   | n/a |
| Simli       | Already in app (Sarah deployed)  | n/a |

### 2. Configure

```bash
cd worker
cp .env.example .env
# edit .env, paste in:
#   - DAILY_API_KEY, DAILY_DOMAIN
#   - ANTHROPIC_API_KEY (same as main app)
#   - ELEVENLABS_API_KEY (same as main app)
#   - ELEVENLABS_DEFAULT_VOICE_ID (any voice you want as fallback)
#   - DEEPGRAM_API_KEY
#   - SIMLI_API_KEY (same as main app)
#   - SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (same as main app)
```

### 3. Run

```bash
docker compose up --build
# server listens on http://localhost:7860
```

### 4. Tunnel so the Edge Function can reach it (dev only)

```bash
# In another terminal:
cloudflared tunnel --url http://localhost:7860
# Copy the *.trycloudflare.com URL
# Set it as a Supabase secret:
supabase secrets set PIPECAT_BOT_URL=https://your-tunnel.trycloudflare.com
```

In production this is replaced by a stable public URL via Caddy/nginx on
your VPS. See deployment section below.

### 5. Test without the RN app

```bash
# CLI test — direct subprocess, no HTTP, no Daily room:
echo '{
  "room_url": "https://your-domain.daily.co/test-room",
  "room_token": "...",
  "tier": "voice",
  "companion": {
    "display_name": "Sarah",
    "voice_id": "...",
    "system_prompt": "You are Sarah — warm, attentive.",
    "simli_face_id": null
  },
  "user_id": "test-user"
}' | python bot.py
```

---

## Tier → engine mapping

| Tier             | What runs                                       |
|------------------|-------------------------------------------------|
| `voice`          | STT + Claude + TTS, no avatar                   |
| `lipsync`        | Above + Simli avatar (archetype face_id)        |
| `lipsync_custom` | Above + Simli avatar (custom_companions face_id)|
| `lipsync_plus`   | Above + Tavus avatar (not wired yet)            |

---

## Production deployment (Contabo VPS)

### Prerequisites

- Contabo VPS with Docker installed
- A subdomain pointing at the VPS IP (e.g. `bot.rwendo.app`)
- Ports 80 and 443 open in the Contabo firewall

### Deploy

```bash
# On the VPS:
git clone <repo>
cd Rwendo/worker
cp .env.example .env
# edit .env with production keys
docker compose up -d
```

### Caddy reverse proxy (TLS via Let's Encrypt)

```bash
# Install Caddy on the VPS, then add this to /etc/caddy/Caddyfile:
bot.rwendo.app {
    reverse_proxy localhost:7860
}
sudo systemctl reload caddy
```

Set `PIPECAT_BOT_URL=https://bot.rwendo.app` as a Supabase secret.
Set `BOT_SHARED_SECRET` to a random string in both the worker's `.env`
and in Supabase secrets so only your Edge Functions can spawn bots.

---

## Cost model

Per concurrent voice+lipsync session, fully loaded:

| Component        | Cost/min | Notes |
|------------------|----------|-------|
| VPS              | ~$0.0001 | already paying anyway |
| Daily.co         | $0       | free tier covers ~165 hrs/mo |
| Deepgram STT     | $0.0043  | nova-3 streaming |
| Claude Haiku     | ~$0.02   | depends on turn length |
| ElevenLabs TTS   | $0.10    | bigger chunk |
| Simli (lipsync)  | $0.40    | bigger chunk |
| **Total**        | **~$0.53** | for full lipsync |
| Voice only       | ~$0.13  | drops Simli |

Your pricing today (3 tokens/min for lipsync = $0.03 user-pays) does
not cover this — see [../docs/LIPSYNC-INTEGRATION.md](../docs/LIPSYNC-INTEGRATION.md)
for the pricing reset that has to happen before launch.

---

## Future: swap for self-hosted engines

The whole point of Pipecat is that every service is swappable. When
the moment comes (5+ concurrent users, GPU box added):

| Today (SaaS)    | Tomorrow (self-host)              |
|-----------------|-----------------------------------|
| Deepgram STT    | Faster-Whisper / Parakeet TDT     |
| Claude          | Llama 3.3 70B via vLLM            |
| ElevenLabs TTS  | Chatterbox Turbo / Higgs Audio v2 |
| Simli avatar    | LiveTalking + MuseTalk            |

Each is a single import + config change in `bot.py`. The RN client
doesn't need to change at all.

See [../docs/SELF-HOSTING-STRATEGY.md](../docs/SELF-HOSTING-STRATEGY.md)
for the trigger conditions.
