import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: 'Hundreds, Thousands, Millions',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhamba huru: 'one thousand, ten thousand, one million'. Idzi dzinoshandiswa pamutengo wemota, mari, kana nyaya dzehupfumi.",
    culturalNote: "MuChiShona, 'chiuru' = thousand, 'miriyoni' = million (loanword). MuChiNgezi: 'thousand', 'million', 'billion'. Sirizvo: muChiShona unoti 'zviuru zviviri' (two thousand) — chiuru chinotenderwa class. MuChiNgezi 'thousand' haisi plural pa-formula yakajairika: 'two thousand dollars', kwete 'two thousands dollars'. Iyi tsika inotaurirwawo muFrench ne'mille' — yakajairika muma languages.",
  },

  chunks: [
    {
      id: 'one_thousand',
      target: 'One thousand',
      native: 'Chiuru',
      literal: 'One thousand',
      emoji: '🔢',
      phonetic: 'wun-THOW-zand',
      audioRef: null,
    },
    {
      id: 'ten_thousand',
      target: 'Ten thousand',
      native: 'Zviuru gumi',
      literal: 'Ten thousand',
      emoji: '💵',
      phonetic: 'ten-THOW-zand',
      audioRef: null,
    },
    {
      id: 'one_million',
      target: 'One million',
      native: 'Miriyoni',
      literal: 'One million',
      emoji: '💰',
      phonetic: 'wun-MIL-yon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Large numbers — no plural',
    explanation: "Paunoshandisa hundred/thousand/million nenhamba — havatori 's' yeplural: 'two hundred', 'five thousand', 'ten million'. Asi paunotaura zvisina nhamba — unoshandisa 's': 'hundreds of people', 'thousands of dollars', 'millions of stars'. Yakareruka: nhamba inopa = no s; vague (huge, anybody) = s.",
    examples: [
      { target: 'Two thousand dollars',         native: 'Madhora zviuru zviviri' },
      { target: 'Five hundred people',          native: 'Vanhu mazana mashanu' },
      { target: 'Thousands of dollars',         native: 'Madhora zviuru nezviuru' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana nhamba huru',
      pairs: [
        { left: 'One thousand',  right: '1,000' },
        { left: 'Ten thousand',  right: '10,000' },
        { left: 'One million',   right: '1,000,000' },
        { left: 'One billion',   right: '1,000,000,000' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Madhora zviuru zviviri (2,000)',
      correct: ['Two thousand dollars', 'two thousand dollars'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza fomu rakanaka — nhamba kana s?',
      sentence: 'I bought it for five ____ dollars.',
      options: ['hundreds', 'hundred', 'hundred of'],
      correct: 'hundred',
      context: 'Pamashure pe-five (chinhu chinopima) — no "s": "five hundred dollars". "Hundreds" inoshanda chete pasina nhamba.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo — uri kutaura mutengo wemba',
      words: ['is', 'house', 'fifty', 'thousand', 'The', 'dollars.'],
      correct: ['The', 'house', 'is', 'fifty', 'thousand', 'dollars.'],
      translation: 'Imba inomira madhora zviuru makumi mashanu.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura mari yakawanda zvikuru',
      prompt: 'Madhora miriyoni miviri',
      correct: ['Two million dollars', 'two million dollars'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza fomu rakanaka',
      question: 'Which is correct?',
      options: [
        { text: 'Three hundred dollars',   correct: true },
        { text: 'Three hundreds dollars',  correct: false },
        { text: 'Three of hundred dollars', correct: false },
      ],
      explanation: 'Pamashure penhamba (three) — hundred haina "s". "Hundreds" inoshanda chete pasina nhamba: "hundreds of dollars".',
    },
  ],

  rwenDialogue: {
    intro: 'Uri kuona shamwari yauya kubva kuMutare. Vanokuudza mutengo wechinhu cheme imba yavakatenga.',
    lines: [
      { speaker: 'npc', target: "How much was the new house?", native: 'Imba itsva yainomira marii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "About sixty thousand dollars.",     native: 'Ingangoita madhora zviuru makumi matanhatu.', correct: true,  feedback: 'Wakwanisa — "thousand" pasina "s", "about" inoratidza ungaranga kuti hauzivi chaizvo.' },
          { target: "Sixty thousands dollars.",          native: '60,000',                                       correct: false, feedback: 'Cherechedza: "thousand" pamashure penhamba haina "s". Yakanyorwa kazhinji — yedza zvakare.' },
          { target: "Many money.",                        native: 'Mari yakawanda.',                            correct: false, feedback: 'Hazvina kujeka — uye "many money" haisi correct (mari = uncountable, "much money"). Edza kupa nhamba.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Nhamba dzemari dzine pattern yakareruka — kana wabata 'thousand' pasina 's', wapfuura zvakawanda.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Five thousand dollars (in English)', correct: ['Five thousand dollars', 'five thousand dollars'] },
      { prompt: 'One million (in English)', correct: ['One million', 'one million', 'A million', 'a million'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: 'Funga chinhu chiri kutengeswa muHarare ($50,000+). Taurira shamwari muChiNgezi: "It costs about ___ thousand dollars." Edza kakati katatu mukati memusi.',
    rwenSignoff: "Mari huru inotanga ne 'thousand' — uye iwe wabata. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're discussing salaries with a new English-speaking work colleague at a Harare office. Talk about salary ranges in your industry — using thousand and million figures. Be vague where polite (use 'about').",
    rwenRole: "David, 40, a senior accountant who is curious about your industry. Polite, will share approximate salary ranges himself, won't push for precise numbers.",
    successCriteria: "User uses 'thousand' or 'million' correctly (no 's' after a number), uses 'about' or 'around' for approximation, and either asks David's salary range or shares their own. Doesn't say 'thousands of dollars' when meaning a specific amount.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
