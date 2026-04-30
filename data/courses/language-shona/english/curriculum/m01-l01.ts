import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-mangwanani',
  module: 1,
  lesson: 1,
  title: 'Mangwanani — Good Morning',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mangwanani! In Shona, every greeting is a wellness check — never just 'hi'. Skipping a greeting is rude. Today, we wake the day together.",
    culturalNote: "Shona greetings are deeply tied to tsika — respect. We always ask how someone has woken or spent the day.",
  },

  chunks: [
    {
      id: 'mangwanani',
      target: 'Mangwanani',
      native: 'Good morning',
      literal: '(It has) dawned',
      emoji: '🌅',
      phonetic: 'mang-gwa-NA-ni',
      audioRef: null,
    },
    {
      id: 'mamuka_sei',
      target: 'Mamuka sei?',
      native: 'How did you wake? (respectful)',
      literal: 'You (plural) woke how?',
      emoji: '👀',
      phonetic: 'ma-MU-ka SAY',
      audioRef: null,
    },
    {
      id: 'ndamuka',
      target: 'Ndamuka, kana mamukawo',
      native: 'I woke well, if you also woke well',
      literal: 'I-woke, if you(pl)-woke-also',
      emoji: '✨',
      phonetic: 'nda-MU-ka KA-na ma-MU-ka-wo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Person markers',
    explanation: 'The prefix changes who you mean. Notice the pattern — it appears on every verb.',
    examples: [
      { target: 'Ma-muka', native: 'You (respectful/elder) woke' },
      { target: 'Wa-muka', native: 'You (friend/peer) woke' },
      { target: 'Nd-amuka', native: 'I woke' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Shona phrase to its meaning',
      pairs: [
        { left: 'Mangwanani', right: 'Good morning' },
        { left: 'Mamuka sei?', right: 'How did you wake? (respectful)' },
        { left: 'Ndamuka', right: 'I woke' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the greeting',
      sentence: 'Mangwanani, _____ sei?',
      options: ['mamuka', 'wamuka', 'ndamuka'],
      correct: 'mamuka',
      context: "You're greeting a shopkeeper — use the respectful form.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Good morning',
      correct: ['Mangwanani', 'mangwanani'],
    },
    {
      type: 'build_sentence',
      instruction: 'Greet your elder respectfully — put the words in order',
      words: ['sei?', 'Mangwanani,', 'mamuka'],
      correct: ['Mangwanani,', 'mamuka', 'sei?'],
      translation: 'Good morning, how did you wake? (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: 'An elder greets you: "Mamuka sei?" What do you say?',
      question: 'Choose the correct response',
      options: [
        { text: 'Ndamuka, kana mamukawo', correct: true },
        { text: 'Wamuka', correct: false },
        { text: 'Mangwanani', correct: false },
      ],
      explanation: 'You mirror the respect — use mamukawo (also you-respectful).',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona — respectful form',
      prompt: 'How did you wake? (to an elder)',
      correct: ['Mamuka sei?', 'Mamuka sei', 'mamuka sei?', 'mamuka sei'],
    },
  ],

  rwenDialogue: {
    intro: "You've just arrived at a market in the morning. An elder is sitting at their stall. Greet them.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mangwanani',
        native: 'Good morning',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mangwanani, mamuka sei?', native: 'Good morning, how did you wake?', correct: true, feedback: 'Perfect — respectful and warm.' },
          { target: 'Mangwanani, wamuka sei?', native: 'Good morning, how did you wake? (informal)', correct: false, feedback: "Almost — but elders deserve the respectful 'ma-' form." },
          { target: 'Ndamuka', native: 'I woke', correct: false, feedback: "That's how you reply, not how you greet first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ndamuka, kana mamukawo',
        native: 'I woke well, if you also woke well',
      },
      {
        speaker: 'rwen',
        rwenLine: "Beautiful. You greeted with tsika — respect. The elder feels seen.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Good morning (in Shona)',
        correct: ['Mangwanani', 'mangwanani'],
      },
      {
        prompt: 'How did you wake? (to a respected elder)',
        correct: ['Mamuka sei?', 'Mamuka sei', 'mamuka sei?', 'mamuka sei'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Greet someone — anyone — with 'Mangwanani' today. Even silently to yourself in the mirror counts.",
    rwenSignoff: "I'll ask you tomorrow. Famba zvakanaka — go well.",
  },
};

export default lesson;
