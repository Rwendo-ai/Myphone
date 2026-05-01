import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-drinks',
  module: 7,
  lesson: 3,
  title: 'Mvura & Zvokunwa — Water & Drinks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Zimbabwe, offering water is one of the first acts of hospitality. Before food, before conversation, a guest is given water. 'Mvura' — water — is one of the most important words in any language.",
    culturalNote: "Water scarcity affects many parts of Zimbabwe, making mvura precious. Offering clean water to a guest is a significant act of care. Refusing it can seem ungrateful. Always accept water when offered.",
  },

  chunks: [
    {
      id: 'mvura',
      target: 'Mvura',
      native: 'Water',
      literal: 'Mvura (water/rain — same word)',
      emoji: '💧',
      phonetic: 'mm-VU-ra',
      audioRef: null,
    },
    {
      id: 'tii',
      target: 'Tii',
      native: 'Tea',
      literal: 'Tii (from English "tea")',
      emoji: '🍵',
      phonetic: 'TII',
      audioRef: null,
    },
    {
      id: 'ndine_nyota',
      target: 'Ndine nyota',
      native: 'I am thirsty',
      literal: 'I-have thirst',
      emoji: '😮‍💨',
      phonetic: 'ndi-ne NYO-ta',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mvura means both water and rain',
    explanation: "In Shona, 'mvura' means water AND rain — they're the same word. This reflects the agricultural reality of Zimbabwe where rain IS water, is life. Mvura inaya = rain falls. Ndinoda mvura = I want water.",
    examples: [
      { target: 'Ndinoda mvura', native: 'I want water' },
      { target: 'Mvura inaya', native: 'It is raining (rain falls)' },
      { target: 'Ndine nyota', native: 'I am thirsty (I have thirst)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the drink word to its meaning',
      pairs: [
        { left: 'Mvura', right: 'Water / Rain' },
        { left: 'Tii', right: 'Tea' },
        { left: 'Ndine nyota', right: 'I am thirsty' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are thirsty',
      sentence: 'Ndine _____, ndinoda mvura.',
      options: ['nyota', 'nzara', 'nguva'],
      correct: 'nyota',
      context: 'I am thirsty, I want water.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Water',
      correct: ['Mvura', 'mvura'],
    },
    {
      type: 'multiple_choice',
      instruction: "In Shona, what single word means both 'water' and 'rain'?",
      question: "Water = Rain = ?",
      options: [
        { text: 'Mvura', correct: true },
        { text: 'Tii', correct: false },
        { text: 'Nyota', correct: false },
      ],
      explanation: "Mvura = water AND rain. Because in Zimbabwe's agricultural reality, rain IS water and water IS life.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am thirsty, I want water'",
      words: ['Ndine', 'nyota,', 'ndinoda', 'mvura.'],
      correct: ['Ndine', 'nyota,', 'ndinoda', 'mvura.'],
      translation: 'I am thirsty, I want water',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Tea',
      correct: ['Tii', 'tii'],
    },
  ],

  rwenDialogue: {
    intro: "You've arrived after a long journey. Rwen's family offers you drinks.",
    lines: [
      {
        speaker: 'npc',
        target: 'Unoda chii? Tii, mvura, kana chibaramhamba?',
        native: 'What do you want? Tea, water, or juice?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda. Ndine nyota — ndinoda mvura, ndapota.', native: 'Thank you. I am thirsty — I want water, please.', correct: true, feedback: "Expressed your need clearly and politely. The family brings water immediately." },
          { target: 'Ndinoda tii', native: 'I want tea', correct: false, feedback: "Perfect answer — and add your reason: 'Ndine nyota, saka ndinoda mvura.' I'm thirsty so I want water." },
          { target: 'Handidi', native: "I don't want anything", correct: false, feedback: "Always accept hospitality from a Shona host — 'Ndatenda. Ndinoda mvura, ndapota.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mvura inouya. Water arrives. You're refreshed. The conversation can begin.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Water', correct: ['Mvura', 'mvura'] },
      { prompt: 'I am thirsty', correct: ['Ndine nyota', 'ndine nyota'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every time you drink water today, say 'Mvura' before you drink. Feel the connection to Zimbabwe where this word means both water and rain.",
    rwenSignoff: "Mvura — water, rain, life. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You've just stepped off a long, dusty kombi ride into a homestead in Murewa. Before you've even set down your bag, the household has produced a tray with a glass jug of cold mvura, a flask of tii, and a mazoe orange — and the host is waiting for you to choose.",
    rwenRole: "Mai Chipo — host of the homestead, mid 50s, deeply traditional about hospitality; she will not let you sit down to talk until you have accepted something to drink.",
    successCriteria: "User uses 'Ndine nyota' to signal need rather than pretending they're fine, requests with 'Ndinoda mvura' or 'Ndinoda tii' (NOT just pointing or refusing with 'Handidi'), and accepts the drink — refusing hospitality outright is the wrong move here.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
