import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import ScreenHeader from '../../components/ScreenHeader';
import { useDailyXpGoal, XP_GOAL_OPTIONS } from '../../lib/preferences';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const LABELS: Record<number, { title: string; sub: string }> = {
  25: { title: 'Casual', sub: '~5 min/day · one short lesson' },
  50: { title: 'Regular', sub: '~10 min/day · one full lesson' },
  100: { title: 'Serious', sub: '~20 min/day · two lessons' },
  200: { title: 'Intense', sub: '~40 min/day · push for fluency' },
};

export default function DailyGoalScreen() {
  const { goal, setGoal, loaded } = useDailyXpGoal();

  const handleSelect = async (n: number) => {
    await setGoal(n);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Daily XP goal" subtitle="How much do you want to learn each day?" />
      <ScrollView contentContainerStyle={styles.content}>
        {!loaded ? (
          <ActivityIndicator color={Colors.primary} style={{ marginTop: Spacing.xxl }} />
        ) : (
          XP_GOAL_OPTIONS.map((n) => {
            const meta = LABELS[n];
            const active = goal === n;
            return (
              <Pressable
                key={n}
                style={[styles.card, active && styles.cardActive]}
                onPress={() => handleSelect(n)}
              >
                <View style={styles.cardLeft}>
                  <Text style={[styles.cardXp, active && styles.cardXpActive]}>{n} XP</Text>
                  <Text style={styles.cardTitle}>{meta.title}</Text>
                  <Text style={styles.cardSub}>{meta.sub}</Text>
                </View>
                {active ? <Text style={styles.check}>✓</Text> : null}
              </Pressable>
            );
          })
        )}

        <Text style={styles.hint}>
          You can change this any time. The goal resets every day at midnight (your device's local time).
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.accent },
  content: { padding: Spacing.lg, gap: Spacing.sm },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  cardActive: { borderColor: Colors.primary, backgroundColor: '#EFF6FF' },
  cardLeft: { gap: 2 },
  cardXp: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.gray[600] },
  cardXpActive: { color: Colors.primary },
  cardTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.gray[800] },
  cardSub: { fontSize: FontSize.xs, color: Colors.gray[500] },
  check: { fontSize: FontSize.xl, color: Colors.primary, fontWeight: FontWeight.bold },
  hint: { fontSize: FontSize.xs, color: Colors.gray[400], textAlign: 'center', lineHeight: 18, marginTop: Spacing.lg, paddingHorizontal: Spacing.md },
});
