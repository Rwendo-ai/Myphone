import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: 'Wǒ xīwàng — I Hope',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday we opened the past. Today, the future. 'Wǒ xīwàng' (我希望) — I hope. 'Wǒ mèngxiǎng' (我梦想) — I dream — literally 'dream-think'. Mandarin makes hope a verb you carry, not a noun you wait on.",
    culturalNote: "Notice 'yǒu yì tiān' (有一天) — 'have one day' = 'one day' / 'someday'. Mandarin uses 'yǒu' (have) where English uses 'there is'. 'Yǒu yì tiān wǒ huì…' = there is a day, I will… It's how Chinese songs and movies set up dreams.",
  },

  chunks: [
    {
      id: 'wo_xiwang',
      target: 'Wǒ xīwàng…',
      native: 'I hope…',
      literal: '(我希望) lit: I-hope',
      emoji: '🌱',
      phonetic: 'WAW shee-WAHNG',
      audioRef: null,
    },
    {
      id: 'you_yi_tian_wo_hui',
      target: 'Yǒu yì tiān wǒ huì…',
      native: 'One day I will…',
      literal: '(有一天我会) lit: have-one-day-I-will',
      emoji: '🌅',
      phonetic: 'yo ee TYEN waw HWAY',
      audioRef: null,
    },
    {
      id: 'wo_mengxiang',
      target: 'Wǒ mèngxiǎng…',
      native: 'I dream of…',
      literal: '(我梦想) lit: I-dream-think',
      emoji: '✨',
      phonetic: 'WAW mung-SHANG',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Xīwàng" (希望) + clause',
    explanation: '"Xīwàng" takes a whole clause as its object — "I hope [full sentence]". No "that" needed. Same shape with "mèngxiǎng" (dream of).',
    examples: [
      { target: 'Wǒ xīwàng nǐ kuàilè', native: "I hope you're happy" },
      { target: 'Wǒ xīwàng míngtiān bú xiàyǔ', native: "I hope it doesn't rain tomorrow" },
      { target: 'Wǒ mèngxiǎng qù Zhōngguó', native: 'I dream of going to China' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ xīwàng', right: 'I hope' },
        { left: 'Yǒu yì tiān wǒ huì', right: 'One day I will' },
        { left: 'Wǒ mèngxiǎng', right: 'I dream of' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "One day I will go to China."',
      sentence: 'Yǒu yì tiān wǒ _____ qù Zhōngguó.',
      options: ['huì', 'le', 'hěn'],
      correct: 'huì',
      context: '"Huì" = will (future / capability). The promise verb.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I hope…',
      correct: ['Wǒ xīwàng', 'Wo xiwang', 'wo xiwang', '我希望'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "One day I will go."',
      words: ['huì', 'qù', 'Yǒu', 'wǒ', 'yì', 'tiān'],
      correct: ['Yǒu', 'yì', 'tiān', 'wǒ', 'huì', 'qù'],
      translation: 'One day I will go',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I dream of…',
      correct: ['Wǒ mèngxiǎng', 'Wo mengxiang', 'wo mengxiang', '我梦想'],
    },
    {
      type: 'multiple_choice',
      instruction: '"Mèngxiǎng" (梦想) literally means…',
      question: 'Pick the right answer.',
      options: [
        { text: '"dream-think" — to dream-and-think, i.e., to dream of', correct: true },
        { text: '"deep-thought"', correct: false },
        { text: '"sleep-want"', correct: false },
      ],
      explanation: 'Mèng (梦) = dream, xiǎng (想) = think. Together: to dream of, to aspire to.',
    },
  ],

  rwenDialogue: {
    intro: "Late evening on a rooftop in Shenzhen. The skyline glows. Your friend asks what you actually want from life.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ mèngxiǎng shénme?',
        native: 'What do you dream of?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ mèngxiǎng yǒu yì tiān wǒ huì zhù zài Zhōngguó.', native: 'I dream that one day I will live in China.', correct: true, feedback: "Three patterns from this lesson, woven naturally. Your friend is going to remember this answer." },
          { target: 'Wǒ hěn nánguò', native: "I'm sad", correct: false, feedback: 'Wrong feeling for a dream question.' },
          { target: 'Bié dānxīn', native: "Don't worry", correct: false, feedback: 'Not what they asked.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ xīwàng nǐ kěyǐ',
        native: 'I hope you can',
      },
      {
        speaker: 'rwen',
        rwenLine: "You named a dream out loud, in Mandarin, on a rooftop. That's not a small thing. Dreams said in a new language change shape.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I hope…',
        correct: ['Wǒ xīwàng', 'Wo xiwang', 'wo xiwang', '我希望'],
      },
      {
        prompt: 'One day I will…',
        correct: ['Yǒu yì tiān wǒ huì', 'You yi tian wo hui', 'you yi tian wo hui', '有一天我会'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud or in your head, finish this sentence in Mandarin: 'Yǒu yì tiān wǒ huì…' Whatever follows is your direction.",
    rwenSignoff: "Hopes named in a new language take root differently. See you tomorrow — for chéngyǔ, the wisdom of four-character poems.",
  },

  phase8: {
    scenario: "A Chinese mentor takes you out for tea after a long day. They want to know what you really want — career, family, the next five years. They use Mandarin throughout.",
    rwenRole: "Lǎoshī Wáng (王老师) — your Chinese mentor, 60s, soft-spoken, asks gently probing questions.",
    successCriteria: 'User uses "Wǒ xīwàng…" with a clause, "Yǒu yì tiān wǒ huì…" for a future hope, and "Wǒ mèngxiǎng" for a deeper dream.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
