import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-how-much',
  module: 2,
  lesson: 8,
  title: 'How much? — Marii?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Pamarket kana pamatengeso, unoda kubvunza mutengo. MuChiNgezi: 'How much?'. Wedzera 'It's expensive' kana 'It's cheap' kuti pinda mukutengetana.",
    culturalNote: "MuChiShona kutengetana ('bargaining') chinhu chakajairika — kunyanya pamamarket. MuChiNgezi inoshanda zvakafanana, asi mutengetesi anenge achidzoreredza zvinyoro nyoro. 'It's expensive' — kunyemwerera — kunoita seunoda kuderedzwa, kwete kuwedzerwa.",
  },

  chunks: [
    {
      id: 'how_much',
      target: 'How much?',
      native: 'Marii?',
      literal: 'How much?',
      emoji: '💰',
      phonetic: 'HOW-much',
      audioRef: null,
    },
    {
      id: 'its_expensive',
      target: "It's expensive",
      native: 'Idhura',
      literal: 'It-is expensive',
      emoji: '💸',
      phonetic: 'its-eks-PEN-siv',
      audioRef: null,
    },
    {
      id: 'its_cheap',
      target: "It's cheap",
      native: 'Hairipi mari',
      literal: 'It-is cheap',
      emoji: '🪙',
      phonetic: 'its-CHEEP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Currency questions',
    explanation: "'How much' inopindira pakubvunza mutengo. Mhinduro inenge yakareba: 'It's twenty dollars' kana 'It costs ten rand'. Kuti uderedze mutengo, taura 'It's too expensive' kana 'Can you do cheaper?'.",
    examples: [
      { target: 'How much is this?',          native: 'Ichi imarii?' },
      { target: 'How much does it cost?',     native: 'Inotenga marii?' },
      { target: "It's too expensive for me.", native: 'Idhura kwandiri.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'How much?',     right: 'Marii?' },
        { left: "It's expensive", right: 'Idhura' },
        { left: "It's cheap",     right: 'Hairipi mari' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wakabata chinhu pamusika',
      prompt: 'Ichi imarii?',
      correct: ['How much is this?', 'How much is this', 'how much is this?', 'How much is it?', 'How much does this cost?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kuratidza kuti mutengo wakakwirira',
      sentence: "It's ____ expensive.",
      options: ['too', 'very much', 'so'],
      correct: 'too',
      context: "'Too expensive' = idhura zvakanyanya. Iyi ndiyo nzira yakajairika yekuderedza mitengo.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kubvunza mutengo wechinhu',
      words: ['this', 'How', 'is', 'much'],
      correct: ['How', 'much', 'is', 'this'],
      translation: 'Ichi imarii?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Idhura kwandiri',
      correct: ["It's too expensive for me", "It's too expensive for me.", "It is too expensive for me", "Too expensive for me", "it's too expensive for me"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kukumbira mutengo wakaderera',
      prompt: 'Mungandiderere here?',
      correct: ['Can you make it cheaper?', 'Can you make it cheaper', 'can you make it cheaper?', 'Can you do cheaper?', 'Cheaper, please?'],
    },
  ],

  rwenDialogue: {
    intro: "Watora chinhu pacraft market — chigaba chakanaka. Mutengesi anotaura ChiNgezi. Bvunza mutengo, edza kuderedza.",
    lines: [
      { speaker: 'npc', target: "Lovely piece, isn't it? Are you interested?", native: 'Chigaba chakanaka, handiti? Une chido here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, how much is it?",   native: 'Hongu, imarii?',          correct: true,  feedback: 'Wakwanisa — wakapindura uye wakabvunza mutengo zvakajeka.' },
          { target: "Cheap?",                   native: 'Inodhura zvishoma?',     correct: false, feedback: 'Pfupi uye yakatsemuka — bvunza mutengo tanga.' },
          { target: "I don't understand.",     native: 'Handinzwisise.',          correct: false, feedback: 'Wakanyatsonzwisisa — pindura uye bvunza mutengo.' },
        ],
      },
      { speaker: 'npc', target: "Forty US dollars.", native: 'Madhora makumi mana eAmerica.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Iye zvino unogona kuti 'It's too expensive' kuderedza mutengo. Hapana munhu anokarira muongorori wechigaba.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'How much? (in English)',      correct: ['How much?', 'How much', 'how much?', 'How much is it?'] },
      { prompt: "It's expensive (in English)", correct: ["It's expensive", "It's expensive.", "It is expensive", "it's expensive"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Bvunza mutengo wechimwe chinhu nhasi muChiNgezi — pa-app, paphone, kana panyaya. Sevenza ne 'How much?' uye mhinduro yacho.",
    rwenSignoff: "Munhu anobvunza mutengo haabiwi. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're selling traditional Shona stone sculptures at Mbare Market and a tourist comes to your stall. They speak only English. Negotiate a sale — but the catch is YOU are the buyer's perspective today: ask the price, push back if it's expensive, and either buy or walk away politely.",
    rwenRole: "James, 38, a stone sculptor and stall owner. Friendly, will start high, will negotiate. Speaks plain English.",
    successCriteria: "User asks 'How much is it?', uses 'It's too expensive' or 'Can you make it cheaper?' to negotiate, either accepts a price or politely declines ('Maybe later' / 'No, thank you'). Doesn't agree to the first price silently.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
