import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-do-make-have',
  module: 4,
  lesson: 7,
  title: 'To do / make / have',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "Le ma-verbs amathathu — 'do', 'make', 'have' — yiwo a-most common esiNgisini. Kodwa 'do' lo 'make' kuyadidisa ngoba esiNdebeleni igama elilodwa ('enza') liyenza ku-bobubili. EsiNgisini kufuneka ukhethe.",
    culturalNote: "I-rule yokuthi 'do' kumbe 'make': 'Make' = ukukha into entsha (make a cake, make a plan, make a phone call). 'Do' = ukwenza umsebenzi kumbe i-action (do work, do homework, do exercise). Kodwa kulezinto ezisimanga: 'do the dishes' (ukugeza izinkomishi), 'make the bed' (ukulungisa umbheda) — uyikhumbulayo. Kanjalo, 'have' iqakathekile ku-UK: 'I have a cold' (ngilesixhwala), 'I have a question' (ngilesibuza), 'I have a meeting at 3' (ngile-meeting nge-3).",
  },

  chunks: [
    {
      id: 'do',
      target: 'I do',
      native: 'Ngenza',
      literal: 'general action / task',
      emoji: '🛠️',
      phonetic: 'AHY DOO',
      audioRef: null,
    },
    {
      id: 'make',
      target: 'I make',
      native: 'Ngenza (something new)',
      literal: 'create / produce something',
      emoji: '🍰',
      phonetic: 'AHY MAYK',
      audioRef: null,
    },
    {
      id: 'have',
      target: 'I have',
      native: 'Ngilakho',
      literal: 'possess / own / experience',
      emoji: '🤲',
      phonetic: 'AHY HAV',
      audioRef: null,
    },
    {
      id: 'has',
      target: 'She has',
      native: 'Ulakho (owesifazana)',
      literal: 'third person of "have" — irregular!',
      emoji: '👩',
      phonetic: 'SHEE HAZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: "do vs make vs have — collocations",
    explanation: "Akukho rule eqondileyo nokho — kufuneka ukhumbule ama-collocation: DO: do work, do homework, do exercise, do the dishes, do laundry. MAKE: make a cake, make a plan, make a phone call, make a mistake, make the bed. HAVE: have a meeting, have a problem, have time, have a cold, have lunch. Khumbula: i-third person ka-'have' ay-'haves' — yi-'has'. 'She HAS a meeting' (hatshi 'she haves').",
    examples: [
      { target: 'I do my homework after dinner',  native: 'Ngenza i-homework yami emva kwe-dinner' },
      { target: 'She makes tea every morning',    native: 'Wenza i-tiye ekuseni ngalunye' },
      { target: 'I have a meeting at 3pm',        native: 'Ngile-meeting nge-3 emini' },
      { target: 'He has a question',              native: 'Ulesibuza (faka -s ku "has")' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Khetha: do, make, kumbe have",
      sentence: 'Can you _____ a cup of tea, please?',
      options: ['make', 'do', 'have'],
      correct: 'make',
      context: 'Lapho usenza into entsha (eg, i-tea esuka emanzini lo-tea bag), sebenzisa "make". "Make tea", "make coffee", "make food".',
    },
    {
      type: 'fill_blank',
      instruction: "Khetha: do, make, kumbe have",
      sentence: 'I _____ a meeting with my manager at 4pm.',
      options: ['have', 'do', 'make'],
      correct: 'have',
      context: '"Have a meeting" yi-fixed expression — sebenzisa njalo "have" ku-meeting, appointment, plan, kumbe lunch.',
    },
    {
      type: 'fill_blank',
      instruction: "Khetha: do, make, kumbe have (with right form)",
      sentence: 'My sister _____ a baby. He is two months old.',
      options: ['has', 'have', 'is'],
      correct: 'has',
      context: '"My sister" = third person — kufanele kube "has" (hatshi "have"). Lokhu kuyirreqular form ka-"have".',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngenza i-homework yami nsuku zonke',
      correct: ['I do my homework every day', 'i do my homework every day'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi eqondileyo?',
      question: "Ufuna ukutsho 'wenza iphutha' ngesiNgisi.",
      options: [
        { text: 'You made a mistake.', correct: true },
        { text: 'You did a mistake.', correct: false },
        { text: 'You have a mistake.', correct: false },
      ],
      explanation: "'Make a mistake' yi-fixed expression. Akumelanga uthi 'do a mistake' — kuyaqonda kahle ku-Ndebele speaker, kodwa esiNgisini kuyiphutha. Uphezu kwale-mistake yokucabanga 'I am making a mistake right now'.",
    },
  ],

  rwenDialogue: {
    intro: "Usebenza ku-warehouse eSheffield. I-shift supervisor wakho ufuna ukukukhumbuza ngezinto.",
    lines: [
      {
        speaker: 'npc',
        target: "Hi, did you do the morning checks already?",
        native: 'Sawubona, usuwenzile ama-check asekuseni?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I did all the checks at 7am.", native: 'Yebo, ngenze ama-check wonke nge-7 ekuseni.', correct: true, feedback: "Kahle. 'Did the checks' (past tense ka-do)." },
          { target: "Yes, I made all checks.", native: 'Yebo, ngenze ama-check wonke.', correct: false, feedback: "Sebenzisa 'do' / 'did' kuma-checks (i-routine task), hatshi 'make'. 'Make' yokwakhiwa kwento entsha." },
        ],
      },
      {
        speaker: 'npc',
        target: "Good. Do you have any questions before we start?",
        native: 'Kuhle. Ulemibuzo ngaphambi kokuqala?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I have one question. What time is the break?", native: 'Yebo, ngilembuzo eyodwa. Ngubani isikhathi se-break?', correct: true, feedback: "Kuhle. 'Have a question' yi-natural English." },
          { target: "Yes, I make one question.", native: '...', correct: false, feedback: "'Make a question' akusebenzi. Sebenzisa 'have a question' (kumbe 'I have one question')." },
        ],
      },
      {
        speaker: 'npc',
        target: "Break is at 11. Could you make me a cup of tea before then?",
        native: 'I-break ngo-11. Ungangenzela ikhophi yetiye ngaphambi kwalokho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sure, I'll make you a tea now.", native: 'Yebo, sengizokwenzela i-tiye manje.', correct: true, feedback: "Kuhle kakhulu. 'Make a tea' = i-correct collocation. 'Make' yokuyenza into entsha." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenzile kuhle! Do, make, have — yi-three sisters esiNgisini. Khumbula: 'do' yokwenza, 'make' yokwakha, 'have' yokuba lakho. Sengathi uzakuthola!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngekhanda — gxila kwi-collocations.',
    prompts: [
      { prompt: '"I have a meeting" (ngesiNgisi)',     correct: ['I have a meeting', 'i have a meeting'] },
      { prompt: '"She makes tea"',                     correct: ['She makes tea', 'she makes tea'] },
      { prompt: '"He has a car" (irregular!)',         correct: ['He has a car', 'he has a car'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Bhala izinto ezi-3 ngosuku lwakho lwanamhlanje, sebenzisa kwa-do, make, lo have: 'I do my work', 'I make breakfast', 'I have a meeting'. Phinde uthole ngesomi senzakali. La ma-collocations azisebenza ku-emails lakuminxoxo emisebenzini.",
    rwenSignoff: "Sokuyabanjela kuhle. Khusasa — ku-l08, sifunda 'want, need, like'. Kubaluleke kakhulu emasitolo.",
  },

  phase8: {
    scenario: "Warehouse shift eSheffield. Supervisor ufuna ukukwazi okuwenzile, lokuhambela kuwo iimibuzo onayo, lokwenzela laba abasebenza nawe i-tea kumbe i-coffee. User kufanele asebenzise i-do/make/have ngendlela elungile.",
    rwenRole: "Mike, 40, warehouse shift supervisor, no-nonsense but fair. Wants brief, accurate updates — won't correct your English politely.",
    successCriteria: "User uses at least one collocation each from 'do', 'make', and 'have' correctly (e.g. 'do checks', 'make tea', 'have a question / have a meeting'). Uses 'has' (not 'haves') for third person.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
