import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-plurals-regular',
  module: 4,
  lesson: 4,
  title: 'Plurals — adding -s',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiNgezi, kuwedzera 'plural' (zvinhu zvizhinji) zvinongoita zvichi-wedzera '-s' chete. Cat → cats. Day → days. Pakati pemashoko mazhinji ndizvozvo chete.",
    culturalNote: "ChiShona inopinduka pakati peshoko (mu- → va-, ru- → ma-, etc.). MuChiNgezi, basa ririri nyore zvikuru — wedzera '-s' kuguma kweshoko. Kunyangwe ChiShona iri grammatically richer panyaya yeplurals, ChiNgezi inopa simba rekuita zvinhu nyore.",
  },

  chunks: [
    {
      id: 'cats',
      target: 'Cat → Cats',
      native: 'Katsi → Katsi (-zhinji)',
      literal: 'add -s for plural',
      emoji: '🐱',
      phonetic: 'kat → kats',
      audioRef: null,
    },
    {
      id: 'days',
      target: 'Day → Days',
      native: 'Zuva → Mazuva',
      literal: 'add -s',
      emoji: '📅',
      phonetic: 'day → days',
      audioRef: null,
    },
    {
      id: 'friends',
      target: 'Friend → Friends',
      native: 'Shamwari → Shamwari (-zhinji)',
      literal: 'add -s',
      emoji: '👥',
      phonetic: 'frend → frends',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Plurals: add -s (or -es)",
    explanation: "Mashoko mazhinji muChiNgezi anongowedzera '-s' kuguma kuita plural: book → books, cat → cats. Kana shoko richipera ne -s, -x, -ch, -sh, wedzera '-es': bus → buses, box → boxes. Kana shoko richipera ne -y nepashure pemubvumira, shandura -y kuita -ies: baby → babies.",
    examples: [
      { target: 'One book, two books',     native: 'Bhuku rimwe, mabhuku maviri' },
      { target: 'One bus, three buses',    native: 'Bhazi rimwe, mabhazi matatu' },
      { target: 'One baby, two babies',    native: 'Mwana mumwe, vana vaviri' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Ita plural',
      sentence: 'I have two _____ (cat).',
      options: ['cats', 'cates', 'cat'],
      correct: 'cats',
      context: 'Cat -> cats (wedzera -s chete).',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mabhuku matatu',
      correct: ['Three books', 'three books'],
    },
    {
      type: 'fill_blank',
      instruction: 'Ita plural — chenjera',
      sentence: 'There are five _____ (bus) in the parking lot.',
      options: ['buses', 'buss', 'busies'],
      correct: 'buses',
      context: 'Bus inopera ne -s, saka -es: buses.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "I bought four apples"',
      words: ['apples.', 'four', 'I', 'bought'],
      correct: ['I', 'bought', 'four', 'apples.'],
      translation: 'Ndakatenga mauro mana',
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndepipi plural inonyatsoshanda?',
      question: 'One baby, two _____',
      options: [
        { text: 'babies', correct: true },
        { text: 'babys', correct: false },
        { text: 'baby', correct: false },
      ],
      explanation: '-y nepashure pemubvumira (b) — shandura kuita -ies: babies.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mazuva mashanu',
      correct: ['Five days', 'five days'],
    },
  ],

  rwenDialogue: {
    intro: "Uri kumusika kuMbare. Watering kutenga michero kuti uende kumba. Unofanira kunyatsotaura zvauri kuda — uye nhamba dzazvo.",
    lines: [
      {
        speaker: 'npc',
        target: "Welcome! What would you like today?",
        native: 'Mauya! Mungade chii nhasi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two apples, three bananas, and four oranges, please.", native: 'Maapuro maviri, mabanana matatu, nemaranje mana, ndapota.', correct: true, feedback: "Wakwanisa — apples, bananas, oranges — ese ari plural ne -s." },
          { target: "Two apple, three banana, and four orange, please.", native: 'Maapuro maviri, mabanana matatu, nemaranje mana, ndapota.', correct: false, feedback: "MuChiNgezi unofanira kuwedzera -s pakushandisa nhamba dzepamusoro pe 1 — apples, bananas, oranges." },
          { target: "Two apples, three banana, and four oranges, please.", native: 'Maapuro maviri, mabanana matatu, nemaranje mana, ndapota.', correct: false, feedback: "Zvinotosvika asi 'banana' inoda kuita 'bananas' — wedzera -s pamashoko ese." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka chaizvo. Plurals muChiNgezi rinongoda kuwedzera kashoma -s. Wakwanisa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Ita plural.',
    prompts: [
      { prompt: 'Plural of "day"', correct: ['Days', 'days'] },
      { prompt: 'Plural of "friend"', correct: ['Friends', 'friends'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tarisa zvinhu zvauri kuona iye zvino. Sarudza 5 zvinhu uti muChiNgezi nemavera azvo: 'three chairs', 'two phones', 'four books'. Cherechedza '-s' iyo.",
    rwenSignoff: "ChiNgezi chinopa simba mu'-s' rimwe chete. Wakwanisa.",
  },

  phase8: {
    scenario: "Uri kuMbare musika kutenga michero — uri kutaura nehowanga, uchitaura nhamba dzezvinhu uchishandisa plurals.",
    rwenRole: "Mutengesi wemichero pamusika, ane tsika, anotaura ChiNgezi chete uye anokufungira kuti utaure plurals zvakanaka.",
    successCriteria: "Mudzidzi anoshandisa plurals zvitanhatu zvakasiyana ('apples', 'bananas', 'oranges', 'tomatoes', 'mangoes', 'lemons') achitaura kuti aripi.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
