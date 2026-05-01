import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Bus, Taxi, Train — Bhazi, Tekisi, Chitima',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Pamabasa edu eZimbabwe, tinotora kombi. KuLondon, vanotora 'the bus', 'the tube', 'an Uber'. Maitiro akafanana — mashoko akasiyana. Iri ndiyo lesson yekuwedzera kuti uziva mashoko aya pasina kunetseka.",
    culturalNote: "Cherechedza muUK kana muUS: 'taxi' inoreva motokari yepedyo (yandinotsvaga pa-app); 'bus' inoreva motokari hombe yenzira yakatemwa; 'train' chitima — chinofamba pa-railway. KuLondon, 'the tube' = chitima chiri pasi peuto guta. Hapana 'kombi' kuLondon — kana uchityotsanangurira UK friend, taura kuti 'kombi is like a small minibus that picks up and drops off whenever you wave at it'.",
  },

  chunks: [
    {
      id: 'the_bus',
      target: 'The bus',
      native: 'Bhazi',
      literal: 'The bus',
      emoji: '🚌',
      phonetic: 'thuh-BUS',
      audioRef: null,
    },
    {
      id: 'taxi',
      target: 'A taxi',
      native: 'Tekisi',
      literal: 'A taxi',
      emoji: '🚕',
      phonetic: 'uh-TAK-see',
      audioRef: null,
    },
    {
      id: 'the_train',
      target: 'The train',
      native: 'Chitima',
      literal: 'The train',
      emoji: '🚆',
      phonetic: 'thuh-TRAYN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Transport nouns',
    explanation: "MuChiNgezi, motokari yetransport ine 'the' kana 'a': 'the bus' (yatakatomira) kana 'a bus' (chero bhazi). 'I take the bus' = 'Ndinotora bhazi'. 'I take a taxi' = 'Ndinotora tekisi'. Cherechedza: 'I'm taking ___ now' = 'Ndiri kutora ___ izvozvi'. Verb 'take' inoshandiswa kupi kose pakutaura nezve transport.",
    examples: [
      { target: 'The bus',   native: 'Bhazi' },
      { target: 'A taxi',    native: 'Tekisi' },
      { target: 'The train', native: 'Chitima' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko etransport',
      pairs: [
        { left: 'The bus',   right: 'Bhazi' },
        { left: 'A taxi',    right: 'Tekisi' },
        { left: 'The train', right: 'Chitima' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — unoda kutora bhazi',
      prompt: "Ndiri kutora bhazi.",
      correct: [
        "I'm taking the bus.",
        "I am taking the bus.",
        "I'm taking the bus",
        "i'm taking the bus.",
        "I take the bus.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — chitima chinosvika',
      prompt: 'Chitima chinosvika riini?',
      correct: [
        'When does the train arrive?',
        'When does the train come?',
        'When is the train?',
        'when does the train arrive?',
        'What time does the train arrive?',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — uri kutsanangura nzira yako kuofisi',
      words: ['take', 'I', 'bus', 'the'],
      correct: ['I', 'take', 'the', 'bus'],
      translation: 'Ndinotora bhazi',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kuLondon, unoda kuenda Heathrow',
      sentence: "Let's take ____ tube to Heathrow.",
      options: ['the', 'a', 'an'],
      correct: 'the',
      context: "MuLondon, 'the tube' inoreva sytem yose — saka 'the' inoshanda.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — unotsanangurira shamwari yekuLondon kombi',
      prompt: 'Kombi yakaita sebhazi diki risingami panzvimbo yakatemwa.',
      correct: [
        "A kombi is like a small bus that doesn't stop at fixed stops.",
        "A kombi is like a small bus that doesn't have fixed stops.",
        "A kombi is a small minibus that picks up anywhere.",
        "Kombi is like a small bus without fixed stops.",
        "a kombi is like a small bus that doesn't stop at fixed stops.",
      ],
    },
  ],

  rwenDialogue: {
    intro: "Uri muLondon nemumwe weko — Sarah. Anobvunza kuti kombi yeZimbabwe yakaita sei. Mutsanangurire muChiNgezi.",
    lines: [
      { speaker: 'npc', target: "So what's a kombi exactly? Is it like a bus?", native: 'Saka kombi chii chaizvo? Yakaita sebhazi here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, but smaller. A kombi is like a small minibus — it doesn't have fixed stops, you just wave it down.", native: 'Hongu, asi diki. Kombi yakaita sebhazi diki — haina nzvimbo yakatemwa, unoshamisa kuiimisa.', correct: true,  feedback: 'Wakwanisa — wakatsanangura zvakanaka, kuratidza kusiyana kwacho.' },
          { target: "Kombi.",                                                                                                            native: 'Kombi.',                                                                              correct: false, feedback: 'Pfupi zvakanyanya — Sarah anoda kunzwisisa kombi inoshanda sei.' },
          { target: "Is bus.",                                                                                                             native: 'Ibhazi.',                                                                              correct: false, feedback: 'Tsanangura kusiyana — kombi haina nzvimbo yakatemwa, asi bhazi yeLondon ine.' },
        ],
      },
      { speaker: 'npc', target: "Oh, like an Uber Pool but with a flat fare? That's wild.", native: 'Aa, yakaita seUber Pool ine mubhadharo wakaiswa? Zvinoshamisa.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Kutsanangura tsika dzedu muChiNgezi — basa rakaomarara, asi waratidza muLondon.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'The bus (in English)',   correct: ['The bus', 'the bus', 'A bus', 'a bus'] },
      { prompt: 'The train (in English)', correct: ['The train', 'the train', 'A train', 'a train'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, taura nzira nhatu dzaunoshandisa kuenda kunhandare. Itira muChiNgezi: 'I take the bus to ___', 'I take a taxi to ___', 'I take the train to ___'. Pasina kutarisa kumashure.",
    rwenSignoff: "Aziva ane mashoko etransport mose, anokwanisa kufamba munyika dzose. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at a London pub with a UK friend. They've never been to Zimbabwe and ask how kombis work compared to London buses. Explain in English so they really get it — including how you flag one down, the pricing, and the vibe.",
    rwenRole: "Sarah, 32, your London friend. Curious, asks follow-up questions ('Is there a route number?', 'Is it safer than an Uber?'). Speaks fast, casual British English.",
    successCriteria: "User explains kombi in English using comparison to bus or minibus, mentions at least one feature (flexible stops, flat fare, conductor calling out destinations), and answers a follow-up question.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
