import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-hello',
  module: 1,
  lesson: 1,
  title: 'Hello, Hi, Hey — register',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Esikhiweni sesiNdebele kulobani — 'Salibonani' ebantwini abanengi, 'Sawubona' kumuntu oyedwa. Esikhiweni sesiNgisi kuphendulwa ngendlela inye: 'Hello'. Akula 'Sa-' ne 'Sali-' — kunye nje.",
    culturalNote: "ESiNdebele sikhomba ukuthi ukhuluma loyedwa kumbe labanengi. ISiNgisi asikwenzi lokho — u-'Hello' uyaqhubekelana lazo zonke izihlobo. Kodwa u-'Hello', u-'Hi' lo-'Hey' bahlukene ngeregister: 'Hello' uphephile (umqhuba wezimota, umfundisi, umphathi), 'Hi' yokwedlula (osebenza naye, oyazi kahle), 'Hey' kungumngane kuphela. Ungasebenzisi 'Hey' kumphathi wakho ekuhambeni okokuqala.",
  },

  chunks: [
    {
      id: 'hello',
      target: 'Hello',
      native: 'Salibonani / Sawubona',
      literal: undefined,
      emoji: '👋',
      phonetic: 'heh-LOH',
      audioRef: null,
    },
    {
      id: 'hi',
      target: 'Hi',
      native: 'Salibonani (ngendlela elula)',
      literal: undefined,
      emoji: '🙋',
      phonetic: 'HAY',
      audioRef: null,
    },
    {
      id: 'hey',
      target: 'Hey',
      native: 'Hheyi (ebanganini)',
      literal: undefined,
      emoji: '😎',
      phonetic: 'HAY',
      audioRef: null,
    },
    {
      id: 'nice_to_meet',
      target: 'Nice to meet you',
      native: 'Ngiyathokoza ukukubona',
      literal: 'Nice to meet you',
      emoji: '🤝',
      phonetic: 'nayss-tu-MEET-yu',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three greetings, three registers',
    explanation: "Ngesi-Ngisi, indlela uhlangabezana ngayo isho lukhulu ngokuthi nguwe-bani lapho. 'Hello' = neutral, kuyasebenza yonke indawo. 'Hi' = casual ebantwini obaziyo. 'Hey' = ebanganini abasondele. Ekuhlanganeni okokuqala lomqashi, lothisha, kumbe nomuntu omdala — sebenzisa 'Hello'. Lokhu yikho okuqondileyo eUK, eAU, eUS lakuya kuyo yonke imisebenzi.",
    examples: [
      { target: 'Hello',              native: 'Salibonani (yonke indawo)' },
      { target: 'Hi',                 native: 'Salibonani (kosebenza naye)' },
      { target: 'Hey',                native: 'Hheyi (ebanganini)' },
      { target: 'Nice to meet you',   native: 'Ngiyathokoza ukukubona' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lencazelo zaso zesiNdebele',
      pairs: [
        { left: 'Hello',             right: 'Salibonani (kuyaphephileyo)' },
        { left: 'Hi',                right: 'Salibonani (elula)' },
        { left: 'Hey',               right: 'Hheyi (ebanganini)' },
        { left: 'Nice to meet you',  right: 'Ngiyathokoza ukukubona' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Uhlangana lomqashi wakho omutsha (manager) ekuhambeni okokuqala. Ungathini?",
      options: [
        { text: 'Hello, nice to meet you.', correct: true },
        { text: 'Hey, what\'s up?',         correct: false },
        { text: 'Yo!',                       correct: false },
      ],
      explanation: "U-'Hello' uphephile lapho ungazi umuntu kahle. U-'Hey' lo-'Yo' bayasetshenziswa ebanganini, hatshi kumphathi.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Salibonani (kumphathi wakho)',
      correct: ['Hello', 'hello', 'Hello.', 'hello.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala',
      sentence: '____, nice to meet you.',
      options: ['Hello', 'Hey', 'Yo'],
      correct: 'Hello',
      context: 'Usemhlanganweni wokuqala wokusebenza, uhlangana lomuntu omtsha.',
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama ngendlela eqondileyo',
      words: ['to', 'Nice', 'meet', 'you'],
      correct: ['Nice', 'to', 'meet', 'you'],
      translation: 'Ngiyathokoza ukukubona',
    },
  ],

  rwenDialogue: {
    intro: 'Usanda kufika eLondon, usebenzini wakho omutsha. Umphathi wakho uyaza kuzokubingelela.',
    lines: [
      { speaker: 'npc', target: "Hello, you must be the new starter. I'm Sarah.", native: "Salibonani, kumele kube nguwe loyo osanda kuqala. NginguSarah." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hello, nice to meet you.', native: 'Salibonani, ngiyathokoza ukukubona.', correct: true,  feedback: 'Kuhle — ufike ngendlela ephephileyo, ofanele indawo yokusebenza.' },
          { target: 'Hey, what\'s up?',         native: 'Hheyi, kuhambe njani?',                correct: false, feedback: '"Hey" inhle ebanganini kuphela. Kumphathi sebenzisa "Hello".' },
          { target: 'Salibonani.',              native: 'Salibonani (ngesiNdebele).',           correct: false, feedback: 'Ulungile ngomoya, kodwa khuluma ngesiNgisi — "Hello" yikho okufanele lapha.' },
        ],
      },
      { speaker: 'npc', target: "Welcome to the team. Let me show you around.", native: "Wamukelekile kuqembu. Ngizakukhombisa indawo." },
      {
        speaker: 'rwen',
        rwenLine: 'Yebo! Ukubingelela kokuqala kuhle. Manje sewazi ukuthi yiphi i-greeting eyiyo kumuphi umuntu.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — bhala ngenhliziyo.',
    prompts: [
      { prompt: "Bhala 'Salibonani' ngesiNgisi (kumuntu ongaziyo)", correct: ['Hello', 'hello', 'Hello.', 'hello.'] },
      { prompt: "Bhala 'Ngiyathokoza ukukubona' ngesiNgisi",        correct: ['Nice to meet you', 'nice to meet you', 'Nice to meet you.', 'nice to meet you.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Lamuhla, sebenzisa 'Hello' kumuntu omtsha — engxoxweni, ku-WhatsApp, kumbe esitolo. Bona ukuthi kuhamba njani.",
    rwenSignoff: 'Ngizakubona kusasa. Take care.',
  },

  phase8: {
    scenario: "Usanda kufika eManchester unyaka. Lamuhla yilanga lakho lokuqala emsebenzini wokuqala — i-care home. Umphathi wakho uyakuhlangabeza ekamelweni lokuhlanganela ngo-8am.",
    rwenRole: "Sarah — care home manager, eminyakeni engaba ngu-50, owaseLondon. Olomusa kodwa otshathisa, ujwayele ukusebenza labantu abaqhamuka phesheya.",
    successCriteria: "Umfundi avula nge-'Hello' (HATSHI 'Hey' nge-formal-context lena), aphendule kahle ku-'Nice to meet you', futhi angasebenzisi isiNdebele eqala — usemsebenzini wesiNgisi-kuphela manje.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
