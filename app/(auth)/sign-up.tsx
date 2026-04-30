import { View, Text, StyleSheet, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
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
  const [showPassword, setShowPassword] = useState(false);

  // Consent checkboxes
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [confirmAge, setConfirmAge] = useState(false);
  const [confirmAI, setConfirmAI] = useState(false);

  // Password rules
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 8;
  const passwordValid = hasUpper && hasLower && hasNumber && hasSpecial && hasLength;

  const allConsentsGiven = agreeTerms && agreePrivacy && confirmAge && confirmAI;
  const canSubmit = email.trim() && passwordValid && username.trim() && allConsentsGiven;

  const handleSignUp = async () => {
    if (!canSubmit) return;
    setLoading(true);
    const { error } = await signUp(email.trim(), password, username.trim());
    if (error) {
      setLoading(false);
      Alert.alert(t('sign_up.fail_title'), error);
      return;
    }
    // Record consent timestamps
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.rpc('record_consents', {
          p_user_id: user.id,
          p_terms: agreeTerms,
          p_privacy: agreePrivacy,
          p_age: confirmAge,
          p_ai_disclosure: confirmAI,
          p_voice: false,
        });
      }
    } catch {}
    setLoading(false);
    Alert.alert(
      t('sign_up.check_email_title'),
      t('sign_up.check_email_body', { email: email.trim() }),
      [{ text: 'OK', onPress: () => router.replace('/sign-in') }]
    );
  };

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

        {/* Fields */}
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

        {/* Consent checkboxes */}
        <View style={styles.consents}>
          <Text style={styles.consentsTitle}>{t('sign_up.consents_title')}</Text>

          <CheckBox checked={agreeTerms} onPress={() => setAgreeTerms(v => !v)}>
            <Text style={styles.checkText}>
              {t('sign_up.consent_terms_pre')}
              <Text style={styles.link} onPress={() => router.push('/(legal)/terms-of-service')}>
                {t('sign_up.consent_terms_link')}
              </Text>
              {t('sign_up.consent_terms_post')}
            </Text>
          </CheckBox>

          <CheckBox checked={agreePrivacy} onPress={() => setAgreePrivacy(v => !v)}>
            <Text style={styles.checkText}>
              {t('sign_up.consent_privacy_pre')}
              <Text style={styles.link} onPress={() => router.push('/(legal)/privacy-policy')}>
                {t('sign_up.consent_privacy_link')}
              </Text>
              {t('sign_up.consent_privacy_post')}
            </Text>
          </CheckBox>

          <CheckBox checked={confirmAge} onPress={() => setConfirmAge(v => !v)}>
            <Text style={styles.checkText}>
              {t('sign_up.consent_age')}
            </Text>
          </CheckBox>

          <CheckBox checked={confirmAI} onPress={() => setConfirmAI(v => !v)}>
            <Text style={styles.checkText}>
              {t('sign_up.consent_ai')}
            </Text>
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

        {!allConsentsGiven && (
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
  consentsTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: 'rgba(255,255,255,0.8)' },
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
  checkText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.7)', lineHeight: 20 },
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
