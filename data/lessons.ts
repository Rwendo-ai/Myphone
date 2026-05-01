export interface VocabItem {
  shona: string;
  pronunciation: string;
  english: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  xpReward: number;
  vocabulary: VocabItem[];
}

export interface Unit {
  id: string;
  packId: string;
  title: string;
  description: string;
  emoji: string;
  lessons: Lesson[];
}

// ─────────────────────────────────────────────
// SHONA-ENGLISH PACK  (English speakers learning Shona)
// ─────────────────────────────────────────────

export const UNITS: Unit[] = [

  // MODULE 1 — Greetings & Respect
  {
    id: 'greetings',
    packId: 'shona-english',
    title: 'Greetings & Respect',
    description: 'Navigate every greeting in Shona — morning to evening, elders to friends',
    emoji: '👋',
    lessons: [
      { id: 'm01-l01-mangwanani',   unitId: 'greetings', title: 'Mangwanani — Good Morning',         xpReward: 25, vocabulary: [] },
      { id: 'm01-l02-wamuka-sei',   unitId: 'greetings', title: 'Wamuka Sei? — Greeting a Friend',   xpReward: 25, vocabulary: [] },
      { id: 'm01-l03-maswera-sei',  unitId: 'greetings', title: 'Maswera Sei? — Afternoon',          xpReward: 25, vocabulary: [] },
      { id: 'm01-l04-manheru',      unitId: 'greetings', title: 'Manheru — Good Evening',            xpReward: 25, vocabulary: [] },
      { id: 'm01-l05-makadii',      unitId: 'greetings', title: 'Makadii — Universal Greeting',      xpReward: 25, vocabulary: [] },
      { id: 'm01-l06-zita-rako',    unitId: 'greetings', title: 'Zita Rako Ndiani? — Your Name',     xpReward: 25, vocabulary: [] },
      { id: 'm01-l07-wabva-kupi',   unitId: 'greetings', title: 'Wabva Kupi? — Where From?',        xpReward: 25, vocabulary: [] },
      { id: 'm01-l08-mese',         unitId: 'greetings', title: 'Makadii Mese — Greet a Group',      xpReward: 25, vocabulary: [] },
      { id: 'm01-l09-sara-zvakanaka', unitId: 'greetings', title: 'Sara Zvakanaka — Goodbye',        xpReward: 25, vocabulary: [] },
      { id: 'm01-l10-conversation', unitId: 'greetings', title: 'The Greeting Conversation',         xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 2 — Survival Phrases
  {
    id: 'survival',
    packId: 'shona-english',
    title: 'Survival Phrases',
    description: 'Buy time, ask for help, and navigate real situations in Shona',
    emoji: '🧭',
    lessons: [
      { id: 'm02-l01-ndapota', unitId: 'survival', title: 'Ndapota — Please', xpReward: 25, vocabulary: [] },
      { id: 'm02-l02-ndatenda', unitId: 'survival', title: 'Ndatenda — Thank You', xpReward: 25, vocabulary: [] },
      { id: 'm02-l03-ruregerero', unitId: 'survival', title: 'Ruregerero — Sorry', xpReward: 25, vocabulary: [] },
      { id: 'm02-l04-handizivi', unitId: 'survival', title: "Handizivi — I Don't Know", xpReward: 25, vocabulary: [] },
      { id: 'm02-l05-taura-zvishoma', unitId: 'survival', title: 'Taura Zvishoma — Speak Slowly', xpReward: 25, vocabulary: [] },
      { id: 'm02-l06-ndinoda-rubatsiro', unitId: 'survival', title: 'Ndinoda Rubatsiro — I Need Help', xpReward: 25, vocabulary: [] },
      { id: 'm02-l07-zvii-mushona', unitId: 'survival', title: "Zvii muShona? — How Do You Say?", xpReward: 25, vocabulary: [] },
      { id: 'm02-l08-ndanzwisisa', unitId: 'survival', title: 'Ndanzwisisa — I Understand', xpReward: 25, vocabulary: [] },
      { id: 'm02-l09-ndinoda', unitId: 'survival', title: 'Ndinoda — I Want / I Need', xpReward: 25, vocabulary: [] },
      { id: 'm02-l10-survival-conversation', unitId: 'survival', title: 'Survival Conversation', xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 3 — Self & Identity
  {
    id: 'identity',
    packId: 'shona-english',
    title: 'Self & Identity',
    description: 'Describe who you are, what you do, and where you live',
    emoji: '🙋',
    lessons: [
      { id: 'm03-l01-ndiri', unitId: 'identity', title: 'Ndiri — I Am', xpReward: 25, vocabulary: [] },
      { id: 'm03-l02-ndinoshanda', unitId: 'identity', title: 'Ndinoshanda — I Work', xpReward: 25, vocabulary: [] },
      { id: 'm03-l03-makore', unitId: 'identity', title: 'Makore — Age', xpReward: 25, vocabulary: [] },
      { id: 'm03-l04-mhuri', unitId: 'identity', title: 'Mhuri — My Family', xpReward: 25, vocabulary: [] },
      { id: 'm03-l05-vanhu-vangu', unitId: 'identity', title: 'Vanhu Vangu — My People', xpReward: 25, vocabulary: [] },
      { id: 'm03-l06-tinogara', unitId: 'identity', title: 'Tinogara — Where We Live', xpReward: 25, vocabulary: [] },
      { id: 'm03-l07-ndinoda-kudzidza', unitId: 'identity', title: 'I Want to Learn Shona', xpReward: 25, vocabulary: [] },
      { id: 'm03-l08-ndinofara', unitId: 'identity', title: 'Ndinofara — I Am Happy', xpReward: 25, vocabulary: [] },
      { id: 'm03-l09-zvakaita', unitId: 'identity', title: 'Zvakaita — What I Do', xpReward: 25, vocabulary: [] },
      { id: 'm03-l10-my-story', unitId: 'identity', title: 'My Story in Shona', xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 4 — Noun Classes (Skeleton)
  {
    id: 'noun-classes',
    packId: 'shona-english',
    title: 'Noun Classes',
    description: 'Unlock Shona grammar — the patterns behind every sentence',
    emoji: '🔑',
    lessons: [
      { id: 'm04-l01-mu-va',           unitId: 'noun-classes', title: 'Munhu / Vanhu — Person & People',    xpReward: 30, vocabulary: [] },
      { id: 'm04-l02-chi-zvi',          unitId: 'noun-classes', title: 'Chinhu / Zvinhu — Thing & Things',   xpReward: 30, vocabulary: [] },
      { id: 'm04-l03-mu-mi',            unitId: 'noun-classes', title: 'Muti / Miti — Trees & Medicine',     xpReward: 30, vocabulary: [] },
      { id: 'm04-l04-ri-ma',            unitId: 'noun-classes', title: 'Zai / Mazai — The Ri/Ma Class',      xpReward: 30, vocabulary: [] },
      { id: 'm04-l05-subject-concord',  unitId: 'noun-classes', title: 'Subject Concord',                    xpReward: 30, vocabulary: [] },
      { id: 'm04-l06-possession',       unitId: 'noun-classes', title: 'Possession — Whose Is It?',          xpReward: 30, vocabulary: [] },
      { id: 'm04-l07-adjectives',       unitId: 'noun-classes', title: 'Adjectives — Good, Big, Beautiful',  xpReward: 30, vocabulary: [] },
      { id: 'm04-l08-tenses',           unitId: 'noun-classes', title: 'Past & Future — When Things Happen', xpReward: 30, vocabulary: [] },
      { id: 'm04-l09-questions',        unitId: 'noun-classes', title: 'Asking Questions in Shona',          xpReward: 30, vocabulary: [] },
      { id: 'm04-l10-grammar-context',  unitId: 'noun-classes', title: 'Grammar in Context',                 xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 5 — Family & Kinship
  {
    id: 'family',
    packId: 'shona-english',
    title: 'Family & Kinship',
    description: "Shona family relationships run deeper than English — learn them all",
    emoji: '👨‍👩‍👧‍👦',
    lessons: [
      { id: 'm05-l01-baba',           unitId: 'family', title: 'Baba — Father & Paternal Family',   xpReward: 30, vocabulary: [] },
      { id: 'm05-l02-amai',           unitId: 'family', title: 'Amai — Mother & Maternal Family',   xpReward: 30, vocabulary: [] },
      { id: 'm05-l03-siblings',       unitId: 'family', title: "Mukoma / Munin'ina — Siblings",     xpReward: 30, vocabulary: [] },
      { id: 'm05-l04-grandparents',   unitId: 'family', title: 'Sekuru & Ambuya — Grandparents',   xpReward: 30, vocabulary: [] },
      { id: 'm05-l05-extended-family',unitId: 'family', title: 'Extended Family — The Wider Circle',xpReward: 30, vocabulary: [] },
      { id: 'm05-l06-mudzimu',        unitId: 'family', title: 'Mudzimu — Ancestors & Lineage',    xpReward: 35, vocabulary: [] },
      { id: 'm05-l07-spouse',         unitId: 'family', title: 'Murume & Mukadzi — Husband & Wife',xpReward: 30, vocabulary: [] },
      { id: 'm05-l08-children',       unitId: 'family', title: 'Vana — Children & Babies',         xpReward: 30, vocabulary: [] },
      { id: 'm05-l09-talking-family', unitId: 'family', title: 'Talking About My Family',          xpReward: 30, vocabulary: [] },
      { id: 'm05-l10-rwen-family',    unitId: 'family', title: "Rwen's Family — Full Conversation",xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 6 — Numbers, Time & Money
  {
    id: 'numbers-time',
    packId: 'shona-english',
    title: 'Numbers, Time & Money',
    description: 'Count, tell the time, and navigate the market',
    emoji: '🔢',
    lessons: [
      { id: 'm06-l01-numbers-1-5',   unitId: 'numbers-time', title: 'Nhamba 1–5',              xpReward: 25, vocabulary: [] },
      { id: 'm06-l02-numbers-6-10',  unitId: 'numbers-time', title: 'Nhamba 6–10',             xpReward: 25, vocabulary: [] },
      { id: 'm06-l03-time',          unitId: 'numbers-time', title: "Nguva — What's the Time?",xpReward: 25, vocabulary: [] },
      { id: 'm06-l04-days',          unitId: 'numbers-time', title: 'Days of the Week',         xpReward: 25, vocabulary: [] },
      { id: 'm06-l05-months',        unitId: 'numbers-time', title: 'Months & Seasons',         xpReward: 25, vocabulary: [] },
      { id: 'm06-l06-money',         unitId: 'numbers-time', title: 'Mari — Money',             xpReward: 25, vocabulary: [] },
      { id: 'm06-l07-prices',        unitId: 'numbers-time', title: 'Mutengo — Price & Shopping',xpReward: 25, vocabulary: [] },
      { id: 'm06-l08-larger-numbers',unitId: 'numbers-time', title: 'Makumi — Tens & Larger',  xpReward: 25, vocabulary: [] },
      { id: 'm06-l09-appointments',  unitId: 'numbers-time', title: 'Appointments & Scheduling',xpReward: 25, vocabulary: [] },
      { id: 'm06-l10-market',        unitId: 'numbers-time', title: 'At the Market',            xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 7 — Food, Drink & Hosting
  {
    id: 'food',
    packId: 'shona-english',
    title: 'Food, Drink & Hosting',
    description: "Shona hospitality is legendary — learn to share it",
    emoji: '🍲',
    lessons: [
      { id: 'm07-l01-sadza',          unitId: 'food', title: 'Sadza — The National Dish',       xpReward: 25, vocabulary: [] },
      { id: 'm07-l02-food-vocabulary',unitId: 'food', title: 'Zvokudya — Food Vocabulary',      xpReward: 25, vocabulary: [] },
      { id: 'm07-l03-drinks',         unitId: 'food', title: 'Mvura & Zvokunwa — Drinks',       xpReward: 25, vocabulary: [] },
      { id: 'm07-l04-hunger',         unitId: 'food', title: 'Ndine Nzara — Hunger',            xpReward: 25, vocabulary: [] },
      { id: 'm07-l05-ordering',       unitId: 'food', title: 'Ordering at a Restaurant',        xpReward: 25, vocabulary: [] },
      { id: 'm07-l06-delicious',      unitId: 'food', title: "Zvakanakisisa! — Expressing Taste",xpReward: 25, vocabulary: [] },
      { id: 'm07-l07-hosting',        unitId: 'food', title: "Welcoming a Guest",               xpReward: 30, vocabulary: [] },
      { id: 'm07-l08-eating-together',unitId: 'food', title: 'Kudya Pamwe — Eating Together',   xpReward: 25, vocabulary: [] },
      { id: 'm07-l09-morning-meal',   unitId: 'food', title: 'Morning Meal Conversation',       xpReward: 25, vocabulary: [] },
      { id: 'm07-l10-rwen-dinner',    unitId: 'food', title: "Rwen's Family Dinner",            xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 8 — Action Verbs & Daily Life
  {
    id: 'verbs',
    packId: 'shona-english',
    title: 'Action Verbs & Daily Life',
    description: 'Describe what you do — the engine of real conversation',
    emoji: '⚡',
    lessons: [
      { id: 'm08-l01-kuenda',      unitId: 'verbs', title: 'Kuenda — To Go',            xpReward: 25, vocabulary: [] },
      { id: 'm08-l02-kuuya',       unitId: 'verbs', title: 'Kuuya — To Come',           xpReward: 25, vocabulary: [] },
      { id: 'm08-l03-kudya-verb',  unitId: 'verbs', title: 'Kudya — To Eat',            xpReward: 25, vocabulary: [] },
      { id: 'm08-l04-kunwa',       unitId: 'verbs', title: 'Kunwa — To Drink',          xpReward: 25, vocabulary: [] },
      { id: 'm08-l05-kurara',      unitId: 'verbs', title: 'Kurara — To Sleep',         xpReward: 25, vocabulary: [] },
      { id: 'm08-l06-kutaura',     unitId: 'verbs', title: 'Kutaura — To Speak',        xpReward: 25, vocabulary: [] },
      { id: 'm08-l07-kuona',       unitId: 'verbs', title: 'Kuona — To See',            xpReward: 25, vocabulary: [] },
      { id: 'm08-l08-kuterera',    unitId: 'verbs', title: 'Kuterera — To Listen',      xpReward: 25, vocabulary: [] },
      { id: 'm08-l09-kudzidza',    unitId: 'verbs', title: 'Kudzidza — To Learn',       xpReward: 25, vocabulary: [] },
      { id: 'm08-l10-daily-routine',unitId: 'verbs', title: 'A Day in Shona',           xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 9 — Directions & Travel
  {
    id: 'directions',
    packId: 'shona-english',
    title: 'Directions & Travel',
    description: 'Navigate Zimbabwe — kombis, streets, and asking the way',
    emoji: '🗺️',
    lessons: [
      { id: 'm09-l01-nzira',       unitId: 'directions', title: 'Nzira — The Way & Road',           xpReward: 25, vocabulary: [] },
      { id: 'm09-l02-forward-back',unitId: 'directions', title: 'Mberi & Shure — Forward & Back',   xpReward: 25, vocabulary: [] },
      { id: 'm09-l03-right-left',  unitId: 'directions', title: 'Kurudyi & Kuruboshwe — Right & Left',xpReward: 25, vocabulary: [] },
      { id: 'm09-l04-near-far',    unitId: 'directions', title: 'Pedyo & Kure — Near & Far',        xpReward: 25, vocabulary: [] },
      { id: 'm09-l05-kombi',       unitId: 'directions', title: 'Kombi — Public Transport',         xpReward: 30, vocabulary: [] },
      { id: 'm09-l06-airport',     unitId: 'directions', title: 'At the Airport',                   xpReward: 25, vocabulary: [] },
      { id: 'm09-l07-hotel',       unitId: 'directions', title: 'At the Hotel',                     xpReward: 25, vocabulary: [] },
      { id: 'm09-l08-emergency',   unitId: 'directions', title: 'Emergency Phrases',                xpReward: 35, vocabulary: [] },
      { id: 'm09-l09-sightseeing', unitId: 'directions', title: "Sightseeing — Zimbabwe's Wonders", xpReward: 25, vocabulary: [] },
      { id: 'm09-l10-harare',      unitId: 'directions', title: 'Navigating Harare',               xpReward: 50, vocabulary: [] },
    ],
  },

  // MODULE 10 — Emotions, Health & Stories
  {
    id: 'emotions',
    packId: 'shona-english',
    title: 'Emotions, Health & Stories',
    description: 'Express yourself fully — feelings, wellbeing, and storytelling',
    emoji: '💙',
    lessons: [
      { id: 'm10-l01-ndinofara', unitId: 'emotions', title: 'Ndinofara — Happiness & Joy',      xpReward: 30, vocabulary: [] },
      { id: 'm10-l02-sadness',   unitId: 'emotions', title: 'Ndakasuwa — Sadness & Difficulty', xpReward: 30, vocabulary: [] },
      { id: 'm10-l03-fear',      unitId: 'emotions', title: 'Ndakatya — Fear & Courage',        xpReward: 30, vocabulary: [] },
      { id: 'm10-l04-sickness',  unitId: 'emotions', title: 'Ndinorwara — Illness & Wellness',  xpReward: 30, vocabulary: [] },
      { id: 'm10-l05-body',      unitId: 'emotions', title: 'Body Parts — Zvikamu Zvomuviri',   xpReward: 25, vocabulary: [] },
      { id: 'm10-l06-doctor',    unitId: 'emotions', title: 'At the Doctor — Kuchipitari',      xpReward: 30, vocabulary: [] },
      { id: 'm10-l07-past',      unitId: 'emotions', title: 'Talking About the Past',           xpReward: 30, vocabulary: [] },
      { id: 'm10-l08-hope',      unitId: 'emotions', title: 'Hope & The Future — Tariro',       xpReward: 30, vocabulary: [] },
      { id: 'm10-l09-proverbs',  unitId: 'emotions', title: 'Nhetembo — Shona Proverbs',        xpReward: 35, vocabulary: [] },
      { id: 'm10-l10-your-story',unitId: 'emotions', title: "Your Shona Story — A2 Complete",   xpReward: 100, vocabulary: [] },
    ],
  },

  // ─────────────────────────────────────────────
  // ENGLISH-SHONA PACK  (Shona speakers learning English)
  // v1: ONE example unit, ONE example lesson — proves the second-variant
  // architecture end-to-end. Full 100-lesson curriculum is Phase K.
  // ─────────────────────────────────────────────
  {
    id: 'greetings-en',
    packId: 'english-shona',
    title: 'Kwaziso — Greetings',
    description: 'Tanga kuzivana kuburikidza nemhoresano dzeChiNgezi',
    emoji: '👋',
    lessons: [
      { id: 'm01-l01-hello', unitId: 'greetings-en', title: 'Hello — Mhoro', xpReward: 25, vocabulary: [] },
    ],
  },
];

export function getUnitsForPack(packId: string): Unit[] {
  return UNITS.filter((u) => u.packId === packId);
}

export function getUnit(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id);
}

export function getLesson(id: string): Lesson | undefined {
  for (const unit of UNITS) {
    const lesson = unit.lessons.find((l) => l.id === id);
    if (lesson) return lesson;
  }
  return undefined;
}
