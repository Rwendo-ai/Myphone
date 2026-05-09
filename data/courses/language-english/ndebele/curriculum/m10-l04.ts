import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04',
  module: 10,
  lesson: 4,
  title: 'Expressing opinions — "I believe", "In my view"',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Esikhiweni sesiNdebele, kuyacaca ngokuvamileyo ukuthi sikhuluma umbono wethu — kuyezwakala. Kodwa esiNgisini, abantu bafuna ucacise: 'I think', 'I believe', 'In my view', 'It seems to me'. Lokhu kufundisa abalaleli ukuthi lokhu wukubona kwakho — hatshi iqiniso elipheleleyo. Kuyahlonipha. Kuyaqondakala.",
    culturalNote: "Esikhungweni sesiNgisi semsebenzini, ukuthi 'It is bad' kungafanele — kufana lentsha lentukuthelo. Sebenzisa 'I think it could be better' noma 'In my view, there might be a problem'. Lokhu kakuyikuxakeka — kuyihlonipho lobubunye. EUK ikakhulukazi, abantu bavumelana lo-'I think' lo-'perhaps' kunezithanjelo eziqondileyo. EUS, abantu bayathanda kakhulu ukucacisa: 'I believe' kunzima kakhulu kunokuthi 'I think'. Yonke imisho yakho ye-opinion ifuna i-soft frame — yileyo ndlela ozakwenza ungumdlali ohlonitshwayo.",
  },

  chunks: [
    {
      id: 'i_think',
      target: 'I think',
      native: 'Ngicabanga ukuthi',
      literal: 'I think',
      emoji: '💡',
      phonetic: 'ay-THINGK',
      audioRef: null,
    },
    {
      id: 'i_believe',
      target: 'I believe',
      native: 'Ngiyakholwa ukuthi',
      literal: 'I believe (stronger)',
      emoji: '🙏',
      phonetic: 'ay-bi-LEEV',
      audioRef: null,
    },
    {
      id: 'in_my_view',
      target: 'In my view',
      native: 'Ngokumbono wami',
      literal: 'In my view',
      emoji: '👁️',
      phonetic: 'in-may-VYU',
      audioRef: null,
    },
    {
      id: 'it_seems_to_me',
      target: 'It seems to me',
      native: 'Kungibonakala ukuthi',
      literal: 'It seems to me (gentle)',
      emoji: '🌗',
      phonetic: 'it-SEEMZ-tu-mee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Four ways to express opinion — soft to strong',
    explanation: "Yilezi ezilandelanayo ngamandla: (1) 'It seems to me...' — i-softest, ekhulumayo nje. (2) 'I think...' — i-everyday, esebenza yonke indawo. (3) 'In my view...' — i-formal, emihlanganweni yokusebenza. (4) 'I believe...' — i-strongest, ngenkolo kumbe imicabango ye-deep. Wonke umsho ulandelwa li-'that' (ngokuvamileyo) noma ungenalo. ZIPHELELE: 'I think (that) we should wait.'",
    examples: [
      { target: 'I think we should leave early.',                  native: 'Ngicabanga ukuthi kufanele sihambe ngaphambi.' },
      { target: 'I believe honesty is the best policy.',           native: 'Ngiyakholwa ukuthi ukuthembeka kuyindlela engcono.' },
      { target: 'In my view, the project needs more time.',        native: 'Ngokumbono wami, umsebenzi udinga isikhathi esengeziwe.' },
      { target: 'It seems to me that she is upset.',                native: 'Kungibonakala ukuthi udabukile.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa i-phrase lendlela esebenza ngayo',
      pairs: [
        { left: 'It seems to me...',  right: 'I-soft, kuyabhekwa nje' },
        { left: 'I think...',          right: 'Yenjwayelo, yonke indawo' },
        { left: 'In my view...',       right: 'I-formal, e-meeting' },
        { left: 'I believe...',        right: 'I-strongest, ngokweqiniso' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (i-meeting, i-formal)',
      prompt: 'Ngokumbono wami, kufanele silinde iviki.',
      correct: [
        'In my view, we should wait a week.',
        'In my view, we should wait one week.',
        'In my view we should wait a week.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala — i-soft, gentle opinion',
      sentence: "It _____ to me that he's tired today.",
      options: ['seems', 'thinks', 'believes'],
      correct: 'seems',
      context: "I-collocation eqondileyo: 'It seems to me'. (HATSHI 'It thinks/believes' — lokho akuyendlela.)",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiyo — uxoxa lomphathi ngomsebenzi',
      question: "Umphathi ubuza umbono wakho ngomsebenzi omutsha. Yiphi indlela ehleliweyo, ehlonipha?",
      options: [
        { text: "It is bad. We must change.",                                correct: false },
        { text: "I think the project could work, but in my view, we need more time to plan.", correct: true },
        { text: "I don't know. Whatever you say.",                            correct: false },
      ],
      explanation: "Eyokuqala iqonde kakhulu — kufana lentukuthelo. Eyesithathu kayinikezi mbono. Eyesibili ihlangene kahle — i-positive ('could work'), bese kuza i-concern e-frame ngo-'in my view'. Lokhu yi-mastery-level umbono.",
    },
  ],

  rwenDialogue: {
    intro: 'Usemhlanganweni emsebenzini. I-team ifuna umbono wakho ngomsebenzi omutsha.',
    lines: [
      { speaker: 'npc', target: "We need to decide today — should we launch the new product next month or wait until autumn?", native: "Kufanele sikhethe lamuhla — sikhulule umkhiqizo omutsha enyangeni ezayo kumbe silinde kuze kufike i-autumn?" },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I think we should wait. In my view, the team isn't quite ready, and it seems to me the customers expect more polish.",
            native: "Ngicabanga ukuthi kufanele silinde. Ngokumbono wami, i-team ayikalungileyo, futhi kungibonakala ukuthi amakhasimende alindele kakhulu.",
            correct: true,
            feedback: "Kuhle kakhulu — usebenzise zonke ezintathu: 'I think', 'In my view', 'It seems to me'. Imibono yakho izwakala ngokwenkathi, kayithi-thinathini.",
          },
          {
            target: "Wait. Bad. Customers angry.",
            native: "Linda. Kubi. Amakhasimende athukuthele.",
            correct: false,
            feedback: "Iqondene kakhulu — kufana lokuthukuthela. Sebenzisa i-soft frame: 'I think we should wait — in my view, customers expect more.'",
          },
          {
            target: "I don't know. You decide.",
            native: "Angazi. Khetha wena.",
            correct: false,
            feedback: "Awunikezi mbono nhlobo. Veza okungenani okwakho — 'I think we should wait' kuyenele ekuqaleni.",
          },
        ],
      },
      { speaker: 'npc', target: "Good points — that's helpful. Let's discuss further.", native: "Imibono emihle — kuyasiza. Asixoxe kakhulu." },
      { speaker: 'rwen', rwenLine: "Khangela — umbono wakho uveze ngokuhlonipha. Akudingi ukuthukuthela ukuze utshele iqiniso.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'In my view, we should wait' ngesiNgisi", correct: ['In my view, we should wait', 'In my view we should wait', 'In my view, we should wait.'] },
      { prompt: "Bhala 'It seems to me that he is tired' ngesiNgisi", correct: ['It seems to me that he is tired', 'It seems to me he is tired', "It seems to me he's tired"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Cabanga ngenye into ekuthintile lamuhla — i-news, umsebenzi, umuntu. Bhala imibono yakho ngayo emisihweni emithathu — sebenzisa 'I think', 'In my view', 'I believe'. Khulekela ngomlomo emumva.",
    rwenSignoff: "Kusasa — ukutshintsha umbono ngenhlonipho. 'I'm not sure I agree.'",
  },

  phase8: {
    scenario: "You're in a UK team meeting. The manager is going around asking everyone for their opinion on a workplace issue (e.g., should we work from home Fridays). Use 'I think', 'I believe', 'In my view', 'It seems to me' to give a balanced, professional opinion.",
    rwenRole: "Sarah, 45, your team manager. Direct but warm. Will follow up with 'Why do you say that?' — so be ready to back up your view.",
    successCriteria: "User uses at least TWO opinion-framing phrases ('I think', 'I believe', 'In my view', 'It seems to me'). Gives a clear stance with one reason. Doesn't say 'It is bad/good' bluntly. Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
