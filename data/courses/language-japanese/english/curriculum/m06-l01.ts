import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-ichi-ni-san',
  module: 6,
  lesson: 1,
  title: 'Ichi, Ni, San — Numbers 1 to 5',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Japanese hands you two number systems on day one. Sino-Japanese (ichi, ni, san — borrowed from Chinese) for almost everything — phones, prices, dates. And native Japanese (hitotsu, futatsu, mittsu) for counting loose objects without a counter word. We start with both, because Tokyo will throw both at you.",
    culturalNote: "When a vending machine flashes a price or a station announces a platform, you'll hear ichi/ni/san. When a friend asks how many onigiri you want, they'll ask 'ikutsu?' and you'll answer 'futatsu' (two). Knowing both sets is what separates 'studied Japanese' from 'used Japanese'.",
  },

  chunks: [
    {
      id: 'ichi_ni_san',
      target: '一 / 二 / 三 (ichi / ni / san)',
      native: 'One / Two / Three (Sino-Japanese)',
      literal: 'ichi (1), ni (2), san (3) — used for prices, phone numbers, dates',
      emoji: '1️⃣2️⃣3️⃣',
      phonetic: 'EE-chi / NEE / SAHN',
      audioRef: null,
    },
    {
      id: 'shi_go',
      target: '四 / 五 (shi/yon / go)',
      native: 'Four / Five',
      literal: 'shi or yon (4 — yon avoids the 死/death homophone), go (5)',
      emoji: '4️⃣5️⃣',
      phonetic: 'SHEE or YOHN / GO',
      audioRef: null,
    },
    {
      id: 'hitotsu_futatsu',
      target: '一つ / 二つ (hitotsu / futatsu)',
      native: 'One / Two (native — for loose objects)',
      literal: 'hitotsu (one-thing), futatsu (two-things) — used when no counter fits',
      emoji: '🍙',
      phonetic: 'hi-TOT-su / fu-TAT-su',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two number systems — Sino vs native Japanese',
    explanation: "Sino-Japanese readings (ichi, ni, san, shi/yon, go) are used with counter words and for abstract numbers — phone digits, prices, years. Native readings (hitotsu, futatsu, mittsu, yottsu, itsutsu) are used to count generic objects when you don't know the right counter. 'Yon' replaces 'shi' for 4 in many spoken contexts because 'shi' also means death.",
    examples: [
      { target: 'San-ji desu', native: "It's 3 o'clock (Sino: san + counter)" },
      { target: 'Onigiri o futatsu kudasai', native: 'Two rice balls please (native: futatsu, no counter)' },
      { target: 'Yon-hyaku en', native: '400 yen (yon, not shi — avoids the death homophone)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese number to its meaning',
      pairs: [
        { left: 'ichi', right: 'One (Sino)' },
        { left: 'san', right: 'Three' },
        { left: 'futatsu', right: 'Two (native)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the Sino-Japanese count',
      sentence: 'ichi, ni, san, _____, go',
      options: ['yon', 'futatsu', 'roku'],
      correct: 'yon',
      context: 'Counting 1 to 5 in Sino-Japanese — most speakers use yon, not shi.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Three',
      correct: ['san', 'San'],
    },
    {
      type: 'multiple_choice',
      instruction: "You order rice balls at a Tokyo conbini. The clerk asks how many — you want two. What do you say?",
      question: 'Two rice balls:',
      options: [
        { text: 'Onigiri o futatsu kudasai', correct: true },
        { text: 'Onigiri o ni kudasai', correct: false },
        { text: 'Onigiri o nitsu kudasai', correct: false },
      ],
      explanation: "For loose objects without a specific counter, native readings work: futatsu (two). Bare 'ni' alone needs a counter to follow.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Five, please' (using the Sino reading)",
      words: ['kudasai', 'go', 'o'],
      correct: ['go', 'o', 'kudasai'],
      translation: 'Five, please',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — the safer reading for 4',
      prompt: 'Four (avoiding the death homophone)',
      correct: ['yon', 'Yon'],
    },
  ],

  rwenDialogue: {
    intro: "Late evening at a Shibuya izakaya. The waiter brings the menu to your table — you want to order yakitori skewers.",
    lines: [
      {
        speaker: 'npc',
        target: 'いくつですか？',
        native: 'How many?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yakitori o itsutsu kudasai', native: 'Five yakitori please', correct: true, feedback: "Native reading 'itsutsu' for five loose skewers — clean. The waiter writes it down." },
          { target: 'Yakitori o go kudasai', native: 'Five yakitori please (Sino)', correct: false, feedback: "Bare Sino 'go' needs a counter. Either go-hon (with the long-thin counter) or use native itsutsu. Try 'itsutsu kudasai'." },
          { target: 'Go', native: 'Five (just the number)', correct: false, feedback: "Wrap it — 'Yakitori o itsutsu kudasai.' Five yakitori please." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Itsutsu — you picked the right system. Sino for prices, native for things you can hold. The waiter heard a real Japanese speaker.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Three (Sino-Japanese)', correct: ['san', 'San'] },
      { prompt: 'Two (native — for loose objects)', correct: ['futatsu', 'Futatsu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count from one to five out loud twice — once Sino (ichi, ni, san, yon, go), once native (hitotsu, futatsu, mittsu, yottsu, itsutsu). Notice which one feels harder. That's where to focus tomorrow.",
    rwenSignoff: "Two systems, one mind. Mata ashita.",
  },

  phase8: {
    scenario: "8pm at a small izakaya in Ebisu. You're at the counter facing the chef, and you want to order three yakitori skewers and two highballs. The chef speaks no English and writes orders on a chalkboard — you have to use the right number system for each item.",
    rwenRole: "Yakitori chef — early 50s, gruff but kind to anyone who tries Japanese; he expects native readings (mittsu, futatsu) for loose-object orders and Sino + counter (san-bon for skewers) when he asks back to confirm.",
    successCriteria: "User produces ichi/ni/san/yon/go for clarification and uses at least one native reading (futatsu/mittsu/itsutsu) for an open order, doesn't bare-Sino a number ('go kudasai' alone), and reaches for 'yon' rather than 'shi' when speaking 4 aloud.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
