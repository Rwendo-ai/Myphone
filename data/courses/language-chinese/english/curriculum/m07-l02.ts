import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Cháng jiàn cài — Common foods',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "5:30am in Shanghai. A man is squatting at a tiny street stall, ladling soy milk into plastic cups while jiānbǐng sizzle on a hot plate. Behind him, baskets of mǐfàn (rice) steam, miàntiáo (noodles) hang in glass cases, jīròu (chicken) sits ready for the wok. This is the Chinese breakfast world — and today you learn its words.",
    culturalNote: "Chinese food vocabulary is built like LEGO. Most meat words are (animal) + ròu (肉, meat): jī-ròu chicken-meat, niú-ròu beef-meat, zhū-ròu pork-meat, yú-ròu fish-meat. Once you know 'ròu' you can name almost any meat. The same logic runs through the whole language — small bricks, big buildings.",
  },

  chunks: [
    {
      id: 'mifan',
      target: 'Mǐfàn',
      native: 'Cooked rice',
      literal: '(米饭) lit: rice-grain-cooked-rice',
      emoji: '🍚',
      phonetic: 'MEE fan',
      audioRef: null,
    },
    {
      id: 'miantiao',
      target: 'Miàntiáo',
      native: 'Noodles',
      literal: '(面条) lit: flour-strip',
      emoji: '🍜',
      phonetic: 'MYAN tyow',
      audioRef: null,
    },
    {
      id: 'jirou',
      target: 'Jīròu',
      native: 'Chicken (the meat)',
      literal: '(鸡肉) lit: chicken-meat',
      emoji: '🍗',
      phonetic: 'JEE roh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'X-ròu' — the meat-naming pattern",
    explanation: "Almost every meat word is the animal name + ròu (肉 meat). Jī (chicken) + ròu = jīròu. Niú (cow) + ròu = niúròu (beef). Zhū (pig) + ròu = zhūròu (pork). Yáng (sheep) + ròu = yángròu (lamb/mutton). One pattern, every menu unlocked. Fish breaks the rule — it's just yú (鱼).",
    examples: [
      { target: 'Jīròu (鸡肉)', native: 'Chicken meat' },
      { target: 'Niúròu (牛肉)', native: 'Beef (cow meat)' },
      { target: 'Yú (鱼)', native: 'Fish (no -ròu needed)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its food',
      pairs: [
        { left: 'Mǐfàn', right: 'Cooked rice' },
        { left: 'Miàntiáo', right: 'Noodles' },
        { left: 'Jīròu', right: 'Chicken' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Following the X-ròu pattern, what does 'niúròu' mean?",
      question: 'Pick the correct meat',
      options: [
        { text: 'Beef (cow + meat)', correct: true },
        { text: 'Pork (pig + meat)', correct: false },
        { text: 'Lamb (sheep + meat)', correct: false },
      ],
      explanation: "'Niú' is cow, 'ròu' is meat — niúròu is beef. Pork is zhūròu (zhū = pig). Lamb is yángròu. The pattern is everywhere on Chinese menus.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Cooked rice',
      correct: ['Mǐfàn', 'Mifan', 'mifan', 'mǐfàn', '米饭'],
    },
    {
      type: 'fill_blank',
      instruction: "You're ordering — 'I want a bowl of noodles'",
      sentence: 'Wǒ yào yì wǎn _____',
      options: ['miàntiáo', 'mǐfàn', 'jīròu'],
      correct: 'miàntiáo',
      context: "'Yì wǎn' (一碗) means 'one bowl' — and noodles, miàntiáo, are what comes in a bowl. 'Wǎn' is the bowl measure word — write it down, you'll need it.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Chicken (the meat, on a menu)',
      correct: ['Jīròu', 'Jirou', 'jirou', 'jīròu', '鸡肉'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I want rice and chicken"',
      words: ['hé', 'Wǒ', 'jīròu', 'mǐfàn', 'yào'],
      correct: ['Wǒ', 'yào', 'mǐfàn', 'hé', 'jīròu'],
      translation: 'I want rice and chicken',
    },
  ],

  rwenDialogue: {
    intro: "Shanghai breakfast street stall, 6am. A grey-haired auntie behind the steamer wipes her hands on her apron and looks up at you. Behind her, baskets of bāozi steam and cauldrons of congee bubble. You step up.",
    lines: [
      {
        speaker: 'npc',
        target: "Zǎo a! Yào shénme?",
        native: 'Morning! What would you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào yì wǎn miàntiáo, hé yìdiǎn jīròu', native: 'I want a bowl of noodles, and a little chicken', correct: true, feedback: "Beautiful — measure word ('wǎn'), the dish, and an add-on. She's already reaching for a bowl." },
          { target: 'Mǐfàn miàntiáo jīròu', native: 'Rice noodles chicken (just listed)', correct: false, feedback: "She'll understand — but it's tourist Chinese. Frame it: 'Wǒ yào yì wǎn miàntiáo...' (I want a bowl of noodles...)." },
          { target: 'Wǒ shì jīròu', native: 'I am chicken', correct: false, feedback: "You said 'I am chicken' — drop the 'shì' (am). For ordering, use 'Wǒ yào...' (I want...)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo de — yí wǎn miàntiáo, jīròu shǎo yìdiǎn ma?',
        native: 'Got it — one bowl of noodles, a little chicken on top?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you catch it? She echoed your order back — that's the Chinese way of confirming. You ordered like a local. Mǐfàn, miàntiáo, jīròu — three words, breakfast in any city in China.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Noodles (in pinyin or characters)', correct: ['Miàntiáo', 'Miantiao', 'miantiao', 'miàntiáo', '面条'] },
      { prompt: 'Cooked rice', correct: ['Mǐfàn', 'Mifan', 'mifan', 'mǐfàn', '米饭'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next meal you eat, name the components in Mandarin out loud. Got rice on your plate? 'Mǐfàn.' Noodles in soup? 'Miàntiáo.' Chicken? 'Jīròu.' Beef? 'Niúròu.' Fish? 'Yú.' Vegetables? 'Cài.' One whole meal, all named. Your fridge becomes a vocabulary list.",
    rwenSignoff: "Tomorrow — the restaurant. We'll walk in, get a table, and ask for a menu. Hungry yet? Zàijiàn.",
  },

  phase8: {
    scenario: "5:45am Shanghai morning. You're standing at a steaming sidewalk breakfast stall — bāozi baskets, congee cauldrons, a wok hissing with stir-fried noodles. The auntie running it is gruff but kind. Order yourself a real Shanghainese breakfast using only the food words you've learned.",
    rwenRole: "Zhāng Āyí (张阿姨) — Shanghai breakfast-stall auntie, 60s, fast talker but patient if you order in Mandarin. She'll suggest mǐfàn, miàntiáo, jīròu, yú options and ask follow-ups. She'll switch to English if you flounder for too long — so commit.",
    successCriteria: "User orders at least one carb (mǐfàn or miàntiáo), one protein (jīròu, niúròu, or yú), uses the X-ròu pattern at least once, and frames it as 'Wǒ yào...' (not just listing words). Bonus if they ask 'Yǒu shénme cài?' (What dishes do you have?).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
