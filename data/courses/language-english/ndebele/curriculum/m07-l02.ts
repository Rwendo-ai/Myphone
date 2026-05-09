import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-customs-immigration',
  module: 7,
  lesson: 2,
  title: 'Customs & immigration — Imibuzo yokungena ezweni',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "Ungafiki kuphela — kumele uphendule imibuzo emithathu yomsebenzi wo-immigration: 'Where are you from?', 'Do you have a visa?', 'What is the purpose of your visit?'. Yimibuzo emifutshane ehlolayo. Phendula ngoqotho langamafuphi.",
    culturalNote:
      "EHeathrow, JFK, kumbe Sydney, kuhle ukuthi ungasangani lapho ophendula. Umsebenzi we-immigration akakuhloseli okubi — kuyimbeko yokwehluleka kwakhe ukuhamba kwabantu. Ubuza imibuzo eyodwa, ngamafuphi. Ungasebenzisi izinkulumo ezinde — phendula ngegama loma amabili. 'Where are you from?' → 'Zimbabwe.' 'How long are you staying?' → 'Two weeks.' 'Purpose of visit?' → 'Tourism' loba 'visiting family' loba 'business'. Uma uthi 'maybe', 'I think', kuvuselela imibuzo eminengi. Yiba ngoqondileyo. Ungeke ujikiswe uma uphendula ngeqiniso ngokushesha.",
  },

  chunks: [
    {
      id: 'where_are_you_from',
      target: "I'm from Zimbabwe",
      native: 'NgivelaeZimbabwe',
      literal: 'I-from Zimbabwe',
      emoji: '🇿🇼',
      phonetic: 'aym-FROM-zim-BAH-bway',
      audioRef: null,
    },
    {
      id: 'tourist_visa',
      target: "I have a tourist visa",
      native: 'Ngile-tourist visa',
      literal: 'I-have a tourist visa',
      emoji: '🛂',
      phonetic: 'ay-hav-uh-TOO-rist-VEE-zuh',
      audioRef: null,
    },
    {
      id: 'visiting_family',
      target: "I'm visiting family",
      native: 'Ngize ngokuvakatshela umuli',
      literal: 'I-visiting family',
      emoji: '👨‍👩‍👧',
      phonetic: 'aym-VIH-zit-ing-FAM-ih-lee',
      audioRef: null,
    },
    {
      id: 'two_weeks',
      target: "Two weeks",
      native: 'Amaviki amabili',
      literal: 'Two weeks',
      emoji: '📅',
      phonetic: 'TOO-WEEKS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Short answers — be ngokuqondileyo',
    explanation:
      "I-immigration ifuna izimpendulo ezimfutshane. 'Purpose of visit?' → 'Tourism.' (akusiyikuthi 'I am going for tourism with my family because...'). Imithetho emithathu: (1) phendula ngegama elilodwa loba kabili, (2) ungasebenzisi 'I think' loba 'maybe', (3) uma engasakubuza, ungaphenduli. Ukuqondisa kuthwala impumelelo.",
    examples: [
      { target: 'Tourism.',                  native: 'Ezokuvakatshela.' },
      { target: 'Two weeks.',                  native: 'Amaviki amabili.' },
      { target: "I'm visiting family.",      native: 'Ngivakatshela umuli.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Imibuzo yo-immigration lezimpendulo zayo',
      pairs: [
        { left: 'Where are you from?',       right: "I'm from Zimbabwe." },
        { left: 'Purpose of visit?',          right: 'Tourism.' },
        { left: 'How long are you staying?', right: 'Two weeks.' },
        { left: 'Do you have a visa?',        right: 'Yes, a tourist visa.' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — umsebenzi we-immigration ekubuza',
      prompt: 'Ngivela eZimbabwe.',
      correct: [
        "I'm from Zimbabwe.",
        'I am from Zimbabwe.',
        "I'm from Zimbabwe",
        "i'm from zimbabwe.",
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa — uphendula u-'Purpose of visit?'",
      sentence: "I'm ____ family.",
      options: ['visiting', 'visit', 'to visit'],
      correct: 'visiting',
      context: "'I'm + verb-ing' kusho into oyenzayo manje. 'Visiting' kusho 'ukuvakatshela'.",
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha impendulo enhle ku-'How long are you staying?'",
      question: 'Uzohlala emaviki amabili. Ku-immigration officer, uthini?',
      options: [
        { text: 'Two weeks.',                                              correct: true },
        { text: "Maybe two weeks, I think, depending on weather…",         correct: false },
        { text: 'Long time.',                                              correct: false },
      ],
      explanation:
        "I-immigration ayifuni ukuxoxwa kwakho. Phendula ngamafuphi loba ungachazi izaba. 'Two weeks' kunele.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — uphendula ngevisa',
      words: ['have', 'tourist', 'I', 'a', 'visa'],
      correct: ['I', 'have', 'a', 'tourist', 'visa'],
      translation: 'Ngile-tourist visa',
    },
  ],

  rwenDialogue: {
    intro:
      "UseSydney Airport, immigration desk. Umsebenzi we-Border Force ubeka i-passport yakho phambi kwakhe.",
    lines: [
      {
        speaker: 'npc',
        target: 'Where are you from?',
        native: 'Uvelaphi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm from Zimbabwe.",       native: 'Ngivela eZimbabwe.', correct: true,  feedback: 'Mnandi — kafutshane, kuphelele.' },
          { target: 'Africa, Zimbabwe, Bulawayo, near my grandmother…', native: 'I-Africa, Zimbabwe, Bulawayo, eduze laguga wami…', correct: false, feedback: "Linda — uphendule okuningi. 'Zimbabwe' kuphela kunele." },
          { target: 'Yes.',                                              native: 'Yebo.',         correct: false, feedback: "'Yes' kayisiyimpendulo ku-'Where' — kufanele ucacise indawo." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Purpose of your visit?',
        native: 'Uzeleni?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm visiting family. Two weeks.",                native: 'Ngivakatshela umuli. Amaviki amabili.', correct: true,  feedback: 'Mnandi — uphendule kabili imibuzo ngegama elifutshane.' },
          { target: 'Holiday because life hard at home.',                native: "Iholidi ngoba impilo inzima ekhaya.",          correct: false, feedback: "Ungachazi izinto zenhlalakahle ku-immigration. 'Tourism' kuphela kanye." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Welcome to Australia. Have a good stay.',
        native: 'Wamukelekile e-Australia. Hlala kuhle.',
      },
      {
        speaker: 'rwen',
        rwenLine:
          'Mnandi! Ungayishaywa indlu ye-immigration uma ufutshanisa lokho othi.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "I'm from Zimbabwe. (ngesiNgisi)",
        correct: ["I'm from Zimbabwe.", 'I am from Zimbabwe.', "I'm from Zimbabwe", "i'm from zimbabwe."],
      },
      {
        prompt: "I'm visiting family. (ngesiNgisi)",
        correct: ["I'm visiting family.", 'I am visiting family.', "I'm visiting family", "i'm visiting family."],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Bhala phansi izimpendulo ezintathu zakho zikulindele: ukuvela kwakho ('I'm from ___'), umunyu wokuvakashela ('Tourism' / 'Visiting family' / 'Business'), ne-time ('___ weeks'). Phinda ngomlomo kathathu. Lokho yikho othenga ngakho ku-immigration.",
    rwenSignoff: 'Kusasa — i-Underground yaseLondon. Indlela yokujika eyodwa kuphela.',
  },

  phase8: {
    scenario:
      "You're at the Sydney International Airport immigration desk. You're a Zimbabwean citizen on a tourist visa, visiting your cousin in Melbourne for two weeks. The officer asks you the standard three questions in quick succession.",
    rwenRole:
      "Officer Hayes, 45, Australian Border Force. Polite but no nonsense. Will reject vague or rambling answers and ask again. Looking for short, factual replies.",
    successCriteria:
      "User answers each question in 1-3 words: 'Zimbabwe' / 'tourist visa' / 'visiting family' / 'two weeks'. No hedging, no over-explanation, no irrelevant context.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
