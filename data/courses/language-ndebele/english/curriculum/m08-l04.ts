import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04',
  module: 8,
  lesson: 4,
  title: 'Bargaining at the Market — eDamu, eFalls',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Bargaining in Zimbabwe is a dance with three moves: 1) Hear the opening price. 2) Counter at half. 3) Meet near two-thirds. The dance lasts 30-90 seconds. Walk away once and they'll often call you back. Walk away twice and the deal is dead.",
    culturalNote: "eDamu literally means 'at the dam' — it's the open-air craft market in Bulawayo near Centenary Park, named after a small dam. eFalls Shopping Centre in Victoria Falls is the tourist-facing curio market — more aggressive bargaining there because vendors expect tourists with USD. At eDamu prices are softer; at eFalls expect to halve the opening offer. 'Hayi-bo' (ah-no!) is the universal sound of a vendor pretending to be wounded by your counter-offer.",
  },

  chunks: [
    {
      id: 'eDamu',
      target: 'eDamu',
      native: 'At the dam (Bulawayo craft market)',
      literal: 'e- (at/in/to) + Damu (dam, place name)',
      emoji: '🏞️',
      phonetic: 'eh-DAH-moo',
      audioRef: null,
    },
    {
      id: 'eFalls',
      target: 'eFalls Shopping Centre',
      native: 'At the Falls Shopping Centre',
      literal: "e- locative + the Centre's English name",
      emoji: '💧',
      phonetic: 'eh-FAWLS',
      audioRef: null,
    },
    {
      id: 'price_counter',
      target: 'Ngingakhokha kubili',
      native: "I can pay two (dollars)",
      literal: 'ngi- (I) + nga- (can) + khokha (pay) + kubili (two)',
      emoji: '✋',
      phonetic: 'ngeen-gah-KHOH-khah koo-BEE-lee',
      audioRef: null,
    },
    {
      id: 'last_price',
      target: 'Yintengo yokugcina',
      native: 'Final price / last price',
      literal: 'i-ntengo (price) + yokugcina (of finishing/final)',
      emoji: '🛑',
      phonetic: 'yeen-TEN-goh yoh-koo-GTSEE-nah',
      audioRef: null,
    },
    {
      id: 'haybo',
      target: 'Hayi-bo!',
      native: 'No way! / Ah no!',
      literal: 'theatrical refusal — vendors and buyers both use it',
      emoji: '😱',
      phonetic: 'HIGH-boh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The locative e- prefix',
    explanation: "isiNdebele uses e- in front of a place name to mean 'at/in/to'. Damu (dam) → eDamu (at the dam). Bulawayo → eBulawayo (in Bulawayo). The same prefix works for English place names: e-Falls Shopping Centre. When you tell someone where you're headed for shopping, e- is the bridge: 'Ngiya eDamu' = I'm going to the dam (market).",
    examples: [
      { target: 'eDamu', native: 'At the dam (market)' },
      { target: 'eBulawayo', native: 'In Bulawayo' },
      { target: 'Ngiya eFalls', native: "I'm going to the Falls (Vic Falls)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match phrase to meaning',
      pairs: [
        { left: 'eDamu', right: 'At the dam (Bulawayo craft market)' },
        { left: 'Ngingakhokha kubili', right: 'I can pay two (dollars)' },
        { left: 'Yintengo yokugcina', right: 'Final price' },
        { left: 'Hayi-bo!', right: 'No way! Ah no!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Counter-offer at half the asking price',
      sentence: 'Ngingakhokha ____.',
      options: ['kubili', 'imali', 'eDamu'],
      correct: 'kubili',
      context: 'Ngingakhokha kubili — I can pay two.',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Final price (last offer)',
      correct: ['Yintengo yokugcina', 'yintengo yokugcina', 'Yintengo yokugcina.'],
    },
    {
      type: 'multiple_choice',
      instruction: "At eFalls, vendor opens at US$20 for a sculpture. What's a reasonable opening counter?",
      question: 'First counter-offer:',
      options: [
        { text: 'US$10 — half the asking price, the standard opening counter.', correct: true },
        { text: 'US$19 — a polite small reduction.', correct: false },
        { text: 'US$3 — way under, insulting.', correct: false },
      ],
      explanation: "At eFalls (tourist market), opening prices are roughly double the real price. Counter at half. eDamu (locals) — counter at 60-70%. The first offer is never the real number, but lowballing too hard kills the dance.",
    },
  ],

  rwenDialogue: {
    intro: "eFalls Shopping Centre, late afternoon. A wooden giraffe carving, 1 metre tall. The vendor has just said US$40.",
    lines: [
      { speaker: 'npc', target: 'Le ndoda — kune kwamatshumi amane kwemadolari. Kuhle kakhulu.', native: 'My friend — forty dollars. Very nice piece.' },
      { speaker: 'rwen', rwenLine: "Forty. He's at eFalls — expect this to be double the real price. Counter at twenty." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Iyibiza kakhulu. Ngingakhokha kwamatshumi amabili.', native: "Too expensive. I can pay twenty.", correct: true, feedback: "He claps his chest — 'Hayi-bo!' Theatrical wound. But he's already calculating. 'Kwamatshumi amathathu' — thirty. The dance is on." },
          { target: 'OK. US$40.', native: 'OK. Forty dollars.', correct: false, feedback: "You just paid double. eFalls vendors will not respect an instant yes — and you'll regret it for the rest of the trip." },
          { target: 'Kuhlanu.', native: 'Five.', correct: false, feedback: "Five for a US$20 piece is insulting at eFalls — he'll wave you off and refuse to negotiate. Counter at half (twenty), not at one-eighth." },
        ],
      },
      { speaker: 'npc', target: 'Hayi-bo! Kwamatshumi amathathu — yintengo yokugcina.', native: 'Ah no! Thirty — final price.' },
      { speaker: 'rwen', rwenLine: "He said 'final price'. He doesn't mean it yet. Walk three steps away. He'll call you back at twenty-five.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'At the dam (Bulawayo craft market)', correct: ['eDamu', 'edamu'] },
      { prompt: 'I can pay two (dollars)', correct: ['Ngingakhokha kubili', 'ngingakhokha kubili'] },
      { prompt: 'Final price', correct: ['Yintengo yokugcina', 'yintengo yokugcina'] },
      { prompt: 'No way! / Ah no!', correct: ['Hayi-bo!', 'Hayi-bo', 'hayi-bo', 'hayibo'] },
    ],
  },

  mission: {
    title: 'Plan your bargaining ladder',
    task: "Before your trip, write out a 'bargaining ladder' for a US$20 imagined opening offer. Your counter: $10. His likely response: $15. Your move: $12. His move: $13.50. Deal at $13. Practising the maths in advance keeps your isiNdebele clean during the real exchange.",
    rwenSignoff: "Bargaining is rhythm + maths + smile. eDamu and eFalls await.",
  },

  phase8: {
    scenario: "eFalls Shopping Centre, Victoria Falls. Late afternoon. A vendor has a wooden giraffe sculpture priced at US$40. You think it's worth around $20. You need to bargain him down — open with 'Iyibiza kakhulu', counter at half, and arrive at a deal in the $20-25 range without losing face on either side.",
    rwenRole: "Mr Moyo — Victoria Falls curio carver, mid-40s, very experienced with tourists. Will theatrically refuse, drop fast to $30, slow to $25, and stick at $22 unless you walk away.",
    successCriteria: "User counters at half ($20), uses 'Iyibiza kakhulu' or 'Ngingakhokha [X]' at least once, lands deal at $22-$25. Recognises 'yintengo yokugcina' as bargaining theatre, not real finality. No accepting first price.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
