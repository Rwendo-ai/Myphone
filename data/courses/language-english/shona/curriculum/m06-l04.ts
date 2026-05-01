import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: "What time? — Inguva yakadii?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! 'What time is it?' — mubvunzo unoshandiswa zuva rega rega. Mhinduro yakareruka: 'It's seven o'clock'. Tichapinda mu-hours nhasi.",
    culturalNote: "MuChiShona unoti 'nguva inomwe' (literally: 'time of seven') = seven o'clock. MuChiNgezi unoshandisa 'It's' + nhamba + 'o'clock'. 'O'clock' ishoko rinopfupisa 'of the clock' — mhuka itsika yapasi yapfuura asi tinoshandisa zvichingoita. Imwe tsika yakajairika muZimbabwe: tinoshandisa 24-hour kana 12-hour pakati pevanhu — asi muma USA neUK 12-hour ne A.M./P.M. ndiyo yakajairika.",
  },

  chunks: [
    {
      id: 'what_time',
      target: 'What time is it?',
      native: 'Inguva yakadii?',
      literal: 'What time is it?',
      emoji: '⏰',
      phonetic: 'wat-tym-iz-it',
      audioRef: null,
    },
    {
      id: 'seven_oclock',
      target: "It's seven o'clock",
      native: 'Nguva inomwe',
      literal: "It-is seven o'clock",
      emoji: '🕖',
      phonetic: 'its-SEH-vn-oh-klok',
      audioRef: null,
    },
    {
      id: 'am_pm',
      target: 'A.M. / P.M.',
      native: 'Mangwanani / Masikati kana manheru',
      literal: 'Ante meridiem / Post meridiem',
      emoji: '🌅',
      phonetic: 'ay-em / pee-em',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-telling — hours',
    explanation: "Kuti utaure nguva yakanyatsosvika paawa: 'It's' + nhamba + \"o'clock\". Zvinoenderana ne A.M. (mangwanani-12pm) kana P.M. (12pm-mangwanani). Cherechedza: \"o'clock\" inoshandiswa chete kana minute dziri 0 — kana 7:15 unoti 'seven fifteen' kana 'quarter past seven', kwete 'seven fifteen o'clock'.",
    examples: [
      { target: "It's three o'clock",        native: 'Nguva nhatu' },
      { target: "It's nine A.M.",            native: 'Mangwanani nguva pfumbamwe' },
      { target: "It's eight o'clock P.M.",   native: 'Manheru nguva sere' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana nguva',
      pairs: [
        { left: "Seven o'clock",   right: '7:00' },
        { left: "Three o'clock",   right: '3:00' },
        { left: "Twelve A.M.",     right: 'Pakati pehusiku' },
        { left: "Twelve P.M.",     right: 'Pakati pemasikati' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Inguva yakadii?',
      correct: ['What time is it?', 'What time is it', 'what time is it?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kupa nguva',
      sentence: "It's six ____.",
      options: ["o'clock", "of clock", "the clock"],
      correct: "o'clock",
      context: "\"O'clock\" ishoko rakapfupiswa kubva ku 'of the clock' — rinoshandiswa kana minute dziri 0.",
    },
    {
      type: 'build_sentence',
      instruction: "Vaka — uri kutaura nguva",
      words: ['eight', "It's", "o'clock", 'A.M.'],
      correct: ["It's", 'eight', "o'clock", 'A.M.'],
      translation: 'Mangwanani nguva sere.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Manheru nguva pfumbamwe',
      correct: ["It's nine P.M.", "Nine P.M.", "It's nine o'clock P.M.", "It is nine P.M."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Nguva ina',
      correct: ["It's four o'clock", "Four o'clock", "It is four o'clock"],
    },
  ],

  rwenDialogue: {
    intro: 'Uri kubasa. Mukoyega anokumbira kuti musangane mangwana — anokumbira kuti utaridze nguva yauchanga uchikwanisa.',
    lines: [
      { speaker: 'npc', target: "What time can we meet tomorrow?", native: 'Tinosangana nguva yakadii mangwana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's meet at ten o'clock A.M.",       native: 'Tisangane mangwanani nguva gumi.',  correct: true,  feedback: "Wakwanisa — \"o'clock\" + A.M. inoratidza nguva chaiyo, isina kuvharirwa." },
          { target: "Ten of clock.",                          native: '10 of clock.',                       correct: false, feedback: "Inguva yakatanga ne 'of clock' — chaiyo ishoko rimwe: \"o'clock\". Yedza zvakare." },
          { target: "Morning.",                                native: 'Mangwanani.',                         correct: false, feedback: 'Hazvina kunyatsojeka — pa-meeting unoda kuti utare nguva chaiyo. Wedzera nhamba.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Nguva yakanaka — A.M. inozvirevera muyera. Mangwana wapindana.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'What time is it? (in English)', correct: ['What time is it?', 'What time is it', 'what time is it?', 'what time is it'] },
      { prompt: "It's five o'clock (in English)", correct: ["It's five o'clock", "Its five o'clock", "It is five o'clock", "Five o'clock"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tarisa wachi yako kakati katatu nhasi — pa-zviitiko zvakasiyana — utaurire wega muChiNgezi: \"It's three o'clock\", \"It's eight P.M.\". Wedza ne A.M./P.M. yakakwana.",
    rwenSignoff: 'Nguva ndiyo basa redu rese. Manage time, manage life. Tichaonana mangwana.',
  },

  phase8: {
    scenario: "You're arranging a meeting time over text/call with an English-speaking colleague for a project review tomorrow. Negotiate a specific hour that works for both of you (use o'clock and A.M./P.M.).",
    rwenRole: "Linda, 36, a project manager. Has a packed schedule, will counter-propose if your time doesn't work. Polite and direct.",
    successCriteria: "User proposes at least one specific time using 'o'clock' and 'A.M.' or 'P.M.' correctly, responds to a counter-proposal, and confirms the final agreed time. Doesn't drop the o'clock structure entirely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
