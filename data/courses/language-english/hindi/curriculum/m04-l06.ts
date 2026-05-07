import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-this-that',
  module: 4,
  lesson: 6,
  title: 'This & That — These & Those',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'This' = paas wala. 'That' = door wala. Plural: 'These' (kayi paas wale), 'Those' (kayi door wale).",
    culturalNote: "Hindi mein bhi yahi pattern hai: yeh, vo, yeh-log, vo-log. Lekin English mein word order bhi badalta hai — yeh demonstratives noun se PEHLE aate hain (this book), Hindi ki tarah baad mein nahi (kitaab yeh). Yeh SOV vs SVO ka chhota hissa hai. Aur yeh: English plural ke saath plural demonstrative chahiye — 'this books' galat hai, 'these books' sahi.",
  },

  chunks: [
    {
      id: 'this_book',
      target: 'This book',
      native: 'Yeh kitaab (paas)',
      literal: 'singular + close',
      emoji: '📕',
      phonetic: 'this-BUK',
      audioRef: null,
    },
    {
      id: 'that_house',
      target: 'That house',
      native: 'Vo ghar (door)',
      literal: 'singular + far',
      emoji: '🏠',
      phonetic: 'that-HOWS',
      audioRef: null,
    },
    {
      id: 'these_children',
      target: 'These children',
      native: 'Yeh bachhe (paas)',
      literal: 'plural + close',
      emoji: '👶',
      phonetic: 'theez-CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Demonstratives: this/that, these/those",
    explanation: "this (paas, singular) → these (paas, plural). that (door, singular) → those (door, plural). Hindi ke 'yeh' aur 'vo' ki tarah, par dhyan rakhna hai: noun ke pehle aata hai (this book — Hindi ke 'yeh kitaab' jaisa, na ki 'kitaab yeh').",
    examples: [
      { target: 'This book / These books',   native: 'Yeh kitaab / Yeh kitaabein' },
      { target: 'That house / Those houses', native: 'Vo ghar / Vo ghar (kayi)' },
      { target: 'This is mine. That is yours.', native: 'Yeh mera hai. Vo aapka hai.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'this/that/these/those chuniye',
      sentence: '_____ apple in my hand is red.',
      options: ['This', 'That', 'These'],
      correct: 'This',
      context: 'Haath mein hai (paas, singular) → "This".',
    },
    {
      type: 'fill_blank',
      instruction: 'this/that/these/those chuniye',
      sentence: '_____ children over there are playing.',
      options: ['Those', 'These', 'This'],
      correct: 'Those',
      context: 'Bachhe door hain (far, plural) → "Those".',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Yeh kitaab',
      correct: ['This book', 'this book'],
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Yeh bachhe',
      correct: ['These children', 'these children'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sahi kaunsa hai?',
      question: 'I want _____ shoes (the ones over there).',
      options: [
        { text: 'those', correct: true },
        { text: 'these', correct: false },
        { text: 'that', correct: false },
      ],
      explanation: '"Over there" = door. "Shoes" = plural. Isliye "those" — door + kayi.',
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "These bags are heavy"',
      words: ['heavy.', 'are', 'These', 'bags'],
      correct: ['These', 'bags', 'are', 'heavy.'],
      translation: 'Yeh bags bhaari hain',
    },
  ],

  rwenDialogue: {
    intro: "Aap ek BPO ke client showroom call par hain — laptops dikha rahe hain remotely. Kuch paas hain (apke saamne) aur kuch door rakhe hain — sahi demonstrative use karna zaroori hai.",
    lines: [
      {
        speaker: 'npc',
        target: "Which laptop models do you recommend?",
        native: 'Aap kaunse laptop models recommend karte hain?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "These laptops here are budget-friendly, but those laptops on the back shelf are more powerful.", native: 'Yeh laptops jo paas hain budget-friendly hain, par vo back shelf wale zyada powerful hain.', correct: true, feedback: "Bahut accha — 'these' (paas) aur 'those' (door). Plural sahi." },
          { target: "This laptops here are budget, but that laptops on shelf are powerful.", native: '...', correct: false, feedback: "Laptops plural hai — 'these' aur 'those' chahiye, 'this' aur 'that' nahi." },
          { target: "That laptops here are budget, but these on the shelf are powerful.", native: '...', correct: false, feedback: "Paas-door confuse ho gaye. Paas = these, door = those." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. This/These = paas. That/Those = door. Plural ka bhi dhyan rakhna.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe likhiye.',
    prompts: [
      { prompt: 'This book (English mein)', correct: ['This book', 'this book'] },
      { prompt: 'Those houses (English mein)', correct: ['Those houses', 'those houses'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Apne haath mein ya saamne ki teen cheezon ko 'This is...' kahein. Door ki teen cheezein 'That is...' kahein. Plural cheezon ke liye 'These' ya 'Those' use karein.",
    rwenSignoff: "Paas this. Door that. Plural ke saath -se — these/those. Ho gaya.",
  },

  phase8: {
    scenario: "BPO/IT showroom client call — aap remotely products dikha rahe hain. Kuch saamne, kuch background mein. Aapko this/that/these/those zaroor use karne hain.",
    rwenRole: "Customer who is comparing products via video call — keeps asking which models you recommend among the items visible to you.",
    successCriteria: "User uses all four demonstratives — 'this', 'that', 'these', 'those' — at least once each, with correct singular/plural and near/far distinctions, in describing items to the customer.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
