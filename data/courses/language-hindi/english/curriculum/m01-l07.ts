import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-kahan-se-hain',
  module: 1,
  lesson: 7,
  title: 'Aap Kahan Se Hain? — Where Are You From?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In India, 'where are you from?' isn't just curiosity — it's the second-most-common question after your name. Your state, your city, your village reveals language, food, festivals, even cricket loyalty. Indians can talk for an hour about home places. Let's give you the keys.",
    culturalNote: "Indians often ask 'Aap kahan se hain?' (origin) AND 'Aap kahaan rehte hain?' (where you currently live) — they're different. A Mumbaikar working in Bangalore is FROM Mumbai but LIVES in Bangalore. Asking both is normal and warm, not nosy.",
  },

  chunks: [
    {
      id: 'kahan_se_hain',
      target: 'आप कहाँ से हैं?',
      native: 'Where are you from? (formal)',
      literal: 'Aap kahaan se hain — You(formal) where from are?',
      emoji: '🗺️',
      phonetic: 'AAP kah-HAAN SAY HAIN',
      audioRef: null,
    },
    {
      id: 'main_se_hoon',
      target: 'मैं ... से हूँ',
      native: 'I am from ...',
      literal: 'Main ... se hoon — I (place) from am',
      emoji: '📍',
      phonetic: 'MAIN ... SAY HOON',
      audioRef: null,
    },
    {
      id: 'main_rehta_hoon',
      target: 'मैं ... में रहता हूँ',
      native: 'I live in ... (male speaker)',
      literal: 'Main ... mein rehta hoon — I (place) in stay am',
      emoji: '🏡',
      phonetic: 'MAIN ... MEIN REH-taa HOON',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Se vs Mein — From vs In',
    explanation: "Two postpositions you'll use constantly. 'Se' (से) means 'from' — origin or starting point. 'Mein' (में) means 'in' — current location. Hindi puts them AFTER the noun, opposite to English. 'Mumbai se' = 'from Mumbai'. 'Mumbai mein' = 'in Mumbai'.",
    examples: [
      { target: 'Main London se hoon', native: 'I am from London' },
      { target: 'Main Delhi mein rehta hoon', native: 'I live in Delhi (male)' },
      { target: 'Aap kahaan se hain?', native: 'Where are you from? (formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Aap kahaan se hain?', right: 'Where are you from? (formal)' },
        { left: 'Main ... se hoon', right: 'I am from ...' },
        { left: 'Main ... mein rehta hoon', right: 'I live in ... (male)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence about where you are FROM',
      sentence: 'Main London _____ hoon.',
      options: ['se', 'mein', 'ka'],
      correct: 'se',
      context: "Tell someone you're from London (origin).",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Where are you from? (formal)',
      correct: ['Aap kahaan se hain?', 'Aap kahaan se hain', 'aap kahaan se hain?', 'aap kahaan se hain', 'Aap kahan se hain?', 'aap kahan se hain?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am from India"',
      words: ['hoon', 'India', 'Main', 'se'],
      correct: ['Main', 'India', 'se', 'hoon'],
      translation: 'I am from India',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I live in ... (male speaker — start of phrase)',
      correct: ['Main ... mein rehta hoon', 'main ... mein rehta hoon', 'Main mein rehta hoon', 'main mein rehta hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone says "Main Mumbai se hoon". What does this tell you?',
      question: 'What does this sentence mean?',
      options: [
        { text: 'I am from Mumbai (origin)', correct: true },
        { text: 'I live in Mumbai (current home)', correct: false },
        { text: 'I am going to Mumbai', correct: false },
      ],
      explanation: "'Main ... se hoon' means 'I am from ...' — origin. 'Main ... mein rehta hoon' would mean 'I live in ...' — current home. The 'se' vs 'mein' makes the difference.",
    },
  ],

  rwenDialogue: {
    intro: "Rwen is curious about you. A real conversation is starting.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Aap kahaan se hain?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main ... se hoon', native: 'I am from ... (your country)', correct: true, feedback: "Perfect — you shared your origin. That's how connection starts in Hindi." },
          { target: 'Main ... mein rehta hoon', native: 'I live in ...', correct: false, feedback: "Close — but they asked where you're FROM, not where you live now. Use 'Main ... se hoon'." },
          { target: 'Mera naam ... hai', native: 'My name is ...', correct: false, feedback: "That's your name, not your origin. They asked 'kahaan se hain?' — where you're from." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Wah! Main India se hoon — apne desh se bahut pyaar hai.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Origin shared, connection made. Now we have a real conversation going.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where are you from? (formal)', correct: ['Aap kahaan se hain?', 'Aap kahaan se hain', 'aap kahaan se hain?', 'aap kahaan se hain', 'Aap kahan se hain?', 'aap kahan se hain?'] },
      { prompt: 'I am from ... (start of phrase)', correct: ['Main se hoon', 'main se hoon', 'Main ... se hoon', 'main ... se hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell someone where you're from using Hindi today — 'Main [your country/city] se hoon'. Even silently in your head counts.",
    rwenSignoff: "Your origin is your story. Phir milenge.",
  },

  phase8: {
    scenario: "You're on a long-distance train from Delhi to Mumbai — Rajdhani Express, several hours into the journey. The man across from you in the 2AC compartment offers you tea from his thermos and starts chatting. He's clearly from somewhere south, with a soft Tamil accent in his Hindi, and he's curious where you're from. The conversation is friendly but you're meeting in motion.",
    rwenRole: "Krishnan-sir — fellow passenger, ~50, retired engineer travelling to visit his daughter; he loves comparing home places and tells stories about every state he's worked in.",
    successCriteria: "User answers 'Aap kahaan se hain?' with the correct 'Main ... se hoon' construction (NOT mixing it up with 'Main ... mein rehta hoon' which means current residence), uses the postposition 'se' correctly AFTER the place name, and asks back 'Aap kahaan se hain?' to keep the exchange going rather than letting it be one-sided.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
