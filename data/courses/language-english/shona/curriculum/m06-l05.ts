import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Half past, quarter to — Mininitsi',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Iye zvino tinopinda mu-minutes. 'Half past two', 'quarter to nine', 'five past six' — izvi ndizvo zvinotaurwa nguva isiri pa-awa chete.",
    culturalNote: "MuChiShona unoti 'nguva mbiri nehafu' (two and a half) = 2:30. MuChiNgezi unoti 'half past two' (literally: 'half after two') — chinhu chimwe chete asi nzira yakasiyana. 'Quarter' (kota) i-15 minutes. 'Quarter past' = 15 minutes after; 'quarter to' = 15 minutes before. Cherechedza: muUS unozonzwa 'five thirty', 'eight forty-five' nyore zvikuru kupfuura 'half past five' yeUK.",
  },

  chunks: [
    {
      id: 'half_past',
      target: 'Half past two',
      native: 'Nguva mbiri nehafu',
      literal: 'Half after two',
      emoji: '🕝',
      phonetic: 'haf-PAST-too',
      audioRef: null,
    },
    {
      id: 'quarter_to',
      target: 'Quarter to nine',
      native: 'Mininitsi gumi nemashanu pamberi pemapfumbamwe',
      literal: 'Quarter before nine',
      emoji: '🕘',
      phonetic: 'KWOR-ter-too-nyn',
      audioRef: null,
    },
    {
      id: 'five_past',
      target: 'Five past six',
      native: 'Mininitsi mashanu kupfuura nguva nhanhatu',
      literal: 'Five after six',
      emoji: '🕕',
      phonetic: 'fyv-past-siks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time fragments — past / to',
    explanation: "Kana minutes dziri 1-30: shandisa 'past' (mushure me-awa). Kana 31-59: shandisa 'to' (kuda kusvika pamwe awa). 'Half past' = 30. 'Quarter past/to' = 15. Zvimwe zvose: 'five past three' (3:05), 'twenty to eight' (7:40). Nzira yechiUS i-different: '3:05' = 'three oh five', '7:40' = 'seven forty'.",
    examples: [
      { target: "Half past four (4:30)",        native: 'Nguva ina nehafu' },
      { target: "Quarter past seven (7:15)",    native: 'Mininitsi gumi nemashanu kupfuura nomwe' },
      { target: "Twenty to nine (8:40)",        native: 'Mininitsi makumi maviri pamberi pemapfumbamwe' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana nguva',
      pairs: [
        { left: 'Half past two',     right: '2:30' },
        { left: 'Quarter to nine',   right: '8:45' },
        { left: 'Quarter past five', right: '5:15' },
        { left: 'Twenty to seven',   right: '6:40' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Nguva mbiri nehafu (2:30)',
      correct: ['Half past two', 'half past two', 'Two thirty'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — past kana to?',
      sentence: "It's quarter ____ ten. (10:45 already passed by 15 min — wait, 9:45)",
      options: ['past', 'to', 'before'],
      correct: 'to',
      context: "9:45 = 15 minutes 'to' ten (kuda kusvika pa-10). Pamashure pe-30, shandisa 'to'.",
    },
    {
      type: 'build_sentence',
      instruction: "Vaka — uri kutaura kuti waroverwa nebhazi ne 5 minutes",
      words: ['by', 'I', 'minutes.', 'missed', 'bus', 'the', 'five'],
      correct: ['I', 'missed', 'the', 'bus', 'by', 'five', 'minutes.'],
      translation: 'Ndarova bhazi nemininitsi mishanu.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mininitsi gumi nemashanu pamberi pemapfumbamwe (8:45)',
      correct: ['Quarter to nine', 'quarter to nine', 'Eight forty-five'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura nguva yatinosangana',
      prompt: 'Tisangane nguva nhanhatu nehafu (6:30)',
      correct: ["Let's meet at half past six", "Let's meet at half past six.", "Meet at half past six", "Let's meet at six thirty"],
    },
  ],

  rwenDialogue: {
    intro: 'Wabva kunge wadambura bhazi rekuenda kubasa. Wafonera mushandi wepa-bhasi anotaura ChiNgezi kuti utsanangure.',
    lines: [
      { speaker: 'npc', target: "Why are you late?", native: 'Sei wanonoka?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I missed the bus by five minutes — it left at half past seven.",  native: 'Ndarova bhazi nemininitsi mishanu — rakaenda nguva nomwe nehafu.', correct: true,  feedback: "Wakwanisa — wakapa nguva chaiyo (\"half past seven\") nezvakaitika (\"missed by five minutes\"). Tsanangurirei zvakanaka." },
          { target: "Bus go.",                                                            native: 'Bhazi raenda.',                                                  correct: false, feedback: 'Pfupi zvakanyanya — wedzera nguva uye chiitiko: "by five minutes", "at half past seven".' },
          { target: "I'm late because traffic.",                                          native: 'Ndanonoka nekuda kwetraffic.',                                  correct: false, feedback: 'Yakanaka asi haina nguva — wakabvunzwa "why are you late?" — pa-context iyi, pa-time chaiyo ndiyo inoda mhinduro.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Half past' uye 'by five minutes' — izvi zvinopindira muhurukuro yenguva. Watopinda mushedule.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Half past three (in English) (3:30)', correct: ['Half past three', 'half past three', 'Three thirty'] },
      { prompt: "Quarter to seven (in English) (6:45)", correct: ['Quarter to seven', 'quarter to seven', 'Six forty-five'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tarisa wachi yako mangwana mangwanani — kana isiri paawa chaiyo, taura muChiNgezi: 'It's half past seven' kana 'It's quarter to nine'. Itai kakati katatu zuva.",
    rwenSignoff: "Nguva yakaenzana — minute imwe yakareba kunge nguva. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You missed an English-speaking friend's birthday dinner by five minutes — the kombi was late and now you're calling to apologise. Explain the timing of what happened: when the kombi was supposed to come, when it actually came, and when you arrived.",
    rwenRole: "Megan, 30, your American friend who was hosting. A bit disappointed but understanding. Will ask 'what time?' multiple times.",
    successCriteria: "User uses at least two of: 'half past', 'quarter to/past', 'five past', or 'minutes late/by X minutes' to describe the timeline. Apologises with 'sorry'. Gives a specific arrival time.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
