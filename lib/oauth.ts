/**
 * OAuth sign-in helpers — Google now, Apple + Crypto stubs for later.
 *
 * Google uses Supabase's hosted OAuth flow via the implicit
 * `signInWithOAuth({ provider: 'google' })` API. Supabase opens a system
 * browser, redirects to Google, then back to a deep-link Rwendo handles —
 * `rwendo://auth/callback`. No native dep needed; works in Expo Go and dev
 * client equally.
 *
 * Apple sign-in (deferred): needs `expo-apple-authentication` (iOS only,
 * native dep → EAS rebuild) plus a configured Services ID + .p8 key
 * uploaded to Supabase Auth Providers. The `signInWithApple` stub returns
 * a "not configured" error until both pieces are in place.
 *
 * Crypto wallet (deferred): needs WalletConnect's RN SDK + a project ID.
 * Not enabled yet.
 */

import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { Platform } from 'react-native';
import { supabase } from './supabase';

// Maybe-required on web; harmless on native. Closes the browser tab cleanly
// when the auth completes and the deep link returns the user to the app.
WebBrowser.maybeCompleteAuthSession();

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

interface OAuthResult {
  error: string | null;
}

/**
 * Begin Google sign-in. Opens the system browser for Google's consent
 * screen, then deep-links back into Rwendo with the session attached.
 * Supabase's onAuthStateChange listener (in AuthContext) picks it up —
 * we don't need to do anything here once the redirect completes.
 */
export async function signInWithGoogle(): Promise<OAuthResult> {
  try {
    // Build the deep-link redirect URL. In dev this is `exp://...`, in a
    // built APK it's `rwendo://auth/callback`.
    const redirectTo = AuthSession.makeRedirectUri({
      scheme: 'rwendo',
      path: 'auth/callback',
    });

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        skipBrowserRedirect: true, // we'll open it ourselves with WebBrowser
      },
    });

    if (error || !data?.url) {
      return { error: error?.message ?? 'No OAuth URL returned' };
    }

    // Open the system browser pointed at Google's consent page. Returns
    // when the user finishes (or cancels) and the deep link fires.
    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

    if (result.type !== 'success') {
      return { error: 'Sign-in cancelled' };
    }

    // Extract the URL fragments (access_token, refresh_token) from the
    // redirect URL and feed them to Supabase. Web flows handle this
    // automatically, but in RN we have to parse it ourselves.
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
 * iOS only — surfaces a clear message on Android.
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
  // Supabase OAuth redirects typically use the URL fragment (#) for tokens
  // because the access_token shouldn't be sent to a server. Try both just
  // in case the deep-link normalisation flips the order.
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
