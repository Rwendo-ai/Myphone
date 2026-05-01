import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Pagkatao — Personality',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Cebu video call. Nanay Cecilia squints kindly: 'Anong klaseng tao ka, anak?' What kind of person are you? Filipinos love this question — they're not testing you, they're meeting your soul. Today, three honest words.",
    culturalNote: "Self-description in Tagalog leads with the adjective: 'Mabait ako' (I'm kind). The 'ma-' prefix turns nouns into adjectives — 'bait' (kindness) becomes 'mabait' (kind). Modesty rules apply: 'medyo' (a bit) softens claims. 'Medyo mahiyain ako' (I'm a bit shy) is more endearing than a flat 'I'm shy'.",
  },

  chunks: [
    {
      id: 'mabait-ako',
      target: 'Mabait ako',
      native: "I'm kind",
      literal: 'Kind I',
      emoji: '💛',
      phonetic: 'ma-BA-it a-KO',
      audioRef: null,
    },
    {
      id: 'medyo-mahiyain',
      target: 'Medyo mahiyain ako',
      native: "I'm a bit shy",
      literal: 'A-bit shy I',
      emoji: '😊',
      phonetic: 'MED-yo ma-HEE-ya-in a-KO',
      audioRef: null,
    },
    {
      id: 'gusto-kong-matuto',
      target: 'Gusto kong matuto',
      native: 'I love to learn',
      literal: 'Like my [linker] learn',
      emoji: '📖',
      phonetic: 'goos-TO kong ma-TOO-to',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjective + ako',
    explanation: "Tagalog self-description = 'Adjective ako' — adjective comes first. Common 'ma-' adjectives: mabait (kind), masipag (hardworking), matalino (smart), mahiyain (shy), masayahin (cheerful). Soften any claim with 'medyo' (a bit) — more honest, more Filipino.",
    examples: [
      { target: 'Masipag ako', native: "I'm hardworking" },
      { target: 'Medyo tahimik ako', native: "I'm a bit quiet" },
      { target: 'Masayahin ako', native: "I'm cheerful" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Mabait ako', right: "I'm kind" },
        { left: 'Medyo mahiyain ako', right: "I'm a bit shy" },
        { left: 'Gusto kong matuto', right: 'I love to learn' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Soften the claim — Filipino modesty',
      sentence: '___ mahiyain ako.',
      options: ['Medyo', 'Mabait', 'Saan'],
      correct: 'Medyo',
      context: "'Medyo' (a bit) softens any adjective into something humbler and more endearing.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm kind",
      correct: ['Mabait ako', 'mabait ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell Nanay you love to learn — put the words in order',
      words: ['matuto', 'kong', 'Gusto'],
      correct: ['Gusto', 'kong', 'matuto'],
      translation: 'I love to learn',
    },
    {
      type: 'multiple_choice',
      instruction: "Nanay Cecilia asks what kind of person you are. You want to be honest but humble. What works best?",
      question: 'Choose the most Filipino reply',
      options: [
        { text: 'Mabait ako, medyo mahiyain, at gusto kong matuto.', correct: true },
        { text: 'Mabait, masipag, matalino ako!', correct: false },
        { text: 'Ako si mabait.', correct: false },
      ],
      explanation: "Three traits is plenty, and 'medyo' on one of them = humble. Filipino self-description is a soft-sell.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm a bit shy",
      correct: ['Medyo mahiyain ako', 'medyo mahiyain ako'],
    },
  ],

  rwenDialogue: {
    intro: "Cebu video call, round two. Nanay Cecilia leans closer to the phone, smiling, ready to ask the soft question.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, anong klaseng tao ka ba?',
        native: 'Child, what kind of person are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mabait po ako, medyo mahiyain, at gusto kong matuto.', native: "I'm kind, a bit shy, and I love to learn.", correct: true, feedback: "Beautiful — three traits, with 'medyo' for humility and 'po' for respect." },
          { target: 'Matalino, mabait, masipag, masayahin ako!', native: "I'm smart, kind, hardworking, cheerful!", correct: false, feedback: 'Too many big claims at once — Filipino modesty prefers two-three with a softener.' },
          { target: 'Ako si mabait.', native: 'I am [name-marker] kind.', correct: false, feedback: "'Si' is only for proper names. For traits, just 'Mabait ako'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mabuti ka palang bata.',
        native: "You're a good kid then.",
      },
      {
        speaker: 'rwen',
        rwenLine: "She just blessed you. 'Mabuti kang bata' is a Filipino mum's gold star.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm kind (in Tagalog)", correct: ['Mabait ako', 'mabait ako'] },
      { prompt: "I'm a bit shy (in Tagalog)", correct: ['Medyo mahiyain ako', 'medyo mahiyain ako'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three honest adjectives about yourself in Tagalog. Say them out loud: '___ ako, medyo ___, at ___ ako.' Truth + softener + truth.",
    rwenSignoff: "I'll ask you tomorrow. Ingat — go well.",
  },

  phase8: {
    scenario: "Second video call with Nanay Cecilia in Cebu. She's getting to know you — this time she wants to know your character. What kind of person are you really? She's gentle, but she's reading your soul.",
    rwenRole: "Nanay Cecilia — your future mother-in-law, early 70s, sweet but discerning; she wants three honest words and will reflect back her own (e.g. 'matanda na, pero masayahin pa rin').",
    successCriteria: "User shares three personality traits using the 'Adjective ako' pattern, applies 'medyo' to at least one for modesty, uses 'po' for respect, and asks Nanay back politely with 'Kayo po, anong klaseng tao po kayo?'",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
