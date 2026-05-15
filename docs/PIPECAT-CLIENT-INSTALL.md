# Pipecat / Daily.co RN Client — Install Reference

**Status (2026-05-16):** RN client code (hook + session lib + test screen)
is committed. Native modules are NOT installed yet — run the commands
below in one go when you're ready to wire it up.

> **Why these versions?** Pinned to the latest stable on npm as of
> 2026-05-16. `@pipecat-ai/react-native-daily-transport@1.6.0` is the
> outermost constraint — its peer deps anchor everything else. Do not
> upgrade `@pipecat-ai/client-js` past `^1.6.0` without first checking
> the transport package's peerDependencies (it pulls client-js itself
> as a regular dep — if you also list it, the version range must match).

## 1. npm install — copy/paste once

Run this from the repo root:

```bash
npm i \
  @pipecat-ai/client-js@^1.6.0 \
  @pipecat-ai/react-native-daily-transport@^1.6.0 \
  @daily-co/react-native-daily-js@^0.85.0 \
  @daily-co/react-native-webrtc@^124.0.6-daily.1 \
  react-native-background-timer@^2.4.1 \
  react-native-get-random-values@^1.11.0
```

### Note on `@daily-co/daily-react`

The architecture doc lists `@daily-co/daily-react` as part of the stack
but **do not install it for React Native**. That package is a React DOM
wrapper around `@daily-co/daily-js`; it pulls `react-dom` and `jotai` as
peer deps, neither of which belong in an Expo RN app. In RN we drive
the Daily call object directly via `@daily-co/react-native-daily-js` —
see `hooks/usePipecatSession.ts`.

### Note on `@react-native-async-storage/async-storage`

`@daily-co/react-native-daily-js` declares it as a peer dep at `^1.24.0`,
but Rwendo already pins `2.2.0` (see `package.json`). The major bump is
back-compatible at runtime; if `npm install` warns, that's the reason —
not a problem in practice. Add `--legacy-peer-deps` to the command above
only if npm refuses to resolve.

## 2. app.json — Expo config plugin updates

Daily.co's RN SDK needs camera + mic permission strings on iOS, plus the
`@config-plugins/react-native-webrtc` plugin so the WebRTC pod links
correctly. Edit `app.json`:

### 2a. Add the WebRTC config plugin

```bash
npm i -D @config-plugins/react-native-webrtc
```

Then in `app.json` under `expo.plugins`, append:

```json
"plugins": [
  "expo-router",
  "expo-font",
  "expo-secure-store",
  "expo-asset",
  "expo-dev-client",
  ["@config-plugins/react-native-webrtc", {
    "cameraPermission": "Rwendo needs the camera to show your face during voice + lipsync calls.",
    "microphonePermission": "Rwendo needs the microphone for voice conversations with your companion."
  }]
]
```

### 2b. Confirm iOS infoPlist strings

The repo already sets `NSMicrophoneUsageDescription` and
`NSCameraUsageDescription`. The WebRTC plugin overwrites these with the
strings above on build, so you only need to make sure no other place is
stripping them. Current copy:

> "Rwendo uses the microphone for voice conversations with Rwen and for pronunciation practice."
> "Rwendo uses the camera so you can set a profile picture."

If you want a separate camera string for voice-call use vs. profile-pic
use, the plugin's `cameraPermission` arg wins, so just change the arg
value above.

### 2c. iOS background audio

Already set:

```json
"UIBackgroundModes": ["audio"]
```

Daily needs this to keep the audio session alive when the app
back-grounds mid-call. No change required.

### 2d. Android permissions

Already in `app.json`:

```
RECORD_AUDIO
MODIFY_AUDIO_SETTINGS
BLUETOOTH_CONNECT
INTERNET
ACCESS_NETWORK_STATE
CAMERA
```

These cover Daily's RN SDK. No change required.

## 3. EAS dev-client rebuild

`@daily-co/react-native-daily-js` and `@daily-co/react-native-webrtc`
both ship native modules (Android `.aar` + iOS pod), so the Expo Go
client cannot host them — you have to rebuild the dev client.

```bash
# iOS dev build (run on macOS or via EAS Cloud)
eas build --profile development --platform ios

# Android dev build
eas build --profile development --platform android
```

After each completes, install the resulting `.ipa` / `.apk` on the device
and `expo start --dev-client`. The new native modules will be linked.

If you skip the rebuild, `usePipecatSession.start()` will throw on the
first `Daily.createCallObject()` call with `Native module DailyClient
could not be found` or similar.

## 4. Environment variables

The client side reads no new env vars. The Edge Function
`pipecat-bot-start` reads `DAILY_API_KEY`, `DAILY_DOMAIN`,
`PIPECAT_BOT_URL`, and `BOT_SHARED_SECRET` — set those in Supabase
secrets, not in the app.

## 5. Verifying the install

After install + rebuild:

```bash
# 1. Boot the worker locally so the Edge Function has something to call
cd worker && docker compose up --build

# 2. Tunnel it (so Supabase Edge Function can reach it during dev)
cloudflared tunnel --url http://localhost:7860
# Set the resulting https URL as Supabase secret PIPECAT_BOT_URL

# 3. Open the app, navigate to the test screen (see PIPECAT-CLIENT-FLOW.md)
# 4. Tap "Start Session" — you should see "connecting" → "active" and
#    the remote video track render.
```

## 6. Reference

- [`@pipecat-ai/react-native-daily-transport`](https://www.npmjs.com/package/@pipecat-ai/react-native-daily-transport) v1.6.0
- [`@daily-co/react-native-daily-js`](https://www.npmjs.com/package/@daily-co/react-native-daily-js) v0.85.0
- [Daily RN setup guide](https://docs.daily.co/reference/rn-daily-js)
- [`@config-plugins/react-native-webrtc`](https://www.npmjs.com/package/@config-plugins/react-native-webrtc)
