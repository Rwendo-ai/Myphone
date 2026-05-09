import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-at-the-airport',
  module: 7,
  lesson: 1,
  title: 'At the airport — Esikhumulweni sezindiza',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "Module 7 — uhambo. Siqalisa esikhumulweni sezindiza. Amagama amathathu okumele uwazi: 'gate' (umnyango wendiza), 'terminal' (isakhiwo esikhulu), lo-'baggage claim' (lapho othatha khona impahla yakho).",
    culturalNote:
      "Esikhumulweni saseHeathrow loba JFK, awuboni umuntu obhalwe 'umlindi' ekutshela uyephi — kufanele ufunde amabhodi (signs) wedwa. Ingxaki yokuqala ye-traveller weNdebele eya phesheya: i-'gate' kayisikho komayini lapho othenga khona itikithi — kungumnyango lapho indiza yakho ihlala khona. Amaterminal aHeathrow alikhomba ngezinombolo: T2, T3, T4, T5. Hlola itikithi lakho — ngaphezulu kulotshwe iterminal le-gate. Uma ulahleka, buza umuntu osebenzayo (osegcekeni elimhlophe), hatshi umphakathi nje — laba bayasebenza, balindele ukukusiza.",
  },

  chunks: [
    {
      id: 'wheres_my_gate',
      target: "Where's my gate?",
      native: 'Ungaphi umnyango wami wendiza?',
      literal: 'Igate yami ikuphi?',
      emoji: '🛫',
      phonetic: 'wairz-may-GAYT',
      audioRef: null,
    },
    {
      id: 'which_terminal',
      target: 'Which terminal?',
      native: 'Yiphi iterminal?',
      literal: 'Iterminal eyiphi?',
      emoji: '🏢',
      phonetic: 'witch-TUR-min-uhl',
      audioRef: null,
    },
    {
      id: 'baggage_claim',
      target: 'Where is baggage claim?',
      native: 'Ikuphi lapho ngizathatha khona impahla yami?',
      literal: 'Ibaggage claim ikuphi',
      emoji: '🧳',
      phonetic: 'wair-iz-BAG-ij-KLAYM',
      audioRef: null,
    },
    {
      id: 'is_my_flight_on_time',
      target: 'Is my flight on time?',
      native: 'Indiza yami isekhona ngesikhathi?',
      literal: 'Iflight yami ihambisa kuhle?',
      emoji: '⏰',
      phonetic: 'iz-may-FLAYT-on-TAYM',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Where + is/are — asking for a location",
    explanation:
      "Esikhumulweni, isibuzo sokuqala ngesokuthi 'Where is the ___?' (Ikuphi i-___?). Faka 'the' phambi kwegama lendawo — 'the gate', 'the terminal', 'the toilet'. Ungafaka 'Excuse me' phambili ukuze kube ngokuhloniphekayo: 'Excuse me, where is gate 24?' Yibhubhu yiphi yonke endizeni.",
    examples: [
      { target: "Where is gate 24?",       native: 'Igate 24 ikuphi?' },
      { target: 'Where is the toilet?',     native: 'Ikuphi indlu yangasese?' },
      { target: 'Where is baggage claim?',  native: 'Ikuphi i-baggage claim?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Faka amagama esiNgisi laNdebele ndawonye',
      pairs: [
        { left: 'gate',          right: 'umnyango wendiza' },
        { left: 'terminal',      right: 'isakhiwo esikhulu' },
        { left: 'baggage claim', right: 'lapho othatha khona impahla' },
        { left: 'on time',       right: 'ngesikhathi' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — usesikhumulweni',
      prompt: 'Igate yami ikuphi?',
      correct: [
        "Where's my gate?",
        'Where is my gate?',
        "where's my gate?",
        "Where's my gate",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ufuna i-baggage claim',
      sentence: 'Excuse me, ____ is baggage claim?',
      options: ['Where', 'When', 'Who'],
      correct: 'Where',
      context: "'Where' kusho 'kuphi'. Sisetshenziswa endaweni.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo — uphazamise umsebenzi we-airport',
      question: "Sekungumzuzu wokuhamba kwendiza yakho. Uthini ukuze ukhuluma laye?",
      options: [
        { text: "Excuse me, where's gate 14?",    correct: true },
        { text: 'Hey, gate 14 where!',             correct: false },
        { text: 'Gate.',                            correct: false },
      ],
      explanation:
        "Esikhumulweni se-UK loma se-US, qala ngo-'Excuse me'. Akusiyikuthi unqobe — kuyikuhloniphana okwejwayelekileyo.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ubuza ngendiza yakho',
      words: ['my', 'on', 'flight', 'time', 'Is'],
      correct: ['Is', 'my', 'flight', 'on', 'time'],
      translation: 'Indiza yami isekhona ngesikhathi?',
    },
  ],

  rwenDialogue: {
    intro:
      "UseHeathrow Terminal 2. Indiza yakho iya eHarare ngehora 19:30. Awazi ukuthi i-gate yakho ikuphi. Ubuza umsebenzi we-information desk.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hi there, can I help you?',
        native: 'Sawubona, ngingakusiza?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Excuse me, where's my gate? My flight is to Harare at 19:30.",
            native: 'Uxolo, igate yami ikuphi? Indiza yami iya eHarare ngo-19:30.',
            correct: true,
            feedback: "Mnandi — u-'Excuse me' uvule kuhle, iflight number ne-time uyazwakalisa.",
          },
          {
            target: 'Gate where Harare?',
            native: 'Igate ikuphi Harare?',
            correct: false,
            feedback: "Kayipheleli — faka 'Excuse me' ekuqaleni lo 'where is'.",
          },
          {
            target: "I'm lost, help me!",
            native: 'Ngilahlekile, ngisize!',
            correct: false,
            feedback: 'Ungashayi izinhlamvu — buza nje ngomnyango wendiza, akungeqi.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "Sure — that's gate 32, downstairs and to the right. Boarding starts at 19:00.",
        native: 'Yebo — yigate 32, phansi kwesokudla. Ukungena kuqala ngo-19:00.',
      },
      {
        speaker: 'rwen',
        rwenLine:
          "Yibhubhu! U-'Excuse me, where's ___?' uzayisebenzisa zonke izinsuku ehambeni. Yiyo i-key card ye-Module 7.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "Where's my gate? (ngesiNgisi)",
        correct: ["Where's my gate?", 'Where is my gate?', "where's my gate?", "Where's my gate"],
      },
      {
        prompt: 'Where is baggage claim? (ngesiNgisi)',
        correct: ['Where is baggage claim?', 'Where is the baggage claim?', "Where's baggage claim?", 'where is baggage claim?'],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Cabanga usesikhumulweni esikhulu — Heathrow, JFK, kumbe Sydney. Buza wedwa ngomlomo: 'Excuse me, where's my gate?' kanye 'Where is baggage claim?' kathathu. Faka 'Excuse me' qala.",
    rwenSignoff: 'Kusasa — i-customs ne-immigration. Imibuzo embalwa ezayifika.',
  },

  phase8: {
    scenario:
      "You've just landed at London Heathrow Terminal 2 after a 10-hour flight from Johannesburg. You need to find baggage claim, then your transfer gate to Manchester. You stop a uniformed airport staff member at the information desk.",
    rwenRole:
      "Priya, 34, Heathrow ground services. Brisk, professional, used to tired travellers. She'll answer clearly but won't repeat herself if you mumble.",
    successCriteria:
      "User opens with 'Excuse me', asks 'Where is baggage claim?' or 'Where's my gate?', uses a flight number or destination to give context, and thanks Priya.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
