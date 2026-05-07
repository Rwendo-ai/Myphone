import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-un-una',
  module: 4,
  lesson: 5,
  title: 'Un, Una, Unos, Unas — A Book vs The Book',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English has 'the' (definite) and 'a/an' (indefinite). Spanish has the same split, with the same gender/number machinery you've already learned. 'El libro' is THE book; 'un libro' is A book. 'La mesa' is THE table; 'una mesa' is A table. Plurals: 'unos libros' (some books), 'unas mesas' (some tables).",
    culturalNote: "The choice between definite (el/la/los/las) and indefinite (un/una/unos/unas) works almost exactly like English — the difference is only that Spanish has gender + number forms for both. 'A friend' is 'un amigo' (or 'una amiga'). 'Some friends' is 'unos amigos'. The article tells you four things at once: definite/indefinite, masculine/feminine, singular/plural, and which noun it agrees with.",
  },

  chunks: [
    {
      id: 'un_libro',
      target: 'un libro',
      native: 'a book / one book',
      literal: 'un (masc. indef.) + libro',
      emoji: '📕',
      phonetic: 'oon LEE-broh',
      audioRef: null,
    },
    {
      id: 'una_mesa',
      target: 'una mesa',
      native: 'a table / one table',
      literal: 'una (fem. indef.) + mesa',
      emoji: '🪑',
      phonetic: 'OO-nah MEH-sah',
      audioRef: null,
    },
    {
      id: 'unos_unas',
      target: 'unos amigos / unas amigas',
      native: 'some male friends / some female friends',
      literal: 'unos (masc. pl.) / unas (fem. pl.)',
      emoji: '👥',
      phonetic: 'OO-nohs ah-MEE-gohs / OO-nahs ah-MEE-gahs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Indefinite article: un / una / unos / unas',
    explanation: "The indefinite article ('a', 'an', 'some' in English) has four forms in Spanish: 'un' (masc. sing.), 'una' (fem. sing.), 'unos' (masc. pl. — 'some'), 'unas' (fem. pl. — 'some'). It agrees in gender and number with the noun, just like 'el/la/los/las'. Use indefinite when introducing something new; use definite when you both already know what it is.",
    examples: [
      { target: 'un libro / el libro', native: 'a book / the book' },
      { target: 'una mesa / la mesa', native: 'a table / the table' },
      { target: 'unos amigos / los amigos', native: 'some friends / the friends' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each noun to its indefinite article',
      pairs: [
        { left: 'libro', right: 'un' },
        { left: 'mesa', right: 'una' },
        { left: 'amigas', right: 'unas' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'How do you say "some books"?',
      question: '___ libros',
      options: [
        { text: 'unos (masc. plural indefinite)', correct: true },
        { text: 'unas (feminine plural)', correct: false },
        { text: 'los (definite)', correct: false },
      ],
      explanation: "'Libros' is masculine plural. The indefinite plural article is 'unos' for masculine — 'unos libros' = some books.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'a book',
      correct: ['un libro', 'Un libro'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right indefinite article',
      sentence: 'Tengo _____ amiga en Madrid.',
      options: ['una', 'un', 'unas'],
      correct: 'una',
      context: "I have a (female) friend in Madrid — feminine singular.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have some red books"',
      words: ['unos', 'tengo', 'rojos', 'libros'],
      correct: ['tengo', 'unos', 'libros', 'rojos'],
      translation: 'I have some red books',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'some (female) friends',
      correct: ['unas amigas', 'Unas amigas'],
    },
  ],

  rwenDialogue: {
    intro: "You're meeting your classmate Lucía at a small café near the school for the first time. She asks what's in your bag and you have to choose between 'un/una' (introducing) and 'el/la' (something already known).",
    lines: [
      {
        speaker: 'npc',
        target: '¿Qué tienes en la mochila?',
        native: 'What do you have in your backpack?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tengo un libro y una libreta. El libro es de español.', native: 'I have a book and a notebook. The book is for Spanish.', correct: true, feedback: "Perfecto. 'Un/una' to introduce them; 'el' to refer back once we both know which one." },
          { target: 'Tengo el libro y la libreta.', native: 'I have the book and the notebook (definite, when introducing)', correct: false, feedback: "First mention is indefinite — 'un libro, una libreta'. After we both know what you mean, you can switch to 'el/la'." },
          { target: 'Tengo una libro y un libreta.', native: 'Wrong gender on articles', correct: false, feedback: "'Libro' is masculine ('un libro'); 'libreta' is feminine ('una libreta'). Match gender to noun." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. 'Un' introduces, 'el' refers back. Same logic as English a/the — just with gender and number on the article.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'a book', correct: ['un libro', 'Un libro'] },
      { prompt: 'a table', correct: ['una mesa', 'Una mesa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce three things to an imaginary stranger using 'un' or 'una' — 'un café, una silla, un teléfono'. Then refer back to one of them with 'el' or 'la' — 'el café está caliente'. Feel the introducing/referring split.",
    rwenSignoff: "First mention: un/una. Already-known: el/la. Same logic as English. Hasta mañana.",
  },

  phase8: {
    scenario: "It's mid-morning at a small café near the Plaza Mayor and you're meeting Lucía, a classmate, for the first time. She wants to know what's in your bag, what you ordered, and whether you have a Spanish-speaking friend in town. You have to choose between 'un/una' for first mentions and 'el/la' once she already knows what you're referring to.",
    rwenRole: "Lucía — a friendly Spanish 22-year-old, gentle but observant, who notices when you over-use 'el/la' for things you're introducing for the first time, or use 'un/una' when she clearly already knows which book/coffee you mean.",
    successCriteria: "User uses 'un/una' for first introductions ('un libro', 'una amiga', 'un café') and switches to 'el/la' for the same item on a second reference ('el café está caliente'). Indefinite plurals 'unos/unas' used at least once. Gender agreement on every article correct.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
