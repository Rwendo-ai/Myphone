import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-days-of-week',
  module: 2,
  lesson: 3,
  title: 'Days of the week — Insuku zeviki',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Salibonani! Lamuhla sifunda insuku zeviki ngesiNgisi: Monday kuya kuSunday. Kukhona umphongolo omkhulu lapha — 'Wednesday' libhalwa nge 'd' phakathi, kodwa le 'd' kayikhulunywa.",
    culturalNote: "EsiNdebeleni 'Wednesday' ngu uLwesithathu — kucacile, akula nkinga. Kodwa ngesiNgisi 'Wednesday' libhalwa W-E-D-N-E-S-D-A-Y kodwa likhulunywa 'WENZ-day'. Le 'd' yokuqala iyalahlwa. Lokhu kungenza wonke umuntu axhwale: ubona 'Wed-nes-day' embhalwini, kodwa abantu bakhuluma 'Wenz-day'. Lalela amaJamani-yase-Britain — bashicilela ngokucacileyo. Lokhu kuhamba lobubili: 'Tuesday' likhulunywa 'TYOOZ-day', kungasi 'too-es-day'.",
  },

  chunks: [
    {
      id: 'mon_tue_wed',
      target: 'Monday, Tuesday, Wednesday',
      native: 'uMsombuluko, uLwesibili, uLwesithathu',
      literal: '(work-day, second-day, third-day)',
      emoji: '📅',
      phonetic: 'MUN-day, TYOOZ-day, WENZ-day',
      audioRef: null,
    },
    {
      id: 'thu_fri',
      target: 'Thursday, Friday',
      native: 'uLwesine, uLwesihlanu',
      literal: '(fourth-day, fifth-day)',
      emoji: '📆',
      phonetic: 'THURZ-day, FRY-day',
      audioRef: null,
    },
    {
      id: 'sat_sun',
      target: 'Saturday, Sunday',
      native: 'uMgqibelo, iSonto',
      literal: '(Saturday, Sunday)',
      emoji: '🌞',
      phonetic: 'SAT-er-day, SUN-day',
      audioRef: null,
    },
    {
      id: 'wednesday_focus',
      target: 'Wednesday',
      native: 'uLwesithathu',
      literal: '(silent d — likhulunywa WENZ-day)',
      emoji: '🤫',
      phonetic: 'WENZ-day (akukho "d" yokuqala)',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Amagama elinokuthula (silent letters)",
    explanation: "Insuku zeviki zihlanganisa amagama elimaqaqambisa abalahliweyo: 'Wednesday' — i 'd' yokuqala kayikhulunywa (WENZ-day). 'Thursday' — 'th' liyakhulunywa (njenge 'three' okufunde lwoluhlu olwedlulileyo). Bobabili 'Tuesday' lo 'Thursday' baqala ngomsindo opholile: TYOOZ, THURZ. Akusi 'too' loba 'thurr'.",
    examples: [
      { target: 'Wednesday — WENZ-day',   native: 'uLwesithathu (akula "d" yokuqala)' },
      { target: 'Thursday — THURZ-day',   native: 'uLwesine ("th" likhulunywa)' },
      { target: 'Tuesday — TYOOZ-day',    native: 'uLwesibili (akusi "too-es-day")' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa insuku ngesiNgisi lalokho akushoyo ngesiNdebele',
      pairs: [
        { left: 'Monday',    right: 'uMsombuluko' },
        { left: 'Wednesday', right: 'uLwesithathu' },
        { left: 'Friday',    right: 'uLwesihlanu' },
        { left: 'Sunday',    right: 'iSonto' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha indlela efaneleyo yokukhuluma',
      question: "Wenza njani ukutsho 'Wednesday'?",
      options: [
        { text: 'WENZ-day (akula "d" yokuqala)',     correct: true },
        { text: 'WED-NES-DAY (incwadi yonke ekhulunywayo)', correct: false },
        { text: 'WHEN-DAY',                            correct: false },
      ],
      explanation: "'Wednesday' libhalwa W-E-D-N-E-S-D-A-Y kodwa likhulunywa 'WENZ-day'. Le 'd' yokuqala iyalahlwa — yiyo lutho lonke abacela ngalo abantu abafundayo isiNgisi.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'uLwesibili',
      correct: ['Tuesday', 'tuesday', 'Tuesday.', 'tuesday.'],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa indawo engelalutho — phinda inhlamvu kuyilona",
      sentence: "Today is ____. Tomorrow is Thursday.",
      options: ['Wednesday', 'Friday', 'Saturday'],
      correct: 'Wednesday',
      context: 'Phambi kuka Thursday kuza Wednesday.',
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama ngendlela efaneleyo',
      words: ['is', 'today', 'Friday'],
      correct: ['Today', 'is', 'Friday'],
      translation: 'Lamuhla nguLwesihlanu',
    },
  ],

  rwenDialogue: {
    intro: 'Ubhalisa ku-clinic. Unesi uthi insiku zokulinda ku doctor ngu Wednesday — uzwa kabili.',
    lines: [
      { speaker: 'npc', target: "Your appointment is on WENZ-day at 10am. Got that?", native: 'Imihlangano yakho izaba ngoLwesithathu ngo-10 ekuseni. Uyezwa?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — Wednesday at 10am.", native: 'Yebo — uLwesithathu ngo-10 ekuseni.', correct: true,  feedback: "Kuhle! Wezwe 'WENZ-day' wabona ukuthi ngu-Wednesday. Akuzange ukukhwabanise." },
          { target: "Sorry, what day?",          native: 'Uxolo, ngusuku luphi?',                correct: true,  feedback: 'Kuhle ukubuza nxa ungaqondisisi — kuyangcono kulokuvuma ungezwa.' },
          { target: "Yes — Sunday.",              native: 'Yebo — iSonto.',                       correct: false, feedback: "WENZ-day yi-Wednesday (uLwesithathu), hatshi iSonto. Le 'W' ekuqaleni iyatshelangokuthi yiWednesday." },
        ],
      },
      { speaker: 'npc', target: "Correct. Wednesday, ten in the morning.", native: 'Kunjalo. uLwesithathu, ngo-10 ekuseni.' },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle! Le 'silent d' ku 'Wednesday' iyaqondisa abantu abasebancane esiNgisini. Manje uyayazi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'Wednesday (ngesiNgisi)',  correct: ['Wednesday', 'wednesday', 'Wednesday.', 'wednesday.'] },
      { prompt: 'Saturday (ngesiNgisi)',   correct: ['Saturday', 'saturday', 'Saturday.', 'saturday.'] },
      { prompt: 'Thursday (ngesiNgisi)',   correct: ['Thursday', 'thursday', 'Thursday.', 'thursday.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Tsho izinsuku zonke zeviki ngesiNgisi ngokulandelana, kabili. Gcizelela ku 'Wednesday' (WENZ-day) — kukhulekele ulimi lwakho ukungalitshi 'wed-NES-day'.",
    rwenSignoff: "Lamuhla wenze ezakho izinsuku zibe yizakho. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You're at a Harare clinic reception, booking a follow-up appointment. The receptionist offers slots on Tuesday, Wednesday, and Friday this week. Confirm a day and time, asking for clarification if any day name sounds unclear.",
    rwenRole: "Sister Moyo, 38, a brisk but kind clinic receptionist. She speaks fast English and uses 'WENZ-day' naturally — she won't slow down unless asked.",
    successCriteria: "User correctly identifies which day they want, says the day name back to confirm, and uses 'Sorry, did you say...?' if they need clarification on Wednesday or Tuesday in particular.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
