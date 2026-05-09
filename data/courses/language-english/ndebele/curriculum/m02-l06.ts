import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-today-tomorrow-yesterday',
  module: 2,
  lesson: 6,
  title: 'Today, tomorrow, yesterday — Lamuhla, kusasa, izolo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Lamuhla sifunda amagama amathathu abalulekileyo: 'today' (lamuhla), 'tomorrow' (kusasa), kanye 'yesterday' (izolo). Ngena leze emhambisweni wezikhathi.",
    culturalNote: "EsiNdebeleni 'lamuhla', 'kusasa', kanye 'izolo' ngamagama amancane futhi alula. Kodwa ngesiNgisi 'tomorrow' libhalwa ngamhla amabili: T-O-M-O-R-R-O-W. AbaNdebele bavame ukulibhala ngo R munye nje qha (TOMOROW) — lokho yi-iphutha. Kanjalo, 'yesterday' likhulunywa 'YES-ter-day' (akusi 'yes-TER-day'). Lokhu kuhambelana ne 'Saturday' (SAT-er-day) — ukugcizelelwa kuyimpela kwekuqaleni.",
  },

  chunks: [
    {
      id: 'today',
      target: 'Today',
      native: 'Lamuhla',
      literal: 'Today',
      emoji: '📅',
      phonetic: 'too-DAY',
      audioRef: null,
    },
    {
      id: 'tomorrow',
      target: 'Tomorrow',
      native: 'Kusasa',
      literal: 'Tomorrow (R-R, hatshi R yodwa)',
      emoji: '➡️',
      phonetic: 'too-MOR-oh',
      audioRef: null,
    },
    {
      id: 'yesterday',
      target: 'Yesterday',
      native: 'Izolo',
      literal: 'Yesterday',
      emoji: '⬅️',
      phonetic: 'YES-ter-day',
      audioRef: null,
    },
    {
      id: 'next_week',
      target: 'Next week',
      native: 'Iviki elilandelayo',
      literal: 'Next week',
      emoji: '📆',
      phonetic: 'NEKST-week',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Time markers — kuqala kwesigatshana",
    explanation: "EsiNgisini, amagama esikhathi (today, tomorrow, yesterday) avama ukuza ekuqaleni kwesigatshana loba ekugcineni. 'Today I am working' / 'I am working today' — yobubili kufaneleka. Akudingakali ukufaka 'on' phambili kwawo: hatshi 'on today' (akukho), hatshi 'in yesterday' (akukho). Avumile zihlangani — yiwo ngokwawo.",
    examples: [
      { target: 'Today I am at home.',         native: 'Lamuhla ngisendlini.' },
      { target: 'I will see you tomorrow.',     native: 'Ngizakubona kusasa.' },
      { target: 'Yesterday was Sunday.',        native: 'Izolo bekunguSonto.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lalokho akushoyo ngesiNdebele',
      pairs: [
        { left: 'Today',     right: 'Lamuhla' },
        { left: 'Tomorrow',  right: 'Kusasa' },
        { left: 'Yesterday', right: 'Izolo' },
        { left: 'Next week', right: 'Iviki elilandelayo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Kusasa',
      correct: ['Tomorrow', 'tomorrow', 'Tomorrow.', 'tomorrow.'],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa indawo engelalutho — Lamuhla nguLwesithathu",
      sentence: 'Today is Wednesday. ____ was Tuesday.',
      options: ['Yesterday', 'Tomorrow', 'Next week'],
      correct: 'Yesterday',
      context: 'Phambi kuka Wednesday kuza Tuesday. Yikho izolo ibinguTuesday.',
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha isipelo esifaneleyo",
      question: "Sipelo siphi se 'tomorrow' esifaneleyo?",
      options: [
        { text: 'tomorrow (T-O-M-O-R-R-O-W)', correct: true },
        { text: 'tomorow (T-O-M-O-R-O-W)',     correct: false },
        { text: 'tommorow (T-O-M-M-O-R-O-W)',  correct: false },
      ],
      explanation: "'Tomorrow' liphethwe nge R-R. AbaNdebele bavame ukubhala 'tomorow' kumbe 'tommorow' — bobabili abalungile. Khumbula: M-O munye, R-R amabili.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — utshela ohamba lawe ngamhla',
      words: ['I', 'tomorrow', 'will', 'come'],
      correct: ['I', 'will', 'come', 'tomorrow'],
      translation: 'Ngizoza kusasa',
    },
  ],

  rwenDialogue: {
    intro: 'Ucinga umsebenzi. Manager ucela ukuthi uze ngomhla othize, kodwa ungaqondisi kahle.',
    lines: [
      { speaker: 'npc', target: "Can you start tomorrow morning?", native: 'Ungaqala kusasa ekuseni?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I can come tomorrow.",   native: 'Yebo, ngingeza kusasa.',           correct: true,  feedback: "Kuhle! 'Tomorrow' kufaneleka njengomvuzo ungaqondisisi yini — 'next day'." },
          { target: "Yes, I came tomorrow.",        native: 'Yebo, ngafika kusasa.',             correct: false, feedback: "'Came' yindlela edlulileyo — kungumsebenzi wezolo. Kusasa kungaba njalo ku 'come' kumbe 'will come'." },
          { target: "Yesterday, I come.",            native: 'Izolo, ngiyeza.',                    correct: false, feedback: "'Yesterday' yi-izolo — kuyilanga elidlulileyo. Manager ucele kusasa, futhi ufanele uthi 'tomorrow' kumbe 'yes'." },
        ],
      },
      { speaker: 'npc', target: "Great, see you tomorrow at 8.", native: 'Kuhle, sizabonana kusasa ngo-8.' },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele! Today, tomorrow, yesterday — emithathu yifuyo lapho uphendula isikhathi. Manje uyazo zonke.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'Today (ngesiNgisi)',     correct: ['Today', 'today', 'Today.', 'today.'] },
      { prompt: 'Tomorrow (ngesiNgisi)',  correct: ['Tomorrow', 'tomorrow', 'Tomorrow.', 'tomorrow.'] },
      { prompt: 'Yesterday (ngesiNgisi)', correct: ['Yesterday', 'yesterday', 'Yesterday.', 'yesterday.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Bhala (kumbe utsho ngomlomo) imisebenzi yakho yamhla amathathu: 'Yesterday I ____. Today I ____. Tomorrow I will ____.' Yenze ngamandla, ngokucabanga, futhi qaphela ukuthi 'tomorrow' liloku R-R amabili.",
    rwenSignoff: "Lamuhla wenze izolo lakho liphunyuke kahle. Sizabonana kusasa — ngempela kusasa, hatshi 'next week'.",
  },

  phase8: {
    scenario: "You're at a job interview in Johannesburg. The manager wants to confirm when you can start, what you did yesterday, and what your week ahead looks like. Use today, tomorrow, yesterday, and next week correctly.",
    rwenRole: "Mr Khumalo, 55, a polite South African manager. He'll ask three questions: 'When can you start?', 'What did you do yesterday?', and 'When can you come for the medical?'. He'll wait patiently for your answer.",
    successCriteria: "User uses 'today', 'tomorrow', and 'yesterday' correctly across the three answers — not mixing tenses (e.g. doesn't say 'yesterday I will come'). Bonus if they use 'next week' too.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
