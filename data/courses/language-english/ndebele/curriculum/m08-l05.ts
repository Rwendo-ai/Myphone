import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-bargaining',
  module: 8,
  lesson: 5,
  title: 'Bargaining — when it is appropriate',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "E-Zimbabwe sijwayele ukuncenga ezimakethe — kodwa e-UK / US / AU akujwayelekile esitolo. Funda LAPHO kungasebenza, futhi LAPHI kungasebenzi.",
    culturalNote: "ESIBALULEKILE: e-Zimbabwe ('Bhuta') noma noma kuphi e-Africa, ukuncenga (bargaining) kuyindlela ejwayelekile yokuhlonipha umthengisi. KODWA e-UK / US / AU emasitolo amaningi (Tesco, Asda, Walmart, Coles, Target) IZINTENGO ZIQINILE — ungaze ungazami ukuncenga. Umnikazi uzobukeka edidekile noma ecasukile. LAPHI kunokuba njengoba ukwenza eMbare? (1) MARKETS — Camden Market, Brick Lane, Borough Market (UK); Queen Vic Market (Melbourne); Flea Markets (US) — kuvulekile, kepha kancane. (2) AMAGCEKE WEZIMOTO ezindala — kuyamukeleka. (3) Izindlu — kuyamukeleka kakhulu (ekuqashweni noma ekuthengeni). (4) IZINTO ZE-FREELANCE — usebenzisana nomuntu, ungabuza isaphulelo. AMAGAMA AHLONIPHEKAYO: 'Is there any chance of a discount?' / 'Could you do better on the price?' / 'Would you take £20 for it?' (offer). HLALA UNGCONO. Akukho 'Hayi, manje ngeke ngifune' — uma athi 'no', sho 'okay, no worries' uhambe.",
  },

  chunks: [
    {
      id: 'discount',
      target: 'A discount',
      native: 'Isaphulelo (intengo encane)',
      literal: 'discount',
      emoji: '🏷️',
      phonetic: 'DIS-kownt',
      audioRef: null,
    },
    {
      id: 'is_there_any_chance',
      target: 'Is there any chance of a discount?',
      native: 'Kungenzeka yini kube nesaphulelo? (formal, polite)',
      literal: 'is / there / any / chance',
      emoji: '🤞',
      phonetic: 'iz-thair-EN-ee-CHANS',
      audioRef: null,
    },
    {
      id: 'would_you_take',
      target: 'Would you take £20 for it?',
      native: 'Ungayemukela i-£20 ngakho?',
      literal: 'would / you / take',
      emoji: '🤝',
      phonetic: 'wood-yoo-TAYK',
      audioRef: null,
    },
    {
      id: 'final_price',
      target: "What's your best price?",
      native: 'Iyiphi intengo yakho yokugcina?',
      literal: 'what / is / your / best / price',
      emoji: '💷',
      phonetic: 'whats-yor-BEST-PRYS',
      audioRef: null,
    },
    {
      id: 'no_worries',
      target: 'No worries, thanks anyway.',
      native: 'Akunandaba, ngiyabonga noma kunjalo.',
      literal: "no / worries / thanks / anyway",
      emoji: '🙂',
      phonetic: 'no-WUR-eez-THANKS-EN-ee-way',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite bargaining (markets only)',
    explanation: "Indlela ye-UK / AU yokuncenga = HLAKANIPHA, KUFISHANE, NGOKUHLONIPHA. (1) Qala ngokucabanga: 'It's nice but a bit out of my budget.' (2) Buza ngokufanele: 'Is there any chance of a discount?' (3) Beka i-offer: 'Would you take £20?' (4) Uma athi cha: 'No worries, thanks anyway.' KEPHA kungasebenzi e-Tesco, e-Walmart, e-Coles, e-Apple Store, e-McDonald's — ungaze. Esitolo esikhulu, intengo iqinile.",
    examples: [
      { target: "It's a bit pricey for me — could you do twenty?", native: 'Liyadula kancane kimi — ungenza ku-£20?' },
      { target: 'Is there any chance of a discount?', native: 'Kungenzeka kube nesaphulelo?' },
      { target: "Okay, no worries. Thanks anyway.", native: 'Kulungile, akunandaba. Ngiyabonga.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Use-Tesco e-UK. Ufisa isaphulelo ku-bread.',
      question: 'What should you do?',
      options: [
        { text: "Pay the price — supermarkets don't bargain.", correct: true },
        { text: "Ask for a discount — they expect it.", correct: false },
        { text: "Walk out and come back later.", correct: false },
      ],
      explanation: "E-Tesco / Walmart / Coles izintengo ZIQINILE. Ukuncenga kungaholela ekuthini ucabangwa kabi.",
    },
    {
      type: 'multiple_choice',
      instruction: "Use-Camden Market e-London. Ujabula nge-jacket. I-stall yithi yi-£40.",
      question: 'Best polite opening:',
      options: [
        { text: "I love it — is there any chance of a discount?", correct: true },
        { text: "It's too expensive. Make cheap.", correct: false },
        { text: "I take it for £10.", correct: false },
      ],
      explanation: "(1) qala ngokuncoma; (2) sebenzisa 'is there any chance' — kuhloniphekile; (3) £10 ku-£40 yiphutha enkulu — i-stall iyokuxosha.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: "Would you _____ twenty pounds for it?",
      options: ['take', 'give', 'have'],
      correct: 'take',
      context: "'Would you take X?' = standard offer language.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi',
      prompt: 'Akunandaba, ngiyabonga noma kunjalo.',
      correct: ['No worries, thanks anyway.', 'No worries thanks anyway.', 'no worries, thanks anyway.', 'No worries, thanks anyway'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — buza ngesaphulelo',
      words: ['discount?', 'any', 'chance', 'a', 'Is', 'there', 'of'],
      correct: ['Is', 'there', 'any', 'chance', 'of', 'a', 'discount?'],
      translation: 'Kungenzeka yini kube nesaphulelo?',
    },
  ],

  rwenDialogue: {
    intro: "Use-Brick Lane Market e-East London. Ubona umuthi ozimisile (£35). Ufuna ukuwuthenga ngentengo encane.",
    lines: [
      { speaker: 'npc', target: "That bag's a beauty, isn't it? Thirty-five quid.", native: 'I-bag inhle, akunjalo? £35.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I love it. Is there any chance of a discount?", native: 'Ngiyayithanda. Kungenzeka kube nesaphulelo?', correct: true, feedback: "Kahle — qala ngokuncoma, sebenzisa 'is there any chance' — natural ngempela." },
          { target: "Make it cheap, please.", native: 'Yenza ibe shibhile, ngiyacela.', correct: false, feedback: "Kungaba kabi e-UK. Sebenzisa 'Is there any chance of a discount?' kunalokho." },
          { target: "I'll give you ten pounds.", native: 'Ngizokunika £10.', correct: false, feedback: "I-£10 ku-£35 yi-too low — i-stall izokuthukuthela. £25-30 kuhle ngokwakho." },
        ],
      },
      { speaker: 'npc', target: "Hmm, I can do thirty.", native: 'Ngingenza i-£30.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Would you take twenty-five?", native: 'Ungayemukela i-£25?', correct: true, feedback: "Kuhle — i-counter offer. Yindlela enempahla." },
          { target: "Yes, give me cheap.", native: '', correct: false, feedback: "Hhayi 'give me cheap' — sebenzisa 'Would you take £25?'" },
        ],
      },
      { speaker: 'npc', target: "Twenty-eight and we have a deal.", native: '£28 — sicela ukuvumelana.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Deal. Cash or card?", native: 'Sivumelene. Ukheshi noma ikhadi?', correct: true, feedback: "Kuphelile — uvumelene, manje ucinga ngokukhokha." },
          { target: "No, no, I want ten.", native: 'Cha, ngifuna i-£10.', correct: false, feedback: "Ungaze — ucabanga kabi futhi i-stall izokuxosha." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Khumbula: e-Tesco hhayi. Emakethe yebo, kodwa ngokuhlonipha. 'No worries' uma athi cha.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka.',
    prompts: [
      { prompt: 'Polite way to ask for a discount (English)', correct: ['Is there any chance of a discount?', 'is there any chance of a discount?', 'Is there any chance of a discount'] },
      { prompt: 'Akunandaba, ngiyabonga noma kunjalo (English)', correct: ['No worries, thanks anyway.', 'no worries, thanks anyway.', 'No worries thanks anyway.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Bhala phansi izindawo ezi-3 lapho ungancenga e-UK / AU / US (umzekeliso: market, second-hand car, flea market) nezindawo ezi-3 lapho UNGEKE WANCENGA (Tesco, McDonald's, Apple Store). Khumbulela uzihlale lapho.",
    rwenSignoff: "Kusasa: 'Tax' — VAT (UK) vs 'plus tax' (US). Kuhlukile.",
  },

  phase8: {
    scenario: "You're at a flea market in Brisbane (Australia) looking at a vintage watch. The seller wants AU$80. You'd like AU$60 if possible. Bargain politely.",
    rwenRole: "Stall owner, easy-going Aussie man around 50. Will negotiate but only politely.",
    successCriteria: "Student opens with a compliment, uses 'is there any chance' or 'would you take', counter-offers within reason (within 25-30% of asking price), and ends gracefully whether or not they get a deal ('no worries').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
