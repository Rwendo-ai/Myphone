import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: 'Chéngyǔ — Chinese Proverbs',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "Chéngyǔ (成语) are four-character idioms — wisdom compressed into syllables. Chinese kids memorise hundreds. Adults use them in speeches, texts, business emails. Learn just three, and your Mandarin steps up a level overnight.",
    culturalNote: "Chéngyǔ aren't dusty proverbs in a textbook — they're alive. A boss texts 'Mǎ dào chénggōng!' before your big meeting. A new friend says 'Yī jiàn rúgù!' after a great first chat. Wedding banners shout 'Jiā hé wàn shì xīng'. Each one carries an old story, used new.",
  },

  chunks: [
    {
      id: 'ma_dao_chenggong',
      target: 'Mǎ dào chénggōng',
      native: 'May success arrive on horseback',
      literal: '(马到成功) lit: horse-arrive-succeed — instant success',
      emoji: '🐎',
      phonetic: 'mah DAO chung-GONG',
      audioRef: null,
    },
    {
      id: 'yi_jian_ru_gu',
      target: 'Yī jiàn rúgù',
      native: 'Old friends at first sight',
      literal: '(一见如故) lit: one-see-like-old — instant kinship',
      emoji: '🤝',
      phonetic: 'ee JYEN roo-GOO',
      audioRef: null,
    },
    {
      id: 'jia_he_wan_shi_xing',
      target: 'Jiā hé wàn shì xīng',
      native: 'Harmonious family, all things flourish',
      literal: '(家和万事兴) lit: family-harmony-ten-thousand-things-flourish',
      emoji: '🏠',
      phonetic: 'jya HUR wahn shrr SHING',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How chéngyǔ work',
    explanation: 'Almost always exactly four characters. Often condensed from a 2000-year-old story. Used as a single unit — like English idioms ("piece of cake"), but more revered. Drop one well, watch eyes light up.',
    examples: [
      { target: 'Mǎ dào chénggōng', native: 'Said before exams, launches, big meetings' },
      { target: 'Yī jiàn rúgù', native: 'After a wonderful first meeting with someone' },
      { target: 'Jiā hé wàn shì xīng', native: 'On wedding banners, family gatherings' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the chéngyǔ to its meaning',
      pairs: [
        { left: 'Mǎ dào chénggōng', right: 'Instant success (success arriving on horseback)' },
        { left: 'Yī jiàn rúgù', right: 'Instant kinship (old friends at first sight)' },
        { left: 'Jiā hé wàn shì xīng', right: 'Harmonious family, all flourishes' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your friend has a job interview today. Send them:',
      sentence: '_____ chénggōng!',
      options: ['Mǎ dào', 'Yī jiàn', 'Jiā hé'],
      correct: 'Mǎ dào',
      context: 'The "good luck on a big moment" chéngyǔ.',
    },
    {
      type: 'translate',
      instruction: 'Type the chéngyǔ for "old friends at first sight"',
      prompt: 'Old friends at first sight (chéngyǔ)',
      correct: ['Yī jiàn rúgù', 'Yi jian ru gu', 'yi jian rugu', 'yi jian ru gu', '一见如故'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the wedding-banner chéngyǔ',
      words: ['xīng', 'hé', 'Jiā', 'shì', 'wàn'],
      correct: ['Jiā', 'hé', 'wàn', 'shì', 'xīng'],
      translation: 'Harmonious family, all things flourish',
    },
    {
      type: 'translate',
      instruction: 'Type the "instant success" chéngyǔ',
      prompt: 'Success arrives on horseback (chéngyǔ)',
      correct: ['Mǎ dào chénggōng', 'Ma dao chenggong', 'ma dao chenggong', '马到成功'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A new friend just said something funny and you both laughed for an hour. Which chéngyǔ fits?',
      question: 'Pick the right one.',
      options: [
        { text: 'Yī jiàn rúgù — "old friends at first sight"', correct: true },
        { text: 'Mǎ dào chénggōng — "success on horseback"', correct: false },
        { text: 'Jiā hé wàn shì xīng — "harmonious family"', correct: false },
      ],
      explanation: 'Yī jiàn rúgù = the moment a brand-new person feels like an old friend. Tell them this — they\'ll smile.',
    },
  ],

  rwenDialogue: {
    intro: "First time meeting your friend's parents in Hangzhou. The mum is curious — why are you learning Chinese? You answer. She laughs warmly. The conversation flows easily, two hours pass like ten minutes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wǒ juéde wǒmen liáo de hěn hǎo',
        native: 'I feel we chat really well',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yě juéde — yī jiàn rúgù!', native: 'I feel the same — old friends at first sight!', correct: true, feedback: "She just lit up. Dropping a chéngyǔ at the right moment — that's not learning Mandarin, that's speaking it." },
          { target: 'Mǎ dào chénggōng', native: 'Success on horseback', correct: false, feedback: "Right register, wrong chéngyǔ — that one's for big launches, not warm meetings." },
          { target: 'Wǒ hěn nánguò', native: "I'm sad", correct: false, feedback: 'Very wrong feeling.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hāhā, nǐ shuō de zhēn hǎo!',
        native: 'Haha, you put that beautifully!',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just landed a chéngyǔ in real time. That's the move that makes Chinese aunties brag about you to their friends.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Instant success (the "horseback" chéngyǔ)',
        correct: ['Mǎ dào chénggōng', 'Ma dao chenggong', 'ma dao chenggong', '马到成功'],
      },
      {
        prompt: 'Old friends at first sight (chéngyǔ)',
        correct: ['Yī jiàn rúgù', 'Yi jian ru gu', 'yi jian rugu', 'yi jian ru gu', '一见如故'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send 'Mǎ dào chénggōng!' to one person who has a big day coming up. The text alone says: I see you, I know your culture, I'm rooting for you.",
    rwenSignoff: "Three chéngyǔ. Three doors into Chinese minds. Tomorrow — the final lesson. Bring everything.",
  },

  phase8: {
    scenario: "Your friend introduces you to her grandmother — the family matriarch — at a Lunar New Year dinner in Shanghai. The grandmother tests you: she throws a situation at you, expects a chéngyǔ in return.",
    rwenRole: "Nǎinai (奶奶) — your friend's grandmother, 80, sharp, traditional, will be delighted by appropriate chéngyǔ use.",
    successCriteria: 'User correctly chooses and uses at least two of the three chéngyǔ in fitting situations she describes (a new business / a new friend / a wedding).',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
