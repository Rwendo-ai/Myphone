import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-adjective-agreement',
  module: 4,
  lesson: 4,
  title: 'Adjective Agreement — Red Books, Red Tables',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "In English, 'red' is just 'red'. A red book, a red table, red books, red tables — one form, four uses. In Spanish, the adjective shapeshifts. 'Rojo' for masculine, 'roja' for feminine, 'rojos' for masc. plural, 'rojas' for fem. plural. The adjective marries the noun.",
    culturalNote: "Spanish adjectives agree with their noun in BOTH gender AND number — that's four endings to keep straight. Most adjectives ending in -o switch to -a for feminine. Adjectives ending in -e (grande, inteligente) don't change for gender — only for number. Spanish keeps everything in agreement, so the sentence sounds united.",
  },

  chunks: [
    {
      id: 'libro_rojo',
      target: 'el libro rojo',
      native: 'the red book',
      literal: 'el (m.) + libro (m.) + rojo (m. agreeing)',
      emoji: '📕',
      phonetic: 'el LEE-broh ROH-hoh',
      audioRef: null,
    },
    {
      id: 'mesa_roja',
      target: 'la mesa roja',
      native: 'the red table',
      literal: 'la (f.) + mesa (f.) + roja (f. agreeing)',
      emoji: '🟥',
      phonetic: 'lah MEH-sah ROH-hah',
      audioRef: null,
    },
    {
      id: 'libros_rojos',
      target: 'los libros rojos',
      native: 'the red books',
      literal: 'los + libros + rojos — masc. plural agreement',
      emoji: '📕📕',
      phonetic: 'lohs LEE-brohs ROH-hohs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjectives agree in gender AND number',
    explanation: "Most adjectives have four forms: rojo / roja / rojos / rojas. The adjective matches its noun in both gender and number. The adjective USUALLY comes AFTER the noun — 'el libro rojo' (the red book), not 'el rojo libro'. Adjectives ending in -e (grande, fácil) only change for number: el libro grande / los libros grandes.",
    examples: [
      { target: 'el libro rojo / los libros rojos', native: 'the red book / the red books' },
      { target: 'la mesa roja / las mesas rojas', native: 'the red table / the red tables' },
      { target: 'el libro grande / los libros grandes', native: 'the big book / books — -e adjective only changes for number' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match noun to its agreeing adjective form',
      pairs: [
        { left: 'el libro', right: 'rojo' },
        { left: 'la mesa', right: 'roja' },
        { left: 'las casas', right: 'rojas' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'How do you say "the red tables"?',
      question: 'las mesas ___',
      options: [
        { text: 'rojas (fem. plural — agrees with mesas)', correct: true },
        { text: 'rojos (masculine plural)', correct: false },
        { text: 'roja (feminine singular)', correct: false },
      ],
      explanation: "'Mesas' is feminine plural, so the adjective must be feminine plural: 'rojas'. The adjective copies the noun's gender and number.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the red book',
      correct: ['el libro rojo', 'El libro rojo'],
    },
    {
      type: 'fill_blank',
      instruction: 'Make the adjective agree',
      sentence: 'Las casas son _____.',
      options: ['rojas', 'rojos', 'roja'],
      correct: 'rojas',
      context: 'The houses are red — feminine plural.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "the red tables are big"',
      words: ['las', 'rojas', 'son', 'mesas', 'grandes'],
      correct: ['las', 'mesas', 'rojas', 'son', 'grandes'],
      translation: 'the red tables are big',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the red tables',
      correct: ['las mesas rojas', 'Las mesas rojas'],
    },
  ],

  rwenDialogue: {
    intro: "Profesora Carmen lays out four objects on her desk — a red book, a red table-mat, two red pens, and three red folders — and asks you to describe each pair correctly.",
    lines: [
      {
        speaker: 'npc',
        target: 'Describe los objetos rojos.',
        native: 'Describe the red objects.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'El libro rojo, la mesa roja, los bolígrafos rojos, las carpetas rojas.', native: 'The red book, red table, red pens, red folders.', correct: true, feedback: "¡Perfecto! Four nouns, four matching adjective endings — gender AND number agreement on every one." },
          { target: 'El libro roja, la mesa rojo, los bolígrafos rojas, las carpetas rojos.', native: 'All wrong — adjectives mis-agreed', correct: false, feedback: "The adjective must match the noun. 'Libro' is masc. → 'rojo'. 'Mesa' is fem. → 'roja'. 'Bolígrafos' is masc. pl. → 'rojos'. 'Carpetas' is fem. pl. → 'rojas'." },
          { target: 'Es rojo todo.', native: "It's all red (general)", correct: false, feedback: "Match the adjective to each noun: 'el libro rojo, la mesa roja, los bolígrafos rojos, las carpetas rojas'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. The adjective marries the noun every time. That's Spanish harmony.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'the red book', correct: ['el libro rojo', 'El libro rojo'] },
      { prompt: 'the red tables', correct: ['las mesas rojas', 'Las mesas rojas'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick a colour you can see — rojo, blanco, negro, azul. Describe three things you can see using that colour with the right ending: 'el coche blanco, la pared blanca, los libros blancos'.",
    rwenSignoff: "Adjectives agree. Nouns agree. Articles agree. Spanish is one big harmony. Hasta mañana.",
  },

  phase8: {
    scenario: "Profesora Carmen has spread out a basket of coloured objects on the classroom table — red apples, white shirts, black books, blue pens — and asks each student to walk up, pick three items, and describe them aloud in Spanish using the right adjective ending for gender and number.",
    rwenRole: "Profesora Carmen — listening rigorously for whether you produce 'rojas' for the apples (feminine plural), 'blancas' for the shirts, 'negros' for the books, and 'azules' for the pens (where -e and -l adjectives only change for number).",
    successCriteria: "User produces three noun-adjective pairs, each with correct gender AND number agreement (e.g. 'las manzanas rojas' NOT 'las manzanas rojos'; 'los libros negros' NOT 'los libros negras'). Adjective placement is AFTER the noun, not before.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
