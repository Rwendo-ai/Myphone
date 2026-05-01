import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-name',
  module: 1,
  lesson: 5,
  title: 'Nǐ jiào shénme? — What\'s your name?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Names matter. In Mandarin, you don't 'have' a name — you're 'called' a name. The verb 'jiào' means 'to be called'. It's a small grammar shift but it changes how the question feels.",
    culturalNote: "In China, family name comes first. 'Wǒ jiào Lǐ Wěi' = 'I'm called Lǐ Wěi' = surname Lǐ, given name Wěi. When you give your English name, just say it as you would at home — they'll work it out.",
  },

  chunks: [
    {
      id: 'ni_jiao_shenme',
      target: 'Nǐ jiào shénme míngzi?',
      native: "What's your name?",
      literal: '(你叫什么名字?) lit: you-called-what-name?',
      emoji: '🪪',
      phonetic: 'nee jyow SHUN-muh MING-dz',
      audioRef: null,
    },
    {
      id: 'wo_jiao',
      target: 'Wǒ jiào...',
      native: 'My name is... / I\'m called...',
      literal: '(我叫...) lit: I-called-...',
      emoji: '👤',
      phonetic: 'WAW jyow...',
      audioRef: null,
    },
    {
      id: 'hen_gaoxing',
      target: 'Hěn gāoxìng rènshi nǐ',
      native: 'Pleased to meet you',
      literal: '(很高兴认识你) lit: very-happy-to-know-you',
      emoji: '🤝',
      phonetic: 'hun GOW-shing RUN-sh nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Jiào" (called)',
    explanation: "Mandarin uses 'jiào' (called) instead of 'name + have'. Subject + jiào + name. The pattern's identical for asking and answering — just swap the question word 'shénme' for the actual name.",
    examples: [
      { target: 'Wǒ jiào Anna', native: "I'm called Anna" },
      { target: 'Tā jiào Wáng Lì', native: 'She is called Wáng Lì' },
      { target: 'Nǐ jiào shénme?', native: 'What are you called?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Nǐ jiào shénme míngzi?', right: "What's your name?" },
        { left: 'Wǒ jiào...', right: "I'm called..." },
        { left: 'Hěn gāoxìng rènshi nǐ', right: 'Pleased to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell someone your name (your name is Anna)",
      sentence: 'Wǒ _____ Anna',
      options: ['jiào', 'hǎo', 'shì'],
      correct: 'jiào',
      context: '"Jiào" = called. "Shì" = am/is, but Chinese uses "jiào" for names, not "shì".',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — ask their name',
      prompt: "What's your name?",
      correct: ['Nǐ jiào shénme míngzi?', 'Ni jiao shenme mingzi?', 'ni jiao shenme mingzi', 'nǐ jiào shénme míngzi', '你叫什么名字?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Introduce yourself to a new acquaintance',
      words: ['Anna,', 'rènshi nǐ', 'gāoxìng', 'Wǒ jiào', 'hěn'],
      correct: ['Wǒ jiào', 'Anna,', 'hěn', 'gāoxìng', 'rènshi nǐ'],
      translation: "I'm Anna, pleased to meet you",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Pleased to meet you',
      correct: ['Hěn gāoxìng rènshi nǐ', 'Hen gaoxing renshi ni', 'hen gaoxing renshi ni', 'hěn gāoxìng rènshi nǐ', '很高兴认识你'],
    },
    {
      type: 'multiple_choice',
      instruction: 'In "Wǒ jiào Lǐ Wěi" — which is the family name?',
      question: 'Pick the family name',
      options: [
        { text: 'Lǐ (李) — comes first in Chinese order', correct: true },
        { text: 'Wěi (伟) — comes second, this is given', correct: false },
        { text: 'Both — Chinese names are one unit', correct: false },
      ],
      explanation: 'In Chinese order, family name comes first, given name second. "Lǐ" is the family name, "Wěi" is the given name — the opposite of English.',
    },
  ],

  rwenDialogue: {
    intro: "It's Chinese New Year. You've been invited to a family dinner — your friend's parents are meeting you for the first time. Their mother smiles and offers her hand.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo, nǐ jiào shénme míngzi?',
        native: "Hello, what's your name?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ jiào Anna, hěn gāoxìng rènshi nǐ', native: "I'm Anna, pleased to meet you", correct: true, feedback: "Beautiful — name plus warmth. Exactly what this moment asks for." },
          { target: 'Wǒ shì Anna', native: 'I am Anna', correct: false, feedback: 'Grammatical, but Chinese uses "jiào" for names. "Shì" is for "I am [a category]" — student, doctor, American.' },
          { target: 'Nǐ jiào shénme?', native: "What's YOUR name?", correct: false, feedback: 'You bounced the question back without answering — they\'ll be confused.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hěn gāoxìng rènshi nǐ, Anna. Wǒ jiào Wáng Yùlán',
        native: "Pleased to meet you, Anna. I'm Wáng Yùlán",
      },
      {
        speaker: 'rwen',
        rwenLine: "She gave you her family name first — 'Wáng'. You used 'jiào' for yourself. Two small choices, one warm first impression.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Ask someone's name",
        correct: ['Nǐ jiào shénme míngzi?', 'Ni jiao shenme mingzi?', 'ni jiao shenme mingzi', 'nǐ jiào shénme míngzi', '你叫什么名字?'],
      },
      {
        prompt: 'Pleased to meet you',
        correct: ['Hěn gāoxìng rènshi nǐ', 'Hen gaoxing renshi ni', 'hen gaoxing renshi ni', 'hěn gāoxìng rènshi nǐ', '很高兴认识你'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practise saying 'Wǒ jiào [your name]' out loud three times today. Each time, say it slightly differently — fast, slow, smiling. Find your version of it.",
    rwenSignoff: "Names are doors. Knock politely. Hěn gāoxìng rènshi nǐ.",
  },

  phase8: {
    scenario: "Chinese New Year's Eve, Shenzhen. Your Chinese friend has invited you to their family's reunion dinner — you've just walked into the warm chaos of a 12-person table, the parents at the head. Everyone turns to look as your friend introduces you, and the parents stand up to greet you formally. First impression. Right now.",
    rwenRole: "Wáng āyí & Wáng shūshu (王阿姨, 王叔叔) — your friend's mother and father, mid-60s, traditional but warm. Mum will speak first, asking your name. They'll appreciate any Mandarin effort and gently translate if you stall.",
    successCriteria: "User responds with 'Wǒ jiào [name]' (NOT 'Wǒ shì [name]' — wrong verb), follows with 'Hěn gāoxìng rènshi nǐ', and politely asks one of them their name back using 'Nǐ jiào shénme míngzi?' or just gracefully receives theirs.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
