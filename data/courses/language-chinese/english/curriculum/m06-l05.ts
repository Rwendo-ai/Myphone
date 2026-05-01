import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Bàn, Kè — Half Past, Quarter Past',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mandarin time gets faster, not harder. 'Bàn' = half. 'Kè' = quarter (literally 'a notch'). 'Qī diǎn bàn' is 7:30 — seven-point-half. Compared to French 'sept heures et demie' or English 'half past seven', Mandarin barely breaks a sweat.",
    culturalNote: "'Bàn' (半) and 'kè' (刻) come from imperial-era timekeeping when a day was divided into 12 'shí' (hours), each split into 8 'kè' (notches). One kè = ~15 minutes. The vocabulary survived. To say 'quarter to', use 'chà yí kè' (差一刻 — short by one quarter): chà bā diǎn yí kè = 'short of 8 by one quarter' = 7:45.",
  },

  chunks: [
    {
      id: 'qi_dian_ban',
      target: 'Qī diǎn bàn',
      native: '7:30 (half past seven)',
      literal: '(七点半) — seven-point-half. Word order: hour, diǎn, bàn',
      emoji: '🕢',
      phonetic: 'CHEE DYEN BAHN (bàn falling tone)',
      audioRef: null,
    },
    {
      id: 'ba_dian_shi_fen',
      target: 'Bā diǎn shí fēn',
      native: '8:10 (ten past eight)',
      literal: '(八点十分) — eight-point, ten minutes. fēn = minute',
      emoji: '🕗',
      phonetic: 'BA DYEN SHRR FUN (fēn flat-high)',
      audioRef: null,
    },
    {
      id: 'cha_yi_ke',
      target: 'Chà yí kè',
      native: 'Quarter to (short by a quarter)',
      literal: '(差一刻) — chà = short of, yí kè = one quarter (15 min)',
      emoji: '🕥',
      phonetic: 'CHAH EE KUH (chà falling, yí rising, kè falling)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Building any time',
    explanation: "Hour first (number + diǎn), then minutes. Three ways to say minutes: (1) exact — 'shí fēn' (10 min), (2) half — 'bàn', (3) quarter — 'yí kè' (15 min) or 'sān kè' (45 min). For 'quarter to', flip to 'chà yí kè' before the next hour.",
    examples: [
      { target: 'Liù diǎn bàn (六点半)', native: '6:30' },
      { target: 'Wǔ diǎn yí kè (五点一刻)', native: '5:15' },
      { target: 'Chà yí kè jiǔ diǎn (差一刻九点)', native: '8:45 (quarter to 9)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to the time',
      pairs: [
        { left: 'qī diǎn bàn', right: '7:30' },
        { left: 'bā diǎn shí fēn', right: '8:10' },
        { left: 'chà yí kè', right: 'quarter to' },
        { left: 'wǔ diǎn yí kè', right: '5:15' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type the Mandarin (pinyin or characters)',
      prompt: '6:30 (half past six)',
      correct: ['liù diǎn bàn', 'liu dian ban', 'liùdiǎnbàn', 'Liù diǎn bàn', '六点半'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the time: 9:15 in Mandarin',
      sentence: 'Jiǔ diǎn _____',
      options: ['yí kè', 'bàn', 'shí fēn'],
      correct: 'yí kè',
      context: '15 minutes = one quarter = yí kè (一刻). "Bàn" is half (30). "Shí fēn" is exactly ten minutes.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "8:30" in Mandarin',
      words: ['bàn', 'bā', 'fēn', 'diǎn'],
      correct: ['bā', 'diǎn', 'bàn'],
      translation: '8:30 — bā diǎn bàn (eight-point-half)',
    },
    {
      type: 'translate',
      instruction: 'Type the time: "20 past 7" — use the fēn pattern',
      prompt: '7:20 (twenty past seven)',
      correct: ['qī diǎn èrshí fēn', 'qi dian ershi fen', 'qī diǎn èrshí', 'Qī diǎn èrshí fēn', '七点二十分', '七点二十'],
    },
    {
      type: 'multiple_choice',
      instruction: '"Chà yí kè bā diǎn" — what time is this?',
      question: 'Pick the right time',
      options: [
        { text: '7:45 (quarter to 8)', correct: true },
        { text: '8:15 (quarter past 8)', correct: false },
        { text: '8:00 sharp', correct: false },
      ],
      explanation: "Chà = short of. Yí kè = one quarter (15 min). Bā diǎn = 8:00. So: 'short of 8 by one quarter' = 7:45.",
    },
  ],

  rwenDialogue: {
    intro: "You're meeting a friend at a Shanghai café. They're texting to nail down the time — and they want minute precision because the metro gets crazy at rush hour.",
    lines: [
      {
        speaker: 'npc',
        target: "Jǐ diǎn jiànmiàn?",
        native: 'What time shall we meet?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xiàwǔ sān diǎn bàn', native: '3:30 PM', correct: true, feedback: "Perfect — 'bàn' for the half. Crisp and natural." },
          { target: 'Sān bàn diǎn', native: '(wrong order)', correct: false, feedback: "Hour first, then bàn. 'Sān diǎn bàn' (3:30) — not 'sān bàn diǎn'." },
          { target: 'Sān diǎn sānshí fēn', native: '3:30 PM (saying it the long way)', correct: false, feedback: "Technically correct but nobody says it that way. 'Sān diǎn bàn' is what a Beijinger would actually say. (You wouldn't say 'three hours and thirty minutes' in English either.)" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, sān diǎn bàn — bú jiàn bú sàn',
        native: "OK, 3:30 — see you there (lit: don't leave until we meet)",
      },
      {
        speaker: 'rwen',
        rwenLine: "You set a meeting time using 'bàn' the way locals do. The fluency is in the casual choices — not the long forms.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: '7:30 (half past seven, in Mandarin pinyin)',
        correct: ['qī diǎn bàn', 'qi dian ban', '七点半'],
      },
      {
        prompt: 'Quarter to (the phrase used before the next hour)',
        correct: ['chà yí kè', 'cha yi ke', 'chà yi ke', '差一刻'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yourself the time five times today — but only using bàn or yí kè when applicable. Force yourself off 'sānshí fēn' and onto 'bàn'. That's where casual fluency lives.",
    rwenSignoff: "Time slips, but bàn and kè will hold. Wǎnshang jiàn — see you tonight.",
  },

  phase8: {
    scenario: "Friday afternoon, Shanghai. You're meeting a friend at the People's Square metro station before heading to dinner. They want a precise meeting time — and rush hour is brutal, so the difference between 5:30 and 5:45 matters.",
    rwenRole: "Friend Méi (美) — Shanghai-based, late 20s, casual and warm. Texts and speaks fast. Will use 'bàn' and 'yí kè' herself and expect you to too.",
    successCriteria: "User proposes a meeting time using either 'bàn' or 'yí kè' (NOT just 'shí fēn' / 'sānshí fēn'). Confirms with shàngwǔ/xiàwǔ. Bonus: uses 'chà yí kè' for a quarter-to time (e.g., 'chà yí kè liù diǎn' = 5:45).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
