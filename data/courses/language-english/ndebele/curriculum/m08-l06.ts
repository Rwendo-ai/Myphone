import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-tax',
  module: 8,
  lesson: 6,
  title: 'Tax — Includes VAT (UK) vs Plus tax (US)',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Intengo ekulebhula — UK ne-AU 'INCLUDES TAX/VAT' (intela ifakwe ngaphakathi). US 'PLUS TAX' (intela ifakwa ngemuva — uyokhokha okungaphezulu kwekulebhula!).",
    culturalNote: "ESIBALULEKILE: e-UK / AU intengo oyibonayo i-FINAL — yikho oyikhokhayo. £4.99 = £4.99 ekugcineni. KODWA e-US, izinto eziningi zimagcwele intela ('sales tax') NGEMUVA. Uyabona '$10' kodwa ekugcineni ukhokha ngu-$10.80 noma okungaphezulu (kuya kuphi ezweni — i-California 8.25%, i-New York 8.875%, i-Oregon 0%!). Le yinto eshaqisa abahambi e-US. (1) UK 'VAT' = Value Added Tax = 20% — ifakwe ku-price (akunandaba). (2) AU 'GST' = Goods and Services Tax = 10% — ifakwe ku-price futhi. (3) US 'Sales tax' = ihluka idawo nendawo — IFAKWA NGEMUVA. AKUNANDAWO esikhombisa intengo ne-tax kanyekanye e-US. Kufanele ucabange ngokunyusa intengo nge-7-10% lapho ucubunga ku-receipt. Ku-receipt: 'Subtotal' = ngaphambi kwentela; 'Tax' = ifakwe; 'Total' = okuphelele.",
  },

  chunks: [
    {
      id: 'vat',
      target: 'VAT (Value Added Tax)',
      native: 'I-VAT — i-tax e-UK, ngu-20%, ifakwe entengweni',
      literal: 'V.A.T. = value-added tax',
      emoji: '🇬🇧',
      phonetic: 'VEE-AY-TEE noma VAT',
      audioRef: null,
    },
    {
      id: 'includes_vat',
      target: 'Price includes VAT.',
      native: 'Intengo ifaka i-VAT.',
      literal: 'price / includes / VAT',
      emoji: '✅',
      phonetic: 'PRYS-in-KLOODZ-VAT',
      audioRef: null,
    },
    {
      id: 'plus_tax',
      target: 'Plus tax',
      native: 'Hlanganisa ne-tax — intela ifakwa ngemuva (US)',
      literal: 'plus / tax',
      emoji: '🇺🇸',
      phonetic: 'PLUS-TAKS',
      audioRef: null,
    },
    {
      id: 'subtotal',
      target: 'Subtotal',
      native: 'Inani ngaphambi kwentela',
      literal: 'sub + total',
      emoji: '🧾',
      phonetic: 'SUB-toh-tal',
      audioRef: null,
    },
    {
      id: 'total',
      target: 'Total',
      native: 'Inani eliphelele (ne-tax)',
      literal: 'total',
      emoji: '💰',
      phonetic: 'TOH-tal',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'UK / AU vs US tax display',
    explanation: "(1) UK ne-AU: 'PRICES INCLUDE VAT/GST.' — Yikho lokho ozokukhokha. (2) US: 'PLUS TAX' — kufanele ucabange ngokunyusa intengo nge-7-10%. Umbuzo ofanele e-US: 'Does that include tax?' (engxenyeni eyodwa, isikhathi athi cha). Igama lentela: e-UK = 'VAT' (sho 'V.A.T.' uma uyikhuluma); e-AU = 'GST'; e-US = 'sales tax' (kuwo wonke, izinga lihlukile). Engcweleni: 'How much is the total with tax?' uma ufuna inani lokugcina e-US.",
    examples: [
      { target: 'All prices include VAT.', native: 'Zonke izintengo zifaka i-VAT (UK).' },
      { target: 'That will be $10.80 with tax.', native: 'Lokho kuyoba ngu-$10.80 ne-tax (US).' },
      { target: 'Subtotal: $50. Tax: $4.13. Total: $54.13.', native: 'Subtotal: $50. Tax: $4.13. Total: $54.13.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Use-London. Ubona i-jacket: £80.',
      question: "How much will you pay at the till?",
      options: [
        { text: '£80 — VAT is already included.', correct: true },
        { text: '£96 — VAT is added at the till.', correct: false },
        { text: '£100 — service charge is added.', correct: false },
      ],
      explanation: "E-UK i-VAT (20%) IFAKWE entengweni. £80 = £80 ekugcineni.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Use-New York. Ubona i-burger: $12.',
      question: 'How much do you actually pay?',
      options: [
        { text: 'About $13.07 — sales tax (~8.875%) is added.', correct: true },
        { text: '$12 — tax is included.', correct: false },
        { text: '$15 — tax + tip combined.', correct: false },
      ],
      explanation: "E-US i-tax IFAKWA NGEMUVA. NY ngu-8.875%. (Tip ihlukile — ulesson elilandelayo.)",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: 'In the UK, all prices _____ VAT.',
      options: ['include', 'plus', 'minus'],
      correct: 'include',
      context: "'Prices include VAT' — i-norm e-UK.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi (e-US, ufuna ukwazi inani lokugcina)',
      prompt: 'Inani lokugcina ne-tax kuyoba malini?',
      correct: ["What's the total with tax?", "What is the total with tax?", "what's the total with tax?", "What will the total be with tax?"],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — VAT ifakwe',
      words: ['VAT.', 'price', 'The', 'includes'],
      correct: ['The', 'price', 'includes', 'VAT.'],
      translation: 'Intengo ifaka i-VAT.',
    },
  ],

  rwenDialogue: {
    intro: "Use-Starbucks e-Manhattan (US). Ufuna i-coffee. I-menu ifulebhula ithi $4.50. Ufuna ukubona inani lokugcina.",
    lines: [
      { speaker: 'npc', target: "Hi, what can I get you?", native: 'Sawubona, ngingakulethelani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A medium latte, please. Does that price include tax?", native: 'I-medium latte, ngiyacela. Lentengo ifaka i-tax?', correct: true, feedback: "Kuhle — kuyiqhubeka ngempela. Iningi labantu abafundiswe e-US ababuzi futhi bashayeka ngempela." },
          { target: "A medium latte. Why is the price more at the till?", native: 'Kungani intengo ikhula ku-till?', correct: false, feedback: "Kuyiphutha — usho into engaqondakali. Buza ngokuqondile: 'Does that include tax?'" },
        ],
      },
      { speaker: 'npc', target: "No, that's plus tax. Total will be $4.91.", native: 'Cha, kufakwa ne-tax. Total kuyoba $4.91.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Got it, thanks. Card, please.", native: 'Ngiyaqonda, ngiyabonga. Ngeqhadi.', correct: true, feedback: "Sicaca." },
          { target: "Why? In UK it includes VAT!", native: '', correct: false, feedback: "Akukho into yokukhuluma kabi nge-system. E-US 'plus tax' — kuvele kunjalo. Yamukela." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Khumbula: UK = 'includes VAT' (kuvele kuvalwe). US = 'plus tax' (faka 8% ngokwakho ekhanda). AU = 'includes GST' (kufana ne-UK).",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka.',
    prompts: [
      { prompt: 'I-tax e-UK ibizwa ngokuthi (English)', correct: ['VAT', 'V.A.T.', 'Value Added Tax'] },
      { prompt: 'I-tax e-Australia ibizwa ngokuthi (English)', correct: ['GST', 'G.S.T.', 'Goods and Services Tax'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Bheka i-website ye-Amazon US ne-Amazon UK. Khangela intengo yento eyodwa (umzekeliso, ipheni). Bona ukuthi: e-Amazon UK intengo ne-VAT iyodwa; e-Amazon US uzobona '+ estimated tax' uma ufaka i-zip code. Bhala phansi umahluko.",
    rwenSignoff: "Kusasa: i-tip — ku-UK 10%, e-US 15-20%, e-AU 0%. KUHLUKILE!",
  },

  phase8: {
    scenario: "You're at a restaurant in California (US). The menu shows $20 for your meal. You want to ask the waiter about the final cost (tax) before you order — and how it differs from the UK system you know.",
    rwenRole: "Friendly American waiter, late-20s. Patient with travellers; explains tax briefly when asked.",
    successCriteria: "Student asks 'Does the price include tax?' or 'What will the total be with tax?', understands the answer (US = plus tax), and can name VAT/GST as the equivalent in UK or AU.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
