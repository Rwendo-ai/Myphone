import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-morning-meal',
  module: 7,
  lesson: 9,
  title: 'Morning Meal Conversation',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The morning meal in Zimbabwe sets the tone for the day. Whether it's tea and bread or sadza left from the night before, the conversation around it is warm and predictable — greetings, plans for the day, family check-ins. Perfect for practice.",
    culturalNote: "Many Zimbabwean families start the day with tii (tea) and chingwa (bread) or maputi (popcorn). The morning greeting is an essential part of breakfast culture — you greet before you eat, always.",
  },

  chunks: [
    {
      id: 'ndadya',
      target: 'Ndadya',
      native: 'I have eaten',
      literal: 'I-ate (completed past)',
      emoji: '✅',
      phonetic: 'nda-DYA',
      audioRef: null,
    },
    {
      id: 'mangwanani_ekudya',
      target: 'Zvokudya zvemangwanani',
      native: 'Breakfast',
      literal: 'Food of-morning',
      emoji: '🌅🍳',
      phonetic: 'zvo-KU-dya zve-man-GWA-na-ni',
      audioRef: null,
    },
    {
      id: 'mandakudya_nei',
      target: 'Mandakudya nei?',
      native: 'What did you eat? (caring question)',
      literal: 'You-ate what?',
      emoji: '💬',
      phonetic: 'man-da-KU-dya nei',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Nda- (I ate) — completed past action",
    explanation: "'Ndadya' uses Nda- for completed past — I ate and am done. This pairs with morning conversations: 'Wambodya here?' (have you eaten?) → 'Ndadya' (yes, I ate) or 'Handina' (I haven't yet). Simple and essential.",
    examples: [
      { target: 'Ndadya sadza', native: 'I ate sadza' },
      { target: 'Handina kudya', native: "I haven't eaten" },
      { target: 'Mandakudya nei?', native: 'What did you eat?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the meal phrase to its meaning',
      pairs: [
        { left: 'Ndadya', right: 'I have eaten' },
        { left: 'Zvokudya zvemangwanani', right: 'Breakfast' },
        { left: 'Mandakudya nei?', right: 'What did you eat?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you have eaten',
      sentence: 'Nda_____ chingwa ne tii.',
      options: ['dya', 'enda', 'taura'],
      correct: 'dya',
      context: 'I ate bread and tea (breakfast).',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I have eaten',
      correct: ['Ndadya', 'ndadya'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Wambodya here?' You have eaten. What do you say?",
      question: "Reply to 'Have you eaten?':",
      options: [
        { text: 'Hongu, ndadya chingwa ne tii', correct: true },
        { text: 'Handina, ndine nzara', correct: false },
        { text: 'Ndaguta zvikuru', correct: false },
      ],
      explanation: "'Hongu, ndadya chingwa ne tii.' — Yes, I ate bread and tea. Specific and natural.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I ate sadza in the morning'",
      words: ['Ndadya', 'sadza', 'mangwanani.'],
      correct: ['Ndadya', 'sadza', 'mangwanani.'],
      translation: 'I ate sadza in the morning',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Breakfast',
      correct: ['Zvokudya zvemangwanani', 'zvokudya zvemangwanani'],
    },
  ],

  rwenDialogue: {
    intro: "Breakfast at Rwen's home. Everyone greets before eating.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mangwanani! Wambodya here? Zvokudya zvemangwanani zviripo.',
        native: 'Good morning! Have you eaten? There is breakfast.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mangwanani, Amai! Handina. Ndinoda tii ne chingwa, ndapota.', native: "Good morning, Mother! I haven't. I would like tea and bread, please.", correct: true, feedback: "Greeted back, honest about not eating, specific polite order. Perfect morning exchange." },
          { target: 'Ndadya, ndatenda', native: "I've eaten, thank you", correct: false, feedback: "If you haven't eaten, be honest — accept the breakfast: 'Handina. Ndinoda tii ne chingwa, ndapota.'" },
          { target: 'Mangwanani', native: 'Good morning', correct: false, feedback: "Answer her question too — 'Handina. Ndinoda zvokudya zvemangwanani, ndapota.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tii ne chingwa inosvika. Morning conversation — morning meal — morning Shona. The day has begun well.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have eaten', correct: ['Ndadya', 'ndadya'] },
      { prompt: 'Breakfast', correct: ['Zvokudya zvemangwanani', 'zvokudya zvemangwanani'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tomorrow morning, before you eat breakfast, say 'Mangwanani' then describe what you're about to eat in Shona. 'Ndinoda tii ne chingwa.' Make breakfast Shona.",
    rwenSignoff: "Every morning is a new lesson. Famba zvakanaka.",
  },
};

export default lesson;
