import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-los-las',
  module: 4,
  lesson: 3,
  title: 'Los & Las — Plurals Made Simple',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Here's a piece of good news. Spanish plurals are actually SIMPLER than English ones. No 'mouse → mice'. No 'goose → geese'. No 'child → children'. Two rules: add -s if the noun ends in a vowel, add -es if it ends in a consonant. The articles 'el' and 'la' become 'los' and 'las'. That's it.",
    culturalNote: "Where English plurals are full of irregular survivors from Old English, Spanish plurals are remarkably regular. The article still tells you the gender — 'los libros' (masc. plural), 'las mesas' (fem. plural). Spanish broadcasts gender and number on the article AND the noun, so by the time the noun arrives you already know how many and what gender.",
  },

  chunks: [
    {
      id: 'los_libros',
      target: 'los libros',
      native: 'the books (masculine plural)',
      literal: 'los (masc. pl.) + libro + s',
      emoji: '📚',
      phonetic: 'lohs LEE-brohs',
      audioRef: null,
    },
    {
      id: 'las_mesas',
      target: 'las mesas',
      native: 'the tables (feminine plural)',
      literal: 'las (fem. pl.) + mesa + s',
      emoji: '🪑🪑',
      phonetic: 'lahs MEH-sahs',
      audioRef: null,
    },
    {
      id: 'las_ciudades',
      target: 'las ciudades',
      native: 'the cities',
      literal: 'las + ciudad + es (consonant ending → -es)',
      emoji: '🏙️',
      phonetic: 'lahs see-oo-DAH-dehs',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-s after vowels, -es after consonants',
    explanation: "If the singular ends in a vowel (a, e, i, o, u), add -s: libro → libros, mesa → mesas. If it ends in a consonant, add -es: ciudad → ciudades, profesor → profesores. The article changes too: 'el' → 'los', 'la' → 'las'. Both the article and the noun show plural — Spanish is doubly clear.",
    examples: [
      { target: 'el libro → los libros', native: 'the book → the books (vowel ending → -s)' },
      { target: 'la mesa → las mesas', native: 'the table → the tables (vowel ending → -s)' },
      { target: 'la ciudad → las ciudades', native: 'the city → the cities (consonant → -es)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match singular to plural',
      pairs: [
        { left: 'el libro', right: 'los libros' },
        { left: 'la mesa', right: 'las mesas' },
        { left: 'la ciudad', right: 'las ciudades' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'How do you say "the professors" (masc. plural)?',
      question: 'el profesor → ?',
      options: [
        { text: 'los profesores (consonant → -es, article → los)', correct: true },
        { text: 'los profesors', correct: false },
        { text: 'las profesoras', correct: false },
      ],
      explanation: "'Profesor' ends in a consonant, so add -es. The article 'el' becomes 'los' for masculine plural. → 'los profesores'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the books',
      correct: ['los libros', 'Los libros'],
    },
    {
      type: 'fill_blank',
      instruction: 'Make the article plural',
      sentence: '_____ mesas son grandes.',
      options: ['Las', 'Los', 'El'],
      correct: 'Las',
      context: "'Mesas' is feminine plural — the article must match.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "the cities are big"',
      words: ['las', 'son', 'grandes', 'ciudades'],
      correct: ['las', 'ciudades', 'son', 'grandes'],
      translation: 'the cities are big',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the tables',
      correct: ['las mesas', 'Las mesas'],
    },
  ],

  rwenDialogue: {
    intro: "Profesora Carmen has put a stack of books on one desk and a row of chairs along the wall. She asks you to describe what's in the room — using plurals.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mira la sala. ¿Qué hay?',
        native: 'Look at the room. What is there?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hay los libros y las mesas.', native: 'There are the books and the tables.', correct: true, feedback: "Perfecto. Both articles agree with their nouns — 'los libros' (masc. pl.) and 'las mesas' (fem. pl.)." },
          { target: 'Hay las libros y los mesas.', native: 'Wrong — articles swapped', correct: false, feedback: "You crossed the genders. 'Libros' is masculine (los); 'mesas' is feminine (las)." },
          { target: 'Hay libro y mesa.', native: 'Singular, no articles', correct: false, feedback: "There are several of each, so plural: 'los libros y las mesas'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. The article AND the -s ending both shout 'plural'. Spanish over-communicates so you never miss it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'the books (masc. plural)', correct: ['los libros', 'Los libros'] },
      { prompt: 'the cities (fem. plural)', correct: ['las ciudades', 'Las ciudades'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three pairs of objects you can see right now. Name each set in Spanish plural — 'los libros', 'las sillas', 'los teléfonos'. Feel how the article and the -s both signal plural.",
    rwenSignoff: "Two clues, one job — easier than English ever was. Hasta mañana.",
  },

  phase8: {
    scenario: "Profesora Carmen has set up a small table at the front of the classroom with several objects on it: a stack of books, two pencils, three keys, and a handful of photos. She asks you to walk to the front and describe everything in Spanish — plurals only, with the right article in front of each.",
    rwenRole: "Profesora Carmen — listening for whether you say 'los libros' (NOT 'las libros' or 'los libro'), 'las llaves' for keys, and 'las fotos' (remembering 'foto' is feminine despite -o) without dropping the plural -s.",
    successCriteria: "User produces 'los libros', 'los lápices' (or 'las llaves'), 'las fotos' — every article matches gender AND number, and the plural ending (-s after vowels, -es after consonants) is correct on each noun. No bare-noun-without-article slips.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
