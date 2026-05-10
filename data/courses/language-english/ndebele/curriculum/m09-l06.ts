import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'Workplace politeness — "Would you mind..."',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Yikho lapha lapho i-grammar ye-UK ihlangabezana lengozi: 'Would you mind closing the door?' — ngokwamagama ahlanganene, ubuza umuntu UMA ENGAKHATHAZEKI. Indlela yokuphendula yilula — kodwa idididisa: ngokuthi 'No, not at all' = YEBO, NGIZAKWENZA. Lokhu kuyaphendula okungaphezulu kwabantu abatsha.",
    culturalNote: "Esikhiweni sesiNdebele, uthi 'awusivulele isango' — i-direct request. Ku-UK i-direct request kungaqakeleka ngokwamandla — kungenza umuntu azwakale enikhomzelele. 'Would you mind' yi-extra padding evumayo umuntu ukuzisa indlela yokwala (theoretically — kuyahamba kungaqondisi). Ku-UK i-extra-polite kuyaphezulu kwe-US — i-Americans bayi-direct kakhulu kakhudlwana. Kunzima okukhulu: ungahlathululi 'Would you mind' lokuthi 'Yes' uma ufuna ukuvuma — kuyophendula 'YES, NGIYAKHATHAZEKA, ANGIZAKWENZA'. Ngakho ezimweni zonke uma uvuma uthi 'Of course' / 'Not at all' / 'Sure, no problem'.",
  },

  chunks: [
    {
      id: 'would_you_mind',
      target: 'Would you mind...?',
      native: 'Ungakhathazeka...?',
      literal: 'would / you / mind',
      emoji: '🙇',
      phonetic: 'WUUD-yoo-MYND',
      audioRef: null,
    },
    {
      id: 'closing_the_door',
      target: 'closing the door',
      native: 'ukuvala isivalo',
      literal: 'close + ing',
      emoji: '🚪',
      phonetic: 'KLOH-zing-thuh-DOR',
      audioRef: null,
    },
    {
      id: 'not_at_all',
      target: 'Not at all',
      native: '"Hatshi nakancane" = YEBO, NGIZAKWENZA',
      literal: 'not / at / all',
      emoji: '👍',
      phonetic: 'NOT-at-AWL',
      audioRef: null,
    },
    {
      id: 'of_course',
      target: 'Of course',
      native: 'Yebo, ngokwemvelo',
      literal: 'of / course',
      emoji: '✅',
      phonetic: 'uv-KORS',
      audioRef: null,
    },
    {
      id: 'sorry_to_bother',
      target: 'Sorry to bother you',
      native: 'Uxolo ngiyakukhathaza',
      literal: 'sorry / to / bother / you',
      emoji: '😅',
      phonetic: 'SOR-ee-tu-BO-thur-yoo',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Would you mind' + verb-ing — ukucela kahle kakhulu",
    explanation: "I-formula: 'Would you mind' + verb+ing (closing, sending, helping, waiting). HATSHI 'Would you mind to close' — kalisetshenziswa nje. Yenze: 'Would you mind closing the door?' / 'Would you mind sending me the file?' / 'Would you mind waiting five minutes?'. Indlela yokuphendula NXA UVUMA: 'No, not at all' / 'Of course not' / 'No problem'. NXA UNGAVUMI: 'Actually, I'm in a rush' / 'I'm sorry, I can't right now'. I-trick: i-grammar yenza i-'YEBO' ibe ngu-'NO' ngenxa yokuthi ubuze 'ungakhathazeka?' — ungakhathazeki = ngingakwenza.",
    examples: [
      { target: "Would you mind closing the window? — Not at all.",         native: 'Ungakhathazeka ukuvala ifasitela? — Hatshi nakancane (yebo, ngizakwenza).' },
      { target: "Would you mind sending me the report? — Of course not.",   native: 'Ungakhathazeka ungithumelele umbiko? — Yebo, ngokwemvelo.' },
      { target: "Sorry to bother you — could I ask a question?",            native: 'Uxolo ngiyakukhathaza — ngingabuza umbuzo?' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Indlela yokuphendula',
      question: "Umphathi wakho uthi: 'Would you mind staying late tonight?' Ufuna ukuvuma. Yiyo iphi impendulo eqondileyo?",
      options: [
        { text: "Not at all.",                  correct: true },
        { text: "Yes.",                          correct: false },
        { text: "Yes, I mind very much.",        correct: false },
      ],
      explanation: "I-grammar yi-tricky lapha. 'Would you mind' = 'Ungakhathazeka?'. Uma uvuma: 'No, not at all' (= angizukukhathazeka). Uma uthi 'Yes' — kuyiphi 'YES, ngiyakhathazeka' = ANGIZUKWENZA. Lokhu kungafuni okufunayo!",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ungakhathazeka ukungilinda imizuzu emihlanu?',
      correct: ['Would you mind waiting five minutes?', 'Would you mind waiting 5 minutes?', 'Would you mind waiting for five minutes?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama',
      words: ['mind', 'Would', 'closing', 'door?', 'the', 'you'],
      correct: ['Would', 'you', 'mind', 'closing', 'the', 'door?'],
      translation: 'Ungakhathazeka ukuvala isivalo?',
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala — sebenzisa indlela elungelayo (verb+ing)',
      sentence: 'Would you mind ______ me the file?',
      options: ['send', 'sending', 'to send'],
      correct: 'sending',
      context: "Emva kwe-'Would you mind' kufanele kuze i-'verb + ing' — sending, closing, waiting, helping. Hatshi 'to send' / 'send'.",
    },
  ],

  rwenDialogue: {
    intro: "Usemsebenzini, kupholile kakhulu kepha umqaphi (supervisor) wakho, uTom, uyahamba — ufuna ukukucela ulungiselele inthuthu yangolwesibili.",
    lines: [
      { speaker: 'npc', target: "Hi — sorry to bother you. Would you mind covering reception for an hour tomorrow morning?", native: 'Salibonani — uxolo ngiyakukhathaza. Ungakhathazeka ukuthatha indawo yami ku-reception ihora elilodwa kusasa ekuseni?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Not at all — what time?",                native: "Hatshi nakancane — yisikhathi sini?", correct: true,  feedback: "Kuhle — uphendule ngokuvuma ngendlela elungile, wabuza umbuzo olulandayo. Ngokuhleliwe-hleliwe." },
          { target: "Yes, I mind.",                            native: 'Yebo, ngiyakhathazeka.',              correct: false, feedback: "'Yes' lapha = 'ANGIZUKWENZA'. Uma ufuna ukuvuma kufanele uthi 'Not at all' / 'Of course not'." },
          { target: 'Of course not. What time should I come?', native: 'Yebo, ngokwemvelo. Ngiza ngabani isikhathi?', correct: true, feedback: "Lapha futhi — i-'Of course not' = 'ngiyakwenza ngentokozo'. Wabuza i-time futhi — ihahole emhle." },
        ],
      },
      { speaker: 'npc', target: "9 to 10. Thanks so much.", native: 'Phakathi kuka-9 lo-10. Ngiyabonga kakhulu.' },
      { speaker: 'rwen', rwenLine: "Wabona indlela: i-'Not at all' lo-'Of course not' bawodwa kanye, basho 'YEBO'. I-grammar idididayo, kodwa namhlanje uyiqondile.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'Ungakhathazeka ukungithumelela i-file?' ngesiNgisi", correct: ['Would you mind sending me the file?', 'Would you mind sending me the file'] },
      { prompt: "Indlela yokuphendula 'Yebo, ngiyakwenza' (ku-'Would you mind?')", correct: ['Not at all', 'Not at all.', 'Of course not', 'Of course not.', 'No problem'] },
      { prompt: "Bhala 'Uxolo ngiyakukhathaza' ngesiNgisi", correct: ['Sorry to bother you', 'Sorry to bother you.'] },
    ],
  },

  mission: {
    title: 'Sebenzisa lokhu lamuhla',
    task: "Khetha umuntu omunye namhlanje (umngane, umndeni, kumbe i-colleague) — ucele kuye into encane ngo-'Would you mind...?'. Bukela impendulo. Khangela ukuthi ungazwisisa indlela yokuphendula yini.",
    rwenSignoff: 'I-grammar yokucela ngokuhlonipha — yiyo eyenza umuntu axhumane ngokukhululekileyo emsebenzini.',
  },

  phase8: {
    scenario: "Usemsebenzini, ufuna ukucela izinto ezimbalwa kuye-colleague: (1) ukukhanyiselwa ngendlela yokufaka i-printer credit, (2) ukushintshana izimo ze-shift ngolwesibili. I-Rwen yi-colleague — izaphendula, izabuyisa imibuzo. Sebenzisa 'Would you mind' kabili.",
    rwenRole: "Mark — i-colleague yakho, useminyakeni ye-late 30s, ulomusa kakhulu, oseneminyaka eminengi e-care home.",
    successCriteria: "Umfundi asebenzise 'Would you mind' + verb+ing (akusilo to-form). Aphendule kahle uma i-Rwen ibhalile 'Would you mind...?' (akafake 'Yes' uma evuma — afake 'Not at all' / 'Of course not'). Asebenzise 'Sorry to bother you' okungenani kanye.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
