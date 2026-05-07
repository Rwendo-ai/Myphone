import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-en-el-mercado',
  module: 6,
  lesson: 10,
  title: 'En el mercado — Full Market Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 6 finale. Numbers, time, money, days, dates, haggling — they all live in one place: the market. Today you walk a Mexico City tianguis solo. Greet, ask the price, react, negotiate, confirm money, close, and thank — seven beats, all in Spanish.",
    culturalNote: "El Mercado de la Lagunilla, Mercado de Coyoacán, Mercado de San Juan — Mexico City has hundreds of these. They are the heartbeat of Mexican daily life: produce, mole, artesanías, leather, fabric, mole, pulque. Knowing how to navigate one in Spanish is the difference between watching the city and being in it.",
  },

  chunks: [
    {
      id: 'buenos_dias_marchante',
      target: 'Buenos días, marchante',
      native: 'Good morning, vendor (friendly)',
      literal: 'Good days, vendor — Mexican market warmth',
      emoji: '🌅',
      phonetic: 'BWEH-nohs DEE-ahs mar-CHAHN-teh',
      audioRef: null,
    },
    {
      id: 'me_lo_lleva_full',
      target: 'Me lo llevo, gracias',
      native: "I'll take it, thanks",
      literal: 'Me it I-take, thanks — closes the deal',
      emoji: '🛒',
      phonetic: 'meh loh YEH-voh GRAH-syahs',
      audioRef: null,
    },
    {
      id: 'que_le_debo',
      target: '¿Qué le debo?',
      native: 'How much do I owe you?',
      literal: 'What to-you I-owe? — confirming total before paying',
      emoji: '💰',
      phonetic: 'keh leh DEH-boh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full market exchange — seven beats in Spanish',
    explanation: "Greet → ask price → react → negotiate → agree → confirm money → thank. (1) Buenos días, marchante. (2) ¿Cuánto cuesta? (3) Está caro. (4) ¿Me lo deja en X? (5) Bueno. (6) ¿Qué le debo? Pago con efectivo/tarjeta. (7) Me lo llevo, gracias. Seven steps, all Spanish, no English fallback. Module 6 fluency.",
    examples: [
      { target: 'Buenos días. ¿Cuánto cuesta el kilo?', native: 'Good morning. How much is the kilo?' },
      { target: 'Está caro. ¿Me lo deja en cien?', native: "It's expensive. Will you let me have it for 100?" },
      { target: '¿Qué le debo? Me lo llevo, gracias.', native: "How much do I owe? I'll take it, thanks." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Spanish market phrase to its meaning',
      pairs: [
        { left: 'Buenos días, marchante', right: 'Good morning, vendor' },
        { left: '¿Qué le debo?', right: 'How much do I owe you?' },
        { left: 'Me lo llevo', right: "I'll take it" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "The vendor agrees on your counter-offer. What's the cleanest closing line?",
      question: 'Close the deal:',
      options: [
        { text: 'Bueno, me lo llevo. ¿Qué le debo?', correct: true },
        { text: 'Está caro.', correct: false },
        { text: 'No tengo dinero.', correct: false },
      ],
      explanation: "After agreement: accept ('Bueno'), commit ('Me lo llevo'), then confirm the total ('¿Qué le debo?'). Three short clauses, full close.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'll take it, thanks",
      correct: ['Me lo llevo, gracias', 'me lo llevo, gracias'],
    },
    {
      type: 'fill_blank',
      instruction: 'Open the market exchange',
      sentence: 'Buenos días, marchante. ¿_____ cuesta?',
      options: ['Cuánto', 'Cómo', 'Qué'],
      correct: 'Cuánto',
      context: "Asking the price after greeting.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'll take two, please'",
      words: ['Me', 'llevo', 'dos,', 'por', 'favor.'],
      correct: ['Me', 'llevo', 'dos,', 'por', 'favor.'],
      translation: "I'll take two, please",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How much do I owe you?',
      correct: ['¿Qué le debo?', 'Qué le debo?', '¿Qué le debo', 'Que le debo?', 'qué le debo?'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday morning at Mercado de Coyoacán. You're at a chile and mole stall. No Rwen this time — solo run.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenos días, marchante. ¿Cuánto cuesta el mole, por favor?', native: 'Good morning, vendor. How much is the mole, please?', correct: true, feedback: "Greeted with 'marchante' (warm Mexican market term), asked the price politely. Opening of the year." },
          { target: 'Quiero mole', native: 'I want mole', correct: false, feedback: "Greet first — 'Buenos días, marchante. ¿Cuánto cuesta el mole?'" },
          { target: 'Hello, how much?', native: '(in English)', correct: false, feedback: "Spanish — 'Buenos días, marchante. ¿Cuánto cuesta el mole?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Buenos días. El medio kilo son ciento ochenta pesos.',
        native: "Good morning. The half kilo is 180 pesos.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Está un poquito caro. ¿Me lo deja en ciento cincuenta?', native: "It's a bit expensive. Will you let me have it for 150?", correct: true, feedback: "Soft pushback ('un poquito caro') + specific counter. Mexican-market diplomacy." },
          { target: 'Bueno, me lo llevo', native: "Fine, I'll take it (no haggle)", correct: false, feedback: "One soft push back is expected — 'Está un poquito caro. ¿Me lo deja en ciento cincuenta?'" },
          { target: 'Está muy caro!', native: "It's very expensive! (too aggressive)", correct: false, feedback: "Soften it — 'Está un poquito caro' lands better than 'muy caro'. The vendor moves more." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Le hago en ciento sesenta. Última.',
        native: 'I\'ll do it for 160. Final.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bueno, me lo llevo. ¿Qué le debo? Pago con efectivo.', native: "Okay, I'll take it. How much do I owe? I'm paying cash.", correct: true, feedback: "Accepted ('Bueno') → committed ('Me lo llevo') → confirmed total ('¿Qué le debo?') → chose payment ('efectivo'). Four-clause close. Module 6 mastered." },
          { target: 'Está caro', native: "It's expensive (still pushing)", correct: false, feedback: "He gave you 'última' — accept the small win: 'Bueno, me lo llevo. ¿Qué le debo?'" },
          { target: 'Me lo llevo', native: "I'll take it (incomplete)", correct: false, feedback: "Add the total check + payment: 'Bueno, me lo llevo. ¿Qué le debo? Pago con efectivo.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Son ciento sesenta. Gracias, marchante.',
        native: 'That\'s 160. Thanks, friend.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gracias a usted. Hasta luego.', native: 'Thank you. See you later.', correct: true, feedback: "Returned the gracias formally ('a usted'), closed with 'hasta luego'. Full Mexican mercado exchange, top to bottom, in Spanish." },
          { target: 'Bye', native: '(in English)', correct: false, feedback: "Stay in Spanish — 'Gracias a usted. Hasta luego.'" },
          { target: 'Adiós', native: 'Goodbye (a bit final)', correct: false, feedback: "Adiós works but 'Hasta luego' is warmer for a vendor you might come back to." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "I watched the whole thing. You greeted with 'marchante', haggled with respect, confirmed the total, paid in efectivo, and closed with hasta luego — all in Spanish. Módulo 6 — terminado. You can navigate the Spanish-speaking world.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'll take it", correct: ['Me lo llevo', 'me lo llevo'] },
      { prompt: 'How much do I owe you?', correct: ['¿Qué le debo?', 'Qué le debo?', '¿Qué le debo', 'Que le debo?', 'qué le debo?'] },
    ],
  },

  mission: {
    title: "Your Module 6 Mission",
    task: "Run the seven-beat market exchange in your head next time you buy anything: greet → ask price → react → negotiate → agree → confirm money → thank. Even buying a coffee. Even a parking ticket. Make every transaction Spanish-shaped.",
    rwenSignoff: "Módulo 6 — completo. You can count, tell the time, handle dinero, and run a full mercado exchange. Módulo 7 — comida, bebida, y la sobremesa — viene después. Hasta mañana.",
  },

  phase8: {
    scenario: "Saturday morning solo run at Mercado de Coyoacán in Mexico City. You need to buy three things at three separate stalls — a kilo of tomatoes, a chunk of queso, and a small clay olla — running the full seven-beat exchange (greet → ask price → react → negotiate → agree → confirm money → thank) at each one, with no English fallback and no help from Rwen.",
    rwenRole: "Doña Lupita — Mercado de Coyoacán produce vendor in her 50s, sharp, fast, and proud; she opens 20% above her floor, expects 'marchante' or 'doña' as a greeting, drops the price only after one soft push, and watches whether you confirm the total ('¿Qué le debo?') before paying.",
    successCriteria: "User executes all seven beats in Spanish at one full stall — opens with 'Buenos días, marchante' or 'doña', asks '¿Cuánto cuesta?', reacts with 'Está caro' or 'un poquito caro', counters with '¿Me lo deja en X?' giving a peso number, closes with 'Bueno, me lo llevo', confirms total with '¿Qué le debo?', and thanks with 'Gracias a usted. Hasta luego.' — never falling back to English digits or English phrases.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
