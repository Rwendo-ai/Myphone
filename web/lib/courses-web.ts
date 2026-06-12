/**
 * Web-only course catalogue + Supabase progress helpers.
 *
 * v1 scope: the web app does NOT import the mobile `data/courses/*` tree
 * (those packs are React-Native-typed and ship bundled lesson content).
 * Instead, we maintain a small static catalogue here — id, name, emoji,
 * category, module count, lesson count — that mirrors the shape of the
 * mobile manifests. Mobile remains the source of truth for actual lesson
 * content; web v1 shows the course list, a module breakdown, and a
 * "Practice with Rwen" deep link into /chat per lesson.
 *
 * Free-tier rules mirror lib/entitlements.ts:
 *   - STARTER_FREE_MODULES (=2) of the user's starter course are free.
 *   - Other modules + other courses require any paid tier
 *     (subscriptions.active_tier != 'free').
 *
 * Starter course resolution: profiles has no dedicated `starter_course_id`
 * column in the live schema. We treat `active_pack_id` as the starter
 * proxy for language courses and fall back to the first course in
 * `active_course_ids[]` when set. Build-Yourself courses with no active
 * row stay locked behind a paid tier for free users.
 */

// We keep this module free of Next.js server-only imports so it can be
// used from both Server and Client Components — the actual SupabaseClient
// is passed in by callers (createSupabaseServer in Server Components,
// createSupabaseBrowser in Client Components).
import type { SupabaseClient } from '@supabase/supabase-js';
import RAW_MANIFESTS from './course-manifests.json';

// Real lesson manifests extracted from the mobile app's auto-generated
// data/courses/<id>/manifest.ts files (regenerate by re-running the
// extraction in scripts — see WEB-PARITY-PLAN §4 drift). Canonical
// lesson ids + titles + real module/lesson counts; the synthesized
// m01-l01 guesses below remain only as a fallback for courses without
// an authored manifest.
export interface LessonMeta {
  id: string;
  module: number;
  lesson: number;
  title: string;
  xpReward: number;
}
const COURSE_MANIFESTS = RAW_MANIFESTS as Record<string, LessonMeta[]>;

export function getLessonManifest(courseId: string): LessonMeta[] | undefined {
  return COURSE_MANIFESTS[courseId];
}

export const STARTER_FREE_MODULES = 2;

export type CourseCategory = 'languages' | 'build-yourself';

export interface CourseSummary {
  id: string;
  name: string;
  emoji: string;
  category: CourseCategory;
  totalModules: number;
  totalLessons: number;
  tagline: string;
}

export interface ModuleSummary {
  /** 1-indexed module number (m01 → 1). */
  index: number;
  /** Lesson-id prefix (e.g. "m02"). */
  code: string;
  title: string;
  emoji: string;
  totalLessons: number;
  /** Lesson ids in this module (m02-l01, m02-l02, …). */
  lessonIds: string[];
}

/**
 * Static catalogue — keep in sync with data/courses/index.ts (mobile).
 * Every course advertises 5 modules × 5 lessons = 25 lessons by default
 * (matches the curriculum spec); per-course overrides land here as the
 * mobile manifests get authored further.
 */
const DEFAULT_LESSONS_PER_MODULE = 5;

const CATALOGUE: CourseSummary[] = [
  // Languages
  { id: 'language-shona',      name: 'Shona',      emoji: '🇿🇼', category: 'languages', totalModules: 10, totalLessons: 50, tagline: 'Greetings, family, daily life' },
  { id: 'language-english',    name: 'English',    emoji: '🇬🇧', category: 'languages', totalModules: 10, totalLessons: 100, tagline: 'Four speaker variants' },
  { id: 'language-french',     name: 'French',     emoji: '🇫🇷', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Bonjour to fluency' },
  { id: 'language-spanish',    name: 'Spanish',    emoji: '🇪🇸', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Hola y bienvenidos' },
  { id: 'language-chinese',    name: 'Mandarin',   emoji: '🇨🇳', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Pinyin + characters' },
  { id: 'language-tagalog',    name: 'Tagalog',    emoji: '🇵🇭', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Filipino essentials' },
  { id: 'language-hindi',      name: 'Hindi',      emoji: '🇮🇳', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Devanagari + script' },
  { id: 'language-portuguese', name: 'Portuguese', emoji: '🇵🇹', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Brazilian + Continental' },
  { id: 'language-japanese',   name: 'Japanese',   emoji: '🇯🇵', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Hiragana + everyday talk' },
  { id: 'language-korean',     name: 'Korean',     emoji: '🇰🇷', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Hangul + K-conversation' },
  { id: 'language-ndebele',    name: 'Ndebele',    emoji: '🇿🇼', category: 'languages', totalModules: 5,  totalLessons: 25, tagline: 'Sister-tongue to Zulu' },

  // Build Yourself — Christian-foundation curriculum, surface-neutral
  { id: 'know-yourself',            name: 'Know Yourself',            emoji: '🪞', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Patterns, values, identity' },
  { id: 'hard-conversations-work',  name: 'Hard Conversations at Work', emoji: '💬', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Disagree without burning bridges' },
  { id: 'parenting-under-pressure', name: 'Parenting Under Pressure', emoji: '🧸', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Stay grounded when they’re not' },
  { id: 'money-and-meaning',        name: 'Money and Meaning',        emoji: '🪙', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Money decisions that fit your life' },
  { id: 'grief-honestly',           name: 'Grief, Honestly',          emoji: '🕊️', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Sit with loss without rushing past' },
  { id: 'sleep-repaired',           name: 'Sleep, Repaired',          emoji: '🌙', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Rebuild rest from the floor up' },
  { id: 'lost-confidence',          name: 'Lost Confidence',          emoji: '🌱', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Rebuild after a knock' },
  { id: 'caring-aging-parent',      name: 'Caring for an Aging Parent', emoji: '🤝', category: 'build-yourself', totalModules: 5, totalLessons: 25, tagline: 'Love, logistics, limits' },
];

/** All courses, grouped by category, with totals taken from the real
 *  manifests when one exists (the hardcoded numbers drifted — e.g.
 *  language courses are 100 lessons / 10 modules, not 50). */
export function getCourseCatalogue(): CourseSummary[] {
  return CATALOGUE.map((c) => {
    const manifest = COURSE_MANIFESTS[c.id];
    if (!manifest || manifest.length === 0) return c;
    return {
      ...c,
      totalLessons: manifest.length,
      totalModules: new Set(manifest.map((l) => l.module)).size,
    };
  });
}

export function getCourseById(courseId: string): CourseSummary | undefined {
  return getCourseCatalogue().find(c => c.id === courseId);
}

/**
 * Module structure for a course. Uses the real manifest when present —
 * canonical lesson ids ("m01-l01-mangwanani"), real per-module counts.
 * Falls back to synthesised m01-l01 codes for unauthored courses.
 */
export function getModulesForCourse(courseId: string): ModuleSummary[] {
  const course = getCourseById(courseId);
  if (!course) return [];

  const manifest = COURSE_MANIFESTS[courseId];
  if (manifest && manifest.length > 0) {
    const byModule = new Map<number, LessonMeta[]>();
    for (const l of manifest) {
      (byModule.get(l.module) ?? byModule.set(l.module, []).get(l.module)!).push(l);
    }
    return [...byModule.entries()]
      .sort(([a], [b]) => a - b)
      .map(([index, lessons]) => {
        const sorted = [...lessons].sort((a, b) => a.lesson - b.lesson);
        return {
          index,
          code: `m${String(index).padStart(2, '0')}`,
          title: `Module ${index}`,
          emoji: index <= STARTER_FREE_MODULES ? '⭐' : '📘',
          totalLessons: sorted.length,
          lessonIds: sorted.map((l) => l.id),
        };
      });
  }

  const modules: ModuleSummary[] = [];
  const lessonsPerModule = Math.max(1, Math.round(course.totalLessons / course.totalModules)) || DEFAULT_LESSONS_PER_MODULE;
  for (let i = 1; i <= course.totalModules; i++) {
    const code = `m${String(i).padStart(2, '0')}`;
    const lessonIds: string[] = [];
    for (let j = 1; j <= lessonsPerModule; j++) {
      lessonIds.push(`${code}-l${String(j).padStart(2, '0')}`);
    }
    modules.push({
      index: i,
      code,
      title: `Module ${i}`,
      emoji: i <= STARTER_FREE_MODULES ? '⭐' : '📘',
      totalLessons: lessonIds.length,
      lessonIds,
    });
  }
  return modules;
}

/** Parse the module index (1-based) out of a lesson id like 'm05-l01'. */
export function parseLessonModuleIndex(lessonId: string): number {
  const m = lessonId.match(/^m(\d+)-/);
  return m ? parseInt(m[1], 10) : 1;
}

// ─── Supabase-backed helpers ─────────────────────────────────────────────

export interface CourseProgress {
  completed: number;
  total: number;
  /** Lesson ids the user has completed (within this course). */
  completedLessonIds: Set<string>;
}

/**
 * Pull lesson_progress rows for a single course. Lesson ids in the table
 * are stored as bare manifest ids (e.g. "m02-l03-greeting") — there is
 * no per-row course_id column, so we filter by `pack_id` matching the
 * course id. Tolerant of either pattern: callers shouldn't depend on
 * one.
 */
export async function getCourseProgress(
  client: SupabaseClient,
  userId: string,
  courseId: string,
): Promise<CourseProgress> {
  const course = getCourseById(courseId);
  const total = course?.totalLessons ?? 0;

  const { data, error } = await client
    .from('lesson_progress')
    .select('lesson_id, pack_id')
    .eq('user_id', userId)
    .eq('pack_id', courseId);

  if (error || !data) {
    return { completed: 0, total, completedLessonIds: new Set() };
  }

  const ids = new Set(data.map(r => r.lesson_id as string));
  return { completed: ids.size, total, completedLessonIds: ids };
}

/**
 * Bulk progress for the whole catalogue — fewer Supabase round-trips
 * than calling getCourseProgress N times.
 */
export async function getAllCoursesProgress(
  client: SupabaseClient,
  userId: string,
): Promise<Record<string, CourseProgress>> {
  const { data } = await client
    .from('lesson_progress')
    .select('lesson_id, pack_id')
    .eq('user_id', userId);

  const byCourse: Record<string, Set<string>> = {};
  for (const row of data ?? []) {
    const pid = (row.pack_id as string | null) ?? '';
    if (!pid) continue;
    (byCourse[pid] ||= new Set()).add(row.lesson_id as string);
  }

  const result: Record<string, CourseProgress> = {};
  for (const c of CATALOGUE) {
    const ids = byCourse[c.id] ?? new Set<string>();
    result[c.id] = { completed: ids.size, total: c.totalLessons, completedLessonIds: ids };
  }
  return result;
}

export interface AccessContext {
  /** Current subscription tier from `subscriptions.active_tier`. */
  tier: string;
  /** Course id the user activated first — modules 1-2 free here. */
  starterCourseId: string | null;
}

/** Free user with no paid tier? */
function isFreeTier(tier: string): boolean {
  return !tier || tier === 'free';
}

/**
 * Can the user open this course at all from the hub? Free users see
 * every course in the grid, but only the starter is unlocked.
 */
export function canAccessCourse(courseId: string, ctx: AccessContext): boolean {
  if (!isFreeTier(ctx.tier)) return true;
  return ctx.starterCourseId === courseId;
}

/**
 * Can the user open this module? moduleIndex is 1-based. Module 1-2 of
 * the starter course are free; everything else needs a paid tier.
 */
export function canAccessModule(
  courseId: string,
  moduleIndex: number,
  ctx: AccessContext,
): boolean {
  if (!isFreeTier(ctx.tier)) return true;
  if (ctx.starterCourseId !== courseId) return false;
  return moduleIndex <= STARTER_FREE_MODULES;
}

/** Resolve the user's effective starter course + tier in one round-trip. */
export async function getAccessContext(
  client: SupabaseClient,
  userId: string,
): Promise<AccessContext> {
  const [{ data: profile }, { data: sub }] = await Promise.all([
    client.from('profiles')
      .select('active_pack_id, active_language_pack_id, active_course_ids')
      .eq('id', userId)
      .maybeSingle(),
    client.from('subscriptions')
      .select('active_tier')
      .eq('user_id', userId)
      .maybeSingle(),
  ]);

  // Resolve a starter course id from the profile. Prefer active_course_ids[0]
  // (web onboarding writes here), then active_pack_id, then the language pack.
  let starter: string | null = null;
  const activeCourseIds = (profile?.active_course_ids as string[] | null) ?? null;
  if (activeCourseIds && activeCourseIds.length > 0) {
    starter = activeCourseIds[0];
  } else if (profile?.active_pack_id) {
    starter = mapLegacyPackToCourse(profile.active_pack_id as string);
  } else if (profile?.active_language_pack_id) {
    starter = mapLegacyPackToCourse(profile.active_language_pack_id as string);
  }

  // Validate that the resolved id is actually in our catalogue; otherwise
  // null so free users see "no starter" and pay-tier users still unlock.
  if (starter && !getCourseById(starter)) starter = null;

  return {
    tier: (sub?.active_tier as string) ?? 'free',
    starterCourseId: starter,
  };
}

/**
 * Legacy pack ids (e.g. "shona-english") map to the canonical course id
 * the web catalogue uses ("language-shona"). Anything we don't recognise
 * is returned as-is so callers can still validate against the catalogue.
 */
function mapLegacyPackToCourse(packId: string): string {
  const map: Record<string, string> = {
    'shona-english':      'language-shona',
    'english-shona':      'language-english',
  };
  return map[packId] ?? packId;
}

// ─── Mutations ──────────────────────────────────────────────────────────

export interface MarkCompleteResult {
  ok: boolean;
  alreadyCompleted: boolean;
  newXp?: number;
  error?: string;
}

/**
 * Mark a lesson complete. Idempotent — repeat calls return
 * alreadyCompleted=true and skip the XP grant (server-side throttling
 * in `award_xp` would no-op anyway for lesson_complete dedup).
 */
export async function markLessonComplete(
  client: SupabaseClient,
  userId: string,
  courseId: string,
  lessonId: string,
): Promise<MarkCompleteResult> {
  // 1) Has the user already finished this lesson? lesson_progress has no
  //    natural unique key on (user_id, lesson_id) in the live schema, so
  //    we check first and short-circuit to avoid duplicate rows.
  const { data: existing } = await client
    .from('lesson_progress')
    .select('id')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .maybeSingle();

  if (existing) {
    return { ok: true, alreadyCompleted: true };
  }

  const { error: insertErr } = await client.from('lesson_progress').insert({
    user_id: userId,
    lesson_id: lessonId,
    pack_id: courseId,
    score: 100,
    xp_earned: 25,
  });
  if (insertErr) {
    return { ok: false, alreadyCompleted: false, error: insertErr.message };
  }

  // 2) Award XP via the throttled RPC. lesson_complete dedups by lesson_id
  //    server-side, so even if the row insert raced with another tab the
  //    user only gets 25 XP once.
  const { data: xpData } = await client.rpc('award_xp', {
    p_event_type: 'lesson_complete',
    p_amount: 25,
    p_metadata: { lesson_id: lessonId, course_id: courseId },
  });

  return { ok: true, alreadyCompleted: false, newXp: (xpData as number) ?? undefined };
}

