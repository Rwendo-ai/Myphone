import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-time-words',
  module: 4,
  lesson: 8,
  title: 'Ngayon, Kahapon, Bukas — Today, Yesterday, Tomorrow',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three words anchor most Filipino small talk: ngayon, kahapon, bukas. 'Today, what'd you do yesterday, what's tomorrow.' These are the bones of every check-in conversation. Get them, and the rhythm of daily Tagalog opens up.",
    culturalNote: "Tagalog handles time mostly through words like these — there's no full verb-tense system the way English has. 'Pumupunta ako bukas' (I'm going tomorrow) and 'pumunta ako kahapon' (I went yesterday) lean heavily on the time word. The verb shifts a little; the time word does the heavy lifting.",
  },

  chunks: [
    {
      id: 'ngayon',
      target: 'Ngayon',
      native: 'Today / now',
      literal: 'now',
      emoji: '☀️',
      phonetic: 'nga-YON',
      audioRef: null,
    },
    {
      id: 'kahapon',
      target: 'Kahapon',
      native: 'Yesterday',
      literal: 'yesterday',
      emoji: '⏪',
      phonetic: 'ka-HA-pon',
      audioRef: null,
    },
    {
      id: 'bukas',
      target: 'Bukas',
      native: 'Tomorrow',
      literal: 'tomorrow',
      emoji: '⏩',
      phonetic: 'BU-kas',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-anchoring words',
    explanation: "Drop these words at the start or end of a sentence to set the time. The verb form shifts slightly to match (past, present, future), but these three words do most of the work — they're the timeline you're standing on.",
    examples: [
      { target: 'Ngayon ay Sabado', native: "Today is Saturday" },
      { target: 'Kahapon, nasa Maynila ako', native: 'Yesterday, I was in Manila' },
      { target: 'Bukas, pupunta ako sa palengke', native: "Tomorrow, I'll go to the market" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog time word to its meaning',
      pairs: [
        { left: 'Ngayon', right: 'Today / now' },
        { left: 'Kahapon', right: 'Yesterday' },
        { left: 'Bukas', right: 'Tomorrow' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'I'll see you tomorrow'",
      sentence: 'Magkita tayo _____.',
      options: ['bukas', 'kahapon', 'ngayon'],
      correct: 'bukas',
      context: "'Bukas' = tomorrow. 'Magkita tayo bukas' is a classic Tagalog goodbye.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Yesterday',
      correct: ['Kahapon', 'kahapon'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'Today is Saturday'",
      words: ['Sabado', 'ay', 'Ngayon'],
      correct: ['Ngayon', 'ay', 'Sabado'],
      translation: 'Today is Saturday',
    },
    {
      type: 'multiple_choice',
      instruction: "A friend asks how your weekend was. Which word do you use?",
      question: "'Saan ka pumunta _____?' = Where did you go [yesterday]?",
      options: [
        { text: 'kahapon', correct: true },
        { text: 'bukas', correct: false },
        { text: 'ngayon', correct: false },
      ],
      explanation: "Past = 'kahapon'. The verb 'pumunta' (went) is also past — they match.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Today / now',
      correct: ['Ngayon', 'ngayon'],
    },
  ],

  rwenDialogue: {
    intro: "You bump into a Filipino colleague at the office on a Friday morning. They ask the standard small-talk loop.",
    lines: [
      {
        speaker: 'npc',
        target: 'Kumusta ka ngayon?',
        native: 'How are you today?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mabuti ngayon. Pero pagod kahapon. Bukas, pasok ulit.', native: "Good today. But tired yesterday. Tomorrow, work again.", correct: true, feedback: "Three time words in one reply — that's a complete time loop." },
          { target: 'Mabuti bukas', native: "Good tomorrow", correct: false, feedback: "She asked about NOW. 'Bukas' is tomorrow." },
          { target: 'Kahapon mabuti', native: 'Yesterday good', correct: false, feedback: "She asked 'ngayon' (today). Match her time frame." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Magkita tayo bukas!',
        native: 'See you tomorrow!',
      },
      {
        speaker: 'rwen',
        rwenLine: "You moved across all three timelines in one sentence. That's how Filipinos check in — no awkward pauses, just 'how are you, how was yesterday, what's tomorrow'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Today / now (in Tagalog)',
        correct: ['Ngayon', 'ngayon'],
      },
      {
        prompt: 'Tomorrow (in Tagalog)',
        correct: ['Bukas', 'bukas'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use all three time words today — even just narrating in your head. 'Ngayon, kape.' 'Kahapon, nag-gym.' 'Bukas, deadline.' Three timelines, three sentences.",
    rwenSignoff: "Hanggang bukas — until tomorrow. (See — there it is again.)",
  },

  phase8: {
    scenario: "You're catching up with a Filipino friend over chat. They want to know how you're doing today, what you got up to yesterday, and what you've got planned for tomorrow. A complete weekly check-in.",
    rwenRole: "Kaibigan Anjo — old college friend, late 20s, asks the classic three-question loop: 'kumusta ngayon?', 'anong ginawa mo kahapon?', 'meron ka ba bukas?'.",
    successCriteria: "User uses 'ngayon', 'kahapon', and 'bukas' each at least once, matched to the right tense feel (past activity for kahapon, plans/future for bukas, current state for ngayon).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
