import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Mhoro! Wapedza Module 2 — wakurudzira mashoko ekupona muChiNgezi. Nhasi tinosanganisa zvose: 'Excuse me', 'Please', 'I don't understand', 'Where is...?', 'Thank you'. Mutsetse mumwe — chinangwa chimwe: kupedza chinetso muChiNgezi.",
    culturalNote: "MuChiShona kupinda nemumwe usingazivi kunoda nguva yekutanga — kukwaziswa, kubvunzana zvinhu. MuChiNgezi unotenda kuti munhu anenge achikurumidza — taura zvakajeka, kumbira rubatsiro pakarepo, uye tenda. Hutsika hwakareba husingashande pano — hutsika hupfupi hunoyamura.",
  },

  chunks: [
    {
      id: 'review_excuse_help',
      target: 'Excuse me, can you help me?',
      native: 'Pamusoroi, mungandibatsire here?',
      literal: 'Excuse me, can you help me?',
      emoji: '🙋',
      phonetic: 'eks-KYOOZ-mee-KAN-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'review_dont_understand',
      target: "I don't understand. Slowly, please.",
      native: 'Handinzwisise. Zvinyoro nyoro, ndapota.',
      literal: "I don't understand. Slowly, please.",
      emoji: '🤷',
      phonetic: 'ay-DOHNT-un-der-STAND-SLOH-lee-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_thank_you_lots',
      target: 'Thank you so much for your help.',
      native: 'Ndatenda chaizvo nerubatsiro rwenyu.',
      literal: 'Thank you so much for your help.',
      emoji: '🙏',
      phonetic: 'THANK-yoo-soh-MUCH-for-yor-HELP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full survival flow',
    explanation: "Survival hurukuro ine zvikamu zvitatu: (1) PINDA — 'Excuse me' + chikumbiro (Can you help me? / Where is...? / How much?). (2) KOROKOZA — kana usina kunzwisisa, taura ('I don't understand. Slowly, please.'). (3) PEDZA — tenda ('Thank you so much.'). Mutsetse uyu unokuponesa muchero situation.",
    examples: [
      { target: "Excuse me, where is the bathroom?",                    native: 'Pamusoroi, toilet iri kupi?' },
      { target: "Sorry, I don't understand. Can you repeat slowly?",   native: 'Ndine urombo, handinzwisise. Mungadzokore zvinyoro here?' },
      { target: 'Thank you so much for your help.',                      native: 'Ndatenda chaizvo nerubatsiro rwenyu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvikamu zvinopindirana muhurukuro yekupona',
      pairs: [
        { left: 'Excuse me...',          right: 'How you start' },
        { left: "I don't understand",   right: 'When you get stuck' },
        { left: 'Thank you so much',     right: 'How you finish' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pinda nehurukuro yekupona',
      prompt: 'Pamusoroi, mungandibatsire here?',
      correct: [
        'Excuse me, can you help me?',
        'Excuse me can you help me?',
        'Excuse me, can you help me',
        'excuse me, can you help me?',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuratidza kuti hauna kunzwisisa',
      prompt: 'Handinzwisise. Dzokorora zvinyoro nyoro, ndapota.',
      correct: [
        "I don't understand. Repeat slowly, please.",
        "I don't understand. Please repeat slowly.",
        "I don't understand. Repeat slowly please.",
        "i don't understand. repeat slowly, please.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro yekutenda',
      words: ['so', 'Thank', 'much', 'you'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'Ndatenda chaizvo',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kubvunza mutengo',
      sentence: '____ much is this, please?',
      options: ['How', 'Where', 'What'],
      correct: 'How',
      context: "Mibvunzo yemitengo inotanga ne 'How much'.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndatenda chaizvo nerubatsiro',
      correct: [
        'Thank you so much for your help',
        'Thank you so much for your help.',
        'Thanks a lot for your help',
        'Thank you for all your help',
        'thank you so much for your help.',
      ],
    },
  ],

  rwenDialogue: {
    intro: "Wave kuLondon, wakurasika. Phone yakafa, hauzivi pekuenda. Sangana neperson — itira hurukuro yakakwana yekupona.",
    lines: [
      { speaker: 'npc', target: "Hi, you alright?", native: 'Hesi, uri zvakanaka?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me, please?", native: "Pamusoroi, ndarasika. Mungandibatsire here, ndapota?", correct: true,  feedback: 'Wakwanisa — wakapinda nemutsindo: "Excuse me" + chikumbiro chizere.' },
          { target: 'Lost.',                                            native: 'Ndarasika.',                                              correct: false, feedback: "Pfupi zvakanyanya — taura mutsara wakakwana." },
          { target: "Yes, hello.",                                       native: 'Hongu, mhoro.',                                           correct: false, feedback: "Hauna kupindura mubvunzo wavabvunza, uye hauna kuchikumbira rubatsiro." },
        ],
      },
      { speaker: 'npc', target: "Sure — where are you trying to get to? The tube's that way.", native: 'Hongu — uri kuda kuenda kupi? Tube iri nzira iyi.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please?", native: "Ndine urombo, handinzwisise. Zvinyoro nyoro, ndapota?", correct: true,  feedback: 'Wakwanisa — kunyange wapinduriswa nokukurumidza, wakatsanangura.' },
          { target: 'Yes.',                                          native: 'Hongu.',                                                correct: false, feedback: "Hauna kunzwa — usapindure 'Yes' kana usina kunzwisisa." },
          { target: 'Thank you, goodbye.',                            native: 'Ndatenda, sara zvakanaka.',                              correct: false, feedback: 'Wakurumidza kuenda — uchiri kurasika. Tanga wanzwisisa.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapedza Module 2 — pinda → korokoza → tenda. Hurukuro yose, mashoko mashoma — chinangwa chakwana. Watsika muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora hurukuro yakakwana.',
    prompts: [
      { prompt: 'Excuse me, can you help me? (in English)',     correct: ['Excuse me, can you help me?', 'Excuse me can you help me?', 'Excuse me, can you help me', 'excuse me, can you help me?'] },
      { prompt: "I don't understand. Slowly, please. (in English)", correct: ["I don't understand. Slowly, please.", "I don't understand. Slowly please.", "I don't understand. Please, slowly.", "I do not understand. Slowly, please."] },
    ],
  },

  mission: {
    title: 'Basa raNhasi — Hurukuro Yekupona',
    task: "Nhasi, fungidzira chinetso chimwe chete chaungasangana nacho muChiNgezi (kurasika, kuda toilet, kutenga chinhu). Itira hurukuro yose pamuromo — pinda, korokoza, tenda. Pasina kutarisa kumashure.",
    rwenSignoff: "Wapedza Module 2 — wave neushingi hwekupona muChiNgezi. Tichaonana muModule 3.",
  },

  phase8: {
    scenario: "You're in central London on day one of a work trip. Your phone is dead, you've lost your hotel address, and you have a meeting in 30 minutes. Approach a stranger, explain the problem, get directions, deal with not understanding the first reply, and thank them properly.",
    rwenRole: "Olu, 35, a Londoner walking to work. Friendly but in a slight hurry. Speaks fast British English with a London accent. Will help if you're clear, will get impatient if you're not.",
    successCriteria: "Full survival flow: opens with 'Excuse me' + 'Can you help me?' / 'I'm lost', uses 'I don't understand' / 'Slowly, please' when needed, asks 'Where is...?' for the destination, closes with 'Thank you so much'. Combines chunks from Module 2 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
