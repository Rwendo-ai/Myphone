/**
 * OAuth callback route.
 *
 * Supabase's OAuth flow redirects here with `access_token` and
 * `refresh_token` in the URL fragment (#) after a successful Google /
 * Apple / etc. sign-in. The browser-launched WebBrowser session SHOULD
 * intercept this URL and hand it back to lib/oauth.ts before the OS deep-
 * link mechanism fires — but on Android the OS sometimes routes the deep
 * link first, landing us here. This route handles that case as a backup:
 * pulls the tokens out of the URL, calls supabase.auth.setSession, and
 * lets NavigationGuard route the now-authed user to onboarding or home.
 *
 * Without this route, expo-router 404s the deep link with an "Unmatched
 * Route" page and the sign-in never completes.
 */

import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight } from '../../constants/theme';

export default function AuthCallbackScreen() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // Pull the full URL the app was opened with — that's where the
        // tokens live (in the # fragment).
        const initialUrl = await Linking.getInitialURL();
        const url = initialUrl ?? '';
        const tokens = parseTokensFromUrl(url);

        if (!tokens.access_token || !tokens.refresh_token) {
          setError('Sign-in completed but no session was returned. Try again.');
          return;
        }

        const { error: setErr } = await supabase.auth.setSession({
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
        });
        if (setErr) {
          setError(setErr.message);
          return;
        }

        // Auth state listener in AuthContext picks up the new session and
        // NavigationGuard routes us to onboarding (first time) or home
        // (returning user). We just need to leave this route so the guard
        // can take over.
        router.replace('/');
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Sign-in failed');
      }
    })();
  }, []);

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
  // Supabase OAuth redirects use the URL fragment (#) for tokens. Try the
  // fragment first, then fall back to query in case a normaliser has
  // flipped them.
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
