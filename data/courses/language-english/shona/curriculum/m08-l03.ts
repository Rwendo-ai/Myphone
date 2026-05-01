import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-go-come',
  module: 8,
  lesson: 3,
  title: '"To go" & "to come" — I go / I come',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiNgezi 'go' ne 'come' zvinoreva kufamba — asi nzira hadzifanani. 'GO' = kuenda kunze kwepauri ('I go to work'). 'COME' = kuuya kwauri kana kwemutauri ('Come here'). MuShona 'kuenda' uye 'kuuya' zvakafanana — asi muChiNgezi unofanira kuziva kuti munhu ari pakati apo.",
    culturalNote: "MuShona, 'enda' uye 'huya' zvinotsanangura kufamba kubva pakaita kuenda. MuChiNgezi zvakafanana: 'go' kuenda kure newe, 'come' kuuya pedyo newe. Asi pane chinhu chinokosha — paunopa invitation, unotaura 'come' (Come to my house = Huya kumba kwangu) kwete 'go' nokuti unenge uchitaura kubva pa-perspective yako.",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'Ndinoenda kubasa.',
      literal: 'I go to work',
      emoji: '🚶',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'come_here',
      target: 'Come here.',
      native: 'Huya pano.',
      literal: 'Come here',
      emoji: '👋',
      phonetic: 'KUM-HEER',
      audioRef: null,
    },
    {
      id: 'were_coming',
      target: "We're coming.",
      native: 'Tiri kuuya.',
      literal: 'We are coming',
      emoji: '🏃',
      phonetic: 'WEER-KUM-ing',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Go vs Come — Movement verbs',
    explanation: "GO = kuenda kunyika isiri yauri (I go to work, I'm going home). COME = kuuya kwauri kana kwemutauri (Come here, She's coming to my party). Kana uchipa invitation — shandisa 'come', kwete 'go'. 'I'm coming' = uri kunge wonangidza kuti uri pedyo kuuya — chinhu chinokosha pakushandiswa kwafoni.",
    examples: [
      { target: 'I go to work.',     native: 'Ndinoenda kubasa.' },
      { target: 'Come here.',        native: 'Huya pano.' },
      { target: "We're coming.",     native: 'Tiri kuuya.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I go',     right: 'Ndinoenda' },
        { left: 'Come here', right: 'Huya pano' },
        { left: "We're coming", right: 'Tiri kuuya' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza 'go' kana 'come'",
      sentence: "_____ to my house tonight!",
      options: ['Go', 'Come', 'Make'],
      correct: 'Come',
      context: "Uri kupa invitation — saka kuuya kwauri. 'Come' inoshanda.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinoenda kubasa.',
      correct: ['I go to work.', 'I go to work', "I'm going to work.", 'i go to work.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Tiri kuuya.',
      correct: ["We're coming.", "We're coming", 'We are coming.', 'We are coming', "we're coming."],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "Huya pano"',
      words: ['here.', 'Come'],
      correct: ['Come', 'here.'],
      translation: 'Huya pano',
    },
    {
      type: 'multiple_choice',
      instruction: 'Foni inorira. Shamwari yako inobvunza apo uri. Iwe wave pedyo kusvika kumba kwavo. Iwe unoti?',
      question: '"_____ in five minutes!"',
      options: [
        { text: "I'm coming", correct: true },
        { text: "I'm going", correct: false },
        { text: "I have", correct: false },
      ],
      explanation: "Uri kuda kusvika kwaari — saka 'coming' (kuuya kwaari), kwete 'going'. Iyi mhiro inoshandiswa pafoni mazuva ose.",
    },
  ],

  rwenDialogue: {
    intro: "Uri kuita plan yekusangana neshamwari yako paLondon Bridge. Munobvumirana sei muchaonana.",
    lines: [
      { speaker: 'npc', target: "Hey, where shall we meet on Saturday?", native: 'Hesi, tichasangana kupi neMugovera?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'll go to London Bridge at 2pm. Can you come at the same time?", native: 'Ndichaenda kuLondon Bridge na2pm. Unganzwe kuuya panguva imwe chete here?', correct: true, feedback: "Wakwanisa — 'go' kunoenda kunze kwepauri, 'come' kuti shamwari iuye. Wakashandisa zvose nemazvo." },
          { target: "I'll come to London Bridge. Can you go there?", native: 'Ndichauya kuLondon Bridge. Unganzwe kuenda ikoko here?', correct: false, feedback: "Tarisa zvakare — iwe newe muri kunge mose muri kuenda ikoko, asi imwe yenyu hapo. Saka mose 'go' (kuenda) kana 'come' kana muri kuuya kuneumwe wenyu — asi hauguzve haina kunzi 'go ikoko' kwauri kuita iwe pacho." },
        ],
      },
      { speaker: 'npc', target: "Sounds good — I'll see you at 2!", native: 'Zvakanaka — tichaonana na2!' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Go' kuenda kunze kwepauri, 'come' kuuya kwauri. Kana uchipa invitation, garomo 'come'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I go to work (in English)', correct: ['I go to work', 'I go to work.', "I'm going to work", "I'm going to work.", 'i go to work.'] },
      { prompt: 'Come here (in English)', correct: ['Come here', 'Come here.', 'come here.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, shandisa 'go' uye 'come' kaviri kose. Semuenzaniso: 'I go to the shop', 'Come to my house', 'I'm going home', 'Come with me'. Cherechedza kuti munhu ari kupi panguva yauri kutaura.",
    rwenSignoff: "Mangwana — 'want' uye 'need'. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri kushandisa WhatsApp neshamwari yebasa muLondon. Muri kuronga musangano weLunch. Shandisa 'go' uye 'come' kuita arrangement yakajeka.",
    rwenRole: "Priya, 29, mubasa pa-marketing agency. Anoda kuonana newe pa-lunch — muri kushanda mu-areas dzakasiyana saka munoda kunyatsoronga nzvimbo.",
    successCriteria: "Mudzidzi anoshandisa 'go' (I'll go to ___) uye 'come' (can you come to ___) zvakajairwa, anopatsanura nzvimbo dzakanaka uye anosvika pa-decision yakajeka.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
