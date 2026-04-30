import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-kudya-verb',
  module: 8,
  lesson: 3,
  title: 'Kudya — To Eat',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You know sadza, muriwo, and zvokudya. Now learn the verb that makes them active — kudya (to eat). From 'I eat' to 'I was eating' to 'let's eat', this verb appears in daily life more than almost any other.",
    culturalNote: "Eating in Shona is never just fuelling — it's relational. The verb kudya carries the weight of shared culture. 'Tikudya pamwe' (let's eat together) is an invitation to relationship, not just food.",
  },

  chunks: [
    {
      id: 'ndinodya',
      target: 'Ndinodya',
      native: 'I eat (habitually)',
      literal: 'I-habitually-eat',
      emoji: '🍽️',
      phonetic: 'ndi-no-DYA',
      audioRef: null,
    },
    {
      id: 'ndiri_kudya',
      target: 'Ndiri kudya',
      native: 'I am eating (right now)',
      literal: 'I-am eating (continuous)',
      emoji: '🔄',
      phonetic: 'NDI-ri ku-DYA',
      audioRef: null,
    },
    {
      id: 'ndadya',
      target: 'Ndadya',
      native: 'I ate / I have eaten',
      literal: 'I-ate (completed)',
      emoji: '✅',
      phonetic: 'nda-DYA',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kudya across four forms',
    explanation: "Ndi-no-dya (I eat, habitual), Ndiri ku-dya (I am eating, now), Nda-dya (I ate, past), Ndicha-dya (I will eat, future). This four-form pattern works for EVERY Shona verb. Learn it once, apply it to all.",
    examples: [
      { target: 'Ndinodya sadza', native: 'I eat sadza (regularly)' },
      { target: 'Ndiri kudya zvino', native: 'I am eating right now' },
      { target: 'Ndadya sadza', native: 'I ate sadza' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form to its meaning',
      pairs: [
        { left: 'Ndinodya', right: 'I eat (habit)' },
        { left: 'Ndiri kudya', right: 'I am eating now' },
        { left: 'Ndadya', right: 'I ate (past)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are eating right now',
      sentence: 'Ndiri _____ sadza zvino.',
      options: ['kudya', 'kuenda', 'kutaura'],
      correct: 'kudya',
      context: 'I am eating sadza right now.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am eating right now',
      correct: ['Ndiri kudya', 'ndiri kudya'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Wambodya here?' You are currently eating. What do you say?",
      question: 'I am eating right now:',
      options: [
        { text: 'Hongu, ndiri kudya zvino', correct: true },
        { text: 'Hongu, ndadya', correct: false },
        { text: 'Handina kudya', correct: false },
      ],
      explanation: "'Ndiri kudya zvino' = I am eating right now (continuous present). Ndadya = I have already eaten.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I eat sadza every day'",
      words: ['Ndinodya', 'sadza', 'zuva', 'nezuva.'],
      correct: ['Ndinodya', 'sadza', 'zuva', 'nezuva.'],
      translation: 'I eat sadza every day',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I ate (past)',
      correct: ['Ndadya', 'ndadya'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen calls while you're in the middle of a meal. He asks what you're doing.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Uri kuita chii zvino?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndiri kudya. Ndadya sadza ne nyama. Zvakanakisisa.', native: 'I am eating. I had sadza with meat. It was excellent.', correct: true, feedback: "Present continuous + past + quality assessment. Perfect verb use." },
          { target: 'Ndinodya', native: 'I eat (habitual)', correct: false, feedback: "Use continuous present — 'Ndiri kudya zvino' — I am eating right now." },
          { target: 'Ndadya', native: 'I ate', correct: false, feedback: "'Ndadya' means you finished. If you're still eating, say 'Ndiri kudya zvino.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Enjoy your meal! Ndiri kudya zvakare — sadza ne muriwo. Great minds.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am eating right now', correct: ['Ndiri kudya', 'ndiri kudya'] },
      { prompt: 'I eat habitually', correct: ['Ndinodya', 'ndinodya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "At every meal today, say: before eating 'Ndichadya' (I will eat), while eating 'Ndiri kudya', after eating 'Ndadya'. Run the three tenses through every meal.",
    rwenSignoff: "Kudya — to eat — is to be alive. Famba zvakanaka.",
  },
};

export default lesson;
