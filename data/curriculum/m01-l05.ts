import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-makadii',
  module: 1,
  lesson: 5,
  title: 'Makadii — The Universal Greeting',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You now know morning, afternoon, and evening greetings. But what if you're not sure of the time? Or you meet a stranger and feel unsure? I have one word that saves you every time: Makadii.",
    culturalNote: "'Makadii' works morning, afternoon, and evening — with strangers, colleagues, elders, and friends. When you're unsure which greeting to use, Makadii is always correct and never rude.",
  },

  chunks: [
    {
      id: 'makadii',
      shona: 'Makadii?',
      english: 'How are you? (universal, any time)',
      literal: 'You (plural/respectful) how-are?',
      emoji: '🤝',
      phonetic: 'ma-kah-DEE',
      audioRef: null,
    },
    {
      id: 'ndiripo_makadiiwo',
      shona: 'Ndiripo, makadiiwo?',
      english: 'I am well, and how are you?',
      literal: 'I-am-here, you-how-are-also?',
      emoji: '💚',
      phonetic: 'ndi-RI-po ma-kah-DEE-wo',
      audioRef: null,
    },
    {
      id: 'wakadii',
      shona: 'Wakadii?',
      english: 'How are you? (informal, one person)',
      literal: 'You (singular/friend) how-are?',
      emoji: '😄',
      phonetic: 'wa-kah-DEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kadii — the wellness root',
    explanation: "'Kadii' asks about someone's state or condition. The prefix tells you who. Ma- is respectful/plural, Wa- is informal/singular. You've seen these prefixes before — they work on every verb in Shona.",
    examples: [
      { shona: 'Ma-kadii?', english: 'How are you? (respectful/plural)' },
      { shona: 'Wa-kadii?', english: 'How are you? (friend/singular)' },
      { shona: 'Ndi-ripo', english: 'I am here / I am well' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to who it is for',
      pairs: [
        { left: 'Makadii?', right: 'Any person, any time' },
        { left: 'Wakadii?', right: 'A friend or peer' },
        { left: 'Ndiripo, makadiiwo?', right: 'I am well, and you?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the universal greeting reply',
      sentence: 'Ndiripo, _____?',
      options: ['makadiiwo', 'wamukawo', 'maswerawo'],
      correct: 'makadiiwo',
      context: "You've just been greeted with 'Makadii?' — reply and ask back.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How are you? (universal — works any time)',
      correct: ['Makadii?', 'makadii?', 'Makadii', 'makadii'],
    },
    {
      type: 'multiple_choice',
      instruction: "You meet someone at a bus stop and aren't sure of the time. What do you say?",
      question: 'Choose the safest greeting',
      options: [
        { text: 'Makadii?', correct: true },
        { text: 'Mangwanani', correct: false },
        { text: 'Maswera sei?', correct: false },
      ],
      explanation: "'Makadii?' is the universal safety net. It works at any time of day and with anyone.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the full reply to a greeting',
      words: ['makadiiwo?', 'Ndiripo,'],
      correct: ['Ndiripo,', 'makadiiwo?'],
      translation: 'I am well, and how are you?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How are you? (to a close friend)',
      correct: ['Wakadii?', 'wakadii?', 'Wakadii', 'wakadii'],
    },
  ],

  rwenDialogue: {
    intro: "Two travellers meet on a road. Neither knows the other. You go first.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Makadii?', english: 'How are you?', correct: true, feedback: "Perfect — 'Makadii' works with a stranger at any time. Confident and respectful." },
          { shona: 'Wamuka sei?', english: 'How did you wake? (informal)', correct: false, feedback: "Too informal for a stranger — save 'Wamuka sei?' for friends." },
          { shona: 'Hesi', english: 'Hey (casual)', correct: false, feedback: "'Hesi' is very casual — for strangers, 'Makadii?' shows more respect." },
        ],
      },
      {
        speaker: 'npc',
        shona: 'Ndiripo, makadiiwo?',
        english: 'I am well, and how are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndiripo, ndatenda', english: 'I am well, thank you', correct: true, feedback: "Natural and warm. You held a real exchange with a stranger." },
          { shona: 'Mangwanani', english: 'Good morning', correct: false, feedback: "That's a greeting, not a reply to 'How are you?'." },
          { shona: 'Makadii?', english: 'How are you?', correct: false, feedback: "They already asked you — now they need your answer." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Two strangers. One exchange. That's how journeys begin in Zimbabwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are you? (universal — any person, any time)', correct: ['Makadii?', 'makadii?', 'Makadii', 'makadii'] },
      { prompt: 'I am well, and how are you?', correct: ['Ndiripo, makadiiwo?', 'ndiripo, makadiiwo?', 'Ndiripo makadiiwo', 'ndiripo makadiiwo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Makadii?' to greet someone you don't know well today — a colleague, a shopkeeper, anyone. Notice how it opens the conversation.",
    rwenSignoff: "You now have a greeting for every moment. Famba zvakanaka.",
  },
};

export default lesson;
