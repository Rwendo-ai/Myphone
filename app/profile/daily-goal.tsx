import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import ScreenHeader from '../../components/ScreenHeader';
import { useDailyXpGoal, XP_GOAL_OPTIONS } from '../../lib/preferences';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

export default function DailyGoalScreen() {
  const { t } = useTranslation('common');
  const { goal, setGoal, loaded } = useDailyXpGoal();

  const handleSelect = async (n: number) => {
    await setGoal(n);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title={t('daily_goal_screen.title')} subtitle={t('daily_goal_screen.subtitle')} />
      <ScrollView contentContainerStyle={styles.content}>
        {!loaded ? (
          <ActivityIndicator color={Colors.primary} style={{ marginTop: Spacing.xxl }} />
        ) : (
          XP_GOAL_OPTIONS.map((n) => {
            const active = goal === n;
            return (
              <Pressable
                key={n}
                style={[styles.card, active && styles.cardActive]}
                onPress={() => handleSelect(n)}
              >
                <View style={styles.cardLeft}>
                  <Text style={[styles.cardXp, active && styles.cardXpActive]}>{t('daily_goal_screen.xp_value', { count: n })}</Text>
                  <Text style={styles.cardTitle}>{t(`daily_goal_screen.options.${n}.title`)}</Text>
                  <Text style={styles.cardSub}>{t(`daily_goal_screen.options.${n}.sub`)}</Text>
                </View>
                {active ? <Text style={styles.check}>✓</Text> : null}
              </Pressable>
            );
          })
        )}

        <Text style={styles.hint}>
          {t('daily_goal_screen.hint')}
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
