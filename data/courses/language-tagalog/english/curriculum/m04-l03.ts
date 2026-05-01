import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-ng-marker',
  module: 4,
  lesson: 3,
  title: 'Ng — Possession & "of"',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English says 'father's house' — short, with an apostrophe. Tagalog flips it: 'bahay ng tatay' — house OF father. Once you hear that 'ng' tucked between the things, possession suddenly feels less like a rule and more like a hinge.",
    culturalNote: "'Ng' (pronounced 'nang') is the second core marker. It does the opposite job of 'ang': while 'ang' spotlights, 'ng' marks something OFF the spotlight — the possessor, the doer, or the object. The pattern is always: head noun + 'ng' + possessor.",
  },

  chunks: [
    {
      id: 'bahay_ng_tatay',
      target: 'Bahay ng tatay',
      native: "Father's house",
      literal: 'House OF father',
      emoji: '🏠',
      phonetic: 'BA-hai nang TA-tai',
      audioRef: null,
    },
    {
      id: 'tubig_ng_aso',
      target: 'Tubig ng aso',
      native: "The dog's water",
      literal: 'Water OF dog',
      emoji: '💧',
      phonetic: 'TU-big nang AH-so',
      audioRef: null,
    },
    {
      id: 'pangalan_ng_aso',
      target: 'Pangalan ng aso',
      native: "The dog's name",
      literal: 'Name OF dog',
      emoji: '🏷️',
      phonetic: 'pa-NGA-lan nang AH-so',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possession with ng',
    explanation: "Tagalog flips English possession. Instead of 'X's Y', say 'Y ng X'. The thing comes first, then 'ng', then the owner. 'Ng' is written 'ng' but pronounced like 'nang' — one of the trickiest spellings to remember.",
    examples: [
      { target: 'Sapatos ng bata', native: "The child's shoes" },
      { target: 'Kotse ng kapatid', native: "The sibling's car" },
      { target: 'Pagkain ng pusa', native: "The cat's food" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog possession phrase to its meaning',
      pairs: [
        { left: 'Bahay ng tatay', right: "Father's house" },
        { left: 'Tubig ng aso', right: "Dog's water" },
        { left: 'Pangalan ng aso', right: "Dog's name" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'the cat's food'",
      sentence: 'Pagkain _____ pusa.',
      options: ['ng', 'ang', 'sa'],
      correct: 'ng',
      context: "'Ng' is the possession marker — it slots between the thing and the owner.",
    },
    {
      type: 'translate',
      instruction: "Type in Tagalog",
      prompt: "Father's house",
      correct: ['Bahay ng tatay', 'bahay ng tatay'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'the dog's name'",
      words: ['aso', 'Pangalan', 'ng'],
      correct: ['Pangalan', 'ng', 'aso'],
      translation: "The dog's name",
    },
    {
      type: 'multiple_choice',
      instruction: "How does Tagalog say 'Maria's book'?",
      question: 'Choose the right structure',
      options: [
        { text: 'Libro ni Maria', correct: true },
        { text: 'Maria libro', correct: false },
        { text: 'Libro ang Maria', correct: false },
      ],
      explanation: "Thing first, then marker, then owner. For names, 'ng' becomes 'ni' — same job, name version.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "The dog's water",
      correct: ['Tubig ng aso', 'tubig ng aso'],
    },
  ],

  rwenDialogue: {
    intro: "You're visiting a friend's house. They point at a sleeping dog in the corner. You want to ask whose water bowl that is.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anong tinitignan mo?',
        native: 'What are you looking at?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tubig ng aso ba ito?', native: "Is this the dog's water?", correct: true, feedback: "Perfect — 'tubig ng aso' nails the possession structure." },
          { target: 'Aso tubig ba ito?', native: 'Dog water this?', correct: false, feedback: "Word order is off and the marker is missing." },
          { target: 'Tubig sa aso ba ito?', native: 'Water at the dog?', correct: false, feedback: "'Sa' is location. For possession, use 'ng'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Oo, tubig nga ng aso. Salamat sa pag-alaga.',
        native: "Yes, that's the dog's water. Thanks for paying attention.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You felt the hinge — thing, 'ng', owner. Once that order locks in, possession in Tagalog stops feeling backwards and starts feeling natural.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Father's house (in Tagalog)",
        correct: ['Bahay ng tatay', 'bahay ng tatay'],
      },
      {
        prompt: "The dog's name (in Tagalog)",
        correct: ['Pangalan ng aso', 'pangalan ng aso'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Make five 'ng' possession phrases today. Look around your room: 'cellphone ng kapatid', 'kape ng nanay', 'damit ng bata'. Out loud or in your head — five hinges.",
    rwenSignoff: "Hanggang bukas — until tomorrow. The marker family is starting to feel like home.",
  },

  phase8: {
    scenario: "You're walking through your tita's house and she's labelling everyone's stuff for an upcoming move. She points at items and you have to identify whose they are using 'ng' phrases.",
    rwenRole: "Tita Cora — late 50s, organized, holding a marker; she'll point at random items (slippers, cup, dog bowl) and ask 'kanino ito?' (whose is this?), expecting 'ng' answers.",
    successCriteria: "User produces at least 5 'ng' possession phrases of the form [thing] + ng + [owner], correctly placing 'ng' between them. Mistakes with word order should self-correct after Tita Cora's gentle prompts.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
