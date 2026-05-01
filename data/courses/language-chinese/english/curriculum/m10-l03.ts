import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear',
  module: 10,
  lesson: 3,
  title: 'Pà & Dānxīn — Fear and Worry',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "'Pà' (怕) is fear, raw and direct. 'Dānxīn' (担心) is worry — and it's beautiful: 'dān' (carry) + 'xīn' (heart). Worry as a heart you carry around. Today we name what we carry, and we learn to set it down for a friend.",
    culturalNote: "'Pà' is special — unlike most English-style fears, you don't need 'of' or 'about'. Just 'Wǒ pà gǒu' = I-fear-dog. Direct. The verb takes its object straight. Dānxīn works the same way: 'Wǒ dānxīn nǐ' — I worry-about you.",
  },

  chunks: [
    {
      id: 'wo_pa',
      target: 'Wǒ pà gǒu',
      native: "I'm afraid of dogs",
      literal: '(我怕狗) lit: I-fear-dog (no preposition needed)',
      emoji: '😨',
      phonetic: 'WAW pah GO',
      audioRef: null,
    },
    {
      id: 'wo_danxin',
      target: 'Wǒ dānxīn nǐ',
      native: "I'm worried about you",
      literal: '(我担心你) lit: I-carry-heart-you',
      emoji: '😟',
      phonetic: 'WAW DAN-shin nee',
      audioRef: null,
    },
    {
      id: 'bie_danxin',
      target: 'Bié dānxīn',
      native: "Don't worry",
      literal: '(别担心) lit: don\'t-carry-heart',
      emoji: '🤲',
      phonetic: 'byeh DAN-shin',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Pà" + direct object',
    explanation: 'Mandarin "pà" (怕) takes its object directly — no "of", no "about". Just "Wǒ pà [thing]". Same with dānxīn (worry-about) and "bié" (别) which means "don\'t" before a verb.',
    examples: [
      { target: 'Wǒ pà gāo', native: "I'm afraid of heights" },
      { target: 'Wǒ pà hēi', native: "I'm afraid of the dark" },
      { target: 'Bié pà', native: "Don't be afraid" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ pà gǒu', right: "I'm afraid of dogs" },
        { left: 'Wǒ dānxīn nǐ', right: "I'm worried about you" },
        { left: 'Bié dānxīn', right: "Don't worry" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "Don\'t worry."',
      sentence: '_____ dānxīn.',
      options: ['Bié', 'Hěn', 'Le'],
      correct: 'Bié',
      context: '"Bié" + verb = "don\'t [verb]". A soft, common negative imperative.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm afraid of dogs",
      correct: ['Wǒ pà gǒu', 'Wo pa gou', 'wo pa gou', '我怕狗'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "I\'m worried about you."',
      words: ['nǐ', 'Wǒ', 'dānxīn', 'le'],
      correct: ['Wǒ', 'dānxīn', 'nǐ'],
      translation: "I'm worried about you",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Don't worry",
      correct: ['Bié dānxīn', 'Bie danxin', 'bie danxin', '别担心'],
    },
    {
      type: 'multiple_choice',
      instruction: '"Dānxīn" (担心) literally means...',
      question: 'Pick the most accurate literal meaning.',
      options: [
        { text: '"carry-heart" — to carry a heavy heart for someone', correct: true },
        { text: '"break-heart"', correct: false },
        { text: '"empty-mind"', correct: false },
      ],
      explanation: 'Dān (担) = carry/shoulder, xīn (心) = heart. Worry pictured as a heart you carry around for someone.',
    },
  ],

  rwenDialogue: {
    intro: "Your friend hasn't replied for two days. They finally call. Their voice sounds small.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wǒ pà...',
        native: "I'm afraid...",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bié dānxīn. Wǒ zài.', native: "Don't worry. I'm here.", correct: true, feedback: "Quiet, present, complete. 'Wǒ zài' (I'm here) is one of Mandarin's most powerful tiny phrases." },
          { target: 'Wǒ shēngqì le', native: "I'm angry", correct: false, feedback: 'Wrong feeling — they need warmth, not heat.' },
          { target: 'Méi shìr', native: "It's nothing", correct: false, feedback: 'Dismisses their fear instead of meeting it.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Xièxie nǐ',
        native: 'Thank you',
      },
      {
        speaker: 'rwen',
        rwenLine: "Bié dānxīn, wǒ zài. Two tiny phrases that change a person's day. You used them well.",
        rwenAnimation: 'warm',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm worried about you",
        correct: ['Wǒ dānxīn nǐ', 'Wo danxin ni', 'wo danxin ni', '我担心你'],
      },
      {
        prompt: "Don't worry",
        correct: ['Bié dānxīn', 'Bie danxin', 'bie danxin', '别担心'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send 'Bié dānxīn' to one person you actually mean it for today — a friend, family, anyone carrying something heavy.",
    rwenSignoff: "Carry the heart for them when you can. Set it down when they let you. See you tomorrow.",
  },

  phase8: {
    scenario: "Your Chinese language exchange partner messages you at midnight: their dad's been hospitalised back in Chengdu and they're stuck in a different city. You hop on a video call.",
    rwenRole: "Chén Yīng (陈英) — language partner, 28, scared and far from home. She'll spiral if not gently held.",
    successCriteria: "User uses 'Bié dānxīn' or 'Wǒ dānxīn nǐ' to acknowledge fear, asks one question to let her speak, and ends with 'Wǒ zài' or similar reassurance.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
