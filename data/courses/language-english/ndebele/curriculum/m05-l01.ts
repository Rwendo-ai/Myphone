import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-mother-father',
  module: 5,
  lesson: 1,
  title: 'Mother & Father — uMama loBaba',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 5 imayelana lemuli. Siqala ngabazali — 'Mother' = uMama, 'Father' = uBaba. EsiNdebeleni siyazi ukuthi uMama lo-Mama (direct address), uNina (formal/imbongi) bayehluka. IsiNgisi sikuhlanganisa konke ku-'Mother' loku-'Mom' / 'Mum' / 'Mommy' — kodwa ezi ziyahlukaniseka ngokuthi sengena phi.",
    culturalNote: "EsiNdebeleni ungathi 'uMama' loba 'Mama!' kuye unina wakho — kuhle, kulungile. EsiNgisini, 'Mother' kunzima — kubukeka njengomtsho omude, ovaliwe. Abantwana abakhulayo basebenzisa 'Mom' (US) loba 'Mum' (UK) loba 'Mommy' (lapho besebancane). Kungumahluko owomvelo — njengoba thina sikhetha phakathi kuka-'uMama' lo-'Mama!' — kodwa kufanele wazi ukuthi yiphi efaneleyo: amaMelika athi 'Mom', amaNgisi athi 'Mum', abantwana abancane bathi 'Mommy' / 'Mummy' / 'Daddy'. IzwiloNkulunkulu lithi 'Hlonipha uyihlo lonyoko' (Eksodusi 20:12) — ukuhlonipha akusukuli; akuncikanga emagameni, kunalokho kubonakala ezwini lakho lasekuziphatheni kwakho.",
  },

  chunks: [
    {
      id: 'mother',
      target: 'Mother',
      native: 'uMama (igama elipheleleyo, eli-formal)',
      literal: 'uMama — used in writing or formal address',
      emoji: '👩🏾',
      phonetic: 'MUH-thuh',
      audioRef: null,
    },
    {
      id: 'mom_mum',
      target: 'Mom / Mum / Mommy',
      native: 'Mama (njengomemezo / direct address)',
      literal: 'Mom = US, Mum = UK, Mommy = abantwana abancane',
      emoji: '🤱🏾',
      phonetic: 'MOM / MUM / MOM-mee',
      audioRef: null,
    },
    {
      id: 'father',
      target: 'Father',
      native: 'uBaba (igama elipheleleyo, eli-formal)',
      literal: 'uBaba — formal reference',
      emoji: '👨🏾',
      phonetic: 'FAH-thuh',
      audioRef: null,
    },
    {
      id: 'dad',
      target: 'Dad / Daddy',
      native: 'Baba (direct, kuyazwakala kufudumele)',
      literal: 'Dad = relaxed; Daddy = babancane / khona kufudumele',
      emoji: '👨🏾‍🦱',
      phonetic: 'DAD / DAD-dee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Formal vs informal — Mother/Father vs Mom/Dad',
    explanation: "EsiNgisini 'Mother' lo-'Father' kuyenzelwa ukubhalwa, izincwadi, lokukhuluma okuqondileyo (kuthi: 'My mother is a teacher'). 'Mom' / 'Mum' / 'Dad' yinhloboyokukhuluma yansuku zonke — emakhaya, lapho ubabaza unina. 'Mommy' / 'Daddy' isetshenziswa ngabantwana, futhi ngabadala uma bekhuluma ngokufudumele. Khetha: 'Mom' (uma uneminyaka ka-7 phezulu) noma 'Mum' uma usenyakatho-Afrika lakhuluma njenge-British.",
    examples: [
      { target: 'My mother lives in Bulawayo.',  native: 'Umama wami uhlala eBulawayo.' },
      { target: "Hi Mom, I'm home!",              native: '"Mama, sengifikile ekhaya!"' },
      { target: 'My dad is a pastor.',            native: 'uBaba wami ngumfundisi.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lentando yawo yesiNdebele',
      pairs: [
        { left: 'Mother',     right: 'uMama (formal)' },
        { left: 'Mom / Mum',  right: 'Mama! (direct)' },
        { left: 'Father',     right: 'uBaba (formal)' },
        { left: 'Dad',        right: 'Baba!' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uxoxa lomngane ngomama wakho',
      prompt: 'Umama wami ufundisa esikolo esiseBulawayo.',
      correct: ['My mother teaches at a school in Bulawayo.', 'My mother teaches at a school in Bulawayo', 'my mother teaches at a school in Bulawayo.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Faka igama elifaneleyo — uthi kuMama wakho ekhaya',
      sentence: '_____, can you help me with this?',
      options: ['Mother', 'Mom', 'Madam'],
      correct: 'Mom',
      context: "Ungathi 'Mother' kuMama wakho — kungezwakala kungefudunyezwe, njengasezincwadini. 'Mom' yiyo efaneleyo emakhaya — fudumele, kuvuleke.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha umutsho ofaneleyo',
      question: "Umngane wakho oyiNgisi uyabuza ngomzali wakho. Yini efanele?",
      options: [
        { text: "My father is a pastor; we call him Baba at home.",   correct: true },
        { text: "My Baba a pastor.",                                   correct: false },
        { text: "Father mine pastor inside.",                          correct: false },
      ],
      explanation: "'My father is a pastor' lokho yi-formal English elungileyo. Ukubhala ngokuphezulu — 'we call him Baba at home' — kuvula umnyango wakho — umngane uzwa isiNdebele singalahlekanga.",
    },
  ],

  rwenDialogue: {
    intro: 'Umngane oyiNgisi ukuvakashele ekhaya eHarare. Abazali bakho bakhona endlini yokuhlangana. Mxhumanise.',
    lines: [
      { speaker: 'npc', target: "Hi! It's so nice to meet your family.", native: 'Sawubona! Kuyajabulisa ukuhlangana lemuli yakho.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'This is my mother, and this is my father.', native: 'Lo nguMama wami, lo nguBaba wami.', correct: true,  feedback: "Kuhle — uxhumanise ngokufaneleyo. 'This is my mother / father' yindlela elungileyo yokufaka isiNgisi." },
          { target: 'This Mama. This Baba.',                      native: 'Lo Mama. Lo Baba.',                  correct: false, feedback: "Kufitshane kakhulu — faka 'This is my...' njengoba ufaka umuntu omtsha emndenini." },
          { target: 'Mother and father here.',                     native: 'Umama loBaba lapha.',                correct: false, feedback: "Akula 'my' — eshokuthi yibuyo bakho. Faka 'my' — kuyibanga elimuhle elaba." },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you both.", native: 'Kuyajabulisa ukuhlangana lobubili.' },
      {
        speaker: 'rwen',
        rwenLine: "Kuhle kakhulu! Uvule umuzi wakho ngesiNgisi — abazali bakho babonakaliswe ngokuhlonipha.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuyela emuva, bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Mother (ngesiNgisi)',          correct: ['Mother', 'mother'] },
      { prompt: 'Mom — direct (ngesiNgisi)',    correct: ['Mom', 'mom', 'Mum', 'mum'] },
      { prompt: 'My father (ngesiNgisi)',       correct: ['My father', 'my father', 'My father.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Bheka isithombe sikaMama loBaba — ucabange umngane oyiNgisi efika ekhaya. Khuluma ngokuzwakalayo: 'This is my mother. This is my father.' Bese uthi: 'We call her Mama and him Baba at home.' Lokho kuvula umnyango wamasiko ngenkululeko.",
    rwenSignoff: "Kusasa — abantwana, indodana lendodakazi.",
  },

  phase8: {
    scenario: "An English-speaking visitor has arrived at your home in Bulawayo or Harare. Your mother and father are in the living room. Introduce them warmly using 'Mother / Father' (formal English) but mention how you address them at home (Mama / Baba). Answer one or two simple follow-up questions.",
    rwenRole: "Sarah, 32, a friend visiting from London. Warm, curious, asks small follow-ups like 'What does your father do?' or 'Have your parents always lived here?'",
    successCriteria: "User uses 'This is my mother / father' clearly. Mentions Mama or Baba once to show the home register. Uses possessive 'my' before mother/father at least twice. Answers at least one follow-up with a complete sentence.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
