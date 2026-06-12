/**
 * Web lesson loading + completion against the shared Supabase backend.
 *
 * Lessons stream from the `course-content` Storage bucket at
 *   lessons/<courseId>/<speakerId>/<lessonId>.json
 * — the same files the mobile app caches on-device. Web fetches on
 * demand (no client cache in v1; the JSONs are ~10-30 KB).
 *
 * Lesson-id wrinkle: the web catalogue synthesises SHORT ids
 * ("m01-l01") but most courses store files under canonical LONG ids
 * ("m01-l01-hello.json"). The loader tries the exact path first, then
 * lists the speaker directory with a prefix search and takes the match.
 *
 * Client-agnostic (pass createSupabaseServer or createSupabaseBrowser)
 * so the page can load server-side and the player can save client-side.
 */

import type { SupabaseClient } from '@supabase/supabase-js';
import type { LessonData } from './lesson-types';

const BUCKET = 'course-content';

async function downloadJson(client: SupabaseClient, path: string): Promise<LessonData | null> {
  const { data, error } = await client.storage.from(BUCKET).download(path);
  if (error || !data) return null;
  try {
    return JSON.parse(await data.text()) as LessonData;
  } catch {
    return null;
  }
}

/** Resolve a (possibly short) lesson id to the stored filename within a
 *  speaker directory. Returns a full storage path or null. */
async function resolveLessonPath(
  client: SupabaseClient,
  courseId: string,
  speakerId: string,
  lessonId: string,
): Promise<string | null> {
  const dir = `lessons/${courseId}/${speakerId}`;
  const { data, error } = await client.storage.from(BUCKET).list(dir, {
    limit: 5,
    search: lessonId,
  });
  if (error || !data) return null;
  // Exact "<id>.json" first, then canonical long form "<id>-slug.json".
  const exact = data.find((f) => f.name === `${lessonId}.json`);
  const prefixed = data.find((f) => f.name.startsWith(`${lessonId}-`) && f.name.endsWith('.json'));
  const hit = exact ?? prefixed;
  return hit ? `${dir}/${hit.name}` : null;
}

/**
 * Load a lesson body. Tries the requested speaker variant, then falls
 * back to 'english' (mirrors the mobile loader's fallback chain).
 * Returns null when the content genuinely isn't in Storage — callers
 * render the practice-with-Rwen fallback in that case.
 */
export async function loadLesson(
  client: SupabaseClient,
  courseId: string,
  lessonId: string,
  speakerId = 'english',
): Promise<{ lesson: LessonData; canonicalId: string } | null> {
  const speakers = speakerId === 'english' ? ['english'] : [speakerId, 'english'];
  for (const speaker of speakers) {
    // Fast path: id is already the stored filename.
    const direct = await downloadJson(client, `lessons/${courseId}/${speaker}/${lessonId}.json`);
    if (direct) return { lesson: direct, canonicalId: direct.id ?? lessonId };
    // Slow path: prefix-match the canonical long id.
    const path = await resolveLessonPath(client, courseId, speaker, lessonId);
    if (path) {
      const lesson = await downloadJson(client, path);
      if (lesson) return { lesson, canonicalId: lesson.id ?? lessonId };
    }
  }
  return null;
}

// ─── Completion ──────────────────────────────────────────────────────────

export interface LessonCompletionResult {
  ok: boolean;
  alreadyCompleted: boolean;
  xpEarned: number;
  error?: string;
}

/**
 * Persist a finished lesson: lesson_progress row + award_xp RPC
 * (server-side dedup per lesson_id) + dictionary auto-add. Same shape
 * as markLessonComplete in courses-web.ts but with the real score from
 * the lesson engine instead of a flat 100/25.
 */
export async function completeLessonWeb(
  client: SupabaseClient,
  userId: string,
  courseId: string,
  lesson: LessonData,
  score: number,
  totalAnswered: number,
): Promise<LessonCompletionResult> {
  const xpEarned = totalAnswered > 0
    ? Math.round((score / totalAnswered) * (lesson.xpReward || 25))
    : (lesson.xpReward || 25);
  const scorePct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 100;

  // lesson_progress has no unique (user_id, lesson_id) key in the live
  // schema — check-then-insert like the rest of the web codebase.
  const { data: existing } = await client
    .from('lesson_progress')
    .select('id')
    .eq('user_id', userId)
    .eq('lesson_id', lesson.id)
    .maybeSingle();

  if (existing) {
    return { ok: true, alreadyCompleted: true, xpEarned: 0 };
  }

  const { error: insertErr } = await client.from('lesson_progress').insert({
    user_id: userId,
    lesson_id: lesson.id,
    pack_id: courseId,
    score: scorePct,
    xp_earned: xpEarned,
  });
  if (insertErr) {
    return { ok: false, alreadyCompleted: false, xpEarned: 0, error: insertErr.message };
  }

  // award_xp dedups lesson_complete by lesson_id server-side, so a race
  // with another tab can't double-grant.
  await client.rpc('award_xp', {
    p_event_type: 'lesson_complete',
    p_amount: xpEarned,
    p_metadata: { lesson_id: lesson.id, course_id: courseId },
  });

  // Dictionary auto-add — best-effort, never blocks completion.
  try {
    await autoAddLessonChunks(client, userId, courseId, lesson);
  } catch (e) {
    console.warn('[lesson] dictionary auto-add failed:', e);
  }

  return { ok: true, alreadyCompleted: false, xpEarned };
}

/** Add the lesson's vocab chunks to user_dictionary, skipping words the
 *  user already has (case-insensitive, per the table's unique index). */
async function autoAddLessonChunks(
  client: SupabaseClient,
  userId: string,
  courseId: string,
  lesson: LessonData,
): Promise<void> {
  if (!lesson.chunks?.length) return;
  const { data: existing } = await client
    .from('user_dictionary')
    .select('target_word')
    .eq('user_id', userId)
    .eq('course_id', courseId);
  const have = new Set((existing ?? []).map((r) => (r.target_word as string).toLowerCase()));
  const rows = lesson.chunks
    .filter((c) => !have.has(c.target.toLowerCase()))
    .map((c) => ({
      user_id: userId,
      course_id: courseId,
      target_word: c.target,
      native_word: c.native,
      literal: c.literal ?? null,
      source: 'lesson',
      source_lesson_id: lesson.id,
    }));
  if (rows.length > 0) {
    await client.from('user_dictionary').insert(rows);
  }
}
