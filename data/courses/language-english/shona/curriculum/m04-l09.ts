import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-articles-mixed',
  module: 4,
  lesson: 9,
  title: 'Mixed practice — articles in flow',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Iye zvino tine articles dzese — a, an, the, no article. Inhamo huru kuzvi-shandisa pakuverenga, asi unozvigovera kana wakatomboita basa nadzo.",
    culturalNote: "ChiShona haina articles — saka kana uchitanga kutaura ChiNgezi, brain yako inozodzimisa kana kushandisa article ipi. Zvinhu zvinotsanangurwa: kana 'a/an/the' zvichirasika — chirevo chinokwanisa kunzwika asi chinotanga kuita 'unnatural'. Kana wakwanisa kuita zvakanaka — chiNgezi chako chinopfuura A2 level.",
  },

  chunks: [
    {
      id: 'a_the_combo',
      target: 'I read a book. The book was good.',
      native: 'Ndakaverenga bhuku. Bhuku iro rakanga rakanaka.',
      literal: 'a (intro) → the (after intro)',
      emoji: '📖',
      phonetic: 'I read a buk. Thuh buk wuhz gud.',
      audioRef: null,
    },
    {
      id: 'no_the_combo',
      target: 'Children love music. The children at this school sing.',
      native: 'Vana vanoda mumhanzi. Vana vechikoro chino vanoimba.',
      literal: 'general (no article) → specific (the)',
      emoji: '🎵',
      phonetic: 'CHIL-dren luv MYU-zik. Thuh CHIL-dren...',
      audioRef: null,
    },
    {
      id: 'mixed_flow',
      target: 'I have a dog. The dog likes water.',
      native: 'Ndine imbwa. Imbwa yangu inoda mvura.',
      literal: 'a → the → no article (water)',
      emoji: '🐕',
      phonetic: 'I hav a dog...',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Articles in flow — ndimwoyo wezvose tatange",
    explanation: "Mutemo mukuru: (1) Article 'a/an' kana uchitaura nezvechinhu kekutanga. (2) 'The' kana matove muchitaurirana nezvazvo. (3) Hapana article kana uchitaura nezvinhu zvese muchimumbo, kana zvinhu zvisinganzwiki. Cherechedza kuti article inopfumirira mumarevo akawanda.",
    examples: [
      { target: 'I bought a phone yesterday. The phone is excellent.', native: 'Ndakatenga foni nezuro. Foni iyi yakanaka chaizvo.' },
      { target: 'Music is universal. The music at this party is loud.', native: 'Mumhanzi unowanikwa kose. Mumhanzi wepa party uno wakakura.' },
      { target: 'I have many friends. Some friends live in Harare.',   native: 'Ndine shamwari dzakawanda. Dzimwe dzinogara muHarare.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Sarudza article (a/an/the/—)',
      sentence: 'I saw _____ man at _____ market. _____ man was selling tomatoes.',
      options: ['a / the / The', 'the / a / A', 'a / a / A'],
      correct: 'a / the / The',
      context: 'Murume kekutanga (a). Musika zvinozivikanwa (the). Murume watotaura nezvake (The).',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Vana vanoda mumhanzi.',
      correct: ['Children love music.', 'Children love music', 'children love music.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza article',
      sentence: 'I drink _____ water every day. _____ water from this well is clean.',
      options: ['— / The', 'The / The', 'A / A'],
      correct: '— / The',
      context: 'Water muchimumbo — pasina article. Water yetsime iri yakatarwa — the.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "She is a teacher at the school"',
      words: ['school.', 'teacher', 'is', 'She', 'a', 'the', 'at'],
      correct: ['She', 'is', 'a', 'teacher', 'at', 'the', 'school.'],
      translation: 'Iye mudzidzisi pachikoro',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chirevo chakanaka',
      question: 'Choose the natural English:',
      options: [
        { text: 'I have a brother. The brother lives in London.', correct: true },
        { text: 'I have brother. Brother lives in London.', correct: false },
        { text: 'I have the brother. A brother lives in London.', correct: false },
      ],
      explanation: 'Brother kekutanga = "a brother". Watotaura nezvake = "the brother". Pasina article hazvinaki muChiNgezi.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndine apuro. Apuro racho rakatsvuku.',
      correct: ['I have an apple. The apple is red.', 'I have an apple. The apple is red'],
    },
  ],

  rwenDialogue: {
    intro: "Uri kutaura nyaya kushamwari — uri kushandisa articles muchirevo chenyaya. Cherechedza kuti dzinopfuvurira sei kuzobata pamwe pamwe.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me what happened today.",
        native: 'Ndiudze zvaitika nhasi.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I went to a market. The market was busy. I bought some apples and a chicken.", native: 'Ndakaenda kumusika. Musika wakanga uzere. Ndakatenga maapuro nehuku.', correct: true, feedback: "Wakwanisa chaizvo — 'a market' (intro), 'the market' (already mentioned), 'some apples' (positive), 'a chicken' (one). Articles dzakanaka." },
          { target: "I went to market. Market was busy. I bought apples and chicken.", native: 'Ndakaenda kumusika. Musika wakanga uzere. Ndakatenga maapuro nehuku.', correct: false, feedback: "MuChiNgezi unoda articles — 'a market', 'the market', 'a chicken'. Pasina dzakanaka chiNgezi chako chichaita 'incomplete'." },
          { target: "I went to the market. A market was busy. I bought the apples.", native: '...', correct: false, feedback: "Wakawiringidza — kekutanga 'a market' (intro), kechipiri 'the market' (specific). Mibvunzo yakavhiringidzwa." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa. Articles dzinotaurira munzwi nezvaunoreva — kekutanga (a), kechipiri (the), pasina (general). Iri ndiro tarisiro yedu zvachose.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Nyora articles dzinokwana mu zvirevo zviviri.',
    prompts: [
      { prompt: '"I bought ___ apple. ___ apple was red." (fill both)', correct: ['an / The', 'an, The', 'an The', 'An The'] },
      { prompt: '"___ children at school love ___ music." (fill both, may include —)', correct: ['The / —', 'The —', 'the —', 'the / —'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Verenga paragraph muChiNgezi (kuhotera, kunhau, kana mubhuku). Tarisa article imwe neimwe — bvunza wega: nei a/an/the kana nothing? Iri kushanda kuwedzera ChiNgezi chako kuita natural.",
    rwenSignoff: "Articles dzinodyiwa neku-noticing kakawanda. Verenga, cherechedza, dzidza.",
  },

  phase8: {
    scenario: "Uri kuverenga nyaya yenhau muChiNgezi pa-radio kushamwari yako. Articles dzinofanira kushanda zvakanaka kuti vanhu vanzwisise.",
    rwenRole: "Shamwari yauri kuratidza, anokumbira kuti utaure nyaya yauri kunzwa pa-radio — anocherechedza articles dzako.",
    successCriteria: "Mudzidzi anoshandisa articles dzitatu kana zvinopfuura zvakasiyana ('a/an' kekutanga, 'the' kana ratove rakareva, 'no article' pa general/abstract) muchirevo chimwe chete chefugike.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
