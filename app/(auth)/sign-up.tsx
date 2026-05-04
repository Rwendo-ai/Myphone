/**
 * Sign-up screen.
 *
 * Layout:
 *   - OAuth bar at top (3 small buttons: Google, Apple, Wallet — Apple +
 *     Wallet are gated behind OAUTH_READY flags in lib/oauth.ts and stay
 *     hidden until their dashboards are configured).
 *   - "OR" divider.
 *   - Email + password form (the primary path).
 *   - Three consent checkboxes:
 *       1. Combined legal — Terms + Privacy + 13+ + AI disclosure (required).
 *       2. Privacy promise — data not sold/shared (required).
 *       3. Marketing — opt-in for product emails + promos (optional).
 *   - Submit button (disabled until both required boxes ticked).
 *
 * After signup, Supabase emails a 6-digit OTP. The user navigates to
 * /verify-code (TODO: build that screen next) where they enter the code
 * and onboarding kicks off.
 */

import { View, Text, StyleSheet, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import { OAUTH_READY, signInWithGoogle, signInWithApple, signInWithCryptoWallet } from '../../lib/oauth';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

function PasswordRule({ met, text }: { met: boolean; text: string }) {
  return (
    <View style={styles.ruleRow}>
      <Text style={[styles.ruleDot, met ? styles.ruleMet : styles.ruleFail]}>
        {met ? '✓' : '○'}
      </Text>
      <Text style={[styles.ruleText, met && styles.ruleTextMet]}>{text}</Text>
    </View>
  );
}

function CheckBox({ checked, onPress, children }: { checked: boolean; onPress: () => void; children: React.ReactNode }) {
  return (
    <Pressable style={styles.checkRow} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <View style={styles.checkLabel}>{children}</View>
    </Pressable>
  );
}

export default function SignUpScreen() {
  const { t } = useTranslation('auth');
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<null | 'google' | 'apple' | 'crypto'>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Consent: only two REQUIRED boxes (legal + info protection) and one
  // OPTIONAL marketing box. We collapsed the previous four-box flow because
  // bundling Terms + Privacy + Age + AI into one consent line is what every
  // major consumer app does (Spotify, Discord, Netflix). Strict GDPR
  // jurisdictions are still satisfied because the box contains the explicit
  // statements; the linked Terms + Privacy Policy provide the detail.
  const [agreeLegal, setAgreeLegal] = useState(false);
  const [agreeInfoProtection, setAgreeInfoProtection] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  // Password rules
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 8;
  const passwordValid = hasUpper && hasLower && hasNumber && hasSpecial && hasLength;

  const requiredConsents = agreeLegal && agreeInfoProtection;
  const canSubmit = email.trim() && passwordValid && username.trim() && requiredConsents;

  const handleSignUp = async () => {
    if (!canSubmit) return;
    setLoading(true);
    const { error } = await signUp(email.trim(), password, username.trim());
    if (error) {
      setLoading(false);
      Alert.alert(t('sign_up.fail_title'), error);
      return;
    }
    // Record consent timestamps. The legal box maps to all four "atomic"
    // consents on the backend (terms / privacy / age / ai_disclosure) so the
    // existing record_consents RPC contract keeps working.
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.rpc('record_consents', {
          p_user_id: user.id,
          p_terms: agreeLegal,
          p_privacy: agreeLegal,
          p_age: agreeLegal,
          p_ai_disclosure: agreeLegal,
          p_voice: false,
          p_info_protection: agreeInfoProtection,
          p_marketing: agreeMarketing,
        });
      }
    } catch {}
    setLoading(false);
    // Route to the 6-digit OTP screen — Supabase has emailed the code.
    router.replace({
      pathname: '/verify-code',
      params: { email: email.trim() },
    });
  };

  const handleGoogle = async () => {
    if (oauthLoading) return;
    setOauthLoading('google');
    const { error } = await signInWithGoogle();
    setOauthLoading(null);
    if (error) Alert.alert(t('sign_up.oauth.fail_title'), error);
    // On success the AuthContext listener picks up the session and routes
    // to onboarding.
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

  // Count enabled OAuth providers so the bar adapts: 1 visible = stretch
  // wide single button; 2-3 = small square buttons in a row.
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
        <Pressable style={styles.back} onPress={() => router.back()}>
          <Text style={styles.backText}>{t('back')}</Text>
        </Pressable>

        <Text style={styles.title}>{t('sign_up.title')}</Text>
        <Text style={styles.subtitle}>{t('sign_up.subtitle')}</Text>

        {/* OAuth bar */}
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
                      <Text style={styles.oauthIcon}>{''}</Text>
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

        {/* Divider */}
        {enabledOAuthCount > 0 && (
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{t('sign_up.or_divider')}</Text>
            <View style={styles.dividerLine} />
          </View>
        )}

        {/* Email form */}
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>{t('sign_up.username_label')}</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder={t('sign_up.username_placeholder')}
              placeholderTextColor="rgba(255,255,255,0.3)"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{t('sign_up.email_label')}</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder={t('sign_up.email_placeholder')}
              placeholderTextColor="rgba(255,255,255,0.3)"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>{t('sign_up.password_label')}</Text>
            <View style={styles.passwordRow}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
                placeholder={t('sign_up.password_placeholder')}
                placeholderTextColor="rgba(255,255,255,0.3)"
                secureTextEntry={!showPassword}
                returnKeyType="done"
              />
              <Pressable onPress={() => setShowPassword(v => !v)} style={styles.showBtn}>
                <Text style={styles.showBtnText}>{showPassword ? t('sign_up.hide') : t('sign_up.show')}</Text>
              </Pressable>
            </View>
            {password.length > 0 && (
              <View style={styles.rules}>
                <PasswordRule met={hasLength}  text={t('sign_up.rules.length')} />
                <PasswordRule met={hasUpper}   text={t('sign_up.rules.upper')} />
                <PasswordRule met={hasLower}   text={t('sign_up.rules.lower')} />
                <PasswordRule met={hasNumber}  text={t('sign_up.rules.number')} />
                <PasswordRule met={hasSpecial} text={t('sign_up.rules.special')} />
              </View>
            )}
          </View>
        </View>

        {/* Consents — three checkboxes (down from four). Box 1 + 2 required;
            box 3 is the GDPR/CASL marketing opt-in (unchecked default). */}
        <View style={styles.consents}>
          <CheckBox checked={agreeLegal} onPress={() => setAgreeLegal(v => !v)}>
            <Text style={styles.checkText}>
              {t('sign_up.consent_legal_pre')}
              <Text style={styles.link} onPress={() => router.push('/(legal)/terms-of-service')}>
                {t('sign_up.consent_legal_terms')}
              </Text>
              {t('sign_up.consent_legal_and')}
              <Text style={styles.link} onPress={() => router.push('/(legal)/privacy-policy')}>
                {t('sign_up.consent_legal_privacy')}
              </Text>
              {t('sign_up.consent_legal_post')}
            </Text>
          </CheckBox>

          <CheckBox checked={agreeInfoProtection} onPress={() => setAgreeInfoProtection(v => !v)}>
            <Text style={styles.checkText}>{t('sign_up.consent_info_protection')}</Text>
          </CheckBox>

          <CheckBox checked={agreeMarketing} onPress={() => setAgreeMarketing(v => !v)}>
            <Text style={[styles.checkText, styles.checkTextOptional]}>{t('sign_up.consent_marketing')}</Text>
          </CheckBox>
        </View>

        {/* Submit */}
        <Pressable
          style={[styles.primaryBtn, (!canSubmit || loading) && styles.primaryBtnDisabled]}
          onPress={handleSignUp}
          disabled={!canSubmit || loading}
        >
          {loading
            ? <ActivityIndicator color={Colors.white} />
            : <Text style={styles.primaryBtnText}>{t('sign_up.submit')}</Text>
          }
        </Pressable>

        {!requiredConsents && (
          <Text style={styles.consentHint}>{t('sign_up.consent_hint')}</Text>
        )}

        <Pressable style={styles.switchLink} onPress={() => router.replace('/sign-in')}>
          <Text style={styles.switchText}>
            {t('sign_up.switch_text')}<Text style={styles.switchTextBold}>{t('sign_up.switch_action')}</Text>
          </Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: Spacing.lg, paddingTop: Spacing.xxl, gap: Spacing.lg },
  back: { paddingBottom: Spacing.xs },
  backText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: Colors.white },
  subtitle: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.6)', marginTop: -Spacing.sm },

  // OAuth bar — row of small square buttons. Stretches to a single full-width
  // button when only one provider is enabled (current state — Google only).
  oauthBar: {
    flexDirection: 'row',
    gap: Spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.lg,
    padding: Spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  oauthBarSingle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    padding: 0,
  },
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
  oauthBtnWide: {
    aspectRatio: undefined,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
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
  passwordRow: { flexDirection: 'row', gap: Spacing.sm, alignItems: 'center' },
  showBtn: { paddingHorizontal: Spacing.sm },
  showBtnText: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.sm },
  rules: { gap: 4, paddingTop: 4 },
  ruleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  ruleDot: { fontSize: FontSize.sm, width: 16 },
  ruleMet: { color: '#4ADE80' },
  ruleFail: { color: 'rgba(255,255,255,0.3)' },
  ruleText: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.4)' },
  ruleTextMet: { color: 'rgba(255,255,255,0.8)' },

  consents: { gap: Spacing.md },
  checkRow: { flexDirection: 'row', gap: Spacing.md, alignItems: 'flex-start' },
  checkbox: {
    width: 22, height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center', justifyContent: 'center',
    marginTop: 1,
    flexShrink: 0,
  },
  checkboxChecked: { backgroundColor: Colors.secondary, borderColor: Colors.secondary },
  checkmark: { color: Colors.white, fontSize: 13, fontWeight: FontWeight.bold },
  checkLabel: { flex: 1 },
  checkText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.75)', lineHeight: 20 },
  checkTextOptional: { color: 'rgba(255,255,255,0.55)' },
  link: { color: Colors.secondary, fontWeight: FontWeight.semibold },

  primaryBtn: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  primaryBtnDisabled: { opacity: 0.4 },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  consentHint: { textAlign: 'center', fontSize: FontSize.xs, color: 'rgba(255,255,255,0.4)' },
  switchLink: { alignItems: 'center', paddingBottom: Spacing.xl },
  switchText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.md },
  switchTextBold: { color: Colors.secondary, fontWeight: FontWeight.bold },
});
