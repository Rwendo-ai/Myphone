import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: 'Hào chī — Tasty',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "First bite of xiǎolóngbāo (small soup dumplings) in a tiny Shanghai shop. The skin is paper-thin. You bite — hot broth bursts out and runs down your chin. Across the table, your host watches your face. They want to hear ONE phrase: 'Hěn hào chī!' (very tasty). It's the highest compliment in Chinese food culture, and today you earn the right to say it.",
    culturalNote: "'Hào chī' (好吃) literally means 'good-to-eat' — and Chinese builds dozens of compliments this way. 'Hào kàn' (好看 good-to-look = pretty). 'Hào tīng' (好听 good-to-hear = nice sounding). 'Hào wán' (好玩 good-to-play = fun). One pattern: hào + verb. Memorise this and you have the whole compliment system.",
  },

  chunks: [
    {
      id: 'hen_hao_chi',
      target: 'Hěn hào chī',
      native: 'Very tasty',
      literal: '(很好吃) lit: very-good-eat',
      emoji: '😋',
      phonetic: 'hun how CHIRR',
      audioRef: null,
    },
    {
      id: 'wo_bu_xihuan',
      target: 'Wǒ bù xǐhuān...',
      native: "I don't like...",
      literal: '(我不喜欢...) lit: I-not-like',
      emoji: '🙅',
      phonetic: 'WAW boo SHEE-hwan',
      audioRef: null,
    },
    {
      id: 'wo_chi_su',
      target: 'Wǒ chī sù',
      native: "I'm vegetarian (lit: I eat vegetarian)",
      literal: '(我吃素) lit: I-eat-plain/vegetarian',
      emoji: '🥦',
      phonetic: 'WAW chirr SOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Hào' + verb — the compliment compound",
    explanation: "'Hào' (好) + a verb makes 'good-to-DO'. Hào chī = good-to-eat (tasty). Hào hē (好喝) = good-to-drink (delicious, for liquids). Hào kàn (好看) = good-to-look (pretty). Hào tīng (好听) = good-to-hear (nice sounding). One word — hào — and you can compliment almost anything by pairing it with the right verb.",
    examples: [
      { target: 'Zhè ge hěn hào chī', native: 'This is very tasty' },
      { target: 'Chá hěn hào hē', native: 'The tea is delicious' },
      { target: 'Tā hěn hào kàn', native: 'She is very pretty (good-to-look)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Hěn hào chī', right: 'Very tasty' },
        { left: 'Wǒ bù xǐhuān', right: "I don't like" },
        { left: 'Wǒ chī sù', right: "I'm vegetarian" },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Very tasty (after first bite)',
      correct: ['Hěn hào chī', 'Hen hao chi', 'hen hao chi', 'hěn hào chī', '很好吃'],
    },
    {
      type: 'fill_blank',
      instruction: "You're being offered chicken feet — politely decline",
      sentence: 'Wǒ _____ jīzhuǎ',
      options: ['bù xǐhuān', 'hěn xǐhuān', 'yào'],
      correct: 'bù xǐhuān',
      context: "'Bù xǐhuān' (don't like) is the polite refusal. 'Hěn xǐhuān' would mean you LOVE chicken feet, and 'yào' means 'I want it' — both wrong if you're trying to decline.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — your host has just put pork on your plate',
      prompt: "I'm vegetarian",
      correct: ['Wǒ chī sù', 'Wo chi su', 'wo chi su', 'wǒ chī sù', '我吃素'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I don\'t like spicy food"',
      words: ['de', 'là', 'cài', 'bù xǐhuān', 'Wǒ'],
      correct: ['Wǒ', 'bù xǐhuān', 'là', 'de', 'cài'],
      translation: "I don't like spicy food",
    },
    {
      type: 'multiple_choice',
      instruction: "You're hosted at a Chinese family dinner. They've cooked all day. You take a bite of the braised pork. What do you say?",
      question: 'Pick the warmest response',
      options: [
        { text: 'Hěn hào chī! Xièxie nǐ — Very tasty! Thank you.', correct: true },
        { text: "Hái xíng — It's okay (lukewarm).", correct: false },
        { text: 'Wǒ bǎo le — I\'m full (refusing more).', correct: false },
      ],
      explanation: "'Hěn hào chī' with 'xièxie' is THE phrase Chinese hosts hope to hear. 'Hái xíng' (it's okay) sounds disappointed — they cooked for hours! Save 'wǒ bǎo le' for refusing seconds.",
    },
  ],

  rwenDialogue: {
    intro: "A small xiǎolóngbāo shop in Shanghai's Old Town. Your friend's auntie has insisted you come here — 'best in the city.' A bamboo steamer of eight perfect dumplings sits in front of you. She watches as you take your first bite.",
    lines: [
      {
        speaker: 'npc',
        target: "Xiǎoxīn — lǐmiàn yǒu tāng. Yǎo yìdiǎn, xiān hē tāng.",
        native: 'Careful — there\'s soup inside. Take a small bite, drink the soup first.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wā — hěn hào chī! Tāng zhēn xiānměi', native: "Wow — very tasty! The broth is really delicious", correct: true, feedback: "Perfect — 'hěn hào chī' is the compliment she wanted. 'Xiānměi' (umami/savoury-fresh) is the next-level word. She'll insist you try her favourite shop next." },
          { target: 'Bú cuò', native: "Not bad (lukewarm)", correct: false, feedback: "Polite but cold. She brought you to her favourite place — give her the full 'hěn hào chī'. Chinese hosts feed on praise, literally." },
          { target: 'Wǒ bǎo le', native: "I'm full (after one bite!)", correct: false, feedback: "After ONE dumpling? She'll be hurt. Save 'wǒ bǎo le' for the end of the meal — for now it's all 'hào chī'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Nǐ chī ròu ma? Hái yǒu zhūròu de hé xiè huáng de.',
        native: 'Do you eat meat? There\'s pork ones and crab roe ones too.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ chī sù — yǒu sù de xiǎolóngbāo ma?', native: "I'm vegetarian — are there veggie xiǎolóngbāo?", correct: true, feedback: "Clean and respectful — you stated your diet AND asked if they have a version. She's already calling out to the kitchen." },
          { target: 'Wǒ bù xǐhuān ròu', native: "I don't like meat (works but blunt)", correct: false, feedback: "Will work, but 'wǒ chī sù' is the standard Chinese way. It's a complete category that hosts immediately understand. 'Bù xǐhuān ròu' sounds picky." },
          { target: 'Bú yào ròu', native: "Don't want meat (curt)", correct: false, feedback: "Too curt for a dinner host. The respectful version is 'wǒ chī sù' — it positions vegetarianism as a practice, not a refusal." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You complimented her dumplings AND navigated being a vegetarian in a meat-loving food culture. Both are wins. 'Wǒ chī sù' is one of the most useful three syllables in your Chinese life — it shuts down 90% of awkward food situations.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Very tasty (in pinyin or characters)', correct: ['Hěn hào chī', 'Hen hao chi', 'hen hao chi', 'hěn hào chī', '很好吃'] },
      { prompt: "I'm vegetarian", correct: ['Wǒ chī sù', 'Wo chi su', 'wo chi su', 'wǒ chī sù', '我吃素'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "After your next bite of food today — anything, even a sandwich — say out loud (or to yourself) 'Hěn hào chī!' Make it muscle memory. The first time a Chinese host hears it from you in a real meal, their face will light up. That's the goal.",
    rwenSignoff: "Tomorrow — how the food gets cooked. Boiled, stir-fried, steamed, deep-fried. The four pillars of the Chinese kitchen. Zàijiàn.",
  },

  phase8: {
    scenario: "Sunday lunch at your Chinese friend's parents' apartment in Shanghai. The mother (Māma) has spent six hours preparing a feast — eight dishes on the table, including her signature hóngshāo ròu (red-braised pork). She hovers, anxious to know if you like the food. You're vegetarian. Navigate this without offending anyone.",
    rwenRole: "Lín Māma — your friend's mother, 60s, traditional Shanghainese cook, deeply invested in feeding people. She'll keep piling food on your plate, will be visibly hurt if you don't praise her cooking, and will be CONFUSED by vegetarianism (vegetarian = sick? = Buddhist?). Be warm, be specific, be vegetarian.",
    successCriteria: "User says 'hěn hào chī' multiple times specifically about veggie dishes she's cooked, declares 'wǒ chī sù' clearly when meat appears, uses 'wǒ bù xǐhuān...' politely if absolutely needed, and praises something specific she made (not just generic praise). Bonus: explains briefly WHY they're vegetarian using simple Chinese.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
