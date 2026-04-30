# PostHog + Sentry — Rwendo Analytics & Monitoring

## PostHog — Product Analytics

### What it does in Rwendo
Tracks how users move through the app: lesson completion rates, funnel drop-offs, feature adoption, A/B tests, and conversion from free to paid.

### Key Events to Track
```
user_signed_up          — onboarding complete
lesson_started          — { lessonId, level, language }
lesson_completed        — { lessonId, score, timeTaken }
lesson_abandoned        — { lessonId, dropOffPoint }
streak_extended         — { streakDays }
streak_broken           — { streakDays, reason }
xp_earned              — { amount, source }
purchase_initiated      — { productId, screen }
purchase_completed      — { productId, revenue }
ai_session_started      — { mode: 'avatar'|'voice'|'text', creditsAvailable }
ai_session_ended        — { duration, creditsUsed, mode }
affiliate_link_shared   — { channel: 'whatsapp'|'social'|'copy' }
rwen_interaction        — { type: 'tap'|'speak'|'hold' }
```

### Funnels to Monitor
- Onboarding: open app → complete biometric → first lesson
- Conversion: free tier → first purchase
- Retention: D1 / D7 / D30 return rates
- AI adoption: subscription → first AI session → recurring AI sessions

### GDPR Compliance
- PostHog can be self-hosted (full data control) or cloud (EU region)
- Anonymous by default — only attach user ID after consent
- No PII in event properties — use user IDs, not emails/names

### Setup (React Native)
```typescript
import PostHog from 'posthog-react-native'

const posthog = new PostHog('YOUR_PROJECT_API_KEY', {
  host: 'https://eu.posthog.com',  // EU data residency
})

posthog.capture('lesson_completed', {
  lessonId: 'shona_beginner_01',
  score: 92,
  timeTaken: 340,
})
```

---

## Sentry — Crash Reporting & Performance

### What it does in Rwendo
Captures crashes, unhandled errors, and performance issues in real time. Essential for catching bugs on devices we don't test on (especially Android fragmentation).

### Setup (React Native + Expo)
```typescript
import * as Sentry from '@sentry/react-native'

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  environment: process.env.APP_ENV,  // 'development' | 'production'
  tracesSampleRate: 0.2,  // 20% of sessions — adjust at scale
})
```

### Key Alerts to Configure
- Crash rate > 1% on any screen → immediate alert
- AI session errors (failed Claude/Deepgram/ElevenLabs calls) → alert
- Payment flow errors → highest priority alert
- Biometric capture failures → alert (affects onboarding completion)

### Source Maps
- Upload source maps via `@sentry/react-native` + EAS Build integration
- Unminified stack traces in Sentry dashboard — critical for debugging production crashes

## Gotchas
- PostHog: don't track events before user consent — add consent gate in onboarding
- Sentry: `tracesSampleRate: 1.0` in development, lower in production to control costs
- Neither service should receive biometric data or full user PII
- PostHog session replay (if enabled) must be disclosed in privacy policy

## Docs
- https://posthog.com/docs/libraries/react-native
- https://docs.sentry.io/platforms/react-native/
