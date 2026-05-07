import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-padre-madre',
  module: 5,
  lesson: 1,
  title: 'Padre y Madre — Father & Mother',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Spanish, family words come in gender pairs that you'll see again and again — padre/madre, hijo/hija, hermano/hermana. Master the pair, master the family. We start with the two pillars: padre and madre.",
    culturalNote: "In Latin America the family is the default social unit, not the individual. 'Mi familia' opens conversations the way 'my job' opens them in English. Telling a Mexican or Colombian about your padre and madre is one of the fastest ways to be welcomed in.",
  },

  chunks: [
    {
      id: 'padre',
      target: 'el padre',
      native: 'father',
      literal: 'the father (masculine, ends in -e)',
      emoji: '👨',
      phonetic: 'el PAH-dreh',
      audioRef: null,
    },
    {
      id: 'madre',
      target: 'la madre',
      native: 'mother',
      literal: 'the mother (feminine, ends in -e)',
      emoji: '👩',
      phonetic: 'lah MAH-dreh',
      audioRef: null,
    },
    {
      id: 'mis-padres',
      target: 'mis padres',
      native: 'my parents',
      literal: 'my fathers (masculine plural covers mixed group)',
      emoji: '👨‍👩‍👧',
      phonetic: 'mees PAH-drehs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Masculine plural covers mixed groups',
    explanation: "'Padres' literally means 'fathers' but when you say 'mis padres' Spanish speakers hear 'my parents' — both mother and father. Spanish masculine plural defaults to mixed-gender groups: hijos = sons + daughters, hermanos = brothers + sisters, abuelos = grandparents.",
    examples: [
      { target: 'mis padres', native: 'my parents (mother + father)' },
      { target: 'mis hijos', native: 'my children (sons + daughters)' },
      { target: 'mis abuelos', native: 'my grandparents (grandma + grandpa)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish word to its meaning',
      pairs: [
        { left: 'el padre', right: 'father' },
        { left: 'la madre', right: 'mother' },
        { left: 'mis padres', right: 'my parents' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my mother is at home'",
      sentence: 'Mi _____ está en casa.',
      options: ['madre', 'padre', 'padres'],
      correct: 'madre',
      context: 'Pick the feminine singular for "mother".',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my parents',
      correct: ['mis padres', 'Mis padres'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to say 'my parents' — which is right?",
      question: 'My parents (mother and father):',
      options: [
        { text: 'mis padres', correct: true },
        { text: 'mis madres', correct: false },
        { text: 'mi padre y madre', correct: false },
      ],
      explanation: "Spanish uses masculine plural 'padres' to mean parents collectively. 'Mis madres' would mean two mothers specifically.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My father is from Mexico"',
      words: ['Mi', 'padre', 'es', 'de', 'México.'],
      correct: ['Mi', 'padre', 'es', 'de', 'México.'],
      translation: 'My father is from Mexico',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my father',
      correct: ['mi padre', 'Mi padre'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday almuerzo at the Hernández home in Guadalajara. Rwen introduces you to the heads of the table.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Te presento — éste es mi padre, y ésta es mi madre. Son mis padres.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mucho gusto. Encantado de conocer a tus padres.', native: 'Pleased to meet you. Lovely to meet your parents.', correct: true, feedback: "Using 'tus padres' (your parents) — perfect masculine-plural mixed-group form." },
          { target: 'Hola madres', native: 'Hello mothers', correct: false, feedback: "Watch the gender — for the pair use 'tus padres' (parents). 'Madres' would mean two mothers." },
          { target: 'Hola', native: 'Hi', correct: false, feedback: "Warmer: 'Mucho gusto. Encantado de conocer a tus padres.' — that's the Sunday-lunch register." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "A mi madre le encantó. Ya estás dentro de la familia.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'father', correct: ['padre', 'el padre'] },
      { prompt: 'my parents', correct: ['mis padres'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'mi padre' and 'mi madre' out loud about your own parents. Then say 'mis padres' for both. Notice that one word — padres — does what English needs two words for.",
    rwenSignoff: "La familia comes first. Hasta luego.",
  },

  phase8: {
    scenario: "It's your first Sunday almuerzo at Rwen's family home in Guadalajara. The table is loaded with carnitas and fresh tortillas. Rwen's padre stands up to welcome you and asks you to introduce yourself and tell the table about your own padres back home — in two or three sentences.",
    rwenRole: "Don Ernesto — Rwen's father, ~58, head of the Sunday table; warm but watching whether you'll use 'mis padres' naturally or fumble with English-style 'mi madre y mi padre'.",
    successCriteria: "User uses 'mis padres' (NOT 'mi padre y mi madre' as a literal translation) at least once, correctly distinguishes 'padre' (singular father) from 'padres' (parents), and produces at least one full sentence (not single words).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
