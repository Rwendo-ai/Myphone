import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Money & time conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Wapfuura Module 6! Iye zvino unoziva manhamba 1-million, nguva (hours, half past, quarter to), mazuva, mwedzi, mari (how much, discount, total). Chinangwa chenhasi: kuzvi-shandisa zvose pa hurukuro imwe yose.",
    culturalNote: "Hurukuro yenhamba ndiyo iri pakati peChiNgezi chedu zuva rega rega. KuZimbabwe — pa-kombi, pa-supermarket, pa-WhatsApp ne shamwari yokunze — manhamba, nguva, nemari ndizvo zvinotaurwa zvakawanda. Kana wabata izvi zvose pamwe chete pasina kufunga, watopfuura A2 — wave kunzwa muvene wezvirevo izvi. Tsika yokuFunga ndeyokuti — ChiShona ne ChiNgezi zvinopinga manhamba zvakasiyana, asi mafungiro ari mumwe chete.",
  },

  chunks: [
    {
      id: 'price_time',
      target: "It costs twenty dollars and the shop closes at six P.M.",
      native: 'Inopiwa madhora makumi maviri uye chitoro chinovharwa nguva nhanhatu manheru.',
      literal: 'price + closing time',
      emoji: '🛒',
      phonetic: 'it-kosts-TWEN-tee-DOL-arz...',
      audioRef: null,
    },
    {
      id: 'when_meet',
      target: "Let's meet on Friday at half past seven.",
      native: 'Tisangane Chishanu nguva nomwe nehafu.',
      literal: 'day + time meeting',
      emoji: '🤝',
      phonetic: "lets-MEET-on-FRY-day...",
      audioRef: null,
    },
    {
      id: 'total_with_discount',
      target: "The total is fifty dollars with a ten percent discount.",
      native: 'Zvose pamwe chete imadhora makumi mashanu nedhisikaunti rezana ramumwemumwe (10%).',
      literal: 'total + percentage discount',
      emoji: '🧾',
      phonetic: 'thuh-TOH-tul-iz-FIF-tee-DOL-arz...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbers, time, money — capstone integration',
    explanation: "Pa-hurukuro chaiyo, manhamba (1-million), nguva (hours, half past, A.M./P.M.), mazuva (Monday-Sunday), mwedzi (in October), uye mari (it costs $X, discount, total) zvinopinda pamwe chete. Cherechedza prepositions: 'at' nguva ('at six P.M.'), 'on' mazuva ('on Friday'), 'in' mwedzi ('in October'), 'for' mutengo ('two for ten dollars'). Kana wabata izvi pasina kufunga, watotaura ChiNgezi che A2-B1.",
    examples: [
      { target: 'I will pay forty dollars on Monday at three P.M.',          native: 'Ndichabhadhara madhora makumi mana neMuvhuro nguva nhatu masikati.' },
      { target: 'The meeting is on Friday at half past nine in the morning.', native: 'Musangano uri Chishanu nguva pfumbamwe nehafu mangwanani.' },
      { target: "What's the total with the discount?",                       native: 'Zvose pamwe chete nedhisikaunti imari yakadii?' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — full sentence',
      prompt: 'Tisangane Chishanu nguva nhanhatu manheru pa-cafe.',
      correct: ["Let's meet on Friday at six P.M. at the cafe", "Let's meet on Friday at six P.M. at the cafe.", "Let's meet at the cafe on Friday at six P.M."],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza prepositions dzakakwana — manhamba, nguva, mwedzi',
      sentence: 'My birthday is ____ October ____ Saturday ____ seven P.M.',
      options: ['in / on / at', 'on / in / at', 'at / on / in'],
      correct: 'in / on / at',
      context: "'In October' (mwedzi), 'on Saturday' (zuva), 'at seven P.M.' (nguva). Tsanangura iyi pattern — yakajairika pamwe chete.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Inopiwa madhora makumi matatu pasina dhisikaunti.',
      correct: ['It costs thirty dollars without a discount', 'It costs thirty dollars without a discount.', 'It costs thirty dollars with no discount'],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka — uri kutaura kuti chitoro chinovharwa rinhi",
      words: ['closes', 'shop', 'P.M.', 'The', 'six', 'at'],
      correct: ['The', 'shop', 'closes', 'at', 'six', 'P.M.'],
      translation: 'Chitoro chinovharwa nguva nhanhatu manheru.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura kuti uchabhadhara rinhi uye mangani',
      prompt: 'Ndichabhadhara madhora makumi maviri neMuvhuro.',
      correct: ['I will pay twenty dollars on Monday', 'I will pay twenty dollars on Monday.', "I'll pay twenty dollars on Monday"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chirevo chakanyatsoita basa pa-A2 level',
      question: 'Choose the most natural full sentence:',
      options: [
        { text: "Let's meet on Friday at half past seven for dinner — it costs about thirty dollars.", correct: true },
        { text: "Meet Friday seven half. It costs thirty.",                                              correct: false },
        { text: "On Friday in seven and half meet for dinner thirty dollars cost.",                       correct: false },
      ],
      explanation: "Yekutanga — 'on Friday' + 'at half past seven' + 'for dinner' + 'about thirty dollars'. Prepositions dzakanaka, mufambo wakanaka. Yepasi — pfupi zvikuru, dropped articles. Yepakati — word order yakaipa.",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone! Watora foni — wapinda ne shamwari yauya kubva kuLondon kuti murongere kudya pamwe chete pasi pevhiki. Unoda kupinda nguva, zuva, uye mutengo unoita.',
    lines: [
      {
        speaker: 'npc',
        target: "Hey! When and where should we meet for dinner this week, and what's a good budget?",
        native: 'Hesi! Tinosangana rinhi nokupi pakudya kwemanheru pavhiki, uye budget yakanaka inomira sei?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's meet on Friday at half past seven at Cafe Nush. It costs about twenty-five dollars per person.",  native: '...', correct: true,  feedback: "Wakwanisa zvikuru — manhamba (25), nguva (half past seven), zuva (Friday), nemari (per person) zvose zviri pamwe chete pasina kufunga. Iyi inhanho ye A2-B1." },
          { target: "Friday seven dollars twenty cafe.",                                                                          native: '...', correct: false, feedback: 'Yose pamwe chete asi pasina structure — wedzera prepositions: "on Friday at seven" "twenty dollars" "at the cafe".' },
          { target: "Maybe we meet sometime expensive cafe.",                                                                      native: '...', correct: false, feedback: '"Sometime" haipi nguva chaiyo, "expensive cafe" haisi nzira yekutaura mutengo. Pa-A2 unotara nguva chaiyo, mutengo chaiwo.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa Module 6! Manhamba, nguva, mari — zvose zvauri kushandisa pasina kufunga. Iye zvino une simba rekutaura pa-marketi, pa-bhanga, pa-musangano. Hatibvunzi futi: 'How much?' tinozvitaura.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Capstone recall.',
    prompts: [
      { prompt: 'Let\'s meet on Friday at half past seven (in English)', correct: ["Let's meet on Friday at half past seven", "Let's meet on Friday at half past seven.", "Lets meet on Friday at half past seven"] },
      { prompt: "What's the total with discount? (in English)", correct: ["What's the total with discount?", "What is the total with discount?", "What's the total with the discount?", "What is the total with the discount?"] },
    ],
  },

  mission: {
    title: 'Basa rePedzisira reModule 6',
    task: "Nyora kana taura paragraph imwe yakareba: 'Today is ___, the time is ___, I want to buy ___ for ___ dollars on ___.' Edza kushandisa zvose: zuva, nguva, mwedzi, mutengo. Tumira kushamwari yauri kudzidza nayo kana kuzvinyora pajournal.",
    rwenSignoff: "Wapedza Module 6 — manhamba ekuChiNgezi awo munhau yako. Module 7 inopa nyaya yekudya — chero ChiNgezi chinotanga pa-table.",
  },

  phase8: {
    scenario: "Capstone conversation: you're planning a weekend outing with an English-speaking friend. Cover when (day + time), where, what to do (with prices), and how to split the bill. Use numbers, time, days, months, and money phrases naturally — at least four different categories.",
    rwenRole: "Alex, 33, a Canadian friend living in Harare. Will ask follow-up questions about timing, prices, and splitting costs. Will counter-suggest if your timing is bad.",
    successCriteria: "User uses at least one item from each of: a specific day ('on Saturday'), a time using 'at' or 'half past' or 'quarter to', a money phrase with a number ('twenty dollars', 'discount', 'total', 'per person'), and a month or 'this week/weekend'. Sentences flow without obvious dropped articles.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
