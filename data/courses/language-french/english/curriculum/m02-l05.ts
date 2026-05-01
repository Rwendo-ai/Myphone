import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-help',
  module: 2,
  lesson: 5,
  title: 'Au secours! — Help!',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You hope you never need this lesson. But the day you do — a wallet snatched in Pigalle, a tumble on a cobble in Sète — you need these phrases sitting right at the front of your tongue. They aren't grammar drills. They're tools.",
    culturalNote: "English speakers often default to 'help' for everything from 'I can't open this jar' to actual emergencies. French splits these. 'Au secours!' is reserved for real danger — shouting it on a busy boulevard will turn heads. For everyday assistance ('can you help me with this bag?'), the right phrase is the much softer 'Pouvez-vous m'aider?' Don't yell 'au secours' at a hotel concierge.",
  },

  chunks: [
    {
      id: 'au_secours',
      target: 'Au secours!',
      native: 'Help! (emergency)',
      literal: 'To-the rescue!',
      emoji: '🚨',
      phonetic: 'oh suh-KOOR',
      audioRef: null,
    },
    {
      id: 'jai_besoin_daide',
      target: "J'ai besoin d'aide",
      native: 'I need help',
      literal: 'I-have need of-help',
      emoji: '🙏',
      phonetic: 'zhay buh-ZWAHN DED',
      audioRef: null,
    },
    {
      id: 'pouvez_vous_maider',
      target: 'Pouvez-vous m’aider?',
      native: 'Can you help me?',
      literal: 'Can-you me-help?',
      emoji: '🤲',
      phonetic: 'poo-vay voo MAY-day',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Asking for help — three intensities',
    explanation: "Match the phrase to the situation. 'Au secours!' = emergency, scream-out-loud. 'J'ai besoin d'aide' = stating a need, calmer ('I need help finding the platform'). 'Pouvez-vous m'aider?' = polite request to a specific person ('can you help me?'). Use the lightest one that fits.",
    examples: [
      { target: 'Au secours! Au voleur!', native: 'Help! Thief!' },
      { target: "J'ai besoin d'aide, s'il vous plaît", native: 'I need help, please' },
      { target: 'Pouvez-vous m’aider avec ma valise?', native: 'Can you help me with my suitcase?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to the right intensity',
      pairs: [
        { left: 'Au secours!', right: 'Real emergency — shouted' },
        { left: "J'ai besoin d'aide", right: 'Calm statement — I need help' },
        { left: 'Pouvez-vous m’aider?', right: 'Polite request to one person' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right phrase',
      question: "You're at a tabac in Lille and your card won't work. You ask the clerk for help. What do you say?",
      options: [
        { text: 'Pouvez-vous m’aider?', correct: true },
        { text: 'Au secours!', correct: false },
        { text: 'Désolé', correct: false },
      ],
      explanation: "Polite, specific request — perfect. Au secours would alarm the whole shop. Désolé is just an apology with no ask.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the polite request to a stranger",
      sentence: 'Pouvez-vous _____, s’il vous plaît?',
      options: ['m’aider', 'aider', 'aide'],
      correct: 'm’aider',
      context: "'Pouvez-vous m'aider?' — the m' is 'me'. Without it, you're just asking 'can you help?' floating in air.",
    },
    {
      type: 'translate',
      instruction: "Type in French — you're calmly stating you need help to a hotel receptionist",
      prompt: 'I need help',
      correct: ["J'ai besoin d'aide", "j'ai besoin d'aide", "Jai besoin daide"],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask the stranger to help you',
      words: ['m’aider?', 'Pouvez-vous'],
      correct: ['Pouvez-vous', 'm’aider?'],
      translation: 'Can you help me?',
    },
    {
      type: 'translate',
      instruction: "Type in French — pure emergency word, the one you'd shout",
      prompt: 'Help! (emergency)',
      correct: ['Au secours!', 'au secours!', 'Au secours', 'au secours'],
    },
  ],

  rwenDialogue: {
    intro: "You're walking back to your hotel late at night in Toulouse. Your suitcase wheel just snapped on the cobblestones and it's wedged. A passerby is heading toward you. Get help — calmly.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, pouvez-vous m’aider?', native: 'Excuse me, can you help me?', correct: true, feedback: 'Perfect — polite opener, specific ask. He stops.' },
          { target: 'Au secours!', native: 'Help! (shouted)', correct: false, feedback: "It's a broken suitcase wheel, not a mugging. He'll either panic or assume you're drunk." },
          { target: "J'ai besoin", native: 'I have need', correct: false, feedback: "Cut off — you need 'J'ai besoin d'aide'. Without 'd'aide' the sentence floats." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bien sûr. Qu’est-ce qui se passe?',
        native: "Of course. What's going on?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'ai besoin d'aide avec ma valise.", native: 'I need help with my suitcase.', correct: true, feedback: 'Clean — you stated the need plainly. He bends down to look.' },
          { target: 'Au secours valise!', native: 'Help suitcase!', correct: false, feedback: "Words salad — pick one register and stick to it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "See how 'pouvez-vous m'aider' opens the door, and 'j'ai besoin d'aide' tells him exactly what for? Two phrases, two jobs.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Can you help me? (in French, polite)',
        correct: ['Pouvez-vous m’aider?', 'pouvez-vous m’aider?', 'Pouvez-vous m’aider', 'pouvez-vous m’aider', 'Pouvez vous maider?', 'pouvez vous maider'],
      },
      {
        prompt: 'I need help (in French)',
        correct: ["J'ai besoin d'aide", "j'ai besoin d'aide", "Jai besoin daide", "jai besoin daide"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorise 'Pouvez-vous m'aider?' so it comes out before you think. Say it three times, in three different tones — calm, urgent, slightly desperate. Tongue knows it now.",
    rwenSignoff: "Hope you never need it. Bonne soirée.",
  },

  phase8: {
    scenario: "You're in the Métro at République station in Paris during evening rush hour. You've gotten on the wrong line and your bag's strap got caught in the closing doors as you tried to step off — it's stuck and the train is about to move. A station agent is two metres away. You need help, fast but not panicked.",
    rwenRole: "Karim — Métro station agent, ~30, has seen everything; calmly responsive to a clear ask, slow to react if you mumble or shout incoherently.",
    successCriteria: "User flags Karim with 'Excusez-moi' or 'Pouvez-vous m’aider?' (NOT screaming 'Au secours!' for a stuck bag), states the problem with 'J'ai besoin d'aide' or similar, and reserves 'Au secours' only if the user roleplays it as a true emergency (e.g., the door is closing on a person). Right intensity for the right moment.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
