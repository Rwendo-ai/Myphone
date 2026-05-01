import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-handizivi',
  module: 2,
  lesson: 4,
  title: "Handizivi — I Don't Know",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here's a secret: 'I don't know' is one of the most useful things you can say in a new language. It's honest. It invites help. And in Shona, it sounds confident when you say it right.",
    culturalNote: "In Shona culture, admitting you don't know something is respected — it shows self-awareness and humility. Pretending to know and giving wrong information is considered worse than saying 'handizivi'.",
  },

  chunks: [
    {
      id: 'handizivi',
      target: 'Handizivi',
      native: "I don't know",
      literal: "I-know-not",
      emoji: '🤷',
      phonetic: 'han-di-ZI-vi',
      audioRef: null,
    },
    {
      id: 'ndinoziva',
      target: 'Ndinoziva',
      native: 'I know',
      literal: 'I-know',
      emoji: '💡',
      phonetic: 'ndi-no-ZI-va',
      audioRef: null,
    },
    {
      id: 'ndinofunga',
      target: 'Ndinofunga',
      native: 'I think / I believe',
      literal: 'I-think',
      emoji: '🤔',
      phonetic: 'ndi-no-FUN-ga',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ha- prefix — the negation',
    explanation: "In Shona, 'Ha-' at the start of a verb negates it. 'Ndinoziva' (I know) becomes 'Handizivi' (I don't know). Watch how the verb form also shifts slightly — this is Shona's negation pattern.",
    examples: [
      { target: 'Ndinoziva', native: 'I know' },
      { target: 'Handizivi', native: "I don't know" },
      { target: 'Ndinoda → Handidi', native: "I want → I don't want" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Handizivi', right: "I don't know" },
        { left: 'Ndinoziva', right: 'I know' },
        { left: 'Ndinofunga', right: 'I think / I believe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the honest answer",
      sentence: 'Handizivi, asi _____.',
      options: ['ndinofunga', 'ndinoziva', 'ndiripo'],
      correct: 'ndinofunga',
      context: "Someone asks you something you're not certain about.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I don't know",
      correct: ['Handizivi', 'handizivi'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks you for directions and you are not sure. What is the honest thing to say?",
      question: 'Choose the best response',
      options: [
        { text: 'Handizivi, ndapota bvunza mumwe munhu', correct: true },
        { text: 'Ndinoziva', correct: false },
        { text: 'Makadii?', correct: false },
      ],
      explanation: "'Handizivi, ndapota bvunza mumwe munhu' — I don't know, please ask someone else — is honest and helpful.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I think so"',
      words: ['Ndinofunga'],
      correct: ['Ndinofunga'],
      translation: 'I think (so)',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I know',
      correct: ['Ndinoziva', 'ndinoziva'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks you a tricky question about Shona culture you haven't learned yet.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Unoziva zvinoreva "mudzimu" muChiShona?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Handizivi. Ndinofunga zvinoreva mweya.', native: "I don't know. I think it means spirit.", correct: true, feedback: "Honest and thoughtful. Rwen is impressed by your honesty." },
          { target: 'Ndinoziva', native: 'I know', correct: false, feedback: "Only say 'Ndinoziva' if you actually know — honesty matters here." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "Good and honest — adding 'Ndinofunga...' shows you're trying even when unsure." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hongu — 'mudzimu' means ancestral spirit. Handizivi is brave to say. It means you're ready to learn.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Not knowing is the beginning of knowing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I don't know", correct: ['Handizivi', 'handizivi'] },
      { prompt: 'I think / I believe', correct: ['Ndinofunga', 'ndinofunga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time you don't know something, say 'Handizivi' — even just quietly to yourself. Own the not-knowing.",
    rwenSignoff: "Honesty is the fastest road to fluency. Famba zvakanaka.",
  },

  phase8: {
    scenario: "A teenage girl stops you on the main road in Mutare and asks — in fast Shona — whether the bus to Nyanga has already left. You have absolutely no idea, but you do remember seeing one pull out earlier. Don't bluff her into missing the connection.",
    rwenRole: "Rumbidzai — 16, school uniform, anxious, holding a Hwindi-printed bus ticket; she'll trust whatever you say, so the cost of a fake answer is real.",
    successCriteria: "User answers honestly with 'Handizivi' (NOT 'Ndinoziva' to save face), then hedges with 'Ndinofunga...' to share the maybe-sighting as a guess rather than a fact — the lesson's negation pattern under live pressure.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
