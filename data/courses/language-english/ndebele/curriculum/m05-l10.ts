import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'A Family Conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 5 isiphelile! Manje uyazi: uMama loBaba (Mom/Dad), abantwana (children, son, daughter), abafowethu lodadewethu (siblings — older/younger), uGogo loMkhulu (grandparents), uMalume loBabakazi (uncles/aunts — labelo nuance ka-side), abakwami (in-laws), abangane (friend, best friend, colleague), isithandwa (boyfriend/girlfriend/partner), umtshado (marriage, wedding, divorce). Manje konke kuhlanganele kunkulumo eyodwa enkulu ngesiNgisi.",
    culturalNote: "EsiNdebeleni i-vocabulary yemuli iyacebile kakhulu — yiyo enye yezimnandi emhlabeni. Kulo-module awulahli lutho — usufunde ukuthi i-precision yesiNdebele iqhubeke esiNgisini ngokufaka i-clarifiers. Uma uthi 'my uncle on my mother's side' / 'we call him uMalume', awufaki imuli yakho egungeni — uvula umnyango. UMose wabhala: 'umuntu wonke uthi ahlonipheke, indlela aliphethe ngayo ulimi lwakhe' (Yakobe 3:2). Khuluma ngokuhlonipheka — ngempumelelo ngesiNdebele lasesiNgisini. Kabili. Kunye konke ndawonye.",
  },

  chunks: [
    {
      id: 'family_intro',
      target: "I have a big family. My parents and my two siblings live in Bulawayo.",
      native: 'Ngilemuli enkulu. Abazali bami labafowethu ababili bahlala eBulawayo.',
      literal: 'big family, parents, siblings — opener',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay hav uh BIG FAM-uh-lee...',
      audioRef: null,
    },
    {
      id: 'extended_family',
      target: "My grandmother lives in the village, and my uncle on my mother's side — we call him uMalume — lives in Harare.",
      native: 'uGogo wami uhlala edolobhaneni, kanti uMalume wami uhlala eHarare.',
      literal: 'grandmother + uncle with side and Ndebele term',
      emoji: '🏡',
      phonetic: 'mahy GRAND-muh-thuh livz...',
      audioRef: null,
    },
    {
      id: 'family_actions',
      target: "I visit them every month, I call my mother every day, and I miss my brother who lives abroad.",
      native: 'Ngiyabavakashela qila inyanga, ngithinta uMama wami nsuku zonke, kanti ngikhumbula umfowethu ohlala phesheya.',
      literal: 'visit, call, miss — verbs combined',
      emoji: '📞',
      phonetic: 'ay VIH-zit them...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family in flowing English — capstone',
    explanation: "Inkulumo ngomuli ifaka konke: possessives (my, our), kinship terms (mother, father, siblings, grandparents, uncles, aunts, in-laws), clarifiers (older / younger / on my mother's side), idioms (like family), past habits (used to), verbs (visit, call, miss). I-Structure: qala ngo-'I have...', faka i-detail (amagama, izindawo), bese uphetha ngomzwelo (miss, love, close). Faka igama lakini lesiNdebele uma kufaneleyo: 'we call her uGogo'.",
    examples: [
      { target: 'I have a big family — my parents, two siblings, and many cousins.', native: 'Ngilemuli enkulu — abazali bami, abafowethu ababili, lobomzala abaningi.' },
      { target: "My grandmother used to live with us; she's like a second mother.",   native: 'uGogo wayethanda ukuhlala lathi; unjengomama wesibili kimi.' },
      { target: "I miss my brother — I call him every Sunday.",                       native: 'Ngiyamkhumbula umfowethu — ngiyamthinta qila iSonto.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Khetha amagama afaneleyo — i-paragraph epheleleyo',
      sentence: "I have two _____ — an older brother and a _____ sister. My _____ live in Bulawayo.",
      options: ['siblings / younger / parents', 'siblings / older / children', 'children / younger / parents'],
      correct: 'siblings / younger / parents',
      context: "Siblings (abafowethu lodadewethu), younger (omncane — umfowethu omdala lodadewethu omncane), parents (abazali).",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (ngomuli yonke)',
      prompt: 'uGogo wayethanda ukutsho ukuthi umngane omkhulu kakhulu unjengemuli.',
      correct: ['My grandmother used to say that a best friend is like family.', 'My grandmother used to say a best friend is like family.', 'My grandmother used to say that a best friend is family.'],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'uBabakazi wami — udadewabo kaBaba — uhlala e-UK, futhi ngiyamkhumbula.',
      correct: ["My aunt — my father's sister — lives in the UK, and I miss her.", "My aunt, my father's sister, lives in the UK, and I miss her.", "My aunt — my father's sister — lives abroad, and I miss her."],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — Abazali bozakwami bayasivakashela impelaviki le',
      words: ['weekend.', 'My', 'this', 'visiting', 'are', 'in-laws', 'us'],
      correct: ['My', 'in-laws', 'are', 'visiting', 'us', 'this', 'weekend.'],
      translation: 'Abazali bozakwami bayasivakashela impelaviki le.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — kuxube zonke izinto zaku-Module 5',
      prompt: "uMalume wami — umfowabo kaMama — uhlala esithi: 'Imuli yiyo amandla.'",
      correct: ['My uncle, my mother\'s brother, always says: "Family is strength."', "My uncle — my mother's brother — always says: 'Family is strength.'", 'My maternal uncle always says: "Family is strength."'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha umutsho ofaka ngempumelelo i-richness yesiNdebele esiNgisini',
      question: "Umngane oyiNgisi ucela uthi: 'Tell me about your family.' Yiwo umutsho ofaneleyo?",
      options: [
        { text: "I have a big family. My parents live in Bulawayo with my younger sister. My older brother is abroad — I miss him. My grandmother — my father's mother, we call her uGogo — used to live with us, and she still calls every week. My uncle on my mother's side, uMalume, is visiting next month. We're a close family — we visit each other often.", correct: true },
        { text: "Big family. Parents Bulawayo. Brother far. Miss. Grandmother call. In-laws good.",                                                                                                                                                                                                                                                                                                  correct: false },
        { text: "Imuli yami enkulu. Abazali bami eBulawayo.",                                                                                                                                                                                                                                                                                                                                            correct: false },
      ],
      explanation: "Impendulo yokuqala iyahlanganisa konke: parents, sibling nuance (younger/older), grandparent + side ('my father's mother'), Ndebele kinship name ('uGogo'), uncle with maternal-side clarifier + Ndebele term (uMalume), kanti i-verbs (miss, call, visit). Yiyo i-Module 5 isiphelelisiwe ku-paragraph oyedwa.",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone! Kufanele uxoxe lomngane oyiNgisi ngomuli yakho yonke. Qala, faka i-detail, phetha.',
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your family — everyone, the whole picture.",
        native: 'Ngitshele ngomuli yakho — bonke, isithombe esiphelele.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I have a close family. My parents live in Bulawayo with my younger sister. My older brother lives in Canada — I miss him, but we call every Sunday. My grandmother — my father's mother, we call her uGogo — used to tell us stories every weekend; she's like a second mother to me. My uncle on my mother's side, uMalume, is visiting next month. We're a close family, and we visit each other often.",
            native: '...',
            correct: true,
            feedback: "Kuhle kakhulu — uhlanganise konke: parents, siblings (older / younger), grandparent past habit (used to), kinship clarifier (father's mother, on my mother's side), amagama esiNdebele (uGogo, uMalume), verbs (miss, call, visit), kanti i-idiom (like a second mother). Capstone iphelele.",
          },
          {
            target: "I have parents. I have brother and sister. I have grandmother. Aunt and uncle. We talk sometimes.",
            native: '...',
            correct: false,
            feedback: "Imuli iphelele kodwa akula nuance — faka 'older / younger', 'on my father's side', 'used to', loba 'I miss them'. Yiyo i-depth ka-Module 5.",
          },
          {
            target: "Imuli yami — abazali, umfowethu, uGogo, uMalume. Ngiyabathandi bonke.",
            native: '...',
            correct: false,
            feedback: "isiNdebele kuphela — umngane oyiNgisi akakwazi ukungena. Faka esiNgisini: 'I have parents, an older brother, a grandmother, an uncle — and I love them all.'",
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 5 iphelile! Imuli yakho iyacebile — manje ungayifaka leyo richness esiNgisini ngaphandle kokulahla lutho. Ungakhetha ukuchaza kakhudlwana loba ukufaka amagama esiNdebele — konke kusezandleni zakho. uNkulunkulu uphawule imuli — kanti uphawula nawe ngokunika ulimi lobubili.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo. Capstone recall.',
    prompts: [
      { prompt: "My grandmother used to ___ (yiyo i-verb yesiNgisi)", correct: ['cook', 'sing', 'tell stories', 'live with us', 'bake', 'pray', 'teach me', 'say', 'come over'] },
      { prompt: 'I miss my brother (ngesiNgisi)',                       correct: ['I miss my brother', 'I miss my brother.', 'i miss my brother'] },
      { prompt: "My uncle on my mother's side (ngesiNgisi)",            correct: ["My uncle on my mother's side", "my uncle on my mother's side"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wokuphela kweModule 5',
    task: "Bhala i-paragraph esiNgisini — okungenani imitsho emi-5 noma 7 ngomuli yakho. Faka kusukela kuModule yonke: abazali, abafowethu lodadewethu (older / younger), abantwana bakini noma babafowenu, uGogo loba uMkhulu (used to), uMalume loba uBabakazi (chaza i-side ngakuni), umngane (osondelene), kanti izenzo ezintathu (visit / call / miss). Bhala kufoni yakho. Funda ngomlomo. Lokho yi-graduation yakho yokwesiNgisi sosomuli.",
    rwenSignoff: "Module 5 iphelile. Imuli yakho ifika esiNgisini. Module 6 — izinombolo, isikhathi, imali.",
  },

  phase8: {
    scenario: "Capstone family conversation: an English-speaking friend wants to fully understand your family — parents, siblings, grandparents, uncles/aunts, in-laws, friends-like-family. Tell them everything in one flowing conversation. Bring the Ndebele kinship richness through clarifying English (e.g. 'my uncle on my mother's side — we call him uMalume').",
    rwenRole: "Emily, 32, your English-speaking friend who has just visited Zimbabwe for the first time and is fascinated by Ndebele family structure. Asks 'Wait — how is that uncle different from the other uncle?' and 'Do you all live close?' and 'Who do you miss most?'",
    successCriteria: "User uses 6+ family terms across the module: parents, sibling (older / younger), grandparent, uncle/aunt WITH clarifier (on my father's / mother's side), in-laws, OR friend-like-family. Uses 'used to' once. Uses at least two of visit / call / miss. Brings Ndebele kinship nuance into English (e.g. 'my uncle on my mother's side — we call him uMalume'). Uses at least one Ndebele kinship term (uGogo / uMkhulu / uMalume / uBabakazi). Avoids dropping into full Ndebele sentences.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
