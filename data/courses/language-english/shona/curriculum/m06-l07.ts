import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Months & Seasons — Mwedzi neMwaka',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Mwedzi: January, February, March... December. Mwaka muChiNgezi i ina: spring, summer, autumn, winter. Asi muZimbabwe — mwaka wedu i'rainy season' uye 'dry season'!",
    culturalNote: "MuChiShona mwedzi anonzi 'Ndira' (January), 'Kukadzi' (February). MuChiNgezi anobva muRoman calendar — 'January' kubva ku Janus (god yedoors), 'July' kubva ku Julius Caesar. Tsika huru: muNyika dzakapinda Equator (Zimbabwe), summer ndiyo 'rainy season' (Nov-March), winter i 'dry season' (May-Aug). Asi muUSA neUK, mwaka unotanga zvakasiyana — 'summer = June-August'. Pakutaura ne shamwari yeChiNgezi yekunze, tsanangura: 'In Zimbabwe, our summer is December.'",
  },

  chunks: [
    {
      id: 'first_months',
      target: 'January, February, March, April',
      native: 'Ndira, Kukadzi, Kurume, Kubvumbi',
      literal: 'Jan-Apr',
      emoji: '🗓️',
      phonetic: 'JAN-yoo-eh-ree, FEB-roo-eh-ree, march, AY-pril',
      audioRef: null,
    },
    {
      id: 'rainy_season',
      target: 'Rainy season',
      native: 'Mwaka wemvura',
      literal: 'Rainy season',
      emoji: '🌧️',
      phonetic: 'RAY-nee-SEE-zn',
      audioRef: null,
    },
    {
      id: 'summer_winter',
      target: 'Summer / Winter',
      native: 'Zhizha / Chando',
      literal: 'Summer / Winter',
      emoji: '☀️❄️',
      phonetic: 'SUM-er / WIN-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Calendar — months and seasons',
    explanation: "Mwedzi anoshanda ne 'in': 'in January', 'in March'. Mwaka anoshanda ne 'in': 'in summer', 'in winter'. Cherechedza — kana uri kutaura zuva chaiyo unoshandisa 'on': 'on January 5th'. Mwedzi anonyorwa neBig letter — 'July' kwete 'july'. Mwaka asi haunyorwe neBig letter (kunze kwekuti pakutanga pa-chirevo).",
    examples: [
      { target: 'My birthday is in May',          native: 'Zuva rangu rekuzvarwa rinopfumbira muna May' },
      { target: 'It rains in summer in Zimbabwe', native: 'Munonaya mvura muzhizha muZimbabwe' },
      { target: 'In December, it is hot',         native: 'Muna December, kunopisa' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mwedzi nemwaka',
      pairs: [
        { left: 'January',     right: 'Ndira' },
        { left: 'July',        right: 'Chikunguru' },
        { left: 'Summer',      right: 'Zhizha' },
        { left: 'Rainy season', right: 'Mwaka wemvura' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Zuva rangu rekuzvarwa rinopfumbira muna Kurume',
      correct: ['My birthday is in March', 'My birthday is in March.', 'My birthday is March'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza — chii chinoshanda?',
      sentence: 'My birthday is ____ October.',
      options: ['on', 'in', 'at'],
      correct: 'in',
      context: "Pamwedzi (mwedzi wose) — shandisa 'in': 'in October'. 'On' inoshanda chete kana wapa zuva chaiyo: 'on October 5th'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka — uri kutsanangura kuZimbabwe muzhizha',
      words: ['summer', 'In', 'is', 'December.', 'our'],
      correct: ['In', 'Zimbabwe', 'our', 'summer', 'is', 'December.'],
      translation: 'KuZimbabwe zhizha redu i December.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Munhongedzira mvura muna January',
      correct: ['It rains in January', 'It rains in January.', 'In January it rains'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura mwaka muZimbabwe',
      prompt: 'KuZimbabwe tine mwaka wemvura nemwaka wechando',
      correct: ['In Zimbabwe we have a rainy season and a dry season', 'Zimbabwe has a rainy season and a dry season', 'In Zimbabwe we have a rainy season and a dry season.'],
    },
  ],

  rwenDialogue: {
    intro: 'Wapinda muHarare International Festival. Ushamwari hwekutanga hweUS anokumbira mwedzi wako wekuzvarwa.',
    lines: [
      { speaker: 'npc', target: "When's your birthday?", native: 'Iri zuva rako rekuzvarwa nguva ipi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's in October.",                              native: 'Riri muna Gumiguru.',                              correct: true,  feedback: "Wakwanisa — 'in October' inopa mwedzi pasina zuva chaiyo. Yakakwana pa-event yekutanga." },
          { target: "Birthday October.",                                native: 'Birthday Gumiguru.',                                correct: false, feedback: "Pfupi zvakanyanya uye haina 'in' kana 'is'. Wedzera: \"It's in October.\"" },
          { target: "On October.",                                      native: 'Pa Gumiguru.',                                       correct: false, feedback: "'On' inoshanda chete kana watopa zuva: 'on October 5th'. Mwedzi wega — shandisa 'in October'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'In' + mwedzi inotaurira chinhu chega — kana wagona iyi yauri kunzwa zvakanaka mu-calendar yeChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'In December (in English)', correct: ['In December', 'in December'] },
      { prompt: 'Rainy season (in English)', correct: ['Rainy season', 'rainy season', 'Wet season', 'wet season'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: 'Nyora pamoyo wako: "My birthday is in ___." Wedzera mwedzi wakanaka wakawanikwa unoda — uye taura ne shamwari kakati katatu nhasi.',
    rwenSignoff: 'Mwedzi unotaura chinhu — kuzvarwa, mhuri, mwaka. Tichaonana mangwana.',
  },

  phase8: {
    scenario: "You're at an English-language community event in Harare and people are sharing birth months and zodiac signs. Tell people your birth month, ask theirs, and explain how Zimbabwean seasons differ from northern hemisphere ones.",
    rwenRole: "Emma, 28, an Australian volunteer who is curious about Zimbabwean seasons. She'll share her own birth month (March, which is autumn for her in Australia).",
    successCriteria: "User states their birth month using 'in' + Month (capitalised), asks Emma's birth month, and mentions at least one fact about Zimbabwean seasons (e.g., 'our summer is December' or 'rainy season is November to March').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
