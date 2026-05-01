import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-le-la',
  module: 4,
  lesson: 1,
  title: 'Le vs La — Genders',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Every French noun is either masculine or feminine — even objects. Le livre (book) is masculine, la table is feminine. Don't try to memorise it like a list. Notice patterns and feel it the way you feel 'a' vs 'an' in English — automatic, never thought about.",
    culturalNote: "When English speakers learn French, gender feels like the cruellest joke — why is a book a 'he'? But to a French speaker, gender isn't about the object's nature. It's a sound habit. They'd never say 'la livre' for the same reason you'd never say 'a apple'. Your ear will start to feel it within weeks.",
  },

  chunks: [
    {
      id: 'le_livre',
      target: 'Le livre',
      native: 'The book (m)',
      literal: 'The(masc) book',
      emoji: '📕',
      phonetic: 'luh LEE-vruh',
      audioRef: null,
    },
    {
      id: 'la_table',
      target: 'La table',
      native: 'The table (f)',
      literal: 'The(fem) table',
      emoji: '🪵',
      phonetic: 'lah TAH-bluh',
      audioRef: null,
    },
    {
      id: 'l_ami',
      target: "L'ami / L'amie",
      native: 'The friend (m / f, eliding)',
      literal: 'The friend (vowel-elision)',
      emoji: '🤝',
      phonetic: 'lah-MEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Le, La, L’ — the definite article',
    explanation: "Le before masculine, la before feminine. Before a vowel or silent h, both shrink to l' (l'ami, l'hôtel). Endings hint at gender: -age, -ment, -isme, -eau tend masculine; words ending in -e, -tion, -té tend feminine. Hints, not laws.",
    examples: [
      { target: 'Le fromage', native: 'The cheese (m — ends in -age)' },
      { target: 'La maison', native: 'The house (f)' },
      { target: "L'hôtel", native: 'The hotel (vowel — eliding)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Le livre', right: 'The book (m)' },
        { left: 'La table', right: 'The table (f)' },
        { left: "L'ami", right: 'The friend (vowel — eliding)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the right article',
      sentence: '_____ maison est grande.',
      options: ['Le', 'La', "L'"],
      correct: 'La',
      context: 'Maison (house) is feminine — most -son endings are.',
    },
    {
      type: 'translate',
      instruction: 'Type in French (with the right article)',
      prompt: 'The book',
      correct: ['Le livre', 'le livre'],
    },
    {
      type: 'translate',
      instruction: 'Type in French — careful with the elision',
      prompt: 'The friend (male)',
      correct: ["L'ami", "l'ami"],
    },
    {
      type: 'multiple_choice',
      instruction: "Hôtel starts with a silent h. Which article fits?",
      question: 'Choose the right form',
      options: [
        { text: "L'hôtel", correct: true },
        { text: 'Le hôtel', correct: false },
        { text: 'La hôtel', correct: false },
      ],
      explanation: "Silent h acts like a vowel — le and la both shrink to l'. So always l'hôtel, l'homme, l'heure.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "The cheese is on the table"',
      words: ['Le', 'fromage', 'est', 'sur', 'la', 'table'],
      correct: ['Le', 'fromage', 'est', 'sur', 'la', 'table'],
      translation: 'The cheese is on the table.',
    },
  ],

  rwenDialogue: {
    intro: "You and Rwen are at a café. He points around the room and quizzes you on articles. Stay relaxed — feel the gender, don't translate.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Look at that book over there — how do we say 'the book'?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Le livre', native: 'The book', correct: true, feedback: "Yes — livre is masculine. Le livre, always." },
          { target: 'La livre', native: 'The book', correct: false, feedback: "Almost — but livre is masculine. (Funny twist: une livre — feminine — means a pound. Different word, different gender.)" },
          { target: "L'livre", native: 'The book', correct: false, feedback: "We only elide before a vowel or silent h. Livre starts with l, so use le." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Et la table à côté?',
        native: 'And the table next to it?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Beautiful — la table. Notice you didn't think, you just felt it. That's the goal.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The book (in French)', correct: ['Le livre', 'le livre'] },
      { prompt: 'The friend, male (in French — careful with elision)', correct: ["L'ami", "l'ami"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk through your home and silently label five objects with le or la — la chaise, le mur, la fenêtre, le sol, la porte. Don't look anything up; guess. We'll fix mistakes tomorrow.",
    rwenSignoff: "À demain. Trust your ear — it's already starting to learn.",
  },

  phase8: {
    scenario: "You're at a French friend's apartment for the first time. They walk you through the rooms and ask, in French, what each thing is — le canapé? la lampe? l'étagère? You have to answer with the right article each time.",
    rwenRole: "Camille — your easy-going Parisian friend, mid-30s, gently corrects you when you mix up le and la and explains the ending-pattern hint.",
    successCriteria: "User correctly attaches le, la, or l' to at least 4 nouns; self-corrects when prompted; uses l' before vowels or silent h (l'armoire, l'horloge).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
