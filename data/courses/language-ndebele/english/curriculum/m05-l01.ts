import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01',
  module: 5,
  lesson: 1,
  title: 'uMama, uBaba — Mother and Father',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Every isiNdebele kinship term starts with the prefix u- (a person, class 1a). uMama. uBaba. The 'u' isn't optional — it's the marker that says 'this is a human, treat the noun this way'. Drop it and you sound like a textbook.",
    culturalNote: "uMama and uBaba are the everyday, warm forms — what you actually call your parents. The classical-literary forms uNina (mother) and uYise (father) appear in praise poetry, traditional ceremonies, and respectful third-person reference. A Bulawayo grandchild calls his father uBaba; the imbongi reciting his clan praises calls him uYise.",
  },

  chunks: [
    {
      id: 'umama',
      target: 'uMama',
      native: 'Mother (the everyday, warm form)',
      literal: 'u- (class 1a person prefix) + Mama — what every Ndebele child says',
      emoji: '👩🏾',
      phonetic: 'oo-MAH-mah',
      audioRef: null,
    },
    {
      id: 'ubaba',
      target: 'uBaba',
      native: 'Father (the everyday, warm form)',
      literal: 'u- (person prefix) + Baba — direct address and reference',
      emoji: '👨🏾',
      phonetic: 'oo-BAH-bah',
      audioRef: null,
    },
    {
      id: 'unina',
      target: 'uNina',
      native: 'Mother (formal, ceremonial — "his/her mother")',
      literal: 'Used in praise poetry and respectful third-person reference, not direct address',
      emoji: '🌾',
      phonetic: 'oo-NEE-nah',
      audioRef: null,
    },
    {
      id: 'uyise',
      target: 'uYise',
      native: 'Father (formal, ceremonial — "his/her father")',
      literal: 'Classical literary form; lineage-talk, izibongo, ancestors',
      emoji: '🪕',
      phonetic: 'oo-YEE-seh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The u- prefix marks a human noun',
    explanation: "Almost every Ndebele kinship term begins with u- (the singular class 1a prefix). uMama, uBaba, uGogo, uKhulu, uMalume. The prefix is part of the word — it tells the grammar 'this is a person'. When you eventually say 'my mother', the possessive will agree with this u-: uMama wami.",
    examples: [
      { target: 'uMama', native: 'Mother' },
      { target: 'uBaba', native: 'Father' },
      { target: 'uMama wami', native: 'My mother' },
      { target: 'uBaba wami', native: 'My father' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its meaning',
      pairs: [
        { left: 'uMama', right: 'Mother (everyday)' },
        { left: 'uBaba', right: 'Father (everyday)' },
        { left: 'uNina', right: 'Mother (formal/ceremonial)' },
        { left: 'uYise', right: 'Father (formal/ceremonial)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You walk into the kitchen at home in Bulawayo. Greet your mother.',
      sentence: 'Sawubona, _____ !',
      options: ['uMama', 'uNina', 'uGogo'],
      correct: 'uMama',
      context: "Direct address to your own mother in daily life = uMama. uNina is for praise poetry and respectful narration about someone's mother.",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Father (the everyday word)',
      correct: ['uBaba', 'ubaba', 'uBaba.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'An imbongi (praise poet) is reciting your father\'s clan praises. Which form does he use?',
      question: "How does the praise poet refer to your father?",
      options: [
        { text: 'uYise — the formal, ceremonial form', correct: true },
        { text: 'uBaba — the everyday form', correct: false },
        { text: 'uMama — that means mother', correct: false },
      ],
      explanation: "uYise is the literary, ceremonial form of 'father'. Praise poetry, lineage talk, and references to ancestors all reach for uYise. uBaba is what you'd call him at the dinner table.",
    },
  ],

  rwenDialogue: {
    intro: "You arrive at a homestead in Matabeleland. A young woman leads you inside and introduces her parents.",
    lines: [
      { speaker: 'npc', target: 'Lo nguMama wami. Lo nguBaba wami.', native: 'This is my mother. This is my father.' },
      { speaker: 'rwen', rwenLine: "Both elders, both deserve a Sawubona. Greet each by their kinship title — that's how Ndebele warmth works." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sawubona, Mama. Sawubona, Baba.', native: 'Hello, Mother. Hello, Father.', correct: true, feedback: "Perfect. You used the kinship terms as titles — exactly what Ndebele elders expect from a respectful younger person." },
          { target: 'Hi.', native: 'Hi (English).', correct: false, feedback: "English 'hi' to elders in a Ndebele home is cold. Use Sawubona + their kinship title (Mama / Baba)." },
          { target: 'Sawubona, uYise.', native: 'Hello, Father (literary form).', correct: false, feedback: "uYise is for praise poetry, not direct address. To his face, he is uBaba." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Wenzile kuhle. uMama and uBaba — these are the two words that open every Ndebele family door.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Mother (the everyday word)', correct: ['uMama', 'umama', 'Mama'] },
      { prompt: 'Father (the everyday word)', correct: ['uBaba', 'ubaba', 'Baba'] },
      { prompt: 'Mother in praise poetry / ceremonial form', correct: ['uNina', 'unina', 'Nina'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say uMama and uBaba aloud, three times each, with the long stressed syllable: oo-MAH-mah, oo-BAH-bah. If you have a photo of your parents, point to each one and name them in isiNdebele. The mouth needs to learn the shape before the ear trusts it.",
    rwenSignoff: "Two words. Two pillars. Tomorrow we add the children who stand around them.",
  },

  phase8: {
    scenario: "You've just been welcomed into a family home in Bulawayo. The mother is in the kitchen; the father is in the sitting room. You are walked into each room in turn. Use uMama and uBaba correctly when you greet each one.",
    rwenRole: "Rwen plays the daughter of the house, your guide — gently coaching you to use kinship titles instead of English 'sir/ma'am'. She'll prompt you in front of each parent.",
    successCriteria: "User greets the mother as 'Sawubona, Mama' (or 'Sawubona, uMama') and the father as 'Sawubona, Baba' — uses the kinship title rather than English 'sir/ma'am' or just Sawubona alone.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
