import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06',
  module: 1,
  lesson: 6,
  title: 'Where are you from? — small talk culture',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "EUK, eAU, eUS — abantu bayaba lengxoxo ngezilima. Lokho kuthiwa 'small talk'. Ungalo dlulisi nje, kufanele uphendule ungeze ulibhonge ulibhonganga ufuna ukuhambisana le-mood.",
    culturalNote: "ESiNdebele, ukubuza umuntu 'Uphuma ngaphi?' yimbuzo entle, futhi engaqondiseki kanjalo. Phesheya, 'Where are you from?' yi-small talk yokuvula ihambo. Kunzima, kunjalo: ku-UK, abafundi abazimnyama bayabuzwa lokhu kakhulu — kungaqondiseki kuhle. Indlela enhle: phendula ngokufutshane, engeza okutsha. Mzekelo: 'I'm from Bulawayo, in Zimbabwe. You?' Buyisa umbuzo — kuyenza ihambo iqhubeke. Ungasibenzisi 'I am African' kuphela — bayazi, bafuna i-detail.",
  },

  chunks: [
    {
      id: 'where_from',
      target: 'Where are you from?',
      native: 'Uphuma ngaphi?',
      literal: 'Where are you from?',
      emoji: '🌍',
      phonetic: 'wair-ar-yoo-FRUM',
      audioRef: null,
    },
    {
      id: 'im_from',
      target: "I'm from...",
      native: 'Ngiphuma e...',
      literal: 'I am from...',
      emoji: '🏠',
      phonetic: 'aym-FRUM',
      audioRef: null,
    },
    {
      id: 'originally_from',
      target: 'Originally from Zimbabwe',
      native: 'Ngiphuma eZimbabwe',
      literal: 'Originally from Zimbabwe',
      emoji: '🇿🇼',
      phonetic: 'or-ij-NAL-ee-frum',
      audioRef: null,
    },
    {
      id: 'live_in',
      target: 'I live in...',
      native: 'Ngihlala e...',
      literal: 'I live in...',
      emoji: '🏘️',
      phonetic: 'ay-LIV-in',
      audioRef: null,
    },
    {
      id: 'how_about_you',
      target: 'How about you?',
      native: 'Wena-ke?',
      literal: 'How about you?',
      emoji: '🔄',
      phonetic: 'how-uh-bowt-YOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Where are you from? — full answer',
    explanation: "Iphendulo iyaba leziqephu ezintathu: (1) izwe / idolobha; (2) ngiphi indawo manje uma uhambile; (3) buyisa umbuzo. 'I'm originally from Bulawayo. I'm living in Manchester now. How about you?' Lokhu kunhle. Ungayisebenzisi 'I am African' kuphela — abathandi i-vague answer.",
    examples: [
      { target: "I'm from Zimbabwe.",                                 native: 'Ngiphuma eZimbabwe.' },
      { target: "I'm originally from Bulawayo, but I live in Leeds.", native: 'Ngiphuma eBulawayo, kodwa ngihlala eLeeds.' },
      { target: 'How about you?',                                     native: 'Wena-ke?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa',
      pairs: [
        { left: 'Where are you from?',  right: 'Uphuma ngaphi?' },
        { left: "I'm from",              right: 'Ngiphuma e' },
        { left: 'I live in',             right: 'Ngihlala e' },
        { left: 'How about you?',        right: 'Wena-ke?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngiphuma eBulawayo, eZimbabwe.',
      correct: ["I'm from Bulawayo, Zimbabwe", "I'm from Bulawayo, in Zimbabwe", 'I am from Bulawayo, Zimbabwe', "I'm from Bulawayo Zimbabwe"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: "I'm originally ____ Zimbabwe, but I live in London now.",
      options: ['from', 'in', 'to'],
      correct: 'from',
      context: 'Phesheya, kuyajwayelekile ukutsho indawo yokuzalwa kuqala, indawo yamanje emva.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Yini ekuyiyo phesheya?',
      question: "Umuntu uthi: 'Where are you from?' — yini eyimpendulo eqondileyo?",
      options: [
        { text: "I'm from Bulawayo, in Zimbabwe. How about you?",  correct: true },
        { text: 'Africa.',                                          correct: false },
        { text: 'Why are you asking?',                              correct: false },
      ],
      explanation: "U-'Africa' kuvague — ifuna i-detail. Ukubuza 'Why are you asking?' kunzima — yi-friendly question, awusebuyiseli." ,
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['Manchester', 'live', 'I', 'in'],
      correct: ['I', 'live', 'in', 'Manchester'],
      translation: 'Ngihlala eManchester',
    },
    {
      type: 'multiple_choice',
      instruction: 'I-trap question. Umuntu wesilisa eUK uthi: "No, but where are you really from?" emva kokuthi uthe ngiphuma eLondon. Yini owayitsho?',
      question: 'Khetha:',
      options: [
        { text: "I was born in Zimbabwe — Bulawayo. Have you been to Africa?",  correct: true },
        { text: 'You are racist.',                                                correct: false },
        { text: 'London.',                                                        correct: false },
      ],
      explanation: 'Le yi-question enzima — kuyajwayelekile kubantu abamnyama eUK. Ungaqondisa lokhu uphendule ngokuziqhenya ngokwakho, futhi ubuyise umbuzo. Ungaqali ihambo lokuthi ngubani omtshobi.',
    },
  ],

  rwenDialogue: {
    intro: 'ESheffield, ku-bus stop. Umuntu omdala ekulindela i-bus efananayo ekuvulela ihambo.',
    lines: [
      { speaker: 'npc', target: "Cold today, isn't it? Where are you from, then?", native: 'Kuyaqanda lamuhla, akusinjalo? Uphuma ngaphi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm originally from Zimbabwe — Bulawayo. I live here now. How about you?", native: 'Ngiphuma eZimbabwe — eBulawayo. Ngihlala lapha manje. Wena-ke?', correct: true,  feedback: 'Yikho! Ufakela izindawo zombili (idolobha + izwe), futhi ubuyisa umbuzo.' },
          { target: 'Africa.',                                                                  native: 'Africa.',                                                                correct: false, feedback: 'Ivague kakhulu — i-Africa yi-continent. Sebenzisa idolobha noma izwe.' },
          { target: 'I am from here.',                                                          native: 'Ngiphuma lapha.',                                                          correct: false, feedback: 'Le yi-impendulo egwedlayo — kanjalo nje, kuhambi futhi yi-friendly question.' },
        ],
      },
      { speaker: 'npc', target: "Oh lovely. I'm from Sheffield, born and raised. Bulawayo — that's southern Zimbabwe?", native: 'Hayi kuhle. Ngiphuma eSheffield, ngazalelwa lapha. Bulawayo — yi-southern Zimbabwe?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, that's right. Have you ever been?", native: 'Yebo, kuyiqondile. Wakhe wahamba?', correct: true,  feedback: 'Yikho! Uphendula umbuzo + ubuyisa umbuzo. Le yi-small talk efaneleko.' },
          { target: 'Yes.',                                    native: 'Yebo.',                                correct: false, feedback: 'Kufutshane kakhulu — ungeze umbuzo kumbe okuthize.' },
          { target: 'You should go.',                          native: 'Kufanele uhambe.',                     correct: false, feedback: 'Kuludludla — ungatshelokhonye umuntu omdala kuze kube ngalapha.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ufundile i-small talk culture: phendula ngokucanela, ungeze i-detail, ubuyise umbuzo. Kuyalithuba — abathathani izinto eziqondileyo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngenhliziyo.',
    prompts: [
      { prompt: "'Ngiphuma eBulawayo, eZimbabwe' ngesiNgisi", correct: ["I'm from Bulawayo, Zimbabwe", "I'm from Bulawayo, in Zimbabwe", "I am from Bulawayo, Zimbabwe"] },
      { prompt: "'Wena-ke?' ngesiNgisi",                       correct: ['How about you?', 'how about you?', 'And you?', 'What about you?'] },
    ],
  },

  mission: {
    title: 'Umsebenzi',
    task: "Lamuhla, ungaziphakamise ihambo elifutshi: 'I'm from Bulawayo, in Zimbabwe. I live in [indawo yamanje]. How about you?' Phinda lokhu kabili. Lapho usuyihlangabeza emhlabeni, izovela kalula.",
    rwenSignoff: 'Take care. Cheers!',
  },

  phase8: {
    scenario: "ELondon, e-pub eClapham. UsebenzaNg-IT — usanda kufika engxoxweni nge-team-night. Umuntu wesilisa weUK uyakubuyile, athi 'Where are you from, mate?' Le yi-friendly question kodwa engaqondiseka kuhle ku-night out.",
    rwenRole: "Tom — UK software engineer, eminyakeni engaba ngu-35, oseLondon. Olomusa, ofuna ukukhuluma ngomuli, ngomsebenzi, ngezindlela ezahlukileyo.",
    successCriteria: "Umfundi achaze indawo yakhe ngokucanela (idolobha + izwe), abuyise umbuzo ku-Tom, futhi ahambisane le-pub register — kalula, ungeze i-friendly detail. Lapho u-Tom abuza i-follow-up nge-Zimbabwe, akhulume okutsha kungasibenzanga ngokuphendukela.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
