import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-ndinofara',
  module: 3,
  lesson: 8,
  title: 'Ndinofara — I Am Happy',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Language is emotion. You can have a perfect vocabulary and zero connection — or simple words spoken with real feeling that land like a song. Today we learn to express how we actually feel.",
    culturalNote: "Expressing happiness and enthusiasm in Shona is completely natural and valued. Shona culture is expressive — people say how they feel. 'Ndinofara' said with a smile carries genuine warmth.",
  },

  chunks: [
    {
      id: 'ndinofara',
      target: 'Ndinofara',
      native: 'I am happy / I am glad',
      literal: 'I-am-happy',
      emoji: '😊',
      phonetic: 'ndi-no-FA-ra',
      audioRef: null,
    },
    {
      id: 'ndinofara_kukuziva',
      target: 'Ndinofara kukuziva',
      native: 'I am happy to know you / Nice to meet you',
      literal: 'I-am-happy to-know-you',
      emoji: '🤗',
      phonetic: 'ndi-no-FA-ra ku-ku-ZI-va',
      audioRef: null,
    },
    {
      id: 'zvakanakisisa',
      target: 'Zvakanakisisa',
      native: 'Excellent / Very good / Wonderful',
      literal: 'It-is-very-good-indeed',
      emoji: '🌟',
      phonetic: 'zva-ka-na-ki-SI-sa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinofara + ku- verb — I am happy to [do something]',
    explanation: "Add 'ku-' plus a verb after 'ndinofara' to say you're happy to do something. 'Ndinofara kukuziva' (happy to know you), 'ndinofara kudzidza' (happy to learn). The ku- pattern again — it unlocks infinite expression.",
    examples: [
      { target: 'Ndinofara', native: 'I am happy' },
      { target: 'Ndinofara kukuziva', native: 'I am happy to know you' },
      { target: 'Ndinofara kudzidza ChiShona', native: 'I am happy to be learning Shona' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ndinofara', right: 'I am happy' },
        { left: 'Ndinofara kukuziva', right: 'Nice to meet you' },
        { left: 'Zvakanakisisa', right: 'Excellent / Wonderful' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Express happiness at meeting someone',
      sentence: 'Ndinofara _____.',
      options: ['kukuziva', 'kudzidza', 'kuenda'],
      correct: 'kukuziva',
      context: 'You just met someone new and want to express genuine pleasure.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am happy',
      correct: ['Ndinofara', 'ndinofara'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your lesson went very well. How do you express that in Shona?",
      question: 'Choose the best expression',
      options: [
        { text: 'Zvakanakisisa', correct: true },
        { text: 'Zvakanaka', correct: false },
        { text: 'Haitei', correct: false },
      ],
      explanation: "'Zvakanakisisa' is 'excellent / very good indeed' — stronger than 'zvakanaka' (good). Use it for genuine excellence.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am happy to know you"',
      words: ['kukuziva', 'Ndinofara'],
      correct: ['Ndinofara', 'kukuziva'],
      translation: 'I am happy to know you / Nice to meet you',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Excellent / Wonderful',
      correct: ['Zvakanakisisa', 'zvakanakisisa'],
    },
  ],

  rwenDialogue: {
    intro: "You've completed several lessons. Rwen asks how you're feeling about your progress.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Uri kufara here naRwendo?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinofara zvikuru. Zvakanakisisa.', native: 'I am very happy. It is excellent.', correct: true, feedback: "Genuine, warm, and full of life. Rwen glows." },
          { target: 'Ndinofara', native: 'I am happy', correct: false, feedback: "Good — and add 'zvikuru' for extra warmth, and 'Zvakanakisisa' to describe the experience." },
          { target: 'Zvakanaka', native: "It's good", correct: false, feedback: "That works — but if you really mean it, 'Zvakanakisisa' carries much more feeling." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Ndinofara kukuziva zvakare. Tinoenderera mberi pamwe.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Happiness shared in Shona is happiness doubled.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am happy', correct: ['Ndinofara', 'ndinofara'] },
      { prompt: 'Excellent / Wonderful', correct: ['Zvakanakisisa', 'zvakanakisisa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find something that genuinely makes you happy today. Say 'Ndinofara' — and say why: 'Ndinofara nokuti...' (I am happy because...)",
    rwenSignoff: "Joy in Shona sounds like music. Famba zvakanaka.",
  },
};

export default lesson;
