import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10',
  module: 9,
  lesson: 10,
  title: 'Workplace conversation — putting it together',
  estimatedMinutes: 8,
  xpReward: 40,

  hook: {
    rwenLine: "Manje siyabuthelana — zonke izinto ozifundileyo ngomsebenzi: ukuzichaza ('I'm a nurse'), ukubuza imibuzo ('Could you...?'), ukuhlonipha ngokucela ('Would you mind...?'), ukucela usizo ('I want to make sure...'), kanye lokukhuluma ngempilo ('I'm feeling burnt out'). Ku-conversation eyodwa, kuhambisana konke.",
    culturalNote: "Lokhu yi-skill yokugcina ye-module. Ungazinkanyezi yini ngezicaba ezahlukileyo: ukuzichaza, ukucela ngokuhlonipha, ukubuza imibuzo elungile, ukuvuma ukuncipha amandla. I-UK / US workplace cultures yifaka konke lokhu, ngezinga elifananayo. Esikhiweni sokuhlangabezana lomuntu osanda kufika emsebenzini, abantu balindela ukubona zonke izimo lezi ngezikhathi ezahlukileyo. Ungaba luncane uma uthi 'How are you?' / 'I'm a nurse' / 'Could you help me?' / 'Sorry to bother you' / 'Take care' kalingenwa kanye. Hlanganisa.",
  },

  chunks: [
    {
      id: 'how_are_things',
      target: 'How are things?',
      native: 'Izinto zihamba njani? (igama elilula)',
      literal: 'how / are / things',
      emoji: '👋',
      phonetic: 'HOW-ar-THINGS',
      audioRef: null,
    },
    {
      id: 'busy_week',
      target: "It's been a busy week",
      native: 'Iviki ibimatasa',
      literal: "it / has / been / busy",
      emoji: '🏃',
      phonetic: 'its-bin-uh-BIZ-ee-WEEK',
      audioRef: null,
    },
    {
      id: 'pop_in',
      target: 'Pop in / pop by',
      native: 'Fika kafutshane (ku-office)',
      literal: 'pop / in',
      emoji: '🚪',
      phonetic: 'POP-IN',
      audioRef: null,
    },
    {
      id: 'catch_up',
      target: "Let's catch up",
      native: 'Kasifike-fika futhi (sixoxe)',
      literal: 'catch / up',
      emoji: '☕',
      phonetic: 'KATCH-UP',
      audioRef: null,
    },
    {
      id: 'have_a_good_one',
      target: 'Have a good one',
      native: 'Ube losuku oluhle (ekupheleni kwengxoxo)',
      literal: 'have / a / good / one',
      emoji: '👋',
      phonetic: 'HAV-uh-GUUD-WUN',
      audioRef: null,
    },
  ],

  pattern: {
    name: "I-Workplace conversation arc — qala, ngaphakathi, gcina",
    explanation: "Yonke ingxoxo emsebenzini ilesakhiwo. (1) UKUVULA: 'Hi [name], how are things?' / 'Hi [name], how's it going?'. (2) NGAPHAKATHI: kuxhumane ngokwemivuso emsebenzini, ngomyalezo, ngempilo yokunye. (3) UKUVALA: 'Anyway, I'd better get back to it' / 'Right, I'll let you go' / 'Have a good one!'. I-trick: ungavalanga ngokushuthi — kufanele kube lengxoxo encane yokuvala (closing exchange). Lapho-ke uthi: 'Right, I'd better crack on. Catch up later?' / 'Have a good one!'. Lokhu yi-glue ye-UK workplace.",
    examples: [
      { target: "Hi Sarah — how are things? It's been a busy week!",       native: 'Salibonani Sarah — izinto zihamba njani? Iviki ibimatasa!' },
      { target: "Right, I'd better crack on. Catch up later?",              native: 'Pho, kungcono ngiqalise. Sifike-fike emva?' },
      { target: 'Have a good one!',                                          native: 'Ube losuku oluhle!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'How are things?',     right: 'izinto zihamba njani?' },
        { left: "It's been busy",       right: 'kuyabe kumatasa' },
        { left: "Let's catch up",       right: 'kasifike-fike futhi' },
        { left: 'Have a good one',      right: 'ube losuku oluhle (ekuvaleni)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha indlela elungileyo yokuvala',
      question: "Uxoxe lo-colleague kweminitha emithathu. Manje ufanele uphindele esisebenzini. Indlela elungileyo yokuvala?",
      options: [
        { text: "Right, I'd better crack on. Have a good one!", correct: true },
        { text: "Goodbye.",                                       correct: false },
        { text: "Stop talking. I am leaving.",                    correct: false },
      ],
      explanation: "Ungavali nge-'Goodbye' yodwa — kuyaphelelwa nje. 'Right, I'd better crack on. Have a good one!' yindlela ye-UK eyiyo: chaza ukuthi uyabuyela emsebenzini, vala ngokomusa.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (ku-conversation eqala)',
      prompt: 'Salibonani Sarah, izinto zihamba njani?',
      correct: ['Hi Sarah, how are things?', 'Hi Sarah — how are things?', 'Hi Sarah, how are things'],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — uvula ingxoxo emsebenzini',
      words: ['been', "It's", 'busy', 'a', 'week.'],
      correct: ["It's", 'been', 'a', 'busy', 'week.'],
      translation: 'Iviki ibimatasa.',
    },
  ],

  rwenDialogue: {
    intro: "Lamuhla yi-Friday afternoon. Uhambisa ku-kitchen ku-care home. UMargaret, i-manager wakho, ulapho ngehoffia.",
    lines: [
      { speaker: 'npc', target: "Hi — how are things? It's been a hectic week, hasn't it?", native: 'Salibonani — izinto zihamba njani? Iviki ibimatasa kakhulu, kunjalo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, it has — but I'm doing OK. How about you?", native: 'Yebo, kuyikho — kodwa ngiyahamba. Pho wena?',                          correct: true,  feedback: "Kuhle — uvumelane (yes), uphendule kafutshane (I'm doing OK), wabuza emuva (how about you?). I-Workplace small talk eyiyo." },
          { target: 'Hi.',                                              native: 'Salibonani.',                                                            correct: false, feedback: 'Ifutshane kakhulu — phenduli umbuzo. Engeza nje: "Yes, it has been busy. How are you?"' },
          { target: 'Yes I am very tired.',                              native: 'Yebo nginginethile kakhulu.',                                            correct: false, feedback: "Kungaba kuvumelekile, kodwa kakhulukazi enkambisweni encane: 'I'm doing OK' / 'I'm hanging in there'. Ungafingqi konke ezikhathini zokuqala." },
        ],
      },
      { speaker: 'npc', target: "I'm OK — looking forward to the weekend! Any plans?", native: 'Ngihamba — ngilindele i-weekend! Wenza ngani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Just resting, to be honest. Could I ask — could I take Monday off? I want to switch off properly.", native: 'Ngiphumula nje, iqiniso. Ngingabuza — ngingenelisa ukuthatha uMvulo? Ngifuna ukucima ngokupheleleyo.', correct: true, feedback: "Wenze izinto ezintathu kanyekanye: wachaza i-plan, wabuza umbuzo ngo-'could I', wachaza isizathu se-work-life balance. Lokhu yi-Module 9 ihlanganene." },
          { target: 'No plans. I want Monday off.',                                                                       native: 'Akula okuhleliwe. Ngifuna uMvulo.',                                                                       correct: false, feedback: "I-second sentence yi-direct kakhulu. Sebenzisa 'Could I take Monday off?' kanye lesizathu encane." },
        ],
      },
      { speaker: 'npc', target: "Of course — book it on the system. Have a good weekend!", native: 'Yiqondiso — kufake ku-system. Ube le-weekend enhle!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thanks, you too! Have a good one.", native: 'Ngiyabonga, lawe! Ube losuku oluhle.', correct: true, feedback: 'Kuhle kakhulu! Wenze i-conversation arc yonke: ukuvula, ngaphakathi, ukuvala. Wonke uModule 9 hlanganene.' },
          { target: 'Bye.',                                native: 'Sala kahle.',                          correct: false, feedback: "Ifutshane kakhulu — phinda nge-'Thanks, you too!' kuze ingxoxo ihlonipheke." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Wenze konke kuhle. Lokhu yiyona iModule 9 ngempela: ukubingelela, ukucela ngokuhlonipha, ukubuza usizo, ukuvula nge-work-life balance — konke kungxoxweni eyodwa eyifutshane.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'izinto zihamba njani?' ngesiNgisi",       correct: ['How are things?', 'How are things'] },
      { prompt: "Bhala 'iviki ibimatasa' ngesiNgisi",              correct: ["It's been a busy week", "It's been a busy week.", "It has been a busy week", "It has been a busy week."] },
      { prompt: "Bhala 'ube losuku oluhle (ekuvaleni)' ngesiNgisi",correct: ['Have a good one', 'Have a good one!', 'Have a good one.'] },
      { prompt: "Bhala 'kasifike-fike futhi' ngesiNgisi",          correct: ["Let's catch up", "Let's catch up.", "Let's catch up later"] },
    ],
  },

  mission: {
    title: 'Ingxoxo eyifutshane lomuntu munye',
    task: "Lamuhla, dlulisa ingxoxo eyifutshane lo-colleague (kumbe lomuntu osebenza laye nawe ngokuvamile). Sebenzisa: (1) ukuvula ('How are things?'), (2) okuthize phakathi (impendulo emfutshane), (3) ukuvala ('Right, I'd better crack on. Have a good one!'). Hayilibala-libali. Ungesabi.",
    rwenSignoff: 'UModule 9 sewuwuqedile. Sale uhleli emsebenzini wakho — ukhulume kahle, hlonipha, ungesabi ukubuza. Sala kuhle.',
  },

  phase8: {
    scenario: "Yi-Friday afternoon emsebenzini. Uhlangana lo-colleague (oseminyakeni efana lawe) ku-kitchen. Yenza ingxoxo encane (small talk) — buza ngeviki yakhe, mhlangabeze ezinto ozenzile, vumeza ngokulungile, vala ngo-'Have a good one!'. Hambisa konke ozifundileyo kuModule 9.",
    rwenRole: "James — i-colleague yakho, useminyakeni 30s, ulomusa, opholile. Uzakubuza imibuzo elungelayo, akhulume ngeviki yakhe, futhi avale ingxoxo ngokulungile.",
    successCriteria: "Umfundi avule nge-'How are things?' / 'How's it going?'. Asebenzise okungenani okukodwa kwala mabhubhu: 'Could you...?', 'Would you mind...?', 'I want to make sure...'. Avale ingxoxo nge-'Have a good one' / 'Have a good weekend' / 'Catch up later'. I-arc ipheleliswe — vula, ngaphakathi, vala.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
