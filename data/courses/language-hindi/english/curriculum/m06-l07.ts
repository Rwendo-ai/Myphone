import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-mol-bhav',
  module: 6,
  lesson: 7,
  title: 'Mol-Bhaav — Bargaining at the Market',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "Indian markets run on mol-bhaav — bargaining. The first price a vendor names is almost never the real price. Asking 'kitne ka hai?' (how much?) and then 'mahanga hai, kam karo' (it's expensive, lower it) isn't rude — it's the dance. A vendor who doesn't drop their price feels offended that you didn't even try.",
    culturalNote: "In bazaars from Chandni Chowk to Colaba, foreigners get quoted 2x to 3x the local price by default — not malice, just market ritual. Bargaining in Hindi alone usually drops the quote 30–50%. Branded shops and malls have fixed prices (MRP — Maximum Retail Price); street markets, autos, sabzi-walas, and chai-walas are negotiable.",
  },

  chunks: [
    {
      id: 'kitne_ka_hai',
      target: 'कितने का है?',
      native: 'How much is it?',
      literal: 'Kitne ka hai — how-much of is?',
      emoji: '🏷️',
      phonetic: 'KIT-nay KAA HAI',
      audioRef: null,
    },
    {
      id: 'mahanga_sasta',
      target: 'महँगा / सस्ता',
      native: 'Expensive / Cheap',
      literal: 'Mahanga (expensive), Sasta (cheap)',
      emoji: '💰💸',
      phonetic: 'ma-HAN-gaa / SAS-taa',
      audioRef: null,
    },
    {
      id: 'kam_karo',
      target: 'कम करो',
      native: 'Reduce / Lower (it)',
      literal: 'Kam karo — less do',
      emoji: '⬇️',
      phonetic: 'KAM KA-ro',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The mol-bhaav move: ask → react → counter',
    explanation: "Three-beat negotiation: (1) 'Kitne ka hai?' (how much?). (2) Vendor quotes. (3) Either 'sasta hai, theek hai' (cheap, OK) and pay; OR 'bahut mahanga hai, kam karo' (very expensive, lower it) and counter with your number. Repeat the loop till you both agree.",
    examples: [
      { target: 'Kitne ka hai?', native: 'How much is it?' },
      { target: 'Bahut mahanga hai. Kam karo.', native: "It's too expensive. Lower it." },
      { target: 'Bees rupaye, theek hai?', native: 'Twenty rupees, okay?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the bargaining phrase to its meaning',
      pairs: [
        { left: 'Kitne ka hai?', right: 'How much is it?' },
        { left: 'Mahanga', right: 'Expensive' },
        { left: 'Kam karo', right: 'Lower it / Reduce it' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask the price politely',
      sentence: '_____ ka hai?',
      options: ['Kitne', 'Kaun', 'Kya'],
      correct: 'Kitne',
      context: 'How much is the item at this stall?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How much is it?',
      correct: ['Kitne ka hai?', 'kitne ka hai?', 'Kitne ka hai', 'kitne ka hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "Vendor says 'Pachaas rupaye'. You think it's too high. What's the right move?",
      question: 'Counter the price:',
      options: [
        { text: 'Bahut mahanga hai. Kam karo. Bees, theek hai?', correct: true },
        { text: 'Theek hai, le lo paise.', correct: false },
        { text: 'Mere paas paise nahin hain.', correct: false },
      ],
      explanation: "Call out 'mahanga', say 'kam karo', then offer YOUR number. That's the bargain.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'It's very expensive, lower it'",
      words: ['Bahut', 'mahanga', 'hai.', 'Kam', 'karo.'],
      correct: ['Bahut', 'mahanga', 'hai.', 'Kam', 'karo.'],
      translation: "It's very expensive. Lower it.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Cheap',
      correct: ['Sasta', 'sasta'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Janpath in Delhi. You see a kurta you like. Negotiate.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kitne ka hai, bhaiya?', native: 'How much is it, brother?', correct: true, feedback: "Polite + Hindi. The vendor opens the dance." },
          { target: 'Mujhe ye chahiye', native: 'I want this', correct: false, feedback: "Ask the price first — 'Kitne ka hai, bhaiya?'" },
          { target: 'Mahanga hai', native: "It's expensive (before knowing the price)", correct: false, feedback: "You don't know the price yet. Start with 'Kitne ka hai?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'पाँच सौ रुपये।',
        native: 'Five hundred rupees.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bahut mahanga hai. Kam karo. Teen sau, theek hai?', native: "Too expensive. Lower it. Three hundred, okay?", correct: true, feedback: "Reaction + counter. Vendor smiles — you're playing." },
          { target: 'Theek hai', native: "Okay (accept the first price)", correct: false, feedback: "You can negotiate! Try: 'Bahut mahanga hai. Kam karo.'" },
          { target: 'Mere paas paise nahin hain', native: "I don't have money", correct: false, feedback: "You do — bargain instead: 'Bahut mahanga hai. Kam karo. Teen sau, theek hai?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'चार सौ। फिक्स।',
        native: 'Four hundred. Fixed.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Chaar sau! From paanch sau to chaar sau in two Hindi sentences. That's mol-bhaav.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much is it?', correct: ['Kitne ka hai?', 'kitne ka hai?', 'Kitne ka hai', 'kitne ka hai'] },
      { prompt: 'Lower it (the price)', correct: ['Kam karo', 'kam karo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find any item near you and rehearse the three-beat: 'Kitne ka hai?' → quote a number to yourself → 'Bahut mahanga hai, kam karo.' Even with a coffee mug. The mouth needs the muscle memory.",
    rwenSignoff: "Mol-bhaav is conversation. Phir milenge.",
  },

  phase8: {
    scenario: "Saturday afternoon at Janpath market in Delhi. You've spotted a chunky brass bracelet at a stall and the vendor opens with a price that's clearly inflated for a foreigner — you need to ask the price in Hindi, react with mahanga, push 'kam karo' AND offer a counter, and close the deal somewhere between the asking price and your floor.",
    rwenRole: "Janpath stall vendor, mid-40s, sharp negotiator who opens at 2x the locals' rate; she'll happily drop the price 30–40% if you keep it warm and stay in Hindi, but won't budge if you go aggressive or switch to English.",
    successCriteria: "User opens with 'Kitne ka hai?', reacts with 'mahanga' or 'bahut mahanga' to the first quote, follows with 'kam karo' AND a specific counter-number in rupaye, then closes with 'theek hai' once a deal is reached — all without any English digits or English haggling phrases.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
