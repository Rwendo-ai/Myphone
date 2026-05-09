import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-extended-family',
  module: 5,
  lesson: 5,
  title: 'Extended Family — Uncles, Aunts, Cousins',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Lapha kungumahluko omkhulu. EsiNdebeleni — uMalume = umfowabo kaMama (mother's brother). uBabakazi = udadewabo kaBaba (father's sister). uMamekazi = udadewabo kaMama (mother's sister). uBaba omdala / uBaba omncane = umfowabo kaBaba omdala/omncane. Esabaningi! Kodwa esiNgisini — onke amagama akhonjwa khuhlangana. UNCLE. AUNT. Just two words. EsiNgisini sikhumbula u-'malume' kanye lo-'baba omdala' njengo-'uncle'. Kunjengoba ufaka ngamabhokisi amaningi ngebhokisi elilodwa.",
    culturalNote: "EsiNdebeleni igama uMalume aliphakami umsebenzi nje wokwakheka — uMalume ufundisa indodana yakhe okukhulu kunabazali bakhe. uBabakazi ngumzali ofukamelayo emcimbini. uBaba omdala ngumphakami wendlu lapho uBaba esemncinyane. Konke lokho 'kucwaywa' lapho ungena esiNgisini — 'my uncle' lo-'my aunt' nje. Kodwa ungayilahla incediso yakho! Ungachaza: 'my uncle on my mother's side' (= uMalume) loba 'my father's older brother — we call him uBaba omdala'. Ngalokho usiza umngane oyiNgisi azwe imigaqo yokubaluleka kwakho. UMose wabhala ngoLota: 'umzalwane kayise' — ulimi labuyele ku-paternal/maternal nuance ngokwemvelo. Ungalithathi laphakathi.",
  },

  chunks: [
    {
      id: 'uncle',
      target: 'Uncle',
      native: 'uMalume / uBaba omdala / uBaba omncane / uBabazala — konke kuhlanganiswe',
      literal: 'Uncle — flattens 4+ Ndebele distinctions into one word',
      emoji: '👨🏾‍🦱',
      phonetic: 'UN-kuhl',
      audioRef: null,
    },
    {
      id: 'aunt',
      target: 'Aunt',
      native: 'uBabakazi / uMamekazi / uMamomncane — konke kuhlanganiswe',
      literal: 'Aunt — flattens paternal/maternal aunts into one word',
      emoji: '👩🏾‍🦱',
      phonetic: 'AHNT (UK) / ANT (US)',
      audioRef: null,
    },
    {
      id: 'cousin',
      target: 'Cousin',
      native: 'Umzala (umntwana ka-Malume / Babakazi / etc.)',
      literal: 'Cousin — gender-neutral, no age distinction',
      emoji: '🧑🏾',
      phonetic: 'KUH-zin',
      audioRef: null,
    },
    {
      id: 'side_clarifier',
      target: "On my mother's / father's side",
      native: 'Ngohlangothi lukaMama / lukaBaba',
      literal: 'Clarifier you add when precision matters',
      emoji: '🧭',
      phonetic: 'on mahy MUH-thuhz / FAH-thuhz sahyd',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Bringing Ndebele precision into English",
    explanation: "EsiNgisini 'uncle' = uMalume, uBaba omdala, uBaba omncane, uBabazala — sonke. 'Aunt' = uBabakazi, uMamekazi, uMamomncane — sonke. Ukuze unike incediso ezalahlekayo, faka: 'my uncle on my mother's side' (= uMalume), 'my father's younger brother' (= uBaba omncane), 'my aunt — my father's sister' (= uBabakazi). Ungaphinde ufake igama lesiNdebele: 'we call him uMalume' — kuvulela umngane oyiNgisi umunyango wesiko lakho. Ungafa kungesizathu sokulahlekelwa.",
    examples: [
      { target: "My uncle on my mother's side",        native: 'uMalume wami' },
      { target: "My father's older brother",            native: 'uBaba omdala wami' },
      { target: "My aunt — my mother's younger sister",  native: 'uMamomncane wami' },
      { target: 'My cousin (my aunt\'s daughter)',       native: 'Umzala wami, indodakazi kababakazi' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lalokho akumelayo esiNdebeleni',
      pairs: [
        { left: 'Uncle',                       right: 'uMalume / uBaba omdala / etc.' },
        { left: 'Aunt',                        right: 'uBabakazi / uMamekazi / etc.' },
        { left: 'Cousin',                      right: 'Umzala' },
        { left: "On my mother's side",         right: 'Ngohlangothi lukaMama' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uchaza uMalume wakho komunye umngane',
      prompt: 'uMalume wami — umfowabo kaMama — wangifundisa ukushayela.',
      correct: ["My uncle — my mother's brother — taught me to drive.", "My uncle, my mother's brother, taught me to drive.", "My maternal uncle taught me to drive."],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'uBabakazi wami uhlala eGoli.',
      correct: ["My aunt — my father's sister — lives in Johannesburg.", "My aunt, my father's sister, lives in Johannesburg.", "My paternal aunt lives in Johannesburg."],
    },
    {
      type: 'fill_blank',
      instruction: "Faka igama elifaneleyo — uchaza uMalume",
      sentence: "This is my uncle, on my _____ side.",
      options: ['mother', "mother's", 'mothers'],
      correct: "mother's",
      context: "'My mother's side' — apostrophe-s ikhombisa ukuthi ubudlelwane bukhona ngohlangothi lukaMama. Lokhu kufaka i-precision yesiNdebele esiNgisini.",
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — Umzala wami yindodana kababakazi',
      words: ['son.', 'My', 'is', "aunt's", 'cousin', 'my'],
      correct: ['My', 'cousin', 'is', 'my', "aunt's", 'son.'],
      translation: 'Umzala wami yindodana kababakazi.',
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha eyiqiniso — usemcimbini, ufakaza uMalume kumngane oyiNgisi",
      question: "uMalume wakho usandukufika emshadweni womzala wakho. Yini ekungcono ukuyitsho?",
      options: [
        { text: "This is my uncle — my mother's brother. We call him uMalume.",  correct: true },
        { text: "This is my uMalume.",                                            correct: false },
        { text: "This my mother brother man.",                                    correct: false },
      ],
      explanation: "Impendulo yokuqala iyabaluleka — i-formal English ('my uncle'), i-precision yesiNdebele ('my mother's brother'), kanti igama lakini lokuhlonipha ('we call him uMalume'). Awulahli lutho — udlulisa konke. Lokho kuwukungenisana kwamasiko, kungengenisi.",
    },
  ],

  rwenDialogue: {
    intro: "Usemshadweni womzala wakho. Umngane oyi-British uyacela uthi umchazele bonke abasekhaya.",
    lines: [
      { speaker: 'npc', target: "Who is everyone? Help me understand!", native: 'Bonke aba-bani? Ngisize ngiqonde!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "This is my uncle — my mother's brother — we call him uMalume. And this is my aunt on my father's side, uBabakazi.", native: 'Lo nguMalume wami — umfowabo kaMama. Lo nguBabakazi wami — udadewabo kaBaba.', correct: true, feedback: "Kuhle kakhulu — uvulile imicimbi emibili: i-formal English (my uncle / my aunt), i-precision yesiNdebele (mother's brother / father's sister), kanti amagama esiNdebele (uMalume / uBabakazi). Umngane uzwe ukuhlonipha kwemuli yakho." },
          { target: "This my uncle. This my aunt. Different.",                                                                              native: 'Lo umalume. Lo ubabakazi. Bahlukene.',                                       correct: false, feedback: "Kufitshane — faka 'my mother's brother' / 'my father's sister' ukufaka i-precision yesiNdebele." },
          { target: "uMalume. uBabakazi.",                                                                                                  native: 'uMalume. uBabakazi.',                                                       correct: false, feedback: "isiNdebele kuphela — umngane wesiNgisi akakwazi ukungena. Qala ngesiNgisi: 'This is my uncle — we call him uMalume.'" },
        ],
      },
      { speaker: 'npc', target: "Wow — your language has so many family terms. I love that.", native: 'Yebo — ulimi lwakho lulamagama amaningi emndeni. Ngiyathandeka.' },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle. Awulahli incediso yesiNdebele — uyihlanganisile lesiNgisi. Yikho indlela yobubili.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: "My uncle on my mother's side (ngesiNgisi)", correct: ["My uncle on my mother's side", "my uncle on my mother's side"] },
      { prompt: "My aunt — my father's sister (ngesiNgisi)", correct: ["My aunt — my father's sister", "My aunt - my father's sister", "My aunt, my father's sister"] },
      { prompt: 'My cousin (ngesiNgisi)',                     correct: ['My cousin', 'my cousin'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Khetha uMalume oyedwa noma uBabakazi onowamukela. Bhala kufoni esiNgisini: 'My uncle — my [mother's/father's] brother — lives in [indawo].' loba 'My aunt on my [mother's/father's] side works as [umsebenzi].' Faka igama lesiNdebele uma ufuna: 'we call him uMalume.' Khuluma ngokuphelele.",
    rwenSignoff: "Kusasa — abazali babasekhaya, abakhwenyane (in-laws). Lapho i-precision iyaphinda iphazamiseka.",
  },

  phase8: {
    scenario: "You're at a family wedding in Bulawayo. A foreign guest is curious about who everyone is. Introduce at least one uncle and one aunt, and explain — using English — the Ndebele kinship distinction (paternal vs maternal side, or older vs younger brother of your father).",
    rwenRole: "Emma, 38, a guest from the UK fascinated by Zimbabwean family structure. Asks 'Wait — which uncle is that?' and 'How is uMalume different from uBaba omdala?'",
    successCriteria: "User uses 'my uncle' or 'my aunt' AND clarifies the side (e.g. 'on my mother's side' or 'my father's older brother'). Captures at least one Ndebele nuance in English. Doesn't simply translate 'uMalume' as 'uncle' without context. Uses one Ndebele term (uMalume / uBabakazi / uBaba omdala) at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
