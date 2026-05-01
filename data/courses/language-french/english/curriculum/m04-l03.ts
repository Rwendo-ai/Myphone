import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-les',
  module: 4,
  lesson: 3,
  title: 'Les — The (plural)',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Good news: in the plural, French stops caring about gender. Le, la, l' all collapse into one word — les. Les enfants, les amis, les filles. One word for them all.",
    culturalNote: "This is a small mercy. After fighting le vs la, plural feels like a hug — you get a free pass on gender. The s on most plural nouns is silent, but les is heard. Listen for that 'lay' sound — it's the cleanest plural marker French has.",
  },

  chunks: [
    {
      id: 'les_enfants',
      target: 'Les enfants',
      native: 'The children',
      literal: 'The(plural) children',
      emoji: '👶',
      phonetic: 'lay-zahn-FAHN',
      audioRef: null,
    },
    {
      id: 'les_amis',
      target: 'Les amis',
      native: 'The friends',
      literal: 'The(plural) friends',
      emoji: '👫',
      phonetic: 'lay-zah-MEE',
      audioRef: null,
    },
    {
      id: 'les_filles',
      target: 'Les filles',
      native: 'The girls',
      literal: 'The(plural) girls',
      emoji: '👧',
      phonetic: 'lay FEE-yuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Les — plural definite article',
    explanation: "Les replaces le, la, and l' in the plural — gender stops mattering. Most nouns add a silent -s. Before a vowel or silent h, you'll hear a 'z' sound: les amis = lay-ZAH-MEE. That liaison is how the s comes alive.",
    examples: [
      { target: 'Le livre → Les livres', native: 'The book → The books' },
      { target: 'La fille → Les filles', native: 'The girl → The girls' },
      { target: "L'ami → Les amis", native: 'The friend → The friends (with z-liaison)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Les enfants', right: 'The children' },
        { left: 'Les amis', right: 'The friends' },
        { left: 'Les filles', right: 'The girls' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Make it plural',
      sentence: 'Le livre est sur la table → _____ livres sont sur la table.',
      options: ['Le', 'La', 'Les'],
      correct: 'Les',
      context: 'Plural definite article — gender stops mattering.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'The children',
      correct: ['Les enfants', 'les enfants'],
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'The friends',
      correct: ['Les amis', 'les amis', 'Les amies', 'les amies'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're talking about all the books in your bag.",
      question: "Which is correct?",
      options: [
        { text: 'Les livres sont dans mon sac', correct: true },
        { text: 'Le livres sont dans mon sac', correct: false },
        { text: 'La livres sont dans mon sac', correct: false },
      ],
      explanation: 'Plural always uses les — never le or la before a plural noun.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "The girls are with the friends"',
      words: ['Les', 'filles', 'sont', 'avec', 'les', 'amis'],
      correct: ['Les', 'filles', 'sont', 'avec', 'les', 'amis'],
      translation: 'The girls are with the friends.',
    },
  ],

  rwenDialogue: {
    intro: "You're at a Sunday family lunch. Rwen is asking you who's around the table. Use 'les' wherever you can.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Qui est ici aujourd’hui? Who’s here today?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Les enfants et les amis', native: 'The children and the friends', correct: true, feedback: 'Yes — clean and natural.' },
          { target: 'Le enfants et le amis', native: 'The children and the friends', correct: false, feedback: 'Plural needs les, never le before a plural noun.' },
          { target: 'Les enfant et les ami', native: 'The children and the friends', correct: false, feedback: 'Most plurals add a silent -s — les enfants, les amis.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Les filles sont dans le jardin.',
        native: 'The girls are in the garden.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that? Les filles — clean. No gender to worry about. Plural is the easy part.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The children (in French)', correct: ['Les enfants', 'les enfants'] },
      { prompt: 'The girls (in French)', correct: ['Les filles', 'les filles'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Use "les" three times today — out loud or in your head. "Les enfants jouent." "Les amis arrivent." "Les questions sont difficiles." Three plurals, no thinking.',
    rwenSignoff: "À demain. Plural is your easiest French win — collect it.",
  },

  phase8: {
    scenario: "You're at a school open day in Bordeaux. A teacher walks you through the building, pointing at groups — children, parents, teachers, classrooms. You describe what you see using plural nouns with les.",
    rwenRole: "Madame Renaud — a primary school teacher, mid-50s, patient, asks 'qu'est-ce que vous voyez?' and corrects gently if you slip back into singular.",
    successCriteria: "User uses 'les' correctly with at least 4 plural nouns (les enfants, les parents, les professeurs, les salles), pronounces the z-liaison before vowels, and keeps verbs plural where needed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
