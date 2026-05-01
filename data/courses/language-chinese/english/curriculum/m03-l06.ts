import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Wǒ huì shuō... — Languages',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Wǒ huì shuō Yīngyǔ' — I can speak English. The word 'huì' (会) means 'know how to / be able to'. Use it specifically for skills you've learned: speaking a language, riding a bike, swimming. And here's the elegant bit: 'Yīngyǔ' (英语) already means 'English language' — you don't say 'shuō Yīngyǔ language' any more than you say 'speak Spanish language' in English.",
    culturalNote: "Knowing some Chinese, even badly, opens doors most foreigners never see. The honest, modest answer 'Yìdiǎn' (a little) lands well — it shows humility without dismissing your effort. 'Yìdiǎn diǎn' (a tiny bit) is even more self-deprecating, often said with a small laugh. Chinese speakers love hearing it from learners — it's almost a ritual modesty marker.",
  },

  chunks: [
    {
      id: 'wo_hui_shuo_yingyu',
      target: 'Wǒ huì shuō Yīngyǔ',
      native: 'I speak English',
      literal: '(我会说英语) lit: I-can-speak-English',
      emoji: '🇬🇧',
      phonetic: 'WAW HWAY shwaw ying-YU',
      audioRef: null,
    },
    {
      id: 'yidian_zhongwen',
      target: 'Yìdiǎn Zhōngwén',
      native: 'A little Chinese',
      literal: '(一点中文) lit: one-bit-Middle-script',
      emoji: '🤏',
      phonetic: 'yee-DYEN jong-WUN',
      audioRef: null,
    },
    {
      id: 'wo_xiang_xuexi',
      target: 'Wǒ xiǎng xuéxí',
      native: 'I want to learn',
      literal: '(我想学习) lit: I-want-study',
      emoji: '📖',
      phonetic: 'WAW shyahng SHWEH-shee',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Huì" + skill verb (and language nouns are self-contained)',
    explanation: "'Huì' (会) means 'know how to / can' — but only for learned skills. 'Wǒ huì shuō Fǎyǔ' = I can speak French. Don't use 'huì' for ability-in-the-moment ('can you help?' is different — that's 'kěyǐ'). And note: language words like 'Yīngyǔ' (英语), 'Zhōngwén' (中文), 'Fǎyǔ' (法语) already include 'language' — never tack a separate 'language' word on. For levels: 'Yìdiǎn' = a little. 'Yìdiǎn diǎn' = just a tiny bit (humbler).",
    examples: [
      { target: 'Wǒ huì shuō Zhōngwén (我会说中文)', native: 'I can speak Chinese' },
      { target: 'Yìdiǎn diǎn (一点点)', native: 'Just a tiny bit — humble version of "yìdiǎn"' },
      { target: 'Wǒ xiǎng xuéxí Zhōngwén (我想学习中文)', native: 'I want to learn Chinese — "xiǎng" + verb' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Wǒ huì shuō Yīngyǔ', right: 'I speak English' },
        { left: 'Yìdiǎn Zhōngwén', right: 'A little Chinese' },
        { left: 'Wǒ xiǎng xuéxí', right: 'I want to learn' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I speak English',
      correct: ['Wǒ huì shuō Yīngyǔ', 'Wo hui shuo Yingyu', 'wo hui shuo yingyu', 'wǒ huì shuō yīngyǔ', '我会说英语'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — say you can speak French',
      sentence: 'Wǒ _____ shuō Fǎyǔ',
      options: ['huì', 'shì', 'zài'],
      correct: 'huì',
      context: '"Huì" is the "know-how-to" verb for any learned skill — speaking a language is the prototypical case.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the natural-sounding answer',
      question: 'A Chinese friend asks how much Mandarin you speak. You\'ve had four lessons. Which feels right?',
      options: [
        { text: 'Yìdiǎn diǎn — wǒ xiǎng xuéxí', correct: true },
        { text: 'Wǒ huì shuō Zhōngwén language', correct: false },
        { text: 'Wǒ shì Zhōngwén', correct: false },
      ],
      explanation: '"Yìdiǎn diǎn" (a tiny bit) plus "Wǒ xiǎng xuéxí" (I want to learn) lands beautifully — humble + ambitious. Note: never add "language" after Zhōngwén, and never use "shì" with a language.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'A little Chinese',
      correct: ['Yìdiǎn Zhōngwén', 'Yidian Zhongwen', 'yidian zhongwen', 'yìdiǎn zhōngwén', '一点中文'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to learn Chinese"',
      words: ['xuéxí', 'Wǒ', 'Zhōngwén', 'xiǎng'],
      correct: ['Wǒ', 'xiǎng', 'xuéxí', 'Zhōngwén'],
      translation: 'I want to learn Chinese',
    },
  ],

  rwenDialogue: {
    intro: "Beijing tech firm canteen, lunch. Your colleague from Day 1 sits down opposite you with a tray of dumplings. They've heard from the team that you've been studying Mandarin every morning. Time to find out how much.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tīngshuō nǐ huì shuō Zhōngwén?',
        native: 'I hear you speak Chinese?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yìdiǎn diǎn, wǒ xiǎng xuéxí', native: 'Just a tiny bit — I want to learn', correct: true, feedback: 'Humble + curious. "Yìdiǎn diǎn" with a smile is exactly the right pitch. They\'ll happily slow down for you.' },
          { target: 'Wǒ huì shuō Zhōngwén language', native: 'I speak Chinese language', correct: false, feedback: 'Drop "language" — "Zhōngwén" already means "Chinese language". It\'s a built-in feature.' },
          { target: 'Wǒ shì Zhōngwén', native: 'I am Chinese', correct: false, feedback: '"Shì" connects to a noun — but "Zhōngwén" is a language, not a self-identity. You wanted "Wǒ huì shuō Zhōngwén".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hěn hǎo! Wǒ huì shuō yìdiǎn Yīngyǔ. Wǒmen kěyǐ liànxí',
        native: 'Great! I speak a little English. We can practise together',
      },
      {
        speaker: 'rwen',
        rwenLine: "And there's the gift — you said 'a tiny bit', they offered 'a little' back, and now you have a practice partner. Modest answers open doors that bragging never does.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I speak English',
        correct: ['Wǒ huì shuō Yīngyǔ', 'Wo hui shuo Yingyu', 'wo hui shuo yingyu', 'wǒ huì shuō yīngyǔ', '我会说英语'],
      },
      {
        prompt: 'A little Chinese (just the phrase)',
        correct: ['Yìdiǎn Zhōngwén', 'Yidian Zhongwen', 'yidian zhongwen', 'yìdiǎn zhōngwén', '一点中文'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, when someone asks if you speak Chinese, answer in Chinese: 'Yìdiǎn diǎn.' Two and a half syllables. They'll smile. You'll feel ten percent braver.",
    rwenSignoff: "Modest answers open doors. Tomorrow: where you live. Zàijiàn.",
  },

  phase8: {
    scenario: "Beijing tech firm canteen, 12:30pm — second week on the contract. You've grabbed a tray of dumplings and dishuǐ tofu and sat at the long table the team always uses. A senior dev you haven't spoken with much sits down opposite, hears you order in halting Mandarin, and gets curious. They want to know your language story — what you speak, what you're learning, what you wish you spoke.",
    rwenRole: "Wú Jié (吴杰) — senior backend engineer, late 30s, has lived in Singapore so understands what it's like to navigate a new language. Will speak slowly, will use 'Yīngyǔ' words to scaffold if you stall, and will appreciate humble framing.",
    successCriteria: "User correctly says 'Wǒ huì shuō ___' for at least one language (e.g. 'Wǒ huì shuō Yīngyǔ'), describes their Mandarin level honestly using 'yìdiǎn' or 'yìdiǎn diǎn', and uses 'Wǒ xiǎng xuéxí' to express they want to keep learning. They never tack 'language' after a language name.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
