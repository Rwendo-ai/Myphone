import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Wǒ zhù zài... — Where I live',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Wǒ zhù zài Sydney' — I live in Sydney. 'Zhù' (住) means to dwell; 'zài' (在) is the locator 'at/in'. Together they place you on the map. And there's a quiet hero in today's lesson: the 'le' particle for *duration*. 'Wǒ zài zhèlǐ wǔ nián le' = 'I've been here 5 years' — and the 'le' implies you're STILL here. State ongoing.",
    culturalNote: "Mandarin 'le' has multiple jobs — last lesson it marked a state-change ('jiéhūn le'); today it marks duration-up-to-now. Both senses share a feeling of 'something has come about and is current'. English uses tenses for this distinction (have-been vs was). Mandarin uses 'le'. Listen for it everywhere.",
  },

  chunks: [
    {
      id: 'wo_zhu_zai_sydney',
      target: 'Wǒ zhù zài Sydney',
      native: 'I live in Sydney',
      literal: '(我住在悉尼) lit: I-dwell-at-Sydney',
      emoji: '🏠',
      phonetic: 'WAW joo dzigh SID-nee',
      audioRef: null,
    },
    {
      id: 'wu_nian_le',
      target: 'Wǒ zài zhèlǐ wǔ nián le',
      native: "I've been here 5 years",
      literal: '(我在这里五年了) lit: I-at-here-five-year-(ongoing)',
      emoji: '5️⃣',
      phonetic: 'WAW dzigh JUH-lee woo nyen luh',
      audioRef: null,
    },
    {
      id: 'yiqian_wo_zhu_zai',
      target: 'Yǐqián wǒ zhù zài ___',
      native: 'Before, I lived in ___',
      literal: '(以前我住在___) lit: before-I-dwell-at-___',
      emoji: '⏪',
      phonetic: 'yee-CHYEN waw joo dzigh ___',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Zài" + place, and "le" for ongoing duration',
    explanation: "Two threads. (1) 'Zhù zài [place]' — to live AT a place. The order is verb-zài-place: 'zhù zài Sydney', never 'Sydney zhù zài'. (2) For 'I've been here X years (and still am)', use 'X nián le' at the end. The 'le' is the magic — it makes the duration feel ongoing. 'Wǒ zài zhèlǐ wǔ nián' (no le) suggests you WERE here 5 years; 'Wǒ zài zhèlǐ wǔ nián le' (with le) says you ARE still here, having been so for 5 years.",
    examples: [
      { target: 'Wǒ zhù zài Beijing (我住在北京)', native: 'I live in Beijing — verb-zài-place' },
      { target: 'Wǒ zài zhèlǐ sān nián le (我在这里三年了)', native: "I've been here 3 years (still am) — duration-le" },
      { target: 'Yǐqián wǒ zhù zài London (以前我住在伦敦)', native: 'Before, I lived in London — "yǐqián" for past habit' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Wǒ zhù zài Sydney', right: 'I live in Sydney' },
        { left: 'Wǒ zài zhèlǐ wǔ nián le', right: "I've been here 5 years" },
        { left: 'Yǐqián wǒ zhù zài...', right: 'Before, I lived in...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I live in Sydney',
      correct: ['Wǒ zhù zài Sydney', 'Wo zhu zai Sydney', 'wo zhu zai Sydney', 'wǒ zhù zài Sydney', '我住在悉尼'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — you want to say "I live in Beijing"',
      sentence: 'Wǒ zhù _____ Beijing',
      options: ['zài', 'shì', 'le'],
      correct: 'zài',
      context: '"Zài" is the locator. "Zhù zài [place]" = "live at [place]" — a fixed pattern.',
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the version that means 'I've been here 5 years (and still am)'",
      question: 'Which sentence implies you\'re STILL here?',
      options: [
        { text: 'Wǒ zài zhèlǐ wǔ nián le', correct: true },
        { text: 'Wǒ zài zhèlǐ wǔ nián', correct: false },
        { text: 'Wǒ shì zhèlǐ wǔ nián', correct: false },
      ],
      explanation: 'The "le" at the end is the duration-up-to-now marker — without it, the sentence sounds finished/past. With it: still ongoing.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I've been here 5 years (and still am)",
      correct: ['Wǒ zài zhèlǐ wǔ nián le', 'Wo zai zheli wu nian le', 'wo zai zheli wu nian le', 'wǒ zài zhèlǐ wǔ nián le', '我在这里五年了'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Before, I lived in London"',
      words: ['London', 'wǒ', 'Yǐqián', 'zhù zài'],
      correct: ['Yǐqián', 'wǒ', 'zhù zài', 'London'],
      translation: 'Before, I lived in London',
    },
  ],

  rwenDialogue: {
    intro: "Shanghai expo introduction. You're at a trade booth on Day 2 — name badge, polite chaos around you. A woman from a Hong Kong distributor stops at your stand and starts the polite where-are-you-from volley.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ zhù zài nǎlǐ?',
        native: 'Where do you live?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ zhù zài Sydney, wǒ zài zhèlǐ wǔ nián le', native: "I live in Sydney — I've been here 5 years", correct: true, feedback: 'Place + duration with "le" — they now know not just where but how long. Two sentences, full picture.' },
          { target: 'Wǒ Sydney zhù zài', native: 'I Sydney live at', correct: false, feedback: 'Word order — verb comes first: "Wǒ zhù zài Sydney". Place goes after "zài".' },
          { target: 'Wǒ zài zhèlǐ wǔ nián', native: "I'm here 5 years (no le)", correct: false, feedback: 'Without "le" the sentence sounds past-tense and finished. Add "le" at the end to keep it ongoing.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wā, hǎo jiǔ! Yǐqián nǐ zhù zài nǎlǐ?',
        native: "Wow, that's a long time! Where did you live before?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how they used 'yǐqián' to ask about before? Same word, same shape, just rotated to a question. Mandarin gives you the same lego pieces in every direction.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I live in Sydney',
        correct: ['Wǒ zhù zài Sydney', 'Wo zhu zai Sydney', 'wo zhu zai Sydney', 'wǒ zhù zài Sydney', '我住在悉尼'],
      },
      {
        prompt: "I've been here 5 years (and still am)",
        correct: ['Wǒ zài zhèlǐ wǔ nián le', 'Wo zai zheli wu nian le', 'wo zai zheli wu nian le', 'wǒ zài zhèlǐ wǔ nián le', '我在这里五年了'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build your home sentence — 'Wǒ zhù zài [your city], wǒ zài zhèlǐ ___ nián le.' Say it once. Hear how 'le' makes the years feel alive instead of finished.",
    rwenSignoff: "Place set, duration alive. Tomorrow: who you are, in adjectives. Zàijiàn.",
  },

  phase8: {
    scenario: "Shanghai International Expo, Day 2 of a trade show. Your booth sits in Hall 3 — a flat-screen demo loop running, business cards in a neat fan, two cups of tepid coffee. Around 11am the foot traffic spikes. A buyer from a Hong Kong distributor stops at your booth, glances at the demo, and starts with the small-talk before the business: where are you from, where do you live, how long have you been there. This is the polite expo dance.",
    rwenRole: "Liáng Huì (梁慧) — senior buyer for a Hong Kong import distributor, 40s, sharp, polite, used to Mandarin-second-language English speakers. She'll take 30 seconds of small talk before pivoting to the actual product question.",
    successCriteria: "User says where they live with 'Wǒ zhù zài [place]' (correct word order: verb-zài-place), AND uses the duration 'le' construction at least once — 'Wǒ zài [place] [number] nián le' — to convey ongoing residence. Bonus: they mention a previous city using 'Yǐqián wǒ zhù zài ___'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
