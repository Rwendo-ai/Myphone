import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-numbers-age',
  module: 2,
  lesson: 9,
  title: "Numbers in age — I'm 32 years old",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Lamuhla sifunda ukutsho ubudala bakho ngesiNgisi: 'I'm thirty-two', 'I'm thirty-two years old'. Lokhu kuphenduka njalo lapho uxoxa ku-interview, kwa-clinic, futhi lapho ubuza umuntu omtsha.",
    culturalNote: "EsiNdebeleni siyatsho 'ngiloku ngiminyaka engamatshumi amathathu lambili' (kumbe 'ngiminyaka engu-32'). Ngesi-Britain isiNgisi siyathi 'I'm thirty-two' (kumbe 'I'm thirty-two years old'). Kawube ngenelelo lapho ubuza ubudala bomuntu owedlulayo — abesilungu bayithatha imibuzo yenye yobudala (ngokukhethekileyo umama abesifazane) njengezomondlu. Lapho uthi 'I'm thirty-two', sebenzisa ukuhlanganiswa: 'thirty-two' lihlanganyiswa nge hyphen (-) nxa ubhalwa, kodwa lapho likhulunywa zonke izimpawu zigcizelelwa. Khumbula: 'years old', kungasi 'years' kuphela. Akula '-s' phezu kwe 'old'.",
  },

  chunks: [
    {
      id: 'im_thirty_two',
      target: "I'm thirty-two",
      native: 'Ngiminyaka engamatshumi amathathu lambili',
      literal: 'I-am thirty-two',
      emoji: '🎂',
      phonetic: 'aym-THIR-tee-too',
      audioRef: null,
    },
    {
      id: 'years_old',
      target: "I'm thirty-two years old",
      native: 'Ngiminyaka engamatshumi amathathu lambili',
      literal: 'I-am thirty-two years old',
      emoji: '👤',
      phonetic: 'aym-THIR-tee-too-yeerz-OHLD',
      audioRef: null,
    },
    {
      id: 'how_old',
      target: 'How old are you?',
      native: 'Uminyaka mingaki?',
      literal: 'How old are you?',
      emoji: '❓',
      phonetic: 'how-OHLD-er-yoo',
      audioRef: null,
    },
    {
      id: 'shes_seven',
      target: "She's seven years old",
      native: 'Uminyaka eyisikhombisa',
      literal: 'She-is seven years old',
      emoji: '👧',
      phonetic: 'sheez-SEH-vn-yeerz-OHLD',
      audioRef: null,
    },
  ],

  pattern: {
    name: "I'm + [number] (years old)",
    explanation: "Indlela yobuhle yokutsho ubudala: 'I'm + [number]'. Ungeza kufakwa 'years old' phakathi — okuyobuye kanjani okumbi. Imisindo emikhulu: 'thirty-two' = THIR-tee-TOO (ngokugcizelelwa kuyo yonke imizuzu emibili). 'Years' = YEERZ (akusi 'YAYRS' loba 'YEAS'). 'Old' = OHLD (akusi 'old' njengamabhuluku amadala — yiya phezulu kunalokho).",
    examples: [
      { target: "I'm twenty-five.",            native: 'Ngiminyaka engamatshumi amabili lanhlanu.' },
      { target: "She's forty-six years old.",   native: 'Uminyaka engamatshumi amane lesithupha.' },
      { target: "How old is he?",                native: 'Uminyaka mingaki yena?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imisho yobudala lalokho ekutshoyo',
      pairs: [
        { left: "I'm twenty",            right: 'Ngiminyaka engamatshumi amabili' },
        { left: "She's seven",           right: 'Uminyaka eyisikhombisa' },
        { left: "He's fifty-five",        right: 'Uminyaka engamatshumi amahlanu lanhlanu' },
        { left: "How old are you?",       right: 'Uminyaka mingaki?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (ngiminyaka engamatshumi amathathu lambili)',
      prompt: 'Ngiminyaka engamatshumi amathathu lambili',
      correct: ["I'm thirty-two", "I'm thirty-two.", "I'm thirty-two years old", "I'm thirty-two years old.", "I am thirty-two", "I am thirty-two years old"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: "I'm thirty-two ____ old.",
      options: ['years', 'year', 'yearly'],
      correct: 'years',
      context: "Lapho ubudala bungaphezu '1', sisebenzisa 'years' (lokufaka 's'): 'thirty-two years old'. Nje 'one year old' (akula 's' ngoba ngu-1 nje qha).",
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha indlela efaneleyo yokutsho ubudala",
      question: "Imuphi we lemisho elungele ngokugcwele?",
      options: [
        { text: "I'm thirty-two years old.",     correct: true },
        { text: "I have thirty-two years.",       correct: false },
        { text: "My age is thirty-two years.",     correct: false },
      ],
      explanation: "Ngesi-Britain siyatsho 'I am' (akusi 'I have') ngobudala. 'I have thirty-two years' yindlela yebantu beSpain kumbe abase-Italy — kayisi siNgisi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ubuza ubudala bomngane',
      words: ['old', 'are', 'How', 'you?'],
      correct: ['How', 'old', 'are', 'you?'],
      translation: 'Uminyaka mingaki?',
    },
  ],

  rwenDialogue: {
    intro: 'Use ku-clinic ubhalisa kanye lengane yakho. Unesi udinga ubudala bobabili.',
    lines: [
      { speaker: 'npc', target: "How old are you?", native: 'Uminyaka mingaki?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm thirty-two.",                native: 'Ngiminyaka engamatshumi amathathu lambili.', correct: true,  feedback: "Kuhle! Kufutshane kanti kucacile. 'Years old' aluyihambeli njalo — 'thirty-two' nje qha kuyenelisa." },
          { target: "I have thirty-two years.",        native: 'Nginemisebenzi engamatshumi amathathu lambili.', correct: false, feedback: "Lokhu kuyindlela yeSpain kumbe yeJamani — kayisi siNgisi. Tsho 'I'm thirty-two', kungasi 'I have'." },
          { target: "Thirty-two year.",                  native: 'Inyaka eyodwa engamatshumi amathathu lambili.', correct: false, feedback: "'Year' kufanele kube 'years' (uphinda) lapho ubudala bungaphezu kuka-1. Tsho 'thirty-two years' kumbe nje 'thirty-two'." },
        ],
      },
      { speaker: 'npc', target: "And how old is your daughter?", native: 'Uminyaka mingaki indodakazi yakho?' },
      { speaker: 'user', target: "She's seven years old.", native: 'Uminyaka eyisikhombisa.' },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele! 'I'm', 'She's', 'He's' — bonke balandela inombolo. Manje uyazo izindlela.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'Tsho ubudala bakho ngesiNgisi (32)', correct: ["I'm thirty-two", "I'm thirty-two.", "I am thirty-two", "I'm thirty-two years old", "I am thirty-two years old"] },
      { prompt: 'How old are you? (ngesiNgisi)',       correct: ['How old are you?', 'how old are you?', 'How old are you', 'how old are you'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Tsho ubudala bakho ngesiNgisi imihla emithathu lamuhla — kabili kumlingane wakho, futhi kanye phambi kwesibuko. Phinda nge 'I am' kanye nge 'I'm'. Khumbula: 'I have thirty years' akusi siNgisi.",
    rwenSignoff: "Ubudala yibumi bomuntu — yibo abubona ngamehlo akho. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You're at a London clinic registering yourself and your child for new patient appointments. The receptionist asks for both ages. Use 'I'm', 'She's' or 'He's' correctly with the numbers.",
    rwenRole: "Nurse Patel, 40, a friendly but efficient NHS receptionist. She'll ask 'How old are you?', then 'And how old is your child?', and write down whatever you say.",
    successCriteria: "User answers with 'I'm [number]' (not 'I have [number] years'), gives the child's age with 'She's' or 'He's [number]', and uses 'years old' at least once.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
