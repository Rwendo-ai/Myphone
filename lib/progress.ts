import { supabase } from './supabase';

export interface LessonResult {
  lessonId: string;
  score: number;
  totalQuestions: number;
  xpEarned: number;
}

// Save a completed lesson and award XP
export async function saveLessonProgress(userId: string, result: LessonResult) {
  const { lessonId, score, totalQuestions, xpEarned } = result;

  // Insert lesson completion
  const { error: progressError } = await supabase
    .from('lesson_progress')
    .upsert({
      user_id: userId,
      lesson_id: lessonId,
      score,
      xp_earned: xpEarned,
      completed_at: new Date().toISOString(),
    }, { onConflict: 'user_id,lesson_id' });

  if (progressError) {
    console.error('lesson_progress upsert error:', progressError);
    throw progressError;
  }

  // Add XP to profile
  const { error: xpError } = await supabase.rpc('add_xp', {
    p_user_id: userId,
    p_xp: xpEarned,
  });

  if (xpError) {
    console.error('add_xp rpc error:', xpError);
    throw xpError;
  }
}

// Get all completed lesson IDs for a user
export async function getCompletedLessons(userId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', userId);

  if (error) throw error;
  return data?.map((r) => r.lesson_id) ?? [];
}

// Get user profile (XP, streak)
export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('username, xp, streak_days, last_active_date')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

// Update streak — call when user opens app each day
export async function updateStreak(userId: string) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('last_active_date, streak_days')
    .eq('id', userId)
    .single();

  if (!profile) return;

  const today = new Date().toISOString().split('T')[0];
  const lastActive = profile.last_active_date;

  if (lastActive === today) return; // already updated today

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const newStreak = lastActive === yesterday ? profile.streak_days + 1 : 1;

  await supabase
    .from('profiles')
    .update({ streak_days: newStreak, last_active_date: today })
    .eq('id', userId);
}

// Delete account and all data (GDPR/CCPA)
export async function deleteAccount(userId: string) {
  // Profiles and lesson_progress cascade delete when auth user is deleted
  const { error } = await supabase.rpc('delete_user');
  if (error) throw error;
}
