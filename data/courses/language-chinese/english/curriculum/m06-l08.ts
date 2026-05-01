import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Duōshao qián? — How Much?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Money in China has two names — and you'll hear both daily. 'Yuán' (元) is the formal one, on banknotes and receipts. 'Kuài' (块) is what people actually say. Like 'dollar' vs 'buck' in English. Use 'kuài' on the street and you'll sound like a local.",
    culturalNote: "Chinese currency is the Renminbi (RMB). Spoken units: 'kuài' (块 = yuan, the dollar), 'máo' (毛 = 0.1 yuan, like 10 cents), 'fēn' (分 = 0.01 yuan, basically obsolete now). Cash is fading fast in China — Alipay and WeChat Pay rule, even at small market stalls. But knowing the spoken numbers still matters. 'Tài guì le!' (太贵了 too expensive) is universal — it opens almost every haggle.",
  },

  chunks: [
    {
      id: 'duoshao_qian',
      target: 'Duōshao qián?',
      native: 'How much money?',
      literal: '(多少钱?) — duōshao = how many/much, qián = money',
      emoji: '💴',
      phonetic: 'DWO-SHAO CHYEN (qián rising tone)',
      audioRef: null,
    },
    {
      id: 'wushi_kuai',
      target: 'Wǔshí kuài',
      native: '50 yuan (colloquial)',
      literal: '(五十块) — kuài is the spoken word for yuan. "Wǔshí yuán" is the formal/written form',
      emoji: '💰',
      phonetic: 'WOO-SHRR KWAI (kuài falling)',
      audioRef: null,
    },
    {
      id: 'tai_gui_le',
      target: 'Tài guì le',
      native: 'Too expensive',
      literal: '(太贵了) — tài = too, guì = expensive, le = (state-change marker, like "now")',
      emoji: '😱',
      phonetic: 'TIE GWAY LUH (tài falling, guì falling, le neutral)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kuài vs yuán + the māo subdivision',
    explanation: "On price tags or receipts: yuán (元). Out of someone's mouth: kuài (块). Same value. For amounts under 1 yuan, use 'máo' for tenths: 5 máo = 0.5 yuan. Modern China barely uses fēn anymore. To ask any price, lead with 'duōshao qián?' — universal market opener.",
    examples: [
      { target: 'Èrshí kuài (二十块)', native: '20 yuan (spoken)' },
      { target: 'Èrshí yuán (二十元)', native: '20 yuan (written/formal)' },
      { target: "Sān kuài wǔ (三块五)", native: '3.5 yuan (3 kuài 5 máo, casual)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin phrase to its meaning',
      pairs: [
        { left: 'duōshao qián?', right: 'how much?' },
        { left: 'wǔshí kuài', right: '50 yuan (colloquial)' },
        { left: 'tài guì le', right: 'too expensive' },
        { left: 'máo', right: '0.1 yuan (10 cents)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'How much money? (Mandarin)',
      correct: ['duōshao qián?', 'duōshao qián', 'duoshao qian', 'duoshao qian?', 'Duōshao qián?', '多少钱?', '多少钱'],
    },
    {
      type: 'fill_blank',
      instruction: 'Vendor says 200 yuan. You think it\'s ridiculous. React.',
      sentence: '_____ guì le!',
      options: ['Tài', 'Hěn', 'Bù'],
      correct: 'Tài',
      context: '"Tài...le" = too (something). "Hěn guì" = very expensive (factual). "Bù guì" = not expensive. To haggle, you want the dramatic "tài guì le!"',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "How much is this?"',
      words: ['qián', 'duōshao', 'zhè ge'],
      correct: ['zhè ge', 'duōshao', 'qián'],
      translation: 'How much is this — Zhè ge duōshao qián? (lit: this how-much money)',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: '30 yuan (colloquial — use kuài)',
      correct: ['sānshí kuài', 'sanshi kuai', 'sānshíkuài', 'Sānshí kuài', '三十块'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A street vendor quotes "yìbǎi kuài". A polite response in haggling culture is...',
      question: 'Pick the right opener',
      options: [
        { text: '"Tài guì le! Piányi yìdiǎn?" (Too expensive! Cheaper a bit?)', correct: true },
        { text: '"Hǎo de, xièxie" (OK, thanks) — pay full price immediately', correct: false },
        { text: '"Bù yào" (Don\'t want) — walk away in silence', correct: false },
      ],
      explanation: "At Beijing markets, Chengdu lanes, or Shanghai antique stalls, the first price is the OPENING price — never the final one. 'Tài guì le' starts the dance. Walking away in silence ends it without giving them a chance to counter.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a Chengdu market. A scarf catches your eye. The vendor sees you looking — they're already smiling, ready to start the price dance.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zhè tiáo, yìbǎi èrshí kuài',
        native: 'This one, 120 yuan',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tài guì le! Piányi yìdiǎn?', native: 'Too expensive! Cheaper?', correct: true, feedback: "Perfect haggle opener. They'll smile, drop the price." },
          { target: 'Hǎo, yìbǎi èrshí kuài', native: "OK, 120 yuan", correct: false, feedback: "You paid the opening price. The vendor is delighted but you overpaid. Always counter." },
          { target: 'Duōshao qián?', native: 'How much?', correct: false, feedback: "They already TOLD you the price. Asking again confuses things — you want to push back, not re-ask." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, bāshí kuài, zuì dī le',
        native: '80 yuan, that\'s the lowest',
      },
      {
        speaker: 'rwen',
        rwenLine: "You haggled in Mandarin. 120 dropped to 80 — you saved 40 yuan with three words. That's the language paying for itself.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How much money? (in Mandarin pinyin)',
        correct: ['duōshao qián?', 'duōshao qián', 'duoshao qian', 'duoshao qian?', '多少钱?', '多少钱'],
      },
      {
        prompt: 'Too expensive!',
        correct: ['tài guì le', 'tai gui le', 'Tài guì le', 'tài guì le!', 'Tài guì le!', '太贵了', '太贵了!'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick five things you bought recently. Mentally state each price in Mandarin using kuài. Then say 'tài guì le' for the most expensive one — even if it wasn't. Practice the drama; haggling needs theatre.",
    rwenSignoff: "Money has two names. You now speak both. Piányi yìdiǎn — a little cheaper, a little closer to fluent.",
  },

  phase8: {
    scenario: "Saturday morning at a Chengdu silk market. The lanes are narrow, vendors call out prices, smell of jasmine tea drifting. You spot a beautiful scarf. The vendor watches you slow down — game on. They quote a price you know is inflated for tourists.",
    rwenRole: "Vendor Mǎ (马老板) — Chengdu market vendor, 50s, sharp eyes, plays the haggle game daily. Will start high, drop fast if you push, hold firm in the middle. Speaks Sichuan-tinged Mandarin.",
    successCriteria: "User asks 'duōshao qián?', reacts to the opening price with 'tài guì le', counters with a lower kuài amount, and ends up paying somewhere between 50–70% of the opening price. Bonus: walks away halfway through to trigger a final discount.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
