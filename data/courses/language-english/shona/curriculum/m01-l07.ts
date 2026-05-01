import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: 'Where are you from? — Wabva kupi?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! MuChiNgezi pakubvunza nzvimbo, unoshandisa 'from' (kubva ku-) kana 'in' (mu-/ku-). 'Where are you from?' inobvunza paunobva. 'I live in...' inoreva paunogara izvozvi.",
    culturalNote: "MuChiShona pakati pa 'kubva ku-' (paunobva) ne 'kugara mu-' (paunogara) zvakajairika kuzvinzwisisa. MuChiNgezi 'from' inotaridza pakaberekerwa kana kakurira, 'in' inotaridza pavanogara izvozvi — saka unogona kuva 'from Harare' asi 'living in London'.",
  },

  chunks: [
    {
      id: 'where_are_you_from',
      target: 'Where are you from?',
      native: 'Wabva kupi?',
      literal: 'You-came from where?',
      emoji: '🌍',
      phonetic: 'wair-ar-yoo-FROM',
      audioRef: null,
    },
    {
      id: 'im_from',
      target: "I'm from ...",
      native: 'Ndinobva ku...',
      literal: 'I-come from ...',
      emoji: '🏠',
      phonetic: 'aym-FROM',
      audioRef: null,
    },
    {
      id: 'i_live_in',
      target: 'I live in ...',
      native: 'Ndinogara ku...',
      literal: 'I-live in ...',
      emoji: '🏘️',
      phonetic: 'aye-LIV-in',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Prepositions from/in',
    explanation: "Mashoko maviri makuru: 'from' (kubva) ne 'in' (mu-). 'From' inoshandiswa pakaberekerwa kana paunobva. 'In' inoshandiswa paunogara izvozvi. Mhinduro yakakwana: 'I'm from Harare, but I live in London' = 'Ndinobva kuHarare, asi ndinogara kuLondon'.",
    examples: [
      { target: "I'm from Zimbabwe",   native: 'Ndinobva kuZimbabwe' },
      { target: 'I live in Harare',    native: 'Ndinogara muHarare' },
      { target: "I'm from a small town", native: 'Ndinobva kudhorobha diki' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko',
      pairs: [
        { left: 'Where are you from?', right: 'Wabva kupi?' },
        { left: "I'm from ...",         right: 'Ndinobva ku...' },
        { left: 'I live in ...',        right: 'Ndinogara ku...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Wabva kupi?',
      correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinobva kuZimbabwe',
      correct: ["I'm from Zimbabwe", "i'm from Zimbabwe", 'I am from Zimbabwe', 'i am from Zimbabwe'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza preposition yakanaka',
      sentence: "I'm ____ Harare and I live ____ London.",
      options: ['from / in', 'in / from', 'from / from'],
      correct: 'from / in',
      context: "'from' = paunobva. 'in' = paunogara izvozvi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wekutsanangura paunogara',
      words: ['I', 'live', 'in', 'Harare'],
      correct: ['I', 'live', 'in', 'Harare'],
      translation: 'Ndinogara muHarare',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo',
      words: ['Where', 'are', 'you', 'from'],
      correct: ['Where', 'are', 'you', 'from'],
      translation: 'Wabva kupi?',
    },
  ],

  rwenDialogue: {
    intro: 'Uri muchidende — chitima chinobva Harare chichienda London. Mumwe akagara padivi pako anotanga hurukuro.',
    lines: [
      { speaker: 'npc', target: "Hi! Where are you from?", native: 'Hesi! Wabva kupi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm from Zimbabwe. I live in Harare.", native: 'Ndinobva kuZimbabwe. Ndinogara muHarare.', correct: true,  feedback: "Wakwanisa — 'from' pakaberekerwa, 'in' paunogara izvozvi." },
          { target: "I'm in Zimbabwe.",                       native: 'Ndiri muZimbabwe.',                         correct: false, feedback: "Yakavharirwa — kana wabvunzwa 'from', shandisa 'I'm from' kwete 'I'm in'." },
          { target: 'My name is Tendai.',                     native: 'Zita rangu ndiTendai.',                     correct: false, feedback: "Wapindurira mubvunzo wakasiyana — vabvunza pawakabva, kwete zita." },
        ],
      },
      { speaker: 'npc', target: "Nice. I'm from London myself.", native: 'Zvakanaka. Ini ndinobva kuLondon.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watanga hurukuro yakanaka — wakatsanangura kwawakabva uye kwaunogara.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Where are you from? (in English)', correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'] },
      { prompt: "I'm from Zimbabwe (in English)",    correct: ["I'm from Zimbabwe", "i'm from Zimbabwe", 'I am from Zimbabwe', 'i am from Zimbabwe'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tsanangura kumumwe munhu kwawakabva uye kwaunogara — muChiNgezi: 'I'm from ... and I live in ...'.",
    rwenSignoff: "Famba zvakanaka. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're on a flight from Harare to London. The English-speaking passenger next to you starts small talk an hour into the flight.",
    rwenRole: "Mrs Patel, 60, a London-based grandmother flying back from visiting friends in Bulawayo. Friendly, curious, asks gentle questions in clear English.",
    successCriteria: "User answers 'Where are you from?' with 'I'm from ...', uses 'I live in ...' to specify current city if it differs, and asks the seatmate the same questions back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
