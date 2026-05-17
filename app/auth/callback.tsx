/**
 * OAuth callback route.
 *
 * Receives `rwendo://auth/callback?code=…` (PKCE — Supabase mobile
 * default) or `#access_token=…&refresh_token=…` (implicit — legacy).
 * Processes the URL into a session, then navigates home as soon as
 * AuthContext reports session !== null.
 *
 * Two effects, deliberately independent:
 *   1. Process URL once (exchangeCodeForSession or setSession).
 *   2. Navigate when session becomes set — single source of truth.
 *
 * No coordination via refs between (1) and (2). Whichever path
 * sets the session wins (lib/oauth.ts intercept or our processing
 * here). This avoids the previous race where a useRef flag set
 * after session change couldn't trigger a re-render.
 *
 * NavigationGuard in app/_layout.tsx has an explicit exemption for
 * this route — it must NOT redirect away from /auth/callback while
 * session is null (which it always is when the deep link first
 * arrives). Bowen 2026-05-18.
 */

import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight } from '../../constants/theme';

const TIMEOUT_MS = 10_000;

export default function AuthCallbackScreen() {
  const [error, setError] = useState<string | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [navigated, setNavigated] = useState(false);
  const { session } = useAuth();

  // Capture URL from BOTH sources — useURL() is React-friendly but
  // can miss the first runtime event on Android; addEventListener
  // is the lower-level guarantee. Whichever fires first wins.
  const useUrlValue = Linking.useURL();
  const [eventUrl, setEventUrl] = useState<string | null>(null);
  const url = eventUrl ?? useUrlValue;

  useEffect(() => {
    const sub = Linking.addEventListener('url', (ev) => {
      if (ev?.url) setEventUrl(ev.url);
    });
    return () => sub.remove();
  }, []);

  // ── Effect 1: process the URL exactly once. ─────────────────────────
  useEffect(() => {
    if (!url) return;
    if (processedUrl === url) return;

    const params = parseUrlParams(url);
    const hasTokens = !!(params.access_token && params.refresh_token);
    const hasCode   = !!params.code;

    if (!hasTokens && !hasCode) {
      // Don't error on non-auth URLs (initial-launch URLs that have
      // nothing to do with auth would otherwise spuriously surface
      // here).
      if (url.includes('auth/callback')) {
        setError(`Sign-in completed but no tokens or code in URL.\n\nURL: ${url.substring(0, 200)}`);
      }
      return;
    }

    setProcessedUrl(url);
    (async () => {
      try {
        if (hasCode) {
          const { error: exErr } = await supabase.auth.exchangeCodeForSession(params.code!);
          // If lib/oauth.ts already consumed the code (Android double-
          // delivery path) exchange fails. That's fine — session is
          // already set; effect 2 will navigate. Log only.
          if (exErr) console.warn('[auth-callback] exchange:', exErr.message);
        } else {
          const { error: setErr } = await supabase.auth.setSession({
            access_token: params.access_token!,
            refresh_token: params.refresh_token!,
          });
          if (setErr) console.warn('[auth-callback] setSession:', setErr.message);
        }
      } catch (e) {
        console.warn('[auth-callback] processing threw:', e);
      }
    })();
  }, [url, processedUrl]);

  // ── Effect 2: navigate when AuthContext session is set. ────────────
  // Primary path when onAuthStateChange fires properly.
  useEffect(() => {
    if (navigated) return;
    if (!session) return;
    setNavigated(true);
    router.replace('/');
  }, [session, navigated]);

  // ── Effect 3: POLL supabase.auth.getSession() as a backup. ─────────
  // Bowen 2026-05-18: on Bowen's device the onAuthStateChange listener
  // doesn't fire after exchangeCodeForSession even though the session
  // is correctly persisted to AsyncStorage (force-close + reopen lands
  // him signed in). Polling getSession bypasses the listener entirely.
  // We start polling after URL processing kicks off, and stop the
  // moment we find a session OR the user navigates away.
  useEffect(() => {
    if (navigated) return;
    if (!processedUrl) return;
    let cancelled = false;
    let pollCount = 0;
    const POLL_INTERVAL_MS = 300;
    const MAX_POLLS = 33;  // ~10 seconds total

    const tick = async () => {
      if (cancelled || navigated) return;
      pollCount++;
      try {
        const { data } = await supabase.auth.getSession();
        if (cancelled || navigated) return;
        if (data?.session) {
          setNavigated(true);
          router.replace('/');
          return;
        }
      } catch (e) {
        console.warn('[auth-callback] getSession poll:', e);
      }
      if (pollCount >= MAX_POLLS) {
        if (!cancelled && !navigated) {
          setError(`Sign-in didn't complete after ${(MAX_POLLS * POLL_INTERVAL_MS / 1000).toFixed(0)}s. Try again.`);
        }
        return;
      }
      setTimeout(tick, POLL_INTERVAL_MS);
    };

    // Small initial delay so exchangeCodeForSession has a moment to
    // write the session to storage before the first poll.
    const initial = setTimeout(tick, 200);
    return () => {
      cancelled = true;
      clearTimeout(initial);
    };
  }, [processedUrl, navigated]);

  return (
    <LinearGradient colors={[Colors.primary, '#0D2140']} style={styles.container}>
      {error ? (
        <View style={styles.center}>
          <Text style={styles.title}>Sign-in didn't complete</Text>
          <Text style={styles.body}>{error}</Text>
          <Pressable style={styles.btn} onPress={() => router.replace('/sign-in')}>
            <Text style={styles.btnText}>Back to sign-in</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.center}>
          <ActivityIndicator color={Colors.white} size="large" />
          <Text style={styles.body}>Finishing sign-in…</Text>
        </View>
      )}
    </LinearGradient>
  );
}

function parseUrlParams(url: string): {
  access_token?: string;
  refresh_token?: string;
  code?: string;
  state?: string;
} {
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

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: Spacing.lg, gap: Spacing.lg },
  title: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  body: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.8)', textAlign: 'center' },
  btn: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: 999,
    marginTop: Spacing.md,
  },
  btnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});
