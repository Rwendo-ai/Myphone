import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-zaoshang',
  module: 1,
  lesson: 2,
  title: 'Zǎoshang hǎo — Good morning',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Like English, Mandarin has time-of-day greetings. But notice: they all end in 'hǎo' — good. Morning-good, evening-good. The structure stays. Only the time word changes.",
    culturalNote: "In modern China, time-specific greetings are common in workplaces, hotels, and formal settings. With friends, plain 'nǐ hǎo' or even 'hāi' (hi, English loanword) is fine. Match the room you're in.",
  },

  chunks: [
    {
      id: 'zaoshang_hao',
      target: 'Zǎoshang hǎo',
      native: 'Good morning',
      literal: '(早上好) lit: morning-good',
      emoji: '🌅',
      phonetic: 'DZOW-shahng how ("zǎo" rhymes with "cow", but starts like "ds")',
      audioRef: null,
    },
    {
      id: 'wanshang_hao',
      target: 'Wǎnshàng hǎo',
      native: 'Good evening',
      literal: '(晚上好) lit: evening-good',
      emoji: '🌆',
      phonetic: 'WAHN-shahng how',
      audioRef: null,
    },
    {
      id: 'zaijian',
      target: 'Zàijiàn',
      native: 'Goodbye',
      literal: '(再见) lit: again-see',
      emoji: '👋',
      phonetic: 'DZIGH-jyen ("zài" rhymes with "tie")',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Compound greetings: [time] + hǎo',
    explanation: 'Mandarin builds time-greetings as a compound: take the part of day, add "hǎo". The pattern is rigid — only the time word swaps.',
    examples: [
      { target: 'Zǎoshang hǎo', native: 'Morning + good' },
      { target: 'Xiàwǔ hǎo', native: 'Afternoon + good' },
      { target: 'Wǎnshàng hǎo', native: 'Evening + good' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to its time of day',
      pairs: [
        { left: 'Zǎoshang hǎo', right: 'Good morning' },
        { left: 'Wǎnshàng hǎo', right: 'Good evening' },
        { left: 'Zàijiàn', right: 'Goodbye' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "It's 8am at the office. Greet the receptionist.",
      sentence: '_____ hǎo',
      options: ['Zǎoshang', 'Wǎnshàng', 'Zàijiàn'],
      correct: 'Zǎoshang',
      context: 'Use the morning word — "zǎo" itself means "early".',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Good morning (formal)',
      correct: ['Zǎoshang hǎo', 'Zaoshang hao', 'zaoshang hao', 'zǎoshang hǎo', '早上好'],
    },
    {
      type: 'build_sentence',
      instruction: "It's late. Say goodbye and good evening to your host.",
      words: ['zàijiàn', 'Wǎnshàng', 'hǎo,'],
      correct: ['Wǎnshàng', 'hǎo,', 'zàijiàn'],
      translation: 'Good evening, goodbye',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Goodbye',
      correct: ['Zàijiàn', 'Zaijian', 'zaijian', 'zàijiàn', '再见'],
    },
    {
      type: 'multiple_choice',
      instruction: '"Zàijiàn" literally means what?',
      question: 'Pick the literal translation',
      options: [
        { text: 'Again-see (i.e. see you again)', correct: true },
        { text: 'Good-night', correct: false },
        { text: 'Take care', correct: false },
      ],
      explanation: '"Zài" = again, "jiàn" = see. So "zàijiàn" is literally "see you again" — same logic as French "au revoir".',
    },
  ],

  rwenDialogue: {
    intro: "8am, Shanghai. You're walking into a glass-fronted office tower for a meeting. The receptionist looks up from her desk and smiles politely.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zǎoshang hǎo',
        native: 'Good morning',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zǎoshang hǎo', native: 'Good morning', correct: true, feedback: 'Right tone, right time. Mirror the formality.' },
          { target: 'Wǎnshàng hǎo', native: 'Good evening', correct: false, feedback: "It's morning — wǎnshàng means evening. Wrong half of the day." },
          { target: 'Zàijiàn', native: 'Goodbye', correct: false, feedback: "You haven't said hello yet — you can't say goodbye first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Qǐng zuò',
        native: 'Please, have a seat',
      },
      {
        speaker: 'rwen',
        rwenLine: "Smooth. You matched her register — formal, brief, warm. That 'zǎoshang hǎo' was a tiny passport. Hěn hǎo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Good morning (formal greeting)',
        correct: ['Zǎoshang hǎo', 'Zaoshang hao', 'zaoshang hao', 'zǎoshang hǎo', '早上好'],
      },
      {
        prompt: 'Goodbye',
        correct: ['Zàijiàn', 'Zaijian', 'zaijian', 'zàijiàn', '再见'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Greet someone differently in the morning vs the evening today. Even just texting yourself 'Zǎoshang hǎo' at breakfast and 'Wǎnshàng hǎo' at dinner counts.",
    rwenSignoff: "Time-of-day greetings make you sound thoughtful, not just polite. Zàijiàn.",
  },

  phase8: {
    scenario: "8:02am, Pudong, Shanghai. You're stepping out of a black taxi onto polished marble in front of a 40-storey office tower. You walk through the revolving doors and approach the front desk for your first meeting in China — the receptionist looks up and greets you in Mandarin. First impression starts now.",
    rwenRole: "Lǐ xiǎojiě (李小姐) — front-desk receptionist, late 20s, crisp uniform, professional and busy but kind. She'll greet you in formal Mandarin and expect a same-register reply.",
    successCriteria: "User responds with the time-appropriate 'Zǎoshang hǎo' (NOT 'Nǐ hǎo' alone — too casual for the setting; NOT 'Wǎnshàng hǎo' — wrong time of day), then closes the interaction with 'Zàijiàn' rather than English 'bye' when they head up to their meeting.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
