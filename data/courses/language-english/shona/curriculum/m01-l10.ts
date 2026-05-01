import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Mhoro! Nhasi tinoongorora zvose zvatadzidza muModule 1. Kubvira pa 'Hello' kusvika 'Goodbye' — hurukuro yakakwana yekutanga muChiNgezi.",
    culturalNote: "MuChiShona, hurukuro yekutanga inoda nguva — mubvunzo nemubvunzo, mhinduro nemhinduro. MuChiNgezi vamwe vanofarira kufambisa hurukuro nekuda kwenguva, asi tsika dzekubvunza zita uye kwawakabva zvinoramba zvichikoshazve.",
  },

  chunks: [
    {
      id: 'review_hello_intro',
      target: 'Hello, my name is ...',
      native: 'Mhoro, zita rangu ndi...',
      literal: 'Hello, my name is...',
      emoji: '👋',
      phonetic: 'heh-LOH-may-NAYM-iz',
      audioRef: null,
    },
    {
      id: 'review_where_from',
      target: "I'm from Zimbabwe",
      native: 'Ndinobva kuZimbabwe',
      literal: 'I-come from Zimbabwe',
      emoji: '🌍',
      phonetic: 'aym-FROM-zim-BAB-way',
      audioRef: null,
    },
    {
      id: 'review_goodbye_full',
      target: 'Goodbye, take care',
      native: 'Sara zvakanaka, chenjerai',
      literal: 'Goodbye, take care',
      emoji: '🤝',
      phonetic: 'good-BAI-tayk-KAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full greeting flow',
    explanation: "Hurukuro yakakwana yekutanga ine zvikamu zvitatu: (1) Kwaziso — 'Hello' kana 'Good morning'. (2) Kuzvitaridza — 'My name is ...' uye 'I'm from ...'. (3) Kuparadzana — 'Goodbye' uye 'Take care'. Kana wave kuita zvose izvi pasina kutarisa kumashure, watanga rwendo rwekutaura ChiNgezi.",
    examples: [
      { target: "Hello, my name is Tendai. I'm from Harare.", native: 'Mhoro, zita rangu ndiTendai. Ndinobva kuHarare.' },
      { target: "How are you? I'm fine, thanks.",              native: 'Makadii? Ndiri zvakanaka, ndatenda.' },
      { target: 'Nice to meet you. Goodbye!',                  native: 'Ndafara kukuziva. Sara zvakanaka!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvikamu zvinopindirana muhurukuro',
      pairs: [
        { left: 'Hello, how are you?', right: "I'm fine, thanks" },
        { left: "What's your name?",   right: 'My name is Tendai' },
        { left: 'Goodbye!',            right: 'See you tomorrow' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — kuzvitaridza kunouyo wausingazivi',
      prompt: 'Mhoro, zita rangu ndiTendai. Ndinobva kuHarare.',
      correct: [
        "Hello, my name is Tendai. I'm from Harare.",
        "hello, my name is Tendai. I'm from Harare.",
        "Hello, my name is Tendai. I'm from Harare",
        "Hello my name is Tendai. I'm from Harare.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pindura mubvunzo "How are you?"',
      prompt: 'Ndiri zvakanaka, ndatenda',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine, thank you", "i'm fine thanks"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga hurukuro yekuparadzana yakakwana',
      words: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      correct: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      translation: 'Sara zvakanaka, tichaonana mangwana, chenjerai',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa hurukuro yekutanga',
      sentence: "Hello, my ____ is Chipo.",
      options: ['name', 'home', 'day'],
      correct: 'name',
      context: 'Uri kupindura mubvunzo "What\'s your name?".',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Sara zvakanaka, chenjerai',
      correct: ['Goodbye, take care', 'goodbye, take care', 'Goodbye take care', 'Goodbye, take care.'],
    },
  ],

  rwenDialogue: {
    intro: 'Wasangana nemumwe waunenge usingazivi pa Africa Unity Square muHarare. Watanga hurukuro yakakwana muChiNgezi.',
    lines: [
      { speaker: 'npc', target: "Hello! How are you?", native: 'Mhoro! Makadii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm fine, thanks. My name is Tendai. What's your name?", native: 'Ndiri zvakanaka, ndatenda. Zita rangu ndiTendai. Zita rako ndiani?', correct: true,  feedback: "Wakwanisa — wapindura, wakapa zita rako, uye wakabvunza chinhu chimwe chete kuratidza kufara." },
          { target: 'Hi.',                                                       native: 'Hesi.',                                                                  correct: false, feedback: "Yepfupi zvakanyanya — pahurukuro yekutanga, wedzera zita uye mubvunzo." },
          { target: "Where are you from?",                                       native: 'Wabva kupi?',                                                            correct: false, feedback: "Wakange usina kupindura mubvunzo wavakubvunza — tanga wapindura, wozobvunzazve." },
        ],
      },
      { speaker: 'npc', target: "I'm Sarah, from London. Nice to meet you, Tendai. Goodbye!", native: 'Ndini Sarah, ndinobva kuLondon. Ndafara kukuziva, Tendai. Sara zvakanaka!' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapedzisa Module 1 — wave neushingi hwekutanga hurukuro muChiNgezi. Famba zvakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora hurukuro yakakwana.',
    prompts: [
      { prompt: "Hello, my name is Tendai. I'm from Harare. (in English)", correct: [
        "Hello, my name is Tendai. I'm from Harare.",
        "Hello, my name is Tendai. I'm from Harare",
        "Hello my name is Tendai. I'm from Harare.",
      ] },
      { prompt: "Nice to meet you. Goodbye! (in English)", correct: [
        'Nice to meet you. Goodbye!',
        'Nice to meet you. Goodbye',
        'Nice to meet you. Goodbye.',
        'nice to meet you. goodbye!',
      ] },
    ],
  },

  mission: {
    title: 'Basa raNhasi — Hurukuro Yakakwana',
    task: "Nhasi, edza kuita hurukuro yakakwana muChiNgezi nemumwe munhu — kubva 'Hello' kusvika 'Goodbye'. Pinda nezita, kwawakabva, uye paradzana ne 'Take care'.",
    rwenSignoff: "Wapedza Module 1 — wakatanga rwendo. Tichaonana muModule 2.",
  },

  phase8: {
    scenario: "You're walking through downtown Harare and a friendly tourist who's clearly lost stops you. They speak only English. Have a complete first-meeting conversation: greet, exchange names, ask where they're from, and part warmly.",
    rwenRole: "Emma, 28, an Australian tourist on her first day in Zimbabwe. Curious, polite, a bit jet-lagged. Speaks clear, friendly English.",
    successCriteria: "User runs the full flow: opens with a greeting (Hello / Good afternoon), exchanges names ('My name is...' / 'What's your name?'), asks 'Where are you from?', and closes with 'Goodbye' or 'Take care'. All chunks from Module 1 used naturally.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
