import { View, Text, StyleSheet, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function EditProfileScreen() {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [username, setUsername] = useState('');
  const [originalUsername, setOriginalUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .single()
      .then(({ data }) => {
        const u = data?.username ?? '';
        setUsername(u);
        setOriginalUsername(u);
        setFetching(false);
      });
  }, [user?.id]);

  const trimmed = username.trim();
  const isValid = trimmed.length >= 2 && trimmed.length <= 30;
  const isDirty = trimmed !== originalUsername;
  const canSave = isValid && isDirty && !loading;

  const handleSave = async () => {
    if (!user || !canSave) return;
    setLoading(true);
    const { error } = await supabase
      .from('profiles')
      .update({ username: trimmed, updated_at: new Date().toISOString() })
      .eq('id', user.id);
    setLoading(false);
    if (error) {
      Alert.alert(t('edit_profile.error_title'), error.message);
      return;
    }
    Alert.alert(t('edit_profile.saved_title'), t('edit_profile.saved_body'), [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('edit_profile.title')} />
      <KeyboardAwareScrollView contentContainerStyle={styles.content} enableOnAndroid extraScrollHeight={32}>
        {fetching ? (
          <ActivityIndicator color={Colors.primary} style={{ marginTop: Spacing.xxl }} />
        ) : (
          <>
            <View style={styles.field}>
              <Text style={styles.label}>{t('edit_profile.name_label')}</Text>
              <Text style={styles.hint}>{t('edit_profile.name_hint')}</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder={t('edit_profile.name_placeholder')}
                placeholderTextColor={Colors.gray[400]}
                autoCapitalize="words"
                autoCorrect={false}
                maxLength={30}
                returnKeyType="done"
                onSubmitEditing={handleSave}
              />
              <Text style={styles.charCount}>{t('edit_profile.char_count', { current: trimmed.length, max: 30 })}</Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>{t('edit_profile.email_label')}</Text>
              <View style={[styles.input, styles.inputDisabled]}>
                <Text style={styles.disabledText}>{user?.email}</Text>
              </View>
              <Text style={styles.hint}>{t('edit_profile.email_hint')}</Text>
            </View>

            <Pressable
              style={[styles.saveBtn, !canSave && styles.saveBtnDisabled]}
              onPress={handleSave}
              disabled={!canSave}
            >
              {loading
                ? <ActivityIndicator color={Colors.white} />
                : <Text style={styles.saveBtnText}>{t('edit_profile.save_btn')}</Text>
              }
            </Pressable>
          </>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.lg },
  field: { gap: Spacing.xs },
  label: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.gray[700] },
  hint: { fontSize: FontSize.xs, color: Colors.gray[400] },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.gray[800],
  },
  inputDisabled: { backgroundColor: Colors.gray[50] },
  disabledText: { fontSize: FontSize.md, color: Colors.gray[500] },
  charCount: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'right' },
  saveBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  saveBtnDisabled: { backgroundColor: Colors.gray[300] },
  saveBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
});
