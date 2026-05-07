import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-dinero',
  module: 6,
  lesson: 6,
  title: 'Dinero — Money',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Money in Spanish is currency-agnostic — pesos in Mexico and Argentina, dólares almost everywhere as backup, soles in Peru, euros in Spain. The grammar is the same: 'tengo' (I have), 'cuesta' (it costs), 'pagar' (to pay). One critical visual quirk: Spanish-language countries write decimals with a comma (10,50) and thousands with a dot (1.000) — opposite of English.",
    culturalNote: "In Mexico City a taquería bill is in pesos; in Buenos Aires a cab fare is also in pesos but the rate is wildly different; in Madrid you're paying in euros. Whichever country you're in, 'cuánto cuesta' opens the conversation. Knowing how to handle money — and read 10,50 as ten-fifty rather than ten-thousand-fifty — keeps you safe at every till.",
  },

  chunks: [
    {
      id: 'cuanto_cuesta',
      target: '¿Cuánto cuesta?',
      native: 'How much does it cost?',
      literal: 'How-much costs?',
      emoji: '💰',
      phonetic: 'KWAHN-toh KWEHS-tah',
      audioRef: null,
    },
    {
      id: 'tengo_pesos',
      target: 'Tengo / No tengo',
      native: 'I have / I don\'t have',
      literal: 'I-have / Not I-have — possession verb tener',
      emoji: '💵',
      phonetic: 'TEHN-goh / noh TEHN-goh',
      audioRef: null,
    },
    {
      id: 'pagar_efectivo_tarjeta',
      target: 'efectivo / tarjeta',
      native: 'cash / card',
      literal: 'efectivo (cash), tarjeta (card)',
      emoji: '💳',
      phonetic: 'eh-fehk-TEE-voh / tar-HEH-tah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Decimal commas vs English decimal points: 10,50 = ten-fifty',
    explanation: "Spanish-language countries flip the punctuation: comma is the decimal mark, dot separates thousands. '10,50 pesos' is ten pesos fifty. '1.000 pesos' is one thousand pesos (not 1.0). Reading prices wrong is a tourist tax — train your eye early. For payment: '¿Efectivo o tarjeta?' is the standard till question.",
    examples: [
      { target: '10,50', native: 'ten and fifty cents (NOT ten thousand fifty)' },
      { target: '1.000 pesos', native: 'one thousand pesos (the dot is thousands)' },
      { target: '¿Efectivo o tarjeta?', native: 'Cash or card?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the money phrase to its meaning',
      pairs: [
        { left: '¿Cuánto cuesta?', right: 'How much does it cost?' },
        { left: 'efectivo', right: 'cash' },
        { left: 'tarjeta', right: 'card' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Say 'I don't have cash'",
      sentence: 'No tengo _____.',
      options: ['efectivo', 'tarjeta', 'dinero'],
      correct: 'efectivo',
      context: "You only have a card, no cash.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How much does it cost?',
      correct: ['¿Cuánto cuesta?', 'Cuánto cuesta?', '¿Cuánto cuesta', 'Cuanto cuesta?', 'cuánto cuesta?'],
    },
    {
      type: 'multiple_choice',
      instruction: "A price tag reads '12,75'. How much is that?",
      question: 'The price is:',
      options: [
        { text: 'twelve and seventy-five cents', correct: true },
        { text: 'twelve thousand seventy-five', correct: false },
        { text: 'twelve point seventy-five thousand', correct: false },
      ],
      explanation: "In Spanish-language countries, comma = decimal. 12,75 is twelve-and-seventy-five-cents. The dot is thousands: 12.000 = twelve thousand.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I will pay with card'",
      words: ['Pago', 'con', 'tarjeta.'],
      correct: ['Pago', 'con', 'tarjeta.'],
      translation: 'I pay with card',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I don't have cash",
      correct: ['No tengo efectivo', 'no tengo efectivo'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the till in a Mexico City convenience store. The cashier reads out the total.",
    lines: [
      {
        speaker: 'npc',
        target: 'Son ciento veinte con cincuenta. ¿Efectivo o tarjeta?',
        native: "It's 120,50. Cash or card?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Con tarjeta, por favor.', native: 'By card, please.', correct: true, feedback: "Direct, polite, payment chosen — the cashier swipes." },
          { target: 'No tengo dinero', native: "I don't have money", correct: false, feedback: "She asked HOW you'll pay, not whether — pick: 'Con tarjeta' or 'En efectivo'." },
          { target: 'Card', native: '(in English)', correct: false, feedback: "Spanish — 'Con tarjeta, por favor.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ciento veinte con cincuenta — 120 pesos 50 centavos. Read the comma right, paid the bill in Spanish.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much does it cost?', correct: ['¿Cuánto cuesta?', 'Cuánto cuesta?', '¿Cuánto cuesta', 'Cuanto cuesta?', 'cuánto cuesta?'] },
      { prompt: 'card', correct: ['tarjeta', 'Tarjeta'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you see a price, read it Spanish-style: comma is decimal, dot is thousands. Then ask in your head: '¿Cuánto cuesta?' and answer the cashier's mental '¿Efectivo o tarjeta?' in Spanish.",
    rwenSignoff: "El dinero habla todos los idiomas — money speaks every language. Hasta mañana.",
  },

  phase8: {
    scenario: "Checking out at an OXXO convenience store in Mexico City after grabbing cervezas, agua, and a sandwich. The cashier rings up a total around 150 pesos and asks '¿Efectivo o tarjeta?'. You need to ask the total back in Spanish, choose your payment method, and confirm any change with the right decimal-comma reading.",
    rwenRole: "Lupita — OXXO cashier in her mid-20s, fast and polite; she'll quote the total verbally with 'con' for the cents (e.g. 'ciento cincuenta con setenta'), expects you to choose 'efectivo' or 'tarjeta' in Spanish, and won't repeat in English even if you stall.",
    successCriteria: "User uses '¿Cuánto cuesta?' or '¿Cuánto es?' to confirm the total, reads or repeats back a price with a decimal comma correctly (e.g. understanding 'ciento cincuenta con setenta' = 150,70), and picks 'efectivo' or 'tarjeta' in Spanish — no English digits, no English 'cash/card'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
