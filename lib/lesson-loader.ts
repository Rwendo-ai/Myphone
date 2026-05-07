/**
 * Streaming lesson loader.
 *
 * Lessons live in the `course-content` Supabase Storage bucket as JSON.
 * Path scheme: `lessons/<courseId>/<speakerId>/<lessonId>.json`.
 *
 * Zero lesson content ships in the JS binary. Users who never pick a course
 * (the AI-companion-only or Travel-only audiences) never download any lesson
 * data — the app stays small. When a user picks their first course, all that
 * course's lessons download in the background (~500 KB for 100 lessons).
 * Uninstalling a pack clears those files; the user_packs ownership row stays
 * so re-install just re-downloads from Storage with no re-purchase.
 *
 * Cache layout on device:
 *
 *     <documentDir>/lessons/<courseId>/<speakerId>/<lessonId>.json
 *
 * Eviction: explicit only — uninstall a pack to free its space. No auto-LRU
 * eviction (per user spec — surprising users on a flight when a "downloaded"
 * lesson silently disappears is worse than the storage cost).
 */

// expo-file-system v19 introduced a new `Paths`/`File`/`Directory` class API
// alongside the function-based one. The function API now lives at the
// `legacy` subpath. We use the legacy one because it's better-documented and
// the migration to the class API can happen later as a focused refactor.
import * as FileSystem from 'expo-file-system/legacy';
import { supabase } from './supabase';
import type { LessonData } from '../types/lesson';

const BUCKET = 'course-content';

/** Root cache directory. Created on first use. */
function cacheRoot(): string {
  return `${FileSystem.documentDirectory}lessons/`;
}

function cachePath(courseId: string, speakerId: string, lessonId: string): string {
  return `${cacheRoot()}${courseId}/${speakerId}/${lessonId}.json`;
}

function storagePath(courseId: string, speakerId: string, lessonId: string): string {
  return `lessons/${courseId}/${speakerId}/${lessonId}.json`;
}

async function ensureDir(dirPath: string): Promise<void> {
  // expo-file-system 19 returns { exists, isDirectory } on getInfoAsync.
  const info = await FileSystem.getInfoAsync(dirPath);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(dirPath, { intermediates: true });
  }
}

// ─── Per-lesson load ────────────────────────────────────────────────────────

/**
 * Fetch a single lesson. Cache-first; on miss, downloads from Storage and
 * caches. Tries the user's speaker variant first; falls back to the
 * english-speaker variant (which is the source-of-truth for every course
 * at v1). Throws if neither variant exists in cache or Storage. The caller
 * (lesson screen) should show an error state for that case — typically
 * "you're offline and this lesson hasn't been downloaded".
 *
 * If `expectedVersion` is provided, cached copies older than that version
 * are ignored and re-downloaded — the manifest holds the authoritative
 * version per lesson id, bumped each time we re-author content.
 */
export async function loadLessonAsync(
  courseId: string,
  speakerId: string,
  lessonId: string,
  expectedVersion?: number,
): Promise<LessonData> {
  // Try the requested speaker variant, then fall back to english. Per-speaker
  // variants are Phase K work; today most courses only have english.
  const variantsToTry = speakerId === 'english' ? ['english'] : [speakerId, 'english'];

  for (const variant of variantsToTry) {
    const filePath = cachePath(courseId, variant, lessonId);
    const info = await FileSystem.getInfoAsync(filePath);

    if (info.exists) {
      const text = await FileSystem.readAsStringAsync(filePath);
      const data = JSON.parse(text) as LessonData;
      const cachedVersion = data.version ?? 1;
      // Stale cache → fall through to Storage refetch path below.
      if (expectedVersion !== undefined && cachedVersion < expectedVersion) {
        continue;
      }
      return data;
    }
  }

  // Both variants missed cache — try Storage in the same order.
  let lastStorageError: string | undefined;
  for (const variant of variantsToTry) {
    try {
      await ensureDir(`${cacheRoot()}${courseId}/${variant}/`);
      const path = storagePath(courseId, variant, lessonId);
      const { data, error } = await supabase.storage.from(BUCKET).download(path);
      if (error || !data) {
        lastStorageError = error?.message ?? 'no data';
        continue; // try next variant
      }
      // RN quirk: Supabase Storage returns a Blob whose `.text()` method is
      // undefined on React Native. Wrap with Response, which is polyfilled.
      const text = await new Response(data).text();
      await FileSystem.writeAsStringAsync(cachePath(courseId, variant, lessonId), text);
      return JSON.parse(text) as LessonData;
    } catch (e: any) {
      lastStorageError = e?.message ?? String(e);
    }
  }

  throw new Error(
    `Lesson ${courseId}/${lessonId} not found in cache or Storage` +
    (lastStorageError ? ` (last storage error: ${lastStorageError})` : ''),
  );
}

/** Synchronous "is this lesson on disk?" check — used by Learn tab to show
 *  download/installed/missing status per lesson without triggering a fetch. */
export async function isLessonCached(
  courseId: string,
  speakerId: string,
  lessonId: string,
): Promise<boolean> {
  const info = await FileSystem.getInfoAsync(cachePath(courseId, speakerId, lessonId));
  return info.exists;
}

// ─── Pack install / uninstall ───────────────────────────────────────────────

export interface PackInstallProgress {
  totalLessons: number;
  downloadedLessons: number;
  failedLessons: number;
  /** Lesson IDs (or paths) that failed — caller can show them or retry. */
  failures: string[];
}

/**
 * Download every lesson for a course-speaker pair into local cache. Use this
 * the moment a user picks/purchases a course so subsequent lesson opens are
 * cache hits and instant. The download list is taken from the `available_packs`
 * row's metadata (or, in v1, hardcoded per the curriculum we know exists).
 *
 * Caller should pass an `onProgress` callback to drive the install UI's
 * progress bar. Resolves with a final PackInstallProgress; never throws —
 * partial installs are fine (the loader will fetch any missing lesson on
 * first open).
 */
export async function installCourse(
  courseId: string,
  speakerId: string,
  lessonIds: string[],
  onProgress?: (p: PackInstallProgress) => void,
): Promise<PackInstallProgress> {
  await ensureDir(`${cacheRoot()}${courseId}/${speakerId}`);

  const progress: PackInstallProgress = {
    totalLessons: lessonIds.length,
    downloadedLessons: 0,
    failedLessons: 0,
    failures: [],
  };

  // Sequential download — Supabase Storage rate-limits anonymous parallel
  // gets, and lessons are small so the wall-clock difference is negligible.
  // 100 lessons × ~5 KB at typical mobile speeds = ~10-30s.
  for (const lessonId of lessonIds) {
    try {
      const filePath = cachePath(courseId, speakerId, lessonId);
      const info = await FileSystem.getInfoAsync(filePath);
      if (info.exists) {
        progress.downloadedLessons++; // already there, count as done
        onProgress?.(progress);
        continue;
      }

      const { data, error } = await supabase.storage
        .from(BUCKET)
        .download(storagePath(courseId, speakerId, lessonId));
      if (error || !data) throw new Error(error?.message ?? 'no data');

      await FileSystem.writeAsStringAsync(filePath, await new Response(data).text());
      progress.downloadedLessons++;
    } catch (e) {
      progress.failedLessons++;
      progress.failures.push(lessonId);
    }
    onProgress?.(progress);
  }

  return progress;
}

/**
 * Wipe all cached lesson files for a course-speaker pair from local disk.
 * The user's `user_packs` ownership row in Supabase is left untouched — they
 * still own the pack, just don't have it installed locally. Re-installing
 * pulls everything back from Storage with no re-purchase.
 */
export async function uninstallCourse(courseId: string, speakerId: string): Promise<void> {
  const dir = `${cacheRoot()}${courseId}/${speakerId}`;
  const info = await FileSystem.getInfoAsync(dir);
  if (info.exists) {
    await FileSystem.deleteAsync(dir, { idempotent: true });
  }
}

/**
 * Total bytes a course-speaker pair takes on disk. Used to surface "Free
 * 480 KB by uninstalling this pack" copy on the install/uninstall UI.
 */
export async function courseDiskBytes(courseId: string, speakerId: string): Promise<number> {
  const dir = `${cacheRoot()}${courseId}/${speakerId}`;
  const info = await FileSystem.getInfoAsync(dir);
  // expo-file-system returns size for files; for directories we have to walk.
  // The size param on getInfoAsync only fills for file paths.
  if (!info.exists) return 0;
  if (!info.isDirectory) return info.size ?? 0;

  // Walk the directory contents and sum sizes.
  const entries = await FileSystem.readDirectoryAsync(dir);
  let total = 0;
  for (const entry of entries) {
    const child = await FileSystem.getInfoAsync(`${dir}/${entry}`);
    if (child.exists && !child.isDirectory) total += child.size ?? 0;
  }
  return total;
}

/**
 * "Is this course installed locally?" — true if at least one lesson file
 * exists for the pair. Coarse but cheap, suitable for Learn tab badging.
 */
export async function isCourseInstalled(courseId: string, speakerId: string): Promise<boolean> {
  const dir = `${cacheRoot()}${courseId}/${speakerId}`;
  const info = await FileSystem.getInfoAsync(dir);
  if (!info.exists || !info.isDirectory) return false;
  const entries = await FileSystem.readDirectoryAsync(dir);
  return entries.length > 0;
}

/** Total disk used by ALL cached lessons across every installed pack.
 *  Useful for a "Storage" panel in profile. */
export async function totalCachedBytes(): Promise<number> {
  const root = cacheRoot();
  const rootInfo = await FileSystem.getInfoAsync(root);
  if (!rootInfo.exists || !rootInfo.isDirectory) return 0;
  let total = 0;
  const courses = await FileSystem.readDirectoryAsync(root);
  for (const course of courses) {
    const courseDir = `${root}${course}`;
    const courseInfo = await FileSystem.getInfoAsync(courseDir);
    if (!courseInfo.isDirectory) continue;
    const speakers = await FileSystem.readDirectoryAsync(courseDir);
    for (const speaker of speakers) {
      total += await courseDiskBytes(course, speaker);
    }
  }
  return total;
}
