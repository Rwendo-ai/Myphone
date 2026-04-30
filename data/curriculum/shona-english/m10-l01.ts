import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-ndinofara',
  module: 10,
  lesson: 1,
  title: 'Ndinofara — Happiness & Joy',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "We end where the heart is. Module 10 is about emotions — the reason language exists in the first place. Not just words, but feelings. Starting with the best one: Ndinofara — I am happy. Because you should be. You've come this far.",
    culturalNote: "Joy in Shona culture is communal and expressive. Singing, clapping, ululating (hombera) — happiness is performed and shared, not kept private. 'Ndinofara' said with physical expression is more genuine than said quietly.",
  },

  chunks: [
    {
      id: 'ndinofara_zvikuru',
      target: 'Ndinofara zvikuru',
      native: 'I am very happy',
      literal: 'I-am-happy greatly',
      emoji: '😄',
      phonetic: 'ndi-no-FA-ra zvi-KU-ru',
      audioRef: null,
    },
    {
      id: 'mufaro',
      target: 'Mufaro',
      native: 'Happiness / Joy',
      literal: 'Mufaro (the state of happiness)',
      emoji: '✨',
      phonetic: 'mu-FA-ro',
      audioRef: null,
    },
    {
      id: 'ndinofara_kukuona',
      target: 'Ndinofara kukuona',
      native: 'I am happy to see you',
      literal: 'I-am-happy to-see-you',
      emoji: '🤗',
      phonetic: 'ndi-no-FA-ra ku-ku-O-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinofara + ku- verb — I am happy to [do something]',
    explanation: "'Ndinofara' + 'ku-verb' = I am happy to [verb]. Ndinofara kukuona (happy to see you), Ndinofara kudzidza (happy to learn), Ndinofara kuva pano (happy to be here). Happiness directed at an action.",
    examples: [
      { target: 'Ndinofara kukuona', native: 'I am happy to see you' },
      { target: 'Ndinofara kuva pano', native: 'I am happy to be here' },
      { target: 'Mufaro ndirwo rugare', native: 'Happiness is peace' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the joy phrase to its meaning',
      pairs: [
        { left: 'Ndinofara zvikuru', right: 'I am very happy' },
        { left: 'Mufaro', right: 'Happiness / Joy' },
        { left: 'Ndinofara kukuona', right: 'I am happy to see you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Express great happiness',
      sentence: 'Ndinofara _____ kuva pano.',
      options: ['zvikuru', 'zvishoma', 'chete'],
      correct: 'zvikuru',
      context: 'I am very happy to be here.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am very happy',
      correct: ['Ndinofara zvikuru', 'ndinofara zvikuru'],
    },
    {
      type: 'multiple_choice',
      instruction: "You see an old friend after a long time. What do you say?",
      question: 'Expressing joy at reunion:',
      options: [
        { text: 'Ndinofara zvikuru kukuona!', correct: true },
        { text: 'Makadii?', correct: false },
        { text: 'Ndatenda', correct: false },
      ],
      explanation: "'Ndinofara zvikuru kukuona!' — I am very happy to see you! — is the warmest reunion expression.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Happiness is the foundation of life'",
      words: ['Mufaro', 'ndiwo', 'musimboti', 'wehupenyu.'],
      correct: ['Mufaro', 'ndiwo', 'musimboti', 'wehupenyu.'],
      translation: 'Happiness is the foundation of life',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am happy to see you',
      correct: ['Ndinofara kukuona', 'ndinofara kukuona'],
    },
  ],

  rwenDialogue: {
    intro: "You've made it to Module 10. Rwen wants to know how you're feeling.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Uri kufara here naRwendo? Wafamba nzira refu.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinofara zvikuru. Ndinofara kudzidza ChiShona. Ndinofara kukuona, Rwen.', native: "I am very happy. I am happy to learn Shona. I am happy to see you, Rwen.", correct: true, feedback: "Three 'ndinofara' statements — learning, language, friendship. That's a complete emotional portrait." },
          { target: 'Ndinofara', native: 'I am happy', correct: false, feedback: "Show the depth of your happiness — 'Ndinofara zvikuru. Ndinofara kudzidza. Ndinofara kukuona, Rwen.'" },
          { target: 'Zvakanaka', native: "It's good", correct: false, feedback: "Be personal — 'Ndinofara zvikuru kukuona, Rwen. Ndinofara kudzidza ChiShona nemi.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndinofara kukuona zvakare. Mufaro wako ndiwo mutsvairo — it sweeps clean. Module 10 begins.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am very happy', correct: ['Ndinofara zvikuru', 'ndinofara zvikuru'] },
      { prompt: 'Happiness / Joy', correct: ['Mufaro', 'mufaro'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name three things that make you happy today. Say 'Ndinofara [noun/activity]' for each. Let Shona hold your joy.",
    rwenSignoff: "Mufaro — carry it with you always. Famba zvakanaka.",
  },
};

export default lesson;
