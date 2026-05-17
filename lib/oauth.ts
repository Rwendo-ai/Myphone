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

    // Don't bail on 'cancel' immediately. On Android the OS sometimes
    // routes the deep link to the running app before WebBrowser can
    // intercept it — WebBrowser then returns 'cancel' even though
    // /auth/callback has actually already set the session. Both paths
    // can also race when the intercept does work, so wrap the auth
    // calls in try/catch and let waitForSession() below be the source
    // of truth.
    if (result.type === 'success') {
      const params = parseHashOrQuery(result.url);
      // Supabase v2 defaults to PKCE on mobile — the redirect URL will
      // carry `code=…` not `access_token=…`. Handle both shapes; the
      // /auth/callback route does the same.
      try {
        if (params.code) {
          await supabase.auth.exchangeCodeForSession(params.code);
        } else if (params.access_token && params.refresh_token) {
          await supabase.auth.setSession({
            access_token: params.access_token,
            refresh_token: params.refresh_token,
          });
        }
      } catch {
        // /auth/callback may have set it first — that's fine.
      }
    }

    // Wait up to 5s for a session to actually materialise. Polls
    // supabase.auth.getSession() so both the intercept path and the
    // deep-link path are covered. Returns true on first non-null
    // session, false on timeout.
    const ok = await waitForSession(5000);
    if (ok) return { error: null };

    // Genuine failure or the user really did cancel.
    return {
      error:
        result.type === 'success'
          ? "Sign-in completed but session didn't persist. Try again."
          : 'Sign-in cancelled',
    };
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Google sign-in failed' };
  }
}

async function waitForSession(timeoutMs: number): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const { data } = await supabase.auth.getSession();
    if (data?.session) return true;
    await new Promise((r) => setTimeout(r, 200));
  }
  return false;
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
  // Supabase implicit-flow puts tokens in the hash (#access_token=…),
  // PKCE puts the code in the query (?code=…). Parse BOTH so we can
  // detect either shape from a single helper.
  const out: Record<string, string> = {};
  const grab = (segment: string) => {
    for (const p of segment.split('&')) {
      const [k, v] = p.split('=');
      if (k) out[decodeURIComponent(k)] = decodeURIComponent(v ?? '');
    }
  };
  const hashIdx  = url.indexOf('#');
  const queryIdx = url.indexOf('?');
  if (hashIdx  >= 0) grab(url.slice(hashIdx  + 1));
  if (queryIdx >= 0 && (hashIdx < 0 || queryIdx < hashIdx)) {
    grab(url.slice(queryIdx + 1, hashIdx >= 0 ? hashIdx : url.length));
  }
  return out;
}
