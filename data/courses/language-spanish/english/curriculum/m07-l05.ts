import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-restaurante',
  module: 7,
  lesson: 5,
  title: 'En el Restaurante — Ordering & The Bill',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Restaurant Spanish has a rhythm: greet, ask for the menu, ask for a recommendation, order, eat, ask for the bill. Master the six phrases for these six beats and you can eat anywhere from a Lima cevichería to a Madrid taberna without switching to English.",
    culturalNote: "In Spain you say 'la cuenta' for the bill. In Mexico it's also 'la cuenta', but you'll often hear 'la nota'. Tipping (la propina) is 10% in Mexico, optional but expected in Argentina (around 10%), included in the price in Spain (and often refused if you try to add more). Local norms differ wildly.",
  },

  chunks: [
    {
      id: 'la_carta',
      target: 'la carta / el menú',
      native: 'the menu',
      literal: 'la carta — printed menu (preferred in ES); el menú can mean set lunch in ES',
      emoji: '📋',
      phonetic: 'lah KAR-tah',
      audioRef: null,
    },
    {
      id: 'recomienda',
      target: '¿Qué me recomienda?',
      native: 'What do you recommend?',
      literal: 'What me you-recommend?',
      emoji: '⭐',
      phonetic: 'keh meh reh-koh-MYEN-dah',
      audioRef: null,
    },
    {
      id: 'la_cuenta',
      target: 'La cuenta, por favor',
      native: 'The bill, please',
      literal: 'The bill, by favor',
      emoji: '🧾',
      phonetic: 'lah KWEN-tah por fah-BOR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Me trae / Me pone — polite restaurant requests',
    explanation: "Two restaurant verbs do most of the work: 'Me trae...' (could you bring me) and 'Me pone...' (could you set/put for me — common in Spain at counters and bars). Both are softer than 'quiero' (I want) and instantly mark you as someone who knows how to order.",
    examples: [
      { target: '¿Me trae la carta?', native: 'Could you bring me the menu?' },
      { target: 'Me pone una caña, por favor', native: "I'll have a small beer, please (Spain bar)" },
      { target: '¿Me trae la cuenta?', native: 'Could you bring the bill?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the restaurant phrase to its meaning',
      pairs: [
        { left: 'la carta', right: 'the menu' },
        { left: '¿Qué me recomienda?', right: 'What do you recommend?' },
        { left: 'La cuenta, por favor', right: 'The bill, please' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Politely ask for the menu',
      sentence: '¿Me _____ la carta, por favor?',
      options: ['trae', 'doy', 'tengo'],
      correct: 'trae',
      context: 'Could you bring me the menu, please? (me trae = polite request)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'The bill, please',
      correct: ['La cuenta, por favor', 'la cuenta, por favor', 'La cuenta por favor'],
    },
    {
      type: 'multiple_choice',
      instruction: "You sit down at a Madrid taberna. What do you ask for first?",
      question: 'First request at a Spanish restaurant:',
      options: [
        { text: '¿Me trae la carta, por favor?', correct: true },
        { text: 'La cuenta, por favor', correct: false },
        { text: 'Estoy lleno', correct: false },
      ],
      explanation: "Always ask for the carta first — la cuenta is for when you're done. Asking 'la cuenta' on arrival means 'I'm leaving without ordering'.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'What do you recommend, please?'",
      words: ['¿Qué', 'me', 'recomienda,', 'por', 'favor?'],
      correct: ['¿Qué', 'me', 'recomienda,', 'por', 'favor?'],
      translation: "What do you recommend, please?",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'What do you recommend?',
      correct: ['¿Qué me recomienda?', 'Qué me recomienda?', 'Que me recomienda?'],
    },
  ],

  rwenDialogue: {
    intro: "You've sat down at a small taberna in La Latina, Madrid. The camarero (waiter) approaches.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenas tardes. ¿Qué le pongo?',
        native: 'Good afternoon. What can I get you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes. ¿Me trae la carta, por favor? ¿Y qué me recomienda hoy?', native: "Good afternoon. Could you bring me the menu, please? And what do you recommend today?", correct: true, feedback: "Greeting, polite request, recommendation invite — three beats, perfectly Spanish. The camarero already likes you." },
          { target: 'Quiero comida', native: 'I want food', correct: false, feedback: "Too direct — start with the carta: '¿Me trae la carta, por favor? ¿Qué me recomienda?'" },
          { target: 'La cuenta', native: 'The bill', correct: false, feedback: "You haven't ordered yet — la cuenta is for the end. Start with '¿Me trae la carta, por favor?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Le traigo la carta. Hoy le recomiendo el cocido madrileño — está espectacular.',
        native: "I'll bring the menu. Today I'd recommend the cocido madrileño — it's spectacular.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Carta, recomendación, cuenta. Three phrases — one full meal navigated end to end.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The bill, please', correct: ['La cuenta, por favor', 'la cuenta, por favor', 'La cuenta por favor'] },
      { prompt: 'What do you recommend?', correct: ['¿Qué me recomienda?', 'Qué me recomienda?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you eat out anywhere, mentally rehearse the six restaurant beats in Spanish: saludo → carta → recomendación → pedido → comida → cuenta. The structure is the language.",
    rwenSignoff: "Hasta mañana — al mercado.",
  },

  phase8: {
    scenario: "It's Sunday lunchtime at a small taberna in La Latina, Madrid. The Sunday rastro market crowd is filing out and the tables are filling up. You've snagged a corner two-top under a hanging jamón leg. The camarero, slightly hassled but cheerful, swings by — your turn.",
    rwenRole: "Camarero Pepe — career Madrid waiter, late 40s, runs his section like a clock; he respects guests who order with the right rhythm and hates being summoned with finger-snaps.",
    successCriteria: "User opens with 'Buenas tardes' or similar, asks for the menu using 'Me trae la carta' or '¿Tiene la carta?' (NOT just 'menú' barked), invites a recommendation with '¿Qué me recomienda?', orders with 'me pone' or 'me trae' rather than only 'quiero', and closes with 'la cuenta, por favor' at the end.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
