import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05',
  module: 8,
  lesson: 5,
  title: "I'll Pay — Ngiyikhokha",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ngiyikhokha. 'I'll pay it.' The verb -khokha (to pay) takes the subject prefix ngi- (I) and the object marker yi- (it). So: ngi-yi-khokha = I-it-pay. Once the bargaining is done, this is the closing word — what you say as the bills come out of your wallet.",
    culturalNote: "In Zimbabwe, paying for something at a market or stall always involves a brief back-and-forth even after the price is agreed. The vendor will hand you the item BEFORE you hand over the money — a trust gesture. You then count the bills aloud, hand them over, and add 'siyabonga' (thank you). Trying to rush this — handing money first, snatching the item — feels rude. Slow down by half a beat.",
  },

  chunks: [
    {
      id: 'ngiyikhokha',
      target: 'Ngiyikhokha',
      native: "I'll pay (it)",
      literal: 'ngi- (I) + yi- (it) + khokha (pay)',
      emoji: '💳',
      phonetic: 'ngee-yee-KHOH-khah',
      audioRef: null,
    },
    {
      id: 'ngifuna',
      target: 'Ngifuna lokhu',
      native: 'I want this',
      literal: 'ngi- (I) + funa (want) + lokhu (this)',
      emoji: '👉',
      phonetic: 'ngee-FOO-nah LOH-khoo',
      audioRef: null,
    },
    {
      id: 'kulungile',
      target: 'Kulungile',
      native: 'OK / Alright / Fine',
      literal: 'ku- (it) + lungile (good, sorted) — universal "OK"',
      emoji: '👍',
      phonetic: 'koo-loon-GEE-leh',
      audioRef: null,
    },
    {
      id: 'siyabonga',
      target: 'Siyabonga',
      native: 'Thank you',
      literal: 'si- (we) + ya- (present) + bonga (thank) — "we thank"',
      emoji: '🙏',
      phonetic: 'see-yah-BOHN-gah',
      audioRef: null,
    },
    {
      id: 'nansi',
      target: 'Nansi imali',
      native: "Here's the money",
      literal: 'nansi (here is) + imali (money) — said as you hand cash over',
      emoji: '🤝',
      phonetic: 'NAHN-see ee-MAH-lee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Subject + object + verb',
    explanation: "isiNdebele packs subject and object INTO the verb. 'I'll pay it' isn't three words — it's one: Ngi-yi-khokha. Ngi- = I (subject prefix). -yi- = it (object marker for class-9 nouns like imali, money). Khokha = pay. This is called a verb concord chain, and once you spot the pattern you can decode any verb you hear: ngi-ya-funa (I want), si-ya-bonga (we thank), ba-ya-fika (they arrive).",
    examples: [
      { target: 'Ngi-yi-khokha', native: 'I-it-pay → I will pay it' },
      { target: 'Si-ya-bonga', native: 'We-(present)-thank → Thank you' },
      { target: 'Ngi-funa lokhu', native: 'I-want this' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match isiNdebele to English',
      pairs: [
        { left: 'Ngiyikhokha', right: "I'll pay (it)" },
        { left: 'Ngifuna lokhu', right: 'I want this' },
        { left: 'Kulungile', right: 'OK / fine' },
        { left: 'Siyabonga', right: 'Thank you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Hand over the cash',
      sentence: '____ imali.',
      options: ['Nansi', 'Ngifuna', 'Iyibiza'],
      correct: 'Nansi',
      context: "Nansi imali — Here's the money.",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: "I'll pay it",
      correct: ['Ngiyikhokha', 'ngiyikhokha', 'Ngiyikhokha.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Vendor hands you the carving before you pay. What do you do?',
      question: 'Correct flow:',
      options: [
        { text: "Hold the carving, count out the bills aloud, hand them over with 'Nansi imali. Siyabonga.'", correct: true },
        { text: 'Refuse the carving until you pay first.', correct: false },
        { text: 'Take the carving, drop the money, walk away fast.', correct: false },
      ],
      explanation: "In Zimbabwe, the vendor hands the item over first as a trust gesture. You count the bills aloud (transparency), hand them over with 'Nansi imali', say 'siyabonga'. The whole exchange takes 10 seconds — and you both walk away feeling good.",
    },
  ],

  rwenDialogue: {
    intro: "Back at eFalls. The deal landed at US$25 for the giraffe. The carver wraps it in old newspaper and holds it out to you.",
    lines: [
      { speaker: 'npc', target: 'Kulungile — kwamatshumi amabili lanhlanu kwemadolari.', native: 'OK — twenty-five dollars.' },
      { speaker: 'rwen', rwenLine: "He's said 'kulungile' — the deal is locked. Take the carving in one hand, count out twenty-five with the other." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kulungile. Nansi imali — kwamatshumi amabili lanhlanu. Siyabonga.', native: "OK. Here's the money — twenty-five. Thank you.", correct: true, feedback: "Perfect rhythm. He pockets the bills, claps your shoulder — 'Hamba kahle' (go well). Deal closed cleanly." },
          { target: 'Ngiyikhokha kuhlanu.', native: "I'll pay five.", correct: false, feedback: "Wait — you already agreed at twenty-five. Don't reopen the negotiation after 'kulungile'. Pay the agreed amount." },
          { target: '[Hand over money silently]', native: '[silent transfer]', correct: false, feedback: "Silent payment feels cold here. Add 'Nansi imali. Siyabonga.' — five seconds of warmth that closes the relationship." },
        ],
      },
      { speaker: 'npc', target: 'Hamba kahle, mfowethu.', native: 'Go well, my brother.' },
      { speaker: 'rwen', rwenLine: "Nansi imali, siyabonga. Two phrases that turn a transaction into a moment. Use them every time.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: "I'll pay (it)", correct: ['Ngiyikhokha', 'ngiyikhokha'] },
      { prompt: 'I want this', correct: ['Ngifuna lokhu', 'ngifuna lokhu'] },
      { prompt: 'OK / fine', correct: ['Kulungile', 'kulungile'] },
      { prompt: 'Thank you', correct: ['Siyabonga', 'siyabonga'] },
      { prompt: "Here's the money", correct: ['Nansi imali', 'nansi imali'] },
    ],
  },

  mission: {
    title: 'Practise the closing rhythm',
    task: "Stand up. Pretend to receive a parcel in your left hand. With your right, count out five imaginary bills aloud — 'kunye, kubili, kuthathu, kune, kuhlanu'. Then say 'Nansi imali. Siyabonga.' as you 'hand them over'. Practise the body language now so it's automatic at the stall.",
    rwenSignoff: "The closing words matter as much as the price. Tomorrow — what to do when there's no cash.",
  },

  phase8: {
    scenario: "You've just bargained a wooden bowl down to US$8 at a stall. Now close the deal — hand over the cash, say the right phrases, and walk away with the vendor smiling.",
    rwenRole: "Sis Mthembu — bowl carver, late 30s, friendly. Has already wrapped the bowl. Will respond warmly to a clean closing.",
    successCriteria: "User says 'Kulungile', hands over cash with 'Nansi imali' (or 'Ngiyikhokha'), thanks with 'Siyabonga'. Doesn't reopen the price. Receives 'Hamba kahle' as the natural closer.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
