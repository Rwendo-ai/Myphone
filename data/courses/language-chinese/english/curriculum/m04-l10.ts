import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'Tone-aware market conversation — capstone',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Module 4 capstone. You walk into a real market: stalls of fruit, paper-wrapped tea, a woman selling tickets to a temple show. Today you put it all together — tones that change words, measure words that build sentences. Let's see what you've got.",
    culturalNote: "A market is the perfect tone-and-measure-word stress test. You'll buy (mǎi, dipping) not sell (mài, falling). You'll point and say 'zhè ge' for this one, 'nà zhāng' for that ticket, 'liǎng bēi chá' for two teas. Get the bridges right and the vendor relaxes — they know you've done the work.",
  },

  chunks: [
    {
      id: 'duoshao_qian',
      target: 'Duōshao qián?',
      native: 'How much (money)?',
      literal: '(多少钱?) lit: how-much-money',
      emoji: '💰',
      phonetic: 'dwo-→ shao-↘ chyen-↗',
      audioRef: null,
    },
    {
      id: 'wo_yao_zhe_ge',
      target: 'Wǒ yào zhè ge',
      native: 'I want this one',
      literal: '(我要这个) lit: I-want-this-[gè]',
      emoji: '👉',
      phonetic: 'waw-↘↗ yao-↘ jeh-↘ guh-↘',
      audioRef: null,
    },
    {
      id: 'yigong_duoshao',
      target: 'Yígòng duōshao?',
      native: 'How much in total?',
      literal: '(一共多少?) lit: altogether-how-much',
      emoji: '🧮',
      phonetic: 'yee-↗ gong-↘ dwo-→ shao-↘',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tones + measure words in real talk',
    explanation: 'In real speech you stack three things at once: the right tone (mǎi vs mài), the right measure word (zhī, běn, zhāng, bēi, gè), and zhè/nà for pointing. The price-asking phrase "duōshao qián" is the workhorse — pair it with "zhè + measure + noun" and you can buy almost anything.',
    examples: [
      { target: 'Zhè ge duōshao qián?', native: 'How much is this one?' },
      { target: 'Wǒ yào liǎng zhāng piào.', native: 'I want two tickets.' },
      { target: 'Sān bēi chá yígòng duōshao?', native: 'Three teas — how much in total?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Duōshao qián?', right: 'How much?' },
        { left: 'Wǒ yào zhè ge', right: 'I want this one' },
        { left: 'Yígòng duōshao?', right: 'How much in total?' },
        { left: 'Liǎng zhāng piào', right: 'two tickets' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I want to BUY two cups of tea." (watch the tone on buy!)',
      sentence: 'Wǒ yào _____ liǎng bēi chá.',
      options: ['mǎi', 'mài', 'māi'],
      correct: 'mǎi',
      context: 'Mǎi (dipping) = buy. Mài (falling) = sell. Get this wrong at a stall and the vendor thinks you\'re competing with her.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'How much is this one?',
      correct: ['Zhè ge duōshao qián?', 'Zhe ge duoshao qian?', 'zhè ge duōshao qián', '这个多少钱?', '这个多少钱'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'I want two tickets',
      correct: ['Wǒ yào liǎng zhāng piào', 'Wo yao liang zhang piao', 'wǒ yào liǎng zhāng piào', '我要两张票'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You point at apples and want to know the price for three of them.',
      question: 'Pick the most natural sentence',
      options: [
        { text: 'Sān ge píngguǒ duōshao qián?', correct: true },
        { text: 'Sān píngguǒ duōshao qián?', correct: false },
        { text: 'Èr gè píngguǒ duōshao qián?', correct: false },
      ],
      explanation: 'Number + gè + noun. Skipping gè is broken. Èr gè would be wrong because we don\'t use èr for "of three" anyway — and we needed three.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to buy this book and two cups of tea — how much in total?"',
      words: ['Wǒ', 'mǎi', 'yào', 'zhè', 'běn', 'shū', 'hé', 'liǎng', 'bēi', 'chá', 'yígòng', 'duōshao', 'qián?'],
      correct: ['Wǒ', 'yào', 'mǎi', 'zhè', 'běn', 'shū', 'hé', 'liǎng', 'bēi', 'chá', 'yígòng', 'duōshao', 'qián?'],
      translation: 'I want to buy this book and two cups of tea — how much in total?',
    },
  ],

  rwenDialogue: {
    intro: "You're at a busy mid-morning market. A vendor's stall has fresh fruit, packaged tea, and tickets to a small temple festival pinned to a board. You want one of three different things, all in one go — and you have to use the right measure word for each.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo, yào shénme?',
        native: 'Hello, what would you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào mǎi zhè ge, liǎng bēi chá, hé yì zhāng piào.', native: 'I want to buy this one, two teas, and one ticket.', correct: true, feedback: 'Three different measure words in one breath — and mǎi (not mài). Vendor smiles and starts adding it up.' },
          { target: 'Wǒ yào mài zhè ge, èr bēi chá, hé yí běn piào.', native: 'I want to SELL this, two-counting teas, one bound-volume ticket.', correct: false, feedback: 'Three slips: mài (sell) instead of mǎi (buy), èr instead of liǎng for "two of," and běn instead of zhāng for tickets.' },
          { target: 'Wǒ yào zhè, liǎng chá, yī piào.', native: 'I want this, two tea, one ticket (no measure words).', correct: false, feedback: 'No measure words at all — every Chinese ear stumbles. Even at a stall, the bridges matter.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo — zhè ge wǔ kuài, chá shí kuài, piào èrshí kuài. Yígòng sānshíwǔ.',
        native: 'OK — this one is 5 yuan, tea is 10, ticket is 20. Total 35.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hǎo, gěi nǐ.', native: 'OK, here you go.', correct: true, feedback: 'Perfect — clean exchange. You handled tones, measure words, and money in one shot.' },
          { target: 'Tài guì le, nà ge zěnme yàng?', native: 'Too expensive — what about that one?', correct: false, feedback: 'Valid Mandarin — but in this scenario you already chose. Better to close the deal, then bargain elsewhere next time.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You just ran a real market exchange — different measure words, the right tones on mǎi, the price-asking phrase. Module 4 is yours. Tones and bridges will be invisible scaffolding under everything we build from here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How much is this one?',
        correct: ['Zhè ge duōshao qián?', 'Zhe ge duoshao qian?', 'zhè ge duōshao qián', '这个多少钱?', '这个多少钱'],
      },
      {
        prompt: 'I want to buy two tickets — how much in total?',
        correct: ['Wǒ yào mǎi liǎng zhāng piào, yígòng duōshao qián?', 'Wo yao mai liang zhang piao, yigong duoshao qian?', '我要买两张票,一共多少钱?', '我要买两张票,一共多少钱'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build one full market sentence today, out loud: 'Wǒ yào mǎi (number) (measure word) (thing) — duōshao qián?' Pretend you're at a stall, and pick a real measure word — zhī, běn, zhāng, bēi, or gè. Check your tone on mǎi.",
    rwenSignoff: "Module 4 closed. You can hear tones now — and bridge any number to any noun. Zàijiàn — see you in Module 5.",
  },

  phase8: {
    scenario: "A real, busy Beijing morning market — fruit, tea packets, festival tickets pinned to a board. You'll buy three different items requiring three different measure words (e.g. yí gè píngguǒ, liǎng bēi chá, yì zhāng piào), ask 'duōshao qián?', confirm a total with 'yígòng duōshao?', and you must NOT confuse mǎi (buy) with mài (sell) when the vendor playfully tests you.",
    rwenRole: "Vendor Auntie Zhāng (张阿姨) — sharp, fast, in her late 50s, has run this stall for 20 years. Will gently mock-correct any mài/mǎi slip and praise correct measure-word use. Speaks at near-real-world speed.",
    successCriteria: "User completes a multi-item purchase using at least three different measure words across the chat, correctly uses mǎi (buy) with the dipping tone, asks 'duōshao qián?' for at least one item and 'yígòng duōshao?' for the total, and uses 'liǎng' (not èr) for any 'two of.'",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
