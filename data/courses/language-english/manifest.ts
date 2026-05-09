/**
 * Auto-generated lesson manifest for language-english.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/language-english/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-hello",
    "module": 1,
    "lesson": 1,
    "title": "Hello — Mhoro",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l02-hi-bye",
    "module": 1,
    "lesson": 2,
    "title": "Hi & Bye — Casual greetings",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l03-good-morning",
    "module": 1,
    "lesson": 3,
    "title": "Good morning — Mangwanani",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l04-good-afternoon",
    "module": 1,
    "lesson": 4,
    "title": "Good afternoon — Masikati",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l05-good-evening",
    "module": 1,
    "lesson": 5,
    "title": "Good evening — Manheru",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l06-name",
    "module": 1,
    "lesson": 6,
    "title": "What's your name? — Zita rako ndiani?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l07-where-from",
    "module": 1,
    "lesson": 7,
    "title": "Where are you from? — Wabva kupi?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l08-how-are-you-formal",
    "module": 1,
    "lesson": 8,
    "title": "Polite \"How are you?\" forms",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l09-goodbye",
    "module": 1,
    "lesson": 9,
    "title": "Goodbye — Sara/Famba zvakanaka",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l10-conversation",
    "module": 1,
    "lesson": 10,
    "title": "The Greeting Conversation",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m02-l01-please",
    "module": 2,
    "lesson": 1,
    "title": "Please — Ndapota",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l02-thank-you",
    "module": 2,
    "lesson": 2,
    "title": "Thank you — Ndatenda",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l03-help",
    "module": 2,
    "lesson": 3,
    "title": "Can you help me? — Mungandibatsire here?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l04-do-you-speak",
    "module": 2,
    "lesson": 4,
    "title": "Do you speak English? — Munotaura ChiNgezi here?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l05-i-dont-understand",
    "module": 2,
    "lesson": 5,
    "title": "I don't understand — Handinzwisise",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l06-yes-no",
    "module": 2,
    "lesson": 6,
    "title": "Yes & No — Hongu uye Aiwa",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l07-where-is",
    "module": 2,
    "lesson": 7,
    "title": "Where is...? — ...iri kupi?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l08-how-much",
    "module": 2,
    "lesson": 8,
    "title": "How much? — Marii?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l09-emergency",
    "module": 2,
    "lesson": 9,
    "title": "Emergency phrases — Mhoro mhinduro",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l10-conversation",
    "module": 2,
    "lesson": 10,
    "title": "Survival in conversation",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m03-l01-i-am",
    "module": 3,
    "lesson": 1,
    "title": "I am... — Ndini...",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l02-age",
    "module": 3,
    "lesson": 2,
    "title": "How old are you? — Une makore mangani?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l03-job",
    "module": 3,
    "lesson": 3,
    "title": "What do you do? — Unoita basa rei?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l04-family-status",
    "module": 3,
    "lesson": 4,
    "title": "Married? Children? — Wakaroora? Une vana?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l05-hobbies",
    "module": 3,
    "lesson": 5,
    "title": "Hobbies — Zvinokufadza",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l06-languages",
    "module": 3,
    "lesson": 6,
    "title": "Languages I speak — Mitauro yandinotaura",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l07-where-i-live",
    "module": 3,
    "lesson": 7,
    "title": "Where I live — Kwandinogara",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l08-personality",
    "module": 3,
    "lesson": 8,
    "title": "Describing yourself — Kuzvitaridza",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l09-asking-them",
    "module": 3,
    "lesson": 9,
    "title": "Asking about them — Kubvunza nezvavo",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l10-conversation",
    "module": 3,
    "lesson": 10,
    "title": "Full introduction conversation",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m04-l01-a-an",
    "module": 4,
    "lesson": 1,
    "title": "A vs An — A book / An apple",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l02-the",
    "module": 4,
    "lesson": 2,
    "title": "The — When to use it",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l03-no-article",
    "module": 4,
    "lesson": 3,
    "title": "No article — Plural & abstract",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l04-plurals-regular",
    "module": 4,
    "lesson": 4,
    "title": "Plurals — adding -s",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l05-plurals-irregular",
    "module": 4,
    "lesson": 5,
    "title": "Irregular plurals — children, men",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l06-this-that",
    "module": 4,
    "lesson": 6,
    "title": "This & That — These & Those",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l07-some-any",
    "module": 4,
    "lesson": 7,
    "title": "Some & Any — countables",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l08-much-many",
    "module": 4,
    "lesson": 8,
    "title": "Much vs Many",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l09-articles-mixed",
    "module": 4,
    "lesson": 9,
    "title": "Mixed practice — articles in flow",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m04-l10-conversation",
    "module": 4,
    "lesson": 10,
    "title": "Articles in real talk — Conversation capstone",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m05-l01-mother-father",
    "module": 5,
    "lesson": 1,
    "title": "Mother & Father — Amai naBaba",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l02-siblings",
    "module": 5,
    "lesson": 2,
    "title": "Brothers & Sisters — Mukoma naHanzvadzi",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l03-children",
    "module": 5,
    "lesson": 3,
    "title": "Sons & Daughters — Vana",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l04-grandparents",
    "module": 5,
    "lesson": 4,
    "title": "Grandparents — Mbuya naSekuru",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l05-aunts-uncles",
    "module": 5,
    "lesson": 5,
    "title": "Aunts & Uncles — Tete na Sekuru",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l06-in-laws",
    "module": 5,
    "lesson": 6,
    "title": "In-laws — A polite topic",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l07-friends",
    "module": 5,
    "lesson": 7,
    "title": "Friends as family — Shamwari",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l08-family-actions",
    "module": 5,
    "lesson": 8,
    "title": "Family verbs — Visit, call, miss",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l09-family-stories",
    "module": 5,
    "lesson": 9,
    "title": "Telling family stories — Nyaya dzepamhuri",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l10-conversation",
    "module": 5,
    "lesson": 10,
    "title": "A family conversation — Capstone",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m06-l01-numbers-1-10",
    "module": 6,
    "lesson": 1,
    "title": "Numbers 1-10 — One to Ten",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l02-numbers-20-100",
    "module": 6,
    "lesson": 2,
    "title": "Numbers 11-100 — Eleven to One Hundred",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l03-big-numbers",
    "module": 6,
    "lesson": 3,
    "title": "Hundreds, Thousands, Millions",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l04-time-hours",
    "module": 6,
    "lesson": 4,
    "title": "What time? — Inguva yakadii?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l05-time-minutes",
    "module": 6,
    "lesson": 5,
    "title": "Half past, quarter to — Mininitsi",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l06-days-week",
    "module": 6,
    "lesson": 6,
    "title": "Days of the week — Mazuva evhiki",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l07-months-seasons",
    "module": 6,
    "lesson": 7,
    "title": "Months & Seasons — Mwedzi neMwaka",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l08-money-prices",
    "module": 6,
    "lesson": 8,
    "title": "Money — How much is it?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l09-shopping-numbers",
    "module": 6,
    "lesson": 9,
    "title": "Numbers in shopping — Discount, Total",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l10-conversation",
    "module": 6,
    "lesson": 10,
    "title": "Money & time conversation — Capstone",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m07-l01-im-hungry",
    "module": 7,
    "lesson": 1,
    "title": "Hungry & Thirsty — Nzara nenyota",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l02-foods",
    "module": 7,
    "lesson": 2,
    "title": "Common foods — Zvikafu zvinozivikanwa",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l03-restaurant",
    "module": 7,
    "lesson": 3,
    "title": "At a restaurant — Murestaurant",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l04-ordering",
    "module": 7,
    "lesson": 4,
    "title": "Ordering food — Kuita order",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l05-likes-food",
    "module": 7,
    "lesson": 5,
    "title": "I like / I don't like food — Zvandinoda nezvandisingadi",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l06-cooking",
    "module": 7,
    "lesson": 6,
    "title": "Cooking verbs — Mavhabhu ekubika",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l07-tea-drinks",
    "module": 7,
    "lesson": 7,
    "title": "Tea, coffee, drinks — Tii, kofi, zvinwiwa",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l08-shona-food",
    "module": 7,
    "lesson": 8,
    "title": "Sharing Shona food in English — Kutsanangura sadza nemufushwa",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l09-hosting",
    "module": 7,
    "lesson": 9,
    "title": "Hosting in English — Kugamuchira muvarume veChiNgezi",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l10-conversation",
    "module": 7,
    "lesson": 10,
    "title": "A meal conversation — Hurukuro yekudya",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m08-l01-be-have",
    "module": 8,
    "lesson": 1,
    "title": "\"To be\" & \"to have\" — I am / I have",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l02-do-make",
    "module": 8,
    "lesson": 2,
    "title": "\"To do\" & \"to make\" — I do / I make",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l03-go-come",
    "module": 8,
    "lesson": 3,
    "title": "\"To go\" & \"to come\" — I go / I come",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l04-want-need",
    "module": 8,
    "lesson": 4,
    "title": "\"To want\" & \"to need\" — I want / I need",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l05-wake-up",
    "module": 8,
    "lesson": 5,
    "title": "Daily routine — Morning",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l06-work-school",
    "module": 8,
    "lesson": 6,
    "title": "Work & school — My day",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l07-evening-routine",
    "module": 8,
    "lesson": 7,
    "title": "Evening routine — Coming home",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l08-yesterday",
    "module": 8,
    "lesson": 8,
    "title": "Past tense — Yesterday I...",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l09-tomorrow",
    "module": 8,
    "lesson": 9,
    "title": "Future tense — Tomorrow I will...",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m08-l10-conversation",
    "module": 8,
    "lesson": 10,
    "title": "A day-in-life conversation — My day in English",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m09-l01-where-is",
    "module": 9,
    "lesson": 1,
    "title": "Where is...? — ...iri kupi?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l02-directions",
    "module": 9,
    "lesson": 2,
    "title": "Left, Right, Straight — Kuruboshwe, Kurudyi, Zvakananga",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l03-distance",
    "module": 9,
    "lesson": 3,
    "title": "How far? — Iri kure here?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l04-transport",
    "module": 9,
    "lesson": 4,
    "title": "Bus, Taxi, Train — Bhazi, Tekisi, Chitima",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l05-buying-ticket",
    "module": 9,
    "lesson": 5,
    "title": "Buying a ticket — Kutenga tikiti",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l06-airport",
    "module": 9,
    "lesson": 6,
    "title": "At the airport — Panhandare",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l07-hotel",
    "module": 9,
    "lesson": 7,
    "title": "Hotel & Accommodation — Hotera",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l08-emergency-travel",
    "module": 9,
    "lesson": 8,
    "title": "Lost & Travel emergencies — Ndarasika",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l09-asking-help",
    "module": 9,
    "lesson": 9,
    "title": "Asking for help while travelling — Kukumbira rubatsiro",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l10-conversation",
    "module": 9,
    "lesson": 10,
    "title": "A travel conversation — Hurukuro yerwendo",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m10-l01-happy-sad",
    "module": 10,
    "lesson": 1,
    "title": "Happy & Sad — Kufara nekusuwa",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l02-angry-frustrated",
    "module": 10,
    "lesson": 2,
    "title": "Anger & Frustration — Kutsamwa nekufinhwa",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l03-fear-worry",
    "module": 10,
    "lesson": 3,
    "title": "Fear & Worry — Kutya nekunetseka",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l04-sick",
    "module": 10,
    "lesson": 4,
    "title": "Being Sick — Kurwara",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l05-body",
    "module": 10,
    "lesson": 5,
    "title": "Body Parts — Mitezo yemuviri",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l06-doctor",
    "module": 10,
    "lesson": 6,
    "title": "At the Doctor — Pa chiremba",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l07-past-stories",
    "module": 10,
    "lesson": 7,
    "title": "Telling past stories — Kutaura nyaya yapakare",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l08-hope-future",
    "module": 10,
    "lesson": 8,
    "title": "Hope & Future — Tariro nemberi",
    "xpReward": 30,
    "version": 1
  },
  {
    "id": "m10-l09-proverbs",
    "module": 10,
    "lesson": 9,
    "title": "Sharing Shona proverbs in English — Tsumo muChiNgezi",
    "xpReward": 35,
    "version": 1
  },
  {
    "id": "m10-l10-your-story",
    "module": 10,
    "lesson": 10,
    "title": "Your English Story — A2 Complete",
    "xpReward": 100,
    "version": 1
  }
];

export default LESSON_MANIFEST;
