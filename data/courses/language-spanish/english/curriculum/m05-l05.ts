import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-abuelo-abuela',
  module: 5,
  lesson: 5,
  title: 'Abuelo y Abuela — Grandfather & Grandmother',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Abuelo. Abuela. Or — much more commonly at the table — abuelito, abuelita. Spanish loves the diminutive -ito/-ita and your grandparents will hear it from you a thousand times.",
    culturalNote: "In most Latin American families the abuelos sit at the head of the Sunday table and their plate is served first. Saying 'abuelita' to your grandmother — even if she's the matriarch of a forty-person clan — is a sign of warmth, not infantilising.",
  },

  chunks: [
    {
      id: 'abuelo',
      target: 'el abuelo',
      native: 'grandfather',
      literal: 'the grandfather (masculine -o)',
      emoji: '👴',
      phonetic: 'el ah-BWEH-loh',
      audioRef: null,
    },
    {
      id: 'abuela',
      target: 'la abuela',
      native: 'grandmother',
      literal: 'the grandmother (feminine -a)',
      emoji: '👵',
      phonetic: 'lah ah-BWEH-lah',
      audioRef: null,
    },
    {
      id: 'abuelita',
      target: 'abuelita / abuelito',
      native: 'grandma / grandpa (affectionate)',
      literal: 'little grandmother / little grandfather (-ito/-ita diminutive)',
      emoji: '🥰',
      phonetic: 'ah-bweh-LEE-tah / ah-bweh-LEE-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The -ito / -ita affectionate diminutive',
    explanation: "Adding -ito (masculine) or -ita (feminine) to a noun makes it warmer, smaller, or more affectionate. Abuelo → abuelito (grandpa). Hija → hijita (sweet daughter). Mama → mamita. It's not just for small things — it's the warmth marker of Spanish.",
    examples: [
      { target: 'abuelo → abuelito', native: 'grandfather → grandpa (warm)' },
      { target: 'mamá → mamita', native: 'mother → mum (warm)' },
      { target: 'hija → hijita', native: 'daughter → sweet daughter' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish word to its meaning',
      pairs: [
        { left: 'el abuelo', right: 'grandfather' },
        { left: 'la abuela', right: 'grandmother' },
        { left: 'abuelita', right: 'grandma (affectionate)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the affectionate form of 'mother'",
      sentence: 'Te quiero, _____. (Said to your mum)',
      options: ['mamita', 'madrita', 'mamota'],
      correct: 'mamita',
      context: 'Use the -ita diminutive of "mamá".',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my grandmother',
      correct: ['mi abuela', 'Mi abuela'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does adding -ito or -ita to a family word do?",
      question: 'The -ito / -ita ending:',
      options: [
        { text: 'Adds warmth and affection', correct: true },
        { text: 'Marks the person as literally small or young', correct: false },
        { text: 'Makes the word formal and respectful', correct: false },
      ],
      explanation: "It's an affection marker. Calling a 78-year-old 'abuelita' isn't saying she's small — it's saying she's loved.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My grandparents live in Mexico City"',
      words: ['Mis', 'abuelos', 'viven', 'en', 'la', 'Ciudad', 'de', 'México.'],
      correct: ['Mis', 'abuelos', 'viven', 'en', 'la', 'Ciudad', 'de', 'México.'],
      translation: 'My grandparents live in Mexico City',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my grandfather',
      correct: ['mi abuelo', 'Mi abuelo'],
    },
  ],

  rwenDialogue: {
    intro: "After almuerzo, Rwen takes you to the living room where his abuela María is reading. You meet the matriarch.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mijo, ven, siéntate aquí. ¿Cómo te llamas?',
        native: 'Son, come, sit here. What is your name?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes, abuelita. Me llamo Sam. Mucho gusto.', native: 'Good afternoon, Grandma. My name is Sam. Pleased to meet you.', correct: true, feedback: "Using 'abuelita' immediately — that's how she stops being a stranger and starts being family." },
          { target: 'Hola María', native: 'Hi María', correct: false, feedback: "Don't first-name her — use the family title. 'Buenas tardes, abuelita. Me llamo Sam.'" },
          { target: 'Hola abuela', native: 'Hi grandmother (cold)', correct: false, feedback: "Warmer — 'abuelita' beats 'abuela' in this moment. 'Buenas tardes, abuelita. Me llamo Sam.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Le dijiste 'abuelita' en su propio idioma. Ya eres su nieto adoptivo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'grandmother', correct: ['abuela', 'la abuela'] },
      { prompt: 'grandpa (affectionate)', correct: ['abuelito'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If your grandparents are alive, say 'abuelito' and 'abuelita' out loud about them. If they aren't, say it about a great-aunt or any older relative who carries that warmth for you. The diminutive is a love word.",
    rwenSignoff: "Los abuelos son la raíz. Hasta luego.",
  },

  phase8: {
    scenario: "It's late afternoon Sunday. Abuela María — Rwen's grandmother, 81, the head of the family — calls you over to her armchair after almuerzo. She wants to hear about your own abuelos: who they were, where they lived, whether you remember them. This is not small talk — she's deciding whether you belong at this table.",
    rwenRole: "Abuela María — Rwen's grandmother, ~81, the family matriarch, sharp-eyed; she's lived through enough that she notices instantly whether you use 'abuelita' (warmth) or 'abuela' (distance).",
    successCriteria: "User uses the diminutive 'abuelito' / 'abuelita' (NOT only the cooler 'abuelo' / 'abuela'), correctly genders them, and produces at least two sentences about their grandparents — name, place, or memory — rather than one-word answers.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
