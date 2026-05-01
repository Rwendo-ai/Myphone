import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-do-make',
  module: 8,
  lesson: 2,
  title: '"To do" & "to make" — I do / I make',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiNgezi 'do' ne 'make' zvinotaridzika zvakafanana asi hazvifanani. 'Do' ndeyebasa rauri kuita kare (homework, dishes, work). 'Make' ndeyekugadzira chinhu chitsva (tea, food, mistakes). MuShona 'kuita' rimwe chete rinokwirira zvose — muChiNgezi pane musiyano.",
    culturalNote: "MuShona 'kuita' rinoshanda paunoita basa kana paunogadzira chinhu — rimwe chete. MuChiNgezi 'do' inoreva 'kuzadzisa basa rakatorongwa' (do homework, do dishes), uye 'make' inoreva 'kugadzira chitsva chausina kunge unacho' (make tea, make a sandwich, make a plan). Kana wakaita mistake — unoshandisa 'make' (make a mistake) — nokuti waakagadzira nemaune.",
  },

  chunks: [
    {
      id: 'i_do_my_homework',
      target: 'I do my homework.',
      native: 'Ndinoita basa rangu rechikoro.',
      literal: 'I do my homework',
      emoji: '📚',
      phonetic: 'ay-DOO-may-HOHM-werk',
      audioRef: null,
    },
    {
      id: 'she_makes_tea',
      target: 'She makes tea.',
      native: 'Anogadzira tii.',
      literal: 'She makes tea',
      emoji: '🍵',
      phonetic: 'shee-MAYKS-TEE',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry.",
      native: 'Usanetseke.',
      literal: 'Do not worry',
      emoji: '🙏',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Do vs Make',
    explanation: "DO = basa rakajairika, basa rakatarwa: do work, do homework, do the dishes, do exercise. MAKE = kugadzira chitsva: make tea, make a sandwich, make a plan, make a mistake. 'Don't' = 'do not' — apa 'do' inoshanda sehupauxiliary (chibatsiri).",
    examples: [
      { target: 'I do my homework.',  native: 'Ndinoita basa rangu rechikoro.' },
      { target: 'She makes tea.',     native: 'Anogadzira tii.' },
      { target: "Don't worry.",       native: 'Usanetseke.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'do homework',  right: 'kuita basa rechikoro' },
        { left: 'make tea',     right: 'kugadzira tii' },
        { left: "don't worry",  right: 'usanetseke' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza 'do' kana 'make'",
      sentence: 'I _____ a sandwich for lunch.',
      options: ['do', 'make', 'am'],
      correct: 'make',
      context: "Sandwich uri kuigadzira nyowani — saka 'make'.",
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza 'do' kana 'make'",
      sentence: 'I _____ the dishes after dinner.',
      options: ['do', 'make', 'have'],
      correct: 'do',
      context: "Dishes — basa rakajairika, kwete kugadzira chitsva. Saka 'do'.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Anogadzira tii.',
      correct: ['She makes tea.', 'She makes tea', 'He makes tea.', 'He makes tea'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "Ndinoita basa rangu rechikoro"',
      words: ['homework.', 'do', 'I', 'my'],
      correct: ['I', 'do', 'my', 'homework.'],
      translation: 'Ndinoita basa rangu rechikoro',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Usanetseke.',
      correct: ["Don't worry.", "Don't worry", "Do not worry.", "do not worry."],
    },
  ],

  rwenDialogue: {
    intro: "Uri kuhofisi muHarare. Mukuru wako anokubvunza nezvebasa rauri kuita nhasi.",
    lines: [
      { speaker: 'npc', target: "Morning! What are you working on today?", native: 'Mangwanani! Uri kushanda chii nhasi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I do payroll in the morning, then I make the monthly reports.", native: 'Ndinoita payroll mangwanani, wozonditsva ndinogadzira ma-report emwedzi.', correct: true, feedback: "Wakwanisa — 'do payroll' (basa rakajairika) uye 'make reports' (uri kuzvigadzira nyowani)." },
          { target: "I make payroll, then I do the reports.", native: 'Ndinogadzira payroll, wozonditsva ndinoita ma-report.', correct: false, feedback: "Nyowani! 'Payroll' = basa rakatarwa, saka 'DO payroll'. 'Reports' uri kuzvinyora nyowani, saka 'MAKE reports'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Do' = basa rakaongorora, 'Make' = kugadzira chitsva. Kana uchivhiringwa, zvibvunze: 'Ndinokugadzira here? Kana ndinongoita?' ",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I do my homework (in English)', correct: ['I do my homework', 'I do my homework.', 'i do my homework.'] },
      { prompt: 'She makes tea (in English)', correct: ['She makes tea', 'She makes tea.', 'He makes tea', 'He makes tea.', 'she makes tea.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, taura nezvebasa rimwe rauri kuita: shandisa 'I do' kana 'I make'. Semuenzaniso: 'I do the laundry', 'I make breakfast', 'I do my emails', 'I make a plan'. Tarisa kuti uri kuita basa rakajairika here, kana kugadzira chinhu chitsva.",
    rwenSignoff: "Mangwana tinotanga 'go' ne 'come'. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri pa-Zoom call, wapindwa nemumwe muUK ane interest mubasa rako. Tsanangura mabasa aunoita zuva nezuva — shandisa 'do' uye 'make' nemazvo.",
    rwenRole: "Sarah, 28, project manager muLondon. Anoda kunzwisisa zuva rako rebasa — anonyora ma-notes uye anokubvunza zvakawanda.",
    successCriteria: "Mudzidzi anoshandisa 'do' (do payroll, do reports, do work) uye 'make' (make plans, make calls, make decisions) nemusiyano wakajeka. Pasina kuvhiringa zviviri.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
