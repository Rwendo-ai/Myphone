import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-kutaura',
  module: 8,
  lesson: 6,
  title: 'Kutaura — To Speak',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Kutaura — to speak — is the verb that describes what you're doing right now, every lesson. 'Ndinotaura ChiShona' (I speak Shona) is one of the proudest sentences you'll say. Every lesson you take makes it more true.",
    culturalNote: "In Zimbabwe, being able to say 'Ndinotaura ChiShona' — even imperfectly — earns immediate respect and warmth. Language is identity. Speaking someone's language says: 'I see you. I've tried to understand your world.'",
  },

  chunks: [
    {
      id: 'ndinotaura',
      target: 'Ndinotaura',
      native: 'I speak (habitually)',
      literal: 'I-speak (habitual)',
      emoji: '🗣️',
      phonetic: 'ndi-no-TAU-ra',
      audioRef: null,
    },
    {
      id: 'ndinotaura_chishona',
      target: 'Ndinotaura ChiShona',
      native: 'I speak Shona',
      literal: 'I-speak Shona-language',
      emoji: '🇿🇼',
      phonetic: 'ndi-no-TAU-ra chi-SHO-na',
      audioRef: null,
    },
    {
      id: 'taura_zvishoma',
      target: 'Taura zvishoma',
      native: 'Speak slowly / Speak a little',
      literal: 'Speak little-by-little',
      emoji: '🐢',
      phonetic: 'TAU-ra zvi-SHO-ma',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinotaura [language] — I speak [language]',
    explanation: "'Ndinotaura' + language name = I speak that language. ChiShona, ChiRungu (English), ChiNdebele. All language names use the Chi- class prefix you learned in Module 4. One verb, all languages.",
    examples: [
      { target: 'Ndinotaura ChiShona', native: 'I speak Shona' },
      { target: 'Ndinotaura ChiRungu', native: 'I speak English' },
      { target: 'Ndinotaura ChiShona zvishoma', native: 'I speak Shona a little' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndinotaura', right: 'I speak' },
        { left: 'Ndinotaura ChiShona', right: 'I speak Shona' },
        { left: 'Taura zvishoma', right: 'Speak slowly' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you speak a little Shona',
      sentence: 'Ndinotaura ChiShona _____.',
      options: ['zvishoma', 'zvikuru', 'zvose'],
      correct: 'zvishoma',
      context: 'I speak Shona a little.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I speak Shona',
      correct: ['Ndinotaura ChiShona', 'ndinotaura chishona'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Unotaura ChiShona here?' — you speak a little. What do you say?",
      question: 'Reply: I speak Shona a little:',
      options: [
        { text: 'Hongu, ndinotaura ChiShona zvishoma', correct: true },
        { text: 'Aiwa, handitauri ChiShona', correct: false },
        { text: 'Ndinotaura ChiShona zvose', correct: false },
      ],
      explanation: "'Hongu, ndinotaura ChiShona zvishoma' — yes I speak Shona a little. Honest and encouraging.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I speak Shona a little'",
      words: ['Ndinotaura', 'ChiShona', 'zvishoma.'],
      correct: ['Ndinotaura', 'ChiShona', 'zvishoma.'],
      translation: 'I speak Shona a little',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Speak slowly',
      correct: ['Taura zvishoma', 'taura zvishoma'],
    },
  ],

  rwenDialogue: {
    intro: "A Zimbabwean stranger asks if you speak Shona.",
    lines: [
      {
        speaker: 'npc',
        target: 'Unotaura ChiShona here?',
        native: 'Do you speak Shona?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hongu, ndinotaura ChiShona zvishoma. Ndiri kudzidza.', native: 'Yes, I speak Shona a little. I am learning.', correct: true, feedback: "Honest (zvishoma), proactive (ndiri kudzidza). That answer will open every door." },
          { target: 'Aiwa, handitauri ChiShona', native: "No, I don't speak Shona", correct: false, feedback: "But you do speak a little — 'Hongu, ndinotaura ChiShona zvishoma. Ndiri kudzidza.' Claim it." },
          { target: 'Ndinotaura ChiShona zvose', native: 'I speak all/complete Shona', correct: false, feedback: "Be honest — 'zvishoma' (a little). 'Ndinotaura ChiShona zvishoma. Ndiri kudzidza.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Zvakanaka zvikuru! Tinofarira vanhu vanoedza.',
        native: 'Very good! We appreciate people who try.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndinotaura ChiShona. Even zvishoma — those words unlock Zimbabwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I speak Shona', correct: ['Ndinotaura ChiShona', 'ndinotaura chishona'] },
      { prompt: 'I speak Shona a little', correct: ['Ndinotaura ChiShona zvishoma', 'ndinotaura chishona zvishoma'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Ndinotaura ChiShona zvishoma' out loud today — to yourself, to someone, to a mirror. Own it. Because it's true. You do speak Shona. A little. And growing.",
    rwenSignoff: "Ndinotaura ChiShona. Say it. Mean it. Famba zvakanaka.",
  },
};

export default lesson;
