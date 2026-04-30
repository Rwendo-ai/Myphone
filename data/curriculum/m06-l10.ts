import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-market',
  module: 6,
  lesson: 10,
  title: 'At the Market — Full Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Welcome to Mbare — the largest informal market in Zimbabwe. Numbers, money, prices, time, days — everything from this module comes alive here. Navigate the market. Buy something. Speak Shona.",
    culturalNote: "Mbare Musika in Harare is one of the most vibrant markets in Africa. It's where fresh produce, fabric, electronics, and everything in between are traded daily. Knowing numbers and market language unlocks this entire world.",
  },

  chunks: [
    {
      id: 'ndichatora',
      shona: 'Ndichatora',
      english: "I'll take it / I'll buy it",
      literal: 'I-will-take',
      emoji: '🛒',
      phonetic: 'ndi-cha-TO-ra',
      audioRef: null,
    },
    {
      id: 'ndatenda_mutengesi',
      shona: 'Ndatenda, Mutengesi',
      english: 'Thank you, Vendor',
      literal: 'I-thank, Seller',
      emoji: '🙏',
      phonetic: 'nda-TEN-da mu-ten-GE-si',
      audioRef: null,
    },
    {
      id: 'zvakanaka_kutenga',
      shona: 'Zvakanaka kutenga',
      english: 'Good to buy / Good shopping',
      literal: 'It-is-good to-buy',
      emoji: '✅',
      phonetic: 'zva-ka-NA-ka ku-TEN-ga',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full market exchange flow',
    explanation: "A complete market exchange: Greet → Ask price → React (inodura/ichipa) → Negotiate (deredza mutengo) → Agree → Confirm you have money → Commit (ndichatora) → Thank the vendor. Seven steps, all in Shona.",
    examples: [
      { shona: 'Mangwanani. Mutengo uri ngani?', english: 'Good morning. How much does it cost?' },
      { shona: 'Inodura. Madora mashanu?', english: "It's expensive. Five dollars?" },
      { shona: 'Zvakanaka. Ndichatora. Ndatenda.', english: "Good. I'll take it. Thank you." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the market phrase to its meaning',
      pairs: [
        { left: 'Ndichatora', right: "I'll take it" },
        { left: 'Mutengesi', right: 'Vendor / Seller' },
        { left: 'Kutenga', right: 'To buy' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "The vendor agrees to your price. What do you say to complete the purchase?",
      question: 'Complete the transaction:',
      options: [
        { text: 'Zvakanaka. Ndichatora. Ndatenda.', correct: true },
        { text: 'Inodura zvikuru.', correct: false },
        { text: 'Handina mari.', correct: false },
      ],
      explanation: "Good (zvakanaka) + I'll take it (ndichatora) + Thank you (ndatenda) = complete purchase.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I'll take it",
      correct: ['Ndichatora', 'ndichatora'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the market greeting',
      sentence: 'Mangwanani. Mutengo _____ ngani?',
      options: ['uri', 'iri', 'ari'],
      correct: 'uri',
      context: 'Good morning. How much does it cost?',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'll take three, please'",
      words: ['Ndichatora', 'vatatu,', 'ndapota.'],
      correct: ['Ndichatora', 'vatatu,', 'ndapota.'],
      translation: "I'll take three, please",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Thank you, Vendor',
      correct: ['Ndatenda, Mutengesi', 'ndatenda, mutengesi'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Mbare market alone. Rwen is watching from a distance. Navigate a full purchase.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Mangwanani. Mutengo uri ngani, ndapota?', english: 'Good morning. How much does it cost, please?', correct: true, feedback: "Greeted, asked the price, added please. Perfect market opener." },
          { shona: 'Ndinoda ichi', english: 'I want this', correct: false, feedback: "Greet first, then ask the price: 'Mangwanani. Mutengo uri ngani, ndapota?'" },
          { shona: 'Inodura?', english: 'Is it expensive?', correct: false, feedback: "Ask the price first, then react to it: 'Mangwanani. Mutengo uri ngani, ndapota?'" },
        ],
      },
      {
        speaker: 'npc',
        shona: 'Madora gumi netatu.',
        english: 'Thirteen dollars.',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Inodura. Madora gumi, ndapota?', english: "It's expensive. Ten dollars, please?", correct: true, feedback: "Reaction + counter offer. The vendor considers." },
          { shona: 'Zvakanaka, ndichatora', english: "Fine, I'll take it (without negotiating)", correct: false, feedback: "You can negotiate — try: 'Inodura. Madora gumi, ndapota?'" },
          { shona: 'Handina mari', english: "I have no money", correct: false, feedback: "You have money — negotiate first: 'Inodura. Madora gumi, ndapota?'" },
        ],
      },
      {
        speaker: 'npc',
        shona: 'Zvakanaka — madora gumi nerimwe.',
        english: 'Okay — eleven dollars.',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Zvakanaka. Ndichatora. Ndine madora gumi nerimwe. Ndatenda, Mutengesi.', english: "Good. I'll take it. I have eleven dollars. Thank you, Vendor.", correct: true, feedback: "Complete. Greeted → Priced → Negotiated → Agreed → Confirmed money → Thanked. That's a full Shona market transaction." },
          { shona: 'Ndatenda', english: 'Thank you', correct: false, feedback: "Confirm you're taking it too: 'Zvakanaka. Ndichatora. Ndatenda, Mutengesi.'" },
          { shona: 'Inodura zvikuru', english: "It's very expensive", correct: false, feedback: "You already negotiated — eleven is fair. Complete: 'Zvakanaka. Ndichatora. Ndatenda, Mutengesi.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "I watched the whole thing. You greeted, negotiated, confirmed, and thanked — all in Shona. Module 6 complete. You can navigate Zimbabwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'll take it", correct: ['Ndichatora', 'ndichatora'] },
      { prompt: 'How much does it cost?', correct: ['Mutengo uri ngani?', 'mutengo uri ngani?', 'Mutengo uri ngani', 'mutengo uri ngani'] },
    ],
  },

  mission: {
    title: "Your Module 6 Mission",
    task: "Next time you buy anything, run the full Shona transaction in your head: greet → price → react → negotiate → confirm → thank. Even buying a coffee. Make it Shona.",
    rwenSignoff: "Module 6 done. You can count, tell time, handle money, and navigate a market. Module 7 — food, drink, and hosting — begins next. Tichaonana.",
  },
};

export default lesson;
