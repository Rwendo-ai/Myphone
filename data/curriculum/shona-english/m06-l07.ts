import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-prices',
  module: 6,
  lesson: 7,
  title: 'Mutengo — Price & Shopping',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The market is the heartbeat of Zimbabwe. Haggling is not rude — it's relationship. You're expected to ask the price, counter, and find a number that works for both. Today you get the language to do that.",
    culturalNote: "In Zimbabwean markets, the first price is rarely the final price. Asking 'Inodura' (is it expensive?) and offering a counter is part of the social contract. A vendor who haggles with you is engaging, not arguing.",
  },

  chunks: [
    {
      id: 'mutengo_uri_ngani',
      target: 'Mutengo uri ngani?',
      native: 'What is the price? / How much does it cost?',
      literal: 'Price it-is how-much?',
      emoji: '🏷️',
      phonetic: 'mu-TEN-go u-ri nga-ni',
      audioRef: null,
    },
    {
      id: 'inodura',
      target: 'Inodura / Ichipa',
      native: 'It is expensive / It is cheap',
      literal: 'It-costs-much / It-costs-little',
      emoji: '💰💸',
      phonetic: 'i-no-DU-ra / i-CHI-pa',
      audioRef: null,
    },
    {
      id: 'deredza_mutengo',
      target: 'Deredza mutengo',
      native: 'Reduce the price / Lower the price',
      literal: 'Lower/reduce price',
      emoji: '⬇️',
      phonetic: 'de-RE-dza mu-TEN-go',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mutengo — price negotiation vocabulary',
    explanation: "'Mutengo uri ngani?' (How much?) is the most important shopping question. After hearing the price: 'Inodura' (it's expensive) opens negotiation. 'Deredza mutengo' (lower the price) is your counter. Then they'll move.",
    examples: [
      { target: 'Mutengo uri ngani?', native: 'How much does it cost?' },
      { target: 'Inodura zvikuru', native: 'It is very expensive' },
      { target: 'Deredza mutengo, ndapota', native: 'Please lower the price' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the shopping phrase to its meaning',
      pairs: [
        { left: 'Mutengo uri ngani?', right: 'How much does it cost?' },
        { left: 'Inodura', right: 'It is expensive' },
        { left: 'Deredza mutengo', right: 'Lower the price' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask the price politely',
      sentence: 'Mutengo _____ ngani, ndapota?',
      options: ['uri', 'ari', 'iri'],
      correct: 'uri',
      context: 'Asking how much something costs at a market stall.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How much does it cost?',
      correct: ['Mutengo uri ngani?', 'mutengo uri ngani?', 'Mutengo uri ngani', 'mutengo uri ngani'],
    },
    {
      type: 'multiple_choice',
      instruction: "The vendor says 'Madora gumi'. You think that's too much. What do you say?",
      question: 'The price is too high — respond:',
      options: [
        { text: 'Inodura. Deredza mutengo, ndapota.', correct: true },
        { text: 'Zvakanaka, ndichatora.', correct: false },
        { text: 'Handina mari', correct: false },
      ],
      explanation: "Say it's expensive and ask for a lower price: 'Inodura. Deredza mutengo, ndapota.'",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Please lower the price'",
      words: ['Deredza', 'mutengo,', 'ndapota.'],
      correct: ['Deredza', 'mutengo,', 'ndapota.'],
      translation: 'Please lower the price',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'It is cheap',
      correct: ['Ichipa', 'ichipa'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Mbare market in Harare. You see beautiful fabric. Time to negotiate.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mutengo uri ngani, ndapota?', native: 'How much does it cost, please?', correct: true, feedback: "Perfect opening. The vendor is ready to talk." },
          { target: 'Ndinoda ichi', native: 'I want this', correct: false, feedback: "Ask the price first — 'Mutengo uri ngani, ndapota?' — then negotiate." },
          { target: 'Mangani?', native: 'How many?', correct: false, feedback: "For price: 'Mutengo uri ngani?' not mangani (which is for counting quantity)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Madora gumi nerimwe.',
        native: 'Eleven dollars.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Inodura. Deredza mutengo, ndapota. Madora sere?', native: "It's expensive. Please lower the price. Eight dollars?", correct: true, feedback: "Negotiated! The vendor smiles — you're doing this right." },
          { target: 'Zvakanaka', native: "That's fine (accept price)", correct: false, feedback: "You can negotiate! Try: 'Inodura. Deredza mutengo, ndapota. Madora sere?'" },
          { target: 'Handida', native: "I don't want it", correct: false, feedback: "You wanted it — negotiate: 'Inodura. Deredza mutengo, ndapota.' Then offer a counter price." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Madora sere! The vendor agrees. You just negotiated a purchase in Shona. This is real life.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much does it cost?', correct: ['Mutengo uri ngani?', 'mutengo uri ngani?', 'Mutengo uri ngani', 'mutengo uri ngani'] },
      { prompt: 'Lower the price', correct: ['Deredza mutengo', 'deredza mutengo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you buy something, mentally run the Shona negotiation: 'Mutengo uri ngani?' → hear the price → 'Inodura' (if it is) → 'Deredza mutengo.' Even in your head, it changes how you shop.",
    rwenSignoff: "Negotiation is conversation. Famba zvakanaka.",
  },
};

export default lesson;
