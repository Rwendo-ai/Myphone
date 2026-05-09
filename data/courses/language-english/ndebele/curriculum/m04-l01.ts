import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-head-face-eyes',
  module: 4,
  lesson: 1,
  title: 'Head, face, eyes',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Lapha eUK, nxa ungaphathwa kuhle uzaya kudokotela. Yikho kufanele wazi ukuthi 'head' (ikhanda), 'face' (ubuso), lo 'eye' (ilihlo) ukuze uchaze kuhle ukuthi kuzwakala kanjani.",
    culturalNote: "EZimbabwe singafika kudokotela sithi 'liyangiqaqamba ikhanda' aluzwe okwamasonto. Lapha eNgilandi udokotela ulesikhathi esincinyane — angaba lemizuzu eyisikhombisa kuphela. Yikho kufanele uchaze masinyane: 'My head hurts', 'My eye is red', 'I have pain in my face'. Indaba ende kuphela ifaka u-doctor ku-stress, kuthi imithi yakho ufike ungayitholanga.",
  },

  chunks: [
    {
      id: 'head',
      target: 'Head',
      native: 'Ikhanda',
      literal: 'the head — top part of the body',
      emoji: '🗣️',
      phonetic: 'HED',
      audioRef: null,
    },
    {
      id: 'face',
      target: 'Face',
      native: 'Ubuso',
      literal: 'the front of the head',
      emoji: '😀',
      phonetic: 'FAYS',
      audioRef: null,
    },
    {
      id: 'eye',
      target: 'Eye',
      native: 'Ilihlo',
      literal: 'one eye — plural is "eyes"',
      emoji: '👁️',
      phonetic: 'AHY',
      audioRef: null,
    },
    {
      id: 'eyes',
      target: 'Eyes',
      native: 'Amehlo',
      literal: 'both eyes',
      emoji: '👀',
      phonetic: 'AHYZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: "My + body part",
    explanation: "EsiNgisini, nxa ukhuluma ngenxenye yomzimba wakho, ubeka 'my' phambi kwayo: 'my head', 'my face', 'my eyes'. Ungasitsho 'the head hurts' — kufanele uthi 'my head hurts'. Ku-medical setting le-rule iqakathekile — bafuna ukwazi ukuthi yiwena owezwa ubuhlungu, hatshi omunye umuntu.",
    examples: [
      { target: 'My head hurts',     native: 'Liyangiqaqamba ikhanda' },
      { target: 'My face is sore',   native: 'Ubuso bami buyangiphatha' },
      { target: 'My eyes are tired', native: 'Amehlo ami akhathele' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa ngokuqondileyo',
      pairs: [
        { left: 'Head',  right: 'Ikhanda' },
        { left: 'Face',  right: 'Ubuso' },
        { left: 'Eye',   right: 'Ilihlo' },
        { left: 'Eyes',  right: 'Amehlo' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa igama eliqondileyo',
      sentence: 'My _____ hurts. I need a tablet.',
      options: ['head', 'face', 'eye'],
      correct: 'head',
      context: '"Liyangiqaqamba ikhanda" = "My head hurts". Yileli igama elisetshenziswa kakhulu kudokotela.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Amehlo ami abomvu (red)',
      correct: ['My eyes are red', 'my eyes are red'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi eqondileyo?',
      question: 'Awufuni ukutshela udokotela ukuthi ubuso bakho buyaqaqamba — uthini?',
      options: [
        { text: 'My face hurts', correct: true },
        { text: 'The face is hurting', correct: false },
        { text: 'Face hurts me', correct: false },
      ],
      explanation: "EsiNgisini kufanele ubeke 'my' phambi kwenxenye yomzimba. 'The face' kuzwakala kungezwa muntu — udokotela uzadideka.",
    },
  ],

  rwenDialogue: {
    intro: "Usuvele eLondon. Awuzizwa kuhle — likhanda liyaqaqamba kusukela izolo. Uyaya kwa-NHS GP. Udokotela uyabuza ukuthi yini engaphi.",
    lines: [
      {
        speaker: 'npc',
        target: "Hello, please come in. What seems to be the problem today?",
        native: 'Sawubona, ngena ngaphakathi. Yini inkinga lamhla?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "My head hurts. It started yesterday.", native: 'Liyangiqaqamba ikhanda. Kuqalile izolo.', correct: true, feedback: "Kuhle. 'My head hurts' yindlela elula leqondileyo yokuchaza ku-doctor." },
          { target: "Head is paining.", native: 'Likhanda liyezwa ubuhlungu.', correct: false, feedback: "Akusebenzi esiNgisini. Faka 'my' — 'My head hurts' kumbe 'I have a headache'." },
          { target: "I am head sore.", native: '...', correct: false, feedback: "Lokhu kakhulumeki esiNgisini. Sebenzisa 'My head hurts' kumbe 'My head is sore'." },
        ],
      },
      {
        speaker: 'npc',
        target: "I see. Are your eyes hurting too?",
        native: 'Ngiyezwa. Lamehlo akho ayaqaqamba na?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, my eyes are tired and a bit red.", native: 'Yebo, amehlo ami akhathele futhi abomvu kancane.', correct: true, feedback: "Kahle kakhulu. Sebenzisa 'my eyes' (plural) ngoba ulamehlo amabili." },
          { target: "Yes, eye is red.", native: 'Yebo, ilihlo libomvu.', correct: false, feedback: "Faka 'my'. Lapho ukhuluma ngamehlo womabili: 'my eyes are red'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenzile kahle. Udokotela ukuzwile masinyane. 'My head', 'my eyes' — yiwo ama-key esiNgisini.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu — bhala ngekhanda.',
    prompts: [
      { prompt: 'Ikhanda (ngesiNgisi)',  correct: ['Head', 'head'] },
      { prompt: 'Amehlo (ngesiNgisi)',   correct: ['Eyes', 'eyes'] },
      { prompt: 'Ubuso (ngesiNgisi)',    correct: ['Face', 'face'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Yima phambi kwesibuko. Yithi ngesiNgisi: 'This is my head', 'this is my face', 'these are my eyes'. Phinda kabili ngelizwi eliphezulu.",
    rwenSignoff: "Lokhu kuluxhaso lwakho ku-NHS appointment yakho yokuqala. Sobonana kusasa — sizofunda izandla.",
  },

  phase8: {
    scenario: "GP appointment eLondon. User udlulwa ngo-headache lo eye irritation. Udokotela uzofuna ukwazi imibandela: ikuphi ubuhlungu, sekuthethe isikhathi esinganani, kanye lokuthi kunye lemibandela emidala.",
    rwenRole: "Dr Patel, NHS GP, busy but kind, asks short clear questions, expects short clear answers about which body part hurts.",
    successCriteria: "User uses 'my head', 'my eyes', 'my face' correctly with possessive 'my', forms at least three sentences like 'my head hurts' / 'my eyes are tired' without dropping the article.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
