import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-good-afternoon',
  module: 1,
  lesson: 4,
  title: 'How are you? — and the trap of "you alright?"',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Lapho umNgisi ekubuza 'How are you?' — akafuni impendulo eqondileyo ngempilo yakho. Ufuna 'Fine, thanks' kanye umbuzo obuyela.",
    culturalNote: "ESiNdebele, lapho omunye athi 'Unjani?', umtsho impela — ngempilo, ngomsebenzi, ngomuli. UmNgisi se-UK uthi 'How are you?' lapho engazi ngempela ukuthi unjani — yi-greeting kuphela. Ungaphenduli ngeendaba ezinde ngempilo. Engeza ku-trap ka-'You alright?' (kumbe 'Y'alright?') — yi-UK greeting nje, hatshi imbuzo ngokuthi udinga lutho. Akufanele uphendule 'I'm sick' kumbe 'I have a problem'. Vele uthi 'Yeah, you?'.",
  },

  chunks: [
    {
      id: 'how_are_you',
      target: 'How are you?',
      native: 'Unjani? (greeting kuphela)',
      literal: 'How are you?',
      emoji: '👀',
      phonetic: 'how-AHR-yoo',
      audioRef: null,
    },
    {
      id: 'fine_thanks',
      target: "Fine, thanks. You?",
      native: 'Ngiyaphila, ngiyabonga. Wena?',
      literal: 'Fine, thanks. You?',
      emoji: '✨',
      phonetic: 'fayn-thanks-YOO',
      audioRef: null,
    },
    {
      id: 'you_alright',
      target: 'You alright?',
      native: 'Unjani? (UK greeting elula)',
      literal: 'Are you alright?',
      emoji: '🤝',
      phonetic: 'yoo-AWL-rite',
      audioRef: null,
    },
    {
      id: 'yeah_you',
      target: 'Yeah, you?',
      native: 'Yebo, wena?',
      literal: 'Yeah, you?',
      emoji: '😎',
      phonetic: 'yah-YOO',
      audioRef: null,
    },
    {
      id: 'not_too_bad',
      target: 'Not too bad',
      native: 'Akubi kakhulu (kuhle)',
      literal: 'Not too bad',
      emoji: '🙂',
      phonetic: 'nawt-too-BAD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greeting questions, scripted answers',
    explanation: "Le mibuzo ayifuni impela ulande ngempilo yakho. Phendula ngemfushane: 'Fine, thanks. You?' kumbe 'Yeah, you?' (eUK). Ungasebenzisa 'Not too bad' lapho ufuna ukuhlukana — kuyafana lokuthi 'Ngiyaphila'. Ukubuyisa umbuzo (You? / How about you?) kuyaqondiswa — kungenzeleli ukungazi.",
    examples: [
      { target: 'How are you? — Fine, thanks. You?',  native: 'Unjani? — Ngiyaphila, ngiyabonga. Wena?' },
      { target: "You alright? — Yeah, you?",          native: 'Unjani? — Yebo, wena?' },
      { target: 'How are you? — Not too bad, you?',   native: 'Unjani? — Akubi kakhulu, wena?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa',
      pairs: [
        { left: 'How are you?',     right: 'Unjani?' },
        { left: 'Fine, thanks',     right: 'Ngiyaphila, ngiyabonga' },
        { left: 'You alright?',     right: 'Unjani? (UK kalula)' },
        { left: 'Not too bad',      right: 'Akubi kakhulu' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'I-trap question. Ku-bus stop eLeeds, umuntu uthi: "Y\'alright?" Yini owayitshoyo?',
      question: 'Khetha:',
      options: [
        { text: 'Yeah, you?',                                correct: true },
        { text: 'No, I have back pain and I miss home.',     correct: false },
        { text: 'Why are you asking?',                       correct: false },
      ],
      explanation: "U-'Y'alright?' yi-greeting eUK — akafuni ulande inkinga zakho. Phendula 'Yeah, you?' kuyenele kahle.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: 'Hi! How are you? — Fine, thanks. ____?',
      options: ['You', 'Me', 'Why'],
      correct: 'You',
      context: 'Phinda umbuzo — kuyenza ihambo iqhubeke.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngiyaphila, ngiyabonga. Wena?',
      correct: ['Fine, thanks. You?', 'fine, thanks. you?', "I'm fine, thanks. You?", "I'm fine, thanks. And you?"],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['too', 'bad', 'Not'],
      correct: ['Not', 'too', 'bad'],
      translation: 'Akubi kakhulu',
    },
    {
      type: 'multiple_choice',
      instruction: 'I-doctor uthi: "How are you today?" La akusiyi-greeting — uyabuza ngempela. Yini owayitsho?',
      question: 'Khetha:',
      options: [
        { text: "I've had a bad headache for two days.",  correct: true },
        { text: 'Fine, thanks. You?',                      correct: false },
        { text: 'Cheers!',                                  correct: false },
      ],
      explanation: "Ku-doctor, kufuneka ukutsho ngempela. Esikhiweni se-greeting (e-shop, ku-bus), 'Fine, thanks' kuyenele.",
    },
  ],

  rwenDialogue: {
    intro: 'EManchester, lapho usebenza nje. Umsebenzi-mngane ekuhlangabezana laye e-coffee machine.',
    lines: [
      { speaker: 'npc', target: "Y'alright?", native: 'Unjani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yeah, you?',                         native: 'Yebo, wena?',                            correct: true,  feedback: 'Yikho! Le yi-UK greeting elula. Ungeze "you?" — kuhambisana kahle.' },
          { target: 'I am sick today, my back hurts.',     native: 'Ngiyagula lamuhla, ngipheka emsebeni.',  correct: false, feedback: 'Yi-trap! "Y\'alright?" yi-greeting kuphela. Ungaphenduli ngenkinga zakho.' },
          { target: "I'm fine.",                           native: 'Ngiyaphila.',                              correct: false, feedback: 'Akusihle, kodwa engeza "you?" — kuhambisana kahle ngenkulumo.' },
        ],
      },
      { speaker: 'npc', target: 'Not too bad. Coffee?', native: 'Akubi kakhulu. I-coffee?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, please.', native: 'Yebo, ngiyacela.', correct: true,  feedback: 'Wakhumbula isifundo se-Yes politeness! Yikho.' },
          { target: 'Yes.',         native: 'Yebo.',             correct: false, feedback: 'Engeza "please" — yikho okwenza ihle ngo-UK.' },
          { target: 'No, sorry.',   native: 'Hatshi, uxolo.',     correct: false, feedback: 'Awunaso isikhathi sokucabanga ngenhlonipho — "No thanks" kufanele lapha.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "U-'Y'alright?' awufuni ulande impilo yakho. Ungavuma kuphela ngemfushane uphendule isiphile.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngenhliziyo.',
    prompts: [
      { prompt: "Phendula 'How are you?' ngemfushane",  correct: ['Fine, thanks. You?', "I'm fine, thanks. You?", 'Fine thanks you?', "Not too bad, you?"] },
      { prompt: "Phendula 'You alright?' eUK",            correct: ['Yeah, you?', 'yeah, you?', "Yes, you?"] },
    ],
  },

  mission: {
    title: 'Umsebenzi',
    task: "Lamuhla, lapho umuntu ekubuza 'How are you?', phendula ngokufuthsane ungeze 'You?'. Buyisa umbuzo. Bona ukuthi ihambo iyaqhubeka njani.",
    rwenSignoff: 'Take care. Cheers!',
  },

  phase8: {
    scenario: "EBirmingham, e-Tesco. Lapho usebenza ku-checkout, kungena umuntu odlula yonke imihla — uyakwazi ngobuso. Ezakubingelela ngo-'Y'alright?'. Ufuna ukubonisa ukuthi ufundile i-UK greeting culture — hatshi over-share, hatshi futhi too short.",
    rwenRole: "Pete — usanda kuphasa unyaka oneminyaka engu-58, oseBirmingham impilo yakhe. Olomusa, owesilisa wesiphithizela. Ufuna ukukhuluma kancane.",
    successCriteria: "Umfundi aphendule 'Yeah, you?' kumbe 'Not too bad, you?' (HATSHI achaze i-physical health), abuyele umbuzo ku-Pete, futhi ahlale ku-greeting register — hatshi ngo-'How are you really?' okubonakala kuphakeme kakhulu kule-context.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
