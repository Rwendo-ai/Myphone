import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06',
  module: 8,
  lesson: 6,
  title: 'Cash and Card — Imali Ekhasini, Ikhadi',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Cash or card? In Zimbabwe the answer is almost always cash — but at hotels, supermarkets and fuel stations, card is back. 'Imali ekhasini' (cash, lit. 'money in hand') vs 'ikhadi' (card). And then there's a third option no textbook mentions: EcoCash, the mobile money rail that runs the country.",
    culturalNote: "Zimbabwe's payment ecosystem is a layer cake: USD cash (king at markets), ZiG cash (mostly small purchases), bank cards (ZimSwitch domestic; Visa/Mastercard at hotels and supermarkets but expect declines), and EcoCash mobile money (the actual default for locals — every phone has it). Tourists get by on USD cash + a Visa for hotels. NEVER rely on ATMs — they're often empty or out of order. Bring cash from home.",
  },

  chunks: [
    {
      id: 'imali_ekhasini',
      target: 'Imali ekhasini',
      native: "Cash (money in hand)",
      literal: 'imali (money) + e-khasini (in/at the hand)',
      emoji: '💵',
      phonetic: 'ee-MAH-lee eh-khah-SEE-nee',
      audioRef: null,
    },
    {
      id: 'ikhadi',
      target: 'Ikhadi',
      native: 'Card (debit/credit)',
      literal: 'borrowed from English, takes i- prefix',
      emoji: '💳',
      phonetic: 'ee-KHAH-dee',
      audioRef: null,
    },
    {
      id: 'ecocash',
      target: 'I-EcoCash',
      native: 'EcoCash (mobile money)',
      literal: "the dominant local payment app, owned by Econet",
      emoji: '📱',
      phonetic: 'ee-EH-koh-kash',
      audioRef: null,
    },
    {
      id: 'lamukela',
      target: 'Liyamukela ikhadi?',
      native: 'Do you accept card?',
      literal: 'li- (you-plural/you-formal) + ya-mukela (accept) + ikhadi (card)',
      emoji: '❓',
      phonetic: 'lee-yah-moo-KEH-lah ee-KHAH-dee',
      audioRef: null,
    },
    {
      id: 'imali_kuphela',
      target: 'Imali kuphela',
      native: 'Cash only',
      literal: 'imali (money/cash) + kuphela (only) — the sign on most stalls',
      emoji: '🚫',
      phonetic: 'ee-MAH-lee koo-PHEH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Liya- = "do you (plural/formal) ___?"',
    explanation: "To ask 'do you accept X?' use the li-ya- prefix on the verb. Li- is the subject marker for plural/formal 'you' — even if you're talking to one shopkeeper, isiNdebele often uses the plural for politeness. Liyamukela ikhadi? (Do you accept card?) Liyathengisa lokhu? (Do you sell this?). The -ya- is present-tense filler that makes the question flow.",
    examples: [
      { target: 'Liyamukela ikhadi?', native: 'Do you accept card?' },
      { target: 'Liyamukela i-EcoCash?', native: 'Do you accept EcoCash?' },
      { target: 'Liyathengisa amazambane?', native: 'Do you sell potatoes?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the payment method',
      pairs: [
        { left: 'Imali ekhasini', right: 'Cash' },
        { left: 'Ikhadi', right: 'Card' },
        { left: 'I-EcoCash', right: 'Mobile money' },
        { left: 'Imali kuphela', right: 'Cash only' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask the shopkeeper if they take card',
      sentence: 'Liyamukela ____?',
      options: ['ikhadi', 'imali', 'kuphela'],
      correct: 'ikhadi',
      context: 'Liyamukela ikhadi? — Do you accept card?',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Cash only',
      correct: ['Imali kuphela', 'imali kuphela', 'Imali kuphela.'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your Visa card was declined at a Bulawayo restaurant. What's most likely going on?",
      question: 'Reality check:',
      options: [
        { text: 'Network outage or international card not on the local POS rail — common, just pay USD cash instead.', correct: true },
        { text: 'Card has been frozen for fraud.', correct: false },
        { text: 'Restaurant is illegal.', correct: false },
      ],
      explanation: "POS terminals in Zimbabwe drop offline several times a day. International Visa/Mastercard works at most upscale hotels and chain supermarkets but is unreliable elsewhere. Always carry USD cash as backup. EcoCash is the local fallback — but you need a Zim phone number for that.",
    },
  ],

  rwenDialogue: {
    intro: "A small grocery shop in Hillside, Bulawayo. You've grabbed a bottle of water (US$1) and a chocolate bar (US$1.50). The shopkeeper is at the till.",
    lines: [
      { speaker: 'npc', target: 'Kwamatshumi amabili lanhlanu — or US$2.50.', native: '25 ZiG, or two-fifty USD.' },
      { speaker: 'rwen', rwenLine: "Two-and-a-half dollars. Your Visa is in your wallet. Ask if she takes it." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Liyamukela ikhadi?', native: 'Do you accept card?', correct: true, feedback: "She shakes her head: 'Imali kuphela — cash only.' At least you know. You hand over US$3, she gives back ZiG5 in change." },
          { target: 'Imali ekhasini.', native: 'Cash.', correct: false, feedback: "That's a statement, not a question. You said 'cash' but didn't ask anything. To ask: 'Liyamukela ikhadi?'" },
          { target: 'Ikhadi please.', native: 'Card please.', correct: false, feedback: "You're telling her you'll pay by card — but you haven't checked if she takes it. Ask first: 'Liyamukela ikhadi?'" },
        ],
      },
      { speaker: 'npc', target: 'Imali kuphela. Or i-EcoCash, uma ulayo.', native: 'Cash only. Or EcoCash, if you have it.' },
      { speaker: 'rwen', rwenLine: "EcoCash needs a Zim SIM — you don't have one. USD cash is your default. Always carry small bills.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'Cash (money in hand)', correct: ['Imali ekhasini', 'imali ekhasini'] },
      { prompt: 'Card', correct: ['Ikhadi', 'ikhadi'] },
      { prompt: 'Do you accept card?', correct: ['Liyamukela ikhadi?', 'liyamukela ikhadi', 'Liyamukela ikhadi'] },
      { prompt: 'Cash only', correct: ['Imali kuphela', 'imali kuphela'] },
    ],
  },

  mission: {
    title: 'Build your cash kit',
    task: "Before any Zimbabwe trip, prepare a 'cash kit': minimum US$200 in $1, $2 and $5 bills + US$100 in $10s and $20s for hotels/larger purchases. ATMs in Zim are unreliable. Today, just check that your bank can order US$2 bills (request 2 weeks ahead) — these are MAGIC at markets because they let vendors give exact change easily.",
    rwenSignoff: "Cash is king, EcoCash is queen, card is the unreliable cousin. Tomorrow — getting your change.",
  },

  phase8: {
    scenario: "You're at a small grocery shop in Bulawayo. You've grabbed snacks worth US$2.50. You need to ask whether they take card or only cash, and adjust your payment accordingly. If cash only, hand over correct USD bills.",
    rwenRole: "MaSibanda — shop owner, 60s, has run this shop since 1998. POS machine broken today. Will accept USD cash gladly.",
    successCriteria: "User asks 'Liyamukela ikhadi?'. When told 'imali kuphela', adapts and pays USD cash with 'Nansi imali. Siyabonga.'. Doesn't argue or panic.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
