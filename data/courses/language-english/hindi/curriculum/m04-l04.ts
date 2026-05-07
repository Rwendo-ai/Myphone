import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-plurals-regular',
  module: 4,
  lesson: 4,
  title: 'Plurals — adding -s',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English mein plural banana zyada aasan hai. Cat → cats. Day → days. Bus end mein '-s' joro. Bas. Hindi se simpler — koi gender ya case ka tension nahi.",
    culturalNote: "Hindi mein plural banana confusing ho sakta hai — ladka → ladke (masculine), kitaab → kitaabein (feminine), aadmi → aadmi (no change). Gender aur ending dono dekhna padta hai. English mein lagbhag har shabd ke piche '-s' lagaa do — kaam khatam. Yeh ek area hai jahan English Hindi se aasaan hai. Bas thodi spelling rules hain (-es, -ies) jo sikhna padega.",
  },

  chunks: [
    {
      id: 'cats',
      target: 'Cat → Cats',
      native: 'Billi → Billiyaan',
      literal: 'add -s for plural',
      emoji: '🐱',
      phonetic: 'kat → kats',
      audioRef: null,
    },
    {
      id: 'days',
      target: 'Day → Days',
      native: 'Din → Din (kayi)',
      literal: 'add -s',
      emoji: '📅',
      phonetic: 'day → days',
      audioRef: null,
    },
    {
      id: 'friends',
      target: 'Friend → Friends',
      native: 'Dost → Dost (kayi)',
      literal: 'add -s',
      emoji: '👥',
      phonetic: 'frend → frends',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Plurals: add -s (or -es)",
    explanation: "Zyaadatar shabdon mein '-s' lagao: book → books, cat → cats. Agar shabd -s, -x, -ch, -sh par khatam ho, to '-es' lagao: bus → buses, box → boxes. Agar -y consonant ke baad ho, to -y ko -ies banao: baby → babies, story → stories.",
    examples: [
      { target: 'One book, two books',     native: 'Ek kitaab, do kitaabein' },
      { target: 'One bus, three buses',    native: 'Ek bus, teen busein' },
      { target: 'One baby, two babies',    native: 'Ek bachha, do bachhe' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Plural banaiye',
      sentence: 'I have two _____ (cat).',
      options: ['cats', 'cates', 'cat'],
      correct: 'cats',
      context: 'Cat -> cats (sirf -s).',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Teen kitaabein',
      correct: ['Three books', 'three books'],
    },
    {
      type: 'fill_blank',
      instruction: 'Plural — dhyan dijiye',
      sentence: 'There are five _____ (bus) in the parking lot.',
      options: ['buses', 'buss', 'busies'],
      correct: 'buses',
      context: 'Bus end mein -s hai, isliye -es: buses.',
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "I bought four apples"',
      words: ['apples.', 'four', 'I', 'bought'],
      correct: ['I', 'bought', 'four', 'apples.'],
      translation: 'Maine chaar seb khareede',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sahi plural kaunsa hai?',
      question: 'One baby, two _____',
      options: [
        { text: 'babies', correct: true },
        { text: 'babys', correct: false },
        { text: 'baby', correct: false },
      ],
      explanation: 'Consonant + y → -ies: baby → babies. Yeh ek important spelling rule hai.',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Paanch din',
      correct: ['Five days', 'five days'],
    },
  ],

  rwenDialogue: {
    intro: "Aap ek IT company mein hain aur boss ne aapko bola hai inventory order karne. Aapko quantity ke saath plurals sahi karna hai — varna order galat aayega.",
    lines: [
      {
        speaker: 'npc',
        target: "What office supplies do we need to order this week?",
        native: 'Is hafte humein kya office supplies order karne hain?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two laptops, three printers, and four chairs, sir.", native: 'Do laptops, teen printers, aur chaar chairs, sir.', correct: true, feedback: "Bahut accha — laptops, printers, chairs — sab plural -s ke saath sahi." },
          { target: "Two laptop, three printer, and four chair, sir.", native: 'Do laptop, teen printer, aur chaar chair, sir.', correct: false, feedback: "1 se zyada quantity ke saath -s lagana zaroori hai — laptops, printers, chairs. Office order yeh galti accept nahi karega." },
          { target: "Two laptops, three printer, and four chairs, sir.", native: '...', correct: false, feedback: "Mostly sahi — par 'printer' ko bhi 'printers' karo. Sab plurals consistent rakho." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. English plurals zyaadatar -s par chalte hain. Quantity 1 se zyada ho — to -s lagao.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe — plural banaiye.',
    prompts: [
      { prompt: 'Plural of "day"', correct: ['Days', 'days'] },
      { prompt: 'Plural of "friend"', correct: ['Friends', 'friends'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Apne aas-paas dekho. 5 cheezon ki quantity ke saath plural boliye English mein: 'three chairs', 'two phones', 'four books'. Dhyan rakho '-s' kaise lag raha hai.",
    rwenSignoff: "Bas '-s' — aur English plural ban gaya. Hindi se aasaan, sach mein.",
  },

  phase8: {
    scenario: "Aap IT firm mein procurement task kar rahe hain — different items aur unki quantities order karna hai. Plurals sahi se use karne hain.",
    rwenRole: "Office admin senior who is checking your purchase request — wants quantities and plurals correct before approving.",
    successCriteria: "User correctly forms at least six regular plurals with -s/-es ('laptops', 'printers', 'cables', 'boxes', 'chairs', 'pens') in the order conversation, matching quantities.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
