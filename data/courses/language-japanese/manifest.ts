/**
 * Auto-generated lesson manifest for language-japanese.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/language-japanese/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-ohayou",
    "module": 1,
    "lesson": 1,
    "title": "Ohayou Gozaimasu — Good Morning",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l02-konnichiwa",
    "module": 1,
    "lesson": 2,
    "title": "Konnichiwa — Hello / Good Afternoon",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l03-konbanwa",
    "module": 1,
    "lesson": 3,
    "title": "Konbanwa — Good Evening",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l04-hajimemashite",
    "module": 1,
    "lesson": 4,
    "title": "Hajimemashite — Pleased to Meet You",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l05-sumimasen",
    "module": 1,
    "lesson": 5,
    "title": "Sumimasen — The Word That Does Everything",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l06-onamae",
    "module": 1,
    "lesson": 6,
    "title": "Onamae wa? — What is Your Name?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l01-onegaishimasu",
    "module": 2,
    "lesson": 1,
    "title": "お願いします — Please / If You Would",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l02-sumimasen",
    "module": 2,
    "lesson": 2,
    "title": "すみません — The Swiss Army Knife",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l03-arigatou",
    "module": 2,
    "lesson": 3,
    "title": "ありがとう / ありがとうございます — Thank You",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l04-tasukete-kudasai",
    "module": 2,
    "lesson": 4,
    "title": "助けてください — Help Me, Please",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l01-watashi-wa-desu",
    "module": 3,
    "lesson": 1,
    "title": "Watashi wa... desu — I Am...",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l02-shigoto",
    "module": 3,
    "lesson": 2,
    "title": "Shigoto — My Job",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l03-sai",
    "module": 3,
    "lesson": 3,
    "title": "〜歳 — How Old Are You?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l01-particles-intro",
    "module": 4,
    "lesson": 1,
    "title": "Particles — The Invisible Glue",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l02-wa-vs-ga",
    "module": 4,
    "lesson": 2,
    "title": "は vs が — Topic Versus Subject",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l03-ni-de",
    "module": 4,
    "lesson": 3,
    "title": "に and で — Two Kinds of \"At\"",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m05-l01-haha-okaasan",
    "module": 5,
    "lesson": 1,
    "title": "Haha vs Okaasan — Talking About Mother",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l02-chichi-otousan",
    "module": 5,
    "lesson": 2,
    "title": "Chichi vs Otousan — Talking About Father",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l03-ani-oniisan",
    "module": 5,
    "lesson": 3,
    "title": "Ani / Ane vs Oniisan / Oneesan — Older Siblings",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l04-otouto-imouto",
    "module": 5,
    "lesson": 4,
    "title": "Otouto / Imouto vs Otoutosan / Imoutosan — Younger Siblings",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l01-ichi-ni-san",
    "module": 6,
    "lesson": 1,
    "title": "Ichi, Ni, San — Numbers 1 to 5",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l02-roku-juu",
    "module": 6,
    "lesson": 2,
    "title": "Roku to Juu — Numbers 6 to 10",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l01-itadakimasu",
    "module": 7,
    "lesson": 1,
    "title": "いただきます — Receiving the Meal",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l02-onaka-suita",
    "module": 7,
    "lesson": 2,
    "title": "お腹すいた — Hunger and Thirst",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l01-iku-kuru",
    "module": 8,
    "lesson": 1,
    "title": "行く・来る — To Go and To Come",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l01-hidari-migi",
    "module": 9,
    "lesson": 1,
    "title": "Hidari, Migi, Massugu — Left, Right, Straight",
    "xpReward": 25,
    "version": 1
  }
];

export default LESSON_MANIFEST;
