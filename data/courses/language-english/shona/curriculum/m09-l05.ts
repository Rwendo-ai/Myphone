import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Buying a ticket — Kutenga tikiti',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Wakanga uri pa-station — chitima chinosvika maminitsi makumi maviri. Unoda kutenga tikiti. MuChiNgezi, mashoko ari nyore: 'One ticket to ___, please. Round trip. How much?'.",
    culturalNote: "MuZimbabwe, kombi unobhadhara mukati. MuUK, MuUS, kana muSouth Africa, train tikiti unotenga pamberi pekupinda — pa-machine kana paticket counter. Cherechedza mashoko: 'one-way' = kuenda chete, 'return' (UK) kana 'round trip' (US) = kuenda nekudzoka. Mashoko aya akakosha pa-station kuti urege kutenga tikiti yakaipa.",
  },

  chunks: [
    {
      id: 'one_ticket_to_harare',
      target: 'One ticket to Johannesburg, please.',
      native: 'Tikiti rimwe rekuenda kuJohannesburg, ndapota.',
      literal: 'One ticket to Johannesburg, please.',
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-jo-HAN-es-burg-PLEEZ',
      audioRef: null,
    },
    {
      id: 'round_trip',
      target: 'A return, please.',
      native: 'Yekuenda nekudzoka, ndapota.',
      literal: 'A return, please.',
      emoji: '🔁',
      phonetic: 'uh-ree-TURN-PLEEZ',
      audioRef: null,
    },
    {
      id: 'how_much',
      target: 'How much is it?',
      native: 'Marii?',
      literal: 'How much is it?',
      emoji: '💷',
      phonetic: 'how-MUTCH-iz-it',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Travel transactions',
    explanation: "Pakutenga tikiti, structure inotevera: (1) NHAMBA + 'ticket(s) to' + NZVIMBO + 'please' = 'Two tickets to Cape Town, please.' (2) RUDZI: 'one-way' (kuenda chete) kana 'return' / 'round trip' (kuenda nekudzoka). (3) MARII: 'How much is it?'. Cherechedza UK vs US: 'return' (UK) = 'round trip' (US) — zvose zvinoshanda.",
    examples: [
      { target: 'One ticket to Johannesburg, please.', native: 'Tikiti rimwe rekuenda kuJohannesburg, ndapota.' },
      { target: 'A return, please.',                    native: 'Yekuenda nekudzoka, ndapota.' },
      { target: 'How much is it?',                      native: 'Marii?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ekutenga tikiti',
      pairs: [
        { left: 'One ticket to ___, please', right: 'Tikiti rimwe rekuenda ku___' },
        { left: 'A return, please',           right: 'Yekuenda nekudzoka' },
        { left: 'How much is it?',             right: 'Marii?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri pa-Cape Town station',
      prompt: 'Tikiti rimwe rekuenda kuJohannesburg, ndapota.',
      correct: [
        'One ticket to Johannesburg, please.',
        'A ticket to Johannesburg, please.',
        'One ticket to Johannesburg please.',
        'one ticket to Johannesburg, please.',
        'Could I have one ticket to Johannesburg, please?',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — unoda kuenda nekudzoka',
      prompt: 'Yekuenda nekudzoka, ndapota.',
      correct: [
        'A return, please.',
        'Return, please.',
        'A round trip, please.',
        'Round trip, please.',
        'a return, please.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — uri kubvunza mutengo',
      words: ['it', 'is', 'much', 'How'],
      correct: ['How', 'much', 'is', 'it'],
      translation: 'Marii?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — unotenga matikiti maviri',
      prompt: 'Matikiti maviri ekuenda kuLondon, ndapota.',
      correct: [
        'Two tickets to London, please.',
        'Two tickets to London please.',
        'Could I have two tickets to London, please?',
        'two tickets to London, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — pa-counter, anobvunza kuti mhando ipi',
      sentence: "Is that a single or a ____?",
      options: ['return', 'taxi', 'station'],
      correct: 'return',
      context: "MuUK English, 'single' = one-way, 'return' = round trip.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-Cape Town railway station. Unoda kuenda kuJohannesburg uchidzokera mangwana. Tenga tikiti.",
    lines: [
      { speaker: 'npc', target: "Hi, where to?", native: 'Hesi, unoenda kupi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "One ticket to Johannesburg, please. A return.", native: 'Tikiti rimwe rekuenda kuJohannesburg, ndapota. Yekuenda nekudzoka.', correct: true,  feedback: 'Wakwanisa — wakapa nzvimbo nemhando pa-mutsetse mumwe.' },
          { target: "Joburg.",                                              native: 'Joburg.',                                                          correct: false, feedback: "Pfupi zvakanyanya — taura kuti 'one ticket' uye 'return'." },
          { target: "Money.",                                                 native: 'Mari.',                                                            correct: false, feedback: "Hauna kutaura nzvimbo. Tanga ne 'One ticket to ___'." },
        ],
      },
      { speaker: 'npc', target: "Right — single or return?", native: 'Saka — single kana return?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A return, please. How much is it?", native: 'Yekuenda nekudzoka, ndapota. Marii?', correct: true,  feedback: 'Wakwanisa — wakatungamira nemubvunzo wemari.' },
          { target: "Return.",                                  native: 'Yekuenda nekudzoka.',                  correct: false, feedback: "Wedzera 'please' uye bvunza mari pamutsara umwe chete." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'One ticket to ___, return, please' — mutsetse uyu unokuwana tikiti pose paunenge wakananga ku-station.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'A return, please (in English)',         correct: ['A return, please.', 'A return, please', 'Return, please.', 'A round trip, please.', 'a return, please.'] },
      { prompt: 'How much is it? (in English)',           correct: ['How much is it?', 'How much is it', 'How much?', 'how much is it?', 'What is the price?'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti uri pa-Cape Town station. Itira hurukuro yose pamuromo: 'One ticket to Johannesburg, please. A return. How much is it?'. Pasina kutarisa kumashure.",
    rwenSignoff: "Asingadi kunzwa zvinotaurwa kuticket counter, anosvika kunhandare nemarara. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at the Shosholoza Meyl ticket counter at Cape Town station. You need a return ticket to Johannesburg, leaving today and coming back next Friday. Buy it from the agent.",
    rwenRole: "Nomvula, 45, ticket agent. Efficient, asks short follow-up questions (class, time, return date). Speaks clear South African English.",
    successCriteria: "User asks for 'one ticket to Johannesburg', specifies 'return' or 'round trip', asks 'How much is it?', confirms a return date when prompted, and thanks her.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
