import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01',
  module: 9,
  lesson: 1,
  title: "What do you do? — profession",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Esikhiweni sesiNgisi, umbuzo othi 'What do you do?' awubuzi ukuthi uyaphi lamuhla — ubuza ukuthi umsebenzi wakho yini. Ku-UK, ku-US, abantu bayalubuza lo mbuzo emaminitini amabili kuqala kokuhlangana — ngakwedlula ukubuza igama lakho.",
    culturalNote: "Esikhiweni sesiNdebele kungaba lokwehlukana — ukubuza umuntu osanda kumazi 'usebenza yini' kungezwakala kunjenge nzoso lemali. Ku-UK lakuyo i-US lokho akusilo cha — kuyabingelelwa nje. Phendula ngokushuthi: 'I'm a [umsebenzi]' — 'I'm a nurse', 'I'm a builder', 'I'm a teacher'. Ungazimezi ngazi noma uphangisa — kuhleliwe nje. Lokunye okwehlukileyo: ungaphenduli ngalokho ofuna ukuba yikho. Phendula ngalokho oyikho khathesi.",
  },

  chunks: [
    {
      id: 'what_do_you_do',
      target: 'What do you do?',
      native: 'Wenza msebenzi bani?',
      literal: 'What / do / you / do?',
      emoji: '💼',
      phonetic: 'WOT-doo-yoo-DOO',
      audioRef: null,
    },
    {
      id: 'im_a_nurse',
      target: "I'm a nurse",
      native: 'Ngingumongi (wezigulane)',
      literal: "I am a nurse",
      emoji: '👩🏽‍⚕️',
      phonetic: 'aym-uh-NURSS',
      audioRef: null,
    },
    {
      id: 'i_work_as',
      target: 'I work as a [job]',
      native: 'Ngisebenza njenge-[msebenzi]',
      literal: 'I work as a',
      emoji: '🛠️',
      phonetic: 'ay-WURK-az-uh',
      audioRef: null,
    },
    {
      id: 'i_work_in',
      target: 'I work in [field]',
      native: 'Ngisebenza ku-[mkhakha]',
      literal: 'I work in',
      emoji: '🏥',
      phonetic: 'ay-WURK-in',
      audioRef: null,
    },
    {
      id: 'and_you',
      target: 'And you?',
      native: 'Lawe?',
      literal: 'And you?',
      emoji: '↩️',
      phonetic: 'and-YOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Three ways to answer 'What do you do?'",
    explanation: "Indlela yokuqala — 'I'm a [job]' — yiqondile njalo evamile. Eyesibili — 'I work as a [job]' — yifanana, kodwa kanengi isetshenziswa nxa umsebenzi ungaqondakali kahle ngegama linye. Eyesithathu — 'I work in [field]' — isetshenziswa lapho ufuna ukukhuluma ngomkhakha (healthcare, construction, IT) ungaphandanga ezeziphathiselani. Phendula kabukhuthuli, bese ubuyisela umbuzo ngo-'And you?' ukuze kuqhubeke ingxoxo.",
    examples: [
      { target: "I'm a nurse. And you?",                  native: 'Ngingumongi. Lawe?' },
      { target: 'I work as a builder.',                   native: 'Ngisebenza njenge-builder.' },
      { target: 'I work in healthcare.',                  native: 'Ngisebenza emkhakheni wezempilakahle.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lencazelo zaso',
      pairs: [
        { left: 'What do you do?',     right: 'Wenza msebenzi bani?' },
        { left: "I'm a nurse",         right: 'Ngingumongi' },
        { left: 'I work as a builder', right: 'Ngisebenza njenge-builder' },
        { left: 'I work in healthcare',right: 'Ngisebenza emkhakheni wezempilakahle' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngingumfundisi. Lawe?',
      correct: ["I'm a teacher. And you?", "I am a teacher. And you?", "I'm a teacher. And you", "I am a teacher and you?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala',
      sentence: 'I work ___ a builder.',
      options: ['as', 'in', 'at'],
      correct: 'as',
      context: "'Work as' kulandelwa ngumsebenzi (a nurse, a builder). 'Work in' kulandelwa ngumkhakha (healthcare, IT). 'Work at' kulandelwa yindawo (work at Tesco).",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Esemini engaphakathi yephothi, umuntu uyakubuza 'What do you do?' Yiyo iphi impendulo evamileyo?",
      options: [
        { text: "I'm a builder. And you?",                  correct: true },
        { text: "Today I am going to the shop.",            correct: false },
        { text: "I do many things in my life.",             correct: false },
      ],
      explanation: "'What do you do?' kubuza ngomsebenzi — hatshi izenzo zalamuhla. 'I'm a [job]. And you?' iphendula umbuzo, ibuyise umbuzo enye umuntu — yindlela yengxoxo evamile.",
    },
  ],

  rwenDialogue: {
    intro: "Usemhlanganweni wabasebenzi (work social) eBirmingham. Umuntu omtsha uyazethula.",
    lines: [
      { speaker: 'npc', target: "Hi, I'm Tom. So, what do you do?", native: "Salibonani, ngingu Tom. Pho, wenza msebenzi bani?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a nurse. I work in a care home. And you?", native: 'Ngingumongi. Ngisebenza ku-care home. Lawe?',          correct: true,  feedback: 'Kuhle kakhulu — uphendule ngokuqondileyo, wabuyisela umbuzo. Ingxoxo iyaqhubeka.' },
          { target: "I am working today.",                          native: 'Ngiyasebenza lamuhla.',                                  correct: false, feedback: "Ubuze ngomsebenzi wakho ngokupheleleyo (career), hatshi ngalamuhla. Phendula nge-'I'm a [job]'." },
          { target: 'Yebo.',                                        native: 'Yebo.',                                                  correct: false, feedback: 'Ulungile ngomoya kodwa khuluma ngesiNgisi — usebenzini lokho. Buyela: "I\'m a [job]".' },
        ],
      },
      { speaker: 'npc', target: "Oh nice — my sister's a nurse too. I work in IT.", native: "Heeh kuhle — udadewethu naye ungumongi. Mina ngisebenza ku-IT." },
      { speaker: 'rwen', rwenLine: "Wabona? 'What do you do?' yibingelelo enkulu — ungayilindeli, ungayesabi.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — bhala ngenhliziyo.',
    prompts: [
      { prompt: "Bhala 'Wenza msebenzi bani?' ngesiNgisi",     correct: ['What do you do?', 'what do you do?', 'What do you do', 'what do you do'] },
      { prompt: "Bhala 'Ngingumfundisi' ngesiNgisi",            correct: ["I'm a teacher", "I am a teacher", "I'm a teacher.", "I am a teacher."] },
      { prompt: "Bhala 'Ngisebenza emkhakheni wezempilakahle'", correct: ['I work in healthcare', 'I work in healthcare.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Lamuhla, ku-WhatsApp, ku-LinkedIn, kumbe ekuhlanganeni komuntu omtsha — sebenzisa u-'I'm a [job]' kanye, bese ubuza u-'And you?' Khangela ukuthi ingxoxo iqhubeka njani.",
    rwenSignoff: 'Ungenanzi okuqalisayo — qalisa nje. Ngizakubona kusasa.',
  },

  phase8: {
    scenario: "Usenkomidini yokucima inkanyezi (work mixer) eLondon. Umuntu osanda kufika ezikhokho yelinye iqembu uyakubingelela. Uthi 'Hi, I'm Priya — what do you do?' Lawe ufanele uphendule, ubuyisele umbuzo, ulungele ukuqhubeka ngengxoxo emfishane.",
    rwenRole: "Priya — neminyaka emangalo 30s, usebenza ku-marketing eqenjini elikhulu. Ulomusa, kodwa uyalindela ukuthi labanye babe lempendulo elungeleyo emaminitini amabili.",
    successCriteria: "Umfundi aphendule nge-'I'm a [job]' kumbe 'I work as a [job]' kumbe 'I work in [field]'. Abuyisele umbuzo nge-'And you?' kumbe 'How about you?'. Angasebenzisi isiNdebele.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
