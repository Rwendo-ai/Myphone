import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Au Marché — Shopping Math & Bargaining',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Saturday morning. The marché in any French town: tables piled with strawberries, cheese, herbs, second-hand watches, vintage frames. Vendors call out prices, customers ask for deals, baskets get packed cheap. Today we learn the language of bargains: 'three for ten', 'a discount', 'in total'.",
    culturalNote: "Outdoor markets and brocantes (flea markets) are where French people DO bargain — quietly, politely, with a smile. The trick: never insult the price, never push hard. Open with 'C\'est votre meilleur prix?' (your best price?) or 'Vous pouvez faire un effort?' (can you make an effort?). The vendor often knocks 1-2 euros off if you buy more than one item. Volume = leverage.",
  },

  chunks: [
    {
      id: 'trois_pour_dix_euros',
      target: 'Trois pour dix euros',
      native: 'Three for ten euros',
      literal: 'Three for ten euros',
      emoji: '🍓',
      phonetic: 'trwah poor deess uh-ROH',
      audioRef: null,
    },
    {
      id: 'une_reduction',
      target: 'Vous pouvez faire une réduction?',
      native: 'Can you give me a discount?',
      literal: 'You can do a reduction?',
      emoji: '🏷️',
      phonetic: 'voo poo-VAY fair oon ray-dook-SYOHN',
      audioRef: null,
    },
    {
      id: 'au_total',
      target: 'Ça fait combien au total?',
      native: 'How much in total?',
      literal: 'That makes how-much at-the total?',
      emoji: '🧾',
      phonetic: 'sah feh kohm-BYAN oh toh-TAL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Market math: "X pour Y", and the polite haggle frame',
    explanation: "Three building blocks: (1) BULK PRICES use 'pour': 'deux pour cinq euros' (two for 5€), 'trois pour dix' (three for 10€). (2) ASKING FOR A DISCOUNT softens with the conditional or with 'pouvoir': 'Vous pouvez faire une réduction?' or 'C\'est votre meilleur prix?'. (3) THE TOTAL: 'Ça fait combien au total?' or 'C\'est combien en tout?'. Both work, both natural.",
    examples: [
      { target: 'Deux pour cinq euros', native: 'Two for 5 euros' },
      { target: 'C\'est votre meilleur prix?', native: 'Is that your best price?' },
      { target: 'Ça fait dix-huit euros au total', native: 'That comes to 18 euros total' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French phrase to its English meaning',
      pairs: [
        { left: 'Trois pour dix euros', right: 'Three for ten euros' },
        { left: 'Une réduction', right: 'A discount' },
        { left: 'Au total', right: 'In total' },
        { left: 'Votre meilleur prix?', right: 'Your best price?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You want to ask for a discount. Complete:',
      sentence: 'Vous pouvez faire une _____?',
      options: ['réduction', 'addition', 'conversation'],
      correct: 'réduction',
      context: '"Réduction" = discount/reduction. "Addition" is the bill at a restaurant — different word.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'How much in total?',
      correct: ['Ça fait combien au total?', 'C\'est combien au total?', 'C\'est combien en tout?', 'Ça fait combien en tout?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Two for five euros, please"',
      words: ['Deux', 'pour', 'cinq', 'euros,', 's\'il vous plaît'],
      correct: ['Deux', 'pour', 'cinq', 'euros,', 's\'il vous plaît'],
      translation: 'Two for five euros, please.',
    },
    {
      type: 'multiple_choice',
      instruction: "At a brocante, the seller wants 30€ for a vintage lamp. You'd happily pay 25€. What's the most natural opening?",
      question: 'Choose the politest haggle move',
      options: [
        { text: 'C\'est votre meilleur prix?', correct: true },
        { text: 'C\'est vingt-cinq', correct: false },
        { text: 'Trop cher, au revoir', correct: false },
      ],
      explanation: "'C\'est votre meilleur prix?' invites a discount without insulting the price. The other two are too aggressive for French market etiquette.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Can you give me a discount?',
      correct: ['Vous pouvez faire une réduction?', 'vous pouvez faire une réduction?'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday at the marché. Strawberries are piled high. The vendor calls out '4 euros la barquette!' (4 euros a punnet). You want three.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Trois barquettes, c\'est combien?', native: 'Three punnets, how much?', correct: true, feedback: 'Direct and warm — you opened the door for a deal.' },
          { target: 'Trois pour quatre euros?', native: '(too cheeky)', correct: false, feedback: "That's the price for ONE — proposing 3 for 4€ would be rude. Ask first, then haggle." },
          { target: 'Combien?', native: 'How much?', correct: false, feedback: "Specify three first, so the vendor can offer a bulk price." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Trois pour dix euros, ça vous va?',
        native: 'Three for ten euros, sound good?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'D\'accord, je prends', native: 'OK, I\'ll take them', correct: true, feedback: 'You saved 2 euros by buying three. That\'s the marché logic — bulk = discount.' },
          { target: 'Trop cher!', native: '(too aggressive)', correct: false, feedback: "He already gave you a bulk price — pushing further would feel rude. Save 'trop cher' for when prices are genuinely off." },
          { target: 'Oui mais pour cinq?', native: '(asking for an even better deal — risky)', correct: false, feedback: "Sometimes works at a brocante, but for a market vendor who already cut the price, it's pushy." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three barquettes of fraises, ten euros, and you handled the whole exchange in French. The marché just became your kitchen supplier.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Three for ten euros (in French)', correct: ['Trois pour dix euros', 'trois pour dix euros'] },
      { prompt: 'How much in total?', correct: ['Ça fait combien au total?', 'C\'est combien au total?', 'C\'est combien en tout?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine you're at a marché. Pick three imaginary items, name a bulk price for them in French ('trois pour ___ euros'), then ask 'C'est votre meilleur prix?' out loud. Mime the smile.",
    rwenSignoff: "À demain — the final lesson of the module: a full money + time conversation.",
  },

  phase8: {
    scenario: "You're at a Saturday brocante in the south of France. You spot a vintage leather satchel marked at 45 euros and a small framed print at 18 euros. You want both, but at a better price. You greet the vendor, ask prices, ask for a bulk discount, and react.",
    rwenRole: "Monsieur Vidal — a brocante vendor, 60s, weathered, charming and used to haggling. Will drop 2-5 euros if you ask politely; will hold firm if you're rude or push too hard. Speaks at normal speed.",
    successCriteria: "User politely asks 'C\'est combien?' for at least one item, then opens a haggle with EITHER 'Vous pouvez faire une réduction?' OR 'C\'est votre meilleur prix?', AND uses 'au total' or 'en tout' once. No insulting the price (no 'c\'est trop cher!' on its own).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
