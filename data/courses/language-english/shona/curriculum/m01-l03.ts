import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-good-morning',
  module: 1,
  lesson: 3,
  title: 'Good morning — Mangwanani',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mangwanani! MuChiNgezi, kubvunza kuti mumwe arara sei kunoratidza tsika — sezvazvakaita pa ChiShona pataswera tichiti 'Marara sei?'.",
    culturalNote: "MuChiShona, 'Marara sei?' inyaya yetsika — vanhu vanonyatsobvunzana kuti varare sei. MuChiNgezi, 'Did you sleep well?' haishandiswi nguva dzose — vanhu vakawanda vanopindira chete kuti 'Good morning'.",
  },

  chunks: [
    {
      id: 'good_morning',
      target: 'Good morning',
      native: 'Mangwanani',
      literal: undefined,
      emoji: '🌅',
      phonetic: 'good-MOR-ning',
      audioRef: null,
    },
    {
      id: 'did_you_sleep_well',
      target: 'Did you sleep well?',
      native: 'Marara sei?',
      literal: 'Did you sleep how/well?',
      emoji: '😴',
      phonetic: 'did-yoo-SLEEP-well',
      audioRef: null,
    },
    {
      id: 'i_slept_well',
      target: 'I slept well',
      native: 'Ndakarara zvakanaka',
      literal: 'I-slept well',
      emoji: '✨',
      phonetic: 'aye-SLEPT-well',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greeting',
    explanation: "MuChiNgezi, kwaziso inochinja zvichienderana nenguva. 'Good morning' inoshandiswa kubva mangwanani kusvika kunenge midday (12pm). 'Did you sleep well?' inoshandiswa pakati peshamwari kana hama — kwete munhu wausingazivi.",
    examples: [
      { target: 'Good morning',           native: 'Mangwanani' },
      { target: 'Did you sleep well?',    native: 'Marara sei?' },
      { target: 'I slept well, thanks',   native: 'Ndakarara zvakanaka, ndatenda' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko',
      pairs: [
        { left: 'Good morning',         right: 'Mangwanani' },
        { left: 'Did you sleep well?',  right: 'Marara sei?' },
        { left: 'I slept well',         right: 'Ndakarara zvakanaka' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mangwanani',
      correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pindura kushamwari',
      prompt: 'Ndakarara zvakanaka',
      correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa kwaziso yemangwanani',
      sentence: 'Good ____, how did you sleep?',
      options: ['morning', 'evening', 'night'],
      correct: 'morning',
      context: 'Inguva 8am — wapinda hofisi.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko',
      words: ['Did', 'you', 'sleep', 'well'],
      correct: ['Did', 'you', 'sleep', 'well'],
      translation: 'Marara sei?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Marara sei?',
      correct: ['Did you sleep well?', 'did you sleep well?', 'Did you sleep well', 'did you sleep well'],
    },
  ],

  rwenDialogue: {
    intro: 'Wapinda mubasa na 8am. Mumwe wevashandi anokukwazisa neChiNgezi.',
    lines: [
      { speaker: 'npc', target: 'Good morning! Did you sleep well?', native: 'Mangwanani! Marara sei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good morning. I slept well, thanks.", native: 'Mangwanani. Ndakarara zvakanaka, ndatenda.', correct: true,  feedback: "Wakanyatso — wakwazisa zvakanaka uye wapindura zvine tsika." },
          { target: 'Hi.',                                  native: 'Hesi.',                                       correct: false, feedback: "Yepfupi zvakanyanya — pamabasa pavanhu vanotaura ChiNgezi 'Good morning' inonyatso fanira." },
          { target: 'Bye!',                                 native: 'Sara zvakanaka!',                             correct: false, feedback: "Iwoyu mushoko wekuparadzana, kwete kukwazisa." },
        ],
      },
      { speaker: 'npc', target: "Glad to hear it.", native: 'Ndafara kunzwa.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakapinda mubasa zvakanaka — kuratidza tsika kunokoshazve muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Good morning (in English)', correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'] },
      { prompt: 'I slept well (in English)', correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Mangwana mangwanani, kwazisa mumwe munhu uchiti 'Good morning' — kunyange iri kuhama kana mushandi.",
    rwenSignoff: "Famba zvakanaka — tichaonana mangwana.",
  },

  phase8: {
    scenario: "It's 8am and you've just walked into your office. An English-speaking colleague greets you at the kitchen as you're making coffee.",
    rwenRole: "Sarah, 35, a friendly British-Zimbabwean colleague who's worked at the company for years. Polite, morning-person, asks genuine questions.",
    successCriteria: "User opens with 'Good morning', responds appropriately if asked 'Did you sleep well?' (uses 'I slept well' or similar), and keeps the register polite-but-professional.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
