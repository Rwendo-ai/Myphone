# React Native + Expo — Rwendo Frontend

## What it does in Rwendo
Single codebase that compiles to native iOS and Android. Expo adds a managed build layer so we avoid maintaining separate Xcode/Android Studio configs for most features.

## Version Targets
- React Native: 0.74+
- Expo SDK: 51+
- Min iOS: 16+
- Min Android: API 29 (Android 10+)

## Key Libraries

| Library | Purpose |
|---------|---------|
| `expo-router` | File-based navigation (replaces React Navigation for Expo projects) |
| `react-native-reanimated` v3 | Smooth 60fps animations for gamification (XP bars, celebrations) |
| `react-native-gesture-handler` | Touch/swipe gestures for lesson cards |
| `expo-av` | Audio playback for pronunciation, Rwen voice |
| `expo-camera` / `react-native-vision-camera` | Biometric face capture during onboarding |
| `expo-local-authentication` | FaceID / fingerprint for re-verification |
| `expo-speech` | Text-to-speech fallback |
| `react-native-mmkv` | Fast local storage (replaces AsyncStorage) |
| `expo-secure-store` | Secure on-device storage for biometric embeddings |
| `@shopify/flash-list` | Performant list rendering for dictionary, leaderboard |

## 3D Avatar (Rwen)
- **Option A:** Spline (spline.design) — design in browser, export React Native component. Easiest path.
- **Option B:** Three.js via `expo-gl` + `expo-three` — more control, steeper setup
- **Decision:** Start with Spline for MVP, migrate to Three.js if we need more control in Phase 2
- Rwen's colour shifts implemented via material/shader parameter updates driven by app state

## Expo vs Bare React Native Decision
Using **Expo managed workflow** for MVP. Reasons:
- EAS Build handles iOS/Android compilation without local Xcode/Android Studio
- Most native APIs we need (camera, biometrics, audio) are covered by Expo SDK
- Go bare only if we hit a hard wall with biometric depth (unlikely)

## Build & Deployment
- **EAS Build** — cloud builds for both platforms
- **EAS Submit** — automated App Store + Play Store submission
- **OTA Updates** — Expo Updates for JS-only patches without app store review

## Gotchas
- `react-native-reanimated` requires Babel plugin — add to `babel.config.js` on setup
- Biometric face capture requires `NSFaceIDUsageDescription` in `app.json` for iOS
- Large 3D assets (Rwen model) must be optimised — target under 5MB for initial load
- Android back button handling must be explicit with `expo-router`

## Docs
- https://docs.expo.dev
- https://reactnative.dev/docs
- https://docs.expo.dev/eas/
