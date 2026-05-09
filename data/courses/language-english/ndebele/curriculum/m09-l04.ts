import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04',
  module: 9,
  lesson: 4,
  title: 'At work — colleague, boss, manager',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Esikhiweni sesiNgisi sokusebenzeleyo, abantu obahlanganayo bahlukaniswa ngamagama amathathu: u-'colleague' (osebenza naye, ngezinga elifanayo), u-'boss' (ongaphezulu kwakho — kungaba lula kungaba kanzima), lo-'manager' (ophatha iqembu lakho ngokuhleliweyo). Lawomathathu ahlukile, kodwa kakhulukazi i-'manager' yiyona oyibhala kakhulu.",
    culturalNote: "Esikhiweni sesiNdebele, lapho omkhulu kuwe (umuntu ongaphezulu kwakho ngokuhlonipheka) khona, kuyabonakala ngenkulumo — ungasebenzisi amagama ahlumelelekayo. Ku-UK / US, kakhulukazi e-tech, e-care, le-retail, abasebenzi bayalisebenzisa kakhulu igama lokuqala (first name) lomphathi wabo. 'Hi Sarah' kumphathi okuyiminyaka 50 — kuvumelekile, akusilo cha. Kodwa ungaqali ngalokho — lalela kuqala, bona ukuthi abanye basebenzisa njani amagama. I-'boss' yiyo igama elilula, kanti i-'manager' yiyo i-formal — ungafaki 'boss' ku-email yokusebenza.",
  },

  chunks: [
    {
      id: 'colleague',
      target: 'Colleague',
      native: 'Engisebenza laye / engisebenza naye',
      literal: 'colleague',
      emoji: '👥',
      phonetic: 'KOL-eeg',
      audioRef: null,
    },
    {
      id: 'boss',
      target: 'Boss',
      native: 'Umphathi (igama elilula)',
      literal: 'boss',
      emoji: '👔',
      phonetic: 'BOSS',
      audioRef: null,
    },
    {
      id: 'manager',
      target: 'Manager',
      native: 'Umphathi (igama lokuhleliwe)',
      literal: 'manager',
      emoji: '📊',
      phonetic: 'MAN-uh-jur',
      audioRef: null,
    },
    {
      id: 'team',
      target: 'Team',
      native: 'Iqembu (eqenjini)',
      literal: 'team',
      emoji: '🏢',
      phonetic: 'TEEM',
      audioRef: null,
    },
    {
      id: 'supervisor',
      target: 'Supervisor',
      native: 'Umqaphi (umphathi oseduze)',
      literal: 'supervisor',
      emoji: '👁️',
      phonetic: 'SOO-pur-vy-zur',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Boss vs Manager — kungaba luncane kakhulu",
    explanation: "Sebenzisa 'boss' phakathi kwabasebenzi noma kuyikho ku-conversation: 'My boss said yes.' Sebenzisa 'manager' ku-formal: ku-email, ku-CV, kumbe nxa ukhuluma lomuntu ongaphandle: 'My manager will be in touch.' I-'supervisor' yi-day-to-day onkonze (qeke ku-construction, factory, le-care work) — engagqibanga uba ngu-manager wakho ngokuphelele. I-'colleague' yiwo wonke umuntu osebenza naye — ngezinga elifanayo, kungekhona ongaphezulu.",
    examples: [
      { target: "I'll ask my manager.",          native: 'Ngizabuza umphathi wami.' },
      { target: 'My colleague helped me.',        native: 'Engisebenza naye wangisiza.' },
      { target: 'My boss is nice.',               native: 'Umphathi wami ngumuntu omuhle.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa igama lendima yawo',
      pairs: [
        { left: 'Colleague',   right: 'osebenza naye, ngezinga elifanayo' },
        { left: 'Manager',     right: 'umphathi (igama lokuhleliwe)' },
        { left: 'Boss',        right: 'umphathi (igama elilula)' },
        { left: 'Supervisor',  right: 'umqaphi oseduze (day-to-day)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala — i-formal email',
      sentence: 'I will check with my ______ and get back to you tomorrow.',
      options: ['boss', 'manager', 'colleague'],
      correct: 'manager',
      context: "Ku-formal email kumuntu ongaphandle, sebenzisa 'manager'. 'Boss' kuyalula kakhulu kuye, 'colleague' kuyaguqulayo umqondo (osebenza naye, hatshi ophezulu kwakho).",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okufanele',
      question: "Umngane wakho uyabuza: 'Who is the woman you eat lunch with?' Yiyo iphi impendulo elungileyo nxa eyiphathi yakho?",
      options: [
        { text: "She's my colleague — we work together.",                                  correct: true },
        { text: "She's my boss — but actually we eat lunch together a lot.",               correct: false },
        { text: "She's my supervisor.",                                                     correct: false },
      ],
      explanation: "Uma niyalingana ngezinga elifanayo, sebenzisa 'colleague'. Uma engumphathi wakho — sebenzisa 'manager' kumbe 'boss'.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Iqembu lethu lilabantu abahlanu.',
      correct: ['Our team has five people.', 'Our team is five people.', 'My team has five people.', 'Our team has 5 people.'],
    },
  ],

  rwenDialogue: {
    intro: "Usemvumeni esikhulu emsebenzini wakho omtsha. Umuntu wokuqala uyabuyela esisebenzini.",
    lines: [
      { speaker: 'npc', target: "How's the new job going? Do you like the team?", native: 'Umsebenzi omtsha uhamba njani? Uyalithanda iqembu?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, my colleagues are nice. My manager is helpful too.",                  native: 'Yebo, abesebenza nabo bangabantu abahle. Umphathi wami uyangisiza futhi.', correct: true,  feedback: 'Kuhle — uphendule ngamagama awodwa amabili (colleagues, manager) ngendlela elungile.' },
          { target: "Yes, my bosses help me work.",                                              native: 'Yebo, abaphathi bayangisiza ukusebenza.',                                  correct: false, feedback: "'Bosses' alisetshenziswa kakhulu — sebenzisa 'manager' kumbe 'colleagues' kungelijwayele." },
          { target: "Yes, my friends at work are nice.",                                         native: 'Yebo, abangani bami emsebenzini bahle.',                                    correct: false, feedback: "'Friends' kuyabhujwa — abafanele babe ngabangane bakho. Lapha sebenzisa 'colleagues' kuze kuvele igama lokusebenzeleyo." },
        ],
      },
      { speaker: 'npc', target: "Good — having a good manager makes a big difference.", native: 'Kuhle — ukuba lo-manager omuhle kwehlukile.' },
      { speaker: 'rwen', rwenLine: "Wabona indlela ehlukileyo: 'colleagues' = abesebenzayo nawe, 'manager' = ophezulu kwakho. Igama-elinye, uguqula amgama yonke.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'osebenza naye' ngesiNgisi",   correct: ['Colleague', 'colleague', 'A colleague'] },
      { prompt: "Bhala 'umphathi' (formal) ngesiNgisi", correct: ['Manager', 'manager'] },
      { prompt: "Bhala 'iqembu' ngesiNgisi",            correct: ['Team', 'team'] },
    ],
  },

  mission: {
    title: 'Wakhe abantu bakho',
    task: "Bhala phansi amagama amathathu: (1) i-manager wakho, (2) abasebenza nawe abahlanu (colleagues), (3) i-supervisor wakho — uma ekhona. Cabanga ngaphakathi: 'My manager is [igama]. My colleagues are [amagama].' Phinda kabili. Khathesi ungayikholekisa lengxoxo.",
    rwenSignoff: 'Ukwazi indawo yakho eqenjini kuyahlomula — wonda lokho.',
  },

  phase8: {
    scenario: "Usengxoxweni nomngane wakho omtsha eUK. Uyakubuza ngomsebenzi wakho — bani ophatha iqembu lakho, bani osebenza naye, lokhu kuhle yini. Phendula ngokungazithobi, sebenzisa 'colleague' / 'manager' / 'team' ngendlela elungile.",
    rwenRole: "Daniel — usebenza ku-warehouse, useminyakeni engama-30s, ulomusa. Uzakubuza imibuzo elula nge-team yakho.",
    successCriteria: "Umfundi asebenzise okungenani amabili kwala mabhubhu: 'colleague(s)', 'manager', 'team', 'boss'. Ahluthe phakathi kwe-'colleague' (osebenza naye) le-'manager' (ophezulu kwakho). Angatsho 'my friends' uma echaza abasebenza naye.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
