import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'Nǐ duō dà? — How old?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Age in Mandarin is a single, unmissable word: 'suì' (岁). 'Wǒ sānshí suì' — I am 30 years old. Drop the 'suì' and the sentence collapses. In English you can say 'I'm 30' and everyone understands. In Chinese, you must always seal the number with 'suì' — otherwise '30' just floats.",
    culturalNote: "Asking age is far less taboo in China than in many Western cultures, especially with peers. It helps people choose how to address you (older = more deference). The little 'le' (了) at the end of 'Nǐ duō dà le?' is a softener — it's not a tense marker here, it just makes the question sound natural rather than abrupt.",
  },

  chunks: [
    {
      id: 'ni_duo_da_le',
      target: 'Nǐ duō dà le?',
      native: 'How old are you?',
      literal: '(你多大了?) lit: you-how-big-(particle)',
      emoji: '🎂',
      phonetic: 'nee DWAW da luh',
      audioRef: null,
    },
    {
      id: 'wo_sanshi_sui',
      target: 'Wǒ sānshí suì',
      native: 'I am 30 years old',
      literal: '(我三十岁) lit: I-three-ten-years',
      emoji: '3️⃣0️⃣',
      phonetic: 'WAW sahn-SHR SWAY',
      audioRef: null,
    },
    {
      id: 'wo_shi_chusheng',
      target: 'Wǒ shì 1995 nián chūshēng',
      native: 'I was born in 1995',
      literal: '(我是1995年出生) lit: I-am-1995-year-out-born',
      emoji: '🍼',
      phonetic: 'WAW shr yī-jyo-jyo-WU nyen choo-SHUNG',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Suì" — the mandatory age word',
    explanation: "Stating age = number + 'suì'. You can NEVER drop 'suì'. 'Wǒ sānshí' alone is incomplete — it just means 'I three-ten' and feels like a half-sentence. Always: number + suì = years old. For asking, 'Nǐ duō dà?' (literally 'you how big?') is the everyday phrasing.",
    examples: [
      { target: 'Wǒ èrshíwǔ suì (我二十五岁)', native: "I'm 25 years old" },
      { target: 'Wǒ sìshí suì (我四十岁)', native: "I'm 40 years old" },
      { target: 'Tā shíbā suì (他十八岁)', native: "He's 18 years old" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Nǐ duō dà le?', right: 'How old are you?' },
        { left: 'Wǒ sānshí suì', right: "I'm 30 years old" },
        { left: '1995 nián chūshēng', right: 'Born in 1995' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm 30 years old",
      correct: ['Wǒ sānshí suì', 'Wo sanshi sui', 'wo sanshi sui', 'wǒ sānshí suì', '我三十岁'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct version',
      question: 'A Chinese friend asks your age. Which reply is grammatically complete?',
      options: [
        { text: 'Wǒ èrshíbā suì', correct: true },
        { text: 'Wǒ èrshíbā', correct: false },
        { text: 'Wǒ shì èrshíbā', correct: false },
      ],
      explanation: 'Age REQUIRES "suì". Dropping it leaves the sentence floating. And we don\'t use "shì" with age — the number directly attaches to "suì".',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the question',
      sentence: 'Nǐ _____ dà le?',
      options: ['duō', 'shì', 'hěn'],
      correct: 'duō',
      context: '"Duō dà" literally means "how big" — the standard way to ask age.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I\'m 25 years old"',
      words: ['suì', 'Wǒ', 'èrshíwǔ'],
      correct: ['Wǒ', 'èrshíwǔ', 'suì'],
      translation: "I'm 25 years old",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — ask their age',
      prompt: 'How old are you?',
      correct: ['Nǐ duō dà le?', 'Ni duo da le?', 'ni duo da le', 'Nǐ duō dà le', 'nǐ duō dà le', '你多大了?', '你多大了'],
    },
  ],

  rwenDialogue: {
    intro: "A dinner introduction in Shanghai. You've been invited by a colleague to a small restaurant near the Bund — round table, lazy-Susan, six new faces. Someone across the table — friendly, mid-30s — leans in to ask the question that helps everyone calibrate.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ duō dà le?',
        native: 'How old are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ sānshí suì, nǐ ne?', native: "I'm 30 — and you?", correct: true, feedback: 'Number + "suì" + bouncing the question back with "nǐ ne". A perfect natural answer.' },
          { target: 'Wǒ sānshí', native: "I'm thirty", correct: false, feedback: 'You dropped "suì" — the sentence is incomplete in Mandarin. Always: number + suì.' },
          { target: 'Wǒ shì sānshí suì', native: 'I am 30 years old', correct: false, feedback: 'Almost — but with age you don\'t need "shì". Number attaches directly to "suì".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'A, wǒ sānshíwǔ suì. Wǒ shì 1990 nián chūshēng',
        native: "Ah, I'm 35. I was born in 1990",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how 'suì' lands on every age — yours, theirs. It's not optional. Lock that in and your numbers will always feel finished.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How old are you?',
        correct: ['Nǐ duō dà le?', 'Ni duo da le?', 'ni duo da le', 'Nǐ duō dà le', 'nǐ duō dà le', '你多大了?', '你多大了'],
      },
      {
        prompt: "I'm 30 years old",
        correct: ['Wǒ sānshí suì', 'Wo sanshi sui', 'wo sanshi sui', 'wǒ sānshí suì', '我三十岁'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your age out loud in Mandarin three times today: 'Wǒ ___ suì.' Whisper it on the commute, mutter it in the mirror. The goal is for 'suì' to feel as automatic as the number itself.",
    rwenSignoff: "Number sealed. Tomorrow: what do you do for work? Zàijiàn.",
  },

  phase8: {
    scenario: "Dinner introduction in Shanghai — a small restaurant a block off the Bund. You've been brought along by a colleague to meet their team. Round table, six people, the lazy-Susan turns slowly. Halfway through the second course, the friendly person across from you puts down their chopsticks and asks the calibrating question — how old are you? — and waits with kind curiosity.",
    rwenRole: "Zhāng Měi (张美) — your colleague's old university friend, mid-30s, marketing director, sociable and warm. She loves meeting foreigners and will keep the small-talk volley going. She'll tell you her own age in return.",
    successCriteria: "User answers age with the full pattern (number + 'suì'), never dropping 'suì'. Bonus: they ask back with 'Nǐ ne?' or 'Nǐ duō dà le?'. Extra credit: they mention birth year using 'Wǒ shì ___ nián chūshēng'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
