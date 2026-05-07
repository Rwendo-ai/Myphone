/**
 * Auto-generated lesson manifest for hard-conversations-work.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/hard-conversations-work/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-before-you-open-your-mouth",
    "module": 1,
    "lesson": 1,
    "title": "Before You Open Your Mouth",
    "xpReward": 25
  },
  {
    "id": "m01-l02-observation-without-evaluation",
    "module": 1,
    "lesson": 2,
    "title": "Observation Without Evaluation",
    "xpReward": 25
  },
  {
    "id": "m01-l03-feeling-and-need-underneath",
    "module": 1,
    "lesson": 3,
    "title": "The Feeling and the Need Underneath",
    "xpReward": 30
  },
  {
    "id": "m01-l04-real-request-not-demand",
    "module": 1,
    "lesson": 4,
    "title": "A Real Request, Not a Demand",
    "xpReward": 30
  },
  {
    "id": "m01-l05-raising-it-with-your-manager",
    "module": 1,
    "lesson": 5,
    "title": "Raising Something With Your Manager",
    "xpReward": 35
  },
  {
    "id": "m01-l06-feedback-that-doesnt-crush",
    "module": 1,
    "lesson": 6,
    "title": "Giving Feedback That Doesn't Crush",
    "xpReward": 30
  },
  {
    "id": "m01-l07-saying-no-walking-back-owning",
    "module": 1,
    "lesson": 7,
    "title": "Saying No, Walking Back, Owning a Mistake",
    "xpReward": 35
  },
  {
    "id": "m01-l08-the-conversation-youve-been-avoiding",
    "module": 1,
    "lesson": 8,
    "title": "The Conversation You've Been Avoiding",
    "xpReward": 50
  }
];

export default LESSON_MANIFEST;
