import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-mercado',
  module: 7,
  lesson: 6,
  title: 'En el Mercado — Haggling at the Market',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A Mexican mercado, a Peruvian feria, a Bolivian tianguis — all a feast of fruit, herbs, fish on ice. And almost everywhere outside Spain, prices on produce are negotiable. '¿Cuánto cuesta?' (how much?) followed by '¿Me hace un descuento?' (any discount?) is the dance every local does.",
    culturalNote: "Haggling is normal in markets across Mexico, Central America, the Andes — but NOT in Spain or in supermarkets/chain stores anywhere. The right opener is friendly, never aggressive. A small chat, eye contact, then 'me deja en X?' (will you let me have it for X?) usually shaves 10-20% off the asking price.",
  },

  chunks: [
    {
      id: 'cuanto_cuesta',
      target: '¿Cuánto cuesta?',
      native: 'How much does it cost?',
      literal: 'How-much costs?',
      emoji: '💰',
      phonetic: 'KWAN-toh KWES-tah',
      audioRef: null,
    },
    {
      id: 'descuento',
      target: '¿Me hace un descuento?',
      native: 'Could you give me a discount?',
      literal: 'Me you-make a discount?',
      emoji: '🤝',
      phonetic: 'meh AH-seh oon des-KWEN-toh',
      audioRef: null,
    },
    {
      id: 'kilo',
      target: 'un kilo de...',
      native: 'a kilo of...',
      literal: 'a kilo of',
      emoji: '⚖️',
      phonetic: 'oon KEE-loh deh',
      audioRef: null,
    },
  ],

  pattern: {
    name: '¿Me lo deja en...? — the haggling sweetener',
    explanation: "The phrase locals use to lower a price isn't '¿descuento?' bluntly — it's '¿Me lo deja en X?' (will you let it go to me for X?). It's softer, more relational. The seller saves face, you get a price. Same grammar applies to feminine items ('¿Me la deja en...?').",
    examples: [
      { target: '¿Me lo deja en cien?', native: 'Will you let me have it for 100?' },
      { target: '¿Me la deja en veinte?', native: 'Will you let me have it (f.) for 20?' },
      { target: '¿Me hace precio?', native: 'Could you give me a price? (haggle invite)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the market phrase to its meaning',
      pairs: [
        { left: '¿Cuánto cuesta?', right: 'How much does it cost?' },
        { left: '¿Me hace un descuento?', right: 'Could you give me a discount?' },
        { left: 'un kilo de...', right: 'a kilo of...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask for a kilo of tomatoes',
      sentence: 'Quiero un _____ de tomates, por favor.',
      options: ['kilo', 'litro', 'metro'],
      correct: 'kilo',
      context: 'I want a kilo of tomatoes — produce sold by weight in Spanish-speaking markets.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How much does it cost?',
      correct: ['¿Cuánto cuesta?', 'Cuánto cuesta?', 'Cuanto cuesta?'],
    },
    {
      type: 'multiple_choice',
      instruction: "Where is haggling NOT culturally appropriate in the Spanish-speaking world?",
      question: 'Don\'t haggle in:',
      options: [
        { text: 'Spain (and chain supermarkets anywhere)', correct: true },
        { text: 'A Mexican mercado', correct: false },
        { text: 'A Peruvian feria', correct: false },
      ],
      explanation: "Spain has fixed prices in markets — haggling there marks you as rude. Mexican mercados, Andean ferias, Bolivian tianguis: haggling is expected and respected when done warmly.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'How much does the kilo cost?'",
      words: ['¿Cuánto', 'cuesta', 'el', 'kilo?'],
      correct: ['¿Cuánto', 'cuesta', 'el', 'kilo?'],
      translation: "How much does the kilo cost?",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'a kilo of tomatoes',
      correct: ['un kilo de tomates', 'un kilo de Tomates'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Mercado de la Merced in Mexico City. A vendor is arranging glossy red tomatoes on a wooden crate.",
    lines: [
      {
        speaker: 'npc',
        target: '¡Pásele, marchanta! Tomates frescos, traídos hoy.',
        native: 'Come over, my dear! Fresh tomatoes, brought in today.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas. ¿Cuánto cuesta el kilo? ¿Me hace un descuento si llevo dos kilos?', native: 'Hi. How much is the kilo? Could you give me a discount if I take two kilos?', correct: true, feedback: "Greeting, price check, volume sweetener — exactly the rhythm. The vendor smiles and starts negotiating." },
          { target: 'Dame', native: "Give me (curt)", correct: false, feedback: "Too curt for a mercado — open warmly: 'Buenas. ¿Cuánto cuesta el kilo?'" },
          { target: '¡Eso es mucho!', native: 'That\'s too much!', correct: false, feedback: "You haven't even asked the price yet. Open with '¿Cuánto cuesta el kilo?' — then negotiate." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Treinta el kilo, marchanta. Si lleva dos, se los dejo en cincuenta.',
        native: 'Thirty pesos a kilo, dear. If you take two, I\'ll let you have them for fifty.',
      },
      {
        speaker: 'rwen',
        rwenLine: "¿Me lo deja en...? — the relational haggle. You bought, the vendor smiled, both of you won.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much does it cost?', correct: ['¿Cuánto cuesta?', 'Cuánto cuesta?', 'Cuanto cuesta?'] },
      { prompt: 'a kilo of...', correct: ['un kilo de', 'un kilo de...'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look up the name of three vegetables in Spanish today (los tomates, las cebollas, los pimientos). Imagine yourself at a mercado asking '¿Cuánto cuesta el kilo de cebollas?' Practise the phrase out loud.",
    rwenSignoff: "Hasta mañana — el asado, la sobremesa, las arepas.",
  },

  phase8: {
    scenario: "It's Saturday morning at the Mercado de la Merced in Mexico City. The aisles are packed, vendors are shouting their pasele, and you're shopping for tomatoes, onions, and chilies for a salsa. Prices aren't posted on most stalls — you'll need to ask. And you'll need to negotiate if you want the local rate, not the gringo rate.",
    rwenRole: "Doña Marta — produce vendor, late 50s, fast-talking and funny; she enjoys a respectful haggle and gives a real discount to anyone who opens with 'buenas' rather than barking demands.",
    successCriteria: "User opens with a greeting (Buenas / Buenos días), asks '¿Cuánto cuesta el kilo?' (NOT pointing silently), uses '¿Me hace un descuento?' or '¿Me lo deja en X?' to invite a discount when buying volume, and stays warm — no 'eso es mucho' aggressive haggling.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
