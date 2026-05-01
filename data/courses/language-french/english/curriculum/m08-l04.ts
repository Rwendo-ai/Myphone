import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-vouloir',
  module: 8,
  lesson: 4,
  title: "Vouloir — I want, I'd like, the polite difference",
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "In English, 'I want a coffee' is fine. In French, je veux un café lands a little hard — almost demanding. The fix is one syllable: je voudrais. Same verb, conditional mood, instantly polite. This tiny shift might be the highest-impact thing you learn in Module 8.",
    culturalNote: "French politeness lives in the verb mood, not just the words around it. Saying je veux to a waiter is technically correct but reads as curt — a child's grammar, a tourist's directness. Je voudrais is what adults order with. Reserve je veux for when you mean it: 'I want this, I'm sure.' For everything in shops, restaurants and requests: je voudrais.",
  },

  chunks: [
    {
      id: 'je_veux',
      target: 'Je veux',
      native: 'I want (direct, sometimes too direct)',
      literal: 'I want',
      emoji: '✋',
      phonetic: 'zhuh VUH',
      audioRef: null,
    },
    {
      id: 'je_voudrais',
      target: 'Je voudrais',
      native: "I'd like (polite)",
      literal: 'I would-want',
      emoji: '🙏',
      phonetic: 'zhuh voo-DREH',
      audioRef: null,
    },
    {
      id: 'tu_veux',
      target: 'Tu veux ...?',
      native: 'Do you want ...? (informal)',
      literal: 'You want ...?',
      emoji: '🤝',
      phonetic: 'too VUH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Vouloir present vs conditional — directness vs politeness',
    explanation: "Vouloir present: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils/elles veulent. The conditional 'je voudrais / nous voudrions / vous voudriez' softens it to 'I would like'. Rule of thumb: with strangers, in shops, ordering food → use voudrais. With friends offering you something or asking what you want → veux is fine.",
    examples: [
      { target: 'Je voudrais un café, s\'il vous plaît.', native: "I'd like a coffee, please. (to waiter)" },
      { target: 'Tu veux un thé? — Oui, je veux bien.', native: 'Do you want a tea? — Yes, gladly. (between friends)' },
      { target: "Nous voudrions réserver une table pour deux.", native: "We'd like to book a table for two. (to host)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form to its meaning',
      pairs: [
        { left: 'Je veux', right: 'I want (direct)' },
        { left: 'Je voudrais', right: "I'd like (polite)" },
        { left: 'Tu veux?', right: 'Do you want? (informal)' },
        { left: 'Vous voulez?', right: 'Do you want? (polite/plural)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're at a Parisian café ordering from a waiter you don't know.",
      sentence: '_____ un café et un croissant, s\'il vous plaît.',
      options: ['Je voudrais', 'Je veux', 'Tu veux'],
      correct: 'Je voudrais',
      context: "Strangers serving you = voudrais, always. Je veux to a waiter sounds curt enough to register.",
    },
    {
      type: 'translate',
      instruction: "Type in French — politely",
      prompt: "I'd like a glass of water",
      correct: ["Je voudrais un verre d'eau", "je voudrais un verre d'eau"],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — politely ask "Would you like (vous) a coffee?"',
      words: ['café', 'voulez', 'un', 'Vous', '?'],
      correct: ['Vous', 'voulez', 'un', 'café', '?'],
      translation: 'Do you want a coffee? (polite)',
    },
    {
      type: 'multiple_choice',
      instruction: "A close friend offers you cake. You happily accept. Which fits best?",
      question: "What's the natural reply?",
      options: [
        { text: 'Oui, je veux bien!', correct: true },
        { text: 'Oui, je voudrais bien.', correct: false },
        { text: 'Oui, je voudrais.', correct: false },
      ],
      explanation: "Between friends accepting an offer, 'je veux bien' is the warm, natural answer — literally 'I want willingly'. Voudrais here would feel oddly formal between mates.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — to a waiter',
      prompt: "We'd like to order, please",
      correct: ['Nous voudrions commander, s\'il vous plaît', 'nous voudrions commander, s\'il vous plaît', 'Nous voudrions commander s\'il vous plaît'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into a small café in Montmartre. The waiter, mid-50s, comes over with a notepad. Order something — politely.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour, qu\'est-ce que vous voulez?',
        native: 'Hello, what would you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bonjour. Je voudrais un café et un pain au chocolat, s\'il vous plaît.', native: "Hello. I'd like a coffee and a pain au chocolat, please.", correct: true, feedback: "Perfect register — voudrais and s'il vous plaît. The waiter relaxes." },
          { target: 'Je veux un café et un pain au chocolat.', native: "I want a coffee and a pain au chocolat.", correct: false, feedback: "Grammatically right, socially off. Je veux to a waiter you don't know reads as terse — go with voudrais." },
          { target: 'Donnez-moi un café.', native: "Give me a coffee.", correct: false, feedback: "Imperative is much too direct here. Even with s'il vous plaît, native speakers wouldn't open like this." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien, je vous apporte ça.',
        native: "Very good, I'll bring that right over.",
      },
      {
        speaker: 'rwen',
        rwenLine: "One small word — voudrais — and the whole exchange softens. That's French politeness in action.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'd like a tea, please (politely)",
        correct: ["Je voudrais un thé, s'il vous plaît", "je voudrais un thé, s'il vous plaît", "Je voudrais un thé s'il vous plaît"],
      },
      {
        prompt: 'Do you want a coffee? (to a friend)',
        correct: ['Tu veux un café?', 'tu veux un café?', 'Tu veux un café'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order one thing today — coffee, water, anything — using je voudrais. Even mentally, in English-speaking land. Get the conditional shape locked in your mouth before you ever need it for real.",
    rwenSignoff: "Bonne journée — I'll catch you tomorrow.",
  },

  phase8: {
    scenario: "Lunch service at a small bistrot near the Canal Saint-Martin. The waiter has just handed you the menu and is standing by, pen ready. You'll need to order a drink, a starter, a main — and each request has to land politely. He's not unkind, but he's been doing this for thirty years and notices register.",
    rwenRole: "Monsieur Pascal — bistrot waiter, ~55, professional, polite-but-no-nonsense; warms visibly when customers use voudrais and s'il vous plaît, becomes clipped if they say 'je veux' or 'donnez-moi'.",
    successCriteria: "User opens with 'Bonjour' (per Module 1 reflex), then orders using 'je voudrais' or 'nous voudrions' for at least 2 items, ending with 's'il vous plaît'. No 'je veux' to the waiter, no bare imperatives. If user uses 'je veux bien' it must be in response to an offer, not the original order.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
