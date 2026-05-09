import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-boyfriend-girlfriend',
  module: 5,
  lesson: 8,
  title: 'Boyfriend, Girlfriend, Partner',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EsiNdebeleni isithandwa = umuntu omuthandayo. EsiNgisini sinemikhakha eminengi: 'boyfriend' (umfana othandwayo), 'girlfriend' (intombi ethandwayo), 'partner' (gender-neutral, futhi long-term — kungaba 'married' kuyenzeka). Uphinde ukhethe igama lesimweni — yikuphi okufaneleyo komuntu okhuluma kwakhe?",
    culturalNote: "EsiNdebeleni ukubabaza umuntu wakho ekuqaleni komshado kungumkhuba — abazali bakini babiza umuntu omtshakazana ngo-'umakoti' (umfazi othunyiweyo), kanti umfana okuyiyena ozotshatela uthi 'umkhwenyana'. EsiNgisini, abasebancane base-Zimbabwe / South Africa abasingatshade kakhulu basebenzisa 'boyfriend' / 'girlfriend' lokuba beneminyaka eminengi. 'Partner' kuvame eMzansi, eBritani, e-United States njengomashicili wendoda lo-LGBT lawemibili. Kuwena ukukhetha. Kufaneleyo ngokweBhayibhili: ukuhlonipha ubuwena lonyangawakho — 'umuntu ofuna ukutshatela / utshadele' (Igazi 4:18) — akufihlazi ngokuphilayo ndawonye ngaphambi komshado. Khetha amagama afaka isiko lakho.",
  },

  chunks: [
    {
      id: 'boyfriend',
      target: 'Boyfriend',
      native: 'Isithandwa esisemfana / umfana othandwayo',
      literal: 'Boyfriend — male, dating',
      emoji: '🧑🏾‍❤️‍👨🏾',
      phonetic: 'BOY-frend',
      audioRef: null,
    },
    {
      id: 'girlfriend',
      target: 'Girlfriend',
      native: 'Isithandwa esisentombi / intombi ethandwayo',
      literal: 'Girlfriend — female, dating',
      emoji: '👩🏾‍❤️‍🧑🏾',
      phonetic: 'GUHRL-frend',
      audioRef: null,
    },
    {
      id: 'partner',
      target: 'Partner',
      native: 'Umuntu okuhlanganeyo nawe (gender-neutral)',
      literal: 'Partner — any gender, more serious',
      emoji: '💑🏾',
      phonetic: 'PAHRT-nuh',
      audioRef: null,
    },
    {
      id: 'fiance',
      target: 'Fiancé / Fiancée',
      native: 'Umtshakazana / umtshatelwa',
      literal: 'Engaged-to-be-married — French loan word',
      emoji: '💍',
      phonetic: 'fee-AHN-say',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Choosing the right relationship word',
    explanation: "'Boyfriend' / 'girlfriend' kufaneleyo lapho usemncane noma sekuyiminyaka emi-2 noma 3. Uma ungumdala (sezikhuluma ka-30+), 'partner' yiyo evama esiNgisini sasekhaya kakhulu kunjengoba kungasiqondisi ubudala loba isimo somshado. 'Fiancé' / 'fiancée' (igama lesi-French) kuphela uma sengiqondene komshado. Faka 'my' phambili: 'my boyfriend', 'my partner', 'my fiancée'.",
    examples: [
      { target: 'My girlfriend lives in Bulawayo.',     native: 'Isithandwa sami sihlala eBulawayo.' },
      { target: "He's my partner of ten years.",         native: 'Ungumuntu osesondelene lami iminyaka eyishumi.' },
      { target: 'This is my fiancé — we get married in March.', native: 'Lo ngumtshakazana wami — sitshada ngoMashi.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Boyfriend',  right: 'Isithandwa esisemfana' },
        { left: 'Girlfriend', right: 'Isithandwa esisentombi' },
        { left: 'Partner',    right: 'Umuntu osondelene' },
        { left: 'Fiancé',     right: 'Umtshakazana' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Isithandwa sami sisebenza ku-bhange.',
      correct: ['My boyfriend works at a bank.', 'My girlfriend works at a bank.', 'My partner works at a bank.'],
    },
    {
      type: 'fill_blank',
      instruction: "Faka igama elifaneleyo — uneminyaka engama-45, ulenkokheli yempilo iminyaka eli-15",
      sentence: "I want you to meet my _____ , Sarah.",
      options: ['girlfriend', 'partner', 'fiancée'],
      correct: 'partner',
      context: "'Partner' yifaneleyo ngomuntu omdala ohlanganene leminyaka eminengi. 'Girlfriend' kuhle uma usemncane, kodwa eminyakeni ka-45 kungezwakala kungalungile. 'Fiancée' lifaneleyo kuphela uma usuzothathana, hatshi uma seliminyaka mininge.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uxoxa lobaba wakhe',
      prompt: 'Lo ngumtshakazana wami, sitshada ngoMashi.',
      correct: ['This is my fiancé, we get married in March.', 'This is my fiancée — we get married in March.', 'This is my fiancé. We get married in March.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — umngane wami umkhulu kakhulu osondelene noma uthandwa',
      words: ['girlfriend.', 'is', 'best', 'My', 'my', 'friend'],
      correct: ['My', 'best', 'friend', 'is', 'my', 'girlfriend.'],
      translation: 'Umngane wami omkhulu kakhulu yiyo isithandwa sami.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiqiniso',
      question: "Useseminyakeni eli-32. Wena lo Tendai sengithathene iminyaka eli-8 kodwa kasitshadanga. Yini efaneleyo ukufaka kuye komunye umngane?",
      options: [
        { text: "This is my partner, Tendai. We've been together for eight years.",  correct: true },
        { text: "This is my girlfriend Tendai.",                                       correct: false },
        { text: "This is my fiancée Tendai.",                                          correct: false },
      ],
      explanation: "'Partner' lihloniphekayo lokho — kufaneleyo kunjengoba uneminyaka eminengi futhi nidlulile imikhakha yobungane besemncane. 'Girlfriend' kungezwakala kungaqondi i-depth yobudlelwane. 'Fiancée' kuphela uma seliqondisile umshado.",
    },
  ],

  rwenDialogue: {
    intro: "Usemcimbini wokungena (housewarming) wabo bonke abangane bakho. Uziphakamisa kumngane oyiNgisi.",
    lines: [
      { speaker: 'npc', target: "Hi! I don't think we've met. Who's this lovely person with you?", native: 'Sawubona! Sicabanga ukuthi asikahlangani. Lo muntu omuhle olapha ngubani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "This is my partner, Sipho. We've been together for five years.", native: 'Lo ngumuntu osondelene lami, uSipho. Siseseminyaka emihlanu ndawonye.', correct: true, feedback: "Kuhle. 'Partner' yiyo elungile kunjengoba selisesokhulu ndawonye. 'Five years' yikungenelana okukhulu — umngane uzwe inhlonipho." },
          { target: "This my boyfriend Sipho.",                                         native: 'Lo isithandwa sami uSipho.',                                              correct: false, feedback: "Faka isenzo 'is': 'This is my boyfriend, Sipho.' Kanti, uma sekuneminyaka emihlanu, 'partner' kungaba kuhle kakhudlwana kuno-'boyfriend'." },
          { target: "Sipho friend mine.",                                                native: 'uSipho ngumngane wami.',                                                  correct: false, feedback: "'Friend' kuncane — yibika ukuthi ngumngane nje. Faka 'partner' loba 'boyfriend' ukuze umngane azi ngokuthatha kwakho." },
        ],
      },
      { speaker: 'npc', target: "Five years! That's wonderful. How did you meet?", native: 'Iminyaka emihlanu! Lokho kuyamangalisa. Lahlangana kanjani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "We met at church, actually. He was singing in the choir.", native: 'Sahlangana esontweni. Ubeyacula esikhumbini.', correct: true, feedback: "Kuhle — uphendule ngomtsho ophelele, futhi waphakela isimo esisembi." },
          { target: "Met. Long ago.",                                            native: 'Sahlangana. Kudala.',                            correct: false, feedback: "Cole impendulo: 'We met at...' bese ufaka indawo loba isimo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle — uphakamise umuntu wakho ngokuhlonipheka. iSimangaliso somshado siqala ngokuthandwa kwabantu phambi komJesu.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Boyfriend (ngesiNgisi)',  correct: ['Boyfriend', 'boyfriend'] },
      { prompt: 'My partner (ngesiNgisi)', correct: ['My partner', 'my partner'] },
      { prompt: 'Fiancée (ngesiNgisi)',    correct: ['Fiancée', 'fiancée', 'Fiancee', 'fiancee', 'Fiancé', 'fiancé'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Cabanga ngomuntu wakho (loba uma ungenamuntu, ngomngane wakho lonye omuthanda kwabakini). Bhala umutsho esiNgisini ofaneleyo: 'My boyfriend / girlfriend / partner is...' Khetha igama elilungile ngokwesimo sakho. Khuluma ngomlomo, ngokuhlonipha. Uma ungenamuntu, hluma le mission yelinye ilanga lapho ungaba lakho.",
    rwenSignoff: "Kusasa — umshado, ukutshada, ukwehlukana (marriage, wedding, divorce).",
  },

  phase8: {
    scenario: "You're at a work or church event where you need to introduce your significant other to someone English-speaking. Choose the right English term for your relationship — boyfriend/girlfriend (newer, younger), partner (older, longer), or fiancé(e) (engaged). Then answer one or two follow-up questions about how you met or what they do.",
    rwenRole: "Karen, 40, a friendly English-speaking colleague. Asks 'How did you two meet?' or 'What does he/she do?'",
    successCriteria: "User uses one of: 'boyfriend', 'girlfriend', 'partner', or 'fiancé(e)' appropriately for their stated situation. Uses 'my' before the term. Answers a follow-up question with a complete sentence. Speaks with respect — no slang.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
