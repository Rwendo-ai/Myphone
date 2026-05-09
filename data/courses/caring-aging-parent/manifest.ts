/**
 * Auto-generated lesson manifest for caring-aging-parent.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/caring-aging-parent/<speakerId>/<lessonId>.json
 *
 * This manifest carries ONLY the metadata the Learn tab needs to render
 * the unit list (id, module, lesson, title, xpReward) so we don't have
 * to bundle every lesson's full content in the JS binary.
 *
 * Regenerate with:  npx tsx scripts/generate-manifests-from-storage.ts
 *
 * DO NOT EDIT BY HAND.
 */

export interface LessonMeta {
  id: string;
  module: number;
  lesson: number;
  title: string;
  xpReward: number;
  /** Content version for cache invalidation. Defaults to 1 if absent in the
   *  Storage JSON. Bump in the lesson's source file and re-upload to force
   *  devices to refetch on next open. */
  version?: number;
}

export const LESSON_MANIFEST: LessonMeta[] = [
  {
    "id": "m01-l01-role-reversal",
    "module": 1,
    "lesson": 1,
    "title": "The Role Reversal Nobody Prepared You For",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l02-ambiguous-loss",
    "module": 1,
    "lesson": 2,
    "title": "Ambiguous Loss — When They're There But Not There",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l03-anticipatory-grief",
    "module": 1,
    "lesson": 3,
    "title": "Anticipatory Grief Is Real Grief",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l04-childhood-wiring",
    "module": 1,
    "lesson": 4,
    "title": "When Your Childhood Wiring Reactivates",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l05-the-sibling",
    "module": 1,
    "lesson": 5,
    "title": "The Sibling Who Isn't Pulling Weight",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l06-cruel-scared-not-themselves",
    "module": 1,
    "lesson": 6,
    "title": "When They're Cruel, Scared, or Not Themselves",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l07-the-conversation-youve-been-avoiding",
    "module": 1,
    "lesson": 7,
    "title": "The Conversation You've Been Avoiding (Driving, Money, Wishes)",
    "xpReward": 40,
    "version": 1
  },
  {
    "id": "m01-l08-healthcare-advocacy",
    "module": 1,
    "lesson": 8,
    "title": "Healthcare Advocacy When Systems Fail",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l09-caregiver-guilt",
    "module": 1,
    "lesson": 9,
    "title": "Caregiver Guilt, on All Three Fronts",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l10-the-call-and-after",
    "module": 1,
    "lesson": 10,
    "title": "The Call You've Been Dreading, and What Comes After",
    "xpReward": 50,
    "version": 1
  }
];

export default LESSON_MANIFEST;
