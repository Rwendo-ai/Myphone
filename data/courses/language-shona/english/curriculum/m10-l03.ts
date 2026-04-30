import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear',
  module: 10,
  lesson: 3,
  title: 'Ndakatya — Fear & Courage',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Fear and courage are two sides of the same coin. In Shona, 'Usatya' (don't be afraid) is one of the most common phrases of encouragement. It's what a parent says to a child, what an elder says before a challenge, what a friend says before something hard.",
    culturalNote: "The Shona concept of 'kushinga' (being strong/brave) is deeply valued. Showing courage — especially in the face of learning something new and difficult — is celebrated. Every lesson you complete is an act of kushinga.",
  },

  chunks: [
    {
      id: 'ndakatya',
      target: 'Ndakatya',
      native: 'I am afraid / I was scared',
      literal: 'I-became-afraid',
      emoji: '😨',
      phonetic: 'nda-ka-TYA',
      audioRef: null,
    },
    {
      id: 'usatya',
      target: 'Usatya!',
      native: "Don't be afraid! / Be brave!",
      literal: "Don't-fear!",
      emoji: '💪',
      phonetic: 'u-sat-YA',
      audioRef: null,
    },
    {
      id: 'kushinga',
      target: 'Kushinga',
      native: 'Courage / To be strong/brave',
      literal: 'To-be-strong/persistent',
      emoji: '🦁',
      phonetic: 'ku-SHIN-ga',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ine / Usatya — fear and its antidote',
    explanation: "'Ndakatya' (I became afraid). 'Usatya' (don't be afraid — usa- negation). 'Kushinga' (courage — the noun/verb of being brave). These three words form the fear-to-courage arc that Shona uses to encourage people through difficulty.",
    examples: [
      { target: 'Ndakatya zvishoma', native: 'I was a little afraid' },
      { target: 'Usatya — ndinakwo', native: "Don't be afraid — I've got it" },
      { target: 'Rambai makashinga', native: 'Keep being strong (common encouragement)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the courage phrase to its meaning',
      pairs: [
        { left: 'Ndakatya', right: 'I am afraid' },
        { left: 'Usatya!', right: "Don't be afraid!" },
        { left: 'Kushinga', right: 'Courage / To be brave' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Encourage someone who is afraid",
      sentence: 'Usa_____ — ndinakwo.',
      options: ['tya', 'suwa', 'enda'],
      correct: 'tya',
      context: "Don't be afraid — I've got this.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "Don't be afraid!",
      correct: ['Usatya!', 'usatya!', 'Usatya', 'usatya'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend is nervous about something big. What do you say?",
      question: 'Encourage a nervous friend:',
      options: [
        { text: 'Usatya! Unokwanisa. Rambai makashinga.', correct: true },
        { text: 'Ndakatya zvakare', correct: false },
        { text: 'Zvinosuwa', correct: false },
      ],
      explanation: "'Usatya! Unokwanisa. Rambai makashinga.' — Don't fear! You can do it. Keep being strong. Complete Shona encouragement.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Courage — don't be afraid'",
      words: ['Kushinga', '—', 'usatya.'],
      correct: ['Kushinga', '—', 'usatya.'],
      translation: 'Courage — don\'t be afraid',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Courage / To be brave',
      correct: ['Kushinga', 'kushinga'],
    },
  ],

  rwenDialogue: {
    intro: "You admit something to Rwen — learning Shona was scary at first.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndakatya zvishoma kutanga kudzidza ChiShona. Asi ndakazoshinga.', native: 'I was a little afraid to start learning Shona. But I found courage.', correct: true, feedback: "Honest about fear, proud of courage. That is the full arc. Rwen applauds." },
          { target: 'Handina kutya', native: 'I was not afraid', correct: false, feedback: "Be honest — 'Ndakatya zvishoma' (I was a little afraid). Then: 'Asi ndakazoshinga.' But I found courage." },
          { target: 'Ndinofara', native: 'I am happy', correct: false, feedback: "Share the journey — fear first, then courage: 'Ndakatya zvishoma. Asi ndakazoshinga.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Kushinga — that's the whole journey in one word. You were afraid. You came anyway. That's courage.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am afraid', correct: ['Ndakatya', 'ndakatya'] },
      { prompt: "Don't be afraid!", correct: ['Usatya!', 'usatya!', 'Usatya', 'usatya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of something that scares you. Say 'Ndakatya [that thing].' Then say 'Asi ndakazoshinga.' But I found courage. Let Shona name both your fear and your strength.",
    rwenSignoff: "Kushinga ndiyo pfuma yakakura. Courage is the greatest wealth. Famba zvakanaka.",
  },
};

export default lesson;
