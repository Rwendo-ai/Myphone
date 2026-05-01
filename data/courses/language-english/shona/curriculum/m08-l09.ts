import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Future tense — Tomorrow I will...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Mangwana — tomorrow. MuChiNgezi pakutaura zvichaitika, unoshandisa 'will' kana 'going to'. 'I will go' = 'Ndichaenda', 'I'm going to call' = 'Ndichada kufona'. Zvose zvinoshanda — asi pane musiyano muduku wenguva.",
    culturalNote: "MuShona future inotokwana ne-prefix 'cha-': ndichaenda, tichaona, achaita. Prefix imwe inogadzirisa zvose. MuChiNgezi unoda 'will' (auxiliary verb) pamberi pe-base verb: 'I WILL go', 'I WILL see', 'I WILL do'. 'Going to' inotaura zvauri kuronga zvirinani — 'I'm going to call her' = unoronga kuita izvozvo. 'Will' inogona kunge yakangouya pakukurumidza — 'I'll get it' (foni inorira, iwe wati 'I'll get it' = ndichaitora). Zvose zvinokumbira plan kupita kana hapana plan.",
  },

  chunks: [
    {
      id: 'tomorrow_i_will',
      target: 'Tomorrow I will call you.',
      native: 'Mangwana ndichakufonera.',
      literal: 'Tomorrow I will call you',
      emoji: '📞',
      phonetic: 'tu-MOR-oh-ay-WIL-KAWL-yoo',
      audioRef: null,
    },
    {
      id: 'im_going_to',
      target: "I'm going to study tonight.",
      native: 'Ndichada kudzidza husiku huno.',
      literal: 'I am going to study tonight',
      emoji: '📚',
      phonetic: 'aym-GOH-ing-too-STUH-dee',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow!',
      native: 'Tichaonana mangwana!',
      literal: 'See you tomorrow',
      emoji: '👋',
      phonetic: 'SEE-yoo-tu-MOR-oh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Simple future — Will & going to',
    explanation: "WILL + base verb = decision yapakarepo kana general future ('I'll get it', 'I will be there'). GOING TO + base verb = plan yapfuura yakatorongwa ('I'm going to study tonight'). Pakutaura, 'I will' inopfupiswa kuti \"I'll\" — 'I'll see you tomorrow'. ShonaSpeaker tip: paunoda kushandisa '-cha-' yeChiShona, garomo 'will' muChiNgezi — yakareruka.",
    examples: [
      { target: 'Tomorrow I will call you.',         native: 'Mangwana ndichakufonera.' },
      { target: "I'm going to study tonight.",       native: 'Ndichada kudzidza husiku huno.' },
      { target: 'See you tomorrow!',                 native: 'Tichaonana mangwana!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I will call',     right: 'Ndichafona' },
        { left: "I'm going to go", right: 'Ndichada kuenda' },
        { left: 'See you tomorrow', right: 'Tichaonana mangwana' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza future form yakakodzera',
      sentence: 'Tomorrow I _____ visit my mother.',
      options: ['will', 'is', 'have'],
      correct: 'will',
      context: "Future verb iyi inoda 'will' pamberi pe-base verb 'visit'. ChiShona prefix '-cha-' = ChiNgezi 'will'.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — future tense',
      prompt: 'Mangwana ndichakufonera.',
      correct: ["Tomorrow I will call you.", "Tomorrow I'll call you.", "I will call you tomorrow.", "I'll call you tomorrow.", 'tomorrow i will call you.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kupedza musangano',
      prompt: 'Tichaonana mangwana!',
      correct: ['See you tomorrow!', 'See you tomorrow', "See you tomorrow.", 'see you tomorrow!'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka future plan: "Husiku huno ndichada kudzidza"',
      words: ['tonight.', 'study', "I'm", 'to', 'going'],
      correct: ["I'm", 'going', 'to', 'study', 'tonight.'],
      translation: 'Husiku huno ndichada kudzidza',
    },
    {
      type: 'multiple_choice',
      instruction: 'Foni inorira. Iwe wati pakarepo:',
      question: '"I _____ get it!"',
      options: [
        { text: "'ll", correct: true },
        { text: 'am going to', correct: false },
        { text: 'will be', correct: false },
      ],
      explanation: "Pakarepo decision — shandisa \"'ll\" (will). 'I'm going to' inotsanangura plan yakatorongwa kare — kwete decision yapakarepo.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-office muLondon. Watanga kutaura nemumwe colleague nezvemangwana.",
    lines: [
      { speaker: 'npc', target: "What are you doing tomorrow?", native: 'Uchaita chii mangwana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to a doctor's appointment in the morning, and then I'll come to the office at 2.", native: 'Ndichada kuna chiremba mangwanani, ndozonditsva ndichauya kuhofisi na2.', correct: true, feedback: "Wakwanisa! Wakasanganisa 'going to' (plan yakatorongwa — chiremba) ne 'will' (\"I'll come\" — yakajairika)." },
          { target: "Tomorrow I go doctor. I come office.", native: 'Mangwana ndinoenda chiremba. Ndinouya kuhofisi.', correct: false, feedback: "MuChiNgezi unoda future marker — 'will' kana 'going to'. 'I go' inotaura habit yauri kuita zuva nezuva, kwete chinhu chimwe chete chichaitika mangwana." },
        ],
      },
      { speaker: 'npc', target: "Cool — I'll see you at 2 then. Have a good morning!", native: 'Zvakanaka — tichaonana na2. Mangwanani akanaka!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thanks. See you tomorrow!", native: 'Ndatenda. Tichaonana mangwana!', correct: true, feedback: "Yakanaka — 'See you tomorrow' chirevo chakanyatso ngazve mangwana." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Will' (kana ChiShona '-cha-') = future. 'Going to' = plan yakatorongwa. Mese murikushanda — saka usashushikana — chero ipi ipi inonzwika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Tomorrow I will call you (in English)', correct: ['Tomorrow I will call you', 'Tomorrow I will call you.', "Tomorrow I'll call you.", "I'll call you tomorrow.", 'tomorrow i will call you.'] },
      { prompt: 'See you tomorrow (in English)', correct: ['See you tomorrow', 'See you tomorrow!', 'See you tomorrow.', 'see you tomorrow!'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi manheru, ronga zvinhu zvitatu zvauchaita mangwana. Taura zvose muChiNgezi: 'Tomorrow I will go to ___', 'I'm going to ___', 'I'll see ___'. Practice 'will' uye 'going to' zvose.",
    rwenSignoff: "Mangwana — capstone. Tichabatanidza zvose tose. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri kuhofisi muLondon. Mukoma webasa wati 'What's your plan for tomorrow?' Tsanangura zvauchaita mangwana — shandisa 'will' uye 'going to' zvose.",
    rwenRole: "David, 38, mukuru webasa rako. Anokuvavarira asi anenge nemibvunzo yakananga — anoda kuziva schedule yako mangwana.",
    successCriteria: "Mudzidzi anotsanangura mangwana achishandisa 'will' (decision yapakarepo) ne 'going to' (plan yakatorongwa) zvose, anopedza nehutsika ('See you tomorrow').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
