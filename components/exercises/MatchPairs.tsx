import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface Pair { left: string; right: string }

interface Props {
  instruction: string;
  pairs: Pair[];
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

export default function MatchPairs({ instruction, pairs, onComplete }: Props) {
  const [rightItems] = useState(() => shuffle(pairs.map((p) => p.right)));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedLeft || !selectedRight) return;
    const pair = pairs.find((p) => p.left === selectedLeft);
    if (pair?.right === selectedRight) {
      const next = new Set(matched).add(selectedLeft);
      setMatched(next);
      setSelectedLeft(null);
      setSelectedRight(null);
      if (next.size === pairs.length) {
        setTimeout(() => onComplete(true), 500);
      }
    } else {
      setWrong(selectedLeft);
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrong(null);
      }, 600);
    }
  }, [selectedLeft, selectedRight]);

  const getLeftStyle = (item: string) => {
    if (matched.has(item)) return [styles.tile, styles.tileMatched];
    if (wrong === item) return [styles.tile, styles.tileWrong];
    if (selectedLeft === item) return [styles.tile, styles.tileSelected];
    return styles.tile;
  };

  const getRightStyle = (item: string) => {
    const matchedPair = [...matched].find((l) => pairs.find((p) => p.left === l)?.right === item);
    if (matchedPair) return [styles.tile, styles.tileMatched];
    if (selectedRight === item) return [styles.tile, styles.tileSelected];
    return styles.tile;
  };

  const isRightMatched = (item: string) =>
    [...matched].some((l) => pairs.find((p) => p.left === l)?.right === item);

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>{instruction}</Text>
      <View style={styles.columns}>
        <View style={styles.column}>
          {pairs.map((p) => (
            <Pressable
              key={p.left}
              style={getLeftStyle(p.left)}
              onPress={() => !matched.has(p.left) && setSelectedLeft(p.left)}
              disabled={matched.has(p.left)}
            >
              <Text style={[styles.tileText, matched.has(p.left) && styles.tileTextMatched]}>
                {p.left}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.column}>
          {rightItems.map((item) => (
            <Pressable
              key={item}
              style={getRightStyle(item)}
              onPress={() => !isRightMatched(item) && setSelectedRight(item)}
              disabled={isRightMatched(item)}
            >
              <Text style={[styles.tileText, isRightMatched(item) && styles.tileTextMatched]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
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
    marginBottom: Spacing.xl,
  },
  columns: { flexDirection: 'row', gap: Spacing.sm },
  column: { flex: 1, gap: Spacing.sm },
  tile: {
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    backgroundColor: Colors.white,
  },
  tileSelected: { borderColor: Colors.secondary, backgroundColor: '#EFF6FF' },
  tileMatched: { borderColor: Colors.success, backgroundColor: '#F0FDF4' },
  tileWrong: { borderColor: Colors.error, backgroundColor: '#FEF2F2' },
  tileText: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.gray[700], textAlign: 'center' },
  tileTextMatched: { color: Colors.success },
});
