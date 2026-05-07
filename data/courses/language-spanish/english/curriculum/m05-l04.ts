import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-tio-tia',
  module: 5,
  lesson: 4,
  title: 'Tío y Tía — Uncle & Aunt',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Tío. Tía. Two short words that come up at every family gathering — and unlike English, Spanish doesn't bother distinguishing your mother's brother from your father's brother. Both are simply tío.",
    culturalNote: "Latin American children call all kinds of adults 'tío' and 'tía' — close family friends, parents' friends, even much older neighbours. The word marks affectionate respect more than blood relationship. A child saying 'Tío Carlos' to a non-relative is signalling family-level closeness.",
  },

  chunks: [
    {
      id: 'tio',
      target: 'el tío',
      native: 'uncle',
      literal: 'the uncle (masculine -o)',
      emoji: '👨',
      phonetic: 'el TEE-oh',
      audioRef: null,
    },
    {
      id: 'tia',
      target: 'la tía',
      native: 'aunt',
      literal: 'the aunt (feminine -a)',
      emoji: '👩',
      phonetic: 'lah TEE-ah',
      audioRef: null,
    },
    {
      id: 'tios',
      target: 'mis tíos',
      native: 'my aunts and uncles',
      literal: 'my uncles (mixed-group masculine plural)',
      emoji: '👨‍👩',
      phonetic: 'mees TEE-ohs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Spanish kinship is symmetric (no maternal/paternal split)',
    explanation: "English distinguishes maternal and paternal relatives only awkwardly ('my mom's brother'). Spanish doesn't bother — both your mother's brother and father's brother are simply tío. Same for tía, primo/prima, abuelo/abuela. One word, both sides.",
    examples: [
      { target: 'mi tío Carlos (madre side)', native: 'my uncle Carlos (on mother\'s side)' },
      { target: 'mi tío Roberto (padre side)', native: 'my uncle Roberto (on father\'s side)' },
      { target: 'mis tíos', native: 'my aunts and uncles (both sides, both genders)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'el tío', right: 'uncle' },
        { left: 'la tía', right: 'aunt' },
        { left: 'mis tíos', right: 'my aunts and uncles' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my aunt Lucía'",
      sentence: 'Mi _____ Lucía vive en Buenos Aires.',
      options: ['tía', 'tío', 'tíos'],
      correct: 'tía',
      context: 'Lucía is a woman — pick the feminine.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my uncle',
      correct: ['mi tío', 'Mi tío'],
    },
    {
      type: 'multiple_choice',
      instruction: "Spanish uses one word for both your mother's brother and your father's brother. Why?",
      question: 'Why one word for both?',
      options: [
        { text: 'Spanish kinship is symmetric — maternal/paternal split is not encoded in the words', correct: true },
        { text: 'It is a recent simplification of older Spanish', correct: false },
        { text: 'Spanish has separate words but only in formal speech', correct: false },
      ],
      explanation: "Spanish kinship treats both sides of the family as equivalent. If you need to clarify, you'd say 'mi tío por parte de mi madre' (my uncle on my mother's side) — but it's rarely needed.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have many aunts and uncles"',
      words: ['Tengo', 'muchos', 'tíos.'],
      correct: ['Tengo', 'muchos', 'tíos.'],
      translation: 'I have many aunts and uncles',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my aunt',
      correct: ['mi tía', 'Mi tía'],
    },
  ],

  rwenDialogue: {
    intro: "More family arrives mid-almuerzo — Rwen's tío Roberto and tía Lucía from out of town.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mira, vinieron mis tíos — éste es mi tío Roberto, y ésta es mi tía Lucía.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mucho gusto, tío Roberto. Mucho gusto, tía Lucía.', native: 'Pleased to meet you, Uncle Roberto. Pleased to meet you, Aunt Lucía.', correct: true, feedback: "Using 'tío' and 'tía' as titles before the names — exactly how Latin American families do it. They smile." },
          { target: 'Hola Roberto. Hola Lucía.', native: 'Hi Roberto. Hi Lucía.', correct: false, feedback: "Add the family titles — 'Mucho gusto, tío Roberto. Mucho gusto, tía Lucía.' Names alone feel too casual for first meeting with elders." },
          { target: 'Hola tíos', native: 'Hi uncles', correct: false, feedback: "Address each by name — 'Mucho gusto, tío Roberto. Mucho gusto, tía Lucía.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mi tía ya quiere hacerte preguntas. Bienvenido oficialmente.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'uncle', correct: ['tío', 'el tío'] },
      { prompt: 'aunt', correct: ['tía', 'la tía'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one of your own aunts or uncles. Say 'tío [name]' or 'tía [name]' out loud. Notice how the title before the name sounds — that's the Spanish way of greeting them at any family table.",
    rwenSignoff: "Los tíos son la familia extendida. Hasta luego.",
  },

  phase8: {
    scenario: "It's an Argentine asado at Rwen's tío Roberto's house in San Telmo, Buenos Aires. The fire's been going for three hours and the meat is finally landing on the table. Tío Roberto pours you a glass of Malbec and asks about your own tíos — '¿tenés tíos cerca?' (note the Argentine 'tenés' instead of 'tienes'). You need to answer with at least two tíos and where they live.",
    rwenRole: "Tío Roberto — Rwen's uncle in Buenos Aires, ~60, lifelong asador with strong opinions about Boca Juniors; he's pouring wine and waiting for a real answer, not a one-word reply.",
    successCriteria: "User uses 'tío' for male relatives and 'tía' for female (NOT swapped), uses 'mis tíos' as a mixed-group plural without trying to over-specify maternal vs paternal, and gives at least two relatives by name with one extra detail (city, profession, etc.).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
