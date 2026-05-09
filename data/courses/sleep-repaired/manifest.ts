/**
 * Auto-generated lesson manifest for sleep-repaired.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/sleep-repaired/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-sleep-is-a-skill",
    "module": 1,
    "lesson": 1,
    "title": "Sleep Is a Skill, Not a Stroke of Luck",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l02-what-sleep-actually-does",
    "module": 1,
    "lesson": 2,
    "title": "What Sleep Actually Does (and Why You Can't Skip It)",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l03-body-clock-not-enemy",
    "module": 1,
    "lesson": 3,
    "title": "Your Body Clock Is Not Your Enemy",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l04-wind-down-hour",
    "module": 1,
    "lesson": 4,
    "title": "The Wind-Down Hour You Don't Have",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l05-screen-question-honestly",
    "module": 1,
    "lesson": 5,
    "title": "The Screen Question, Honestly",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l06-what-to-do-at-3am",
    "module": 1,
    "lesson": 6,
    "title": "What to Do at 3am",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l07-anxiety-sleep-loop",
    "module": 1,
    "lesson": 7,
    "title": "The Anxiety–Sleep Loop, and How to Step Out of It",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l08-when-body-wont-cooperate",
    "module": 1,
    "lesson": 8,
    "title": "When the Body Won't Cooperate — Babies, Shifts, and Long Insomnia",
    "xpReward": 35,
    "version": 1
  }
];

export default LESSON_MANIFEST;
