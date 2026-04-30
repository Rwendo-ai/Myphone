# RevenueCat — Rwendo Payments & Subscriptions

## What it does in Rwendo
Single SDK that manages all in-app purchases and subscriptions across iOS and Android. Handles receipt validation, entitlement management, subscription state, webhooks, and analytics — so we don't build any of this ourselves.

## Product Configuration

### Entitlements (what users unlock)
| Entitlement ID | Unlocks |
|---------------|---------|
| `base_app` | Full beginner level, dictionary, no ads |
| `intermediate` | Intermediate lessons |
| `advanced` | Advanced lessons |
| `business` | Business language track |
| `ai_companion` | AI voice avatar subscription |
| `travel_mode` | Travel features + map |
| `learn_with_friend` | Paired learning sessions |

### Products (what users buy)
| Product ID | Type | Platform |
|-----------|------|---------|
| `rwendo_base_onetime` | One-time purchase | iOS + Android |
| `lang_pack_:id` | One-time purchase | iOS + Android |
| `intermediate_monthly` | Subscription | iOS + Android |
| `advanced_monthly` | Subscription | iOS + Android |
| `business_monthly` | Subscription | iOS + Android |
| `ai_companion_monthly` | Subscription | iOS + Android |
| `credits_100` | Consumable | iOS + Android |
| `credits_600` | Consumable | iOS + Android |
| `credits_1500` | Consumable | iOS + Android |

## SDK Setup (React Native)
```typescript
import Purchases from 'react-native-purchases'

// Initialise on app start
Purchases.configure({
  apiKey: Platform.OS === 'ios' ? IOS_RC_KEY : ANDROID_RC_KEY,
  appUserID: supabaseUserId,  // link RevenueCat user to Supabase user
})

// Check entitlements
const customerInfo = await Purchases.getCustomerInfo()
const hasBase = customerInfo.entitlements.active['base_app']
```

## Webhook → Backend Flow
```
Apple/Google purchase confirmed
  → RevenueCat validates receipt
    → RevenueCat fires webhook to Rwendo backend
      → Backend updates Supabase subscriptions table
        → User entitlement goes live
```
Always verify entitlements server-side from Supabase — never trust client-only RevenueCat state for gating paid features.

## Affiliate Attribution
- RevenueCat supports custom attributes: set `referral_code` on user before purchase
- Backend webhook reads this attribute and records affiliate conversion
- RevenueCat does NOT pay affiliates — commission calculation and payout is external

## Restore Purchases
Always implement restore purchases button — Apple requires it:
```typescript
await Purchases.restorePurchases()
```

## Gotchas
- Apple takes 30% of all purchases (15% after 12 months subscription) — price accordingly
- Consumable credits (pay-as-you-go) must be `CONSUMABLE` type, not subscription
- Never link to external payment in app — instant App Store rejection
- Sandbox testing on iOS is painful — test early, test often
- RevenueCat free tier supports up to $2.5k monthly tracked revenue — upgrade before launch
- Android requires `BILLING` permission in `AndroidManifest.xml`

## Pricing Strategy Notes
Apple/Google take 30% → price so the economics work at 70% of list price:
- $9.99 base → ~$7.00 net
- $4.99/mo intermediate → ~$3.50 net
- Build affiliate commissions from the net amount, not gross

## Docs
- https://docs.revenuecat.com
- https://docs.revenuecat.com/docs/getting-started
- https://docs.revenuecat.com/docs/webhooks
