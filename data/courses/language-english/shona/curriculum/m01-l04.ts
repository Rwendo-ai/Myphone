import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-good-afternoon',
  module: 1,
  lesson: 4,
  title: 'Good afternoon — Masikati',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Masikati! Kana zuva rasvika pakati, kwaziso inochinja kubva pa 'Good morning' kuenda 'Good afternoon'. Sezvinoita 'Mangwanani' / 'Masikati' — asi zvinochinja na 12pm chaipo.",
    culturalNote: "MuChiShona, 'Maswera sei?' inoshandiswa zuva rose kana wasangana nemumwe pakati pezuva. MuChiNgezi, vanhu vanowanzobvunza 'How's your day?' — yakapfava, ingori kutaurirana hudikani.",
  },

  chunks: [
    {
      id: 'good_afternoon',
      target: 'Good afternoon',
      native: 'Masikati',
      literal: undefined,
      emoji: '☀️',
      phonetic: 'good-af-tuh-NOON',
      audioRef: null,
    },
    {
      id: 'hows_your_day',
      target: "How's your day?",
      native: 'Maswera sei?',
      literal: 'How is your day?',
      emoji: '🙂',
      phonetic: 'howz-yor-DAY',
      audioRef: null,
    },
    {
      id: 'going_well',
      target: 'Going well',
      native: 'Zviri kufamba',
      literal: 'It-is going well',
      emoji: '👍',
      phonetic: 'GO-ing-WELL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day shifts',
    explanation: "MuChiNgezi, 'Good morning' inopera na midday (12pm). Pakati pa 12pm ne 5pm/6pm, vanhu vanoti 'Good afternoon'. Mhinduro 'Going well' inoreva kuti zvinhu zvine zvazvinofamba — sezvakaita 'Zviri kufamba'.",
    examples: [
      { target: 'Good afternoon',  native: 'Masikati' },
      { target: "How's your day?", native: 'Maswera sei?' },
      { target: "It's going well", native: 'Zviri kufamba' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko',
      pairs: [
        { left: 'Good afternoon',  right: 'Masikati' },
        { left: "How's your day?", right: 'Maswera sei?' },
        { left: 'Going well',      right: 'Zviri kufamba' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Masikati',
      correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Maswera sei?',
      correct: ["How's your day?", "how's your day?", "How is your day?", "how is your day?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza kwaziso yenguva — inguva 2pm',
      sentence: 'Good ____, how are you?',
      options: ['morning', 'afternoon', 'evening'],
      correct: 'afternoon',
      context: 'Wasangana nemushamwari panguva yekudya kwemasikati.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro',
      words: ['My', 'day', 'is', 'going', 'well'],
      correct: ['My', 'day', 'is', 'going', 'well'],
      translation: 'Zuva rangu riri kufamba zvakanaka',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Inguva 1pm. Wasangana neshamwari. Unoti chii?",
      options: [
        { text: 'Good afternoon!', correct: true },
        { text: 'Good morning!',   correct: false },
        { text: 'Good night!',     correct: false },
      ],
      explanation: "Pakati pe 12pm ne 5pm tinoshandisa 'Good afternoon'.",
    },
  ],

  rwenDialogue: {
    intro: 'Wasangana neshamwari panguva yekudya kwemasikati muHarare. Munotaura ChiNgezi.',
    lines: [
      { speaker: 'npc', target: "Good afternoon! How's your day?", native: 'Masikati! Maswera sei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good afternoon. It's going well, thanks.", native: 'Masikati. Zviri kufamba, ndatenda.', correct: true,  feedback: "Wakwanisa — kwaziso yenguva yakatarisirwa nemhinduro yakapfava." },
          { target: 'Good morning.',                              native: 'Mangwanani.',                          correct: false, feedback: "Inguva yakapfuura midday — 'Good afternoon' ndiyo yakanaka." },
          { target: 'Bye!',                                       native: 'Sara zvakanaka!',                      correct: false, feedback: "Mauya kuzodya pamwe chete — usatange nekuparadzana." },
        ],
      },
      { speaker: 'npc', target: "Glad to hear that.", native: 'Ndafara kunzwa.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wachinja kubva pa 'Good morning' kuenda 'Good afternoon' — wonyatsoteerera nguva.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "Good afternoon (in English)", correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'] },
      { prompt: "Going well (in English)",     correct: ['Going well', 'going well', "It's going well", "it's going well"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Mushure me 12pm nhasi, shandisa 'Good afternoon' kumwe munhu — kunyange neshamwari pakubvunza nezvezuva ravo.",
    rwenSignoff: "Tichaonana — masikati akanaka.",
  },

  phase8: {
    scenario: "It's 1pm and you're meeting an English-speaking acquaintance for lunch at a Harare restaurant. Greet them, ask how their day is going, share that yours is fine.",
    rwenRole: "James, 40, a colleague-of-a-colleague you've met twice. Polite but not super-close. Speaks fluent British-influenced English.",
    successCriteria: "User opens with 'Good afternoon' (not 'Good morning'), uses 'How's your day?' or similar, and answers with 'Going well' or 'It's going well' if asked.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
