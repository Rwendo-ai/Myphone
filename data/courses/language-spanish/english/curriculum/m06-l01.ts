import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numeros-1-10',
  module: 6,
  lesson: 1,
  title: 'Números 1–10 — Counting In',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish numbers reward you fast. One to ten is just memorisation — uno, dos, tres — and from sixteen onward they become Lego: dieciséis is literally 'ten-and-six' written as one word. Crack the first ten and the next forty fall like dominoes.",
    culturalNote: "Numbers run every transaction in the Spanish-speaking world — pesos at a Mexico City taquería, soles in Lima, the bill at a Buenos Aires parrilla. Throwing the digits in Spanish (not English) is the single fastest way to get treated as a cliente local rather than a tourist.",
  },

  chunks: [
    {
      id: 'uno_dos_tres',
      target: 'uno / dos / tres',
      native: 'one / two / three',
      literal: 'uno (1), dos (2), tres (3)',
      emoji: '1️⃣2️⃣3️⃣',
      phonetic: 'OO-noh / dohs / trehs',
      audioRef: null,
    },
    {
      id: 'cuatro_cinco',
      target: 'cuatro / cinco',
      native: 'four / five',
      literal: 'cuatro (4), cinco (5)',
      emoji: '4️⃣5️⃣',
      phonetic: 'KWAH-troh / SEEN-koh',
      audioRef: null,
    },
    {
      id: 'cuantos',
      target: '¿Cuántos? / ¿Cuántas?',
      native: 'How many? (m / f)',
      literal: 'How-many — masculine cuántos / feminine cuántas',
      emoji: '❓',
      phonetic: 'KWAHN-tohs / KWAHN-tahs',
      audioRef: null,
    },
  ],

  pattern: {
    name: '1–10: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez',
    explanation: "First ten are pure memory — no shortcuts. 'Uno' becomes 'un' before a masculine noun (un café, not uno café). 'Cuántos' agrees with the noun: ¿Cuántos tacos? (m) vs ¿Cuántas tortillas? (f).",
    examples: [
      { target: 'tres tacos', native: 'three tacos' },
      { target: 'cinco pesos', native: 'five pesos' },
      { target: '¿Cuántas cervezas?', native: 'How many beers? (f)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish number to its meaning',
      pairs: [
        { left: 'uno', right: 'one' },
        { left: 'tres', right: 'three' },
        { left: 'cinco', right: 'five' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Continue the count',
      sentence: 'uno, dos, tres, cuatro, _____.',
      options: ['cinco', 'seis', 'diez'],
      correct: 'cinco',
      context: 'Counting one to five.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'three',
      correct: ['tres', 'Tres'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to order one coffee at a Mexico City café. Which is correct?",
      question: 'One coffee, please:',
      options: [
        { text: 'Un café, por favor', correct: true },
        { text: 'Uno café, por favor', correct: false },
        { text: 'Una café, por favor', correct: false },
      ],
      explanation: "'Uno' shortens to 'un' before a masculine noun. Café is masculine — so un café, not uno café.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'How many tacos? (masculine)'",
      words: ['¿Cuántos', 'tacos?'],
      correct: ['¿Cuántos', 'tacos?'],
      translation: 'How many tacos?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How many? (asking about cervezas — feminine)',
      correct: ['¿Cuántas?', 'Cuántas?', 'cuántas?', '¿Cuántas', 'Cuantas?'],
    },
  ],

  rwenDialogue: {
    intro: "Lunchtime at a taquería in Mexico City. The taquero is at the plancha. Time to order.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Cuántos tacos, joven?',
        native: 'How many tacos, friend?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cuatro tacos, por favor.', native: 'Four tacos, please.', correct: true, feedback: "Clean — number + noun + por favor. He's already firing them." },
          { target: 'Cuatro', native: 'Four (number only)', correct: false, feedback: "Wrap it — 'Cuatro tacos, por favor.' A bare number lands cold." },
          { target: 'Tacos', native: 'Tacos (no number)', correct: false, feedback: "He asked how many — give a number: 'Cuatro tacos, por favor.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Cuatro tacos. Order placed in Spanish — that's day-one fluency at the plancha.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'five', correct: ['cinco', 'Cinco'] },
      { prompt: 'How many? (masculine)', correct: ['¿Cuántos?', 'Cuántos?', 'cuántos?', '¿Cuántos', 'Cuantos?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count five things around you in Spanish out loud — uno, dos, tres, cuatro, cinco. Point at each one. Numbers stick when fingers move.",
    rwenSignoff: "Numbers are the rails every conversation runs on. Hasta mañana.",
  },

  phase8: {
    scenario: "Lunchtime at a busy taquería in Roma Norte, Mexico City. The taquero is calling out orders fast and the line behind you is restless. You need to order between one and five tacos al pastor in Spanish, ask 'cuánto cuesta' for one taco, and keep up without dropping into English digits.",
    rwenRole: "Don Memo — taquero in his late 40s at the plancha, fast-handed and friendly but rushed at lunch peak; he'll only slow down for customers ordering in Spanish, and he expects 'un taco' / 'dos tacos' rather than 'one taco'.",
    successCriteria: "User produces uno through cinco correctly, drops 'uno' to 'un' before 'taco' (un taco al pastor, not uno taco), and uses '¿Cuántos?' or '¿Cuánto cuesta?' to ask back rather than pointing in silence.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
