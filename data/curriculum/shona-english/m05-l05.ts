import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-extended-family',
  module: 5,
  lesson: 5,
  title: 'Extended Family — The Wider Circle',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "In Zimbabwe, the family doesn't end at your front door. It extends to cousins who are like siblings, aunts who are like mothers, and uncles who share your discipline and love. Today we map that wider circle.",
    culturalNote: "Shona culture uses the concept of 'ubuntu' — 'I am because we are'. Extended family isn't just relatives — it's your support system, your identity, your responsibility. You belong to all of them and they to you.",
  },

  chunks: [
    {
      id: 'vatete',
      target: 'Vatete',
      native: "Father's sisters (paternal aunts, plural)",
      literal: 'Va-tete (plural of Tete)',
      emoji: '👩‍👩‍👦',
      phonetic: 'va-TEH-te',
      audioRef: null,
    },
    {
      id: 'muzhengwa',
      target: 'Muzhengwa / Cousin',
      native: "Cousin (child of parent's sibling)",
      literal: 'Muzhengwa (cross-cousin)',
      emoji: '🤝',
      phonetic: 'mu-ZHENG-wa',
      audioRef: null,
    },
    {
      id: 'mhuri_yose',
      target: 'Mhuri yose',
      native: 'The whole family / All of the family',
      literal: 'Family all',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'mm-HU-ri YO-se',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Yose / Mese — all / whole',
    explanation: "'Yose' means 'all/whole' and attaches to singular nouns. 'Mese' means 'all of you' (plural people). Mhuri yose = the whole family. Vanhu vose = all people. The class determines which 'all' to use.",
    examples: [
      { target: 'Mhuri yose', native: 'The whole family' },
      { target: 'Vanhu vose', native: 'All people' },
      { target: 'Zvinhu zvose', native: 'All things' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the family term to its meaning',
      pairs: [
        { left: 'Vatete', right: "Father's sisters (plural)" },
        { left: 'Muzhengwa', right: 'Cousin' },
        { left: 'Mhuri yose', right: 'The whole family' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "the whole family"',
      sentence: 'Mhuri _____ yakagadzikana.',
      options: ['yose', 'vose', 'zvose'],
      correct: 'yose',
      context: 'The whole family is settled/at peace.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'The whole family',
      correct: ['Mhuri yose', 'mhuri yose'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your father's sisters — what is their collective title?",
      question: "Father's sisters (plural):",
      options: [
        { text: 'Vatete', correct: true },
        { text: 'Amai', correct: false },
        { text: 'Ambuya', correct: false },
      ],
      explanation: "Vatete is the plural of Tete (father's sister). Va- makes people nouns plural.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "All my cousins are here"',
      words: ['Vazhengwa', 'vangu', 'vose', 'vari', 'pano.'],
      correct: ['Vazhengwa', 'vangu', 'vose', 'vari', 'pano.'],
      translation: 'All my cousins are here',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Cousin',
      correct: ['Muzhengwa', 'muzhengwa'],
    },
  ],

  rwenDialogue: {
    intro: "A large family gathering — Rwen's whole extended family is present.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mhuri yose iri pano nhasi. Vatete, vazhengwa, makoma — vose.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zvakanaka! Ndinofara kusangana nemhuri yose.', native: "Wonderful! I'm happy to meet the whole family.", correct: true, feedback: "Using mhuri yose correctly — the whole family is delighted." },
          { target: 'Makadii mese', native: 'How are all of you', correct: false, feedback: "Good start — add more: 'Ndinofara kusangana nemhuri yose.' (I'm happy to meet the whole family.)" },
          { target: 'Vanhu vazhinji', native: 'Many people', correct: false, feedback: "Try: 'Ndinofara kusangana nemhuri yose.' — I am happy to meet the whole family." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Vanofarira kunzwa izvozvo. Mhuri yose inokugamuchira.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The whole family', correct: ['Mhuri yose', 'mhuri yose'] },
      { prompt: 'Cousin', correct: ['Muzhengwa', 'muzhengwa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of your extended family. How wide is your 'mhuri'? Name 3 people in your extended circle using Shona titles — Sekuru, Ambuya, Vatete, Muzhengwa.",
    rwenSignoff: "In Shona, you are never alone — the family extends in all directions. Famba zvakanaka.",
  },
};

export default lesson;
