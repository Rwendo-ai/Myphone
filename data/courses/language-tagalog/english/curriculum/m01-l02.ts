import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-times-of-day',
  module: 1,
  lesson: 2,
  title: 'Hapon, Gabi — Afternoon, Evening',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Filipinos read the clock in their greetings. By midday it's 'tanghali', by 1pm it shifts to 'hapon', and at sundown the warmth of 'gabi' takes over. Three small swaps unlock the whole day.",
    culturalNote: "Tagalog splits the day more finely than English. 'Tanghali' (~11am-1pm) is its own zone — the sun is at its peak, lunch is sacred, and you greet accordingly. After siesta-ish hours, 'hapon' takes you to dusk, then 'gabi' carries you into the night.",
  },

  chunks: [
    {
      id: 'magandang_hapon',
      target: 'Magandang hapon',
      native: 'Good afternoon',
      literal: 'Beautiful afternoon',
      emoji: '☀️',
      phonetic: 'ma-gan-DANG HA-pon',
      audioRef: null,
    },
    {
      id: 'magandang_gabi',
      target: 'Magandang gabi',
      native: 'Good evening',
      literal: 'Beautiful night',
      emoji: '🌆',
      phonetic: 'ma-gan-DANG ga-BI',
      audioRef: null,
    },
    {
      id: 'magandang_tanghali',
      target: 'Magandang tanghali',
      native: 'Good noon / Good midday',
      literal: 'Beautiful midday',
      emoji: '🕛',
      phonetic: 'ma-gan-DANG tang-HA-li',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day shifts',
    explanation: "The frame 'Magandang ___' stays — only the time word changes. Umaga (morning, before ~11am), tanghali (~11am-1pm), hapon (~1pm-6pm), gabi (after dark). Add 'po' for respect, always.",
    examples: [
      { target: 'Magandang umaga po', native: 'Good morning (respectful)' },
      { target: 'Magandang hapon po', native: 'Good afternoon (respectful)' },
      { target: 'Magandang gabi po', native: 'Good evening (respectful)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog greeting to its time of day',
      pairs: [
        { left: 'Magandang umaga', right: 'Good morning' },
        { left: 'Magandang tanghali', right: 'Good noon' },
        { left: 'Magandang hapon', right: 'Good afternoon' },
        { left: 'Magandang gabi', right: 'Good evening' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "It's 8pm. You walk into a Cebu seaside karinderya. What do you say?",
      sentence: 'Magandang _____ po.',
      options: ['gabi', 'umaga', 'tanghali'],
      correct: 'gabi',
      context: 'After dark = gabi. Always.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'Good afternoon (respectful)',
      correct: ['Magandang hapon po', 'magandang hapon po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the respectful midday greeting',
      words: ['tanghali', 'po', 'Magandang'],
      correct: ['Magandang', 'tanghali', 'po'],
      translation: 'Good noon (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: "It's 3pm in Makati. You're entering a 7-Eleven. Which greeting fits?",
      question: 'Pick the right one',
      options: [
        { text: 'Magandang hapon po', correct: true },
        { text: 'Magandang umaga po', correct: false },
        { text: 'Magandang gabi po', correct: false },
      ],
      explanation: "After ~1pm and before sunset = hapon. Morning is over; evening hasn't started yet.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'Good evening (respectful)',
      correct: ['Magandang gabi po', 'magandang gabi po'],
    },
  ],

  rwenDialogue: {
    intro: "It's 7pm. You're walking along the Cebu boardwalk. A vendor at a sutukil stand — older man, cooking grilled fish — looks up as you approach.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magandang gabi po', native: 'Good evening (respectful)', correct: true, feedback: "Spot on — sun's down, gabi's right, and 'po' nails the respect." },
          { target: 'Magandang hapon po', native: 'Good afternoon (respectful)', correct: false, feedback: "It's already dark — hapon's past. Try gabi." },
          { target: 'Magandang umaga', native: 'Good morning', correct: false, feedback: "Wrong end of the day — and the kuya deserves a 'po'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Magandang gabi din. Ano po ang gusto ninyo?',
        native: 'Good evening to you too. What would you like?',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Beautiful — you read the clock and the respect at once. That tiny tweak from hapon to gabi makes you sound local.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Good afternoon (respectful, in Tagalog)',
        correct: ['Magandang hapon po', 'magandang hapon po'],
      },
      {
        prompt: 'Good evening (respectful, in Tagalog)',
        correct: ['Magandang gabi po', 'magandang gabi po'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Greet someone twice today using the right time-of-day word — once before lunch, once after. Match the clock and feel the shift on your tongue.",
    rwenSignoff: "I'll check in tomorrow. Hanggang sa muli — until next time.",
  },

  phase8: {
    scenario: "It's 7pm on the Cebu boardwalk. An older kuya runs a sutukil grill (sugba/tula/kilaw — grilled, soupy, raw). The smoke smells like dinner. You approach to order grilled bangus — but greet him properly first, by the clock.",
    rwenRole: "Mang Tonyo — kuya grilling fish, late 50s, weathered hands, jokes easily; warms instantly to a tourist who picks the correct time-of-day greeting.",
    successCriteria: "User greets with 'Magandang gabi po' (correct for after dark — NOT 'hapon' or 'umaga'), THEN orders. The 'po' is present and the time-of-day word matches the scenario.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
