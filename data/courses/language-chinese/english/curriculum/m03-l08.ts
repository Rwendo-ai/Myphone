import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Wǒ hěn... — Describing self',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today you describe yourself: friendly, shy, curious. And you'll meet a tiny word that English speakers love to drop and shouldn't: 'hěn' (很). It looks like 'very'. It mostly isn't. In 'Wǒ hěn yǒushàn' (I'm friendly), 'hěn' is doing grammar, not emphasis — adjectives in Mandarin almost always need 'hěn' (or some other modifier) before them. 'Wǒ yǒushàn' alone sounds incomplete, like a fragment.",
    culturalNote: "Why does Mandarin require 'hěn'? Because adjectives in Chinese behave like verbs — 'yǒushàn' is closer to 'is-friendly' than to 'friendly'. Without a degree word like 'hěn' in front, an adjective-verb feels like it's about to be compared with something else ('Wǒ yǒushàn, tā bù yǒushàn' — I'm friendly, he isn't). 'Hěn' resolves the comparison silently and lets the sentence stand alone. So when you say 'Wǒ hěn hǎo', you're saying 'I'm fine', not 'I'm VERY fine.'",
  },

  chunks: [
    {
      id: 'wo_hen_youshan',
      target: 'Wǒ hěn yǒushàn',
      native: "I'm friendly",
      literal: '(我很友善) lit: I-(degree)-friendly',
      emoji: '😊',
      phonetic: 'WAW hun YO-shahn',
      audioRef: null,
    },
    {
      id: 'you_yidian_haixiu',
      target: 'Wǒ yǒu yìdiǎn hàixiū',
      native: "I'm a bit shy",
      literal: '(我有一点害羞) lit: I-have-a-bit-shy',
      emoji: '😳',
      phonetic: 'WAW yo yee-dyen HIGH-shyo',
      audioRef: null,
    },
    {
      id: 'hen_haoqi',
      target: 'Wǒ hěn hàoqí',
      native: "I'm very curious",
      literal: '(我很好奇) lit: I-(degree)-curious',
      emoji: '🧐',
      phonetic: 'WAW hun HOW-chee',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Hěn" before adjectives is REQUIRED',
    explanation: "Mandarin adjectives are grammatically verb-like. They need a degree word before them or they sound unfinished. 'Hěn' (very) is the default — it doesn't usually mean 'very', it just lets the adjective stand. Other options: 'tǐng ___' (pretty/quite), 'fēicháng ___' (extremely), or 'yǒu yìdiǎn ___' (a bit). Without one of these, the sentence implies a comparison: 'Wǒ yǒushàn, tā bù yǒushàn' (I'm friendly, he isn't). For English speakers, 'hěn' will feel like over-emphasis at first — you have to mute it in your head and just say it.",
    examples: [
      { target: 'Wǒ hěn hǎo (我很好)', native: "I'm fine — NOT 'I'm very fine'. 'Hěn' is grammatical glue here." },
      { target: 'Wǒ yǒu yìdiǎn hàixiū (我有一点害羞)', native: "I'm a bit shy — 'yǒu yìdiǎn' is the soft modifier" },
      { target: 'Tā fēicháng cōngmíng (他非常聪明)', native: "He's extremely smart — 'fēicháng' for genuine emphasis" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Wǒ hěn yǒushàn', right: "I'm friendly" },
        { left: 'Wǒ yǒu yìdiǎn hàixiū', right: "I'm a bit shy" },
        { left: 'Wǒ hěn hàoqí', right: "I'm curious" },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm friendly",
      correct: ['Wǒ hěn yǒushàn', 'Wo hen youshan', 'wo hen youshan', 'wǒ hěn yǒushàn', '我很友善'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the natural-sounding sentence',
      question: 'How do you say "I\'m friendly"?',
      options: [
        { text: 'Wǒ hěn yǒushàn', correct: true },
        { text: 'Wǒ yǒushàn', correct: false },
        { text: 'Wǒ shì yǒushàn', correct: false },
      ],
      explanation: '"Wǒ yǒushàn" alone sounds like a fragment expecting a comparison. "Hěn" makes it stand on its own. And never use "shì" with adjectives — that\'s the Module 3 Lesson 1 rule.',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — you want to say you\'re curious',
      sentence: 'Wǒ _____ hàoqí',
      options: ['hěn', 'shì', 'zhù'],
      correct: 'hěn',
      context: '"Hěn" is the default degree word that adjectives need. It barely means "very" here — it\'s structural.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm a bit shy",
      correct: ['Wǒ yǒu yìdiǎn hàixiū', 'Wo you yidian haixiu', 'wo you yidian haixiu', 'wǒ yǒu yìdiǎn hàixiū', '我有一点害羞'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I\'m curious"',
      words: ['hàoqí', 'hěn', 'Wǒ'],
      correct: ['Wǒ', 'hěn', 'hàoqí'],
      translation: "I'm curious",
    },
  ],

  rwenDialogue: {
    intro: "Chengdu university dinner, 7:30pm. A friend's older sister teaches at Sichuan Normal and has invited you to a small home dinner with three of her colleagues. Halfway through the second beer, one of them turns to you: 'Tell us — what kind of person are you?'",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ shì zěnme yàng de rén?',
        native: 'What kind of person are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ hěn yǒushàn, hěn hàoqí, yǒu yìdiǎn hàixiū', native: "I'm friendly, curious, and a bit shy", correct: true, feedback: 'Three adjectives, all properly framed — two with "hěn", one with "yǒu yìdiǎn". Sounds completely natural.' },
          { target: 'Wǒ yǒushàn, hàoqí, hàixiū', native: "I friendly, curious, shy", correct: false, feedback: 'No degree words — sentence sounds like a list waiting for a comparison. Each adjective needs "hěn" or "yǒu yìdiǎn".' },
          { target: 'Wǒ shì yǒushàn', native: 'I am friendly', correct: false, feedback: 'Adjectives never take "shì". Use "hěn": "Wǒ hěn yǒushàn".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hāhā, hěn hǎo! Wǒ yě hěn hàoqí',
        native: "Haha, lovely! I'm very curious too",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how they doubled 'hěn'? Once in 'hěn hǎo', once in 'hěn hàoqí'. Native speakers pepper it everywhere. Once you stop hearing 'very' and start hearing 'just glue', the rhythm of Mandarin opens up.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm friendly",
        correct: ['Wǒ hěn yǒushàn', 'Wo hen youshan', 'wo hen youshan', 'wǒ hěn yǒushàn', '我很友善'],
      },
      {
        prompt: "I'm a bit shy",
        correct: ['Wǒ yǒu yìdiǎn hàixiū', 'Wo you yidian haixiu', 'wo you yidian haixiu', 'wǒ yǒu yìdiǎn hàixiū', '我有一点害羞'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three real adjectives that describe you and frame each one — 'Wǒ hěn ___' or 'Wǒ yǒu yìdiǎn ___'. Say all three out loud. Listen for the 'hěn' — feel it become invisible.",
    rwenSignoff: "Adjectives glued. Tomorrow: open questions to learn about THEM. Zàijiàn.",
  },

  phase8: {
    scenario: "Chengdu university dinner, 7:45pm. Your friend's older sister Lín jiě hosts you at her apartment near Sichuan Normal University, alongside two of her academic colleagues. Spicy hotpot bubbling, the tableware getting greasy, beers half-drunk. The conversation has loosened — they're past your job, past your travels, and now genuinely curious about who you are as a person. One of the professors leans in: 'Nǐ shì zěnme yàng de rén?' Tell us about yourself.",
    rwenRole: "Professor Hé Lì (何丽) — comparative literature, mid-50s, has spent a sabbatical at Berkeley and speaks slowly for foreigners. Warm, probing, will follow up with 'why' if you give a one-word answer. Her colleague, Professor Sūn, mostly listens.",
    successCriteria: "User produces at least THREE self-describing sentences using adjectives, each properly framed — 'Wǒ hěn ___' (e.g. 'hěn yǒushàn', 'hěn hàoqí') or 'Wǒ yǒu yìdiǎn ___' (e.g. 'yǒu yìdiǎn hàixiū'). They never drop the degree word, and never use 'shì' with an adjective.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
