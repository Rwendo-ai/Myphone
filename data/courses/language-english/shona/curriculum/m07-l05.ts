import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: 'I like / I don\'t like food — Zvandinoda nezvandisingadi',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinotaura nezvechikafu chaunoda nechausingadi. 'I love it', 'I don't like ___', 'It's delicious'. Iyi inguva yekuratidza shamwari yako yeChiNgezi kuti chii chinokuita kuti ufare pakudya.",
    culturalNote: "Pa-dinner party muUK kana muUSA, vagari vanowanzo bvunzwa nezvechikafu chaunoda — uye unotarisirwa kuratidza zvaunoda nezvausingadi pamuromo. Kumusha, kana mukati mukati paine mhuri, chikafu chinopihwa nemupati uye haunyatso siyani — kana ukasiya, chinooneka kunge usina kufara. Pano, kutsanangura 'I love sadza' kana 'I don't really eat pork' zvakanaka — chinhu chero chiri chero. Tsanangura zvauri muhukama — pakareruka, pasina kunyengera.",
  },

  chunks: [
    {
      id: 'i_love_it',
      target: 'I love it',
      native: 'Ndinoda chaizvo',
      literal: 'I love it',
      emoji: '❤️',
      phonetic: 'ay-LUV-it',
      audioRef: null,
    },
    {
      id: 'i_dont_like',
      target: "I don't like it",
      native: 'Handifariri',
      literal: "I don't like it",
      emoji: '👎',
      phonetic: 'ay-DOHNT-LAYK-it',
      audioRef: null,
    },
    {
      id: 'its_delicious',
      target: "It's delicious",
      native: 'Inoteyera',
      literal: "It is delicious",
      emoji: '😋',
      phonetic: 'its-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Preferences — like, love, don\'t like',
    explanation: "MuChiNgezi, kuratidza kuti unodisa chinhu une masimba matatu: 'I like it' (kupfava), 'I love it' (kunyanya), 'I don't like it' (kunyatsoramba). Wedzera 'really' kuti uwedzere simba: 'I really like it', 'I really don't like onions'. Cherechedza: 'I love' inotaura chikafu chete pano — kwete munhu.",
    examples: [
      { target: 'I love sadza.',                native: 'Ndinoda sadza chaizvo.' },
      { target: "I don't really like fish.",    native: 'Handifariri sezvinga hove.' },
      { target: "It's delicious.",              native: 'Inoteyera.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ekuratidza zvaunoda',
      pairs: [
        { left: 'I love it',       right: 'Ndinoda chaizvo' },
        { left: "I don't like it", right: 'Handifariri' },
        { left: "It's delicious",  right: 'Inoteyera' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuratidza kuti unoda sadza',
      prompt: 'Ndinoda sadza chaizvo.',
      correct: [
        'I love sadza.',
        'I really like sadza.',
        'I love sadza!',
        'i love sadza.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura kuti hauwanzo dyi nyama yenguruve',
      prompt: 'Handifariri nyama yenguruve.',
      correct: [
        "I don't like pork.",
        "I don't really like pork.",
        "I don't eat pork.",
        "I don't like pork much.",
        "i don't like pork.",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri pa-dinner party, wadya chimwe chinhu chinoteyera',
      sentence: "Mmm, ____ delicious!",
      options: ["it's", "I am", "they are"],
      correct: "it's",
      context: "Kuratidza kuti chikafu chiripo zvino chinoteyera, unoshandisa 'It's delicious'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara — uri kuratidza kuti unoda sadza chaizvo',
      words: ['I', 'love', 'sadza'],
      correct: ['I', 'love', 'sadza'],
      translation: 'Ndinoda sadza chaizvo',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — handidyi nyama yenguruve',
      words: ["like", "I", "pork", "don't"],
      correct: ["I", "don't", "like", "pork"],
      translation: 'Handifariri nyama yenguruve',
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-dinner party muLondon. Mumwe weshamwari yako abvunza nezvechikafu cheZimbabwe chaunoda kudya. Tsanangura zvinoteyera.",
    lines: [
      { speaker: 'npc', target: "So, what's your favourite food back home?", native: 'Ko chikafu chaunoda kumusha kweZimbabwe ndechipi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I love sadza with peanut butter greens — it's delicious.", native: 'Ndinoda sadza nemuriwo une dovi — inoteyera.', correct: true,  feedback: 'Wakwanisa — wakaratidza chikafu chaunoda, wakawedzera kuti chinoteyera.' },
          { target: "I food eat sadza.",                                          native: 'Ndinodya sadza (literal).',                       correct: false, feedback: "Hapana 'I food eat' muChiNgezi. Shandisa 'I love ___' kana 'I really like ___'." },
          { target: "Sadza yes.",                                                  native: 'Sadza hongu.',                                    correct: false, feedback: "Hapana 'I love' kana mutsetse wakakwana. Tsanangura zvakajeka." },
        ],
      },
      { speaker: 'npc', target: "Oh wow — what's it like?", native: 'O wow — chinotsanangura sei?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakavhura mukana wekutsanangura sadza muChiNgezi — chidzidzo chinotevera chinokushandisa kuita izvozvo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I love it (in English)', correct: ['I love it', 'I love it.', 'I really like it', 'i love it'] },
      { prompt: "I don't like it (in English)", correct: ["I don't like it", "I don't like it.", "I do not like it", "i don't like it"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti uri pa-dinner party. Taura pamuromo muChiNgezi: zvikafu zviviri zvaunoda chaizvo, uye chimwe chausinganyatsodi. Shandisa 'I love ___' uye 'I don't really like ___'.",
    rwenSignoff: "Tichaonana mangwana — tinodzidza kubika.",
  },

  phase8: {
    scenario: "You're at a UK dinner party in your friend's London flat. They've cooked something European. Someone asks about your favourite Zimbabwean food. Talk about sadza and one dish you don't really eat (e.g. very spicy food, or pork).",
    rwenRole: "Emma, 32, your British friend's housemate. Curious about Zimbabwe, never been. Will ask follow-up questions.",
    successCriteria: "User uses 'I love ___' for at least one Zimbabwean dish, uses 'I don't (really) like ___' for one item, optionally uses 'It's delicious'. Conversational, not a lecture.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
