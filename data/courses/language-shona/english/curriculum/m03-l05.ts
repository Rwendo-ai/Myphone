import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-vanhu-vangu',
  module: 3,
  lesson: 5,
  title: 'Vanhu Vangu — My People',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Beyond your immediate family are your people — your friends, your community, your village. In Shona, these connections are expressed with simple possessives that you already half-know. Let's complete the picture.",
    culturalNote: "In Zimbabwean culture, 'vanhu vangu' (my people) can mean your extended community, your tribe, your neighbourhood — not just blood relatives. The sense of collective belonging runs deep. You are never just an individual.",
  },

  chunks: [
    {
      id: 'vanhu_vangu',
      target: 'Vanhu vangu',
      native: 'My people',
      literal: 'People my',
      emoji: '👥',
      phonetic: 'van-hu van-gu',
      audioRef: null,
    },
    {
      id: 'shamwari_yangu',
      target: 'Shamwari yangu',
      native: 'My friend',
      literal: 'Friend my',
      emoji: '🤝',
      phonetic: 'sha-MWA-ri yan-gu',
      audioRef: null,
    },
    {
      id: 'musha_wangu',
      target: 'Musha wangu',
      native: 'My home / My village',
      literal: 'Home/village my',
      emoji: '🏡',
      phonetic: 'MU-sha wan-gu',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-ngu suffix — my (varies by noun class)',
    explanation: "'My' in Shona changes form depending on the noun. 'Vangu' with people nouns, 'yangu' with some nouns, 'wangu' with others. This is the noun class system at work — but the meaning is always 'my'. You'll start to feel the pattern.",
    examples: [
      { target: 'Vanhu vangu', native: 'My people (va- class)' },
      { target: 'Shamwari yangu', native: 'My friend (ya- class)' },
      { target: 'Musha wangu', native: 'My home (wa- class)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Vanhu vangu', right: 'My people' },
        { left: 'Shamwari yangu', right: 'My friend' },
        { left: 'Musha wangu', right: 'My home / village' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say "my friend" correctly',
      sentence: 'Shamwari _____ ndiyo Rwen.',
      options: ['yangu', 'vangu', 'wangu'],
      correct: 'yangu',
      context: "Introduce Rwen as your friend.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'My people',
      correct: ['Vanhu vangu', 'vanhu vangu'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'my home' in Shona?",
      question: 'Choose the correct phrase',
      options: [
        { text: 'Musha wangu', correct: true },
        { text: 'Musha yangu', correct: false },
        { text: 'Musha vangu', correct: false },
      ],
      explanation: "'Musha' takes the 'wa-' agreement, so 'wangu' is correct for 'my home'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My friend"',
      words: ['yangu', 'Shamwari'],
      correct: ['Shamwari', 'yangu'],
      translation: 'My friend',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'My home / My village',
      correct: ['Musha wangu', 'musha wangu'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about the people in your life.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Unawo shamwari dzako dzepedyo here?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hongu. Vanhu vangu vanondida. Ndinoda musha wangu.', native: 'Yes. My people love me. I love my home.', correct: true, feedback: "You spoke about belonging. That's identity in Shona — warm and rooted." },
          { target: 'Ndine shamwari yangu', native: 'I have my friend', correct: false, feedback: "Good — and you can go further: 'Vanhu vangu vanondida' — my people love me." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "Think about your people — 'Vanhu vangu...' and tell Rwen about them." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Zvakanaka. Imi vanhu venyu ndivo vane moyo wako.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Your people hold your heart — and now you can say that in Shona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My friend', correct: ['Shamwari yangu', 'shamwari yangu'] },
      { prompt: 'My home / My village', correct: ['Musha wangu', 'musha wangu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of someone important to you. Say 'Shamwari yangu ndi...' (My friend is...) using their name. Let the language carry the relationship.",
    rwenSignoff: "Your people are your wealth. Famba zvakanaka.",
  },
};

export default lesson;
