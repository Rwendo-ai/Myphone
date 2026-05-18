/**
 * OAuth callback route — DEBUG BUILD.
 *
 * The auth-state listener isn't firing for Bowen and the polling
 * fallback isn't catching the session either. The session DOES persist
 * (force-close recovers signed-in state). So the failure is between
 * "exchange succeeds on the wire" and "session shows up to the
 * client".
 *
 * This build surfaces every internal step on screen so we can SEE
 * what's going on rather than guess. Strip the debug panel once the
 * issue is fixed.
 */

import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight } from '../../constants/theme';

export default function AuthCallbackScreen() {
  const [error, setError] = useState<string | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [navigated, setNavigated] = useState(false);
  const { session } = useAuth();

  // ── Visible debug log ───────────────────────────────────────────────
  const [debug, setDebug] = useState<string[]>([]);
  const log = (s: string) => {
    const ts = new Date().toISOString().slice(14, 23);  // mm:ss.SSS
    setDebug((d) => [...d.slice(-25), `${ts} ${s}`]);
  };

  useEffect(() => { log(`MOUNT`); }, []);

  // ── URL capture ─────────────────────────────────────────────────────
  const useUrlValue = Linking.useURL();
  const [eventUrl, setEventUrl] = useState<string | null>(null);
  const url = eventUrl ?? useUrlValue;

  useEffect(() => {
    const sub = Linking.addEventListener('url', (ev) => {
      if (ev?.url) {
        log(`event-url: ${shortUrl(ev.url)}`);
        setEventUrl(ev.url);
      }
    });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (useUrlValue) log(`useURL: ${shortUrl(useUrlValue)}`);
  }, [useUrlValue]);

  // ── Initial session check on mount ──────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (cancelled || navigated) return;
      log(`mount-getSession: ${data?.session ? 'HAS session' : 'null'}`);
      if (data?.session) {
        setNavigated(true);
        router.replace('/');
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Effect 1: process URL ───────────────────────────────────────────
  useEffect(() => {
    if (!url) return;
    if (processedUrl === url) return;

    const params = parseUrlParams(url);
    const hasTokens = !!(params.access_token && params.refresh_token);
    const hasCode   = !!params.code;
    log(`parse: code=${hasCode ? 'Y' : 'N'} tokens=${hasTokens ? 'Y' : 'N'}`);

    if (params.error) log(`url-error: ${params.error} ${params.error_description ?? ''}`);

    if (!hasTokens && !hasCode) {
      if (url.includes('auth/callback')) {
        setError(`No tokens/code in URL.\n\nURL: ${shortUrl(url)}`);
      }
      return;
    }

    setProcessedUrl(url);
    (async () => {
      try {
        if (hasCode) {
          log(`exchange-start: code=${params.code!.slice(0, 6)}…`);
          const { data, error: exErr } = await supabase.auth.exchangeCodeForSession(params.code!);
          if (exErr) {
            log(`exchange-ERR: ${exErr.message.slice(0, 60)}`);
          } else {
            log(`exchange-OK: session=${data?.session ? 'YES' : 'NO'}`);
          }
        } else {
          log(`setSession-start`);
          const { error: setErr } = await supabase.auth.setSession({
            access_token: params.access_token!,
            refresh_token: params.refresh_token!,
          });
          log(setErr ? `setSession-ERR: ${setErr.message.slice(0, 60)}` : `setSession-OK`);
        }
      } catch (e) {
        log(`exception: ${e instanceof Error ? e.message.slice(0, 60) : String(e)}`);
      }
    })();
  }, [url, processedUrl]);

  // ── Effect 2: navigate via AuthContext session ──────────────────────
  useEffect(() => {
    if (navigated) return;
    if (!session) return;
    log(`useAuth.session set → navigate`);
    setNavigated(true);
    router.replace('/');
  }, [session, navigated]);

  // ── Effect 3: poll getSession() ─────────────────────────────────────
  useEffect(() => {
    if (navigated) return;
    if (!processedUrl) return;
    let cancelled = false;
    let pollCount = 0;
    const MAX = 33;

    const tick = async () => {
      if (cancelled || navigated) return;
      pollCount++;
      try {
        const { data } = await supabase.auth.getSession();
        if (cancelled || navigated) return;
        if (data?.session) {
          log(`poll #${pollCount}: HAS session → navigate`);
          setNavigated(true);
          router.replace('/');
          return;
        }
        if (pollCount === 1 || pollCount % 5 === 0) {
          log(`poll #${pollCount}: null`);
        }
      } catch (e) {
        log(`poll #${pollCount}: err ${e instanceof Error ? e.message.slice(0, 40) : ''}`);
      }
      if (pollCount >= MAX) {
        log(`poll timeout @ ${pollCount}`);
        setError(`Session never appeared after ${pollCount} polls.`);
        return;
      }
      setTimeout(tick, 300);
    };
    setTimeout(tick, 150);
    return () => { cancelled = true; };
  }, [processedUrl, navigated]);

  // Manual override — if the session is somehow set but our effects
  // didn't catch it, the user can tap "Continue" to force the redirect.
  const handleContinue = async () => {
    const { data } = await supabase.auth.getSession();
    if (data?.session) {
      router.replace('/');
    } else {
      log('manual-continue: still no session');
    }
  };

  return (
    <LinearGradient colors={[Colors.primary, '#0D2140']} style={styles.container}>
      <View style={styles.center}>
        {error ? (
          <>
            <Text style={styles.title}>Sign-in didn't complete</Text>
            <Text style={styles.body}>{error}</Text>
            <Pressable style={styles.btn} onPress={handleContinue}>
              <Text style={styles.btnText}>Continue anyway</Text>
            </Pressable>
            <Pressable style={[styles.btn, styles.btnSecondary]} onPress={() => router.replace('/sign-in')}>
              <Text style={styles.btnText}>Back to sign-in</Text>
            </Pressable>
          </>
        ) : (
          <>
            <ActivityIndicator color={Colors.white} size="large" />
            <Text style={styles.body}>Finishing sign-in…</Text>
            <Pressable style={[styles.btn, styles.btnSecondary]} onPress={handleContinue}>
              <Text style={styles.btnText}>Continue anyway</Text>
            </Pressable>
          </>
        )}
      </View>

      {/* DEBUG PANEL — strip after the bug is fixed. */}
      <ScrollView style={styles.debugWrap} contentContainerStyle={styles.debugInner}>
        <Text style={styles.debugHeader}>auth-callback debug log:</Text>
        {debug.length === 0 ? (
          <Text style={styles.debugLine}>(no events yet)</Text>
        ) : debug.map((d, i) => (
          <Text key={i} style={styles.debugLine}>{d}</Text>
        ))}
      </ScrollView>
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

function shortUrl(u: string): string {
  if (u.length <= 70) return u;
  return `${u.slice(0, 50)}…${u.slice(-15)}`;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: Spacing.lg, gap: Spacing.md },
  title: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.white },
  body: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.8)', textAlign: 'center' },
  btn: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: 999,
    marginTop: Spacing.md,
  },
  btnSecondary: { backgroundColor: 'rgba(255,255,255,0.15)' },
  btnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },

  debugWrap: {
    maxHeight: 260,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  debugInner: { padding: Spacing.md, paddingBottom: Spacing.lg },
  debugHeader: { color: '#aaa', fontSize: 10, fontWeight: '700', marginBottom: 6, letterSpacing: 1 },
  debugLine: { color: '#7fdf95', fontSize: 11, fontFamily: 'monospace', lineHeight: 16 },
});
