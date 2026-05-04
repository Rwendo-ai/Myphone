/**
 * Sign-in screen.
 *
 * Mirrors the sign-up layout: OAuth bar at top → "OR" divider → email +
 * password form. No checkboxes here; consents are recorded once at signup.
 */

import { View, Text, StyleSheet, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../lib/AuthContext';
import { OAUTH_READY, signInWithGoogle, signInWithApple, signInWithCryptoWallet } from '../../lib/oauth';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function SignInScreen() {
  const { t } = useTranslation('auth');
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<null | 'google' | 'apple' | 'crypto'>(null);

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert(t('sign_in.missing_title'), t('sign_in.missing_body'));
      return;
    }
    setLoading(true);
    const { error } = await signIn(email.trim(), password);
    setLoading(false);
    if (error) {
      Alert.alert(t('sign_in.fail_title'), error);
    }
  };

  const handleGoogle = async () => {
    if (oauthLoading) return;
    setOauthLoading('google');
    const { error } = await signInWithGoogle();
    setOauthLoading(null);
    if (error) Alert.alert(t('sign_up.oauth.fail_title'), error);
  };
  const handleApple = async () => {
    if (oauthLoading) return;
    setOauthLoading('apple');
    const { error } = await signInWithApple();
    setOauthLoading(null);
    if (error) Alert.alert(t('sign_up.oauth.fail_title'), error);
  };
  const handleCrypto = async () => {
    if (oauthLoading) return;
    setOauthLoading('crypto');
    const { error } = await signInWithCryptoWallet();
    setOauthLoading(null);
    if (error) Alert.alert(t('sign_up.oauth.fail_title'), error);
  };

  const enabledOAuthCount =
    Number(OAUTH_READY.google) +
    Number(OAUTH_READY.apple) +
    Number(OAUTH_READY.crypto);
  const oauthOnlyOne = enabledOAuthCount === 1;

  return (
    <LinearGradient colors={[Colors.primary, '#0D2140']} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scroll}
        enableOnAndroid
        enableAutomaticScroll
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={32}
      >
        <Pressable
          style={styles.back}
          onPress={() => router.canGoBack() ? router.back() : router.replace('/welcome')}
        >
          <Text style={styles.backText}>{t('back')}</Text>
        </Pressable>

        <View style={styles.header}>
          <Text style={styles.title}>{t('sign_in.title')}</Text>
          <Text style={styles.subtitle}>{t('sign_in.subtitle')}</Text>
        </View>

        {/* OAuth bar — same component shape as sign-up */}
        {enabledOAuthCount > 0 && (
          <View style={[styles.oauthBar, oauthOnlyOne && styles.oauthBarSingle]}>
            {OAUTH_READY.google && (
              <Pressable
                style={[styles.oauthBtn, oauthOnlyOne && styles.oauthBtnWide]}
                onPress={handleGoogle}
                disabled={!!oauthLoading}
              >
                {oauthLoading === 'google'
                  ? <ActivityIndicator color={Colors.white} size="small" />
                  : (
                    <>
                      <Text style={styles.oauthIcon}>G</Text>
                      {oauthOnlyOne && <Text style={styles.oauthLabel}>{t('sign_up.oauth.continue_google')}</Text>}
                    </>
                  )}
              </Pressable>
            )}
            {OAUTH_READY.apple && (
              <Pressable
                style={[styles.oauthBtn, oauthOnlyOne && styles.oauthBtnWide]}
                onPress={handleApple}
                disabled={!!oauthLoading}
              >
                {oauthLoading === 'apple'
                  ? <ActivityIndicator color={Colors.white} size="small" />
                  : (
                    <>
                      <Text style={styles.oauthIcon}>{''}</Text>
                      {oauthOnlyOne && <Text style={styles.oauthLabel}>{t('sign_up.oauth.continue_apple')}</Text>}
                    </>
                  )}
              </Pressable>
            )}
            {OAUTH_READY.crypto && (
              <Pressable
                style={[styles.oauthBtn, oauthOnlyOne && styles.oauthBtnWide]}
                onPress={handleCrypto}
                disabled={!!oauthLoading}
              >
                {oauthLoading === 'crypto'
                  ? <ActivityIndicator color={Colors.white} size="small" />
                  : (
                    <>
                      <Text style={styles.oauthIcon}>⊞</Text>
                      {oauthOnlyOne && <Text style={styles.oauthLabel}>{t('sign_up.oauth.continue_crypto')}</Text>}
                    </>
                  )}
              </Pressable>
            )}
          </View>
        )}

        {enabledOAuthCount > 0 && (
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{t('sign_up.or_divider')}</Text>
            <View style={styles.dividerLine} />
          </View>
        )}

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>{t('sign_in.email_label')}</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder={t('sign_in.email_placeholder')}
              placeholderTextColor="rgba(255,255,255,0.3)"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{t('sign_in.password_label')}</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder={t('sign_in.password_placeholder')}
              placeholderTextColor="rgba(255,255,255,0.3)"
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={handleSignIn}
            />
          </View>
        </View>

        <Pressable
          style={[styles.primaryBtn, loading && styles.primaryBtnDisabled]}
          onPress={handleSignIn}
          disabled={loading}
        >
          {loading
            ? <ActivityIndicator color={Colors.white} />
            : <Text style={styles.primaryBtnText}>{t('sign_in.submit')}</Text>
          }
        </Pressable>

        <Pressable style={styles.switchLink} onPress={() => router.replace('/sign-up')}>
          <Text style={styles.switchText}>{t('sign_in.switch_text')}<Text style={styles.switchTextBold}>{t('sign_in.switch_action')}</Text></Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: Spacing.lg, paddingTop: Spacing.xxl, gap: Spacing.lg },
  back: { paddingBottom: Spacing.sm },
  backText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md },
  header: { gap: Spacing.sm, marginBottom: Spacing.sm },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white },
  subtitle: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.6)' },

  oauthBar: {
    flexDirection: 'row',
    gap: Spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.lg,
    padding: Spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  oauthBarSingle: { backgroundColor: 'transparent', borderColor: 'transparent', padding: 0 },
  oauthBtn: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  oauthBtnWide: { aspectRatio: undefined, paddingVertical: Spacing.md, paddingHorizontal: Spacing.lg },
  oauthIcon: { color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold },
  oauthLabel: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold },

  dividerRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  dividerLine: { flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.15)' },
  dividerText: { color: 'rgba(255,255,255,0.45)', fontSize: FontSize.xs, fontWeight: FontWeight.semibold, letterSpacing: 1 },

  form: { gap: Spacing.md },
  field: { gap: Spacing.xs },
  label: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: 'rgba(255,255,255,0.7)' },
  input: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.white,
  },
  primaryBtn: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  primaryBtnDisabled: { opacity: 0.6 },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  switchLink: { alignItems: 'center', paddingBottom: Spacing.xl },
  switchText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md },
  switchTextBold: { color: Colors.secondary, fontWeight: FontWeight.bold },
});
