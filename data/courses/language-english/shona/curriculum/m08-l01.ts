import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-be-have',
  module: 8,
  lesson: 1,
  title: '"To be" & "to have" — I am / I have',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiNgezi 'be' ne 'have' ndizvo zvakavakira mutauro wose. 'I am happy', 'I have a friend' — pasina vaviri ava, hapana chinozonzwika. MuShona, 'ndinofara' rinopfupika nokuti 'ndi-' rinotomira pa-'I'. MuChiNgezi unofanira kuisa 'I' uye 'am' zvose.",
    culturalNote: "MuShona, prefix yekuti 'ndi-' inomira pa-'I am' yose. Saka 'ndinofara' = 'I am happy' — shoko rimwe chete. MuChiNgezi tinofanira kuisa zvinhu zviviri zvakapatsanurwa: subject ('I') + verb ('am'). Hazvirevi kuti ChiNgezi yakaomera — zvinongoreva kuti pakutanga, unofanira kunyatsorangarira kuisa 'I' pamberi pe-'am' uye 'have'.",
  },

  chunks: [
    {
      id: 'i_am_happy',
      target: 'I am happy.',
      native: 'Ndinofara.',
      literal: 'I am happy',
      emoji: '😊',
      phonetic: 'ay-AM-HAP-ee',
      audioRef: null,
    },
    {
      id: 'you_have_a_friend',
      target: 'You have a friend.',
      native: 'Une shamwari.',
      literal: 'You have a friend',
      emoji: '🤝',
      phonetic: 'yoo-HAV-uh-FREND',
      audioRef: null,
    },
    {
      id: 'they_are_tired',
      target: 'They are tired.',
      native: 'Vakaneta.',
      literal: 'They are tired',
      emoji: '😩',
      phonetic: 'thay-AHR-TY-erd',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"To be" and "to have" — the two pillars',
    explanation: "MuChiNgezi 'be' inochinja zvichienderana nemunhu: I am, You are, He/She is, We are, They are. 'Have' inochinja zvishoma: I/You/We/They have, He/She HAS. Cherechedza kuti 'I am' kana 'I have' hazvigoni kuwanikwa pasina 'I' — kusiyana neShona apo prefix 'ndi-' inotokwana yega.",
    examples: [
      { target: 'I am happy.',         native: 'Ndinofara.' },
      { target: 'You have a friend.',  native: 'Une shamwari.' },
      { target: 'They are tired.',     native: 'Vakaneta.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I am happy',       right: 'Ndinofara' },
        { left: 'You have a friend', right: 'Une shamwari' },
        { left: 'They are tired',   right: 'Vakaneta' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza shoko rakakodzera",
      sentence: 'I _____ happy today.',
      options: ['am', 'is', 'are'],
      correct: 'am',
      context: "Pa-'I' unoshandisa 'am'. He/She inotora 'is'; You/We/They inotora 'are'.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Une shamwari.',
      correct: ['You have a friend.', 'You have a friend', 'you have a friend.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinofara.',
      correct: ['I am happy.', 'I am happy', "I'm happy.", "I'm happy", 'i am happy.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "Vakaneta"',
      words: ['tired.', 'are', 'They'],
      correct: ['They', 'are', 'tired.'],
      translation: 'Vakaneta',
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndeipi inonyatsoshanda?',
      question: 'She _____ a sister in London.',
      options: [
        { text: 'has', correct: true },
        { text: 'have', correct: false },
        { text: 'are', correct: false },
      ],
      explanation: "Pa-'He' kana 'She' kana 'It', 'have' inochinja kuita 'has'. 'I/You/We/They have' asi 'He/She/It HAS'.",
    },
  ],

  rwenDialogue: {
    intro: "Wasangana neumwe pa-coffee shop muLondon. Anokumbira kuti uzvitsanangure zvishoma — shandisa 'I am' uye 'I have'.",
    lines: [
      { speaker: 'npc', target: "Hi! So tell me a bit about yourself.", native: 'Hesi! Iwe ndiwe wani — taura zvishoma.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I am from Zimbabwe. I have a sister here, and I am happy to meet you.", native: 'Ndinobva kuZimbabwe. Ndine hanzvadzi pano, uye ndinofara kusangana newe.', correct: true, feedback: "Wakwanisa — washandisa 'I am' kaviri uye 'I have' kamwe, zvose nemazvo." },
          { target: "From Zimbabwe. Sister here. Happy.", native: 'Kubva kuZimbabwe. Hanzvadzi pano. Ndinofara.', correct: false, feedback: "MuShona prefix yekuti 'ndi-' inotokwana, asi muChiNgezi unoda 'I' + 'am'/'have' pamberi pemashoko aya." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'I am' ne 'I have' — vaviri ava ndizvo zvinovaka zvirevo zvose zvinotevera. Usakanganwe 'I' pamberi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I am happy (in English)', correct: ['I am happy', 'I am happy.', "I'm happy", "I'm happy.", 'i am happy.'] },
      { prompt: 'You have a friend (in English)', correct: ['You have a friend', 'You have a friend.', 'you have a friend.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, shandisa 'I am' uye 'I have' kashanu (5 times) muhurukuro yako kana mufungo. Semuenzaniso: 'I am hungry', 'I have time', 'I am tired', 'I have a phone', 'I am here'. Cherechedza kuti 'I' inogarapo.",
    rwenSignoff: "Wakatanga Module 8 — verb backbone yeChiNgezi. Mangwana tinoenderera mberi.",
  },

  phase8: {
    scenario: "Wasangana neumwe pa-coffee shop muLondon. Hurukuro yekutanga — anoda kuziva nezvako. Shandisa 'I am' uye 'I have' kanenge kashanu nenzira yakajairika.",
    rwenRole: "Tom, 32, anonyora pa-laptop, anoshamwaridzana zvakanaka. Anokubvunza nezveupenyu hwako, basa rako, mhuri yako.",
    successCriteria: "Mudzidzi anoshandisa 'I am' uye 'I have' kanenge kashanu zvose pamwe — semuenzaniso 'I am from Zimbabwe', 'I have a sister', 'I am tired', 'I have a job', 'I am happy'. Hapana chirevo chinotanga pasina 'I'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
