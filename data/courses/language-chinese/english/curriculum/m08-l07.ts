import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening',
  module: 8,
  lesson: 7,
  title: 'Wǎnshang — Evening',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Three actions seal the day in Chinese: huí jiā (return home), zuò wǎnfàn (make dinner), kàn diànshì (watch TV). Like the morning, the evening has its own rhythm — and its own verbs.",
    culturalNote: "Notice how literal evening Mandarin is. Wǎnfàn (晚饭) = late-meal. Diànshì (电视) = electric-vision. Once you start hearing the building blocks, half the words explain themselves: diànhuà (electric-speech) = phone, diànnǎo (electric-brain) = computer.",
  },

  chunks: [
    {
      id: 'hui_jia',
      target: 'Wǒ huí jiā',
      native: 'I go home',
      literal: '(我回家) lit: I-return-home',
      emoji: '🏠',
      phonetic: 'WAW HWAY jyah',
      audioRef: null,
    },
    {
      id: 'zuo_wanfan',
      target: 'Wǒ zuò wǎnfàn',
      native: 'I make dinner',
      literal: '(我做晚饭) lit: I-make-late-meal',
      emoji: '🍲',
      phonetic: 'WAW dzwaw WAHN-fahn',
      audioRef: null,
    },
    {
      id: 'kan_dianshi',
      target: 'Wǒ kàn diànshì',
      native: 'I watch TV',
      literal: '(我看电视) lit: I-look-electric-vision',
      emoji: '📺',
      phonetic: 'WAW kahn DYEN-shrr',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Huí — return-style verbs',
    explanation: "Huí (回) means 'return' — and Mandarin uses it where English would say 'go back' or just 'go'. Huí jiā (return-home) = go home. Huí gōngsī (return to the office) = head back to work. The verb already carries the 'back' — no need for an extra word.",
    examples: [
      { target: 'Huí jiā', native: 'Go home (return home)' },
      { target: 'Huí gōngsī', native: 'Head back to the office' },
      { target: 'Huí Zhōngguó', native: 'Return to China' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Wǒ huí jiā', right: 'I go home' },
        { left: 'Wǒ zuò wǎnfàn', right: 'I make dinner' },
        { left: 'Wǒ kàn diànshì', right: 'I watch TV' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right verb',
      sentence: 'Wǎnshang wǒ _____ wǎnfàn',
      options: ['zuò', 'qù', 'kàn'],
      correct: 'zuò',
      context: "From the last few lessons — zuò = make/do. Zuò wǎnfàn = make dinner.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I go home',
      correct: ['Wǒ huí jiā', 'Wo hui jia', 'wo hui jia', 'wǒ huí jiā', '我回家'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "In the evening I watch TV"',
      words: ['diànshì', 'kàn', 'wǎnshang', 'Wǒ'],
      correct: ['Wǒ', 'wǎnshang', 'kàn', 'diànshì'],
      translation: 'In the evening I watch TV',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I make dinner',
      correct: ['Wǒ zuò wǎnfàn', 'Wo zuo wanfan', 'wo zuo wanfan', 'wǒ zuò wǎnfàn', '我做晚饭'],
    },
    {
      type: 'multiple_choice',
      instruction: '"Diànshì" literally means…?',
      question: 'Pick the literal translation',
      options: [
        { text: 'electric-vision', correct: true },
        { text: 'electric-speech', correct: false },
        { text: 'electric-brain', correct: false },
      ],
      explanation: "Diàn (电) = electric. Shì (视) = vision. So diànshì = electric-vision = television. Diànhuà = electric-speech = phone. Diànnǎo = electric-brain = computer. The pattern repeats.",
    },
  ],

  rwenDialogue: {
    intro: "It's 7pm. Your friend WeChats you from her own kitchen — the daily check-in.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ huí jiā le ma?',
        native: 'Are you home yet?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Huí le, wǒ zài zuò wǎnfàn', native: "I'm home — I'm making dinner", correct: true, feedback: "Crisp answer. 'Huí le' confirms you're back, 'zài zuò wǎnfàn' is in-progress cooking." },
          { target: 'Wǒ qù jiā', native: 'I go home (literally)', correct: false, feedback: "For 'go home', Mandarin uses huí jiā (return home), not qù jiā." },
          { target: 'Wǒ shì jiā', native: 'I am home (identity)', correct: false, feedback: "Shì is for identity ('I am a teacher'). For 'I'm home', use huí jiā le or zài jiā." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo a! Wǎn yìdiǎn yìqǐ kàn diànshì?',
        native: 'Nice! Watch TV together a bit later?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three small evening verbs, one whole chapter of your day. Huí, zuò, kàn — return, make, watch.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I go home (return home)',
        correct: ['Wǒ huí jiā', 'Wo hui jia', 'wo hui jia', 'wǒ huí jiā', '我回家'],
      },
      {
        prompt: 'I watch TV',
        correct: ['Wǒ kàn diànshì', 'Wo kan dianshi', 'wo kan dianshi', 'wǒ kàn diànshì', '我看电视'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight, narrate your evening in three Mandarin lines: huí jiā, zuò wǎnfàn (or chī wǎnfàn if you don't cook), kàn diànshì. Three actions, one rhythm.",
    rwenSignoff: "Evenings are short and warm. Wǎn'ān — good night.",
  },

  phase8: {
    scenario: "9pm. WeChat video call with a friend who just got home herself. She wants the evening rundown — did you get home okay, what'd you make for dinner, what are you watching tonight, are you tired? A relaxed, fuzzy-end-of-day chat.",
    rwenRole: "Liú Yáng (刘洋) — close friend, late 20s, just made instant noodles for dinner because she was lazy. Will ask 'huí jiā le ma?' and 'zuò shénme cài?'. Casual, sleepy, gentle.",
    successCriteria: "User answers 'huí jiā le' to confirm being home, mentions making or eating dinner using zuò/chī wǎnfàn, and references kàn diànshì or another evening activity. Bonus if user reciprocates by asking the same question back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
