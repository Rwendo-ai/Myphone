import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-zuo',
  module: 8,
  lesson: 2,
  title: 'Zuò — Do / Make',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Zuò (做) is a workhorse verb — do, make, prepare, perform. The same syllable gets you from doing homework to cooking dinner to asking 'what are you up to?'. One verb, dozens of moments.",
    culturalNote: "Zuò fàn (做饭) literally means 'make rice' — but in everyday Mandarin it covers cooking any meal. Rice is so central to Chinese life that the word for 'cooked rice' (fàn) became the word for 'food' itself. When grandma asks 'chī fàn le ma?' she means 'have you eaten?' — not specifically rice.",
  },

  chunks: [
    {
      id: 'zuo_gongke',
      target: 'Wǒ zuò gōngkè',
      native: 'I do homework',
      literal: '(我做功课) lit: I-do-homework',
      emoji: '📚',
      phonetic: 'WAW dzwaw GONG-kuh',
      audioRef: null,
    },
    {
      id: 'zuo_fan',
      target: 'Tā zuò fàn',
      native: 'She cooks',
      literal: '(她做饭) lit: she-make-rice/food',
      emoji: '🍚',
      phonetic: 'tah dzwaw FAHN',
      audioRef: null,
    },
    {
      id: 'zuo_shenme',
      target: 'Nǐ zuò shénme?',
      native: 'What are you doing?',
      literal: '(你做什么?) lit: you-do-what',
      emoji: '🤷',
      phonetic: 'nee dzwaw SHUN-muh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zuò + noun = the action',
    explanation: "Zuò pairs with a noun to form a whole action. Zuò + gōngkè (homework) = do homework. Zuò + fàn (rice/food) = cook. Zuò + shēngyi (business) = do business. Once you know the noun, zuò gives you the verb for free.",
    examples: [
      { target: 'Zuò yùndòng', native: 'do exercise / work out' },
      { target: 'Zuò shēngyi', native: 'do business' },
      { target: 'Zuò mèng', native: 'have a dream (lit: make dream)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Wǒ zuò gōngkè', right: 'I do homework' },
        { left: 'Tā zuò fàn', right: 'She cooks' },
        { left: 'Nǐ zuò shénme?', right: 'What are you doing?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the question',
      sentence: 'Nǐ zuò _____?',
      options: ['shénme', 'shéi', 'nǎlǐ'],
      correct: 'shénme',
      context: "Shénme = what. Shéi = who. Nǎlǐ = where. To ask 'what are you doing?', it's nǐ zuò shénme.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'She cooks (literally: makes food)',
      correct: ['Tā zuò fàn', 'Ta zuo fan', 'ta zuo fan', 'tā zuò fàn', '她做饭'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "What are you doing?"',
      words: ['shénme', 'zuò', 'Nǐ'],
      correct: ['Nǐ', 'zuò', 'shénme'],
      translation: 'What are you doing?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I do homework',
      correct: ['Wǒ zuò gōngkè', 'Wo zuo gongke', 'wo zuo gongke', 'wǒ zuò gōngkè', '我做功课'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which translation is closest?',
      question: '"Wǒ zài zuò fàn" (I am... ?)',
      options: [
        { text: "I'm cooking", correct: true },
        { text: "I'm eating", correct: false },
        { text: "I'm shopping", correct: false },
      ],
      explanation: "Zuò fàn literally is 'make rice/food', but in real Mandarin it means cooking any meal. The 'zài' before zuò makes it 'in the middle of doing'.",
    },
  ],

  rwenDialogue: {
    intro: "Saturday afternoon. A friend pings you on WeChat with the most common Chinese question of all time.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ zuò shénme?',
        native: 'What are you doing?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ zuò fàn', native: "I'm cooking", correct: true, feedback: "Clean and natural. Zuò fàn — making food. They'll probably ask what's on the menu next." },
          { target: 'Wǒ shì fàn', native: "I am rice", correct: false, feedback: "Funny but no — shì is for identity. You wanted zuò (make/do) here." },
          { target: 'Wǒ yǒu gōngkè', native: 'I have homework', correct: false, feedback: "Close meaning, but the natural Chinese reply is 'wǒ zuò gōngkè' — I'm doing homework." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo a! Zuò shénme cài?',
        native: 'Great! What dish?',
      },
      {
        speaker: 'rwen',
        rwenLine: "One verb, two contexts — doing homework, making food. Zuò is the Swiss army knife of daily life.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'What are you doing?',
        correct: ['Nǐ zuò shénme?', 'Nǐ zuò shénme', 'Ni zuo shenme?', 'ni zuo shenme', '你做什么?', '你做什么'],
      },
      {
        prompt: 'She cooks',
        correct: ['Tā zuò fàn', 'Ta zuo fan', 'ta zuo fan', 'tā zuò fàn', '她做饭'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use zuò three different ways today — silently or out loud. 'Wǒ zuò...' for whatever you're up to right now, for what someone else is doing, and as the question 'nǐ zuò shénme?'",
    rwenSignoff: "One verb, many lives. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Sunday afternoon WeChat call with a Chinese friend who's bored at home. They want to know what you're up to, what you've been doing this weekend, and what you're cooking later. Casual, chatty, plenty of zuò questions coming.",
    rwenRole: "Xiǎo Méi (小美) — close friend in her late 20s. Lives in Shanghai, works in marketing. Casual, chatty, asks 'nǐ zuò shénme?' multiple ways. Will follow up with 'zuò shénme cài?' if you mention cooking.",
    successCriteria: "User answers a 'nǐ zuò shénme?' with 'wǒ zuò...' (homework, food, exercise — anything reasonable) and uses zuò in at least two different contexts during the conversation. Bonus if user asks 'nǐ zuò shénme?' back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
