import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-banking',
  module: 8,
  lesson: 8,
  title: 'Banking — account, savings, credit',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Funda amagama abalulekile asebhanga: 'account' (ibhuku), 'savings' (ezigodini), 'credit card' (ikhadi lokuthengwa) — uma ufika e-UK / US / AU uzowadinga lokho.",
    culturalNote: "Uma ufika e-UK / AU / US, kufanele uvule i-bank account ngaphambi kokuthi ungaqashwa, ungahole, noma uqashe i-flat. UQAPHELE: (1) E-UK i-'current account' = isb. (igama elifanele); e-US le yi-'checking account'. (2) E-AU yi-'transaction account' / 'everyday account'. (3) 'Savings account' (uvame yonke indawo) = ibhuku lokugcinda imali, lokhu kunenzuzo. (4) I-DEBIT CARD = ithatha imali ku-account yakho ngokuqondile. I-CREDIT CARD = ubeneka imali ebhange (bese uyikhokha kamuva, kufanele uyikhokhe ngenyanga). I-credit card e-US iyibalulekile kakhulu — ucabangela impilo ye-'credit score'. E-UK ne-AU akudingekile njengoba e-US. (5) IGAMA 'overdraft' = uma uchitha imali ku-account ongenayo — kunentengo enkulu! AMABHANGE: UK (Barclays, HSBC, Lloyds, NatWest, Monzo, Starling); US (Chase, Bank of America, Wells Fargo); AU (Commonwealth, Westpac, ANZ, NAB). I-online banking ihlonipha kakhulu kuwo wonke amazwe.",
  },

  chunks: [
    {
      id: 'bank_account',
      target: 'A bank account',
      native: 'Ibhuku lasebhange',
      literal: 'bank / account',
      emoji: '🏦',
      phonetic: 'BANK-uh-KOWNT',
      audioRef: null,
    },
    {
      id: 'savings',
      target: 'A savings account',
      native: 'Ibhuku lokugcinda',
      literal: 'savings / account',
      emoji: '💰',
      phonetic: 'SAY-vingz-uh-KOWNT',
      audioRef: null,
    },
    {
      id: 'debit_card',
      target: 'A debit card',
      native: 'I-debit card — ikhokha imali ku-account ngokuqondile',
      literal: 'debit / card',
      emoji: '💳',
      phonetic: 'DEB-it-KAHRD',
      audioRef: null,
    },
    {
      id: 'credit_card',
      target: 'A credit card',
      native: 'I-credit card — ubeneka imali ebhange',
      literal: 'credit / card',
      emoji: '💳',
      phonetic: 'KRED-it-KAHRD',
      audioRef: null,
    },
    {
      id: 'open_an_account',
      target: 'I want to open an account.',
      native: 'Ngifuna ukuvula ibhuku.',
      literal: 'I / want / to open / an account',
      emoji: '🆕',
      phonetic: 'ay-WONT-too-OH-pen-an-uh-KOWNT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Banking phrases',
    explanation: "(1) UKUVULA: 'I would like to open an account.' / 'I'd like to open a current account, please.' (UK). (2) UKUFAKA: 'I want to deposit £100.' (deposit = faka imali). (3) UKUTHATHA: 'I'd like to withdraw £50.' (withdraw = thatha imali). (4) UKULETHA: 'I'd like to transfer money to my brother.' (5) UKUBONA: 'What's my balance?' (balance = inani esele). (6) Igama 'sort code' (UK) / 'routing number' (US) / 'BSB' (AU) — uphawu lwebhange. (7) IGAMA elinkulu: 'IBAN' (international) — sebenzisa uma uthumela imali ngapha kwezwe.",
    examples: [
      { target: "I'd like to open a current account.", native: 'Ngifuna ukuvula i-current account (UK).' },
      { target: "What's the balance on my account?", native: 'Iyiphi i-balance ku-account yami?' },
      { target: 'I want to transfer £200 to a savings account.', native: 'Ngifuna ukuthumela £200 e-savings.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa igama nesincazelo',
      pairs: [
        { left: 'Debit card', right: 'Ithatha imali ku-account ngokuqondile' },
        { left: 'Credit card', right: 'Ubeneka imali ku-bhange' },
        { left: 'Savings', right: 'Ibhuku lokugcinda imali' },
        { left: 'Overdraft', right: 'Uma uchitha imali ongenayo (intengo enkulu)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Use-UK ebhange. Khetha igama elifanele.",
      sentence: "I'd like to open a _____ account, please.",
      options: ['current', 'checking', 'transaction'],
      correct: 'current',
      context: "E-UK kuthiwa 'current account'. E-US 'checking', e-AU 'transaction'.",
    },
    {
      type: 'multiple_choice',
      instruction: "Use-US ebhange. Iyiphi enokulungile?",
      question: "I'd like to open a _____ account.",
      options: [
        { text: 'checking', correct: true },
        { text: 'current', correct: false },
        { text: 'normal', correct: false },
      ],
      explanation: "E-US kuthiwa 'checking account', hhayi 'current'.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi',
      prompt: 'Ngifuna ukuvula ibhuku.',
      correct: ['I want to open an account.', "I'd like to open an account.", "I would like to open an account.", 'i want to open an account.', "i'd like to open an account."],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — buza i-balance',
      words: ['my', "What's", 'balance?'],
      correct: ["What's", 'my', 'balance?'],
      translation: 'Iyiphi i-balance yami?',
    },
  ],

  rwenDialogue: {
    intro: "Usanda kufika e-UK. Ungene e-Lloyds Bank ukuvula i-account. Kunomsebenzi obuza ukuthi uthandani.",
    lines: [
      { speaker: 'npc', target: "Good morning! How can I help?", native: 'Sawubona ngomusa! Ngingakusiza kanjani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi. I'd like to open a current account, please.", native: 'Sawubona. Ngithanda ukuvula i-current account, ngiyacela.', correct: true, feedback: "Kuhle. 'I'd like to' kuhle ngokuhlonipha. 'Current account' yi-UK term." },
          { target: "Hi. I want bank account please.", native: 'Sawubona. Ngifuna ibhuku, ngiyacela.', correct: false, feedback: "Kushona. Sebenzisa 'I'd like to open A bank account' (article 'a'). Futhi cacisa 'current' noma 'savings'." },
        ],
      },
      { speaker: 'npc', target: "Of course. Would you also like a savings account or just the current?", native: 'Kulungile. Ungafuna i-savings ne-current, noma i-current kuphela?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Just the current for now, thanks. I might add savings later.", native: 'I-current kuphela manje, ngiyabonga. Ngingafaka i-savings kamuva.', correct: true, feedback: "Sicaca — futhi ukuhlukana phakathi 'current' ne-'savings' kucacisile." },
          { target: "Yes savings.", native: '', correct: false, feedback: "Iyodwa imibuzo emibili — ungaze. Cacisa: 'just the current' noma 'both, please'." },
        ],
      },
      { speaker: 'npc', target: "Great. Will you need a debit card and an overdraft facility?", native: 'Kuhle. Uzodinga i-debit card kanye ne-overdraft facility?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A debit card yes, but no overdraft please.", native: 'I-debit card, yebo, kepha akukho overdraft, ngiyacela.', correct: true, feedback: "Hlakanipha — i-overdraft inentela enkulu. Ungayifaki uma ungayidingi." },
          { target: "Both, yes please.", native: 'Zombili, yebo.', correct: false, feedback: "I-overdraft inentela ephezulu — ungayifaki uma ungayidingi." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kahle — current/savings/debit/credit ngamagama amane okumele uwazi nge-banking. Khumbula: i-current (UK) = i-checking (US).",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka.',
    prompts: [
      { prompt: 'Ngifuna ukuvula ibhuku (English)', correct: ["I want to open an account.", "I'd like to open an account.", "I would like to open an account.", "I want to open a bank account."] },
      { prompt: "Iyiphi i-balance? (English)", correct: ["What's my balance?", "What is my balance?", "what's my balance?", "What's the balance?"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Khangela amabhange amathathu wezwe ofuna ukuthuthela kulo (UK / US / AU). Bhala phansi: amagama abo, ukuthi i-current/checking yini bayithatha kanjani, ukuthi adingeka kanjani ku-passport / visa / address. Lokhu kuzokulungiselela ekuvuleni i-account ngokuqondile lapho ufika.",
    rwenSignoff: "Kusasa: igama 'salary' / 'wage' / 'paycheck' — kuhlukile.",
  },

  phase8: {
    scenario: "You've moved to Sydney and need to open an Australian transaction account. You're at a Commonwealth Bank branch.",
    rwenRole: "Bank teller, friendly Australian woman around 40. Walks you through the process and asks about the type of account, debit card, savings.",
    successCriteria: "Student says 'I'd like to open a transaction account' (or accepts the term when offered), distinguishes transaction vs savings, asks for a debit card, and politely declines or accepts overdraft.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
