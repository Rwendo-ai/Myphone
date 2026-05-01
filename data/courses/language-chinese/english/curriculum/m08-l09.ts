import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Míngtiān — Tomorrow (Future with huì)',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday gave you le. Today gives you huì (会) — the modal for tomorrow, next week, plans, and intentions. 'Míngtiān wǒ huì qù' (tomorrow I will go). Pop huì before the verb and the future opens up.",
    culturalNote: "Huì has two lives — both useful. (1) 'Will' for plans: 'wǒ huì lái' (I'll come). (2) 'Can' for learned skills: 'wǒ huì shuō Zhōngwén' (I can speak Chinese). Same word, two jobs. Context tells you which. End every chat with 'míngtiān jiàn' — see you tomorrow — the warmest sign-off in Mandarin.",
  },

  chunks: [
    {
      id: 'mingtian_hui',
      target: 'Míngtiān wǒ huì qù',
      native: "Tomorrow I'll go",
      literal: '(明天我会去) lit: tomorrow-I-will-go',
      emoji: '➡️',
      phonetic: 'ming-TYEN waw HWAY chyoo',
      audioRef: null,
    },
    {
      id: 'xia_ge_xingqi',
      target: 'Xià ge xīngqī',
      native: 'Next week',
      literal: '(下个星期) lit: next-(measure)-week',
      emoji: '📆',
      phonetic: 'shyah guh SHING-chee',
      audioRef: null,
    },
    {
      id: 'mingtian_jian',
      target: 'Míngtiān jiàn',
      native: 'See you tomorrow',
      literal: '(明天见) lit: tomorrow-see',
      emoji: '👋',
      phonetic: 'ming-TYEN JYEN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Huì — the future "will"',
    explanation: "Place huì BEFORE the main verb to signal a future plan or intention. 'Wǒ qù' (I go) → 'Wǒ huì qù' (I will go). For specific future times, lead with the time word: 'Míngtiān wǒ huì qù' (tomorrow I'll go). 'Xià ge xīngqī wǒ huì lái' (next week I'll come). Same time-before-verb rule from earlier — huì just rides shotgun with the verb.",
    examples: [
      { target: 'Wǒ huì lái', native: "I'll come" },
      { target: 'Tā huì dǎ diànhuà', native: "He'll call" },
      { target: 'Míngtiān wǒ huì gàosu nǐ', native: "I'll tell you tomorrow" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Míngtiān wǒ huì qù', right: "Tomorrow I'll go" },
        { left: 'Xià ge xīngqī', right: 'Next week' },
        { left: 'Míngtiān jiàn', right: 'See you tomorrow' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Add the future modal',
      sentence: 'Míngtiān wǒ _____ lái',
      options: ['huì', 'le', 'ma'],
      correct: 'huì',
      context: "For 'will' — a future plan — pop huì right before the verb.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'See you tomorrow',
      correct: ['Míngtiān jiàn', 'Mingtian jian', 'mingtian jian', 'míngtiān jiàn', '明天见'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "Next week I will go to Beijing"',
      words: ['Běijīng', 'huì', 'qù', 'Xià ge xīngqī', 'wǒ'],
      correct: ['Xià ge xīngqī', 'wǒ', 'huì', 'qù', 'Běijīng'],
      translation: 'Next week I will go to Beijing',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Tomorrow I'll go (use míngtiān + huì)",
      correct: ['Míngtiān wǒ huì qù', 'Mingtian wo hui qu', 'mingtian wo hui qu', 'míngtiān wǒ huì qù', '明天我会去'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Where does huì go for "will"?',
      question: 'Pick the natural future sentence',
      options: [
        { text: 'Míngtiān wǒ huì qù gōngsī', correct: true },
        { text: 'Míngtiān wǒ qù huì gōngsī', correct: false },
        { text: 'Míngtiān wǒ qù gōngsī huì', correct: false },
      ],
      explanation: "Huì sits BEFORE the main verb. Time word, then subject, then huì + verb. Time → I → will → go.",
    },
  ],

  rwenDialogue: {
    intro: "Friday afternoon, packing up at the office. A colleague stops by your desk — weekend talk and goodbyes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zhōumò nǐ yǒu shénme jìhuà?',
        native: 'Any weekend plans?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Míngtiān wǒ huì qù gōngyuán', native: "Tomorrow I'll go to the park", correct: true, feedback: "Crisp future. Time → subject → huì → verb. Couldn't be cleaner." },
          { target: 'Míngtiān wǒ qù le gōngyuán', native: 'Tomorrow I went to the park', correct: false, feedback: "Le marks the past — that doesn't fit with tomorrow. Swap le for huì." },
          { target: 'Wǒ qù gōngyuán míngtiān', native: 'I go park tomorrow', correct: false, feedback: "Time word goes first, not last. And without huì it sounds vague — not clearly a plan." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo de, zhù nǐ wánr de kāixīn! Míngtiān jiàn.',
        native: 'Cool, hope you have fun! See you tomorrow.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Le for yesterday, huì for tomorrow. Two tiny markers, your whole timeline. And míngtiān jiàn — the warmest goodbye in Mandarin.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Tomorrow I'll go",
        correct: ['Míngtiān wǒ huì qù', 'Mingtian wo hui qu', 'mingtian wo hui qu', 'míngtiān wǒ huì qù', '明天我会去'],
      },
      {
        prompt: 'See you tomorrow',
        correct: ['Míngtiān jiàn', 'Mingtian jian', 'mingtian jian', 'míngtiān jiàn', '明天见'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Sign off with 'míngtiān jiàn' to one person today — out loud or via WeChat. Bonus: tell them one plan with huì. 'Míngtiān wǒ huì...'",
    rwenSignoff: "Tomorrow is just one syllable away — huì. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Friday at 5:45pm. You're sharing weekend plans with a colleague who's curious whether you've made friends in Beijing yet, what you're up to tomorrow, and whether you might join the team for hotpot next week. End of week, easy energy.",
    rwenRole: "Zhōu Lín (周琳) — colleague who's become a friend, early 30s, sociable, planning things weeks ahead. Will ask 'míngtiān nǐ huì zuò shénme?' and 'xià ge xīngqī yǒu kòng ma?' (free next week?). Will end with 'míngtiān jiàn' or 'xià ge xīngqī jiàn'.",
    successCriteria: "User uses huì + verb at least once for tomorrow's plans, mentions xià ge xīngqī or another future time word, and signs off with 'míngtiān jiàn' or 'xià ge xīngqī jiàn' naturally. Bonus if user invites them to something using huì.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
