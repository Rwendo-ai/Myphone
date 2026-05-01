import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Pagluluto — Cooking Verbs',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time to step into the kitchen. Tagalog verbs love the prefix 'mag-' — it turns a noun or root into 'to do the thing'. Magluto = to cook. Manghiwa = to chop. Magpakulo = to boil. Today, you cook in Tagalog.",
    culturalNote: "Filipino home cooking is a chorus — someone chopping garlic, someone tending the wok, someone watching the rice cooker. Saying 'magluluto ako ng adobo bukas' (I'll cook adobo tomorrow) is half a promise, half an invitation — your friends will show up.",
  },

  chunks: [
    {
      id: 'magluto',
      target: 'Magluto',
      native: 'To cook',
      literal: 'Do-cooking',
      emoji: '🍳',
      phonetic: 'mag-LU-to',
      audioRef: null,
    },
    {
      id: 'manghiwa',
      target: 'Manghiwa',
      native: 'To chop / slice',
      literal: 'Do-cutting',
      emoji: '🔪',
      phonetic: 'mang-HI-wa',
      audioRef: null,
    },
    {
      id: 'magpakulo',
      target: 'Magpakulo',
      native: 'To boil',
      literal: 'Do-make-boil',
      emoji: '♨️',
      phonetic: 'mag-pa-KU-lo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mag- verb prefix',
    explanation: "Stick **mag-** on a root and it becomes an action verb. Luto (cooked) → magluto (to cook). Future tense reduplicates the first syllable: **mag-lu-luto** = will cook. Past: **nag-luto** = cooked.",
    examples: [
      { target: 'Magluto tayo', native: "Let's cook" },
      { target: 'Magluluto ako bukas', native: "I'll cook tomorrow" },
      { target: 'Nagluto ako kahapon', native: 'I cooked yesterday' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb to its meaning',
      pairs: [
        { left: 'Magluto', right: 'To cook' },
        { left: 'Manghiwa', right: 'To chop' },
        { left: 'Magpakulo', right: 'To boil' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're putting water on for sinigang broth. What are you doing?",
      sentence: '_____ ako ng tubig.',
      options: ['Magpakulo', 'Manghiwa', 'Magluto'],
      correct: 'Magpakulo',
      context: 'Magpakulo = make-it-boil. The action of bringing water to the boil.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'To cook',
      correct: ['Magluto', 'magluto'],
    },
    {
      type: 'build_sentence',
      instruction: "Say 'Let’s cook!'",
      words: ['Magluto', 'tayo'],
      correct: ['Magluto', 'tayo'],
      translation: "Let's cook",
    },
    {
      type: 'multiple_choice',
      instruction: "Tito hands you a knife and a pile of garlic. What's he asking you to do?",
      question: 'Choose the verb',
      options: [
        { text: 'Manghiwa', correct: true },
        { text: 'Magpakulo', correct: false },
        { text: 'Magluto', correct: false },
      ],
      explanation: "Manghiwa = to chop. Magluto is the whole-meal cook; manghiwa is the knife work.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'To boil',
      correct: ['Magpakulo', 'magpakulo'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday afternoon. Tita is making sinigang and wants your help. She points at the pot, then at you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, magpakulo ka muna ng tubig.',
        native: 'Child, boil some water first.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sige po, magpapakulo ako', native: "Sure — I'll boil it", correct: true, feedback: 'Perfect — and you future-tensed it correctly.' },
          { target: 'Manghiwa ako', native: "I'll chop", correct: false, feedback: "She asked for boiling, not chopping." },
          { target: 'Ayaw ko', native: "I don't want to", correct: false, feedback: "Don't say ayoko in tita's kitchen — she'll never forget." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Salamat anak, mahusay ka.',
        native: "Thanks child, you're great.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You're cooking. Literally and linguistically.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'To cook (in Tagalog)', correct: ['Magluto', 'magluto'] },
      { prompt: 'To chop / slice (in Tagalog)', correct: ['Manghiwa', 'manghiwa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one dish you can cook. Describe one step in Tagalog: 'Magpapakulo ako ng tubig' or 'Manghihiwa ako ng sibuyas'. Just one step — it counts.",
    rwenSignoff: "Bukas, inumin — tomorrow, the drinks.",
  },

  phase8: {
    scenario: "You're co-cooking sinigang with Tita Marissa in her Pasig kitchen. She's directing — chop the onions, boil the water, throw in the tamarind. You need to confirm each task in Tagalog using mag-/mang- verbs as you go.",
    rwenRole: "Tita Marissa — the family's head cook, ~58yo, runs the kitchen like a friendly drill sergeant; warms up when you echo her instructions in Tagalog rather than English.",
    successCriteria: "User uses at least two of magluto / manghiwa / magpakulo correctly when responding to tita's directions, and conjugates one into future tense (magluluto / manghihiwa / magpapakulo).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
