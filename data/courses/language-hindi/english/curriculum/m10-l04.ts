import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-shukriya',
  module: 10,
  lesson: 4,
  title: 'Shukriya & Aabhaar — Gratitude',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hindi has more ways to say 'thank you' than English has, and Indians use them more sparingly than Westerners do — because between people who care for each other, gratitude is felt, not announced. Today: how to say it when it really matters.",
    culturalNote: "Among close family in India, धन्यवाद (dhanyavaad) and शुक्रिया (shukriya) can sound oddly formal — like thanking your own mother for cooking. The warmer expressions are 'aapka bahut shukriya' (with weight) for outsiders, 'mera saubhaagya hai' (it is my good fortune) for elders, and a quiet head-nod or hand-on-heart for family. Pick the one that fits the relationship.",
  },

  chunks: [
    {
      id: 'shukriya',
      target: 'शुक्रिया — Shukriya',
      native: 'Thank you (warm, everyday)',
      literal: 'Shukriya (Urdu-origin, common in Hindi)',
      emoji: '🙏',
      phonetic: 'shu-KRI-ya',
      audioRef: null,
    },
    {
      id: 'main_aabhari_hoon',
      target: 'मैं आभारी हूँ — Main aabhaari hoon',
      native: 'I am grateful',
      literal: 'I grateful am',
      emoji: '🌟',
      phonetic: 'mayn aa-BHAA-ree hoon',
      audioRef: null,
    },
    {
      id: 'aapka_bahut_shukriya',
      target: 'आपका बहुत शुक्रिया — Aapka bahut shukriya',
      native: 'Thank you so much (heartfelt, formal)',
      literal: 'Your much thanks',
      emoji: '💐',
      phonetic: 'AAP-ka ba-HUT shu-KRI-ya',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Calibrating gratitude — three registers',
    explanation: "Hindi gratitude scales by relationship: shukriya (a friend gave you tea), aapka bahut shukriya (a stranger went out of their way), main aabhaari hoon (a teacher, an elder, someone who changed something for you). Match the words to the weight of the moment — over-thanking a parent feels colder than a quiet smile.",
    examples: [
      { target: 'Shukriya — शुक्रिया', native: 'Thanks (warm, casual)' },
      { target: 'Aapka bahut shukriya — आपका बहुत शुक्रिया', native: 'Thank you so much (formal)' },
      { target: 'Main aapka aabhaari hoon — मैं आपका आभारी हूँ', native: 'I am indebted to you (deep gratitude)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to the right depth of thanks',
      pairs: [
        { left: 'Shukriya', right: 'Thanks (everyday warm)' },
        { left: 'Aapka bahut shukriya', right: 'Thank you so much (formal)' },
        { left: 'Main aabhaari hoon', right: 'I am grateful (deep)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "A respected teacher just helped you. What's the right register?",
      sentence: 'Main aapka _____ hoon, sir.',
      options: ['aabhaari', 'thaka', 'udaas'],
      correct: 'aabhaari',
      context: 'I am grateful to you, sir.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Thank you so much',
      correct: ['Aapka bahut shukriya', 'aapka bahut shukriya'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your auto-driver carries your bag up three flights of stairs in the rain. Best response?",
      question: 'Right thanks for above-and-beyond help:',
      options: [
        { text: 'Aapka bahut shukriya, bhaiya', correct: true },
        { text: 'Theek hai', correct: false },
        { text: 'Main aabhaari hoon', correct: false },
      ],
      explanation: "'Aapka bahut shukriya, bhaiya' (thank you so much, brother) is warm-formal — the perfect register for a stranger who went out of their way. 'Main aabhaari hoon' would be too heavy; 'theek hai' is dismissive.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Thank you so much for your help'",
      words: ['Aapki', 'madad', 'ke', 'liye', 'bahut', 'shukriya.'],
      correct: ['Aapki', 'madad', 'ke', 'liye', 'bahut', 'shukriya.'],
      translation: 'Thank you so much for your help',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I am grateful (formal, deep)',
      correct: ['Main aabhaari hoon', 'main aabhaari hoon', 'Main aapka aabhaari hoon', 'main aapka aabhaari hoon'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen has helped you through ten modules of Hindi. You finally have the words to say it back.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Aap kafi door aaye hain. Aapko kaisa lag raha hai?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Rwen, main aapka aabhaari hoon. Aapki madad ke liye bahut shukriya. Aapne meri Hindi badal di.', native: "Rwen, I am grateful to you. Thank you so much for your help. You changed my Hindi.", correct: true, feedback: "All three registers in one breath — aabhaari (deep), shukriya (warm), and a specific 'what changed'. That's how Hindi gratitude lands." },
          { target: 'Shukriya', native: 'Thanks', correct: false, feedback: "For ten modules of help, go deeper — 'Main aapka aabhaari hoon. Aapki madad ke liye bahut shukriya.'" },
          { target: 'Theek hai', native: "It's fine", correct: false, feedback: "Receive the moment — 'Rwen, main aapka aabhaari hoon. Aapne meri Hindi badal di.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mera saubhaagya — it was my good fortune to walk with you. Hindi gratitude moves both ways.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Thank you so much (formal warm)', correct: ['Aapka bahut shukriya', 'aapka bahut shukriya'] },
      { prompt: 'I am grateful', correct: ['Main aabhaari hoon', 'main aabhaari hoon', 'Main aapka aabhaari hoon', 'main aapka aabhaari hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick someone whose help you've taken for granted. Send them a one-line message in Hindi: 'Aapka bahut shukriya. Main aabhaari hoon.' Watch what shifts.",
    rwenSignoff: "Kritagyata hriday ki bhasha hai — gratitude is the language of the heart.",
  },

  phase8: {
    scenario: "Saturday morning at your Hindi tutor Meera-ji's home in Pune. Today is your last lesson — you're moving cities. She has set out chai and a small box of mithai and is waiting for you to begin. You have three minutes to say what these months meant, in Hindi, properly.",
    rwenRole: "Meera-ji — your tutor, ~60, scholarly and warm; she will quietly tear up if you choose 'main aapka aabhaari hoon' over 'shukriya' — register here is everything.",
    successCriteria: "User chooses the deeper register 'main aapka aabhaari hoon' (NOT just 'shukriya' which would feel light), names ONE specific thing she changed (e.g. 'Aapne mujhe Hindi sochna sikhaya'), and closes with 'aapka bahut shukriya' — three layers, not one.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
