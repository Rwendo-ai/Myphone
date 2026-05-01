import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-hi-bye',
  module: 1,
  lesson: 2,
  title: 'Hi & Bye — Casual greetings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinodzidza mashoko emushamwari — 'Hi' ne 'Bye'. Aya ndiwo anoshandiswa pakati peshamwari kwete nevakuru.",
    culturalNote: "Pa ChiShona, 'Hesi' inonzwika senge yakanyatsoderera kuvakuru. Mu ChiNgezi, 'Hi' inoshanda kunyange nevasingakuzivi — asi haisi yebasa kana yetsika dzakakwirira.",
  },

  chunks: [
    {
      id: 'hi',
      target: 'Hi',
      native: 'Hesi',
      literal: undefined,
      emoji: '👋',
      phonetic: 'HAY',
      audioRef: null,
    },
    {
      id: 'bye',
      target: 'Bye',
      native: 'Sara zvakanaka',
      literal: 'Goodbye (short)',
      emoji: '👋',
      phonetic: 'BAI',
      audioRef: null,
    },
    {
      id: 'see_you_later',
      target: 'See you later',
      native: 'Tichaonana',
      literal: 'We-will-see-each-other',
      emoji: '🔁',
      phonetic: 'SEE-yoo-LAY-tuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Casual register',
    explanation: "MuChiNgezi, mashoko emushamwari (casual) anosiyana neezvinhu zvebasa (formal). 'Hi' ne 'Bye' zvinoshandiswa pavatanga kuzivana kana pakati peshamwari — kwete pamusangano webasa.",
    examples: [
      { target: 'Hi',             native: 'Hesi' },
      { target: 'Bye',            native: 'Sara zvakanaka' },
      { target: 'See you later',  native: 'Tichaonana' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Hi',             right: 'Hesi' },
        { left: 'Bye',            right: 'Sara zvakanaka' },
        { left: 'See you later',  right: 'Tichaonana' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Tichaonana',
      correct: ['See you later', 'see you later', 'See you later.', 'see you later.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa hurukuro yepakati peshamwari',
      sentence: '____, see you later!',
      options: ['Hi', 'Hello', 'Bye'],
      correct: 'Bye',
      context: "Uri kuenda, uchidzokera kumba — wabva pashamwari yako.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko aite mutsara wakakwana',
      words: ['Hi', 'see', 'you', 'later'],
      correct: ['Hi', 'see', 'you', 'later'],
      translation: 'Hesi, tichaonana',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Hesi',
      correct: ['Hi', 'hi', 'Hi.', 'hi.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Wapedza coffee neshamwari. Uchaenda. Unoti chii?",
      options: [
        { text: 'Bye, see you later!', correct: true },
        { text: 'Hello, how are you?', correct: false },
        { text: 'Good morning.',       correct: false },
      ],
      explanation: "'Bye' ne 'See you later' ndiwo mashoko ekuparadzana neshamwari.",
    },
  ],

  rwenDialogue: {
    intro: 'Wasangana neshamwari pacoffee shop muHarare. Murikutaura ChiNgezi.',
    lines: [
      { speaker: 'npc', target: 'Hi! How are you?', native: 'Hesi! Makadii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hi, I\'m fine. See you later!', native: 'Hesi, ndiri zvakanaka. Tichaonana!', correct: true,  feedback: 'Wakwanisa — wapindura zvakanaka uye wabatanidza zvichaitika mberi.' },
          { target: 'Good morning, sir.',             native: 'Mangwanani, mukoma.',                  correct: false, feedback: 'Yakanyanya kuremera — uri neshamwari, hauadi formal.' },
        ],
      },
      { speaker: 'npc', target: 'Bye!', native: 'Sara zvakanaka!' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakaratidza kuti unoziva mashoko emushamwari muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "Hi (in English)",            correct: ['Hi', 'hi'] },
      { prompt: "See you later (in English)", correct: ['See you later', 'see you later', 'See you later.', 'see you later.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Shandisa 'Hi' kana neshamwari yako nhasi — kunyange muchitaurirana ChiShona, edza kuti 'Hi' ipinde pakutanga.",
    rwenSignoff: "Tichaonana mangwana!",
  },

  phase8: {
    scenario: "You bump into a friend at a coffee shop in Harare. Casual catch-up — say hi, exchange a quick line, and say bye when you leave.",
    rwenRole: "Tariro, 27, your old schoolmate. Warm, talkative, casual. Speaks English fluently.",
    successCriteria: "User opens with 'Hi', uses 'See you later' or 'Bye' to close, and stays in casual register (no 'Good morning sir' or formal phrasing).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
