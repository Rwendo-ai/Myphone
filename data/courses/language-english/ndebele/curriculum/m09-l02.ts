import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'CV (UK) vs Resume (US)',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Igama elilodwa, amazwe amabili: i-UK ithi 'CV' (curriculum vitae), i-US ithi 'resume'. Awusi-shintsho oluncane — uma ufaka i-'resume' eLondon kumbe i-'CV' eNew York, uthumeli okuthatha ulufuninisile uzakuthi: 'asikuhlosile lapha'. Yazi ukuthi ungaphi ungabhali idokhumenti elungelayo.",
    culturalNote: "I-UK i-CV — ifuthi-ifutshane (1-2 amakhasi), iqala nge-personal statement enzimanye, ilethithisa imisebenzi ngaphakathi-konke (reverse-chronological). Akula isithombe (photo) — ungafaki isithombe sakho, kungaholela ekulahlweni kwendaba ngoba bafuna ukunqanda i-bias. I-US i-resume — futhi-futhi 1 ikhasi (kwabasanda kuqala), kuvumelekile i-2 ikhasi kwabalobudala. Akula isithombe naye — kufana le-UK. I-Zimbabwe le-South Africa — i-'CV' ye-3-5 amakhasi ifutshane. Lokho akwemukelwa lapha. Wonda ifutshe.",
  },

  chunks: [
    {
      id: 'cv',
      target: 'CV (UK)',
      native: 'I-CV (i-UK / i-Europe / i-Australia)',
      literal: 'curriculum vitae',
      emoji: '📄',
      phonetic: 'see-VEE',
      audioRef: null,
    },
    {
      id: 'resume',
      target: 'Resume (US)',
      native: 'I-resume (i-US / i-Canada)',
      literal: 'résumé (igama lesi-French)',
      emoji: '📋',
      phonetic: 'REH-zoo-may',
      audioRef: null,
    },
    {
      id: 'cover_letter',
      target: 'Cover letter',
      native: 'Incwadi yokuvelisa (eyembesa i-CV)',
      literal: 'cover letter',
      emoji: '✉️',
      phonetic: 'KUH-vur-LET-ur',
      audioRef: null,
    },
    {
      id: 'work_experience',
      target: 'Work experience',
      native: 'Olwesayo emsebenzini',
      literal: 'work experience',
      emoji: '🛠️',
      phonetic: 'WURK-ek-SPEER-ee-uns',
      audioRef: null,
    },
    {
      id: 'references',
      target: 'References',
      native: 'Abadlulisi (abafakazi)',
      literal: 'references',
      emoji: '👥',
      phonetic: 'REF-rens-iz',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Where you are = which word you use",
    explanation: "Akusi-shintsho lwencazelo — kuyi-shintsho lwendawo. UK / Australia / Ireland / South Africa: sebenzisa 'CV'. US / Canada: sebenzisa 'resume'. Uma ulwa-application kuyi-multinational, sebenzisa lokho okushiwo nge-job advert. Uma kungasho — sebenzisa lokho okusetshenziswayo lapho i-headquarters ikhona. Inguquko enkulu: lawomazwe womabili afuna idokhumenti elifutshane (1-2 amakhasi) — hatshi i-5 amakhasi enje le-Zimbabwe.",
    examples: [
      { target: 'Please find my CV attached. (UK)',         native: 'Khangela i-CV yami enamathiselwe lapha.' },
      { target: 'I have attached my resume. (US)',          native: 'Ngithumele i-resume yami.' },
      { target: 'My CV is two pages long.',                 native: 'I-CV yami ingamakhasi amabili.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa igama lendawo eyivumayo',
      pairs: [
        { left: 'CV',           right: 'i-UK / i-Australia / i-Ireland' },
        { left: 'Resume',       right: 'i-US / i-Canada' },
        { left: 'Cover letter', right: 'incwadi yokuvelisa' },
        { left: 'References',   right: 'abafakazi' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Ufakelela umsebenzi e-Manchester (UK). Umemezelo (advert) ucela kakulu 'send your CV'. Ungathini?",
      options: [
        { text: "Send my CV — yifuthi-ifutshane, 1-2 amakhasi, ngaphandle kwesithombe.",  correct: true },
        { text: "Send my resume kanye le-CV ye-5-amakhasi ngezimo zonke.",                 correct: false },
        { text: "Send isithombe esikhulu phambili kwe-CV.",                                 correct: false },
      ],
      explanation: "Ku-UK kufuneka i-CV efutshane (1-2 amakhasi), kungekho isithombe (kuyikuvikela kwe-bias hiring law). Ungafaki i-resume — ngamagama ehlukileyo, kodwa kuyahlanganiseka. Khetha elilodwa — i-CV.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (i-UK formal email)',
      prompt: 'Ngithumele i-CV yami namhlanje.',
      correct: ['I have attached my CV.', "I've attached my CV.", 'I attached my CV today.', 'I have attached my CV today.', 'Please find my CV attached.'],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa isikhala — i-job advert iqamuka eSan Francisco",
      sentence: 'Please send your ______ to careers@company.com.',
      options: ['CV', 'resume', 'biography'],
      correct: 'resume',
      context: "Indawo: San Francisco = i-US. Ku-US kuthiwa 'resume', hatshi 'CV'.",
    },
  ],

  rwenDialogue: {
    intro: 'Umngane wakho ekhaya uyakucela ukuncedo — ufakela umsebenzi e-UK okwesikhathi sokuqala.',
    lines: [
      { speaker: 'npc', target: "I'm applying for a job in London. They want me to send my CV — but my Zimbabwe CV is 5 pages. Is that OK?", native: "Ngifakela umsebenzi eLondon. Bafuna ngithumele i-CV yami — kodwa i-CV yami yase-Zimbabwe ingamakhasi amahlanu. Ingavumela?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "No — UK CVs are short, just 1 or 2 pages. Cut it down. No photo either.",  native: 'Hatshi — ama-CV e-UK afutshane, ngamakhasi 1-2 kuphela. Wuncipisise. Ungafaki isithombe.', correct: true,  feedback: 'Wenze kahle — wamzwisile ukushintsha okukhulu. I-UK CV ifutshane ngenhloso.' },
          { target: 'Yes, 5 pages is fine.',                                                       native: 'Yebo, amakhasi amahlanu alungile.',                                                          correct: false, feedback: 'Hatshi — ama-CV e-UK afutshane (1-2 amakhasi). Inkampani izadinwa lifutshane.' },
          { target: 'Send a resume instead.',                                                      native: 'Thumela i-resume esikhundleni.',                                                              correct: false, feedback: "Lapha kuthiwa 'CV' (ku-UK). Ungashintshanisi amagama — qha wuncipisise i-CV ibe yifutshane." },
        ],
      },
      { speaker: 'npc', target: "Oh — that's a big difference. Thank you. I'll cut it.", native: "Heee — kushintsho olukhulu lolo. Ngiyabonga. Ngizalushinciza." },
      { speaker: 'rwen', rwenLine: "Iphutha encane — ama-CV amade — kuyinto evamile kakhulu kwabasanda ukufika. Manje uyakwenelisa ukunceda omunye.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Igama elisetshenziswayo eLondon",   correct: ['CV', 'cv'] },
      { prompt: "Igama elisetshenziswayo eNew York", correct: ['Resume', 'resume', 'résumé'] },
      { prompt: "Bhala 'Ngithumele i-CV yami' ngesiNgisi", correct: ['I have attached my CV.', "I've attached my CV.", 'I have attached my CV', "I've attached my CV", 'Please find my CV attached.'] },
    ],
  },

  mission: {
    title: 'Bukela i-CV / resume yakho',
    task: "Lamuhla, vula i-CV yakho. Bala amakhasi. Uma ingaphezu kwamabili — qala ukuyincipisa. Susa: ubuhle bezikole zakuqala (primary school), izimangaliso ezingahlangenanga lomsebenzi, isithombe sakho. Hlala lokho okuhambisana lomsebenzi ofuna ukufakela kuwo.",
    rwenSignoff: 'I-CV yokuhamba endaweni entsha kuyahamba ngempandela. Khangela kabili.',
  },

  phase8: {
    scenario: "Usemhlanganweni wabantu abafuna umsebenzi (job-seekers' meetup) eBirmingham. Umuntu osanda kufika kuvela e-Bulawayo uyakucela iseluleko nge-CV yakhe yokuqala e-UK. Ufanele ukucacisa umehluko phakathi kwe-CV yase-Zimbabwe le-UK CV.",
    rwenRole: "Sibanda — ofike eUK kunyaka odlulileyo, useminyakeni engaba ngu-32, ngugogo we-IT esekhaya kodwa angakaqali umsebenzi e-UK. Kalesithakazelo, kodwa udidekile.",
    successCriteria: "Umfundi achaze umehluko phakathi kwe-UK CV (1-2 amakhasi, ngaphandle kwesithombe) le-Zimbabwe CV. Asebenzise igama 'CV' (hatshi 'resume') ngenxa yokuthi sikhulumayo nge-UK. Acebise ukuncipisa lokususa isithombe.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
