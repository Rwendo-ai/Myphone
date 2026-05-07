import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-sabzi-mandi',
  module: 7,
  lesson: 9,
  title: 'Sabzi Mandi — At the Vegetable Market',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The 'sabzi mandi' is where Indian kitchens are actually built — open-air, pre-dawn, piles of tomatoes and bhindi and dhaniya and the smell of damp earth. Prices are not on labels. They\'re in the air, and they bend if you ask the right way.",
    culturalNote: "'Sabzi mandi' (सब्ज़ी मंडी) is the wholesale-and-retail vegetable market — every Indian neighbourhood has one. Light haggling is normal: ask 'kitne ka?' (how much?), then 'thoda kam karo' (reduce a bit). Aggressive haggling on small daily veg, though, is gauche — the seller\'s margin is already thin.",
  },

  chunks: [
    {
      id: 'kitne_ka',
      target: 'कितने का?',
      native: 'How much (does it cost)?',
      literal: 'Kitne ka — of how-much?',
      emoji: '💰',
      phonetic: 'KIT-nay ka',
      audioRef: null,
    },
    {
      id: 'kilo',
      target: 'किलो',
      native: 'Kilo (the standard unit)',
      literal: 'Kilo — kilogram',
      emoji: '⚖️',
      phonetic: 'KEE-lo',
      audioRef: null,
    },
    {
      id: 'thoda_kam',
      target: 'थोड़ा कम करो',
      native: 'Reduce it a little',
      literal: 'Thoda kam karo — a-little less make',
      emoji: '⬇️',
      phonetic: 'THO-da KUM ka-RO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kitne ka? — asking the price',
    explanation: "'Kitne ka?' literally means 'of how much?' — the standard 'how much does this cost?' question. The form changes by gender of the noun: 'kitne ka?' (masculine — aam, pyaaz), 'kitni ki?' (feminine — sabzi, dal). When pointing vaguely, 'kitne ka?' is the safe default.",
    examples: [
      { target: 'Yeh kitne ka hai?', native: 'How much is this?' },
      { target: 'Tamatar kitne ka kilo?', native: 'How much per kilo for tomatoes?' },
      { target: 'Aam kitne ke hain?', native: 'How much are the mangoes?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the market phrase to its meaning',
      pairs: [
        { left: 'Kitne ka?', right: 'How much?' },
        { left: 'Kilo', right: 'Kilogram (unit)' },
        { left: 'Thoda kam karo', right: 'Reduce it a little' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask the price per kilo',
      sentence: 'Tamatar _____ ka kilo?',
      options: ['kitne', 'kab', 'kahan'],
      correct: 'kitne',
      context: 'You want to know the price of tomatoes per kilo.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How much (does it cost)?',
      correct: ['Kitne ka?', 'Kitne ka', 'kitne ka?', 'kitne ka'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Tomatoes are 60 rupees a kilo. What\'s the right haggle move?',
      question: 'Polite negotiation:',
      options: [
        { text: 'Bhaiya, thoda kam karo — 50 mein de do?', correct: true },
        { text: 'That\'s robbery, give me half price', correct: false },
        { text: 'Pay the asking price silently — haggling is rude', correct: false },
      ],
      explanation: "Knock 10-15% off, not 50%. 'Thoda kam karo' (reduce a little) plus a counter-offer is the standard back-and-forth. Halving the price would insult the vendor; paying full asking is fine too — light haggling is expected, not required.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Tomatoes — how much per kilo?"',
      words: ['kitne', 'Tamatar', 'kilo?', 'ka'],
      correct: ['Tamatar', 'kitne', 'ka', 'kilo?'],
      translation: 'Tomatoes — how much per kilo?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Reduce it a little',
      correct: ['Thoda kam karo', 'thoda kam karo'],
    },
  ],

  rwenDialogue: {
    intro: "It\'s 7am at the Lajpat Nagar sabzi mandi in Delhi. You\'re buying veg for tonight\'s dinner. The vendor is weighing tomatoes.",
    lines: [
      {
        speaker: 'npc',
        target: 'भैया, टमाटर साठ रुपए किलो।',
        native: 'Brother, tomatoes are sixty rupees a kilo.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, thoda kam karo — pachas mein de do, ek kilo lunga.', native: 'Brother, reduce it a little — give it for fifty, I\'ll take a kilo.', correct: true, feedback: 'You haggled politely (called him bhaiya, asked for a small reduction, committed to a kilo). He\'ll likely meet you at 55.' },
          { target: 'Bahut mehenga hai', native: 'It\'s very expensive', correct: false, feedback: 'A complaint without a counter-offer doesn\'t move the price. Try: "Thoda kam karo — pachas mein de do?"' },
          { target: 'Theek hai, ek kilo do', native: 'Okay, give me one kilo', correct: false, feedback: 'Fine to accept the price — just know light haggling is the norm: "Thoda kam karo, bhaiya."' },
        ],
      },
      {
        speaker: 'npc',
        target: 'चलिए साहब, पचपन में ले लीजिए।',
        native: 'Alright sir, take it for fifty-five.',
      },
      {
        speaker: 'rwen',
        rwenLine: "He moved five rupees, you saved face, the deal got done. That\'s how the mandi works.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much (does it cost)?', correct: ['Kitne ka?', 'Kitne ka', 'kitne ka?', 'kitne ka'] },
      { prompt: 'Reduce it a little', correct: ['Thoda kam karo', 'thoda kam karo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find a market or grocer today — Indian or otherwise. At the produce, ask the price in Hindi out loud (even if just to yourself): 'Kitne ka kilo?' Practice the rhythm before you need it.",
    rwenSignoff: "The sabzi mandi runs on relationships and small reductions. Phir milenge.",
  },

  phase8: {
    scenario: "It\'s 6:30am at the Lajpat Nagar sabzi mandi and you\'re shopping for tonight\'s dinner — your first time buying for an Indian household. Piles of tamatar, pyaaz, bhindi, and dhaniya in front of you. The vendor is mid-conversation with a regular but turning to you next.",
    rwenRole: "The vendor — mid 50s, runs his stall daily, knows his regulars; he\'ll quote a slightly higher price to a foreigner and respect a polite haggle, but won\'t move much on already-thin margins.",
    successCriteria: "User asks 'kitne ka kilo?' to get the price (NOT pointing or asking in English), names a specific quantity in kilos, attempts ONE polite reduction with 'thoda kam karo' or a counter-offer (NOT aggressive halving), and addresses the vendor as 'bhaiya' rather than skipping the relational form.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
