import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Numbers 1-10 — One to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Module 6 inotanga nemaNumbers — chinhu chinoshandiswa zuva rega rega. Tinotanga ne1-10 muChiNgezi: One, Two, Three... kusvika Ten.",
    culturalNote: "MuChiShona, manhamba ane mafomu maviri — ekuverenga (poshi, piri, tatu) uye anobatana ne noun classes ('vana vatatu' = three children). MuChiNgezi zvakareruka — manhamba haashanduki: 'three children', 'three dollars', 'three days' — three icho chete. Hapana mutoro wenoun class — chinhu chimwe chete unodzidza.",
  },

  chunks: [
    {
      id: 'one_five',
      target: 'One, two, three, four, five',
      native: 'Imwe, mbiri, nhatu, ina, shanu',
      literal: '1, 2, 3, 4, 5',
      emoji: '🖐️',
      phonetic: 'wun, too, three, for, fyv',
      audioRef: null,
    },
    {
      id: 'six_ten',
      target: 'Six, seven, eight, nine, ten',
      native: 'Nhanhatu, nomwe, sere, pfumbamwe, gumi',
      literal: '6, 7, 8, 9, 10',
      emoji: '🔟',
      phonetic: 'siks, SEH-vn, ayt, nyn, ten',
      audioRef: null,
    },
    {
      id: 'how_many',
      target: 'How many?',
      native: 'Zvingani?',
      literal: 'How many?',
      emoji: '❓',
      phonetic: 'how-MEH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cardinal counting',
    explanation: "MuChiNgezi, manhamba haashanduki paunoshandisa nezwi rakasiyana — 'three apples', 'three children', 'three dollars' — three icho chete. Hapana 'vatatu' kana 'matatu' kana 'zvitatu'. Iyi yakaita kuti uchidzidze chete fomu rimwe pa nhamba yega yega.",
    examples: [
      { target: 'Three children',  native: 'Vana vatatu' },
      { target: 'Three apples',    native: 'Maapuro matatu' },
      { target: 'Three dollars',   native: 'Madhora matatu' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana manhamba echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'One',   right: 'Imwe' },
        { left: 'Five',  right: 'Shanu' },
        { left: 'Ten',   right: 'Gumi' },
        { left: 'Seven', right: 'Nomwe' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Nhatu',
      correct: ['Three', 'three'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa nhamba inotevera',
      sentence: 'One, two, three, ____, five.',
      options: ['four', 'five', 'six'],
      correct: 'four',
      context: 'Manhamba anotevedzera: 1-2-3-4-5.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo — uri kubvunza kuti zviri zvingani',
      words: ['many', 'are', 'How', 'they?'],
      correct: ['How', 'many', 'are', 'they?'],
      translation: 'Zvingani?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuverengera maapuro',
      prompt: 'Maapuro masere',
      correct: ['Eight apples', 'eight apples'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mbiri',
      correct: ['Two', 'two'],
    },
  ],

  rwenDialogue: {
    intro: 'Uri pamusika muHarare. Mutengesi anotaura ChiNgezi anokumbira kuti uverenge mango dzauri kutenga.',
    lines: [
      { speaker: 'npc', target: "How many mangoes do you want?", native: 'Mango unoda dzingani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Five, please.',          native: 'Shanu, ndapota.',    correct: true,  feedback: 'Wakwanisa — pfupi uye pachena. "Five" + "please" inoshanda zvakanaka.' },
          { target: 'Many.',                  native: 'Zhinji.',             correct: false, feedback: 'Hazvina kujeka — mutengesi haazive zvauri kuda. Pa-marketi, taura nhamba chaiyo.' },
          { target: 'I want mango.',          native: 'Ndinoda mango.',     correct: false, feedback: 'Wapindura mubvunzo wakasiyana — wakabvunzwa nhamba, kwete kana uchida here.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Wakwanisa! Manhamba 1-10 ndiwo musimboti. Ese matengeso anotanga nemashoko aya.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Seven (in English)', correct: ['Seven', 'seven'] },
      { prompt: 'How many? (in English)', correct: ['How many?', 'How many', 'how many?', 'how many'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: 'Verenga zvinhu zvishanu zvauri kuona iye zvino — muChiNgezi: "one chair, two cups, three pens..." Itai kakati nhatu zuva rino.',
    rwenSignoff: 'Manhamba ndiwo mukuvi wenyaya dzese — mari, nguva, vanhu. Tichaonana mangwana.',
  },

  phase8: {
    scenario: "You're at a fresh produce market in Harare and a tourist stall owner speaks only English. Buy a few items by counting them aloud — mangoes, tomatoes, oranges. Use numbers 1-10 to specify quantity for each item.",
    rwenRole: "Mai Tendai, 45, a friendly market stall owner who has worked with English-speaking customers for years. She'll ask 'how many?' for each item.",
    successCriteria: "User uses at least three different numbers between 1 and 10 to specify quantities, says 'How many?' or responds to it correctly, and completes the purchase politely (with 'please' or 'thank you').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
