import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Diǎn cài — Ordering',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Beijing, lunch hour. You're sitting in a tiny noodle shop, the càidān slid in front of you. A server stands waiting, pen poised. Three small phrases will carry you through every Chinese menu in your life: 'Wǒ yào zhè ge' (I want this), 'Lái yí ge...' (bring me one...), and the killer 'Bú yào yāncōng' (without onions). Today you become someone who can order.",
    culturalNote: "'Lái' (来) literally means 'come' — and Chinese ordering uses it like English 'bring' or 'gimme'. 'Lái yí ge xiǎolóngbāo' = 'come one xiǎolóngbāo' = 'one order of xiǎolóngbāo, please'. It sounds odd to English ears, but it's the warmest way to order — you're inviting the dish to your table.",
  },

  chunks: [
    {
      id: 'wo_yao_zhe_ge',
      target: 'Wǒ yào zhè ge',
      native: 'I want this one',
      literal: '(我要这个) lit: I-want-this-(measure-word)',
      emoji: '👉',
      phonetic: 'WAW yow JUH guh',
      audioRef: null,
    },
    {
      id: 'lai_yi_ge',
      target: 'Lái yí ge...',
      native: "Bring me one... (lit: 'come one of...')",
      literal: '(来一个...) lit: come-one-(measure)',
      emoji: '🤲',
      phonetic: 'LIE yee guh',
      audioRef: null,
    },
    {
      id: 'bu_yao_yancong',
      target: 'Bú yào yāncōng',
      native: 'Without onions (lit: "don\'t want onions")',
      literal: '(不要洋葱) lit: not-want-foreign-onion',
      emoji: '🧅',
      phonetic: 'boo yow YAN-tsohng',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Lái' and 'bú yào' — the order verb pair",
    explanation: "Two verbs do all the work when ordering. 'Lái' (来 come/bring) is for what you DO want — 'lái yí ge huǒguō' (one hotpot please). 'Bú yào' (不要 don't want) is for what you DON'T want — 'bú yào xiāngcài' (no cilantro!). Both are short, blunt, and warm — exactly the Chinese ordering tone.",
    examples: [
      { target: 'Lái yí ge xiǎolóngbāo', native: 'One basket of soup dumplings, please' },
      { target: 'Lái liǎng bēi chá', native: 'Two cups of tea, please' },
      { target: 'Bú yào là', native: 'Not spicy (no chili)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ yào zhè ge', right: 'I want this one' },
        { left: 'Lái yí ge...', right: 'Bring me one...' },
        { left: 'Bú yào yāncōng', right: 'Without onions' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I want this one (pointing at the menu)',
      correct: ['Wǒ yào zhè ge', 'Wo yao zhe ge', 'wo yao zhe ge', 'wǒ yào zhè ge', '我要这个'],
    },
    {
      type: 'fill_blank',
      instruction: "You're allergic to cilantro — tell the server",
      sentence: 'Bú yào _____',
      options: ['xiāngcài', 'mǐfàn', 'jīròu'],
      correct: 'xiāngcài',
      context: "'Xiāngcài' (香菜) is cilantro/coriander — many foreigners in China use this phrase daily. 'Bú yào xiāngcài' = no cilantro. The other two are rice and chicken — those you probably DO want.",
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Bring me one bowl of beef noodles"',
      words: ['Lái', 'wǎn', 'niúròu', 'miàn', 'yì'],
      correct: ['Lái', 'yì', 'wǎn', 'niúròu', 'miàn'],
      translation: 'One bowl of beef noodles, please',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Without onions',
      correct: ['Bú yào yāncōng', 'Bu yao yancong', 'bu yao yancong', 'bú yào yāncōng', '不要洋葱'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a hotpot place. The server asks 'Yào shénme?' — what's the warmest, most local way to start ordering?",
      question: 'Pick the answer',
      options: [
        { text: 'Lái yí ge yuānyāng guō, bú yào tài là — Bring one half-spicy/half-mild pot, not too spicy.', correct: true },
        { text: 'Wǒ shì yào yí ge guō — I am wanting one pot.', correct: false },
        { text: 'Guō! — Pot!', correct: false },
      ],
      explanation: "'Lái yí ge...' is the natural ordering opener. 'Yuānyāng guō' (鸳鸯锅) is the famous half-spicy half-mild hotpot — splits the pot down the middle. The 'bú yào tài là' (not too spicy) is the survival add-on.",
    },
  ],

  rwenDialogue: {
    intro: "Sichuan, dinner. You're at a roadside hotpot joint with two locals. The owner — a stocky man in a stained apron — slaps the menu on the table and stands waiting.",
    lines: [
      {
        speaker: 'npc',
        target: "Yào diǎn shénme? Wǒmen de málà guō hěn yǒumíng.",
        native: 'What would you like to order? Our spicy málà pot is famous.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lái yí ge yuānyāng guō, bú yào tài là', native: 'One half-spicy/half-mild pot please, not too spicy', correct: true, feedback: "Perfect — 'lái' to order, 'bú yào' to set the spice level. You just survived your first Sichuan hotpot." },
          { target: 'Wǒ yào là', native: 'I want spicy (full Sichuan málà)', correct: false, feedback: "Brave! But unless you've trained for it, full Sichuan málà will leave you crying. Hedge with 'bú yào tài là' (not too spicy) and a yuānyāng pot." },
          { target: 'Bú yào', native: "Don't want (incomplete)", correct: false, feedback: "Don't want WHAT? Pair 'bú yào' with what you're refusing — like 'bú yào tài là' (not too spicy) or 'bú yào xiāngcài' (no cilantro)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo de — yuānyāng guō, wēi là. Yào shénme cài?',
        native: 'Got it — half-and-half pot, mildly spicy. What ingredients?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lái yí ge niúròu, yí ge mógū, yí ge dòufu — bú yào yāncōng', native: 'Bring me beef, mushrooms, tofu — no onions', correct: true, feedback: "Three 'lái yí ge's in a row, plus your dietary preference. The owner is already shouting orders at the kitchen." },
          { target: 'Niúròu mógū dòufu', native: 'Beef mushroom tofu (just listed)', correct: false, feedback: "He'll get it but it's flat. Use 'lái yí ge...' to frame each one — that's how locals order, item by item, with respect." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three 'lái yí ge's, one 'bú yào'. You've ordered an entire Sichuan hotpot in Mandarin — including managing the spice level, which is a survival skill, not a nicety. Quietly proud of you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want this one (pointing)', correct: ['Wǒ yào zhè ge', 'Wo yao zhe ge', 'wo yao zhe ge', 'wǒ yào zhè ge', '我要这个'] },
      { prompt: 'Without onions', correct: ['Bú yào yāncōng', 'Bu yao yancong', 'bu yao yancong', 'bú yào yāncōng', '不要洋葱'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order one thing today using the Chinese ordering pattern — even in English. At a coffee shop, in your head, mentally translate 'I'll have a latte, no sugar' into 'Lái yí ge nátiě, bú yào táng.' Train the pattern. The 'lái yí ge' + 'bú yào' combo is the engine of every menu negotiation in your future.",
    rwenSignoff: "Tomorrow — what you LIKE and don't like. Plus the magic word for vegetarians. Zàijiàn.",
  },

  phase8: {
    scenario: "Roadside Sichuan hotpot in Chengdu, 8pm. You're sitting alone at a small table — the owner stomps over with a menu the size of a newspaper, slaps it down, and waits. Outside the rain is starting. You haven't eaten all day. You need to: order a pot, set the spice level (you do NOT want full málà), pick three ingredients, and refuse cilantro.",
    rwenRole: "Lǎo Wáng (老王) — Sichuan hotpot owner, 50s, gruff, no patience for tourists who can't decide. He'll push the full málà pot ('it's our best'), and if you don't push back he'll bring it. He'll switch to broken English if you take more than 30 seconds. Stay in Mandarin.",
    successCriteria: "User uses 'lái yí ge...' at least twice, says 'bú yào tài là' (not too spicy) or 'bú yào là' (no spice), says 'bú yào xiāngcài' (no cilantro), and orders three specific ingredients. The 'lái' opener is the test — anyone can say 'wǒ yào', but 'lái' marks the local.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
