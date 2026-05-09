import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08',
  module: 8,
  lesson: 8,
  title: 'At a Bulawayo Market — Full Scene',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Today we put it all together. Saturday morning at a Bulawayo flea market — a 90-second exchange that uses every phrase from lessons 1-7. Greeting → asking the price → bargaining → paying → walking away. This is the test scene. After today, you can shop in isiNdebele.",
    culturalNote: "Bulawayo's main flea market is on Sixth Avenue Extension — locals call it 'eMakhetheni' (at the market). Open from 7am, busiest by 10. You'll find vegetables, second-hand clothes, plastic buckets, kitchen wares, and a row of curio stalls. The market has its own rhythm: greet vendors as you walk past (even if you don't buy), and they remember you next time. Walking past stone-faced is rude; a nod and 'sawubona' costs you nothing.",
  },

  chunks: [
    {
      id: 'sawubona_baba',
      target: 'Sawubona, baba',
      native: 'Hello, sir / father (respectful)',
      literal: 'sawubona (hello) + baba (father, used for any older man)',
      emoji: '🙋',
      phonetic: 'sah-woo-BOH-nah BAH-bah',
      audioRef: null,
    },
    {
      id: 'sawubona_mama',
      target: 'Sawubona, mama',
      native: 'Hello, ma\'am / mother (respectful)',
      literal: 'used for any older woman',
      emoji: '👩',
      phonetic: 'sah-woo-BOH-nah MAH-mah',
      audioRef: null,
    },
    {
      id: 'ngifuna_amazambane',
      target: 'Ngifuna amazambane',
      native: 'I want potatoes',
      literal: 'ngi- (I) + funa (want) + amazambane (potatoes)',
      emoji: '🥔',
      phonetic: 'ngee-FOO-nah ah-mah-zahm-BAH-neh',
      audioRef: null,
    },
    {
      id: 'amabili',
      target: 'Amabili',
      native: 'Two (kg, of them, etc.)',
      literal: 'noun-class form of "two" — used after vegetable nouns',
      emoji: '✌️',
      phonetic: 'ah-mah-BEE-lee',
      audioRef: null,
    },
    {
      id: 'hamba_kahle',
      target: 'Hamba kahle',
      native: 'Go well (goodbye)',
      literal: 'hamba (go) + kahle (well) — said when you leave',
      emoji: '👋',
      phonetic: 'HAHM-bah KAH-shleh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The Bulawayo market script',
    explanation: "Every Zimbabwean market exchange follows the same skeleton — memorise it once, deploy 100 times: 1) Greet ('Sawubona, mama'). 2) State desire ('Ngifuna ___'). 3) Ask price ('Imalini?'). 4) If too high, push back ('Iyibiza kakhulu'). 5) Counter ('Ngingakhokha ___'). 6) Agree ('Kulungile'). 7) Hand over money ('Nansi imali'). 8) Thank ('Siyabonga'). 9) Leave well ('Hamba kahle'). Nine beats. The whole thing takes under two minutes.",
    examples: [
      { target: 'Sawubona, mama', native: 'Greeting' },
      { target: 'Ngifuna amazambane amabili', native: 'I want two (kg of) potatoes' },
      { target: 'Hamba kahle', native: 'Go well — goodbye' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the market script step',
      pairs: [
        { left: 'Sawubona, mama', right: 'Greeting' },
        { left: 'Ngifuna amazambane', right: 'I want potatoes' },
        { left: 'Imalini?', right: 'How much?' },
        { left: 'Hamba kahle', right: 'Goodbye (go well)' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I want two potatoes please'",
      words: ['Sicela,', 'ngifuna', 'amazambane', 'amabili.'],
      correct: ['Sicela,', 'ngifuna', 'amazambane', 'amabili.'],
      translation: 'Please, I want two potatoes.',
    },
    {
      type: 'fill_blank',
      instruction: 'You walk away from the stall — say goodbye',
      sentence: 'Hamba ____.',
      options: ['kahle', 'kakhulu', 'kuphela'],
      correct: 'kahle',
      context: 'Hamba kahle — Go well (goodbye).',
    },
    {
      type: 'multiple_choice',
      instruction: "You walk past five vegetable stalls without buying. What's the polite minimum?",
      question: 'Polite passage:',
      options: [
        { text: "Nod or say 'sawubona' to each vendor as you pass — costs nothing, builds goodwill.", correct: true },
        { text: 'Stare straight ahead, say nothing.', correct: false },
        { text: 'Stop and bargain at every stall to be friendly.', correct: false },
      ],
      explanation: "Walking past silently in Zimbabwe is the rude option. A nod or quick 'sawubona' to each vendor signals you're a person, not a tourist. Vendors remember — you might come back tomorrow.",
    },
  ],

  rwenDialogue: {
    intro: "Saturday 9am, eMakhetheni (Sixth Avenue flea market), Bulawayo. You want 2kg of potatoes for tonight's stew. Mai Khumalo's stall has the freshest pile.",
    lines: [
      { speaker: 'user', target: 'Sawubona, mama.', native: 'Hello, ma\'am.' },
      { speaker: 'npc', target: 'Yebo, ngiyakubona. Ufunani?', native: 'Yes, I see you. What do you want?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngifuna amazambane amabili. Imalini?', native: 'I want two (kg) of potatoes. How much?', correct: true, feedback: "She scoops two kilos onto her scale. 'US$2 — or ZiG50.' You have small bills." },
          { target: 'Imalini?', native: 'How much?', correct: false, feedback: "You skipped saying what you want — she'll be confused. Order first ('Ngifuna amazambane amabili'), then ask price." },
          { target: 'Iyibiza kakhulu.', native: "It's too expensive.", correct: false, feedback: "You haven't even heard the price yet — and food prices at supermarkets/markets aren't bargained. Just ask the price." },
        ],
      },
      { speaker: 'npc', target: 'US$2 kumbe ZiG50.', native: 'Two dollars or fifty ZiG.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kulungile. Nansi US$2. Siyabonga, mama.', native: "OK. Here's two dollars. Thanks, ma'am.", correct: true, feedback: "She bags the potatoes, hands them over with both hands. 'Hamba kahle, sisi.' (Go well, sister.) Clean transaction in 30 seconds." },
          { target: 'Iyibiza kakhulu. Sicela kunye.', native: 'Too expensive. Please make it one.', correct: false, feedback: "Food at markets is fixed-price — bargaining over US$2 of potatoes makes you look mean. Save the negotiating for curios. Pay the price." },
          { target: 'Ikhadi.', native: 'Card.', correct: false, feedback: "Vegetable stalls are cash-only universally. Don't even ask. Pay USD or ZiG cash." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Sawubona → ngifuna → imalini → kulungile → nansi imali → siyabonga → hamba kahle. Seven phrases. One transaction. You're a market shopper now.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Recall the full market script.',
    prompts: [
      { prompt: 'Hello, ma\'am (respectful)', correct: ['Sawubona, mama', 'sawubona mama', 'Sawubona mama'] },
      { prompt: 'I want potatoes', correct: ['Ngifuna amazambane', 'ngifuna amazambane'] },
      { prompt: 'How much?', correct: ['Imalini?', 'imalini', 'Imalini', 'imalini?'] },
      { prompt: 'Go well (goodbye)', correct: ['Hamba kahle', 'hamba kahle'] },
    ],
  },

  mission: {
    title: 'Run the full script in your head',
    task: "Stand in your kitchen. Imagine the produce stand. Walk through the nine beats out loud — Sawubona, mama → Ngifuna amazambane amabili → Imalini? → Kulungile → Nansi imali → Siyabonga → Hamba kahle. Time it. Aim for 60 seconds. The faster you can do it cold, the less you panic at the real stall.",
    rwenSignoff: "Nine beats, one rhythm. Tomorrow we tackle the trickiest part of Zim shopping — currency choice.",
  },

  phase8: {
    scenario: "Saturday morning at eMakhetheni (Bulawayo flea market). You need to buy 2kg of potatoes and 1kg of tomatoes from one vendor. Use the full nine-beat market script — greet, order, ask price, pay, leave well. Remember: food prices are not bargainable.",
    rwenRole: "Mai Khumalo — produce vendor, late 50s, has run this stall 12 years. Speaks slow clear isiNdebele. Will treat you like a regular if you greet properly.",
    successCriteria: "User completes greet → order → price → pay → goodbye in isiNdebele. Doesn't try to bargain on food. Uses 'Sawubona, mama' opener and 'Hamba kahle' closer. Whole exchange under 90 seconds.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
