# Rwendo — Job List

Living punch list. Edit as you tick things off. Distinct from `STATUS-*` docs
which are point-in-time snapshots — this one is the running checklist.

**Last touched:** 2026-05-13
**Legend:** ✅ done · 🟡 in progress · 🔴 blocked on you · ⏳ next up · ⚪ later

---

## ✅ Recently completed (last 72 hours, May 10-12)

### Content
- ✅ **Travel Mode** — Australia + United States added with full content (52 phrases each, 10 cultural-guide sections each, 10 iconic places each). 13 destinations total in the picker.
- ✅ **Knowing Yourself manifest** — expanded from 10 → 100 lesson entries; all 10 unit headers render with proper titles + emojis from the curriculum plan
- ✅ **Knowing Yourself Module 2** — 10 full lesson bodies authored (The Body You Live In)
- ✅ **Reinforcement card decks** — 120 cards across all 10 Knowing Yourself modules (insight variant: title + body + reflection question)
- ✅ **Reinforcement card decks** — 82 cards across the other 7 Build Yourself tracks (Module 1 only — see "in progress" for the rest)
- ✅ **Per-speaker English flipcard decks** — 8 new decks authored (Tagalog/French/Spanish/Portuguese/Hindi/Japanese/Korean/Chinese) at 500 cards each = 4,000 new cards. Storage now has 10 English flipcard decks (all speakers covered).
- ✅ **430 broken lesson prompts patched** across 8 speaker variants of language-english (activeRecall + translate exercises that asked the question and answer in the same language)
- ✅ **Manifest titles cleanup** — stripped Shona-flavored suffixes from language-english manifest so non-Shona speakers don't see "Hello — Mhoro" on the unit list

### Architecture
- ✅ **Channel-branch linkage fixed** — testflight + development channels weren't subscribed to their branches; OTAs were going into a void. Linked, then pushed all backlogged content.
- ✅ **Floating header redesign** — profile-left + cart-right on all 5 main tabs (Home / AI Chat / Companions / Travel / Learn) with proper safe-area-aware spacing
- ✅ **Cart screen** — new `/cart` route with v3 pricing model surface (5 Pro tiers + 2 yearly + 1 lifetime + 3 token packs)
- ✅ **Subscription model v3** — 5-tier ladder (Text $4 / Voice $5 / Lipsync Low $10 / Lipsync High $25 / Ultra $29.99) + lifetime + token packs; entitlements rewritten; live tier derivation from RC entitlements
- ✅ **Owner / lifetime-access list** — 5 user IDs hardcoded in `lib/entitlements.ts → OWNER_USER_IDS` bypass every gate (Bowen primary + 1 secondary + 3 testers)
- ✅ **RC test-key crash fix** — SDK was killing the app on the "test API key in production" dialog; now skips configure() when key has `test_` prefix
- ✅ **Connections feed opened up** — no destination filter; Follow/Unfollow button on every post card; intro reframed to "Traveller community"
- ✅ **Flipcards moved to course-content bucket** + speaker-aware loader; per-speaker fallback to Shona-perspective deck when own variant doesn't exist
- ✅ **Ndebele lesson rename** — 100 files renamed in Storage from short ids (m01-l01.json) to canonical long ids (m01-l01-hello.json) matching the shared manifest

### Build / Distribution
- ✅ **iOS TestFlight build 3** — built with all latest code baked in; auto-submitted to Apple; installed on owner + tester iPhones
- ✅ **Android preview APK** rebuilt 2x with latest content (most recent: 2026-05-12 — link in chat)
- ✅ **3 OTA branches** linked + receiving updates: testflight (iOS TF), preview (Android preview APK), development (Android dev client)

---

## ✅ Recently completed (2026-05-13)

- ✅ **Knowing Yourself Modules 3-10 lesson bodies** — all 80 remaining lessons authored, uploaded to storage, and version-tagged in the manifest. Course is now 100/100 lessons. Editorial follows CHRISTIAN-FOUNDATION-SPEC end-to-end (dignity-based self-kindness; no Buddhist scaffolding; sources named honestly). Anchored on CBT/ACT/NVC/IFS/EFT/Stoic/Bowlby/Bonanno/Frankl/Brown/Clear/Fogg/Gottman/Gilbert/Csikszentmihalyi/Burkeman/Newport.

## 🟡 In progress

- 🟡 **Translation Edge Function** — designed in `docs/REINFORCEMENT-CARDS-TRANSLATION.md`; deployment pending. Loader already speaker-aware (falls back to English when per-speaker file missing).

---

## 🔴 Blocked on you (dashboard / store work)

### App Store Connect (iOS)
- 🔴 Create the 11 IAP products from `docs/PAYWALL-DESIGN.md` §4.2
  - 5 monthly tiers, 2 yearly tiers, 1 lifetime, 3 token packs
- 🔴 Apple Small Business Program enrollment (cuts 30% → 15%)
- 🔴 Add girlfriend (charmiephotos1@gmail.com) as Internal Tester in Team (Expo) group — DONE today

### Google Play Console (Android)
- 🔴 Create Play Console listing for Android distribution
- 🔴 Same 11 IAP products in Monetize → Products / Subscriptions
- 🔴 Google Play Small Business equivalent enrollment

### RevenueCat dashboard
- 🔴 Map App Store + Play Store products to RevenueCat products
- 🔴 Create entitlements: `tier_text`, `tier_voice`, `tier_lipsync_low`, `tier_lipsync_high`, `tier_ultra`, `lifetime_buyer`, `ai_credits`
- 🔴 Build the Paywall UI in the dashboard (this is what `presentPaywall()` shows)
- 🔴 **Replace test keys with production keys in env vars** — once this lands, the `isTestKey` guard in `lib/purchases.ts` auto-unblocks and RC initialises normally
- 🔴 Set webhook endpoint pointing at our Supabase function (deploy that function first — see ⏳ below)

### External APIs
- 🔴 **Travelpayouts / Skyscanner** partner approval → set `EXPO_PUBLIC_SKYSCANNER_ASSOCIATE_ID`
- 🔴 **Booking.com Affiliate Partner** approval → set `EXPO_PUBLIC_BOOKING_AID`
- 🔴 **DeepL API key** → `supabase secrets set DEEPL_API_KEY=...` (free tier 500k chars/mo is enough for v1)

---

## ⏳ Next session priorities (code + content work)

### Build Yourself completion
- ✅ All 10 Knowing Yourself units now have full lesson bodies (M01-M02 + M03-M10 authored 2026-05-13). 100 lessons total.

### Paywall integration finish
- ⏳ Deploy `supabase/functions/revenuecat-webhook/index.ts` — receives RC webhooks, grants entitlements in DB, fires `award_xp` for purchase events, applies the 15% lifetime-buyer token-pack bonus
- ⏳ Wire `useEntitlements()` into `lib/entitlements.ts` more deeply so course-gating reads live RC state instead of placeholder `DEV_UNLOCK_ALL`
- ⏳ Free-tier quota tracking — server-side counters: 10 Rwen msgs/day on companion screen, 3 msgs/lesson on Phase 8, AI credit balance
- ⏳ Translation Edge Function deployment for reinforcement cards (designed; needs deploy)

### Tester / launch readiness
- ⏳ Strip `EXPO_PUBLIC_DEV_UNLOCK_ALL=1` from production build profile in `eas.json`
- ⏳ Move RC API keys out of `.env.local` and into EAS env vars (`eas env:create`)
- ⏳ Phrasebook audio for non-ZW countries — script exists, just needs `npx tsx scripts/generate-phrasebook-audio.ts <CODE>` for GB/FR/CN/PH/ES/PT/IN/JP/KR/AU/US

### Smaller improvements
- ⏳ Per-state Australian destinations (NSW top 5, VIC top 5, etc.) — schema can support sub-regions; content is multi-hour authoring
- ⏳ Daily XP display bug — Learn tab "Daily XP" shows `xp % goal` (wrong). Either rename to "progress to next goal" or implement actual today-XP tracking
- ⏳ Phase 8 graceful exit — keyword match for "stop / I'm done", award proportional XP on early exit
- ⏳ More intro bubble placements (3 of 7 specs registered but unplaced)
- ⏳ Companion DB sync verification — `data/companions/presets.ts` vs `public.companions` table
- ⏳ Edit-vs-create distinction on Connections onboarding screen (currently says "Set up profile" even when one exists)

---

## ⚪ Backlog (deferred — design decisions / months)

### Big features
- ⚪ **Trip planning canvas / scrapbook** — the soul-led travel feature. Design doc needed before code. *Won't ship before launch.*
- ⚪ **Connections recommendation algorithm** — destination + interest + interaction-based ranking (TikTok-style)
- ⚪ **Video posts** in Connections (after photos prove out)
- ⚪ **Privacy-preserving ad matching** — design where we match advertisers to user attributes without sharing the data
- ⚪ **Crypto / XRPL integration** — XP → token bridge, airdrop, vesting
- ⚪ **Expand 7 Build Yourself tracks to multi-module** — Hard Conversations, Parenting, Money, Grief, Sleep, Lost Confidence, Caring. Each currently a single-unit short course by design; expanding to 10 modules each needs curriculum design first (not just authoring).

### Content
- ⚪ Cultural Guide deepening for the 9 non-ZW non-AU/US countries (current is solid, could be richer)
- ⚪ Travel content for additional destinations (Italy, Germany, Brazil, Mexico, Vietnam — top tourism markets we don't cover)
- ⚪ ElevenLabs audio for all 12 phrasebooks (currently only ZW done)
- ⚪ Audio for reinforcement cards (cheap once translation pipeline is live)

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
