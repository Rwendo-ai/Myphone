import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Mga araw — Days of the week',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Days of the week in Tagalog are also Spanish loans — Lunes, Martes, Miyerkules, Huwebes, Biyernes, Sabado, Linggo. The fun one is `Linggo` — it means BOTH `Sunday` AND `week`. Context tells you which.",
    culturalNote: "`Linggo-linggo` (week-week) means `weekly`, and `bawat Linggo` (every Sunday/Linggo) usually means church, family lunch, or barangay basketball. Sunday is sacred family time in the Philippines — most Filipinos go to Mass and eat lunch with relatives, no exceptions.",
  },

  chunks: [
    {
      id: 'lunes',
      target: 'Lunes',
      native: 'Monday',
      literal: 'Monday (from Spanish lunes)',
      emoji: '📅',
      phonetic: 'LOO-nes',
      audioRef: null,
    },
    {
      id: 'biyernes',
      target: 'Biyernes',
      native: 'Friday',
      literal: 'Friday (from Spanish viernes)',
      emoji: '🎉',
      phonetic: 'bee-YER-nes',
      audioRef: null,
    },
    {
      id: 'linggo',
      target: 'Linggo',
      native: 'Sunday / week',
      literal: 'Sunday (also: week)',
      emoji: '⛪',
      phonetic: 'LING-go',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Spanish-loan day names',
    explanation: 'All seven days are Spanish loans, slightly Filipinised: Lunes (Mon), Martes (Tue), Miyerkules (Wed), Huwebes (Thu), Biyernes (Fri), Sabado (Sat), Linggo (Sun). To say `on Monday`, use `sa Lunes`. `Today` = `ngayon`. `Tomorrow` = `bukas`.',
    examples: [
      { target: 'Sa Sabado', native: 'On Saturday' },
      { target: 'Bukas ay Miyerkules', native: 'Tomorrow is Wednesday' },
      { target: 'Linggo-linggo', native: 'Every week / weekly' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the day to its English name',
      pairs: [
        { left: 'Lunes', right: 'Monday' },
        { left: 'Biyernes', right: 'Friday' },
        { left: 'Linggo', right: 'Sunday / week' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You go to Mass on Sundays.',
      sentence: 'Misa tuwing _____.',
      options: ['Linggo', 'Biyernes', 'Lunes'],
      correct: 'Linggo',
      context: 'Sunday Mass is a near-universal Filipino weekly ritual.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Friday',
      correct: ['Biyernes', 'biyernes', 'Viernes', 'viernes'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag: 'Tomorrow is Monday'",
      words: ['Lunes', 'ay', 'Bukas'],
      correct: ['Bukas', 'ay', 'Lunes'],
      translation: 'Tomorrow is Monday.',
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend says 'Magkita tayo sa Sabado'.",
      question: 'When are you meeting?',
      options: [
        { text: 'Saturday', correct: true },
        { text: 'Sunday', correct: false },
        { text: 'Friday', correct: false },
      ],
      explanation: 'Sabado = Saturday. The Spanish-loan stays close to the original — `sábado` in Spanish too.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Monday',
      correct: ['Lunes', 'lunes'],
    },
  ],

  rwenDialogue: {
    intro: "Your tito is on the phone planning a family lunch. He asks when you're free.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, kailan ka libre?',
        native: 'Child, when are you free?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sa Linggo po, tito', native: 'On Sunday, uncle (polite)', correct: true, feedback: 'Filipino-perfect. Sunday family lunch is almost a national ritual.' },
          { target: 'Sa Lunes po', native: 'On Monday (polite)', correct: false, feedback: "Grammatically right, but most family lunches are Linggo. Pick what fits the moment." },
          { target: 'Linggo-linggo', native: 'Every week', correct: false, feedback: 'Close — but that means `weekly`, not `this Sunday`.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, sa Linggo. Magluluto si Tita.',
        native: "Okay, Sunday. Auntie's cooking.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Linggo means Sunday AND week. Context tells you which — and family Sunday lunch is the heart of Filipino time.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Monday (in Tagalog)', correct: ['Lunes', 'lunes'] },
      { prompt: 'Sunday / week (in Tagalog)', correct: ['Linggo', 'linggo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Say what day today is and what day tomorrow is in Tagalog. `Ngayon ay ___. Bukas ay ___.`',
    rwenSignoff: 'Magaling — hanggang bukas.',
  },

  phase8: {
    scenario: "You're planning a barangay basketball schedule with your kuya. He wants to lock in practice days. He asks `kailan ka libre?` (when are you free?) and `anong araw ngayon?` (what day is today?). Talk through the week.",
    rwenRole: 'Kuya Jboy — older cousin, ~32yo, basketball captain; quick and casual; throws Spanish-loan day names at you and expects them back.',
    successCriteria: 'User correctly names today and tomorrow with their Tagalog day names, and proposes at least one meeting day using `sa ___` (e.g., `sa Sabado`, `sa Biyernes`).',
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
