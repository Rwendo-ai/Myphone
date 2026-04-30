import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-spouse',
  module: 5,
  lesson: 7,
  title: 'Murume & Mukadzi — Husband & Wife',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Marriage in Shona culture is not just between two people — it's a union of two families. The vocabulary of partnership reflects deep respect and responsibility. Let's learn how to speak about the most important partnership in life.",
    culturalNote: "In Shona tradition, 'roora' (bride price) is paid by the groom's family to the bride's family — not as a purchase, but as a sign of gratitude and the joining of families. Marriage creates permanent ties between two family lineages.",
  },

  chunks: [
    {
      id: 'murume',
      target: 'Murume',
      native: 'Husband / Man',
      literal: 'Mu-rume (adult male)',
      emoji: '👨',
      phonetic: 'mu-RU-me',
      audioRef: null,
    },
    {
      id: 'mukadzi',
      target: 'Mukadzi',
      native: 'Wife / Woman',
      literal: 'Mu-kadzi (adult female)',
      emoji: '👩',
      phonetic: 'mu-KA-dzi',
      audioRef: null,
    },
    {
      id: 'rudo',
      target: 'Rudo',
      native: 'Love',
      literal: 'Rudo (love)',
      emoji: '❤️',
      phonetic: 'RU-do',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mu- prefix for adult people',
    explanation: "Both Murume and Mukadzi use the Mu- prefix (Class 1 — people). Adult relationship terms follow the same noun class as all people words. Vanhu vese — all people, whether husband, wife, or stranger.",
    examples: [
      { target: 'Murume wangu', native: 'My husband' },
      { target: 'Mukadzi wangu', native: 'My wife' },
      { target: 'Ndinomuda', native: 'I love him/her' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'Murume', right: 'Husband / Man' },
        { left: 'Mukadzi', right: 'Wife / Woman' },
        { left: 'Rudo', right: 'Love' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my husband'",
      sentence: 'Murume _____ akanaka.',
      options: ['wangu', 'rangu', 'yangu'],
      correct: 'wangu',
      context: 'My husband is a good person.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Love',
      correct: ['Rudo', 'rudo'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'my wife' in Shona?",
      question: 'My wife:',
      options: [
        { text: 'Mukadzi wangu', correct: true },
        { text: 'Mukadzi rangu', correct: false },
        { text: 'Mukadzi yangu', correct: false },
      ],
      explanation: "Mukadzi is Class 1 (people), so possession uses wangu. Mukadzi wangu = my wife.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Love is the foundation of family'",
      words: ['Rudo', 'ndiwo', 'musimboti', 'wemhuri.'],
      correct: ['Rudo', 'ndiwo', 'musimboti', 'wemhuri.'],
      translation: 'Love is the foundation of family',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'My wife',
      correct: ['Mukadzi wangu', 'mukadzi wangu'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen talks about the importance of finding the right partner in Shona culture.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "MuShona, murume nomukadzi — vaviri — vanoita mhuri imwe chete.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinoziva. Rudo ndiwo musimboti.', native: 'I understand. Love is the foundation.', correct: true, feedback: "Using rudo (love) and musimboti (foundation) — you're speaking with real depth." },
          { target: 'Murume akanaka', native: 'A good husband', correct: false, feedback: "Agree with the sentiment — 'Rudo ndiwo musimboti wemhuri.' Love is the foundation of family." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Show you understand by responding with depth: 'Rudo ndiwo musimboti wemhuri.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hongu. Rudo ndiwo musimboti — ukama igasva hunozadziswa nekudya.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Husband / Man', correct: ['Murume', 'murume'] },
      { prompt: 'Love', correct: ['Rudo', 'rudo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Rudo ndiwo musimboti wemhuri' (Love is the foundation of family) today. Think about who you love and say their relationship title in Shona.",
    rwenSignoff: "Love holds the family together. Rudo. Famba zvakanaka.",
  },
};

export default lesson;
