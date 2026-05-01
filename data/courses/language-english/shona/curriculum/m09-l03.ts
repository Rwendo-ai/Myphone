import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: 'How far? — Iri kure here?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Wati wabvunza nzvimbo — zvino unoda kuziva: 'Iri kure here? Nditore tekisi here, kana ndingofamba?' MuChiNgezi, unobvunza ne 'How far?'.",
    culturalNote: "MuZimbabwe, vanhu vanotaura kuti chinhu 'chiri kure' kana chichikuda hafu yeawa kufamba; muLondon, '5 minutes' inonzwika seyekure! Cherechedza: kana munhu achiti 'just around the corner' — chinoreva kuti chiri pedzo kwazvo, kunyange uri kushandisa minute imwechete kufamba.",
  },

  chunks: [
    {
      id: 'how_far',
      target: 'How far?',
      native: 'Iri kure here?',
      literal: 'How far?',
      emoji: '📏',
      phonetic: 'HOW-FAR',
      audioRef: null,
    },
    {
      id: 'five_minutes_walk',
      target: "Five minutes' walk",
      native: 'Zvinotora maminitsi mashanu kufamba',
      literal: 'Five minutes walk',
      emoji: '🚶',
      phonetic: 'fyv-MIN-its-WAWK',
      audioRef: null,
    },
    {
      id: 'around_the_corner',
      target: 'Just around the corner',
      native: 'Pakona apa',
      literal: 'Just around the corner',
      emoji: '↩️',
      phonetic: 'JUST-uh-ROWND-thuh-COR-ner',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Distance — near and far',
    explanation: "Mubvunzo wedistance unobvunza ne 'How far?' kana 'Is it far?'. Mhinduro inogona kuva: nguva ('5 minutes'), nzira yekufamba ('a 5-minute walk'), kana mashoko anoratidza pedyo ('just around the corner', 'down the road', 'very close'). Cherechedza: 'just' inowedzera kuti 'pedyo chaipo'.",
    examples: [
      { target: 'How far?',              native: 'Iri kure here?' },
      { target: "Five minutes' walk",    native: 'Zvinotora maminitsi mashanu kufamba' },
      { target: 'Just around the corner', native: 'Pakona apa' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mibvunzo nemhinduro yedistance',
      pairs: [
        { left: 'How far?',                right: 'Iri kure here?' },
        { left: "Five minutes' walk",      right: 'Zvinotora maminitsi mashanu kufamba' },
        { left: 'Just around the corner',  right: 'Pakona apa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — unoda kuziva kana chiri kure',
      prompt: 'Iri kure here?',
      correct: [
        'How far?',
        'How far is it?',
        'Is it far?',
        'how far?',
        'How far is it from here?',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — chiri pedyo zvakanyanya',
      prompt: 'Pakona apa',
      correct: [
        'Just around the corner',
        'Around the corner',
        'just around the corner',
        "It's just around the corner",
        'Just round the corner',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro — unotaura kuti zvinotora maminitsi mashanu',
      words: ["minutes'", 'Five', 'walk'],
      correct: ['Five', "minutes'", 'walk'],
      translation: 'Zvinotora maminitsi mashanu kufamba',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa mubvunzo — unoda kuziva distance',
      sentence: '____ far is the station?',
      options: ['How', 'Where', 'When'],
      correct: 'How',
      context: "Mibvunzo yedistance inotanga ne 'How far'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza mhinduro yakanakira — pa-airport, ungade kuziva nguva',
      question: 'Munhu akati: "It\'s a 20-minute walk." Kureva chii?',
      options: [
        { text: 'Zvinotora maminitsi makumi maviri kufamba',    correct: true },
        { text: 'Zvinotora maawa makumi maviri',                  correct: false },
        { text: 'Iri kuruboshwe',                                   correct: false },
      ],
      explanation: "'A 20-minute walk' = nguva yekufamba. Pa-20 minutes, kazhinji ungafunge kutora bus kana tube panzvimbo yekufamba.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-conference muLondon. Hotera yako iri pamwe — usingazvizivi kana yacho iri kure. Bvunza mumwe.",
    lines: [
      { speaker: 'npc', target: "Need a hand?", native: 'Unoda rubatsiro here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. How far is the Premier Inn from here?", native: 'Hongu, ndapota. Premier Inn iri kure here kubva pano?', correct: true,  feedback: 'Wakwanisa — wakabvunza nzvimbo nedistance pamwe chete.' },
          { target: "Hotel?",                                                  native: 'Hotera?',                                                correct: false, feedback: 'Pfupi zvakanyanya — bvunza mubvunzo wakakwana.' },
          { target: "I am tired.",                                              native: 'Ndaneta.',                                                correct: false, feedback: 'Hauna kubvunza — wakaratidza maitiro chete.' },
        ],
      },
      { speaker: 'npc', target: "Oh, it's just around the corner — about a 3-minute walk.", native: 'Aa, iri pakona apa — maminitsi matatu chete kufamba.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Just around the corner' — kana wanzwa mashoko aya, hauchadi tekisi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'How far? (in English)',                correct: ['How far?', 'How far', 'Is it far?', 'how far?', 'How far is it?'] },
      { prompt: 'Just around the corner (in English)', correct: ['Just around the corner', 'Around the corner', "It's just around the corner", 'just around the corner'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, sarudza nzvimbo mbiri munharaunda mako — sezvinoita shop nepost office. Bvunza muChiNgezi: 'How far is the ___?' Wozopindura wega: 'It's a ___-minute walk' kana 'It's just around the corner'.",
    rwenSignoff: "Asingabvunzi distance, anomhanya kuwana tekisi pasina kuda. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at a hotel reception in Edinburgh. You want to walk to the National Museum of Scotland but you're not sure if it's walkable in the rain. Ask the receptionist how far it is and decide whether to walk or take a cab.",
    rwenRole: "Catriona, 41, hotel receptionist. Patient and chatty, gives helpful estimates with options ('5 minutes if you cut through the park', 'a tenner in a cab'). Scottish English.",
    successCriteria: "User asks 'How far is ___?' or 'Is it far?', understands the time/distance answer, decides ('I'll walk' / 'I'll get a cab'), and thanks her.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
