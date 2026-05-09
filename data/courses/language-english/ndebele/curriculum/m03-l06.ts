import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-vegetarian-allergies',
  module: 3,
  lesson: 6,
  title: "I'm vegetarian / I'm allergic — Ukungadli inyama / Ukubadleka",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Uma ungadli inyama, kumbe une-allergy ku-peanuts kumbe ku-shellfish, kumele ucacise erestaurant. EUK leUSA, kuthathwa kakhulu — abaphathi bayazi ukuthi ungafa uma ulahlekile.",
    culturalNote: "EUK leUSA, ukubadleka (allergies) kuyimusebenzi omkhulu. Uma utsho 'I'm allergic to peanuts', umuntu okuphakelayo uzakubuza umphathi-kichi ukuze acacise. Akukho khona ukuhleba kumbe ukuncinciza. Bopha lo: 'allergic' (oyangabaza) kuyahlukile ku-'I don't like' (oyongali). Akusebenzi kuthi 'I don't eat meat' uma ungumvegetarian — kunjani ukuthi 'I'm vegetarian' (kucacile njalo). Egama elidlulisayo: 'vegan' = akadli loba luphi uhlobo lwesilwane (asingadli amasi, amaqanda, izinyosi). 'Vegetarian' = akadli inyama kodwa udla amasi/amaqanda. 'Pescatarian' = udla inhlanzi kodwa kayidli enye inyama.",
  },

  chunks: [
    {
      id: 'vegetarian',
      target: "I'm vegetarian",
      native: 'Angiyidli inyama (ngidla amasi/amaqanda)',
      literal: 'I-am vegetarian',
      emoji: '🥗',
      phonetic: 'aim-vej-uh-TAIR-ee-un',
      audioRef: null,
    },
    {
      id: 'vegan',
      target: "I'm vegan",
      native: 'Angidli loba luphi olwesilwane (akukho amasi, amaqanda)',
      literal: 'I-am vegan',
      emoji: '🌱',
      phonetic: 'aim-VEE-gun',
      audioRef: null,
    },
    {
      id: 'allergic_to',
      target: "I'm allergic to ___",
      native: 'Ngiyabadleka kuye ___',
      literal: 'I-am allergic to',
      emoji: '⚠️',
      phonetic: 'aim-uh-LUR-jik-too',
      audioRef: null,
    },
    {
      id: 'peanuts',
      target: 'peanuts',
      native: 'amazambane akhula ngaphansi (peanuts)',
      literal: 'peanuts',
      emoji: '🥜',
      phonetic: 'PEE-nuts',
      audioRef: null,
    },
    {
      id: 'no_meat',
      target: "I don't eat meat",
      native: 'Angiyidli inyama',
      literal: 'I do-not eat meat',
      emoji: '🚫',
      phonetic: 'ai-dont-eet-MEET',
      audioRef: null,
    },
  ],

  pattern: {
    name: "I'm + diet/allergy",
    explanation: "Ukucacisa ukudla okungafanele udle, sebenzisa 'I'm' + igama elichaza wena: 'I'm vegetarian', 'I'm vegan', 'I'm allergic to ___'. Lokhu kucace njalo. Ukuyitsho ngengqondo eqondileyo: 'Does this contain ___?' = 'Lokhu kuneku-___?'",
    examples: [
      { target: "I'm vegetarian.",            native: 'Angiyidli inyama.' },
      { target: "I'm allergic to peanuts.",   native: 'Ngiyabadleka kumazambane (peanuts).' },
      { target: "Does this contain nuts?",    native: 'Lokhu kunamantongomane?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imisho yokudla',
      pairs: [
        { left: "I'm vegetarian",          right: 'Angiyidli inyama' },
        { left: "I'm vegan",                right: 'Akukho lokhu kwesilwane (amasi, amaqanda)' },
        { left: "I'm allergic to peanuts",  right: 'Ngiyabadleka kumantongomane' },
        { left: "Does this contain nuts?",  right: 'Lokhu kunamantongomane?' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okulungileyo',
      question: "Une-allergy ezimbalini zamantongomane (peanuts). Yiphi ozakuyitsho erestaurant?",
      options: [
        { text: "I'm allergic to peanuts.",         correct: true },
        { text: "I don't like peanuts.",             correct: false },
        { text: "Peanuts are bad.",                  correct: false },
      ],
      explanation: "'I'm allergic to' kucacisa ukubadleka okuyimsuka — kungakulethe ukudonsa umoya. 'I don't like' kuyokutshela ukuthi awuyithandi nje, kungeyiyo i-allergy.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Angiyidli inyama (ngiyimvegetarian).',
      correct: ["I'm vegetarian", "I am vegetarian", "I don't eat meat", "i'm vegetarian"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa ngegama elilungileyo',
      sentence: "I'm ___ to shellfish — could you check the menu?",
      options: ['allergic', 'allergy', 'allergyc'],
      correct: 'allergic',
      context: "Ufuna ukucacisa ukubadleka erestaurant.",
    },
  ],

  rwenDialogue: {
    intro: "Une-allergy yamantongomane. Useerestaurant, ufuna ukufaka oda kodwa kumele ucacise.",
    lines: [
      { speaker: 'npc', target: "Are you ready to order?", native: 'Ulungele ukufaka i-oda?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, but I'm allergic to peanuts. Does the chicken curry contain nuts?", native: 'Yebo, kodwa ngiyabadleka kumantongomane. Inkukhu yekari ineyamantongomane?', correct: true,  feedback: "Kuhle kakhulu — ucacisile i-allergy futhi ubuze ngokuqondileyo. Lokhu yikhona okulungileyo." },
          { target: "I don't like peanuts.",                                                  native: 'Angithandi amantongomane.',                                                       correct: false, feedback: "Lokhu kalitsho ukuthi ungabadleka — kuthi nje awathandi. Tshela 'I'm allergic'." },
          { target: "No peanuts.",                                                            native: 'Akukho amantongomane.',                                                           correct: false, feedback: "Kalanele — kungafundeka njengokuthi awafuni amantongomane nje. Cacisa 'I'm allergic to peanuts'." },
        ],
      },
      { speaker: 'npc', target: "Let me check with the chef. One moment.", native: 'Ngizabuza umpheki. Linda kancane.' },
      { speaker: 'npc', target: "The chicken curry has peanuts — but the fish is safe.", native: 'Inkukhu yekari ineyamantongomane — kodwa inhlanzi iphephile.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. I'll have the fish, then.", native: 'Ngiyabonga. Ngizathatha inhlanzi, ngakho.',  correct: true,  feedback: "Kuhle — uphendule kahle, futhi ucacisile ukubongela." },
          { target: "Curry, then.",                          native: 'Ikari, ngakho.',                              correct: false, feedback: "Lokhu kungakubulala — i-allergy iyaphithanisa! Khetha ukudla okuphephileyo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bambelele lokhu — 'I'm allergic to ___' lokhu kungumusho ozakukulondoloza impilo. Ungasebenzisi 'I don't like' uma ungaba ubadleka — yiqhinga elahlukileyo ngokupheleleyo.",
        rwenAnimation: 'concerned',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngesiNgisi.',
    prompts: [
      { prompt: 'Ngiyabadleka kumantongomane. (ngesiNgisi)', correct: ["I'm allergic to peanuts", "I am allergic to peanuts", "i'm allergic to peanuts"] },
      { prompt: 'Angidli inyama. (ngesiNgisi — i-vegetarian)', correct: ["I'm vegetarian", "I am vegetarian", "I don't eat meat"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Cabanga ngokudla okukubangelayo i-allergy kumbe okungafanele udle. Bhala ku-phone yakho: 'I'm allergic to ___' kumbe 'I don't eat ___'. Khulisa lokho ngomlomo wakho.",
    rwenSignoff: "Kuhle. Le-sentence ingakulondoloza impilo lapha komuntu omkhulu.",
  },

  phase8: {
    scenario: "You're at a busy restaurant in Manchester, UK. You have a peanut allergy (a serious one). The menu has Thai-style dishes which often contain peanuts. You need to communicate your allergy clearly and ask which dishes are safe.",
    rwenRole: "Aisha, 25, the waitress, attentive and takes allergies seriously (UK food safety law). Will offer to check with the kitchen if asked.",
    successCriteria: "User says 'I'm allergic to peanuts' (not 'I don't like'), asks at least one question about whether a dish contains nuts, and confirms a safe choice before ordering.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
