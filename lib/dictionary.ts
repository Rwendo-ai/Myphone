import { supabase } from './supabase';
import type { LessonData } from '../types/lesson';

export type DictionarySource = 'lesson' | 'ai' | 'manual';

export interface DictionaryEntry {
  id: string;
  user_id: string;
  course_id: string;
  target_word: string;
  native_word: string;
  literal: string | null;
  notes: string | null;
  source: DictionarySource;
  source_lesson_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface NewDictionaryEntry {
  target_word: string;
  native_word: string;
  literal?: string | null;
  notes?: string | null;
  source?: DictionarySource;
  source_lesson_id?: string | null;
}

/** Fetch all dictionary entries for the user in a course, newest-edited first. */
export async function listDictionary(
  userId: string,
  courseId: string,
): Promise<DictionaryEntry[]> {
  const { data, error } = await supabase
    .from('user_dictionary')
    .select('*')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .order('updated_at', { ascending: false });
  if (error) {
    console.error('user_dictionary list error:', error);
    return [];
  }
  return (data ?? []) as DictionaryEntry[];
}

/** Insert or update a single dictionary entry. Case-insensitive de-dupe on target_word. */
export async function upsertDictionaryEntry(
  userId: string,
  courseId: string,
  entry: NewDictionaryEntry,
): Promise<DictionaryEntry | null> {
  const payload = {
    user_id: userId,
    course_id: courseId,
    target_word: entry.target_word.trim(),
    native_word: entry.native_word.trim(),
    literal: entry.literal?.trim() || null,
    notes: entry.notes?.trim() || null,
    source: entry.source ?? 'manual',
    source_lesson_id: entry.source_lesson_id ?? null,
    updated_at: new Date().toISOString(),
  };
  // Case-insensitive uniqueness is enforced by the unique index on
  // (user_id, course_id, lower(target_word)). Postgres can't dedupe via
  // onConflict on a functional index, so we look up first.
  const { data: existing } = await supabase
    .from('user_dictionary')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .ilike('target_word', payload.target_word)
    .maybeSingle();

  if (existing?.id) {
    const { data, error } = await supabase
      .from('user_dictionary')
      .update(payload)
      .eq('id', existing.id)
      .select('*')
      .single();
    if (error) {
      console.error('user_dictionary update error:', error);
      return null;
    }
    return data as DictionaryEntry;
  }

  const { data, error } = await supabase
    .from('user_dictionary')
    .insert(payload)
    .select('*')
    .single();
  if (error) {
    console.error('user_dictionary insert error:', error);
    return null;
  }
  return data as DictionaryEntry;
}

/** Update specific fields on an existing entry. */
export async function updateDictionaryEntry(
  entryId: string,
  patch: Partial<NewDictionaryEntry>,
): Promise<DictionaryEntry | null> {
  const payload: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (patch.target_word !== undefined) payload.target_word = patch.target_word.trim();
  if (patch.native_word !== undefined) payload.native_word = patch.native_word.trim();
  if (patch.literal !== undefined) payload.literal = patch.literal?.trim() || null;
  if (patch.notes !== undefined) payload.notes = patch.notes?.trim() || null;
  const { data, error } = await supabase
    .from('user_dictionary')
    .update(payload)
    .eq('id', entryId)
    .select('*')
    .single();
  if (error) {
    console.error('user_dictionary patch error:', error);
    return null;
  }
  return data as DictionaryEntry;
}

export async function deleteDictionaryEntry(entryId: string): Promise<boolean> {
  const { error } = await supabase.from('user_dictionary').delete().eq('id', entryId);
  if (error) {
    console.error('user_dictionary delete error:', error);
    return false;
  }
  return true;
}

/** Bulk-add a lesson's chunks to the user's dictionary. Idempotent — re-running on
 *  the same lesson updates timestamps but doesn't dupe. */
export async function autoAddLessonChunks(
  userId: string,
  courseId: string,
  lesson: LessonData,
): Promise<number> {
  let added = 0;
  for (const chunk of lesson.chunks) {
    const result = await upsertDictionaryEntry(userId, courseId, {
      target_word: chunk.target,
      native_word: chunk.native,
      literal: chunk.literal ?? null,
      source: 'lesson',
      source_lesson_id: lesson.id,
    });
    if (result) added++;
  }
  return added;
}
