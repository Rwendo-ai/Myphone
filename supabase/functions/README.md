# Supabase Edge Functions

Functions that proxy provider APIs server-side so we don't ship API keys in the client bundle. See [docs/PRODUCT-DESIGN.md](../../docs/PRODUCT-DESIGN.md) §8 Phase M.

| Function | Purpose | Status |
|---|---|---|
| `rwen-conversation` | ElevenLabs Custom LLM webhook (returns OpenAI-format). Used by the Conversational AI Agent for hands-free realtime. | ✅ Deployed |
| `rwen-chat` | In-app text chat — replaces direct Anthropic call from `lib/claude.ts`. | ⬜ Code committed; **needs deploy** |
| `rwen-tts` | Text-to-speech — replaces direct ElevenLabs call from `lib/voice.ts`. | ⬜ Code committed; **needs deploy** |
| `rwen-stt` | Speech-to-text — replaces direct ElevenLabs call from `lib/voice.ts`. | ⬜ Code committed; **needs deploy** |

## Deploy

You'll need the Supabase CLI installed and authenticated:

```bash
# One-time
npm install -g supabase
supabase login

# Deploy each function (run from repo root)
supabase functions deploy rwen-chat
supabase functions deploy rwen-tts
supabase functions deploy rwen-stt
```

## Secrets

Each function reads its provider key from Supabase secrets (NOT from the client `.env`):

```bash
supabase secrets set ANTHROPIC_KEY=sk-ant-...
supabase secrets set ELEVENLABS_KEY=sk_...
```

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are auto-populated by Supabase.

## After deploy — flip the client to use them

Once `rwen-chat` is deployed and verified:

1. In `lib/claude.ts`, set `USE_EDGE_FUNCTION = true` (or remove the legacy direct-Anthropic path entirely).
2. Once `rwen-tts` and `rwen-stt` are deployed, do the same in `lib/voice.ts`.
3. Remove `EXPO_PUBLIC_CLAUDE_KEY` and `EXPO_PUBLIC_ELEVENLABS_KEY` from `.env`. Only `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` remain in the client bundle (anon key is safe — RLS protects data).

This is a HARD PREREQUISITE for any external testing (TestFlight / Play Internal Testing) per PRODUCT-DESIGN.md §8 Phase M. Until it's done, the keys baked into the APK are extractable by anyone who unzips it.
