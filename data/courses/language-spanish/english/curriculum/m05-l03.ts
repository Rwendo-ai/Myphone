import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-hijo-hija',
  module: 5,
  lesson: 3,
  title: 'Hijo y Hija — Son & Daughter',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hijo. Hija. Spanish-speaking parents say these words a hundred times a day — and use them affectionately for any child they love, blood or not. They are some of the warmest words you can carry.",
    culturalNote: "In Mexico, Argentina, and across Latin America, an aunt, neighbour, or close family friend will call a child 'hijo' or 'mija' (a contraction of 'mi hija') with no biology required. The word marks belonging, not bloodline.",
  },

  chunks: [
    {
      id: 'hijo',
      target: 'el hijo',
      native: 'son',
      literal: 'the son (masculine -o)',
      emoji: '👦',
      phonetic: 'el EE-hoh',
      audioRef: null,
    },
    {
      id: 'hija',
      target: 'la hija',
      native: 'daughter',
      literal: 'the daughter (feminine -a)',
      emoji: '👧',
      phonetic: 'lah EE-hah',
      audioRef: null,
    },
    {
      id: 'hijos',
      target: 'mis hijos',
      native: 'my children (or my sons)',
      literal: 'my sons (mixed-group masculine plural)',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'mees EE-hohs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Silent H + soft J in family words',
    explanation: "'Hijo' looks like it should be 'HEE-ho' but the H is silent and the J is a soft throaty sound — closer to English H than to J. So hijo = EE-hoh, hija = EE-hah. Same rule for hermano (er-MAH-noh — silent H).",
    examples: [
      { target: 'hijo', native: 'EE-hoh (silent H, soft J)' },
      { target: 'hija', native: 'EE-hah' },
      { target: 'hermano', native: 'er-MAH-noh (silent H)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish word to its meaning',
      pairs: [
        { left: 'el hijo', right: 'son' },
        { left: 'la hija', right: 'daughter' },
        { left: 'mis hijos', right: 'my children' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my daughter is at school'",
      sentence: 'Mi _____ está en la escuela.',
      options: ['hija', 'hijo', 'hijos'],
      correct: 'hija',
      context: 'Pick the feminine singular for "daughter".',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my children',
      correct: ['mis hijos', 'Mis hijos'],
    },
    {
      type: 'multiple_choice',
      instruction: "How is the H in 'hijo' pronounced?",
      question: "The H in 'hijo':",
      options: [
        { text: 'Silent — say "EE-hoh"', correct: true },
        { text: 'Like an English H — say "HEE-hoh"', correct: false },
        { text: 'Like a J — say "JEE-hoh"', correct: false },
      ],
      explanation: "Spanish H is always silent. The J sound in 'hijo' is the soft throaty H-like sound — combine and you get EE-hoh.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have three children"',
      words: ['Tengo', 'tres', 'hijos.'],
      correct: ['Tengo', 'tres', 'hijos.'],
      translation: 'I have three children',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my son',
      correct: ['mi hijo', 'Mi hijo'],
    },
  ],

  rwenDialogue: {
    intro: "An older woman at the family table — Rwen's tía Carmen — pours you more agua de jamaica and asks about your kids.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Tienes hijos, mijo?',
        native: 'Do you have children, son? (warm form of address)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, tengo dos hijos. Una hija y un hijo.', native: 'Yes, I have two children. A daughter and a son.', correct: true, feedback: "'Hijos' for the pair, then specifying 'hija' and 'hijo' — clean answer, exactly the way it would be said at this table." },
          { target: 'Sí, dos hijo', native: 'Yes, two son (wrong agreement)', correct: false, feedback: "Plural needs the -s — 'Sí, tengo dos hijos.' Then specify if you want: 'una hija y un hijo'." },
          { target: 'No', native: 'No', correct: false, feedback: "Even 'no' needs warmth — 'No, todavía no tengo hijos.' (No, I don't have children yet.)" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "A mi tía le encanta saber de los hijos de los demás. Bien dicho.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'son', correct: ['hijo', 'el hijo'] },
      { prompt: 'daughter', correct: ['hija', 'la hija'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'mi hijo' and 'mi hija' out loud, paying attention to the silent H and the soft J. If you have kids, name them. If not, name a niece or nephew or godchild and call them mijo / mija — the warmth carries.",
    rwenSignoff: "Los hijos son la herencia. Hasta luego.",
  },

  phase8: {
    scenario: "Sunday almuerzo is winding down. Rwen's tía Carmen sits next to you with coffee and starts asking about your children — or, if you don't have any, your nieces and nephews. She wants to know names, ages, and one detail about each. You have two minutes before someone calls everyone for dessert.",
    rwenRole: "Tía Carmen — Rwen's aunt, ~62, the family's emotional centre; she calls every younger person 'mijo' or 'mija' and notices instantly if you stumble on the gender of 'hijo/hija'.",
    successCriteria: "User correctly uses 'hijo' for boys and 'hija' for girls (NOT swapped), uses 'hijos' for any mixed or multiple group, and produces sentences with both number and a name (e.g. 'tengo dos hijos, Sam y Mia') rather than single words.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
