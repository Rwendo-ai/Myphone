import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-chinese-food',
  module: 7,
  lesson: 8,
  title: 'Zhōngguó cài — Chinese food',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three iconic dishes you'll order a thousand times: jiǎozi (饺子, dumplings) on Lunar New Year's Eve, huǒguō (火锅, FIRE pot) in Sichuan winter, and xiǎolóngbāo (小笼包, soup dumplings) in a Shanghai breakfast joint. Bonus boss-level: gōngbǎo jīdīng (宫保鸡丁, Kung Pao chicken) — the dish foreigners think they know but in China is something else entirely. Today: real names, real dishes, real menus.",
    culturalNote: "'Huǒguō' literally means 'fire pot' — and that's exactly what it is. A boiling pot in the middle of the table, you cook your own food. It's communal eating taken to the extreme: everyone reaches in, everyone shares, you all get sweaty together. In Sichuan, the broth is fierce málà (numb-spicy) — your lips go numb from the Sichuan peppercorns. This is winter survival food.",
  },

  chunks: [
    {
      id: 'jiaozi',
      target: 'Jiǎozi',
      native: 'Dumplings',
      literal: '(饺子) lit: dumpling',
      emoji: '🥟',
      phonetic: 'JYAO-dz',
      audioRef: null,
    },
    {
      id: 'huoguo',
      target: 'Huǒguō',
      native: 'Hotpot (lit: "fire pot")',
      literal: '(火锅) lit: fire-pot',
      emoji: '🔥🍲',
      phonetic: 'HWAW gwoh',
      audioRef: null,
    },
    {
      id: 'gongbao_jiding',
      target: 'Gōngbǎo jīdīng',
      native: 'Kung Pao chicken',
      literal: '(宫保鸡丁) lit: palace-protector-chicken-cube',
      emoji: '🌶️🍗',
      phonetic: 'gohng-bow JEE-ding',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Famous-dish names — read the cooking style",
    explanation: "Many Chinese dish names embed the cooking style or cut. 'Jīdīng' (鸡丁) = chicken cubes. 'Niúliǔ' (牛柳) = beef strips. 'Yúpiàn' (鱼片) = fish slices. 'Gōngbǎo jīdīng' = palace-style cubed chicken. Once you spot 'dīng' (cube), 'liǔ' (strip), 'piàn' (slice), 'sī' (shred) on a menu, you can guess what's coming texture-wise.",
    examples: [
      { target: 'Jīdīng', native: 'Cubed chicken' },
      { target: 'Yúpiàn', native: 'Fish slices' },
      { target: 'Tǔdòusī', native: 'Shredded potato' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Chinese dish to its name',
      pairs: [
        { left: 'Jiǎozi', right: 'Dumplings' },
        { left: 'Huǒguō', right: 'Hotpot' },
        { left: 'Gōngbǎo jīdīng', right: 'Kung Pao chicken' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Hotpot (the famous communal dish)',
      correct: ['Huǒguō', 'Huoguo', 'huoguo', 'huǒguō', '火锅'],
    },
    {
      type: 'fill_blank',
      instruction: "It's Lunar New Year's Eve — the family is making _____",
      sentence: 'Chúxī wǎnshang, wǒmen yìqǐ bāo _____',
      options: ['jiǎozi', 'gōngbǎo jīdīng', 'huǒguō'],
      correct: 'jiǎozi',
      context: "'Bāo jiǎozi' (wrap dumplings) is THE Chinese New Year's Eve activity — entire families wrap together. 'Bāo' means wrap. The other two are great dishes but not the New Year's Eve ritual.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Soup dumplings (the Shanghai specialty)',
      correct: ['Xiǎolóngbāo', 'Xiaolongbao', 'xiaolongbao', 'xiǎolóngbāo', '小笼包'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I want to eat hotpot tonight"',
      words: ['huǒguō', 'wǎnshang', 'Wǒ', 'jīntiān', 'yào', 'chī'],
      correct: ['Wǒ', 'jīntiān', 'wǎnshang', 'yào', 'chī', 'huǒguō'],
      translation: 'I want to eat hotpot tonight',
    },
    {
      type: 'multiple_choice',
      instruction: "What does 'gōngbǎo jīdīng' tell you about the dish based on the name structure?",
      question: 'Pick the read',
      options: [
        { text: 'Palace-style cubed chicken — the "dīng" tells you the chicken is cubed.', correct: true },
        { text: 'Sliced chicken in a palace-style sauce.', correct: false },
        { text: 'Shredded chicken with peppers.', correct: false },
      ],
      explanation: "'Dīng' (丁) = cubes. So 'jīdīng' = cubed chicken. 'Gōngbǎo' (宫保) refers to a Qing dynasty official whose chef invented the dish. The name is a literal description: palace-protector-style cubed chicken. The American version (gluey orange goo) is NOT what you get in China — real gōngbǎo is dry, peanut-rich, gently spicy.",
    },
  ],

  rwenDialogue: {
    intro: "Chengdu in January. You and three Chinese friends have ducked into a steamy huǒguō restaurant. Snow outside, condensation on the windows. The owner approaches with three menus.",
    lines: [
      {
        speaker: 'npc',
        target: "Tiānqì zhème lěng — chī huǒguō zuì hǎo. Yào shénme guō?",
        native: "Weather's so cold — hotpot is best. What kind of pot?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lái yí ge yuānyāng guō — yí bàn málà, yí bàn qīngtāng', native: "One half-and-half pot please — half málà, half clear broth", correct: true, feedback: "Local-level move. 'Yuānyāng guō' (mandarin-duck pot) splits the pot down the middle. You get the spicy thrill AND the fall-back broth." },
          { target: 'Lái málà guō', native: "Bring the málà pot (full Sichuan)", correct: false, feedback: "Brave, but unless you're trained, full málà will hospitalise your tongue. Always start with 'yuānyāng guō' — half spicy, half clear." },
          { target: 'Wǒ chī jiǎozi', native: "I eat dumplings (wrong restaurant!)", correct: false, feedback: "You're at a HOTPOT place — order huǒguō. Jiǎozi is a different setting (and you want them in Beijing in winter, not Sichuan)." },
        ],
      },
      {
        speaker: 'npc',
        target: "Hǎo de. Yào diǎn shénme cài? Niúròu? Yángròu? Mógū?",
        native: "OK. What ingredients? Beef? Lamb? Mushrooms?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lái yí ge niúròu, yí ge yángròu, sān ge mógū. Hái yào yí pán dòufu', native: "One beef, one lamb, three mushrooms. Plus one plate of tofu", correct: true, feedback: "Three 'lái yí ge's plus 'yí pán' (one plate). You ordered a real Sichuan hotpot. The owner is already stomping toward the kitchen." },
          { target: 'Hěn duō', native: "A lot (vague)", correct: false, feedback: "Too vague — name the ingredients. 'Lái yí ge X, yí ge Y' is the rhythm." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You walked into a Sichuan huǒguō and managed the spice level, the cuts, the proteins. Most foreigners just point at pictures. You ordered with words — and the right ones. Tomorrow we host. Welcome someone IN.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Dumplings (in pinyin or characters)', correct: ['Jiǎozi', 'Jiaozi', 'jiaozi', 'jiǎozi', '饺子'] },
      { prompt: 'Hotpot (the "fire pot" dish)', correct: ['Huǒguō', 'Huoguo', 'huoguo', 'huǒguō', '火锅'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick ONE Chinese dish — jiǎozi, huǒguō, gōngbǎo jīdīng, or xiǎolóngbāo — and Google a real recipe (in English is fine). Read the ingredients. Notice how few there are. Notice how the cooking technique (zhǔ, chǎo, zhēng) drives the whole dish. Tomorrow when someone says 'Chinese food', you'll have a real answer.",
    rwenSignoff: "Tomorrow — being a host. Welcoming someone, seating them, telling them not to be shy. The flip side of every dinner. Zàijiàn.",
  },

  phase8: {
    scenario: "Friday night, Sichuan-style hotpot restaurant in your city. You've brought a non-Chinese friend who's never had hotpot. They look terrified. The waitress arrives with menus. YOU need to order for the table — confidently, like a regular — and explain to your friend what's coming.",
    rwenRole: "Wáng Xiǎojiě (王小姐) — Sichuan hotpot waitress, mid-20s, friendly but busy. She'll quiz you about pot type (málà / qīngtāng / yuānyāng), proteins, vegetables, and dipping sauce. She'll smile if you order in Mandarin and bring a clear-broth pot if you ask for less spice. Rwen plays both her and your nervous friend.",
    successCriteria: "User orders a yuānyāng guō (split pot) or qīngtāng (clear broth), uses 'lái yí ge...' for at least 3 ingredients, says 'bú yào tài là' to manage spice, and names at least 2 dishes correctly (huǒguō, plus jiǎozi or xiǎolóngbāo as a side). The vibe should be confident and warm — you're the local in this room tonight.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
