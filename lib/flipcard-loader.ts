/**
 * Flip-card content loader. Bucket: `course-content` (private, authed-read).
 * Path: `flipcards/<courseId>.json`. Cached on device under
 * `<documentDir>/flipcards/<courseId>.json`.
 *
 * Pre-2026-05-10 these lived in `travel-content`. Moved to `course-content`
 * because flip cards are course content (gated by entitlement, downloaded
 * with the rest of a course's lessons), not travel content (the publicly-
 * readable phrasebook / culture / safari guides).
 */

import * as FileSystem from 'expo-file-system/legacy';
import { supabase } from './supabase';
import type { FlipCard } from '../types/flipcards';

const BUCKET = 'course-content';

function cacheRoot(): string {
  return `${FileSystem.documentDirectory}flipcards/`;
}

const memoryCache = new Map<string, FlipCard[]>();

async function ensureDir(dirPath: string): Promise<void> {
  const info = await FileSystem.getInfoAsync(dirPath);
  if (!info.exists) await FileSystem.makeDirectoryAsync(dirPath, { intermediates: true });
}

export async function loadFlipCards(courseId: string): Promise<FlipCard[] | null> {
  if (memoryCache.has(courseId)) return memoryCache.get(courseId)!;

  const cachePath = `${cacheRoot()}${courseId}.json`;
  const info = await FileSystem.getInfoAsync(cachePath);
  if (info.exists) {
    try {
      const text = await FileSystem.readAsStringAsync(cachePath);
      const parsed = JSON.parse(text) as FlipCard[];
      memoryCache.set(courseId, parsed);
      return parsed;
    } catch {
      // Corrupt cache → fall through to Storage refetch.
    }
  }

  try {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .download(`flipcards/${courseId}.json`);
    if (error || !data) return null;
    const text = await new Response(data).text();
    const parsed = JSON.parse(text) as FlipCard[];
    await ensureDir(cacheRoot());
    await FileSystem.writeAsStringAsync(cachePath, text);
    memoryCache.set(courseId, parsed);
    return parsed;
  } catch {
    return null;
  }
}

export async function loadFlipCardsForModule(
  courseId: string,
  module: number,
): Promise<FlipCard[]> {
  const all = await loadFlipCards(courseId);
  if (!all) return [];
  return all.filter((c) => c.module === module);
}

export async function clearFlipCardCache(): Promise<void> {
  const root = cacheRoot();
  const info = await FileSystem.getInfoAsync(root);
  if (info.exists) await FileSystem.deleteAsync(root, { idempotent: true });
  memoryCache.clear();
}
