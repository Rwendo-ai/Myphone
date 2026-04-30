import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface Props {
  instruction: string;
  words: string[];
  correct: string[];
  translation: string;
  onComplete: (correct: boolean) => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BuildSentence({ instruction, words, correct, translation, onComplete }: Props) {
  const [pool] = useState(() => shuffle(words.map((w, i) => ({ word: w, id: i }))));
  const [available, setAvailable] = useState(() => shuffle(words.map((w, i) => ({ word: w, id: i }))));
  const [built, setBuilt] = useState<{ word: string; id: number }[]>([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const addWord = (item: { word: string; id: number }) => {
    if (checked) return;
    setAvailable((a) => a.filter((x) => x.id !== item.id));
    setBuilt((b) => [...b, item]);
  };

  const removeWord = (item: { word: string; id: number }) => {
    if (checked) return;
    setBuilt((b) => b.filter((x) => x.id !== item.id));
    setAvailable((a) => [...a, item]);
  };

  const checkAnswer = () => {
    const answer = built.map((b) => b.word);
    const ok = answer.join(' ') === correct.join(' ');
    setIsCorrect(ok);
    setChecked(true);
    setTimeout(() => onComplete(ok), 1400);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>{instruction}</Text>
      <Text style={styles.translation}>"{translation}"</Text>

      <View style={[styles.builtArea, checked && (isCorrect ? styles.builtAreaCorrect : styles.builtAreaWrong)]}>
        {built.length === 0 ? (
          <Text style={styles.placeholder}>Tap words below to build the sentence</Text>
        ) : (
          <View style={styles.wordRow}>
            {built.map((item) => (
              <Pressable key={item.id} style={styles.builtWord} onPress={() => removeWord(item)} disabled={checked}>
                <Text style={styles.builtWordText}>{item.word}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>

      <View style={styles.wordPool}>
        {available.map((item) => (
          <Pressable key={item.id} style={styles.poolWord} onPress={() => addWord(item)} disabled={checked}>
            <Text style={styles.poolWordText}>{item.word}</Text>
          </Pressable>
        ))}
      </View>

      {checked ? (
        <View style={[styles.feedback, isCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={styles.feedbackText}>
            {isCorrect ? '✓ Correct!' : `✗ Correct: ${correct.join(' ')}`}
          </Text>
        </View>
      ) : (
        <Pressable
          style={[styles.checkBtn, built.length < words.length && styles.checkBtnDisabled]}
          onPress={checkAnswer}
          disabled={built.length < words.length}
        >
          <Text style={styles.checkBtnText}>Check</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: Spacing.lg },
  instruction: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.gray[500],
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: Spacing.sm,
  },
  translation: {
    fontSize: FontSize.lg,
    color: Colors.gray[600],
    fontStyle: 'italic',
    marginBottom: Spacing.lg,
  },
  builtArea: {
    minHeight: 72,
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.lg,
    justifyContent: 'center',
  },
  builtAreaCorrect: { borderColor: Colors.success, backgroundColor: '#F0FDF4' },
  builtAreaWrong: { borderColor: Colors.error, backgroundColor: '#FEF2F2' },
  placeholder: { color: Colors.gray[300], fontSize: FontSize.md, textAlign: 'center' },
  wordRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  builtWord: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: 6,
    paddingHorizontal: Spacing.md,
  },
  builtWordText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold },
  wordPool: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, marginBottom: Spacing.lg },
  poolWord: {
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.md,
    paddingVertical: 6,
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.white,
  },
  poolWordText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[700] },
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
