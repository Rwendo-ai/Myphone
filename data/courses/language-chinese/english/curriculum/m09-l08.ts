import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'Zài lǚxíng zhōng — Travel Emergencies',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Three sentences nobody wants to use — and everyone eventually does. 'I'm lost.' 'I missed my train.' 'I lost my bag.' Memorise them now, calm. So when you need them, panicked, the words come out clean.",
    culturalNote: "Notice the little particle 'le' (了) in all three: mí lù LE, wù LE, diū LE. 'Le' marks a change of state or a completed action — 'le' tells your listener something HAPPENED. Without 'le' the sentence sounds incomplete: a Mandarin ear waits for it like an English ear waits for the past tense.",
  },

  chunks: [
    {
      id: 'wo_mi_lu_le',
      target: 'Wǒ mí lù le',
      native: "I'm lost",
      literal: '(我迷路了) lit: I-confused-road-(le, change of state)',
      emoji: '🧭',
      phonetic: 'WAW mee LOO luh',
      audioRef: null,
    },
    {
      id: 'wo_wu_le_huoche',
      target: 'Wǒ wù le huǒchē',
      native: 'I missed my train',
      literal: '(我误了火车) lit: I-was-late-for-(le)-train',
      emoji: '🚆',
      phonetic: 'WAW WOO luh HWAW-chuh',
      audioRef: null,
    },
    {
      id: 'wo_diu_le_bao',
      target: 'Wǒ diū le bāo',
      native: 'I lost my bag',
      literal: '(我丢了包) lit: I-lost-(le)-bag',
      emoji: '🎒',
      phonetic: 'WAW DYO luh BOW',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Verb] + le — completed action / change of state',
    explanation: "'Le' (了) attaches to a verb and signals 'this just happened' or 'state has changed'. Mí lù LE = (I) became lost. Wù LE huǒchē = missed (the) train. Diū LE bāo = lost (the) bag. Without 'le', these sound like statements about general behaviour, not events.",
    examples: [
      { target: 'Wǒ è le', native: "I'm hungry (became hungry)" },
      { target: 'Wǒ wàng le', native: "I forgot" },
      { target: 'Tā lái le', native: "She came / She's here" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the emergency phrase to its meaning',
      pairs: [
        { left: 'Wǒ mí lù le', right: "I'm lost" },
        { left: 'Wǒ wù le huǒchē', right: 'I missed my train' },
        { left: 'Wǒ diū le bāo', right: 'I lost my bag' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm lost",
      correct: ["Wǒ mí lù le", "Wo mi lu le", "wo mi lu le", "wǒ mí lù le", '我迷路了'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'I lost my bag' — pick the change-of-state particle",
      sentence: 'Wǒ diū _____ bāo',
      options: ['le', 'ma', 'ne'],
      correct: 'le',
      context: "'Le' (了) is the change-of-state / completed-action particle. 'Ma' makes a question. 'Ne' is a softer follow-up question particle. Only 'le' fits here.",
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'I missed my train'",
      words: ['huǒchē', 'wù', 'le', 'Wǒ'],
      correct: ['Wǒ', 'wù', 'le', 'huǒchē'],
      translation: 'I missed my train',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I lost my bag',
      correct: ['Wǒ diū le bāo', 'Wo diu le bao', 'wo diu le bao', 'wǒ diū le bāo', '我丢了包'],
    },
    {
      type: 'multiple_choice',
      instruction: "You step out of Beijing West Station, look around, realise you have NO IDEA which way the hotel is. What do you say to the nearest stranger?",
      question: 'Pick the most useful sentence',
      options: [
        { text: 'Wǒ mí lù le', correct: true },
        { text: 'Wǒ è le', correct: false },
        { text: 'Wǒ wù le huǒchē', correct: false },
      ],
      explanation: "'Wǒ mí lù le' (我迷路了) — 'I've gotten lost'. The exact phrase. 'Wǒ è le' = I'm hungry (true but unhelpful). 'Wǒ wù le huǒchē' = I missed my train (you just got off it).",
    },
  ],

  rwenDialogue: {
    intro: "Saturday afternoon, deep in a Beijing hutong. Your phone died twenty minutes ago. You haven't seen a street sign in English for an hour. A vendor at a tiny shop is restocking soda. You walk over.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bù hǎo yìsi, wǒ mí lù le', native: "Excuse me, I'm lost", correct: true, feedback: "Beautiful — 'bù hǎo yìsi' softens the approach, then the truth. He puts the soda down to help." },
          { target: 'Wǒ wù le huǒchē', native: "I missed my train", correct: false, feedback: "You're not at a station — you're in a hutong. The phrase you need is 'Wǒ mí lù le' (I'm lost)." },
          { target: 'Wǒ è le', native: "I'm hungry", correct: false, feedback: "Also true probably, but not the problem. 'Wǒ mí lù le' — I'm lost." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Nǐ qù nǎlǐ?',
        native: 'Where are you going?',
      },
      {
        speaker: 'npc',
        target: 'Bié dānxīn, wǒ gàosu nǐ',
        native: "Don't worry, I'll tell you",
      },
      {
        speaker: 'rwen',
        rwenLine: "'Bié dānxīn' — don't worry. The kindness of a stranger in a hutong is one of the best things about travelling in China. You found it because you asked.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm lost",
        correct: ["Wǒ mí lù le", "Wo mi lu le", "wo mi lu le", "wǒ mí lù le", '我迷路了'],
      },
      {
        prompt: 'I missed my train',
        correct: ['Wǒ wù le huǒchē', 'Wo wu le huoche', 'wo wu le huoche', 'wǒ wù le huǒchē', '我误了火车'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk into your kitchen. Put down whatever you're holding. Out loud, deadpan: 'Wǒ mí lù le.' Then 'Wǒ wù le huǒchē.' Then 'Wǒ diū le bāo.' Three calm sentences. The day you actually need them, panicked-you will thank calm-you.",
    rwenSignoff: "Tomorrow, the magic phrase that turns strangers into helpers. Zàijiàn.",
  },

  phase8: {
    scenario: "You've been walking through Beijing's hutongs for an hour trying to find your hostel and you're now thoroughly lost. Your phone is at 3% battery. You spot an older man feeding a caged bird outside his courtyard.",
    rwenRole: "Lǎo Zhāng (老张) — retired Beijinger, ~70, gentle, will speak slower than usual once he sees you're a foreigner. Knows the hutongs cold.",
    successCriteria: "User says 'Wǒ mí lù le' (NOT just 'lost' or 'mí lù' without 'le'). Bonus: opens with 'Bù hǎo yìsi' (excuse me). Reacts to direction reply (Module 9 L2 vocab) with thanks.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
