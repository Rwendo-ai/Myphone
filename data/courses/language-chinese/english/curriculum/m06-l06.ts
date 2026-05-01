import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Xīngqī — Days of the Week',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Days of the week in Mandarin are NUMBERED. Monday is 'week one'. Tuesday is 'week two'. By Friday you're at 'week five'. No memorising 'Wednesday' or 'mercredi'. Just 'xīngqī sān' (week three). Mandarin keeps winning.",
    culturalNote: "'Xīngqī' (星期) literally means 'star period' — the seven-day week is borrowed from Western astronomy. Days 1-6 are simply 'xīngqī' + the number. The odd one out: Sunday is 'xīngqī tiān' (天 sky/heaven) or 'xīngqī rì' (日 sun/day) — both are common. You'll also hear 'lǐbài' (礼拜) instead of xīngqī, especially in southern China and Taiwan.",
  },

  chunks: [
    {
      id: 'xingqi_yi',
      target: 'Xīngqī yī',
      native: 'Monday (week-one)',
      literal: '(星期一) — xīngqī = week, yī = one. Pure logic',
      emoji: '🌙',
      phonetic: 'SHING-CHEE EE (xīng flat, qī flat, yī flat)',
      audioRef: null,
    },
    {
      id: 'xingqi_wu',
      target: 'Xīngqī wǔ',
      native: 'Friday (week-five)',
      literal: '(星期五) — same pattern, just swap the digit',
      emoji: '🍻',
      phonetic: 'SHING-CHEE WOO',
      audioRef: null,
    },
    {
      id: 'xingqi_tian',
      target: 'Xīngqī tiān',
      native: 'Sunday (week-sky)',
      literal: '(星期天) — the irregular one. Also "xīngqī rì" (星期日)',
      emoji: '☀️',
      phonetic: 'SHING-CHEE TYEN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbered days + the Sunday exception',
    explanation: "Mon–Sat = xīngqī + 1 through 6. Sunday is special: 'xīngqī tiān' (sky) or 'xīngqī rì' (sun) — never 'xīngqī qī' (week-seven). To say 'today/tomorrow', use 'jīntiān' (今天 today), 'míngtiān' (明天 tomorrow), 'zuótiān' (昨天 yesterday).",
    examples: [
      { target: 'Xīngqī èr (星期二)', native: 'Tuesday' },
      { target: 'Xīngqī sì (星期四)', native: 'Thursday' },
      { target: 'Jīntiān xīngqī jǐ? (今天星期几?)', native: 'What day is today? (lit: today week-which?)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to the day',
      pairs: [
        { left: 'xīngqī yī', right: 'Monday' },
        { left: 'xīngqī sān', right: 'Wednesday' },
        { left: 'xīngqī wǔ', right: 'Friday' },
        { left: 'xīngqī tiān', right: 'Sunday' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Tuesday (in Mandarin)',
      correct: ['xīngqī èr', 'xingqi er', 'xīngqī èr', 'Xīngqī èr', '星期二'],
    },
    {
      type: 'fill_blank',
      instruction: 'Today is the day before Friday. Pick the right day.',
      sentence: 'Jīntiān xīngqī _____',
      options: ['sì', 'liù', 'tiān'],
      correct: 'sì',
      context: 'Day before Friday (week-5) = Thursday = xīngqī sì (week-4). Counting is the trick.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Tomorrow is Sunday"',
      words: ['xīngqī', 'tiān', 'míngtiān', 'shì'],
      correct: ['míngtiān', 'shì', 'xīngqī', 'tiān'],
      translation: 'Tomorrow is Sunday — Míngtiān shì xīngqī tiān',
    },
    {
      type: 'translate',
      instruction: 'Ask "What day is today?" in Mandarin',
      prompt: 'What day is today?',
      correct: ['jīntiān xīngqī jǐ?', 'jīntiān xīngqī jǐ', 'jintian xingqi ji', 'jintian xingqi ji?', 'Jīntiān xīngqī jǐ?', '今天星期几?', '今天星期几'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why isn\'t Sunday called "xīngqī qī" (week-seven)?',
      question: 'Pick the best answer',
      options: [
        { text: 'Sunday is the start (or end) of the week culturally — it gets a special name with "tiān" (sky/heavens) or "rì" (sun)', correct: true },
        { text: 'The number 7 is unlucky in Chinese', correct: false },
        { text: 'Mandarin only goes up to 6 in counting', correct: false },
      ],
      explanation: "It's a cultural/historical quirk borrowed from Western day-naming where Sunday = sun-day. Both 'tiān' and 'rì' are used; 'rì' is slightly more formal/written.",
    },
  ],

  rwenDialogue: {
    intro: "A Beijing colleague is checking when you're free for a project meeting next week. They run through days fast — keep up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Xīngqī sān kěyǐ ma?',
        native: 'Is Wednesday OK?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xīngqī sān bù xíng, xīngqī sì kěyǐ', native: "Wednesday won't work, Thursday's OK", correct: true, feedback: "Smooth — you said no to one day and offered an alternative. Real conversation flow." },
          { target: 'Xīngqī wǔ', native: 'Friday', correct: false, feedback: "You jumped straight to Friday without addressing his proposal. Soften with 'xīngqī sān bù xíng' (Wed doesn't work) first." },
          { target: 'Xīngqī tiān kěyǐ', native: "Sunday's OK", correct: false, feedback: "Sunday is xīngqī tiān, but suggesting Sunday for a work meeting in China is unusual unless agreed in advance — most colleagues won't expect it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, xīngqī sì xiàwǔ',
        native: 'OK, Thursday afternoon',
      },
      {
        speaker: 'rwen',
        rwenLine: "You negotiated a meeting day in Mandarin — pushed back, offered an alternative, sealed it. That's not vocab. That's communication.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Friday (in Mandarin pinyin)',
        correct: ['xīngqī wǔ', 'xingqi wu', 'Xīngqī wǔ', '星期五'],
      },
      {
        prompt: 'Sunday',
        correct: ['xīngqī tiān', 'xingqi tian', 'xīngqī rì', 'xingqi ri', '星期天', '星期日'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every morning this week (mentally or out loud), state today's day in Mandarin: 'Jīntiān xīngqī yī.' By Sunday you'll have said all seven without thinking.",
    rwenSignoff: "The week becomes a chant. Xīngqī yī, èr, sān... Jīntiān jiàn — see you today.",
  },

  phase8: {
    scenario: "You're scheduling a recurring weekly Mandarin study session with a Beijing-based language exchange partner. They want to find a day that works for both of you and will rattle through 'xīngqī yī? xīngqī èr? xīngqī sān?' until something sticks.",
    rwenRole: "Language partner Chén (陈) — student in Beijing, early 20s, energetic. Will propose multiple days fast and expect you to accept, decline, or counter-offer in Mandarin.",
    successCriteria: "User accepts/declines at least 3 day proposals using xīngqī + number, makes one counter-offer, and confirms a final day. Must correctly use 'xīngqī tiān' or 'xīngqī rì' if Sunday comes up — never 'xīngqī qī'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
