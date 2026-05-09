import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-id-like-can-i-have',
  module: 3,
  lesson: 5,
  title: "I'd like / Can I have — Ukufaka i-oda ngenhlonipho",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Erestaurant, indlela ofaka ngayo i-oda iyatshengisa ukuthi uhloniphekile noma hatshi. 'I want X' kuyimphukamisa eduze. 'I'd like X' kumbe 'Could I have X' yindlela enhle.",
    culturalNote: "EsiNdebeleni siyacela ngathi 'ngicela ...' okwaqondileyo nje — kalakuhlonipha okwedlulele. Kodwa esiNgisini, kakhulu eUK, indlela yokucela iyahlukanisa indoda enhloniphekileyo lendoda eyimphukamisi. Yikho lokhu okumayelana lenkundla yeziphazamiso (register): 'I want' (kalakuhlonipha) → 'Can I have' (kuhloniphe okukhulu) → 'Could I have' (kuhloniphe ngokwedlulele) → 'I'd like' (kuhloniphe njalo) → 'May I have' (kuhloniphe okukhulu kakhulu, kuyabukeka kuyifomeli). Erestaurant, sebenzisa 'Could I have' kumbe 'I'd like' — yiyo eyamukelwayo kakhulu.",
  },

  chunks: [
    {
      id: 'id_like',
      target: "I'd like ___",
      native: 'Ngifuna ___ (ngenhlonipho)',
      literal: 'I-would like',
      emoji: '🙏',
      phonetic: 'aid-laik',
      audioRef: null,
    },
    {
      id: 'can_i_have',
      target: 'Can I have ___?',
      native: 'Ngingathola ___?',
      literal: 'Can I have',
      emoji: '🤲',
      phonetic: 'kan-ai-HAV',
      audioRef: null,
    },
    {
      id: 'could_i_have',
      target: 'Could I have ___, please?',
      native: 'Ngingathola ___, ngiyacela? (kuhloniphe ngokwedlulele)',
      literal: 'Could I have',
      emoji: '🌟',
      phonetic: 'kud-ai-HAV',
      audioRef: null,
    },
    {
      id: 'ill_have',
      target: "I'll have ___",
      native: 'Ngizathatha ___',
      literal: 'I-will have',
      emoji: '☝️',
      phonetic: 'ail-HAV',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ukucela ngokuhloniphekileyo (politeness register)',
    explanation: "Phakathi kwale-form: 'I want' (kalahloniphi — kungcono ezindongeni zesikole), 'Can I have' (kahle), 'Could I have' (kuhloniphe), 'I'd like' (kuhloniphe njalo). Engeza 'please' njalo erestaurant. Ungasebenzisi 'Give me' — kuyahlukumeza eUK. EUSA bayasebenzisa 'Can I get' — kuyamukelwa.",
    examples: [
      { target: "I'd like a coffee, please.",            native: 'Ngifuna i-coffee, ngiyacela.' },
      { target: "Could I have the menu, please?",         native: 'Ngingathola umenu, ngiyacela?' },
      { target: "Can I have a glass of water, please?",   native: 'Ngingathola inkomitsho yamanzi, ngiyacela?' },
      { target: "I'll have the fish and chips.",          native: 'Ngizathatha inhlanzi lamatemu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imisho yokucela',
      pairs: [
        { left: "I'd like a coffee",          right: 'Ngifuna i-coffee (ngenhlonipho)' },
        { left: "Could I have the menu?",     right: 'Ngingathola umenu, ngiyacela?' },
        { left: "I'll have the fish.",        right: 'Ngizathatha inhlanzi.' },
        { left: "I want a coffee.",           right: 'Ngifuna i-coffee (kalahloniphi — kakubukekile)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuhlonipheke kakhulu',
      question: "Erestaurant enhle eLondon, yiphi ekulungele kakhulu?",
      options: [
        { text: "Could I have the menu, please?", correct: true },
        { text: "Give me the menu.",              correct: false },
        { text: "Menu!",                          correct: false },
      ],
      explanation: "'Could I have ... please' yindlela ekhulu yokuhlonipha. 'Give me' kalahloniphi, kuyahlukumeza erestaurant.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (kuhloniphe)',
      prompt: 'Ngifuna i-coffee, ngiyacela.',
      correct: ["I'd like a coffee please", "I'd like a coffee, please.", "Could I have a coffee please", "I would like a coffee please"],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umusho oqotho',
      words: ['Could', 'I', 'have', 'the', 'menu', 'please?'],
      correct: ['Could', 'I', 'have', 'the', 'menu', 'please?'],
      translation: 'Ngingathola umenu, ngiyacela?',
    },
  ],

  rwenDialogue: {
    intro: "Usengene erestaurant enhle eLondon. Umphathi (waiter) uyakuza etafuleni lakho.",
    lines: [
      { speaker: 'npc', target: "Good evening — are you ready to order?", native: 'Sawubona kusihlwa — ulungele ukufaka i-oda?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Could I have the menu, please?",  native: 'Ngingathola umenu, ngiyacela?', correct: true,  feedback: "Kuhle kakhulu — 'Could I have' kuhloniphe ngokwedlulele." },
          { target: "Give me the menu.",                native: 'Ngiphe umenu.',                  correct: false, feedback: "Lokhu kalahloniphi — sebenzisa 'Could I have ... please'." },
          { target: "I want menu.",                     native: 'Ngifuna umenu.',                 correct: false, feedback: "'I want' kalahloniphi erestaurant. Sebenzisa 'I'd like' kumbe 'Could I have'." },
        ],
      },
      { speaker: 'npc', target: "Of course, here you are.", native: 'Yebo ngeqiniso, nasi.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. I'd like the chicken pie, please.", native: 'Ngiyabonga. Ngifuna iphayi yenkukhu, ngiyacela.', correct: true,  feedback: "Kuhle — 'I'd like' kuyahloniphe njalo, futhi ucacisile ukuthi yiphi i-oda." },
          { target: "Bring chicken pie.",                            native: 'Letha iphayi yenkukhu.',                          correct: false, feedback: "'Bring' kalahloniphi — kuyimqondiso emfishane. Sebenzisa 'I'd like' kumbe 'I'll have'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bopha lokhu: erestaurant eUK, indlela ohloniphe ngayo iyabonakala. 'Could I have' lo 'I'd like' yiyo amaculo akho lapha. 'Give me' lo 'I want' uziyekele kibo abantwana.",
        rwenAnimation: 'thumbs_up',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngesiNgisi (kuhloniphe).',
    prompts: [
      { prompt: 'Ngifuna i-coffee, ngiyacela. (ngesiNgisi, kuhloniphe)', correct: ["I'd like a coffee please", "I'd like a coffee, please.", "Could I have a coffee please", "I would like a coffee please"] },
      { prompt: 'Ngingathola umenu, ngiyacela? (ngesiNgisi)',           correct: ["Could I have the menu please?", "Could I have the menu, please?", "Can I have the menu please?"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Lamuhla, izama umzuzu omdala oneminute eyinye phambi kwesibuko: yenza umfanekiso wokuthi useerestaurant, sebenzisa 'Could I have ___, please?' kathathu.",
    rwenSignoff: "Kuhle kakhulu. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You're at a mid-range restaurant in London for a special occasion. The waiter is formal and expects polite ordering. You need to ask for the menu, place an order, and ask about something on the menu.",
    rwenRole: "Henry, 50s, formal English waiter at a smart restaurant. Slightly uses 'sir/madam'. Will pause if user is rude or uses 'give me' / 'I want'.",
    successCriteria: "User uses 'Could I have' or 'I'd like' (not 'I want' or 'give me') for at least two requests, and includes 'please' each time.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
