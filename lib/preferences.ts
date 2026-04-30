import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_XP_GOAL = 'rwendo:daily_xp_goal';
const KEY_REMINDERS = 'rwendo:daily_reminders';

export const XP_GOAL_OPTIONS = [25, 50, 100, 200] as const;
export const DEFAULT_XP_GOAL = 50;

export function useDailyXpGoal() {
  const [goal, setGoalState] = useState<number>(DEFAULT_XP_GOAL);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY_XP_GOAL).then((v) => {
      const n = v ? parseInt(v, 10) : NaN;
      if (Number.isFinite(n) && n > 0) setGoalState(n);
      setLoaded(true);
    });
  }, []);

  const setGoal = useCallback(async (n: number) => {
    setGoalState(n);
    await AsyncStorage.setItem(KEY_XP_GOAL, String(n));
  }, []);

  return { goal, setGoal, loaded };
}

export function useDailyReminders() {
  const [enabled, setEnabledState] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY_REMINDERS).then((v) => {
      setEnabledState(v === 'true');
      setLoaded(true);
    });
  }, []);

  const setEnabled = useCallback(async (v: boolean) => {
    setEnabledState(v);
    await AsyncStorage.setItem(KEY_REMINDERS, v ? 'true' : 'false');
  }, []);

  return { enabled, setEnabled, loaded };
}
