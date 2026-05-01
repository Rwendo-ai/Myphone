import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Languages I speak — Mitauro yandinotaura',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "MuZimbabwe vakawanda vanotaura mitauro miviri kana mitatu — Shona, Ndebele, English. Nhasi tinodzidza kuratidza unyanzvi hwako muChiNgezi: 'I speak Shona', 'A little English', 'And some others'.",
    culturalNote: "MuChiNgezi mazita emitauro anonyorwa neletter huru — English, Shona, Ndebele, French. Hazvifananidze ne ChiShona pa kunyora. Uyezve, paunopa rondedzero, kuti 'a little English' kunoreva 'ndinoshanda — asi ndiri kudzidza' — handisi kushora ChiNgezi chako, asi kuratidza tsika.",
  },

  chunks: [
    {
      id: 'i_speak_shona',
      target: 'I speak Shona',
      native: 'Ndinotaura ChiShona',
      literal: 'I speak Shona',
      emoji: '🗣️',
      phonetic: 'ay-SPEEK-SHO-na',
      audioRef: null,
    },
    {
      id: 'a_little_english',
      target: 'A little English',
      native: 'ChiNgezi zvishoma',
      literal: 'A little English',
      emoji: '🤏',
      phonetic: 'uh-LIT-ul-ING-glish',
      audioRef: null,
    },
    {
      id: 'and_some_others',
      target: 'And some others',
      native: 'Nemimwe',
      literal: 'And some others',
      emoji: '➕',
      phonetic: 'and-sum-UH-thurz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Listing skills — "I speak ..."',
    explanation: "Kunyora rondedzero yemitauro: tanga ne 'I speak [mutauro]'. Kuwedzera mumwe, shandisa 'and a little [mutauro]' kana wausina kunyatsogona, kana 'and some [mutauro]' kana zvishoma. Kupedzisira: 'and some others' kana pane mimwe yausina kuda kunyatsotaura.",
    examples: [
      { target: 'I speak Shona and English',          native: 'Ndinotaura ChiShona neChiNgezi' },
      { target: 'I speak Shona and a little English',  native: 'Ndinotaura ChiShona neChiNgezi zvishoma' },
      { target: 'I speak Shona, English, and some Ndebele', native: 'Ndinotaura ChiShona, ChiNgezi, neChiNdebele zvishoma' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mitauro nezvayinoreva',
      pairs: [
        { left: 'English',     right: 'ChiNgezi' },
        { left: 'Shona',       right: 'ChiShona' },
        { left: 'Ndebele',     right: 'ChiNdebele' },
        { left: 'French',      right: 'ChiFrench' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinotaura ChiShona neChiNgezi zvishoma',
      correct: ['I speak Shona and a little English', 'i speak Shona and a little English', 'I speak Shona and a little english'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Nemimwe',
      correct: ['And some others', 'and some others', 'And some others.', 'and some others.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa kupa rondedzero',
      sentence: "I speak Shona and ____ English.",
      options: ['a little', 'a small', 'a few'],
      correct: 'a little',
      context: 'Uri kuratidza kuti unotaura ChiNgezi zvishoma.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga rondedzero yemitauro',
      words: ['I', 'speak', 'Shona', 'and', 'English'],
      correct: ['I', 'speak', 'Shona', 'and', 'English'],
      translation: 'Ndinotaura ChiShona neChiNgezi',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro inopfupisa',
      words: ['A', 'little', 'English'],
      correct: ['A', 'little', 'English'],
      translation: 'ChiNgezi zvishoma',
    },
  ],

  rwenDialogue: {
    intro: "Wapinda mu multilingual conference muHarare. Mumwe wevashanyi anokubvunza nezvemitauro yauchitaura.",
    lines: [
      { speaker: 'npc', target: "What languages do you speak?", native: 'Unotaura mitauro mipi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I speak Shona, English, and a little Ndebele.", native: 'Ndinotaura ChiShona, ChiNgezi, neChiNdebele zvishoma.', correct: true,  feedback: "Wakwanisa — wakapa rondedzero yakajeka, uye watotaridza kuti une 'a little'." },
          { target: "Shona, English, Ndebele.",                       native: 'ChiShona, ChiNgezi, ChiNdebele.',                       correct: false, feedback: "Wakapa mitauro — asi pasina 'I speak'. Wedzera mutsara." },
          { target: "I speak shona and english.",                     native: 'Ndinotaura chishona nechingezi.',                       correct: false, feedback: "MuChiNgezi mazita emitauro anonyorwa neletter huru — Shona, English." },
        ],
      },
      { speaker: 'npc', target: "Wonderful! That's so useful here.", native: 'Zvinoshamisa! Zvinoshanda zvikuru pano.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakanyora mitauro nemavara makuru — Shona, English, Ndebele. Itsika yeChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: 'Ndinotaura ChiShona (in English)',          correct: ['I speak Shona', 'i speak Shona', 'I speak shona'] },
      { prompt: 'ChiNgezi zvishoma (in English)',            correct: ['A little English', 'a little English', 'A little english'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nyora rondedzero imwe yemitauro yauchitaura, muChiNgezi: 'I speak ___, ___, and a little ___'. Itura kuti unyore ne mavara makuru pamitauro.",
    rwenSignoff: "Wakwanisa. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're mingling at a multilingual professional conference. Someone notices your name badge and asks, in English, 'What languages do you speak?'.",
    rwenRole: "Adaeze, 38, a Nigerian researcher attending the conference. Genuinely curious about Zimbabwean languages and asks one follow-up.",
    successCriteria: "User lists at least two languages with correct capitalisation in speech, uses 'I speak ...' (not just bare list), and uses 'a little' or 'some' to qualify a weaker language honestly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
