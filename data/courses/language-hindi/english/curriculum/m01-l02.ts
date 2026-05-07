import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-kaise-ho',
  module: 1,
  lesson: 2,
  title: 'Kaise Ho? — Greeting a Friend',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you greeted an elder with respect. Today — I want to greet YOU. Kaise ho? That's how I greet a friend. With me you don't need 'aap'. Let's learn the warm form.",
    culturalNote: "Using 'Aap kaise hain?' with a close friend feels weirdly formal — like calling your sibling 'sir'. Friends and peers use 'tum kaise ho?' or just 'kaise ho?'. In Hinglish-speaking circles you'll also hear 'kya haal hai?' — 'what's the situation?' — pure Mumbai energy.",
  },

  chunks: [
    {
      id: 'kaise_ho',
      target: 'कैसे हो?',
      native: 'How are you? (informal, to a friend)',
      literal: 'Kaise ho — how are (you-friend)?',
      emoji: '👋',
      phonetic: 'KAY-say HO',
      audioRef: null,
    },
    {
      id: 'main_theek_hoon',
      target: 'मैं ठीक हूँ',
      native: 'I am fine / I am well',
      literal: 'Main theek hoon — I fine am',
      emoji: '😊',
      phonetic: 'MAIN TEEK HOON',
      audioRef: null,
    },
    {
      id: 'kya_haal_hai',
      target: 'क्या हाल है?',
      native: "What's up? (very casual, Hinglish flavour)",
      literal: 'Kya haal hai — what condition is?',
      emoji: '✌️',
      phonetic: 'KYAA HAAL HAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tum vs Aap — Friend vs Elder',
    explanation: "Hindi splits 'you' by relationship. 'Aap' (आप) is respectful — elders, strangers. 'Tum' (तुम) is informal — friends, peers, younger siblings. The verb ending changes too: 'aap kaise HAIN' vs 'tum kaise HO'. Indians track this every sentence.",
    examples: [
      { target: 'Aap kaise hain?', native: 'How are you? (formal — elder/stranger)' },
      { target: 'Tum kaise ho?', native: 'How are you? (informal — friend)' },
      { target: 'Main theek hoon', native: 'I am fine (about myself)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Kaise ho?', right: 'How are you? (friend)' },
        { left: 'Aap kaise hain?', right: 'How are you? (elder/formal)' },
        { left: 'Kya haal hai?', right: "What's up? (very casual)" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your best friend texts you in the morning. What do you say back?',
      question: 'Choose the right response for a friend',
      options: [
        { text: 'Main theek hoon, tum kaise ho?', correct: true },
        { text: 'Main theek hoon, aap kaise hain?', correct: false },
        { text: 'Namaste', correct: false },
      ],
      explanation: "With a friend, use 'tum kaise ho?' (informal) not 'aap kaise hain?' (formal). The 'tum/ho' pair signals warmth.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the informal greeting',
      sentence: '_____ kaise ho?',
      options: ['Tum', 'Aap', 'Main'],
      correct: 'Tum',
      context: 'You are greeting your younger cousin at breakfast.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi — informal',
      prompt: 'How are you? (to a friend)',
      correct: ['Kaise ho?', 'Kaise ho', 'kaise ho?', 'kaise ho', 'Tum kaise ho?', 'tum kaise ho?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the informal reply',
      words: ['hoon,', 'theek', 'Main', 'tum', 'kaise', 'ho?'],
      correct: ['Main', 'theek', 'hoon,', 'tum', 'kaise', 'ho?'],
      translation: 'I am fine, how are you? (informal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi — Hinglish casual',
      prompt: "What's up? (very casual greeting)",
      correct: ['Kya haal hai?', 'Kya haal hai', 'kya haal hai?', 'kya haal hai'],
    },
  ],

  rwenDialogue: {
    intro: "I'm your friend, Rwen. We bump into each other at a chai stall in Bandra. Greet me the right way.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Kaise ho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main theek hoon, tum kaise ho?', native: 'I am fine, how are you?', correct: true, feedback: "Perfect — that's how friends greet each other." },
          { target: 'Main theek hoon, aap kaise hain?', native: 'I am fine, how are you? (formal)', correct: false, feedback: "Close — but 'aap...hain' is for elders. With me, use 'tum...ho'." },
          { target: 'Namaste', native: 'Hello (formal)', correct: false, feedback: "That works, but a friend expects 'Kaise ho?' back — meet them at their level." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Theek hai! Good. You knew the difference. Tum/aap matters — and you got it right.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are you? (to a close friend)', correct: ['Kaise ho?', 'Kaise ho', 'kaise ho?', 'kaise ho', 'Tum kaise ho?', 'tum kaise ho?'] },
      { prompt: 'I am fine / I am well', correct: ['Main theek hoon', 'main theek hoon', 'Main theek hoon.', 'main theek hoon.'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Greet a friend or sibling with 'Kaise ho?' today. See if they notice the switch from English.",
    rwenSignoff: "Friends deserve the warm form. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Saturday afternoon in a chai stall in Bandra, Mumbai. Your same-age cousin Arjun walks in — you haven't seen him in two months. He flops down on the bench next to you and grins. This is a casual peer moment, not a formal one.",
    rwenRole: "Arjun — your cousin, ~28, easy-going Mumbai guy who'll laugh if you're too stiff with him.",
    successCriteria: "User picks the informal 'Tum kaise ho?' or 'Kaise ho?' (NOT 'Aap kaise hain?' — he's a peer, not an elder), replies with 'Main theek hoon' when asked back, and stays in the 'tum/ho' register rather than slipping into formal 'aap/hain'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
