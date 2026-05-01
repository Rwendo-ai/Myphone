import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: '...Zài nǎlǐ? — Where is...?',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Imagine: you're in a Beijing hutong, alleys twisting like noodles, and you need a bank. In English you ask 'Where's the bank?' In Mandarin you put the place FIRST: 'Yínháng zài nǎlǐ?' — bank-located-where? It feels backwards at first. After today it won't.",
    culturalNote: "Mandarin word order for location is [place] + zài (在, 'is at') + nǎlǐ (哪里, 'where'). The pattern never moves. Once you know one — 'Cèsuǒ zài nǎlǐ?' (where's the toilet?) — you know all of them. Just swap the noun.",
  },

  chunks: [
    {
      id: 'yinhang_zai_nali',
      target: 'Yínháng zài nǎlǐ?',
      native: "Where's the bank?",
      literal: "(银行在哪里?) lit: bank-located-where?",
      emoji: '🏦',
      phonetic: 'YIN-hang dzye NA-lee',
      audioRef: null,
    },
    {
      id: 'cesuo_zai_nali',
      target: 'Cèsuǒ zài nǎlǐ?',
      native: "Where's the toilet?",
      literal: "(厕所在哪里?) lit: toilet-located-where?",
      emoji: '🚻',
      phonetic: 'tsuh-SWAW dzye NA-lee',
      audioRef: null,
    },
    {
      id: 'zai_nali',
      target: 'Zài nàlǐ',
      native: 'Over there',
      literal: '(在那里) lit: located-there',
      emoji: '👉',
      phonetic: 'dzye NA-lee (the "nà" falls — that one)',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Place] + zài nǎlǐ?',
    explanation: "Place comes first, then 'zài nǎlǐ?' (located-where). Opposite of English. To answer, swap 'nǎlǐ' for 'nàlǐ' (over there) or 'zhèlǐ' (right here). Tones distinguish them: nǎ (dipping, 'which') vs nà (falling, 'that').",
    examples: [
      { target: 'Dìtiě zhàn zài nǎlǐ?', native: "Where's the metro station?" },
      { target: 'Jiǔdiàn zài nǎlǐ?', native: "Where's the hotel?" },
      { target: 'Zài zhèlǐ', native: 'Right here' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Yínháng zài nǎlǐ?', right: "Where's the bank?" },
        { left: 'Cèsuǒ zài nǎlǐ?', right: "Where's the toilet?" },
        { left: 'Zài nàlǐ', right: 'Over there' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Build the question 'Where's the bank?' — Mandarin word order",
      words: ['nǎlǐ?', 'Yínháng', 'zài'],
      correct: ['Yínháng', 'zài', 'nǎlǐ?'],
      translation: "Where's the bank? (lit: bank-located-where?)",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "Where's the toilet?",
      correct: ['Cèsuǒ zài nǎlǐ?', 'Cesuo zai nali?', 'cesuo zai nali', 'cèsuǒ zài nǎlǐ', '厕所在哪里?', '厕所在哪里'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the question — a stranger asks you',
      sentence: 'Yínháng _____ nǎlǐ?',
      options: ['zài', 'shì', 'yǒu'],
      correct: 'zài',
      context: "'Zài' (在) means 'is located at'. It's the location verb — different from 'shì' (是, to be) and 'yǒu' (有, to have).",
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Cèsuǒ zài nǎlǐ?' — you point. What do you say?",
      question: 'Pick the natural reply',
      options: [
        { text: 'Zài nàlǐ', correct: true },
        { text: 'Nǎlǐ zài', correct: false },
        { text: 'Wǒ hǎo', correct: false },
      ],
      explanation: "'Zài nàlǐ' (在那里) — over there. 'Nà' falls (4th tone) and means 'that'. 'Nǎ' dips (3rd tone) and means 'which'. Tones decide meaning here.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Over there',
      correct: ['Zài nàlǐ', 'Zai nali', 'zai nali', 'zài nàlǐ', '在那里'],
    },
  ],

  rwenDialogue: {
    intro: "Late afternoon in a Shanghai backstreet. You've been walking for an hour. Your bladder is winning. A grandmother is shelling peas on a low stool outside a noodle shop. You walk up to her.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cèsuǒ zài nǎlǐ?', native: "Where's the toilet?", correct: true, feedback: 'Direct, clear, exactly right. She points without missing a pea.' },
          { target: 'Nǎlǐ cèsuǒ?', native: 'Where toilet?', correct: false, feedback: "Word order. Mandarin puts the place FIRST: cèsuǒ zài nǎlǐ?" },
          { target: 'Wǒ yào cèsuǒ', native: 'I want a toilet', correct: false, feedback: "Understandable, but not the way locals ask. Use the 'zài nǎlǐ?' pattern — it's the natural question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Zài nàlǐ',
        native: 'Over there',
      },
      {
        speaker: 'npc',
        target: 'Zhí zǒu, yòu zhuǎn',
        native: 'Go straight, turn right',
      },
      {
        speaker: 'rwen',
        rwenLine: "She gave you the answer in two breaths and didn't slow her hands. That's everyday Mandarin — short, exact, kind. Tomorrow we learn 'left, right, straight' so you can follow her.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Where's the bank? (in Mandarin)",
        correct: ['Yínháng zài nǎlǐ?', 'Yinhang zai nali?', 'yinhang zai nali', 'yínháng zài nǎlǐ', '银行在哪里?', '银行在哪里'],
      },
      {
        prompt: 'Over there',
        correct: ['Zài nàlǐ', 'Zai nali', 'zai nali', 'zài nàlǐ', '在那里'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one place in your house — the kettle, the back door, the cat — and ask out loud: 'X zài nǎlǐ?' Then answer yourself: 'Zài nàlǐ.' Get the word order into your mouth before you need it on a Beijing street.",
    rwenSignoff: "Tomorrow, you'll learn left, right, and straight ahead. Zàijiàn — see you tomorrow.",
  },

  phase8: {
    scenario: "Mid-afternoon in a quiet Suzhou canal-side neighbourhood. You're trying to find a famous teahouse but you've taken a wrong lane. An older woman is watering pot plants outside her door. You need to ask where the bank is first (you have no cash for the teahouse) and then where the toilet is.",
    rwenRole: "Lǐ Āyí (李阿姨) — local auntie, ~65, lived in this lane all her life. Patient with foreigners but won't repeat herself three times. Speaks at normal pace.",
    successCriteria: "User asks 'Yínháng zài nǎlǐ?' AND 'Cèsuǒ zài nǎlǐ?' with correct word order (place FIRST, not 'Nǎlǐ yínháng?'). Recognises 'Zài nàlǐ' as 'over there' and doesn't confuse it with 'nǎlǐ'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
