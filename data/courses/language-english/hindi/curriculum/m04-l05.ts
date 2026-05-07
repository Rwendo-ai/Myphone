import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-plurals-irregular',
  module: 4,
  lesson: 5,
  title: 'Irregular plurals — children, men',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Kuch shabd '-s' rule nahi maante. Child → children. Man → men. Foot → feet. Inhe yaad karna padta hai — koi rule nahi.",
    culturalNote: "Hindi-speakers yeh galti aksar karte hain: 'childrens' likh dete hain (already plural hai!) ya 'mans' bol dete hain. BPO calls aur emails mein yeh sabse common mistake hai. 'Children' itself plural hai — uske aage aur '-s' nahi. 'People' itself plural hai — 'peoples' galat hai (jab tak aap nationalities ki baat na karein). Yaad rakhne ke liye thoda kaam karna padega — ek baar yaad ho gaya, hamesha rahega.",
  },

  chunks: [
    {
      id: 'children',
      target: 'Child → Children',
      native: 'Bachha → Bachhe',
      literal: 'irregular — fully changes',
      emoji: '👶',
      phonetic: 'chyld → CHIL-dren',
      audioRef: null,
    },
    {
      id: 'men',
      target: 'Man → Men',
      native: 'Aadmi → Aadmi (kayi)',
      literal: 'irregular — vowel change',
      emoji: '👨',
      phonetic: 'man → men',
      audioRef: null,
    },
    {
      id: 'people',
      target: 'Person → People',
      native: 'Vyakti → Log',
      literal: 'irregular — completely different word',
      emoji: '👥',
      phonetic: 'PUR-son → PEE-pul',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Irregular plurals — yaad karna padega",
    explanation: "Yeh shabd '-s' rule nahi maante. Common patterns: vowel change (man→men, foot→feet, tooth→teeth), -en ending (child→children, ox→oxen), ya bilkul alag shabd (person→people, mouse→mice). Inhe memorize karna hai.",
    examples: [
      { target: 'Man → Men',     native: 'Aadmi → Aadmi (kayi)' },
      { target: 'Woman → Women', native: 'Aurat → Auratein' },
      { target: 'Foot → Feet',   native: 'Pair → Pair (dono)' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Plural banaiye — irregular',
      sentence: 'I have two _____ (child).',
      options: ['children', 'childs', 'childrens'],
      correct: 'children',
      context: 'Child → Children. "Childrens" common Hinglish galti hai — already plural hai.',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Teen log',
      correct: ['Three people', 'three people'],
    },
    {
      type: 'fill_blank',
      instruction: 'Plural — dhyan dijiye',
      sentence: 'My _____ (foot) hurt after walking all day.',
      options: ['feet', 'foots', 'feets'],
      correct: 'feet',
      context: 'Foot → Feet (vowel change).',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Do aadmi',
      correct: ['Two men', 'two men'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sahi kaunsa hai?',
      question: 'How many _____ are in your team?',
      options: [
        { text: 'women', correct: true },
        { text: 'womans', correct: false },
        { text: 'womens', correct: false },
      ],
      explanation: 'Woman → Women (o → e). Bilkul "womens" mat boliye — yeh BPO mein bahut common galti hai.',
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "I have three children"',
      words: ['children.', 'three', 'I', 'have'],
      correct: ['I', 'have', 'three', 'children.'],
      translation: 'Mere teen bachhe hain',
    },
  ],

  rwenDialogue: {
    intro: "Aap apne IT manager se mil rahe hain — wo team-strength ki baat kar raha hai. Irregular plurals yahan miss hue to galat lagega.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your project team.",
        native: 'Apni project team ke baare mein batao.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "We have ten people on the project — six men and four women. We also support two children's charities.", native: 'Project mein das log hain — chhe aadmi aur chaar auratein. Hum do bachhon ki charities ko bhi support karte hain.', correct: true, feedback: "Bahut accha — 'people', 'men', 'women', 'children's' — saare irregular plurals sahi." },
          { target: "We have ten persons — six mans and four womans. We support two childrens charities.", native: '...', correct: false, feedback: "Bohot saari Hinglish galtiyaan: 'persons' (use 'people'), 'mans' (use 'men'), 'womans' (use 'women'), 'childrens' (use 'children'). Sab irregular hain." },
          { target: "We have ten people — six man and four woman. We support two child charities.", native: '...', correct: false, feedback: "Quantity 1 se zyada hai — 'six men', 'four women', 'children's charities'. Singular form yahan kaam nahi karta." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. Irregular plurals — children, men, women, people, feet — yeh paanch sabse important hain. Yaad karo, hamesha kaam aayenge.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe — plural banaiye.',
    prompts: [
      { prompt: 'Plural of "child"', correct: ['Children', 'children'] },
      { prompt: 'Plural of "person"', correct: ['People', 'people'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Aaj paanch irregular plurals yaad karo: child→children, man→men, woman→women, person→people, foot→feet. Teen vakya banaao inka use karke aur mirror mein boliye.",
    rwenSignoff: "Yeh paanch yaad — aapki BPO/IT English ka 80% irregular-plural problem solve.",
  },

  phase8: {
    scenario: "Office mein team ke baare mein discuss ho raha hai — colleagues, families, project members. Aapko irregular plurals fluent use karne hain.",
    rwenRole: "HR colleague who is friendly, asks about your team and family — gives multiple chances to use 'children', 'women', 'men', 'people'.",
    successCriteria: "User uses three or more irregular plurals correctly in conversation ('children', 'women', 'men', 'people', 'feet') without saying 'childrens', 'womens', 'mans', or 'persons'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
