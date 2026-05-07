import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-aap-kaise-hain',
  module: 1,
  lesson: 5,
  title: 'Aap Kaise Hain? — The Universal Polite Greeting',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You now have morning, evening, formal, informal forms. But what if you walk into a Delhi metro and meet a stranger? Or join a meeting at an IT office in Bangalore? You need a universal polite phrase that's never wrong. That's 'Namaste, aap kaise hain?'.",
    culturalNote: "'Namaste, aap kaise hain?' is the polite all-purpose Indian opener. Morning, afternoon, evening — works any time. With elders, strangers, colleagues, your boss. When you don't know what register fits, this combination is always safe and always respectful. It's the diplomatic Hindi.",
  },

  chunks: [
    {
      id: 'aap_kaise_hain_full',
      target: 'आप कैसे हैं?',
      native: 'How are you? (formal — universal safety net)',
      literal: 'Aap kaise hain — You(formal) how are?',
      emoji: '🤝',
      phonetic: 'AAP KAY-say HAIN',
      audioRef: null,
    },
    {
      id: 'theek_hoon_aap',
      target: 'मैं ठीक हूँ, आप?',
      native: 'I am well, and you? (formal)',
      literal: 'Main theek hoon, aap — I fine am, you?',
      emoji: '💚',
      phonetic: 'MAIN TEEK HOON, AAP',
      audioRef: null,
    },
    {
      id: 'dhanyavaad',
      target: 'धन्यवाद',
      native: 'Thank you',
      literal: 'Dhanyavaad — gratitude',
      emoji: '🙏',
      phonetic: 'dhun-yuh-VAAD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hain vs Ho — Verb endings track the pronoun',
    explanation: "Hindi verbs change ending based on who you're speaking to. With 'aap' (formal), the verb ends in '-hain'. With 'tum' (informal), it ends in '-ho'. With 'main' (I), it ends in '-hoon'. Get the pair right and you sound natural.",
    examples: [
      { target: 'Aap kaise hain?', native: 'How are you? (formal)' },
      { target: 'Tum kaise ho?', native: 'How are you? (informal)' },
      { target: 'Main theek hoon', native: 'I am fine (about myself)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to who it is for',
      pairs: [
        { left: 'Aap kaise hain?', right: 'Any respected person, any time' },
        { left: 'Tum kaise ho?', right: 'A friend or peer' },
        { left: 'Main theek hoon, aap?', right: 'I am well, and you? (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the universal formal reply',
      sentence: 'Main theek _____, aap?',
      options: ['hoon', 'hain', 'ho'],
      correct: 'hoon',
      context: "You've just been asked 'Aap kaise hain?' — reply about yourself.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How are you? (formal — universal)',
      correct: ['Aap kaise hain?', 'Aap kaise hain', 'aap kaise hain?', 'aap kaise hain'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're about to meet your new boss in Bangalore for the first time. What do you say?",
      question: 'Choose the safest, most professional greeting',
      options: [
        { text: 'Namaste, aap kaise hain?', correct: true },
        { text: 'Kya haal hai?', correct: false },
        { text: 'Kaise ho?', correct: false },
      ],
      explanation: "'Namaste, aap kaise hain?' is the universal polite opener. 'Kya haal hai?' is too casual; 'Kaise ho?' uses the informal pronoun — wrong for a boss.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the polite reply',
      words: ['aap?', 'theek', 'Main', 'hoon,'],
      correct: ['Main', 'theek', 'hoon,', 'aap?'],
      translation: 'I am well, and you? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Thank you',
      correct: ['Dhanyavaad', 'dhanyavaad', 'Dhanyawad', 'dhanyawad'],
    },
  ],

  rwenDialogue: {
    intro: "Two strangers meet on the Delhi metro. Neither knows the other. You go first.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, aap kaise hain?', native: 'Hello, how are you? (formal)', correct: true, feedback: "Perfect — universal and respectful with a stranger. Confident and warm." },
          { target: 'Kaise ho?', native: 'How are you? (informal)', correct: false, feedback: "Too informal for a stranger — save 'kaise ho?' for friends." },
          { target: 'Kya haal hai?', native: "What's up? (casual)", correct: false, feedback: "Way too casual for a metro stranger. 'Namaste, aap kaise hain?' shows respect." },
        ],
      },
      {
        speaker: 'npc',
        target: 'मैं ठीक हूँ, आप?',
        native: 'I am well, and you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main theek hoon, dhanyavaad', native: 'I am well, thank you', correct: true, feedback: "Natural and warm. You held a real exchange with a stranger." },
          { target: 'Suprabhat', native: 'Good morning', correct: false, feedback: "That's a greeting, not a reply to 'how are you?'." },
          { target: 'Aap kaise hain?', native: 'How are you?', correct: false, feedback: "They already asked you — now answer with 'Main theek hoon'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Two strangers. One exchange. That's how train rides become real conversations in India.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are you? (formal — universal safety net)', correct: ['Aap kaise hain?', 'Aap kaise hain', 'aap kaise hain?', 'aap kaise hain'] },
      { prompt: 'I am well, and you? (formal)', correct: ['Main theek hoon, aap?', 'Main theek hoon aap?', 'main theek hoon, aap?', 'main theek hoon aap?', 'Main theek hoon aap'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Namaste, aap kaise hain?' with someone you don't know well today — a colleague, shopkeeper, anyone. Notice how it changes the air in the room.",
    rwenSignoff: "You now have a phrase for every moment. Phir milenge.",
  },

  phase8: {
    scenario: "It's the Monday morning Delhi metro at 9am. You squeeze into a packed compartment and end up standing next to a woman around 45 wearing professional attire — clearly headed to work. You catch her eye briefly. The compartment is full but not unfriendly. You don't know whether the right register is formal or casual; she's a stranger.",
    rwenRole: "Sharma-ji — fellow commuter, ~45, mid-level government officer; warm enough but doesn't have time for over-familiar tone from strangers.",
    successCriteria: "User uses 'Namaste, aap kaise hain?' (the universal polite opener — NOT a time-locked form like 'Suprabhat' or casual 'Kya haal hai' since she's a stranger), replies with 'Main theek hoon, aap?' rather than dropping the mirror, and stays in the formal aap/hain register throughout rather than slipping to over-familiar tum/ho.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
