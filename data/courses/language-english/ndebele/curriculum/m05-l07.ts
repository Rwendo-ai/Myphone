import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friend-colleague',
  module: 5,
  lesson: 7,
  title: 'Friend, Best Friend, Colleague',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EsiNdebeleni umngane = friend. EsiNgisini sinemikhakha emithathu engaqondiswanga: 'friend' (jikelele), 'best friend' (umngane omkhulu kunabo bonke — yedwa nje), 'colleague' (osebenzayo nawe — akumelwe abe ngumngane). Khetha kahle — kuyazwakala uyahlonipha ngokwesimo.",
    culturalNote: "EsiNdebeleni umngane oyinhloko ungumuntu omdala — bafake izindaba, bafake izinyembezi, bafake izingubo. EsiNgisini, 'best friend' lilona elilethwa kakhulu — kodwa 'colleague' yiyo akhetheke. 'Colleague' yithi 'osebenzela ndawonye nawe', akusho ngokwemvelo umngane. Imiphakathi yangase-Bulawayo lase-Harare ihlala ihlanganyela kunaba-Britain — okwesibili wendlu yakho ngumngane wakho. Lokho kuhle. EsiNgisini, ungafaka 'a close friend' (omsondelene) loba 'a family friend' (umngane wemuli) ukukhomba ukusondelene. UJesu wathi: 'Akukho thando elikhulu kunalelo, lokuba umuntu adele impilo yakhe ngabangane bakhe' (Johane 15:13). Ubungane akusiyo into encinyane.",
  },

  chunks: [
    {
      id: 'friend',
      target: 'Friend',
      native: 'Umngane (oyedwa)',
      literal: 'Friend — general',
      emoji: '🧑🏾‍🤝‍🧑🏾',
      phonetic: 'FREND',
      audioRef: null,
    },
    {
      id: 'best_friend',
      target: 'Best friend',
      native: 'Umngane omkhulu kakhulu (oyedwa)',
      literal: 'Best friend — only one, the closest',
      emoji: '👯🏾',
      phonetic: 'BEST FREND',
      audioRef: null,
    },
    {
      id: 'close_friend',
      target: 'Close friend',
      native: 'Umngane osondelene',
      literal: 'Close friend — close, but not necessarily the closest',
      emoji: '🤝🏾',
      phonetic: 'KLOHS FREND',
      audioRef: null,
    },
    {
      id: 'colleague',
      target: 'Colleague',
      native: 'Osebenza ndawonye lawe (akusilo umngane)',
      literal: 'Colleague — formal, work-only',
      emoji: '💼',
      phonetic: 'KOH-leeg',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Register — friend vs colleague',
    explanation: "'Friend' livulekile — kuhamba ngokuvamileyo, kufuna i-genuine connection. 'Best friend' yi-superlative — yedwa kuphela, hatshi babili. 'Close friend' kunika ukusondelene ngaphandle kokuthi 'best'. 'Colleague' yi-formal: osebenzayo nawe — kungeke ube ngumngane. EsiNgisini, ezimweni ezisemsebenzini, faka 'colleague' — kungenzeki kunyanga ku-'work friend' lapho kufaneleyo.",
    examples: [
      { target: 'My best friend lives in Bulawayo.',     native: 'Umngane wami omkhulu kakhulu uhlala eBulawayo.' },
      { target: "She's my colleague at the bank.",        native: 'Ngosebenza laye eBhange.' },
      { target: "He's a close friend of the family.",     native: 'Ngumngane osondelene wemuli.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Friend',         right: 'Umngane' },
        { left: 'Best friend',    right: 'Umngane omkhulu kakhulu' },
        { left: 'Close friend',   right: 'Umngane osondelene' },
        { left: 'Colleague',      right: 'Osebenza laye' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Umngane wami omkhulu kakhulu uhlala eMzansi.',
      correct: ['My best friend lives in South Africa.', 'My best friend lives in South Africa', 'my best friend lives in South Africa.'],
    },
    {
      type: 'fill_blank',
      instruction: "Faka igama elifaneleyo — uxoxa ngosebenzayo lawe ehhovisi",
      sentence: "She's not really my friend — she's just my _____.",
      options: ['friend', 'colleague', 'sister'],
      correct: 'colleague',
      context: "'Colleague' yifaneleyo lapho — kuthi nisebenza ndawonye, akula ubudlelwane bakuhlonipha noma ubungane. 'Friend' kuthwala kakhulu — funa ukuhloniphana okwakhile.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'NguMngane Smith — ngumngane wemuli.',
      correct: ["This is Mr. Smith — he's a family friend.", "This is Mr. Smith, a family friend.", "This is Mr. Smith — he's a friend of the family."],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — Umngane wami omkhulu kakhulu uyacula',
      words: ['sings.', 'My', 'friend', 'best'],
      correct: ['My', 'best', 'friend', 'sings.'],
      translation: 'Umngane wami omkhulu kakhulu uyacula.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiqiniso',
      question: "Umphathi wakho ucela ukuthi 'umboniseni umngane wakho omtsha emhlanganweni.' Kanti yilona umuntu osebenza laye, akusilo umngane wakho omtshakazana ekhaya. Wona umakukhetha?",
      options: [
        { text: "This is my colleague, John, from the marketing team.",  correct: true },
        { text: "This is my best friend John.",                          correct: false },
        { text: "This is John friend.",                                  correct: false },
      ],
      explanation: "'Colleague' yifaneleyo emsebenzini. 'Best friend' lilihaya ngokwemvelo, kodwa lapho akufanele — kungatshengisa ukuthi awufaneli ekhefu lasebenzini. Khetha igama elifaneleyo ngokwesimo.",
    },
  ],

  rwenDialogue: {
    intro: "Useshandela ehhovisi e-Harare. Umphathi oyiNgisi ucela ukuthi umkhombise abasebenzayo nawe.",
    lines: [
      { speaker: 'npc', target: "Tell me about your team. Who do you work with?", native: 'Ngitshele ngeqembu lakho. Usebenza nabani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "These are my colleagues — John from finance, and Mary from HR. We work together every day.", native: 'Laba bangosebenza labo — uJohn ku-finance, uMary ku-HR. Sisebenza ndawonye nsuku zonke.', correct: true, feedback: "Kuhle — ufakile 'colleagues' (formal — sisemsebenzini), waphinda wachaza umsebenzi wabo. Inhlonipho ekhona." },
          { target: "These are my best friends.",                                                                  native: 'Laba bangabangane bami abakhulu kakhulu.',                                                  correct: false, feedback: "Akufaneleyo lapho — kungaba 'best friends' kuncipha umsebenzi wabo. Sebenzisa 'colleagues'." },
          { target: "They my friends.",                                                                            native: 'Bayingababangane bami.',                                                                     correct: false, feedback: "Faka isenzo: 'They are my colleagues' loba 'These are my colleagues'. Kufanele ucole 'colleagues' uma usemsebenzini." },
        ],
      },
      { speaker: 'npc', target: "Are you close with any of them outside work?", native: 'Usondelene nabo abanye ngaphandle komsebenzi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — Mary is also a close friend. We go to the same church.",  native: 'Yebo — uMary ngumngane osondelene futhi. Siya ekereni elifanayo.', correct: true, feedback: "Kuhle. Usebenzise 'close friend' njengoba isondelene kakhulu kuno-'colleague', kodwa hatshi 'best friend'." },
          { target: "Mary best friend close.",                                       native: 'uMary umngane omkhulu osondelene.',                                  correct: false, feedback: "Faka isenzo: 'Mary is also a close friend.' Khetha igama elilodwa: 'close friend' yifaneleyo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle. Ukukhethwa kwamagama 'colleague' / 'close friend' / 'best friend' kufaka ukuhlonipha kwesimo. Lokho kuyiqembu elikhulu lobuhle besiNgisi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Friend (ngesiNgisi)',         correct: ['Friend', 'friend'] },
      { prompt: 'Best friend (ngesiNgisi)',    correct: ['Best friend', 'best friend'] },
      { prompt: 'Colleague (ngesiNgisi)',      correct: ['Colleague', 'colleague'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Bhala uhlu olufitshane: '_______ is my best friend. _______ is my close friend. _______ is my colleague.' Faka amagama abantu uqobo. Khuluma ngazo umlomo. Lokho kuyifaka indlela yokucabanga ngamandla esiNgisini — ungumngane, ungumsondelene, kumbe ungosebenza laye.",
    rwenSignoff: "Kusasa — isithandwa, umtshakazana, umtshakazi (boyfriend, girlfriend, partner).",
  },

  phase8: {
    scenario: "You're at a work event in Harare where everyone speaks English. Your boss asks you to introduce a colleague to a visiting client. Then later, your closest friend at work — who is also a personal friend — joins. You need to introduce them differently.",
    rwenRole: "Mr. Banda, 55, a Zambian client who's visiting your company. Polite, asks 'How long have you worked together?' or 'Are you also friends outside work?'",
    successCriteria: "User uses 'colleague' for a strictly work relationship and 'close friend' or 'a colleague who is also a friend' for the closer one. Uses both terms with appropriate possessives ('my colleague', 'my close friend'). Speaks in full sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
