import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numeros-11-30',
  module: 6,
  lesson: 2,
  title: 'Números 11–30 — The Compositional Trick',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Eleven to fifteen are still individual words — once, doce, trece, catorce, quince. But from sixteen onwards Spanish gets compositional: dieciséis is just 'diez y seis' (ten and six) glued into one word. Same with veintiuno (veinte y uno → 21). Crack the rule and 16-29 fall instantly.",
    culturalNote: "In Mexico, Argentina, and Spain a 'cumpleaños de quince' (quinceañera) is a huge milestone for girls. Numbers carry cultural weight — 15 isn't just a digit, it's a coming-of-age. Knowing the teen and twenty range matters for ages, dates, and pesos at a market.",
  },

  chunks: [
    {
      id: 'once_doce_trece',
      target: 'once / doce / trece',
      native: 'eleven / twelve / thirteen',
      literal: 'once (11), doce (12), trece (13) — fully irregular',
      emoji: '1️⃣2️⃣3️⃣',
      phonetic: 'OHN-seh / DOH-seh / TREH-seh',
      audioRef: null,
    },
    {
      id: 'dieciseis_diecisiete',
      target: 'dieciséis / diecisiete',
      native: 'sixteen / seventeen',
      literal: 'diez-y-seis (10+6), diez-y-siete (10+7) — written as one word',
      emoji: '🔟➕',
      phonetic: 'dyeh-see-SEHS / dyeh-see-SYEH-teh',
      audioRef: null,
    },
    {
      id: 'veintiuno_treinta',
      target: 'veintiuno / treinta',
      native: 'twenty-one / thirty',
      literal: 'veinte-y-uno glued (21), treinta (30)',
      emoji: '2️⃣1️⃣3️⃣0️⃣',
      phonetic: 'vehn-tee-OO-noh / TREHN-tah',
      audioRef: null,
    },
  ],

  pattern: {
    name: '16+ are compositional: ten/twenty + y + digit, written as one word',
    explanation: "11–15 you memorise (once, doce, trece, catorce, quince). From 16 the pattern kicks in: dieciséis (10+6), diecisiete (10+7), dieciocho, diecinueve. The 20s glue too: veintiuno (20+1), veintidós, veintitrés. From 31 onwards the 'y' returns separated: treinta y uno (31).",
    examples: [
      { target: 'dieciséis', native: 'sixteen (10 + 6)' },
      { target: 'veintidós', native: 'twenty-two (20 + 2)' },
      { target: 'treinta y uno', native: 'thirty-one (30 and 1, separated)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Spanish number to its English value',
      pairs: [
        { left: 'once', right: 'eleven' },
        { left: 'quince', right: 'fifteen' },
        { left: 'veinte', right: 'twenty' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete sixteen using the compositional rule',
      sentence: 'dieci_____',
      options: ['séis', 'cinco', 'siete'],
      correct: 'séis',
      context: 'Sixteen = ten + six.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'twelve',
      correct: ['doce', 'Doce'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you write twenty-two?",
      question: 'Twenty-two:',
      options: [
        { text: 'veintidós', correct: true },
        { text: 'veinte y dos', correct: false },
        { text: 'veintedos', correct: false },
      ],
      explanation: "21–29 are glued into one word with an accent: veintiuno, veintidós, veintitrés. From 31 they separate: treinta y uno.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am twenty-five years old'",
      words: ['Tengo', 'veinticinco', 'años.'],
      correct: ['Tengo', 'veinticinco', 'años.'],
      translation: 'I am twenty-five years old',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'thirty-one',
      correct: ['treinta y uno', 'Treinta y uno'],
    },
  ],

  rwenDialogue: {
    intro: "At a feria in Buenos Aires. A vendor at a fruit stall is quoting prices in pesos. You need to keep up.",
    lines: [
      {
        speaker: 'npc',
        target: 'El kilo de manzanas, veintidós pesos.',
        native: 'A kilo of apples, twenty-two pesos.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '¿Veintidós? Dame medio kilo, por favor.', native: 'Twenty-two? Give me half a kilo, please.', correct: true, feedback: "You repeated the price back in Spanish and pivoted into the order. Pure feria flow." },
          { target: '¿Cuánto?', native: 'How much? (asking again)', correct: false, feedback: "You heard him — confirm the number: '¿Veintidós?' Then order." },
          { target: 'Twenty-two pesos?', native: '(repeating in English)', correct: false, feedback: "Stay in Spanish — '¿Veintidós pesos?' He stops switching to English the moment you do." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Veintidós — said it back, sealed the deal. The teen-and-twenty rule just earned its keep.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'sixteen', correct: ['dieciséis', 'Dieciséis', 'dieciseis'] },
      { prompt: 'twenty-two', correct: ['veintidós', 'Veintidós', 'veintidos'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count from 11 to 30 in Spanish out loud right now. Slow on dieciséis, diecisiete, dieciocho — feel the diez-y-X glue. Then say your age in Spanish: 'Tengo ___ años.'",
    rwenSignoff: "From eleven to thirty, the rule is yours. Ages, prices, dates — all unlocked. Hasta mañana.",
  },

  phase8: {
    scenario: "Saturday morning at the Feria de Mataderos in Buenos Aires. A fruit vendor is calling kilo prices between 11 and 29 pesos for different varieties — manzanas, peras, ciruelas — and you need to confirm at least two prices back in Spanish, ask the price of a third using '¿Cuánto?', and order half a kilo of one without falling back to English numbers.",
    rwenRole: "Doña Marta — Buenos Aires fruit vendor in her late 50s, warm but quick; she rattles off prices using full compositional numbers (dieciocho, veintidós, veintinueve) and gently teases customers who freeze on dieciséis.",
    successCriteria: "User repeats at least two quoted prices back correctly in Spanish (using the dieci-/veinti- glued forms, not 'diez y seis'), asks '¿Cuánto cuesta el kilo?' for a third item, and uses 'medio kilo' or 'un kilo' to commit — no English digits.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
