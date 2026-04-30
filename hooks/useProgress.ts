import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../lib/AuthContext';
import { getProfile, getCompletedLessons, updateStreak } from '../lib/progress';

export interface ProgressState {
  xp: number;
  streakDays: number;
  username: string;
  completedLessons: Set<string>;
  loading: boolean;
  refresh: () => void;
}

export function useProgress(): ProgressState {
  const { user } = useAuth();
  const [xp, setXp] = useState(0);
  const [streakDays, setStreakDays] = useState(0);
  const [username, setUsername] = useState('');
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!user) return;
    try {
      const [profile, lessons] = await Promise.all([
        getProfile(user.id),
        getCompletedLessons(user.id),
      ]);
      setXp(profile?.xp ?? 0);
      setStreakDays(profile?.streak_days ?? 0);
      setUsername(profile?.username ?? '');
      setCompletedLessons(new Set(lessons));
      // Update streak silently
      await updateStreak(user.id);
    } catch (e) {
      // Fail silently — app works offline
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => { load(); }, [load]);

  return { xp, streakDays, username, completedLessons, loading, refresh: load };
}
