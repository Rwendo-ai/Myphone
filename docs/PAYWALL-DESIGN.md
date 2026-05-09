# Paywall — RevenueCat Architecture & Product Catalogue

**Started:** 2026-05-09
**Owner:** Bowen
**Status:** Design + scaffold. SDK install + RevenueCat dashboard config is
your work. App-side wiring is ready for it.

---

## 0. Economic model (locked)

User-stated rules:
- **Courses** — one-time purchase. One price per course (no tiering per
  course; tier the user, not the course).
- **AI Companions** — subscription based, **cheap base**.
- **AI credits** — pay-per-use on top, priced at `actual_cost × 1.10 +
  app-store cut`. Nothing is given away that costs us money.
- **Travel** — free.
- **Free onboarding** — 10 text-AI messages/day, 1 free starter companion.
  Compels purchase the moment the user is hooked.
- **XP cannot buy AI credits.** XP CAN buy courses + AI companion
  subscriptions.

Why these rules: language-learning users need a low-friction taste before
any paywall. AI usage has real compute cost so it MUST be monetised. Travel
is the funnel to course purchases.

---

## 1. Product catalogue (final)

| Product | Type | Price (AUD) | Apple/Google ID | Notes |
|---|---|---|---|---|
| Course — single language | one-time consumable | A$14.99 | `course_<lang>_v1` | One per language pair (Shona, Ndebele, French, etc.) |
| AI Companion — Text only | subscription monthly | A$2.99/mo | `companion_text_monthly_v1` | Text-only chat, includes 30 messages/day baseline |
| AI Companion — Low-tier visual | subscription monthly | A$5.99/mo | `companion_visual_low_monthly_v1` | Picks one low-tier avatar, includes 30 msgs/day text + 10 voice mins |
| AI Companion — High-tier visual | subscription monthly | A$11.99/mo | `companion_visual_high_monthly_v1` | High-tier avatar (lipsync ready), 50 msgs/day, 30 voice mins, 5 lipsync clips |
| AI Credit — Text bundle | consumable | A$1.99 | `credit_text_100_v1` | 100 extra text messages |
| AI Credit — Voice bundle | consumable | A$3.99 | `credit_voice_30min_v1` | 30 voice minutes |
| AI Credit — Lipsync bundle | consumable | A$9.99 | `credit_lipsync_5_v1` | 5 lipsync video generations |

Pricing rationale: courses cover content authoring + Storage cost. Companion
subscriptions cover one user's expected AI usage at cheap base. Credits
cover overage at our-cost + 10% margin + 30% store cut.

**Pricing per jurisdiction** (drives the "local price" UX):
- AU = A$ (table above)
- US = ×0.66 → US$9.99 / US$1.99 / etc.
- GB = ×0.52 → £7.99 / £1.49 / etc.
- EU = ×0.62 → €9.99 / €1.99 / etc.
- ZW = USD-only (Zimbabwe ZiG too volatile for IAP) — same as US$ pricing
- Other markets: localised by RevenueCat from base USD

---

## 2. RevenueCat setup checklist (Bowen does this)

### 2.1 Account + project
- [ ] Sign up at revenuecat.com
- [ ] Create project "Rwendo"
- [ ] Add iOS app (bundle ID matches `app.json` → `ios.bundleIdentifier`)
- [ ] Add Android app (package matches `app.json` → `android.package`)
- [ ] Note the public API keys (one per platform) — store in env

### 2.2 App Store Connect (iOS)
- [ ] Sign in to App Store Connect
- [ ] Create the 7 product IDs from the catalogue above
- [ ] For subscriptions, create a subscription group "Rwendo Companions"
  with monthly + (future) annual variants
- [ ] Add Sandbox tester account (for QA)

### 2.3 Google Play Console (Android)
- [ ] Same 7 product IDs in Play Console → Monetize → Products
- [ ] Subscriptions in Play Console → Monetize → Subscriptions
- [ ] Add license testers (your account + tester accounts)

### 2.4 RevenueCat dashboard
- [ ] Map App Store + Play Store products to RevenueCat products
- [ ] Create entitlements:
  - `course_<lang>` per language (10 entitlements — one per language pair)
  - `companion_text` — granted by text-only subscription
  - `companion_visual_low`
  - `companion_visual_high`
  - `credits_text` — non-binary, just ledger
  - `credits_voice`
  - `credits_lipsync`
- [ ] Create offerings: "Default" packaging the active products
- [ ] Set up webhooks → Supabase Edge Function for server-side validation +
  granting access in `user_packs` / `subscriptions` tables

---

## 3. App-side wiring (ready when SDK is installed)

### 3.1 SDK install (one command)

```bash
npx expo install react-native-purchases
```

Then add to `app.json`:

```json
"plugins": [
  ["react-native-purchases", { "ios": { "useFrameworks": "static" } }]
]
```

### 3.2 Files we'll add

| File | Purpose |
|---|---|
| `lib/purchases.ts` | RevenueCat SDK wrapper (initialise, getOfferings, purchase, restore, listenEntitlements) |
| `data/products.ts` | Canonical product IDs + display data — single source of truth |
| `app/_layout.tsx` | Initialise Purchases SDK at app boot once API key + user logged in |
| Server: `supabase/functions/revenuecat-webhook/index.ts` | Receives webhooks, grants entitlements in DB |

### 3.3 Hooks into existing code

- `lib/entitlements.ts` already gates lessons + AI features. Currently reads
  `entitlementContext.starterCourseId` + `ownedCourseIds`. Needs to instead
  read from a `useEntitlements()` hook backed by RevenueCat's
  `Purchases.getCustomerInfo()` — single source of truth.
- `app/profile/plans.tsx` Alert-only handler → real `purchasePackage()` call.
- After successful purchase, fire `awardXp('purchase_<type>', amount, ...)`
  per the XP spec.

### 3.4 Free-tier gates (already enforce-able client-side)

Quotas to implement in `lib/quotas.ts`:
- 10 text-AI messages/day for free users
- 0 voice minutes for free users
- 0 lipsync for free users
- 1 starter companion (already gated)

Read `customerInfo.entitlements.active` to check what's unlocked. Daily
counters live in `subscriptions.ai_messages_used` / `voice_messages_used`
columns (already exist).

---

## 4. Server-side (RevenueCat webhook → Supabase)

When a purchase / cancellation / refund happens, RevenueCat POSTs to our
webhook with the user's purchase state. We need to:

1. Verify webhook signature (RevenueCat sends a header)
2. Look up user by RevenueCat `app_user_id` (we set this to Supabase
   `auth.users.id` at SDK init)
3. Upsert into `subscriptions` table:
   - `active_tier` = matched RevenueCat product → tier
   - `period_start` / `period_end` from event
   - For consumables (courses, credit bundles), insert into `user_packs`
4. For purchase events, fire `award_xp` server-side too — **this is where
   purchase XP comes from**. The client also fires it but server is the
   source-of-truth.

---

## 5. Free-tier UX (the funnel)

The 10-text/day limit is the moment that converts. Plans:
- Counter visible at top of companion chat: "8/10 messages today"
- At message 9: gentle nudge "1 message left today"
- At message 10: "You've hit today's free limit. Pick a plan to keep
  chatting →" links to `/profile/plans`
- Free users on Voice mode tap → instant paywall

The 1-free-companion: starter is Tendai (the language tutor preset).
Picking any other companion (Maya, Sam, Aria, etc.) requires a
subscription. Avatars under "Companions" tab show 🔒 with subscription
required.

---

## 6. App Store / Play Store policy alignment

- **Apple in-app purchase mandatory** for digital goods consumed in-app
  (courses, AI subscriptions, credits). Apple takes 30% (or 15% under
  Small Business Program).
- **Restore Purchases** button required on the plans screen.
- **Cancellation**: redirect user to subscription management URL (Apple's
  `https://apps.apple.com/account/subscriptions`, Google Play's equivalent).
- **Free tier copy** must NOT imply features that aren't actually free.
  Today's plans copy is fine; double-check after wiring.

---

## 7. Implementation order (when ready)

This is genuinely 1-2 weeks if all done in one push. Recommended phasing:

**Week 1 — RevenueCat foundation:**
1. RevenueCat account + dashboard setup (above)
2. Apple / Google product creation (above)
3. SDK install + initialise (`lib/purchases.ts`)
4. `data/products.ts` populated
5. `lib/entitlements.ts` switched to RevenueCat-backed
6. Plans screen wired to real `purchasePackage()` calls

**Week 2 — Webhook + edges:**
7. Webhook Edge Function + signature verification
8. `subscriptions` + `user_packs` upsert flow
9. Server-side XP awards on purchase events
10. Free-tier quotas (10 text-AI/day) + paywall triggers
11. Restore Purchases UX
12. Sandbox QA on iOS + Play test track on Android

---

## 8. What this commit lands

A scaffold. Concretely:
- This design doc
- `data/products.ts` — canonical catalogue
- `lib/purchases.ts` stub with TODO markers — currently no-op, will become
  the SDK wrapper after install

When you've completed §2 (RevenueCat dashboard config), come back and
we'll wire the actual SDK calls. This unblocks course pricing decisions
and gives the next session a clear shopping list.
