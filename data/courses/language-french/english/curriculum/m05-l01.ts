import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-parents',
  module: 5,
  lesson: 1,
  title: 'La mère et le père — Mother and Father',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sunday lunch at grand-mère's. Everyone is squeezed around the table — your mother is passing the gratin, your father is already opening a second bottle of red. To talk about them in French, you need three little possessives: ma, mon, mes. Today we plant them.",
    culturalNote: "In French, possessives agree with the gender of the noun, NOT the speaker. 'Ma mère' = my mother (because mère is feminine). 'Mon père' = my father (because père is masculine). It doesn't matter if YOU are male or female — only the family member's word matters.",
  },

  chunks: [
    {
      id: 'ma_mere',
      target: 'Ma mère',
      native: 'My mother',
      literal: 'My(f) mother',
      emoji: '👩',
      phonetic: 'mah MEHR',
      audioRef: null,
    },
    {
      id: 'mon_pere',
      target: 'Mon père',
      native: 'My father',
      literal: 'My(m) father',
      emoji: '👨',
      phonetic: 'mohn PEHR',
      audioRef: null,
    },
    {
      id: 'mes_parents',
      target: 'Mes parents',
      native: 'My parents',
      literal: 'My(pl) parents',
      emoji: '👨‍👩‍👧',
      phonetic: 'may pah-RAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessives — ma / mon / mes',
    explanation: "Three forms of 'my' depending on what comes next: ma (feminine singular), mon (masculine singular), mes (any plural). The word's gender — not yours — picks the form.",
    examples: [
      { target: 'Ma mère', native: 'My mother (mère is feminine)' },
      { target: 'Mon père', native: 'My father (père is masculine)' },
      { target: 'Mes parents', native: 'My parents (plural)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Ma mère', right: 'My mother' },
        { left: 'Mon père', right: 'My father' },
        { left: 'Mes parents', right: 'My parents' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're showing a photo of your dad. Pick the right possessive.",
      sentence: '_____ père s\'appelle Jean.',
      options: ['Ma', 'Mon', 'Mes'],
      correct: 'Mon',
      context: "Père is masculine, so 'mon' — regardless of whether you're a son or a daughter.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My mother',
      correct: ['Ma mère', 'ma mère', 'Ma mere', 'ma mere'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the phrase: "My parents are kind"',
      words: ['sont', 'parents', 'gentils.', 'Mes'],
      correct: ['Mes', 'parents', 'sont', 'gentils.'],
      translation: 'My parents are kind.',
    },
    {
      type: 'multiple_choice',
      instruction: "Your French friend asks about your family. You want to say 'My father is a teacher.'",
      question: 'Which is correct?',
      options: [
        { text: 'Mon père est professeur.', correct: true },
        { text: 'Ma père est professeur.', correct: false },
        { text: 'Mes père est professeur.', correct: false },
      ],
      explanation: "Père is masculine singular, so it takes 'mon'. 'Ma' is for feminine words; 'mes' for plural.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My parents',
      correct: ['Mes parents', 'mes parents'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Sunday lunch and Hugo, your hosts' son, asks about your family back home. Tell him about your parents.",
    lines: [
      {
        speaker: 'npc',
        target: 'Et ta famille, elle est où?',
        native: 'And your family, where are they?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mes parents habitent à Londres.', native: 'My parents live in London.', correct: true, feedback: 'Perfect — "mes" for the plural "parents".' },
          { target: 'Ma parents habitent à Londres.', native: 'My parents live in London.', correct: false, feedback: "Almost — but parents is plural, so it's 'mes' not 'ma'." },
          { target: 'Mon parents habitent à Londres.', native: 'My parents live in London.', correct: false, feedback: "Plural needs 'mes' — 'mon' is for masculine singular." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, et ton père, qu\'est-ce qu\'il fait?',
        native: 'Ah, and your father, what does he do?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice he said 'ton père' — same logic as 'mon père'. Père is masculine, so masculine possessive. The pattern just clicked, didn't it?",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My mother (in French)',
        correct: ['Ma mère', 'ma mère', 'Ma mere', 'ma mere'],
      },
      {
        prompt: 'My parents (in French)',
        correct: ['Mes parents', 'mes parents'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at a photo of your parents (phone gallery counts). Say out loud: 'Voici ma mère. Voici mon père. Ce sont mes parents.' Three sentences, three possessives.",
    rwenSignoff: "Family is where French gets warm. À demain.",
  },

  phase8: {
    scenario: "Sunday lunch at the Lemoine household in Lyon. You're a guest, and over the cheese course Madame Lemoine — the matriarch — leans in and asks about YOUR parents. She wants details: what they're like, where they live, what they do. You need to talk about both of them naturally using ma/mon/mes.",
    rwenRole: "Madame Hélène Lemoine — your French host's mother, ~65, warm and curious, leans in close when she asks questions. She gently corrects possessives if you slip and uses lots of 'ah, oui?' to draw you out.",
    successCriteria: "User uses 'ma mère' (correctly with 'ma'), 'mon père' (correctly with 'mon'), and 'mes parents' (correctly with 'mes') at least once each, in natural sentences. Bonus: handles a follow-up question without dropping the possessive agreement.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
