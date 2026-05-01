import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Hobbies — Zvinokufadza',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Zvinokufadza — bhuku, mimhanzi, kutamba? MuChiNgezi unotaura ne 'I like ...' kana 'I enjoy ...'. Asi pane chinhu chinokosha — pamashure pe 'I like' kana 'I enjoy', tinowedzera '-ing' kushoko reita (verb).",
    culturalNote: "MuChiShona unoti 'Ndinoda kuverenga' — 'kuverenga' yakasununguka. MuChiNgezi unoti 'I like reading' — kwete 'I like to read' chete (zvose zviri zviviri zvinoshanda asi 'reading' inonzwika nyore mu small talk). Kuwedzera '-ing' kunoita kuti shoko rive sezita — 'reading' = 'kuverenga'.",
  },

  chunks: [
    {
      id: 'i_like',
      target: 'I like ...',
      native: 'Ndinoda...',
      literal: 'I like ...',
      emoji: '👍',
      phonetic: 'ay-LAYK',
      audioRef: null,
    },
    {
      id: 'i_enjoy',
      target: 'I enjoy ...',
      native: 'Ndinofarira...',
      literal: 'I enjoy ...',
      emoji: '😊',
      phonetic: 'ay-en-JOY',
      audioRef: null,
    },
    {
      id: 'in_my_free_time',
      target: 'In my free time',
      native: 'Munguva yangu yekuzorora',
      literal: 'In my free time',
      emoji: '🕐',
      phonetic: 'in-may-FREE-taym',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Like" + gerund (-ing form)',
    explanation: "Pamashure pe 'I like' kana 'I enjoy', shoko reita rinopinda muform ye '-ing': read → reading, cook → cooking, watch → watching. Mutsara: 'I enjoy reading in my free time' = 'Ndinofarira kuverenga munguva yangu yekuzorora'.",
    examples: [
      { target: 'I like reading',                 native: 'Ndinoda kuverenga' },
      { target: 'I enjoy cooking',                 native: 'Ndinofarira kubika' },
      { target: 'In my free time, I watch films',  native: 'Munguva yangu yekuzorora, ndinotarisa mafirimu' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ezvinokufadza',
      pairs: [
        { left: 'Reading',     right: 'Kuverenga' },
        { left: 'Cooking',     right: 'Kubika' },
        { left: 'Watching films', right: 'Kutarisa mafirimu' },
        { left: 'Music',        right: 'Mimhanzi' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinoda kuverenga',
      correct: ['I like reading', 'i like reading', 'I like to read', 'i like to read'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Munguva yangu yekuzorora, ndinofarira kubika',
      correct: ['In my free time, I enjoy cooking', 'In my free time I enjoy cooking', 'in my free time, i enjoy cooking', 'in my free time i enjoy cooking'],
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa nemashoko ane '-ing'",
      sentence: "I like ____ in my free time.",
      options: ['reading', 'read', 'reads'],
      correct: 'reading',
      context: 'Pamashure pe "like" tinoshandisa "-ing".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wezvinokufadza',
      words: ['I', 'enjoy', 'cooking'],
      correct: ['I', 'enjoy', 'cooking'],
      translation: 'Ndinofarira kubika',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wakareba',
      words: ['In', 'my', 'free', 'time', 'I', 'read'],
      correct: ['In', 'my', 'free', 'time', 'I', 'read'],
      translation: 'Munguva yangu yekuzorora ndinoverenga',
    },
  ],

  rwenDialogue: {
    intro: "Wapinda mubook club inotaura ChiNgezi muHarare. Vanhu vari kuzvitaridza nezvinovafadza.",
    lines: [
      { speaker: 'npc', target: "Tell us — what do you like doing in your free time?", native: 'Tiudze — unoda kuita chii munguva yako yekuzorora?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I enjoy reading. In my free time, I read every evening.", native: 'Ndinofarira kuverenga. Munguva yangu yekuzorora, ndinoverenga manheru ese.', correct: true,  feedback: "Wakwanisa — wakapa zvinokufadza, uye wawedzera detail." },
          { target: "I like read.",                                              native: 'Ndinoda verenga.',                                                            correct: false, feedback: "Wakanganwa '-ing' — itoti 'I like reading'." },
          { target: "Read.",                                                     native: 'Verenga.',                                                                    correct: false, feedback: "Yakapfupika zvikuru — pa book club, vanoda kunzwa mutsara wakakwana." },
        ],
      },
      { speaker: 'npc', target: "Oh wonderful — what's your favourite book?", native: 'Aaa, zvakanaka — bhuku rauri kuda chii?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakaisa '-ing' pakanaka pa 'reading'. Iyo gerund (shoko rine '-ing') ndiyo nzira yekutaurira zvinokufadza muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: 'Ndinoda kuverenga (in English)',                     correct: ['I like reading', 'i like reading', 'I like to read', 'i like to read'] },
      { prompt: 'Munguva yangu yekuzorora (in English)',              correct: ['In my free time', 'in my free time', 'In my free time,', 'in my free time,'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Sarudza chinhu chimwe chinokufadza — uye nyora mutsara muChiNgezi: 'In my free time, I enjoy ___-ing.' Itazve ne shoko rakasiyana — 'I like ___-ing'.",
    rwenSignoff: "Famba zvakanaka. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at an English-language book club meeting in Harare. The group does a quick round of 'tell us one thing you enjoy outside work' before starting.",
    rwenRole: "Chipo, 28, the book club host. Friendly, follows up with 'what's a favourite book/show/recipe?' depending on what you say.",
    successCriteria: "User produces at least one 'I like/enjoy ___-ing' sentence with correct gerund form (no 'I like read'), and gives one extra detail about the hobby.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
