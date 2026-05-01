import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past-stories',
  module: 10,
  lesson: 7,
  title: 'Jiǎng gùshi — Telling Stories',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Today we learn to open the past. 'Wǒ xiǎo de shíhou…' — when I was young — is the doorway every Chinese childhood story walks through. Once you can open this door, dinners with Chinese friends change forever.",
    culturalNote: "'De shíhou' (的时候) = when/while. It comes AFTER the time clause, not before. English: 'When I was young, I…' Mandarin: 'I-young de shíhou, I…'. The 'de shíhou' tags the moment like a label at the end. Listen for it — it sets up almost every memory in spoken Mandarin.",
  },

  chunks: [
    {
      id: 'wo_xiao_de_shihou',
      target: 'Wǒ xiǎo de shíhou…',
      native: 'When I was young…',
      literal: '(我小的时候) lit: I-young-of-time',
      emoji: '👶',
      phonetic: 'WAW shao duh SHRR-hoe',
      audioRef: null,
    },
    {
      id: 'wo_yongyuan_bu_hui_wangji',
      target: 'Wǒ yǒngyuǎn bú huì wàngjì…',
      native: "I'll never forget…",
      literal: '(我永远不会忘记) lit: I-forever-not-will-forget',
      emoji: '💭',
      phonetic: 'WAW yong-YWEN boo hway WAHNG-jee',
      audioRef: null,
    },
    {
      id: 'hen_qiguai',
      target: 'Hěn qíguài',
      native: 'Very strange',
      literal: '(很奇怪) lit: very-strange',
      emoji: '🤨',
      phonetic: 'hun chee-GWAI',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"…de shíhou" (…的时候) = when',
    explanation: '"De shíhou" turns any clause into "when [clause]". The clause goes BEFORE de shíhou — Mandarin loves to mark time at the end.',
    examples: [
      { target: 'Wǒ xiǎo de shíhou', native: 'When I was young' },
      { target: 'Wǒ chīfàn de shíhou', native: 'When I eat (am eating)' },
      { target: 'Wǒ qù Zhōngguó de shíhou', native: 'When I went to China' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ xiǎo de shíhou', right: 'When I was young' },
        { left: 'Wǒ yǒngyuǎn bú huì wàngjì', right: "I'll never forget" },
        { left: 'Hěn qíguài', right: 'Very strange' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "When I was young..."',
      sentence: 'Wǒ xiǎo _____ shíhou…',
      options: ['de', 'le', 'hěn'],
      correct: 'de',
      context: '"De" links the clause to "shíhou" — the time-marker at the end.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Very strange',
      correct: ['Hěn qíguài', 'Hen qiguai', 'hen qiguai', '很奇怪'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "When I was young..."',
      words: ['de', 'Wǒ', 'shíhou', 'xiǎo'],
      correct: ['Wǒ', 'xiǎo', 'de', 'shíhou'],
      translation: 'When I was young…',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'll never forget",
      correct: ['Wǒ yǒngyuǎn bú huì wàngjì', 'Wo yongyuan bu hui wangji', 'wo yongyuan bu hui wangji', '我永远不会忘记'],
    },
    {
      type: 'multiple_choice',
      instruction: 'In "Wǒ xiǎo de shíhou", where does the time-marker sit?',
      question: 'Pick the correct word order pattern.',
      options: [
        { text: 'AFTER the clause — Mandarin tags time at the end', correct: true },
        { text: 'BEFORE the clause, like English "when"', correct: false },
        { text: 'In the middle of the clause', correct: false },
      ],
      explanation: 'Unlike English, Mandarin attaches time at the end: clause + de shíhou. Word order matters here.',
    },
  ],

  rwenDialogue: {
    intro: "You're at a hotpot dinner with Chinese friends. The conversation slows. One asks you to share a memory.",
    lines: [
      {
        speaker: 'npc',
        target: 'Gēn wǒmen jiǎng yí ge gùshi ba',
        native: 'Tell us a story',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ xiǎo de shíhou, wǒ qù le yí ge hěn qíguài de dìfang…', native: 'When I was young, I went to a very strange place…', correct: true, feedback: "Beautiful — you opened the door, set the mood, and dropped 'qíguài' as a hook. They're leaning in." },
          { target: 'Wǒ hěn gāoxìng', native: "I'm happy", correct: false, feedback: "Not a story — they want a memory." },
          { target: 'Bié dānxīn', native: "Don't worry", correct: false, feedback: 'Wrong frame.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ó? Shénme dìfang?',
        native: 'Oh? What place?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You opened the door of memory in Mandarin. The whole table is yours now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'When I was young…',
        correct: ['Wǒ xiǎo de shíhou', 'Wo xiao de shihou', 'wo xiao de shihou', '我小的时候'],
      },
      {
        prompt: "I'll never forget",
        correct: ['Wǒ yǒngyuǎn bú huì wàngjì', 'Wo yongyuan bu hui wangji', 'wo yongyuan bu hui wangji', '我永远不会忘记'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one childhood memory. In your head, start it with 'Wǒ xiǎo de shíhou...'. Two sentences. The capstone in 3 days will need this.",
    rwenSignoff: "Memory in a new language is a kind of second life. Tomorrow we look forward instead of back.",
  },

  phase8: {
    scenario: "Hotpot dinner with three Chinese friends in Chengdu. The bubbling pot. The wine. Someone says 'Tell us a story from when you were a kid.' Everyone leans in.",
    rwenRole: "Three Chinese friends in their late 20s, warm and curious, will react and ask follow-ups in Mandarin.",
    successCriteria: 'User opens with "Wǒ xiǎo de shíhou…", tells at least 3 sentences of a childhood memory, and uses either "wǒ yǒngyuǎn bú huì wàngjì" or "hěn qíguài" naturally.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
