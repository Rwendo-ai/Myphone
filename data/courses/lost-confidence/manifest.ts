/**
 * Auto-generated lesson manifest for lost-confidence.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/lost-confidence/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-what-actually-happened",
    "module": 1,
    "lesson": 1,
    "title": "What Actually Happened",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l02-not-your-failure",
    "module": 1,
    "lesson": 2,
    "title": "You Are Not Your Failure",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l03-distortions-after-a-knock",
    "module": 1,
    "lesson": 3,
    "title": "Catastrophising, Mind-Reading, Fortune-Telling",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l04-comparison-spiral",
    "module": 1,
    "lesson": 4,
    "title": "The Comparison Spiral",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l05-asking-for-help",
    "module": 1,
    "lesson": 5,
    "title": "Asking for Help When You're the One Who Used to Give It",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l06-small-evidence",
    "module": 1,
    "lesson": 6,
    "title": "Small Evidence",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l07-becoming-a-beginner",
    "module": 1,
    "lesson": 7,
    "title": "Becoming a Beginner Again",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l08-imposter-feeling",
    "module": 1,
    "lesson": 8,
    "title": "The Imposter Feeling That Doesn't Leave",
    "xpReward": 40,
    "version": 1
  }
];

export default LESSON_MANIFEST;
