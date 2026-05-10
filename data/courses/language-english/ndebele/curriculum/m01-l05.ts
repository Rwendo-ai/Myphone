import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-good-evening',
  module: 1,
  lesson: 5,
  title: 'My name is...',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Igama lakho yiwo umlilo wakho — kufanele uwukhumbuze ngokuzwakalayo lapho ufika emsebenzini, esikoleni, e-airport. Indlela enhle: 'My name is...' kumbe 'I'm...'",
    culturalNote: "ESiNdebele, kuyajwayelekile ukuthi umuntu omdala akubuze igama lakho ngokucondileyo: 'Ungubani igama lakho?' Esikhiweni sesiNgisi, abantu bavame ukutshela igama labo kuqala ('I'm Sarah'), babelinde ukuthi labo uyabuyisela. Lapho igama lakho lifutshi labo lingajwayelekanga, kuyaphephile ukuthi ulisho kabili kumbe ulipele kalula. Ungaphenduki ngenxa yokuthi labo bafuna ukubiza igama lakho ngendlela elula yabo — gcina lakho.",
  },

  chunks: [
    {
      id: 'my_name_is',
      target: 'My name is...',
      native: 'Igama lami ngingu...',
      literal: 'My name is...',
      emoji: '📛',
      phonetic: 'may-NAYM-iz',
      audioRef: null,
    },
    {
      id: 'im',
      target: "I'm...",
      native: 'Ngingu... (kalula)',
      literal: 'I am...',
      emoji: '👤',
      phonetic: 'AYM',
      audioRef: null,
    },
    {
      id: 'whats_your_name',
      target: "What's your name?",
      native: 'Ungubani igama lakho?',
      literal: "What is your name?",
      emoji: '❓',
      phonetic: 'wuts-yor-NAYM',
      audioRef: null,
    },
    {
      id: 'nice_meet',
      target: 'Nice to meet you',
      native: 'Ngiyathokoza ukukubona',
      literal: 'Nice to meet you',
      emoji: '🤝',
      phonetic: 'nayss-tu-MEET-yu',
      audioRef: null,
    },
    {
      id: 'you_too',
      target: 'You too',
      native: 'Lawe futhi',
      literal: 'You too',
      emoji: '🙌',
      phonetic: 'yoo-TOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Introducing yourself',
    explanation: "Inhlelo elula: greeting → igama → engeza ngomlomo. Mzekelo: 'Hello, I'm Thabo. What's your name?' Lapho omunye atsho 'Nice to meet you', phendula ngo-'You too' — kufutshane, kuyiwo. Ungasebenzisi 'Me too' lapha — kungatshikiza ukuthi 'Mina ngiyathokoza ukubona mina', okungasebenzi.",
    examples: [
      { target: "Hello, I'm Thabo.",                native: 'Salibonani, ngingu Thabo.' },
      { target: "What's your name?",                 native: 'Ungubani igama lakho?' },
      { target: 'Nice to meet you. — You too.',      native: 'Ngiyathokoza. — Lawe futhi.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa',
      pairs: [
        { left: 'My name is',         right: 'Igama lami ngingu' },
        { left: "What's your name?",  right: 'Ungubani igama lakho?' },
        { left: 'Nice to meet you',   right: 'Ngiyathokoza ukukubona' },
        { left: 'You too',            right: 'Lawe futhi' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Igama lami ngingu Sipho.',
      correct: ['My name is Sipho', 'my name is Sipho', "I'm Sipho", "I am Sipho", 'My name is Sipho.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: "Hello, ____ Nomsa. What's your name?",
      options: ["I'm", 'I have', 'You are'],
      correct: "I'm",
      context: 'Uyazimemezela kumuntu omtsha emhlanganweni.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuyiyo',
      question: "Umuntu uthi: 'Nice to meet you.' Ungaphendula ngani?",
      options: [
        { text: 'You too.',     correct: true },
        { text: 'Me too.',      correct: false },
        { text: 'Thank you.',   correct: false },
      ],
      explanation: "U-'You too' kuyiyo — kuyacindeka ukuthi 'Lawe ngiyathokoza ukukubona'. U-'Me too' yi-grammatical mistake lapha.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['name', 'your', 'is', 'What'],
      correct: ['What', 'is', 'your', 'name'],
      translation: 'Ungubani igama lakho?',
    },
    {
      type: 'multiple_choice',
      instruction: "Igama lakho li-'Sibongokuhle'. Umphathi wakho omtsha eUK ulizwa kanzima — uyabuyela: 'Sorry, can you say that again?' Yini ofanele uyitsho?",
      question: 'Khetha:',
      options: [
        { text: "Sure — Si-bo-ngo-ku-hle. You can call me Sibo if it's easier.",  correct: true },
        { text: 'Just call me Bob.',                                                correct: false },
        { text: 'Forget it.',                                                       correct: false },
      ],
      explanation: 'Ungaphenduki ngenxa yokuthi igama lakho linzima — lipele kalula, futhi unganika i-shorter version olungayitsho.',
    },
  ],

  rwenDialogue: {
    intro: "EHeathrow, e-arrival hall. Umuntu omtsha owahlangana naye e-flight uyakubuza ngokulungile.",
    lines: [
      { speaker: 'npc', target: "Hi! I don't think we got introduced. I'm Emma.", native: "Salibonani! Akukafiki sihlangana kahle. NginguEmma." },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hello, I'm Thandi. Nice to meet you.", native: 'Salibonani, ngingu Thandi. Ngiyathokoza.', correct: true,  feedback: 'Yikho — ufakela igama lakho, futhi ufakela "Nice to meet you" emva kwalokho.' },
          { target: "I'm fine.",                              native: 'Ngiyaphila.',                                correct: false, feedback: 'Lokho yimpendulo ku-"How are you?", hatshi lapho umuntu ezimemezela.' },
          { target: 'Thandi.',                                native: 'Thandi.',                                    correct: false, feedback: 'Igama lodwa kufutshane kakhulu — engeza "I\'m" kumbe "My name is".' },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you, Thandi. Where are you off to?", native: 'Kuhle ukukubona, Thandi. Uya ngaphi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Manchester. You?',  native: 'Manchester. Wena?',  correct: true,  feedback: 'Yikho — ifutshi, ihambisana kahle.' },
          { target: 'Yes.',              native: 'Yebo.',                correct: false, feedback: 'Akukasimanga — uyabuza indawo, hatshi yebo/hatshi.' },
          { target: 'I am going Manchester to my cousin.', native: 'Ngiya Manchester ku-cousin.', correct: false, feedback: 'Awungani — kufanele uthi "I\'m going to Manchester". Kodwa lapha "Manchester. You?" kufushane futhi kunhle.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Ufundile! Igama lakho lithathwa kahle, ufakela "Nice to meet you", futhi ubuyisa umbuzo. Lokho yikho okungenza isikhulumo siqhubeke.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: "'Igama lami ngingu Sipho' ngesiNgisi", correct: ['My name is Sipho', "I'm Sipho", 'I am Sipho'] },
      { prompt: "'Ungubani igama lakho?' ngesiNgisi",   correct: ["What's your name?", 'What is your name?', "What's your name"] },
      { prompt: "Umuntu athi 'Nice to meet you' — ufuna ukuthini ngokufanele?", correct: ['You too', 'You too.', 'Nice to meet you too'] },
    ],
  },

  mission: {
    title: 'Umsebenzi',
    task: "Lamuhla, ungazifundeli phambi kwesibuko: 'Hello, I'm [igama lakho]. Nice to meet you.' Phinda lokhu izikhathi ezintathu. Ngomso uzozisebenzisa ngempela.",
    rwenSignoff: 'Cheers — sizahlangana kusasa.',
  },

  phase8: {
    scenario: "Usanda kufika eDarwin, eAustralia, ukuze usebenze njenge-aged care worker. Yilanga lakho lokuqala — i-orientation. Umuntu omtsha esebenza laye uyakuhlangabeza ekamelweni elingenele. Ufuna ukuzimemezela kahle ngegama lakho lonke leqondileyo.",
    rwenRole: "Liam — Australian aged care worker, eminyakeni engaba ngu-30, owaseDarwin. Olomusa, owecasual style — uvame 'mate' kakhulu.",
    successCriteria: "Umfundi azimemezele ngegama lakhe (sebenzisa 'My name is' kumbe 'I'm'), avumele ukulipela uma kunzima ku-Liam, futhi abuyise umbuzo ngegama lika-Liam. Avale nge-'Nice to meet you' bese ahlangabeze 'You too' (HATSHI 'Me too').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
