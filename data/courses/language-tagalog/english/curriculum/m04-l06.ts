import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-possessives',
  module: 4,
  lesson: 6,
  title: 'Ko, Mo, Niya — My, Your, His/Her',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English says 'my house'. Tagalog says 'bahay ko' — house mine. Possession comes AFTER the thing, like a tail. Once you flip the order, you sound less like a textbook and more like a Filipino.",
    culturalNote: "These short words — 'ko', 'mo', 'niya' — are called enclitics. They cling to the word before them. Like 'siya', 'niya' has no gender: 'bahay niya' is 'his house' OR 'her house'. The freedom continues.",
  },

  chunks: [
    {
      id: 'bahay_ko',
      target: 'Bahay ko',
      native: 'My house',
      literal: 'House mine',
      emoji: '🏠',
      phonetic: 'BA-hai ko',
      audioRef: null,
    },
    {
      id: 'bahay_mo',
      target: 'Bahay mo',
      native: 'Your house',
      literal: 'House yours',
      emoji: '🏡',
      phonetic: 'BA-hai mo',
      audioRef: null,
    },
    {
      id: 'bahay_niya',
      target: 'Bahay niya',
      native: 'His / her house',
      literal: 'House theirs (any gender)',
      emoji: '🏘️',
      phonetic: 'BA-hai NI-ya',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessor enclitics',
    explanation: "After any noun, drop in 'ko' / 'mo' / 'niya' to say my / your / his-or-her. The thing comes first; the owner clings to its tail. No 'ng' needed — these little words ARE the marker baked in.",
    examples: [
      { target: 'Pangalan ko', native: 'My name' },
      { target: 'Cellphone mo', native: 'Your cellphone' },
      { target: 'Kapatid niya', native: 'His/her sibling' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog possessive phrase to its meaning',
      pairs: [
        { left: 'Bahay ko', right: 'My house' },
        { left: 'Bahay mo', right: 'Your house' },
        { left: 'Bahay niya', right: 'His / her house' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'my name'",
      sentence: 'Pangalan _____ ay Maria.',
      options: ['ko', 'mo', 'niya'],
      correct: 'ko',
      context: "'Ko' = mine. It clings to the noun.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Your house',
      correct: ['Bahay mo', 'bahay mo'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'his/her sibling'",
      words: ['Kapatid', 'niya'],
      correct: ['Kapatid', 'niya'],
      translation: 'His / her sibling',
    },
    {
      type: 'multiple_choice',
      instruction: "Which means 'my dog'?",
      question: 'Choose the right phrase',
      options: [
        { text: 'Aso ko', correct: true },
        { text: 'Ko aso', correct: false },
        { text: 'Aso ako', correct: false },
      ],
      explanation: "Possessor comes AFTER the noun. 'Aso ko' = dog mine = my dog. 'Ako' is the focus 'I', not the possessive.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'His / her house',
      correct: ['Bahay niya', 'bahay niya'],
    },
  ],

  rwenDialogue: {
    intro: "You're showing photos to a new friend. They want to know who's who.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sino sino sila?',
        native: 'Who are they?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nanay ko, tatay ko, at kapatid niya', native: 'My mom, my dad, and his/her sibling', correct: true, feedback: "Perfect — three possessives, smooth flow, 'niya' stays gender-neutral." },
          { target: 'Ko nanay, ko tatay', native: '(wrong order)', correct: false, feedback: "Order: noun first, possessor after. 'Nanay ko', not 'ko nanay'." },
          { target: 'Ang nanay, ang tatay', native: 'The mom, the dad', correct: false, feedback: "That's just 'the' — no possession. You want 'nanay ko' = my mom." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ang ganda ng pamilya mo!',
        native: 'Your family is beautiful!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen — 'pamilya mo'. The possessor clinging to the tail. That's the rhythm of Tagalog possession.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My house (in Tagalog)',
        correct: ['Bahay ko', 'bahay ko'],
      },
      {
        prompt: 'His / her house (in Tagalog)',
        correct: ['Bahay niya', 'bahay niya'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three things in your room and say them with 'ko'. 'Cellphone ko.' 'Tasa ko.' 'Sapatos ko.' Feel the tail-position of the possessor — that's the Tagalog hinge.",
    rwenSignoff: "Hanggang bukas — until tomorrow. We've got demonstratives next.",
  },

  phase8: {
    scenario: "You're giving a tita a tour of a small group photo on your phone. She wants to know whose family member is whose — yours, your friend's, your partner's. You'll need ko / mo / niya repeatedly.",
    rwenRole: "Tita Beth — early 60s, loves family photos, asks 'sino 'to?' (who's this?) over and over and follows up with 'kanino?' (whose?) for each face.",
    successCriteria: "User correctly uses 'ko', 'mo', and 'niya' at least once each, in noun-first order (e.g., 'kapatid ko', 'lola mo', 'nanay niya'). They handle 'niya' without defaulting to gendered pronouns.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
