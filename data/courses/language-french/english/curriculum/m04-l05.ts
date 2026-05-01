import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-this-that',
  module: 4,
  lesson: 5,
  title: 'Ce, Cette, Ces — This / These',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "When you point at something — this book, this city, these people — French wants gender on the word for 'this' too. Ce livre, cette ville, ces gens. And there's a sneaky one: cet, used before vowels for masculine nouns. Cet homme, cet ami.",
    culturalNote: "French doesn't really distinguish 'this' from 'that' the way English does — ce/cette/ces cover both. If you really need to make it clear, you tack on -ci (here) or -là (there): 'ce livre-ci' (this one), 'ce livre-là' (that one). For everyday speech, ce is enough.",
  },

  chunks: [
    {
      id: 'ce_livre',
      target: 'Ce livre',
      native: 'This book',
      literal: 'This(masc) book',
      emoji: '📖',
      phonetic: 'suh LEE-vruh',
      audioRef: null,
    },
    {
      id: 'cette_ville',
      target: 'Cette ville',
      native: 'This city',
      literal: 'This(fem) city',
      emoji: '🏙️',
      phonetic: 'set VEEL',
      audioRef: null,
    },
    {
      id: 'ces_gens',
      target: 'Ces gens',
      native: 'These people',
      literal: 'These(plural) people',
      emoji: '👥',
      phonetic: 'say ZHAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ce, Cet, Cette, Ces — demonstratives',
    explanation: "Ce before masculine consonants. Cette before feminine. Ces in the plural (any gender). And cet — used before masculine nouns starting with a vowel or silent h, just so the sound flows: cet homme, cet ami, cet hôtel.",
    examples: [
      { target: 'Ce café est bon', native: 'This coffee is good (masc)' },
      { target: 'Cette ville est belle', native: 'This city is beautiful (fem)' },
      { target: 'Cet homme parle français', native: 'This man speaks French (masc + vowel → cet)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Ce livre', right: 'This book' },
        { left: 'Cette ville', right: 'This city' },
        { left: 'Ces gens', right: 'These people' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Homme starts with a silent h. Pick the demonstrative.",
      sentence: '_____ homme parle français.',
      options: ['Ce', 'Cet', 'Cette'],
      correct: 'Cet',
      context: "Masculine + vowel sound = cet. Same trick as l' replacing le before vowels.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'This city',
      correct: ['Cette ville', 'cette ville'],
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'These people',
      correct: ['Ces gens', 'ces gens'],
    },
    {
      type: 'multiple_choice',
      instruction: "Choose the right form for 'this friend (male)'.",
      question: 'Ami is masculine and starts with a vowel.',
      options: [
        { text: 'Cet ami', correct: true },
        { text: 'Ce ami', correct: false },
        { text: 'Cette ami', correct: false },
      ],
      explanation: "Cet is the special masculine form before vowels — like a bridge so two vowel sounds don't bump. Cet ami, cet homme, cet hôtel.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "This hotel and these people are charming"',
      words: ['Cet', 'hôtel', 'et', 'ces', 'gens', 'sont', 'charmants'],
      correct: ['Cet', 'hôtel', 'et', 'ces', 'gens', 'sont', 'charmants'],
      translation: 'This hotel and these people are charming.',
    },
  ],

  rwenDialogue: {
    intro: 'You’re showing a French friend around your favourite neighbourhood. You point at things and name them. Pick the right demonstrative each time.',
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Look at this man over there — how would you describe him?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cet homme est sympa', native: 'This man is nice', correct: true, feedback: "Yes — cet because homme starts with a silent h. Beautiful flow." },
          { target: 'Ce homme est sympa', native: 'This man is nice', correct: false, feedback: "Two vowel sounds bump together. French uses cet before vowels for masculine words." },
          { target: 'Cette homme est sympa', native: 'This man is nice', correct: false, feedback: 'Homme is masculine — cette is the feminine form. The right answer is cet.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Et cette ville, vous l’aimez?',
        native: 'And this city, do you like it?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how naturally cette landed there? Demonstratives just inherit the gender of the noun. Easy now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'This city (in French)', correct: ['Cette ville', 'cette ville'] },
      { prompt: 'This man (in French — careful with the silent h)', correct: ['Cet homme', 'cet homme'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Point at three things around you and name them with ce, cette, or cet. 'Ce stylo.' 'Cette tasse.' 'Cet écran.' Out loud or whispered — let your hand follow your voice.",
    rwenSignoff: "À demain. Pointing in French now has gender — yours.",
  },

  phase8: {
    scenario: "You're at the entrance of the Louvre with a French art-loving friend. You walk through one wing, pointing at paintings, statues, and people, describing what you see. Use ce / cette / cet / ces for each.",
    rwenRole: "Léa — your art-history-obsessed Parisian friend, late 20s. She'll respond to your descriptions and gently fix any wrong demonstrative.",
    successCriteria: "User uses ce, cette, ces correctly with at least 4 different nouns, AND uses 'cet' at least once before a vowel-initial masculine noun (cet artiste, cet homme, cet objet).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
