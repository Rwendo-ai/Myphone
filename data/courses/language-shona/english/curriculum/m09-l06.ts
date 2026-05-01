import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'At the Airport — Nhandare Yendege',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Robert Gabriel Mugabe International Airport — that's where your Zimbabwe journey likely begins. The moment you land, you're in Shona territory. These phrases let you navigate the airport like someone who belongs there.",
    culturalNote: "Arriving in Zimbabwe, even saying a few words of Shona to immigration officers or airport staff creates immediate warmth. It signals respect and genuine interest in the country — doors open faster when you try the language.",
  },

  chunks: [
    {
      id: 'ndege',
      target: 'Ndege',
      native: 'Aeroplane / Bird',
      literal: 'Ndege (bird — same word as aeroplane)',
      emoji: '✈️',
      phonetic: 'NDE-ge',
      audioRef: null,
    },
    {
      id: 'nhandare_yendege',
      target: 'Nhandare yendege',
      native: 'Airport',
      literal: 'Field of-planes',
      emoji: '🛫',
      phonetic: 'nhan-DA-re ye-NDE-ge',
      audioRef: null,
    },
    {
      id: 'ndirikuenda_kuZimbabwe',
      target: 'Ndirikuenda kuZimbabwe',
      native: 'I am going to Zimbabwe',
      literal: 'I-am-going to-Zimbabwe',
      emoji: '🇿🇼',
      phonetic: 'ndi-ri-ku-EN-da ku-ZIM-bab-we',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndege — bird and aeroplane (same word)',
    explanation: "Ndege means both bird and aeroplane — because when aeroplanes first appeared in Zimbabwe, people described them as 'big birds'. The word stuck. 'Ndege inobhururuka' (the plane flies) uses the same verb as birds — kubhururuka (to fly).",
    examples: [
      { target: 'Ndege inobhururuka', native: 'The plane flies / The bird flies' },
      { target: 'Nhandare yendege', native: 'Airport (field of planes)' },
      { target: 'Ndirikuenda kuZimbabwe nendege', native: 'I am going to Zimbabwe by plane' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the airport word to its meaning',
      pairs: [
        { left: 'Ndege', right: 'Aeroplane / Bird' },
        { left: 'Nhandare yendege', right: 'Airport' },
        { left: 'Ndirikuenda kuZimbabwe', right: 'I am going to Zimbabwe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are going to Zimbabwe by plane',
      sentence: 'Ndirikuenda kuZimbabwe _____ ndege.',
      options: ['ne', 'ku', 'mu'],
      correct: 'ne',
      context: 'I am going to Zimbabwe by plane.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Aeroplane / Bird',
      correct: ['Ndege', 'ndege'],
    },
    {
      type: 'multiple_choice',
      instruction: "In Shona, why is an aeroplane called 'ndege'?",
      question: 'Why is an aeroplane ndege?',
      options: [
        { text: 'Because early Zimbabweans described planes as big birds', correct: true },
        { text: 'It comes from an English word', correct: false },
        { text: 'Ndege only means aeroplane, not bird', correct: false },
      ],
      explanation: "Ndege means bird. When aeroplanes arrived, people called them ndege — big birds. Both meanings remain today.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am going to Zimbabwe'",
      words: ['Ndirikuenda', 'kuZimbabwe.'],
      correct: ['Ndirikuenda', 'kuZimbabwe.'],
      translation: 'I am going to Zimbabwe',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Airport',
      correct: ['Nhandare yendege', 'nhandare yendege'],
    },
  ],

  rwenDialogue: {
    intro: "You've just landed at Harare airport. An immigration officer greets you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mauya kuZimbabwe. Wauya nezviswa here?',
        native: 'Welcome to Zimbabwe. Did you come for the first time?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda. Hongu, ndirikusvika Zimbabwe kekutanga. Ndinofara zvikuru.', native: 'Thank you. Yes, I am arriving in Zimbabwe for the first time. I am very happy.', correct: true, feedback: "First time, expressed joy. The officer smiles wider than protocol allows." },
          { target: 'Ndauya nendege', native: 'I came by plane', correct: false, feedback: "Answer the question — kekutanga (first time): 'Hongu, ndirikusvika Zimbabwe kekutanga. Ndinofara zvikuru.'" },
          { target: 'Ndinoda kuenda kuHarare', native: 'I want to go to Harare', correct: false, feedback: "You're already landing in Harare — answer about first visit: 'Hongu, kekutanga. Ndinofara zvikuru.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wasvika Zimbabwe. The journey is complete and beginning. Kekutanga — for the first time. What a sentence to say.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Aeroplane / Bird', correct: ['Ndege', 'ndege'] },
      { prompt: 'I am going to Zimbabwe', correct: ['Ndirikuenda kuZimbabwe', 'ndirikuenda kuZimbabwe'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Ndirikuenda kuZimbabwe' today — as a statement of intention, not just practice. Whether it's a dream or a plan — say it in Shona. Make it real.",
    rwenSignoff: "Zimbabwe is waiting. Ndege inobhururuka. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You've just walked out of arrivals at Robert Gabriel Mugabe International and the airport taxis are gone — you need to get to a kombi rank to reach town. A passer-by waiting at the pickup zone might know which way the airport kombis leave from, but you'll have to ask in Shona, naming nhandare yendege and your destination clearly.",
    rwenRole: "Mai Tatenda — passer-by waiting outside the airport terminal (not Eastgate this time — she's collecting a relative), warm and pleasantly surprised to hear airport-Shona from a foreigner; willing to walk you to the kombi pick-up if you greet properly first.",
    successCriteria: "User uses 'Nhandare yendege' to refer back to where they are (showing they know the term, not just 'airport'), states intent with 'Ndirikuenda kuHarare' or 'kutown' using ku- prefix correctly, and says 'kekutanga' if she asks whether it's their first time — closing the cultural loop.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
