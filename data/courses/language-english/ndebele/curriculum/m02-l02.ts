import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-numbers-11-100',
  module: 2,
  lesson: 2,
  title: 'Numbers 11-100 — Tshumi kuya kwekhulu',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Sesisukela ku 11 siye ku 100. Kukhona umlingo omncane lapha — ubuhlobo phakathi kuka 'thirteen' lo 'thirty' bunengi olufana, kodwa bobabili bahluleka ngokuhambelana.",
    culturalNote: "EsiNdebeleni '13' ngu 'tshumi lantathu', '30' ngu 'tshumi amathathu' — kucacile, akula nkinga. Kodwa ngesiNgisi 'thirteen' lo 'thirty' kufanana indlebeni — umehluko ngokugcizelelwa kwesithonjana. THIR-teen (ukugcizelelwa ekuqaleni) lo THIR-tee (ukuthula ekugcineni). Lokhu kuyamcebanisa umtshova: 'Ngitshele i-1330' kungaphenduka 'is it 13 or 30?'. Lalela ngesineke umsindo wokugcina.",
  },

  chunks: [
    {
      id: 'eleven_twelve',
      target: 'Eleven, twelve',
      native: 'Tshumi lanye, tshumi lambili',
      literal: '11, 12',
      emoji: '1️⃣',
      phonetic: 'ee-LEH-vn, twelv',
      audioRef: null,
    },
    {
      id: 'teens',
      target: 'Thirteen, fourteen, fifteen',
      native: 'Tshumi lantathu, tshumi lane, tshumi lanhlanu',
      literal: '13, 14, 15',
      emoji: '🔢',
      phonetic: 'thir-TEEN, for-TEEN, fif-TEEN',
      audioRef: null,
    },
    {
      id: 'tens',
      target: 'Twenty, thirty, forty, fifty',
      native: 'Amatshumi amabili, amatshumi amathathu, amatshumi amane, amatshumi amahlanu',
      literal: '20, 30, 40, 50',
      emoji: '🔟',
      phonetic: 'TWEN-tee, THIR-tee, FOR-tee, FIF-tee',
      audioRef: null,
    },
    {
      id: 'hundred',
      target: 'One hundred',
      native: 'Ikhulu',
      literal: '100',
      emoji: '💯',
      phonetic: 'wun-HUN-dred',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Teen vs ty — kuhlukaniswa ngokugcizelelwa",
    explanation: "Amanani esiNgisi azwakala ngokuhlukana kwemvelo: ama 'teen' (13-19) agcizelelwa ekugcineni, lawo 'ty' (20, 30, 40...) agcizelelwa ekuqaleni futhi enengi ngokuthula. THIR-TEEN (igigaba lokugcina lipholile) versus THIR-tee (igigaba lokuqala lipholile). Nxa ungaqondisisi, buza: 'Did you say one-three or three-zero?'",
    examples: [
      { target: 'Thirteen (13) — thir-TEEN',  native: 'Tshumi lantathu' },
      { target: 'Thirty (30) — THIR-tee',     native: 'Amatshumi amathathu' },
      { target: 'Fifteen (15) versus Fifty (50)', native: '15 versus 50' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amanani esiNgisi lalokho akushoyo ngezinombolo',
      pairs: [
        { left: 'Thirteen', right: '13' },
        { left: 'Thirty',   right: '30' },
        { left: 'Fifteen',  right: '15' },
        { left: 'Fifty',    right: '50' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Ungane wakho ulesigaba sa-grade 7. Mtshele ukuthi 'I am ____' (gcizelela ekuqaleni)",
      sentence: 'I am ____ years old.',
      options: ['thirteen', 'thirty', 'three'],
      correct: 'thirteen',
      context: "Umuntu ka-grade 7 uneminyaka engaba ngu 13 (thirteen), hatshi 30 (thirty).",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Amatshumi amane',
      correct: ['Forty', 'forty', 'Forty.', 'forty.'],
    },
    {
      type: 'multiple_choice',
      instruction: "Lalela: i-bhasi inumber THIR-tee. Inkombo yiyiphi?",
      question: "Inkokhi yebhasi ithe 'Take bus THIR-tee' (THIR-tee) — uyibhalisa njani esikhungweni sebhasi?",
      options: [
        { text: '30',  correct: true },
        { text: '13',  correct: false },
        { text: '300', correct: false },
      ],
      explanation: "'THIR-tee' (ukugcizelela ekuqaleni) yi-30. Ukube bekungu 13, bekuzakhulunywa kuthiwe 'thir-TEEN' (ukugcizelela ekugcineni).",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama ngendlela efaneleyo — utshela umuntu ubudala bakho',
      words: ['I', 'twenty-five', 'am', 'old', 'years'],
      correct: ['I', 'am', 'twenty-five', 'years', 'old'],
      translation: 'Ngiloku ngiminyaka engamatshumi amabili lanhlanu',
    },
  ],

  rwenDialogue: {
    intro: 'Use kwa-OK Mart, indoda esebenzayo ikutshela amanani ngesiNgisi. Uzwa kabili — kodwa kunzima ukuhlukanisa.',
    lines: [
      { speaker: 'npc', target: "That'll be fifty rand, please.", native: 'Lokho kuzaba ngama-rand angamatshumi amahlanu, ngiyacela.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, did you say fifteen or fifty?", native: 'Uxolo, uthe tshumi lanhlanu kumbe amatshumi amahlanu?', correct: true,  feedback: 'Kuhle kakhulu! Ukubuza kuyangcono kulokuthatha icebo elingayisilo.' },
          { target: "OK, fifteen rand here.",                native: 'Kulungile, ama-rand atshumi lanhlanu nankha.',         correct: false, feedback: "Uthe FIF-tee (50), hatshi fif-TEEN (15). Uzakhokha okuncane kakhulu — buza ukuze uqondisise." },
          { target: "Yes.",                                   native: 'Yebo.',                                                 correct: false, feedback: "'Yebo' kungenelelo lapho kumele wenze isenzo — kuza ngokwakho ngokupha imali. Buza." },
        ],
      },
      { speaker: 'npc', target: 'Fifty. Five-zero.', native: 'Amatshumi amahlanu. Hlanu-zero.' },
      {
        speaker: 'rwen',
        rwenLine: "Eyi! Ukubuza akuyihlanga lemfundo encinyane — abantu bawunika ulwazi nxa ucela ngenhlonipho. 'Did you say X or Y?' yiyo intombo eyizwakhayo kakhulu.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabukeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'Thirty (ngesiNgisi)',  correct: ['Thirty', 'thirty', 'Thirty.', 'thirty.'] },
      { prompt: 'Fifteen (ngesiNgisi)', correct: ['Fifteen', 'fifteen', 'Fifteen.', 'fifteen.'] },
      { prompt: 'One hundred (ngesiNgisi)', correct: ['One hundred', 'one hundred', 'Hundred', 'hundred', 'A hundred', 'a hundred'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Cula amanani angu 13, 30, 15, 50, 18, 80 ngokulandelana, uphinda kabili. Lalela umehluko phakathi 'teen' lo 'ty'. Lapho ungaqondisisi umuntu okhulumayo, buza: 'Did you say one-three or three-zero?'",
    rwenSignoff: 'Inkokhelo, ubudala, izithonjana zibhasi — konke kufuna lokhu. Sizabonana kusasa.',
  },

  phase8: {
    scenario: "You're at a Bulawayo flea market. The trader speaks fast English and quotes prices that swing between teen and ty values (15, 50, 13, 30). Negotiate the price of three items, asking for clarification when the price sounds ambiguous.",
    rwenRole: "Brian, 32, a hustling trader who learnt English from movies. Friendly but rapid speech — he'll quote prices like 'Fifty rand' and 'Thirteen rand' interchangeably and won't repeat unless asked.",
    successCriteria: "User asks at least once 'Did you say X or Y?' or 'Fifteen or fifty?' to clarify, uses numbers correctly when stating their counter-offer, and completes the negotiation politely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
