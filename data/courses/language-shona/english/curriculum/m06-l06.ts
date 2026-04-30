import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-money',
  module: 6,
  lesson: 6,
  title: 'Mari — Money',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Zimbabwe has had a complex relationship with money — from hyperinflation to US dollars to the new ZiG currency. But the language of money stays consistent. Knowing how to talk about money keeps you safe in any market.",
    culturalNote: "Zimbabwe uses both US dollars and the local ZiG (Zimbabwe Gold) currency. Markets often operate in both. Asking prices, negotiating, and understanding what you're paying is a survival skill — and being able to do it in Shona earns instant respect.",
  },

  chunks: [
    {
      id: 'mari',
      target: 'Mari',
      native: 'Money',
      literal: 'Mari (money)',
      emoji: '💰',
      phonetic: 'MA-ri',
      audioRef: null,
    },
    {
      id: 'dora',
      target: 'Dora / Madora',
      native: 'Dollar / Dollars',
      literal: 'Dora (dollar), Madora (dollars)',
      emoji: '💵',
      phonetic: 'DO-ra / ma-DO-ra',
      audioRef: null,
    },
    {
      id: 'ndine_mari',
      target: 'Ndine mari / Handina mari',
      native: 'I have money / I have no money',
      literal: 'I-have money / I-have-not money',
      emoji: '💸',
      phonetic: 'ndi-ne MA-ri / han-di-na MA-ri',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndine (I have) vs Handina (I have not)',
    explanation: "'Ndine' = I have. 'Handina' = I have not/don't have. This is Ha- negation applied to the possession verb. Ndine mari (I have money), Handina mari (I have no money). Simple, powerful.",
    examples: [
      { target: 'Ndine mari', native: 'I have money' },
      { target: 'Handina mari', native: "I don't have money" },
      { target: 'Ndine madora gumi', native: 'I have ten dollars' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the money phrase to its meaning',
      pairs: [
        { left: 'Mari', right: 'Money' },
        { left: 'Ndine mari', right: 'I have money' },
        { left: 'Handina mari', right: "I have no money" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you have no money',
      sentence: 'Handina _____.',
      options: ['mari', 'mhuri', 'nguva'],
      correct: 'mari',
      context: 'You cannot pay right now.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Money',
      correct: ['Mari', 'mari'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I have ten dollars'?",
      question: 'I have ten dollars:',
      options: [
        { text: 'Ndine madora gumi', correct: true },
        { text: 'Ndine dora gumi', correct: false },
        { text: 'Handina madora', correct: false },
      ],
      explanation: "Madora (plural) for ten dollars. Ndine madora gumi = I have ten dollars.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I have no money today'",
      words: ['Handina', 'mari', 'nhasi.'],
      correct: ['Handina', 'mari', 'nhasi.'],
      translation: 'I have no money today',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I don't have money",
      correct: ['Handina mari', 'handina mari'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a market and see something you want. Ask if you have enough.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zvinhu izvi zvinodura madora mashanu.',
        native: 'These things cost five dollars.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndine madora mashanu. Ndichatora.', native: 'I have five dollars. I will take it.', correct: true, feedback: "You checked, you confirmed, you committed. Market Shona working perfectly." },
          { target: 'Handina mari', native: "I have no money", correct: false, feedback: "But you do have money — 'Ndine madora mashanu. Ndichatora.' I have five dollars, I'll take it." },
          { target: 'Ndinoda', native: 'I want', correct: false, feedback: "Confirm you can pay: 'Ndine madora mashanu. Ndichatora.' — I have five dollars, I'll take it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndichatora — I'll take it. Your first Shona purchase confirmed.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Money', correct: ['Mari', 'mari'] },
      { prompt: "I don't have money", correct: ['Handina mari', 'handina mari'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think about what you spent money on today. Say it in Shona: 'Ndakatenga [item] nemadora [number].' I bought [item] for [number] dollars.",
    rwenSignoff: "Mari — it opens doors and closes others. Famba zvakanaka.",
  },
};

export default lesson;
