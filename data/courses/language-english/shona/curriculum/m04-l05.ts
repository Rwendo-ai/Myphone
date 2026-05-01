import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-plurals-irregular',
  module: 4,
  lesson: 5,
  title: 'Irregular plurals — children, men',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Mashoko mamwe haatevedzeri mutemo we '-s'. Anoshandura zvachose: child → children. Man → men. Foot → feet. Anofanira kungonangwa.",
    culturalNote: "ChiShona zvakare ine mashoko anokupinduka zvakasiyana — saka unotoziva pfungwa iyi yekuti grammar inogonawo kuita zvinhu zvinoshamisa. MuChiNgezi, idzi 'irregular plurals' dzinongoda kungo memorise. Hapana mhinduro yakajeka — vana vanofanira kuziva kuti 'child' inoita 'children', kwete 'childs'.",
  },

  chunks: [
    {
      id: 'children',
      target: 'Child → Children',
      native: 'Mwana → Vana',
      literal: 'irregular — fully changes',
      emoji: '👶',
      phonetic: 'chyld → CHIL-dren',
      audioRef: null,
    },
    {
      id: 'men',
      target: 'Man → Men',
      native: 'Murume → Varume',
      literal: 'irregular — vowel change',
      emoji: '👨',
      phonetic: 'man → men',
      audioRef: null,
    },
    {
      id: 'people',
      target: 'Person → People',
      native: 'Munhu → Vanhu',
      literal: 'irregular — completely different word',
      emoji: '👥',
      phonetic: 'PUR-son → PEE-pul',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Irregular plurals — anoda kungo memorise",
    explanation: "Mashoko awa anopindushwa zvakasiyana — kwete -s. Maumbirwa mazhinji: vowel change (man→men, foot→feet, tooth→teeth), -en ending (child→children, ox→oxen), kana shoko zvachose rakasiyana (person→people, mouse→mice).",
    examples: [
      { target: 'Man → Men',     native: 'Murume → Varume' },
      { target: 'Woman → Women', native: 'Mukadzi → Vakadzi' },
      { target: 'Foot → Feet',   native: 'Gumbo → Makumbo' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Ita plural — irregular',
      sentence: 'I have two _____ (child).',
      options: ['children', 'childs', 'childen'],
      correct: 'children',
      context: 'Child → Children. Hapana -s.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Vanhu vatatu',
      correct: ['Three people', 'three people'],
    },
    {
      type: 'fill_blank',
      instruction: 'Ita plural — chenjera',
      sentence: 'My _____ (foot) hurt after walking all day.',
      options: ['feet', 'foots', 'feets'],
      correct: 'feet',
      context: 'Foot → Feet (vowel change).',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Varume vaviri',
      correct: ['Two men', 'two men'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndepipi yakanaka?',
      question: 'How many _____ are in your family?',
      options: [
        { text: 'women', correct: true },
        { text: 'womans', correct: false },
        { text: 'womens', correct: false },
      ],
      explanation: 'Woman → Women (vowel change: o→e). Hapana -s.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "I have three children"',
      words: ['children.', 'three', 'I', 'have'],
      correct: ['I', 'have', 'three', 'children.'],
      translation: 'Ndine vana vatatu',
    },
  ],

  rwenDialogue: {
    intro: "Uri kupareya — wakangosangana neumwe, vari kukubvunza nezvemhuri yako muHarare.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your family.",
        native: 'Ndiudze nezvemhuri yako.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children. I also have three women in my family — my mother, my sister, and my aunt.", native: 'Ndine vana vaviri. Ndinewo vakadzi vatatu mumhuri yangu — amai vangu, hanzvadzi yangu, natete.', correct: true, feedback: "Wakwanisa — 'children', 'women' — irregular plurals dzakanyatsoshanda." },
          { target: "I have two childs. I also have three womans.", native: 'Ndine vana vaviri. Ndinewo vakadzi vatatu.', correct: false, feedback: "Childs uye womans hazvishande — anofanira kuva 'children' uye 'women'. Idzi inhamo dze irregular plurals." },
          { target: "I have two child. I also have three woman.", native: 'Ndine mwana mumwe. Ndinewo mukadzi mumwe.', correct: false, feedback: "Hapana plural — 'two child' haisi tichobho. Inofanira kuva 'two children', 'three women'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka. Irregular plurals dzinokungwarira — children, men, women, feet — anodirwa muma memorise.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Ita plural.',
    prompts: [
      { prompt: 'Plural of "child"', correct: ['Children', 'children'] },
      { prompt: 'Plural of "person"', correct: ['People', 'people'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Memorise irregular plurals shanu nhasi: child→children, man→men, woman→women, person→people, foot→feet. Taura zvirevo zvitatu uchishandisa idzi.",
    rwenSignoff: "Memorise idzi shanu uye una 80% ye irregular plurals dzauchazoshandisa zvachose.",
  },

  phase8: {
    scenario: "Uri kutsanangura mhuri yako kushamwari yatsva — vari kukubvunza nezvevana, vakadzi, varume vemumhuri yako.",
    rwenRole: "Shamwari yatsva, ane hanya nemamiriro emhuri, anokupa mukana wekutaura nemashoko makuru: children, men, women, people.",
    successCriteria: "Mudzidzi anoshandisa irregular plurals dzitatu kana zvinopfuura zvakanaka mumufambo wehurukuro ('children', 'women', 'men', 'people').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
