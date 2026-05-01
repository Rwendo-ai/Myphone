import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'In-laws — A polite topic',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Vamwene navatezvara — vanhu vepamuchato. MuChiNgezi: 'mother-in-law', 'father-in-law'. Cherechedza '-in-law' inopiwa pakati pe hyphens — zvinoreva 'kuburikidza nemutemo wemuchato'.",
    culturalNote: "MuChiShona, kutaura nezve vamwene navatezvara kunoita zvakachenjera — pane mitemo (e.g. mukadzi haatauri zita ravatezvara). MuChiNgezi, hapana mitemo yakaoma kudaro asi tsika ye kuremekedza inogara — varikuita basa rimwe chete neChiShona, asi nemashoko mashoma. 'In-law' ye English yakareruka pamuromo asi haisi shoko 'cold' — inogonawo kushanda zvine rudo. Murume kana mukadzi: 'husband' / 'wife' — zvirevo zvakareruka, asi zvine uremu mu mufambo wedu.",
  },

  chunks: [
    {
      id: 'mother_in_law',
      target: 'Mother-in-law',
      native: 'Vamwene',
      literal: 'mother through marriage',
      emoji: '👩🏾‍🦳',
      phonetic: 'MUH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'father_in_law',
      target: 'Father-in-law',
      native: 'Vatezvara',
      literal: 'father through marriage',
      emoji: '👨🏾‍🦳',
      phonetic: 'FAH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'spouse',
      target: 'My husband / My wife',
      native: 'Murume wangu / Mukadzi wangu',
      literal: 'husband mine / wife mine',
      emoji: '💍',
      phonetic: 'mahy HUZ-bund / mahy WAYF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Marriage-family — hyphenated terms',
    explanation: "MuChiNgezi, mashoko 'in-law' anouya nemavambo emhuri ('mother', 'father', 'brother', 'sister') ne hyphens. Plural inowedzera 's' KUMASHURE, kwete pa 'in-law': 'mothers-in-law' chete kana 'sisters-in-law'. Asi 'in-laws' (general — vanhu vose vemuchato) inoshanda pa group: 'I'm visiting my in-laws.'",
    examples: [
      { target: 'My mother-in-law',           native: 'Vamwene vangu' },
      { target: 'My in-laws live in Bulawayo.', native: 'Vavakwasha vangu vanogara muBulawayo.' },
      { target: 'My husband\'s sister',         native: 'Hanzvadzi yemurume wangu' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Mother-in-law',  right: 'Vamwene' },
        { left: 'Father-in-law',  right: 'Vatezvara' },
        { left: 'My husband',     right: 'Murume wangu' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mukadzi wangu nevamwene vangu vakuita basa rimwe chete.',
      correct: ['My wife and my mother-in-law work together.', 'My wife and mother-in-law work together.', 'my wife and my mother-in-law work together.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura kushamwari nezvekutanga kuonana ne vatezvara',
      prompt: 'Ndichaonana navatezvara vangu kekutanga svondo rinouya.',
      correct: ["I'm meeting my father-in-law for the first time next week.", "I will meet my father-in-law for the first time next week.", "I'm meeting my father-in-law next week for the first time."],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "My in-laws are very kind"',
      words: ['kind.', 'My', 'are', 'in-laws', 'very'],
      correct: ['My', 'in-laws', 'are', 'very', 'kind.'],
      translation: 'Vavakwasha vangu vane mwoyo munyoro',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — plural ye in-law',
      sentence: 'My _____ are visiting from Mutare this weekend.',
      options: ['mother-in-laws', 'mothers-in-law', 'in-laws'],
      correct: 'in-laws',
      context: "'In-laws' inoshanda kana uchitaura pamhuri yose yemuchato. Kana iri mai chete: 'mother-in-law' (singular). Plural y'mother-in-law' yakaoma — 'mothers-in-law' (s pa 'mother', kwete 'in-law').",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "You're nervous about meeting your future mother-in-law for the first time. You text a friend in English. What sounds most natural?",
      options: [
        { text: "I'm meeting my mother-in-law tomorrow — I'm a bit nervous.", correct: true },
        { text: "Tomorrow vamwene of me. Fear inside.",                       correct: false },
        { text: "I have meeting woman of marriage tomorrow scared.",          correct: false },
      ],
      explanation: "'I'm meeting my mother-in-law tomorrow' inoshanda zvakanaka. Kuwedzera 'a bit nervous' kunoratidza kuti uri munhu chaiye — hutsika hwekutaura zvauri kunzwa.",
    },
  ],

  rwenDialogue: {
    intro: "Watumira shamwari yako message paChiNgezi — uri kuda kutsanangura zvauri kunzwa nezve kuonana navatezvara vako kekutanga manje.",
    lines: [
      { speaker: 'npc', target: "How was meeting the in-laws? Tell me everything!", native: 'Zvakaita sei kuonana navavakwasha? Ndiudze zvose!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It went well — my father-in-law is kind, but my mother-in-law was a bit reserved at first. We talked for two hours.", native: 'Zvaiita zvakanaka — vatezvara vane mwoyo munyoro, asi vamwene vakatanga vane chinhambwe. Takataurirana kwemaawa maviri.', correct: true, feedback: "Wakwanisa — wakaratidza nuance: vatezvara nevamwene vakasiyana, uye 'a bit reserved' inoratidza kuti unonzwisisa tsika dzeChiShona zveku tanga zvinya zvakaita." },
          { target: "Good. Talked. Done.",                                                                                                  native: 'Zvakanaka. Takataura. Zvapera.',                                                                                              correct: false, feedback: "Pfupi zvakanyanya — shamwari iri kuda nyaya. Wedzera detail: 'my mother-in-law was kind...' kana 'we talked about...'." },
          { target: "Vatezvara vakanaka asi vamwene vaicheneswa.",                                                                          native: 'Vatezvara vakanaka asi vamwene vaicheneswa.',                                                                                  correct: false, feedback: "ChiShona chete — shandura kuChiNgezi: 'My father-in-law was kind but my mother-in-law was reserved.'" },
        ],
      },
      { speaker: 'npc', target: "That's normal at first — give it time.", native: 'Izvo zvakajaira pakutanga — chimirira nguva.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watakura tsika yedu yekuremekedza vamwene navatezvara muChiNgezi — kunyange shoko ra 'in-law' richinzwika 'flat', wakatakura uremu nemafungiro ako.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'My mother-in-law (in English)', correct: ['My mother-in-law', 'my mother-in-law'] },
      { prompt: 'My husband (in English)',        correct: ['My husband', 'my husband'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga vatezvara kana vamwene vako (kana vakambovapo). Edzana kunyora chirevo cheChiNgezi: 'My mother-in-law is...' kana 'My father-in-law lives in...' Verenga muromo. Kana usina, fungidzira shamwari yauri kuda kuudza nezve mhuri yake.",
    rwenSignoff: "Mangwana — shamwari (friends) — pavanozoita semhuri.",
  },

  phase8: {
    scenario: "You're texting/talking to a close English-speaking friend before or after meeting your future in-laws for the first time. Share how you're feeling and what's on your mind. Be honest — nervous, excited, both.",
    rwenRole: "Lisa, 30, your closest English-speaking friend. Knows you well. Listens with empathy and asks 'How did your husband/wife react?' or 'Did your mother-in-law like the gift you brought?'",
    successCriteria: "User uses 'mother-in-law', 'father-in-law', or 'in-laws' at least once. Uses 'my husband' or 'my wife' (or future tense). Conveys an emotional state ('nervous', 'happy', 'worried'). Doesn't bark single words — full sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
