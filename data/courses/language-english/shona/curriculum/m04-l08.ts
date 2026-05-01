import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-much-many',
  module: 4,
  lesson: 8,
  title: 'Much vs Many',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Much' nezvinhu zvisingaverengeki — mvura, mari, nguva. 'Many' nezvinhu zvinoverengeka — vana, mabhuku, mahour. Mutemo mutsvuku.",
    culturalNote: "ChiShona inoshandisa 'zvakawanda' kana 'kuwanda' kunyangwe chinhu chichiverengeka here kana kwete. MuChiNgezi, mashoko mawiri akasiyana — much (uncountable) ne many (countable). Funga nezvazvo seyi: kana ungaverenga zvichienda 1, 2, 3 — many. Kana usingakwanise — much.",
  },

  chunks: [
    {
      id: 'much_water',
      target: 'Much water',
      native: 'Mvura yakawanda',
      literal: 'uncountable',
      emoji: '🌊',
      phonetic: 'much-WAW-ter',
      audioRef: null,
    },
    {
      id: 'many_friends',
      target: 'Many friends',
      native: 'Shamwari dzakawanda',
      literal: 'countable plural',
      emoji: '👥',
      phonetic: 'MEN-ee FRENDS',
      audioRef: null,
    },
    {
      id: 'how_much_how_many',
      target: 'How much? / How many?',
      native: 'Zvakawanda sei?',
      literal: 'much (uncount) vs many (count)',
      emoji: '🤔',
      phonetic: 'how-much / how-MEN-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Much (uncountable) vs Many (countable)",
    explanation: "Much: zvinhu zvisingaverengeki — water, money, time, music, love. Many: zvinhu zvinoverengeka muplural — books, friends, hours, cars. Mibvunzo: 'How much money?' / 'How many books?'.",
    examples: [
      { target: 'How much time do you have?',  native: 'Une nguva yakadini?' },
      { target: 'How many minutes are left?',  native: 'Pasara maminitsi mangani?' },
      { target: 'I have many friends.',        native: 'Ndine shamwari dzakawanda.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Sarudza 'much' kana 'many'",
      sentence: 'How _____ money do you have?',
      options: ['much', 'many', 'lot'],
      correct: 'much',
      context: 'Money = uncountable. "Much".',
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza 'much' kana 'many'",
      sentence: 'How _____ books are on the shelf?',
      options: ['many', 'much', 'lot'],
      correct: 'many',
      context: 'Books = countable plural. "Many".',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Une nguva yakadini?',
      correct: ['How much time do you have?', 'How much time do you have', 'how much time do you have?'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Shamwari dzakawanda',
      correct: ['Many friends', 'many friends'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndepipi yakanaka?',
      question: 'I don\'t have _____ work today.',
      options: [
        { text: 'much', correct: true },
        { text: 'many', correct: false },
        { text: 'lots', correct: false },
      ],
      explanation: 'Work = uncountable. "Much work" — kwete "many works".',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "How many minutes do you need?"',
      words: ['need?', 'do', 'minutes', 'How', 'you', 'many'],
      correct: ['How', 'many', 'minutes', 'do', 'you', 'need?'],
      translation: 'Unoda maminitsi mangani?',
    },
  ],

  rwenDialogue: {
    intro: "Uri pakupedzisira basa rezuva — uri kutaura nemumwe nezvenguva yawakaita uye mari yawakawana.",
    lines: [
      {
        speaker: 'npc',
        target: "How was your day?",
        native: 'Zvanga zvakaita sei zuva renyu?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Long! I had many meetings and not much time to rest.", native: 'Refu! Ndakaita misangano yakawanda, ndokushaya nguva yekuzorora.', correct: true, feedback: "Wakwanisa — meetings (countable) → many; time (uncountable) → much. Yakanaka." },
          { target: "Long! I had much meetings and not many time to rest.", native: '...', correct: false, feedback: "Wapindurwa — meetings inoverengeka (many), time hairangirwi (much)." },
          { target: "Long! I had a lot meetings.", native: 'Refu! Ndakaita misangano yakawanda.', correct: false, feedback: "'A lot of meetings' inoshanda — asi pano taikungwarira many/much. Edza zvakare." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvinhu zvinoverengeka — many. Zvisingaverengeki — much. Cherechedza nguva, mari, mvura — much. Vanhu, mabhuku, awa — many.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'How much time? (in English)', correct: ['How much time?', 'How much time', 'how much time?', 'how much time'] },
      { prompt: 'Many friends (in English)', correct: ['Many friends', 'many friends'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Mibvunzo mishanu nhasi — sarudza 'how much' kana 'how many': '_____ money?' '_____ books?' '_____ water?' '_____ children?' '_____ time?'. Verenga uone musiyano.",
    rwenSignoff: "Verenga zvinokwanisa kuverengwa — many. Hazvikwanisi — much. Zviri nyore.",
  },

  phase8: {
    scenario: "Uri kutaura nezvenguva, mari, uye basa rezuva — kushandisa much/many zvakawanda.",
    rwenRole: "Shamwari pabasa, ane hanya ne zvauri kuita, anokubvunza nezvenguva yauri kuda kushandisa pa-projects mhuru.",
    successCriteria: "Mudzidzi anoshandisa 'much' uye 'many' zvakanaka pakubvunza/kupindura — 'how much time?', 'how many minutes?', 'much work', 'many people'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
