/**
 * Auto-generated lesson manifest for know-yourself.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/know-yourself/<speakerId>/<lessonId>.json
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
}

export const LESSON_MANIFEST: LessonMeta[] = [
  {
    "id": "m01-l01-looking-and-seeing",
    "module": 1,
    "lesson": 1,
    "title": "The Difference Between Looking and Seeing",
    "xpReward": 25
  },
  {
    "id": "m01-l02-one-breath-on-purpose",
    "module": 1,
    "lesson": 2,
    "title": "One Breath, On Purpose",
    "xpReward": 25
  },
  {
    "id": "m01-l03-thought-isnt-verdict",
    "module": 1,
    "lesson": 3,
    "title": "A Thought Isn't a Verdict",
    "xpReward": 25
  },
  {
    "id": "m01-l04-already-back",
    "module": 1,
    "lesson": 4,
    "title": "When You Notice You're Distracted, You're Already Back",
    "xpReward": 25
  },
  {
    "id": "m01-l05-five-senses-check",
    "module": 1,
    "lesson": 5,
    "title": "The Five-Senses Check",
    "xpReward": 25
  },
  {
    "id": "m01-l06-attention-becomes-life",
    "module": 1,
    "lesson": 6,
    "title": "What You Pay Attention to Becomes Your Life",
    "xpReward": 25
  },
  {
    "id": "m01-l07-the-pause",
    "module": 1,
    "lesson": 7,
    "title": "The Pause Between Stimulus and Response",
    "xpReward": 25
  },
  {
    "id": "m01-l08-boredom-is-information",
    "module": 1,
    "lesson": 8,
    "title": "Boredom Is Information",
    "xpReward": 25
  },
  {
    "id": "m01-l09-staying-with-what-you-avoid",
    "module": 1,
    "lesson": 9,
    "title": "Staying With What You'd Rather Avoid",
    "xpReward": 25
  },
  {
    "id": "m01-l10-attention-as-practice",
    "module": 1,
    "lesson": 10,
    "title": "Attention as a Practice, Not a Performance",
    "xpReward": 50
  }
];

export default LESSON_MANIFEST;
