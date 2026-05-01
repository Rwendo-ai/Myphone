import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'Zài fànguǎn — At a restaurant',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Friday night in Hong Kong. You push through a beaded curtain into a Cantonese dim sum hall — round tables, rotating lazy susans, carts of bamboo steamers rolling between aisles. A server in a red vest catches your eye and lifts her chin: how many? Tonight you walk in like a local. Liǎng wèi. Càidān. Mǎidān.",
    culturalNote: "'Wèi' (位) is the polite measure word for people — 'liǎng wèi' (two people, with respect). Tourists say 'liǎng ge rén' (two people, neutral) and it works fine, but 'wèi' shows you know the room. And 'mǎidān' literally means 'BUY the bill' — a Cantonese loanword that swept across mainland China. Even the bill is something you proudly buy.",
  },

  chunks: [
    {
      id: 'liang_wei',
      target: 'Liǎng wèi',
      native: 'Table for two (politely "two persons")',
      literal: '(两位) lit: two-(polite-person-measure)',
      emoji: '🪑',
      phonetic: 'LYANG way',
      audioRef: null,
    },
    {
      id: 'caidan',
      target: 'Càidān',
      native: 'Menu',
      literal: '(菜单) lit: dish-list',
      emoji: '📋',
      phonetic: 'TSAI dan',
      audioRef: null,
    },
    {
      id: 'maidan',
      target: 'Mǎidān',
      native: 'The bill (lit: "buy the bill")',
      literal: '(买单) lit: buy-bill',
      emoji: '💴',
      phonetic: 'MY dan',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Wèi' — the polite people-counter",
    explanation: "When counting people in a restaurant, hotel, or any service setting, use 'wèi' (位) instead of 'ge'. 'Liǎng wèi' = two persons (polite). 'Sān wèi' = three (polite). It's the difference between 'two of you' and 'two of you, esteemed guests'. Servers always ask 'jǐ wèi?' (how many of you?) — answer with 'wèi', never 'ge'.",
    examples: [
      { target: 'Yí wèi', native: 'One (esteemed person)' },
      { target: 'Liǎng wèi', native: 'Two (esteemed persons)' },
      { target: 'Sì wèi', native: 'Four (esteemed persons)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the restaurant phrase to its meaning',
      pairs: [
        { left: 'Liǎng wèi', right: 'Table for two' },
        { left: 'Càidān', right: 'Menu' },
        { left: 'Mǎidān', right: 'The bill' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A server greets you and your friend at the door — what do you say?',
      sentence: '_____ wèi',
      options: ['Liǎng', 'Liǎng ge', 'Èr'],
      correct: 'Liǎng',
      context: "When counting two of something, Mandarin uses 'liǎng' (not 'èr'). And in restaurants, you pair it with 'wèi' for politeness — 'Liǎng wèi' is the natural answer.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'The bill (please)',
      correct: ['Mǎidān', 'Maidan', 'maidan', 'mǎidān', '买单'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Excuse me, can I see the menu?"',
      words: ['càidān', 'qǐng', 'Bù hǎoyìsi', 'gěi wǒ', '看一下'],
      correct: ['Bù hǎoyìsi', 'qǐng', 'gěi wǒ', 'càidān', '看一下'],
      translation: 'Excuse me, please give me the menu (let me see it)',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Menu',
      correct: ['Càidān', 'Caidan', 'caidan', 'càidān', '菜单'],
    },
    {
      type: 'multiple_choice',
      instruction: "It's the end of the meal. What do you say to flag down the server?",
      question: 'Pick the natural phrase',
      options: [
        { text: 'Fúwùyuán, mǎidān! — Server, the bill!', correct: true },
        { text: 'Wǒ yào qù — I want to go.', correct: false },
        { text: 'Càidān, xièxie — Menu, thanks.', correct: false },
      ],
      explanation: "'Fúwùyuán' (服务员) is 'server' — calling out to them is normal in Chinese restaurants, not rude. Pair it with 'mǎidān' and a slight wave — that's how every meal ends.",
    },
  ],

  rwenDialogue: {
    intro: "Hong Kong, 7pm. A bustling dim sum hall on Mong Kok. You and a friend push through the beaded curtain. A server with a tablet looks up.",
    lines: [
      {
        speaker: 'npc',
        target: "Wǎnshang hǎo — jǐ wèi?",
        native: 'Good evening — how many of you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Liǎng wèi, xièxie', native: 'Two, thank you', correct: true, feedback: "Perfect — 'wèi' for politeness, 'xièxie' to close it warmly. She marks her tablet and leads you to a table." },
          { target: 'Èr ge rén', native: 'Two people (overly literal)', correct: false, feedback: "Understandable but stiff. Use 'liǎng wèi' — 'liǎng' replaces 'èr' for counting two of anything, and 'wèi' is the polite people-measure for service settings." },
          { target: 'Wǒ yǒu liǎng', native: 'I have two (incomplete)', correct: false, feedback: "Just answer her question directly — 'Liǎng wèi.' That's all you need." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Qǐng zhèbiān zuò. Càidān gěi nín.',
        native: "Please sit this way. Here's the menu.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Xièxie', native: 'Thank you', correct: true, feedback: "Clean and warm. You're seated. Now choose your xiǎolóngbāo with confidence." },
          { target: 'Mǎidān', native: 'The bill (too soon!)', correct: false, feedback: "You haven't ordered yet — 'mǎidān' comes at the END. For now just 'xièxie'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You walked in, claimed your table with 'liǎng wèi', accepted the càidān gracefully. That's the whole opening sequence of every Chinese restaurant in the world. Tomorrow — we ORDER.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Table for two (the polite version)', correct: ['Liǎng wèi', 'Liang wei', 'liang wei', 'liǎng wèi', '两位'] },
      { prompt: 'The bill, please (just the word for "the bill")', correct: ['Mǎidān', 'Maidan', 'maidan', 'mǎidān', '买单'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine yourself walking into a restaurant tonight — even an English-speaking one. Practice the sequence out loud: 'Liǎng wèi.' (sit down) 'Càidān, xièxie.' (read menu) (eat) 'Mǎidān!' Three phrases that bookend any meal in Chinese-speaking world.",
    rwenSignoff: "You can now claim a table in Mandarin. That's a real skill — most travellers never get past 'two please' in English. Zàijiàn.",
  },

  phase8: {
    scenario: "Friday 7pm in a Hong Kong dim sum hall — round tables, lazy susans, carts of bamboo steamers rolling past. You and a friend (silent in this scene — Rwen plays the server) push through the beaded curtain. The hostess looks up. Walk through the entire arrival sequence: get a table, get a menu, get seated.",
    rwenRole: "Chén Jiějie — Hong Kong dim sum hall hostess, 30s, fast Cantonese-accented Mandarin, professional but friendly. She'll ask 'jǐ wèi?' and react if you say 'liǎng ge rén' instead of 'liǎng wèi' — she'll understand but smile knowingly. She'll seat you and offer the càidān.",
    successCriteria: "User answers 'liǎng wèi' (NOT 'liǎng ge rén'), accepts the càidān with 'xièxie', and at the end of the imagined meal says 'fúwùyuán, mǎidān' to call for the bill. The polite measure word 'wèi' is the test.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
