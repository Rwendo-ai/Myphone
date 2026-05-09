/**
 * Auto-generated lesson manifest for grief-honestly.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/grief-honestly/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-not-a-five-stage-map",
    "module": 1,
    "lesson": 1,
    "title": "Grief Is Not a Five-Stage Map",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l02-resilience-is-not-bypassing",
    "module": 1,
    "lesson": 2,
    "title": "Resilience Is Not Bypassing",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l03-loneliness-of-grief",
    "module": 1,
    "lesson": 3,
    "title": "The Loneliness of Grief Other People Don't Understand",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l04-ambiguous-loss",
    "module": 1,
    "lesson": 4,
    "title": "When Someone Is Alive But Lost to You — Ambiguous Loss",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l05-loss-of-a-future",
    "module": 1,
    "lesson": 5,
    "title": "The Loss of a Future You Imagined",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l06-identity-grief",
    "module": 1,
    "lesson": 6,
    "title": "Identity Grief — the Version of You That No Longer Exists",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l07-grief-in-the-body",
    "module": 1,
    "lesson": 7,
    "title": "Grief in the Body — Why You Are So Tired",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l08-grief-at-work",
    "module": 1,
    "lesson": 8,
    "title": "Grief at Work — When You Can't Bring It",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l09-anniversary-late-stuck",
    "module": 1,
    "lesson": 9,
    "title": "Anniversary Grief, Late Grief, Stuck Grief",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l10-continuing-bonds",
    "module": 1,
    "lesson": 10,
    "title": "What You Carry Forward — Continuing Bonds",
    "xpReward": 50,
    "version": 1
  }
];

export default LESSON_MANIFEST;
