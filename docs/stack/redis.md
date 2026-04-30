# Redis — Rwendo Caching & Sessions

## What it does in Rwendo
In-memory data store for: rate limiting API endpoints, caching leaderboard scores, managing AI session state, and distributed locks for credit deductions.

## Hosting
- **Upstash Redis** — serverless Redis, pay-per-request, no idle cost, works perfectly with Railway
- Free tier: 10,000 commands/day — fine for development
- Upgrade to paid when approaching launch

## Key Use Cases

### 1. Rate Limiting
```
Key: rate_limit:{userId}:{endpoint}
TTL: 60 seconds
Value: request count

AI endpoints: 10 req/min
Standard endpoints: 60 req/min
```

### 2. Leaderboard Cache
```
Key: leaderboard:weekly
TTL: 5 minutes
Value: top 100 users sorted set

Updated by Supabase Edge Function every 5 minutes
Served directly from Redis — no DB hit on every leaderboard view
```

### 3. AI Session State
```
Key: ai_session:{sessionId}
TTL: 30 minutes (extends on activity)
Value: {userId, creditsAtStart, tokensUsed, mode}

Ensures accurate billing if connection drops mid-session
```

### 4. Credit Deduction Lock
```
Key: credit_lock:{userId}
TTL: 2 seconds

Prevents race condition if two requests try to deduct credits simultaneously
SETNX pattern — only one deduction wins
```

### 5. OTP / Verification Codes
```
Key: otp:{userId}
TTL: 10 minutes
Value: hashed verification code
```

## Connection Pattern (Node.js)
```typescript
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

// Rate limit check
const requests = await redis.incr(`rate_limit:${userId}:ai`)
if (requests === 1) await redis.expire(`rate_limit:${userId}:ai`, 60)
if (requests > 10) throw new TooManyRequestsError()
```

## Gotchas
- Upstash REST API (not TCP) — use `@upstash/redis` SDK, not `ioredis`
- TTLs are critical — always set them, never store without expiry
- Don't store sensitive data (tokens, biometrics) in Redis — use Supabase for that
- Redis is not a database — treat it as disposable cache, not source of truth

## Docs
- https://upstash.com/docs/redis/overall/getstarted
- https://github.com/upstash/upstash-redis
