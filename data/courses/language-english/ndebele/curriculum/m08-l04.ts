import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-supermarket',
  module: 8,
  lesson: 4,
  title: 'At the supermarket / grocery store',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "E-UK kuthiwa 'supermarket' (Tesco, Sainsbury's, Asda). E-US kuthiwa 'grocery store' (Walmart, Kroger). Amagama ahlukene — kodwa zonke izinto zifana.",
    culturalNote: "Igama 'supermarket' lisetshenziswa e-UK ne-AU njalo. E-US igama elifanele ngu-'grocery store' (noma 'supermarket' — kuyabhalwa kuhambelana). UQAPHELE — amagama ezinto ahlukene phakathi kwe-UK ne-US: trolley (UK) = cart (US); till (UK) = checkout / register (US); biscuit (UK) = cookie (US); chips (UK) = fries (US) [futhi 'crisps' (UK) = 'chips' (US) — yiqaphele!]; courgette (UK) = zucchini (US); aubergine (UK) = eggplant (US). Kanjalo, e-UK kuvame 'self-checkout' (uzikhokhele) — sicabanga ku-iyodwa kanye no-'staffed checkout' (lapho kunomuntu). Uma uphethe izitsha eziningi, sebenzisa i-'trolley' (UK) noma i-'cart' (US). 'Basket' = inkomishi encane.",
  },

  chunks: [
    {
      id: 'supermarket',
      target: 'Supermarket',
      native: 'Isitolo esikhulu sokudla (UK / AU)',
      literal: 'super + market',
      emoji: '🏪',
      phonetic: 'SOO-per-MAR-ket',
      audioRef: null,
    },
    {
      id: 'grocery_store',
      target: 'Grocery store',
      native: 'Isitolo sokudla (US)',
      literal: 'grocery / store',
      emoji: '🛒',
      phonetic: 'GROH-suh-ree-STOR',
      audioRef: null,
    },
    {
      id: 'trolley_cart',
      target: 'Trolley (UK) / Cart (US)',
      native: 'Igolide elinama-wheels — ufaka izinto kulo',
      literal: 'trolley = UK; cart = US',
      emoji: '🛒',
      phonetic: 'TROL-ee / KART',
      audioRef: null,
    },
    {
      id: 'till_checkout',
      target: 'Till (UK) / Checkout (US)',
      native: 'Lapho ukhokha khona',
      literal: 'till = UK; checkout = US/AU',
      emoji: '💳',
      phonetic: 'TIL / CHEK-owt',
      audioRef: null,
    },
    {
      id: 'self_checkout',
      target: 'Self-checkout',
      native: 'Lapho uzikhokhela wedwa (akukho muntu)',
      literal: 'self / checkout',
      emoji: '🤖',
      phonetic: 'SELF-CHEK-owt',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'UK vs US shopping vocabulary',
    explanation: "Khumbula amaphakathi: TROLLEY (UK) ↔ CART (US). TILL (UK) ↔ CHECKOUT/REGISTER (US). BISCUIT (UK) = COOKIE (US) (e-UK 'biscuit' yi-cookie; e-US 'biscuit' iyi-bread roll!). CHIPS (UK) = FRIES (US); CRISPS (UK) = CHIPS (US). E-Australia kuhambelana ne-UK eningini lezi — kodwa 'cart' kuyezwakala futhi. Igama elithi 'aisle' (i-AYL) = uhla lwesitolo ('Where's the bread aisle?').",
    examples: [
      { target: 'Where are the trolleys?', native: 'Akhona kuphi ama-trolley? (UK)' },
      { target: 'Excuse me, where are the carts?', native: 'Uxolo, akhona kuphi ama-cart? (US)' },
      { target: "I'll use the self-checkout.", native: 'Ngizosebenzisa i-self-checkout.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa i-UK ne-US',
      pairs: [
        { left: 'Trolley (UK)', right: 'Cart (US)' },
        { left: 'Till (UK)', right: 'Checkout (US)' },
        { left: 'Biscuit (UK)', right: 'Cookie (US)' },
        { left: 'Crisps (UK)', right: 'Chips (US)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Use-London (UK). Khetha igama elifanele.',
      sentence: 'Excuse me, where are the _____?',
      options: ['trolleys', 'carts', 'wagons'],
      correct: 'trolleys',
      context: "E-UK kuthiwa 'trolley'. E-US ungasho 'cart'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Use-California (US). Ufuna izinto ukuze utshele.',
      question: 'You ask a stranger:',
      options: [
        { text: "Excuse me, where's the checkout?", correct: true },
        { text: "Excuse me, where's the till?", correct: false },
        { text: "Excuse me, where's the pay place?", correct: false },
      ],
      explanation: "E-US 'till' alikamukeleki kahle — sebenzisa 'checkout' noma 'register'. 'Pay place' akusiyo i-natural English.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi (e-UK)',
      prompt: 'Akhona kuphi ama-trolley?',
      correct: ['Where are the trolleys?', 'where are the trolleys?', 'Where are the trolleys'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — Ngizosebenzisa i-self-checkout.',
      words: ['the', "I'll", 'self-checkout.', 'use'],
      correct: ["I'll", 'use', 'the', 'self-checkout.'],
      translation: 'Ngizosebenzisa i-self-checkout.',
    },
  ],

  rwenDialogue: {
    intro: "Usenikele e-Asda (i-supermarket e-UK) okokuqala. Ufuna ukuqala ukuthenga.",
    lines: [
      { speaker: 'npc', target: "Hi, do you need any help?", native: 'Sawubona, ufuna usizo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. Where can I find a trolley?", native: 'Yebo. Ngingathola kuphi i-trolley?', correct: true, feedback: "Sukuma. E-UK 'trolley', kuhle ke." },
          { target: "Yes, where is cart?", native: 'Yebo, kuphi i-cart?', correct: false, feedback: "E-UK kuthiwa 'trolley', hhayi 'cart'. Futhi 'where IS THE cart?' (article 'a' / 'the')." },
        ],
      },
      { speaker: 'npc', target: "Trolleys are right outside the entrance. Do you need a pound coin?", native: 'Ama-trolley angaphandle. Udinga i-£1 yensimbi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A pound coin? Why?", native: 'I-£1 coin? Kungani?', correct: true, feedback: "Ungesabi ukubuza! E-UK ama-trolley adinga i-£1 deposit (ungayithola futhi ekugcineni)." },
          { target: "Yes I need pound.", native: 'Yebo, ngifuna i-pound.', correct: false, feedback: "Kuhle, kepha 'I NEED A pound coin' kuhambelana kahle." },
        ],
      },
      { speaker: 'npc', target: "You insert it in the trolley to release it. You get it back when you return the trolley.", native: 'Uyifaka ku-trolley ukuze ukhulule. Uyithola futhi uma ubuyisa.' },
      {
        speaker: 'rwen',
        rwenLine: "I-supermarket UK vs US: trolley/cart, till/checkout, biscuit/cookie. Khumbula laphi okhona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka.',
    prompts: [
      { prompt: 'Trolley (in US English)', correct: ['cart', 'a cart', 'the cart'] },
      { prompt: 'Till (in US English)', correct: ['checkout', 'register', 'the checkout', 'the register'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Bheka i-website ye-Tesco (UK) ne-Walmart (US). Hlola amagama ahlukene: 'biscuits' vs 'cookies', 'crisps' vs 'chips'. Bhala phansi izithathu zomahluko ozithola wena.",
    rwenSignoff: "Kusasa: ukuncenga (bargaining) — kufanele yini, futhi kuphi?",
  },

  phase8: {
    scenario: "You've just landed in Manchester (UK). You walk into a Tesco for the first time. You need a trolley, you need to find bread, and you need to pay.",
    rwenRole: "Helpful Tesco staff member, late-30s. Uses British shopping vocabulary throughout.",
    successCriteria: "Student uses UK terms correctly: 'trolley' (not 'cart'), 'till' or 'self-checkout' (not 'register'), 'aisle' for the row. Asks for help finding at least one item.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
