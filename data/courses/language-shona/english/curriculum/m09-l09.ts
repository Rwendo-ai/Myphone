import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-sightseeing',
  module: 9,
  lesson: 9,
  title: 'Sightseeing — Zimbabwe\'s Wonders',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Zimbabwe is one of the most beautiful countries in Africa — Victoria Falls, Great Zimbabwe, Hwange, the Eastern Highlands. Being able to express wonder and ask about these places in Shona transforms tourism into cultural immersion.",
    culturalNote: "Great Zimbabwe — 'Dzimba dzamabwe' (houses of stone) — is the origin of Zimbabwe's name. It was the capital of a great medieval empire. Visiting it and speaking Shona about it connects you to 1,000 years of history.",
  },

  chunks: [
    {
      id: 'ndinoda_kuona',
      target: 'Ndinoda kuona...',
      native: 'I want to see...',
      literal: 'I-want to-see...',
      emoji: '👁️',
      phonetic: 'ndi-no-da ku-O-na',
      audioRef: null,
    },
    {
      id: 'nzvimbo_yakanaka',
      target: 'Nzvimbo yakanaka',
      native: 'A beautiful place',
      literal: 'Place that-is-good',
      emoji: '🌅',
      phonetic: 'nzvi-mbo ya-ka-NA-ka',
      audioRef: null,
    },
    {
      id: 'dzimba_dzamabwe',
      target: 'Dzimba dzamabwe',
      native: 'Great Zimbabwe (houses of stone)',
      literal: 'Houses of-stone',
      emoji: '🏛️',
      phonetic: 'DZI-mba dza-ma-BWE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinoda kuona [place] — I want to see [place]',
    explanation: "'Ndinoda kuona' + place = I want to see [place]. This pattern works for any tourist destination. Add an adjective: 'Ndinoda kuona nzvimbo yakanaka' (I want to see a beautiful place). Or get specific: 'Ndinoda kuona Victoria Falls.'",
    examples: [
      { target: 'Ndinoda kuona Victoria Falls', native: 'I want to see Victoria Falls' },
      { target: 'Dzimba dzamabwe — nzvimbo yakanaka', native: 'Great Zimbabwe — a beautiful place' },
      { target: 'Ndinoda kuona Zimbabwe yose', native: 'I want to see all of Zimbabwe' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the sightseeing phrase to its meaning',
      pairs: [
        { left: 'Ndinoda kuona...', right: 'I want to see...' },
        { left: 'Nzvimbo yakanaka', right: 'A beautiful place' },
        { left: 'Dzimba dzamabwe', right: 'Great Zimbabwe (houses of stone)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you want to see Victoria Falls',
      sentence: 'Ndinoda _____ Victoria Falls.',
      options: ['kuona', 'kuenda', 'kutaura'],
      correct: 'kuona',
      context: 'I want to see Victoria Falls.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I want to see...',
      correct: ['Ndinoda kuona', 'ndinoda kuona'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does 'Dzimba dzamabwe' literally mean?",
      question: 'Dzimba dzamabwe means:',
      options: [
        { text: 'Houses of stone', correct: true },
        { text: 'Great Zimbabwe', correct: false },
        { text: 'Land of beauty', correct: false },
      ],
      explanation: "Dzimba (houses) + dzamabwe (of stone). Zimbabwe gets its name from this phrase — the great stone city that dominated medieval southern Africa.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Great Zimbabwe is a very beautiful place'",
      words: ['Dzimba', 'dzamabwe', 'nzvimbo', 'yakanaka', 'zvikuru.'],
      correct: ['Dzimba', 'dzamabwe', 'nzvimbo', 'yakanaka', 'zvikuru.'],
      translation: 'Great Zimbabwe is a very beautiful place',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'A beautiful place',
      correct: ['Nzvimbo yakanaka', 'nzvimbo yakanaka'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks what you most want to see in Zimbabwe.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Uri kuenda kuZimbabwe — unoda kuona chii chikuru?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinoda kuona Dzimba dzamabwe. Uye ndinoda kuona Victoria Falls. Zimbabwe inzvimbo yakanaka zvikuru.', native: "I want to see Great Zimbabwe. And I want to see Victoria Falls. Zimbabwe is a very beautiful place.", correct: true, feedback: "Two iconic destinations + love for Zimbabwe itself. Rwen glows with pride." },
          { target: 'Ndinoda kuona Victoria Falls', native: 'I want to see Victoria Falls', correct: false, feedback: "Good — add Great Zimbabwe and your overall feeling: 'Ndinoda kuona Dzimba dzamabwe zvakare. Zimbabwe inzvimbo yakanaka zvikuru.'" },
          { target: 'Ndinoda kuona zvose', native: 'I want to see everything', correct: false, feedback: "Be specific — 'Ndinoda kuona Dzimba dzamabwe uye Victoria Falls.' Name what matters most to you." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Dzimba dzamabwe — nzira yeruzivo rweZimbabwe. I'll take you there myself.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want to see...', correct: ['Ndinoda kuona', 'ndinoda kuona'] },
      { prompt: 'A beautiful place', correct: ['Nzvimbo yakanaka', 'nzvimbo yakanaka'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name three places in Zimbabwe you most want to see. Say 'Ndinoda kuona [place]' for each. Look them up if you haven't — let Shona introduce you to Zimbabwe.",
    rwenSignoff: "Zimbabwe — nzvimbo yakanaka zvikuru. The most beautiful place. Famba zvakanaka.",
  },
};

export default lesson;
