/**
 * Reinforcement card content loader — Build Yourself end-of-module decks.
 *
 * Storage: course-content bucket (authed-read), at
 *   reinforcement-cards/<courseId>/m<NN>.json
 *
 * Cache layout on device:
 *   <documentDir>/reinforcement-cards/<courseId>/m<NN>.json
 *
 * Speaker-aware: when a non-English speaker opens a deck, we attempt to
 * fetch the pre-translated variant at
 *   reinforcement-cards/<courseId>/m<NN>.<speakerId>.json
 * If that doesn't exist, we fall back to the English source. The
 * translation pipeline (Claude API at runtime, cached in
 * lesson_translation_cache server-side) populates per-speaker variants
 * on demand — see docs/REINFORCEMENT-CARDS-TRANSLATION.md.
 */

import * as FileSystem from 'expo-file-system/legacy';
import { supabase } from './supabase';
import type { ReinforcementCard } from '../types/reinforcement-cards';

const BUCKET = 'course-content';

function cacheRoot(courseId: string): string {
  return `${FileSystem.documentDirectory}reinforcement-cards/${courseId}/`;
}

const memoryCache = new Map<string, ReinforcementCard[]>();

async function ensureDir(dirPath: string): Promise<void> {
  const info = await FileSystem.getInfoAsync(dirPath);
  if (!info.exists) await FileSystem.makeDirectoryAsync(dirPath, { intermediates: true });
}

async function tryLoad(storagePath: string, cachePath: string): Promise<ReinforcementCard[] | null> {
  if (memoryCache.has(storagePath)) return memoryCache.get(storagePath)!;

  const info = await FileSystem.getInfoAsync(cachePath);
  if (info.exists) {
    try {
      const text = await FileSystem.readAsStringAsync(cachePath);
      const parsed = JSON.parse(text) as ReinforcementCard[];
      memoryCache.set(storagePath, parsed);
      return parsed;
    } catch {
      // Corrupt cache → fall through.
    }
  }

  const { data, error } = await supabase.storage.from(BUCKET).download(storagePath);
  if (error || !data) return null;
  const text = await new Response(data).text();
  const parsed = JSON.parse(text) as ReinforcementCard[];
  await ensureDir(cachePath.split('/').slice(0, -1).join('/') + '/');
  await FileSystem.writeAsStringAsync(cachePath, text);
  memoryCache.set(storagePath, parsed);
  return parsed;
}

export async function loadReinforcementCards(
  courseId: string,
  module: number,
  speakerId: string = 'english',
): Promise<ReinforcementCard[] | null> {
  const mNN = `m${String(module).padStart(2, '0')}`;
  const root = cacheRoot(courseId);

  // Try speaker-specific variant first (translated on demand). Fall back
  // to English source which is always present.
  if (speakerId !== 'english') {
    const speakerPath = `reinforcement-cards/${courseId}/${mNN}.${speakerId}.json`;
    const cached = await tryLoad(speakerPath, `${root}${mNN}.${speakerId}.json`);
    if (cached) return cached;
  }

  return tryLoad(
    `reinforcement-cards/${courseId}/${mNN}.json`,
    `${root}${mNN}.json`,
  );
}

/** Quick availability check for the unit screen CTA. We treat any
 *  Build Yourself course as having reinforcement cards for Module 1
 *  (we authored those); other modules become available as authoring
 *  catches up. The actual file fetch confirms or hides the CTA. */
const COURSES_WITH_CARDS = new Set<string>([
  'know-yourself',
  'hard-conversations-work',
  'parenting-under-pressure',
  'money-and-meaning',
  'grief-honestly',
  'sleep-repaired',
  'lost-confidence',
  'caring-aging-parent',
]);

export function hasReinforcementCards(courseId: string, module: number): boolean {
  if (!COURSES_WITH_CARDS.has(courseId)) return false;
  // Module 1 authored across all 8 tracks. Knowing Yourself extends with
  // additional modules as they're authored — keep this set in sync with
  // what's in storage at reinforcement-cards/<courseId>/m<NN>.json.
  if (courseId === 'know-yourself') return module >= 1 && module <= KY_LATEST_MODULE;
  return module === 1;
}

/** Latest Knowing Yourself reinforcement-card module authored + uploaded.
 *  All 10 units shipped 2026-05-12 — 12 cards per module, 120 total. */
const KY_LATEST_MODULE = 10;

export async function clearReinforcementCardCache(): Promise<void> {
  const root = `${FileSystem.documentDirectory}reinforcement-cards/`;
  const info = await FileSystem.getInfoAsync(root);
  if (info.exists) await FileSystem.deleteAsync(root, { idempotent: true });
  memoryCache.clear();
}
