import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06',
  module: 7,
  lesson: 6,
  title: 'Asking for directions',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Yesterday you learned the directions. Today you learn the question. 'Kungaphi ihhotela?' — 'Where is the hotel?' Master the pattern and you can ask for any place by name.",
    culturalNote: "In Bulawayo, asking strangers for directions is normal and even expected — locals are proud of their city. But greet first. Walking up and barking 'Kungaphi i-Bank?' is rude. Always lead with 'Sawubona' or 'Salibonani'.",
  },

  chunks: [
    {
      id: 'kungaphi',
      target: 'Kungaphi...?',
      native: 'Where is...?',
      literal: 'it-is-where',
      emoji: '❓',
      phonetic: 'koon-gah-pee',
      audioRef: null,
    },
    {
      id: 'ihhotela',
      target: 'ihhotela',
      native: 'hotel',
      emoji: '🏨',
      phonetic: 'ee-hoh-teh-lah',
      audioRef: null,
    },
    {
      id: 'ibhanga',
      target: 'ibhanga',
      native: 'bank',
      emoji: '🏦',
      phonetic: 'ee-bahn-gah',
      audioRef: null,
    },
    {
      id: 'isibhedlela',
      target: 'isibhedlela',
      native: 'hospital',
      emoji: '🏥',
      phonetic: 'ee-see-behd-leh-lah',
      audioRef: null,
    },
    {
      id: 'eduze',
      target: 'eduze',
      native: 'near / close by',
      emoji: '📍',
      phonetic: 'eh-doo-zeh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kungaphi + i-place',
    explanation: "To ask 'where is X', use Kungaphi + the noun (with its i- prefix intact). 'Kungaphi ihhotela?' = 'Where is the hotel?' Don't drop the i-. The noun's full form is what makes the question grammatical. Reply with eduze (nearby) or use direction words from yesterday.",
    examples: [
      { target: 'Kungaphi ihhotela?', native: 'Where is the hotel?' },
      { target: 'Kungaphi ibhanga?', native: 'Where is the bank?' },
      { target: 'Kungaphi isibhedlela?', native: 'Where is the hospital?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each place to its meaning',
      pairs: [
        { left: 'ihhotela', right: 'hotel' },
        { left: 'ibhanga', right: 'bank' },
        { left: 'isibhedlela', right: 'hospital' },
        { left: 'eduze', right: 'near / close by' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the question',
      sentence: '___ ihhotela? (Where is the hotel?)',
      options: ['Kungaphi', 'Iya ngaphi', 'Uya ngaphi'],
      correct: 'Kungaphi',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'Where is the bank?',
      correct: ['Kungaphi ibhanga?', 'Kungaphi ibhanga', 'kungaphi ibhanga?', 'kungaphi ibhanga'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "What's wrong with 'Kungaphi hhotela?' (no i-)",
      options: [
        { text: "The noun loses its class prefix and becomes ungrammatical.", correct: true },
        { text: "Nothing — it's a casual variant.", correct: false },
        { text: "It changes the meaning to 'whose hotel'.", correct: false },
      ],
      explanation: "Bantu nouns carry their class prefix as part of the word. Dropping i- from ihhotela is like dropping the first syllable of an English word — the result isn't a real word.",
    },
  ],

  rwenDialogue: {
    intro: "You're new to Bulawayo and looking for your hotel. You stop a woman selling vegetables.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: 'Sawubona mama, kungaphi ihhotela iBulawayo Rainbow?', native: "Hello mama, where is the Bulawayo Rainbow Hotel?", correct: true, feedback: "Greeting + specific name. She'll know it." },
        { target: 'Kungaphi?', native: 'Where is it?', correct: false, feedback: "Where is what? You skipped the noun and the greeting." },
        { target: 'Hhotela?', native: 'Hotel?', correct: false, feedback: "One word isn't a question. Use the full pattern." },
      ]},
      { speaker: 'npc',  target: 'Awu, eduze. Hamba phambili, kuze ufike kwiKhumalo Road. Jika kwesokunxele.', native: "Ah, close by. Go forward until you reach Khumalo Road. Turn left." },
      { speaker: 'rwen', rwenLine: "She used three things you already know: eduze, phambili, kwesokunxele. Travel-mode pays off when these phrases combine." },
      { speaker: 'user', userChoices: [
        { target: 'Ngiyabonga kakhulu.', native: 'Thank you very much.', correct: true, feedback: "Always close with thanks — directions are a gift in Bulawayo." },
      ]},
    ],
  },

  activeRecall: {
    instruction: 'Recall the place questions.',
    prompts: [
      { prompt: 'How do you ask "Where is the hotel?"', correct: ['Kungaphi ihhotela?', 'Kungaphi ihhotela', 'kungaphi ihhotela?'] },
      { prompt: 'How do you ask "Where is the bank?"', correct: ['Kungaphi ibhanga?', 'Kungaphi ibhanga', 'kungaphi ibhanga?'] },
      { prompt: 'How do you say "near / close by"?', correct: ['eduze'] },
    ],
  },

  mission: {
    title: 'Five buildings, five questions',
    task: "Pick five places in your nearest city — hotel, bank, hospital, post office, supermarket. Look up each Ndebele word (most are loanwords with an i- prefix). Ask 'Kungaphi i...?' for each, out loud.",
    rwenSignoff: "Asking is faster than searching. The question opens doors a map can't.",
  },

  phase8: {
    scenario: "You arrive in Bulawayo at night and need to find your hotel and a bank that's still open. Ask a hotel concierge for help with both.",
    rwenRole: "Bulawayo hotel concierge, late 30s, professional, switches comfortably between English and isiNdebele",
    successCriteria: "User used 'Kungaphi + i-noun?' at least once, and acknowledged a direction in reply.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
