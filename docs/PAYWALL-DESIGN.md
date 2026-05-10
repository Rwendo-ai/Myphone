# Paywall — RevenueCat Architecture & Product Catalogue

**Started:** 2026-05-09
**Updated:** 2026-05-10 (v3: 5-tier ladder + token packs)
**Owner:** Bowen
**Status:** App-side wiring complete (5-tier entitlement ladder, free-tier
quotas, lifetime-buyer perks, owner-list bypass). RevenueCat dashboard
config + IAP product creation in App Store Connect / Play Console is
the remaining manual work.

---

## 0. Economic model (locked 2026-05-10 — v3)

The app's revenue model is a **5-tier subscription ladder + consumable
token packs**, designed around the reality that AI usage has real
per-message compute cost.

Each tier:
- Includes every feature of lower tiers
- Includes a monthly **token allowance** (in dollar-cents-equivalent)
- After allowance is exhausted, user buys top-up token packs

Why a ladder (not a flat Pro plan): users self-select their commitment
based on which AI modality they want. A user who only types pays $4.
A user who wants full lipsync video pays $25. Custom-companion power
users pay $29.99.

Why tokens: AI cost varies wildly by modality (text << voice << lipsync).
Subscription gives access; tokens cover variable usage. Heavy users pay
proportionally; light users get a stable bill. Margins target ~35% over
real AI cost on Apple/Google.

### Tier table

| Tier | Monthly | Yearly | Token allowance | Features |
|---|---|---|---|---|
| Free | A$0 | — | — | Rwen only · 10 msgs/day · 2 free starter modules · 3 AI msgs/lesson |
| Text | A$4 | — | $2/mo | All companions text · all courses · travel |
| Voice | A$5 | — | $2/mo | + voice-to-voice |
| Lipsync · Low | A$10 | — | $3/mo | + low-quality lipsync video |
| Lipsync · High | A$25 | A$199 (33% off) | $10/mo | + high-quality lipsync |
| Ultra | A$29.99 | A$239 (33% off) | $15/mo | + custom companion soul-edit |
| Ultra Lifetime | — | — | $15/mo + 15% off all token packs | One-time A$399 |

### Token packs

| Pack | Price | Tokens | Notes |
|---|---|---|---|
| Small | A$2.99 | 200 | Light overage |
| Medium | A$7.49 | 500 | Best value (recommended) |
| Large | A$14.99 | 1000 | Power users |

Token cost is calibrated: ~35% margin over real AI cost on Apple/Google
(after their 30% cut). Web pricing (post-launch) targets 15% margin —
selling tokens via web at lower price is the long-term strategy to
recapture some of Apple's cut. Google flow will redirect to web for
token purchases per spec.

**Lifetime buyers get 15% off every token-pack purchase forever.** The
discount is applied server-side at webhook time (RC fires the
purchase event → Edge Function checks `lifetime_buyer` entitlement →
adjusts credit balance grant upward).

---

## 1. Product catalogue

Source of truth: [`data/products.ts`](../data/products.ts).

### Subscription SKUs

| Product ID | RC Entitlement | Apple/Google Store ID | AUD |
|---|---|---|---|
| `tier_text_monthly` | `tier_text` | `rwendo_text_monthly_v1` | $4 |
| `tier_voice_monthly` | `tier_voice` | `rwendo_voice_monthly_v1` | $5 |
| `tier_lipsync_low_monthly` | `tier_lipsync_low` | `rwendo_lipsync_low_monthly_v1` | $10 |
| `tier_lipsync_high_monthly` | `tier_lipsync_high` | `rwendo_lipsync_high_monthly_v1` | $25 |
| `tier_lipsync_high_yearly` | `tier_lipsync_high` | `rwendo_lipsync_high_yearly_v1` | $199 |
| `tier_ultra_monthly` | `tier_ultra` | `rwendo_ultra_monthly_v1` | $29.99 |
| `tier_ultra_yearly` | `tier_ultra` | `rwendo_ultra_yearly_v1` | $239 |
| `ultra_lifetime` | `tier_ultra` + `lifetime_buyer` | `rwendo_ultra_lifetime_v1` | $399 |

### Token pack SKUs

| Product ID | RC Entitlement | Apple/Google Store ID | AUD |
|---|---|---|---|
| `tokens_small` | `ai_credits` | `rwendo_tokens_small_v1` | $2.99 |
| `tokens_medium` | `ai_credits` | `rwendo_tokens_medium_v1` | $7.49 |
| `tokens_large` | `ai_credits` | `rwendo_tokens_large_v1` | $14.99 |

### Tier ladder logic

Each tier grants its own entitlement. A user with `tier_lipsync_high`
can access voice + text features without holding `tier_voice` or
`tier_text` — the entitlement check works on **rank**, not exact match:

```
TIER_RANK = { free:0, text:1, voice:2, lipsync_low:3, lipsync_high:4, ultra:5 }
```

`canUseAiFeature('voice', ctx)` passes if `TIER_RANK[user] >= 2`.

If RC dashboard is configured to "unlock all" via attached products on
a single offering (recommended), the `tier_*` entitlements stack
naturally — buying Ultra grants all five tier_* entitlements.

**Alternative if RC offerings can't stack:** server webhook grants the
top tier's entitlement only; client-side `tierFromEntitlements()`
picks the highest active one. This is what we have today.

---

## 2. Free tier rules (the gate)

All numbers in [`lib/entitlements.ts`](../lib/entitlements.ts):

```ts
STARTER_FREE_MODULES        = 2    // m01-m02 of starter course free
FREE_AI_MESSAGES_PER_LESSON = 3    // per-lesson AI quota
FREE_DAILY_RWEN_MESSAGES    = 10   // companion-screen daily quota
```

```
new user → onboarding → picks first language → starter_course_id set
                                              ↓
                  ┌──────────────────────────┴──────────────────────────┐
                  │                                                      │
              starter course                                       any other course
              (free, gated)                                        (Tier text+ required)
                  │                                                      │
       ┌──────────┴──────────┐                                      Paywall → tier picker
       │                     │
   modules 1-2          modules 3+
   (FREE)               (Tier text+ required)
       │
       ├─→ 3 AI msgs per lesson on Phase 8 (free)
       └─→ 10 Rwen msgs/day on Companion screen (free)

Travel section is FREE for everyone, no paywall.
```

---

## 3. RevenueCat dashboard setup checklist

### 3.1 RC project ✅
- [x] Account at revenuecat.com
- [x] Project "Rwendo" created
- [x] iOS + Android apps registered
- [x] Test API keys in `.env.local`

### 3.2 App Store Connect (iOS)
- [x] App record exists (ASC App ID `6767811402`)
- [ ] Create the **8** product IDs above (5 monthly subs + 2 yearly subs + 1 lifetime non-consumable)
- [ ] Create **3** consumable IDs for token packs
- [ ] Subscription group: "Rwendo Tiers" — every monthly sub in the same group, with monthly + yearly variants where applicable
- [ ] Submit IAP for review
- [ ] Sandbox tester account
- [ ] Apple Small Business Program enrollment (cuts 30% → 15%)

### 3.3 Google Play Console (Android)
- [ ] App registered (`app.rwendo.rwendo`)
- [ ] Same 11 product IDs (8 subs + 3 tokens) in Monetize → Products / Subscriptions
- [ ] Subscription base plans for monthly + yearly where applicable
- [ ] License testers
- [ ] Google Play Small Business equivalent

### 3.4 RevenueCat dashboard
- [ ] Map App Store + Play Store products to RevenueCat products
- [ ] Create entitlements:
  - `tier_text`, `tier_voice`, `tier_lipsync_low`, `tier_lipsync_high`, `tier_ultra`
  - `lifetime_buyer` (granted only by `ultra_lifetime` SKU)
  - `ai_credits` (granted by all token packs; balance tracked server-side via webhook)
- [ ] Build a Paywall UI in the dashboard (`presentPaywall()` shows it)
- [ ] Configure Offerings — group products by tier so the paywall shows the ladder cleanly
- [ ] Production API keys → swap `.env.local` test keys before App Store submission
- [ ] Webhook endpoint → Supabase Edge Function (see §4)

---

## 4. Server-side wiring (Supabase Edge Function)

```
RC webhook → POST /functions/v1/revenuecat-webhook
          → verify signature
          → for INITIAL_PURCHASE / RENEWAL of tier_*:
              UPSERT user_entitlements (user_id, tier, expires_at)
              award_xp(purchase_tier_<key>)
              grant monthly token allowance for the tier
          → for LIFETIME purchase:
              UPSERT user_entitlements with lifetime_buyer=true
              award_xp(purchase_lifetime)
          → for token pack purchase:
              base_credits = product.tokens
              if user has lifetime_buyer: credits = base_credits * 1.15  // 15% bonus
              UPDATE user_credits SET balance = balance + credits
              award_xp(purchase_tokens)
```

Function lives at `supabase/functions/revenuecat-webhook/index.ts`
(skeleton exists; deploy pending).

Required tables:
- `user_entitlements (user_id, entitlement, expires_at, source, lifetime_buyer)`
- `user_credits (user_id, balance, updated_at)`

App reads entitlements live from RC SDK
([`useEntitlements`](../hooks/useEntitlements.ts)) and falls back to
the DB mirror for offline / cold-start.

---

## 5. App-side wiring (current state)

✅ Done (this session):
- 5-tier product catalogue ([`data/products.ts`](../data/products.ts))
- `lib/entitlements.ts` rewritten with tier ladder + free-tier quotas
- `tierFromEntitlements()` derives highest active tier from RC entitlement IDs
- `useEntitlements()` returns `tier`, `hasFeature(...)`, `isLifetimeBuyer`
- `SettingsContext.entitlementContext` is fully reactive to RC SDK
- Owner-list bypass (`OWNER_USER_IDS` array)
- Companion preset gates map cleanly through `canUseAiFeature()`

⏳ Next session:
- AI message quota tracking (per-lesson + daily Rwen counters in
  AsyncStorage; server enforcement on the AI proxy endpoint)
- Cart-in-header UI (red badge for items, yellow ! for low credits)
- Profile menu top-left repositioning
- Token-balance UI in the Cart
- Webhook endpoint deployment + entitlement/credit DB sync
- Web token-pack pricing variant (15% margin) — separate SKUs

---

## 6. XP discount mechanic (planned, post-launch)

XP earned through engagement becomes a purchase-time discount on tier
upgrades. Mechanic same as v2 — see [`lib/xp-events.ts`](../lib/xp-events.ts)
for the event types and amounts. Out of scope for v1 launch — surfaces
as discount rendered in the Cart UI when that ships.

---

## 7. Owner / lifetime-access list

Hardcoded user IDs in [`lib/entitlements.ts`](../lib/entitlements.ts) →
`OWNER_USER_IDS` bypass every gate forever. To grant access:
1. User signs in via the app at least once (creates Supabase user record)
2. Look up their `auth.users.id` in Supabase
3. Add to `OWNER_USER_IDS` array, push OTA

---

## 8. Deprecation history

- **2026-05-09 v1:** per-course $14.99 + 3 companion sub tiers + 3
  credit types (text / voice / lipsync). Discarded — courses-as-product
  doesn't match the cost reality (we built them once).
- **2026-05-10 v2:** Single Pro entitlement (monthly $9.99 / yearly
  $79 / lifetime $199) + text-only credit packs. Discarded same day —
  too flat; couldn't price voice + lipsync separately from text.
- **2026-05-10 v3 (current):** 5-tier ladder + token packs + lifetime
  perk. Locked.
