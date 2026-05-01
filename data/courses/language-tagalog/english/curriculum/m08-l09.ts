import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Bukas — Future',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Future is the **other** doubling pattern. For um- verbs, drop the -um- and just double the first syllable: pumunta → pupunta (will go). For mag-, keep the mag and double the root: magluto → magluluto (will cook). Three tenses, one rhythm.",
    culturalNote: "Filipinos plan tomorrow with warmth — *Magkita tayo bukas!* (Let's see each other tomorrow!) is half-promise, half-affection. Future verbs drop the -um- and double, or mag- + double the root.",
  },

  chunks: [
    {
      id: 'bukas_pupunta',
      target: 'Bukas, pupunta ako sa beach',
      native: "Tomorrow, I'll go to the beach",
      literal: 'Tomorrow, will-go I to beach',
      emoji: '🏖️',
      phonetic: 'BU-kas, pu-PUN-ta a-KO sa beach',
      audioRef: null,
    },
    {
      id: 'magluluto_hapunan',
      target: 'Magluluto ako ng hapunan',
      native: "I'll cook dinner",
      literal: 'Will-cook I of-dinner',
      emoji: '🍲',
      phonetic: 'mag-lu-LU-to a-KO nang ha-PU-nan',
      audioRef: null,
    },
    {
      id: 'magkita_tayo_bukas',
      target: 'Magkita tayo bukas',
      native: "Let's see each other tomorrow / See you tomorrow",
      literal: 'See-each-other we tomorrow',
      emoji: '👋',
      phonetic: 'mag-KI-ta TA-yo BU-kas',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Future = doubling without -um-',
    explanation: "For um- verbs: drop the **um**, double the first syllable. Pumunta → **pu**punta (will go). Kumain → **ka**kain (will eat). For mag- verbs: keep mag-, double the **root** (similar to present, but no nag-). Magluto → mag-**lu**-luto.",
    examples: [
      { target: 'Kakain ako mamaya', native: "I'll eat later" },
      { target: 'Pupunta tayo sa SM', native: "We'll go to SM (mall)" },
      { target: 'Mag-aaral ako bukas', native: "I'll study tomorrow" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Bukas, pupunta ako sa beach', right: "Tomorrow, I'll go to the beach" },
        { left: 'Magluluto ako ng hapunan', right: "I'll cook dinner" },
        { left: 'Magkita tayo bukas', right: 'See you tomorrow' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell your friend you'll go to SM tomorrow.",
      sentence: 'Bukas, _____ ako sa SM.',
      options: ['pupunta', 'pumunta', 'pumupunta'],
      correct: 'pupunta',
      context: 'Future = no -um-, doubled syllable. Pumunta = went. Pumupunta = going.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'll cook dinner",
      correct: ['Magluluto ako ng hapunan', 'magluluto ako ng hapunan'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "See you tomorrow" (let\'s meet up)',
      words: ['bukas', 'tayo', 'Magkita'],
      correct: ['Magkita', 'tayo', 'bukas'],
      translation: "Let's see each other tomorrow",
    },
    {
      type: 'multiple_choice',
      instruction: 'You and your barkada are planning a beach trip for tomorrow.',
      question: 'Which means "Tomorrow we will go to the beach"?',
      options: [
        { text: 'Bukas, pupunta tayo sa beach', correct: true },
        { text: 'Bukas, pumunta tayo sa beach', correct: false },
        { text: 'Bukas, pumupunta tayo sa beach', correct: false },
      ],
      explanation: 'Future = drop -um-, double first syllable. Pupunta = will go. Tayo = us (incl).',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'See you tomorrow (let\'s meet up)',
      correct: ['Magkita tayo bukas', 'magkita tayo bukas'],
    },
  ],

  rwenDialogue: {
    intro: 'Saturday afternoon. Your friend texts about plans for tomorrow.',
    lines: [
      {
        speaker: 'npc',
        target: 'Anong plano mo bukas?',
        native: "What are your plans tomorrow?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pupunta ako sa beach, tapos magluluto ng hapunan', native: "I'll go to the beach, then cook dinner", correct: true, feedback: 'Two future verbs chained — perfect.' },
          { target: 'Pumunta ako sa beach', native: 'I went to the beach', correct: false, feedback: 'Past tense — but the question is about tomorrow.' },
          { target: 'Pumupunta ako sa beach', native: "I'm going to the beach (right now)", correct: false, feedback: 'Present, not future. Drop the -um- to send it forward.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, magkita tayo bukas!',
        native: "Okay, see you tomorrow!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Three tenses, one engine. Doubled syllable + um = now. No doubling = past. Doubling, no um = future. You did it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Tomorrow, I'll go to the beach (in Tagalog)", correct: ['Bukas, pupunta ako sa beach', 'bukas, pupunta ako sa beach', 'Bukas pupunta ako sa beach'] },
      { prompt: "See you tomorrow / Let's see each other tomorrow (in Tagalog)", correct: ['Magkita tayo bukas', 'magkita tayo bukas'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Plan tomorrow in Tagalog. Pupunta ako sa... Magluluto ako ng... Three future actions, said out loud, no English.',
    rwenSignoff: 'Magkita tayo bukas — see you tomorrow.',
  },

  phase8: {
    scenario: "Saturday afternoon. A friend messages asking what your plans are for tomorrow (Sunday). You'll lay out a real plan — going somewhere, cooking, meeting up — using future-tense forms (no -um-, doubled syllable, or mag- + doubled root).",
    rwenRole: "Joana — your friend from Module 8 lesson 3, 26, energetic and a planner; she'll counter-propose if your plans sound boring.",
    successCriteria: "User uses at least two future-tense verbs (e.g. pupunta, kakain, magluluto, mag-aaral) and closes with magkita tayo bukas or similar future-meeting phrase. No accidental past forms slip into the plan.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
