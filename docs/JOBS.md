# Rwendo — Job List

Living punch list. Edit as you tick things off. Distinct from `STATUS-*` docs
which are point-in-time snapshots — this one is the running checklist.

**Last touched:** 2026-05-09
**Legend:** ✅ done · 🟡 in progress · 🔴 blocked on you · ⏳ next up · ⚪ later

---

## ✅ Recently completed (last 48 hours)

### Content & curriculum
- ✅ **isiNdebele launch** — speaker pack (5 locales + voices + tips + AI prompt), 110-lesson curriculum (M1 = clicks primer, M2-M11 = standard topics), 100 English-from-Ndebele lessons, 500 Ndebele flip cards, 500 English-from-Ndebele flip cards, ZW-ND phrasebook + cultural guide
- ✅ **Module title fix** — Ndebele M1 = "The Clicks", standard topics shifted M2-M11
- ✅ **Travel content authored** for 11 countries — phrasebook + cultural guide + safari (top 10 African parks)
- ✅ **6,000+ flip cards** across all 11 language courses with audio
- ✅ **Phrasebook audio** for Zimbabwe (Shona) + Zimbabwe (Ndebele) — 96 MP3s

### Architecture
- ✅ **Streaming pivot extended** — phrasebook, culture, safari, flipcards all stream from `travel-content` Storage bucket; ~624 KB removed from binary
- ✅ **ZW destination split** — picker shows Zimbabwe (Shona) + Zimbabwe (Ndebele) as separate cards with same flag, different `contentKey`
- ✅ **Country picker dropdown** on Travel hub

### Travel Mode v1+
- ✅ Money & Market with live FX (exchangerate.host)
- ✅ Flights via Skyscanner affiliate webview
- ✅ Hotels via Booking.com affiliate webview
- ✅ Phrasebook screen with audio playback
- ✅ Cultural Guide screen
- ✅ Safari & Parks screen
- ✅ Connections feed (handles, follows, likes, comments, hashtags, photos, DeepL translate button)
- ✅ My Travel screen
- ✅ 18+ age gate on Connections (mirrors Aria romance preset gate)

### XP & engagement
- ✅ XP migration applied — `xp_events`, `xp_redemptions`, `award_xp()`, `redeem_xp()`
- ✅ XP wired into 8 events: login, post_create, comment_create, post_like, user_follow, ai_text_use, ai_voice_use, lesson_complete
- ✅ Per-hour throttle universal rule (purchases + lesson_complete exempt)

### Intro bubbles
- ✅ Bubble component + registry + AsyncStorage gate
- ✅ 4 placements: Travel hub country picker, lesson hook phase, Connections compose, Companion text-vs-voice

### Paywall scaffold
- ✅ `react-native-purchases` + `react-native-purchases-ui` installed
- ✅ `lib/purchases.ts` wired with SDK_AVAILABLE guard
- ✅ Init at app boot in `app/_layout.tsx` with `appUserID = supabase user.id`
- ✅ Plans screen triggers `presentPaywall()` + Restore + Manage Subscription
- ✅ `useEntitlements()` reactive hook
- ✅ Test RevenueCat API keys in `.env.local`

### iOS / TestFlight setup (today)
- ✅ Apple Developer enrolled (sole proprietor)
- ✅ Bundle ID `app.rwendo.rwendo` registered
- ✅ iOS Distribution Certificate generated (expires 2027-05-09)
- ✅ App Store Provisioning Profile generated
- ✅ `eas.json` `testflight` profile added (distribution: store)
- ✅ `app.json` `ITSAppUsesNonExemptEncryption: false` declared

---

## 🟡 In progress right now

- 🟡 **iOS TestFlight build uploading** to EAS — finishes ~15-20 min after upload
- 🟡 **Android build d7891919** with RevenueCat native module — should already be done; install + smoke test pending

---

## 🔴 Blocked on you (dashboard / store work)

### App Store Connect
- 🔴 Create iOS app record:
  - https://appstoreconnect.apple.com → My Apps → +
  - Name: Rwendo · Bundle ID: app.rwendo.rwendo · SKU: rwendo-001 · Primary Language: English
- 🔴 After iOS build finishes: `eas submit --platform ios --profile testflight --latest`
- 🔴 TestFlight → Internal Testing → add your girlfriend's Apple ID email
- 🔴 Add yourself to Internal Testing too
- 🔴 Apple Small Business Program enrollment (drops Apple cut from 30% → 15%, must opt in)

### Google Play Console
- 🔴 Apple done; **also create Play Console listing** for Android distribution
- 🔴 Google Play Small Business equivalent enrollment

### IAP products (both stores)
- 🔴 App Store Connect → Features → In-App Purchases → create products:
  - `course_shona_v1` (one-time, A$14.99) — replicate per language for the 11 courses
  - `companion_text_monthly_v1` (subscription, A$2.99/mo)
  - `companion_visual_low_monthly_v1` (subscription, A$5.99/mo)
  - `companion_visual_high_monthly_v1` (subscription, A$11.99/mo)
  - Plus credit bundles per [docs/PAYWALL-DESIGN.md §1](docs/PAYWALL-DESIGN.md)
  - **OR** simplified Pro tier (Monthly / Yearly / Lifetime) — final pricing decision pending
- 🔴 Google Play Console → Monetize → same product list
- 🔴 Apple sandbox tester account created (for QA before submission)

### RevenueCat dashboard
- 🔴 Map App Store + Play products to RevenueCat products
- 🔴 Create entitlements: `Rwendo Pro` (or per-course like `course_shona`)
- 🔴 Build a Paywall in RevenueCat dashboard (this is what `presentPaywall()` shows)
- 🔴 Get **production** API keys — replace test keys in `.env.local` before App Store submission
- 🔴 Set webhook endpoint pointing at our Supabase function (deploy that function first — see ⏳ below)

### External APIs
- 🔴 **Travelpayouts / Skyscanner** partner approval → set `EXPO_PUBLIC_SKYSCANNER_ASSOCIATE_ID`
- 🔴 **Booking.com Affiliate Partner** approval → set `EXPO_PUBLIC_BOOKING_AID`
- 🔴 **DeepL API key** → `supabase secrets set DEEPL_API_KEY=...` (free tier 500k chars/mo is enough for v1)

---

## ⏳ Next session priorities (code work)

### Paywall integration finish
- ⏳ Deploy `supabase/functions/revenuecat-webhook/index.ts` — receives RC webhooks, grants entitlements in DB, fires `award_xp` for purchase events
- ⏳ Wire `useEntitlements()` into `lib/entitlements.ts` so course-gating reads live RevenueCat state instead of placeholder DEV_UNLOCK_ALL
- ⏳ Free-tier quotas — 10 text-AI messages/day enforcement + paywall trigger at limit
- ⏳ Storage rename: move `travel-content/flipcards/` → `course-content/flipcards/` (flip cards are course content, not travel content — naming wart from streaming-pivot week)

### Tester / launch readiness
- ⏳ **Owner / lifetime-access list** — hardcode user IDs (Bowen + 1 trusted dev) that bypass all entitlement checks. Get all AI features for life, no charges. Implement in `lib/entitlements.ts` as a check above the RevenueCat lookup. Need: Bowen's Supabase user.id, second person's user.id (or email → look up at runtime).
- ⏳ Strip `DEV_UNLOCK_ALL=1` from production build profile in `eas.json`
- ⏳ Move RC API keys out of `.env.local` and into EAS env vars (`eas env:create`)
- ⏳ Phrasebook audio for non-ZW countries — script exists, just needs `npx tsx scripts/generate-phrasebook-audio.ts <CODE>` for GB/FR/CN/PH/ES/PT/IN/JP/KR

### Smaller improvements (couple hours each)
- ⏳ Daily XP display bug — Learn tab "Daily XP" shows `xp % goal` (wrong). Either rename to "progress to next goal" or implement actual today-XP tracking
- ⏳ Phase 8 graceful exit — keyword match for "stop / I'm done", award proportional XP on early exit
- ⏳ More intro bubble placements (3 of 7 specs registered but unplaced)
- ⏳ Companion DB sync verification — `data/companions/presets.ts` vs `public.companions` table

---

## ⚪ Backlog (deferred — design decisions / months)

### Big features
- ⚪ **Trip planning canvas / scrapbook** — the soul-led travel feature you described. Design doc needed before code. *Won't ship before launch.*
- ⚪ **Connections recommendation algorithm** — destination + interest + interaction-based ranking (TikTok-style)
- ⚪ **Video posts** in Connections (after photos prove out)
- ⚪ **Privacy-preserving ad matching** — your design where we match advertisers to user attributes without sharing the data
- ⚪ **Crypto / XRPL integration** — XP → token bridge, airdrop, vesting

### Authoring
- ⚪ **Knowing Yourself Units 2-10** (90 more lessons) — only Unit 1 authored. Plan exists at [docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md](docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md)
- ⚪ Cultural Guide deepening for the 9 non-ZW countries (current is solid, could be richer)
- ⚪ Travel content for additional destinations (Italy, Germany, Brazil, Mexico, Vietnam — top tourism markets we don't cover)

### Infrastructure
- ⚪ Stripe Identity / KYC for Connections (currently self-declared 18+; real verification when usage justifies)
- ⚪ Backend cache layer for FX / weather / public holidays (currently direct API calls)
- ⚪ Offline-first content sync — install all of an active course's content on first open vs lazy-on-tap
- ⚪ Push notifications (streak reminders, daily lesson nudge)

---

## How to use this doc

When something completes, move it from ⏳ to ✅. When new work surfaces,
add it under the right section. Aim to keep `🔴 Blocked on you` short —
those are the only items that genuinely require dashboard / external
work and should be the top of mind list.

For the actual snapshot at any given date, see `docs/STATUS-YYYY-MM-DD.md`.
This doc is the punch list; the STATUS docs are the journal.
