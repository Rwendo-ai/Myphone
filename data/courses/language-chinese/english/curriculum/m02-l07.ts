import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-duoshao-qian',
  module: 2,
  lesson: 7,
  title: 'Duōshao qián — How much?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Duōshao qián? The two-syllable phrase that opens every market, taxi, food cart, and souvenir stall in China. Today: ask the price like a local — and learn the secret that 'yuán' is what's PRINTED, but 'kuài' is what's SAID.",
    culturalNote: "China's currency is officially the Renminbi, written as 元 (yuán). But almost no one says 'yuán' in casual speech — they say 'kuài' (块). It's exactly like 'dollar' vs 'buck' in the US: same value, different register. Restaurant menus and price tags use yuán. Street vendors and taxi drivers shout kuài. Use kuài when speaking; you'll instantly sound less foreign.",
  },

  chunks: [
    {
      id: 'duoshao_qian',
      target: 'Duōshao qián?',
      native: 'How much (does it cost)?',
      literal: '(多少钱?) lit: how-much money',
      emoji: '💰',
      phonetic: 'DWAW-shao chyen',
      audioRef: null,
    },
    {
      id: 'tai_gui_le',
      target: 'Tài guì le',
      native: "It's too expensive",
      literal: '(太贵了) lit: too-expensive-(change of state)',
      emoji: '😬',
      phonetic: 'tye GWAY luh',
      audioRef: null,
    },
    {
      id: 'shi_kuai',
      target: 'Shí kuài',
      native: '10 kuai (¥10)',
      literal: '(十块) lit: ten-block / ten-bucks',
      emoji: '🪙',
      phonetic: 'shrr KWHY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kuài — the spoken yuan',
    explanation: "Two words for the same currency: 元 (yuán) is formal/written; 块 (kuài) is what people actually say. Tags say '50元'. Vendors say 'wǔshí kuài'. Use kuài when speaking. To say a price: just say the number + kuài.",
    examples: [
      { target: 'Wǔ kuài', native: '5 yuan / ¥5 (spoken)' },
      { target: 'Sānshí kuài', native: '30 yuan / ¥30 (spoken)' },
      { target: 'Yī bǎi kuài', native: '100 yuan / ¥100 (spoken)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Duōshao qián?', right: 'How much?' },
        { left: 'Tài guì le', right: "It's too expensive" },
        { left: 'Shí kuài', right: '10 yuan' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the universal price question',
      prompt: 'How much (does it cost)?',
      correct: ['Duōshao qián?', 'Duoshao qian?', 'duoshao qian', 'duōshao qián?', '多少钱?', '多少钱', 'Duoshao qian'],
    },
    {
      type: 'multiple_choice',
      instruction: "A vendor at a Shanghai street market shouts the price. Which word will you actually hear?",
      question: 'Yuán or kuài?',
      options: [
        { text: "'Kuài' — it's the spoken word, like 'bucks'", correct: true },
        { text: "'Yuán' — it's the only correct word", correct: false },
        { text: "Both are equally common in speech", correct: false },
      ],
      explanation: "'Yuán' is on receipts, banknotes, and signs. 'Kuài' is in mouths. Listen for kuài — it's everywhere on the street.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the haggle reaction — 'It's too expensive' (with the change-of-state particle)",
      sentence: 'Tài guì _____',
      options: ['le', 'ma', 'zài'],
      correct: 'le',
      context: "Same 'le' from lesson 5 — change of state. 'Tài guì le' = 'it has BECOME too expensive in my eyes' — a reaction, not a flat statement.",
    },
    {
      type: 'build_sentence',
      instruction: 'Tell the vendor "It\'s too expensive, 10 kuai"',
      words: ['Shí', 'guì', 'le,', 'kuài', 'Tài'],
      correct: ['Tài', 'guì', 'le,', 'shí', 'kuài'],
      translation: "It's too expensive — 10 kuai",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — say "30 kuai"',
      prompt: '30 yuan (spoken — use the colloquial currency word)',
      correct: ['Sānshí kuài', 'Sanshi kuai', 'sanshi kuai', 'sānshí kuài', '三十块'],
    },
  ],

  rwenDialogue: {
    intro: "Shanghai, a fruit cart parked at the edge of Tianzifang. The vendor — sun-leathered, in a faded apron — is weighing strawberries on a hand scale. You point.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lǎobǎn, duōshao qián?', native: 'Boss, how much?', correct: true, feedback: '"Lǎobǎn" (boss) is the warm market word for any vendor. He likes that.' },
          { target: 'Qián?', native: 'Money?', correct: false, feedback: 'One word — too blunt and unclear. Use the full phrase.' },
          { target: 'Wǒ xūyào', native: 'I need...', correct: false, feedback: "You haven't told him WHAT you need. Ask the price first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sānshí kuài yì jīn',
        native: '30 kuai per jin (500g)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tài guì le! Èrshí kuài?', native: 'Too expensive! 20 kuai?', correct: true, feedback: 'Perfect haggle move — react with "tài guì le", then counter-offer. He expects this dance.' },
          { target: 'Hǎo de', native: 'OK', correct: false, feedback: "Accepting the first price is fine — but on a Shanghai street cart, you've left money on the table. The vendor was ready to negotiate." },
          { target: 'Bù dǒng', native: "Don't understand", correct: false, feedback: "You DO understand — 30 kuai. Use 'tài guì le' instead, that's the move." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Èrshí-wǔ kuài, zuì hòu jiàgé!',
        native: '25 kuai, final price!',
      },
      {
        speaker: 'rwen',
        rwenLine: "And there's the dance — you said it was too much, he came down. 'Kuài' on his lips, 'kuài' on yours. You sounded local. The strawberries are yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How much?',
        correct: ['Duōshao qián?', 'Duoshao qian?', 'duoshao qian', 'duōshao qián?', '多少钱?', '多少钱', 'Duoshao qian'],
      },
      {
        prompt: "It's too expensive",
        correct: ['Tài guì le', 'Tai gui le', 'tai gui le', 'tài guì le', '太贵了'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at one price tag today — anywhere, even on a coffee. Mentally convert: 'Duōshao qián? ___ kuài.' Build the reflex of attaching kuài to numbers.",
    rwenSignoff: "Yuán is for receipts. Kuài is for life. Zàijiàn.",
  },

  phase8: {
    scenario: "Shanghai, the lanes around Tianzifang on a Saturday afternoon. A wiry vendor with a portable scale is selling fresh strawberries — bright red, clearly recently picked. You want a jin (500g). The first price he quotes will not be the real price. Your job: ask, react, counter-offer, settle.",
    rwenRole: "Lǎo Liú (老刘) — fruit vendor, late 50s, originally from Anhui, has run this corner cart for fifteen years. Loves to haggle, will respect a polite counter-offer, will laugh at any obviously-too-low number.",
    successCriteria: "User asks 'duōshao qián?' (uses 'lǎobǎn' as a bonus warm-up), reacts to the first price with 'tài guì le', proposes a counter-price using kuài (not yuán), and lands on a final number through at least one round of back-and-forth.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
