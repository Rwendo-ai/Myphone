import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Past tense — Yesterday I...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Nezuro — yesterday. MuChiNgezi pakutaura zvakaitika kare, unowedzera '-ed' kumagumo eshoko (walked, talked, watched). Asi mamwe mashoko ane forms dzakasiyana zvakanyanya: 'go' inopinda 'WENT', 'see' inopinda 'SAW', 'eat' inopinda 'ATE'. Idzi dzinonzi 'irregular verbs' — dzinodikanwa kudzidzwa nemusoro.",
    culturalNote: "MuShona, past tense yakapfuura inoda chete prefix '-aka-' kana '-aka-': 'ndakaenda' = I went, 'ndakaona' = I saw. Yakareruka — prefix imwe inogadzirisa zvose. MuChiNgezi unoda kushandura shoko rebasa rose — 'go' → 'went' (yakasiyana zvachose). Saka pakutanga, dzidza zvirevo zvitatu zvinokosha: WENT (ndakaenda), SAW (ndakaona), HAD (ndakanga ndine). Dzimwe 5-10 dzinotevera nokunge wave kushandisa.",
  },

  chunks: [
    {
      id: 'yesterday_i_went',
      target: 'Yesterday I went to the market.',
      native: 'Nezuro ndakaenda kumusika.',
      literal: 'Yesterday I went to the market',
      emoji: '🚶',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
    {
      id: 'i_saw_a_friend',
      target: 'I saw a friend.',
      native: 'Ndakaona shamwari.',
      literal: 'I saw a friend',
      emoji: '👀',
      phonetic: 'ay-SAW-uh-FREND',
      audioRef: null,
    },
    {
      id: 'it_was_great',
      target: 'It was great.',
      native: 'Zvanga zvakanaka.',
      literal: 'It was great',
      emoji: '👍',
      phonetic: 'it-WUZ-GRAYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Simple past — Regular & Irregular',
    explanation: "REGULAR: wedzera '-ed' (walk → walked, watch → watched, talk → talked). IRREGULAR (zvinokosha kudzidzwa): go → WENT, see → SAW, eat → ATE, have → HAD, be → WAS/WERE, come → CAME, do → DID, make → MADE. Cherechedza: 'I was', 'You/We/They WERE', 'He/She/It WAS'. ChiShona '-aka-' inoshanda kose — ChiNgezi inoda forms diversity.",
    examples: [
      { target: 'Yesterday I went to the market.',  native: 'Nezuro ndakaenda kumusika.' },
      { target: 'I saw a friend.',                  native: 'Ndakaona shamwari.' },
      { target: 'It was great.',                    native: 'Zvanga zvakanaka.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana present neyepast (irregular verbs)',
      pairs: [
        { left: 'go',   right: 'went' },
        { left: 'see',  right: 'saw' },
        { left: 'eat',  right: 'ate' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa neirregular past',
      sentence: 'Yesterday I _____ to the shop.',
      options: ['went', 'goed', 'go'],
      correct: 'went',
      context: "'Go' iri irregular — past yacho ndi 'went', kwete 'goed'. Hapana 'goed' muChiNgezi.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — past tense',
      prompt: 'Nezuro ndakaenda kumusika.',
      correct: ['Yesterday I went to the market.', 'Yesterday I went to the market', 'I went to the market yesterday.', 'yesterday i went to the market.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — past tense',
      prompt: 'Ndakaona shamwari.',
      correct: ['I saw a friend.', 'I saw a friend', 'I saw my friend.', 'i saw a friend.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo chepast: "Zvanga zvakanaka kwazvo"',
      words: ['really', 'It', 'great.', 'was'],
      correct: ['It', 'was', 'really', 'great.'],
      translation: 'Zvanga zvakanaka kwazvo',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka nyaya yepast tense',
      words: ['saw', 'I', 'a', 'I', 'and', 'friend.', 'went,'],
      correct: ['I', 'went,', 'and', 'I', 'saw', 'a', 'friend.'],
      translation: 'Ndakaenda, uye ndakaona shamwari.',
    },
  ],

  rwenDialogue: {
    intro: "Uri kuLondon. Wadzoka kubva kumusangano — wakange wakanonoka. Shamwari yako inokubvunza zvakaitika.",
    lines: [
      { speaker: 'npc', target: "Hey! What happened yesterday? You looked stressed.", native: 'Hesi! Chii chakaitika nezuro? Wakaratidza kunge waneta.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yesterday I went to a meeting, but the train was late, so I missed it. It was a bad day.", native: 'Nezuro ndakaenda kumusangano, asi chitima chakanonoka, saka ndakaurasa. Zvanga zviri zuva rakaipa.', correct: true, feedback: "Wakwanisa! Wakashandisa irregular past forms zvakawanda: 'went', 'was', 'missed'. Past narrative yakanyatso vakwa." },
          { target: "Yesterday I goed to meeting. Train late. Bad day.", native: 'Nezuro ndaienda kumusangano. Chitima rakanonoka. Zuva rakaipa.', correct: false, feedback: "Pane error mbiri: (1) 'goed' haipo — 'go' inopinda 'WENT'. (2) 'Train was late' — unoda 'WAS' (past of 'is')." },
        ],
      },
      { speaker: 'npc', target: "That sounds awful. I had a similar day last week.", native: 'Zvinosvosva. Ini ndakanga ndine zuva rakafanana svondo rakapera.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Past tense yeChiNgezi: 'go → went', 'see → saw', 'have → had', 'is → was'. Idzi 4 chete dzinokuvhura nyaya yose. ChiShona '-aka-' inotokwana — ChiNgezi inoda forms dzimwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Yesterday I went to the market (in English)', correct: ['Yesterday I went to the market', 'Yesterday I went to the market.', 'I went to the market yesterday.', 'yesterday i went to the market.'] },
      { prompt: 'I saw a friend (in English)', correct: ['I saw a friend', 'I saw a friend.', 'I saw my friend.', 'i saw a friend.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi manheru, fungidzira nezvenezuro. Taura zvirevo zvitatu muChiNgezi: 'Yesterday I went to ___', 'I saw ___', 'It was ___'. Iyi practice inokuonesa kuti irregular forms idzi (went, saw, was) dzinosanidzwa sei.",
    rwenSignoff: "Mangwana — tomorrow. Future tense ('I will...'). Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri pa-pub muLondon neshamwari yebasa. Wakanga uchirovedza zuva rakaipa nezuro — chitima chakanonoka, wakarasa musangano. Tsanangurira — past tense.",
    rwenRole: "Lucy, 30, colleague yako, anogona kunzwa nyaya dzakawanda. Anokubvunza mibvunzo iyo inokurudzira kuti utaure nezvinhu zvakaitika.",
    successCriteria: "Mudzidzi anoshandisa irregular past forms (went, saw, was, had, made, did) kanenge katanhatu, anonyatsotaura nyaya yepast yakajeka — kwete kuvhiringa present nepast.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
