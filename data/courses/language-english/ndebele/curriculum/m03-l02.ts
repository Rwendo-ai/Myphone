import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-water-drinks',
  module: 3,
  lesson: 2,
  title: 'Water and drinks — Amanzi lokunatha',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Eangilandi, uma ucela 'water' erestaurant, uzakuthola amanzi atapha mahala — akudingeki ukuthi ukhokhe. Lokhu yinto ehlukileyo kakhulu kweminye amazwe.",
    culturalNote: "EZimbabwe ne-USA, abanye abaphathi besithetshini bayakhokhisa amanzi ebhodleleni. Kodwa eUK, 'tap water' (amanzi atapha) ngu-FREE — uyabopha ngomthetho ukuyinikeza erestaurant elenza ukutshaywa kwetshwala. Tsho 'Could I have some tap water please?' — kuzakuthi kuhle. 'Still water' = amanzi avamileyo (akho gas), 'sparkling water' = amanzi alegas — kanti la mabili ayakhokhiswa erestaurant. Bopha lokhu: kakukho 'cold water' — yonke amanzi atapha aqandayo.",
  },

  chunks: [
    {
      id: 'water',
      target: 'water',
      native: 'amanzi',
      literal: 'water',
      emoji: '💧',
      phonetic: 'WAW-ter',
      audioRef: null,
    },
    {
      id: 'tap_water',
      target: 'tap water',
      native: 'amanzi atapha (mahala eUK)',
      literal: 'tap water',
      emoji: '🚰',
      phonetic: 'tap-WAW-ter',
      audioRef: null,
    },
    {
      id: 'tea',
      target: 'tea',
      native: 'itiye',
      literal: 'tea',
      emoji: '🍵',
      phonetic: 'tee',
      audioRef: null,
    },
    {
      id: 'coffee',
      target: 'coffee',
      native: 'ikofi',
      literal: 'coffee',
      emoji: '☕',
      phonetic: 'KAW-fee',
      audioRef: null,
    },
    {
      id: 'juice',
      target: 'juice',
      native: 'ijusi (ijusi yezithelo)',
      literal: 'juice',
      emoji: '🧃',
      phonetic: 'joos',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Could I have some ___, please?",
    explanation: "Lo ngumusho oyinhlonipho yokucela ukunatha. 'Could I have' ihlonipha kakhulu kuno-'I want'. Engeza 'some' phambi kwegama elingelinye (water, tea, juice). Phetha ngo-'please' — ngaphandle kwakho, kuzwakala kuyahlukumeza.",
    examples: [
      { target: "Could I have some water, please?",     native: 'Ngingathola amanzi, ngiyacela?' },
      { target: "Could I have some tap water, please?", native: 'Ngingathola amanzi atapha, ngiyacela? (FREE eUK)' },
      { target: "Could I have a tea, please?",          native: 'Ngingathola itiye, ngiyacela?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lesiNdebele',
      pairs: [
        { left: 'water',     right: 'amanzi' },
        { left: 'tap water', right: 'amanzi atapha (mahala eUK)' },
        { left: 'tea',       right: 'itiye' },
        { left: 'coffee',    right: 'ikofi' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa ngegama elilungileyo",
      sentence: "Could I have some ___ water, please? (mahala)",
      options: ["tap", "bottled", "sparkling"],
      correct: "tap",
      context: "EUK, ufuna amanzi mahala — uzakucela ngendlela bani?",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngingathola amanzi, ngiyacela?',
      correct: ["Could I have some water please?", "Could I have some water, please?", "Could I have water please?", "could i have some water please?"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha umutsho oyinhlonipho ekakhulu',
      question: "Ufuna ukucela amanzi erestaurant eUK. Yiphi enhlonipho?",
      options: [
        { text: "Could I have some tap water, please?", correct: true },
        { text: "Give me water.",                       correct: false },
        { text: "I want water now.",                    correct: false },
      ],
      explanation: "'Could I have ... please?' yindlela yesiNgisi yokucela ngenhlonipho. 'Give me' kuyahlukumeza — kuzwakala uziphakamisa.",
    },
  ],

  rwenDialogue: {
    intro: "Usenkundleni yokudla eLondon. Uyacela ukunatha, ufuna ukongeza imali — utsho 'tap water'.",
    lines: [
      { speaker: 'npc', target: "Would you like anything to drink?", native: 'Ungafuna ukunatha okuthize?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Could I have some tap water, please?",  native: 'Ngingathola amanzi atapha ngiyacela?', correct: true,  feedback: "Kuhle kakhulu — 'tap water' kuzakuthi mahala, futhi 'please' kuyahlonipha." },
          { target: "Water.",                                native: 'Amanzi.',                              correct: false, feedback: "Akwanele — engeza 'Could I have some' lo 'please' ukuze kuhloniphe." },
          { target: "Bring me water.",                       native: 'Ngilethele amanzi.',                   correct: false, feedback: "'Bring me' kuhloniphe kancane — sebenzisa 'Could I have'." },
        ],
      },
      { speaker: 'npc', target: "Of course — still or sparkling?", native: 'Yebo — angabi gas (still) loba alegas (sparkling)?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Tap water is fine, thank you.", native: 'Amanzi atapha alungile, ngiyabonga.', correct: true,  feedback: "Hle — uphendule kahle, futhi ucacisile ukuthi awufuni amanzi ebhodleleni (akhokhwa)." },
          { target: "Sparkling.",                    native: 'Alegas.',                              correct: false, feedback: "Lawa azakukhokhisa eUK — uma ufuna mahala, tsho 'tap water'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ngiyabonga ngokufunda lokhu — 'tap water' kuzakukulondoloza imali yakho yonke izinsuku eUK.",
        rwenAnimation: 'thumbs_up',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — bhala ngesiNgisi.',
    prompts: [
      { prompt: 'Ngingathola amanzi atapha, ngiyacela? (free water request)', correct: ["Could I have some tap water please?", "Could I have some tap water, please?", "Could I have tap water please?"] },
      { prompt: 'itiye (ngesiNgisi)',                                          correct: ["tea", "Tea"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Uma ungena erestaurant kumbe ekhefini lamuhla, izama ukucela amanzi ngokuhloniphekileyo: 'Could I have some water, please?' Uma ukhona eUK, vele engeza 'tap'.",
    rwenSignoff: "Kuhle kakhulu. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You're at a small London pub for lunch. You want a drink but you're saving money so you want free tap water — not bottled water (which costs £3-4). The server comes to take your order.",
    rwenRole: "Sam, the pub server, mid-30s, friendly. Will offer bottled water first (it makes the pub more money), so the user must specifically ask for 'tap water' to get it free.",
    successCriteria: "User asks for 'tap water' specifically (not just 'water' or 'bottled') using a polite form like 'Could I have' or 'Please could I get', and includes 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
