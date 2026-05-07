import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-hermano-hermana',
  module: 5,
  lesson: 2,
  title: 'Hermano y Hermana — Brother & Sister',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hermano. Hermana. Same word, different ending. The -o/-a switch is the engine of Spanish gender — once you feel it, half the family vocabulary unlocks at once.",
    culturalNote: "In most Latin American homes, hermanos are your closest lifelong allies. Cousins (primos) often grow up alongside hermanos and the line blurs — at a Sunday gathering you may hear someone introduce 'mi primo-hermano' (a cousin so close they're a brother).",
  },

  chunks: [
    {
      id: 'hermano',
      target: 'el hermano',
      native: 'brother',
      literal: 'the brother (masculine -o)',
      emoji: '👦',
      phonetic: 'el er-MAH-noh',
      audioRef: null,
    },
    {
      id: 'hermana',
      target: 'la hermana',
      native: 'sister',
      literal: 'the sister (feminine -a)',
      emoji: '👧',
      phonetic: 'lah er-MAH-nah',
      audioRef: null,
    },
    {
      id: 'hermanos',
      target: 'mis hermanos',
      native: 'my siblings (or my brothers)',
      literal: 'my brothers (mixed-group masculine plural)',
      emoji: '👫',
      phonetic: 'mees er-MAH-nohs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The -o / -a gender switch',
    explanation: "Spanish noun-class gender is overwhelmingly marked by the final vowel. Most family words come in -o (masculine) / -a (feminine) pairs: hermano/hermana, hijo/hija, primo/prima, abuelo/abuela, tío/tía. Learn one, you've learned two.",
    examples: [
      { target: 'hermano / hermana', native: 'brother / sister' },
      { target: 'hijo / hija', native: 'son / daughter' },
      { target: 'primo / prima', native: 'male cousin / female cousin' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each gender pair to its meaning',
      pairs: [
        { left: 'hermano', right: 'brother' },
        { left: 'hermana', right: 'sister' },
        { left: 'mis hermanos', right: 'my siblings' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my older sister'",
      sentence: 'Mi _____ mayor se llama Lucía.',
      options: ['hermana', 'hermano', 'hermanos'],
      correct: 'hermana',
      context: 'Lucía is a girl — pick the feminine.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my brother',
      correct: ['mi hermano', 'Mi hermano'],
    },
    {
      type: 'multiple_choice',
      instruction: "You have one brother and two sisters. How do you say 'my siblings'?",
      question: 'My siblings (mixed group):',
      options: [
        { text: 'mis hermanos', correct: true },
        { text: 'mis hermanas', correct: false },
        { text: 'mis hermano', correct: false },
      ],
      explanation: "'Mis hermanos' is masculine plural — it covers any mixed-gender sibling group. 'Mis hermanas' would mean only sisters.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have two brothers and one sister"',
      words: ['Tengo', 'dos', 'hermanos', 'y', 'una', 'hermana.'],
      correct: ['Tengo', 'dos', 'hermanos', 'y', 'una', 'hermana.'],
      translation: 'I have two brothers and one sister',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my sister',
      correct: ['mi hermana', 'Mi hermana'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen pulls you aside at the Sunday almuerzo to introduce his siblings.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mira — éste es mi hermano Diego, y ésta es mi hermana Sofía. Somos tres hermanos.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mucho gusto, Diego. Mucho gusto, Sofía. ¿Cuántos años tienen?', native: 'Nice to meet you, Diego. Nice to meet you, Sofía. How old are you both?', correct: true, feedback: "Naming each by name then asking a follow-up — that's how Spanish-speaking families warm up." },
          { target: 'Hola hermanos', native: 'Hello brothers', correct: false, feedback: "Acknowledge each by name — 'Mucho gusto, Diego. Mucho gusto, Sofía.'" },
          { target: 'Mucho gusto', native: 'Pleased to meet you', correct: false, feedback: "Add their names — names matter at a Sunday table. 'Mucho gusto, Diego. Mucho gusto, Sofía.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mis hermanos ya te quieren. Bienvenido al caos.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'brother', correct: ['hermano', 'el hermano'] },
      { prompt: 'sister', correct: ['hermana', 'la hermana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count your siblings in Spanish: 'Tengo ___ hermanos / hermanas.' Say it out loud. If you have a mixed group, default to hermanos. If only sisters, hermanas.",
    rwenSignoff: "Hermanos for life. Hasta luego.",
  },

  phase8: {
    scenario: "Sunday almuerzo, second course. Rwen's hermana Sofía leans across the table and asks you about your own siblings — '¿tienes hermanos?' The whole table quietens to listen. You need to say how many, name them, and say at least one thing about one of them, all in Spanish.",
    rwenRole: "Sofía — Rwen's older sister, ~32, sharp and curious; she's testing whether you can hold a 30-second answer in Spanish about your family without falling back to English.",
    successCriteria: "User uses 'hermano(s)' / 'hermana(s)' with the correct -o/-a ending matching gender, defaults to 'hermanos' for any mixed group, and gives at least one full sentence beyond just a number (e.g. 'mi hermana se llama...' or 'mi hermano vive en...').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
