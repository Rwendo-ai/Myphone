import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-zaijian',
  module: 1,
  lesson: 9,
  title: 'Zàijiàn — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Goodbyes in Mandarin come in three sizes. 'Zàijiàn' (see you again) is the all-purpose default. 'Míngtiān jiàn' (see you tomorrow) is warmer for daily contacts. 'Bǎozhòng' (take care) is for long absences and people you care about. Pick by distance.",
    culturalNote: "Walking out of a Chinese friend's home, the host will often follow you to the door — sometimes the lift, sometimes the gate. They'll say 'zǒu hǎo' (literally 'walk well') as you leave. The right reply is a wave and 'zàijiàn'.",
  },

  chunks: [
    {
      id: 'zaijian',
      target: 'Zàijiàn',
      native: 'Goodbye',
      literal: '(再见) lit: again-see',
      emoji: '👋',
      phonetic: 'DZIGH-jyen',
      audioRef: null,
    },
    {
      id: 'mingtian_jian',
      target: 'Míngtiān jiàn',
      native: 'See you tomorrow',
      literal: '(明天见) lit: tomorrow-see',
      emoji: '🌙',
      phonetic: 'MING-tyen jyen',
      audioRef: null,
    },
    {
      id: 'baozhong',
      target: 'Bǎozhòng',
      native: 'Take care',
      literal: '(保重) lit: protect-heavily',
      emoji: '💝',
      phonetic: 'BOW-jong ("zh" = "j")',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Farewell wishes by distance',
    explanation: "All three farewells are built from familiar pieces: 'jiàn' (see) appears in 'zàijiàn' and 'míngtiān jiàn'. Pattern: [time word] + jiàn = 'see you [then]'. 'Bǎozhòng' is heavier — for partings of weeks, months, or years.",
    examples: [
      { target: 'Zàijiàn', native: 'See you again (default)' },
      { target: 'Míngtiān jiàn', native: 'See you tomorrow' },
      { target: 'Xīngqī yī jiàn', native: 'See you Monday' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the farewell to the situation',
      pairs: [
        { left: 'Zàijiàn', right: 'Goodbye (default)' },
        { left: 'Míngtiān jiàn', right: 'See you tomorrow' },
        { left: 'Bǎozhòng', right: 'Take care (long absence)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Goodbye (default farewell)',
      correct: ['Zàijiàn', 'Zaijian', 'zaijian', 'zàijiàn', '再见'],
    },
    {
      type: 'fill_blank',
      instruction: "You'll see your colleague again tomorrow at work",
      sentence: '_____ jiàn',
      options: ['Míngtiān', 'Bǎozhòng', 'Huānyíng'],
      correct: 'Míngtiān',
      context: '"Míngtiān" = tomorrow. The pattern [time] + jiàn = "see you [then]" is one of Mandarin\'s most reusable.',
    },
    {
      type: 'build_sentence',
      instruction: "You're saying goodbye to a friend moving overseas — full warmth",
      words: ['zàijiàn', 'Bǎozhòng,', 'péngyou'],
      correct: ['Bǎozhòng,', 'péngyou', 'zàijiàn'],
      translation: 'Take care, friend, goodbye',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — for someone going away for a long time',
      prompt: 'Take care',
      correct: ['Bǎozhòng', 'Baozhong', 'baozhong', 'bǎozhòng', '保重'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your colleague leaves the office at 5pm — you'll see them tomorrow morning. Pick the most natural farewell.",
      question: 'Which farewell fits?',
      options: [
        { text: "Míngtiān jiàn — 'see you tomorrow', warm and specific", correct: true },
        { text: 'Bǎozhòng — too heavy; reserved for long absences', correct: false },
        { text: 'Huānyíng — that means "welcome", wrong direction', correct: false },
      ],
      explanation: "Match the farewell to the gap. 'Bǎozhòng' for months apart, 'míngtiān jiàn' for next-day, 'zàijiàn' for everything in between or unknown.",
    },
  ],

  rwenDialogue: {
    intro: "You've spent the evening at a Chinese friend's apartment — tea, fruit, family photos. It's late. Your friend follows you to the door, holding it open as you put on your shoes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zǒu hǎo, lùshàng xiǎoxīn',
        native: 'Walk well, be careful on the way',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xièxie, zàijiàn', native: 'Thanks, goodbye', correct: true, feedback: 'Thanks for the evening, default goodbye. Perfect close.' },
          { target: 'Bǎozhòng', native: 'Take care', correct: false, feedback: "Too heavy — you'll see this friend again next week. Save 'bǎozhòng' for partings of months or more." },
          { target: 'Nǐ hǎo', native: 'Hello', correct: false, feedback: "You're leaving — saying hello at the door is upside down." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Zàijiàn, xià cì jiàn',
        native: 'Goodbye — see you next time',
      },
      {
        speaker: 'rwen',
        rwenLine: "Right size of goodbye, right amount of warmth. You'll see them again, so 'zàijiàn'. If they were moving to Vancouver, you'd switch to 'bǎozhòng'. Match the gap, not the moment.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'See you tomorrow',
        correct: ['Míngtiān jiàn', 'Mingtian jian', 'mingtian jian', 'míngtiān jiàn', '明天见'],
      },
      {
        prompt: 'Take care (for someone going away for a long time)',
        correct: ['Bǎozhòng', 'Baozhong', 'baozhong', 'bǎozhòng', '保重'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one farewell to use today. If you'll see the person tomorrow, 'míngtiān jiàn'. If they're going away, 'bǎozhòng'. Otherwise, 'zàijiàn'. Practise picking the right size.",
    rwenSignoff: "Goodbyes shape memories more than greetings do. Choose them well. Zàijiàn.",
  },

  phase8: {
    scenario: "10:30pm at your Chinese friend's Beijing apartment. You've shared dinner, played with the dog, looked at family photos for an hour. It's time to leave. Your friend has walked you to the front door and is holding it open as you tie your shoes — a small but important threshold moment.",
    rwenRole: "Lín (林) — your Chinese friend, late 20s, you'll see her again next week. Will say 'zǒu hǎo' (walk well) and probably wave from the doorway as you head down the corridor. Wants a warm but not overwrought goodbye.",
    successCriteria: "User picks 'zàijiàn' (NOT 'bǎozhòng' — too heavy for next-week parting; NOT just an English 'bye'), thanks her with 'xièxie' for the evening, and ideally adds 'míngtiān jiàn' or 'xià cì jiàn' if they have plans soon. Match the size of the goodbye to the gap.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
