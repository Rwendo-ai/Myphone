import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope',
  module: 10,
  lesson: 8,
  title: 'Hope & The Future — Tariro',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Tariro — hope. One of the most beautiful words in Shona. It's also one of the most common names given to children in Zimbabwe. When parents name a child Tariro, they are planting hope in the world. Let's learn to speak about the future with hope.",
    culturalNote: "Hope is not passive in Shona culture — it's active. 'Ndinotarisira' (I hope for / I expect) implies looking ahead with intention. Zimbabwe has faced enormous challenges and emerged with extraordinary resilience — hope is not naive there, it is hard-earned.",
  },

  chunks: [
    {
      id: 'tariro',
      shona: 'Tariro',
      english: 'Hope',
      literal: 'Tariro (hope, expectation)',
      emoji: '🌅',
      phonetic: 'ta-RI-ro',
      audioRef: null,
    },
    {
      id: 'ndinotarisira',
      shona: 'Ndinotarisira...',
      english: 'I hope for / I expect...',
      literal: 'I-hope-for...',
      emoji: '✨',
      phonetic: 'ndi-no-ta-RI-si-ra',
      audioRef: null,
    },
    {
      id: 'ramangwana',
      shona: 'Ramangwana',
      english: 'The future / Tomorrow',
      literal: 'That-which-comes (tomorrow/future)',
      emoji: '➡️',
      phonetic: 'ra-man-GWA-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tariro — hope as an active force',
    explanation: "'Ndinotarisira' (I hope/expect) is the verb form of tariro. Add it before any future desire: Ndinotarisira kuona Zimbabwe (I hope to see Zimbabwe), Ndinotarisira kudzidza ChiShona (I hope to learn Shona). Hope + ku- infinitive = I hope to [do].",
    examples: [
      { shona: 'Ndinotarisira kuona Zimbabwe', english: 'I hope to see Zimbabwe' },
      { shona: 'Ramangwana rakanaka', english: 'A good future / Good tomorrow' },
      { shona: 'Tariro haiperi', english: 'Hope never ends' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hope phrase to its meaning',
      pairs: [
        { left: 'Tariro', right: 'Hope' },
        { left: 'Ndinotarisira...', right: 'I hope for / I expect...' },
        { left: 'Ramangwana', right: 'The future / Tomorrow' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Express hope for the future',
      sentence: 'Ndinotarisira _____ rakanaka.',
      options: ['ramangwana', 'nguva', 'nzira'],
      correct: 'ramangwana',
      context: 'I hope for a good future.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Hope',
      correct: ['Tariro', 'tariro'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I hope to visit Zimbabwe'?",
      question: 'I hope to visit Zimbabwe:',
      options: [
        { text: 'Ndinotarisira kushanya Zimbabwe', correct: true },
        { text: 'Ndichaenda Zimbabwe', correct: false },
        { text: 'Ndinoda Zimbabwe', correct: false },
      ],
      explanation: "'Ndinotarisira ku-' + verb = I hope to [do]. Kushanya = to visit. Ndinotarisira kushanya Zimbabwe = I hope to visit Zimbabwe.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Hope never ends'",
      words: ['Tariro', 'haiperi.'],
      correct: ['Tariro', 'haiperi.'],
      translation: 'Hope never ends',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'The future / Tomorrow',
      correct: ['Ramangwana', 'ramangwana'],
    },
  ],

  rwenDialogue: {
    intro: "As you near the end of Rwendo, Rwen asks about your hopes.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Unatarisira chii? MuChiShona — unatarisira chii nezve ramangwana?",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndinotarisira kuona Zimbabwe. Ndinotarisira kutaura ChiShona zvakanaka. Ndinotarisira ramangwana rakanaka.', english: 'I hope to see Zimbabwe. I hope to speak Shona well. I hope for a good future.', correct: true, feedback: "Three hopes — travel, language, life. Said in Shona. Rwen is genuinely moved." },
          { shona: 'Ndinotarisira kuona Zimbabwe', english: 'I hope to see Zimbabwe', correct: false, feedback: "Good — add your language hope and life hope: 'Ndinotarisira kutaura ChiShona. Ndinotarisira ramangwana rakanaka.'" },
          { shona: 'Handizivi', english: "I don't know", correct: false, feedback: "You have hopes — 'Ndinotarisira kuona Zimbabwe. Ndinotarisira kutaura ChiShona.' Say them." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tariro haiperi. Your hopes are real. And your Shona makes them reachable. Ramangwana rakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Hope', correct: ['Tariro', 'tariro'] },
      { prompt: 'I hope for / I expect...', correct: ['Ndinotarisira', 'ndinotarisira'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Write or say three hopes using 'Ndinotarisira ku[verb]...' Make them real. Make them yours. Say them in Shona.",
    rwenSignoff: "Tariro haiperi. Hope never ends. Famba zvakanaka.",
  },
};

export default lesson;
