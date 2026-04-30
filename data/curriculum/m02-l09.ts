import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-ndinoda',
  module: 2,
  lesson: 9,
  title: 'Ndinoda — I Want / I Need',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Ndinoda' is one of the most powerful phrases in all of Shona. Want food? Ndinoda. Need a seat? Ndinoda. Want to go home? Ndinoda. One phrase — endless uses.",
    culturalNote: "In Shona, the same word 'ndinoda' covers both wanting and needing. Context makes the difference. In a market or restaurant, it's 'I want'. In an emergency, it's 'I need'. Shona trusts context to carry meaning.",
  },

  chunks: [
    {
      id: 'ndinoda',
      shona: 'Ndinoda...',
      english: 'I want / I need...',
      literal: 'I-want/love...',
      emoji: '🎯',
      phonetic: 'ndi-no-DA',
      audioRef: null,
    },
    {
      id: 'ndinoda_chete',
      shona: '...chete',
      english: 'only / just that',
      literal: 'only/alone',
      emoji: '☝️',
      phonetic: 'CHE-te',
      audioRef: null,
    },
    {
      id: 'handidi',
      shona: 'Handidi',
      english: "I don't want",
      literal: "I-want-not",
      emoji: '🙅',
      phonetic: 'han-DI-di',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinoda → Handidi — want vs not want',
    explanation: "'Ndinoda' (I want) becomes 'Handidi' (I don't want) with the Ha- negation. Notice 'noda' changes to 'didi' — Shona verb stems shift in negation. You'll see this pattern throughout the language.",
    examples: [
      { shona: 'Ndinoda sadza', english: 'I want sadza' },
      { shona: 'Handidi sadza', english: "I don't want sadza" },
      { shona: 'Ndinoda mvura chete', english: 'I just want water' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ndinoda', right: 'I want / I need' },
        { left: 'Chete', right: 'Only / Just' },
        { left: 'Handidi', right: "I don't want" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Order just water at a restaurant',
      sentence: 'Ndinoda mvura _____.',
      options: ['chete', 'zvikuru', 'ndapota'],
      correct: 'chete',
      context: "The waiter offers food and drink. You only want water.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I want / I need (the phrase on its own)',
      correct: ['Ndinoda', 'ndinoda'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone offers you something you don't want. How do you decline politely?",
      question: 'Choose the polite refusal',
      options: [
        { text: 'Handidi, ndatenda', correct: true },
        { text: 'Ndinoda', correct: false },
        { text: 'Haitei', correct: false },
      ],
      explanation: "'Handidi, ndatenda' — I don't want it, thank you — is a complete, polite refusal.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I don\'t want"',
      words: ['Handidi'],
      correct: ['Handidi'],
      translation: "I don't want",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I don't want",
      correct: ['Handidi', 'handidi'],
    },
  ],

  rwenDialogue: {
    intro: "You are at a market stall. The vendor offers you several things. Be clear about what you want.",
    lines: [
      {
        speaker: 'npc',
        shona: 'Unoda chii? Ndinayo mvura, sadza, uye chingwa.',
        english: 'What do you want? I have water, sadza, and bread.',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndinoda mvura chete, ndapota.', english: 'I just want water, please.', correct: true, feedback: "Clear, polite, and precise. The vendor knows exactly what to give you." },
          { shona: 'Ndinoda', english: 'I want', correct: false, feedback: "Good start — but tell them what you want. 'Ndinoda mvura chete' — I just want water." },
          { shona: 'Handidi', english: "I don't want", correct: false, feedback: "That declines everything — say what you DO want: 'Ndinoda mvura chete'." },
        ],
      },
      {
        speaker: 'npc',
        shona: 'Zvinoenderana. Tora mvura yako.',
        english: "No problem. Take your water.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You knew exactly what you wanted and said it. That's confidence in a new language.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want / I need', correct: ['Ndinoda', 'ndinoda'] },
      { prompt: "I don't want", correct: ['Handidi', 'handidi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order something today using 'Ndinoda' — even if it's just in your head when you order a coffee or choose what to eat.",
    rwenSignoff: "Know what you want. Say it clearly. Famba zvakanaka.",
  },
};

export default lesson;
