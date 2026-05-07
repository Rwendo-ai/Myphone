import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-no-article',
  module: 4,
  lesson: 3,
  title: 'No article — Plural & abstract',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Kabhi kabhi 'a/an/the' bilkul nahi lagana hota. Jab aap general baat kar rahe ho — saari cheezein, ya abstract concepts (love, time, music) — to article chhod do.",
    culturalNote: "Yeh Hindi-speakers ke liye actually aasan hai! Hindi mein hum kabhi article use nahi karte. Lekin yahan trick yeh hai: Module 4 ke pehle do lessons ne aapko 'a/an/the' lagana sikhaya. Ab aapko sikhna hai kab nahi lagana. 'Pyaar' = 'Love' (na ki 'the love'). 'Bachhe' general sense mein = 'Children' (na ki 'the children'). Yeh balance important hai — har shabd ke aage article nahi aata.",
  },

  chunks: [
    {
      id: 'books',
      target: 'Books',
      native: 'Kitaabein (sab/general)',
      literal: 'books in general — no article',
      emoji: '📚',
      phonetic: 'BUKS',
      audioRef: null,
    },
    {
      id: 'love',
      target: 'Love',
      native: 'Pyaar',
      literal: 'love (abstract — no article)',
      emoji: '❤️',
      phonetic: 'LUHV',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Bachhe (general)',
      literal: 'children in general — no article',
      emoji: '👶',
      phonetic: 'CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Zero article — 'a/an/the' chhod do",
    explanation: "Article nahi chahiye jab: (1) general plural — 'Cats are clever' (saari billiyaan); (2) abstract noun — 'Love is patient', 'Music makes me happy'; (3) kuch fixed expressions — 'I go to school', 'I go to work', 'I go to bed'.",
    examples: [
      { target: 'Children laugh.',  native: 'Bachhe haste hain. (saare bachhe general)' },
      { target: 'Love is patient.', native: 'Pyaar sabr-saaz hota hai.' },
      { target: 'I go to work.',    native: 'Main kaam par jaata hoon. (na ki "the work")' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "'a', 'the', ya 'no article' (—) chuniye",
      sentence: '_____ love is the most powerful feeling.',
      options: ['—', 'The', 'A'],
      correct: '—',
      context: '"Love" yahan general/abstract hai — koi article nahi.',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Bachhe haste hain (saare)',
      correct: ['Children laugh', 'Children laugh.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sahi chuniye',
      sentence: 'I drink _____ water every morning.',
      options: ['—', 'a', 'an'],
      correct: '—',
      context: '"Water" uncountable hai — article nahi lagega.',
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "Music makes me happy"',
      words: ['happy.', 'me', 'Music', 'makes'],
      correct: ['Music', 'makes', 'me', 'happy.'],
      translation: 'Sangeet mujhe khush karta hai',
    },
    {
      type: 'multiple_choice',
      instruction: 'Article ke bina sahi vakya kaunsa hai?',
      question: 'Sahi vakya chuniye',
      options: [
        { text: 'Dogs bark at strangers.', correct: true },
        { text: 'The dogs bark at the strangers.', correct: false },
        { text: 'A dogs bark at a strangers.', correct: false },
      ],
      explanation: 'Saari kutton ki baat ho rahi hai (general) — koi article nahi. "Dogs bark" sahi hai.',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Pyaar sabr-saaz hota hai',
      correct: ['Love is patient', 'Love is patient.'],
    },
  ],

  rwenDialogue: {
    intro: "Aap ek BPO mein lunch break par hain. Ek senior aapse poochh raha hai aapki life ke baare mein — kya important hai. Yahan aap general/abstract concepts ki baat karenge.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me — what matters most to you?",
        native: 'Batayein — aapke liye sabse zyada kya important hai?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Family and love matter most. Children are the future.', native: 'Parivaar aur pyaar sabse important hai. Bachhe hi future hain.', correct: true, feedback: "Bahut accha — 'family', 'love', 'children' ke aage koi article nahi (general). Lekin 'the future' — kyunki future ek hi hai." },
          { target: 'The family and the love matter most. The children are the future.', native: '...', correct: false, feedback: "General/abstract concepts ke aage 'the' nahi lagta. 'Family', 'love', 'children' yahan general hain." },
          { target: 'A family and a love matter most.', native: '...', correct: false, feedback: "'Love' aur 'family' general/abstract hain — 'a' nahi lagega." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash — aapne general (no article) aur specific (the) ka farak samajh liya.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe likhiye.',
    prompts: [
      { prompt: 'Children (English mein, no article)', correct: ['Children', 'children'] },
      { prompt: 'Love (English mein, no article)', correct: ['Love', 'love'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Aapki life mein jo important hai, uske teen vakya boliye English mein — bina 'the' ya 'a' lagaaye: 'Love is good. Family is everything. Music heals.'",
    rwenSignoff: "Article ke bina bhi English chalti hai. General baaton ke liye yahi rasta hai.",
  },

  phase8: {
    scenario: "Aap ek BPO colleague se apni life ki important cheezein discuss kar rahe hain — pyaar, parivaar, future, ummeed. Yeh sab abstract/general concepts hain.",
    rwenRole: "Friendly senior colleague who wants to know what motivates you. Asks open questions about life, family, dreams.",
    successCriteria: "User produces at least three sentences using zero-article correctly with abstract/general nouns ('Love is...', 'Children are...', 'Music makes...', 'Family means...') without inserting unnecessary 'the' or 'a'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
