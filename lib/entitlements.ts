/**
 * Module gating + entitlement checks. Phase E of PRODUCT-DESIGN.md §8.
 *
 * The rules (locked design):
 *   1. The user's STARTER course (first activated language course, ever) is
 *      free for modules 1-4. Modules 5-10 of the starter need any paid tier.
 *   2. Subsequent courses (any course the user activates after the starter)
 *      need to appear in user_packs to be accessed at all.
 *   3. AI features (Phase 8 lesson conversation, Companion chat, voice,
 *      realtime) are tier-gated regardless of course ownership.
 *   4. The DEV_UNLOCK_ALL flag bypasses EVERYTHING (set
 *      EXPO_PUBLIC_DEV_UNLOCK_ALL=1 in .env.local for development; stripped
 *      from production builds).
 *
 * v3 note: this file keys on (courseId, speakerId, lessonId, tier) and
 * doesn't care about the legacy pair-string IDs. The lesson screen passes
 * activeCourseId from useSettings().
 */

import { CoursePackId } from '../types/packs';
import { DEV_UNLOCK_ALL } from '../constants/dev';

export type SubscriptionTier = 'free' | 'text_ai' | 'voice' | 'companion' | 'premium';

const TIER_RANK: Record<SubscriptionTier, number> = {
  free: 0,
  text_ai: 1,
  voice: 2,
  companion: 3,
  premium: 4,
};

/** Tier required for AI features. Currently text_ai is the lowest paid tier. */
export const AI_FEATURE_MIN_TIER: SubscriptionTier = 'text_ai';

export interface EntitlementContext {
  /** Tier from profiles.subscription_tier or subscriptions.active_tier */
  tier: SubscriptionTier;
  /** Course IDs the user has rows for in user_packs.is_active=true */
  ownedCourseIds: CoursePackId[];
  /** The course the user activated FIRST (their "starter"). Source: the
   *  oldest user_packs row OR profiles.starter_course_id (added in a future
   *  migration). For v1, when no starter is recorded, we treat the first
   *  ID in ownedCourseIds as the starter. */
  starterCourseId: CoursePackId | null;
}

export type EntitlementResult =
  | { allowed: true }
  | {
      allowed: false;
      reason: 'subscription_required' | 'course_required' | 'tier_required';
      requiredTier?: SubscriptionTier;
      requiredCourseId?: CoursePackId;
    };

/**
 * Parse the module number from a lesson ID like 'm05-l01-baba'.
 */
function parseLessonModule(lessonId: string): number {
  const m = lessonId.match(/^m(\d+)-/);
  return m ? parseInt(m[1], 10) : 1;
}

/**
 * Check whether the user can access a specific lesson in a course.
 */
export function canAccessLesson(
  courseId: CoursePackId,
  lessonId: string,
  ctx: EntitlementContext,
): EntitlementResult {
  if (DEV_UNLOCK_ALL) return { allowed: true };

  const isStarter = ctx.starterCourseId === courseId;

  // Subsequent (non-starter) courses must be owned outright.
  if (!isStarter && !ctx.ownedCourseIds.includes(courseId)) {
    return { allowed: false, reason: 'course_required', requiredCourseId: courseId };
  }

  const moduleNum = parseLessonModule(lessonId);

  // First 4 modules of the starter course are always free.
  if (isStarter && moduleNum <= 4) {
    return { allowed: true };
  }

  // Modules 5-10 require any paid tier (Text AI or above).
  if (TIER_RANK[ctx.tier] >= TIER_RANK[AI_FEATURE_MIN_TIER]) {
    return { allowed: true };
  }

  return { allowed: false, reason: 'subscription_required', requiredTier: AI_FEATURE_MIN_TIER };
}

/**
 * Check whether the user can use an AI feature (Phase 8 lesson conversation,
 * Companion chat, voice, realtime). Course-agnostic — AI is a tier concern.
 */
export function canUseAiFeature(
  feature: 'text' | 'voice' | 'realtime',
  ctx: EntitlementContext,
): EntitlementResult {
  if (DEV_UNLOCK_ALL) return { allowed: true };

  const minTier: SubscriptionTier =
    feature === 'text'     ? 'text_ai'   :
    feature === 'voice'    ? 'voice'     :
    /* realtime */            'companion';

  if (TIER_RANK[ctx.tier] >= TIER_RANK[minTier]) {
    return { allowed: true };
  }

  return { allowed: false, reason: 'tier_required', requiredTier: minTier };
}

/**
 * Check whether the user has access to a specific course pack.
 */
export function canAccessCourse(
  courseId: CoursePackId,
  ctx: EntitlementContext,
): EntitlementResult {
  if (DEV_UNLOCK_ALL) return { allowed: true };
  if (ctx.starterCourseId === courseId) return { allowed: true };
  if (ctx.ownedCourseIds.includes(courseId)) return { allowed: true };
  return { allowed: false, reason: 'course_required', requiredCourseId: courseId };
}
