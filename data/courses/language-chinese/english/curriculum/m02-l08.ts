import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-yao-xiang',
  module: 2,
  lesson: 8,
  title: 'Yào vs Xiǎng — Want',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English uses 'want' for everything. Mandarin doesn't — and the difference is felt. 'Yào' (要) is direct: I need, I will have. 'Xiǎng' (想) is softer: I'd like, I'm thinking of. Use the wrong one and you sound either pushy or wishy-washy.",
    culturalNote: "At a hotpot table in Chengdu, the waiter asks what you want. Say 'wǒ yào niúròu' — clear, definite, direct, perfect. To a friend who asks if you'd like to go for tea, say 'wǒ xiǎng' — softer, considered, polite. Mandarin asks you to choose your weight. English wants you to. Mandarin makes you mean it.",
  },

  chunks: [
    {
      id: 'wo_yao',
      target: 'Wǒ yào...',
      native: 'I want / I will have... (direct)',
      literal: '(我要) lit: I-want/need',
      emoji: '☝️',
      phonetic: 'waw YOW',
      audioRef: null,
    },
    {
      id: 'wo_xiang',
      target: 'Wǒ xiǎng...',
      native: "I'd like... (softer)",
      literal: '(我想) lit: I-think/would-like',
      emoji: '💭',
      phonetic: 'waw SHYAHNG',
      audioRef: null,
    },
    {
      id: 'wo_yao_zhege',
      target: 'Wǒ yào zhège',
      native: "I want this one / I'll have this",
      literal: '(我要这个) lit: I-want-this-one',
      emoji: '👇',
      phonetic: 'waw YOW JEH-guh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Yào (definite) vs Xiǎng (softer)',
    explanation: "'Yào' = will have / need / want — used when ordering, demanding, or stating clear intent. 'Xiǎng' = would like / thinking of — softer, more considerate, used for suggestions and preferences. They're not interchangeable; pick by tone.",
    examples: [
      { target: 'Wǒ yào kāfēi', native: "I'll have a coffee (ordering — direct)" },
      { target: 'Wǒ xiǎng hē kāfēi', native: "I'd like to drink a coffee (musing — softer)" },
      { target: 'Wǒ yào huí jiā', native: "I need to go home (firm)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Wǒ yào...', right: 'I want / I will have... (direct)' },
        { left: 'Wǒ xiǎng...', right: "I'd like... (softer)" },
        { left: 'Wǒ yào zhège', right: "I'll have this one" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a Chengdu hotpot restaurant. The waiter asks what you want to order. Which is best?",
      question: 'Yào or xiǎng?',
      options: [
        { text: "'Wǒ yào niúròu' — direct, definite, ordering mode", correct: true },
        { text: "'Wǒ xiǎng niúròu' — too soft for ordering, sounds hesitant", correct: false },
        { text: "Either is equally fine in this context", correct: false },
      ],
      explanation: "Restaurant ordering is the textbook 'yào' moment. Definite, no second-guessing. 'Xiǎng' would sound like you're still deciding — and the waiter is waiting.",
    },
    {
      type: 'fill_blank',
      instruction: "A friend asks 'Tonight, what do you fancy doing?' Pick the softer word for your answer.",
      sentence: 'Wǒ _____ kàn diànyǐng',
      options: ['xiǎng', 'yào', 'huì'],
      correct: 'xiǎng',
      context: "Casual chat with a friend = soft preference = 'xiǎng'. 'Wǒ xiǎng kàn diànyǐng' = 'I'd like to watch a movie / I'm thinking of watching a movie'. Gentler.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — point at a menu item, order it directly',
      prompt: "I'll have this one (use yào — direct)",
      correct: ['Wǒ yào zhège', 'Wo yao zhege', 'wo yao zhege', 'wǒ yào zhège', '我要这个'],
    },
    {
      type: 'build_sentence',
      instruction: "Soften: 'I'd like a cup of tea' (musing, polite)",
      words: ['chá', 'Wǒ', 'yī', 'xiǎng', 'bēi'],
      correct: ['Wǒ', 'xiǎng', 'yī', 'bēi', 'chá'],
      translation: "I'd like a cup of tea",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — at a hotpot table, ordering beef',
      prompt: 'I want beef (direct order — use yào)',
      correct: ['Wǒ yào niúròu', 'Wo yao niurou', 'wo yao niurou', 'wǒ yào niúròu', '我要牛肉'],
    },
  ],

  rwenDialogue: {
    intro: "A Chengdu hotpot restaurant on a Friday night — table bubbling with a divided pot of red Sichuan broth and white mushroom broth. The waiter, holding an order pad, leans in.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ yào shénme?',
        native: 'What do you want (to order)?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào niúròu hé tǔdòu', native: "I'll have beef and potato", correct: true, feedback: 'Decisive, clear — exactly what a hotpot waiter wants. He scribbles and moves on happily.' },
          { target: 'Wǒ xiǎng niúròu', native: "I'd like beef (softly)", correct: false, feedback: "Too tentative for ordering. The waiter is waiting for a decision, not a daydream. Use 'yào'." },
          { target: 'Niúròu ma?', native: 'Beef?', correct: false, feedback: "Sounds like you're asking HIM whether they have beef, not ordering it. Be direct." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hái yào shénme?',
        native: 'What else do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ xiǎng yīxià... yī píng píjiǔ', native: "Let me think... a bottle of beer", correct: true, feedback: "Beautiful — 'xiǎng' here actually means 'let me think'. Perfect register shift while you choose." },
          { target: 'Wǒ bù dǒng', native: "I don't understand", correct: false, feedback: "You DO understand — he's asking what else. Use xiǎng to buy yourself a thinking second." },
          { target: 'Méi guānxi', native: "It's fine", correct: false, feedback: "That's a reply to an apology, not an order. He's still waiting." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice that — 'yào' for ordering, 'xiǎng' for thinking it through. Both translate to 'want' in English, but they live in different rooms in Mandarin. You just walked between them gracefully.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'll have this (definite, ordering)",
        correct: ['Wǒ yào zhège', 'Wo yao zhege', 'wo yao zhege', 'wǒ yào zhège', '我要这个'],
      },
      {
        prompt: "I'd like to drink coffee (soft preference)",
        correct: ['Wǒ xiǎng hē kāfēi', 'Wo xiang he kafei', 'wo xiang he kafei', 'wǒ xiǎng hē kāfēi', '我想喝咖啡'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Two moments today: one when you firmly NEED something (use 'yào' silently), and one when you'd merely PREFER something (use 'xiǎng'). Feel the weight difference. English flattens this — Mandarin doesn't.",
    rwenSignoff: "Want carefully. Mean what you ask for. Zàijiàn.",
  },

  phase8: {
    scenario: "Friday night at a famous Chengdu hotpot place — half the table is red Sichuan broth bubbling with chillies and peppercorns, the other half mild mushroom. The waiter is at your elbow with an order pad, friendly but busy. You need to order three items decisively, then ask softly about a fourth you're not sure about.",
    rwenRole: "Xiǎo Lǐ (小李) — hotpot restaurant waiter, mid-20s, fast-talking Chengdu local, will gently nudge if you take too long but is genuinely happy to recommend if you ask softly with 'xiǎng'.",
    successCriteria: "User uses 'wǒ yào...' to order at least two items decisively, switches to 'wǒ xiǎng...' to ask his opinion or muse about a third item, and never uses 'xiǎng' for the firm order or 'yào' for the soft musing — gets the register right.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
