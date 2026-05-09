import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-cash-card-contactless',
  module: 8,
  lesson: 3,
  title: 'Cash, card, contactless',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Izindlela zokukhokha: 'cash' (ukheshi), 'card' (ikhadi), 'contactless' (uzwana ngokuhambisana — beka ikhadi nje, akukho i-PIN). E-UK & AU le yindlela enkulu kakhulu manje.",
    culturalNote: "E-Zimbabwe ukheshi (cash) usabusa, kodwa e-UK / AU / US uphawu kuyikhadi noma i-phone. UQAPHELE: (1) E-UK 'contactless' kuvame ku-£100 ngaphansi — uma kungaphezulu kufanele ufake i-PIN. (2) E-Australia kufana, kodwa kuye ku-AU$200. (3) E-US iningi lisaqala kakhulu i-card-with-chip — i-contactless ikhuluma kodwa ayikahle ihambisana njengase-UK. (4) Iningi lezitolo ezincane e-UK awusafuni 'cash only' — kepha amanye amabhasi e-London awasamukelisi nakancane ukheshi (kucabangela kuphela). (5) 'Apple Pay' / 'Google Pay' = ukukhokha nge-phone, kuyamukeleka yonke indawo manje. Igama elithi 'tap' = beka ikhadi enzeni: 'Just tap your card.'",
  },

  chunks: [
    {
      id: 'cash',
      target: 'Cash',
      native: 'Ukheshi (imali yephepha noma yetshe)',
      literal: 'cash',
      emoji: '💵',
      phonetic: 'KASH',
      audioRef: null,
    },
    {
      id: 'card',
      target: 'Card',
      native: 'Ikhadi (i-debit / i-credit)',
      literal: 'card',
      emoji: '💳',
      phonetic: 'KAHRD',
      audioRef: null,
    },
    {
      id: 'contactless',
      target: 'Contactless',
      native: 'Uzwana — beka ikhadi nje, akukho i-PIN',
      literal: 'without contact / tap-and-go',
      emoji: '📲',
      phonetic: 'KON-takt-les',
      audioRef: null,
    },
    {
      id: 'cash_or_card',
      target: 'Cash or card?',
      native: 'Ukheshi noma ikhadi?',
      literal: 'cash / or / card',
      emoji: '🤔',
      phonetic: 'KASH-or-KAHRD',
      audioRef: null,
    },
    {
      id: 'tap_your_card',
      target: 'Just tap your card.',
      native: 'Beka ikhadi lakho nje (engaphansi kwe-£100).',
      literal: 'just / tap / your / card',
      emoji: '👆',
      phonetic: 'just-TAP-yor-KAHRD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Payment language',
    explanation: "(1) Umnikazi wesitolo uvame ukubuza: 'How would you like to pay?' noma 'Cash or card?' (2) Impendulo: 'Card, please.' / 'Cash, please.' / 'Contactless, please.' (3) Uma 'contactless' isebenza: 'Tap to pay.' noma 'Insert your card.' (faka ngaphakathi). (4) Uma intengo iphezulu: 'Please enter your PIN.' (5) Igama elithi 'Apple Pay / Google Pay' = ukukhokha nge-phone — usebenzisa ngendlela efanayo ne-contactless.",
    examples: [
      { target: 'Cash or card?', native: 'Ukheshi noma ikhadi?' },
      { target: 'Card, please.', native: 'Ngeqhadi, ngiyacela.' },
      { target: 'Just tap to pay.', native: 'Beka nje ukukhokha.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa igama nesincazelo',
      pairs: [
        { left: 'Cash', right: 'Imali yephepha noma yetshe' },
        { left: 'Card', right: 'I-debit noma i-credit card' },
        { left: 'Contactless', right: 'Beka ikhadi (akukho i-PIN)' },
        { left: 'Apple Pay', right: 'Khokha nge-phone' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: "Sorry, that's £105 — you'll need to enter your _____.",
      options: ['PIN', 'name', 'cash'],
      correct: 'PIN',
      context: "E-UK i-contactless idlula ku-£100 — kuyadingeka ufake i-PIN.",
    },
    {
      type: 'multiple_choice',
      instruction: 'I-cashier ikubuza: "Cash or card?" — ufuna ukukhokha nge-phone.',
      question: 'Best answer:',
      options: [
        { text: "Card, please. Apple Pay.", correct: true },
        { text: "Phone money, please.", correct: false },
        { text: "Yes, please.", correct: false },
      ],
      explanation: "'Apple Pay' yi-card kakhulu — uvame ukuyibiza 'card'. Ungabe usho 'phone money' — kungasho lutho.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi',
      prompt: 'Ngeqhadi, ngiyacela.',
      correct: ['Card, please.', 'Card, please', 'card, please.', 'Card please.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — beka ikhadi lakho nje',
      words: ['card.', 'tap', 'your', 'Just'],
      correct: ['Just', 'tap', 'your', 'card.'],
      translation: 'Beka ikhadi lakho nje.',
    },
  ],

  rwenDialogue: {
    intro: "Use-Tesco (isitolo esikhulu sokudla e-UK). Uthenge ama-£8 ezinto. Ucasha umnikazi.",
    lines: [
      { speaker: 'npc', target: "That'll be eight pounds. Cash or card?", native: 'Kuyoba £8. Ukheshi noma ikhadi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Card, please. Contactless?", native: 'Ngeqhadi, ngiyacela. Contactless?', correct: true, feedback: "Kuhle — ufundisa ukubuza ngokuzimisela." },
          { target: "Money please.", native: 'Imali ngiyacela.', correct: false, feedback: "Ngeyi-natural — sebenzisa 'cash' uma kuyimali yephepha, noma 'card' uma kuyikhadi." },
          { target: "Yes please.", native: 'Yebo ngiyacela.', correct: false, feedback: "Le yi-question yokukhetha — kufanele uphendule 'cash' noma 'card', hhayi 'yes'." },
        ],
      },
      { speaker: 'npc', target: "Yes, contactless is fine. Just tap your card on the reader.", native: 'Yebo, contactless ilungile. Beka ikhadi kwi-reader.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Done. Thank you!", native: 'Sekuphelile. Ngiyabonga!', correct: true, feedback: "Sicaca." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Khumbula: e-UK contactless ku-£100, e-AU AU$200. Ukudlula lokho — i-PIN. Akukho enye into ekhuluma kabi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka, bhala impendulo.',
    prompts: [
      { prompt: 'Ukheshi noma ikhadi? (ngesi-Ngisi)', correct: ['Cash or card?', 'cash or card?', 'Cash or card'] },
      { prompt: 'Ngeqhadi, ngiyacela. (ngesi-Ngisi)', correct: ['Card, please.', 'Card please.', 'card, please.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Cabanga ukuthi ukhokha izikhathi ezintathu namuhla. Bhala isincomo: 'Cash, please.' (esitolo se-cash-only), 'Card, please.' (esikulu), 'Contactless.' (ikhofi). Khuluma phezulu kathathu.",
    rwenSignoff: "Kusasa: izitolo ezinkulu — i-supermarket UK vs US.",
  },

  phase8: {
    scenario: "You're paying at a Pret a Manger in central London. The cashier asks how you'd like to pay. You want to confirm that contactless works for your amount.",
    rwenRole: "Cashier, mid-20s, friendly but quick. Uses natural London phrasing ('mate', 'cheers').",
    successCriteria: "Student responds correctly to 'cash or card?', uses the word 'contactless' or 'tap', and handles a follow-up about the £100 limit if it comes up.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
