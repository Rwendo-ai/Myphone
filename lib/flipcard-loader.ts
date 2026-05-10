/**
 * Flip-card content loader. Bucket: `course-content` (private, authed-read).
 *
 * Path scheme:
 *   - Single-speaker courses (Learn Shona / Ndebele / French / etc. —
 *     every course where the user must be an English speaker):
 *       flipcards/<courseId>.json
 *   - Multi-speaker course language-english:
 *       flipcards/language-english-from-<speakerId>.json (preferred)
 *       flipcards/language-english-from-shona.json       (fallback)
 *
 * Today only Shona + Ndebele speakers have authored their own English
 * flip-card decks. All other speakers (Tagalog/French/Chinese/Hindi/
 * Japanese/Korean/Spanish/Portuguese) fall back to the Shona deck —
 * English target words and English hints display correctly, but the
 * native column shows Shona translations until per-speaker decks are
 * authored. See JOBS.md.
 */

import * as FileSystem from 'expo-file-system/legacy';
import { supabase } from './supabase';
import type { FlipCard } from '../types/flipcards';

const BUCKET = 'course-content';

/** Compute the storage basename for a (course, speaker) pair. */
function flipcardKey(courseId: string, speakerId: string): string {
  if (courseId === 'language-english') {
    return `language-english-from-${speakerId}`;
  }
  return courseId;
}

/** Fallback basename when the preferred speaker variant doesn't exist. */
function fallbackKey(courseId: string): string | null {
  if (courseId === 'language-english') return 'language-english-from-shona';
  return null;
}

function cacheRoot(): string {
  return `${FileSystem.documentDirectory}flipcards/`;
}

const memoryCache = new Map<string, FlipCard[]>();

async function ensureDir(dirPath: string): Promise<void> {
  const info = await FileSystem.getInfoAsync(dirPath);
  if (!info.exists) await FileSystem.makeDirectoryAsync(dirPath, { intermediates: true });
}

async function tryLoad(key: string): Promise<FlipCard[] | null> {
  if (memoryCache.has(key)) return memoryCache.get(key)!;

  const cachePath = `${cacheRoot()}${key}.json`;
  const info = await FileSystem.getInfoAsync(cachePath);
  if (info.exists) {
    try {
      const text = await FileSystem.readAsStringAsync(cachePath);
      const parsed = JSON.parse(text) as FlipCard[];
      memoryCache.set(key, parsed);
      return parsed;
    } catch {
      // Corrupt cache → fall through.
    }
  }

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .download(`flipcards/${key}.json`);
  if (error || !data) return null;
  const text = await new Response(data).text();
  const parsed = JSON.parse(text) as FlipCard[];
  await ensureDir(cacheRoot());
  await FileSystem.writeAsStringAsync(cachePath, text);
  memoryCache.set(key, parsed);
  return parsed;
}

export async function loadFlipCards(
  courseId: string,
  speakerId: string,
): Promise<FlipCard[] | null> {
  const primary = flipcardKey(courseId, speakerId);
  const cards = await tryLoad(primary);
  if (cards) return cards;

  const fallback = fallbackKey(courseId);
  if (fallback && fallback !== primary) {
    return tryLoad(fallback);
  }
  return null;
}

export async function loadFlipCardsForModule(
  courseId: string,
  speakerId: string,
  module: number,
): Promise<FlipCard[]> {
  const all = await loadFlipCards(courseId, speakerId);
  if (!all) return [];
  return all.filter((c) => c.module === module);
}

export async function clearFlipCardCache(): Promise<void> {
  const root = cacheRoot();
  const info = await FileSystem.getInfoAsync(root);
  if (info.exists) await FileSystem.deleteAsync(root, { idempotent: true });
  memoryCache.clear();
}
