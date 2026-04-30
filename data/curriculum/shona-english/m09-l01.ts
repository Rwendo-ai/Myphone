import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-nzira',
  module: 9,
  lesson: 1,
  title: 'Nzira — The Way & Road',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Rwendo means journey. And every journey needs a nzira — a road, a way, a path. Zimbabwe's road network is part of daily life — from the busy highways of Harare to the dusty paths of rural villages. Know your nzira.",
    culturalNote: "In Zimbabwe, asking for directions is a social interaction — not just information exchange. People will often walk part of the way with you to ensure you reach your destination. The nzira is never just a road.",
  },

  chunks: [
    {
      id: 'nzira_ipi',
      target: 'Nzira ipi?',
      native: 'Which way? / Which road?',
      literal: 'Road which?',
      emoji: '🛣️',
      phonetic: 'nzi-ra I-pi',
      audioRef: null,
    },
    {
      id: 'ndeapi_nzira',
      target: 'Ndeapi nzira ye...?',
      native: 'Which is the way to...?',
      literal: 'It-is-which road of...?',
      emoji: '🗺️',
      phonetic: 'nde-A-pi nzi-ra ye',
      audioRef: null,
    },
    {
      id: 'nzira_yakanaka',
      target: 'Nzira yakanaka',
      native: 'A good road / The right way',
      literal: 'Road that-is-good',
      emoji: '✅',
      phonetic: 'nzi-ra ya-ka-NA-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Nzira + ipi/ndeapi — asking which way',
    explanation: "'Ipi?' (which one?) and 'Ndeapi?' (which is it?) are question words for identifying roads and directions. 'Nzira ipi?' (which road?) is shorter and informal. 'Ndeapi nzira ye [place]?' is more formal and complete.",
    examples: [
      { target: 'Nzira ipi?', native: 'Which way?' },
      { target: 'Ndeapi nzira yeHarare?', native: 'Which is the way to Harare?' },
      { target: 'Nzira iyi yakanaka', native: 'This road is good' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction phrase to its meaning',
      pairs: [
        { left: 'Nzira ipi?', right: 'Which way?' },
        { left: 'Ndeapi nzira ye...?', right: 'Which is the way to...?' },
        { left: 'Nzira yakanaka', right: 'A good road' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask which way to the market',
      sentence: 'Ndeapi nzira _____ musika?',
      options: ['ye', 'ya', 'yo'],
      correct: 'ye',
      context: 'Which is the way to the market?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Which way?',
      correct: ['Nzira ipi?', 'nzira ipi?', 'Nzira ipi', 'nzira ipi'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're lost and need to find the hospital. What do you ask?",
      question: 'Ask for the way to the hospital:',
      options: [
        { text: 'Ndeapi nzira yechipitari?', correct: true },
        { text: 'Chipitari chiripo here?', correct: false },
        { text: 'Ndirikuenda kuchipitari', correct: false },
      ],
      explanation: "'Ndeapi nzira ye[place]?' = which is the way to [place]? Chipitari = hospital.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Which is the way to town?'",
      words: ['Ndeapi', 'nzira', 'yetown?'],
      correct: ['Ndeapi', 'nzira', 'yetown?'],
      translation: 'Which is the way to town?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Which is the way to...?',
      correct: ['Ndeapi nzira ye', 'ndeapi nzira ye'],
    },
  ],

  rwenDialogue: {
    intro: "You're dropped off in an unfamiliar neighbourhood. Ask for directions.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndibatsire, ndapota. Ndeapi nzira ye musika?', native: 'Please help me. Which is the way to the market?', correct: true, feedback: "Polite, specific destination asked. The person is already pointing." },
          { target: 'Nzira ipi?', native: 'Which way?', correct: false, feedback: "Good start — but add where you're going: 'Ndeapi nzira ye musika?' Which way to the market?" },
          { target: 'Handizivi nzira', native: "I don't know the way", correct: false, feedback: "That's the problem — ask for help: 'Ndibatsire, ndapota. Ndeapi nzira ye musika?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Enda mberi, udzoke kurudyi — musika uri pedyo.',
        native: 'Go forward, then turn right — the market is nearby.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Mberi (forward), kurudyi (right), pedyo (nearby). Three direction words — hold them. Lesson 2 covers them all.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Which way?', correct: ['Nzira ipi?', 'nzira ipi?', 'Nzira ipi', 'nzira ipi'] },
      { prompt: 'Which is the way to...?', correct: ['Ndeapi nzira ye', 'ndeapi nzira ye'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you need directions, say 'Ndeapi nzira ye [place]?' — even quietly before asking in English. The Shona question first.",
    rwenSignoff: "Every road has a Shona name. Find yours. Famba zvakanaka.",
  },
};

export default lesson;
