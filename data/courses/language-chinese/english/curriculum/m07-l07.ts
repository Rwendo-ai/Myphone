import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: 'Chá, Kāfēi — Tea & Coffee',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A Chengdu tea house, mid-afternoon. Bamboo chairs, a glass of jasmine tea steaming in front of you, an old man at the next table cracking sunflower seeds. The waiter approaches. 'Yì bēi chá?' he says — one cup of tea? You nod. The cup sits between you and the city for the next two hours. This is what tea means in China.",
    culturalNote: "'Bēi' (杯) is the cup measure word — and it pairs with almost every drink. Yì bēi chá (a cup of tea), yì bēi shuǐ (a glass of water), yì bēi kāfēi (a cup of coffee). Wine and beer use 'bēi' too. And then there's gānbēi (干杯) — literally 'dry cup', meaning bottoms up. Drinking together is BONDING in Chinese culture; refusing a toast can feel like refusing friendship.",
  },

  chunks: [
    {
      id: 'yi_bei_cha',
      target: 'Yì bēi chá',
      native: 'A cup of tea',
      literal: '(一杯茶) lit: one-cup-tea',
      emoji: '🍵',
      phonetic: 'yee bay CHAH',
      audioRef: null,
    },
    {
      id: 'hei_kafei',
      target: 'Hēi kāfēi',
      native: 'Black coffee',
      literal: '(黑咖啡) lit: black-coffee',
      emoji: '☕',
      phonetic: 'hay KAH-fay',
      audioRef: null,
    },
    {
      id: 'wo_bu_neng_he_jiu',
      target: 'Wǒ bù néng hē jiǔ',
      native: "I can't drink alcohol",
      literal: '(我不能喝酒) lit: I-not-can-drink-alcohol',
      emoji: '🚫🍺',
      phonetic: 'WAW boo nung huh JYO',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Bēi' — the cup measure word",
    explanation: "Drinks in Chinese always need a measure word, and 'bēi' (杯 cup/glass) is the most common. Yì bēi (one cup), liǎng bēi (two cups), sān bēi (three cups). It works for hot drinks (tea, coffee), cold drinks (water, juice), and alcohol (beer, wine). Other drink measures exist — píng (bottle), guàn (can), wǎn (bowl, for soup) — but bēi is the workhorse.",
    examples: [
      { target: 'Yì bēi shuǐ', native: 'A glass of water' },
      { target: 'Liǎng bēi kāfēi', native: 'Two cups of coffee' },
      { target: 'Yì bēi píjiǔ', native: 'A glass of beer' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the drink phrase to its meaning',
      pairs: [
        { left: 'Yì bēi chá', right: 'A cup of tea' },
        { left: 'Hēi kāfēi', right: 'Black coffee' },
        { left: 'Wǒ bù néng hē jiǔ', right: "I can't drink alcohol" },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'A cup of tea',
      correct: ['Yì bēi chá', 'Yi bei cha', 'yi bei cha', 'yì bēi chá', '一杯茶'],
    },
    {
      type: 'fill_blank',
      instruction: 'A colleague offers you wine — politely decline (you take medication)',
      sentence: 'Wǒ bù néng hē _____',
      options: ['jiǔ', 'shuǐ', 'chá'],
      correct: 'jiǔ',
      context: "'Jiǔ' (酒) is the catch-all word for alcohol — wine, beer, baijiu, whisky. 'Wǒ bù néng hē jiǔ' is the universal polite refusal. They'll usually accept 'medication' or 'doctor' as the reason without further pressure.",
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Bring me two cups of coffee, please"',
      words: ['kāfēi', 'qǐng', 'bēi', 'lái', 'liǎng'],
      correct: ['Qǐng', 'lái', 'liǎng', 'bēi', 'kāfēi'],
      translation: 'Please bring two cups of coffee',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Black coffee',
      correct: ['Hēi kāfēi', 'Hei kafei', 'hei kafei', 'hēi kāfēi', '黑咖啡'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your Chinese boss raises his glass at dinner and shouts 'Gānbēi!' What's happening?",
      question: 'Pick the right read',
      options: [
        { text: 'He\'s toasting — the expectation is to drink your whole glass (or take a polite sip if you don\'t drink).', correct: true },
        { text: "He's complaining the cup is dry.", correct: false },
        { text: 'He\'s asking if you want more.', correct: false },
      ],
      explanation: "'Gānbēi' literally means 'dry the cup' — drain it. It's a toast and a small dare. If you don't drink alcohol, raise your tea cup and gānbēi with that — Chinese hosts respect the gesture. Just NEVER ignore it.",
    },
  ],

  rwenDialogue: {
    intro: "A Chengdu tea house at 3pm. You and a Chinese friend are sitting at a bamboo table. The waiter — a young man in a black apron — appears with a notepad.",
    lines: [
      {
        speaker: 'npc',
        target: "Liǎng wèi yào hē shénme?",
        native: "What would you two like to drink?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lái yì bēi mòlì huāchá, hé yì bēi hēi kāfēi', native: "One cup of jasmine tea, and one black coffee", correct: true, feedback: "Beautiful — 'lái' to order, 'bēi' as the measure, two drinks in one breath. The waiter scribbles and bows out." },
          { target: 'Chá hé kāfēi', native: 'Tea and coffee (skipping measures)', correct: false, feedback: "He'll get it but it sounds like a tourist. Use 'yì bēi' before each drink — it's the Chinese rhythm: number + measure + noun." },
          { target: 'Wǒ shì chá', native: 'I am tea (incorrect)', correct: false, feedback: "Drop the 'shì' (am). For ordering, just say what you want with 'lái' or 'wǒ yào'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Wǎnshang yào yìqǐ chīfàn — wǒ qǐng kè! Wǒmen hē diǎn jiǔ?",
        native: "Tonight let's eat together — my treat! Shall we have some drinks?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tài hǎo le! Bú guò wǒ bù néng hē jiǔ — wǒ péi nǐ hē chá', native: "Wonderful! But I can't drink alcohol — I'll keep you company with tea", correct: true, feedback: "Perfect — accepted the invite, declined the alcohol, offered an alternative ('péi nǐ hē chá' — keep you company with tea). This is the masterclass move." },
          { target: 'Bù — wǒ bù hē', native: "No — I don't drink (curt)", correct: false, feedback: "Too blunt. In Chinese drinking culture, you NEVER just say no flat — you redirect. 'Wǒ bù néng hē jiǔ' (the 'néng' = can, implies medical/practical reason) is softer. Pair it with 'I'll keep you company with tea'." },
          { target: 'Hǎo, gānbēi', native: "OK, cheers (committing!)", correct: false, feedback: "If you don't drink, don't gānbēi — you're committing to drain the glass. Gracefully decline with 'wǒ bù néng hē jiǔ'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You ordered drinks like a regular AND navigated a toast invitation gracefully. That's huge — Chinese drinking culture has tripped up smarter people than you. Tomorrow, the FAMOUS dishes. The ones you'll be ordering for the rest of your life.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'A cup of tea (in pinyin or characters)', correct: ['Yì bēi chá', 'Yi bei cha', 'yi bei cha', 'yì bēi chá', '一杯茶'] },
      { prompt: "I can't drink alcohol", correct: ['Wǒ bù néng hē jiǔ', 'Wo bu neng he jiu', 'wo bu neng he jiu', 'wǒ bù néng hē jiǔ', '我不能喝酒'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order your next drink in your head in Mandarin. Coffee at the office? 'Yì bēi hēi kāfēi.' Tea at lunch? 'Yì bēi chá.' Water at dinner? 'Yì bēi shuǐ.' Train the bēi-rhythm: number + bēi + drink. Tomorrow it'll come out naturally.",
    rwenSignoff: "Tomorrow we name the dishes — jiǎozi, huǒguō, gōngbǎo jīdīng, xiǎolóngbāo. The greatest hits of Chinese cuisine. Zàijiàn.",
  },

  phase8: {
    scenario: "Friday night, Beijing. Your Chinese boss has invited the whole team to a banquet at a fancy Cantonese restaurant. There are 12 people around a round table. Baijiu (Chinese white liquor) is being poured. Your boss raises his glass to you specifically — gānbēi! You don't drink alcohol. Navigate this without losing face for him or you.",
    rwenRole: "Lǐ Zǒng (李总) — your boss, late 50s, traditional, generous, expects gānbēi etiquette. He'll toast you specifically (a big honour), pour baijiu, and watch. Throughout the dinner he'll keep filling your glass and looking your way. He respects honesty if delivered with face-saving warmth.",
    successCriteria: "User accepts the toast verbally ('gānbēi!' raising glass), declares 'wǒ bù néng hē jiǔ' clearly, redirects to tea or water ('wǒ péi nǐ hē chá' — I'll keep you company with tea), and toasts with that instead. Uses 'bēi' correctly when ordering replacement drinks. The success isn't 'avoiding alcohol' — it's preserving the warmth of the toast.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
