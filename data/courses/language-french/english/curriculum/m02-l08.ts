import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-i-want',
  module: 2,
  lesson: 8,
  title: 'Je voudrais — I would like',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're at the counter of a café in Lyon. The barista is waiting. The trick to ordering well isn't fancy vocabulary — it's choosing the polite frame. 'Je voudrais' is the magic two-word switch from sounding like a tourist barking orders to sounding like a guest at the table.",
    culturalNote: "English speakers often say 'Can I get a coffee?' or even just 'A coffee, please.' Both are fine in English, but in French the clean polite frame is 'Je voudrais' (I would like) — never 'Je veux' (I want), which sounds childish and demanding to French ears. A French adult always orders with 'Je voudrais' or 'Je prends'. Tiny grammatical shift, big social signal.",
  },

  chunks: [
    {
      id: 'je_voudrais',
      target: 'Je voudrais',
      native: 'I would like',
      literal: 'I would-want',
      emoji: '🙏',
      phonetic: 'zhuh voo-DREH',
      audioRef: null,
    },
    {
      id: 'un_cafe_svp',
      target: 'Un café, s’il vous plaît',
      native: 'A coffee, please',
      literal: 'A coffee, if-it you-pleases',
      emoji: '☕',
      phonetic: 'uhn ka-FAY seel voo PLEH',
      audioRef: null,
    },
    {
      id: 'je_prends_ca',
      target: 'Je prends ça',
      native: "I'll have that",
      literal: 'I take that',
      emoji: '👉',
      phonetic: 'zhuh prahn SAH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The polite "want" — Je voudrais vs Je veux',
    explanation: "Both technically mean 'I want', but they land worlds apart. 'Je veux' = I want (blunt, kid-style). 'Je voudrais' = I'd like (polite, adult). Use 'Je voudrais' for ordering, asking for things, requesting. Use 'Je prends ça' when you're pointing at something on the menu or display.",
    examples: [
      { target: 'Je voudrais un café, s’il vous plaît', native: "I'd like a coffee, please" },
      { target: 'Je voudrais une baguette', native: "I'd like a baguette" },
      { target: 'Je prends ça, et ça', native: "I'll have that, and that" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Je voudrais', right: 'I would like' },
        { left: 'Un café, s’il vous plaît', right: 'A coffee, please' },
        { left: 'Je prends ça', right: "I'll have that" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most polite order',
      question: "You're at a boulangerie in Bordeaux ordering a pain au chocolat. Pick the cleanest French.",
      options: [
        { text: 'Je voudrais un pain au chocolat, s’il vous plaît', correct: true },
        { text: 'Je veux un pain au chocolat', correct: false },
        { text: 'Pain au chocolat!', correct: false },
      ],
      explanation: "'Je voudrais' + s'il vous plaît is the textbook polite order. 'Je veux' sounds bossy; barking the item alone is curt.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the polite request at a café",
      sentence: '_____ un café, s’il vous plaît.',
      options: ['Je voudrais', 'Je veux', 'J’ai'],
      correct: 'Je voudrais',
      context: "'Je voudrais' is the polite ordering frame.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — politely order a coffee',
      prompt: "I'd like a coffee, please",
      correct: ['Je voudrais un café, s’il vous plaît', 'je voudrais un café, s’il vous plaît', 'Je voudrais un café s’il vous plaît', 'je voudrais un café s’il vous plaît', 'Je voudrais un cafe sil vous plait', 'je voudrais un cafe sil vous plait'],
    },
    {
      type: 'build_sentence',
      instruction: 'Point at a pastry in the case and say what you’ll have',
      words: ['ça', 'prends', 'Je'],
      correct: ['Je', 'prends', 'ça'],
      translation: "I'll have that",
    },
    {
      type: 'translate',
      instruction: 'Type in French — pointing at a pain au raisin in the case',
      prompt: "I'll have that",
      correct: ['Je prends ça', 'je prends ça', 'Je prends ca', 'je prends ca'],
    },
  ],

  rwenDialogue: {
    intro: "You're standing at the counter of Café de Flore in Saint-Germain-des-Prés. The waiter has just appeared with a notepad. Order — politely.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour. Vous désirez?',
        native: 'Hello. What would you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bonjour. Je voudrais un café, s’il vous plaît.', native: "Hello. I'd like a coffee, please.", correct: true, feedback: 'Beautiful — bonjour, je voudrais, s’il vous plaît. Three politeness markers. He nods.' },
          { target: 'Je veux un café.', native: 'I want a coffee.', correct: false, feedback: "Technically understandable, but 'je veux' from an adult lands rough. He'll serve you, but cool." },
          { target: 'Café!', native: 'Coffee!', correct: false, feedback: "Just shouting the item. Skip even one politeness layer and the warmth drops." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien. Et avec ça?',
        native: 'Very good. And with that?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je prends ça aussi — le croissant.', native: "I'll have that too — the croissant.", correct: true, feedback: "Perfect — 'je prends' is the natural follow-up when you're pointing at something." },
          { target: 'Non rien', native: 'Nothing', correct: false, feedback: "Cuts it short — fine if you really want nothing else, but you're missing a chance for the croissant." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how 'je voudrais' opened the order, and 'je prends ça' picked up something specific? They work as a pair.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I would like (in French, polite)",
        correct: ['Je voudrais', 'je voudrais'],
      },
      {
        prompt: "I'll have that (pointing in French)",
        correct: ['Je prends ça', 'je prends ça', 'Je prends ca', 'je prends ca'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you order anything — coffee, takeout, anything — say it in your head in French first: 'Je voudrais un ___, s’il vous plaît.' Build the muscle.",
    rwenSignoff: "Bon appétit, almost. À bientôt.",
  },

  phase8: {
    scenario: "You've ducked into a small café in the Le Panier neighbourhood of Marseille for a quick lunch. The owner is at the counter, wiping it with a cloth. You want a café noir, a croissant, and the small quiche you can see in the case on his right. Order all three — politely, in one smooth exchange.",
    rwenRole: "Monsieur Bernard — café owner, ~50, native Marseillais, all-day kind to polite customers. Slows down and chats if you greet him properly; serves quickly and cool if you bark.",
    successCriteria: "User opens with 'Bonjour', uses 'Je voudrais' (NOT 'Je veux') for at least one item, uses 'Je prends ça' while pointing at something visible (the quiche), and includes 's'il vous plaît' at least once. Three chunks all naturally deployed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
