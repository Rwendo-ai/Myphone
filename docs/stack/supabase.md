# Supabase — Rwendo Database, Auth & Storage

## What it does in Rwendo
Supabase is our backend-as-a-service: PostgreSQL database, user authentication, real-time subscriptions (leaderboard updates), and file storage (audio files, avatar assets).

## Version
- Supabase JS SDK: v2+
- Self-hosted option available if costs scale — start on managed cloud

## Core Usage in Rwendo

### Authentication
- Email/password signup
- Magic link (email) as fallback
- JWT tokens — stored securely on device via `expo-secure-store`
- Row Level Security (RLS) on all tables — users can only read/write their own data

### Database Schema (Key Tables)
```
users               — profile, age, language preferences, biometric hash ref
user_progress       — XP, streak, level per language pack
lessons             — lesson content (or reference to CDN path)
dictionary_entries  — Shona/English word pairs, audio refs, example sentences
achievements        — badge definitions
user_achievements   — junction: which user earned which badge
leaderboard         — cached scores (updated via Edge Function)
affiliate_codes     — referral code per user, conversion tracking
subscriptions       — mirrors RevenueCat entitlements server-side
```

### Real-time
- Leaderboard updates via Supabase Realtime (Postgres changes → websocket)
- "Friend is online" presence for Learn With a Friend (Phase 2)

### Storage Buckets
| Bucket | Contents |
|--------|---------|
| `audio` | Native speaker pronunciation files |
| `avatars` | User profile images (not biometric data) |
| `language-packs` | Lesson JSON, culture notes (also on Cloudflare CDN) |
| `mascot-assets` | Rwen animation states, expressions |

## Row Level Security Pattern
Every user table follows this pattern:
```sql
-- Users can only access their own rows
CREATE POLICY "users_own_data" ON user_progress
  FOR ALL USING (auth.uid() = user_id);
```

## Edge Functions
Used for server-side logic that shouldn't run on device:
- Affiliate conversion tracking
- RevenueCat webhook processing
- Leaderboard score aggregation
- Biometric re-verification trigger

## Gotchas
- RLS must be enabled on every table — default is disabled
- Supabase free tier has 500MB DB limit and pauses after 1 week inactivity — upgrade before launch
- Real-time has connection limits — use sparingly, not for every update
- Storage URLs are public by default — use signed URLs for private user content

## Docs
- https://supabase.com/docs
- https://supabase.com/docs/guides/auth/row-level-security
- https://supabase.com/docs/guides/functions
