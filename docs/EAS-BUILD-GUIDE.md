# EAS Build Guide — First APKs

**Status:** ready to run. All config files in place, native deps installed,
voice mode code shipped.

This is a one-time setup, then a `eas build` command per build thereafter.

---

## What we're building

Two APK profiles, both sit-on-shelf-buildable from your laptop:

| Profile | Audience | DEV_UNLOCK_ALL | Distribution |
|---|---|---|---|
| **`development`** (dev-client) | **You** — install on your S23 Ultra and iPhone 16 Plus to test voice mode + dev features | YES (set in `eas.json`) | Internal |
| **`preview`** | **Testers** | NO (full lock + paywall flow) | Internal — share APK download link |

The `development` profile is what unlocks ElevenLabs Conversational AI voice
mode. Expo Go can't load WebRTC native modules, so voice mode only works in
the dev-client APK, not in the tunnel.

---

## One-time setup (~10 min)

### 1. Create an EAS account (free)

```bash
npm install -g eas-cli
eas login
```

You'll be prompted to create an Expo account if you don't have one (free).

### 2. Initialise the project

From `c:/Users/benoc/Documents/Rwendo`:

```bash
eas init
```

This generates a project ID and writes it to `app.json` automatically.

If prompted "Replace existing app.json values?", say **yes**.

### 3. Configure credentials

EAS will offer to manage Android signing keys for you. **Accept this** — it
generates a keystore and stores it in their cloud, so you don't have to
manage it. Same for iOS later when you have an Apple Dev account.

---

## Building the first APK (run anytime after setup)

### Tester APK (the one to send out next week)

```bash
eas build --profile preview --platform android
```

- ~20-30 minutes in the cloud
- Output: a download link like `https://expo.dev/artifacts/eas/abc123.apk`
- Share that link via WhatsApp / email / Slack
- Testers tap link on their Samsung → Android shows "install from unknown
  sources" warning → they tap install → app appears

This is what your testers will get. **Without** DEV_UNLOCK_ALL — they hit
the full locked flow (only modules 1-4 of starter free, paywall on module 5,
locked courses, etc).

### Dev-client APK (the one for YOU to test voice mode)

```bash
eas build --profile development --platform android
```

- Same wait time
- Output: same kind of link
- Install on your Samsung the same way
- This APK has **DEV_UNLOCK_ALL=1** baked in — every paywall bypassed
- This APK loads `react-native-webrtc` and the LiveKit plugin, so **voice
  mode actually works** when you tap the 🎙 button on the companion screen

### iOS builds (after Apple Dev account approves)

```bash
eas build --profile preview --platform ios     # tester (TestFlight)
eas build --profile development --platform ios # your iPhone (TestFlight or direct install via Xcode)
```

You'll be prompted for Apple Developer account credentials. EAS handles the
provisioning profile + push certificates automatically.

---

## After the build completes

### On Android (you or testers)

1. Open the build URL on your phone (or scan the QR if you're at your laptop)
2. Tap "Install" — you may need to enable "Install from unknown sources" once
3. App icon appears, open it
4. Sign in / log in
5. **Dev build only:** open companion → tap 🎙 → orb appears → tap orb to
   start voice conversation. ElevenLabs Conv AI session opens. Talk normally.

### Updating the app

Once a dev-client APK is installed, you don't need to rebuild for every JS
change. Run `npx expo start` and the dev-client connects to Metro just like
Expo Go did. Native dep changes (e.g., adding another package with a config
plugin) require a fresh EAS build.

---

## Cost reality

EAS Build free tier:
- 30 builds/month
- 15 min queue priority

That's plenty for development + a tester round. Production launches typically
need EAS Production tier ($29/mo) for faster queues and more builds.

ElevenLabs Conv AI usage during testing:
- Creator plan: 250 min/month included
- Each tester voice session: ~3-5 min
- ~50-80 voice sessions / month before you blow the cap
- Tester round of 20-30 testers, each trying voice mode 1-2 times: comfortably
  inside the limit

If testers go heavier than expected, you'll see usage warnings in the
ElevenLabs dashboard — bump to Pro plan ($99, 1.1M credits) or rate-limit
voice mode usage in the app.

---

## What's wired in this commit (2026-05-02)

- `eas.json` — three profiles (development / preview / production)
- `app.json` — bundle IDs (`app.rwendo.rwendo`), mic + camera permissions,
  LiveKit Expo plugin, dev-client plugin
- `package.json` — `expo-dev-client`, `@livekit/react-native`,
  `@livekit/react-native-webrtc`, `@livekit/react-native-expo-plugin`
- `lib/companion-prompts.ts` — system prompt builder shared between text and
  voice modes
- `lib/conversational-ai.ts` — ElevenLabs Conv AI session config builder
  with per-session prompt/voice/language overrides
- `app/companion/voice.tsx` — orb UI screen at `/companion/voice`
- `app/(tabs)/companion.tsx` — top-right 🎙 button now routes to /companion/voice
- `app/(tabs)/companions.tsx` — new 5th tab: AI Companion management (browse
  presets, switch active, upgrade CTA)
- `app/(tabs)/_layout.tsx` — Companions tab added between Rwen and Travel

---

## Open items after first build

1. **Verify voice mode end-to-end** on your S23 Ultra once dev-client APK is
   installed. Expected: tap 🎙 → orb appears → tap orb → "Connecting..." →
   "Listening..." → speak → Rwen replies in voice → talk over Rwen → he
   stops mid-sentence (interruption test).

2. **If voice fails**, the most likely cause is the ElevenLabs agent
   configuration. Open the dashboard and verify:
   - Agent at `agent_8501kqhw371ff7zatpp9dmj66ea9` exists
   - Allowed origins includes `http://localhost` AND your phone's network
   - LLM is set (Claude or GPT) — even though we override the prompt, the
     agent still needs a base LLM configured

3. **Apple Developer account** — start the application now. Without it, no
   iOS testers next week. ~24-48h approval. https://developer.apple.com/programs/

4. **Phase 1 follow-ups** — companion settings page (per-companion voice
   picker, name override, personality sliders), 10-question setup interview
   that creates a custom persona, real conversational memory pipeline.
