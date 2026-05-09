import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02',
  module: 1,
  lesson: 2,
  title: 'Yes / No / Maybe — Yes politeness',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "U-'Yebo' lo-'Hatshi' kungaba kufutshane kakhulu ngesiNgisi. Abantu bese-UK lase-AU bafuna ukuzwa 'Yes, please' kumbe 'No, thank you' — u-'Yes' wodwa ubonakala unganakekeli umuntu.",
    culturalNote: "ESiNdebele, u-'Yebo' wodwa unele futhi uyahlonipha. ESiNgisini se-UK, u-'Yes' kuphela ungezwakala uludludla — kufanele ukulandelise ngo-'please' kumbe 'thanks'. Lapho ungaqiniseki, u-'Maybe' lo-'I'm not sure' kuphephile kakhulu kuno-'No' eqondileyo. Kuyiyo i-British politeness — ungayixwayi.",
  },

  chunks: [
    {
      id: 'yes_please',
      target: 'Yes, please',
      native: 'Yebo, ngiyacela',
      literal: 'Yes, please',
      emoji: '👍',
      phonetic: 'yess-PLEEZ',
      audioRef: null,
    },
    {
      id: 'no_thanks',
      target: 'No, thank you',
      native: 'Hatshi, ngiyabonga',
      literal: 'No, thank you',
      emoji: '🙏',
      phonetic: 'noh-THANK-yu',
      audioRef: null,
    },
    {
      id: 'maybe',
      target: 'Maybe',
      native: 'Mhlawumbe',
      literal: undefined,
      emoji: '🤔',
      phonetic: 'MAY-bee',
      audioRef: null,
    },
    {
      id: 'not_sure',
      target: "I'm not sure",
      native: 'Angiqinisekanga',
      literal: 'I am not sure',
      emoji: '😐',
      phonetic: 'aym-not-SHURE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Yes/No politeness',
    explanation: "Esibili kuphela u-'Yes' lo-'No' kuyabonakala kuludludla ngesiNgisi. Engeza u-'please' ngemva kwe-'Yes' lapho uvuma. Engeza u-'thank you' (kumbe 'thanks') ngemva kwe-'No' lapho ulandulayo. Lokhu yikho okwenza wonke umutsho ubelomusa. Lapho ungaqiniseki, ungasebenzisi u-'No' eqondileyo — sebenzisa 'Maybe' kumbe 'I'm not sure'.",
    examples: [
      { target: 'Yes, please',     native: 'Yebo, ngiyacela' },
      { target: 'No, thank you',   native: 'Hatshi, ngiyabonga' },
      { target: 'Maybe',           native: 'Mhlawumbe' },
      { target: "I'm not sure",    native: 'Angiqinisekanga' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa',
      pairs: [
        { left: 'Yes, please',    right: 'Yebo, ngiyacela' },
        { left: 'No, thank you',  right: 'Hatshi, ngiyabonga' },
        { left: 'Maybe',          right: 'Mhlawumbe' },
        { left: "I'm not sure",   right: 'Angiqinisekanga' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuhle kakhulu',
      question: "Umngane wakho ekuhleli ePub uthi: 'Want another drink?' Uyazwa awuyilangazeleli — uthini?",
      options: [
        { text: 'No, thank you.',     correct: true },
        { text: 'No.',                correct: false },
        { text: 'Maybe drink, yes.',  correct: false },
      ],
      explanation: "U-'No' wodwa ungezwakala uludludla. U-'No, thank you' uvele ubonakala onhliziyo enhle.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: 'Yes, ____ — I would love a cup of tea.',
      options: ['please', 'thanks', 'sorry'],
      correct: 'please',
      context: 'Umakhi wakho omutsha eUK uyakubuza ngetiye.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Hatshi, ngiyabonga',
      correct: ['No, thank you', 'no, thank you', 'No thanks', 'no thanks', 'No, thanks'],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['not', 'sure', "I'm"],
      correct: ["I'm", 'not', 'sure'],
      translation: 'Angiqinisekanga',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Umphathi wakho ekubuza ukuthi ungasebenza ngeSonto. Awuqinisekanga. Uthini?",
      options: [
        { text: "I'm not sure — can I let you know tomorrow?", correct: true },
        { text: 'No.',                                         correct: false },
        { text: 'Yes.',                                        correct: false },
      ],
      explanation: "Ukuvuma uphithizele kungakhokhisa. Ukulandulisa ngokuqonda kungakwenza ubonakale uhlukile. U-'I'm not sure' uvula ithuba lokucabanga.",
    },
  ],

  rwenDialogue: {
    intro: "Usebhanga eLondon, ulinde ukuvula i-account. Officer ukubuzile imibuzo emibili.",
    lines: [
      { speaker: 'npc', target: "Would you like a debit card with that?", native: "Ungathanda i-debit card kanye lalokho?" },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, please.', native: 'Yebo, ngiyacela.',  correct: true,  feedback: 'Yikho! Ufakela u-"please" — kuvuthwe-vuthwa.' },
          { target: 'Yes.',         native: 'Yebo.',              correct: false, feedback: 'Kufutshane kakhulu ku-UK. Engeza "please".' },
          { target: 'Maybe.',       native: 'Mhlawumbe.',         correct: false, feedback: '"Maybe" lapha kuzodida i-officer — kufanele uphendule yebo kumbe hatshi.' },
        ],
      },
      { speaker: 'npc', target: "And would you like to set up online banking too?", native: "Ungafuna lokuvula ibhanga le-online?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm not sure — can I do that later?", native: 'Angiqinisekanga — ngingakwenza emva kwesikhathi?', correct: true,  feedback: "Uhle — uvele uvula ithuba ngaphandle kokulandulisa ngokuqonda." },
          { target: 'No.',                                  native: 'Hatshi.',                                            correct: false, feedback: 'Ngaphandle kuka-"thank you", lokhu kuludludla ku-UK.' },
          { target: 'Yes please yes.',                      native: 'Yebo ngiyacela yebo.',                                correct: false, feedback: 'Ungaphindi kabili — kunye kanye kwanele.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ufundile okuhle: u-'Yes' lo-'No' bafuna ihle. Lapho ongaqinisekanga, u-'I'm not sure' uvula ithuba.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngenhliziyo, bhala.',
    prompts: [
      { prompt: "'Yebo, ngiyacela' ngesiNgisi", correct: ['Yes, please', 'yes, please', 'Yes please', 'yes please'] },
      { prompt: "'Hatshi, ngiyabonga' ngesiNgisi", correct: ['No, thank you', 'no, thank you', 'No thanks', 'no thanks', 'No, thanks'] },
      { prompt: "'Angiqinisekanga' ngesiNgisi", correct: ["I'm not sure", "i'm not sure", "I am not sure", "Im not sure"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho',
    task: "Lamuhla, ungaphenduli ngo-'Yes' kumbe 'No' wodwa kanye. Sebenzisa 'Yes, please' kumbe 'No, thank you' — kuhle ngitsho lasekhitshini.",
    rwenSignoff: "Take care. Sizahlangana kusasa.",
  },

  phase8: {
    scenario: "Useyalini iJohannesburg, manje uyahamba e-airport elungiselela ukuya eAustralia. I-immigration officer ekubuza imibuzo emibalwa eyiyo. Kufanele uphendule ngokulungile, ngokulungele, futhi kufushane.",
    rwenRole: "Brett — Australian immigration officer eSydney, eminyakeni engaba ngu-40, oqondileyo kodwa olomusa. Ufuna ukubona ukuthi uyaqonda esiNgisini sezimpendulo ezilula.",
    successCriteria: "Umfundi asebenzise 'Yes, please' kumbe 'No, thank you' (HATSHI 'Yes' / 'No' kuphela), abuyele nge-'I'm not sure' lapho engaqinisekanga, futhi angagcini esithini esithi 'I don't know' kuphela — engeza okuthize njengo-'let me check'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
