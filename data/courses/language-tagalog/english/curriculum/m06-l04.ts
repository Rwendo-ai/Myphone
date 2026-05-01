import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: 'Anong oras na? — What time is it?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "`Anong oras na?` — three words you'll use forever. The answer always uses Spanish-loan numbers with `alas` in front. `Alas siyete` is 7 o'clock, full stop. AM and PM get added with `ng umaga` and `ng hapon`.",
    culturalNote: "Filipinos famously have `Filipino time` — being a few minutes late is almost expected for casual meetups. But for offices, jeepney schedules, and Mass, time is exact. Asking `anong oras na?` (what time is it?) at the office is a small daily ritual.",
  },

  chunks: [
    {
      id: 'anong_oras_na',
      target: 'Anong oras na?',
      native: 'What time is it?',
      literal: 'what hour now?',
      emoji: '⏰',
      phonetic: 'a-NONG O-ras na',
      audioRef: null,
    },
    {
      id: 'alas_siyete',
      target: 'Alas siyete',
      native: "Seven o'clock",
      literal: 'at-the seven (Spanish loan)',
      emoji: '🕖',
      phonetic: 'A-las see-YEH-teh',
      audioRef: null,
    },
    {
      id: 'ng_umaga',
      target: 'Ng umaga',
      native: 'A.M. (in the morning)',
      literal: 'of morning',
      emoji: '🌅',
      phonetic: 'nang oo-MA-ga',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Telling whole hours',
    explanation: '`Alas` + Spanish-loan number = the hour. `Alas una` (1), `alas dos` (2), `alas tres` (3), `alas kwatro` (4), `alas singko` (5), `alas sais` (6), `alas siyete` (7), `alas otso` (8), `alas nuwebe` (9), `alas dyes` (10), `alas onse` (11), `alas dose` (12). Add `ng umaga` (AM), `ng tanghali` (noon), `ng hapon` (afternoon), or `ng gabi` (evening).',
    examples: [
      { target: 'Alas tres ng hapon', native: '3 PM' },
      { target: 'Alas otso ng umaga', native: '8 AM' },
      { target: 'Alas dose ng tanghali', native: '12 noon' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Anong oras na?', right: 'What time is it?' },
        { left: 'Alas siyete', right: "Seven o'clock" },
        { left: 'Ng umaga', right: 'In the morning (A.M.)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Office starts at 8 in the morning.',
      sentence: 'Pasok sa opisina alas _____ ng umaga.',
      options: ['otso', 'walo', 'siyam'],
      correct: 'otso',
      context: 'Time uses the SPANISH-loan number — `otso`, not native `walo`.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'What time is it?',
      correct: ['Anong oras na?', 'Anong oras na', 'anong oras na?', 'anong oras na'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag the words: 'It's 7 in the morning'",
      words: ['umaga', 'siyete', 'na', 'alas', 'ng'],
      correct: ['Alas', 'siyete', 'na', 'ng', 'umaga'],
      translation: "It's 7 AM.",
    },
    {
      type: 'multiple_choice',
      instruction: "You ask a co-worker the time. They reply '3 in the afternoon'.",
      question: 'Which is correct?',
      options: [
        { text: 'Alas tres ng hapon', correct: true },
        { text: 'Tatlo ng hapon', correct: false },
        { text: 'Alas tatlo ng hapon', correct: false },
      ],
      explanation: 'Hours are always Spanish-loan: `tres`, never `tatlo`. And `alas tatlo` mixes the systems wrongly.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "7 o'clock (the hour itself)",
      correct: ['Alas siyete', 'alas siyete', 'Alas siete', 'alas siete'],
    },
  ],

  rwenDialogue: {
    intro: "You're new at the office. A co-worker glances at the clock and asks you the time.",
    lines: [
      {
        speaker: 'npc',
        target: 'Pre, anong oras na?',
        native: 'Bro, what time is it?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Alas siyete ng umaga', native: '7 AM', correct: true, feedback: 'Clean — Spanish-loan hour with the AM marker. Filipino-perfect.' },
          { target: 'Pito ng umaga', native: '7 (native) in the morning', correct: false, feedback: "Native number for time sounds odd to Filipino ears. Stick with `alas siyete`." },
          { target: 'Alas siyete ng gabi', native: '7 PM', correct: false, feedback: 'Right number, wrong half of the day — `gabi` is evening.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Salamat, pre — late na ako!',
        native: "Thanks bro — I'm late!",
      },
      {
        speaker: 'rwen',
        rwenLine: 'You just told time the Filipino way. Spanish hour, native frame around it.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What time is it? (in Tagalog)', correct: ['Anong oras na?', 'Anong oras na', 'anong oras na?', 'anong oras na'] },
      { prompt: "7 o'clock in the morning (in Tagalog)", correct: ['Alas siyete ng umaga', 'alas siyete ng umaga', 'Alas siete ng umaga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Right now — say the current time in Tagalog out loud. `Alas ___ ng ___`. Even just to yourself.',
    rwenSignoff: 'Magaling. See you bukas.',
  },

  phase8: {
    scenario: "You're in a Makati office break room at 10 AM. Your seatmate Kuya Jun is on his phone. He looks up and asks you the time, then asks when your meeting is. Practise telling time in Tagalog using `alas` + Spanish-loan numbers.",
    rwenRole: 'Kuya Jun — office co-worker, ~30yo, casual; uses `pre` and asks `anong oras na?` and `kelan ang miting mo?`',
    successCriteria: 'User answers `anong oras na?` with `alas` + Spanish-loan hour + AM/PM marker (`ng umaga`/`ng hapon`/`ng gabi`). At least one full hour stated correctly.',
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
