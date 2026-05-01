import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Hosting in English — Kugamuchira muvarume veChiNgezi',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinotaura nezvekugamuchira muvarume. Mauya, garai pasi, batai zvamuri kuda. Chidzidzo ichi chinopinda mukati mehutsika hwedu — asi nemashoko echiNgezi.",
    culturalNote: "Hutsika hwekugamuchira hwakawanda muChiShona — uchinge wapinda nemumwe kumba, kudya kunouya, vana vanonyararidzwa, hapana munhu anoenda asina kudya. Hutsika hwakavakirwa pakuti 'mukuwasha anodya kutanga' — kupa unotanga, ndiyo identity. MuChiNgezi (UK/USA), kugamuchira kunoita zvakasiyana — vagari vanowanzo bvunzwa 'help yourself' (zvitorere wega). Kunzwika sehutsika husina kunaka kana wakakurira muZim, asi pa-UK, ndiyo hutsika yakanaka — vanofunga kuti munhu anozviziva zvaanoda. Iwe une advantage — utsika hwako hwekugamuchira hwakasimba; chinodiwa mashoko echiNgezi chete.",
  },

  chunks: [
    {
      id: 'welcome',
      target: 'Welcome',
      native: 'Mauya',
      literal: 'Welcome (you have come)',
      emoji: '🤗',
      phonetic: 'WEL-kum',
      audioRef: null,
    },
    {
      id: 'sit_down',
      target: 'Please, sit down',
      native: 'Garai pasi',
      literal: 'Please sit down',
      emoji: '🪑',
      phonetic: 'PLEEZ-SIT-down',
      audioRef: null,
    },
    {
      id: 'help_yourself',
      target: 'Help yourself',
      native: 'Bata zvauri kuda',
      literal: 'Take what you want yourself',
      emoji: '🍽️',
      phonetic: 'HELP-yor-SELF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Host phrases — opening, seating, serving',
    explanation: "Mutsetse wekugamuchira ane zvikamu zvitatu. (1) PINDA — 'Welcome' kana 'Come in, come in'. (2) GARA — 'Please sit down' kana 'Take a seat'. (3) DYA — 'Help yourself' kana 'Please, eat'. MuChiNgezi, 'help yourself' inonzi unoda kuti muvaranda azvitorere — itsika yepfungwa yokuti munhu anozviziva zvaanoda. Cherechedza: hazvina kuipa, asi zvakasiyana neZim hutsika.",
    examples: [
      { target: 'Welcome! Please come in.',     native: 'Mauya! Pindai mukati.' },
      { target: 'Please, sit down. Make yourself comfortable.', native: 'Garai pasi. Rondedzerai zvenyu.' },
      { target: 'Help yourself — there\'s plenty.',              native: 'Batai zvamuri kuda — pane chakawanda.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ekugamuchira',
      pairs: [
        { left: 'Welcome',         right: 'Mauya' },
        { left: 'Please sit down', right: 'Garai pasi' },
        { left: 'Help yourself',   right: 'Bata zvauri kuda' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wagamuchira shamwari yako pamukova',
      prompt: 'Mauya! Pindai mukati.',
      correct: [
        'Welcome! Please come in.',
        'Welcome! Come in.',
        'Welcome, come in.',
        'Welcome! Please, come in.',
        'welcome! please come in.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuti vatorere chikafu vega',
      prompt: 'Batai zvamuri kuda — pane zvakawanda.',
      correct: [
        "Help yourself — there's plenty.",
        "Help yourself, there's plenty.",
        "Please help yourself.",
        "Help yourselves — there's plenty.",
        "help yourself — there's plenty.",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — wagamuchira muvaranda, unoda kuti agare',
      sentence: 'Please, ____ down. Make yourself at home.',
      options: ['sit', 'go', 'come'],
      correct: 'sit',
      context: "'Sit down' = garai pasi. Inoshandiswa pakanyura wekutanga.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wekugamuchira',
      words: ['in', 'come', 'Welcome', 'please'],
      correct: ['Welcome', 'please', 'come', 'in'],
      translation: 'Mauya, pindai mukati',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — uri kuti vatorere chikafu',
      words: ['Please', 'help', 'yourself'],
      correct: ['Please', 'help', 'yourself'],
      translation: 'Batai zvamuri kuda',
    },
  ],

  rwenDialogue: {
    intro: "Shamwari yako yeUK auya kumba kwako muHarare. Apinda. Mugamuchire muChiNgezi.",
    lines: [
      { speaker: 'npc', target: "Hi! Thanks for having me.", native: 'Hesi! Ndinotenda nekundigamuchira.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Welcome! Please come in, sit down. Make yourself at home.", native: 'Mauya! Pindai mukati, garai pasi. Rondedzerai zvenyu.', correct: true,  feedback: 'Wakwanisa — kugamuchira kuzere, mutsetse wakajeka.' },
          { target: "Sit.",                                                          native: 'Gara.',                                              correct: false, feedback: "Pfupi zvakanyanya — kugamuchira kunoda mashoko mashoma asi anodzika." },
          { target: "Yes hello.",                                                     native: 'Hongu mhoro.',                                        correct: false, feedback: "Hapana 'welcome' kana kupinza muvaranda — wakapotsa hutsika." },
        ],
      },
      { speaker: 'npc', target: "Thank you. This smells amazing — what is it?", native: 'Ndatenda. Inonhuwirira zvakanaka — chii ichocho?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sadza with mukaranga. Help yourself — there's plenty.", native: 'Sadza nemukaranga. Batai zvamuri kuda — pane zvakawanda.', correct: true,  feedback: 'Wakwanisa — wakaratidza chikafu, wakatenga vatorere.' },
          { target: "I serve you.",                                              native: 'Ndichakuendzera (literal).',                                 correct: false, feedback: "Inoshanda kuZim, asi muvarume aenda kuChiNgezi anonatsotarisira 'help yourself'. Pinda hutsika hwavo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakapinza muvaranda muhutsika hweZim — asi wakashandisa mashoko echiNgezi avanoziva. 'Help yourself' chete kuti vasada kunzwa kunge vanenge vasiri pamba pavo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Welcome, please come in (in English)', correct: ['Welcome, please come in', 'Welcome please come in', 'Welcome, please come in.', 'welcome, please come in'] },
      { prompt: 'Help yourself (in English)', correct: ['Help yourself', 'Help yourself.', 'Please help yourself', 'help yourself'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti shamwari yeChiNgezi auya kumba kwako. Taura pamuromo: 'Welcome! Please come in. Sit down. Help yourself.' Mutsetse mushoma — chinangwa chimwe: kuti azive kuti agamuchirwa nemwoyo wose.",
    rwenSignoff: "Tichaonana mangwana — tinosanganisa zvose.",
  },

  phase8: {
    scenario: "Your English-speaking colleague from a Cape Town conference has come to your home in Harare for dinner. They're standing at your front door. Welcome them in, get them seated, and serve sadza with mukaranga — using 'help yourself' so they don't feel awkwardly waited on.",
    rwenRole: "James, 40, British, working in Johannesburg. Polite, slightly shy in unfamiliar settings. Will hesitate before serving himself unless told to.",
    successCriteria: "User uses 'Welcome', 'Please sit down' / 'Take a seat', and 'Help yourself' (or 'please, eat'). Bridges Shona hospitality with English-speaker norms — explicitly invites them to serve themselves.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
