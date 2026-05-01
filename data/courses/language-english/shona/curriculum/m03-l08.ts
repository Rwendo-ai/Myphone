import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Describing yourself — Kuzvitaridza',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Iwe wakaita sei? Une ushamwari? Wakanyarara? MuChiNgezi tinoshandisa 'I'm friendly', 'I'm shy sometimes', 'I love learning'. Mashoko aya — adjectives — anokubatsira kuzvitaridza pasina kunyepa.",
    culturalNote: "MuChiShona, kuzvirumbidza pamberi pevamwe kunoonekwa kunge kuzvikudza. MuChiNgezi — kunyanya pa job interview kana professional setting — kuti 'I'm friendly' / 'I'm hardworking' inotarisirwa, kwete kunzwirwa zvakaipa. Itsika dzakasiyana — ramba uchitaura zvakanaka pamusoro pako.",
  },

  chunks: [
    {
      id: 'im_friendly',
      target: "I'm friendly",
      native: 'Ndine ushamwari',
      literal: 'I-am friendly',
      emoji: '😊',
      phonetic: 'aym-FREND-lee',
      audioRef: null,
    },
    {
      id: 'im_shy_sometimes',
      target: "I'm shy sometimes",
      native: 'Ndinonyara dzimwe nguva',
      literal: 'I-am shy sometimes',
      emoji: '🙈',
      phonetic: 'aym-SHAI-sum-taymz',
      audioRef: null,
    },
    {
      id: 'i_love_learning',
      target: 'I love learning',
      native: 'Ndinoda kudzidza',
      literal: 'I love learning',
      emoji: '📖',
      phonetic: 'ay-LUV-LUR-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjectives for self',
    explanation: "Pamashure pe 'I'm', isa adjective: friendly (ane ushamwari), shy (anonyara), curious (ane ngwariro), hardworking (anoshanda), patient (ane mwoyo murefu). Kuwedzera 'sometimes' kana 'always' kunopa zvinyoro: 'I'm shy sometimes' inonzwika nyore kupfuura 'I'm shy' kunge zvakatemwa.",
    examples: [
      { target: "I'm friendly",                native: 'Ndine ushamwari' },
      { target: "I'm patient",                  native: 'Ndine mwoyo murefu' },
      { target: "I'm curious by nature",         native: 'Ndine ngwariro semasikirwo' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana adjectives nezvazvinoreva',
      pairs: [
        { left: 'Friendly',     right: 'Ane ushamwari' },
        { left: 'Shy',          right: 'Anonyara' },
        { left: 'Curious',      right: 'Ane ngwariro' },
        { left: 'Hardworking',   right: 'Anoshanda' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndine ushamwari',
      correct: ["I'm friendly", "I am friendly", "i'm friendly", "i am friendly"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinoda kudzidza',
      correct: ['I love learning', 'i love learning', 'I love to learn', 'i love to learn'],
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza shoko rakanaka",
      sentence: "I'm ____ sometimes.",
      options: ['shy', 'shies', 'shyly'],
      correct: 'shy',
      context: 'Pamashure pe "I\'m" tinoshandisa adjective, kwete adverb.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wezvauri',
      words: ["I'm", 'friendly', 'and', 'patient'],
      correct: ["I'm", 'friendly', 'and', 'patient'],
      translation: 'Ndine ushamwari uye mwoyo murefu',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wekudzidza',
      words: ['I', 'love', 'learning'],
      correct: ['I', 'love', 'learning'],
      translation: 'Ndinoda kudzidza',
    },
  ],

  rwenDialogue: {
    intro: "Uri pa job interview muHarare. Boss anoda kuziva munhu wauri.",
    lines: [
      { speaker: 'npc', target: "Describe yourself in three words.", native: 'Tizvitaridze nemashoko matatu.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm friendly, hardworking, and curious.", native: 'Ndine ushamwari, ndinoshanda, uye ndine ngwariro.', correct: true,  feedback: "Wakwanisa — wakapa adjectives matatu pasina kunyara." },
          { target: "Friendly. Hardworking. Curious.",          native: 'Ushamwari. Anoshanda. Ngwariro.',                  correct: false, feedback: "Mashoko akanaka asi pasina 'I'm' — kuita mutsara wakakwana kuratidza tsika dzeChiNgezi." },
          { target: "I am very good.",                          native: 'Ndakanaka chaizvo.',                                correct: false, feedback: "Yakaderera zvikuru — pa interview vanoda adjectives chaidzo." },
        ],
      },
      { speaker: 'npc', target: "Lovely. Tell me about a time you were curious.", native: 'Zvinofadza. Nditaurire pawakaratidza ngwariro.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! MuChiNgezi unobvumirwa kutaura zvakanaka pamusoro pako — handisi kuzvikudza, itsika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: 'Ndine ushamwari (in English)',                correct: ["I'm friendly", "I am friendly", "i'm friendly", "i am friendly"] },
      { prompt: 'Ndinonyara dzimwe nguva (in English)',        correct: ["I'm shy sometimes", "I am shy sometimes", "i'm shy sometimes", "i am shy sometimes"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Sarudza adjectives matatu anokutsanangura — uye nyora muChiNgezi: 'I'm ___, ___, and ___'. Edza kuita iri mhinduro ye 'Describe yourself' pa interview.",
    rwenSignoff: "Wakwanisa. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're in the final five minutes of an English-language job interview. The interviewer says, 'Last question — describe yourself in three words.'",
    rwenRole: "Mr. Mhlanga, 45, the hiring manager. Polite but probing. After your three words, asks for one example of one of them.",
    successCriteria: "User produces three adjectives in an 'I'm X, Y, and Z' sentence (full sentence, not bare list), then backs one up with a one-sentence example when probed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
