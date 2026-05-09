/**
 * Auto-generated lesson manifest for money-and-meaning.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/money-and-meaning/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-money-is-a-relationship",
    "module": 1,
    "lesson": 1,
    "title": "Money Is a Relationship, Not a Number",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l02-what-your-parents-taught-you",
    "module": 1,
    "lesson": 2,
    "title": "What Your Parents Taught You Without Saying It",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l03-scarcity-vs-sufficiency",
    "module": 1,
    "lesson": 3,
    "title": "Scarcity vs. Sufficiency",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l04-debt-without-shame",
    "module": 1,
    "lesson": 4,
    "title": "Debt Without Shame",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l05-broke-vs-have-less",
    "module": 1,
    "lesson": 5,
    "title": "\"I'm Broke\" vs. \"I Have Less Right Now\"",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l06-generosity-vs-self-protection",
    "module": 1,
    "lesson": 6,
    "title": "Generosity vs. Self-Protection",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l07-money-in-the-rooms-you-love-in",
    "module": 1,
    "lesson": 7,
    "title": "Money in the Rooms You Love In",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l08-loneliness-of-more-and-less",
    "module": 1,
    "lesson": 8,
    "title": "The Loneliness of More — and the Loneliness of Less",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m01-l09-control-and-not",
    "module": 1,
    "lesson": 9,
    "title": "What You Can Control and What You Cannot",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m01-l10-enough",
    "module": 1,
    "lesson": 10,
    "title": "Enough — and the Life You'd Live If You Believed It",
    "xpReward": 40,
    "version": 1
  }
];

export default LESSON_MANIFEST;
