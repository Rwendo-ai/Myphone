/**
 * OAuth sign-in helpers — native Google now, Apple + Crypto stubs for later.
 *
 * Google uses Google's NATIVE sign-in SDK
 * (@react-native-google-signin/google-signin), not a browser-based OAuth
 * flow. This sidesteps the entire Android Chrome-Custom-Tabs + deep-link
 * mess we spent 2026-05-18 chasing: WebBrowser was returning type='dismiss'
 * with no URL on Bowen's Android, and the redirect URL with the auth
 * code was never reaching the app via either WebBrowser intercept or
 * the OS deep-link path.
 *
 * The native flow:
 *   1. GoogleSignin.signIn() opens Google's own SDK dialog (no browser)
 *   2. User picks account, returns an `idToken`
 *   3. We hand the idToken to Supabase via signInWithIdToken
 *   4. Supabase verifies the token and creates the session
 *
 * No redirects, no deep links, no WebBrowser. Works reliably.
 *
 * SETUP REQUIRED (see docs/GOOGLE-SIGN-IN-SETUP.md):
 *   - Android OAuth client in Google Cloud Console with the app's
 *     package name + SHA-1 from EAS Build
 *   - npm install (picks up @react-native-google-signin/google-signin)
 *   - eas build --profile preview --platform android (native module)
 *   - Install the new APK
 *
 * Native-module guarding: lazy-require so an older APK that pre-dates
 * the install doesn't crash the auth screen — instead Google sign-in
 * surfaces a "rebuild required" error.
 */

import { Platform } from 'react-native';
import { supabase } from './supabase';

interface OAuthResult {
  error: string | null;
}

export const OAUTH_READY = {
  google: true,
  apple: false,
  crypto: false,
};

// Web Client ID from Supabase Authentication → Providers → Google.
// This is the SAME Client ID Supabase uses to verify the Google ID
// token on the server side. It's safe to commit (it's a public ID;
// the secret stays in Supabase).
const WEB_CLIENT_ID = '415469918574-lsbjav66pt8k6lmjhbvrektpbjkogphl.apps.googleusercontent.com';

let configured = false;

function ensureConfigured(GoogleSignin: typeof import('@react-native-google-signin/google-signin').GoogleSignin) {
  if (configured) return;
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
    scopes: ['profile', 'email'],
    offlineAccess: false,  // we only need the id_token; refresh handled by Supabase
  });
  configured = true;
}

export async function signInWithGoogle(): Promise<OAuthResult> {
  // Lazy-require so an older APK without the native module doesn't crash.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mod: any;
  try {
    mod = require('@react-native-google-signin/google-signin');
  } catch {
    return {
      error:
        'Google sign-in needs the latest dev build. Rebuild and reinstall the APK from EAS, then try again.',
    };
  }
  const GoogleSignin = mod.GoogleSignin as typeof import('@react-native-google-signin/google-signin').GoogleSignin;
  const statusCodes = mod.statusCodes as typeof import('@react-native-google-signin/google-signin').statusCodes;

  try {
    ensureConfigured(GoogleSignin);
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // signIn returns { type, data: { idToken, user } } in v16+.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await GoogleSignin.signIn();
    if (result.type === 'cancelled') {
      return { error: 'Sign-in cancelled' };
    }
    const idToken: string | undefined = result?.data?.idToken ?? result?.idToken;
    if (!idToken) {
      return { error: 'Google returned no id_token. Make sure the Web Client ID is configured and an Android OAuth client exists in Google Cloud.' };
    }

    const { error: signInErr } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken,
    });
    if (signInErr) return { error: `Supabase rejected the Google token: ${signInErr.message}` };

    return { error: null };
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = e as any;
    if (err?.code === statusCodes?.SIGN_IN_CANCELLED) return { error: 'Sign-in cancelled' };
    if (err?.code === statusCodes?.IN_PROGRESS)        return { error: 'Sign-in already in progress' };
    if (err?.code === statusCodes?.PLAY_SERVICES_NOT_AVAILABLE) {
      return { error: 'Google Play Services not available on this device' };
    }
    return { error: err instanceof Error ? err.message : 'Google sign-in failed' };
  }
}

export async function signOutGoogle(): Promise<void> {
  // Sign out from Google too so the next sign-in shows the account
  // picker again. Best-effort; failures don't block the Supabase signOut.
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = require('@react-native-google-signin/google-signin');
    await mod.GoogleSignin.signOut().catch(() => {});
  } catch {
    // Module not installed — fine.
  }
}

export async function signInWithApple(): Promise<OAuthResult> {
  if (Platform.OS !== 'ios') {
    return { error: 'Apple sign-in is iOS-only' };
  }
  return { error: 'Apple sign-in is being set up — try email or Google for now.' };
}

export async function signInWithCryptoWallet(): Promise<OAuthResult> {
  return { error: 'Wallet sign-in is being set up — try email or Google for now.' };
}
