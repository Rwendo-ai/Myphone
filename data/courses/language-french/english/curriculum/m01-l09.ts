import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-au-revoir',
  module: 1,
  lesson: 9,
  title: 'Au revoir — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "French goodbyes don't end with 'bye'. They end with a wish — 'have a good day', 'have a good evening', 'see you tomorrow'. The other person is sent off with something. Today, we learn to send people off properly.",
    culturalNote: "An English 'bye!' tossed over the shoulder is fine in English. In French, walking out of a small shop with just 'au revoir' and no 'bonne journée' is functional but a touch flat. The little wish at the end is what makes the goodbye warm rather than transactional.",
  },

  chunks: [
    {
      id: 'au_revoir',
      target: 'Au revoir',
      native: 'Goodbye',
      literal: 'To re-seeing',
      emoji: '👋',
      phonetic: 'oh ruh-VWAHR',
      audioRef: null,
    },
    {
      id: 'a_demain',
      target: 'À demain',
      native: 'See you tomorrow',
      literal: 'Until tomorrow',
      emoji: '📅',
      phonetic: 'ah duh-MAHN',
      audioRef: null,
    },
    {
      id: 'bonne_journee',
      target: 'Bonne journée',
      native: 'Have a good day',
      literal: 'Good day (as wish)',
      emoji: '☀️',
      phonetic: 'bun zhoor-NAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Farewell wishes',
    explanation: 'Farewells stack: "Au revoir + bonne journée" or "Au revoir + à demain". The first is the goodbye; the second is the gift you leave with the person. Switch journée → soirée after ~6pm, or → semaine on Friday.',
    examples: [
      { target: 'Au revoir, bonne journée!', native: 'Goodbye, have a good day!' },
      { target: 'Au revoir, bonne soirée!', native: 'Goodbye, have a good evening!' },
      { target: 'Au revoir, à demain!', native: 'Goodbye, see you tomorrow!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Au revoir', right: 'Goodbye' },
        { left: 'À demain', right: 'See you tomorrow' },
        { left: 'Bonne journée', right: 'Have a good day' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're leaving a shop at 9pm. Complete the warmer goodbye.",
      sentence: 'Au revoir, bonne _____!',
      options: ['soirée', 'journée', 'matinée'],
      correct: 'soirée',
      context: 'Past ~6pm — soirée (evening), not journée (day).',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Goodbye',
      correct: ['Au revoir', 'au revoir'],
    },
    {
      type: 'build_sentence',
      instruction: 'Send your friend off warmly — put the words in order',
      words: ['journée!', 'revoir,', 'bonne', 'Au'],
      correct: ['Au', 'revoir,', 'bonne', 'journée!'],
      translation: 'Goodbye, have a good day!',
    },
    {
      type: 'translate',
      instruction: "Type in French — you'll see them tomorrow",
      prompt: 'See you tomorrow',
      correct: ['À demain', 'à demain', 'A demain'],
    },
    {
      type: 'translate',
      instruction: 'Type in French — wish them a good evening',
      prompt: 'Have a good evening',
      correct: ['Bonne soirée', 'bonne soirée'],
    },
  ],

  rwenDialogue: {
    intro: "You've just had dinner at your French friend Élodie's apartment. It's 11pm and you're at the door, coat on, about to head into the chilly Paris night.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Merci pour tout, au revoir, bonne soirée!', native: 'Thanks for everything, goodbye, have a good evening!', correct: true, feedback: 'Beautiful — gratitude, farewell, and a warm wish. Textbook French goodbye.' },
          { target: 'Au revoir', native: 'Goodbye', correct: false, feedback: 'Fine but flat — a French goodbye almost always carries a wish at the end.' },
          { target: 'Bonne journée!', native: 'Have a good day!', correct: false, feedback: "It's 11pm — that's a 'soirée' (evening), not a 'journée' (day)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bonne soirée à toi! À bientôt!',
        native: 'Have a good evening yourself! See you soon!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Heard her 'à toi'? She gave the wish back. The whole rhythm of French goodbyes is in that little exchange.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Goodbye (in French)',
        correct: ['Au revoir', 'au revoir'],
      },
      {
        prompt: 'Have a good day (the parting wish)',
        correct: ['Bonne journée', 'bonne journée'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tomorrow when you say bye to anyone, mentally translate it: would this be a 'bonne journée' or a 'bonne soirée'? Pay attention to the time of day. That's the French goodbye reflex.",
    rwenSignoff: "Demain — you put it ALL together. À demain, bonne soirée!",
  },

  phase8: {
    scenario: "11pm. You're standing in the entryway of your French friend Élodie's apartment in the 9th arrondissement after a long, warm dinner. Coat is on, scarf wrapped, the elevator is one floor down. Time to actually leave — properly.",
    rwenRole: "Élodie — your friend, ~30, in tu register with you, slightly tipsy and very fond; she'll send you off with a wish and expects one back.",
    successCriteria: "User combines a goodbye ('Au revoir' or 'Bonne nuit') with a parting wish ('Bonne soirée' since it's evening, NOT 'Bonne journée'), thanks her warmly, and uses tu (NOT vous) since they're friends. Stacks farewell + wish rather than just one or the other.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
