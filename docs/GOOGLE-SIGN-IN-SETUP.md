# Google Sign-In — Native Setup

**Date:** 2026-05-18
**Why:** WebBrowser-based OAuth is unreliable on Android (Chrome Custom
Tabs returns `dismiss` with no URL on many devices; the redirect
URL never reaches the app via either WebBrowser intercept or the OS
deep-link path). Native Google sign-in bypasses all of that by using
Google's own SDK to fetch an ID token directly, then handing it to
Supabase via `signInWithIdToken`. No browser, no redirects, no deep
links.

The code changes are done. **You only need to do the one-time setup
below, then npm install + eas build.**

---

## Step 1 — Get your Android signing-cert SHA-1 from EAS

The Google Cloud OAuth client needs to know which APK fingerprint is
allowed to use the Google sign-in. EAS already manages your signing
cert; you just need to grab the SHA-1.

```bash
eas credentials
```

When prompted:
1. Select **Android**
2. Select profile **preview** (and later: production)
3. Pick **Keystore: Manage everything needed to build your project**
4. Pick **Inspect keystore credentials**

You'll see something like:

```
Keystore
Type                 JKS
Key Alias            ...
MD5 Fingerprint      ...
SHA1 Fingerprint     04:91:6C:0D:...   ← THIS LINE
SHA256 Fingerprint   ...
```

**Copy the full SHA-1 (with colons).**

> Repeat for the `production` profile when you get to launch — Google
> Cloud needs both fingerprints registered.

---

## Step 2 — Create an Android OAuth client in Google Cloud Console

The existing **Web** OAuth client (the one Supabase uses, ID
`415469918574-…`) stays as-is. We're adding a *separate* **Android**
client so Google's native SDK can validate the sign-in.

1. https://console.cloud.google.com → **APIs & Services** → **Credentials**
2. Click **Create Credentials → OAuth client ID**
3. **Application type: Android**
4. **Name:** `Rwendo Android (preview)` (or similar)
5. **Package name:** `app.rwendo.rwendo`
6. **SHA-1 certificate fingerprint:** paste the SHA-1 from Step 1
7. Click **Create**

No client secret to copy here — Android verifies via package name +
SHA-1 instead.

---

## Step 3 — npm install

```bash
npm install
```

This picks up `@react-native-google-signin/google-signin` which was
added to `package.json`.

---

## Step 4 — EAS build (new APK with the native module)

```bash
eas build --profile preview --platform android
```

~15–20 min. When done, install the new APK on your phone (overwrites
the previous install — your data stays).

---

## Step 5 — Test

1. Open the app, sign out if needed
2. Tap "Sign in with Google"
3. You should see **Google's native picker** (an Android system dialog,
   not a browser) — same look as Gmail / YouTube sign-in
4. Pick your account
5. App lands on home, signed in

No browser, no spinner, no "Finishing sign-in" page. Instant.

---

## When it goes wrong

| Error in app | What it means | Fix |
|---|---|---|
| "Google sign-in needs the latest dev build…" | APK doesn't have the native module yet | Run Step 4 |
| "Google returned no id_token. Make sure the Web Client ID is configured…" | Missing Android OAuth client or wrong package/SHA-1 | Redo Step 2; double-check SHA-1 matches the keystore you're actually using |
| "Supabase rejected the Google token: …" | Supabase's Google provider isn't accepting our token | Check Supabase → Auth → Providers → Google has the SAME Web Client ID as the one Supabase shows (415469918574-…), and is **enabled** |
| "Google Play Services not available" | Phone genuinely doesn't have Play Services (rare; some no-Google AOSP builds) | Out of scope — most phones have it |

---

## Why this fixes the bug

- WebBrowser ↔ deep link ↔ expo-router was failing at multiple points
  on Bowen's Android (`type=dismiss | NO_URL` per the 2026-05-18 trace)
- Native sign-in skips all three layers
- The Web Client ID stays the source of truth — Supabase still verifies
  the ID token against the same Google project
- One-time setup, then auth is rock-solid

The `/auth/callback` route stays in the codebase as a backstop for any
future provider that might use the redirect flow — it does nothing for
Google now.
