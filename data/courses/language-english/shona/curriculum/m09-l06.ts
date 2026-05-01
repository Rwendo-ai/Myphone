import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'At the airport — Panhandare',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Panhandare — pano ndipo paunoda ChiNgezi chakanyanya. 'Boarding pass', 'departure gate', 'customs' — mashoko aya anokushandurira pa-Heathrow, pa-JFK, pa-OR Tambo. Pasina iwo, hauwane ndege yako.",
    culturalNote: "Panhandare yeChiNgezi, mashoko mazhinji haatauriwi neShona — anouya seakajairwa: 'gate', 'check-in', 'security', 'customs'. Cherechedza: pa-Heathrow nepamwe panhandare yeUK, vamwe vanotaura nehupfumi (kunge vagari vanga vasingakushandike), asi havasi vasiri vanhu — bvunza mubvunzo wakajeka, vanotipa mhinduro.",
  },

  chunks: [
    {
      id: 'boarding_pass',
      target: 'Boarding pass',
      native: 'Tikiti rekupinda',
      literal: 'Boarding pass',
      emoji: '🛂',
      phonetic: 'BOR-ding-PAS',
      audioRef: null,
    },
    {
      id: 'departure_gate',
      target: 'Departure gate',
      native: 'Pekubudira',
      literal: 'Departure gate',
      emoji: '🚪',
      phonetic: 'di-PAR-cher-GAYT',
      audioRef: null,
    },
    {
      id: 'customs',
      target: 'Customs',
      native: 'Customs',
      literal: 'Customs',
      emoji: '🛃',
      phonetic: 'KUS-tums',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Air travel vocabulary',
    explanation: "Mashoko enhandare aya akakosha kunzwisisa pose paunenge wakanyora ticket muChiNgezi. 'Boarding pass' = chinhu chaunoratidza kuti uri kupinda; 'gate' kana 'departure gate' = pekubudira; 'customs' = pekupinda nyika nezvinhu zvako. Mubvunzo wenharaunda inoshanda: 'Where is gate ___?' — saka unowanzika sezvauchaita muModule 9 Lesson 1.",
    examples: [
      { target: 'Boarding pass',    native: 'Tikiti rekupinda' },
      { target: 'Departure gate',   native: 'Pekubudira' },
      { target: 'Customs',           native: 'Customs' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko enhandare',
      pairs: [
        { left: 'Boarding pass',  right: 'Tikiti rekupinda' },
        { left: 'Departure gate', right: 'Pekubudira' },
        { left: 'Customs',         right: 'Pekutarisa zvinhu' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kubvunza pekubudira',
      prompt: 'Pekubudira gate 25 ndepapi?',
      correct: [
        'Where is gate 25?',
        'Where is the departure gate 25?',
        'Where is gate twenty-five?',
        'where is gate 25?',
        'Where is the gate 25?',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wakaratisa boarding pass yako',
      prompt: 'Heyi tikiti rangu rekupinda.',
      correct: [
        'Here is my boarding pass.',
        "Here's my boarding pass.",
        'Here is my boarding pass',
        "here's my boarding pass.",
        'This is my boarding pass.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo — uri kutsvaga pekubudira',
      words: ['the', 'gate', 'is', 'Where', 'departure'],
      correct: ['Where', 'is', 'the', 'departure', 'gate'],
      translation: 'Pekubudira ndepapi?',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri pa-customs',
      sentence: "Do you have anything to ____?",
      options: ['declare', 'discover', 'desire'],
      correct: 'declare',
      context: "Pa-customs, vanobvunza 'Do you have anything to declare?' = Une chinhu chiri kuda kuratidzwa here? (e.g. mari yakawanda, zvekudya).",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wakapotsa connection yako',
      prompt: 'Ndapotsa connection yangu.',
      correct: [
        "I missed my connection.",
        "I've missed my connection.",
        "I missed my connecting flight.",
        "i missed my connection.",
      ],
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-Heathrow Terminal 5. Wakapotsa connection yako kuenda Harare nekuda kweflight yokutanga yakanonoka. Bvunza gate agent.",
    lines: [
      { speaker: 'npc', target: "Hi there, can I help?", native: 'Hesi, ndingakubatsira here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. I missed my connection to Harare. Where do I go?", native: 'Hongu, ndapota. Ndapotsa connection yangu kuenda Harare. Ndinoenda kupi?', correct: true,  feedback: 'Wakwanisa — wakatsanangura dambudziko nemubvunzo wenzvimbo pamwe chete.' },
          { target: "Plane gone.",                                                            native: 'Ndege yaenda.',                                                                correct: false, feedback: 'Pfupi zvakanyanya — anoda kuziva kuti chii chinodikanwa.' },
          { target: "Help me Harare.",                                                          native: 'Ndibatsire Harare.',                                                            correct: false, feedback: "Tsanangura zvine hutsika: 'I missed my connection to Harare.'." },
        ],
      },
      { speaker: 'npc', target: "Oh no — let me check. The next flight is in 4 hours. Take this voucher to gate 18.", native: 'Aa nhamo — ndoda kutarisa. Ndege inotevera iri pamaawa mana. Tora chiratidzo ichi enda ku-gate 18.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Pa-Heathrow, kunyange kuri nguva yekuneta, mubvunzo wakanaka unokuponesa. 'I missed my connection' — chiratidzo chekupedza dambudziko.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Boarding pass (in English)',  correct: ['Boarding pass', 'boarding pass', 'My boarding pass'] },
      { prompt: 'Where is the gate? (in English)', correct: ['Where is the gate?', 'Where is the departure gate?', 'where is the gate?', 'Where is gate ___?'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti uri panhandare. Taura pamuromo muChiNgezi: 'Here is my boarding pass.' → 'Where is the departure gate?' → 'I have nothing to declare.' Pasina kutarisa kumashure.",
    rwenSignoff: "Anokwanisa kufamba pa-Heathrow asingashushikani, anokwanisa kufamba pose. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're stranded at Heathrow Terminal 5 because your inbound BA flight from Cape Town landed late and you've missed your connection to Harare. Find a gate agent and explain the situation, ask what to do, and find out the next flight.",
    rwenRole: "David, 33, BA gate agent at T5. Calm, problem-solver, asks for your boarding pass. Speaks clear British English.",
    successCriteria: "User explains 'I missed my connection to Harare', shows 'my boarding pass', asks about the next flight or where to go, and follows the agent's instruction.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
