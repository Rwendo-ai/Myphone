import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-taura-zvishoma',
  module: 2,
  lesson: 5,
  title: 'Taura Zvishoma — Speak Slowly',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Native speakers talk fast. You're going to feel lost sometimes — and that's completely normal. These three phrases are your emergency tools. They buy you time and keep the conversation alive.",
    culturalNote: "Asking someone to speak slowly in Zimbabwe is never seen as rude. It signals you're trying — and Shona speakers deeply respect the effort. Most will slow down happily and even help you with the words.",
  },

  chunks: [
    {
      id: 'taura_zvishoma',
      shona: 'Taura zvishoma, ndapota',
      english: 'Please speak slowly',
      literal: 'Speak little-by-little, I-ask',
      emoji: '🐢',
      phonetic: 'TAU-ra zvi-SHO-ma NDA-po-ta',
      audioRef: null,
    },
    {
      id: 'dzokorora',
      shona: 'Dzokorora, ndapota',
      english: 'Please repeat that',
      literal: 'Repeat, I-ask',
      emoji: '🔄',
      phonetic: 'dzo-ko-RO-ra NDA-po-ta',
      audioRef: null,
    },
    {
      id: 'handanzwisisi',
      shona: 'Handanzwisisi',
      english: "I don't understand",
      literal: "I-understand-not",
      emoji: '😕',
      phonetic: 'han-dan-zwi-SI-si',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Commands in Shona — verb first',
    explanation: "In Shona, commands start with the verb. 'Taura' (speak), 'Dzokorora' (repeat) — the action comes first. Adding 'ndapota' softens it into a polite request rather than a demand.",
    examples: [
      { shona: 'Taura zvishoma', english: 'Speak slowly (command)' },
      { shona: 'Taura zvishoma, ndapota', english: 'Please speak slowly (polite)' },
      { shona: 'Dzokorora, ndapota', english: 'Please repeat (polite)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Taura zvishoma', right: 'Speak slowly' },
        { left: 'Dzokorora', right: 'Repeat that' },
        { left: 'Handanzwisisi', right: "I don't understand" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Make the request polite',
      sentence: 'Taura zvishoma, _____.',
      options: ['ndapota', 'ndatenda', 'ndiripo'],
      correct: 'ndapota',
      context: 'A local is speaking very fast.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Please speak slowly',
      correct: ['Taura zvishoma, ndapota', 'taura zvishoma, ndapota', 'Taura zvishoma ndapota', 'taura zvishoma ndapota'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone speaks very fast and you missed everything. What do you say?",
      question: 'Choose the best response',
      options: [
        { text: 'Dzokorora, ndapota. Taura zvishoma.', correct: true },
        { text: 'Handizivi', correct: false },
        { text: 'Zvinoenderana', correct: false },
      ],
      explanation: "Asking them to repeat AND speak slowly gives you the best chance of understanding. Double tool.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please repeat that"',
      words: ['ndapota', 'Dzokorora,'],
      correct: ['Dzokorora,', 'ndapota'],
      translation: 'Please repeat that',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I don't understand",
      correct: ['Handanzwisisi', 'handanzwisisi'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen speaks quickly. You need to slow the conversation down.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Unofara here kudzidza ChiShona? Zvakanaka zvikuru kunzwa kuti urikuedza!',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Handanzwisisi. Taura zvishoma, ndapota.', english: "I don't understand. Please speak slowly.", correct: true, feedback: "Exactly right — you named the problem and asked for what you need." },
          { shona: 'Ndanzwisisa', english: 'I understand', correct: false, feedback: "Only say that if you truly understood. Pretending slows your learning." },
          { shona: 'Handizivi', english: "I don't know", correct: false, feedback: "Close — but 'Handanzwisisi' (I don't understand) fits better here than 'Handizivi' (I don't know)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Haitei! Ndinokutaura zvishoma. — Are you happy learning Shona? It is wonderful to hear you are trying!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Asking for slower speech is not weakness — it's exactly what good learners do.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please speak slowly', correct: ['Taura zvishoma, ndapota', 'taura zvishoma, ndapota', 'Taura zvishoma ndapota'] },
      { prompt: "I don't understand", correct: ['Handanzwisisi', 'handanzwisisi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Watch 2 minutes of Shona audio or video online today. When you get lost, say 'Taura zvishoma' out loud — even to a recording.",
    rwenSignoff: "Slow is smooth. Smooth is fluent. Famba zvakanaka.",
  },
};

export default lesson;
