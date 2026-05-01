import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: 'Qiān, Wàn, Yì — Big Numbers',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Here's the trickiest concept in the module — but stick with me. Mandarin counts in groups of FOUR digits, not three. So 10,000 isn't 'ten thousand' in Mandarin. It's 'one wàn'. Your brain is going to wobble. That's normal. By the end of this lesson it'll click.",
    culturalNote: "English/French group digits in threes: thousand, million, billion. Mandarin groups in fours: qiān (千 thousand), wàn (万 ten thousand), yì (亿 hundred million). When a Beijinger says 'sān-wàn yuán' (3 wàn), they mean 30,000 — not 3,000. House prices, salaries, populations are all spoken in wàn. Get this wrong and you'll misunderstand every financial conversation.",
  },

  chunks: [
    {
      id: 'yi_qian',
      target: 'Yì qiān',
      native: 'One thousand (1,000)',
      literal: '(一千) — qiān = thousand, the last "Western-style" unit',
      emoji: '🔢',
      phonetic: 'EE CHYEN (yì falling, qiān flat-high)',
      audioRef: null,
    },
    {
      id: 'yi_wan',
      target: 'Yí wàn',
      native: 'Ten thousand (10,000) — literally "one wàn"',
      literal: '(一万) — Mandarin\'s base unit. NOT "ten thousand" — just "one wàn"',
      emoji: '🏦',
      phonetic: 'EE WAHN (yí rising before falling wàn — sandhi)',
      audioRef: null,
    },
    {
      id: 'yi_yi',
      target: 'Yí yì',
      native: 'One hundred million (100,000,000)',
      literal: '(一亿) — for very big numbers. China\'s population: ~14 yì',
      emoji: '🌏',
      phonetic: 'EE EE (both falling — same syllable, same tone, written 一亿)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The wàn (万) base-4 system',
    explanation: "English chunks numbers in 3s: 1,000,000 = one MILLION. Mandarin chunks in 4s. To say one million in Mandarin, you say '100 wàn' (yìbǎi wàn = 100 × 10,000 = 1,000,000). Comma practice: in your head, every 4 digits from the right is a new unit. 50,000 = 5 wàn. 500,000 = 50 wàn. 5,000,000 = 500 wàn. Don't translate — re-group.",
    examples: [
      { target: 'sān wàn (三万)', native: '30,000 — three wàn' },
      { target: 'yìbǎi wàn (一百万)', native: '1,000,000 — one hundred wàn (one million)' },
      { target: 'shí yì (十亿)', native: '1,000,000,000 — ten yì (one billion)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin number to its value',
      pairs: [
        { left: 'yì qiān', right: '1,000' },
        { left: 'yí wàn', right: '10,000' },
        { left: 'yí yì', right: '100,000,000' },
        { left: 'sān wàn', right: '30,000' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A Beijing apartment costs "wǔbǎi wàn yuán". How much in numbers?',
      question: 'Pick the right amount',
      options: [
        { text: '5,000,000 yuan (500 × 10,000)', correct: true },
        { text: '500,000 yuan (5 × 100,000)', correct: false },
        { text: '50,000 yuan (5 × 10,000)', correct: false },
      ],
      explanation: "Wǔbǎi wàn = 500 wàn = 500 × 10,000 = 5,000,000. Mandarin chunks in fours, not threes. This is why Chinese real estate ads make sense in wàn — easier than reading million-comma-zeros.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Ten thousand (in Mandarin)',
      correct: ['yí wàn', 'yi wan', 'yíwàn', 'yiwan', 'yī wàn', 'Yí wàn', '一万'],
    },
    {
      type: 'fill_blank',
      instruction: 'A salary of 80,000 yuan — fill in the unit',
      sentence: 'Bā _____ yuán',
      options: ['wàn', 'qiān', 'yì'],
      correct: 'wàn',
      context: '80,000 = 8 wàn. If you said "bā qiān" (8,000) you\'d be off by 10x. If you said "bā yì" (800,000,000) you\'d be a billionaire.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "100,000" in Mandarin (think: ten wàn)',
      words: ['wàn', 'shí', 'qiān'],
      correct: ['shí', 'wàn'],
      translation: '100,000 = shí wàn = ten wàn',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — 1,000',
      prompt: 'One thousand',
      correct: ['yì qiān', 'yi qian', 'yìqiān', 'yiqian', 'yī qiān', 'Yì qiān', '一千'],
    },
  ],

  rwenDialogue: {
    intro: "You're with a Beijing colleague at a property showroom. He casually mentions the price of a flat. Your brain has to translate fast — and remember the wàn system.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zhè ge gōngyù — sānbǎi wàn',
        native: 'This apartment — 3 million (300 wàn)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sānbǎi wàn? Tài guì le', native: 'Three million? Too expensive', correct: true, feedback: "Right — sānbǎi wàn = 300 × 10,000 = 3,000,000. Beijing prices are real." },
          { target: 'Sānbǎi wàn? Hěn piányi', native: 'Three million? Very cheap', correct: false, feedback: "Three million yuan ≈ $400k USD. Cheap by Beijing standards maybe, but not 'hěn piányi'. Also — let yourself be sticker-shocked, it's the human reaction." },
          { target: 'Sānbǎi? Hǎo', native: 'Three hundred? OK', correct: false, feedback: "You dropped the wàn — and now you think it's 300 yuan. That'd buy you a coffee, not an apartment. Always listen for wàn." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Shì a, Běijīng jiùshì zhèyàng',
        native: 'Yeah, that\'s just Beijing',
      },
      {
        speaker: 'rwen',
        rwenLine: "You parsed 'sānbǎi wàn' in real time. That's the trickiest number concept in Mandarin and you handled it. Most foreigners freeze at the wàn.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Ten thousand (in Mandarin)',
        correct: ['yí wàn', 'yi wan', 'yíwàn', 'yiwan', '一万'],
      },
      {
        prompt: 'One thousand',
        correct: ['yì qiān', 'yi qian', 'yìqiān', 'yiqian', '一千'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look up Beijing's population (~21 million) and try to say it in Mandarin: 'liǎng qiān yìbǎi wàn' (2,100 wàn). Sit with that number. The wàn unit is your brain's new friend.",
    rwenSignoff: "Big numbers, small steps. Once wàn clicks, it never un-clicks. Mànman lái — slowly slowly.",
  },

  phase8: {
    scenario: "You're at a Beijing café with a Chinese colleague who's casually quoting Beijing real estate prices. He mentions his uncle just sold a flat for 8 million yuan ('bā bǎi wàn'). You need to react appropriately AND quote your own city's prices back in wàn — not in Western-style millions.",
    rwenRole: "Colleague Zhāng (张同事) — Beijing-born tech worker, 30s, fluent English but wants to practice Mandarin with you. Will gently correct if you forget the wàn unit or mix up qiān/wàn/yì.",
    successCriteria: "User correctly converts a Western number (e.g., '$500,000' or '£250,000') into wàn-units when speaking Mandarin (so $500,000 ≈ 350 wàn yuán at rough exchange). Reacts with 'Tài guì le' or 'hěn piányi'. Doesn't accidentally say 'wǔ bǎi qiān' (which is wrong — Mandarin doesn't combine bǎi and qiān like that).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
