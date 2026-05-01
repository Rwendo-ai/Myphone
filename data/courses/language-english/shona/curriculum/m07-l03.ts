import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'At a restaurant — Murestaurant',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinopinda murestaurant — tafura yevaviri, menyu, bhiro. Aya mashoko anokubatsira kupinda zvakanaka kubvira pakubva kupinda kusvika pakubhadhara.",
    culturalNote: "Kumusha, kana wapinda nemumwe kunoteketwa, mukoti aigogovera chikafu — pasina menyu, pasina bhiro yakanyorwa. Kurestaurant yeChiNgezi (London, Cape Town, Joburg) zvakasiyana — unoshandisa menyu, unobhadhara pakupedza, uye 'tipping' (kuwedzera mari kumukoti) inenge ichitarisirwa zvichienderana nenyika. Pa-UK, 12.5% inowanzowedzerwa pa-bhiro chaiyo; pa-USA, 18-20% inotarisirwa.",
  },

  chunks: [
    {
      id: 'table_for_two',
      target: 'A table for two',
      native: 'Tafura yevaviri',
      literal: 'A table for two (people)',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO',
      audioRef: null,
    },
    {
      id: 'menu_please',
      target: 'The menu, please',
      native: 'Menyu, ndapota',
      literal: 'The menu, please',
      emoji: '📋',
      phonetic: 'thuh-MEN-yoo-PLEEZ',
      audioRef: null,
    },
    {
      id: 'the_bill',
      target: 'The bill, please',
      native: 'Bhiro, ndapota',
      literal: 'The bill, please',
      emoji: '🧾',
      phonetic: 'thuh-BILL-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Restaurant arrival → eating → leaving',
    explanation: "Restaurant ine mitsetse mitatu: PINDA — taura nhamba yevanhu ('A table for two'). DZIDZA — kumbira menyu, order ('The menu, please'). PEDZA — kumbira bhiro ('The bill, please' kana pa-USA 'The check, please'). Mashoko aya anoshanda kuLondon, kuCape Town, kuJohannesburg.",
    examples: [
      { target: 'A table for two, please.',  native: 'Tafura yevaviri, ndapota.' },
      { target: 'Could we have the menu?',   native: 'Tingapihwe menyu here?' },
      { target: 'Could we have the bill?',   native: 'Tingapihwe bhiro here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko erestaurant',
      pairs: [
        { left: 'A table for two', right: 'Tafura yevaviri' },
        { left: 'The menu',        right: 'Menyu' },
        { left: 'The bill',        right: 'Bhiro' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapinda murestaurant uine shamwari yako',
      prompt: 'Tafura yevaviri, ndapota.',
      correct: [
        'A table for two, please.',
        'Table for two, please.',
        'A table for two please.',
        'Table for two please.',
        'a table for two, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapedza kudya, unoda kubhadhara',
      prompt: 'Bhiro, ndapota.',
      correct: [
        'The bill, please.',
        'The bill please.',
        'The check, please.',
        'Could we have the bill?',
        'the bill, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — wakuda kuona zvirimo',
      sentence: 'Could we have the ____, please?',
      options: ['menu', 'bill', 'table'],
      correct: 'menu',
      context: "Menu = chiratidzo chechikafu chiri murestaurant.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara — wapinda nemumwe',
      words: ['for', 'A', 'two', 'table'],
      correct: ['A', 'table', 'for', 'two'],
      translation: 'Tafura yevaviri',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Wapedza kudya pa-restaurant muCape Town. Unoda kubhadhara. Unoti chii kuwaiter?",
      options: [
        { text: "Could we have the bill, please?", correct: true },
        { text: "Money now.",                       correct: false },
        { text: "We finish.",                       correct: false },
      ],
      explanation: "'Could we have the bill?' inopa hutsika nehurefu — yakanaka pakubhadhara muUK/SA. 'Money now' inotyora hutsika.",
    },
  ],

  rwenDialogue: {
    intro: "Wasvika kurestaurant muCape Town nemudiwa wako. Mukoti anotaura ChiNgezi anokuwana pamukova. Pinda zvakanaka.",
    lines: [
      { speaker: 'npc', target: "Hi! Welcome. Just the two of you?", native: 'Hesi! Mauya. Muri vaviri chete here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, a table for two, please.",  native: 'Hongu, tafura yevaviri, ndapota.', correct: true,  feedback: 'Wakwanisa — pindura yakajeka, ine hutsika.' },
          { target: "Two people.",                      native: 'Vanhu vaviri.',                       correct: false, feedback: "Inoshanda asi pfupi — wedzera 'a table for two' kuti zvinzwike sechikumbiro." },
          { target: "Yes table.",                        native: 'Hongu tafura.',                       correct: false, feedback: "Hapana 'for two' — wakaringa kunge wakatadza ChiNgezi." },
        ],
      },
      { speaker: 'npc', target: "Right this way. Here's the menu.", native: 'Tevera nzira iyi. Heyi menyu.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapinda zvakanaka — pakubuda, taura 'The bill, please' wopedzisa nehutsika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'A table for two (in English)', correct: ['A table for two', 'A table for two.', 'Table for two', 'Table for two.', 'a table for two'] },
      { prompt: 'The bill, please (in English)', correct: ['The bill, please', 'The bill, please.', 'The bill please', 'The check, please', 'the bill, please.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, kunyange uri kumba kana paofficer, fungidzira urimurestaurant. Taura mashoko matatu pamuromo: 'A table for two', 'The menu, please', 'The bill, please'.",
    rwenSignoff: "Tichaonana mangwana — tinodzidza kuorder.",
  },

  phase8: {
    scenario: "You arrive at a busy restaurant in Cape Town's V&A Waterfront with your partner. The hostess greets you in English. Get a table for two and ask for the menu.",
    rwenRole: "Lerato, 30, hostess at a mid-range restaurant. Brisk but warm. Speaks fast South African English.",
    successCriteria: "User asks for 'a table for two' and 'the menu, please'. Doesn't bark single-word demands. Closes with thanks.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
