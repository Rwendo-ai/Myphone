import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-want-need-like',
  module: 4,
  lesson: 8,
  title: 'To want / need / like',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Lapha eUK uzakhuluma njalo: 'I want a coffee', 'I need a doctor', 'I like this shop'. Le ma-verbs amathathu yiwo angakuncedayo emasitolo, kuma-restaurants, ku-NHS, lo nasebantwini.",
    culturalNote: "Ezindaweni ezithengisa ku-UK, kuyikuhlonipha ukusebenzisa 'I'd like' (= I would like) endaweni ka 'I want'. 'I want a coffee' kuyaqonda kodwa kuvame ukubanjelwa njenge-rude/abrupt. 'I'd like a coffee, please' yi-natural British English. Kanjalo: 'need' = ngiyadinga (kuyaphuthuma), 'want' = ngiyafuna (kuyathandeka), 'like' = ngiyathanda (kuyajabulisa). Le-difference iqakathekile.",
  },

  chunks: [
    {
      id: 'want',
      target: 'I want',
      native: 'Ngiyafuna',
      literal: 'desire — direct, can be blunt',
      emoji: '🤔',
      phonetic: 'AHY WONT',
      audioRef: null,
    },
    {
      id: 'would_like',
      target: "I'd like",
      native: 'Ngingathanda',
      literal: 'polite version of "want"',
      emoji: '🙏',
      phonetic: 'AHYD LAYK',
      audioRef: null,
    },
    {
      id: 'need',
      target: 'I need',
      native: 'Ngiyaswela',
      literal: 'must have — necessary',
      emoji: '❗',
      phonetic: 'AHY NEED',
      audioRef: null,
    },
    {
      id: 'like',
      target: 'I like',
      native: 'Ngiyathanda',
      literal: 'enjoy — present feeling',
      emoji: '❤️',
      phonetic: 'AHY LAYK',
      audioRef: null,
    },
  ],

  pattern: {
    name: "want / need / like + noun OR + to + verb",
    explanation: "Le ma-verbs zilakho ama-pattern amabili: (1) want/need/like + i-noun: 'I want a coffee', 'I need water', 'I like music'. (2) want/need/like + 'to' + i-verb: 'I want to go', 'I need to sleep', 'I like to read'. Akumelanga uchithe i-'to' lapho i-verb iqondisiwe — 'I want go' yi-mistake evamileyo, kufanele kube 'I want TO go'.",
    examples: [
      { target: "I'd like a coffee, please",     native: 'Ngingathanda i-khofi, ngicela' },
      { target: 'I need to see a doctor',        native: 'Ngiyaswela ukubona udokotela' },
      { target: 'I like to walk in the park',    native: 'Ngiyathanda ukuhamba ku-paki' },
      { target: 'She wants tea, not coffee',     native: 'Ufuna i-tiye, hatshi i-khofi' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Faka 'to' nxa kuqakathekile",
      sentence: 'I need _____ go to the bank today.',
      options: ['to', 'a', '(nothing)'],
      correct: 'to',
      context: 'Lapha i-verb (go) ilandela kufuneka i-"to": "I need TO go". Ungachithi le-"to".',
    },
    {
      type: 'fill_blank',
      instruction: "Khetha: want, need, kumbe like",
      sentence: 'My phone is broken. I _____ a new one urgently.',
      options: ['need', 'want', 'like'],
      correct: 'need',
      context: '"Need" = uphuthuma, ay-okuthandeka. Lapho i-phone yephukile, ku-need (hatshi i-want kuphela).',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (i-polite version)',
      prompt: 'Ngingathanda i-tiye, ngicela',
      correct: ["I'd like a tea, please", "I would like a tea, please", "I'd like tea, please"],
    },
    {
      type: 'build_sentence',
      instruction: "Akhipha umugqa: 'She wants to go home'",
      words: ['home.', 'to', 'wants', 'go', 'She'],
      correct: ['She', 'wants', 'to', 'go', 'home.'],
      translation: 'Ufuna ukubuyela ekhaya',
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi i-polite version emasitolo eUK?',
      question: 'Ku-coffee shop, awufuni ukuthi ucele i-coffee. Iyiphi okuhle?',
      options: [
        { text: "I'd like a coffee, please.", correct: true },
        { text: "Give me a coffee.", correct: false },
        { text: "I want coffee.", correct: false },
      ],
      explanation: "'I'd like ... please' yi-natural British politeness. 'Give me' kuzwakala kunge-rude. 'I want' kungasebenza kuhle phakathi kwabangani, kodwa kunge-formal. Faka njalo i-'please' nokho.",
    },
  ],

  rwenDialogue: {
    intro: "Uku-Pret a Manger eLondon, ngesikhathi se-lunch. I-server ufuna i-order yakho.",
    lines: [
      {
        speaker: 'npc',
        target: "Hi, what can I get you?",
        native: 'Sawubona, ngingakuthengelani?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'd like a chicken sandwich and a tea, please.", native: 'Sawubona, ngingathanda i-sandwich yenkukhu lo-tiye, ngicela.', correct: true, feedback: "Kuhle kakhulu. 'I'd like ... please' yi-perfect British politeness." },
          { target: "I want chicken sandwich and tea.", native: 'Ngifuna i-sandwich yenkukhu le-tiye.', correct: false, feedback: "Iyaqondakala kodwa kuzwakala kungezwa kakuhle. Sebenzisa 'I'd like ... please' eUK — yindlela ye-natural." },
          { target: "Give me chicken sandwich.", native: 'Nginika i-sandwich yenkukhu.', correct: false, feedback: "'Give me' kuyathukuthelisa kakhulu eUK — kungalingani njenge-direct order ku-soldier. Yithi 'I'd like' kuphela." },
        ],
      },
      {
        speaker: 'npc',
        target: "Sure. Anything else?",
        native: 'Yebo. Okunye?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I need to use the toilet quickly. Where is it?", native: 'Ngiyaswela ukusebenzisa indlu yangasese masinya. Ikuphi?', correct: true, feedback: "Kahle — 'I need TO use' (qaphela i-'to'). 'Need' kufanelekile lapha — yi-urgent." },
          { target: "I need use toilet.", native: 'Ngiyaswela ukusebenzisa indlu yangasese.', correct: false, feedback: "Ungachithi i-'to'. Kufanele 'I need TO use the toilet'. Le-'to' yi-essential phakathi kuka 'need' lo i-verb." },
        ],
      },
      {
        speaker: 'npc',
        target: "Down the corridor on the right.",
        native: 'Phansi komkhondo ngeqondiswa.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. I really like this place.", native: 'Ngiyabonga. Ngiyayithanda kakhulu le ndawo.', correct: true, feedback: "Kuhle. 'I like this place' yi-natural — wenze umthengisi azizwe ngokuthi umsebenzi wakhe uyahlonipheka." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenzile njengomuntu wase-London! 'I'd like ... please' yindlela yokuhlonipha. 'Need to' lo 'want to' — khumbula i-'to'!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngekhanda. Khumbula i-"to" phakathi kwe-verbs.',
    prompts: [
      { prompt: '"I would like a coffee" (polite)',  correct: ["I'd like a coffee", "I would like a coffee", "i'd like a coffee", "i would like a coffee"] },
      { prompt: '"I need to go"',                    correct: ['I need to go', 'i need to go'] },
      { prompt: '"I like tea"',                      correct: ['I like tea', 'i like tea'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Yima phambi kwesibuko. Phenduke nge-Pret a Manger ekhanda lakho. Yithi: 'I'd like a coffee, please.' 'I'd like a sandwich, please.' 'I need to find the toilet.' Phinde phinde — le-phrases zizosebenza nsuku zonke eUK.",
    rwenSignoff: "Le-'to' encinyane phakathi kuka 'need' / 'want' / 'like' lo verb — ungayichithi. Sobonana kusasa.",
  },

  phase8: {
    scenario: "Pret a Manger eLondon ngesikhathi se-lunch. User kufanele acele i-food, asebenzise i-toilet, lo abuze ngokunye okudayisayo. Sebenzisa 'I'd like' (polite), 'I need to' (urgent), 'I like' (enjoyment).",
    rwenRole: "Emma, 25, Pret server, friendly but busy at lunch rush. Wants quick, polite orders.",
    successCriteria: "User uses 'I'd like ... please' for orders, 'I need to ...' (with 'to') for necessities, 'I like ...' for preferences. At least four sentences using the three verbs naturally.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
