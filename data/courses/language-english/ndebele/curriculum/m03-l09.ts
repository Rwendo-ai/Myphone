import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-tipping',
  module: 3,
  lesson: 9,
  title: "Tipping — I-tip (eUK 10%, eUSA 15-20%)",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Indaba ye-tipping: eUK i-tip yi-10% futhi yenziwa kakhulu uma usebenzelwe kahle. EUSA, i-tip yi-15-20% — KAYIYENZELI optional, kuyimpongoze!",
    culturalNote: "LOKHU YIQINISO ELIBALULEKILEYO: EUSA, i-server-pay yiyondlulwa kancane (sometimes $2.13/hr) — i-tip yi-impilo yabo yokuphila. Akukho kuthi 'akangithandi'. Tshapha 15% kuwo wonke umsebenzi olungileyo, 18-20% kowuhle, 20%+ uma kungumusebenzi omkhulu. Uma ungatshapheli i-tip eUSA, kungumphukamiso onamandla. EUK kuyahlukile: i-server-pay iphakamisile ngamandla (i-minimum wage), ngakho i-tip yi-bonus, kayisiyo into ezamukelekayo. EUK 10% kuyamukelekayo, futhi enyengomadolomu (cafes ne-pubs) ungatshapheli i-tip kakhulu. Bopha: erestaurant eUK abanye bafaka 'service charge' (12.5%) kuyo i-bill — uma kungenze njalo, awusafanele wengeze enye i-tip. EZimbabwe kuyahlukile njalo — i-tip iyatshapha kodwa akufanele. Lokhu kuyimsuka — uma uhamba eUSA, lungisa i-budget yakho.",
  },

  chunks: [
    {
      id: 'tip',
      target: 'tip',
      native: 'i-tip (imali engeziweyo kumphathi)',
      literal: 'tip',
      emoji: '💵',
      phonetic: 'tip',
      audioRef: null,
    },
    {
      id: 'service_charge',
      target: 'service charge',
      native: 'imali yenkonzo (esebevele engezwe)',
      literal: 'service charge',
      emoji: '📋',
      phonetic: 'SUR-vis-charj',
      audioRef: null,
    },
    {
      id: 'keep_the_change',
      target: 'Keep the change.',
      native: 'Gcina imali esalileyo.',
      literal: 'Keep the change',
      emoji: '🪙',
      phonetic: 'keep-thuh-CHAYNJ',
      audioRef: null,
    },
    {
      id: 'is_service_included',
      target: 'Is service included?',
      native: 'Imali yenkonzo isengezwe?',
      literal: 'Is service included',
      emoji: '❓',
      phonetic: 'iz-SUR-vis-in-KLOO-ded',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Talking about tips',
    explanation: "EUK: i-tip = ~10%, kakuyenzeli ngazo zonke izikhathi. EUSA: i-tip = 15-20%, kuyenzeli njalo erestaurant. Buza 'Is service included?' eUK ukuze ungatshapheli kabili. EUSA ungatsho 'Keep the change' uma uphendula nge-cash, kumbe wengeza i-tip ku-card slip.",
    examples: [
      { target: "Is service included?",     native: 'Imali yenkonzo isengezwe? (UK)' },
      { target: "Keep the change.",          native: 'Gcina imali esalileyo.' },
      { target: "I'll add 20% tip.",         native: 'Ngizengeza i-tip ye-20%. (USA standard)' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Khetha okulungileyo',
      question: "USeNew York. I-bill yakho yi-$50 erestaurant. I-tip okulindeleke yiyiphi?",
      options: [
        { text: "$7.50–$10 (15–20%)", correct: true },
        { text: "$2 (kuyabonga)",     correct: false },
        { text: "$0 (kayidingakali)",  correct: false },
      ],
      explanation: "EUSA, i-tip ye-15-20% iyamukelekayo. Ngaphansi kuka-$5 kuyimphukamisi enkulu. Ngenxa yokuthi i-server-pay iphansi kakhulu, i-tip yiyo eyenza i-impilo yabo.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okulungileyo',
      question: "USeLondon. I-bill yakho yi-£40, kufakwe i-service charge ye-£5. Wenzeni?",
      options: [
        { text: "Khokha £40 + £5 = £45 (akufanele wengeze enye)", correct: true },
        { text: "Khokha £45 + £8 enye e-tip (=20%)",              correct: false },
        { text: "Khokha £40 kuphela",                             correct: false },
      ],
      explanation: "EUK, uma i-service charge isivele isengezwe (12.5% sivamile), akusafanele wengeze enye. Ungaba uyitshapha kabili!",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Imali yenkonzo isengezwe? (eUK)',
      correct: ["Is service included?", "Is the service included?", "Is service charge included?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa lokhu',
      sentence: "Keep the ___.",
      options: ['change', 'money', 'tip'],
      correct: 'change',
      context: "Ukhokha nge-cash, ufuna ukutsho ukuthi imali esalileyo ngeyakhe.",
    },
  ],

  rwenDialogue: {
    intro: "Useerestaurant eNew York. Selidlile, ufuna ukukhokha futhi wengezele i-tip. I-bill yi-$40.",
    lines: [
      { speaker: 'npc', target: "Here's the check. Whenever you're ready.", native: 'Nansi i-check. Uma ulungele.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. I'll pay by card and add a 20% tip.", native: 'Ngiyabonga. Ngizakhokha nge-card njalo ngengeze i-tip ye-20%.', correct: true,  feedback: "Kuhle kakhulu — 20% yi-standard eUSA, futhi ucacisile ukungeza." },
          { target: "Can I add a £4 tip?",                              native: 'Ngingengeza i-tip ye-£4?',                                  correct: false, feedback: "$4 ku-bill ye-$40 = 10%, kuyimphukamiso eUSA. Engeza okungenani 15%." },
          { target: "No tip.",                                          native: 'Akukho i-tip.',                                              correct: false, feedback: "EUSA, lokhu kuyimphukamisi enkulu — i-server uthembele kakhulu ku-tips. Faka okungenani 15%." },
        ],
      },
      { speaker: 'npc', target: "Thank you so much, that's very kind!", native: 'Ngibonga kakhulu, lokhu kunhle kakhulu!' },
      {
        speaker: 'rwen',
        rwenLine: "Bopha lokhu njengomthetho: eUSA = 15-20% NJALO. EUK = 10% kumbe akukho. Ungahambeli izindlela zomdabu wakho — eUSA ungeke wakhululeka kungafakwa i-tip.",
        rwenAnimation: 'thumbs_up',
      },
    ],
  },

  activeRecall: {
    instruction: 'Phendula ngesiNgisi.',
    prompts: [
      { prompt: 'EUSA, i-tip eyamukelekayo yiyiphi? (ngamaphesenti)', correct: ['15-20%', '15 to 20 percent', '15%-20%', 'fifteen to twenty percent'] },
      { prompt: 'Imali yenkonzo isengezwe? (eUK, ngesiNgisi)',         correct: ['Is service included?', 'Is the service included?'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Cabanga ngo-bill we-£50 eLondon kanye lo-bill we-$50 eNew York. Bala i-tip yamabili: eUK = £5 (10%), eUSA = $7.50–$10 (15–20%). Lokhu kuzakukulondoloza ezikhathini ezizayo.",
    rwenSignoff: "Kuhle. Kusasa sifunda i-dialogue ephelele yokudla.",
  },

  phase8: {
    scenario: "You're paying the check at a restaurant in either New York (US) or London (UK). The system prompt will specify which. The bill is $40 (US) or £40 (UK). You need to handle tipping correctly for the location — and notice if a service charge is already included (UK only).",
    rwenRole: "Jordan, the server (location-dependent accent). Will mention 'service is not included' if asked in the UK, or simply present the check in the US.",
    successCriteria: "If US: user adds 15-20% tip. If UK: user asks 'Is service included?' before deciding, and tips appropriately (10% if not included, no extra if included).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
