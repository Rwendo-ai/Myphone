/**
 * Verify-code screen — 6-digit OTP after signup.
 *
 * The user gets here from sign-up.tsx with their email as a query param.
 * Supabase has emailed them a 6-digit code (configured in dashboard →
 * Authentication → Email Templates → Confirm signup, body uses `{{ .Token }}`).
 * Entering the right code calls `verifySignupOtp`, which logs them in via the
 * AuthContext listener — they then get routed to onboarding by NavigationGuard.
 */

import { View, Text, StyleSheet, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function VerifyCodeScreen() {
  const { t } = useTranslation('auth');
  const { email: emailParam } = useLocalSearchParams<{ email?: string }>();
  const email = (emailParam ?? '').toString();
  const { verifySignupOtp, resendSignupOtp } = useAuth();

  const [code, setCode] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const inputRef = useRef<TextInput>(null);

  // Autofocus the input as soon as the screen mounts.
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 250);
    return () => clearTimeout(t);
  }, []);

  // Auto-submit once the user enters all 6 digits — saves a tap and matches
  // the iOS-native autofill experience.
  useEffect(() => {
    if (code.length === 6 && !verifying) {
      handleVerify(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const handleVerify = async (token: string) => {
    if (!email) return;
    setVerifying(true);
    const { error } = await verifySignupOtp(email, token);
    setVerifying(false);
    if (error) {
      Alert.alert(t('verify_code.fail_title'), t('verify_code.fail_body'));
      // Reset the code so the user can retype without manually clearing.
      setCode('');
      inputRef.current?.focus();
      return;
    }
    // Success — AuthContext picks up the new session and NavigationGuard
    // routes to onboarding (or home, if onboarding is already complete).
  };

  const handleResend = async () => {
    if (!email || resending) return;
    setResending(true);
    const { error } = await resendSignupOtp(email);
    setResending(false);
    if (error) {
      Alert.alert(t('verify_code.fail_title'), error);
      return;
    }
    Alert.alert(
      t('verify_code.resend_sent'),
      t('verify_code.resend_sent_body', { email }),
    );
  };

  // Strip non-digits and clamp to 6 chars so paste, autofill, or stray
  // letters all yield a clean code without the user noticing.
  const sanitise = (raw: string) => raw.replace(/[^0-9]/g, '').slice(0, 6);

  return (
    <LinearGradient colors={[Colors.primary, '#0D2140']} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scroll}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={32}
      >
        <Pressable style={styles.back} onPress={() => router.back()}>
          <Text style={styles.backText}>{t('back')}</Text>
        </Pressable>

        <Text style={styles.title}>{t('verify_code.title')}</Text>
        <Text style={styles.subtitle}>
          {t('verify_code.subtitle', { email })}
        </Text>

        <View style={styles.codeWrap}>
          <Text style={styles.codeLabel}>{t('verify_code.code_label')}</Text>
          <TextInput
            ref={inputRef}
            style={styles.codeInput}
            value={code}
            onChangeText={(v) => setCode(sanitise(v))}
            placeholder={t('verify_code.code_placeholder')}
            placeholderTextColor="rgba(255,255,255,0.2)"
            keyboardType="number-pad"
            // iOS auto-fills from Mail app via this hint.
            textContentType="oneTimeCode"
            autoComplete="sms-otp"
            maxLength={6}
            editable={!verifying}
            returnKeyType="done"
            onSubmitEditing={() => code.length === 6 && handleVerify(code)}
          />
        </View>

        <Pressable
          style={[styles.primaryBtn, (code.length < 6 || verifying) && styles.primaryBtnDisabled]}
          onPress={() => handleVerify(code)}
          disabled={code.length < 6 || verifying}
        >
          {verifying
            ? <ActivityIndicator color={Colors.white} />
            : <Text style={styles.primaryBtnText}>{t('verify_code.submit')}</Text>
          }
        </Pressable>

        <Text style={styles.hint}>{t('verify_code.spam_hint')}</Text>

        <Pressable onPress={handleResend} disabled={resending} style={styles.resend}>
          {resending
            ? <ActivityIndicator color={Colors.secondary} size="small" />
            : <Text style={styles.resendText}>{t('verify_code.resend')}</Text>
          }
        </Pressable>

        <Pressable onPress={() => router.replace('/sign-up')} style={styles.wrongEmail}>
          <Text style={styles.wrongEmailText}>
            {t('verify_code.wrong_email')}
            <Text style={styles.wrongEmailAction}>{t('verify_code.wrong_email_action')}</Text>
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
  subtitle: { fontSize: FontSize.md, color: 'rgba(255,255,255,0.7)', marginTop: -Spacing.sm },

  codeWrap: { gap: Spacing.sm, marginTop: Spacing.lg },
  codeLabel: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: 'rgba(255,255,255,0.6)', textAlign: 'center' },
  codeInput: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    fontSize: 36,
    fontWeight: FontWeight.bold,
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: 12,
    fontVariant: ['tabular-nums'],
  },

  primaryBtn: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  primaryBtnDisabled: { opacity: 0.4 },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  hint: { textAlign: 'center', fontSize: FontSize.xs, color: 'rgba(255,255,255,0.4)' },
  resend: { alignItems: 'center', paddingVertical: Spacing.sm },
  resendText: { color: Colors.secondary, fontSize: FontSize.md, fontWeight: FontWeight.semibold },
  wrongEmail: { alignItems: 'center', paddingTop: Spacing.md },
  wrongEmailText: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.sm },
  wrongEmailAction: { color: Colors.secondary, fontWeight: FontWeight.semibold },
});
