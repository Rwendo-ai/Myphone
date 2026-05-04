/**
 * OAuth sign-in helpers — Google now, Apple + Crypto stubs for later.
 *
 * Google uses Supabase's hosted OAuth flow opened in `expo-web-browser`.
 * The redirect lands at a `rwendo://auth/callback` deep link that triggers
 * the auth state listener.
 *
 * Native-module guarding: `expo-web-browser` and `expo-auth-session` both
 * require native code linked into the APK at EAS build time. If the user is
 * running an older dev APK that pre-dates the install, importing these
 * modules at top level crashes the entire auth screen with "Cannot find
 * native module 'ExpoWebBrowser'". To prevent that, we require the deps
 * lazily inside the sign-in handler — auth screens render cleanly, and
 * tapping Google in an older APK surfaces a clear actionable error rather
 * than a crash.
 */

import { Platform } from 'react-native';
import { supabase } from './supabase';

interface OAuthResult {
  error: string | null;
}

/**
 * Whether each provider is wired and ready to surface in the UI. Apple +
 * Crypto stay false until the dashboard work is done; flipping these to
 * true is the only code change needed once setup is complete.
 */
export const OAUTH_READY = {
  google: true,
  apple: false,
  crypto: false,
};

/**
 * Begin Google sign-in. Lazy-imports the native modules so that an older
 * dev APK without them surfaces a friendly error rather than crashing on
 * screen mount.
 */
export async function signInWithGoogle(): Promise<OAuthResult> {
  // Lazy-load native deps. Wrapped in a try so a missing module surfaces a
  // human message, not a JS crash.
  let WebBrowser: typeof import('expo-web-browser');
  let AuthSession: typeof import('expo-auth-session');
  try {
    WebBrowser = require('expo-web-browser');
    AuthSession = require('expo-auth-session');
  } catch {
    return {
      error:
        'Google sign-in needs the latest dev build. Reinstall the APK from EAS, then try again.',
    };
  }

  // Cleans up the auth tab on web and is a no-op on native — safe to call
  // every time signInWithGoogle is invoked.
  WebBrowser.maybeCompleteAuthSession();

  try {
    // In dev this is `exp://...`, in a built APK it's `rwendo://auth/callback`.
    const redirectTo = AuthSession.makeRedirectUri({
      scheme: 'rwendo',
      path: 'auth/callback',
    });

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        skipBrowserRedirect: true, // we open the browser ourselves
      },
    });

    if (error || !data?.url) {
      return { error: error?.message ?? 'No OAuth URL returned' };
    }

    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
    if (result.type !== 'success') {
      return { error: 'Sign-in cancelled' };
    }

    // Parse the access_token + refresh_token out of the redirect URL and
    // hand them to Supabase. Web flows handle this automatically; in RN we
    // do it manually.
    const params = parseHashOrQuery(result.url);
    if (params.access_token && params.refresh_token) {
      const { error: setErr } = await supabase.auth.setSession({
        access_token: params.access_token,
        refresh_token: params.refresh_token,
      });
      if (setErr) return { error: setErr.message };
    }

    return { error: null };
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Google sign-in failed' };
  }
}

/**
 * Stub for Apple sign-in. Once the Services ID is configured and
 * `expo-apple-authentication` is installed, this becomes a real call.
 */
export async function signInWithApple(): Promise<OAuthResult> {
  if (Platform.OS !== 'ios') {
    return { error: 'Apple sign-in is iOS-only' };
  }
  return {
    error: 'Apple sign-in is being set up — try email or Google for now.',
  };
}

/**
 * Stub for crypto wallet sign-in via WalletConnect.
 */
export async function signInWithCryptoWallet(): Promise<OAuthResult> {
  return {
    error: 'Wallet sign-in is being set up — try email or Google for now.',
  };
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function parseHashOrQuery(url: string): Record<string, string> {
  // Supabase OAuth redirects typically use the URL fragment (#) for tokens.
  // Try both fragment and query just in case the deep-link normalisation
  // flips the order.
  const out: Record<string, string> = {};
  const hashIdx = url.indexOf('#');
  const queryIdx = url.indexOf('?');
  const splitIdx = hashIdx >= 0 ? hashIdx : queryIdx;
  if (splitIdx < 0) return out;
  const pairs = url.slice(splitIdx + 1).split('&');
  for (const p of pairs) {
    const [k, v] = p.split('=');
    if (k) out[decodeURIComponent(k)] = decodeURIComponent(v ?? '');
  }
  return out;
}
