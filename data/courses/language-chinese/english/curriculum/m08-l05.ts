import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Zǎoshang — Morning Routine',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Today: the verbs of waking up. Qǐchuáng (rise from bed), xǐ liǎn (wash face), chī zǎofàn (eat breakfast). Three actions in three syllables each — the shape of every Chinese morning.",
    culturalNote: "Chinese morning vocabulary is poetically literal. Qǐchuáng (起床) = 'rise-bed'. Zǎofàn (早饭) = 'early meal'. The big one: many older Chinese people start the day with hot water, not coffee — kāishuǐ (开水) — they'll often ask if you've had yours yet.",
  },

  chunks: [
    {
      id: 'qichuang',
      target: 'Wǒ liù diǎn qǐchuáng',
      native: 'I get up at 6',
      literal: '(我六点起床) lit: I-six-o\'clock-rise-bed',
      emoji: '⏰',
      phonetic: 'WAW lyo dyen chee-CHWAHNG',
      audioRef: null,
    },
    {
      id: 'xi_lian',
      target: 'Wǒ xǐ liǎn',
      native: 'I wash my face',
      literal: '(我洗脸) lit: I-wash-face',
      emoji: '💧',
      phonetic: 'WAW shee LYEN',
      audioRef: null,
    },
    {
      id: 'chi_zaofan',
      target: 'Wǒ chī zǎofàn',
      native: 'I eat breakfast',
      literal: '(我吃早饭) lit: I-eat-early-meal',
      emoji: '🥟',
      phonetic: 'WAW chrr ZAO-fahn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time before verb',
    explanation: "In Chinese, time goes BEFORE the verb, not after. 'Wǒ liù diǎn qǐchuáng' (I 6-o'clock get up). Never 'wǒ qǐchuáng liù diǎn'. This goes for every time word — zǎoshang (morning), míngtiān (tomorrow), zuótiān (yesterday) — all of them sit before the action.",
    examples: [
      { target: 'Wǒ zǎoshang chī zǎofàn', native: 'I eat breakfast in the morning' },
      { target: 'Tā qī diǎn qù gōngsī', native: 'He goes to the office at 7' },
      { target: 'Wǒmen wǎnshang kàn diànshì', native: 'We watch TV in the evening' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chunk to its meaning',
      pairs: [
        { left: 'Wǒ liù diǎn qǐchuáng', right: 'I get up at 6' },
        { left: 'Wǒ xǐ liǎn', right: 'I wash my face' },
        { left: 'Wǒ chī zǎofàn', right: 'I eat breakfast' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Fix the word order — pick the right slot',
      sentence: 'Wǒ _____ qù gōngsī',
      options: ['bā diǎn', 'gōngsī bā diǎn', 'qù bā diǎn'],
      correct: 'bā diǎn',
      context: "Time before verb. 'Bā diǎn' (8 o'clock) sits before qù.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I get up at 6',
      correct: ['Wǒ liù diǎn qǐchuáng', 'Wo liu dian qichuang', 'wo liu dian qichuang', 'wǒ liù diǎn qǐchuáng', '我六点起床'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "I eat breakfast in the morning"',
      words: ['zǎofàn', 'zǎoshang', 'Wǒ', 'chī'],
      correct: ['Wǒ', 'zǎoshang', 'chī', 'zǎofàn'],
      translation: 'I eat breakfast in the morning',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I wash my face',
      correct: ['Wǒ xǐ liǎn', 'Wo xi lian', 'wo xi lian', 'wǒ xǐ liǎn', '我洗脸'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which sentence has correct word order?',
      question: 'Time goes WHERE in Chinese?',
      options: [
        { text: 'Wǒ qī diǎn chī zǎofàn', correct: true },
        { text: 'Wǒ chī zǎofàn qī diǎn', correct: false },
        { text: 'Chī wǒ qī diǎn zǎofàn', correct: false },
      ],
      explanation: "Time word (qī diǎn = 7 o'clock) sits between the subject and the verb. Subject + Time + Verb + Object — that's the pattern.",
    },
  ],

  rwenDialogue: {
    intro: "You've moved into a Beijing flatshare. Your new flatmate, up early already, asks about your morning rhythm.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ jǐ diǎn qǐchuáng?',
        native: 'What time do you get up?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ liù diǎn qǐchuáng', native: 'I get up at 6', correct: true, feedback: "Time before verb — perfectly placed." },
          { target: 'Wǒ qǐchuáng liù diǎn', native: 'I get-up six o\'clock', correct: false, feedback: 'Word order is reversed. In Chinese, the time slot comes before the verb.' },
          { target: 'Liù diǎn wǒ', native: 'Six o\'clock I', correct: false, feedback: "Missing the verb. You need qǐchuáng." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo zǎo! Nǐ chī zǎofàn ma?',
        native: 'So early! Do you eat breakfast?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three small actions, one rhythm. Get up, wash face, eat. The morning of half a billion people, in your mouth.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I get up at 6',
        correct: ['Wǒ liù diǎn qǐchuáng', 'Wo liu dian qichuang', 'wo liu dian qichuang', 'wǒ liù diǎn qǐchuáng', '我六点起床'],
      },
      {
        prompt: 'I eat breakfast',
        correct: ['Wǒ chī zǎofàn', 'Wo chi zaofan', 'wo chi zaofan', 'wǒ chī zǎofàn', '我吃早饭'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tomorrow morning, narrate three things to yourself in Mandarin: 'wǒ qǐchuáng le' (I got up), 'wǒ xǐ liǎn' (I wash my face), 'wǒ chī zǎofàn' (I eat breakfast). Three lines, one minute.",
    rwenSignoff: "Mornings are made of small verbs. Wǎn'ān — good night.",
  },

  phase8: {
    scenario: "It's Saturday morning. You're at brunch with a Chinese friend who's curious how a foreigner's morning compares to a Chinese one. They want a step-by-step: when you get up, what you do, what you eat. They'll share theirs back.",
    rwenRole: "Chén Yǔ (陈宇) — friend in their late 20s, Beijing native, loves comparing daily habits across cultures. Will ask 'jǐ diǎn?' (what time?) and follow up with 'chī shénme?' (eat what?). Curious, warm.",
    successCriteria: "User describes their morning with at least three time-before-verb sentences using qǐchuáng, xǐ liǎn, chī zǎofàn (or close variants). At least one sentence uses a specific time word (e.g. liù diǎn, qī diǎn). User listens to the friend's morning and responds.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
