import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-talking-family',
  module: 5,
  lesson: 9,
  title: 'Talking About My Family',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "You now have the full vocabulary for Shona family. Today we put it into sentences — talking about your real family, describing them, sharing who they are. This is one of the most personal conversations you'll have in Shona.",
    culturalNote: "Shona people love to talk about family. Sharing your family structure is one of the fastest ways to build connection. People will listen carefully and remember. Your family is your introduction.",
  },

  chunks: [
    {
      id: 'ndine_mhuri_huru',
      target: 'Ndine mhuri huru',
      native: 'I have a big family',
      literal: 'I-have family big',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ndi-ne mm-HU-ri HU-ru',
      audioRef: null,
    },
    {
      id: 'tinogara_pamwe',
      target: 'Tinogara pamwe chete',
      native: 'We live together',
      literal: 'We-live together alone/only',
      emoji: '🏡',
      phonetic: 'ti-no-GA-ra pa-mwe CHE-te',
      audioRef: null,
    },
    {
      id: 'ndinoda_mhuri_yangu',
      target: 'Ndinoda mhuri yangu',
      native: 'I love my family',
      literal: 'I-love family my',
      emoji: '❤️',
      phonetic: 'ndi-no-da mm-HU-ri ya-ngu',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Describing family size and relationships',
    explanation: "'Huru' means big/large. 'Duku' means small. 'Pamwe chete' means together. These words combine with family vocabulary to describe your household. Simple sentence structure: Ndine + family + description.",
    examples: [
      { target: 'Ndine mhuri huru', native: 'I have a big family' },
      { target: 'Ndine mhuri duku', native: 'I have a small family' },
      { target: 'Tinogara pamwe chete', native: 'We live together' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndine mhuri huru', right: 'I have a big family' },
        { left: 'Tinogara pamwe chete', right: 'We live together' },
        { left: 'Ndinoda mhuri yangu', right: 'I love my family' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "I have a big family"',
      sentence: 'Ndine mhuri _____.',
      options: ['huru', 'duku', 'yangu'],
      correct: 'huru',
      context: 'Describe your large family.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I love my family',
      correct: ['Ndinoda mhuri yangu', 'ndinoda mhuri yangu'],
    },
    {
      type: 'multiple_choice',
      instruction: "You have a small family. How do you say that?",
      question: 'I have a small family:',
      options: [
        { text: 'Ndine mhuri duku', correct: true },
        { text: 'Ndine mhuri huru', correct: false },
        { text: 'Ndine vanhu vazhinji', correct: false },
      ],
      explanation: "'Duku' means small. 'Huru' means big. Ndine mhuri duku = I have a small family.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'We live together in the village'",
      words: ['Tinogara', 'pamwe', 'chete', 'kumusha.'],
      correct: ['Tinogara', 'pamwe', 'chete', 'kumusha.'],
      translation: 'We live together in the village',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'We live together',
      correct: ['Tinogara pamwe chete', 'tinogara pamwe chete'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your family in full detail. Tell your real story.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ndiudze nezvemhuri yako. Une vana here? Unogara navo here?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndine mhuri [huru/duku]. Tinogara pamwe chete. Ndinoda mhuri yangu.', native: 'I have a [big/small] family. We live together. I love my family.', correct: true, feedback: "Three sentences — size, togetherness, love. That's a complete family portrait in Shona." },
          { target: 'Ndine vana vaviri', native: 'I have two children', correct: false, feedback: "Good detail — add more: 'Tinogara pamwe chete. Ndinoda mhuri yangu.'" },
          { target: 'Ndine mhuri', native: 'I have a family', correct: false, feedback: "Expand it — how big? 'Ndine mhuri huru/duku.' Do you live together? 'Tinogara pamwe chete.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Waita zvakanaka. Mhuri ndirwo rugare — that's what we say.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have a big family', correct: ['Ndine mhuri huru', 'ndine mhuri huru'] },
      { prompt: 'I love my family', correct: ['Ndinoda mhuri yangu', 'ndinoda mhuri yangu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your family in 3 Shona sentences: 1) How many? 2) Who is in it? 3) One thing you love about them. Say it out loud.",
    rwenSignoff: "Mhuri ndirwo rugare — family is peace. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Video call to mbuya in Murehwa — Mbuya Esther has called specifically to hear about your family. She says, 'Ndiudze nezvemhuri yako.' You have one minute of patchy signal to give her three sentences: how big your family is, whether you live together, and that you love them.",
    rwenRole: "Mbuya Esther — Rwen's grandmother, ~78, in the rural homestead in Murehwa, soft-spoken but probing; she'll listen patiently and then ask one quiet follow-up.",
    successCriteria: "User produces all three structures: 'Ndine mhuri huru/duku' (size), 'Tinogara pamwe chete' or a clean alternative (living arrangement), and 'Ndinoda mhuri yangu' (love) — concord 'yangu' must be correct (NOT 'wangu' or 'rangu').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
