import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: 'Emergency phrases — Mhoro mhinduro',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Tinotarisira kuti hauzombozvishandisi mashoko aya — asi unofanira kuaziva. Kana kune njodzi, mashoko anofanira kubuda nokukurumidza.",
    culturalNote: "MuChiShona tinodaidzira 'Ndibatsireiwo!' — locative inotaridza kupinda kwetsika. MuChiNgezi 'Help!' chete inoshanda — pfupi, yakasimba, inonzwika kure. Kana ndizvo zvauri kuda, taura zvakanaka uye nokukurumidza. Hapana hutsika hwekudzivirira kana paine njodzi.",
  },

  chunks: [
    {
      id: 'help',
      target: 'Help!',
      native: 'Ndibatsireiwo!',
      literal: 'Help-me-please!',
      emoji: '🚨',
      phonetic: 'HELP',
      audioRef: null,
    },
    {
      id: 'call_the_police',
      target: 'Call the police',
      native: 'Daidza mapurisa',
      literal: 'Call the police',
      emoji: '🚓',
      phonetic: 'KAWL-thuh-poh-LEES',
      audioRef: null,
    },
    {
      id: 'i_need_a_doctor',
      target: 'I need a doctor',
      native: 'Ndinoda chiremba',
      literal: 'I need a doctor',
      emoji: '🚑',
      phonetic: 'AY-need-uh-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative urgency',
    explanation: "Mibvunzo yenjodzi inenge ipfupi uye direct. 'Help!' inomira yega — hapana 'please'. 'Call the police' inotanga nechiitwa ('call') — kuraira chete chete. Kana waine nguva, wedzera 'now' kana 'quickly': 'Call an ambulance, quickly!'.",
    examples: [
      { target: 'Help! Help me!',     native: 'Ndibatsireiwo! Ndibatsireiwo!' },
      { target: 'Call an ambulance.', native: 'Daidza ambulance.' },
      { target: 'I need a doctor — now.', native: 'Ndinoda chiremba — iye zvino.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Help!',             right: 'Ndibatsireiwo!' },
        { left: 'Call the police',   right: 'Daidza mapurisa' },
        { left: 'I need a doctor',   right: 'Ndinoda chiremba' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pane chinokutyisa',
      prompt: 'Ndibatsireiwo!',
      correct: ['Help!', 'Help me!', 'help!', 'Help', 'Help me'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kudaidza mapurisa',
      sentence: '____ the police!',
      options: ['Call', 'Tell', 'Bring'],
      correct: 'Call',
      context: "MuChiNgezi 'Call' inoshandiswa kana uchikumbira munhu kuti afonere mumwe (kunyange police).",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kuda chiremba pakarepo',
      words: ['need', 'I', 'doctor', 'a'],
      correct: ['I', 'need', 'a', 'doctor'],
      translation: 'Ndinoda chiremba',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuda ambulance',
      prompt: 'Daidza ambulance!',
      correct: ['Call an ambulance!', 'Call an ambulance', 'call an ambulance!', 'Call the ambulance!'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinoda chiremba — iye zvino',
      correct: ['I need a doctor — now', 'I need a doctor now', 'I need a doctor, now', 'I need a doctor now.', 'I need a doctor right now'],
    },
  ],

  rwenDialogue: {
    intro: "Mubatanidzwa wako akatsemuka pasi — anenge asingakwanisi kufamba. Iwe uri muLondon, hauzivi mumwe munhu. Daidza rubatsiro.",
    lines: [
      { speaker: 'npc', target: "999 emergency, what's your emergency?", native: '999 emergency, kuneiko?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Help! I need a doctor. My friend is hurt.", native: 'Ndibatsireiwo! Ndinoda chiremba. Shamwari yangu yakuvara.', correct: true,  feedback: 'Wakwanisa — pfupi, dzakajeka, uye dzine zvakakosha zvose.' },
          { target: "Hello, how are you?",                          native: 'Mhoro, makadii?',                                          correct: false, feedback: 'Iri inguva yenjodzi — siya hutsika hwekutaurirana.' },
          { target: "Excuse me, please...",                          native: 'Pamusoroi, ndapota...',                                    correct: false, feedback: "Nguva yatakukurudzira pano — taura 'Help!' nokukurumidza." },
        ],
      },
      { speaker: 'npc', target: "OK, where are you?", native: 'OK, uri kupi?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Pa-emergency taura mashoko mashoma asi anokosha — 'Help', 'doctor', 'hurt'. Hutsika unozodzoka panoperera njodzi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Help! (in English)',           correct: ['Help!', 'Help me!', 'Help', 'help!'] },
      { prompt: 'I need a doctor (in English)', correct: ['I need a doctor', 'I need a doctor.', 'I need a doctor!', 'i need a doctor'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Iye zvino — pasina kutarisa — taura mashoko matatu aya pamuromo: 'Help!', 'Call the police', 'I need a doctor'. Tinotarisira kuti hauzombozvishandisi, asi anofanira kunge ari paruoko.",
    rwenSignoff: "Famba zvakanaka — chenjera nzira.",
  },

  phase8: {
    scenario: "You're abroad in London on a work trip when your travel companion suddenly has a serious allergic reaction in a restaurant. You need to call emergency services (999) and explain the situation in clear English fast.",
    rwenRole: "999 emergency dispatcher, professional and calm. Will guide you with questions: what's the emergency, where are you, is the person breathing. Speaks clear British English but quickly.",
    successCriteria: "User opens with 'Help!' or states the emergency immediately. Uses 'I need a doctor' / 'Call an ambulance' / 'My friend is sick'. Stays focused, gives location when asked, doesn't waste words on greetings or apologies.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
