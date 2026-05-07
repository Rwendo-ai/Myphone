import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-padrinos',
  module: 5,
  lesson: 7,
  title: 'Padrinos — Godparents',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Latin America, padrinos — godparents — aren't symbolic relatives. They're a second set of parents, chosen on purpose, with real responsibilities. The relationship gives Spanish a whole vocabulary of chosen family.",
    culturalNote: "At a quinceañera or wedding the padrinos are publicly named, walk the girl in, and pay for specific elements of the ceremony — padrinos del vals, padrinos del ramo. The role is woven into Catholic-rooted tradition but everyone, religious or not, takes it seriously.",
  },

  chunks: [
    {
      id: 'padrino',
      target: 'el padrino',
      native: 'godfather',
      literal: 'the godfather (masculine -o)',
      emoji: '🤵',
      phonetic: 'el pah-DREE-noh',
      audioRef: null,
    },
    {
      id: 'madrina',
      target: 'la madrina',
      native: 'godmother',
      literal: 'the godmother (feminine -a)',
      emoji: '👰',
      phonetic: 'lah mah-DREE-nah',
      audioRef: null,
    },
    {
      id: 'ahijado',
      target: 'el ahijado / la ahijada',
      native: 'godson / goddaughter',
      literal: 'the godchild (masc / fem)',
      emoji: '🧒',
      phonetic: 'el ah-ee-HAH-doh / lah ah-ee-HAH-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Padre/madre roots → padrino/madrina → compadre/comadre',
    explanation: "Spanish builds layered family vocabulary off padre/madre. Padrino/madrina (godparent — extending the parent role). Compadre/comadre — the relationship between the parents and the godparents (literally 'co-father / co-mother'). One root, four words, all close family.",
    examples: [
      { target: 'mi padrino', native: 'my godfather' },
      { target: 'mi madrina', native: 'my godmother' },
      { target: 'mi compadre', native: 'my child\'s godfather (and my close friend by extension)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the godparent term to its meaning',
      pairs: [
        { left: 'el padrino', right: 'godfather' },
        { left: 'la madrina', right: 'godmother' },
        { left: 'el ahijado', right: 'godson' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my godmother is from Mexico'",
      sentence: 'Mi _____ es de México.',
      options: ['madrina', 'padrina', 'madrino'],
      correct: 'madrina',
      context: 'Female godparent — note that the feminine of "padrino" is "madrina" (not "padrina").',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my godfather',
      correct: ['mi padrino', 'Mi padrino'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does 'compadre' mean?",
      question: 'Compadre is:',
      options: [
        { text: 'The relationship between a parent and their child\'s godfather', correct: true },
        { text: 'A male godfather (synonym of padrino)', correct: false },
        { text: 'A male cousin (synonym of primo)', correct: false },
      ],
      explanation: "'Compadre' literally means 'co-father'. It names the bond between the parents of a child and the child's godfather — a deep, lifelong friendship in Latin American culture.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My godmother is also my aunt"',
      words: ['Mi', 'madrina', 'es', 'también', 'mi', 'tía.'],
      correct: ['Mi', 'madrina', 'es', 'también', 'mi', 'tía.'],
      translation: 'My godmother is also my aunt',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'my godmother',
      correct: ['mi madrina', 'Mi madrina'],
    },
  ],

  rwenDialogue: {
    intro: "Back at the quinceañera. Rwen pulls you aside before the vals to point out the people of honour.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Aquellos son los padrinos de Sofía — su madrina y su padrino. Ellos pagaron el vestido y van a entrar con ella.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '¡Qué bonito! ¿Su madrina es también su tía?', native: 'How lovely! Is her godmother also her aunt?', correct: true, feedback: "Asking the right question — in many families the madrina IS an aunt. You're showing you understand the layering." },
          { target: '¿Quiénes son los padres?', native: 'Who are the parents? (wrong word)', correct: false, feedback: "Padrinos, not padres — these are godparents. 'Su madrina y su padrino' are the people walking her in." },
          { target: 'Qué bien', native: 'How nice', correct: false, feedback: "Engage — ask about the relationship: '¿Su madrina es también su tía?' That's a culturally smart question." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sí, su madrina es mi tía Lucía. En esta familia los padrinos siempre son de la familia.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'godfather', correct: ['padrino', 'el padrino'] },
      { prompt: 'godmother', correct: ['madrina', 'la madrina'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have padrinos — or someone who functions like them in your life — say 'mi padrino' or 'mi madrina' about them out loud. Notice the weight of the word. It implies chosen family, not just relatives.",
    rwenSignoff: "Los padrinos son la familia que se elige. Hasta luego.",
  },

  phase8: {
    scenario: "Mid-quinceañera, between dinner and the vals. Sofía's madrina — Rwen's tía Lucía — sits with you and asks if you have padrinos in your own life. Even if your tradition isn't Catholic, she wants to know who chose you, or whom you chose. Two minutes, in Spanish, no English.",
    rwenRole: "Tía Lucía — Rwen's aunt and Sofía's madrina, ~50, warm and probing; she sees padrino-style relationships everywhere and wants to map yours into Spanish vocabulary.",
    successCriteria: "User correctly uses 'padrino' (male) and 'madrina' (female) — NOT 'padrina' (which doesn't exist), distinguishes 'padrinos' from 'padres', and produces at least one full sentence about a real person who functions as a padrino/madrina (or honestly says 'no tengo padrinos').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
