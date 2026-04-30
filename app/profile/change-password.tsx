import { View, Text, StyleSheet, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { router } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

function Rule({ met, text }: { met: boolean; text: string }) {
  return (
    <View style={styles.ruleRow}>
      <Text style={[styles.ruleDot, met && styles.ruleDotMet]}>{met ? '✓' : '○'}</Text>
      <Text style={[styles.ruleText, met && styles.ruleTextMet]}>{text}</Text>
    </View>
  );
}

export default function ChangePasswordScreen() {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const hasUpper = /[A-Z]/.test(newPassword);
  const hasLower = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[^A-Za-z0-9]/.test(newPassword);
  const hasLength = newPassword.length >= 8;
  const newPasswordValid = hasUpper && hasLower && hasNumber && hasSpecial && hasLength;
  const confirmMatches = confirmPassword.length > 0 && newPassword === confirmPassword;
  const isDifferent = newPassword.length > 0 && newPassword !== currentPassword;
  const canSubmit =
    currentPassword.length > 0 && newPasswordValid && confirmMatches && isDifferent && !loading;

  const handleSubmit = async () => {
    if (!user?.email || !canSubmit) return;
    setLoading(true);

    // Re-authenticate to verify the current password
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });
    if (signInError) {
      setLoading(false);
      Alert.alert(t('change_password.wrong_current_title'), t('change_password.wrong_current_body'));
      return;
    }

    // Update to the new password
    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
    setLoading(false);
    if (updateError) {
      Alert.alert(t('change_password.update_error_title'), updateError.message);
      return;
    }

    Alert.alert(t('change_password.success_title'), t('change_password.success_body'), [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('change_password.title')} />
      <KeyboardAwareScrollView contentContainerStyle={styles.content} enableOnAndroid extraScrollHeight={32}>
        <View style={styles.field}>
          <Text style={styles.label}>{t('change_password.current_label')}</Text>
          <TextInput
            style={styles.input}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder={t('change_password.current_placeholder')}
            placeholderTextColor={Colors.gray[400]}
            secureTextEntry={!show}
            autoCapitalize="none"
            returnKeyType="next"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>{t('change_password.new_label')}</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder={t('change_password.new_placeholder')}
              placeholderTextColor={Colors.gray[400]}
              secureTextEntry={!show}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <Pressable onPress={() => setShow(v => !v)} style={styles.showBtn}>
              <Text style={styles.showBtnText}>{show ? t('change_password.hide') : t('change_password.show')}</Text>
            </Pressable>
          </View>
          {newPassword.length > 0 ? (
            <View style={styles.rules}>
              <Rule met={hasLength}    text={t('change_password.rules.length')} />
              <Rule met={hasUpper}     text={t('change_password.rules.upper')} />
              <Rule met={hasLower}     text={t('change_password.rules.lower')} />
              <Rule met={hasNumber}    text={t('change_password.rules.number')} />
              <Rule met={hasSpecial}   text={t('change_password.rules.special')} />
              <Rule met={isDifferent}  text={t('change_password.rules.different')} />
            </View>
          ) : null}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>{t('change_password.confirm_label')}</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder={t('change_password.confirm_placeholder')}
            placeholderTextColor={Colors.gray[400]}
            secureTextEntry={!show}
            autoCapitalize="none"
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
          />
          {confirmPassword.length > 0 && !confirmMatches ? (
            <Text style={styles.mismatch}>{t('change_password.mismatch')}</Text>
          ) : null}
        </View>

        <Pressable
          style={[styles.submitBtn, !canSubmit && styles.submitBtnDisabled]}
          onPress={handleSubmit}
          disabled={!canSubmit}
        >
          {loading
            ? <ActivityIndicator color={Colors.white} />
            : <Text style={styles.submitBtnText}>{t('change_password.submit')}</Text>
          }
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.lg },
  field: { gap: Spacing.xs },
  label: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.gray[700] },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.gray[800],
  },
  passwordRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  showBtn: { paddingHorizontal: Spacing.sm },
  showBtnText: { color: Colors.gray[500], fontSize: FontSize.sm, fontWeight: FontWeight.medium },
  rules: { gap: 4, paddingTop: 6 },
  ruleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  ruleDot: { fontSize: FontSize.sm, width: 16, color: Colors.gray[300] },
  ruleDotMet: { color: Colors.success },
  ruleText: { fontSize: FontSize.xs, color: Colors.gray[400] },
  ruleTextMet: { color: Colors.gray[700] },
  mismatch: { fontSize: FontSize.xs, color: Colors.error, paddingTop: 4 },
  submitBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  submitBtnDisabled: { backgroundColor: Colors.gray[300] },
  submitBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
});
