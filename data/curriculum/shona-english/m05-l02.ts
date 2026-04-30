import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-amai',
  module: 5,
  lesson: 2,
  title: 'Amai — Mother & Maternal Family',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Amai — mother. In Zimbabwe, mothers hold the home together. The maternal side of the family has its own beautiful vocabulary. Your mother's sister is also called Amai. Your mother's brother becomes your Sekuru.",
    culturalNote: "'Amai' is one of the most powerful words in Shona culture. It's used to address any older woman with respect — not just your mother. Saying 'Amai' to an elder woman you don't know is a sign of deep respect.",
  },

  chunks: [
    {
      id: 'amai',
      target: 'Amai',
      native: 'Mother / (respectful address for older women)',
      literal: 'Amai (maternal respect)',
      emoji: '👩',
      phonetic: 'AH-mai',
      audioRef: null,
    },
    {
      id: 'tete',
      target: 'Tete',
      native: "Father's sister (paternal aunt)",
      literal: 'Tete (special role in Shona culture)',
      emoji: '👩‍👦',
      phonetic: 'TEH-te',
      audioRef: null,
    },
    {
      id: 'ambuya',
      target: 'Ambuya',
      native: 'Grandmother / (respectful address for elderly women)',
      literal: 'Ambuya (grandmother)',
      emoji: '👵',
      phonetic: 'am-BU-ya',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Amai, Tete, Ambuya — women across generations',
    explanation: "Amai (mother/respectful for older women), Tete (father's sister — has a special ceremonial role), Ambuya (grandmother/respectful for elderly). Each title carries specific relationship responsibilities in Shona culture.",
    examples: [
      { target: 'Amai wangu', native: 'My mother' },
      { target: 'Tete wangu', native: "My father's sister (paternal aunt)" },
      { target: 'Ambuya wangu', native: 'My grandmother' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the family title to its meaning',
      pairs: [
        { left: 'Amai', right: 'Mother' },
        { left: 'Tete', right: "Father's sister" },
        { left: 'Ambuya', right: 'Grandmother' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my grandmother'",
      sentence: 'Ambuya _____ anogara kumusha.',
      options: ['wangu', 'rangu', 'yangu'],
      correct: 'wangu',
      context: 'My grandmother lives in the village.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Mother',
      correct: ['Amai', 'amai'],
    },
    {
      type: 'multiple_choice',
      instruction: "An elderly woman you don't know well — what respectful title do you use?",
      question: 'Respectful address for an older woman:',
      options: [
        { text: 'Amai', correct: true },
        { text: 'Musikana', correct: false },
        { text: 'Vanhu', correct: false },
      ],
      explanation: "'Amai' is used respectfully for any older woman — not just your mother. It signals respect and warmth.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My mother is at home"',
      words: ['Amai', 'wangu', 'ari', 'kumba.'],
      correct: ['Amai', 'wangu', 'ari', 'kumba.'],
      translation: 'My mother is at home',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Grandmother',
      correct: ['Ambuya', 'ambuya'],
    },
  ],

  rwenDialogue: {
    intro: "You meet Rwen's mother and grandmother at the family home.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mhoro, mwanangu.',
        native: 'Hello, my child.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mhoro, Amai. Makadii?', native: 'Hello, Mother (respectfully). How are you?', correct: true, feedback: "Using 'Amai' for Rwen's mother shows you understand Shona family respect." },
          { target: 'Mhoro', native: 'Hello (simple)', correct: false, feedback: "Add the respectful title — 'Mhoro, Amai. Makadii?' shows proper tsika." },
          { target: 'Makadii mese', native: 'How are all of you', correct: false, feedback: "Good — but address her directly: 'Mhoro, Amai. Makadii?' — using her family title." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Amai vanofara. Waishandisa zita ravo zvakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Mother', correct: ['Amai', 'amai'] },
      { prompt: 'Grandmother', correct: ['Ambuya', 'ambuya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of the women in your family and assign Shona titles: Amai (mother), Ambuya (grandmother), Tete (father's sister). How does naming them this way change how you think about them?",
    rwenSignoff: "Women are the backbone of the Shona family. Famba zvakanaka.",
  },
};

export default lesson;
