import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05',
  module: 3,
  lesson: 5,
  title: 'Times of day',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "isiNdebele cuts the day into five named slices, not two. 'Morning' and 'afternoon' is too crude for this language. There is a difference between mid-morning sun and the moment the sun crosses noon — and each gets its own word.",
    culturalNote: "In Matabeleland, 'ekuseni' (morning) carries warmth — it is when greetings are exchanged most carefully and when work begins. 'Kusihlwa' (early evening, just before dark) is when people return home, food is cooked, and elders are visited. The vocabulary mirrors the rhythm of the day.",
  },

  chunks: [
    {
      id: 'ekuseni',
      target: 'ekuseni',
      native: 'in the morning',
      literal: 'at-the-rising',
      emoji: '🌅',
      phonetic: 'eh-koo-SEH-nee',
      audioRef: null,
    },
    {
      id: 'emini',
      target: 'emini',
      native: 'at midday / noon',
      literal: 'at-noon',
      emoji: '☀️',
      phonetic: 'eh-MEE-nee',
      audioRef: null,
    },
    {
      id: 'ntambama',
      target: 'ntambama',
      native: 'in the afternoon',
      literal: 'when-the-sun-leans',
      emoji: '🌤️',
      phonetic: 'n-tahm-BAH-mah',
      audioRef: null,
    },
    {
      id: 'kusihlwa',
      target: 'kusihlwa',
      native: 'in the early evening (around dusk)',
      literal: 'as-it-darkens',
      emoji: '🌆',
      phonetic: 'koo-SEE-shlwah',
      audioRef: null,
    },
    {
      id: 'ebusuku',
      target: 'ebusuku',
      native: 'at night',
      literal: 'at-night',
      emoji: '🌙',
      phonetic: 'eh-boo-SOO-koo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day adverbs',
    explanation: "These words act as adverbs — they sit at the end of a sentence and answer the question 'when?'. Most begin with the locative prefix 'e-' or 'ku-' which translates loosely as 'at' or 'in the time of'. They do not need any preposition before them. 'Ngiyahamba ekuseni' = 'I leave in the morning' — three words, no extra grammar.",
    examples: [
      { target: 'Ngiyahamba ekuseni', native: 'I leave in the morning' },
      { target: 'Ngidla emini', native: 'I eat at noon' },
      { target: 'Sizahlangana ntambama', native: "We'll meet in the afternoon" },
      { target: 'Ngiyalala ebusuku', native: 'I sleep at night' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each time word to its meaning',
      pairs: [
        { left: 'ekuseni', right: 'in the morning' },
        { left: 'emini', right: 'at midday' },
        { left: 'ntambama', right: 'in the afternoon' },
        { left: 'kusihlwa', right: 'at dusk' },
        { left: 'ebusuku', right: 'at night' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'I leave in the morning'",
      sentence: 'Ngiyahamba _____',
      options: ['ekuseni', 'ebusuku', 'emini'],
      correct: 'ekuseni',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele (one word)',
      prompt: 'at night',
      correct: ['ebusuku', 'Ebusuku'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "It's about 5pm and the sun is starting to drop. Which word fits best?",
      options: [
        { text: 'kusihlwa (dusk / early evening)', correct: true },
        { text: 'emini (noon)', correct: false },
        { text: 'ekuseni (morning)', correct: false },
      ],
      explanation: "'Kusihlwa' literally points at 'as it darkens' — that thin window between afternoon and full night. After dark proper, switch to 'ebusuku'.",
    },
  ],

  rwenDialogue: {
    intro: "Your host in Bulawayo is asking when you want to take a walk to the kopje (rocky hill) on the edge of town.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ufuna ukuhamba nini — emini kumbe ntambama?',
        native: 'When do you want to walk — at noon or in the afternoon?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ntambama, kushisa kakhulu emini', native: "In the afternoon, it's too hot at noon", correct: true, feedback: "Smart choice and you justified it. He laughs and agrees — Bulawayo at noon in October is brutal." },
          { target: 'Ebusuku', native: 'At night', correct: false, feedback: "He didn't offer night — and walking the kopje after dark is a bad idea anywhere. Stick to one of the two times he offered." },
          { target: 'Ekuseni', native: 'In the morning', correct: false, feedback: "He offered noon or afternoon — adding a third option ignores his question. Pick from what he gave you." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yebo, ntambama. Ngo-4.',
        native: 'Yes, afternoon. At 4.',
      },
      {
        speaker: 'rwen',
        rwenLine: "He paired the time word with a clock time. Tomorrow we learn how to read the clock itself.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'in the morning', correct: ['ekuseni', 'Ekuseni'] },
      { prompt: 'in the afternoon', correct: ['ntambama', 'Ntambama'] },
      { prompt: 'at night', correct: ['ebusuku', 'Ebusuku'] },
    ],
  },

  mission: {
    title: 'Narrate your day',
    task: "Today, every time the part of the day changes — when you wake, at lunch, mid-afternoon, at dusk, at bedtime — say the matching isiNdebele word out loud: ekuseni, emini, ntambama, kusihlwa, ebusuku. Five words, five anchors.",
    rwenSignoff: "Time words are the spine of any story you'll ever tell.",
  },

  phase8: {
    scenario: "Rwen plays your homestay host. He asks you when you want breakfast, lunch, and an evening walk. You answer each with the right time-of-day adverb in isiNdebele.",
    rwenRole: "Mama Ncube, ~58, homestay host in Bulawayo's Suburbs district — kind, organised, plans her day around guests' answers",
    successCriteria: "User used at least three different time-of-day adverbs correctly (ekuseni, emini, ntambama, kusihlwa, or ebusuku) when answering Mama Ncube's three scheduling questions.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
