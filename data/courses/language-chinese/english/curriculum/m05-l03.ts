import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: "Érzi & Nǚ'ér — Son & Daughter",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A video call to your friend in Chengdu. Behind her, two small voices arguing over a toy. 'Liǎng gè háizi,' she sighs — two kids. In Mandarin, when you talk about how many kids you have, you can't just say 'two children'. You need a tiny word — a measure word — between the number and the noun. It's the rhythm of Chinese counting.",
    culturalNote: "After decades of the one-child policy (1980-2015), then a two-child policy, then a three-child policy from 2021, Chinese families are still recalibrating. Asking 'jǐ gè háizi?' (how many kids?) is a normal, friendly question — not the loaded question it feels like in some Western settings.",
  },

  chunks: [
    {
      id: 'erzi',
      target: 'Érzi',
      native: 'Son',
      literal: '(儿子) lit: child-(suffix)',
      emoji: '👦',
      phonetic: 'ER-zuh (rising tone, then light)',
      audioRef: null,
    },
    {
      id: 'nuer',
      target: "Nǚ'ér",
      native: 'Daughter',
      literal: '(女儿) lit: woman-child',
      emoji: '👧',
      phonetic: 'NYU-er (NYU dipping, er rising)',
      audioRef: null,
    },
    {
      id: 'liang_ge_haizi',
      target: 'Liǎng gè háizi',
      native: 'Two children',
      literal: '(两个孩子) lit: two-(measure word)-children',
      emoji: '👨‍👧‍👦',
      phonetic: 'lyahng guh HIGH-zuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Measure words — and why "two" becomes "liǎng"',
    explanation: "When you count nouns in Chinese, you sandwich a measure word between the number and the noun. For people: 'gè' (个). And here's a quirk: the number 2 is normally 'èr' (二) — but right before a measure word, it becomes 'liǎng' (两). 'Yí ge háizi' (one kid). 'Liǎng ge háizi' (two kids). Never 'èr ge'.",
    examples: [
      { target: 'Yí ge érzi', native: 'One son' },
      { target: "Liǎng ge nǚ'ér", native: 'Two daughters (note: liǎng, not èr)' },
      { target: 'Sān ge háizi', native: 'Three children' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Érzi', right: 'Son' },
        { left: "Nǚ'ér", right: 'Daughter' },
        { left: 'Háizi', right: 'Child' },
        { left: 'Liǎng ge háizi', right: 'Two kids' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Fill in the gap — you're saying you have two children",
      sentence: 'Wǒ yǒu _____ ge háizi',
      options: ['liǎng', 'èr', 'yí'],
      correct: 'liǎng',
      context: "Before a measure word, 2 = liǎng (两), never èr (二). 'Èr' is for counting in the abstract — phone numbers, prices.",
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'I have one son and one daughter',
      correct: ["Wǒ yǒu yí ge érzi hé yí ge nǚ'ér", "Wo you yi ge erzi he yi ge nu'er", "wo you yi ge erzi he yi ge nu er", "wǒ yǒu yí ge érzi hé yí ge nǚ'ér", '我有一个儿子和一个女儿'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I have two children"',
      words: ['liǎng', 'háizi', 'Wǒ', 'ge', 'yǒu'],
      correct: ['Wǒ', 'yǒu', 'liǎng', 'ge', 'háizi'],
      translation: 'I have two children',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Daughter',
      correct: ["Nǚ'ér", 'Nuer', 'nu er', "nǚ'ér", "nü'er", '女儿'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A friend asks "Nǐ yǒu jǐ gè háizi?" How do you respond if you have no children?',
      question: 'Pick the natural answer',
      options: [
        { text: 'Wǒ méi yǒu háizi (I don\'t have children)', correct: true },
        { text: 'Wǒ yǒu líng ge háizi (I have zero children)', correct: false },
        { text: 'Wǒ bù háizi', correct: false },
      ],
      explanation: "To negate 'yǒu' (have), you use 'méi yǒu' (没有) — the only verb in Chinese that takes 'méi' as its negator instead of 'bù'. Don't say 'líng ge' — that's mathematically true but socially odd.",
    },
  ],

  rwenDialogue: {
    intro: "WeChat video call with your old colleague Xiǎo Wáng, who moved back to Chengdu last year. Behind her, the unmistakable sound of two children negotiating over a toy.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hāi! Nǐ yǒu jǐ gè háizi le?',
        native: 'Hi! How many kids do you have now?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Wǒ yǒu liǎng gè — yí ge érzi hé yí ge nǚ'ér", native: 'I have two — one son and one daughter', correct: true, feedback: 'Perfect rhythm. You used liǎng (not èr), gè as the measure word, and listed both kids cleanly.' },
          { target: 'Wǒ yǒu èr háizi', native: 'I have two child', correct: false, feedback: "Two issues: before a measure word, use 'liǎng' not 'èr'. And you need 'gè' between the number and 'háizi'." },
          { target: 'Wǒ háizi liǎng', native: 'I children two', correct: false, feedback: 'Word order is off. Try: Wǒ + yǒu (have) + liǎng + ge + háizi.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tài hǎo le! Wǒ yě yǒu liǎng gè.',
        native: "That's great! I have two as well.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You'll meet 'liǎng' constantly — two cups, two tickets, two of anything. Locking it in early saves a hundred small slips later.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Two children (with measure word)', correct: ['Liǎng ge háizi', 'Liang ge haizi', 'liang ge haizi', 'liǎng ge háizi', '两个孩子'] },
      { prompt: 'I have one son', correct: ['Wǒ yǒu yí ge érzi', 'Wo you yi ge erzi', 'wo you yi ge erzi', 'wǒ yǒu yí ge érzi', '我有一个儿子'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Whether you have kids, want kids, or are gloriously kid-free, practise the answer. Out loud: 'Wǒ yǒu ___ ge háizi' or 'Wǒ méi yǒu háizi'. This question lands in every Chinese small-talk conversation — be ready.",
    rwenSignoff: "Liǎng, not èr — let your tongue learn that switch. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Wechat video call with an old Chinese colleague who moved back to Chengdu last year. Two of her own kids are play-fighting in the background. She wants to catch up — and the first question, always, is about family.",
    rwenRole: "Xiǎo Wáng (小王) — your former workmate, mid-30s, easy-going, asks rapid-fire family questions. She'll ask how many kids you have, their ages, and whether they speak any Chinese.",
    successCriteria: "User uses the correct measure word 'ge' between number and háizi, says 'liǎng' (not 'èr') when the number is two, and uses 'érzi'/'nǚ'ér' to specify gender when she asks. If kid-free, user says 'wǒ méi yǒu háizi' confidently.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
