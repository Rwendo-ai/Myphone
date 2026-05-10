/**
 * Lazy travel content loader. Mirrors lib/lesson-loader.ts.
 *
 * Bucket: `travel-content`. Public so the app reads via getPublicUrl
 * (no signed-URL roundtrip per fetch).
 *
 * Cache layout on device:
 *   <documentDir>/travel-content/phrasebook/<countryCode>.json
 *   <documentDir>/travel-content/culture/<countryCode>.json
 *   <documentDir>/travel-content/safari/africa-top-10.json
 *
 * Flip cards moved to course-content bucket — see lib/flipcard-loader.ts.
 *
 * Cache-first; falls back to Storage on miss; persists once downloaded.
 * Module-level Map provides a one-tier in-memory cache for the current
 * app session so flipping between screens doesn't re-read disk.
 */

import * as FileSystem from 'expo-file-system/legacy';
import { supabase } from './supabase';

import type { PhrasebookCategory } from '../data/travel/phrasebook/types';
import type { CulturalGuide } from '../data/travel/culture/types';
import type { SafariPark } from '../data/travel/safari/types';

const BUCKET = 'travel-content';

function cacheRoot(): string {
  return `${FileSystem.documentDirectory}travel-content/`;
}

async function ensureDir(dirPath: string): Promise<void> {
  const info = await FileSystem.getInfoAsync(dirPath);
  if (!info.exists) await FileSystem.makeDirectoryAsync(dirPath, { intermediates: true });
}

// In-memory cache — wiped on app restart, populated on first load per session.
const memoryCache = new Map<string, unknown>();

async function fetchJson<T>(storagePath: string, cachePath: string): Promise<T | null> {
  if (memoryCache.has(storagePath)) return memoryCache.get(storagePath) as T;

  // Disk cache → fast path.
  const info = await FileSystem.getInfoAsync(cachePath);
  if (info.exists) {
    try {
      const text = await FileSystem.readAsStringAsync(cachePath);
      const data = JSON.parse(text) as T;
      memoryCache.set(storagePath, data);
      return data;
    } catch {
      // Corrupt cache file → fall through to Storage refetch.
    }
  }

  // Storage → fetch + cache.
  try {
    const { data, error } = await supabase.storage.from(BUCKET).download(storagePath);
    if (error || !data) return null;
    const text = await new Response(data).text();
    const parsed = JSON.parse(text) as T;
    // Persist to disk for next launch.
    const dir = cachePath.split('/').slice(0, -1).join('/');
    await ensureDir(dir + '/');
    await FileSystem.writeAsStringAsync(cachePath, text);
    memoryCache.set(storagePath, parsed);
    return parsed;
  } catch {
    return null;
  }
}

// ─── Per-content-type loaders ───────────────────────────────────────────────

export async function loadPhrasebook(countryCode: string): Promise<PhrasebookCategory[] | null> {
  return fetchJson<PhrasebookCategory[]>(
    `phrasebook/${countryCode}.json`,
    `${cacheRoot()}phrasebook/${countryCode}.json`,
  );
}

export async function loadCulturalGuide(countryCode: string): Promise<CulturalGuide | null> {
  return fetchJson<CulturalGuide>(
    `culture/${countryCode}.json`,
    `${cacheRoot()}culture/${countryCode}.json`,
  );
}

export async function loadSafariParks(): Promise<SafariPark[] | null> {
  return fetchJson<SafariPark[]>(
    `safari/africa-top-10.json`,
    `${cacheRoot()}safari/africa-top-10.json`,
  );
}

// ─── Cache management (Profile → Storage panel) ─────────────────────────────

export async function clearTravelContentCache(): Promise<void> {
  const root = cacheRoot();
  const info = await FileSystem.getInfoAsync(root);
  if (info.exists) await FileSystem.deleteAsync(root, { idempotent: true });
  memoryCache.clear();
}
