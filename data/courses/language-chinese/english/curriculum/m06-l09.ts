import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Mǎi dōngxi — Shopping Numbers',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Real shopping language goes beyond single prices. Bulk deals, discounts, totals — every market vendor speaks this dialect. 'Yí ge wǔ kuài, sān ge shí kuài' = one for 5, three for 10. 'Dǎ zhé' = discount. 'Yígòng' = in total. Three phrases unlock the entire bargain ecosystem.",
    culturalNote: "Chinese discount language is colourful. 'Dǎ zhé' (打折) literally means 'hit fold' — referring to folding back a price. '打八折' (dǎ bā zhé) = 'hit eight fold' = 20% OFF (you pay 80% — count from the OPPOSITE direction). It catches Westerners every time. '九折' (jiǔ zhé) = 10% off, not 90% off! Always remember: zhé = how much you PAY (out of 10), not how much you save.",
  },

  chunks: [
    {
      id: 'yige_wukuai_sange_shikuai',
      target: 'Yí ge wǔ kuài, sān ge shí kuài',
      native: 'One for 5, three for 10',
      literal: '(一个五块,三个十块) — bulk pricing pattern: quantity + ge + price',
      emoji: '🛒',
      phonetic: 'EE GUH WOO KWAI, SAN GUH SHRR KWAI',
      audioRef: null,
    },
    {
      id: 'da_zhe',
      target: 'Dǎ zhé',
      native: 'Discount (literally: hit fold)',
      literal: '(打折) — bā zhé = pay 80% (20% off). jiǔ zhé = pay 90% (10% off). COUNT FROM PAID, not saved',
      emoji: '🏷️',
      phonetic: 'DA JUH (dǎ dipping, zhé rising)',
      audioRef: null,
    },
    {
      id: 'yigong',
      target: 'Yígòng',
      native: 'In total / altogether',
      literal: '(一共) — yí = one, gòng = together. Used at checkout: "yígòng X kuài" = X yuan total',
      emoji: '🧮',
      phonetic: 'EE GOHNG (yí rising before falling gòng — sandhi)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The dǎ-zhé trick',
    explanation: "Chinese discounts state what you PAY, not what you save. '打八折' (dǎ bā zhé) = pay 8/10 = 80% = 20% OFF. '打七折' = pay 70% = 30% OFF. '打五折' = pay 50% = HALF OFF. Lower number = bigger discount. The other key word: 'yígòng' is your checkout total — vendors say 'yígòng wǔshí kuài' (50 yuan altogether) when ringing you up.",
    examples: [
      { target: 'Dǎ jiǔ zhé (打九折)', native: '10% off (pay 90%)' },
      { target: 'Dǎ wǔ zhé (打五折)', native: '50% off (pay 50% — half price)' },
      { target: 'Yígòng yìbǎi kuài (一共一百块)', native: '100 yuan altogether' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to the meaning',
      pairs: [
        { left: 'yígòng', right: 'in total' },
        { left: 'dǎ zhé', right: 'discount' },
        { left: 'yí ge wǔ kuài', right: 'one for 5 yuan' },
        { left: 'dǎ wǔ zhé', right: '50% off' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A sign reads "打七折". How much do you pay vs the original?',
      question: 'Pick the right interpretation',
      options: [
        { text: 'You pay 70% (so 30% off)', correct: true },
        { text: 'You pay 30% (so 70% off)', correct: false },
        { text: 'You pay 7 yuan flat', correct: false },
      ],
      explanation: "'Qī zhé' = pay 7/10 = 70%. Discount = 30%. Always read zhé as 'percentage you pay.' Lower zhé = bigger savings.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'In total / altogether',
      correct: ['yígòng', 'yigong', 'yí gòng', 'yi gong', 'Yígòng', '一共'],
    },
    {
      type: 'fill_blank',
      instruction: 'Vendor says "yígòng ___ kuài" — they\'re telling you the total is 80.',
      sentence: 'Yígòng _____ kuài',
      options: ['bāshí', 'bā', 'bābǎi'],
      correct: 'bāshí',
      context: '80 = bāshí. "Bā" alone is just 8 (8 yuan would be very cheap). "Bābǎi" is 800.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "How much altogether?"',
      words: ['duōshao', 'qián', 'yígòng'],
      correct: ['yígòng', 'duōshao', 'qián'],
      translation: 'How much altogether? — Yígòng duōshao qián?',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Discount (the verb-noun, "dǎ zhé")',
      correct: ['dǎ zhé', 'da zhe', 'dǎzhé', 'Dǎ zhé', '打折'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Beijing fruit market. You've picked out apples, oranges, and grapes. The vendor weighs everything and totals it up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Yígòng liùshí wǔ kuài',
        native: 'Altogether 65 yuan',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Néng dǎ zhé ma? Liùshí kuài?', native: "Can you discount? 60 yuan?", correct: true, feedback: "Smooth — you asked for a discount AND offered a counter-price. Real haggling." },
          { target: 'Yígòng?', native: 'Altogether?', correct: false, feedback: "You're just echoing them. They already gave you the total — push back, don't repeat." },
          { target: 'Tài guì le, bù yào', native: "Too expensive, don't want", correct: false, feedback: "Walking away after they totaled is harsh. Save 'bù yào' for when you actually mean to leave. Try a soft counter first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo ba, liùshí kuài, dǎ ge zhé',
        native: 'OK fine, 60 yuan, a bit of a discount',
      },
      {
        speaker: 'rwen',
        rwenLine: "You used 'yígòng' to track the total and 'dǎ zhé' to ask for a discount. The vendor folded a few kuài for you. That's the full shopping toolkit.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'In total (Mandarin pinyin)',
        correct: ['yígòng', 'yigong', 'yí gòng', 'yi gong', '一共'],
      },
      {
        prompt: 'Discount (the phrase used to ask for one)',
        correct: ['dǎ zhé', 'da zhe', 'dǎzhé', '打折'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you're at a checkout — anywhere — mentally narrate the total in Mandarin: 'Yígòng X kuài.' If there's a sale tag, decode it as a zhé number. By next week, your brain will tag prices in two languages.",
    rwenSignoff: "Numbers are now haggling tools. Yígòng yī ge mission complete — one mission down in total.",
  },

  phase8: {
    scenario: "Saturday afternoon at a Beijing electronics market in Zhongguancun. You're buying a phone case (small purchase) and a power bank (bigger). The vendor totals everything and you spot a 'dǎ zhé' sign on the wall. Push for the deal.",
    rwenRole: "Vendor Lín (林师傅) — electronics seller, 40s, deals with foreign students daily, will respect a good haggler. Knows the discount rules well — 'wǒmen zhèlǐ dǎ jiǔ zhé' (we do 10% off here).",
    successCriteria: "User asks 'yígòng duōshao qián?' to confirm total, then references 'dǎ zhé' to claim a discount. Counters at least once with a lower number. Bonus: correctly interprets a zhé number when the vendor offers (e.g., understands 'dǎ bā zhé' = 20% off, not 80% off).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
