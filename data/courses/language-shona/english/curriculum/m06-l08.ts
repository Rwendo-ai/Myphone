import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-larger-numbers',
  module: 6,
  lesson: 8,
  title: 'Makumi — Tens & Larger Numbers',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "One to ten you have. Now we go bigger. 'Makumi' is the key — it means 'tens'. Makumi maviri = twenty (two tens). Makumi matatu = thirty (three tens). Once you have this, you can reach a hundred.",
    culturalNote: "Larger numbers come up constantly in Zimbabwean life — phone numbers, distances, quantities at the market, ages, prices. Being able to say and understand numbers to 100 unlocks a huge range of practical conversations.",
  },

  chunks: [
    {
      id: 'makumi_maviri',
      target: 'Makumi maviri',
      native: 'Twenty',
      literal: 'Tens two = 20',
      emoji: '2️⃣0️⃣',
      phonetic: 'ma-KU-mi ma-VI-ri',
      audioRef: null,
    },
    {
      id: 'makumi_matatu',
      target: 'Makumi matatu',
      native: 'Thirty',
      literal: 'Tens three = 30',
      emoji: '3️⃣0️⃣',
      phonetic: 'ma-KU-mi ma-TA-tu',
      audioRef: null,
    },
    {
      id: 'zana',
      target: 'Zana',
      native: 'One hundred',
      literal: 'Zana (100)',
      emoji: '💯',
      phonetic: 'ZA-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Makumi + number = tens',
    explanation: "'Makumi' means tens. Add any number: Makumi maviri (20), Makumi matatu (30), Makumi mana (40), Makumi mashanu (50). For 21: Makumi maviri nerimwe. For 35: Makumi matatu neshanu. Zana = 100.",
    examples: [
      { target: 'Makumi maviri', native: 'Twenty (2 tens)' },
      { target: 'Makumi maviri nerimwe', native: 'Twenty-one' },
      { target: 'Zana', native: 'One hundred' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the number to its meaning',
      pairs: [
        { left: 'Makumi maviri', right: 'Twenty' },
        { left: 'Makumi matatu', right: 'Thirty' },
        { left: 'Zana', right: 'One hundred' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete twenty-one',
      sentence: 'Makumi maviri _____ rimwe.',
      options: ['ne', 'na', 'kana'],
      correct: 'ne',
      context: 'Makumi maviri nerimwe = twenty-one.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Twenty',
      correct: ['Makumi maviri', 'makumi maviri'],
    },
    {
      type: 'multiple_choice',
      instruction: "How old are you if you say 'Ndine makore makumi matatu'?",
      question: 'Makumi matatu makore means:',
      options: [
        { text: '30 years old', correct: true },
        { text: '20 years old', correct: false },
        { text: '13 years old', correct: false },
      ],
      explanation: "Makumi matatu = thirty (3 tens). Ndine makore makumi matatu = I am 30 years old.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am thirty years old'",
      words: ['Ndine', 'makore', 'makumi', 'matatu.'],
      correct: ['Ndine', 'makore', 'makumi', 'matatu.'],
      translation: 'I am thirty years old',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'One hundred',
      correct: ['Zana', 'zana'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks your age using the formal Shona structure.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Une makore mangani? Ndinokubvunza zvakanaka.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndine makore makumi [your number]. Wakaita makore mangani?', native: 'I am [your age] years old. How old are you?', correct: true, feedback: "Age shared and returned — a complete exchange using larger numbers." },
          { target: 'Ndine makore gumi', native: 'I am 10 years old', correct: false, feedback: "Use makumi for tens: 'Ndine makore makumi maviri (20)' or whatever your age is." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "You know your age! 'Ndine makore makumi [number].' Fill in your actual age." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka! Ndine makore makumi matatu nerimwe. 31 — ndinofarira kudzidza nemi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Twenty', correct: ['Makumi maviri', 'makumi maviri'] },
      { prompt: 'One hundred', correct: ['Zana', 'zana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your age in Shona using Makumi: 'Ndine makore makumi [tens] ne[ones].' Then count by tens out loud: Gumi, makumi maviri, makumi matatu... up to zana.",
    rwenSignoff: "Numbers tell your story. Zana! One hundred steps forward. Famba zvakanaka.",
  },

  phase8: {
    scenario: "On the long-distance bus to Beitbridge, just after departure from Roadport in Harare. The conductor is calling out fares for different stops — anywhere from 20 to 100 madora depending on the destination — and you need to confirm your fare and your age for the ID list in Shona.",
    rwenRole: "Bus conductor on the Beitbridge route — late 30s, fast-talking, used to rural elders who only speak Shona; he expects passengers to give their age and pay the fare in numbers without slowing him down.",
    successCriteria: "User states their age using 'Ndine makore makumi [number] ne[ones]' with the makumi-tens pattern (or zana for 100), and repeats back at least one fare quote correctly using makumi or zana — no English digits, no falling back to gumi for ages over 19.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
