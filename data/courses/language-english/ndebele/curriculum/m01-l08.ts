import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-how-are-you-formal',
  module: 1,
  lesson: 8,
  title: 'Meeting elders / formality — Mr/Mrs/Sir/Madam',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "EsiNdebele, sihlonipha abadala kakhulu. Esikhiweni sesiNgisi, indlela yokuhlonipha ihlukile — kunjalo, kayisinjalo i-'Sir' yonke indawo. Imvelo ihambela ku-'Mr Smith' kanye 'Mrs Jones', hatshi ku-'Sir' kuphela.",
    culturalNote: "Indaba enkulu: ESiNdebele, ukuhlonipha umuntu omdala kuyenzeka ngomoya, ngezandla, ngokugoba ikhanda. ESiNgisini phesheya, ukusebenzisa 'Sir' lo-'Madam' kakhulu kuyenza ubonakale ungumlomo wesicelo, kumbe ungumuntu owahamba esikolweni esidaleni. Ku-UK, abasebenzi abazwakalayo bayasebenzisa amagama nje ('Hi Sarah'). U-'Sir' usebenza ku-customer service kuphela ('Yes sir', shop assistant ku-customer). U-'Mr/Mrs/Ms' usetshenziswa ngamagama omndeni — 'Mr Smith' — hatshi 'Mr John'. Esikolweni sezingane, abafundi babiza i-teacher 'Mr Brown' kumbe 'Miss Jones'.",
  },

  chunks: [
    {
      id: 'mr',
      target: 'Mr Smith',
      native: 'uMnumzana Smith',
      literal: 'Mr [surname]',
      emoji: '👨',
      phonetic: 'MIS-tuh-Smith',
      audioRef: null,
    },
    {
      id: 'mrs',
      target: 'Mrs Jones',
      native: 'uMama Jones (otshadileyo)',
      literal: 'Mrs [surname, married]',
      emoji: '👩',
      phonetic: 'MIS-iz-Jones',
      audioRef: null,
    },
    {
      id: 'ms',
      target: 'Ms Brown',
      native: 'uMama Brown (kuyaphephileyo)',
      literal: 'Ms [surname, neutral]',
      emoji: '👩‍💼',
      phonetic: 'MIZ-Brown',
      audioRef: null,
    },
    {
      id: 'sir',
      target: 'Sir',
      native: 'Mnumzana (customer service)',
      literal: 'Sir',
      emoji: '🎩',
      phonetic: 'SUR',
      audioRef: null,
    },
    {
      id: 'madam',
      target: 'Madam / Ma\'am',
      native: 'Nkosikazi (customer service)',
      literal: 'Madam / Ma\'am',
      emoji: '👒',
      phonetic: 'MAH-am',
      audioRef: null,
    },
    {
      id: 'pleased',
      target: 'Pleased to meet you',
      native: 'Ngiyathokoza ukukubona (formal)',
      literal: 'Pleased to meet you',
      emoji: '🤝',
      phonetic: 'pleezd-tu-MEET-yu',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'When to use Sir / Mr / Ms',
    explanation: "Imvelo: 'Sir/Madam' = ngu-customer service, kayisi yokujwayelekileyo. 'Mr/Mrs/Ms + surname' = formal context (igama lokukhulu lekhokho, hatshi 'Mr John'). Lapho umuntu ekutsho 'Just call me Sarah', usebenzise igama. Ungasebenzisi 'Sir' kumphathi wakho — uzo-feel uncomfortable ku-UK. Eskoleni: 'Mr Brown' kumbe 'Miss Jones' kuthisha — yini eyiyo. ESiNgisini saseAU, abazimnyamani le-formality kakhulu — 'mate' liyasebenza ngitsho ku-customer.",
    examples: [
      { target: 'Mr Smith (formal letter, school)',          native: 'uMnumzana Smith' },
      { target: 'Yes sir, of course (shop, customer)',        native: 'Yebo Mnumzana, kuyiyo' },
      { target: 'Just call me Sarah',                          native: '"Ngibize uSarah nje"' },
      { target: 'Pleased to meet you, Mrs Jones',              native: 'Ngiyathokoza ukukubona, Mama Jones' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa indawo le-form yokubingelela',
      pairs: [
        { left: 'Customer ekuthengisa',         right: 'Yes sir / Yes madam' },
        { left: 'Manager wakho omtsha',          right: 'Hello, [first name]' },
        { left: 'Iticha ye-zingane zakho',       right: 'Mr Brown / Miss Jones' },
        { left: 'Umngane omtsha e-pub',          right: 'Hi, [first name]' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Yi-trap question. Manager wakho omtsha eUK uthi: "Hi, I\'m Sarah." Yini eyimpendulo eqondileyo?',
      question: 'Khetha:',
      options: [
        { text: 'Hello Sarah, nice to meet you.',  correct: true },
        { text: 'Hello madam, nice to meet you.',  correct: false },
        { text: 'Yes sir.',                          correct: false },
      ],
      explanation: 'Lapho umuntu azimemezele ngegama lokuqala, sebenzisa lelo. U-"madam" lo-"sir" lapha uzobonakala uludludla, futhi ungenza i-team uncomfortable.',
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: 'Good morning, ____ Smith. How may I help you?',
      options: ['Mr', 'Sir', 'Mister'],
      correct: 'Mr',
      context: 'Usebenza ku-bank reception. Customer wakho usanda kufika — wazi igama lakhe lekhokho.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngiyathokoza ukukubona, Mama Jones',
      correct: ['Pleased to meet you, Mrs Jones', 'pleased to meet you, Mrs Jones', 'Nice to meet you, Mrs Jones', "It's a pleasure to meet you, Mrs Jones"],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['Sir', 'sir', 'help', 'How', 'I', 'can', 'you'],
      correct: ['How', 'can', 'I', 'help', 'you', 'sir'],
      translation: 'Ngingakusiza njani Mnumzana? (shop)',
    },
    {
      type: 'multiple_choice',
      instruction: 'Esikolweni se-zingane zakho eUK, ufuna ukukhuluma le-teacher. Ungayifaka ngani?',
      question: 'Khetha:',
      options: [
        { text: "Hello Mr Brown, can I have a word?",  correct: true },
        { text: 'Hello sir, can we talk?',              correct: false },
        { text: 'Hey Mr John, can we chat?',            correct: false },
      ],
      explanation: 'Esikolweni saseUK, kufanele "Mr/Mrs/Miss + surname" — hatshi "sir", hatshi "Mr [first name]".',
    },
  ],

  rwenDialogue: {
    intro: "EBristol, e-GP surgery. Usanda kufaka isicelo se-appointment ku-doctor. Receptionist uyakuhlangabeza.",
    lines: [
      { speaker: 'npc', target: "Hi there, can I take your name please?", native: 'Salibonani, nginganitsha igama lakho?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, it's Tendai Moyo. I have a 10am appointment with Dr Patel.", native: 'Yebo, ngu Tendai Moyo. Ngine-appointment ye-10am la Dr Patel.', correct: true,  feedback: 'Yikho — ufakela igama lakho lonke + i-detail ye-appointment. Ungasebenzisanga "sir"/"madam".' },
          { target: 'Yes madam, it is Tendai Moyo, madam.',                              native: 'Yebo Nkosikazi, ngu Tendai Moyo, Nkosikazi.',                            correct: false, feedback: "\"Madam\" izwakala kakhulu kuludludla — receptionist ka-NHS akudingani lokho. Sebenzisa 'thank you' kuphela." },
          { target: 'Tendai.',                                                          native: 'Tendai.',                                                              correct: false, feedback: 'Engeza isibongo — kuyabaluleka ku-medical setting.' },
        ],
      },
      { speaker: 'npc', target: 'Thanks. Take a seat — Dr Patel will call you in.', native: 'Ngiyabonga. Hlala phansi — uDr Patel uzakubiza.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thanks.',                native: 'Ngiyabonga.',                  correct: true,  feedback: 'Ifutshi, ifaneleko — ku-NHS reception.' },
          { target: 'Thank you very much madam.', native: 'Ngiyabonga kakhulu Nkosikazi.', correct: false, feedback: 'Kuphakeme kakhulu — "madam" akufanele lapha.' },
          { target: 'Yes sir.',               native: 'Yebo Mnumzana.',               correct: false, feedback: 'Awumphenduli ngo-"yes sir" lapho ekutshela ukuhlala phansi — "thanks" kuyenele.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Wenzile kahle. EUK, ukuhlonipha kuza ngomoya, hatshi ngo-"Sir/Madam" yonke indawo. Sebenzisa lokho ku-customer service kuphela.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngenhliziyo.',
    prompts: [
      { prompt: "Iticha eskoleni — uyibiza njani?",  correct: ['Mr Brown', 'Mrs Brown', 'Miss Jones', 'Ms Jones'] },
      { prompt: "'Ngiyathokoza ukukubona' (formal) ngesiNgisi",  correct: ['Pleased to meet you', 'pleased to meet you', "It's a pleasure to meet you"] },
      { prompt: "Manager othi 'Just call me Sarah' — uthi-?", correct: ['Sarah', 'Hello Sarah', 'Hi Sarah', 'Nice to meet you Sarah'] },
    ],
  },

  mission: {
    title: 'Umsebenzi',
    task: "Lamuhla, ubufakise ukuhlonipha ngomoya — ngokukhuluma kahle, ngokulalela. Hatshi ngokufaka 'Sir' ekuqaleni komutsho ngamutsho. Bona ukuthi abantu baphendula njani lapho ungasebenzisi 'Sir/Madam' ngokuphindiwe.",
    rwenSignoff: 'Take care — sizobonana kusasa.',
  },

  phase8: {
    scenario: "ELondon, eHeathrow. Usebenza njenge-customer service agent — yi-shift yakho yokuqala. Customer omdala (eminyakeni engaba ngu-70) uyakulindela e-counter, efuna usizo nge-flight ye-connection. Sebenzisa formality eqondileyo: 'sir' u-okay lapha (customer service context), kodwa hatshi-zonke-imitsho.",
    rwenRole: "Mr Harrison — UK retiree, eminyakeni engu-72. Owaseseyiqala i-international flight okokuqala kakhulu. Olomusa, kodwa odidekile nge-airport.",
    successCriteria: "Umfundi avule ngo-'Good morning sir' / 'How can I help you sir?' (KU-OKAY ku-customer service), kodwa ahlukane le 'sir' kuze kube ngamunye, asebenzise igama lekhokho lapho ekulindela ('Mr Harrison'), futhi avale nge-'Have a good flight, Mr Harrison'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
