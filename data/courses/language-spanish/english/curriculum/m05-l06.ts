import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-primos',
  module: 5,
  lesson: 6,
  title: 'Primos — Cousins & Extended Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Primo. Prima. Cousins. In Latin America cousins are not the distant relatives English speakers know — they're often your closest friends, raised side by side, at every birthday and Sunday lunch.",
    culturalNote: "When a Mexican or Argentine says 'mi primo' they often mean a cousin they've known since infancy. The phrase 'primo-hermano' (first cousin, lit. 'cousin-brother') captures the closeness — not 'first' as in degree, but 'as close as a hermano'.",
  },

  chunks: [
    {
      id: 'primo',
      target: 'el primo',
      native: 'male cousin',
      literal: 'the cousin (masculine -o)',
      emoji: '👦',
      phonetic: 'el PREE-moh',
      audioRef: null,
    },
    {
      id: 'prima',
      target: 'la prima',
      native: 'female cousin',
      literal: 'the cousin (feminine -a)',
      emoji: '👧',
      phonetic: 'lah PREE-mah',
      audioRef: null,
    },
    {
      id: 'la-familia',
      target: 'toda la familia',
      native: 'the whole family',
      literal: 'all the family',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'TOH-dah lah fah-MEE-lyah',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Toda" + feminine noun = "the whole/all the"',
    explanation: "'Todo / toda' agrees with the noun: toda la familia (whole family — feminine), todo el grupo (whole group — masculine). For plural: todos los primos (all the cousins), todas las primas (all the female cousins).",
    examples: [
      { target: 'toda la familia', native: 'the whole family (feminine sing.)' },
      { target: 'todos los primos', native: 'all the cousins (masc. plural)' },
      { target: 'todas las tías', native: 'all the aunts (fem. plural)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Spanish phrase to its meaning',
      pairs: [
        { left: 'el primo', right: 'male cousin' },
        { left: 'la prima', right: 'female cousin' },
        { left: 'toda la familia', right: 'the whole family' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "the whole family"',
      sentence: '_____ la familia está aquí.',
      options: ['Toda', 'Todo', 'Todos'],
      correct: 'Toda',
      context: '"Familia" is feminine — match the gender.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my female cousin',
      correct: ['mi prima', 'Mi prima'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'all the cousins' (mixed group)?",
      question: 'All the cousins (mixed):',
      options: [
        { text: 'todos los primos', correct: true },
        { text: 'todas las primas', correct: false },
        { text: 'toda los primos', correct: false },
      ],
      explanation: "Mixed group defaults to masculine plural — 'todos los primos'. 'Todas las primas' would mean only female cousins.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "All my cousins are here"',
      words: ['Todos', 'mis', 'primos', 'están', 'aquí.'],
      correct: ['Todos', 'mis', 'primos', 'están', 'aquí.'],
      translation: 'All my cousins are here',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the whole family',
      correct: ['toda la familia', 'Toda la familia'],
    },
  ],

  rwenDialogue: {
    intro: "It's a quinceañera — Rwen's prima Sofía is turning 15. The whole extended family is there, including a wave of cousins.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mira, vinieron todos mis primos. Éste es mi primo Mateo, ésta es mi prima Lucía, y allí están más.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '¡Qué familia más grande! Mucho gusto a todos. Toda la familia está aquí.', native: 'What a big family! Pleased to meet everyone. The whole family is here.', correct: true, feedback: "'Toda la familia' with the right feminine concord — and you greeted them collectively. Spanish-speaking families love that energy." },
          { target: 'Hola primos', native: 'Hi cousins', correct: false, feedback: "Open with warmth: '¡Qué familia más grande! Mucho gusto a todos.'" },
          { target: 'Todos los familia', native: 'All the family (wrong gender)', correct: false, feedback: "'Familia' is feminine — 'toda la familia' (NOT 'todos los familia')." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Y todavía faltan los de Monterrey. Hoy vas a aprender a contar familia.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'male cousin', correct: ['primo', 'el primo'] },
      { prompt: 'the whole family', correct: ['toda la familia'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count your own primos / primas. Say 'tengo ___ primos' out loud. If you have a favourite, say 'mi primo/prima [name] es como un hermano/hermana' (my cousin is like a sibling). That phrase is gold in any Latin American family.",
    rwenSignoff: "Los primos son los hermanos que eliges. Hasta luego.",
  },

  phase8: {
    scenario: "Sofía's quinceañera in Monterrey, Mexico. The chambelanes have just finished their dance and you're standing with a group of Rwen's primos — five of them — who immediately want to know about your own cousins. They speak fast, they overlap, and they're testing whether you can hold a group conversation in Spanish about family.",
    rwenRole: "A loose cluster of primos at the quinceañera — Mateo (~22), Lucía (~17), and three more — playful, fast, asking questions on top of each other; the test is whether you can stay in Spanish without code-switching.",
    successCriteria: "User uses 'primo' for male cousins, 'prima' for female, 'primos' for the mixed group (NOT 'primas' for mixed), correctly says 'toda la familia' with feminine 'toda', and produces at least one full sentence beyond a single word.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
