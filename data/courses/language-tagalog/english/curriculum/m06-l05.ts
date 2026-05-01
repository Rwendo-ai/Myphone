import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Kalahati, kuwarter — Half past, quarter',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Real life isn't on the hour. It's `alas siyete y media` (7:30) when you're rushing for the jeepney, or `kuwarter to alas otso` (quarter to 8) when the boss is glaring. Today: half-past, quarter-past, quarter-to.",
    culturalNote: "Tagalog borrows Spanish `y media` (and a half) and `kuwarter` (quarter) wholesale. You'll also hear `kalahati` (half) — that one's pure Tagalog. So `alas siyete y media` and `alas siyete kalahati pasado` mean the same thing — 7:30. Both are common.",
  },

  chunks: [
    {
      id: 'alas_siyete_y_media',
      target: 'Alas siyete y media',
      native: 'Half past 7 (7:30)',
      literal: 'at-the seven and half',
      emoji: '🕢',
      phonetic: 'A-las see-YEH-teh ee MEH-dya',
      audioRef: null,
    },
    {
      id: 'kalahati_pasado',
      target: 'Kalahati pasado',
      native: 'Half past',
      literal: 'half past',
      emoji: '🕥',
      phonetic: 'ka-la-HA-tee pa-SA-do',
      audioRef: null,
    },
    {
      id: 'kuwarter',
      target: 'Kuwarter',
      native: 'Quarter (15 min)',
      literal: 'quarter',
      emoji: '🕘',
      phonetic: 'koo-WAR-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Half and quarter — Spanish + native blend',
    explanation: '`Y media` (Spanish: and a half) goes after the hour: `alas tres y media` = 3:30. `Kuwarter pasado alas tres` = quarter past 3 (3:15). `Kuwarter to alas tres` = quarter to 3 (2:45). Native `kalahati pasado` (half past) is interchangeable with `y media`.',
    examples: [
      { target: 'Alas dos y media', native: '2:30' },
      { target: 'Kuwarter pasado alas dyes', native: '10:15' },
      { target: 'Kuwarter to alas onse', native: '10:45 (quarter to 11)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Alas siyete y media', right: 'Half past 7 (7:30)' },
        { left: 'Kalahati pasado', right: 'Half past' },
        { left: 'Kuwarter', right: 'Quarter (15 min)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your friend's birthday party starts at 6:30 PM.",
      sentence: 'Alas sais y _____ ng gabi.',
      options: ['media', 'kuwarter', 'pasado'],
      correct: 'media',
      context: '`Y media` is the most common way to mark the half-hour, borrowed straight from Spanish.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Half past 7 (7:30)',
      correct: ['Alas siyete y media', 'alas siyete y media', 'Alas siete y media', 'alas siete y media'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag: 'Quarter past 8'",
      words: ['otso', 'kuwarter', 'pasado', 'alas'],
      correct: ['Kuwarter', 'pasado', 'alas', 'otso'],
      translation: 'Quarter past 8 (8:15).',
    },
    {
      type: 'multiple_choice',
      instruction: "It's 11:45. Your boss asks the time.",
      question: "Which is right?",
      options: [
        { text: 'Kuwarter to alas dose', correct: true },
        { text: 'Alas onse y media', correct: false },
        { text: 'Kuwarter pasado alas dose', correct: false },
      ],
      explanation: '11:45 = quarter to 12 = `kuwarter to alas dose`. The other options are 11:30 and 12:15.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Quarter (15 minutes)',
      correct: ['Kuwarter', 'kuwarter'],
    },
  ],

  rwenDialogue: {
    intro: "You and your friend Maricel are meeting for halo-halo. She's running a bit late and texts you for the time.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hoy, anong oras na ba?',
        native: 'Hey, what time is it?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Alas tres y media na!', native: "It's already 3:30!", correct: true, feedback: 'Bilis! Spanish `y media` is the everyday way to mark 3:30.' },
          { target: 'Tatlo at kalahati', native: 'Three and half (mixed)', correct: false, feedback: 'Native number for time again — sounds off. Stick with `alas tres y media`.' },
          { target: 'Kuwarter to alas tres', native: '2:45', correct: false, feedback: "Wrong direction — that's BEFORE 3, not after." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, papunta na ako!',
        native: "Aw, I'm on my way!",
      },
      {
        speaker: 'rwen',
        rwenLine: 'Hours, halves, quarters — you can now place yourself precisely on the clock in Tagalog.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: '7:30 (the time, in Tagalog)', correct: ['Alas siyete y media', 'alas siyete y media', 'Alas siete y media', 'alas siete y media'] },
      { prompt: 'Quarter (15 min, in Tagalog)', correct: ['Kuwarter', 'kuwarter'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Schedule one thing today using `alas ___ y media` or `kuwarter pasado/to alas ___`. Even silently planning your lunch break works.',
    rwenSignoff: 'Sige, hanggang bukas.',
  },

  phase8: {
    scenario: "You and your barkada are meeting at SM Megamall for milk tea. Texts are flying about who is where and when. Your friend Maricel keeps asking the time and the meet-up time. Use `y media` and `kuwarter` to navigate the chat.",
    rwenRole: 'Maricel — close friend, ~28yo, casual and a bit `Filipino time` (always slightly late); asks for current time and proposes meet-up times.',
    successCriteria: 'User correctly tells a half-hour time using `y media` (or `kalahati pasado`) AND a quarter-time using `kuwarter pasado` or `kuwarter to`. Two distinct times stated.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
