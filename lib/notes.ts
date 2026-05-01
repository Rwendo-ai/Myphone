import { supabase } from './supabase';

export interface LessonNote {
  user_id: string;
  course_id: string;
  lesson_id: string;
  content: string;
  updated_at: string;
}

/** Get the user's note for a specific lesson. Returns empty string if none yet. */
export async function getLessonNote(
  userId: string,
  courseId: string,
  lessonId: string,
): Promise<string> {
  const { data, error } = await supabase
    .from('lesson_notes')
    .select('content')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .eq('lesson_id', lessonId)
    .maybeSingle();
  if (error) {
    console.error('lesson_notes fetch error:', error);
    return '';
  }
  return data?.content ?? '';
}

/** Save (upsert) the user's note for a specific lesson. Empty content is allowed
 *  — preserves the row so the autosave round-trip is consistent. */
export async function saveLessonNote(
  userId: string,
  courseId: string,
  lessonId: string,
  content: string,
): Promise<boolean> {
  const { error } = await supabase
    .from('lesson_notes')
    .upsert(
      {
        user_id: userId,
        course_id: courseId,
        lesson_id: lessonId,
        content,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,course_id,lesson_id' },
    );
  if (error) {
    console.error('lesson_notes upsert error:', error);
    return false;
  }
  return true;
}
