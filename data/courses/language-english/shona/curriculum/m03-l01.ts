import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-i-am',
  module: 3,
  lesson: 1,
  title: 'I am... — Ndini...',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinodzidza kuzvitaridza muChiNgezi. Shoko guru nderekuti 'I am' — kana 'I'm' kana wapfupisa. Iri ndiyo nzira yekutaura zita rako, basa rako, nekwauri kubva.",
    culturalNote: "MuChiShona, 'Ndini mudzidzisi' inotaura zvose pamwe — verb 'is/am' inenge yakavanzika mukati. MuChiNgezi, unofanira kunyatsotaura 'I am' (kana 'I'm') kuti mutsara uite. Usakanganwa shoko 'am' — handisi shoko rinokwidzwa.",
  },

  chunks: [
    {
      id: 'i_am',
      target: 'I am',
      native: 'Ndini',
      literal: 'I am',
      emoji: '🙋',
      phonetic: 'ay-AM',
      audioRef: null,
    },
    {
      id: 'im_a_student',
      target: "I'm a student",
      native: 'Ndini mudzidzi',
      literal: 'I-am a student',
      emoji: '📚',
      phonetic: 'aym-uh-STOO-dnt',
      audioRef: null,
    },
    {
      id: 'im_from_zimbabwe',
      target: "I'm from Zimbabwe",
      native: 'Ndinobva kuZimbabwe',
      literal: 'I-am from Zimbabwe',
      emoji: '🇿🇼',
      phonetic: 'aym-from-zim-BAHB-way',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb "to be" — I am / I\'m',
    explanation: "MuChiNgezi shoko 'am' rinoshandiswa pakuzvitaridza chete. 'I am' inogona kupfupiswa kuti 'I'm'. Mhinduro dzese pamusoro pezita, basa, nyika, kana mamiriro — dzinotanga ne 'I am' kana 'I'm'.",
    examples: [
      { target: "I am Tendai",          native: 'Ndini Tendai' },
      { target: "I'm a student",         native: 'Ndini mudzidzi' },
      { target: "I'm from Zimbabwe",     native: 'Ndinobva kuZimbabwe' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I am',                 right: 'Ndini' },
        { left: "I'm a student",         right: 'Ndini mudzidzi' },
        { left: "I'm from Zimbabwe",     right: 'Ndinobva kuZimbabwe' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndini mudzidzi',
      correct: ["I'm a student", "I am a student", "i'm a student", "i am a student"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinobva kuZimbabwe',
      correct: ["I'm from Zimbabwe", "I am from Zimbabwe", "i'm from Zimbabwe", "i am from Zimbabwe"],
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa ne 'am' kana 'I'm'",
      sentence: "____ from Harare.",
      options: ["I'm", 'I am the', 'Am I'],
      correct: "I'm",
      context: 'Uri kuzvitaridza kumunhu mutsva.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wekuzvitaridza',
      words: ["I'm", 'a', 'student'],
      correct: ["I'm", 'a', 'student'],
      translation: 'Ndini mudzidzi',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Ndini Tendai. Mutsara upi wakanaka muChiNgezi?",
      options: [
        { text: "I am Tendai.",   correct: true },
        { text: "Me Tendai.",     correct: false },
        { text: "I Tendai.",      correct: false },
      ],
      explanation: "MuChiNgezi unotofanira kuisa shoko 'am' pakati pe 'I' nezita. 'I Tendai' hazvina kukwana.",
    },
  ],

  rwenDialogue: {
    intro: "Wasvika pawokushopu yeChiNgezi muHarare. Mufundisi anokukumbira kuti uzvitaridze pamberi pevamwe.",
    lines: [
      { speaker: 'npc', target: "Welcome! Please tell us about yourself.", native: 'Tigashire! Tipei zvishoma pamusoro pako.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'm Tendai. I'm a student from Zimbabwe.", native: 'Mhoro, ndini Tendai. Ndini mudzidzi anobva kuZimbabwe.', correct: true,  feedback: "Wakwanisa — wakapa zita, basa, nenyika muna mutsara mumwe." },
          { target: "Tendai. Student. Zimbabwe.",                    native: 'Tendai. Mudzidzi. Zimbabwe.',                          correct: false, feedback: "Wakapa ruzivo, asi pasina 'I am' — chinzwika kuoma. Wedzera 'I'm'." },
          { target: "I Tendai from Zimbabwe.",                       native: 'I Tendai kubva kuZimbabwe.',                           correct: false, feedback: "Wakanganwa shoko 'am' — muChiNgezi handikwanisi kuregera." },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you, Tendai.", native: 'Ndafara kukuziva, Tendai.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakaratidza zvinhu zvitatu — zita, basa, nenyika — uchishandisa 'I'm'. Itsika yakajairika muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: "Ndini mudzidzi (in English)",          correct: ["I'm a student", "I am a student", "i'm a student", "i am a student"] },
      { prompt: "Ndinobva kuZimbabwe (in English)",     correct: ["I'm from Zimbabwe", "I am from Zimbabwe", "i'm from Zimbabwe", "i am from Zimbabwe"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Taura mitsara mitatu yakatanga ne 'I'm ...' nhasi — kunyange uri wega: 'I'm Tendai.' / 'I'm a student.' / 'I'm from Zimbabwe.'",
    rwenSignoff: "Watanga zvakanaka. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at the start of an English-language workshop in Harare. The facilitator goes round the room and asks each person to introduce themselves in one or two sentences.",
    rwenRole: "Tariro, 35, the facilitator. Warm, encouraging. Asks one gentle follow-up after each person speaks.",
    successCriteria: "User produces at least two 'I'm ...' sentences (e.g., name + role/origin) and answers Tariro's follow-up without dropping the verb 'am'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
