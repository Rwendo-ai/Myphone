import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Ordering food — Kuita order',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Wapinda murestaurant, wagara, watora menyu. Iko zvino unoorder. MuChiNgezi, mashoko ekuorder ane hutsika — 'I'd like...' kwete 'I want...'. Wedzera kuna izvo zvaunopindira: 'without onions'.",
    culturalNote: "Kumusha, kana ukapihwa chikafu, hauwanzo bvunzi 'pasina hanyanisi' — chinopihwa nemupati ndicho. MuChiNgezi yerestaurant, kuchinjira chikafu (modifications) zvinotarisirwa — vamwe vanhu havadyi nyama, vamwe vanopihwa allergies. 'I'd like the chicken, but without onions, please' yakanaka muUK/USA — yakajeka, ine hutsika. Kumusha izvi zvinogona kunzwika sehutsika husina kunaka — uku, zvinotarisirwa.",
  },

  chunks: [
    {
      id: 'id_like',
      target: "I'd like...",
      native: 'Ndingade...',
      literal: 'I would like...',
      emoji: '👉',
      phonetic: 'ayd-LAYK',
      audioRef: null,
    },
    {
      id: 'could_i_have',
      target: 'Could I have...',
      native: 'Ndingawana...',
      literal: 'Could I have...',
      emoji: '🤲',
      phonetic: 'kud-ay-HAV',
      audioRef: null,
    },
    {
      id: 'without_onions',
      target: 'Without onions',
      native: 'Pasina hanyanisi',
      literal: 'Without onions',
      emoji: '🚫',
      phonetic: 'with-OWT-UN-yuns',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request — would/could',
    explanation: "MuChiNgezi yerestaurant, 'I want' yakaomesa zvakanyanya — inenge yekuraira. Shandisa 'I'd like...' (I would like) kana 'Could I have...?'. Iyi mitsetse miviri ine hutsika hwakawanda — yakanyatso shandiswa pakuorder. Wedzera 'without ___' kuti uchinje chikafu.",
    examples: [
      { target: "I'd like the chicken, please.",            native: 'Ndingade huku, ndapota.' },
      { target: 'Could I have it without onions?',          native: 'Ndingawana pasina hanyanisi here?' },
      { target: "I'd like the rice, no chilli, please.",    native: 'Ndingade mupunga, pasina chilli, ndapota.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ekuorder',
      pairs: [
        { left: "I'd like",       right: 'Ndingade' },
        { left: 'Could I have',   right: 'Ndingawana' },
        { left: 'Without onions', right: 'Pasina hanyanisi' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuorder huku',
      prompt: 'Ndingade huku, ndapota.',
      correct: [
        "I'd like the chicken, please.",
        "I'd like chicken, please.",
        "I would like the chicken, please.",
        "Could I have the chicken, please?",
        "i'd like the chicken, please.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kukumbira pasina hanyanisi',
      prompt: 'Pasina hanyanisi, ndapota.',
      correct: [
        'Without onions, please.',
        'No onions, please.',
        'Without onions please.',
        'No onions please.',
        'without onions, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri pa-restaurant uchiorder zvine hutsika',
      sentence: '____ I have the steak, please?',
      options: ['Could', 'Want', 'Give'],
      correct: 'Could',
      context: "'Could I have...' ndiyo polite phrase yekuorder.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara — uri kuorder huku pasina hanyanisi',
      words: ['like', 'chicken', "I'd", 'the', 'without', 'onions'],
      correct: ["I'd", 'like', 'the', 'chicken', 'without', 'onions'],
      translation: 'Ndingade huku pasina hanyanisi',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wakapfava',
      words: ['have', 'I', 'menu', 'Could', 'the'],
      correct: ['Could', 'I', 'have', 'the', 'menu'],
      translation: 'Ndingawana menyu here',
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-restaurant muJoburg. Waiter abvunza zvaunoda. Order huku pasina hanyanisi.",
    lines: [
      { speaker: 'npc', target: "Are you ready to order?", native: 'Wagadzirira kuorder here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'd like the chicken, without onions, please.",  native: 'Hongu, ndingade huku, pasina hanyanisi, ndapota.', correct: true,  feedback: "Wakwanisa — order yakajeka, polite, uchitsanangura zvausingade." },
          { target: "I want chicken, no onion.",                              native: 'Ndinoda huku, pasina hanyanisi.',                  correct: false, feedback: "'I want' yakaomesa — shandisa 'I'd like'. Ndizvozvo zviri better." },
          { target: "Chicken.",                                                native: 'Huku.',                                              correct: false, feedback: "Pfupi zvakanyanya — pa-restaurant unoda hutsika." },
        ],
      },
      { speaker: 'npc', target: "No problem. Anything to drink?", native: 'Hapana chinetso. Chimwe chekunwa here?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'I'd like' + 'without ___' — mutsetse uyu unokushandura kuva polite, jeka, uine kuchengetedza.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "I'd like the chicken (in English)", correct: ["I'd like the chicken", "I'd like the chicken.", "I would like the chicken", "i'd like the chicken"] },
      { prompt: 'Without onions, please (in English)', correct: ['Without onions, please', 'Without onions, please.', 'No onions, please', 'No onions, please.', 'without onions, please.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, sarudza chikafu chimwe chete chaunoda kudya. Order pamuromo muChiNgezi: 'I'd like ___, without ___, please.' Sarudza chausingade — hanyanisi, chilli, salt — kuti ushandise pattern yose.",
    rwenSignoff: "Tichaonana mangwana — tinotaura nezvechikafu chaunoda.",
  },

  phase8: {
    scenario: "You're at a restaurant in Johannesburg's Sandton. The waiter comes to take your order. You want the grilled chicken but you can't eat onions. Order it with the modification.",
    rwenRole: "Sipho, 35, an experienced waiter. Speaks polished English. Will check details for the kitchen.",
    successCriteria: "User uses 'I'd like...' or 'Could I have...', specifies a dish, and uses 'without ___' / 'no ___' to modify. Polite throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
