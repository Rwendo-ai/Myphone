import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-numeros-grandes',
  module: 6,
  lesson: 8,
  title: 'Números grandes — Hundreds & Thousands',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "From cien (100) to mil (1.000) the system stays compositional — but with two quirks. First: cien is exactly 100, but 101+ becomes 'ciento' (ciento uno = 101). Second: hundreds 200-900 agree with gender (doscientos pesos but doscientas tortillas). Mil never changes — un mil, dos mil, mil quinientos. Easy at scale.",
    culturalNote: "In Buenos Aires today an asado for four costs maybe doce mil pesos; in Mexico City a decent dinner for two might be quinientos. Argentine inflation makes large numbers everyday currency — 'mil' rolls off the tongue like 'ten' does in English. Knowing 100-9.999 unlocks rents, hotel quotes, and any real bill.",
  },

  chunks: [
    {
      id: 'cien_ciento',
      target: 'cien / ciento uno',
      native: 'one hundred / one hundred one',
      literal: 'cien is exactly 100; ciento before any other number',
      emoji: '💯',
      phonetic: 'syehn / SYEHN-toh OO-noh',
      audioRef: null,
    },
    {
      id: 'doscientos',
      target: 'doscientos / doscientas',
      native: 'two hundred (m / f)',
      literal: 'two-hundreds masculine / feminine — agrees with the noun',
      emoji: '2️⃣0️⃣0️⃣',
      phonetic: 'dohs-SYEHN-tohs / dohs-SYEHN-tahs',
      audioRef: null,
    },
    {
      id: 'mil',
      target: 'mil',
      native: 'one thousand',
      literal: 'mil — invariable, no plural for thousands counted (dos mil, tres mil)',
      emoji: '🔢',
      phonetic: 'meel',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hundreds agree with gender (200-900); cien vs ciento; mil is invariable',
    explanation: "(1) cien = exactly 100. From 101+ use 'ciento' (ciento cinco = 105). (2) From 200-900, hundreds agree: doscientos pesos (m), doscientas casas (f). (3) Mil never pluralises when counted: dos mil, tres mil, diez mil. Spanish writes thousands with a dot: 1.500 = mil quinientos.",
    examples: [
      { target: 'cien pesos', native: '100 pesos exactly' },
      { target: 'ciento cincuenta', native: '150 (ciento, not cien)' },
      { target: 'dos mil quinientas pesetas', native: '2.500 pesetas (feminine f → quinientas)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Spanish number to its English value',
      pairs: [
        { left: 'cien', right: '100' },
        { left: 'quinientos', right: '500' },
        { left: 'mil', right: '1.000' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose cien or ciento for 105',
      sentence: '_____ cinco',
      options: ['Ciento', 'Cien', 'Cientos'],
      correct: 'Ciento',
      context: "Cien is only 100 exactly; from 101 onwards use ciento.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'one thousand',
      correct: ['mil', 'Mil'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say '200 tortillas' (tortilla is feminine)?",
      question: 'Two hundred tortillas:',
      options: [
        { text: 'doscientas tortillas', correct: true },
        { text: 'doscientos tortillas', correct: false },
        { text: 'dos cien tortillas', correct: false },
      ],
      explanation: "From 200-900 the hundred agrees with the noun's gender. Tortilla is feminine → doscientas. For pesos (m): doscientos pesos.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'two thousand five hundred pesos'",
      words: ['dos', 'mil', 'quinientos', 'pesos'],
      correct: ['dos', 'mil', 'quinientos', 'pesos'],
      translation: 'two thousand five hundred pesos',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: '500 (the word)',
      correct: ['quinientos', 'Quinientos'],
    },
  ],

  rwenDialogue: {
    intro: "Hotel checkout in Mexico City. The receptionist totals up your stay.",
    lines: [
      {
        speaker: 'npc',
        target: 'El total son tres mil quinientos pesos.',
        native: 'The total is three thousand five hundred pesos.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '¿Tres mil quinientos? Perfecto, con tarjeta.', native: 'Three thousand five hundred? Perfect, by card.', correct: true, feedback: "Repeated the figure back in Spanish to confirm — that's the move at any checkout. No surprises." },
          { target: '¿Cuánto?', native: 'How much? (didn\'t catch it)', correct: false, feedback: "Confirm what you heard — '¿Tres mil quinientos?' — to be sure of the number." },
          { target: '3500?', native: '(in English digits)', correct: false, feedback: "Stay in Spanish — '¿Tres mil quinientos?'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tres mil quinientos — read back, paid, and out the door. Big numbers in Spanish, no slip.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: '100 (exactly)', correct: ['cien', 'Cien'] },
      { prompt: '1.000', correct: ['mil', 'Mil'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say in Spanish: 100, 150, 200, 500, 1.000, 2.500. Say your monthly rent or a recent big bill in pesos out loud — even if you don't live in pesos, convert and say it. Big numbers need to live in your mouth.",
    rwenSignoff: "Mil pasos cada uno empieza con uno — every thousand steps starts with one. Hasta mañana.",
  },

  phase8: {
    scenario: "Hotel checkout in Mexico City after a 3-night stay. The recepcionista totals the bill in the high thousands of pesos (room + breakfast + minibar) and you need to confirm the figure back in Spanish, ask if breakfast is included, and pay either in efectivo or tarjeta — all in numbers from 100 up.",
    rwenRole: "Carmen — Mexico City hotel receptionist in her 40s, professional and patient; she quotes totals using full Spanish ('tres mil quinientos cincuenta'), expects guests to repeat the number back to confirm, and won't switch to English digits even if you stall.",
    successCriteria: "User repeats the total back correctly in Spanish using 'mil + hundreds' or 'cien/ciento + tens', uses 'doscientos/quinientos pesos' with masculine agreement, asks about el desayuno being incluido, and chooses 'efectivo' or 'tarjeta' — no English digits at any point.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
