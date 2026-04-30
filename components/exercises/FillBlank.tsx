import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface Props {
  instruction: string;
  sentence: string;
  options: string[];
  correct: string;
  context?: string;
  onComplete: (correct: boolean) => void;
}

export default function FillBlank({ instruction, sentence, options, correct, context, onComplete }: Props) {
  const { t } = useTranslation('learn');
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const parts = sentence.split('_____');

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    setTimeout(() => onComplete(option === correct), 1200);
  };

  const getStyle = (option: string) => {
    if (!answered) return styles.option;
    if (option === correct) return [styles.option, styles.optionCorrect];
    if (option === selected) return [styles.option, styles.optionWrong];
    return [styles.option, styles.optionDimmed];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>{instruction}</Text>
      {context && <Text style={styles.context}>{context}</Text>}

      <View style={styles.sentenceRow}>
        <Text style={styles.sentencePart}>{parts[0]}</Text>
        <View style={[styles.blank, answered && selected === correct && styles.blankCorrect, answered && selected !== correct && styles.blankWrong]}>
          <Text style={styles.blankText}>{selected ?? '______'}</Text>
        </View>
        <Text style={styles.sentencePart}>{parts[1]}</Text>
      </View>

      <View style={styles.options}>
        {options.map((o) => (
          <Pressable key={o} style={getStyle(o)} onPress={() => handleSelect(o)} disabled={answered}>
            <Text style={[styles.optionText, answered && o !== correct && o !== selected && { color: Colors.gray[300] }]}>
              {o}
            </Text>
          </Pressable>
        ))}
      </View>

      {answered && (
        <View style={[styles.feedback, selected === correct ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={styles.feedbackText}>
            {selected === correct ? t('exercises.feedback_correct') : t('exercises.fill_blank.wrong', { correct })}
          </Text>
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
  context: {
    fontSize: FontSize.sm,
    color: Colors.secondary,
    fontStyle: 'italic',
    marginBottom: Spacing.xl,
  },
  sentenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: Spacing.xl,
  },
  sentencePart: { fontSize: FontSize.xl, color: Colors.gray[800], fontWeight: FontWeight.semibold },
  blank: {
    borderBottomWidth: 2,
    borderColor: Colors.gray[300],
    paddingHorizontal: Spacing.sm,
    paddingBottom: 2,
    minWidth: 80,
    alignItems: 'center',
  },
  blankCorrect: { borderColor: Colors.success },
  blankWrong: { borderColor: Colors.error },
  blankText: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.primary },
  options: { flexDirection: 'row', gap: Spacing.sm, flexWrap: 'wrap' },
  option: {
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  optionCorrect: { borderColor: Colors.success, backgroundColor: '#F0FDF4' },
  optionWrong: { borderColor: Colors.error, backgroundColor: '#FEF2F2' },
  optionDimmed: { borderColor: Colors.gray[100], backgroundColor: Colors.gray[50] },
  optionText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[700] },
  feedback: { marginTop: Spacing.lg, padding: Spacing.md, borderRadius: BorderRadius.lg },
  feedbackCorrect: { backgroundColor: '#F0FDF4' },
  feedbackWrong: { backgroundColor: '#FEF2F2' },
  feedbackText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[700], textAlign: 'center' },
});
