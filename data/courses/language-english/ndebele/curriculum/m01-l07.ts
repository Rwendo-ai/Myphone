import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07',
  module: 1,
  lesson: 7,
  title: 'Time-of-day greetings — Good morning/afternoon/evening',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EsiNgisini, ihora liyatshintsha indlela yokubingelela. Esikhathini sengxoxo, kufanele wazi: 'Good morning' kungafiki ehoreni le-3pm — kuzaba kungumlozi.",
    culturalNote: "ESiNdebele, u-'Salibonani' uhamba esikhathini sonke — akula 'Salibonani-sasekuseni' lo-'Salibonani-sasebusuku'. ESiNgisini, sokunengi: morning (kuze kufike 12pm), afternoon (12 kufika 5/6pm), evening (5/6pm kufika 9pm), night (kuselokhu utshilo 'Goodnight' lapho usuyalala). Lokhu kuyabaluleka emsebenzini phesheya — abazimangaze umsebenzi othi 'Good morning' ngo-2pm.",
  },

  chunks: [
    {
      id: 'good_morning',
      target: 'Good morning',
      native: 'Salibonani sasekuseni',
      literal: 'Good morning',
      emoji: '🌅',
      phonetic: 'good-MOR-ning',
      audioRef: null,
    },
    {
      id: 'good_afternoon',
      target: 'Good afternoon',
      native: 'Salibonani sasemini',
      literal: 'Good afternoon',
      emoji: '☀️',
      phonetic: 'good-af-tuh-NOON',
      audioRef: null,
    },
    {
      id: 'good_evening',
      target: 'Good evening',
      native: 'Salibonani sasentambama',
      literal: 'Good evening',
      emoji: '🌆',
      phonetic: 'good-EEV-ning',
      audioRef: null,
    },
    {
      id: 'good_night',
      target: 'Goodnight',
      native: 'Lalani kahle',
      literal: 'Goodnight (parting at end of day)',
      emoji: '🌙',
      phonetic: 'good-NITE',
      audioRef: null,
    },
    {
      id: 'morning',
      target: 'Morning!',
      native: 'Sasekuseni! (kalula)',
      literal: 'Morning! (casual)',
      emoji: '👋',
      phonetic: 'MOR-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time windows',
    explanation: "Sebenzisa: 'Good morning' (00:00 — 11:59), 'Good afternoon' (12:00 — 17:00), 'Good evening' (17:00 — bedtime). U-'Goodnight' awusiyi-greeting yokubingelela — uphuma laye lapho uhamba lapho omunye uyalala. Lapho uhamba ekuseni emsebenzini, ungatsho 'Morning!' kuphela — ku-UK lapha kuyajwayelekile.",
    examples: [
      { target: 'Good morning (8am, manager)',     native: 'Salibonani sasekuseni' },
      { target: 'Morning! (8am, colleague)',        native: 'Sasekuseni! (kalula)' },
      { target: 'Good afternoon (2pm, client)',     native: 'Salibonani sasemini' },
      { target: 'Good evening (7pm, restaurant)',   native: 'Salibonani sasentambama' },
      { target: 'Goodnight (parting after dinner)', native: 'Lalani kahle' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa ihora le-greeting',
      pairs: [
        { left: '8am',     right: 'Good morning' },
        { left: '2pm',     right: 'Good afternoon' },
        { left: '7pm',     right: 'Good evening' },
        { left: '11pm (uyahamba)', right: 'Goodnight' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — yi-3pm',
      sentence: 'Good ____, how can I help you?',
      options: ['morning', 'afternoon', 'evening'],
      correct: 'afternoon',
      context: "Usebenza ku-customer service. Ihora lithi 3pm — kungasekho 'morning'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Yi-7:30am, uyangena emsebenzini. Umsebenzi-mngane akukhumbula. Yini ofanele uyitsho?',
      question: 'Khetha:',
      options: [
        { text: 'Morning!',           correct: true },
        { text: 'Good night.',        correct: false },
        { text: 'Hello, sir.',        correct: false },
      ],
      explanation: "U-'Morning!' kalula, kuhambisana le-team. U-'Good night' yokuhamba lapho usuyalala. U-'Sir' kuludludla kakhulu emakhasini ngempela.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (yi-4pm)',
      prompt: 'Salibonani sasemini',
      correct: ['Good afternoon', 'good afternoon', 'Good afternoon.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['evening', 'everyone', 'Good'],
      correct: ['Good', 'evening', 'everyone'],
      translation: 'Salibonani sasentambama, nonke',
    },
    {
      type: 'multiple_choice',
      instruction: 'Uvalelisa umuntu ngo-11pm emva kwesidlo. Yini ozayitsho?',
      question: 'Khetha:',
      options: [
        { text: 'Goodnight.',        correct: true },
        { text: 'Good evening.',     correct: false },
        { text: 'Good morning.',     correct: false },
      ],
      explanation: "U-'Goodnight' yokuvalelisa ngokuphakathi kobusuku — kuyiyo lapha. U-'Good evening' yi-greeting yokufika, kayisi-yokuvalelisa.",
    },
  ],

  rwenDialogue: {
    intro: 'ELiverpool, e-care home lapho usebenza khona. Yi-7am — uyangena ku-shift yakho. Umphathi wakho ekuhlangabeza ku-reception.',
    lines: [
      { speaker: 'npc', target: "Ah, you're early today.", native: 'Hayi, ufike masinyane lamuhla.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Good morning, Sarah.', native: 'Salibonani sasekuseni, Sarah.', correct: true,  feedback: 'Yikho — yi-7am, "Good morning" kuyifaneleko. Ungatsho lalegama lika-Sarah.' },
          { target: 'Good evening.',         native: 'Salibonani sasentambama.',       correct: false, feedback: 'Yi-7am — kuseseyiyimini. "Good evening" yi-5pm-kufika-9pm.' },
          { target: 'Hi.',                    native: 'Salibonani.',                     correct: false, feedback: '"Hi" kalula kakhulu kumphathi ekuhambeni okokuqala kosuku.' },
        ],
      },
      { speaker: 'npc', target: "Morning. Could you help me with the medication round?", native: 'Sasekuseni. Ungangisiza nge-medication round?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, of course.', native: 'Yebo, kuyiyo.',                  correct: true,  feedback: 'Yikho — "Yes, of course" yikho okwenzeka emsebenzini wesiNgisi.' },
          { target: 'Yes.',            native: 'Yebo.',                           correct: false, feedback: 'Kufutshane kakhulu — engeza "of course" kumbe "sure".' },
          { target: 'Maybe.',          native: 'Mhlawumbe.',                      correct: false, feedback: 'Yi-trap! Lapho umphathi wakho ekubuza, vele uthini "yes".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenzile kahle. Ihora liyaqondisa indlela yokubingelela emsebenzini. Khumbula: 12pm yiyo i-line yokuhlukana phakathi kwe-morning lo-afternoon.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: "Yi-9am — bhala i-greeting",        correct: ['Good morning', 'good morning', 'Morning', 'Good morning.'] },
      { prompt: "Yi-3pm — bhala i-greeting",        correct: ['Good afternoon', 'good afternoon', 'Good afternoon.'] },
      { prompt: "Yi-8pm — bhala i-greeting",        correct: ['Good evening', 'good evening', 'Good evening.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi',
    task: "Lamuhla, sebenzisa i-greeting eqondileyo nge-time-of-day kanye e-WhatsApp lo-engxoxweni. Lapho lokhu sokwenzeka ngokwemvelo, awunaso ukucabanga ngakho.",
    rwenSignoff: 'Have a good evening — sizobonana kusasa.',
  },

  phase8: {
    scenario: "EManchester, e-care home. Yi-2:30pm — uyaqala i-afternoon shift yakho. Umsebenzi-mngane wakho ekuhlangabeza emnyango. Kufanele usebenzise i-greeting ekulungileyo nge-time-of-day, futhi uphendule ngokulungile lapho ekubuza ngomsebenzi wokuqala wokuqala wakho.",
    rwenRole: "Janet — care home support worker, eminyakeni engaba ngu-45, owaseManchester. Olomusa, ofuna ukufundisa abasebenzi abasanda kufika.",
    successCriteria: "Umfundi avule ngo-'Good afternoon' (HATSHI 'Good morning' kuze ngeyi-time-of-day-mistake), aphendule ngokulungile ku-'How was your morning?' ngokutsho ngomsebenzi wakhe wokuqala, futhi avale ngo-'Have a good shift' kumbe okufanayo lapho omunye ehamba.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
