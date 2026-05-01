import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: 'Evening routine — Coming home',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Manheru ihwo nguva yekuzorora. MuChiNgezi unotaura 'I come home' (kwete 'go home' kana watouya), 'I cook dinner', 'I watch TV'. Mashoko aya anokunyaradza — manheru kumba.",
    culturalNote: "Cherechedza chinhu chinokosha: 'I come home' inoreva kuuya kumba kwauri kupera zuva — pa-perspective yauri uri kumba ino. Asi kana usati wasvika, unoti 'I'm going home'. Saka 'come' kana wakatosvika kana iri yauri kupedzisira; 'go' kana usati wasvika. Manheru muShona ihuhwo hwekugara nemhuri — muChiNgezi yeUK, hutsika hwakapfuura kuvhura TV uye kuita zvako.",
  },

  chunks: [
    {
      id: 'i_come_home',
      target: 'I come home at 6.',
      native: 'Ndinodzoka kumba na6.',
      literal: 'I come home at 6',
      emoji: '🏡',
      phonetic: 'ay-KUM-HOHM-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_cook_dinner',
      target: 'I cook dinner.',
      native: 'Ndinobika kudya kwemanheru.',
      literal: 'I cook dinner',
      emoji: '🍲',
      phonetic: 'ay-KUUK-DIN-er',
      audioRef: null,
    },
    {
      id: 'i_watch_tv',
      target: 'I watch TV.',
      native: 'Ndinotarisa TV.',
      literal: 'I watch TV',
      emoji: '📺',
      phonetic: 'ay-WOCH-TEE-VEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Evening verbs — Come / cook / watch',
    explanation: "Manheru tinoshandisa: COME HOME (kuuya kumba — pasina 'to' panopa, 'go to work' asi 'come home'), COOK (kubika — chinhu chausina kupihwa, uri kuzvigadzira), WATCH (kutarisa kwakareba — kwete 'see' kunova kuonekwa kazwedu). 'Watch TV', 'watch a film', 'watch the news' — zvose 'watch'.",
    examples: [
      { target: 'I come home at 6.',     native: 'Ndinodzoka kumba na6.' },
      { target: 'I cook dinner.',        native: 'Ndinobika kudya kwemanheru.' },
      { target: 'I watch TV.',           native: 'Ndinotarisa TV.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I come home',  right: 'Ndinodzoka kumba' },
        { left: 'I cook dinner', right: 'Ndinobika kudya kwemanheru' },
        { left: 'I watch TV',   right: 'Ndinotarisa TV' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza verb yakakodzera",
      sentence: 'I _____ dinner for my family every evening.',
      options: ['cook', 'do', 'make'],
      correct: 'cook',
      context: "'Cook' inopihwa kunyanya pakubika kudya kunoda gas/oven. 'Make' inogona kushanda zvakare ('make dinner') asi 'cook' yakanyatsobata.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinodzoka kumba na6.',
      correct: ['I come home at 6.', 'I come home at 6', 'I get home at 6.', 'I get home at 6', 'i come home at 6.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinotarisa TV.',
      correct: ['I watch TV.', 'I watch TV', 'i watch tv.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "Ndinodzoka kumba ndobika kudya"',
      words: ['cook', 'come', 'home', 'I', 'I', 'and', 'dinner.'],
      correct: ['I', 'come', 'home', 'and', 'I', 'cook', 'dinner.'],
      translation: 'Ndinodzoka kumba ndobika kudya kwemanheru',
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndeipi inonyatsoshanda?',
      question: 'In the evening, I _____ a film with my partner.',
      options: [
        { text: 'watch', correct: true },
        { text: 'see', correct: false },
        { text: 'look', correct: false },
      ],
      explanation: "'Watch' inoshanda pakuona chinhu kwenguva refu (films, TV, sport). 'See' = kungoshamisa. 'Look' = kuringa kwechinguvana.",
    },
  ],

  rwenDialogue: {
    intro: "Uri kuita video call neshamwari yako muLondon. Anokubvunza kuti unozadza sei manheru ako.",
    lines: [
      { speaker: 'npc', target: "What do you usually do in the evenings?", native: 'Unowanzoita chii manheru?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I come home around 6, cook dinner, and watch TV until 10.", native: 'Ndinodzoka kumba panenge 6, ndobika kudya, uye ndinotarisa TV kusvika 10.', correct: true, feedback: "Wakwanisa — zvitatu zvichipfuurirwa nezvina, uye 'come home' kwakanyatso shanda apo wakatouya kumba." },
          { target: "I go home, do dinner, see TV.", native: 'Ndinoenda kumba, ndoita kudya, ndinoona TV.', correct: false, feedback: "Tatu dzine error: (1) 'come home' kwete 'go home' kana watotosvika, (2) 'cook/make dinner' kwete 'do dinner', (3) 'watch TV' kwete 'see TV'." },
        ],
      },
      { speaker: 'npc', target: "Sounds peaceful! Do you cook every night?", native: 'Zvakanaka! Unobika husiku hwese here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Most nights, yes. Sometimes I order food.", native: 'Pa-husiku hwakawanda, hongu. Pamwe ndinooda kudya.', correct: true, feedback: "Yakanaka — 'most nights' chirevo chakajairika muLondon." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Come home' (kuuya kumba), 'cook dinner' (kubika), 'watch TV' (kutarisa kwenguva refu). Manheru ako mu-ChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I come home at 6 (in English)', correct: ['I come home at 6', 'I come home at 6.', 'I get home at 6.', 'i come home at 6.'] },
      { prompt: 'I cook dinner (in English)', correct: ['I cook dinner', 'I cook dinner.', 'I make dinner.', 'i cook dinner.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi manheru, paunodzoka kumba, taura muChiNgezi: 'I come home', 'I cook dinner' (kana wakabika), 'I watch TV' (kana wakatarisa). Mashoko aya — chero pamuromo chete — anosanidza ulimi wako.",
    rwenSignoff: "Mangwana — yesterday. Ndichakuratidza past tense. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri kuita video call neshamwari yeko Cape Town iyo yakatamira London makore matatu apfuura. Muri kunowedzerana nezve manheru ako — kuti unotsika sei.",
    rwenRole: "Tendai, 33, mwanasikana wechiNgezi nemuShona, anogara muLondon. Anokuziva kubva kuHarare — anokubvunza nezve evening routine yako kuti aone kana wakaita zvakaita yake.",
    successCriteria: "Mudzidzi anotsanangura evening routine — 'come home' (kwete 'go home'), 'cook dinner' kana 'make dinner', 'watch TV' (kwete 'see TV'). Hurukuro yenyu inenge yakanyatso reruka.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
