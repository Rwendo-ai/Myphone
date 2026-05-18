/**
 * OAuth callback route — backstop only.
 *
 * Native Google sign-in (see lib/oauth.ts) is now the primary path
 * and doesn't go through deep links at all. This route stays as a
 * legacy / future-provider backstop: if any flow ever redirects to
 * `rwendo://auth/callback?code=…`, we still handle it.
 *
 * NavigationGuard in app/_layout.tsx exempts this route from the
 * no-session redirect (it'd otherwise bounce us to /welcome before
 * we can process the URL).
 */

import { useEffect, useMemo, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { router, useLocalSearchParams } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight } from '../../constants/theme';

export default function AuthCallbackScreen() {
  const [error, setError] = useState<string | null>(null);
  const [processedKey, setProcessedKey] = useState<string | null>(null);
  const [navigated, setNavigated] = useState(false);
  const { session } = useAuth();

  const routeParams = useLocalSearchParams<{
    code?: string;
    access_token?: string;
    refresh_token?: string;
    state?: string;
    error?: string;
    error_description?: string;
  }>();

  const useUrlValue = Linking.useURL();
  const [eventUrl, setEventUrl] = useState<string | null>(null);
  const linkingUrl = eventUrl ?? useUrlValue;

  useEffect(() => {
    const sub = Linking.addEventListener('url', (ev) => {
      if (ev?.url) setEventUrl(ev.url);
    });
    return () => sub.remove();
  }, []);

  const params = useMemo(() => {
    if (routeParams.code || routeParams.access_token) {
      return routeParams;
    }
    return linkingUrl ? parseUrlParams(linkingUrl) : {};
  }, [routeParams, linkingUrl]);
  const paramsKey = (params as Record<string, string | undefined>).code
    ?? (params as Record<string, string | undefined>).access_token
    ?? null;

  // Immediate session check on mount — if a session exists, navigate.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (cancelled || navigated) return;
      if (data?.session) {
        setNavigated(true);
        router.replace('/');
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Process params once.
  useEffect(() => {
    if (!paramsKey || processedKey === paramsKey) return;
    const p = params as Record<string, string | undefined>;
    const hasTokens = !!(p.access_token && p.refresh_token);
    const hasCode   = !!p.code;
    if (!hasTokens && !hasCode) return;

    setProcessedKey(paramsKey);
    (async () => {
      try {
        if (hasCode) {
          const { error: exErr } = await supabase.auth.exchangeCodeForSession(p.code!);
          if (exErr) console.warn('[auth-callback] exchange:', exErr.message);
        } else {
          const { error: setErr } = await supabase.auth.setSession({
            access_token: p.access_token!,
            refresh_token: p.refresh_token!,
          });
          if (setErr) console.warn('[auth-callback] setSession:', setErr.message);
        }
      } catch (e) {
        console.warn('[auth-callback] processing threw:', e);
      }
    })();
  }, [paramsKey, params, processedKey]);

  // Navigate when session is set (via either AuthContext or our processing).
  useEffect(() => {
    if (navigated) return;
    if (!session) return;
    setNavigated(true);
    router.replace('/');
  }, [session, navigated]);

  // Poll getSession as a backup — the auth state listener is unreliable.
  useEffect(() => {
    if (navigated) return;
    if (!processedKey) return;
    let cancelled = false;
    let polls = 0;
    const tick = async () => {
      if (cancelled || navigated) return;
      polls++;
      const { data } = await supabase.auth.getSession();
      if (cancelled || navigated) return;
      if (data?.session) {
        setNavigated(true);
        router.replace('/');
        return;
      }
      if (polls >= 33) {
        setError("Sign-in didn't complete. Tap below to retry.");
        return;
      }
      setTimeout(tick, 300);
    };
    setTimeout(tick, 200);
    return () => { cancelled = true; };
  }, [processedKey, navigated]);

  return (
    <LinearGradient colors={[Colors.primary, '#0D2140']} style={styles.container}>
      <View style={styles.center}>
        {error ? (
          <>
            <Text style={styles.title}>Sign-in didn't complete</Text>
            <Text style={styles.body}>{error}</Text>
            <Pressable style={styles.btn} onPress={() => router.replace('/sign-in')}>
              <Text style={styles.btnText}>Back to sign-in</Text>
            </Pressable>
          </>
        ) : (
          <>
            <ActivityIndicator color={Colors.white} size="large" />
            <Text style={styles.body}>Finishing sign-in…</Text>
          </>
        )}
      </View>
    </LinearGradient>
  );
}

function parseUrlParams(url: string): Record<string, string> {
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
