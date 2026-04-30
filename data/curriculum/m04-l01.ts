import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-mu-va',
  module: 4,
  lesson: 1,
  title: 'Munhu / Vanhu — Person & People',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Welcome to the hardest — and most rewarding — part of Shona. Noun classes. Every noun belongs to a class, and that class shapes every word around it. Start with the most important class: people.",
    culturalNote: "In Shona, people are always Class 1/2 — the most respected class. The prefixes mu- (singular) and va- (plural) appear constantly. Once you see the pattern, the whole language opens up.",
  },

  chunks: [
    {
      id: 'munhu',
      shona: 'Munhu',
      english: 'A person / Someone',
      literal: 'Mu-nhu (class 1 prefix + stem)',
      emoji: '🧑',
      phonetic: 'MU-nhu',
      audioRef: null,
    },
    {
      id: 'vanhu',
      shona: 'Vanhu',
      english: 'People',
      literal: 'Va-nhu (class 2 plural prefix)',
      emoji: '👥',
      phonetic: 'VA-nhu',
      audioRef: null,
    },
    {
      id: 'mukomana',
      shona: 'Mukomana / Musikana',
      english: 'Boy / Girl',
      literal: 'Mu-komana / Mu-sikana (people class)',
      emoji: '🧒',
      phonetic: 'mu-ko-MA-na / mu-si-KA-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mu- singular, Va- plural (people)',
    explanation: "People nouns start with Mu- (one person) and Va- (many people). This prefix also appears on verbs that describe what those people do. One prefix — two jobs.",
    examples: [
      { shona: 'Mu-nhu → Va-nhu', english: 'Person → People' },
      { shona: 'Mu-dzidzisi → Va-dzidzisi', english: 'Teacher → Teachers' },
      { shona: 'Mu-komana → Va-komana', english: 'Boy → Boys' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'Munhu', right: 'A person' },
        { left: 'Vanhu', right: 'People' },
        { left: 'Mukomana', right: 'Boy' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Make it plural',
      sentence: '_____ vanhu vanotaura ChiShona.',
      options: ['Vazhinji', 'Muzhinji', 'Chinhu'],
      correct: 'Vazhinji',
      context: 'Many people speak Shona.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'A person',
      correct: ['Munhu', 'munhu'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which prefix makes a person noun plural?',
      question: 'Mudzidzisi (teacher) → ?',
      options: [
        { text: 'Vadzidzisi', correct: true },
        { text: 'Chidzidzisi', correct: false },
        { text: 'Midzidzisi', correct: false },
      ],
      explanation: "People nouns always use Va- for plural. Vadzidzisi = teachers.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "People speak Shona"',
      words: ['ChiShona.', 'Vanhu', 'vanotaura'],
      correct: ['Vanhu', 'vanotaura', 'ChiShona.'],
      translation: 'People speak Shona',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'People',
      correct: ['Vanhu', 'vanhu'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen introduces you to the concept of noun classes using real examples around you.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ona — munhu uyu ndiMai Chipo. Vanhu ava ndivanhu vemusha wangu.",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndanzwisisa. Munhu — mumwe. Vanhu — vazhinji.', english: 'I understand. Munhu — one. Vanhu — many.', correct: true, feedback: "Exactly. You already have the pattern." },
          { shona: 'Handanzwisisi', english: "I don't understand", correct: false, feedback: "No worries — munhu = one person, vanhu = many people. Mu- becomes Va-." },
          { shona: 'Ndatenda', english: 'Thank you', correct: false, feedback: "Try to respond to the lesson content — 'Munhu = one person, Vanhu = many people'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka. Noun classes are the skeleton of Shona. Once you see them, you see everything.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'A person (singular)', correct: ['Munhu', 'munhu'] },
      { prompt: 'People (plural)', correct: ['Vanhu', 'vanhu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at the people around you today. Say 'Munhu' for one person and 'Vanhu' for a group — even silently.",
    rwenSignoff: "You've started the grammar journey. Famba zvakanaka.",
  },
};

export default lesson;
