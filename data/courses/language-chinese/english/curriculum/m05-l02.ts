import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Gēge, Dìdi, Jiějie, Mèimei — Siblings (by age)',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "In English you say 'my brother' — and nobody knows if he's older or younger. In Chinese, that vagueness isn't allowed. There's no word for plain 'brother'. You must choose: gēge (older) or dìdi (younger). Same with sisters. This isn't pedantry — it's how Chinese families actually work.",
    culturalNote: "Birth order shapes Chinese family roles. The older sibling (gēge / jiějie) historically carried responsibility — looking after younger ones, leading the way. Younger siblings (dìdi / mèimei) were taught to defer. Modern China has loosened this, but the language still encodes it. Every time you talk about a sibling, you state their place.",
  },

  chunks: [
    {
      id: 'gege',
      target: 'Gēge',
      native: 'Older brother',
      literal: '(哥哥) lit: older-brother-older-brother',
      emoji: '👦',
      phonetic: 'GUH-guh (high & flat, then light)',
      audioRef: null,
    },
    {
      id: 'didi',
      target: 'Dìdi',
      native: 'Younger brother',
      literal: '(弟弟) lit: younger-brother-younger-brother',
      emoji: '🧒',
      phonetic: 'DEE-dee (falling, then light)',
      audioRef: null,
    },
    {
      id: 'jiejie_meimei',
      target: 'Jiějie / Mèimei',
      native: 'Older sister / Younger sister',
      literal: '(姐姐/妹妹) lit: older-sister / younger-sister',
      emoji: '👧',
      phonetic: 'jyeh-jyeh / MAY-may',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Age-distinction is mandatory in sibling words',
    explanation: "There's no neutral 'brother' or 'sister' in Mandarin. You must encode age relative to yourself. Older = gēge / jiějie. Younger = dìdi / mèimei. If you have an older brother, you literally cannot describe him without flagging his seniority.",
    examples: [
      { target: 'Wǒ yǒu yí ge gēge', native: 'I have one older brother' },
      { target: 'Wǒ yǒu yí ge dìdi', native: 'I have one younger brother' },
      { target: 'Wǒ yǒu liǎng ge jiějie', native: 'I have two older sisters' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Gēge', right: 'Older brother' },
        { left: 'Dìdi', right: 'Younger brother' },
        { left: 'Jiějie', right: 'Older sister' },
        { left: 'Mèimei', right: 'Younger sister' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your friend is 3 years younger than you, and male. He's your...",
      sentence: 'Tā shì wǒ _____',
      options: ['dìdi', 'gēge', 'mèimei'],
      correct: 'dìdi',
      context: 'Younger + male = dìdi (弟弟). Even when describing a close friend, you might use sibling words affectionately.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (tone marks optional) or characters',
      prompt: 'Older sister',
      correct: ['Jiějie', 'Jiejie', 'jiejie', 'jiějie', '姐姐'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I have one older brother"',
      words: ['gēge', 'Wǒ', 'yí', 'yǒu', 'ge'],
      correct: ['Wǒ', 'yǒu', 'yí', 'ge', 'gēge'],
      translation: 'I have one older brother',
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'I have two younger sisters',
      correct: ['Wǒ yǒu liǎng ge mèimei', 'Wo you liang ge meimei', 'wo you liang ge meimei', 'wǒ yǒu liǎng ge mèimei', '我有两个妹妹'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A Chinese friend says "Wǒ jiějie zài Měiguó". What do you know about her sister?',
      question: 'Pick the correct interpretation',
      options: [
        { text: 'Her sister is older than her, and lives in the US.', correct: true },
        { text: 'Her sister is younger than her, and lives in the US.', correct: false },
        { text: "We don't know the age — Mandarin doesn't specify.", correct: false },
      ],
      explanation: "'Jiějie' literally encodes age order. The moment she said it, you knew her sister was the older one. This is information Chinese gives you for free.",
    },
  ],

  rwenDialogue: {
    intro: "Late afternoon, sitting with your husband's older sister in her Shenzhen apartment. She's pouring tea and asks about your family back home.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ yǒu xiōngdì jiěmèi ma?',
        native: 'Do you have siblings?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yǒu yí ge gēge hé yí ge mèimei', native: 'I have one older brother and one younger sister', correct: true, feedback: 'Excellent — you placed yourself right in the middle. She now knows your whole family map.' },
          { target: 'Wǒ yǒu xiōngdì', native: 'I have brothers', correct: false, feedback: "'Xiōngdì' is the formal/written word — in conversation, use gēge or dìdi to specify age." },
          { target: 'Wǒ yǒu jiějie mèimei', native: 'I have older-sister younger-sister', correct: false, feedback: "Add the number — 'yí ge jiějie, yí ge mèimei' (one older sister, one younger sister)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ó! Suǒyǐ nǐ shì zhōngjiān de.',
        native: 'Oh! So you\'re the middle one.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you catch what just happened? She instantly knew your birth-order position, just from the words you chose. That's the Chinese kinship system at work.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Older brother', correct: ['Gēge', 'Gege', 'gege', 'gēge', '哥哥'] },
      { prompt: 'I have one younger brother', correct: ['Wǒ yǒu yí ge dìdi', 'Wo you yi ge didi', 'wo you yi ge didi', 'wǒ yǒu yí ge dìdi', '我有一个弟弟'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Map your siblings in Mandarin. Out loud, name each one with the right word: 'Wǒ de gēge...' (older brother), 'Wǒ de mèimei...' (younger sister). If you're an only child, say 'Wǒ shì dúshēng zǐnǚ' — I'm an only child.",
    rwenSignoff: "Birth order is a small lens — but Mandarin makes you look through it every time. Míngtiān jiàn.",
  },

  phase8: {
    scenario: "First-time meeting with your husband's older sister in her Shenzhen apartment. Tea is being poured. She wants to map out your family — to understand where you come from, who came before you, who came after.",
    rwenRole: "Jiějie (大姐 Dàjiě) — your husband's older sister, late 30s, gentle but probing. She'll ask about your siblings and pay close attention to whether you correctly use gēge/dìdi/jiějie/mèimei to mark age.",
    successCriteria: "User correctly distinguishes older vs younger siblings using gēge/dìdi (or jiějie/mèimei), uses the measure word 'ge' (个) with numbers, and avoids the English habit of saying just 'brother' or 'sister' without age-marking.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
