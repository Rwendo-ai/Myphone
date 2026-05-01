import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Grands-parents — Grandparents',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Your grand-mère is 84. Every Sunday she pulls a tarte tatin out of the oven and pretends not to remember you said you were on a diet. Today you learn the words for the people who built your family — and yes, they come with hyphens.",
    culturalNote: "French builds 'grand-mother' and 'grand-father' literally: grand + mère, grand + père. The hyphen is mandatory. 'Petits-enfants' (grandchildren) literally is 'little-children'. These hyphenated kinship words are everywhere in family talk.",
  },

  chunks: [
    {
      id: 'ma_grand_mere',
      target: 'Ma grand-mère',
      native: 'My grandmother',
      literal: 'My(f) grand-mother',
      emoji: '👵',
      phonetic: 'mah grahn-MEHR',
      audioRef: null,
    },
    {
      id: 'mon_grand_pere',
      target: 'Mon grand-père',
      native: 'My grandfather',
      literal: 'My(m) grand-father',
      emoji: '👴',
      phonetic: 'mohn grahn-PEHR',
      audioRef: null,
    },
    {
      id: 'mes_petits_enfants',
      target: 'Mes petits-enfants',
      native: 'My grandchildren',
      literal: 'My(pl) little-children',
      emoji: '🧒',
      phonetic: 'may puh-tee-zahn-FAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hyphenated kinship — grand- / petits-',
    explanation: "French stitches family roles together with hyphens. Grand-mère, grand-père, petits-enfants, beaux-parents. The hyphen is part of the spelling — drop it and it's a typo. 'Grand' here doesn't mean 'big' — it means 'one generation above/below'.",
    examples: [
      { target: 'Grand-mère', native: 'Grandmother' },
      { target: 'Grand-père', native: 'Grandfather' },
      { target: 'Petits-enfants', native: 'Grandchildren' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Ma grand-mère', right: 'My grandmother' },
        { left: 'Mon grand-père', right: 'My grandfather' },
        { left: 'Mes petits-enfants', right: 'My grandchildren' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A grandmother is talking about her grandchildren.',
      sentence: 'J\'adore mes _____.',
      options: ['petits-enfants', 'enfants', 'parents'],
      correct: 'petits-enfants',
      context: "She's a grand-mère, so the people she dotes on are her petits-enfants — grandchildren.",
    },
    {
      type: 'translate',
      instruction: 'Type in French (mind the hyphen!)',
      prompt: 'My grandmother',
      correct: ['Ma grand-mère', 'ma grand-mère', 'Ma grand-mere', 'ma grand-mere'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence: "My grandfather lives in Provence"',
      words: ['Provence.', 'en', 'Mon', 'grand-père', 'habite'],
      correct: ['Mon', 'grand-père', 'habite', 'en', 'Provence.'],
      translation: 'My grandfather lives in Provence.',
    },
    {
      type: 'multiple_choice',
      instruction: "How do you write 'grandmother' in French?",
      question: 'Pick the correctly spelled form.',
      options: [
        { text: 'Grand-mère', correct: true },
        { text: 'Grand mère', correct: false },
        { text: 'Grandmère', correct: false },
      ],
      explanation: "Hyphen, always. 'Grand mère' (no hyphen) and 'grandmère' (no space) are both wrong.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My grandfather',
      correct: ['Mon grand-père', 'mon grand-père', 'Mon grand-pere', 'mon grand-pere'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday lunch. Your grand-mère is at the head of the table. She turns to you with that look that means a question is coming.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu as appelé ton grand-père cette semaine?',
        native: 'Did you call your grandfather this week?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, j'ai parlé à mon grand-père hier.", native: 'Yes, I spoke to my grandfather yesterday.', correct: true, feedback: "Beautiful — 'mon grand-père' with the hyphen baked in." },
          { target: "Oui, j'ai parlé à ma grand-père hier.", native: 'Yes, I spoke to my grandfather yesterday.', correct: false, feedback: "Grand-père is masculine — 'mon', not 'ma'." },
          { target: "Oui, j'ai parlé à grand père hier.", native: 'Yes, I spoke to grand father yesterday.', correct: false, feedback: 'Hyphen missing, possessive missing — needs "mon grand-père".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bon. Il a besoin de ses petits-enfants, tu sais.',
        native: 'Good. He needs his grandchildren, you know.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She used 'ses petits-enfants' — his grandchildren. 'Ses' = his/her plural. You'll meet that one properly soon, but you already understood it. That's the magic of patterns.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — hyphens count.',
    prompts: [
      {
        prompt: 'My grandmother (in French)',
        correct: ['Ma grand-mère', 'ma grand-mère', 'Ma grand-mere', 'ma grand-mere'],
      },
      {
        prompt: 'My grandchildren (in French)',
        correct: ['Mes petits-enfants', 'mes petits-enfants'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one thing your grand-mère or grand-père used to make or do. Say it out loud: 'Ma grand-mère faisait... / Mon grand-père aimait...' Two short sentences. Honour them in French.",
    rwenSignoff: "Grandparents are the soft heart of a family. À demain.",
  },

  phase8: {
    scenario: "You're visiting your French partner's grand-mère, Mamie Yvonne, at her tiny house in the Loire valley. Over coffee and a slice of clafoutis, she asks about YOUR grandparents — what they were like, what they did, where they lived. She loves family stories.",
    rwenRole: "Mamie Yvonne — 84, sharp as a tack, slightly hard of hearing so she leans in. She has six grandchildren herself and tells you proudly. Uses 'mon petit' as a term of endearment. Gently nods when you say grand-mère / grand-père with the right possessive.",
    successCriteria: "User correctly uses 'ma grand-mère' AND 'mon grand-père' with right gender, and either describes one of them with a detail OR uses 'petits-enfants' to refer to themselves as part of a generation. Hyphen errors in writing don't count against speech.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
