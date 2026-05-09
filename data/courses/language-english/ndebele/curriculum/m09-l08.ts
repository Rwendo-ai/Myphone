import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08',
  module: 9,
  lesson: 8,
  title: 'Office vocabulary — hot-desking, remote work',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "I-office yokusebenzeleyo emhlabeni okutshintsha — kakhulukazi emva ko-2020. Igama elifutshane lalokhu: 'office', 'remote work', 'hybrid', 'hot-desking'. Lawomagama ungawazwa kakhulu — ku-job adverts, ku-onboarding, ekungxoxweni le-colleagues. Ungawazi i-shintsho ehlukileyo phakathi kwabo.",
    culturalNote: "I-Zimbabwean office culture igxile kakhulu ku-presence — abantu bavumelane ukuza emsebenzini insuku 5/5. Lapha emhlabeni we-UK le-US, lokhu sekushintshile. I-'remote work' = ukusebenza ekhaya. I-'hybrid' = insuku ezimbalwa ekhaya, ezimbalwa e-office (kakhulukazi 2-3 e-office). I-'hot-desking' = akula i-desk eyodwa yakho — ufike, ukhethe i-desk efutshanele lamuhla, ihlangane no-laptop wakho. Lokho kungalula umshini, kodwa ungahlomula uba ungazi: ungasiyibekanga izinto zakho phezulu kwe-desk yangokuhamba kwakho. Ungaqinisise ngokwemvelo ku-recruiter: 'Is this role office-based, hybrid, or remote?'",
  },

  chunks: [
    {
      id: 'office',
      target: 'Office',
      native: 'Indawo yomsebenzi (i-office)',
      literal: 'office',
      emoji: '🏢',
      phonetic: 'OF-iss',
      audioRef: null,
    },
    {
      id: 'remote_work',
      target: 'Remote work',
      native: 'Ukusebenza ekhaya (ngeqhamuko)',
      literal: 'remote / work',
      emoji: '🏠',
      phonetic: 'rih-MOHT-wurk',
      audioRef: null,
    },
    {
      id: 'hybrid',
      target: 'Hybrid',
      native: 'I-hybrid (ekhaya kanye le-office)',
      literal: 'hybrid',
      emoji: '🔀',
      phonetic: 'HY-brid',
      audioRef: null,
    },
    {
      id: 'hot_desking',
      target: 'Hot-desking',
      native: 'Ukukhetha i-desk nxa ufika (akula yakho)',
      literal: 'hot / desking',
      emoji: '🖥️',
      phonetic: 'HOT-DESK-ing',
      audioRef: null,
    },
    {
      id: 'work_from_home',
      target: 'Work from home (WFH)',
      native: 'Sebenza usuvela ekhaya',
      literal: 'work / from / home',
      emoji: '💻',
      phonetic: 'WURK-fruhm-HOHM',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Imibuzo yokuqonda umsebenzi omtsha",
    explanation: "Phambi kokwamukela umsebenzi, buza i-recruiter / i-HR: 'Is this role office-based, hybrid, or remote?' (i-role yi-office-based / hybrid / remote?). Uma kuyi-hybrid: 'How many days per week in the office?' (zinsuku zingaki ngeviki e-office?). Uma kuyi-office-based: 'Is hot-desking used or do I have a fixed desk?'. Lemibuzo yenzela ulindele kuhle phambi kokuqala. I-Zimbabwean instinct iyithi 'awungenelisi ukubuza' — kalokho. Imibuzo yenza ukubonakala ufanela.",
    examples: [
      { target: 'Is this role office-based, hybrid, or remote?',  native: 'I-role yi-office-based, hybrid, kumbe remote?' },
      { target: "I work from home on Mondays and Fridays.",         native: 'Ngisebenza ekhaya ngoMvulo langoLwesihlanu.' },
      { target: 'We use hot-desking — bring your laptop.',           native: 'Sisebenzisa i-hot-desking — letha i-laptop yakho.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Office',           right: 'indawo yomsebenzi' },
        { left: 'Remote work',      right: 'ukusebenza ekhaya' },
        { left: 'Hybrid',           right: 'ekhaya kanye le-office' },
        { left: 'Hot-desking',      right: 'i-desk akula yakho — ukhetha lamuhla' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha umbuzo olungelayo',
      question: "I-recruiter ikuxoxela nge-job. Awukezwa kahle ukuthi ufanele uze e-office insuku zonke yini. Yiyo iphi indlela elungile yokubuza?",
      options: [
        { text: "Is this role office-based, hybrid, or remote?",   correct: true },
        { text: "Where is the office?",                              correct: false },
        { text: "Do you have an office?",                            correct: false },
      ],
      explanation: "Umbuzo wokuqala uvelisa zonke izinhlobo zomsebenzi (office / hybrid / remote). I-recruiter izaphendula ngokucabangela zonke izinto.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngisebenza ekhaya ngoLwesibili langoLwesine.',
      correct: ['I work from home on Tuesdays and Thursdays.', 'I work from home on Tuesday and Thursday.', 'I work from home Tuesdays and Thursdays.', 'I work from home on Tuesdays and Thursdays'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala — i-job advert',
      sentence: 'This role is ______ — 3 days in the office, 2 days at home.',
      options: ['hybrid', 'remote', 'hot-desking'],
      correct: 'hybrid',
      context: "I-hybrid yi-mix yokuya e-office le-WFH. I-remote yiwo yonke ekhaya. I-hot-desking ngumbono wendlela yokukhetha i-desk e-office, hatshi indlela yomsebenzi.",
    },
  ],

  rwenDialogue: {
    intro: "Usakhuluma ne-recruiter (uPriya) nge-job entsha eLondon. Ufuna ukubuza imibuzo emihle.",
    lines: [
      { speaker: 'npc', target: "So, the team is based in London — but flexible. Any questions?", native: 'Pho, iqembu likhona eLondon — kodwa kunokuvuma. Mibuzo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — is the role office-based, hybrid, or remote? And if hybrid, how many days?", native: 'Yebo — i-role yi-office-based, hybrid, kumbe remote? Uma yi-hybrid, zinsuku zingaki?', correct: true,  feedback: "Wenze kuhle — imibuzo emithathu emfutshane, evumayo i-Priya ukukhipha lonke ulwazi. Yindlela ye-UK eyiyo." },
          { target: 'Where is the office?',                                                              native: 'I-office iphi?',                                                                          correct: false, feedback: 'Lokho yi-question elilula nje. Buza ngokucacileyo nge-arrangement: hybrid? remote? office-based?' },
          { target: "Can I work at home every day?",                                                     native: 'Ngingasebenza ekhaya insuku zonke?',                                                       correct: false, feedback: "Ungaze ufike kakhulu — iqala ngokubuza i-arrangement, hatshi ngokucela ukuhambelana lawe." },
        ],
      },
      { speaker: 'npc', target: "It's hybrid — Tuesdays and Thursdays in the office, the other days at home. We also use hot-desking, so bring your laptop.", native: 'Yi-hybrid — ngolwesibili langolwesine e-office, ezinye izinsuku ekhaya. Sisebenzisa i-hot-desking, ngakho letha i-laptop yakho.' },
      { speaker: 'rwen', rwenLine: "Wabona — manje uyazi ukuthi: 2 e-office, 3 ekhaya, no-laptop. Imibuzo yokuqondisa ihambisa kuze.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'ukusebenza ekhaya' ngesiNgisi (igama elilula)",  correct: ['Remote work', 'remote work', 'Working from home', 'Work from home'] },
      { prompt: "Bhala 'i-mix yekhaya le-office' ngesiNgisi",             correct: ['Hybrid', 'hybrid'] },
      { prompt: "Bhala 'ukukhetha i-desk nxa ufika' ngesiNgisi",          correct: ['Hot-desking', 'hot-desking', 'hot desking'] },
    ],
  },

  mission: {
    title: 'Bhala umbuzo wakho',
    task: "Bhala phansi imibuzo emithathu ungazibuza uma uthola i-interview yokuqala kwi-UK / US: (1) office-based, hybrid, kumbe remote? (2) zinsuku zingaki e-office? (3) hot-desking kumbe i-desk yakho? Wagcine — uzowufuna ngempela.",
    rwenSignoff: 'Ukubuza imibuzo elungile yikho ukuzicelisa ngokuqondileyo.',
  },

  phase8: {
    scenario: "Use-job interview yakho yokuqala e-UK. Ngemva kwemibuzo emikhulu, i-interviewer iyakucela imibuzo yakho. Buza imibuzo emithathu ngendawo yomsebenzi (office, hybrid, remote, hot-desking) ngendlela elungile.",
    rwenRole: "Anita — i-hiring manager, useminyakeni 40s, opholile, oyathokoza ukuthi ubuze imibuzo.",
    successCriteria: "Umfundi abuze imibuzo emithathu emihle nge-work setup, asebenzise okungenani amabili kwala mabhubhu: 'office-based', 'hybrid', 'remote', 'hot-desking', 'work from home'. Imibuzo iqondileyo, hayilibala-libali.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
