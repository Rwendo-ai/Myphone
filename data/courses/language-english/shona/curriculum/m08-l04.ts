import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want-need',
  module: 8,
  lesson: 4,
  title: '"To want" & "to need" — I want / I need',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiNgezi 'I want' inonyatsoreva 'ndinoda', asi pamafoyi e-customer service kana parestaurant, 'I want' inogona kunzwika seyakaomarara. Vanhu vanoshandisa 'I'd like' (= 'ndingade') — yakareruka, ine hutsika. 'I need' inoreva 'ndinotambudzika nazvo' — yakasimba.",
    culturalNote: "MuShona 'ndinoda' inoshanda kose — pa-tafura pamba, kuvashandi, kushamwari. MuChiNgezi yeUK kana yeUSA, 'I want' inonzwika seyakaomarara — sechirevo cheaa-aaa nokunge munhu mukuru ari kushevedza shandisi. Mhinduro: shandisa 'I'd like' (I would like) chero pawanenge uchitaura kuvashandi — yakareruka, yakanaka. 'I need' chete pakanaka kana zvinhu zvinokosha (I need water — ndine nyota).",
  },

  chunks: [
    {
      id: 'i_want_coffee',
      target: 'I want coffee.',
      native: 'Ndinoda kofi.',
      literal: 'I want coffee',
      emoji: '☕',
      phonetic: 'ay-WONT-KAW-fee',
      audioRef: null,
    },
    {
      id: 'i_need_a_break',
      target: 'I need a break.',
      native: 'Ndinoda kuzorora.',
      literal: 'I need a break',
      emoji: '😮‍💨',
      phonetic: 'ay-NEED-uh-BRAYK',
      audioRef: null,
    },
    {
      id: 'id_like_tea',
      target: "I'd like tea, please.",
      native: 'Ndingade tii, ndapota.',
      literal: 'I would like tea, please',
      emoji: '🍵',
      phonetic: 'ayd-LAYK-TEE-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Want / Need / Would like — Politeness ladder',
    explanation: "WANT = ndinoda — sirungiri, akareruka pakati pevamwe. NEED = ndinotambudzika kana ndichida — yakasimba, ine urgency. WOULD LIKE ('I'd like') = ndingade — yakanaka, yehutsika. Pakuoda kuvashandi (cafe, shop, restaurant) garomo 'I'd like' kana 'Could I have'. Pamba kana neshamwari, 'I want' inoshanda.",
    examples: [
      { target: 'I want coffee.',         native: 'Ndinoda kofi.' },
      { target: 'I need a break.',        native: 'Ndinoda kuzorora.' },
      { target: "I'd like tea, please.",  native: 'Ndingade tii, ndapota.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I want',    right: 'Ndinoda (sirungiri)' },
        { left: 'I need',    right: 'Ndinotambudzika nazvo' },
        { left: "I'd like",  right: 'Ndingade (yakanaka)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Uri pa-cafe muLondon. Sarudza shoko rakanaka.",
      sentence: "_____ a coffee, please.",
      options: ["I'd like", 'I want', 'I need'],
      correct: "I'd like",
      context: "Pa-cafe, 'I'd like' yakanaka kupfuura 'I want'. Hutsika hwakakwana.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kushevedza kushamwari yako pamba',
      prompt: 'Ndinoda kofi.',
      correct: ['I want coffee.', 'I want coffee', 'i want coffee.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wabuda mukati kwemwedzi mizhinji yokushanda nguva refu',
      prompt: 'Ndinoda kuzorora.',
      correct: ['I need a break.', 'I need a break', 'i need a break.', 'I need to rest.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo cheyetsika: "Ndingade tii, ndapota"',
      words: ['please.', 'tea,', "I'd", 'like'],
      correct: ["I'd", 'like', 'tea,', 'please.'],
      translation: 'Ndingade tii, ndapota',
    },
    {
      type: 'multiple_choice',
      instruction: 'Mubasa, mukuru wako akubvunza kana wakaneta. Iwe une nyota chaiyo. Iwe unoti?',
      question: 'Choose the right phrase:',
      options: [
        { text: 'I need some water.', correct: true },
        { text: 'I want some water.', correct: false },
        { text: 'I have some water.', correct: false },
      ],
      explanation: "'Need' inoratidza urgency — une nyota chaiyo. 'Want' inotaridza zvido chete — kwete urgency.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-cafe pa-Soho, London. Uri kuoda zvekudya zvemangwanani.",
    lines: [
      { speaker: 'npc', target: "Good morning! What can I get you?", native: 'Mangwanani! Mungade chii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a coffee and a croissant, please.", native: 'Ndingade kofi nekrasati, ndapota.', correct: true, feedback: "Wakwanisa — 'I'd like' ndiyo nzira yakanaka pakuoda. Wawedzera 'please' — hutsika hwakakwana." },
          { target: "I want coffee. I want croissant.", native: 'Ndinoda kofi. Ndinoda krasati.', correct: false, feedback: "Yakaomarara zvishoma kuvashandi. Edza 'I'd like' kana 'Could I have' panzvimbo." },
          { target: "I need coffee now.", native: 'Ndinoda kofi izvozvi.', correct: false, feedback: "'Need' inoratidza urgency — pa-cafe yakajairika hairevi kuti uri pakaipa. Shandisa 'I'd like'." },
        ],
      },
      { speaker: 'npc', target: "Of course. Anything else?", native: 'Hongu. Pane chimwe here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "No, that's all, thanks.", native: 'Aiwa, ndizvo zvose, ndatenda.', correct: true, feedback: "Yakanaka — wapedza order yako nehutsika." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'I'd like' = yakanaka muchitoro. 'I want' = pamba neshamwari. 'I need' = chinhu chinokosha kwazvo. Tatu dzino dzine ladder yehutsika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I want coffee (in English)', correct: ['I want coffee', 'I want coffee.', 'i want coffee.'] },
      { prompt: "I'd like tea, please (in English)", correct: ["I'd like tea, please", "I'd like tea, please.", "I would like tea, please.", "i'd like tea, please."] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti uri pa-cafe muLondon. Oda zvinhu zvitatu uchishandisa 'I'd like': 'I'd like a coffee', 'I'd like a sandwich', 'I'd like some water'. Wedzera 'please' kunopera kose.",
    rwenSignoff: "Mangwana — morning routine. 'I wake up...'. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri pa-cafe muLondon mangwanani. Uri kuoda kudya kwemangwanani — shandisa hutsika hwakakwana ('I'd like', 'I need', 'please', 'thank you').",
    rwenRole: "Mark, 24, barista pa-cafe pa-Shoreditch. Anoshamwaridzana, anokurudzira kuti utaure zvinhu zvakajeka.",
    successCriteria: "Mudzidzi anoshandisa 'I'd like' kanenge katatu pakuoda, anosiyanisa pakati pe-'I'd like' (politeness) ne-'I need' (urgency), uye anopedza nehutsika ('thanks').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
