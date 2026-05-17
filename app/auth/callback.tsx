/**
 * OAuth callback route.
 *
 * Receives `rwendo://auth/callback#access_token=…&refresh_token=…` from
 * Supabase. Calls supabase.auth.setSession with the tokens, waits for
 * AuthContext's listener to actually pick up the new session, then
 * hands control to NavigationGuard via router.replace('/').
 *
 * Two specific Android-on-RN pitfalls this file works around:
 *
 *   1. The deep link arrival is racy.
 *      `Linking.useURL()` is React-friendly but sometimes misses the
 *      first runtime URL event (the hook reads its initial value, and
 *      a URL arriving mid-mount may not trigger a re-render until the
 *      second event). Belt-and-suspenders: we also subscribe via
 *      `Linking.addEventListener('url', …)`, which is the lower-level
 *      reliable source.
 *
 *   2. setSession completes before AuthContext's listener has flushed
 *      React state. If we navigate immediately, NavigationGuard runs
 *      with the stale session=null and bounces the user to /welcome.
 *      Fix: read `session` from useAuth and only navigate once the
 *      context confirms it's actually set. A short timeout fallback
 *      surfaces an error rather than letting the user spin forever.
 */

import { useEffect, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight } from '../../constants/theme';

const WAIT_FOR_CONTEXT_MS = 6000;  // how long to wait for AuthContext to pick up the session

export default function AuthCallbackScreen() {
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  // Tracks whether we've already kicked off setSession for the current
  // URL — prevents duplicate calls when both useURL and the
  // addEventListener backstop fire for the same redirect.
  const handledUrlRef = useRef<string | null>(null);
  const setSessionDoneRef = useRef(false);
  const navigatedRef = useRef(false);

  // The URL we're processing. Updated by both the useURL hook AND the
  // addEventListener backstop.
  const useUrlValue = Linking.useURL();
  const [eventUrl, setEventUrl] = useState<string | null>(null);
  const url = eventUrl ?? useUrlValue;

  // Backstop subscription — catches URL events that useURL() doesn't
  // surface fast enough on Android.
  useEffect(() => {
    const sub = Linking.addEventListener('url', (ev) => {
      if (ev?.url) setEventUrl(ev.url);
    });
    return () => sub.remove();
  }, []);

  // Process the redirect URL once.
  useEffect(() => {
    if (!url) return;
    if (handledUrlRef.current === url) return;

    const tokens = parseTokensFromUrl(url);
    if (!tokens.access_token || !tokens.refresh_token) {
      // The URL has reached us but doesn't carry tokens — only flag
      // an error when it's actually on the callback route (avoids a
      // spurious error on initial-launch URLs that have nothing to
      // do with auth).
      if (url.includes('auth/callback') && !setSessionDoneRef.current) {
        setError('Sign-in completed but no session was returned. Try again.');
      }
      return;
    }

    handledUrlRef.current = url;
    (async () => {
      try {
        const { error: setErr } = await supabase.auth.setSession({
          access_token: tokens.access_token!,
          refresh_token: tokens.refresh_token!,
        });
        if (setErr) {
          setError(setErr.message);
          return;
        }
        setSessionDoneRef.current = true;
        // DO NOT navigate yet — wait for AuthContext to pick up the
        // session. The effect below watches `session` and navigates
        // once it's confirmed.
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Sign-in failed');
      }
    })();
  }, [url]);

  // Navigate once AuthContext confirms the session is set. Falls
  // back to a timeout error if the context never updates (should
  // only happen if the auth listener is wedged).
  useEffect(() => {
    if (navigatedRef.current) return;
    if (!setSessionDoneRef.current) return;

    if (session) {
      navigatedRef.current = true;
      router.replace('/');
      return;
    }

    // Session not set yet — wait, then surface an error so the user
    // isn't stuck on the spinner forever.
    const t = setTimeout(() => {
      if (navigatedRef.current) return;
      if (!session) {
        setError('Sign-in completed but the session didn\'t persist. Tap below to try again.');
      }
    }, WAIT_FOR_CONTEXT_MS);
    return () => clearTimeout(t);
  }, [session]);

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

function parseTokensFromUrl(url: string): { access_token?: string; refresh_token?: string } {
  // Supabase OAuth redirects use the URL fragment (#) for tokens. Try
  // the fragment first, then fall back to query in case a normaliser
  // has flipped them.
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
