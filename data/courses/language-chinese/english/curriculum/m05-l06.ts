import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'Gōnggōng, Pópo, Yuèfù, Yuèmǔ — In-laws',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Meeting your partner's parents — the moment that secretly tests every cross-cultural relationship. In Mandarin, you don't call them 'mum and dad' (that's reserved for your own). You also don't call them 'in-laws' (that's a Western shortcut). They get their own titles, depending on whether you're the husband or the wife. This is one of those rituals that the right word makes a thousand times warmer.",
    culturalNote: "In modern China, many couples just call their in-laws 'bàba' and 'māma' once welcomed in — a sign of close family fusion. But the formal kin terms (gōnggōng/pópo, yuèfù/yuèmǔ) still appear in writing, on red envelopes, in introductions. Knowing them shows respect AND understanding of how the family is built.",
  },

  chunks: [
    {
      id: 'gonggong_popo',
      target: 'Gōnggōng, Pópo',
      native: "Husband's father, Husband's mother",
      literal: "(公公/婆婆) lit: husband's-father / husband's-mother",
      emoji: '👴',
      phonetic: 'GONG-gong / PWOR-pwor',
      audioRef: null,
    },
    {
      id: 'yuefu_yuemu',
      target: 'Yuèfù, Yuèmǔ',
      native: "Wife's father, Wife's mother",
      literal: "(岳父/岳母) lit: father-in-law / mother-in-law (formal)",
      emoji: '👨‍🦳',
      phonetic: 'yweh-FOO / yweh-MOO',
      audioRef: null,
    },
    {
      id: 'zhangfu_qizi',
      target: 'Zhàngfu, Qīzi',
      native: 'Husband, Wife',
      literal: '(丈夫/妻子) lit: husband / wife',
      emoji: '💑',
      phonetic: 'JAHNG-foo / CHEE-zuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "In-laws split by which side married in",
    explanation: "Chinese in-law terms depend on YOUR gender. If you're the wife, your husband's parents are gōnggōng (公公) and pópo (婆婆). If you're the husband, your wife's parents are yuèfù (岳父) and yuèmǔ (岳母). The word doesn't change based on age — it changes based on which marriage relationship connects you. In direct address you'll often just call them 'bàba' and 'māma' once welcomed in, but the formal terms appear in introductions and writing.",
    examples: [
      { target: 'Wǒ de gōnggōng', native: "My (husband's) father — I'm the wife" },
      { target: 'Wǒ de yuèmǔ', native: "My (wife's) mother — I'm the husband" },
      { target: 'Wǒ de zhàngfu', native: 'My husband' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each kin term to who they refer to',
      pairs: [
        { left: 'Gōnggōng', right: "Husband's father" },
        { left: 'Pópo', right: "Husband's mother" },
        { left: 'Yuèfù', right: "Wife's father" },
        { left: 'Yuèmǔ', right: "Wife's mother" },
        { left: 'Zhàngfu', right: 'Husband' },
        { left: 'Qīzi', right: 'Wife' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're a wife. Your husband's mother just walked in. You greet your...",
      sentence: '_____, nǐ hǎo!',
      options: ['pópo', 'yuèmǔ', 'māma'],
      correct: 'pópo',
      context: "As the wife, your husband's mother is your pópo (婆婆). Yuèmǔ is what a HUSBAND calls his wife's mother — wrong direction.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'My husband',
      correct: ['Wǒ de zhàngfu', 'Wo de zhangfu', 'wo de zhangfu', 'wǒ de zhàngfu', '我的丈夫'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "My wife is Chinese"',
      words: ['shì', 'Wǒ', 'qīzi', 'Zhōngguórén', 'de'],
      correct: ['Wǒ', 'de', 'qīzi', 'shì', 'Zhōngguórén'],
      translation: 'My wife is Chinese',
    },
    {
      type: 'translate',
      instruction: "Type in Mandarin (you're the husband)",
      prompt: "My father-in-law (wife's dad)",
      correct: ['Wǒ de yuèfù', 'Wo de yuefu', 'wo de yuefu', 'wǒ de yuèfù', '我的岳父'],
    },
    {
      type: 'multiple_choice',
      instruction: 'In modern Chinese families, what do most adult children call their in-laws to their face?',
      question: 'Pick the most common practice',
      options: [
        { text: 'Bàba and māma — the same words they\'d use for their own parents.', correct: true },
        { text: 'Always the formal terms (gōnggōng / pópo / yuèfù / yuèmǔ).', correct: false },
        { text: 'They use first names.', correct: false },
      ],
      explanation: "Once welcomed in, most spouses call their in-laws 'bàba' and 'māma' to their face. It signals 'I'm part of the family now.' The formal terms (gōnggōng, etc.) are used to describe them to others, in writing, or in formal settings.",
    },
  ],

  rwenDialogue: {
    intro: "First dinner at your wife's family home in Hangzhou. Your yuèmǔ (her mother) has just placed a steaming bowl of soup in front of you. Your yuèfù (her father) is waiting to see how you handle the moment.",
    lines: [
      {
        speaker: 'npc',
        target: 'Lái, hē tāng. Bù yào kèqi.',
        native: "Come, drink the soup. Don't be polite (= help yourself).",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xièxie māma! Hěn xiāng', native: 'Thank you māma! It smells wonderful', correct: true, feedback: "Beautifully done — calling her 'māma' instead of 'yuèmǔ' to her face is exactly right. Her eyes shine." },
          { target: 'Xièxie yuèmǔ', native: 'Thank you mother-in-law', correct: false, feedback: "Grammatically correct — but to her face, 'yuèmǔ' feels distant and bookish. 'Māma' (or 'āyí' if you're not married yet) is warmer." },
          { target: 'Xièxie nǐ', native: 'Thank you', correct: false, feedback: "Polite — but missing the kinship term. Adding 'māma' transforms it from a thank-you into a 'thank you, mum'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hāha — zhè hái zǐ huì shuō huà.',
        native: 'Haha — this kid knows how to talk.',
      },
      {
        speaker: 'rwen',
        rwenLine: "That smile when you said 'māma'? You just earned a year of trust in one word. The formal terms exist — but the daily words are warmer.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Husband's mother (formal)", correct: ['Pópo', 'Popo', 'popo', 'pópo', '婆婆'] },
      { prompt: 'My wife', correct: ['Wǒ de qīzi', 'Wo de qizi', 'wo de qizi', 'wǒ de qīzi', '我的妻子'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have a partner, name their parents in Mandarin out loud — gōnggōng/pópo or yuèfù/yuèmǔ depending on your role. If you don't yet, picture a future where you might. The words are ready when you are.",
    rwenSignoff: "In-law words are heavy with history. But the daily ones — bàba, māma — are the ones that build a life. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "First dinner at your partner's family home in Hangzhou. Steam rising off a clay pot, the lazy Susan slowly turning, your yuèmǔ (or pópo) ladling soup into your bowl. Your in-laws are watching kindly — but watching — to see how you fit in.",
    rwenRole: "Yuèmǔ / Pópo (depending on user's gender) — your partner's mother, late 50s, gracious but quietly observant. She'll offer you food, ask how you've been settling in, and pay attention to whether you address her with a warm kinship word ('māma' / 'āyí') rather than English 'auntie' or English 'mum'.",
    successCriteria: "User addresses the in-laws with appropriate kinship terms (preferring 'māma'/'bàba' or 'āyí'/'shūshu' to their face over the formal yuèmǔ/pópo etc.), correctly identifies their own spouse using zhàngfu or qīzi, and handles a simple food-thank-you exchange.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
