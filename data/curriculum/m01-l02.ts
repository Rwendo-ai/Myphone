import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-wamuka-sei',
  module: 1,
  lesson: 2,
  title: 'Wamuka Sei? — Greeting a Friend',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you greeted an elder with respect. Today — I want to greet YOU. Wamuka sei? That's how I greet a friend. Let's learn the difference.",
    culturalNote: "Using the formal 'Mamuka sei?' with a close friend can feel distant or even cold in Shona culture. Friends and equals use 'Wamuka sei?' — it signals warmth and closeness.",
  },

  chunks: [
    {
      id: 'wamuka_sei',
      shona: 'Wamuka sei?',
      english: 'How did you wake? (informal)',
      literal: 'You (singular/friend) woke how?',
      emoji: '👋',
      phonetic: 'wa-MU-ka SAY',
      audioRef: null,
    },
    {
      id: 'ndamuka_wamukawo',
      shona: 'Ndamuka, kana wamukawo',
      english: 'I woke well, if you also woke well',
      literal: 'I-woke, if you(friend)-woke-also',
      emoji: '😊',
      phonetic: 'nda-MU-ka KA-na wa-MU-ka-wo',
      audioRef: null,
    },
    {
      id: 'hesi',
      shona: 'Hesi',
      english: 'Hey / Hi (casual)',
      literal: 'Hesi (borrowed, very casual)',
      emoji: '✌️',
      phonetic: 'HEH-si',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'W- vs Ma- — Friend vs Elder',
    explanation: "One letter changes who you're talking to. W- is for a friend or peer. Ma- is for an elder or someone you respect. Get this right and Shona speakers will notice.",
    examples: [
      { shona: 'Wa-muka sei?', english: 'How did you wake? (to a friend)' },
      { shona: 'Ma-muka sei?', english: 'How did you wake? (to an elder)' },
      { shona: 'Nd-amuka', english: 'I woke (about myself)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Wamuka sei?', right: 'How did you wake? (friend)' },
        { left: 'Mamuka sei?', right: 'How did you wake? (elder)' },
        { left: 'Hesi', right: 'Hey / Hi (casual)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your best friend greets you in the morning. What do you say back?',
      question: 'Choose the right response for a friend',
      options: [
        { text: 'Ndamuka, kana wamukawo', correct: true },
        { text: 'Ndamuka, kana mamukawo', correct: false },
        { text: 'Mangwanani', correct: false },
      ],
      explanation: "With a friend, use 'wamukawo' (informal) not 'mamukawo' (formal). The wa- mirrors the wa- they used to greet you.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the informal morning greeting',
      sentence: '_____ sei?',
      options: ['Wamuka', 'Mamuka', 'Ndamuka'],
      correct: 'Wamuka',
      context: 'You are greeting your sister at breakfast.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona — informal',
      prompt: 'How did you wake? (to a friend)',
      correct: ['Wamuka sei?', 'Wamuka sei', 'wamuka sei?', 'wamuka sei'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the informal reply',
      words: ['kana', 'Ndamuka,', 'wamukawo'],
      correct: ['Ndamuka,', 'kana', 'wamukawo'],
      translation: 'I woke well, if you also woke well (to a friend)',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona — casual greeting',
      prompt: 'Hey (very casual greeting)',
      correct: ['Hesi', 'hesi'],
    },
  ],

  rwenDialogue: {
    intro: "I'm your friend, Rwen. We meet on the path to school. Greet me the right way.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Wamuka sei?',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndamuka, kana wamukawo', english: 'I woke, if you also woke', correct: true, feedback: "Perfect — that's how friends greet each other." },
          { shona: 'Ndamuka, kana mamukawo', english: 'I woke, if you also woke (formal)', correct: false, feedback: "Close — but 'mamukawo' is for elders. With me, use 'wamukawo'." },
          { shona: 'Mangwanani', english: 'Good morning', correct: false, feedback: "That works, but a friend expects 'Wamuka sei?' back — meet them at their level." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndamuka! Good. You knew the difference. That shows tsika — knowing your relationship matters.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How did you wake? (to a close friend)', correct: ['Wamuka sei?', 'Wamuka sei', 'wamuka sei?', 'wamuka sei'] },
      { prompt: 'Hey / Hi (very casual)', correct: ['Hesi', 'hesi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Greet a friend or sibling with 'Wamuka sei?' this morning. See if they notice.",
    rwenSignoff: "Friends deserve the warm form. Famba zvakanaka.",
  },
};

export default lesson;
