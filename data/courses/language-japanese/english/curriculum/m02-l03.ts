import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-arigatou',
  module: 2,
  lesson: 3,
  title: 'ありがとう / ありがとうございます — Thank You',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Thanks comes in two registers in Japanese — and choosing the wrong one is a tell. ありがとう is what you say to a friend. ありがとうございます is what you say to literally everyone else. Let me show you the line.",
    culturalNote: "Japanese has explicit politeness levels baked into the grammar — you can't avoid choosing one. With strangers, shop staff, anyone older or higher-status, the default is the long form: ありがとうございます. Save the short ありがとう for friends, family, and people who've already invited the casual register. When in doubt, go long.",
  },

  chunks: [
    {
      id: 'arigatou',
      target: 'ありがとう (arigatou)',
      native: 'Thanks (informal — friends, family)',
      literal: 'It-is-difficult — i.e. you went out of your way',
      emoji: '🙏',
      phonetic: 'a-ri-GAH-toh',
      audioRef: null,
    },
    {
      id: 'arigatou_gozaimasu',
      target: 'ありがとうございます (arigatou gozaimasu)',
      native: 'Thank you (polite — strangers, staff, elders)',
      literal: 'Thank-you it-honourably-is',
      emoji: '🙇',
      phonetic: 'a-ri-GAH-toh go-ZAI-mas',
      audioRef: null,
    },
    {
      id: 'doumo',
      target: 'どうも (doumo)',
      native: 'Thanks (very casual / quick acknowledgement)',
      literal: 'In-every-way',
      emoji: '👍',
      phonetic: 'DOH-moh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'です/ます — the polite default',
    explanation: "Japanese verbs have two layers: a plain form (used with friends) and a polite form ending in です or ます (used with everyone else). ありがとう is plain; ありがとうございます is polite. With anyone you've just met or who's serving you, default to the polite form — it's never wrong, only sometimes overkill.",
    examples: [
      { target: 'ありがとう (to a friend)', native: 'Thanks' },
      { target: 'ありがとうございます (to a clerk)', native: 'Thank you' },
      { target: 'すみません、ありがとうございます', native: 'Sorry to trouble you, thank you' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'ありがとう', right: 'Thanks (informal)' },
        { left: 'ありがとうございます', right: 'Thank you (polite)' },
        { left: 'どうも', right: 'Thanks (quick / casual)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A コンビニ clerk hands you your change and receipt. What do you say?',
      question: 'Choose the right register',
      options: [
        { text: 'ありがとうございます', correct: true },
        { text: 'ありがとう', correct: false },
        { text: 'どうも', correct: false },
      ],
      explanation: "Strangers and staff get the polite ありがとうございます. ありがとう alone to a clerk lands as too familiar — like calling a waiter 'mate' on first meeting. どうも is fine but feels short for a real exchange.",
    },
    {
      type: 'fill_blank',
      instruction: 'Your Japanese friend just texted you a meme. How do you reply?',
      sentence: '_____！',
      options: ['ありがとう', 'ありがとうございます', 'すみません'],
      correct: 'ありがとう',
      context: "Casual chat with someone you know well — match the register.",
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'Thank you (polite, to a stranger or clerk)',
      correct: ['ありがとうございます', 'arigatou gozaimasu', 'Arigatou gozaimasu', 'arigatougozaimasu'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely thank a clerk who just helped you',
      words: ['ございます', 'ありがとう'],
      correct: ['ありがとう', 'ございます'],
      translation: 'Thank you (polite)',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'Thanks (informal, to a friend)',
      correct: ['ありがとう', 'arigatou', 'Arigatou'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a 7-Eleven (コンビニ) in Shibuya. The clerk hands you a hot can of coffee from the warmer. Acknowledge it correctly.",
    lines: [
      {
        speaker: 'npc',
        target: 'はい、どうぞ。お熱いです。',
        native: "Here you go. It's hot.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'ありがとうございます', native: 'Thank you (polite)', correct: true, feedback: 'Spot on — the polite form for a stranger serving you. The clerk bows slightly.' },
          { target: 'ありがとう', native: 'Thanks (informal)', correct: false, feedback: "Not wrong, but reads as too familiar to a stranger working the till. Default to ありがとうございます with anyone in uniform." },
          { target: 'すみません', native: 'Sorry / Excuse me', correct: false, feedback: "Tempting — and すみません can mean thanks — but here you want explicit gratitude. ありがとうございます is the cleaner read." },
        ],
      },
      {
        speaker: 'npc',
        target: 'またのご来店をお待ちしております。',
        native: 'We look forward to your next visit.',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Polite by default. ありがとうございます with strangers, ありがとう with friends — that\'s the rule that holds across every situation.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Thank you (polite, to a stranger or clerk)', correct: ['ありがとうございます', 'arigatou gozaimasu', 'Arigatou gozaimasu'] },
      { prompt: 'Thanks (informal, to a friend)', correct: ['ありがとう', 'arigatou', 'Arigatou'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Practise the switch: say ありがとうございます to anyone serving you (barista, cashier) and ありがとう to a friend. Notice how your body language shifts with the register — the long form pulls a small bow out of you almost automatically.',
    rwenSignoff: 'Politeness is the default. ありがとうございます — for reading this. また明日.',
  },

  phase8: {
    scenario: "You're paying for a bento and a bottle of green tea at a Family Mart in Asakusa at 7pm. The clerk bags everything, hands you the receipt, and a small wrapped chopsticks set unprompted. You owe a clean thank-you in the right register.",
    rwenRole: 'Family Mart clerk — ~22, part-timer, bowing as he hands things over; he\'ll register ありがとう alone as oddly familiar from a stranger, but ありがとうございます lands cleanly.',
    successCriteria: "User says 'ありがとうございます' (NOT 'ありがとう' alone — wrong register for a stranger in uniform), uses 'すみません' to acknowledge the unprompted chopsticks (thanks-for-the-trouble register from L02), and avoids defaulting to plain 'どうも' which reads abrupt at a checkout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
