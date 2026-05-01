import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-this-that',
  module: 4,
  lesson: 6,
  title: 'This & That — These & Those',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'This' nechiri pedyo. 'That' nechiri kure. Pamhuri yedzo: 'These' (zvinhu zvizhinji zviri pedyo) ne 'Those' (zvinhu zvizhinji zviri kure).",
    culturalNote: "ChiShona ine 'iri', 'iyo', 'apa', 'apo' — saka pfungwa yedutsiku/kuretsika unotoziva. MuChiNgezi, kunhanga musiyano: this/these (pedyo) vs that/those (kure). Iyi inhanho yakanaka kufunga sezvazvinoita ChiShona — asi cherechedza kuti this/these inotevera nyaya yenhamba (singular vs plural) zvakare.",
  },

  chunks: [
    {
      id: 'this_book',
      target: 'This book',
      native: 'Bhuku iri (riri pedyo)',
      literal: 'singular + close',
      emoji: '📕',
      phonetic: 'this-BUK',
      audioRef: null,
    },
    {
      id: 'that_house',
      target: 'That house',
      native: 'Imba iyo (iri kure)',
      literal: 'singular + far',
      emoji: '🏠',
      phonetic: 'that-HOWS',
      audioRef: null,
    },
    {
      id: 'these_children',
      target: 'These children',
      native: 'Vana ava (vari pedyo)',
      literal: 'plural + close',
      emoji: '👶',
      phonetic: 'theez-CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Demonstratives: this/that, these/those",
    explanation: "this (pedyo, singular) → these (pedyo, plural). that (kure, singular) → those (kure, plural). Sezvinoita 'iri/iyo' muChiShona, asi unofanira kuwedzera plural -s vinoshanda zvakare.",
    examples: [
      { target: 'This book / These books',   native: 'Bhuku iri / Mabhuku aya' },
      { target: 'That house / Those houses', native: 'Imba iyo / Dzimba dziya' },
      { target: 'This is mine. That is yours.', native: 'Iri rangu. Iyo ndeyenyu.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Sarudza this/that/these/those',
      sentence: '_____ apple in my hand is red.',
      options: ['This', 'That', 'These'],
      correct: 'This',
      context: 'Apuro riri muruoko (close, singular) → "This".',
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza this/that/these/those',
      sentence: '_____ children over there are playing.',
      options: ['Those', 'These', 'This'],
      correct: 'Those',
      context: 'Vana vari kure (far, plural) → "Those".',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Bhuku iri',
      correct: ['This book', 'this book'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Vana ava',
      correct: ['These children', 'these children'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndepipi yakanaka?',
      question: 'I want _____ shoes (the ones over there).',
      options: [
        { text: 'those', correct: true },
        { text: 'these', correct: false },
        { text: 'that', correct: false },
      ],
      explanation: '"Over there" = kure. "Shoes" = plural. Saka "those" — kure + zvizhinji.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "These bags are heavy"',
      words: ['heavy.', 'are', 'These', 'bags'],
      correct: ['These', 'bags', 'are', 'heavy.'],
      translation: 'Mabhegi aya akareme',
    },
  ],

  rwenDialogue: {
    intro: "Uri muchitoro chemashangu kuMutare. Uri kuratidza shamwari yako shangu dzauri kuda — dzimwe pedyo, dzimwe kure.",
    lines: [
      {
        speaker: 'npc',
        target: "Which shoes do you like?",
        native: 'Uri kuda shangu dzipi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I like these shoes here, but those shoes over there are too expensive.", native: 'Ndinoda shangu idzi dziri pano, asi dziya dziri kure idhura zvikuru.', correct: true, feedback: "Wakwanisa chaizvo — 'these' (pedyo) ne 'those' (kure). Plural mose." },
          { target: "I like this shoes here, but that shoes over there are expensive.", native: 'Ndinoda shangu iri pano, asi iyo iri kure idhura.', correct: false, feedback: "Shoes = plural. Saka 'these' (pedyo) ne 'those' (kure) — kwete 'this/that'." },
          { target: "I like that shoes here, but these shoes over there are expensive.", native: '...', correct: false, feedback: "Wakavhiringidza pedyo nekure. 'These' = pedyo, 'those' = kure." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka. This/These = pedyo. That/Those = kure. Cherechedza zvakare nhamba — singular kana plural.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'This book (in English)', correct: ['This book', 'this book'] },
      { prompt: 'Those houses (in English)', correct: ['Those houses', 'those houses'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tora ruoko rwako — nongedzera zvinhu zvitatu zviri pedyo ('This is...') uye zvitatu zviri kure ('That is...'). Cherechedza musiyano.",
    rwenSignoff: "Pedyo this. Kure that. Wedzera -se kuita plural — these/those. Wakwanisa.",
  },

  phase8: {
    scenario: "Muchitoro — uri kuratidza zvinhu kushamwari, ukashandisa this/that/these/those zvichienderana nekuti zvinhu zviri pedyo here kana kure.",
    rwenRole: "Shamwari yauri kushopa nayo, anokuratidza zvinhu zvakasiyana muchitoro chinhu uri kuda yacho.",
    successCriteria: "Mudzidzi anoshandisa demonstratives mana — 'this', 'that', 'these', 'those' — zvichienderana nekuti chinhu chiri pedyo/kure uye singular/plural.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
