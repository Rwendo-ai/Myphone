import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-us-foods',
  module: 3,
  lesson: 4,
  title: 'Common US foods — Ukudla kweUSA',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Lamuhla siwela kuUSA. Khona ku-'burger', 'fries', le-'cookies'. Bopha lokhu: 'fries' eUSA = 'chips' eUK! Lokhu yikona okuvame ukudida abafundi besiNgisi.",
    culturalNote: "AMAGAMA AHLUKILEYO: 'fries' eUSA (amatemu athosiweyo amancane, anjengama-McDonald's) = 'chips' eUK. 'Cookie' eUSA = 'biscuit' eUK. 'Biscuit' eUSA yi-fluffy bread roll lentwana yempelasonto. 'Jelly' eUSA = i-jam yezithelo (eUK 'jelly' yi-wobbly dessert). 'Jello' eUSA = 'jelly' yeUK. EZimbabwe sasifundiswa isiNgisi seUK ezikolo, ngakho ungabona uthi 'chips' kodwa eUSA bazokupha 'crisps'! Kuyaphithanisa, kodwa zamuka njengamavidiyo akho-Netflix — uzakuwajwayela.",
  },

  chunks: [
    {
      id: 'burger',
      target: 'burger',
      native: 'i-burger (isinkwa esilenyama)',
      literal: 'burger',
      emoji: '🍔',
      phonetic: 'BUR-ger',
      audioRef: null,
    },
    {
      id: 'fries_us',
      target: 'fries',
      native: "amatemu athosiweyo (eUK 'chips')",
      literal: 'fries (US) = chips (UK)',
      emoji: '🍟',
      phonetic: 'fraiz',
      audioRef: null,
    },
    {
      id: 'cookie',
      target: 'cookie',
      native: "ibhisikidi elimnandi (eUK 'biscuit')",
      literal: 'cookie (US) = biscuit (UK)',
      emoji: '🍪',
      phonetic: 'KOOK-ee',
      audioRef: null,
    },
    {
      id: 'soda',
      target: 'soda / pop',
      native: "iziphuzo ezilegas (eUK 'fizzy drink')",
      literal: 'soda/pop (US) = fizzy drink (UK)',
      emoji: '🥤',
      phonetic: 'SOH-dah',
      audioRef: null,
    },
    {
      id: 'jelly',
      target: 'jelly (US)',
      native: "i-jam yezithelo (eUK 'jam'!)",
      literal: 'jelly (US) = jam (UK)',
      emoji: '🍇',
      phonetic: 'JEL-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'UK vs US food vocabulary',
    explanation: "EsiNgisini, igama elilodwa lingachasisa izinto ezimbili ngokweUK lakuUSA. Uma ungeke wazi ukuthi ungaphi, sebenzisa amagama 'safe': 'cola' (kungeyiyo 'soda' kumbe 'fizzy drink'), 'sandwich' (kungeyiyo 'sub' kumbe 'roll'). Loba buza: 'Sorry — what do you call ___ here?'",
    examples: [
      { target: 'fries (US) = chips (UK)',           native: 'amatemu athosiweyo' },
      { target: 'cookie (US) = biscuit (UK)',         native: 'ibhisikidi elimnandi' },
      { target: 'jelly (US) = jam (UK)',              native: 'i-jam yezithelo' },
      { target: 'jello (US) = jelly (UK)',            native: 'i-jelly enconconozayo' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: "Hlanganisa igama leUSA leleUK",
      pairs: [
        { left: 'fries (US)',   right: 'chips (UK)' },
        { left: 'cookie (US)',  right: 'biscuit (UK)' },
        { left: 'jelly (US)',   right: 'jam (UK)' },
        { left: 'soda (US)',    right: 'fizzy drink (UK)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okulungileyo',
      question: "Usebenza eNew York. Ucela 'chips'. Bazakupha ini?",
      options: [
        { text: "Ama-crisps asebhasini (kuphela kuUSA 'chips' yiyo).", correct: true },
        { text: "Amatemu amakhulu athosiweyo.",                       correct: false },
        { text: "Isinkwa.",                                            correct: false },
      ],
      explanation: "EUSA, 'chips' kusho ama-crisps asebhasini. Uma ufuna amatemu athosiweyo eUSA, cela 'fries'. Lokhu yikuphithanisa okukhulu phakathi kweUK leUSA!",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi seUSA',
      prompt: 'Ngifuna i-burger lamatemu (ngendlela yeUSA).',
      correct: ["I'd like a burger and fries", "I'd like a burger and fries please", "I'll have a burger and fries", "I would like a burger and fries"],
    },
    {
      type: 'fill_blank',
      instruction: "EUSA, ucela ibhisikidi elimnandi. Yiphi igama olisebenzisayo?",
      sentence: "Could I have a ___, please?",
      options: ['cookie', 'biscuit', 'cracker'],
      correct: 'cookie',
      context: "USeNew York, ufuna into yokuhlafuna emnandi le-coffee yakho.",
    },
  ],

  rwenDialogue: {
    intro: "Usengene ku-diner eNew York. Umuntu okuphakelayo (server) uyakuthatha i-oda.",
    lines: [
      { speaker: 'npc', target: "Hi! What can I get for you today?", native: 'Salibonani! Ngingakuthathela ini lamuhla?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a burger and fries, please.", native: 'Ngifuna i-burger lamatemu, ngiyacela.', correct: true,  feedback: "Kuhle — eUSA, 'fries' yiyo igama elilungileyo. Ungatsho 'chips' lapha." },
          { target: "I'd like a burger and chips, please.", native: 'Ngifuna i-burger lamatemu, ngiyacela.', correct: false, feedback: "EUSA, 'chips' = ama-crisps asebhasini! Bazokuphithizela. Sebenzisa 'fries' eUSA." },
          { target: "Burger.",                              native: 'I-burger.',                              correct: false, feedback: "Akwanele — engeza 'I'd like' lo 'please'." },
        ],
      },
      { speaker: 'npc', target: "Sure thing — and to drink? Soda or water?", native: 'Kulungile — kunyatha? Iziphuzo ezilegas (soda) loba amanzi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A coke, please.",  native: 'I-coke, ngiyacela.',  correct: true,  feedback: "Kuhle — 'coke' kuyimsoco emhlabeni wonke, akusoze kwakuphithanisa." },
          { target: "Fizzy drink.",     native: 'Iziphuzo ezilegas.',  correct: false, feedback: "Lokhu yindlela yeUK kuphela — eUSA bathi 'soda' kumbe 'pop'. Zama 'soda'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Lamuhla ufundile ukuhluka okukhulu: 'fries' eUSA = 'chips' eUK. 'Cookie' eUSA = 'biscuit' eUK. Bambelela lawa, kuzakulwela ezikhukhulwini eziningi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — phendula ngesiNgisi.',
    prompts: [
      { prompt: "EUSA, amatemu athosiweyo athiwa ngokuthini?", correct: ['fries', 'Fries'] },
      { prompt: "EUSA, ibhisikidi elimnandi lithiwa ngokuthini?", correct: ['cookie', 'Cookie', 'a cookie'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Khangela ividiyo encane yokufaka oda eUSA-restaurant kuyoutube/TikTok. Lalela amagama: 'fries', 'soda', 'cookie'. Zama ukuphinda ngomlomo wakho.",
    rwenSignoff: "Kuhle kakhulu. Kusasa sifundisa indlela yokufaka oda ngokuhloniphekileyo.",
  },

  phase8: {
    scenario: "You're at a classic American diner in New York City. The menu has burgers, fries, milkshakes, cookies. You want a burger with fries and a soda. The server is friendly and chatty.",
    rwenRole: "Tina, 35, an American diner waitress, warm and chatty New York accent. Will use US English vocabulary throughout (fries, soda, check) and may correct the user gently if they say 'chips'.",
    successCriteria: "User orders using US English vocabulary — says 'fries' (not chips), says 'soda' or 'coke' (not fizzy drink), and uses a polite ordering form like 'I'd like' or 'I'll have' with 'please'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
