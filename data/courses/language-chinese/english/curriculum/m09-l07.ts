import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Zhù bīnguǎn — At the Hotel',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "You walk into a Hangzhou hotel lobby — quiet jazz, lake view, exhausted you. The receptionist will ask three things: do you have a reservation, can she see your passport, when are you checking out? Today, you arm yourself with the words.",
    culturalNote: "Chinese hotels almost always require a passport at check-in for foreign guests — non-negotiable, by law. Some smaller guesthouses (民宿 mínsù) won't accept foreigners at all because they're not registered for it. Always check on Trip.com or Ctrip whether the hotel takes foreign passports BEFORE you book.",
  },

  chunks: [
    {
      id: 'yuding',
      target: 'Yùdìng',
      native: 'Reservation',
      literal: '(预定) lit: pre-fix',
      emoji: '📅',
      phonetic: 'YOO ding',
      audioRef: null,
    },
    {
      id: 'fangjian_yaoshi',
      target: 'Fángjiān yàoshi',
      native: 'Room key',
      literal: '(房间钥匙) lit: room-key',
      emoji: '🔑',
      phonetic: 'FANG-jyen YAO-shr',
      audioRef: null,
    },
    {
      id: 'tui_fang',
      target: 'Tuì fáng',
      native: 'Check out',
      literal: '(退房) lit: return-room',
      emoji: '🧳',
      phonetic: 'TWAY fang',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hotel verbs — pre-, return-, and assigned',
    explanation: "Many hotel words use 'fáng' (房, room) as a base. 'Tuì fáng' (退房, return-room) = check out. 'Rù zhù' (入住, enter-stay) = check in. 'Fángjiān' (房间) = guest room. 'Yùdìng' uses 'yù' (预, pre-) — the same prefix in 'yùbào' (预报, forecast / pre-announce). Mandarin loves these little logic-trees.",
    examples: [
      { target: 'Wǒ yǒu yùdìng', native: 'I have a reservation' },
      { target: 'Hùzhào, qǐng', native: 'Passport, please' },
      { target: 'Míngtiān tuì fáng', native: 'Check out tomorrow' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hotel word to its meaning',
      pairs: [
        { left: 'Yùdìng', right: 'Reservation' },
        { left: 'Fángjiān yàoshi', right: 'Room key' },
        { left: 'Tuì fáng', right: 'Check out' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell reception you have a reservation",
      sentence: 'Wǒ yǒu _____',
      options: ['yùdìng', 'tuì fáng', 'yàoshi'],
      correct: 'yùdìng',
      context: "'Wǒ yǒu yùdìng' (我有预定) = I have a reservation. The standard opening line at any Chinese hotel front desk.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Room key',
      correct: ['Fángjiān yàoshi', 'Fangjian yaoshi', 'fangjian yaoshi', 'fángjiān yàoshi', '房间钥匙'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'I check out tomorrow'",
      words: ['tuì', 'míngtiān', 'fáng', 'Wǒ'],
      correct: ['Wǒ', 'míngtiān', 'tuì', 'fáng'],
      translation: 'I check out tomorrow',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Check out',
      correct: ['Tuì fáng', 'Tui fang', 'tui fang', 'tuì fáng', '退房'],
    },
    {
      type: 'multiple_choice',
      instruction: "Reception says 'Qǐng chūshì hùzhào'. What do you hand over?",
      question: 'Pick the right item',
      options: [
        { text: 'Your passport', correct: true },
        { text: 'Your boarding pass', correct: false },
        { text: 'Your room key', correct: false },
      ],
      explanation: "'Hùzhào' (护照) = passport, literally 'protect-document'. Chinese hotels are legally required to register foreign guests with their passport — there's no skipping this step.",
    },
  ],

  rwenDialogue: {
    intro: "Late evening at a small boutique hotel near West Lake in Hangzhou. The receptionist is a young woman who's been on shift for ten hours and just wants to get you to your room.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nǐ hǎo, wǒ yǒu yùdìng', native: 'Hello, I have a reservation', correct: true, feedback: 'Perfect opening — greeting plus the reservation phrase. She nods and types.' },
          { target: 'Wǒ yào fángjiān yàoshi', native: 'I want a room key', correct: false, feedback: "Skipping a step. She needs to find your reservation first — open with 'Wǒ yǒu yùdìng'." },
          { target: 'Tuì fáng', native: 'Check out', correct: false, feedback: "You've just arrived — that's check-OUT. You want to check IN: start with 'Wǒ yǒu yùdìng'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, qǐng chūshì hùzhào',
        native: 'OK, please show your passport',
      },
      {
        speaker: 'npc',
        target: 'Zhè shì nǐ de fángjiān yàoshi',
        native: 'This is your room key',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three exchanges, room secured. The Chinese hotel script is short and predictable — and you've got it. Sleep well.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Reservation',
        correct: ['Yùdìng', 'Yuding', 'yuding', 'yùdìng', '预定'],
      },
      {
        prompt: 'Check out',
        correct: ['Tuì fáng', 'Tui fang', 'tui fang', 'tuì fáng', '退房'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine the receptionist standing in front of you. Out loud, run the script: 'Nǐ hǎo, wǒ yǒu yùdìng.' Hand over your imaginary passport. Catch the imaginary key. Next time it's real, your mouth will already know the moves.",
    rwenSignoff: "Reservations are promises in writing. Tomorrow, when things go wrong. Zàijiàn.",
  },

  phase8: {
    scenario: "10pm at a hotel near Hangzhou's West Lake. You've just arrived from the Shanghai bullet train, exhausted. You have a reservation under your name and you'll check out the day after tomorrow.",
    rwenRole: "Hotel receptionist — late 20s, polite but tired, speaks at normal Mandarin pace.",
    successCriteria: "User opens with greeting + 'Wǒ yǒu yùdìng' (NOT 'Wǒ yào fángjiān'). Hands over passport when asked for 'hùzhào'. States checkout day using 'tuì fáng' (e.g., 'Hòutiān tuì fáng' = check out the day after tomorrow).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
