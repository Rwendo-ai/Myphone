import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-khushi',
  module: 10,
  lesson: 1,
  title: 'Khushi — Happiness & Joy',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Module 10 — emotions. Hindi may be the most emotionally generous language you'll meet. Bollywood didn't invent that range; it inherited it. Today we start with खुशी (khushi) — happiness — the easiest one to share and the hardest one to fake.",
    culturalNote: "Hindi has at least four common words for 'happy' (खुश/khush, प्रसन्न/prasann, आनंदित/anandit, मगन/magan), each with a different temperature. खुश is everyday warmth — what you say at a wedding, a reunion, a small win. Said with a smile and slight head-tilt, it sounds like home.",
  },

  chunks: [
    {
      id: 'main_khush_hoon',
      target: 'मैं खुश हूँ — Main khush hoon',
      native: 'I am happy',
      literal: 'I happy am',
      emoji: '😊',
      phonetic: 'mayn KHUSH hoon',
      audioRef: null,
    },
    {
      id: 'khushi',
      target: 'खुशी — Khushi',
      native: 'Happiness / Joy',
      literal: 'Khushi (the noun for happiness)',
      emoji: '✨',
      phonetic: 'khu-SHEE',
      audioRef: null,
    },
    {
      id: 'aapse_milkar_khushi',
      target: 'आपसे मिलकर खुशी हुई — Aapse milkar khushi hui',
      native: 'I am happy to meet you',
      literal: 'You-from meeting happiness happened',
      emoji: '🤝',
      phonetic: 'AAP-say mil-KAR khu-SHEE hu-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Main + adjective + hoon — I am [feeling]',
    explanation: "The simplest emotion frame in Hindi: मैं (main, I) + adjective + हूँ (hoon, am). Main khush hoon (I am happy). Main udaas hoon (I am sad). Main thaka hua hoon (I am tired). Memorise the frame and you can plug in any feeling.",
    examples: [
      { target: 'Main bahut khush hoon — मैं बहुत खुश हूँ', native: 'I am very happy' },
      { target: 'Mujhe khushi hai — मुझे खुशी है', native: 'I have happiness / I feel joy' },
      { target: 'Aapse milkar khushi hui — आपसे मिलकर खुशी हुई', native: 'Happy to meet you (formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi joy phrase to its meaning',
      pairs: [
        { left: 'Main khush hoon', right: 'I am happy' },
        { left: 'Khushi', right: 'Happiness / Joy' },
        { left: 'Aapse milkar khushi hui', right: 'Happy to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Express great happiness',
      sentence: 'Main _____ khush hoon.',
      options: ['bahut', 'thoda', 'nahin'],
      correct: 'bahut',
      context: 'I am very happy.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I am very happy',
      correct: ['Main bahut khush hoon', 'main bahut khush hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: "You meet your colleague's mother for the first time. What do you say?",
      question: 'Polite reply at a first meeting:',
      options: [
        { text: 'Aapse milkar khushi hui', correct: true },
        { text: 'Main khush hoon', correct: false },
        { text: 'Khushi', correct: false },
      ],
      explanation: "'Aapse milkar khushi hui' (happy to meet you) is the standard formal-warm phrase for a first meeting. The other two are technically correct but feel incomplete or blunt.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I have so much happiness today'",
      words: ['Mujhe', 'aaj', 'bahut', 'khushi', 'hai.'],
      correct: ['Mujhe', 'aaj', 'bahut', 'khushi', 'hai.'],
      translation: 'I have so much happiness today',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Happy to meet you (formal)',
      correct: ['Aapse milkar khushi hui', 'aapse milkar khushi hui'],
    },
  ],

  rwenDialogue: {
    intro: "You've reached Module 10 of Rwendo. Rwen wants to hear you say it — in Hindi.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Aap kaise hain? Aap khush hain Rwendo se?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main bahut khush hoon. Mujhe Hindi seekhne mein khushi hai. Aapse milkar khushi hui, Rwen.', native: "I am very happy. I have joy in learning Hindi. Happy to have met you, Rwen.", correct: true, feedback: "Three layers — feeling, learning, friendship. That's a complete emotional answer in Hindi." },
          { target: 'Main khush hoon', native: 'I am happy', correct: false, feedback: "Add weight — 'Main bahut khush hoon. Mujhe Hindi seekhne mein khushi hai.' Show the depth." },
          { target: 'Theek hoon', native: "I'm fine", correct: false, feedback: "Be warmer — 'Main bahut khush hoon, Rwen. Aapse milkar khushi hui.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Khushi baant ne se badhti hai — happiness grows when shared. Module 10 begins.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am very happy', correct: ['Main bahut khush hoon', 'main bahut khush hoon'] },
      { prompt: 'Happiness / Joy', correct: ['Khushi', 'khushi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name three things that gave you khushi today. Say each as 'Mujhe ___ se khushi hai' (I have happiness from ___). Let Hindi hold your joy.",
    rwenSignoff: "Khushi baant ne se badhti hai. Phir milenge.",
  },

  phase8: {
    scenario: "Friday evening at a small office party in Gurgaon. Your colleague Aarav has just been promoted and is moving across the room with a plate of samosas, grinning. He stops in front of you and waits — he wants to hear it in Hindi, not English.",
    rwenRole: "Aarav — colleague, ~32, warm and observant, will hear the difference between a polite 'khush hoon' and a real one with weight behind it.",
    successCriteria: "User uses 'bahut khush' (NOT just 'khush'), lands the noun 'khushi' once for emphasis, and ideally chains 'Aapke liye bahut khushi hui' or similar so it sounds like a real congratulation, not a textbook line.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
