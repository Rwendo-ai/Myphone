import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-the',
  module: 4,
  lesson: 2,
  title: 'The — When to use it',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'The' inoreva chinhu chinozivikanwa — chausiri kuvhura nyaya, asi chausiri kutaura nezvacho zvakajeka. ChiShona hachina shoko rinoenzanira chaizvo 'the'.",
    culturalNote: "ChiShona inotsanangura kuzivikanwa kweshoko nemamiriro echirevo — kana wati 'bhuku' uye munhu anoziva bhuku ripi raunoreva, hapana chaunowedzera. Asi muChiNgezi, kana muri vaviri muchitaura nezvebhuku rakatarwa, unofanira kuti 'THE book'. 'A book' = chero bhuku. 'The book' = bhuku iro tinoziva tose.",
  },

  chunks: [
    {
      id: 'the_book',
      target: 'The book',
      native: 'Bhuku iro (ratinoziva)',
      literal: 'specific/known book',
      emoji: '📘',
      phonetic: 'thuh-BUK',
      audioRef: null,
    },
    {
      id: 'the_zimbabwe_team',
      target: 'The Zimbabwe team',
      native: 'Timu yeZimbabwe',
      literal: 'the team of Zimbabwe (only one)',
      emoji: '⚽',
      phonetic: 'thuh-zim-BAH-bweh-teem',
      audioRef: null,
    },
    {
      id: 'the_morning',
      target: 'The morning',
      native: 'Mangwanani (chinhu chimwe chete chega)',
      literal: 'the (one and only) morning',
      emoji: '🌅',
      phonetic: 'thuh-MOR-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Definite article: 'the'",
    explanation: "Shandisa 'the' kana: (1) muri vaviri munoziva chinhu chacho — 'pass me the salt'; (2) kune chinhu chimwe chete chega — 'the sun', 'the President'; (3) wakatomboita reference yacho — 'I bought a book. The book is good'.",
    examples: [
      { target: 'I have a car. The car is red.', native: 'Ndine motokari. Motokari yacho itsvuku.' },
      { target: 'The sun is hot.',                 native: 'Zuva rinopisa. (kune zuva rimwe chete)' },
      { target: 'Pass me the keys, please.',       native: 'Ndipei makiyi, ndapota. (atinoziva tose)' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Sarudza 'a', 'an', kana 'the'",
      sentence: 'I bought _____ book yesterday. _____ book is interesting.',
      options: ['a / The', 'The / A', 'An / A'],
      correct: 'a / The',
      context: 'Kekutanga: hapana anoiziva — "a book". Kechipiri: tatova matova naro — "the book".',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinoda kuverenga bhuku iro',
      correct: ['I want to read the book', 'I want to read the book.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "The sun is bright"',
      words: ['bright.', 'sun', 'The', 'is'],
      correct: ['The', 'sun', 'is', 'bright.'],
      translation: 'Zuva rinopenya',
    },
    {
      type: 'fill_blank',
      instruction: "Wedzera 'the' kana hapana — sarudza",
      sentence: '_____ President of Zimbabwe gave a speech.',
      options: ['The', 'A', 'An'],
      correct: 'The',
      context: 'Kune muMutungamiriri mumwe chete weZimbabwe — saka "the".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndepipi panoshandisa "the" zvakanaka?',
      question: 'Sarudza chirevo chakanaka',
      options: [
        { text: 'Pass me the salt, please.', correct: true },
        { text: 'Pass me a salt, please.', correct: false },
        { text: 'Pass me salt the, please.', correct: false },
      ],
      explanation: 'Patafura, mese munoziva munyu uri pano — saka "the salt".',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mwedzi unopenya manheru',
      correct: ['The moon shines at night', 'The moon shines at night.'],
    },
  ],

  rwenDialogue: {
    intro: "Uri pabasa muoffice. Wakumbirwa report. Cherechedza musiyano pakati pa- 'a report' (chero ipi) ne 'the report' (iyo yamaitaura nezvayo nezuro).",
    lines: [
      {
        speaker: 'npc',
        target: "Could you bring me the report we discussed yesterday?",
        native: 'Mungandiunzira here report yatakurukura nayo nezuro?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'll bring the report now.", native: 'Hongu, ndichauya nayo iye zvino.', correct: true, feedback: "Zvakanaka — 'the report' nokuti munoziva yacho mose." },
          { target: "Yes, I'll bring a report now.", native: 'Hongu, ndichauya nereport iye zvino.', correct: false, feedback: "'A report' inoreva chero report — asi mukumbira yatakatomboitisira mate. Shandisa 'the report'." },
          { target: "Yes, I'll bring report now.", native: 'Hongu, ndichauya nereport.', correct: false, feedback: "MuChiNgezi haungaregi 'a/the' pamberi pe 'report'. Shandisa 'the report'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka chaizvo. 'The' inoratidza kuti munhu munoziva chamuri kutaura nezvacho — chinhu chinokosha pakubvumirana muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'The book (in English)', correct: ['The book', 'the book'] },
      { prompt: 'The morning (in English)', correct: ['The morning', 'the morning'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Inzwa kana kuverenga English manheru ano. Cherechedza ka'the' kashanu. Sezvinoshandiswa kanesei — handizvi 'a/an' chete!",
    rwenSignoff: "'The' inotaura nezvechinhu chamunoziva mose. Cherechedza nhasi.",
  },

  phase8: {
    scenario: "Pabasa muoffice. Boss yako iri kukukumbira documents — uye unofanira kunzwisisa kuti yatauridza yei chinyatso (the) kana chero yacho zvayo (a).",
    rwenRole: "Boss wako mukuru, ane tsika, anotaura ChiNgezi chete. Anokukumbira documents dziri specific.",
    successCriteria: "Mudzidzi anoshandisa 'the' kana chinhu chinozivikanwa, uye 'a/an' kana chinhu chitsva. Anokwanisa kupindura zvinosanganisira zvirevo zvitatu zvine 'the'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
