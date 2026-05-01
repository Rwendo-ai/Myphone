import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-merci',
  module: 1,
  lesson: 4,
  title: 'Merci — Thank you',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "If you only learn one French word, learn 'merci'. Add 'beaucoup' for warmth, follow up with 'de rien' when someone thanks you. The politeness chain is small but deeply French.",
    culturalNote: "French thank-yous come in pairs — someone says merci, you reply 'de rien' (literally 'of nothing'). Letting a merci hang in the air without a reply feels abrupt. The little 'de rien' is the velvet glove.",
  },

  chunks: [
    {
      id: 'merci',
      target: 'Merci',
      native: 'Thank you',
      literal: 'Thanks',
      emoji: '🙏',
      phonetic: 'mehr-SEE',
      audioRef: null,
    },
    {
      id: 'merci_beaucoup',
      target: 'Merci beaucoup',
      native: 'Thanks a lot',
      literal: 'Thanks much',
      emoji: '💖',
      phonetic: 'mehr-SEE boh-KOO',
      audioRef: null,
    },
    {
      id: 'de_rien',
      target: 'De rien',
      native: "You're welcome",
      literal: 'Of nothing',
      emoji: '🤲',
      phonetic: 'duh ree-EHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness chain',
    explanation: 'The exchange has two halves and both are required: the thanks and the deflection. Skipping either feels off.',
    examples: [
      { target: 'Merci. — De rien.', native: 'Thanks. — You\'re welcome.' },
      { target: 'Merci beaucoup! — Je vous en prie.', native: 'Thanks a lot! — You\'re very welcome (formal).' },
      { target: 'Merci pour tout. — De rien, vraiment.', native: 'Thanks for everything. — Really, it\'s nothing.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Merci', right: 'Thank you' },
        { left: 'Merci beaucoup', right: 'Thanks a lot' },
        { left: 'De rien', right: "You're welcome" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Someone says 'Merci!' to you. Complete the natural reply.",
      sentence: 'De _____.',
      options: ['rien', 'merci', 'vous'],
      correct: 'rien',
      context: '"De rien" — literally "of nothing", the standard French "you\'re welcome".',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Thanks a lot',
      correct: ['Merci beaucoup', 'merci beaucoup'],
    },
    {
      type: 'build_sentence',
      instruction: 'Reply to a thank-you — put the words in order',
      words: ['rien.', 'De'],
      correct: ['De', 'rien.'],
      translation: "You're welcome.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "You're welcome",
      correct: ['De rien', 'de rien'],
    },
    {
      type: 'translate',
      instruction: 'Type in French — express extra warmth',
      prompt: 'Thank you very much',
      correct: ['Merci beaucoup', 'merci beaucoup'],
    },
  ],

  rwenDialogue: {
    intro: "You've just finished a beautiful dinner at a small bistro in Marseille. The waiter brings the bill and a small chocolate. You catch his eye as you stand to leave.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Merci beaucoup, monsieur', native: 'Thanks a lot, sir', correct: true, feedback: 'Warm and respectful. He\'ll smile at the "monsieur".' },
          { target: 'Merci', native: 'Thanks', correct: false, feedback: 'Fine, but a little flat — "beaucoup" makes it land properly after a meal.' },
          { target: 'De rien', native: "You're welcome", correct: false, feedback: "That's the reply — you're the one saying thanks here!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Je vous en prie, bonne soirée!',
        native: "You're very welcome, have a good evening!",
      },
      {
        speaker: 'rwen',
        rwenLine: "He gave you the formal 'Je vous en prie' — that's the upgraded 'de rien'. You earned it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Thanks a lot (in French)',
        correct: ['Merci beaucoup', 'merci beaucoup'],
      },
      {
        prompt: "You're welcome (the standard reply)",
        correct: ['De rien', 'de rien'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'merci' three times today — out loud, to real people. The barista, the bus driver, whoever holds a door. Three small reps.",
    rwenSignoff: "Merci à toi pour ton effort. À demain.",
  },

  phase8: {
    scenario: "It's late evening, you're leaving a small family-run bistro in the 5th arrondissement after a long, generous meal. You're catching the waiter's eye on the way out — the food was excellent, you genuinely want to thank him before you go.",
    rwenRole: "Sébastien — the waiter, late 40s, the owner's son; proud of the place, enjoys when guests acknowledge the meal warmly rather than ducking out silently.",
    successCriteria: "User says 'Merci' (with 'beaucoup' for warmth), addresses him politely (e.g. 'monsieur'), and when he replies 'de rien' or 'je vous en prie', closes the loop with a 'bonne soirée' rather than ignoring his reply.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
