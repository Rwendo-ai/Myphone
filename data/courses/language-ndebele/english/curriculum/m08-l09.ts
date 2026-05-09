import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09',
  module: 8,
  lesson: 9,
  title: 'USD vs ZiG — The Dual-Currency Reality',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Zimbabwe runs on two currencies at once: US dollars (USD, the dominant trade currency) and Zimbabwe Gold (ZiG, the local one launched in April 2024). The official exchange rate sits around 1 USD = 25-30 ZiG. The street rate is sometimes higher. Knowing which currency to OFFER and which to ACCEPT for change is the single biggest money skill for travel.",
    culturalNote: "The 2024-25 Zimbabwean reality: USD is preferred for hotels, flights, fuel, restaurants, and anything over $20. ZiG is preferred for street food, kombi fares, vegetables, and small purchases. Vendors hold both. If you pay USD they may give change in ZiG. The cross-currency rounding usually goes against you by $0.30-1.00 per transaction — accept it as the cost of convenience. Carrying SOME ZiG (about ZiG500 in small notes, ~US$20 worth) makes small purchases smoother.",
  },

  chunks: [
    {
      id: 'usd',
      target: 'Amadolari ase-Amerika',
      native: 'US dollars',
      literal: 'amadolari (dollars) + ase- (of) + Amerika (America)',
      emoji: '🇺🇸',
      phonetic: 'ah-mah-doh-LAH-ree ah-seh-ah-MEH-ree-kah',
      audioRef: null,
    },
    {
      id: 'zig',
      target: 'I-ZiG',
      native: 'ZiG (Zimbabwe Gold)',
      literal: 'launched April 2024 — backed by gold reserves',
      emoji: '🇿🇼',
      phonetic: 'ee-ZIG',
      audioRef: null,
    },
    {
      id: 'choose_currency',
      target: 'Ngingakhokha ngama-USD?',
      native: 'Can I pay in USD?',
      literal: 'ngi- (I) + nga-khokha (can pay) + ngama-USD (in USD)',
      emoji: '💵',
      phonetic: 'ngeen-gah-KHOH-khah ngah-mah-yoo-ess-DEE',
      audioRef: null,
    },
    {
      id: 'rate',
      target: 'Inkomba yokushintsha',
      native: 'Exchange rate',
      literal: 'i-nkomba (indicator/pointer) + yokushintsha (of changing)',
      emoji: '📊',
      phonetic: 'een-KOHM-bah yoh-koo-SHEEN-tshah',
      audioRef: null,
    },
    {
      id: 'change_in_zig',
      target: 'Ushintsho ngama-ZiG',
      native: 'Change in ZiG',
      literal: 'ushintsho (change) + ngama-ZiG (in ZiG)',
      emoji: '🔄',
      phonetic: 'oo-SHEEN-tshoh ngah-mah-ZIG',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Nga- = "in/by/with"',
    explanation: "To say 'in USD' or 'in ZiG' you use the prefix 'nga-' before the currency word. Nga-ma-USD = in (US) dollars. Nga-ma-ZiG = in ZiG. The 'nga-' is an instrumental prefix — it answers 'how' or 'with what'. Same word means 'by car' (ngemoto), 'in English' (ngesiNgisi), 'with money' (ngemali). At a till, 'Ngingakhokha ngama-USD?' means literally 'Can I pay BY-USD?'.",
    examples: [
      { target: 'Ngingakhokha ngama-USD?', native: 'Can I pay in USD?' },
      { target: 'Ushintsho ngama-ZiG', native: 'Change in ZiG' },
      { target: 'Ngikhuluma ngesiNdebele', native: 'I speak in isiNdebele' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the currency phrase',
      pairs: [
        { left: 'Amadolari ase-Amerika', right: 'US dollars' },
        { left: 'I-ZiG', right: 'Zimbabwe Gold (local currency)' },
        { left: 'Ngingakhokha ngama-USD?', right: 'Can I pay in USD?' },
        { left: 'Ushintsho ngama-ZiG', right: 'Change in ZiG' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask if you can pay USD',
      sentence: 'Ngingakhokha ____-USD?',
      options: ['ngama', 'kwema', 'ase'],
      correct: 'ngama',
      context: "Ngingakhokha ngama-USD? — Can I pay in USD? (nga- = in/by)",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Change in ZiG',
      correct: ['Ushintsho ngama-ZiG', 'ushintsho ngama-ZiG', 'Ushintsho ngama-zig', 'ushintsho ngama-zig'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You hand over US$10 for a US$3 item. Vendor wants to give change in ZiG at 1:25 (lower than the 1:28 official rate). What now?',
      question: 'Best move:',
      options: [
        { text: "Accept it — the 10-15% currency-change tax is normal at small stalls; not worth a fight under $1.", correct: true },
        { text: 'Demand exact USD or threaten to leave.', correct: false },
        { text: 'Refuse all change and walk away.', correct: false },
      ],
      explanation: "Small vendors don't get the same rate banks do — they're effectively your unofficial money-changer. The 5-15% spread is the cost of converting. For purchases under US$10, accept it. For larger amounts, ask 'ushintsho ngama-USD' (change in USD) before paying — they may say no, in which case decide if it's worth it.",
    },
  ],

  rwenDialogue: {
    intro: "A pharmacy on Robert Mugabe Way, Bulawayo. You need painkillers — US$1.20 on the shelf tag. You only have a US$5 and some ZiG.",
    lines: [
      { speaker: 'user', target: 'Sawubona. Sicela lokhu.', native: 'Hello. This please.' },
      { speaker: 'npc', target: 'US$1.20 — kumbe ZiG30.', native: '$1.20 — or ZiG30.' },
      { speaker: 'rwen', rwenLine: "She quoted both. Two options: pay ZiG30 exact (you have it) or pay US$5 and get $3.80 back, probably mostly in ZiG. Which is cleaner?" },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngikhokha ngama-ZiG. Nansi ZiG30. Siyabonga.', native: "I'll pay in ZiG. Here's 30. Thanks.", correct: true, feedback: "Cleanest move — exact change in local currency, no cross-currency loss. She nods, hands over the painkillers. 30 seconds, no maths." },
          { target: 'Ngikhokha ngama-USD. Nansi US$5.', native: "I'll pay USD. Here's five.", correct: false, feedback: "Possible — but you'll get $3.80 back, likely as ZiG90 + a US$1 (or worse rate). Suboptimal when you have exact ZiG already. Local cash for local prices is the rule of thumb under US$5." },
          { target: 'Sicela ushintsho ngama-USD?', native: 'Change in USD please?', correct: false, feedback: "Skipped paying altogether — she's still waiting for the money. And asking for USD change before establishing payment confuses the order. State payment first." },
        ],
      },
      { speaker: 'npc', target: 'Kulungile, sisi. Hamba kahle.', native: 'OK, sister. Go well.' },
      { speaker: 'rwen', rwenLine: "Rule of thumb: Pay in the smaller-bill currency you have exact change for. Save USD for hotels, fuel, and >US$5 purchases.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'US dollars', correct: ['Amadolari ase-Amerika', 'amadolari ase-amerika'] },
      { prompt: 'ZiG (Zimbabwe Gold)', correct: ['I-ZiG', 'i-ZiG', 'I-zig', 'i-zig'] },
      { prompt: 'Can I pay in USD?', correct: ['Ngingakhokha ngama-USD?', 'ngingakhokha ngama-USD', 'Ngingakhokha ngama-USD', 'ngingakhokha ngama-usd'] },
      { prompt: 'Change in ZiG', correct: ['Ushintsho ngama-ZiG', 'ushintsho ngama-ZiG', 'ushintsho ngama-zig'] },
    ],
  },

  mission: {
    title: 'Pre-trip currency split',
    task: "For a 7-day Zimbabwe trip plan: bring US$400-500 cash (mostly $1, $2, $5; some $10, $20). On arrival, change US$30-50 to ZiG at the airport bureau or your hotel — that gives you ~ZiG800-1300 for small purchases. Refresh ZiG every 2-3 days; never carry more than ~ZiG1000 since the rate moves. USD as backbone, ZiG as small change.",
    rwenSignoff: "USD for big, ZiG for small. Tomorrow — the full conversation, one stall, top to bottom.",
  },

  phase8: {
    scenario: "Pharmacy on Robert Mugabe Way, Bulawayo. You need a US$1.20 / ZiG30 box of painkillers. You have a US$5 bill and ZiG200. You need to choose which currency to pay in (factoring in change loss), say it correctly, and complete the transaction.",
    rwenRole: "Sis Ndlovu — pharmacy assistant, 30s, helpful but busy. Will accept either currency without comment.",
    successCriteria: "User chooses to pay ZiG30 exact (preferred — no change loss) or pays US$5 with awareness they'll get suboptimal change. Uses 'Ngikhokha ngama-ZiG/USD' or 'Nansi'. Doesn't get flustered by the dual-currency quote.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
