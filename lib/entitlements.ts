/**
 * Module gating + entitlement checks. v3 pricing model (2026-05-10).
 *
 * 5-tier subscription ladder. Each tier includes every feature of lower
 * tiers. canUseAiFeature checks `userTier >= requiredTier` via TIER_RANK.
 *
 * Free-tier rules:
 *   - 2 free modules of the user's STARTER course (m01-m02)
 *   - 3 free AI text messages per lesson (lesson-scoped quota)
 *   - 10 free Rwen messages per day on the Companion screen
 *   - Travel section is free for everyone
 *
 * Owner-list user IDs bypass everything for life. DEV_UNLOCK_ALL same.
 *
 * Entitlement source-of-truth is RevenueCat (live, reactive). Server-side
 * (webhook, RPC) reads from `user_entitlements` mirror updated by the
 * RC webhook handler.
 */

import { CoursePackId } from '../types/packs';
import { DEV_UNLOCK_ALL } from '../constants/dev';
import {
  TIER_ENTITLEMENT_IDS,
  TIER_RANK,
  FEATURE_MIN_TIER,
  type SubscriptionTierKey,
} from '../data/products';

export type SubscriptionTier = SubscriptionTierKey | 'free';

/** Free-tier knobs. */
export const STARTER_FREE_MODULES = 2;
export const FREE_AI_MESSAGES_PER_LESSON = 3;
export const FREE_DAILY_RWEN_MESSAGES = 10;

/** Owner / lifetime-access user IDs. Hardcoded list bypasses every gate
 *  forever — Pro tier check, free-tier quotas, AI message limits, lesson
 *  locks, paywalls, every canAccess* call returns allowed. Add a Supabase
 *  auth.users.id here to grant total access. */
export const OWNER_USER_IDS: string[] = [
  // Owner (Bowen) — primary accounts
  '60f2f862-a58e-4afc-ae1d-d2bcd39ae5b4', // bowencooney@gmail.com
  '47f6148a-0131-48d3-beac-f56ea7f08727', // aussi3bs@gmail.com
  // Trusted testers
  'd3737a86-5f37-4f0b-9b0a-11ea3f6ba80e', // charmiephotos1@gmail.com (Charmie)
  'bbf622c9-1d62-4ebf-b6d0-56c30d7cc16d', // johnsonmakoti@hotmail.co.uk
  '4b868d72-51a4-4c4e-85d7-11d704c79201', // jmakoti35@gmail.com
];

export interface EntitlementContext {
  /** Highest tier the user holds (derived from RC live entitlements). */
  tier: SubscriptionTier;
  /** Course the user activated FIRST. Modules 1-2 here are free. */
  starterCourseId: CoursePackId | null;
  /** Supabase user.id — used for owner-list bypass. */
  userId?: string | null;
  /** All active RC entitlement IDs. Pass-through for feature checks. */
  entitlements?: string[];
}

export type EntitlementResult =
  | { allowed: true }
  | {
      allowed: false;
      reason: 'tier_required' | 'starter_locked' | 'ai_quota_exhausted';
      requiredTier?: SubscriptionTier;
    };

function isOwner(ctx: EntitlementContext): boolean {
  return !!ctx.userId && OWNER_USER_IDS.includes(ctx.userId);
}

/** Has the user's tier at least the required level? */
function tierMeets(userTier: SubscriptionTier, required: SubscriptionTier): boolean {
  return TIER_RANK[userTier] >= TIER_RANK[required];
}

/** Derive the highest tier from a set of RC entitlement IDs. */
export function tierFromEntitlements(entitlementIds: string[]): SubscriptionTier {
  let highest: SubscriptionTier = 'free';
  for (const [tierKey, entId] of Object.entries(TIER_ENTITLEMENT_IDS)) {
    if (entitlementIds.includes(entId)) {
      if (TIER_RANK[tierKey as SubscriptionTierKey] > TIER_RANK[highest]) {
        highest = tierKey as SubscriptionTierKey;
      }
    }
  }
  return highest;
}

/** Parse the module number from a lesson ID like 'm05-l01-baba'. */
function parseLessonModule(lessonId: string): number {
  const m = lessonId.match(/^m(\d+)-/);
  return m ? parseInt(m[1], 10) : 1;
}

/**
 * Can the user access this lesson?
 *   - Owner / DEV_UNLOCK_ALL → always yes
 *   - Any paid tier → yes (all courses unlock at tier_text+)
 *   - Starter course, modules 1-2 → yes (free)
 *   - Else → tier_required (or starter_locked for non-starter courses)
 */
export function canAccessLesson(
  courseId: CoursePackId,
  lessonId: string,
  ctx: EntitlementContext,
): EntitlementResult {
  if (DEV_UNLOCK_ALL || isOwner(ctx)) return { allowed: true };

  // Any paid tier unlocks all courses + all lessons.
  if (tierMeets(ctx.tier, 'text')) return { allowed: true };

  // Free user — only starter, only first 2 modules.
  const isStarter = ctx.starterCourseId === courseId;
  if (!isStarter) {
    return { allowed: false, reason: 'starter_locked' };
  }
  const moduleNum = parseLessonModule(lessonId);
  if (moduleNum <= STARTER_FREE_MODULES) return { allowed: true };
  return { allowed: false, reason: 'tier_required', requiredTier: 'text' };
}

/**
 * Can the user use an AI feature?
 *   text       → tier_text (free users get a per-lesson + per-day quota)
 *   voice      → tier_voice
 *   lipsync_low → tier_lipsync_low
 *   lipsync_high → tier_lipsync_high
 *   custom_companion → tier_ultra
 *
 * For free-tier text: caller passes `messagesUsedInLesson` (per-lesson
 * counter) and optionally `dailyRwenMessagesUsed` (companion-screen
 * counter). Returns tier_required if quota exhausted.
 */
export function canUseAiFeature(
  feature: 'text' | 'voice' | 'lipsync_low' | 'lipsync_high' | 'custom_companion',
  ctx: EntitlementContext,
  quotas?: { messagesUsedInLesson?: number; dailyRwenMessagesUsed?: number },
): EntitlementResult {
  if (DEV_UNLOCK_ALL || isOwner(ctx)) return { allowed: true };

  const required = FEATURE_MIN_TIER[feature];

  if (tierMeets(ctx.tier, required)) return { allowed: true };

  // Free-tier text gets a quota. Voice / lipsync / custom — no free quota.
  if (feature === 'text' && ctx.tier === 'free') {
    const lessonUsed = quotas?.messagesUsedInLesson ?? 0;
    const dailyUsed = quotas?.dailyRwenMessagesUsed ?? 0;
    if (
      lessonUsed < FREE_AI_MESSAGES_PER_LESSON &&
      dailyUsed < FREE_DAILY_RWEN_MESSAGES
    ) {
      return { allowed: true };
    }
    return { allowed: false, reason: 'ai_quota_exhausted', requiredTier: 'text' };
  }

  return { allowed: false, reason: 'tier_required', requiredTier: required };
}

/**
 * Can the user access this course at all (Learn tab gating)?
 *   Pro tier → all courses. Free → starter only.
 */
export function canAccessCourse(
  courseId: CoursePackId,
  ctx: EntitlementContext,
): EntitlementResult {
  if (DEV_UNLOCK_ALL || isOwner(ctx)) return { allowed: true };
  if (tierMeets(ctx.tier, 'text')) return { allowed: true };
  if (ctx.starterCourseId === courseId) return { allowed: true };
  return { allowed: false, reason: 'tier_required', requiredTier: 'text' };
}
