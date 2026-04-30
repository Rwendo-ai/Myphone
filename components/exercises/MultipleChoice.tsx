import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface Option { text: string; correct: boolean }

interface Props {
  instruction: string;
  question: string;
  options: Option[];
  explanation: string;
  onComplete: (correct: boolean) => void;
}

export default function MultipleChoice({ instruction, question, options, explanation, onComplete }: Props) {
  const { t } = useTranslation('learn');
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (text: string, correct: boolean) => {
    if (answered) return;
    setSelected(text);
    setAnswered(true);
    setTimeout(() => onComplete(correct), 1400);
  };

  const getStyle = (option: Option) => {
    if (!answered) return styles.option;
    if (option.correct) return [styles.option, styles.optionCorrect];
    if (option.text === selected && !option.correct) return [styles.option, styles.optionWrong];
    return [styles.option, styles.optionDimmed];
  };

  const getTextStyle = (option: Option) => {
    if (!answered) return styles.optionText;
    if (option.correct) return [styles.optionText, { color: Colors.success }];
    if (option.text === selected && !option.correct) return [styles.optionText, { color: Colors.error }];
    return [styles.optionText, { color: Colors.gray[300] }];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>{instruction}</Text>
      <Text style={styles.question}>{question}</Text>

      <View style={styles.options}>
        {options.map((option) => (
          <Pressable
            key={option.text}
            style={getStyle(option)}
            onPress={() => handleSelect(option.text, option.correct)}
            disabled={answered}
          >
            <Text style={getTextStyle(option)}>{option.text}</Text>
          </Pressable>
        ))}
      </View>

      {answered && (
        <View style={[styles.explanation, options.find((o) => o.text === selected)?.correct ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={styles.explanationTitle}>
            {options.find((o) => o.text === selected)?.correct ? t('exercises.feedback_correct') : t('exercises.multiple_choice.wrong')}
          </Text>
          <Text style={styles.explanationText}>{explanation}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: Spacing.lg, justifyContent: 'center' },
  instruction: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.gray[500],
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: Spacing.sm,
  },
  question: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.gray[800],
    marginBottom: Spacing.xl,
    lineHeight: 32,
  },
  options: { gap: Spacing.sm },
  option: {
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
  },
  optionCorrect: { borderColor: Colors.success, backgroundColor: '#F0FDF4' },
  optionWrong: { borderColor: Colors.error, backgroundColor: '#FEF2F2' },
  optionDimmed: { borderColor: Colors.gray[100], backgroundColor: Colors.gray[50] },
  optionText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[700] },
  explanation: { marginTop: Spacing.lg, padding: Spacing.md, borderRadius: BorderRadius.lg, gap: 4 },
  feedbackCorrect: { backgroundColor: '#F0FDF4' },
  feedbackWrong: { backgroundColor: '#FEF2F2' },
  explanationTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[700] },
  explanationText: { fontSize: FontSize.sm, color: Colors.gray[600] },
});
