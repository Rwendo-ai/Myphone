/**
 * Module gating + entitlement checks.
 *
 * Pricing model (2026-05-10 — locked):
 *   1. The user's STARTER course (first activated language course) is free
 *      for modules 1-2 (≈20 lessons). Modules 3+ require Pro.
 *   2. All non-starter courses require Pro to access at all.
 *   3. AI features are tier-gated and quota-gated:
 *        - Free tier: 3 AI text messages per lesson (lesson-scoped quota)
 *        - Pro: unlimited AI text within a soft daily cap (~50/day)
 *        - Beyond cap: AI credit packs (consumable balance)
 *   4. Owner-list user IDs (hardcoded) bypass everything for life.
 *   5. DEV_UNLOCK_ALL bypasses everything (dev only; stripped from prod).
 *
 * Entitlement source-of-truth is RevenueCat (live, reactive). For server-
 * side reads (webhook, RPC), Supabase profiles row mirrors the latest RC
 * state — Edge Function syncs them when RC fires a webhook event.
 */

import { CoursePackId } from '../types/packs';
import { DEV_UNLOCK_ALL } from '../constants/dev';
import { PRO_ENTITLEMENT_ID } from '../data/products';

/** Two-tier model: are you Pro or not. Visual avatar + voice tiers will be
 *  added later as additional entitlements; for v1 the only paid tier is
 *  `rwendo_pro` (text + courses). */
export type SubscriptionTier = 'free' | 'pro';

/** Number of free modules in the user's starter course. Modules m01-m02 are
 *  unlocked without Pro; m03+ require Pro. */
export const STARTER_FREE_MODULES = 2;

/** Free-tier AI message quota per lesson. After this, the user sees the
 *  paywall when they try to send another AI message in that lesson. */
export const FREE_AI_MESSAGES_PER_LESSON = 3;

/** Owner / lifetime-access user IDs. Hardcoded list bypasses every gate
 *  forever. Add a Supabase user.id here to grant total access. */
export const OWNER_USER_IDS: string[] = [
  // Bowen — fill in real Supabase user.id once he's signed in.
  // 'TODO: bowen-user-id',
];

export interface EntitlementContext {
  /** Tier from RevenueCat (live `rwendo_pro` entitlement → 'pro', else 'free'). */
  tier: SubscriptionTier;
  /** The course the user activated FIRST (their "starter"). Source: profiles
   *  .starter_course_id (set on first course pick, never changes). */
  starterCourseId: CoursePackId | null;
  /** Supabase user.id — used for owner-list bypass. */
  userId?: string | null;
  /** Live RC entitlement IDs the user holds. Pass-through from
   *  useEntitlements() so per-feature checks can do `has('rwendo_pro')`
   *  without re-deriving from `tier`. */
  entitlements?: string[];
}

export type EntitlementResult =
  | { allowed: true }
  | {
      allowed: false;
      reason: 'pro_required' | 'starter_locked' | 'ai_quota_exhausted';
    };

function isOwner(ctx: EntitlementContext): boolean {
  return !!ctx.userId && OWNER_USER_IDS.includes(ctx.userId);
}

function isPro(ctx: EntitlementContext): boolean {
  if (ctx.tier === 'pro') return true;
  if (ctx.entitlements?.includes(PRO_ENTITLEMENT_ID)) return true;
  return false;
}

/** Parse the module number from a lesson ID like 'm05-l01-baba'. */
function parseLessonModule(lessonId: string): number {
  const m = lessonId.match(/^m(\d+)-/);
  return m ? parseInt(m[1], 10) : 1;
}

/**
 * Can the user access this lesson?
 *   - DEV_UNLOCK_ALL or owner → always yes
 *   - Pro → always yes
 *   - Starter course, module 1-2 → yes
 *   - Else → 'pro_required' (or 'starter_locked' if non-starter course)
 */
export function canAccessLesson(
  courseId: CoursePackId,
  lessonId: string,
  ctx: EntitlementContext,
): EntitlementResult {
  if (DEV_UNLOCK_ALL || isOwner(ctx) || isPro(ctx)) return { allowed: true };

  const isStarter = ctx.starterCourseId === courseId;
  if (!isStarter) {
    return { allowed: false, reason: 'starter_locked' };
  }
  const moduleNum = parseLessonModule(lessonId);
  if (moduleNum <= STARTER_FREE_MODULES) return { allowed: true };
  return { allowed: false, reason: 'pro_required' };
}

/**
 * Can the user use an AI feature (Phase 8 lesson chat, companion text, voice)?
 * Free tier → quota-checked per lesson. Pro → soft daily cap (enforced server-
 * side; client just lets through). Voice/lipsync require Pro outright in v1.
 *
 * Caller passes `messagesUsedInLesson` (count of AI messages already sent in
 * this lesson session). Quota check is client-side advisory; server enforces
 * the same rule on the AI proxy endpoint to prevent client tampering.
 */
export function canUseAiFeature(
  feature: 'text' | 'voice' | 'realtime',
  ctx: EntitlementContext,
  messagesUsedInLesson: number = 0,
): EntitlementResult {
  if (DEV_UNLOCK_ALL || isOwner(ctx)) return { allowed: true };

  // Voice and realtime are Pro-only in v1. Visual + lipsync tiers come later.
  if (feature !== 'text') {
    return isPro(ctx) ? { allowed: true } : { allowed: false, reason: 'pro_required' };
  }

  // Text: Pro = always allowed (server enforces 50/day soft cap).
  if (isPro(ctx)) return { allowed: true };

  // Free tier: 3 messages per lesson.
  if (messagesUsedInLesson < FREE_AI_MESSAGES_PER_LESSON) return { allowed: true };
  return { allowed: false, reason: 'ai_quota_exhausted' };
}

/**
 * Can the user access this course at all (Learn tab gating before lesson-
 * level checks)? Pro = all courses. Free = starter only (with module gating
 * inside).
 */
export function canAccessCourse(
  courseId: CoursePackId,
  ctx: EntitlementContext,
): EntitlementResult {
  if (DEV_UNLOCK_ALL || isOwner(ctx) || isPro(ctx)) return { allowed: true };
  if (ctx.starterCourseId === courseId) return { allowed: true };
  return { allowed: false, reason: 'pro_required' };
}
