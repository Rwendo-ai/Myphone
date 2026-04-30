import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface Props {
  instruction: string;
  prompt: string;
  correct: string[];
  onComplete: (correct: boolean) => void;
}

export default function Translate({ instruction, prompt, correct, onComplete }: Props) {
  const { t } = useTranslation('learn');
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const check = () => {
    if (!value.trim()) return;
    const normalized = value.trim().toLowerCase().replace(/[?!.,]$/, '');
    const ok = correct.some((c) => c.toLowerCase().replace(/[?!.,]$/, '') === normalized);
    setIsCorrect(ok);
    setChecked(true);
    setTimeout(() => onComplete(ok), 1200);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={48}
    >
      <Text style={styles.instruction}>{instruction}</Text>

      <View style={styles.promptCard}>
        <Text style={styles.prompt}>{prompt}</Text>
      </View>

      <TextInput
        style={[
          styles.input,
          checked && (isCorrect ? styles.inputCorrect : styles.inputWrong),
        ]}
        value={value}
        onChangeText={setValue}
        placeholder={t('exercises.translate.placeholder')}
        placeholderTextColor={Colors.gray[300]}
        editable={!checked}
        autoFocus
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="done"
        onSubmitEditing={check}
      />

      {checked ? (
        <View style={[styles.feedback, isCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={styles.feedbackText}>
            {isCorrect ? t('exercises.feedback_correct') : t('exercises.translate.wrong', { correct: correct[0] })}
          </Text>
        </View>
      ) : (
        <Pressable
          style={[styles.checkBtn, !value.trim() && styles.checkBtnDisabled]}
          onPress={check}
          disabled={!value.trim()}
        >
          <Text style={styles.checkBtnText}>{t('exercises.check')}</Text>
        </Pressable>
      )}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  container: {
    padding: Spacing.lg,
    flexGrow: 1,
    justifyContent: 'center',
    gap: Spacing.lg,
  },
  instruction: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.gray[500],
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  promptCard: {
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    alignItems: 'center',
  },
  prompt: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.primary, textAlign: 'center' },
  input: {
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    fontSize: FontSize.lg,
    color: Colors.gray[800],
  },
  inputCorrect: { borderColor: Colors.success, backgroundColor: '#F0FDF4' },
  inputWrong: { borderColor: Colors.error, backgroundColor: '#FEF2F2' },
  checkBtn: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  checkBtnDisabled: { backgroundColor: Colors.gray[200] },
  checkBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  feedback: { padding: Spacing.md, borderRadius: BorderRadius.lg, alignItems: 'center' },
  feedbackCorrect: { backgroundColor: '#F0FDF4' },
  feedbackWrong: { backgroundColor: '#FEF2F2' },
  feedbackText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[700] },
});
