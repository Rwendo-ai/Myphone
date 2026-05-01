import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Péngyou — Friends Who Are Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Some friends become more than friends. The one who picks you up from the airport at 3am. The one who knows your password. In Chinese, you mark that closeness with a beautiful little simile — 'xiàng jiārén yíyàng' — like family. Same shape, same weight. Today we learn how to talk about your closest people.",
    culturalNote: "Chinese culture distinguishes carefully between 'shúrén' (acquaintances), 'péngyou' (friends), 'hǎo péngyou' (good friends), and 'zuì hǎo de péngyou' (best friends). The hierarchy is real — calling someone a péngyou is a slightly bigger commitment than the casual English 'friend'. And once you cross into 'jiārén yíyàng' territory, you're chosen family.",
  },

  chunks: [
    {
      id: 'wo_zui_hao_de_pengyou',
      target: 'Wǒ zuì hǎo de péngyou',
      native: 'My best friend',
      literal: '(我最好的朋友) lit: I-most-good-(modifier)-friend',
      emoji: '🤝',
      phonetic: 'WAW dzway HOW duh PUNG-yoh',
      audioRef: null,
    },
    {
      id: 'hao_pengyou',
      target: 'Hǎo péngyou',
      native: 'A good friend',
      literal: '(好朋友) lit: good-friend',
      emoji: '🫂',
      phonetic: 'how PUNG-yoh',
      audioRef: null,
    },
    {
      id: 'xiang_jiaren_yiyang',
      target: 'Xiàng jiārén yíyàng',
      native: 'Like family',
      literal: '(像家人一样) lit: similar-to family-people the-same',
      emoji: '❤️',
      phonetic: 'shyahng JYAH-run yee-YAHNG',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Xiàng...yíyàng' — the Chinese simile sandwich",
    explanation: "To say 'X is like Y' in Mandarin, you wrap Y between two words: 'xiàng' (像 — similar to) at the front, 'yíyàng' (一样 — the same) at the back. 'Xiàng jiārén yíyàng' = like family. The two words act like brackets around what you're comparing to.",
    examples: [
      { target: 'Tā xiàng jiārén yíyàng', native: 'She is like family' },
      { target: 'Tā xiàng wǒ gēge yíyàng', native: 'He is like an older brother to me' },
      { target: 'Zhèlǐ xiàng jiā yíyàng', native: 'This place is like home' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Wǒ zuì hǎo de péngyou', right: 'My best friend' },
        { left: 'Hǎo péngyou', right: 'A good friend' },
        { left: 'Xiàng jiārén yíyàng', right: 'Like family' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the simile: "She is like an older sister"',
      sentence: 'Tā _____ wǒ jiějie yíyàng',
      options: ['xiàng', 'shì', 'hěn'],
      correct: 'xiàng',
      context: "The xiàng...yíyàng sandwich. 'Xiàng' (像) opens, 'yíyàng' (一样) closes. Don't drop either side.",
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'My best friend is like family',
      correct: ['Wǒ zuì hǎo de péngyou xiàng jiārén yíyàng', 'Wo zui hao de pengyou xiang jiaren yiyang', 'wo zui hao de pengyou xiang jiaren yiyang', 'wǒ zuì hǎo de péngyou xiàng jiārén yíyàng', '我最好的朋友像家人一样'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "He is like my older brother"',
      words: ['gēge', 'Tā', 'xiàng', 'wǒ', 'yíyàng'],
      correct: ['Tā', 'xiàng', 'wǒ', 'gēge', 'yíyàng'],
      translation: 'He is like my older brother',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'A good friend',
      correct: ['Hǎo péngyou', 'Hao pengyou', 'hao pengyou', 'hǎo péngyou', '好朋友'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does 'de' (的) do in 'Wǒ zuì hǎo de péngyou'?",
      question: 'Pick the function',
      options: [
        { text: 'It links the descriptor (zuì hǎo) to the noun (péngyou) — like English \'-est\' or \'of mine\'.', correct: true },
        { text: 'It marks past tense.', correct: false },
        { text: "It's a question particle.", correct: false },
      ],
      explanation: "的 (de) is the all-purpose modifier/possessive particle. 'Wǒ de' = my. 'Hǎo de péngyou' = a good friend. 'Zuì hǎo de péngyou' = best friend. Whenever you bolt a description onto a noun, 'de' is the glue.",
    },
  ],

  rwenDialogue: {
    intro: "You're in Beijing for a wedding, and the bride pulls you aside to introduce you to her best friend from university. They've been inseparable for fifteen years.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tā shì shéi a?',
        native: 'Who is she?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tā shì wǒ zuì hǎo de péngyou — xiàng jiārén yíyàng', native: 'She is my best friend — like family', correct: true, feedback: 'Spectacular. You used both today\'s structures and the bride visibly tears up.' },
          { target: 'Tā shì wǒ péngyou', native: 'She is my friend', correct: false, feedback: "True — but for a fifteen-year bond, 'zuì hǎo de péngyou' (best friend) is what the moment calls for." },
          { target: 'Tā jiārén', native: 'She family', correct: false, feedback: "Closer with the simile: 'Tā xiàng jiārén yíyàng' (she is like family). Don't drop xiàng or yíyàng — they wrap the comparison." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tài hǎo le. Wǒmen yídìng yào hǎo hǎo qìngzhù!',
        native: 'Wonderful. We must celebrate properly!',
      },
      {
        speaker: 'rwen',
        rwenLine: "'Xiàng jiārén yíyàng' — three little words that can change a room. Save them for someone who deserves them.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My best friend', correct: ['Wǒ zuì hǎo de péngyou', 'Wo zui hao de pengyou', 'wo zui hao de pengyou', 'wǒ zuì hǎo de péngyou', '我最好的朋友'] },
      { prompt: 'Like family', correct: ['Xiàng jiārén yíyàng', 'Xiang jiaren yiyang', 'xiang jiaren yiyang', 'xiàng jiārén yíyàng', '像家人一样'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one person who is your 'xiàng jiārén yíyàng' person. Send them a message today — in any language — that uses the phrase. Tell them what they mean to you. The Mandarin will land even if they don't speak it.",
    rwenSignoff: "Friends you choose, family you don't. The lucky among us get both in the same person. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "A wedding in Beijing. The bride — your old friend from her year studying abroad — is introducing you to her university best friend. Fifteen years of friendship, weddings, breakups, late-night calls. The best friend is sizing you up across the round table.",
    rwenRole: "The bride's best friend — early 30s, sharp, protective of her oldest friend. She'll ask how you and the bride know each other and quietly judge whether you describe the friendship with the right depth (zuì hǎo de péngyou, xiàng jiārén yíyàng) or with bland English-style 'friend'.",
    successCriteria: "User uses 'zuì hǎo de péngyou' (best friend) for someone close, employs the 'xiàng...yíyàng' simile structure correctly with both bracketing words intact, and uses 'de' (的) properly to link descriptors to péngyou.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
