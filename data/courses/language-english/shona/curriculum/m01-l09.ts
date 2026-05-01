import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-goodbye',
  module: 1,
  lesson: 9,
  title: 'Goodbye — Sara/Famba zvakanaka',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Kuparadzana muChiNgezi kune mashoko akawanda. 'Goodbye' yetsika. 'See you tomorrow' kana munenge muchasangana zuva rinotevera. 'Take care' kuratidza kuti une hanya nemumwe.",
    culturalNote: "MuChiShona pakuparadzana, kuti 'Famba zvakanaka' kunoreva 'famba pasina dambudziko'. MuChiNgezi 'Take care' yakaenzana — inoreva 'zvichengete'. Inoshandiswa zvakanyanya nepakati peshamwari, hama, nevanhu vaunoda — kwete pa formal yakakwirira.",
  },

  chunks: [
    {
      id: 'goodbye',
      target: 'Goodbye',
      native: 'Sara zvakanaka',
      literal: undefined,
      emoji: '👋',
      phonetic: 'good-BAI',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow',
      native: 'Tichaonana mangwana',
      literal: 'We-will-see-each-other tomorrow',
      emoji: '📅',
      phonetic: 'SEE-yoo-tuh-MOR-oh',
      audioRef: null,
    },
    {
      id: 'take_care',
      target: 'Take care',
      native: 'Chenjerai',
      literal: 'Take care of yourself',
      emoji: '💚',
      phonetic: 'tayk-KAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative goodbye',
    explanation: "MuChiNgezi 'Take care' inotumira mumwe kuti azvichengete — yakaenzana ne 'Chenjerai'. Yakaitwa imperative (basa) — nyaya yetsika kuratidza kuti une hanya. 'See you tomorrow' inopa tariro yekuonana zvakare — yakanaka pakuparadzana neshamwari kana neumwe webasa.",
    examples: [
      { target: 'Goodbye',          native: 'Sara zvakanaka' },
      { target: 'See you tomorrow', native: 'Tichaonana mangwana' },
      { target: 'Take care',        native: 'Chenjerai' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ekuparadzana',
      pairs: [
        { left: 'Goodbye',           right: 'Sara zvakanaka' },
        { left: 'See you tomorrow',  right: 'Tichaonana mangwana' },
        { left: 'Take care',         right: 'Chenjerai' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Tichaonana mangwana',
      correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Chenjerai',
      correct: ['Take care', 'take care', 'Take care.', 'take care.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa kupindurana kuparadzana',
      sentence: '____ you tomorrow!',
      options: ['See', 'Meet', 'Know'],
      correct: 'See',
      context: 'Uri kuenda kumba — uchazosangana zvakare mangwana.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wekuparadzana',
      words: ['Goodbye', 'and', 'take', 'care'],
      correct: ['Goodbye', 'and', 'take', 'care'],
      translation: 'Sara zvakanaka uye chenjerai',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Uri kubuda hofisi panguva ye 5pm. Wadzima computer yako. Unoti chii kuvashandi?",
      options: [
        { text: 'Goodbye! See you tomorrow.',  correct: true },
        { text: 'Hi! How are you?',             correct: false },
        { text: 'Good morning.',                correct: false },
      ],
      explanation: "Pakuparadzana, 'Goodbye' kana 'See you tomorrow' ndizvo zvinoshanda — kwete kwaziso yepakutanga.",
    },
  ],

  rwenDialogue: {
    intro: "Inguva 5pm — wapedza basa. Uri kuenda kumba. Mushandi-mwedo wako anouya kuzokuwana parizini.",
    lines: [
      { speaker: 'npc', target: "Hey, you're heading out? Goodbye!", native: 'Aiwa, urikuenda? Sara zvakanaka!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Goodbye! See you tomorrow. Take care.", native: 'Sara zvakanaka! Tichaonana mangwana. Chenjerai.', correct: true,  feedback: "Wakwanisa — wakatumira mashoko matatu etsika ekuparadzana." },
          { target: 'Good morning!',                          native: 'Mangwanani!',                                       correct: false, feedback: "Inguva yamanheru, uye uri kuparadzana — kwete kwaziso." },
          { target: "What's your name?",                      native: 'Zita rako ndiani?',                                 correct: false, feedback: "Munoshanda pamwe chete — anenge uri kunyepedzera kuti hamuzivani." },
        ],
      },
      { speaker: 'npc', target: "Take care! See you tomorrow.", native: 'Chenjerai! Tichaonana mangwana.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watumira munhu kunzwa kuti une hanya naye — ndiwo mashoko etsika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Goodbye (in English)',        correct: ['Goodbye', 'goodbye', 'Goodbye.', 'goodbye.'] },
      { prompt: 'See you tomorrow (in English)', correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Manheru ano kana wabuda kunze kweimba kana basa, edza kuparadzana zvine tsika muChiNgezi: 'Goodbye' kana 'Take care'.",
    rwenSignoff: "Sara zvakanaka. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "It's 5pm and you're packing up to leave the office. A colleague catches you at the door — exchange a proper goodbye in English.",
    rwenRole: "Tinashe, 30, your work neighbour from the next desk. Friendly, casual-professional, sees you every weekday.",
    successCriteria: "User uses 'Goodbye' or 'See you tomorrow', adds 'Take care' or similar warm closing, and stays in casual-professional register (not stiff-formal, not like meeting a stranger).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
