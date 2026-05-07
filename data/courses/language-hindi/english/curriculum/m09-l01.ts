import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-raasta',
  module: 9,
  lesson: 1,
  title: 'Raasta — Asking the Way',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In India, asking for directions is a conversation, not a transaction. The shopkeeper, the chaiwala, the auto driver leaning on his rickshaw — they will all happily wave their arms and walk you halfway there. The magic word is 'raasta' — the way, the road, the path.",
    culturalNote: "Indians give directions by landmarks, never by street names — 'paani-puri stall ke baad, left' (after the paani-puri stall, left). Google Maps is useful, but a stranger pointing with a chai cup in his hand is more accurate. Ask in Hindi and you skip the tourist tax.",
  },

  chunks: [
    {
      id: 'raasta',
      target: 'रास्ता',
      native: 'Way / Road / Path',
      literal: 'Raasta — the route',
      emoji: '🛣️',
      phonetic: 'RAAS-taa',
      audioRef: null,
    },
    {
      id: 'kahan_hai',
      target: '... कहाँ है?',
      native: 'Where is ...?',
      literal: 'Kahan hai — where is?',
      emoji: '📍',
      phonetic: 'kuh-HAAN hai',
      audioRef: null,
    },
    {
      id: 'raasta_kya_hai',
      target: '... का रास्ता क्या है?',
      native: "What's the way to ...?",
      literal: 'Ka raasta kya hai — of the way what is?',
      emoji: '🗺️',
      phonetic: 'kaa RAAS-taa kyaa hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Place] kahan hai? — Where is [place]?',
    explanation: "Hindi puts the place FIRST, then 'kahan hai?' (where is?). Station kahan hai? (Where's the station?). Bank kahan hai? (Where's the bank?). It's the opposite of English word order — the destination leads, the question follows.",
    examples: [
      { target: 'Station kahan hai?', native: "Where's the station?" },
      { target: 'Metro kahan hai?', native: "Where's the Metro?" },
      { target: 'Connaught Place ka raasta kya hai?', native: "What's the way to Connaught Place?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi phrase to its meaning',
      pairs: [
        { left: 'Raasta', right: 'Way / Road' },
        { left: 'Kahan hai?', right: 'Where is?' },
        { left: 'Ka raasta kya hai?', right: "What's the way to?" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask where the station is',
      sentence: 'Station _____ hai?',
      options: ['kahan', 'kya', 'kaun'],
      correct: 'kahan',
      context: "You're lost outside a Mumbai railway station and need to ask a chaiwala.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Where is the Metro?',
      correct: ['Metro kahan hai?', 'metro kahan hai?', 'Metro kahan hai', 'metro kahan hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at Mumbai CST and need to find Marine Drive. What do you ask?",
      question: 'Best way to ask the way:',
      options: [
        { text: 'Marine Drive ka raasta kya hai?', correct: true },
        { text: 'Main Marine Drive jaata hoon', correct: false },
        { text: 'Marine Drive accha hai', correct: false },
      ],
      explanation: "'Ka raasta kya hai?' is the precise 'what's the way to?' question. Asking destination + raasta is more local than just 'kahan hai'.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'What's the way to the station?'",
      words: ['Station', 'ka', 'raasta', 'kya', 'hai?'],
      correct: ['Station', 'ka', 'raasta', 'kya', 'hai?'],
      translation: "What's the way to the station?",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Way / Road',
      correct: ['Raasta', 'raasta'],
    },
  ],

  rwenDialogue: {
    intro: "You're outside Bandra station in Mumbai. You need to find a famous café three streets away. A chaiwala is pouring tea on the corner — ask him.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, café ka raasta kya hai?', native: "Brother, what's the way to the café?", correct: true, feedback: "Perfect — 'bhaiya' (brother) is the right respectful address for a stranger his age. He's already pointing." },
          { target: 'Café kahan?', native: 'Café where?', correct: false, feedback: "Too clipped. Use 'Café kahan hai?' or even better, 'Café ka raasta kya hai?'" },
          { target: 'Main café jaata hoon', native: 'I go to the café', correct: false, feedback: "That's a statement, not a question. Ask: 'Café ka raasta kya hai?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'सीधे जाओ, फिर दाएं — पाँच मिनट में।',
        native: 'Go straight, then right — five minutes.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Seedhe (straight), daayen (right), paanch minute (five minutes). You'll learn each of those this module. Today you opened the door.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where is the station?', correct: ['Station kahan hai?', 'Station kahan hai', 'station kahan hai?', 'station kahan hai'] },
      { prompt: "What's the way to ...?", correct: ['ka raasta kya hai?', 'Ka raasta kya hai?', 'ka raasta kya hai', 'Ka raasta kya hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask one person for directions today using 'kahan hai?' — even quietly to yourself before doing it in English. The Hindi question first. Then notice how easy it is.",
    rwenSignoff: "Every raasta has a Hindi name. Find yours. Phir milenge.",
  },

  phase8: {
    scenario: "You've stepped out of Mumbai's Churchgate station carrying a tourist map and immediately lost — vendors, taxis, and the mid-day sun on every side. A chaiwala on the corner is pouring tea into kulhads. He's the right person to ask in Hindi for the way to Marine Drive — but only if you open with respect and use the raasta pattern, not English.",
    rwenRole: "Ramesh bhaiya — Churchgate station chaiwala, late 40s, has poured tea on this corner for fifteen years and knows every shortcut to Marine Drive, Nariman Point, and Colaba; will gladly walk you halfway there if you greet him in Hindi first.",
    successCriteria: "User opens with 'Bhaiya' (brother) before launching into the question, uses the full 'Marine Drive ka raasta kya hai?' form (NOT bare 'kahan?'), and confirms back the directions ('seedhe, phir daayen') instead of just nodding and walking off the wrong way.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
