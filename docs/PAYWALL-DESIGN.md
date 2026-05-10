# Paywall — RevenueCat Architecture & Product Catalogue

**Started:** 2026-05-09
**Updated:** 2026-05-10 (pricing model rewritten — see §0)
**Owner:** Bowen
**Status:** Design + scaffold + entitlement gating live. RevenueCat
dashboard config is the remaining manual work.

---

## 0. Economic model (locked 2026-05-10)

The original v1 model priced courses individually (A$14.99 each) plus
companion subscription tiers. Replaced with **subscription-first** because:
- Courses cost us nothing per user (we authored them once, Storage is
  pennies). Pricing them per-unit creates friction without recouping cost.
- AI usage IS the real cost driver. Pricing should track real cost.
- Subscription LTV beats one-time purchase 2-3× in the language-learning
  category (Duolingo / Babbel / Busuu benchmarks).

Rules:
- **Courses are FREE with Pro.** No per-course purchase. We built them.
- **AI is the cost driver.** Pro caps daily usage; heavy users buy credits.
- **Travel is FREE forever.** Funnel into Pro, never paywalled.
- **Free tier = your first chosen course's modules 1-2 (≈20 lessons) + 3 AI
  text messages per lesson.** Hooks the user before the paywall.
- **XP discounts on Pro.** Loyalty currency reduces upgrade price (mechanic
  designed in §3).

---

## 1. Product catalogue (final)

| Product | Type | Price (AUD) | Apple/Google ID | RC Entitlement |
|---|---|---|---|---|
| Pro — Monthly | subscription | A$9.99/mo | `rwendo_pro_monthly_v1` | `rwendo_pro` |
| Pro — Yearly | subscription | A$79/yr | `rwendo_pro_yearly_v1` | `rwendo_pro` |
| Pro — Lifetime | one-time | A$199 | `rwendo_pro_lifetime_v1` | `rwendo_pro` |
| Credits — 100 | consumable | A$4.99 | `rwendo_credits_100_v1` | `credits_text` |
| Credits — 300 | consumable | A$9.99 | `rwendo_credits_300_v1` | `credits_text` |
| Credits — 750 | consumable | A$19.99 | `rwendo_credits_750_v1` | `credits_text` |

Source of truth: [`data/products.ts`](../data/products.ts). Each product has
`storeId` (Apple/Google), `entitlement` (RC), `baseAud`, and `xpReward`.

**Why three Pro tiers, one entitlement?** Pricing flexibility (monthly is
the easy entry; yearly is the conversion driver; lifetime creates urgency)
without code complexity — a single `rwendo_pro` entitlement gates everything
regardless of how the user paid.

**Why three credit packs, one entitlement?** RevenueCat tracks `credits_text`
as a numeric balance (server-side ledger keyed off webhook events).
Different SKUs grant different amounts but increment the same balance.

**Localisation:** RevenueCat handles per-region pricing automatically. The
AUD numbers are base; App Store / Play Store show the locale equivalent.

---

## 2. Free tier rules (the gate)

```
new user → onboarding → picks first language → starter_course_id set
                                              ↓
                  ┌──────────────────────────┴───────────────────────────┐
                  │                                                       │
              starter course                                       any other course
              (free, gated)                                        (Pro required)
                  │                                                       │
       ┌──────────┴──────────┐                                       Pro paywall
       │                     │
   modules 1-2          modules 3+
   (FREE)               (Pro required)
       │
       └─→ 3 AI text messages per lesson (free quota)
```

Locked in code:
- [`lib/entitlements.ts`](../lib/entitlements.ts) →
  `STARTER_FREE_MODULES = 2`
  `FREE_AI_MESSAGES_PER_LESSON = 3`
- `canAccessLesson(courseId, lessonId, ctx)` enforces both.
- `canAccessCourse(courseId, ctx)` — non-starter course = Pro.
- `canUseAiFeature('text', ctx, msgsUsedInLesson)` — free quota check.

---

## 3. XP discount mechanic (planned, not yet implemented)

XP earned through engagement (lessons, login, posts, etc.) becomes a
**purchase-time discount** on Pro tiers. Two reasons:
- Reward grinding without devaluing purchases (XP earns small amounts: 5
  per login, 25 per lesson, max 100 lessons/curriculum = ~3500 XP grinding).
- Push toward yearly/lifetime — bigger XP discount = bigger AUD reduction.

Proposed scale (subject to A/B testing post-launch):

| XP balance | Monthly discount | Yearly discount | Lifetime discount |
|---|---|---|---|
| 500 | 10% off first month | 5% off | 3% off |
| 2,000 | 25% off first month | 15% off | 8% off |
| 5,000+ | 50% off first month | 25% off | 15% off |

XP is consumed on redemption (see `redeem_xp` RPC). Server-validated.

Out of scope for v1 launch — mechanic exists in `award_xp` schema but the
discount UI is post-launch.

---

## 4. RevenueCat setup checklist (Bowen does this in dashboards)

### 4.1 RevenueCat project ✅
- [x] Account at revenuecat.com
- [x] Project "Rwendo" created
- [x] iOS + Android apps registered
- [x] Test API keys in `.env.local` (`EXPO_PUBLIC_REVENUECAT_IOS_KEY`, `EXPO_PUBLIC_REVENUECAT_ANDROID_KEY`)

### 4.2 App Store Connect (iOS)
- [x] App record created (ASC App ID: `6767811402`)
- [ ] Create the 6 product IDs from the catalogue:
  - `rwendo_pro_monthly_v1` (auto-renewable subscription)
  - `rwendo_pro_yearly_v1` (auto-renewable subscription, same group)
  - `rwendo_pro_lifetime_v1` (non-consumable)
  - `rwendo_credits_100_v1` (consumable)
  - `rwendo_credits_300_v1` (consumable)
  - `rwendo_credits_750_v1` (consumable)
- [ ] Subscription group: "Rwendo Pro" — monthly + yearly variants
- [ ] Sandbox tester account
- [ ] Apple Small Business Program enrollment (cuts Apple's 30% → 15%)

### 4.3 Google Play Console (Android)
- [ ] App registered (matching `app.rwendo.rwendo` package)
- [ ] Same 6 product IDs in Play Console → Monetize → Products
- [ ] Subscription base plans for monthly + yearly
- [ ] License testers added
- [ ] Google Play Small Business equivalent

### 4.4 RevenueCat dashboard
- [ ] Map App Store + Play Store products to RevenueCat products
- [ ] Create entitlements:
  - `rwendo_pro` — granted by all three Pro SKUs
  - `credits_text` — granted by all three credit pack SKUs (consumable
    balance tracked server-side via webhook)
- [ ] Build a Paywall in dashboard (this is what `presentPaywall()` shows)
- [ ] Production API keys → swap `.env.local` test keys before App Store
  submission
- [ ] Webhook endpoint → Supabase Edge Function (see §5)

---

## 5. Server-side wiring (Supabase Edge Function)

Webhook flow:
```
RevenueCat webhook → POST /functions/v1/revenuecat-webhook
                  → verify signature
                  → INSERT/UPDATE entitlements in DB
                  → award_xp(purchase_pro_*, etc.)
                  → for credit purchases: increment user_credits.balance
```

Function lives at `supabase/functions/revenuecat-webhook/index.ts` (skeleton
exists, deploy pending). Required tables:
- `user_entitlements (user_id, entitlement, expires_at, source)`
- `user_credits (user_id, balance, updated_at)`

App reads entitlements live from RC SDK ([`useEntitlements`](../hooks/useEntitlements.ts))
and falls back to the DB mirror for offline / cold-start.

---

## 6. App-side wiring (current state)

✅ Done:
- `react-native-purchases` + `react-native-purchases-ui` installed
- `lib/purchases.ts` wrapper with SDK_AVAILABLE guard
- Init at app boot (`app/_layout.tsx`) with `appUserID = supabase user.id`
- `hooks/useEntitlements()` reactive hook
- `lib/entitlements.ts` rewritten for two-tier model (free / pro)
- `lib/SettingsContext.tsx` derives `tier` from RC live entitlements
- Owner-list bypass (`OWNER_USER_IDS` in entitlements.ts)
- Plans screen triggers `presentPaywall()` + Restore + Manage Subscription

⏳ Next session:
- Free-tier AI quota tracking (per-lesson counter in AsyncStorage + server
  enforcement on the AI proxy endpoint)
- Cart-in-header UI (red badge for items, yellow ! for low credits)
- Profile menu top-left repositioning
- Webhook endpoint deployment + entitlement/credit DB sync

---

## 7. Owner / lifetime-access list

Hardcoded user IDs in [`lib/entitlements.ts`](../lib/entitlements.ts) →
`OWNER_USER_IDS` bypass every gate forever. To grant access:
1. User signs in via the app at least once (creates Supabase user record)
2. Look up their `auth.users.id` in Supabase
3. Add to `OWNER_USER_IDS` array, push OTA

Currently configured: empty (Bowen + 1 trusted dev IDs to be added once
they've signed in on production).

---

## 8. Deprecation history

- **2026-05-09 v1 model:** per-course $14.99 + 3 companion sub tiers
  ($2.99 / $5.99 / $11.99) + 3 credit types (text / voice / lipsync).
- **2026-05-10 v2 model:** Pro subscription only (monthly $9.99 / yearly
  $79 / lifetime $199) + text-only credit packs. Voice/visual avatars
  deferred until those tiers are authored.
