import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Cooking verbs — Mavhabhu ekubika',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinodzidza mavhabhu ekubika: cook (bika), chop (cheka), boil (vira). Aya mavhabhu unowashandisa kana uchitsanangurira kuti chikafu chinogadzirwa sei — chikuru kuti utaure nezvesadza kana nemoja.",
    culturalNote: "Kumusha, kubika sadza basa rinozivikanwa nemunhu wose — hauwanzo tsanangurirwa. MuUK/USA, vakawanda havazivi kuti sadza chinogadzirwa sei — saka kana ukatsanangura kushamwari yako, anouya nemibvunzo. Mavhabhu ekubika muChiNgezi akapfava — 'cook' inoita everything, asi pakatsanangurwa zvakajeka unotaura 'chop the onions, boil the water, then cook the maize meal slowly'.",
  },

  chunks: [
    {
      id: 'cook',
      target: 'Cook',
      native: 'Bika',
      literal: undefined,
      emoji: '👨‍🍳',
      phonetic: 'KOOK',
      audioRef: null,
    },
    {
      id: 'chop',
      target: 'Chop',
      native: 'Cheka',
      literal: undefined,
      emoji: '🔪',
      phonetic: 'CHOP',
      audioRef: null,
    },
    {
      id: 'boil',
      target: 'Boil',
      native: 'Vira',
      literal: 'Boil (water)',
      emoji: '♨️',
      phonetic: 'BOYL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Action verbs — present simple for instructions',
    explanation: "MuChiNgezi, kana uchitsanangura kuti chikafu chinogadzirwa sei, unoshandisa 'present simple' kana 'imperative': 'You chop the onions. Then you boil the water.' kana 'Chop the onions. Boil the water.' Iyi mitsetse miviri inonzwika seyemurudo — yakajeka, yakareruka, ine instructions chete.",
    examples: [
      { target: 'You boil the water first.',  native: 'Unotanga uchivirisa mvura.' },
      { target: 'Chop the onions finely.',    native: 'Cheka hanyanisi zvine ushoma.' },
      { target: 'Cook it for ten minutes.',   native: 'Bika kwemaminitsi gumi.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mavhabhu ekubika',
      pairs: [
        { left: 'Cook', right: 'Bika' },
        { left: 'Chop', right: 'Cheka' },
        { left: 'Boil', right: 'Vira' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — taurira shamwari kuti otanga sei',
      prompt: 'Tanga uchivirisa mvura.',
      correct: [
        'First, boil the water.',
        'First boil the water.',
        'Boil the water first.',
        'You boil the water first.',
        'first, boil the water.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuti cheka hanyanisi',
      prompt: 'Cheka hanyanisi.',
      correct: [
        'Chop the onions.',
        'Chop the onion.',
        'You chop the onions.',
        'Cut the onions.',
        'chop the onions.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kutsanangura kuti unobika sadza sei',
      sentence: "First you ____ the water until it's bubbling.",
      options: ['boil', 'chop', 'cook'],
      correct: 'boil',
      context: "Mvura inoviriswa — boil. Chop = cheka. Cook = bika.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara wekubika sadza',
      words: ['boil', 'water', 'the', 'First'],
      correct: ['First', 'boil', 'the', 'water'],
      translation: 'Tanga uchivirisa mvura',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Uri kutsanangura kushamwari yeUK kuti sadza inogadzirwa sei. Inotanga papi?",
      options: [
        { text: "First, you boil water in a big pot.", correct: true },
        { text: "Boil water big pot first.",            correct: false },
        { text: "Pot water boil.",                      correct: false },
      ],
      explanation: "MuChiNgezi yakajeka, mutsetse wakakwana: 'First, you boil water in a big pot' — unotanga ne 'first', uine 'you' (anodzidza), uine zvinhu zvinoshandiswa.",
    },
  ],

  rwenDialogue: {
    intro: "Shamwari yako yeLondon yabvunza kuti sadza inobikwa sei. Tsanangura zvitatu zvekutanga: vira mvura, cheka chinhu, bika.",
    lines: [
      { speaker: 'npc', target: "I keep hearing about sadza — how do you actually cook it?", native: 'Ndinongoramba ndichinzwa nezvesadza — chinobikwa sei chaizvo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "First you boil water, then you slowly add the maize meal and cook it.", native: 'Unotanga uchivirisa mvura, wokurumidza kuwedzera mealie meal uchibika.', correct: true,  feedback: 'Wakwanisa — wakatsanangura zvakajeka, mutsetse umwe nemumwe.' },
          { target: "Boil. Cook.",                                                              native: 'Vira. Bika.',                                                          correct: false, feedback: "Pfupi zvakanyanya — wedzera 'first', 'then' kuti zvinzwike sechirongwa." },
          { target: "Sadza is sadza.",                                                          native: 'Sadza isadza.',                                                       correct: false, feedback: "Hapana tsananguro — wabvunzwa kuti chinobikwa sei. Tsanangura nguva yegadziri." },
        ],
      },
      { speaker: 'npc', target: "Oh, like polenta then. Cool.", native: 'O, sezvinoita polenta. Iro rinonaka.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakatakura sadza muChiNgezi — kushamwari yako, ndizvo zvaunoda kuita.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Boil the water (in English)', correct: ['Boil the water', 'Boil the water.', 'You boil the water', 'boil the water'] },
      { prompt: 'Chop the onions (in English)', correct: ['Chop the onions', 'Chop the onions.', 'You chop the onions', 'Cut the onions', 'chop the onions'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, sarudza chikafu chimwe chete chaunogona kubika. Tsanangura pamuromo muChiNgezi mitsetse mishanu: 'First I boil ___. Then I chop ___. Then I cook ___ for ___ minutes.' Pasina kutarisa pa-recipe.",
    rwenSignoff: "Tichaonana mangwana — tinotaura nezvetii nekofi.",
  },

  phase8: {
    scenario: "You're at your English-speaking friend's flat in Manchester. They've asked you to teach them how to cook sadza. Walk them through it step by step.",
    rwenRole: "Tom, 27, your British friend, never cooked African food. Will ask 'how much water?', 'what kind of pot?', 'how do I know it's done?'.",
    successCriteria: "User uses 'first', 'then', and at least 2 of: boil, chop, cook. Gives a real step-by-step explanation. Handles a follow-up question.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
