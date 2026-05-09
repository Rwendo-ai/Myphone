/**
 * Auto-generated lesson manifest for language-french.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/language-french/<speakerId>/<lessonId>.json
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
    "id": "m01-l01-bonjour",
    "module": 1,
    "lesson": 1,
    "title": "Bonjour — Hello",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l02-ca-va",
    "module": 1,
    "lesson": 2,
    "title": "Ça va? — How are you?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l03-comment-allez",
    "module": 1,
    "lesson": 3,
    "title": "Comment allez-vous? — Polite",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l04-merci",
    "module": 1,
    "lesson": 4,
    "title": "Merci — Thank you",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l05-sil-vous-plait",
    "module": 1,
    "lesson": 5,
    "title": "S'il vous plaît — Please",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l06-name",
    "module": 1,
    "lesson": 6,
    "title": "Comment vous appelez-vous? — Names",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l07-where-from",
    "module": 1,
    "lesson": 7,
    "title": "D'où venez-vous? — Where from",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l08-tu-vous",
    "module": 1,
    "lesson": 8,
    "title": "Tu vs Vous — When to switch",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l09-au-revoir",
    "module": 1,
    "lesson": 9,
    "title": "Au revoir — Goodbye",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m01-l10-conversation",
    "module": 1,
    "lesson": 10,
    "title": "A complete French greeting",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m02-l01-excusez-moi",
    "module": 2,
    "lesson": 1,
    "title": "Excusez-moi — Excuse me",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l02-je-ne-comprends",
    "module": 2,
    "lesson": 2,
    "title": "Je ne comprends pas — I don't understand",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l03-parlez-vous-anglais",
    "module": 2,
    "lesson": 3,
    "title": "Parlez-vous anglais? — Do you speak English?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l04-yes-no",
    "module": 2,
    "lesson": 4,
    "title": "Oui & Non — Yes & No",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l05-help",
    "module": 2,
    "lesson": 5,
    "title": "Au secours! — Help!",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l06-where-is",
    "module": 2,
    "lesson": 6,
    "title": "Où est…? — Where is…?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l07-how-much",
    "module": 2,
    "lesson": 7,
    "title": "Combien? — How much?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l08-i-want",
    "module": 2,
    "lesson": 8,
    "title": "Je voudrais — I would like",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m02-l09-emergency",
    "module": 2,
    "lesson": 9,
    "title": "Au feu! Police! Médecin!",
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
    "id": "m03-l01-je-suis",
    "module": 3,
    "lesson": 1,
    "title": "Je suis... — I am",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l02-age",
    "module": 3,
    "lesson": 2,
    "title": "Quel âge avez-vous? — Your age",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l03-job",
    "module": 3,
    "lesson": 3,
    "title": "Que faites-vous? — What do you do?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l04-family-status",
    "module": 3,
    "lesson": 4,
    "title": "Marié? Enfants? — Family status",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l05-hobbies",
    "module": 3,
    "lesson": 5,
    "title": "Loisirs — Hobbies",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l06-languages",
    "module": 3,
    "lesson": 6,
    "title": "Les langues que je parle — Languages",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l07-where-i-live",
    "module": 3,
    "lesson": 7,
    "title": "Où j'habite — Where I live",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l08-personality",
    "module": 3,
    "lesson": 8,
    "title": "Décrivez-vous — Personality",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l09-asking-them",
    "module": 3,
    "lesson": 9,
    "title": "Parlez-moi de vous — Asking them",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m03-l10-conversation",
    "module": 3,
    "lesson": 10,
    "title": "Full introduction — A two-way intro",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m04-l01-le-la",
    "module": 4,
    "lesson": 1,
    "title": "Le vs La — Genders",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l02-un-une",
    "module": 4,
    "lesson": 2,
    "title": "Un & Une — A",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l03-les",
    "module": 4,
    "lesson": 3,
    "title": "Les — The (plural)",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l04-des",
    "module": 4,
    "lesson": 4,
    "title": "Des — Some / Any (plural)",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l05-this-that",
    "module": 4,
    "lesson": 5,
    "title": "Ce, Cette, Ces — This / These",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l06-mon-ma",
    "module": 4,
    "lesson": 6,
    "title": "Mon, Ma, Mes — My",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l07-ton-ta",
    "module": 4,
    "lesson": 7,
    "title": "Ton, Ta, Tes / Votre, Vos — Your",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l08-de-du",
    "module": 4,
    "lesson": 8,
    "title": "De vs Du — Of, From, Some",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l09-articles-mixed",
    "module": 4,
    "lesson": 9,
    "title": "All Articles Together",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m04-l10-conversation",
    "module": 4,
    "lesson": 10,
    "title": "A Gender-Aware Conversation",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m05-l01-parents",
    "module": 5,
    "lesson": 1,
    "title": "La mère et le père — Mother and Father",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l02-siblings",
    "module": 5,
    "lesson": 2,
    "title": "Frères et sœurs — Brothers and Sisters",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l03-children",
    "module": 5,
    "lesson": 3,
    "title": "Fils et filles — Sons and Daughters",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l04-grandparents",
    "module": 5,
    "lesson": 4,
    "title": "Grands-parents — Grandparents",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l05-aunts-uncles",
    "module": 5,
    "lesson": 5,
    "title": "Tante & Oncle — Aunts, Uncles, Cousins",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l06-in-laws",
    "module": 5,
    "lesson": 6,
    "title": "Belle-famille — In-laws",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l07-friends",
    "module": 5,
    "lesson": 7,
    "title": "Les amis — Friends Like Family",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l08-family-actions",
    "module": 5,
    "lesson": 8,
    "title": "Visiter, Appeler, Manquer — and the great \"miss\" inversion",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l09-family-stories",
    "module": 5,
    "lesson": 9,
    "title": "Raconter une histoire de famille — Family stories",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m05-l10-conversation",
    "module": 5,
    "lesson": 10,
    "title": "Une conversation familiale — A full family conversation",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m06-l01-numbers-1-10",
    "module": 6,
    "lesson": 1,
    "title": "Un à Dix — One to Ten",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l02-numbers-20-100",
    "module": 6,
    "lesson": 2,
    "title": "Vingt à Cent — The Wild 70s, 80s, 90s",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l03-big-numbers",
    "module": 6,
    "lesson": 3,
    "title": "Mille, Million, Milliard — The Big Numbers",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l04-time-hours",
    "module": 6,
    "lesson": 4,
    "title": "Quelle heure est-il? — What Time Is It?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l05-time-minutes",
    "module": 6,
    "lesson": 5,
    "title": "Demie, Quart, Moins — Half Past, Quarter To",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l06-days-week",
    "module": 6,
    "lesson": 6,
    "title": "Les Jours de la Semaine — Days of the Week",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l07-months-seasons",
    "module": 6,
    "lesson": 7,
    "title": "Mois et Saisons — Months & Seasons",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l08-money-prices",
    "module": 6,
    "lesson": 8,
    "title": "Argent — C'est Combien?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l09-shopping-numbers",
    "module": 6,
    "lesson": 9,
    "title": "Au Marché — Shopping Math & Bargaining",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m06-l10-conversation",
    "module": 6,
    "lesson": 10,
    "title": "Money & Time — La Conversation",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m07-l01-faim-soif",
    "module": 7,
    "lesson": 1,
    "title": "J'ai faim, j'ai soif — Hungry & Thirsty",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l02-foods",
    "module": 7,
    "lesson": 2,
    "title": "Aliments courants — Everyday Foods",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l03-restaurant",
    "module": 7,
    "lesson": 3,
    "title": "Au restaurant — At the Restaurant",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l04-ordering",
    "module": 7,
    "lesson": 4,
    "title": "Commander — Ordering",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l05-likes-food",
    "module": 7,
    "lesson": 5,
    "title": "J'aime / Je n'aime pas — Likes & Dislikes",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l06-cooking",
    "module": 7,
    "lesson": 6,
    "title": "Cuisiner — Cooking Verbs",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l07-tea-drinks",
    "module": 7,
    "lesson": 7,
    "title": "Le café, le thé, le vin — Drinks",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l08-french-food",
    "module": 7,
    "lesson": 8,
    "title": "Cuisine française — French Food You Half-Know",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l09-hosting",
    "module": 7,
    "lesson": 9,
    "title": "Recevoir des invités — Hosting",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m07-l10-conversation",
    "module": 7,
    "lesson": 10,
    "title": "Une conversation à table — Meal-time Talk",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m08-l01-etre-avoir",
    "module": 8,
    "lesson": 1,
    "title": "Être & Avoir — The two pillars",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l02-faire",
    "module": 8,
    "lesson": 2,
    "title": "Faire — To do, to make, and a thousand things in between",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l03-aller",
    "module": 8,
    "lesson": 3,
    "title": "Aller — To go (and the prepositions that follow)",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l04-vouloir",
    "module": 8,
    "lesson": 4,
    "title": "Vouloir — I want, I'd like, the polite difference",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l05-wake-up",
    "module": 8,
    "lesson": 5,
    "title": "Routine matinale — Reflexive verbs and your morning",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l06-work-school",
    "module": 8,
    "lesson": 6,
    "title": "Le travail — Your work day in French",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l07-evening-routine",
    "module": 8,
    "lesson": 7,
    "title": "Le soir — Coming home, dinner, decompression",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l08-yesterday",
    "module": 8,
    "lesson": 8,
    "title": "Hier — Telling yesterday with passé composé",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l09-tomorrow",
    "module": 8,
    "lesson": 9,
    "title": "Demain — Talking about tomorrow with futur proche",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m08-l10-conversation",
    "module": 8,
    "lesson": 10,
    "title": "Une journée — A whole day in French",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m09-l01-where-is",
    "module": 9,
    "lesson": 1,
    "title": "Où est...? — Where is...?",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l02-directions",
    "module": 9,
    "lesson": 2,
    "title": "Gauche, Droite, Tout droit — Directions",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l03-distance",
    "module": 9,
    "lesson": 3,
    "title": "C'est loin? — Near, Far",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l04-transport",
    "module": 9,
    "lesson": 4,
    "title": "Métro, Bus, Train — Prendre le transport",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l05-buying-ticket",
    "module": 9,
    "lesson": 5,
    "title": "Acheter un billet — Buying a ticket",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l06-airport",
    "module": 9,
    "lesson": 6,
    "title": "À l'aéroport — At the airport",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l07-hotel",
    "module": 9,
    "lesson": 7,
    "title": "À l'hôtel — At the hotel",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l08-emergency-travel",
    "module": 9,
    "lesson": 8,
    "title": "En voyage — Emergencies",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l09-asking-help",
    "module": 9,
    "lesson": 9,
    "title": "Demander de l'aide — Asking for help politely",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m09-l10-conversation",
    "module": 9,
    "lesson": 10,
    "title": "A travel conversation — Module 9 complete",
    "xpReward": 50,
    "version": 1
  },
  {
    "id": "m10-l01-happy-sad",
    "module": 10,
    "lesson": 1,
    "title": "Heureux & Triste — Happy & Sad",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l02-angry",
    "module": 10,
    "lesson": 2,
    "title": "En colère — Angry",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l03-fear",
    "module": 10,
    "lesson": 3,
    "title": "Peur & Inquiétude — Fear & Worry",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l04-sick",
    "module": 10,
    "lesson": 4,
    "title": "Être malade — Being sick",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l05-body",
    "module": 10,
    "lesson": 5,
    "title": "Le corps humain — The human body",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l06-doctor",
    "module": 10,
    "lesson": 6,
    "title": "Chez le médecin — At the doctor",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l07-past-stories",
    "module": 10,
    "lesson": 7,
    "title": "Raconter au passé — Telling stories in the past",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l08-hope-future",
    "module": 10,
    "lesson": 8,
    "title": "L'espoir — Hope & the future",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l09-proverbs",
    "module": 10,
    "lesson": 9,
    "title": "Proverbes français — French proverbs",
    "xpReward": 25,
    "version": 1
  },
  {
    "id": "m10-l10-your-story",
    "module": 10,
    "lesson": 10,
    "title": "Votre histoire en français — Your story in French (A2 Complete)",
    "xpReward": 50,
    "version": 1
  }
];

export default LESSON_MANIFEST;
