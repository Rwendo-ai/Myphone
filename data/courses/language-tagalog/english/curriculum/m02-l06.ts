import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-saan',
  module: 2,
  lesson: 6,
  title: 'Saan ang...? — Where is...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're inside SM Megamall and the food court has swallowed you whole. You need a bathroom. 'Saan ang banyo?' — 'Where is the bathroom?' — is the four-word lifeline. Learn this and you'll never be trapped in a Filipino mall again.",
    culturalNote: "Filipinos point with their lips — pursed forward toward the direction. If you ask 'saan?' and someone purses their mouth toward a hallway, that's the answer. It's not flirty; it's just how the country gestures.",
  },

  chunks: [
    {
      id: 'saan_ang_banyo',
      target: 'Saan ang banyo?',
      native: "Where's the bathroom?",
      literal: 'Where the bathroom?',
      emoji: 'TOILET',
      phonetic: 'sa-AN ang BAN-yo',
      audioRef: null,
    },
    {
      id: 'saan_ang_labasan',
      target: 'Saan ang labasan?',
      native: "Where's the exit?",
      literal: 'Where the exit?',
      emoji: 'DOOR',
      phonetic: 'sa-AN ang la-BA-san',
      audioRef: null,
    },
    {
      id: 'andon',
      target: 'Andon / Andiyan',
      native: 'Over there',
      literal: 'There (far / near)',
      emoji: 'POINT',
      phonetic: 'an-DON / an-DEE-yan',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Saan' question word",
    explanation: "'Saan' = 'where'. Pair it with 'ang' (the) + the noun and you've got a clean question. 'Saan ang ___?' = 'Where is the ___?'. Add 'po' for politeness: 'Saan po ang banyo?'. The reply is usually 'andon' (far) or 'andiyan' (near you), often with a lip-point.",
    examples: [
      { target: 'Saan po ang banyo?', native: "Where's the bathroom (formal)?" },
      { target: 'Saan ang MRT?', native: "Where's the MRT?" },
      { target: 'Andon, sa kanan', native: 'Over there, on the right' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Saan ang banyo?', right: "Where's the bathroom?" },
        { left: 'Saan ang labasan?', right: "Where's the exit?" },
        { left: 'Andon', right: 'Over there' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're stuck in SM Megamall and need the exit.",
      sentence: '_____ po ang labasan?',
      options: ['Saan', 'Hindi', 'Marunong'],
      correct: 'Saan',
      context: "'Saan' is the 'where' word. 'Po' politely turns it into a request, not a demand.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (formal)',
      prompt: "Where's the bathroom?",
      correct: ['Saan ang banyo?', 'Saan po ang banyo?', 'saan ang banyo?', 'saan po ang banyo?', 'Saan ang banyo', 'Saan po ang banyo'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask where the exit is, politely',
      words: ['ang', 'po', 'labasan?', 'Saan'],
      correct: ['Saan', 'po', 'ang', 'labasan?'],
      translation: "Where's the exit (formal)?",
    },
    {
      type: 'multiple_choice',
      instruction: "The mall guard purses his lips toward a hallway and says 'andon'. What just happened?",
      question: 'What does the lip-point + andon mean?',
      options: [
        { text: 'It\'s over there — go that way', correct: true },
        { text: "I don't know", correct: false },
        { text: 'Come closer', correct: false },
      ],
      explanation: 'Filipinos commonly point with the lips — the gesture IS the directional info. \'Andon\' means \'over there\', and his mouth is the arrow.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Over there',
      correct: ['Andon', 'andon', 'Andiyan', 'andiyan'],
    },
  ],

  rwenDialogue: {
    intro: "You're on the third floor of SM Megamall. The food court is loud, the signs are confusing, and you've had too much halo-halo. You stop a security guard.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, saan ang banyo?', native: "Excuse me sir, where's the bathroom?", correct: true, feedback: "Spotless — apology, then the question with 'saan'." },
          { target: 'Banyo?', native: 'Bathroom?', correct: false, feedback: "He'll point eventually but you sounded like you forgot how to make sentences." },
          { target: 'Naliligaw ako', native: "I'm lost", correct: false, feedback: "True but vague — he doesn't know what you're looking for." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Andon po, sa likod ng Jollibee',
        native: 'Over there sir, behind Jollibee',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you see his lips? That little forward purse — that's the mall's GPS. Tagalog speaks with the whole face.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Where's the bathroom?",
        correct: ['Saan ang banyo?', 'Saan po ang banyo?', 'saan ang banyo?', 'saan po ang banyo?', 'Saan ang banyo', 'Saan po ang banyo'],
      },
      {
        prompt: "Where's the exit?",
        correct: ['Saan ang labasan?', 'Saan po ang labasan?', 'saan ang labasan?', 'saan po ang labasan?', 'Saan ang labasan', 'Saan po ang labasan'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask one 'Saan ang ___?' question today — even silently. Imagine yourself in a Filipino mall, food court, MRT station. The phrase has to come without thinking when the moment hits.",
    rwenSignoff: "Maglakad ka nang maayos — walk well. Bukas ulit.",
  },

  phase8: {
    scenario: "You're on the third floor of SM Megamall in Mandaluyong. The food court is packed, the signs are confusing, and you really need to find the bathroom — fast. You spot a uniformed mall security guard near the escalator.",
    rwenRole: "Mang Edu — SM Megamall security guard, in his 50s, knows every nook of the mall, polite but doesn't volunteer info; only helps if asked properly.",
    successCriteria: "User asks 'Saan po ang banyo?' (with 'po' since Mang Edu is older and in uniform). Bonus if they open with 'paumanhin po' first. They should also recognise his 'andon' + lip-point as the answer and not ask twice.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
