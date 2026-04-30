import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-kurara',
  module: 8,
  lesson: 5,
  title: 'Kurara — To Sleep',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Kurara (to sleep) completes the daily cycle. Waking (kumuka), going through the day, and sleeping — these three anchor Shona daily life. You already know 'mamuka sei?' (how did you wake?). Now add sleep.",
    culturalNote: "In Shona culture, asking 'Warara here?' (Did you sleep well?) in the morning shows care. The response connects back to the morning greeting — the wellness cycle completes. Rest is honoured.",
  },

  chunks: [
    {
      id: 'ndinorara',
      target: 'Ndinorara',
      native: 'I sleep (habitually)',
      literal: 'I-sleep (habitual)',
      emoji: '😴',
      phonetic: 'ndi-no-RA-ra',
      audioRef: null,
    },
    {
      id: 'ndarara',
      target: 'Ndarara',
      native: 'I slept / I have slept',
      literal: 'I-slept (completed)',
      emoji: '🛌',
      phonetic: 'nda-RA-ra',
      audioRef: null,
    },
    {
      id: 'rara_zvakanaka',
      target: 'Rara zvakanaka',
      native: 'Sleep well',
      literal: 'Sleep that-is-well',
      emoji: '🌙',
      phonetic: 'RA-ra zva-ka-NA-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Rara — sleep as a blessing',
    explanation: "'Rara zvakanaka' (sleep well) is a gift — a blessing for someone's night. Like 'famba zvakanaka' (go well) for journeys and 'sara zvakanaka' (stay well) for staying — zvakanaka transforms any verb into a blessing.",
    examples: [
      { target: 'Rara zvakanaka', native: 'Sleep well' },
      { target: 'Famba zvakanaka', native: 'Go well' },
      { target: 'Taura zvakanaka', native: 'Speak well' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndinorara', right: 'I sleep (habitual)' },
        { left: 'Ndarara', right: 'I slept' },
        { left: 'Rara zvakanaka', right: 'Sleep well' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Wish someone goodnight',
      sentence: 'Rara _____, mwanangu.',
      options: ['zvakanaka', 'zvishoma', 'zvakaiipa'],
      correct: 'zvakanaka',
      context: "Sleep well, my child.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Sleep well',
      correct: ['Rara zvakanaka', 'rara zvakanaka'],
    },
    {
      type: 'multiple_choice',
      instruction: "In the morning, someone asks 'Warara here?' How do you reply if you slept well?",
      question: 'Reply to warara here?:',
      options: [
        { text: 'Ndarara. Warara sei iwe?', correct: true },
        { text: 'Ndinorara', correct: false },
        { text: 'Ndiri kurara', correct: false },
      ],
      explanation: "'Ndarara' (I slept well) + 'Warara sei iwe?' (And how did you sleep?) mirrors the morning wellness exchange.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I sleep at 10 o'clock every night'",
      words: ['Ndinorara', 'na iri', 'gumi', 'husiku', 'hwose.'],
      correct: ['Ndinorara', 'na iri', 'gumi', 'husiku', 'hwose.'],
      translation: "I sleep at 10 o'clock every night",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I slept / I have slept',
      correct: ['Ndarara', 'ndarara'],
    },
  ],

  rwenDialogue: {
    intro: "The evening is over. Rwen says goodnight.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Usiku wakanaka. Rara zvakanaka, shamwari.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Rara zvakanaka zvakare, Rwen. Ndatenda.', native: 'Sleep well too, Rwen. Thank you.', correct: true, feedback: "Returned the blessing + gratitude. A warm and complete goodnight." },
          { target: 'Usiku wakanaka', native: 'Good night', correct: false, feedback: "Add the sleep blessing back: 'Rara zvakanaka zvakare, Rwen.' — Sleep well too." },
          { target: 'Ndinorara', native: 'I sleep', correct: false, feedback: "Reply to the blessing: 'Rara zvakanaka zvakare, Rwen. Ndatenda.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndarara zvakanaka. Tomorrow — Module 8 continues. Rest well.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Sleep well', correct: ['Rara zvakanaka', 'rara zvakanaka'] },
      { prompt: 'I slept', correct: ['Ndarara', 'ndarara'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight, say 'Rara zvakanaka' to someone before they sleep — or say it to yourself. Mean it. A blessing costs nothing and means everything.",
    rwenSignoff: "Rara zvakanaka. Sleep is sacred. Famba zvakanaka.",
  },
};

export default lesson;
