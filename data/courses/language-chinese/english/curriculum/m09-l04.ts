import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Dìtiě, Huǒchē, Gāotiě — Ways to Travel',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "China is moving — at 350 km/h. The gāotiě (高铁), high-speed rail, has rewritten what 'a long journey' means. Beijing to Shanghai in 4.5 hours. Sleek, silent, on time. Today you learn to name the trains, the metros, the cabs.",
    culturalNote: "Some compounds are pure logic: huǒchē (火车) = fire-vehicle = train (from steam-engine days). Gāotiě (高铁) = high-iron = high-speed rail. Dìtiě (地铁) = ground-iron = subway. Once you see the pattern, the words name themselves. Bonus: 'dīdī' (滴滴) is the Chinese Uber — you'll use it constantly.",
  },

  chunks: [
    {
      id: 'ditie',
      target: 'Dìtiě',
      native: 'Subway / metro',
      literal: '(地铁) lit: ground-iron',
      emoji: '🚇',
      phonetic: 'DEE tyeh (dì falls, tiě dips)',
      audioRef: null,
    },
    {
      id: 'huoche',
      target: 'Huǒchē',
      native: 'Train',
      literal: '(火车) lit: fire-vehicle',
      emoji: '🚆',
      phonetic: 'HWAW chuh (huǒ dips, chē flat)',
      audioRef: null,
    },
    {
      id: 'gaotie',
      target: 'Gāotiě',
      native: 'High-speed rail',
      literal: '(高铁) lit: high-iron',
      emoji: '🚄',
      phonetic: 'GAO tyeh (gāo flat, tiě dips)',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Modifier] + [base noun] — compound transport words',
    explanation: "Mandarin builds new nouns by stacking. 'Chē' (车) = vehicle. Add a prefix to specify: huǒchē (fire-car = train), qìchē (gas-car = car/automobile), gōnggòng qìchē (公共汽车, public-gas-car = bus). 'Tiě' (铁) = iron, used for rail systems: dìtiě (subway), gāotiě (high-speed rail).",
    examples: [
      { target: 'Chūzū chē', native: 'Taxi (rented-vehicle)' },
      { target: 'Gōnggòng qìchē', native: 'Public bus (often shortened to bāshì 巴士)' },
      { target: 'Dīdī', native: 'Didi — China\'s Uber' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the transport word to its meaning',
      pairs: [
        { left: 'Dìtiě', right: 'Subway' },
        { left: 'Huǒchē', right: 'Train' },
        { left: 'Gāotiě', right: 'High-speed rail' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'High-speed rail',
      correct: ['Gāotiě', 'Gaotie', 'gaotie', 'gāotiě', '高铁'],
    },
    {
      type: 'fill_blank',
      instruction: 'You take this underground in Shanghai',
      sentence: "Wǒ zuò _____",
      options: ['dìtiě', 'huǒchē', 'gāotiě'],
      correct: 'dìtiě',
      context: "'Zuò' (坐) = sit / take (transport). 'Wǒ zuò dìtiě' = I take the subway. Underground = dì (ground) + tiě (iron rail).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I take the high-speed rail to Hangzhou'",
      words: ['Hángzhōu', 'Wǒ', 'gāotiě', 'qù', 'zuò'],
      correct: ['Wǒ', 'zuò', 'gāotiě', 'qù', 'Hángzhōu'],
      translation: 'I take the high-speed rail to Hangzhou',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Subway / metro',
      correct: ['Dìtiě', 'Ditie', 'ditie', 'dìtiě', '地铁'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in Beijing and need to get to Shanghai today, fast. Which one?",
      question: "Pick the right ride",
      options: [
        { text: "Gāotiě — Beijing-Shanghai in ~4.5 hrs", correct: true },
        { text: "Dìtiě — that's the city subway, not intercity", correct: false },
        { text: "Gōnggòng qìchē — that's a city bus", correct: false },
      ],
      explanation: "Gāotiě (高铁) is China's high-speed rail — the network is the largest in the world. Beijing→Shanghai gāotiě is the iconic intercity ride. Dìtiě stays inside one city.",
    },
  ],

  rwenDialogue: {
    intro: "You're at Beijing South Station (北京南站, Běijīng Nán Zhàn) — the gleaming hub for high-speed rail. A friendly stranger asks where you're heading.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ qù nǎlǐ?',
        native: 'Where are you going?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ zuò gāotiě qù Shànghǎi', native: "I'm taking the high-speed rail to Shanghai", correct: true, feedback: 'Beautiful — full sentence, right verb (zuò), right transport.' },
          { target: 'Wǒ qù dìtiě', native: "I go subway", correct: false, feedback: "Dìtiě is the city subway — you wouldn't take it to Shanghai. You want gāotiě here." },
          { target: 'Wǒ huǒchē', native: "I train", correct: false, feedback: "You need a verb. 'Wǒ zuò huǒchē' (I take the train) — but for Beijing to Shanghai, gāotiě is the everyday choice." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ yě shì! Yí lù shùnfēng',
        native: "Me too! Have a smooth journey",
      },
      {
        speaker: 'rwen',
        rwenLine: "'Yí lù shùnfēng' — may the wind be at your back the whole way. The Mandarin equivalent of 'safe travels'. Tuck it away — locals love hearing it back.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'High-speed rail',
        correct: ['Gāotiě', 'Gaotie', 'gaotie', 'gāotiě', '高铁'],
      },
      {
        prompt: 'Subway / metro',
        correct: ['Dìtiě', 'Ditie', 'ditie', 'dìtiě', '地铁'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name three ways you actually got somewhere this week — out loud, in Mandarin. 'Wǒ zuò dìtiě.' 'Wǒ zuò gōnggòng qìchē.' 'Wǒ zuò chūzū chē.' If one of them was a plane (fēijī, 飞机), you've added a bonus word.",
    rwenSignoff: "Trains are the best way to see China. Tomorrow, you buy a ticket. Zàijiàn.",
  },

  phase8: {
    scenario: "Friday evening in Beijing. You meet a Chinese friend in a bar near Sanlitun. She asks how you got there from your hotel in Wangfujing, and how you plan to get to Hangzhou this weekend.",
    rwenRole: "Zhāng Xīn (张欣) — Beijing-based friend, late 20s, fast natural Mandarin. Curious about your plans.",
    successCriteria: "User uses at least TWO of {dìtiě, huǒchē, gāotiě, chūzū chē, dīdī} with correct verb 'zuò'. Can distinguish dìtiě (city) from gāotiě (intercity) in context — picks gāotiě for the Hangzhou plan.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
