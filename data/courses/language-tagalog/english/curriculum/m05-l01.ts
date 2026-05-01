import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-nanay-tatay',
  module: 5,
  lesson: 1,
  title: 'Nanay & Tatay — Mum & Dad',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Welcome to pamilya — family. In Filipino homes, family is the centre of everything: Sunday lunch, fiestas, the lola who raised three generations. Today we start with the two people who started it all — Nanay and Tatay.",
    culturalNote: "Nanay (mum) and Tatay (dad) are the warm, everyday words most Filipinos use at home. Inay/Itay, Mama/Papa, Mommy/Daddy are all common too — kids often mix and match. There's no 'right' choice; it's whatever sounds like home.",
  },

  chunks: [
    {
      id: 'nanay',
      target: 'Nanay',
      native: 'Mum / Mother',
      literal: 'Mother (informal/affectionate)',
      emoji: '👩',
      phonetic: 'na-NAI',
      audioRef: null,
    },
    {
      id: 'tatay',
      target: 'Tatay',
      native: 'Dad / Father',
      literal: 'Father (informal/affectionate)',
      emoji: '👨',
      phonetic: 'ta-TAI',
      audioRef: null,
    },
    {
      id: 'mga_magulang',
      target: 'Mga magulang',
      native: 'Parents',
      literal: '(plural marker) parent',
      emoji: '👨‍👩‍👧',
      phonetic: 'manga ma-GU-lang',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family possessive with "ko"',
    explanation: "To say 'my', add 'ko' after the family word. Nanay ko = my mum. Tatay ko = my dad. Mga magulang ko = my parents. The little 'ko' carries all the love.",
    examples: [
      { target: 'Nanay ko', native: 'My mum' },
      { target: 'Tatay ko', native: 'My dad' },
      { target: 'Mga magulang ko', native: 'My parents' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog word to its meaning',
      pairs: [
        { left: 'Nanay', right: 'Mum / Mother' },
        { left: 'Tatay', right: 'Dad / Father' },
        { left: 'Mga magulang', right: 'Parents' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You are introducing your mother to a friend.',
      sentence: 'Ito ang _____ ko.',
      options: ['Nanay', 'Tatay', 'magulang'],
      correct: 'Nanay',
      context: "'Ito ang ___ ko' = 'This is my ___'. You're pointing at your mum.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My dad',
      correct: ['Tatay ko', 'tatay ko'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "These are my parents"',
      words: ['magulang', 'Sila', 'ang', 'mga', 'ko'],
      correct: ['Sila', 'ang', 'mga', 'magulang', 'ko'],
      translation: 'They are my parents.',
    },
    {
      type: 'multiple_choice',
      instruction: "A friend points to a photo and asks who it is. It's your mother. What do you say?",
      question: 'Choose the warmest, most natural answer',
      options: [
        { text: 'Nanay ko.', correct: true },
        { text: 'Tatay ko.', correct: false },
        { text: 'Magulang.', correct: false },
      ],
      explanation: "'Nanay ko' = 'my mum'. Short, warm, exactly what a Filipino would say.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My parents',
      correct: ['Mga magulang ko', 'mga magulang ko'],
    },
  ],

  rwenDialogue: {
    intro: "You're showing a Filipino friend a family photo on your phone. She points and asks who's who.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sino sila?',
        native: 'Who are they?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sila ang mga magulang ko.', native: 'They are my parents.', correct: true, feedback: 'Beautiful — clear and warm.' },
          { target: 'Sila ang Nanay.', native: 'They are the mother.', correct: false, feedback: "Close, but for both parents you want 'mga magulang'." },
          { target: 'Tatay sila Nanay.', native: '(scrambled)', correct: false, feedback: 'The order is off — try again with "Sila ang...".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ang ganda ng Nanay mo!',
        native: 'Your mum is beautiful!',
      },
      {
        speaker: 'rwen',
        rwenLine: "And just like that you've shared your family. That's how every Filipino conversation starts — with the people who made you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My mum (in Tagalog)', correct: ['Nanay ko', 'nanay ko'] },
      { prompt: 'My parents (in Tagalog)', correct: ['Mga magulang ko', 'mga magulang ko'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send one message — text, voice note, anything — to your Nanay or Tatay today. Tell them you're thinking of them. The Filipino way is to never let a day pass in silence.",
    rwenSignoff: "I'll ask you tomorrow. Ingat ka — take care.",
  },

  phase8: {
    scenario: "You're on a video call with a new Filipino friend, Aira, who's curious about your family. She asks you to introduce your parents from a photo on your phone.",
    rwenRole: "Aira — friendly Filipina in her late 20s in Manila, warm and curious; she'll ask follow-ups about your Nanay and Tatay (their names, where they live, what they do).",
    successCriteria: "User uses 'Nanay ko' and 'Tatay ko' correctly to refer to their parents, and uses 'mga magulang ko' at least once when talking about both. Greeting/closing in Tagalog is a bonus.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
