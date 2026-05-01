import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: 'Tea, coffee, drinks — Tii, kofi, zvinwiwa',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinotaura nezvetii nekofi nemvura — order yauchaita zuva nezuva muChiNgezi. Tii nemukaka, kofi yakasviba, girazi remvura. Mashoko mashoma — basa rakawanda.",
    culturalNote: "Pa-UK, tii itsika hombe — 'a cup of tea' inoita rwiyo rwetekano. Vanhu vanowanzo bvunza 'How do you take it?' (mukaka? shuga? mangani?). Pindura zvakajeka: 'White, no sugar' kana 'Just a splash of milk, two sugars'. Pa-USA, kofi yakapfava — vanhu vanowanzo order 'large coffee, milk and sugar' kana 'black coffee'. Kumusha, tii inonyatsodyiwa nemukaka neshuga — saka pa-UK uchanzwa kunge kumba.",
  },

  chunks: [
    {
      id: 'tea_with_milk',
      target: 'Tea with milk',
      native: 'Tii nemukaka',
      literal: 'Tea with milk',
      emoji: '🍵',
      phonetic: 'TEE-with-MILK',
      audioRef: null,
    },
    {
      id: 'black_coffee',
      target: 'Black coffee',
      native: 'Kofi yakasviba',
      literal: 'Black coffee (no milk)',
      emoji: '☕',
      phonetic: 'BLAK-KOF-ee',
      audioRef: null,
    },
    {
      id: 'glass_of_water',
      target: 'A glass of water',
      native: 'Girazi remvura',
      literal: 'A glass of water',
      emoji: '🥛',
      phonetic: 'a-GLAS-of-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Drinks — "with" and "of"',
    explanation: "MuChiNgezi, zvinwiwa zvine mitsetse miviri yakakosha. (1) WITH/WITHOUT — 'tea with milk', 'coffee without sugar'. (2) A ___ OF ___ — 'a glass of water', 'a cup of tea', 'a bottle of beer'. Cherechedza: 'glass', 'cup', 'bottle' ndizvo zvinhu zvunoverengwa, kwete mvura kana tii.",
    examples: [
      { target: 'Tea with milk, no sugar, please.',  native: 'Tii nemukaka, pasina shuga, ndapota.' },
      { target: 'A black coffee, please.',           native: 'Kofi yakasviba, ndapota.' },
      { target: 'Could I have a glass of water?',    native: 'Ndingawana girazi remvura here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvinwiwa',
      pairs: [
        { left: 'Tea with milk',     right: 'Tii nemukaka' },
        { left: 'Black coffee',      right: 'Kofi yakasviba' },
        { left: 'A glass of water',  right: 'Girazi remvura' },
      ],
    },
    {
      type: 'translate',
      instruction: "Nyora muChiNgezi — uri pa-cafe muLondon, unoda tii nemukaka uine shuga imwe",
      prompt: 'Tii nemukaka, ine shuga imwe, ndapota.',
      correct: [
        'Tea with milk, one sugar, please.',
        'A tea with milk, one sugar, please.',
        'Tea with milk and one sugar, please.',
        'tea with milk, one sugar, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuda kofi yakasviba',
      prompt: 'Kofi yakasviba, ndapota.',
      correct: [
        'Black coffee, please.',
        'A black coffee, please.',
        'Black coffee please.',
        'A black coffee please.',
        'black coffee, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kukumbira mvura pa-restaurant',
      sentence: 'Could I have a ____ of water, please?',
      options: ['glass', 'cup', 'bottle'],
      correct: 'glass',
      context: "Pa-restaurant, mvura inopihwa mu-glass. Cup = pa-tii. Bottle = pa-mvura yawakatenga.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga order yetii',
      words: ['milk', 'Tea', 'with', 'please'],
      correct: ['Tea', 'with', 'milk', 'please'],
      translation: 'Tii nemukaka ndapota',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wekukumbira mvura',
      words: ['water', 'A', 'of', 'glass'],
      correct: ['A', 'glass', 'of', 'water'],
      translation: 'Girazi remvura',
    },
  ],

  rwenDialogue: {
    intro: "Wapinda mu-cafe muLondon. Barista anokuwana. Order tii nemukaka uine shuga imwe.",
    lines: [
      { speaker: 'npc', target: "Hi there, what can I get you?", native: 'Hesi, ndingakupei chii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A tea with milk and one sugar, please.",  native: 'Tii nemukaka uine shuga imwe, ndapota.', correct: true,  feedback: 'Wakwanisa — order yakajeka. UK style chaiyo.' },
          { target: "Tea milk sugar.",                            native: 'Tii mukaka shuga.',                       correct: false, feedback: "Hapana 'with' kana 'and' — order haunzwiki. Shandisa 'tea with milk and sugar'." },
          { target: "I want tea.",                                 native: 'Ndinoda tii.',                            correct: false, feedback: "Inoshanda asi haunatsotsanangura — barista anozobvunza 'how do you take it?'. Wedzera mukaka neshuga." },
        ],
      },
      { speaker: 'npc', target: "Lovely. That'll be £3.20.", native: 'Zvakanaka. Inenge £3.20.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wabvuma sadza yetii — pa-UK, pa-Zim, kunyange pa-South Africa, mutsetse uyu unoshanda.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Tea with milk (in English)', correct: ['Tea with milk', 'Tea with milk.', 'A tea with milk', 'tea with milk'] },
      { prompt: 'A glass of water (in English)', correct: ['A glass of water', 'A glass of water.', 'Glass of water', 'a glass of water'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, kana uchifunga zvekunwa, taura order yako pamuromo muChiNgezi. Sarudza imwe: 'Tea with milk, one sugar' kana 'A black coffee' kana 'A glass of water'. Cherechedza kuti zvinoreruka here pamuromo.",
    rwenSignoff: "Tichaonana mangwana — chidzidzo chikuru. Tinotsanangura sadza nemufushwa muChiNgezi.",
  },

  phase8: {
    scenario: "You walk into a busy cafe near London Bridge on a cold morning. The barista is friendly but rushed. Order a tea with milk and one sugar.",
    rwenRole: "Jess, 24, the barista. London accent, fast-paced. Will ask 'have here or take away?' as a follow-up.",
    successCriteria: "User orders 'tea with milk' and specifies sugar (or 'no sugar'). Uses 'please'. Handles the take-away follow-up.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
