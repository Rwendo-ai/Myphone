import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'In-laws — Mother-in-law & Father-in-law',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "EsiNdebeleni umuntu omtshadileyo uthwala amagama amaningi: uMamezala (umama womkhwenyane wakhe / umama wendoda yakhe), uYisezala (uyise wendoda yakhe), umkhwenyana (son-in-law), umalokazana (daughter-in-law), inkosikazi yobaba (umkamazala-in-law)... Konke lokho kuhlanganiselwa esiNgisini ngezimo ezimbili: 'mother-in-law' / 'father-in-law'. Hyphens ezimbili — kuthi 'wewashado'.",
    culturalNote: "EsiNdebeleni ubudlelwane bukamamezala / yisezala bunzima — futhi bunokuhlonipha okukhulu. Akugciniwe nokho phakathi komuntu wakini — kufaka indawo, ukulinda, izindlela zokukhuluma. EsiNgisini, 'mother-in-law' iqhutshwe yiyo lula nje — kodwa ukunengelana kwehambisana lokuhlonipha okukhulu emasikweni amaNgisi nawo. Uma umngane oyiNgisi ethi 'I'm meeting my future mother-in-law next week,' uyaqonda ukuthi unelukunikwa ukukhathazeka — kuyimvelo yangonke. Ukuhlonipha okuwakuvele uvelelwe ngamehlo nokushaya kohlonipho — sicela ukuze kungene ezwini lakho lasekuziphathekeni kwakho. UMose wabhala: 'Indoda izabashiya uyise lonina ifinyelele kumkayo' (Genesisi 2:24) — futhi imiNdebele iyazi: i-balance phakathi kwemuli yendoda lemuli yomfazi. EsiNgisini akula amazwi alungileyo abhalwe okukhulu — ukuhlonipha kuvela ezithombeni zakho lasezenzweni.",
  },

  chunks: [
    {
      id: 'mother_in_law',
      target: 'Mother-in-law',
      native: 'uMamezala (umama wozakwakho)',
      literal: 'Mother-in-law — hyphens ezimbili',
      emoji: '👩🏾‍🦳',
      phonetic: 'MUH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'father_in_law',
      target: 'Father-in-law',
      native: 'uYisezala (uyise wozakwakho)',
      literal: 'Father-in-law — hyphens ezimbili',
      emoji: '👨🏾‍🦳',
      phonetic: 'FAH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'in_laws',
      target: 'In-laws',
      native: 'Abazali bozakwakho (bonke ndawonye)',
      literal: 'In-laws — plural, gender-neutral',
      emoji: '👴🏾👵🏾',
      phonetic: 'IN-lawz',
      audioRef: null,
    },
    {
      id: 'spouse',
      target: 'My husband / My wife',
      native: 'Umyeni wami / Umkami',
      literal: 'Spouse — gender-specific',
      emoji: '💍',
      phonetic: 'mahy HUZ-bund / mahy WAYF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hyphenated terms — mother-in-law, sister-in-law, etc.',
    explanation: "'In-law' lihlanganiswe nge-hyphens (-) — kuthi: kuyilengisana ngomshado. 'Mother-in-law', 'father-in-law', 'sister-in-law', 'brother-in-law'. Eqenjini eli-formal: i-plural ye-singular ifaka 's' ku-noun yokuqala — 'mothers-in-law' (hatshi 'mother-in-laws'). Kodwa esimweni esivamile, sebenzisa 'in-laws' njengeqembu lonke: 'I'm visiting my in-laws.' Lokho kuhambisa abazali bozakwakho bobabili kanye njalo.",
    examples: [
      { target: 'My mother-in-law',           native: 'uMamezala wami' },
      { target: 'My in-laws live in Bulawayo.', native: 'Abazali bozakwami bahlala eBulawayo.' },
      { target: "I'm visiting my in-laws this weekend.", native: 'Ngivakashela abazali bozakwami impelaviki le.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Mother-in-law',  right: 'uMamezala' },
        { left: 'Father-in-law',  right: 'uYisezala' },
        { left: 'My husband',     right: 'Umyeni wami' },
        { left: 'In-laws',        right: 'Abazali bozakwakho' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Umkami loMamezala wami basebenza ndawonye.',
      correct: ['My wife and my mother-in-law work together.', 'My wife and mother-in-law work together.', 'my wife and my mother-in-law work together.'],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uxoxa lomngane ngokuhlangana noyihloyezalamzini wokuqala',
      prompt: 'Ngizohlangana noYisezala iviki ezayo, kungumzukulu wami wokuqala.',
      correct: ["I'm meeting my father-in-law next week, for the first time.", "I'm meeting my father-in-law for the first time next week.", "I will meet my father-in-law for the first time next week."],
    },
    {
      type: 'fill_blank',
      instruction: 'Faka igama elifaneleyo — i-plural',
      sentence: 'My _____ are visiting from Bulawayo this weekend.',
      options: ['mother-in-laws', 'in-laws', 'mothers-in-law'],
      correct: 'in-laws',
      context: "'In-laws' yiyiplural elungile kabazali bonke bozakwakho. 'Mother-in-laws' AYISIYO lungile — i-plural elungile yi 'mothers-in-law' (s ngo 'mother', hatshi ngo 'in-law'). Kodwa lapha kufanele konke njengeqembu — sebenzisa 'in-laws'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — Abazali bozakwami banomusa kakhulu',
      words: ['kind.', 'My', 'are', 'in-laws', 'very'],
      correct: ['My', 'in-laws', 'are', 'very', 'kind.'],
      translation: 'Abazali bozakwami banomusa kakhulu.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiqiniso',
      question: "Uzohlangana noMamezala wokuqala nyakuvile. Yini onga-text-eyo umngane?",
      options: [
        { text: "I'm meeting my mother-in-law tomorrow — I'm a bit nervous.", correct: true },
        { text: "Tomorrow uMamezala. Fear inside.",                            correct: false },
        { text: "Have meeting woman of marriage tomorrow scared.",            correct: false },
      ],
      explanation: "Impendulo yokuqala yi-natural English. 'A bit nervous' yikungavumelana okuvulekileyo — kufakaza ukuthi ungumuntu, akufihlazi. Yiyo indlela yokuvuma ngomzwelo ngesiNgisi.",
    },
  ],

  rwenDialogue: {
    intro: "Wandika kumngane wakho omsondelene ngokuthi uvela kuhlangana noYisezala wakho wokuqala — kanti uthwala imizwa.",
    lines: [
      { speaker: 'npc', target: "How was meeting the in-laws? Tell me everything!", native: 'Bekunjani ukuhlangana labazali bozakwakho? Ngitshele yonke into!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It went well — my father-in-law is kind, but my mother-in-law was a bit reserved at first. We talked for two hours.", native: 'Bekuhle — uYisezala wami unomusa, kodwa uMamezala wayethule kakhulu ekuqaleni. Sasibo nzika sixoxe izinyanga ezimbili.', correct: true, feedback: "Kuhle — uphawule i-nuance: uYisezala loMamezala bekuhlukene, futhi 'a bit reserved at first' likhombisa ukuhlonipha kokusunguliwe ngokwemvelo." },
          { target: "Good. Talked. Done.",                                                                                                  native: 'Kuhle. Saxoxa. Kuphelile.',                                                                                                                                  correct: false, feedback: "Kufitshane kakhulu. Umngane ufuna umlando — faka 'my mother-in-law was kind...' loba 'we talked about...' ukubandakanya." },
          { target: "Yisezala wami muhle kodwa uMamezala bethule.",                                                                          native: 'uYisezala wami muhle kodwa uMamezala bethule.',                                                                                                              correct: false, feedback: "isiNdebele-mix — sebenzisa esiNgisini sodwa: 'My father-in-law was kind but my mother-in-law was reserved.'" },
        ],
      },
      { speaker: 'npc', target: "That's normal at first — give it time.", native: 'Lokho kuvamile ekuqaleni — lipha isikhathi.' },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle — wakhomba ukuhlonipha okwesiNdebele esiNgisini. 'In-law' kungezwakala kungalungile, kodwa wena uvule umumo wakho — uYisezala loMamezala bahlonipheka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'My mother-in-law (ngesiNgisi)', correct: ['My mother-in-law', 'my mother-in-law'] },
      { prompt: 'My father-in-law (ngesiNgisi)', correct: ['My father-in-law', 'my father-in-law'] },
      { prompt: 'In-laws (ngesiNgisi)',          correct: ['In-laws', 'in-laws'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Cabanga ngabazali bozakwakho (loba abahlanganisa indawo yabo). Bhala umutsho esiNgisini: 'My mother-in-law is...' loba 'My father-in-law lives in...' loba 'My in-laws are kind.' Khuluma ngomlomo. Uma ungengumtshado, khuluma ngabakaomngane wakho — 'My friend's in-laws are kind.'",
    rwenSignoff: "Kusasa — abangane (friends, best friends, colleagues).",
  },

  phase8: {
    scenario: "You're texting or talking to a close English-speaking friend before or after meeting your in-laws — perhaps for the first time, perhaps after a long visit. Share how you're feeling and what's on your mind. Be honest — nervous, excited, both.",
    rwenRole: "Lisa, 30, your closest English-speaking friend. Knows you well. Listens with empathy and asks 'How did your husband/wife react?' or 'Did your mother-in-law like the gift you brought?'",
    successCriteria: "User uses 'mother-in-law', 'father-in-law', or 'in-laws' at least once. Uses 'my husband' or 'my wife' (or future tense). Conveys an emotional state ('nervous', 'happy', 'worried'). Speaks in full sentences, not single words.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
