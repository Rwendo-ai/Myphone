import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Yuè & Jì — Months and Seasons',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "If days are numbered, you can guess what months are. January = 'month one' (yī yuè). July = 'month seven' (qī yuè). Twelve months, twelve numbers, zero memorisation. Then we layer on the four seasons — beautifully poetic words ending in '-tiān' (sky).",
    culturalNote: "'Yuè' (月) means moon — months were lunar. The four seasons all end in 'tiān' (天 sky/day): chūntiān (spring), xiàtiān (summer), qiūtiān (autumn), dōngtiān (winter). Chinese New Year falls on a different Western date each year because the traditional calendar is still lunar — but daily life, work, school, all use the Western (Gregorian) calendar with numbered yuè.",
  },

  chunks: [
    {
      id: 'yi_yue',
      target: 'Yī yuè',
      native: 'January (month one)',
      literal: '(一月) — yī = one, yuè = month/moon. Pattern: number + yuè',
      emoji: '❄️',
      phonetic: 'EE WEH (yī flat, yuè falling)',
      audioRef: null,
    },
    {
      id: 'si_ji',
      target: 'Sì jì',
      native: 'The four seasons',
      literal: '(四季) — sì = four, jì = season. Sì jì = the cycle',
      emoji: '🍂',
      phonetic: 'SUH JEE (sì falling, jì falling)',
      audioRef: null,
    },
    {
      id: 'chuntian',
      target: 'Chūntiān',
      native: 'Spring',
      literal: '(春天) — chūn = spring, tiān = day/sky. All seasons end in -tiān',
      emoji: '🌸',
      phonetic: 'CHWUN-TYEN (chūn flat-high, tiān flat-high)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbered months + named seasons',
    explanation: "Months: number + yuè. Jan = yī yuè, Aug = bā yuè, Dec = shí'èr yuè. Seasons keep their poetic names but follow one rule — they all end in 'tiān' (sky): chūntiān (春天 spring), xiàtiān (夏天 summer), qiūtiān (秋天 autumn), dōngtiān (冬天 winter).",
    examples: [
      { target: 'Sān yuè (三月)', native: 'March (month three)' },
      { target: "Shí'èr yuè (十二月)", native: 'December (month twelve)' },
      { target: 'Xiàtiān (夏天)', native: 'Summer' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to the month/season',
      pairs: [
        { left: 'yī yuè', right: 'January' },
        { left: 'qī yuè', right: 'July' },
        { left: 'chūntiān', right: 'Spring' },
        { left: 'dōngtiān', right: 'Winter' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'October (in Mandarin)',
      correct: ['shí yuè', 'shi yue', 'shíyuè', 'Shí yuè', '十月'],
    },
    {
      type: 'fill_blank',
      instruction: 'It\'s hot, sunny, and watermelon season. Pick the season.',
      sentence: 'Xiànzài shì _____',
      options: ['xiàtiān', 'dōngtiān', 'chūntiān'],
      correct: 'xiàtiān',
      context: 'Xiàtiān (夏天) = summer. Dōngtiān = winter. Chūntiān = spring. The "-tiān" ending is your seasonal anchor.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My birthday is in May"',
      words: ['shēngrì', 'wǔ', 'wǒ', 'yuè', 'de'],
      correct: ['wǒ', 'de', 'shēngrì', 'wǔ', 'yuè'],
      translation: 'My birthday is May — Wǒ de shēngrì wǔ yuè',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Autumn (the season)',
      correct: ['qiūtiān', 'qiutian', 'Qiūtiān', '秋天'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which Mandarin month corresponds to August?',
      question: 'Pick the right month',
      options: [
        { text: 'Bā yuè (八月)', correct: true },
        { text: 'Bā xīngqī (八星期)', correct: false },
        { text: 'Bā jì (八季)', correct: false },
      ],
      explanation: "August = month 8 = bā yuè. 'Xīngqī' is week, 'jì' is season — neither describes a month. Just number + yuè.",
    },
  ],

  rwenDialogue: {
    intro: "You're chatting with a Beijing colleague about taking a holiday. They want to know when. Months and seasons collide.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ shénme shíhou qù?',
        native: 'When are you going?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Shí yuè, qiūtiān', native: 'October, autumn', correct: true, feedback: "Beautiful — month + season layered. Very natural Mandarin." },
          { target: 'Yuè shí', native: '(wrong order)', correct: false, feedback: "Mandarin: number FIRST, then yuè. 'Shí yuè' (10月) — not 'yuè shí'." },
          { target: 'Qiūtiān shí', native: '(awkward)', correct: false, feedback: "You can say 'qiūtiān' OR 'shí yuè' — but not 'qiūtiān shí' (autumn ten). Pick one or order them properly: 'shí yuè, qiūtiān'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo shíhou — Běijīng qiūtiān zuì měi',
        native: 'Great timing — Beijing\'s most beautiful in autumn',
      },
      {
        speaker: 'rwen',
        rwenLine: "You named a month and a season in one breath, and the conversation flowed onward. Months in Mandarin are now muscle memory.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'July (in Mandarin pinyin)',
        correct: ['qī yuè', 'qi yue', 'qīyuè', 'Qī yuè', '七月'],
      },
      {
        prompt: 'Spring (the season)',
        correct: ['chūntiān', 'chuntian', 'Chūntiān', '春天'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yourself, in Mandarin, the current month and season — and your birth month. Three short phrases. By the time you're done, '_yuè' will feel as automatic as '_o'clock'.",
    rwenSignoff: "Months become moons again. Yuè after yuè after yuè. Xià ge yuè jiàn — see you next month (figuratively).",
  },

  phase8: {
    scenario: "It's mid-spring in Beijing. You're chatting with a colleague about Beijing's seasons — they're famously dramatic, with hot summers and freezing winters. You're trying to decide when to invite a friend to visit. Discuss months and seasons together.",
    rwenRole: "Colleague Sūn (孙) — Beijing native, 30s, proud of Beijing's seasons. Will recommend October ('shí yuè, qiūtiān') and warn against July ('qī yuè, tài rè le' — too hot).",
    successCriteria: "User mentions at least 2 months by name (number + yuè) and 2 seasons (with -tiān ending). Asks at least one question using 'shénme shíhou?' (when?) or 'jǐ yuè?' (which month?). Bonus: pairs a month with its season correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
