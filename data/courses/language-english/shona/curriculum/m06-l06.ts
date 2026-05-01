import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Days of the week — Mazuva evhiki',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Mazuva evhiki: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Anotanga ne Monday muChiNgezi — kwete neSunday sezvinoita ma-USA mamwe.",
    culturalNote: "MuChiShona, mazuva eveki anobva muanglicization (Muvhuro = Monday, Chipiri = 'second day' Tuesday). MuChiNgezi anobva mu-pagan gods (Wednesday = Woden's day, Thursday = Thor's day) — asi vanhu vanonyanya kuzvifunga zvinhu izvi. Kuzimbabwe, Sunday inonyanya kuva yechechi/zororo, Saturday inova yemamarket nemafamily — zvakafanana ne UK/USA. Cherechedza: muChiNgezi mazuva anonyorwa neBig letter nguva dzese: 'Monday' (kwete 'monday').",
  },

  chunks: [
    {
      id: 'weekdays',
      target: 'Monday, Tuesday, Wednesday, Thursday, Friday',
      native: 'Muvhuro, Chipiri, Chitatu, China, Chishanu',
      literal: 'Mon-Fri',
      emoji: '📅',
      phonetic: 'MUN-day, TYOOZ-day, WENZ-day, THURZ-day, FRY-day',
      audioRef: null,
    },
    {
      id: 'weekend',
      target: 'Saturday, Sunday',
      native: 'Mugovera, Svondo',
      literal: 'Sat, Sun',
      emoji: '🛌',
      phonetic: 'SAT-er-day, SUN-day',
      audioRef: null,
    },
    {
      id: 'today_tomorrow',
      target: 'Today, tomorrow, yesterday',
      native: 'Nhasi, mangwana, nezuro',
      literal: 'Today, tomorrow, yesterday',
      emoji: '⏳',
      phonetic: 'too-DAY, too-MOR-oh, YES-ter-day',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Week cycle — capitals + on',
    explanation: "Mazuva evhiki anonyorwa neBig letter (capitals): Monday, kwete monday. Pakutaura kuti 'pamazuva' — shandisa 'on': 'on Monday', 'on Friday'. Plural inoshanda kuti uratidze 'every': 'on Mondays' = mavhiki ese mu-Muvhuro. 'Today' = nhasi (no 'on'). 'Yesterday' = nezuro. 'Tomorrow' = mangwana (cherechedza spelling — 'r' imwe chete pakutanga).",
    examples: [
      { target: 'See you on Monday',        native: 'Tichaonana neMuvhuro' },
      { target: 'Today is Wednesday',       native: 'Nhasi i Chitatu' },
      { target: 'Tomorrow is my birthday',  native: 'Mangwana izuva rangu rekuzvarwa' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mazuva',
      pairs: [
        { left: 'Monday',    right: 'Muvhuro' },
        { left: 'Friday',    right: 'Chishanu' },
        { left: 'Sunday',    right: 'Svondo' },
        { left: 'Tomorrow',  right: 'Mangwana' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Nhasi i Chitatu',
      correct: ['Today is Wednesday', 'Today is Wednesday.', 'today is Wednesday'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza — chii chinoshanda?',
      sentence: 'I have a meeting ____ Friday.',
      options: ['on', 'in', 'at'],
      correct: 'on',
      context: "Pamazuva evhiki — shandisa 'on': 'on Monday', 'on Friday'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka — uri kupanga kufona shamwari',
      words: ["Let's", 'every', 'call', 'Monday.'],
      correct: ["Let's", 'call', 'every', 'Monday.'],
      translation: 'Tifonerane Muvhuro yega yega.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mangwana iSvondo',
      correct: ['Tomorrow is Sunday', 'Tomorrow is Sunday.', 'tomorrow is Sunday'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chinhu chiri pakurudzira',
      question: 'Which is correct in formal English writing?',
      options: [
        { text: 'I see her on monday.',       correct: false },
        { text: 'I see her on Monday.',       correct: true },
        { text: 'I see her in Monday.',       correct: false },
      ],
      explanation: "Mazuva ane Big letter nguva dzese ('Monday' kwete 'monday'). 'On' ndiyo preposition yemazuva.",
    },
  ],

  rwenDialogue: {
    intro: 'Une shamwari yauri kuda kufonerana nayo vhiki neviki. Munoda kupinda murefe yenguva yamunokwanisa kufonerana.',
    lines: [
      { speaker: 'npc', target: "When should we call each other every week?", native: 'Tinofonerana nguva yakadii vhiki neviki?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's call every Sunday at six P.M.",  native: 'Tifonerane Svondo yega yega manheru nguva nhanhatu.', correct: true,  feedback: "Wakwanisa — 'every Sunday' inoratidza routine, 'at six P.M.' inopa nguva. Pattern yakakwana." },
          { target: "Sunday call.",                            native: 'Svondo fonera.',                                       correct: false, feedback: 'Pfupi zvakanyanya — wedzera "every" kuti zvinzwike kuti routine, uye nguva.' },
          { target: "I will call on Sundays sometime.",        native: 'Ndichafona neSvondo zvimwe.',                          correct: false, feedback: '"Sometime" inounza ungaranga — pa-routine call shandisa nguva chaiyo.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Every Sunday' yakareruka asi inoshanda zvikuru pakutara routine. Mavhiki ese mwedzi mwedzi muri pamwe chete.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Tomorrow (in English)', correct: ['Tomorrow', 'tomorrow'] },
      { prompt: 'On Friday (in English)', correct: ['On Friday', 'on Friday'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Taura mazuva ese evhiki muChiNgezi pasina kutarisa pa-app. Wedzera 'today is ___' uye 'tomorrow is ___' kakati katatu zuva.",
    rwenSignoff: 'Vhiki imwe chete asi mazuva manomwe — wese une chinangwa chayo. Tichaonana mangwana.',
  },

  phase8: {
    scenario: "You have a long-distance English-speaking friend and you're scheduling a weekly video call. Pick a day of the week and a time that works, and confirm the routine clearly.",
    rwenRole: "Tom, 35, your friend who lives in London (so check the time difference factor). Will suggest alternatives if your day clashes.",
    successCriteria: "User proposes a specific weekday using 'on' + Day, suggests a time, uses 'every' to indicate routine, and confirms the final agreement. Capitalises day correctly when typing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
