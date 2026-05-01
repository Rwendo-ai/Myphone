import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Shùzì Tánhuà — A Numbers Conversation',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Capstone time. Module 6 lives or dies in one place: a real Beijing market. You'll need numbers, time, money, haggling, and pickup logistics — all woven together. This is where every chunk you've learned gets braided into one conversation. Take a breath. You've got this.",
    culturalNote: "In a Beijing market — Panjiayuan antiques, Liulichang scrolls, even a humble vegetable lane — the dance is always the same: vendor quotes, you push back, you settle, you arrange logistics (collection time, delivery). The haggle is half the social ritual; vendors LIKE buyers who play the game. Walk in, ask 'duōshao qián?', cry 'tài guì le!', counter, settle, agree on 'jǐ diǎn lái qǔ?' (when to pick up?), say 'xièxie' — that's the whole trip.",
  },

  chunks: [
    {
      id: 'yigong_haggle',
      target: 'Yígòng duōshao qián?',
      native: 'How much altogether?',
      literal: '(一共多少钱?) — the universal checkout question',
      emoji: '💸',
      phonetic: 'EE GOHNG DWO-SHAO CHYEN',
      audioRef: null,
    },
    {
      id: 'pianyi_yidian',
      target: 'Piányi yìdiǎn',
      native: 'A bit cheaper (please)',
      literal: '(便宜一点) — piányi = cheap, yìdiǎn = a little. Soft haggling phrase',
      emoji: '🤝',
      phonetic: 'PYEN-EE EE-DYEN (piányi rising-falling, yìdiǎn falling-dipping)',
      audioRef: null,
    },
    {
      id: 'ji_dian_lai_qu',
      target: 'Jǐ diǎn lái qǔ?',
      native: 'What time should I come pick it up?',
      literal: '(几点来取?) — jǐ diǎn = what time, lái = come, qǔ = pick up/collect',
      emoji: '📦',
      phonetic: 'JEE DYEN LIE CHOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The Beijing market script',
    explanation: "Module 6 in one flow: (1) Ask price — 'duōshao qián?' (2) React — 'tài guì le!' (3) Soften — 'piányi yìdiǎn?' (4) Settle on a kuài amount. (5) Confirm total — 'yígòng X kuài.' (6) Arrange pickup — 'jǐ diǎn lái qǔ?' (7) Confirm time — number + diǎn + shàngwǔ/xiàwǔ. (8) Thank — 'xièxie.' Every chunk in this module shows up.",
    examples: [
      { target: 'Yígòng duōshao? (一共多少?)', native: 'How much in total?' },
      { target: 'Piányi yìdiǎn ba (便宜一点吧)', native: "Make it a little cheaper (with 'ba' — softening particle)" },
      { target: 'Xiàwǔ sān diǎn lái qǔ (下午三点来取)', native: 'I\'ll come pick up at 3 PM' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin phrase to its situation',
      pairs: [
        { left: 'yígòng duōshao qián?', right: 'asking for the total' },
        { left: 'piányi yìdiǎn?', right: 'softly asking for cheaper' },
        { left: 'jǐ diǎn lái qǔ?', right: 'arranging pickup time' },
        { left: 'tài guì le', right: 'reacting to a high price' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'How much altogether?',
      correct: ['yígòng duōshao qián?', 'yígòng duōshao qián', 'yigong duoshao qian', 'yigong duoshao qian?', 'Yígòng duōshao qián?', '一共多少钱?', '一共多少钱'],
    },
    {
      type: 'fill_blank',
      instruction: 'Vendor agrees to discount but only delivers tomorrow afternoon. You ask:',
      sentence: 'Míngtiān _____ lái qǔ?',
      options: ['jǐ diǎn', 'duōshao', 'shénme'],
      correct: 'jǐ diǎn',
      context: '"Jǐ diǎn" = what time. "Duōshao" = how much. "Shénme" = what. You\'re asking for a TIME — so jǐ diǎn.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Pick up at 3 PM tomorrow"',
      words: ['qǔ', 'míngtiān', 'lái', 'sān', 'xiàwǔ', 'diǎn'],
      correct: ['míngtiān', 'xiàwǔ', 'sān', 'diǎn', 'lái', 'qǔ'],
      translation: 'Tomorrow afternoon at 3, come pick up — Míngtiān xiàwǔ sān diǎn lái qǔ',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'A bit cheaper, please',
      correct: ['piányi yìdiǎn', 'pianyi yidian', 'piányi yìdiǎn ba', 'pianyi yidian ba', 'Piányi yìdiǎn', '便宜一点', '便宜一点吧'],
    },
    {
      type: 'multiple_choice',
      instruction: "Vendor says 'sān bǎi kuài.' You think 200 is fair. What's a culturally smart counter?",
      question: 'Pick the best haggle move',
      options: [
        { text: '"Tài guì le, èrbǎi kuài kěyǐ ma?" (Too expensive, 200 OK?)', correct: true },
        { text: '"Yìbǎi kuài" (100 yuan) — way below their price', correct: false },
        { text: '"Sān bǎi kuài? Hǎo de" (300? OK) — pay full', correct: false },
      ],
      explanation: "200 against 300 is a respectful counter — about 2/3 of asking, classic middle ground. Going to 100 (1/3) often offends. Paying 300 cold gives up the dance entirely. Vendors enjoy the negotiation.",
    },
  ],

  rwenDialogue: {
    intro: "You're at Panjiayuan market in Beijing on a Sunday morning. A jade pendant has caught your eye. The vendor has been watching. The full Module 6 dance — pricing, haggling, time, pickup — all in one go.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zhè ge yù pèizi, sānbǎi kuài',
        native: 'This jade pendant, 300 yuan',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tài guì le! Piányi yìdiǎn — èrbǎi kuài?', native: 'Too expensive! A bit cheaper — 200?', correct: true, feedback: "Textbook haggle: react + soften + counter. They'll meet you in the middle." },
          { target: 'Sānbǎi kuài, hǎo', native: '300 yuan, OK', correct: false, feedback: "You took the opening price. Vendors expect you to push back at Panjiayuan — paying full is unusual." },
          { target: 'Yígòng duōshao?', native: 'How much altogether?', correct: false, feedback: "They told you — 300. You need to push back, not re-ask. Counter with a lower number." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Èrbǎi wǔshí kuài, zuì dī le',
        native: '250 yuan, that\'s the lowest',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hǎo, èrbǎi wǔshí. Jǐ diǎn lái qǔ?', native: 'OK, 250. What time should I pick it up?', correct: true, feedback: "You closed the deal AND moved to logistics. Real-world fluency." },
          { target: 'Hǎo de', native: "OK", correct: false, feedback: "Closing the deal is fine, but you need to know when to come back if they're packaging it. Add 'jǐ diǎn lái qǔ?'" },
          { target: 'Bù yào, tài guì', native: "Don't want, too expensive", correct: false, feedback: "250 is a fair landing point — walking now means you spent all that haggling for nothing. Take the win." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Xiàwǔ sān diǎn ba — wǒ bāo hǎo',
        native: '3 PM — I\'ll wrap it for you',
      },
      {
        speaker: 'rwen',
        rwenLine: "You walked into a Beijing market, bargained a jade pendant from 300 down to 250, and arranged a 3pm pickup — all in Mandarin. That's not Module 6. That's Module 6 LIVED.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How much altogether? (in Mandarin pinyin)',
        correct: ['yígòng duōshao qián?', 'yígòng duōshao qián', 'yigong duoshao qian', 'yigong duoshao qian?', '一共多少钱?', '一共多少钱'],
      },
      {
        prompt: 'What time should I come pick it up?',
        correct: ['jǐ diǎn lái qǔ?', 'jǐ diǎn lái qǔ', 'ji dian lai qu', 'ji dian lai qu?', '几点来取?', '几点来取'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture yourself at Panjiayuan. Out loud, run the whole script: 'Duōshao qián?' → 'Tài guì le!' → 'Piányi yìdiǎn?' → 'Yígòng X kuài.' → 'Jǐ diǎn lái qǔ?' → 'Xièxie.' Six phrases. Twenty seconds. The full module in one breath.",
    rwenSignoff: "Module 6 — done. Numbers, time, money, haggling, logistics. You're ready for the markets, the metro, the meetings. Xià yí ge mókuài jiàn — see you in the next module.",
  },

  phase8: {
    scenario: "Sunday morning at Panjiayuan antique market in Beijing. Crowds, dust, vendors calling out, a thousand stalls of porcelain, jade, calligraphy scrolls. You've spotted a small tea set — three cups and a pot — and the vendor is already eyeing you. Run the FULL Module 6 script: ask price, haggle, settle, arrange pickup time for after lunch (because you want to keep browsing). Numbers + time + money — all of it.",
    rwenRole: "Vendor Auntie Zhōu (周阿姨) — Panjiayuan veteran, 60s, sharp, fond of foreigners who try Mandarin. Will start the price high, drop with charm, ask you confidently when you'll be back, and tease you a little if you mix up your kuài amounts.",
    successCriteria: "User completes the full module flow: (1) asks 'duōshao qián?' (2) reacts with 'tài guì le' (3) counters with a kuài amount (4) confirms total with 'yígòng' (5) arranges a SPECIFIC pickup time using diǎn + shàngwǔ/xiàwǔ (e.g., 'xiàwǔ sān diǎn bàn') (6) thanks her with 'xièxie'. Bonus: uses 'piányi yìdiǎn' or references a 'dǎ zhé' discount.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
