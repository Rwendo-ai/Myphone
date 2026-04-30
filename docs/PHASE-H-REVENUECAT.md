# Phase H — RevenueCat wiring (external-account-blocked)

Phase H of [PRODUCT-DESIGN.md](./PRODUCT-DESIGN.md) §8 wires real subscription billing. Unlike the other phases, Phase H **cannot be completed in code alone** — it requires external accounts, store-listing setup, and (mostly) a working EAS Build because the React Native native modules for IAP only work in a development build, not Expo Go.

This doc captures the plan + the prerequisite tasks the user owns.

## What ships when Phase H is done

- Subscription tier upgrades from the in-app Plans screen route through RevenueCat instead of the placeholder Alert.
- `subscriptions.active_tier` updates when a user purchases / cancels.
- `user_packs` rows insert when a paid course is purchased.
- Currency display in the Plans screen reads from `jurisdiction.currency.symbol` and prices from `available_packs.prices_by_jurisdiction`.
- The RevenueCat Customer object syncs Supabase `user_id` so receipts attribute to the right account.

## Prerequisites the user must complete

| # | Task | Account / cost |
|---|---|---|
| 1 | Apple Developer account | $149 AUD/yr |
| 2 | Google Play Console account | $30 USD one-off |
| 3 | RevenueCat account (Free under $2.5k/mo MTR) | free at our stage |
| 4 | EAS Build set up | Expo account |
| 5 | Apple App Store Connect — create app | (via Apple Developer) |
| 6 | Google Play Console — create app | (via Play Console) |
| 7 | Configure subscription products in App Store Connect | manual setup |
| 8 | Configure subscription products in Google Play Console | manual setup |
| 9 | Link products to RevenueCat | manual setup |
| 10 | Set RevenueCat API key in `.env` | `EXPO_PUBLIC_REVENUECAT_KEY=...` |

## Product IDs to configure

These match the v3 course catalogue + tier add-ons. Use these IDs verbatim in App Store Connect, Google Play Console, AND RevenueCat so they line up:

| RevenueCat product ID | Type | Price (AUD) | Notes |
|---|---|---|---|
| `tier_text_ai_monthly` | auto-renewing subscription | $9.99 | "Text AI" tier. ~500 messages/mo. |
| `tier_text_ai_annual` | auto-renewing subscription | $71.88 | -40% annual. |
| `tier_voice_monthly` | auto-renewing subscription | $14.99 | "Voice" tier. |
| `tier_voice_annual` | auto-renewing subscription | $107.88 | |
| `tier_companion_monthly` | auto-renewing subscription | $24.99 | "Companion" tier. |
| `tier_companion_annual` | auto-renewing subscription | $179.88 | |
| `tier_premium_monthly` | auto-renewing subscription | $44.99 | "Premium" tier. |
| `tier_premium_annual` | auto-renewing subscription | $323.88 | |
| `course_language_shona` | non-consumable | $19.99 | One-time pack purchase (alt to subscription). |
| `tokens_top_up` | consumable | $2.99 | 100 tokens. |
| `tokens_pack` | consumable | $11.99 | 500 tokens. |
| `tokens_bulk` | consumable | $39.99 | 2000 tokens. |

Tier products map to RevenueCat **entitlements** so a user who subscribes to "Companion" automatically inherits everything in "Voice" and "Text AI". Configure entitlements in RevenueCat dashboard:

- Entitlement `text_ai`: granted by `tier_text_ai_*`, `tier_voice_*`, `tier_companion_*`, `tier_premium_*`
- Entitlement `voice`: granted by `tier_voice_*`, `tier_companion_*`, `tier_premium_*`
- Entitlement `companion`: granted by `tier_companion_*`, `tier_premium_*`
- Entitlement `premium`: granted by `tier_premium_*`

## Code that's already in place

The data and types are ready — Phase H is purely wiring:

- `available_packs.prices_by_jurisdiction` jsonb column (migration 005). Per-region prices stored here.
- `subscriptions.active_tier` (existing). RevenueCat webhook flips this on purchase/cancel.
- `user_packs` (existing). RevenueCat webhook inserts rows on course purchases.
- `lib/entitlements.ts` already keys on `tier` and `ownedCourseIds`. Drop the `tier` value in from RevenueCat and gating works.
- `data/jurisdictions/<id>/index.ts` already carries `currency`. Plans screen will read this.

## Code to write when accounts are ready

1. **Install** `react-native-purchases` (RevenueCat SDK):
   ```bash
   npx expo install react-native-purchases
   ```
2. **Init** in `app/_layout.tsx` after auth:
   ```tsx
   import Purchases from 'react-native-purchases';
   useEffect(() => {
     Purchases.configure({ apiKey: process.env.EXPO_PUBLIC_REVENUECAT_KEY!, appUserID: user?.id });
   }, [user?.id]);
   ```
3. **Sync** entitlements into `useSettings()`:
   ```tsx
   const customerInfo = await Purchases.getCustomerInfo();
   const tier = deriveTier(customerInfo.entitlements.active);
   setTier(tier);
   ```
4. **Replace** the Plans screen `handleUpgrade` Alert with a real purchase:
   ```tsx
   const offerings = await Purchases.getOfferings();
   const package = offerings.current?.availablePackages.find(p => p.identifier === `tier_${tierId}_monthly`);
   await Purchases.purchasePackage(package!);
   ```
5. **Currency display**: Plans screen reads price from offerings.current.availablePackages — RevenueCat already returns the App Store / Play Store-localised price string for the user's region.
6. **Webhook**: Supabase Edge Function `revenuecat-webhook` validates the RevenueCat signature, updates `subscriptions.active_tier` + `user_packs`. (RevenueCat dashboard → Webhooks → set URL.)

## Soft launch path

1. **Sandbox testing** (App Store Connect sandbox + Play test track). RevenueCat lets you switch between live and sandbox via the SDK.
2. **TestFlight / Play Internal Testing** — test purchases end-to-end with a small group.
3. **Phase Production** — submit binaries for review with subscription products configured.

## Order

Phase H **must come after** Phase M (rwen-chat / rwen-tts / rwen-stt deployed) so that the AI cost protection is in place before billing exposure. If Phase H ships before M, a paid user could trigger uncapped Anthropic / ElevenLabs spend through the legacy direct-API paths.
