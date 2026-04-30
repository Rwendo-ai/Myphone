import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-near-far',
  module: 9,
  lesson: 4,
  title: 'Pedyo & Kure — Near & Far',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two of the most useful direction words in any language: near and far. In Zimbabwe, distances are often described relationally — 'just a little bit far' or 'very near' — rather than in kilometres. Feel the distance through the language.",
    culturalNote: "Zimbabweans are famously warm when giving directions — often going out of their way to help. 'Pedyo' (near) said with a big smile and hand wave can sometimes mean a 30-minute walk. Context and body language matter.",
  },

  chunks: [
    {
      id: 'pedyo',
      shona: 'Pedyo',
      english: 'Near / Close',
      literal: 'Near (close proximity)',
      emoji: '📍',
      phonetic: 'PE-dyo',
      audioRef: null,
    },
    {
      id: 'kure',
      shona: 'Kure',
      english: 'Far / Distant',
      literal: 'Far (distant)',
      emoji: '🏔️',
      phonetic: 'KU-re',
      audioRef: null,
    },
    {
      id: 'pedyo_nenhino',
      shona: 'Pedyo nenhino',
      english: 'Very nearby / Right here',
      literal: 'Near with-here',
      emoji: '👆',
      phonetic: 'PE-dyo ne-NHI-no',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Pedyo ne / Kure ne — near to / far from',
    explanation: "'Ne' (and/with) connects pedyo and kure to what they describe. Pedyo ne musika (near the market), kure ne musha (far from home). 'Ne' + location creates spatial descriptions.",
    examples: [
      { shona: 'Pedyo ne musika', english: 'Near the market' },
      { shona: 'Kure zvikuru', english: 'Very far' },
      { shona: 'Pedyo nenhino', english: 'Very close by' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the distance word to its meaning',
      pairs: [
        { left: 'Pedyo', right: 'Near / Close' },
        { left: 'Kure', right: 'Far / Distant' },
        { left: 'Pedyo nenhino', right: 'Very nearby' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask if the market is far',
      sentence: 'Musika uri _____ here?',
      options: ['kure', 'pedyo', 'mberi'],
      correct: 'kure',
      context: 'Is the market far?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Near / Close',
      correct: ['Pedyo', 'pedyo'],
    },
    {
      type: 'multiple_choice',
      instruction: "You ask if something is far and they say 'Kure zvikuru'. What does this mean?",
      question: 'Kure zvikuru means:',
      options: [
        { text: 'Very far', correct: true },
        { text: 'Quite near', correct: false },
        { text: 'About 5 minutes away', correct: false },
      ],
      explanation: "'Kure' (far) + 'zvikuru' (very/greatly) = very far. Don't expect to walk there quickly.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The hospital is near the market'",
      words: ['Chipitari', 'chiri', 'pedyo', 'ne', 'musika.'],
      correct: ['Chipitari', 'chiri', 'pedyo', 'ne', 'musika.'],
      translation: 'The hospital is near the market',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Very far',
      correct: ['Kure zvikuru', 'kure zvikuru'],
    },
  ],

  rwenDialogue: {
    intro: "You ask someone how far the bus station is.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Chiteshi chiri pedyo here kana kure?', english: 'Is the bus station near or far?', correct: true, feedback: "Giving options (pedyo or kure) shows you know the vocabulary and want a clear answer." },
          { shona: 'Chiteshi chiri kupi?', english: 'Where is the bus station?', correct: false, feedback: "Good question — add pedyo/kure: 'Chiteshi chiri pedyo here kana kure?' Near or far?" },
          { shona: 'Ndeapi nzira yechiteshi?', english: 'Which is the way to the bus station?', correct: false, feedback: "Good direction question — but first ask if it's near or far to set expectations." },
        ],
      },
      {
        speaker: 'npc',
        shona: 'Pedyo nenhino — maminiti mashanu chete.',
        english: 'Very close — only five minutes.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Pedyo nenhino — only 5 minutes. In Zimbabwe, that usually means 5-15. But it's still close. Walk with confidence.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Near / Close', correct: ['Pedyo', 'pedyo'] },
      { prompt: 'Far', correct: ['Kure', 'kure'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name 3 places near you (pedyo) and 3 that are far (kure): 'Musika uri pedyo. Harare uri kure.' Feel the distance in the words.",
    rwenSignoff: "Every destination is either pedyo or kure. Both are reachable. Famba zvakanaka.",
  },
};

export default lesson;
