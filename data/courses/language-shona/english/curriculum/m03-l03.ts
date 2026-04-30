import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-makore',
  module: 3,
  lesson: 3,
  title: 'Makore — Age',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Age in Shona culture is not a number — it's a marker of respect and relationship. Knowing someone's age helps you know how to address them. And being asked your age is completely normal — even flattering.",
    culturalNote: "In Zimbabwe, age determines the level of respect you're shown and how you address others. Knowing you're younger means using more formal language. This is why age comes up early in conversations — it calibrates the whole exchange.",
  },

  chunks: [
    {
      id: 'makore_mangani',
      target: 'Une makore mangani?',
      native: 'How old are you?',
      literal: 'You-have years how-many?',
      emoji: '🎂',
      phonetic: 'u-ne ma-KO-re man-GA-ni',
      audioRef: null,
    },
    {
      id: 'ndine_makore',
      target: 'Ndine makore...',
      native: 'I am ... years old',
      literal: 'I-have years...',
      emoji: '🔢',
      phonetic: 'ndi-ne ma-KO-re',
      audioRef: null,
    },
    {
      id: 'ndakazvarwa',
      target: 'Ndakazvarwa mu...',
      native: 'I was born in...',
      literal: 'I-was-born in...',
      emoji: '👶',
      phonetic: 'nda-kaz-VAR-wa mu',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndine — I have (possession)',
    explanation: "'Ndine' means 'I have'. In Shona, age is expressed as possession — 'I have 30 years'. This same 'ndine' pattern works for everything you possess: family, money, time. Remember it well.",
    examples: [
      { target: 'Ndine makore gumi', native: 'I am 10 years old (I have 10 years)' },
      { target: 'Ndine mhuri', native: 'I have a family' },
      { target: 'Ndine nguva', native: 'I have time' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Une makore mangani?', right: 'How old are you?' },
        { left: 'Ndine makore...', right: 'I am ... years old' },
        { left: 'Ndakazvarwa mu...', right: 'I was born in...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say your age',
      sentence: 'Ndine _____ makore makumi matatu.',
      options: ['ndine', 'ndiri', 'ndinoda'],
      correct: 'ndine',
      context: 'Someone asks how old you are.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How old are you?',
      correct: ['Une makore mangani?', 'une makore mangani?', 'Une makore mangani', 'une makore mangani'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says 'Ndine makore makumi maviri nemashanu'. How old are they?",
      question: 'What age does this describe?',
      options: [
        { text: '25 years old', correct: true },
        { text: '20 years old', correct: false },
        { text: '30 years old', correct: false },
      ],
      explanation: "'Makumi maviri' = 20, 'ne' = and, 'mashanu' = 5. So 20 + 5 = 25.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I was born in..."',
      words: ['mu...', 'Ndakazvarwa'],
      correct: ['Ndakazvarwa', 'mu...'],
      translation: 'I was born in...',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am ... years old (start of phrase)',
      correct: ['Ndine makore', 'ndine makore'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your age — a natural part of any Shona introduction.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Une makore mangani? Ndine makore makumi matatu nerimwe — ini.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndine makore... Ndakazvarwa mu...', native: 'I am ... years old. I was born in...', correct: true, feedback: "Age and birthdate — complete answer. Rwen nods with respect." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "You know your own age — use 'Ndine makore...' and fill in the number." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "That's gratitude, not your age. Try 'Ndine makore...'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka. Uine makore mazhinji kana mashoma — wauya kuno kudzidza. Izvi ndizvo zvinokosha.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Whether you're young or old — you came to learn. That's what matters.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How old are you?', correct: ['Une makore mangani?', 'une makore mangani?', 'Une makore mangani', 'une makore mangani'] },
      { prompt: 'I am ... years old (start of phrase)', correct: ['Ndine makore', 'ndine makore'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your age in Shona today — 'Ndine makore [your age]'. If you know your birth year, try 'Ndakazvarwa mu [year]' too.",
    rwenSignoff: "Age is wisdom. Yours, in Shona. Famba zvakanaka.",
  },
};

export default lesson;
