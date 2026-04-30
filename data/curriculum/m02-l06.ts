import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-ndinoda-rubatsiro',
  module: 2,
  lesson: 6,
  title: 'Ndinoda Rubatsiro — I Need Help',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Needing help is human. Asking for it in the local language? That's courage. 'Ndinoda' is one of the most powerful phrases in Shona — it unlocks almost any request.",
    culturalNote: "In Zimbabwean culture, asking for help directly (with politeness) is respected. People rarely turn down a genuine request for assistance — especially from someone learning the language. The effort itself is the door-opener.",
  },

  chunks: [
    {
      id: 'ndinoda_rubatsiro',
      target: 'Ndinoda rubatsiro',
      native: 'I need help',
      literal: 'I-want/need help',
      emoji: '🆘',
      phonetic: 'ndi-no-DA ru-bat-SI-ro',
      audioRef: null,
    },
    {
      id: 'ndinogona',
      target: 'Ndinogona',
      native: 'I can / I am able',
      literal: 'I-can/am-able',
      emoji: '💪',
      phonetic: 'ndi-no-GO-na',
      audioRef: null,
    },
    {
      id: 'handigoni',
      target: 'Handigoni',
      native: "I can't / I am not able",
      literal: "I-can-not",
      emoji: '🚫',
      phonetic: 'han-di-GO-ni',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinoda — I want / I need',
    explanation: "'Ndinoda' means both 'I want' and 'I need' depending on context. Follow it with any noun to express desire or need. It is one of Shona's most versatile phrases.",
    examples: [
      { target: 'Ndinoda rubatsiro', native: 'I need help' },
      { target: 'Ndinoda mvura', native: 'I need/want water' },
      { target: 'Ndinoda kuenda', native: 'I need/want to go' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndinoda rubatsiro', right: 'I need help' },
        { left: 'Ndinogona', right: 'I can / I am able' },
        { left: 'Handigoni', right: "I can't" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the request for help',
      sentence: 'Ndinoda _____, ndapota.',
      options: ['rubatsiro', 'ruregerero', 'rukudzo'],
      correct: 'rubatsiro',
      context: 'You are struggling with a heavy bag.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I need help',
      correct: ['Ndinoda rubatsiro', 'ndinoda rubatsiro'],
    },
    {
      type: 'multiple_choice',
      instruction: "You cannot carry all the boxes alone. What do you say?",
      question: 'Choose the right phrase',
      options: [
        { text: 'Handigoni. Ndinoda rubatsiro.', correct: true },
        { text: 'Ndinogona', correct: false },
        { text: 'Handizivi', correct: false },
      ],
      explanation: "'Handigoni. Ndinoda rubatsiro.' — I can't. I need help. — is honest and clear.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I can"',
      words: ['Ndinogona'],
      correct: ['Ndinogona'],
      translation: 'I can / I am able',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I can't / I am not able",
      correct: ["Handigoni", 'handigoni'],
    },
  ],

  rwenDialogue: {
    intro: "You are trying to set up a tent and it is not going well. Rwen walks by.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Zviri sei? Unogona here?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Handigoni. Ndinoda rubatsiro, ndapota.', native: "I can't. I need help, please.", correct: true, feedback: "Perfect — honest, polite, and clear. Rwen rolls up their sleeves." },
          { target: 'Ndinogona', native: 'I can', correct: false, feedback: "Only say that if you truly can — asking for help when you need it is smarter." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "'Handigoni' (I can't) fits better here — you know what you're doing, you just need a hand." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Zvinoenderana — uyai, tichashanda pamwe chete.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Asking for help is not giving up. It's teamwork — and in Shona culture, everything is done together.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need help', correct: ['Ndinoda rubatsiro', 'ndinoda rubatsiro'] },
      { prompt: "I can't / I am not able", correct: ['Handigoni', 'handigoni'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one thing you need help with today. Say 'Ndinoda rubatsiro' — even to yourself. Then ask.",
    rwenSignoff: "We all need each other. Famba zvakanaka.",
  },
};

export default lesson;
