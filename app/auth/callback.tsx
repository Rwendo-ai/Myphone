/**
 * OAuth callback route — backstop only.
 *
 * Native Google sign-in (see lib/oauth.ts) is the primary path and does
 * NOT route through here. This screen exists for any future provider
 * that uses a redirect flow (`rwendo://auth/callback?code=…`). expo-router
 * surfaces those query params via useLocalSearchParams; we exchange them
 * for a session and navigate home.
 *
 * NavigationGuard exempts this route so it can run before a session exists.
 */

import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight } from '../../constants/theme';

export default function AuthCallbackScreen() {
  const [error, setError] = useState<string | null>(null);
  const { session } = useAuth();

  const { code, access_token, refresh_token } = useLocalSearchParams<{
    code?: string;
    access_token?: string;
    refresh_token?: string;
  }>();

  // Exchange the URL params for a session. Runs once.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (code) {
          const { error: exErr } = await supabase.auth.exchangeCodeForSession(code);
          if (exErr) console.warn('[auth-callback] exchange:', exErr.message);
        } else if (access_token && refresh_token) {
          const { error: setErr } = await supabase.auth.setSession({
            access_token, refresh_token,
          });
          if (setErr) console.warn('[auth-callback] setSession:', setErr.message);
        }
      } catch (e) {
        console.warn('[auth-callback] processing threw:', e);
      }
      // Safety timeout: if nothing has navigated us out within 10s, show
      // a recovery button. The auth listener in AuthContext normally
      // fires SIGNED_IN well before this.
      setTimeout(() => {
        if (!cancelled) setError("Sign-in didn't complete. Tap below to retry.");
      }, 10000);
    })();
    return () => { cancelled = true; };
  }, [code, access_token, refresh_token]);

  // Navigate as soon as the session shows up.
  useEffect(() => {
    if (session) router.replace('/');
  }, [session]);

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
