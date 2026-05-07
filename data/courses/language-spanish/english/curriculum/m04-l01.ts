import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-el-la',
  module: 4,
  lesson: 1,
  title: 'El & La — Every Noun Picks a Side',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Welcome to the part of Spanish where English speakers stumble first. In English, a book is just a book. In Spanish, the book is 'el libro' — masculine. The table is 'la mesa' — feminine. There's no neutral. No 'it'. Every object picks a side, and the article in front of it announces which.",
    culturalNote: "Spanish grammatical gender is not biological — it's grammatical. 'El libro' (book) is masculine; 'la mesa' (table) is feminine; 'el coche' (car) is masculine; 'la casa' (house) is feminine. There's no logical reason for most objects — you learn the gender along with the word, the way English speakers had to learn that 'goose' becomes 'geese' instead of 'gooses'.",
  },

  chunks: [
    {
      id: 'el_libro',
      target: 'el libro',
      native: 'the book (masculine)',
      literal: 'el (masc. article) + libro (book — ends in -o)',
      emoji: '📕',
      phonetic: 'el LEE-broh',
      audioRef: null,
    },
    {
      id: 'la_mesa',
      target: 'la mesa',
      native: 'the table (feminine)',
      literal: 'la (fem. article) + mesa (table — ends in -a)',
      emoji: '🪑',
      phonetic: 'lah MEH-sah',
      audioRef: null,
    },
    {
      id: 'el_la_chico',
      target: 'el chico / la chica',
      native: 'the boy / the girl',
      literal: 'el chico (masc, ends in -o) / la chica (fem, ends in -a)',
      emoji: '🧒',
      phonetic: 'el CHEE-koh / lah CHEE-kah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'El for masculine, la for feminine',
    explanation: "Spanish has no neutral 'the'. Every singular noun takes either 'el' (masculine) or 'la' (feminine). The ending of the noun is your first clue — words ending in -o are usually masculine ('el libro'), words ending in -a are usually feminine ('la mesa'). The article and the noun travel together as a pair.",
    examples: [
      { target: 'el libro', native: 'the book (masculine — ends in -o)' },
      { target: 'la mesa', native: 'the table (feminine — ends in -a)' },
      { target: 'el chico / la chica', native: 'the boy / the girl' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each noun to its article',
      pairs: [
        { left: 'libro', right: 'el' },
        { left: 'mesa', right: 'la' },
        { left: 'chica', right: 'la' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which article goes with "casa" (house)?',
      question: '___ casa',
      options: [
        { text: 'la (feminine — ends in -a)', correct: true },
        { text: 'el (masculine)', correct: false },
        { text: 'no article needed', correct: false },
      ],
      explanation: "'Casa' ends in -a, so it's feminine: 'la casa'. The -a/-o ending is your first clue to gender.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the book',
      correct: ['el libro', 'El libro'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right article',
      sentence: '_____ mesa es grande.',
      options: ['La', 'El', 'Lo'],
      correct: 'La',
      context: 'The table is big — "mesa" ends in -a, so it\'s feminine.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "the boy and the girl"',
      words: ['la', 'el', 'chico', 'y', 'chica'],
      correct: ['el', 'chico', 'y', 'la', 'chica'],
      translation: 'the boy and the girl',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the table',
      correct: ['la mesa', 'La mesa'],
    },
  ],

  rwenDialogue: {
    intro: "You're in your first Spanish class in Madrid. The teacher points at objects on her desk — first a book, then a table — and asks you to name them with the correct article.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Qué es esto? ¿Y esto?',
        native: 'What is this? And this?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Es el libro. Es la mesa.', native: 'It is the book. It is the table.', correct: true, feedback: "Perfecto — 'el libro' (masculine) and 'la mesa' (feminine), each with the right article." },
          { target: 'Es la libro. Es el mesa.', native: 'Wrong articles — swapped', correct: false, feedback: "You swapped them. 'Libro' ends in -o (masculine → 'el'); 'mesa' ends in -a (feminine → 'la')." },
          { target: 'Es libro. Es mesa.', native: 'Without articles', correct: false, feedback: "In Spanish you almost always need an article. Try: 'Es el libro. Es la mesa.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. Two nouns, two genders, no English neutral. You're now playing by Spanish rules.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'the book (masculine)', correct: ['el libro', 'El libro'] },
      { prompt: 'the table (feminine)', correct: ['la mesa', 'La mesa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look around your room. Pick three objects and label each silently in Spanish with its article — el or la. Notice that each object already has a gender attached, even though English never told you so.",
    rwenSignoff: "Welcome to gendered grammar. The table is now a 'she'. Hasta pronto.",
  },

  phase8: {
    scenario: "It's your first day at a beginner Spanish class at the Instituto Cervantes in Madrid. The teacher has placed a book, a table, and two students — a boy and a girl — at the front of the room and is going around the class asking each student to name what they see using 'el' or 'la'. Your turn is next.",
    rwenRole: "Profesora Carmen — a warm but precise Spanish teacher in her 40s who quietly notes whether you say 'el libro' (not 'la libro') and 'la mesa' (not 'el mesa'), and gently corrects with a smile if you mix the articles.",
    successCriteria: "User says 'el libro' (masculine, NOT 'la libro'), 'la mesa' (feminine, NOT 'el mesa'), and 'el chico / la chica' for the two students — and recognises that gender is not biological for objects but you must still pick a side. No English fallback like 'the' alone.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
