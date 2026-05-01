import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Jiātíng Gùshi — Family Stories',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Every family has the stories that get told and re-told. Your nǎinai who walked five miles to school. Your bàba who insists he caught the biggest fish anyone ever saw. Today we learn the storytelling tools — 'long ago...', 'she used to...', 'he always says...' Three little phrases that turn family memory into family lore.",
    culturalNote: "Chinese families are deeply oral. Stories about 'lǎo yī bèi' (the older generation — 老一辈) carry weight far beyond their literal content. They're how values get transmitted. Listening attentively when an elder starts 'hěn jiǔ yǐqián...' (long ago) is itself a gesture of respect. You don't interrupt; you let the story breathe.",
  },

  chunks: [
    {
      id: 'hen_jiu_yiqian',
      target: 'Hěn jiǔ yǐqián',
      native: 'Long ago',
      literal: '(很久以前) lit: very-long-ago',
      emoji: '📜',
      phonetic: 'hun jyoh yee-CHYEN',
      audioRef: null,
    },
    {
      id: 'wo_nainai_yiqian',
      target: 'Wǒ nǎinai yǐqián...',
      native: 'My grandmother used to...',
      literal: '(我奶奶以前...) lit: my-grandma-formerly...',
      emoji: '👵',
      phonetic: 'WAW NIGH-nigh yee-CHYEN',
      audioRef: null,
    },
    {
      id: 'ta_zongshi_shuo',
      target: 'Tā zǒngshì shuō',
      native: 'He / she always says',
      literal: '(他总是说) lit: he-always-says',
      emoji: '💬',
      phonetic: 'tah DZONG-shir shwor',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Yǐqián' — the past-habit marker",
    explanation: "'Yǐqián' (以前) means 'before / previously / used to'. Drop it after a subject and it shifts the whole sentence into past-habit territory. 'Wǒ yǐqián zhù zài Běijīng' = I used to live in Beijing. 'Wǒ nǎinai yǐqián měi tiān zǒu lù shàngxué' = my grandmother used to walk to school every day. Pair it with 'zǒngshì' (always) for the recurring-pattern feel English calls 'used to'.",
    examples: [
      { target: 'Hěn jiǔ yǐqián...', native: 'Long ago... (story opener)' },
      { target: 'Wǒ yéye yǐqián chōu yān', native: 'My grandfather used to smoke' },
      { target: 'Tā zǒngshì shuō...', native: 'He always says... (recurring quote)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the storytelling phrase to its meaning',
      pairs: [
        { left: 'Hěn jiǔ yǐqián', right: 'Long ago' },
        { left: 'Wǒ nǎinai yǐqián...', right: 'My grandmother used to...' },
        { left: 'Tā zǒngshì shuō', right: 'He / she always says' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Open a story: 'Long ago, my grandmother lived in a village...'",
      sentence: '_____, wǒ nǎinai zhù zài yí ge xiǎo cūnzi...',
      options: ['Hěn jiǔ yǐqián', 'Hěn jiǔ', 'Yǐqián'],
      correct: 'Hěn jiǔ yǐqián',
      context: "The full opener is 'hěn jiǔ yǐqián' — like English 'long, long ago'. The shorter forms work but don't carry the same storytelling weight.",
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'My grandfather (paternal) used to be a teacher',
      correct: ['Wǒ yéye yǐqián shì lǎoshī', 'Wo yeye yiqian shi laoshi', 'wo yeye yiqian shi laoshi', 'wǒ yéye yǐqián shì lǎoshī', '我爷爷以前是老师'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "He always says I look like my mother"',
      words: ['xiàng', 'Tā', 'shuō', 'māma', 'wǒ', 'zǒngshì'],
      correct: ['Tā', 'zǒngshì', 'shuō', 'wǒ', 'xiàng', 'māma'],
      translation: 'He always says I look like my mother',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Long ago',
      correct: ['Hěn jiǔ yǐqián', 'Hen jiu yiqian', 'hen jiu yiqian', 'hěn jiǔ yǐqián', '很久以前'],
    },
    {
      type: 'multiple_choice',
      instruction: "Where does 'yǐqián' (used to / previously) sit in a sentence about your nǎinai?",
      question: 'Pick the natural word order',
      options: [
        { text: 'After the subject: \'Wǒ nǎinai yǐqián...\' = My grandmother used to...', correct: true },
        { text: 'At the very end of the sentence.', correct: false },
        { text: 'Before the subject: \'Yǐqián wǒ nǎinai...\' is the only option.', correct: false },
      ],
      explanation: "Most natural placement: subject + yǐqián + verb. ('Wǒ nǎinai yǐqián zhù zài cūnzi' — my grandma used to live in a village.) Yǐqián CAN also sit at the start of a sentence ('Yǐqián...'), but the subject + yǐqián pattern is the workhorse.",
    },
  ],

  rwenDialogue: {
    intro: "Family dinner in Sichuan. Your husband's grandfather — yéye — is mid-bite when he sets down his chopsticks and gets that look. Story time.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hěn jiǔ yǐqián, wǒ shíbā suì jiù qù le Shànghǎi...',
        native: 'Long ago, when I was eighteen, I went to Shanghai...',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yéye, qǐng shuō, wǒ xiǎng tīng", native: "Yéye, please tell us, I want to hear", correct: true, feedback: "Beautiful — you invited him in. He visibly straightens, settling into the story." },
          { target: 'Wǒ zhīdào le', native: 'I get it', correct: false, feedback: "Don't cut him off — Chinese storytelling expects an inviting response, not a closing one. Try 'qǐng shuō' (please tell us)." },
          { target: 'Yǐqián?', native: 'Before?', correct: false, feedback: "Just echoing his word doesn't invite the story. Show curiosity: 'wǒ xiǎng tīng' (I want to hear)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo. Wǒ māma zǒngshì shuō: "Háizi, dào wàimiàn qù kàn shìjiè."',
        native: 'Good. My mother always said: "Child, go out and see the world."',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you catch it? He started with 'hěn jiǔ yǐqián' and quoted his own mother with 'zǒngshì shuō'. You're watching three generations stitch together inside one sentence.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Long ago...', correct: ['Hěn jiǔ yǐqián', 'Hen jiu yiqian', 'hen jiu yiqian', 'hěn jiǔ yǐqián', '很久以前'] },
      { prompt: 'He always says', correct: ['Tā zǒngshì shuō', 'Ta zongshi shuo', 'ta zongshi shuo', 'tā zǒngshì shuō', '他总是说'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one family story that gets told over and over — the one everyone groans at because they've heard it a hundred times. Now try to open it in Mandarin: 'Hěn jiǔ yǐqián, wǒ ___ yǐqián...' Even one sentence is enough. You're carrying the story across a language now.",
    rwenSignoff: "Stories outlive the people who tell them. Mandarin or English — you're now a keeper. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "Family dinner in Sichuan after a long lunch. Plates pushed back, baijiu poured. Your husband's yéye has that look — the storytelling look — and he wants to share the story of how he met your nǎinai 'hěn jiǔ yǐqián'. Your job is to keep him talking.",
    rwenRole: "Yéye (爷爷) — your husband's paternal grandfather, mid-80s, gravelly voice, slow but vivid storyteller. He'll open with 'hěn jiǔ yǐqián...' and pause occasionally for you to ask follow-up questions. Notices when you echo his storytelling phrases back to him.",
    successCriteria: "User invites him to keep going using a phrase like 'qǐng shuō' or 'wǒ xiǎng tīng', uses 'yǐqián' or 'zǒngshì shuō' at least once when responding or asking, and shares one short family memory of their own using 'wǒ + [family member] + yǐqián...' structure.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
