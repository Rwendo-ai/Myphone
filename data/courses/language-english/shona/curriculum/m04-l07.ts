import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-some-any',
  module: 4,
  lesson: 7,
  title: 'Some & Any — countables',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Some' uye 'Any' — anorema kushandisa, asi mumiriro yakanaka. 'Some' munaka muchirevo chinotaurwa zvakanaka. 'Any' munaka muchirevo chekuramba kana chemibvunzo.",
    culturalNote: "ChiShona inoshandisa 'mamwe', 'chero', kana hapana shoko zvachose — chinongoenderana nemamiriro echirevo. MuChiNgezi pane mutemo unotevedzwa: 'some' nezviratidzo zvitsva (positive statements + offers), 'any' nemibvunzo nekuramba. Mutemo mutsva — asi unotevedzeka.",
  },

  chunks: [
    {
      id: 'some_water',
      target: 'Some water',
      native: 'Mvura (mamwe)',
      literal: 'positive statement / offer',
      emoji: '💧',
      phonetic: 'sum-WAW-ter',
      audioRef: null,
    },
    {
      id: 'any_questions',
      target: 'Any questions?',
      native: 'Mibvunzo here? (chero ipi)',
      literal: 'used in question',
      emoji: '❓',
      phonetic: 'EN-ee KWES-chuns',
      audioRef: null,
    },
    {
      id: 'some_friends',
      target: 'Some friends',
      native: 'Shamwari (dzimwe)',
      literal: 'positive plural',
      emoji: '👥',
      phonetic: 'sum-FRENDS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Some vs Any",
    explanation: "(1) Some — muchirevo chinotaurwa zvakanaka: 'I have some bread'. (2) Some — mumibvunzo yekupa kana kukumbira: 'Would you like some tea?'. (3) Any — mumibvunzo yekuvavarisa: 'Do you have any sugar?'. (4) Any — pakuramba: 'I don't have any money'.",
    examples: [
      { target: 'I have some bread.',         native: 'Ndine chingwa.' },
      { target: 'Do you have any sugar?',     native: 'Mune shuga here?' },
      { target: "I don't have any money.",    native: 'Handina mari.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Sarudza 'some' kana 'any'",
      sentence: 'Would you like _____ tea?',
      options: ['some', 'any', 'a'],
      correct: 'some',
      context: 'Mubvunzo wekupa — shandisa "some" pakukumbira nekupa.',
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza 'some' kana 'any'",
      sentence: "I don't have _____ money.",
      options: ['any', 'some', 'no'],
      correct: 'any',
      context: 'Pakuramba — "any" inoshanda.',
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza 'some' kana 'any'",
      sentence: 'Do you have _____ questions?',
      options: ['any', 'some', 'a'],
      correct: 'any',
      context: 'Mubvunzo wekubvunza — "any" inoshanda.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mvura ndapota (mamwe)',
      correct: ['Some water, please', 'Some water please', 'some water, please', 'some water please'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndepipi yakanaka?',
      question: 'There are _____ students in the classroom.',
      options: [
        { text: 'some', correct: true },
        { text: 'any', correct: false },
        { text: 'a', correct: false },
      ],
      explanation: 'Chirevo chakanaka (positive) chinoda "some". Hatisi kuramba kana kubvunza.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "Do you have any sugar?"',
      words: ['sugar?', 'have', 'any', 'Do', 'you'],
      correct: ['Do', 'you', 'have', 'any', 'sugar?'],
      translation: 'Mune shuga here?',
    },
  ],

  rwenDialogue: {
    intro: "Wapasvika kuhotera yeumwe wako. Vari kukugamuchira nemubatsiri.",
    lines: [
      {
        speaker: 'npc',
        target: "Welcome! Would you like some water?",
        native: 'Mauya! Mungade mvura here?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. And do you have any tea?", native: 'Hongu, ndapota. Une tii here?', correct: true, feedback: "Zvakanaka — 'some water' (offer), 'any tea' (question). Wakwanisa." },
          { target: "Yes, please. And do you have some tea?", native: '...', correct: false, feedback: "Pakubvunza, shandisa 'any' — 'do you have any tea?' Asi mubvunzo wekukumbira/wokupa, 'some' inoshanda." },
          { target: "No, I don't want some water.", native: 'Aiwa, handidi mvura.', correct: false, feedback: "Pakuramba, shandisa 'any' — 'I don't want any water'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa. Some — positive/offer. Any — question/negative. Yamira pakati.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'Some water (in English)', correct: ['Some water', 'some water'] },
      { prompt: 'Any questions? (in English)', correct: ['Any questions?', 'any questions?', 'Any questions', 'any questions'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Bvunza umwe ne 'Do you have any...?' uye pa kushaiwa pidza nemumwe ne 'Would you like some...?'. Tinhu zviviri zvichakwana.",
    rwenSignoff: "Some — chinhu chiri ipo. Any — chinhu chausina kuvimbiswa. Mutemo mutsva, anodyirwa.",
  },

  phase8: {
    scenario: "Pa kupinda kumba kweshamwari — uri kupiwa zvinhu zvekudya nekunwa, uye uri kubvunza zvimwe.",
    rwenRole: "Shamwari yepamoyo, anokumbira nekupa zvinhu zvinopa mukana wekushandisa some/any zvakawanda.",
    successCriteria: "Mudzidzi anoshandisa 'some' uye 'any' zvakanaka — 'some' pakupa/positive (semuenzaniso 'I have some...'), 'any' pakubvunza/negative ('do you have any...?', 'I don't have any...').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
