import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03',
  module: 8,
  lesson: 3,
  title: 'Too Expensive — Iyibiza Kakhulu',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Iyibiza kakhulu. 'It's expensive — too much.' Three words that signal you're not paying that price. Said with a smile and a head-shake, this is the polite Zimbabwean way to start the bargaining game. Said flat with no smile, it's a refusal. Tone is everything.",
    culturalNote: "At craft markets, curio shops, and stone-carver stalls in Zimbabwe, the first price is NEVER the real price. Vendors expect you to push back — not haggling is seen as either naïve or rude. But the rules are different at supermarkets (TM Pick n Pay, OK), butcheries, and food vendors — those are FIXED prices. Bargain over a hippo carving; never over a tomato.",
  },

  chunks: [
    {
      id: 'iyibiza',
      target: 'Iyibiza',
      native: "It's expensive",
      literal: 'i- (it) + ya- (present continuous) + biza (call/cost)',
      emoji: '😬',
      phonetic: 'ee-yee-BEE-zah',
      audioRef: null,
    },
    {
      id: 'kakhulu',
      target: 'Kakhulu',
      native: 'Too much / very',
      literal: 'adverb intensifier — used after adjectives',
      emoji: '🔝',
      phonetic: 'kah-KHOO-loo',
      audioRef: null,
    },
    {
      id: 'iyibiza_kakhulu',
      target: 'Iyibiza kakhulu',
      native: "It's too expensive",
      literal: 'full bargaining phrase',
      emoji: '🚫',
      phonetic: 'ee-yee-BEE-zah kah-KHOO-loo',
      audioRef: null,
    },
    {
      id: 'shibhile',
      target: 'Shibhile',
      native: 'Cheap / a bargain',
      literal: 'opposite — what you want the price to be',
      emoji: '✅',
      phonetic: 'shee-BHEE-leh',
      audioRef: null,
    },
    {
      id: 'yehlisa',
      target: 'Yehlisa intengo',
      native: 'Bring the price down',
      literal: 'yehlisa (lower, drop) + intengo (price) — what you ask the vendor to do',
      emoji: '📉',
      phonetic: 'yeh-SLEE-sah een-TEN-goh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjective + kakhulu = "too / very"',
    explanation: "Stack 'kakhulu' after any descriptive verb to intensify it. Iyibiza (it's expensive) → Iyibiza kakhulu (too expensive). Kuhle (it's nice) → Kuhle kakhulu (very nice). Kufushane (it's short) → Kufushane kakhulu (too short). At a market, 'kakhulu' is the fulcrum of the negotiation — it tells the vendor you're not walking away, but the price needs to come down.",
    examples: [
      { target: 'Iyibiza', native: "It's expensive" },
      { target: 'Iyibiza kakhulu', native: "It's too expensive" },
      { target: 'Yehlisa intengo, please', native: 'Bring the price down, please' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its English',
      pairs: [
        { left: 'Iyibiza', right: "It's expensive" },
        { left: 'Kakhulu', right: 'Too much / very' },
        { left: 'Shibhile', right: 'Cheap / a bargain' },
        { left: 'Yehlisa intengo', right: 'Bring the price down' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Push back politely on the price',
      sentence: 'Iyibiza ____.',
      options: ['kakhulu', 'shibhile', 'idola'],
      correct: 'kakhulu',
      context: "Iyibiza kakhulu — It's too expensive.",
    },
    {
      type: 'translate',
      instruction: 'Type the bargaining phrase',
      prompt: "It's too expensive",
      correct: ['Iyibiza kakhulu', 'iyibiza kakhulu', 'Iyibiza kakhulu.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A vendor at TM Pick n Pay says US$2 for a loaf of bread. You say "Iyibiza kakhulu". What happens?',
      question: 'Most likely outcome:',
      options: [
        { text: 'Awkward silence — supermarket prices are fixed, not negotiable.', correct: true },
        { text: 'She drops the price by 30%.', correct: false },
        { text: 'She calls security.', correct: false },
      ],
      explanation: "Bargaining is for craft markets, curio stalls, taxi fares — never for supermarket food, fuel, or anything with a printed price tag. Save 'iyibiza kakhulu' for the curios.",
    },
  ],

  rwenDialogue: {
    intro: "Back at the curio stall. The carver has just said 'Kuhlanu kwemadolari' (US$5) for the soapstone hippo. You think it should be three.",
    lines: [
      { speaker: 'rwen', rwenLine: "He started high. That's normal. Push back — but smile while you do it." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Iyibiza kakhulu. Yehlisa intengo, please.', native: "Too expensive. Lower the price please.", correct: true, feedback: "He grins — you know the dance. 'OK, OK — kuthathu' (three). You just saved US$2." },
          { target: 'No. No. No.', native: 'No. No. No.', correct: false, feedback: "Direct refusal in English ends the negotiation cold. Try the isiNdebele opener: 'Iyibiza kakhulu' — it's a starting move, not an ending." },
          { target: 'Shibhile.', native: 'Cheap.', correct: false, feedback: "You called HIS price cheap — that's the opposite of what you mean. Shibhile is what you WANT the price to become. Say 'Iyibiza kakhulu' instead." },
        ],
      },
      { speaker: 'npc', target: 'Hayi-bo... kuthathu kwemadolari. Last price.', native: 'Ah-no... three dollars. Last price.' },
      { speaker: 'rwen', rwenLine: "He's at three. You're probably at four. The real price lands in the middle. We finish this negotiation tomorrow.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking. Type from memory.',
    prompts: [
      { prompt: "It's expensive", correct: ['Iyibiza', 'iyibiza'] },
      { prompt: 'Too much / very', correct: ['Kakhulu', 'kakhulu'] },
      { prompt: "It's too expensive", correct: ['Iyibiza kakhulu', 'iyibiza kakhulu'] },
      { prompt: 'Bring the price down', correct: ['Yehlisa intengo', 'yehlisa intengo'] },
    ],
  },

  mission: {
    title: "Practice the smile-shake-phrase",
    task: "In a mirror, say 'Iyibiza kakhulu' three times — once flat (refusal), once with a smile (negotiation opener), once shaking your head slowly (the classic). The same words do completely different jobs depending on your face. Tomorrow you'll need all three.",
    rwenSignoff: "Iyibiza kakhulu opens the dance. Tomorrow we learn the steps.",
  },

  phase8: {
    scenario: "You're back at the soapstone stall. The carver has quoted US$5 for a piece you think is worth $3. You need to push back politely, ask him to drop the price, and arrive at a fair number — without being rude or walking away.",
    rwenRole: "Baba Sibanda — same carver as yesterday. Expects bargaining. Will drop to $4 easily, then dig in. Last price will be $3.50 if you're patient.",
    successCriteria: "User uses 'Iyibiza kakhulu' or 'Yehlisa intengo' at least once. Doesn't accept first price. Lands the deal between $3 and $4. No English-only fallback.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
