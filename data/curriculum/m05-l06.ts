import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-mudzimu',
  module: 5,
  lesson: 6,
  title: 'Mudzimu — Ancestors & Lineage',
  estimatedMinutes: 5,
  xpReward: 35,

  hook: {
    rwenLine: "In Shona belief, family doesn't end with death. Ancestors — vadzimu — remain part of the family, guiding and protecting the living. This is not superstition. It's a deep cultural understanding of continuity.",
    culturalNote: "Vadzimu (ancestral spirits) are central to Shona spiritual life. They are honoured through ceremony and remembered by name. The totem system (chiziviso) links living people to their ancestors and defines who you are in the wider community.",
  },

  chunks: [
    {
      id: 'mudzimu',
      target: 'Mudzimu / Vadzimu',
      native: 'Ancestral spirit / Ancestral spirits',
      literal: 'Mu-dzimu (ancestor, class 1/2)',
      emoji: '✨',
      phonetic: 'mu-DZI-mu / va-DZI-mu',
      audioRef: null,
    },
    {
      id: 'chiziviso',
      target: 'Chiziviso / Mutupo',
      native: 'Totem / Clan symbol',
      literal: 'Clan identity symbol',
      emoji: '🦁',
      phonetic: 'chi-zi-VI-so / mu-TU-po',
      audioRef: null,
    },
    {
      id: 'ramangwana',
      target: 'Ramangwana rinobva kumashure',
      native: 'The future comes from the past',
      literal: 'Tomorrow comes from behind',
      emoji: '🌅',
      phonetic: 'ra-man-GWA-na ri-no-BVA ku-ma-SHU-re',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mu/Va class for spiritual beings',
    explanation: "Ancestral spirits (mudzimu/vadzimu) use the same Mu/Va class as living people — because in Shona belief, ancestors ARE still people, still part of the family. The noun class reflects the culture's understanding of continuity.",
    examples: [
      { target: 'Mudzimu wangu', native: 'My ancestral spirit' },
      { target: 'Vadzimu vetu', native: 'Our ancestral spirits' },
      { target: 'Mutupo wangu ndiShumba', native: 'My totem is Lion' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the concept to its meaning',
      pairs: [
        { left: 'Mudzimu', right: 'Ancestral spirit' },
        { left: 'Mutupo', right: 'Totem / Clan symbol' },
        { left: 'Vadzimu', right: 'Ancestral spirits (plural)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Why do vadzimu (ancestral spirits) use the Mu/Va noun class?",
      question: 'Ancestral spirits use people-class because:',
      options: [
        { text: 'Ancestors are still considered people in Shona culture', correct: true },
        { text: 'It is a grammatical accident', correct: false },
        { text: 'Spirits have no noun class', correct: false },
      ],
      explanation: "In Shona belief, ancestors remain part of the family and community. The noun class reflects this spiritual reality.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Ancestral spirit',
      correct: ['Mudzimu', 'mudzimu'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the totem phrase',
      sentence: 'Mutupo wangu ndi_____.',
      options: ['Shumba', 'mhuri', 'banga'],
      correct: 'Shumba',
      context: 'My totem is Lion (Shumba is a common totem).',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Our ancestral spirits protect us"',
      words: ['Vadzimu', 'vetu', 'vanotichengeta.'],
      correct: ['Vadzimu', 'vetu', 'vanotichengeta.'],
      translation: 'Our ancestral spirits protect us',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Totem / Clan symbol',
      correct: ['Mutupo', 'mutupo', 'Chiziviso', 'chiziviso'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen shares something deeply personal — his family's totem and what it means.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mutupo wangu ndiShumba. Ndinoita zvinhu zvose nokurangarira vadzimu vangu.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zvakakosha. Mutupo wangu ndi...', native: 'That is important. My totem is...', correct: true, feedback: "Sharing your totem back shows you understand its significance. Rwen is moved." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Go deeper — share your own totem: 'Mutupo wangu ndi...' or ask: 'Zvii mutupo wako?'" },
          { target: 'Zvakanaka', native: "That's good", correct: false, feedback: "Engage with the depth of it — 'Zvakakosha zvikuru. Mutupo wangu ndi...'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Vadzimu vanofarira kunzwa mazita avo achidaidzwa. Urikubva kuna vasekuru vako.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Ancestral spirit', correct: ['Mudzimu', 'mudzimu'] },
      { prompt: 'Totem / Clan symbol', correct: ['Mutupo', 'mutupo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Research your family's origin or ancestry. Even if you're not Shona, think about what your 'mutupo' might be — your family symbol or identity. What animal or quality represents your lineage?",
    rwenSignoff: "You come from somewhere. Vadzimu are watching. Famba zvakanaka.",
  },
};

export default lesson;
