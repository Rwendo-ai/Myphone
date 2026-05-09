import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07',
  module: 8,
  lesson: 7,
  title: 'Change Please — Sicela Ushintsho',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sicela ushintsho. 'We request change.' In Zimbabwe, change is a real problem — coins barely exist, and small bills are scarce. Hand over a US$10 for a US$3 item and you'll often get a mix back: US$5 + ZiG40 + a bag of sweets. This is normal. Don't fight it; do the maths.",
    culturalNote: "Two unspoken rules of Zimbabwean change: 1) 'No change' is a real answer — vendors will sometimes refuse a sale rather than break a US$20. Carry small bills always. 2) When change crosses currencies (you pay USD, they give back ZiG), use the official rate (currently around 1:25-30) but vendors often round in their favour. A US$3 item paid with US$5 might come back as ZiG40 instead of ZiG50 — that's the 'cross-currency tax', and it's usually not worth disputing under US$1.",
  },

  chunks: [
    {
      id: 'sicela',
      target: 'Sicela',
      native: 'We request / please',
      literal: 'si- (we) + cela (request) — universal politeness opener',
      emoji: '🙏',
      phonetic: 'see-CHEH-lah',
      audioRef: null,
    },
    {
      id: 'ushintsho',
      target: 'Ushintsho',
      native: 'Change (money returned)',
      literal: 'u- prefix + shintsho (from English "change")',
      emoji: '🔄',
      phonetic: 'oo-SHEEN-tshoh',
      audioRef: null,
    },
    {
      id: 'sicela_ushintsho',
      target: 'Sicela ushintsho',
      native: 'Change please',
      literal: 'we-request change',
      emoji: '↩️',
      phonetic: 'see-CHEH-lah oo-SHEEN-tshoh',
      audioRef: null,
    },
    {
      id: 'akusiwo',
      target: 'Akusiwo wonke',
      native: "That's not the full amount",
      literal: 'a-ku-si-wo (it-is-not) + wonke (all/whole) — for short-change',
      emoji: '🧮',
      phonetic: 'ah-koo-SEE-woh WOHN-keh',
      audioRef: null,
    },
    {
      id: 'kulungile_thanks',
      target: 'Kulungile, siyabonga',
      native: "OK, thanks",
      literal: 'closing phrase once change is correct',
      emoji: '✅',
      phonetic: 'koo-loon-GEE-leh see-yah-BOHN-gah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sicela = the universal "please"',
    explanation: "isiNdebele has no single word for 'please' — instead, you say 'sicela' (we request) before whatever you want. Sicela ushintsho (change please). Sicela amanzi (water please). Sicela bhili (the bill please). The 'we' (si-) is plural-of-politeness — even if you're alone, you use 'we'. This sounds humble in a way that 'I want' doesn't.",
    examples: [
      { target: 'Sicela ushintsho', native: 'Change please' },
      { target: 'Sicela amanzi', native: 'Water please' },
      { target: 'Sicela bhili', native: 'The bill please (restaurant)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase',
      pairs: [
        { left: 'Sicela', right: 'We request / please' },
        { left: 'Ushintsho', right: 'Change (money back)' },
        { left: 'Sicela ushintsho', right: 'Change please' },
        { left: 'Akusiwo wonke', right: "That's not the full amount" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You handed over US$10 for a $3 item — vendor turns to walk away',
      sentence: 'Sicela ____.',
      options: ['ushintsho', 'imali', 'ikhadi'],
      correct: 'ushintsho',
      context: 'Sicela ushintsho — Change please.',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Change please',
      correct: ['Sicela ushintsho', 'sicela ushintsho', 'Sicela ushintsho.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Vendor hands you back change in ZiG when you paid USD. Total looks short by about US$0.50. What do you do?',
      question: 'Best move:',
      options: [
        { text: 'Note it, but accept it — sub-$1 cross-currency rounding is part of the system; disputing damages goodwill.', correct: true },
        { text: 'Refuse the change loudly and demand exact USD.', correct: false },
        { text: 'Walk away and never come back.', correct: false },
      ],
      explanation: "When you pay in USD and get ZiG back, vendors often round to their favour — usually $0.30-0.80 per transaction. Disputing this for under a dollar makes you look stingy and ruins the relationship. Disputing $2+ shorts is fair game. Above $5, push back firmly with 'akusiwo wonke'.",
    },
  ],

  rwenDialogue: {
    intro: "A tuck-shop in Bulawayo. You bought airtime worth US$2 and handed over a US$5 bill. The shopkeeper drops three coins and a ZiG40 note on the counter and turns away.",
    lines: [
      { speaker: 'rwen', rwenLine: "Quick maths: $5 paid, $2 owed, you should get $3 back. ZiG40 ≈ US$1.40. Coins ≈ small. You're short by maybe $1.50. Politely flag it." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sicela ushintsho — akusiwo wonke.', native: "Change please — that's not the full amount.", correct: true, feedback: "She turns back, grimaces, opens the till and adds a US$1 bill. 'Sorry — i-EcoCash ayikho leli mhlolo.' (No EcoCash today, sorry.) Politely fixed." },
          { target: 'Hayi-bo!', native: 'No way!', correct: false, feedback: "Just an exclamation — she won't know what you want. Say what's missing: 'Akusiwo wonke. Sicela ushintsho.'" },
          { target: 'Imali ekhasini.', native: 'Cash.', correct: false, feedback: "You said 'cash' — not what's wrong. The phrase you need: 'Akusiwo wonke. Sicela ushintsho.'" },
        ],
      },
      { speaker: 'npc', target: 'Bekungenani — usale kahle.', native: "It's nothing — go well." },
      { speaker: 'rwen', rwenLine: "Polite firmness gets it fixed. 'Akusiwo wonke' — magic words for short-change. Don't yell; do count.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'Please / we request', correct: ['Sicela', 'sicela'] },
      { prompt: 'Change (money back)', correct: ['Ushintsho', 'ushintsho'] },
      { prompt: 'Change please', correct: ['Sicela ushintsho', 'sicela ushintsho'] },
      { prompt: "That's not the full amount", correct: ['Akusiwo wonke', 'akusiwo wonke'] },
    ],
  },

  mission: {
    title: 'Count change in two currencies',
    task: "Imagine paying US$5 for a US$2.30 item where ZiG = 25:1 USD. Calculate the right change in (a) all USD, (b) USD + ZiG mix, (c) all ZiG. Practising the maths in advance means you can spot a short payment in 2 seconds — without pulling out your phone calculator at the till.",
    rwenSignoff: "Sicela ushintsho — quiet, polite, persistent. The right phrase keeps the relationship intact.",
  },

  phase8: {
    scenario: "Tuck-shop in Bulawayo. You bought US$2 airtime and handed over US$5. The shopkeeper gave back ZiG40 + small coins — short by about US$1.50. You need to flag it politely and get the missing amount, without damaging the relationship.",
    rwenRole: "Mai Dube — shop owner, late 40s, embarrassed when called out but fair. Will fix shortages when politely raised.",
    successCriteria: "User says 'Sicela ushintsho' or 'Akusiwo wonke', stays calm, accepts the corrected change with 'Kulungile, siyabonga'. Recognises sub-$0.50 rounding as not worth disputing; raises >$1 shortages.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
