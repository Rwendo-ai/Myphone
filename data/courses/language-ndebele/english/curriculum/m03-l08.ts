import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08',
  module: 3,
  lesson: 8,
  title: 'Today, tomorrow, yesterday',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three short words give you a time machine. 'Lamhla' is today, 'kusasa' is tomorrow, 'izolo' is yesterday. Drop any of them at the start of a sentence and you instantly anchor it in time.",
    culturalNote: "In Matabeleland conversation, time anchors come at the front of the sentence, not the end the way English often puts them. 'Izolo bengihamba' (yesterday I was walking) — putting 'izolo' first is the natural shape. Use that word order and you sound noticeably more fluent.",
  },

  chunks: [
    {
      id: 'lamhla',
      target: 'lamhla',
      native: 'today',
      literal: 'this-day',
      emoji: '📍',
      phonetic: 'LAHM-shlah',
      audioRef: null,
    },
    {
      id: 'kusasa',
      target: 'kusasa',
      native: 'tomorrow',
      literal: 'at-dawn',
      emoji: '➡️',
      phonetic: 'koo-SAH-sah',
      audioRef: null,
    },
    {
      id: 'izolo',
      target: 'izolo',
      native: 'yesterday',
      literal: 'yesterday',
      emoji: '⬅️',
      phonetic: 'ee-ZOH-loh',
      audioRef: null,
    },
    {
      id: 'kusasa_ekuseni',
      target: 'kusasa ekuseni',
      native: 'tomorrow morning',
      literal: 'tomorrow morning',
      emoji: '🌅',
      phonetic: 'koo-SAH-sah eh-koo-SEH-nee',
      audioRef: null,
    },
    {
      id: 'izolo_ntambama',
      target: 'izolo ntambama',
      native: 'yesterday afternoon',
      literal: 'yesterday afternoon',
      emoji: '🌤️',
      phonetic: 'ee-ZOH-loh n-tahm-BAH-mah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time anchor + time-of-day combo',
    explanation: "Stack the day word with the part-of-day word and you get fine-grained time without learning anything new: lamhla ekuseni (this morning), kusasa ntambama (tomorrow afternoon), izolo ebusuku (last night). The day word always comes first. Place the whole pair at the start of the sentence to set the scene, the way a good story-teller does.",
    examples: [
      { target: 'Lamhla ekuseni', native: 'This morning' },
      { target: 'Kusasa ntambama', native: 'Tomorrow afternoon' },
      { target: 'Izolo ebusuku', native: 'Last night' },
      { target: 'Lamhla ngiyahamba', native: 'Today I am leaving' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its English',
      pairs: [
        { left: 'lamhla', right: 'today' },
        { left: 'kusasa', right: 'tomorrow' },
        { left: 'izolo', right: 'yesterday' },
        { left: 'kusasa ekuseni', right: 'tomorrow morning' },
        { left: 'izolo ebusuku', right: 'last night' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "yesterday afternoon"',
      sentence: '_____ ntambama',
      options: ['izolo', 'kusasa', 'lamhla'],
      correct: 'izolo',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele (two words)',
      prompt: 'tomorrow morning',
      correct: ['kusasa ekuseni', 'Kusasa ekuseni'] ,
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Today I am leaving"',
      words: ['ngiyahamba', 'Lamhla'],
      correct: ['Lamhla', 'ngiyahamba'],
      translation: 'Today I am leaving',
    },
  ],

  rwenDialogue: {
    intro: "Your friend Nokuthula in Bulawayo wants to know if you can help her at the market — but only when you're free.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ungeza lamhla kumbe kusasa?',
        native: 'Can you come today or tomorrow?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kusasa ekuseni', native: 'Tomorrow morning', correct: true, feedback: "Specific and natural — pairing the day with the time-of-day pins it down so she can plan." },
          { target: 'Izolo', native: 'Yesterday', correct: false, feedback: "Yesterday is past — you cannot help her then. She offered today or tomorrow." },
          { target: 'Yebo', native: 'Yes', correct: false, feedback: "She asked which one. Pick today or tomorrow, and ideally the time-of-day too." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Kuhle, kusasa ekuseni ngo-9.',
        native: 'Good, tomorrow morning at 9.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She locked it in with a clock time. You stacked day, part-of-day, and (when she added it) the hour. That's a real plan.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'today', correct: ['lamhla', 'Lamhla'] },
      { prompt: 'tomorrow', correct: ['kusasa', 'Kusasa'] },
      { prompt: 'yesterday', correct: ['izolo', 'Izolo'] },
    ],
  },

  mission: {
    title: 'Anchor three sentences in time',
    task: "Make three short sentences out loud: 'Lamhla...' (today...), 'Kusasa...' (tomorrow...), 'Izolo...' (yesterday...). Fill the rest with anything you actually did, are doing, or plan to do.",
    rwenSignoff: "Time words at the front. That's how stories begin in this language.",
  },

  phase8: {
    scenario: "Rwen plays your friend Nokuthula in Bulawayo. She asks about three things — what you did yesterday, what you're doing today, and what you plan tomorrow. You answer each with the right time anchor at the front.",
    rwenRole: "Nokuthula, ~28, friend and stall-owner at Renkini bus terminus market — chatty, will catch you if you mix up the day words",
    successCriteria: "User started at least three sentences with the correct time anchor (lamhla / kusasa / izolo), and combined at least one of them with a part-of-day word for extra precision (e.g. 'kusasa ekuseni').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
