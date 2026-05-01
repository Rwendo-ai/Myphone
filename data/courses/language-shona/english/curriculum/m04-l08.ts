import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-tenses',
  module: 4,
  lesson: 8,
  title: 'Past & Future — When Things Happen',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "You've been living in the present tense. Today we travel in time. Shona marks past and future inside the verb — not with separate words like 'yesterday' or 'will'. The verb itself tells you when.",
    culturalNote: "In Shona, time is embedded in the verb. 'Nda-' signals completed past action, 'Ndi-cha-' signals future. This compactness makes Shona speech efficient — fewer words, more meaning per word.",
  },

  chunks: [
    {
      id: 'ndaenda',
      target: 'Ndaenda',
      native: 'I went / I have gone',
      literal: 'Nda-enda (Nda- = past completed)',
      emoji: '⬅️',
      phonetic: 'nda-EN-da',
      audioRef: null,
    },
    {
      id: 'ndichaenda',
      target: 'Ndichaenda',
      native: 'I will go',
      literal: 'Ndi-cha-enda (Ndicha- = future)',
      emoji: '➡️',
      phonetic: 'ndi-cha-EN-da',
      audioRef: null,
    },
    {
      id: 'ndiri_kuenda',
      target: 'Ndiri kuenda',
      native: 'I am going (right now)',
      literal: 'Ndiri ku-enda (continuous present)',
      emoji: '🔄',
      phonetic: 'NDI-ri ku-EN-da',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tense markers inside the verb',
    explanation: "Shona tense lives inside the verb: Nda- (past), Ndi-no- (habitual present), Ndiri ku- (continuous present), Ndi-cha- (future). The stem (-enda, -uya, -taura) stays the same — only the tense prefix changes.",
    examples: [
      { target: 'Nda-enda', native: 'I went (past)' },
      { target: 'Ndino-enda', native: 'I go (habitual)' },
      { target: 'Ndicha-enda', native: 'I will go (future)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its tense',
      pairs: [
        { left: 'Ndaenda', right: 'I went (past)' },
        { left: 'Ndichaenda', right: 'I will go (future)' },
        { left: 'Ndiri kuenda', right: 'I am going (now)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I will go to Zimbabwe'?",
      question: 'Choose the future form:',
      options: [
        { text: 'Ndichaenda kuZimbabwe', correct: true },
        { text: 'Ndaenda kuZimbabwe', correct: false },
        { text: 'Ndinogara kuZimbabwe', correct: false },
      ],
      explanation: "Ndicha- is the future marker. Ndichaenda = I will go.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I went / I have gone',
      correct: ['Ndaenda', 'ndaenda'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the future sentence',
      sentence: 'Ndicha_____ mangwana.',
      options: ['uya', 'enda', 'taura'],
      correct: 'uya',
      context: 'I will come tomorrow.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am going right now"',
      words: ['Ndiri', 'kuenda', 'zvino.'],
      correct: ['Ndiri', 'kuenda', 'zvino.'],
      translation: 'I am going right now',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I will go',
      correct: ['Ndichaenda', 'ndichaenda'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your plans — past and future.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Wabva kupi? Uye uchaenda kupi?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndabva ku... Ndichaenda ku...', native: 'I came from... I will go to...', correct: true, feedback: "Past and future — you navigated both tenses correctly." },
          { target: 'Ndinogara ku...', native: 'I live in... (present only)', correct: false, feedback: "Good — but use past for where you came from: Ndabva ku... And future: Ndichaenda ku..." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "Try: 'Ndabva ku...' (I came from) and 'Ndichaenda ku...' (I will go to)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka! Past and future, both in the verb. You're travelling through Shona time.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I went / I have gone', correct: ['Ndaenda', 'ndaenda'] },
      { prompt: 'I will go', correct: ['Ndichaenda', 'ndichaenda'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think about yesterday and tomorrow. Say 'Ndaenda ku...' for where you went yesterday, and 'Ndichaenda ku...' for where you'll go tomorrow.",
    rwenSignoff: "Time lives in the verb. Past, present, future — all within one word. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You're catching up with an old family friend at a coffee shop in Borrowdale. Over rooibos, she asks you about your weekend in three quick beats — where you went on Saturday, what you're doing right now, and where you'll travel next week — and expects you to answer each with the correct tense baked into the verb.",
    rwenRole: "Mai Chipo — a warm 50-something family friend, fluent in Shona and English, who switches you back to Shona whenever you slip into English and listens for whether you nail Nda-, Ndiri ku-, and Ndicha-.",
    successCriteria: "User answers with 'Ndaenda ku...' for past (Nda- prefix, NOT Ndinoenda), 'Ndiri kuenda' or 'Ndinoita' for present, and 'Ndichaenda ku...' for future (Ndicha- prefix, NOT Nda-) — three sentences with three distinct tense markers inside the verb.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
