import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-measure-zhang',
  module: 4,
  lesson: 6,
  title: 'Zhāng 张 — for flat objects',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "If something has a flat surface — paper, a ticket, a table, a bed, even a face in some old expressions — Mandarin uses zhāng (张). Today's the lesson where you can buy a train ticket without sounding like a beginner.",
    culturalNote: "Zhāng's logic is 'flatness with a surface to spread or stretch.' Tables, beds, paintings, photographs, maps, paper, tickets — all zhāng. The character itself originally meant 'to stretch' (like a bow). It still has that pull.",
  },

  chunks: [
    {
      id: 'yi_zhang_zhi',
      target: 'Yì zhāng zhǐ',
      native: 'one sheet of paper',
      literal: '(一张纸) lit: one-[zhāng]-paper',
      emoji: '📄',
      phonetic: 'yee-↘ jahng-→ jrr-↘↗',
      audioRef: null,
    },
    {
      id: 'san_zhang_piao',
      target: 'Sān zhāng piào',
      native: 'three tickets',
      literal: '(三张票) lit: three-[zhāng]-ticket',
      emoji: '🎫',
      phonetic: 'sahn-→ jahng-→ pyao-↘',
      audioRef: null,
    },
    {
      id: 'liang_zhang_zhuozi',
      target: 'Liǎng zhāng zhuōzi',
      native: 'two tables',
      literal: '(两张桌子) lit: two-[zhāng]-table',
      emoji: '🪑',
      phonetic: 'lyang-↘↗ jahng-→ jwo-→ dzuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zhāng (张) — flat-surface objects',
    explanation: 'Use zhāng for things with a notable flat face: paper, tickets, photos, paintings, maps, beds, tables. If you can roll it, spread it, sit/lie on it, or pin it on a wall — likely zhāng.',
    examples: [
      { target: 'Yì zhāng zhàopiàn', native: 'one photograph' },
      { target: 'Liǎng zhāng dìtú', native: 'two maps' },
      { target: 'Sān zhāng chuáng', native: 'three beds' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Yì zhāng zhǐ', right: 'one sheet of paper' },
        { left: 'Sān zhāng piào', right: 'three tickets' },
        { left: 'Liǎng zhāng zhuōzi', right: 'two tables' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I want two tickets."',
      sentence: 'Wǒ yào liǎng _____ piào.',
      options: ['zhāng', 'běn', 'gè'],
      correct: 'zhāng',
      context: 'Tickets are flat — zhāng. Saying "liǎng gè piào" works in noisy markets but at a counter you want zhāng.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'one sheet of paper',
      correct: ['Yì zhāng zhǐ', 'yi zhang zhi', 'yì zhāng zhǐ', '一张纸'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'three tickets',
      correct: ['Sān zhāng piào', 'san zhang piao', 'sān zhāng piào', '三张票'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which is correct?',
      question: 'You point at a photo on the wall and say...',
      options: [
        { text: 'Zhè zhāng zhàopiàn hěn měi.', correct: true },
        { text: 'Zhè běn zhàopiàn hěn měi.', correct: false },
        { text: 'Zhè zhī zhàopiàn hěn měi.', correct: false },
      ],
      explanation: 'Photos are flat — zhāng. Běn is for bound things; zhī is for animals (or one of a pair).',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to buy two train tickets."',
      words: ['Wǒ', 'piào', 'liǎng', 'mǎi', 'huǒchē', 'yào', 'zhāng'],
      correct: ['Wǒ', 'yào', 'mǎi', 'liǎng', 'zhāng', 'huǒchē', 'piào'],
      translation: 'I want to buy two train tickets. (huǒchē = train, piào = ticket)',
    },
  ],

  rwenDialogue: {
    intro: "You're at a train-station ticket counter. The clerk is fast and tired — every word you save her, she appreciates. You need two tickets to Shanghai.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo, qù nǎr?',
        native: 'Hello, going where?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Liǎng zhāng dào Shànghǎi de piào.', native: 'Two tickets to Shanghai.', correct: true, feedback: 'Crisp — zhāng for tickets, liǎng for two-of. She nods and prints them.' },
          { target: 'Èr gè dào Shànghǎi de piào.', native: 'Two tickets to Shanghai (with èr & gè).', correct: false, feedback: 'Two issues: at a counter, tickets take zhāng. And "two of" is liǎng, not èr.' },
          { target: 'Yì běn dào Shànghǎi.', native: 'One book to Shanghai.', correct: false, feedback: 'You just asked for one bound-volume to Shanghai — wrong measure word.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, liǎng zhāng — yígòng yìbǎi kuài.',
        native: 'OK, two tickets — 100 yuan total.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Counters and queues love zhāng — tickets, receipts, forms. You'll use this one constantly. Flat thing? Zhāng.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'one sheet of paper (pinyin or characters)',
        correct: ['Yì zhāng zhǐ', 'yi zhang zhi', 'yì zhāng zhǐ', '一张纸'],
      },
      {
        prompt: 'three tickets',
        correct: ['Sān zhāng piào', 'san zhang piao', 'sān zhāng piào', '三张票'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find three flat objects near you — a piece of paper, a notebook page, your phone screen. Count them: 'yì zhāng, liǎng zhāng, sān zhāng.'",
    rwenSignoff: "Flat things stretch into zhāng. Zàijiàn.",
  },

  phase8: {
    scenario: "Buying tickets at a busy Beijing train-station counter. You need two tickets to a destination, you have to confirm the date, and at one point Rwen will mention a price written on a flat receipt. You'll use zhāng repeatedly — for tickets and the receipt.",
    rwenRole: "Ticket clerk (售票员) — late 30s, rapid speaker, no time for fluff. Will appreciate clean measure-word usage and answer in clipped, real-world Mandarin.",
    successCriteria: "User uses 'zhāng' for tickets at least twice, asks for a specific number of them with 'liǎng' (not èr), and follows up with a question about price or platform.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
