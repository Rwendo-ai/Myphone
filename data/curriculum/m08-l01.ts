import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-kuenda',
  module: 8,
  lesson: 1,
  title: 'Kuenda — To Go',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Verbs are the engine of language. You've been using a few — ndinoda, ndinofara, ndinodzidzа. Now we go deeper. Kuenda — to go — is one of the most-used verbs in any language. Master it in all its tenses.",
    culturalNote: "Movement is constant in Zimbabwe — people travel between cities and rural homes, commute by kombi, visit family. 'Kuenda' appears dozens of times in daily speech. Know this verb and you can describe most of daily life.",
  },

  chunks: [
    {
      id: 'ndinoenda',
      target: 'Ndinoenda',
      native: 'I go (habitually)',
      literal: 'I-habitually-go',
      emoji: '🚶',
      phonetic: 'ndi-no-EN-da',
      audioRef: null,
    },
    {
      id: 'ndaenda',
      target: 'Ndaenda',
      native: 'I went / I have gone',
      literal: 'I-went (completed past)',
      emoji: '⬅️',
      phonetic: 'nda-EN-da',
      audioRef: null,
    },
    {
      id: 'ndichaenda',
      target: 'Ndichaenda',
      native: 'I will go',
      literal: 'I-will-go (future)',
      emoji: '➡️',
      phonetic: 'ndi-cha-EN-da',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kuenda across three tenses',
    explanation: "Ndi-no-enda (habitual), Nda-enda (past), Ndiri ku-enda (ongoing now), Ndi-cha-enda (future). The stem -enda stays constant. Only the tense prefix changes. This is the template for ALL Shona verbs.",
    examples: [
      { target: 'Ndinoenda kuchikoro', native: 'I go to school (habitually)' },
      { target: 'Ndaenda kuchikoro', native: 'I went to school' },
      { target: 'Ndichaenda kuchikoro', native: 'I will go to school' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its tense',
      pairs: [
        { left: 'Ndinoenda', right: 'I go (habit)' },
        { left: 'Ndaenda', right: 'I went (past)' },
        { left: 'Ndichaenda', right: 'I will go (future)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the future sentence',
      sentence: 'Ndi_____ kuZimbabwe gore rinouya.',
      options: ['chaenda', 'noenda', 'aenda'],
      correct: 'chaenda',
      translation: 'I will go to Zimbabwe next year.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I went',
      correct: ['Ndaenda', 'ndaenda'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence says 'I go to work every day'?",
      question: 'Habitual action:',
      options: [
        { text: 'Ndinoenda kubasa zuva nezuva', correct: true },
        { text: 'Ndaenda kubasa zuva nezuva', correct: false },
        { text: 'Ndichaenda kubasa zuva nezuva', correct: false },
      ],
      explanation: "Ndinо- (habitual) = I go regularly. Nda- = I went. Ndicha- = I will go.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I will go to Zimbabwe'",
      words: ['Ndichaenda', 'kuZimbabwe.'],
      correct: ['Ndichaenda', 'kuZimbabwe.'],
      translation: 'I will go to Zimbabwe',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I will go',
      correct: ['Ndichaenda', 'ndichaenda'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your plans — past and future journeys.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Waenda kupi nguva yadarika? Uye uchaenda kupi?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndaenda ku[place]. Ndichaenda kuZimbabwe gore rinouya.', native: 'I went to [place]. I will go to Zimbabwe next year.', correct: true, feedback: "Past and future — both tenses, real destinations. That's a real conversation about travel." },
          { target: 'Ndinoenda', native: 'I go (habitual)', correct: false, feedback: "Use the right tense — Ndaenda (I went) for past, Ndichaenda (I will go) for future." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "Think of a real place you've been: 'Ndaenda ku...' And a place you want to go: 'Ndichaenda ku...'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zimbabwe inogutsikana vanhu. You will love it. Ndichaenda nawe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I went (past)', correct: ['Ndaenda', 'ndaenda'] },
      { prompt: 'I will go (future)', correct: ['Ndichaenda', 'ndichaenda'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say where you went today (Ndaenda ku...) and where you'll go tomorrow (Ndichaenda ku...). Make your actual movements Shona.",
    rwenSignoff: "Every journey in Shona is a journey deeper into the language. Famba zvakanaka.",
  },
};

export default lesson;
