import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-asking-time',
  module: 2,
  lesson: 7,
  title: 'Asking about time — What time is it?',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Lamuhla sifunda ukubuza isikhathi: 'What time is it?', 'When does the bus come?', 'How long does it take?'. Lokhu kuyaphathisa lapho ungasiteyikwa-iwashi.",
    culturalNote: "EsiNdebeleni siyabuza 'sesiyihola bani?' kumbe 'isikhathi sithini?'. Ngesi-Britain isiNgisi siyathi 'What time is it?' (akusi 'What is the time?' — yobubili kufaneleka, kodwa 'What time is it?' kuyimpilo). Indlela enye yesibili: 'Have you got the time?' — kuyabonga ngokuthi unike umuntu ithuba lokuphendula. Lapho ubuza okumuhle bayagcizelela ngokugcizelela ku 'time' — TYME, kungasi 'team'. Kunjalo, 'when' likhulunywa 'WEN' (le 'h' iyalahlwa).",
  },

  chunks: [
    {
      id: 'what_time',
      target: 'What time is it?',
      native: 'Sesiyihola bani?',
      literal: 'What time is it?',
      emoji: '⏰',
      phonetic: 'WUT-tym-iz-it',
      audioRef: null,
    },
    {
      id: 'have_you_got',
      target: 'Have you got the time?',
      native: 'Unaso isikhathi? (uyabuza isikhathi)',
      literal: 'Have-you got the time?',
      emoji: '🕰️',
      phonetic: 'hav-yoo-got-the-TYME',
      audioRef: null,
    },
    {
      id: 'when_does',
      target: 'When does the bus come?',
      native: 'Ibhasi iza nini?',
      literal: 'When does the bus come?',
      emoji: '🚌',
      phonetic: 'WEN-duz-the-BUS-kum',
      audioRef: null,
    },
    {
      id: 'how_long',
      target: 'How long does it take?',
      native: 'Kuthatha isikhathi esingakanani?',
      literal: 'How long does it take?',
      emoji: '⏳',
      phonetic: 'how-LONG-duz-it-tayk',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Imibuzo yesikhathi — 'What', 'When', 'How long'",
    explanation: "Imibuzo yesikhathi iqala ngamagama amathathu: 'What time?' (sesiyihola bani?), 'When?' (nini?), 'How long?' (kuthatha isikhathi esingakanani?). Bonke laba abalandelwa yi-verb 'is' / 'does'. 'What time is it?' (isikhathi). 'When does the bus come?' (ibhasi). 'How long does it take?' (uhambo).",
    examples: [
      { target: 'What time is it?',           native: 'Sesiyihola bani?' },
      { target: 'When does the shop open?',    native: 'Isitolo sivulwa nini?' },
      { target: 'How long is the meeting?',    native: 'Umhlangano uthatha isikhathi esingakanani?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imibuzo lokho ekutshoyo',
      pairs: [
        { left: 'What time is it?',          right: 'Sesiyihola bani?' },
        { left: 'When does the bus come?',    right: 'Ibhasi iza nini?' },
        { left: 'How long does it take?',     right: 'Kuthatha isikhathi esingakanani?' },
        { left: 'Have you got the time?',     right: 'Unaso isikhathi?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Sesiyihola bani?',
      correct: ['What time is it?', 'what time is it?', 'What time is it', 'what time is it'],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa indawo engelalutho — ufuna ukwazi ukuthi ibhasi iza nini",
      sentence: '____ does the bus come?',
      options: ['When', 'What', 'How'],
      correct: 'When',
      context: "Ufuna ukwazi isikhathi sokufika kwebhasi — yikho 'When' (nini).",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha owolayinwe phakathi',
      question: "Phakathi sokukhuluma 'when' ngesiNgisi, kuvele kanjani?",
      options: [
        { text: 'WEN ("h" iyalahlwa)',  correct: true },
        { text: 'WEH-EN (umsindo wamabili kanye)', correct: false },
        { text: 'HOO-WEN',               correct: false },
      ],
      explanation: "'When' likhulunywa 'WEN' kuphela — le 'h' yokuqala iyalahlwa esiNgisini esikhulunywayo. Lokhu kufana ne 'what' (WUT) le 'where' (WAYR).",
    },
    {
      type: 'build_sentence',
      instruction: "Hlela amagama — ubuza isikhathi sokuvalwa kwesitolo",
      words: ['the', 'When', 'close?', 'shop', 'does'],
      correct: ['When', 'does', 'the', 'shop', 'close?'],
      translation: 'Isitolo sivalwa nini?',
    },
  ],

  rwenDialogue: {
    intro: 'Use ku-bhasi rank, awulazi isikhathi futhi i-foni yakho ifile. Ubuza umuntu osendaweni.',
    lines: [
      { speaker: 'npc', target: "Hi, can I help you?", native: 'Salibonani, ngingakusiza?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, what time is it?",      native: 'Uxolo, sesiyihola bani?',                     correct: true,  feedback: "Kuhle! 'Excuse me' + 'What time is it?' kuyimpawu yokuhlukana. Inhlonipho ifaneleka." },
          { target: "Time, please.",                     native: 'Isikhathi, ngiyacela.',                       correct: false, feedback: "Kuyacelwa kakhulu — kodwa imbuzo yakho ayikhanyiselwanga. Tsho 'What time is it?' ngokugcwele." },
          { target: "When time?",                         native: 'Nini isikhathi?',                              correct: false, feedback: "Lokhu akusi siNgisi esifaneleyo. 'When' uvame ukubuza umsebenzi (When does the bus come?). 'What time' yiyo elungele isikhathi sayo." },
        ],
      },
      { speaker: 'npc', target: "It's quarter past two.", native: 'Sesiphambili kwehola lesibili ngemizuzu eyitshumi lanhlanu (2:15).' },
      { speaker: 'user', target: "Thank you. When does the next bus come?", native: 'Ngiyabonga. Ibhasi elandelayo iza nini?' },
      { speaker: 'npc', target: "Half past two.", native: 'Sesiphakathi kwamabili lamathathu (2:30).' },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele! Wabuza ngokuhle, wabonga, futhi waphinde wabuza okwesibili. Lokhu yikho ukuxoxa ngempela.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'What time is it? (ngesiNgisi)',  correct: ['What time is it?', 'what time is it?', 'What time is it', 'what time is it'] },
      { prompt: 'When does the bus come? (ngesiNgisi)', correct: ['When does the bus come?', 'when does the bus come?', 'When does the bus come', 'when does the bus come'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Buza isikhathi imihla emithathu ehlukileyo lamuhla — kungaba kumlingane wakho, nge mirror, kumbe ubuze i-AI yakho. Tsho 'What time is it?' ngokugcwele futhi qaphela ukuthi 'when' likhulunywa WEN.",
    rwenSignoff: "Ukubuza isikhathi yikho okuncane kwesigatshana esikhulu — ngokushesha uzaphila esiNgisini.",
  },

  phase8: {
    scenario: "Your phone has died at Cape Town International airport. You need to find out: the current time, when your gate opens, and how long the flight is. Approach a passing traveller and ask politely.",
    rwenRole: "James, 35, a fellow traveller in a hurry but willing to help. He speaks British English and won't slow down — you'll need to ask the questions clearly to get useful answers.",
    successCriteria: "User asks at least two of: 'What time is it?', 'When does X happen?', 'How long does X take?'. Uses 'Excuse me' to open and 'Thank you' to close. Doesn't say 'When time?' or just 'Time?'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
