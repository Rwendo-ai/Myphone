import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-gender',
  module: 4,
  lesson: 1,
  title: 'Grammatical Gender — Every Noun Is Male or Female',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Welcome to the part of Hindi most English speakers stumble on. In English, a chair is just a chair. In Hindi, a chair (कुर्सी) is feminine and a table (मेज़) is masculine — and every word around them changes to match. There's no neutral. No 'it'. Every object picks a side.",
    culturalNote: "Hindi grammatical gender is not biological. कुर्सी (chair) is feminine; मेज़ (table) is masculine; पानी (water) is masculine; किताब (book) is feminine. There's no logical rule for most objects — you learn the gender along with the word, the way you learned irregular plurals in English.",
  },

  chunks: [
    {
      id: 'kursi',
      target: 'कुर्सी',
      native: 'Chair (feminine)',
      literal: 'kursī — fem. nouns often end in -ī',
      emoji: '🪑',
      phonetic: 'KUR-see',
      audioRef: null,
    },
    {
      id: 'mez',
      target: 'मेज़',
      native: 'Table (masculine)',
      literal: 'mez — masc. (no consistent ending here)',
      emoji: '🪟',
      phonetic: 'MEZ',
      audioRef: null,
    },
    {
      id: 'larka_larki',
      target: 'लड़का / लड़की',
      native: 'Boy / Girl',
      literal: 'laṛkā (masc, ends in -ā) / laṛkī (fem, ends in -ī)',
      emoji: '🧒',
      phonetic: 'LUR-kaa / LUR-kee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Masculine -ā vs feminine -ī endings',
    explanation: "Many Hindi nouns hint at their gender through the ending. -ā often signals masculine (laṛkā = boy, kamrā = room). -ī often signals feminine (laṛkī = girl, kursī = chair). But there are exceptions (पानी = water is masculine despite ending in -ī, मेज़ has no -ā/-ī). When in doubt, learn the gender with the word.",
    examples: [
      { target: 'लड़का (laṛkā)', native: 'Boy — masculine' },
      { target: 'लड़की (laṛkī)', native: 'Girl — feminine' },
      { target: 'कुर्सी (kursī)', native: 'Chair — feminine (object, not biological)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the noun to its gender',
      pairs: [
        { left: 'कुर्सी (kursī)', right: 'Feminine' },
        { left: 'मेज़ (mez)', right: 'Masculine' },
        { left: 'लड़का (laṛkā)', right: 'Masculine' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which ending typically signals a feminine Hindi noun?',
      question: 'Most feminine nouns end in:',
      options: [
        { text: '-ī (as in kursī, laṛkī)', correct: true },
        { text: '-ā (as in laṛkā, kamrā)', correct: false },
        { text: '-u (no consistent rule)', correct: false },
      ],
      explanation: "The -ī ending is a strong (but not absolute) signal of feminine gender. -ā usually signals masculine.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Chair',
      correct: ['kursi', 'kursī', 'Kursi', 'Kursī'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the correctly gendered word',
      sentence: 'वह _____ है (That is a girl)',
      options: ['laṛkī', 'laṛkā', 'kursī'],
      correct: 'laṛkī',
      context: 'For "girl" you need the feminine form.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "This is a chair" (yeh ek kursī hai)',
      words: ['है', 'यह', 'एक', 'कुर्सी'],
      correct: ['यह', 'एक', 'कुर्सी', 'है'],
      translation: 'This is a chair',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Table',
      correct: ['mez', 'Mez', 'mez̤', 'meṅz'],
    },
  ],

  rwenDialogue: {
    intro: "You're sitting at a small dining set in your host's flat in Lucknow. Your host points first to the chair, then to the table, and asks you to name them with the correct article.",
    lines: [
      {
        speaker: 'npc',
        target: 'यह क्या है? और वह?',
        native: 'What is this? And that?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yeh ek kursī hai. Vah ek mez hai.', native: 'This is a chair. That is a table.', correct: true, feedback: "Perfect — kursī (feminine) and mez (masculine), each named correctly." },
          { target: 'Yeh ek mez hai. Vah ek kursī hai.', native: 'This is a table. That is a chair. (swapped)', correct: false, feedback: "You swapped them. The chair you sit on is kursī (feminine); the flat surface is mez (masculine)." },
          { target: 'Yeh kuch hai', native: "This is something", correct: false, feedback: "Try naming each: 'Yeh ek kursī hai' for the chair and 'Vah ek mez hai' for the table." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bahut acchā. Two nouns, two genders, no English neutral. You're now playing by Hindi rules.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Chair (feminine)', correct: ['kursi', 'kursī', 'Kursi', 'Kursī'] },
      { prompt: 'Table (masculine)', correct: ['mez', 'Mez'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look around the room you're in. Pick three objects and label them silently in Hindi — chair, table, book. Notice that each one already has a gender attached, even though English never told you so.",
    rwenSignoff: "Welcome to gendered grammar. The chair is now a 'she'. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Sunday afternoon at your friend Anjali's parents' house in Jaipur. Her four-year-old cousin Aarav is running a 'naming game' — pointing at every piece of furniture in the living room and demanding you say its name in Hindi. He giggles whenever you forget that a chair is feminine and a table is masculine.",
    rwenRole: "Aarav — a chatty four-year-old in a Spider-Man t-shirt who points at one chair, then the dining table, then a book on a stool, and waits for you to label each correctly: kursī, mez, kitāb.",
    successCriteria: "User produces 'kursī' (feminine) for chair, 'mez' (masculine) for table, and recognises that gender is not biological — both are objects, but each takes its own gender. No English fallback like 'it'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
