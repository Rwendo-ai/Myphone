# Node.js Backend — Rwendo API Server

## What it does in Rwendo
Handles business logic that can't live on the client or in Supabase Edge Functions: AI session management, pay-as-you-go credit billing, RevenueCat webhook processing, affiliate tracking, and the AI conversation orchestration layer.

## Stack
- **Runtime:** Node.js 20 LTS
- **Framework:** Fastify (faster than Express, built-in schema validation)
- **Language:** TypeScript
- **ORM:** Prisma (type-safe DB queries against Supabase PostgreSQL)
- **Hosting:** Railway (simple deploys, auto-scaling, good free tier to start)

## Key API Domains

### AI Session Management
- `POST /ai/conversation` — proxies Claude API, tracks token usage, deducts credits
- `POST /ai/pronunciation` — sends audio to Deepgram, returns score
- `GET /ai/session-cost` — returns real-time cost estimate for current session
- Screen-on vs screen-off mode flag passed in request — affects model/cost

### Credits & Billing
- `GET /credits/balance` — user's current credit balance
- `POST /credits/deduct` — atomic deduction (race-condition safe via Redis lock)
- `POST /webhooks/revenuecat` — processes purchase events, tops up credits

### Affiliate System
- `POST /affiliate/track-click` — logs referral link click with install attribution
- `POST /affiliate/convert` — called on first purchase, calculates commission
- `GET /affiliate/dashboard` — returns clicks, conversions, earnings for user

### Language Packs
- `GET /packs` — list available packs with price, size, languages
- `GET /packs/:id/download-url` — signed Cloudflare URL for pack download

## Middleware
```
request → auth (JWT verify) → rate limit (Redis) → handler → response
```
- All routes except `/health` and `/webhooks` require valid Supabase JWT
- Rate limiting: 60 req/min standard, 10 req/min for AI endpoints
- Request logging via Pino (fast, structured JSON logs)

## Environment Variables
```
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ANTHROPIC_API_KEY
ELEVENLABS_API_KEY
DEEPGRAM_API_KEY
REVENUECAT_WEBHOOK_SECRET
REDIS_URL
RAILWAY_ENVIRONMENT
```

## Credit System Design
```
1 credit = $0.01 USD
Screen-on (avatar + voice): ~8 credits/minute
Screen-off (voice only):    ~3 credits/minute
Text conversation:          ~1 credit/minute

Credit bundles (via RevenueCat consumable IAP):
  100 credits  = $0.99
  600 credits  = $4.99
  1500 credits = $9.99
```

## Gotchas
- Never store `SUPABASE_SERVICE_ROLE_KEY` on client — server only
- RevenueCat webhooks must be verified with HMAC signature before processing
- AI token costs fluctuate — build in a 20% buffer on credit deduction estimates
- Fastify schema validation is strict — define schemas for all routes or disable per-route

## Docs
- https://fastify.dev/docs
- https://www.prisma.io/docs
- https://railway.app/docs
