import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-measure-zhi',
  module: 4,
  lesson: 4,
  title: 'Zhī 只 — for animals',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "If you say 'sān gè māo' for 'three cats,' a Chinese speaker will understand — but they'll quietly think 'three little human-cats?' Animals get their own measure word: zhī (只). It also works for one of a pair — one shoe, one chopstick — anything that comes alone when normally it would come paired.",
    culturalNote: "There's a logic in Chinese measure words — they hint at the shape or category of the noun. 'Zhī' (只) is small-creature shaped, light, individual. It's used for cats, dogs, birds, mice, and oddly: one of a pair. One sock = yì zhī wàzi. The other sock is somewhere lonely.",
  },

  chunks: [
    {
      id: 'yi_zhi_mao',
      target: 'Yì zhī māo',
      native: 'one cat',
      literal: '(一只猫) lit: one-[zhī]-cat',
      emoji: '🐱',
      phonetic: 'yee-↘ jrr-→ mao-→ (yī shifts to yì before flat tone)',
      audioRef: null,
    },
    {
      id: 'liang_zhi_gou',
      target: 'Liǎng zhī gǒu',
      native: 'two dogs',
      literal: '(两只狗) lit: two-[zhī]-dog',
      emoji: '🐶',
      phonetic: 'lyang-↘↗ jrr-→ go-↘↗',
      audioRef: null,
    },
    {
      id: 'san_zhi_niao',
      target: 'Sān zhī niǎo',
      native: 'three birds',
      literal: '(三只鸟) lit: three-[zhī]-bird',
      emoji: '🐦',
      phonetic: 'sahn-→ jrr-→ nyao-↘↗',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zhī (只) — small animals & one-of-a-pair',
    explanation: 'Use zhī between a number and most animals (cats, dogs, birds, rabbits, mice). It also marks "one of a pair" — yì zhī xié = one shoe, yì zhī shǒu = one hand. Big animals like horses use a different one (匹 pǐ) — we will meet those later.',
    examples: [
      { target: 'Yì zhī tùzi', native: 'one rabbit' },
      { target: 'Liǎng zhī xié', native: 'two shoes (or just one of a pair)' },
      { target: 'Sì zhī jī', native: 'four chickens' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Yì zhī māo', right: 'one cat' },
        { left: 'Liǎng zhī gǒu', right: 'two dogs' },
        { left: 'Sān zhī niǎo', right: 'three birds' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I have one cat."',
      sentence: 'Wǒ yǒu yì _____ māo.',
      options: ['zhī', 'gè', 'běn'],
      correct: 'zhī',
      context: 'Cats are small animals — zhī is the right bridge. Gè works in a pinch but sounds off. Běn is for books.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'two dogs',
      correct: ['Liǎng zhī gǒu', 'liang zhi gou', 'liǎng zhī gǒu', '两只狗'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'one cat',
      correct: ['Yì zhī māo', 'yi zhi mao', 'yì zhī māo', '一只猫'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which is correct?',
      question: 'You want to say "three birds." Pick one.',
      options: [
        { text: 'Sān zhī niǎo', correct: true },
        { text: 'Sān gè niǎo', correct: false },
        { text: 'Sān běn niǎo', correct: false },
      ],
      explanation: 'Birds are animals — use zhī. Sān gè niǎo would be understood but sounds learner-y. Sān běn would mean "three bound bird-volumes."',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My friend has two dogs."',
      words: ['gè', 'liǎng', 'Wǒ', 'péngyou', 'yǒu', 'gǒu', 'zhī', 'de'],
      correct: ['Wǒ', 'de', 'péngyou', 'yǒu', 'liǎng', 'zhī', 'gǒu'],
      translation: 'My friend has two dogs. (de = possessive marker)',
    },
  ],

  rwenDialogue: {
    intro: "You're chatting with a neighbour who's just shown you a photo of her pets. She wants to know if you have any animals at home.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ jiā yǒu chǒngwù ma?',
        native: 'Do you have pets at home?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yǒu — wǒ yǒu yì zhī māo hé liǎng zhī gǒu.', native: 'Yes — I have one cat and two dogs.', correct: true, feedback: 'Perfect — zhī for both, liǎng (not èr) for "two of." She wants to see photos.' },
          { target: 'Yǒu — wǒ yǒu yí gè māo hé èr gè gǒu.', native: 'Yes — one cat and two dogs (with gè and èr).', correct: false, feedback: 'Two mistakes: animals take zhī, not gè. And "two of" anything uses liǎng, not èr.' },
          { target: 'Wǒ yǒu yì běn māo.', native: 'I have one bound-volume cat.', correct: false, feedback: 'Běn is for books — you just told her you have one cat-book.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ yě yǒu yì zhī māo! Tā jiào Xiǎo Mǐ.',
        native: 'I also have a cat! Her name is Little Rice.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Animals — zhī. Lock that in. The pattern is the same: number, bridge, noun. Different bridges for different categories.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'one cat (pinyin or characters)',
        correct: ['Yì zhī māo', 'yi zhi mao', 'yì zhī māo', '一只猫'],
      },
      {
        prompt: 'two dogs',
        correct: ['Liǎng zhī gǒu', 'liang zhi gou', 'liǎng zhī gǒu', '两只狗'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Spot any animal today — pet, pigeon, stray cat — and silently count it in Mandarin: 'yì zhī ___'. Repeat for any second one as 'liǎng zhī.'",
    rwenSignoff: "Animals are zhī. Keep noticing. Zàijiàn.",
  },

  phase8: {
    scenario: "A friendly neighbour is showing you photos of her cats and chickens on her phone. She'll ask about your pets back home — you need to use 'zhī' correctly with at least two different animals and remember liǎng for 'two of.'",
    rwenRole: "Neighbour Auntie Chén (陈阿姨) — early 60s, runs a small courtyard, has 'three cats and a regretful chicken.' Loves talking about animals and will ask follow-up questions about names and colours.",
    successCriteria: "User uses 'zhī' as the measure word for at least two different animals (cat, dog, bird, etc.), uses 'liǎng zhī' rather than 'èr zhī' for 'two of,' and answers a yes/no question about pets correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
