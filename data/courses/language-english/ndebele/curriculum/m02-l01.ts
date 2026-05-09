import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-numbers-1-10',
  module: 2,
  lesson: 1,
  title: 'Numbers 1-10 — Kunye kuya kokulitshumi',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Salibonani! Module 2 iqalisa ngamanani — into oyisebenzisa nsuku zonke. Siqalisa ngo One kuya ku Ten ngesiNgisi.",
    culturalNote: "EsiNdebeleni, '3' ngu 'kuthathu', '13' ngu 'tshumi lantathu', futhi '30' ngu 'tshumi amathathu' — kucacile, akula 'th'. Kodwa ngesiNgisi 'three', 'thirteen', lo 'thirty' bonke baqala ngomsindo we 'th' — ulimi luphuma kancane phakathi kwamazinyo. AbaNdebele bavame ukutsho 'tree' (njengesihlahla) endaweni ka 'three'. Ulimi luphakathi kwamazinyo, lawe uphefumulele kanye nje — yikho lokho.",
  },

  chunks: [
    {
      id: 'one_to_five',
      target: 'One, two, three, four, five',
      native: 'Kunye, kubili, kuthathu, kune, kuhlanu',
      literal: '1, 2, 3, 4, 5',
      emoji: '🖐️',
      phonetic: 'wun, too, THREE, for, fyv',
      audioRef: null,
    },
    {
      id: 'six_to_ten',
      target: 'Six, seven, eight, nine, ten',
      native: 'Isithupha, isikhombisa, isificaminwembili, isificamunwemunye, kokulitshumi',
      literal: '6, 7, 8, 9, 10',
      emoji: '🔟',
      phonetic: 'siks, SEH-vn, ayt, nyn, ten',
      audioRef: null,
    },
    {
      id: 'three_focus',
      target: 'Three',
      native: 'Kuthathu',
      literal: '3',
      emoji: '👅',
      phonetic: 'THREE (ulimi phakathi kwamazinyo)',
      audioRef: null,
    },
    {
      id: 'how_many',
      target: 'How many?',
      native: 'Zingaki?',
      literal: 'How many?',
      emoji: '❓',
      phonetic: 'how-MEH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The 'th' sound — three, thirteen, thirty",
    explanation: "AmaNdebele kawumsindo we 'th' — yikho 'three' livama ukuphuma njenge 'tree'. Beka isihloko solimi phakathi kwamazinyo aphezulu lasezansi, uphefumulele kanye, bese usuthi 'ree'. Lokhu kuyasebenza kuwo wonke amagama athi 'three', 'thirteen', 'thirty', 'thirty-three'.",
    examples: [
      { target: 'Three',     native: 'Kuthathu' },
      { target: 'Thirteen',  native: 'Tshumi lantathu' },
      { target: 'Thirty',    native: 'Tshumi amathathu' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amanani esiNgisi lalokho akutshoyo ngesiNdebele',
      pairs: [
        { left: 'One',   right: 'Kunye' },
        { left: 'Three', right: 'Kuthathu' },
        { left: 'Seven', right: 'Isikhombisa' },
        { left: 'Ten',   right: 'Kokulitshumi' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Kuthathu',
      correct: ['Three', 'three', 'Three.', 'three.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho — qhubekisa ukubala',
      sentence: 'One, two, three, ____, five.',
      options: ['four', 'six', 'eight'],
      correct: 'four',
      context: 'Ngemva kuka three kulandela four (kune).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha owolayinwe wona ngeqiniso',
      question: "Bukhona ubuhlobo phakathi kwesimo somlomo lapho usitsho 'three' ngesiNgisi?",
      options: [
        { text: 'Ulimi luphakathi kwamazinyo aphezulu lasezansi.', correct: true },
        { text: 'Ulimi lutshaywe phansi enkalakatheni.',            correct: false },
        { text: 'Indebe ezansi iyaluma indebe phezulu.',             correct: false },
      ],
      explanation: "'Th' enziwa ngolimi phakathi kwamazinyo. Nxa ulimi lungasenzanga njalo, kuphuma 'tree' kumbe 'free' — hatshi 'three'.",
    },
  ],

  rwenDialogue: {
    intro: 'Use ku Spar e Bulawayo, ozulayini ozungezi yakho usebenzisa isiNgisi. Uthatha ama-orange. Ucelwa ukuthi atsho amangaki ofunayo.',
    lines: [
      { speaker: 'npc', target: 'How many oranges would you like?', native: 'Ufuna ama-orange amangaki?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Three, please.',  native: 'Kuthathu, ngiyacela.', correct: true,  feedback: "Kuhle! Ukhulume i 'th' yakho ngokuhlakanipha. Inombolo + please isebenza nguze." },
          { target: 'Tree, please.',   native: 'Sihlahla, ngiyacela.',  correct: false, feedback: "Lokhu kungumduli odlalwa ngabaNdebele kakhulu — 'tree' lithetha isihlahla. Beka ulimi phakathi kwamazinyo: 'three'." },
          { target: 'Many.',            native: 'Amanengi.',              correct: false, feedback: "Akucacanga — utshintshi ufuna inombolo eqondileyo. Tsho 'three' kumbe 'four'." },
        ],
      },
      { speaker: 'npc', target: 'Three oranges, coming up.', native: 'Ama-orange amathathu, ngiyabuya.' },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele! Le 'th' yenza umehluko phakathi kwesihlahla lenombolo. Nxa abantu bekungezwa, beka ulimi phakathi kwamazinyo bese uphinda.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'Three (ngesiNgisi)',     correct: ['Three', 'three', 'Three.', 'three.'] },
      { prompt: 'How many? (ngesiNgisi)', correct: ['How many?', 'How many', 'how many?', 'how many'] },
      { prompt: 'Ten (ngesiNgisi)',       correct: ['Ten', 'ten', 'Ten.', 'ten.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Bala izinto ezinhlanu ezingakuzungezayo ngesiNgisi: 'one chair, two cups, three books...' Phinda kathathu lamuhla, futhi qaphela ulimi lwakho lapho usitsho 'three'.",
    rwenSignoff: 'Amanani angumgogodla wakho konke — imali, isikhathi, abantu. Sizabonana kusasa.',
  },

  phase8: {
    scenario: "You're at a fruit stall in Bulawayo run by a Zimbabwean trader who's switched to English to practise. Buy three items, each in a different quantity. Use numbers 1-10 — and especially nail the 'th' in 'three'.",
    rwenRole: "Mama Sibanda, 48, a warm market trader who's been learning English from her son. She'll ask 'how many?' for each item and gently mimic back what you say — so 'tree' will get echoed.",
    successCriteria: "User says at least three different numbers between 1 and 10 to specify quantities, attempts the 'th' sound in 'three' (or thirteen if it comes up), and completes the buy with 'please' or 'thank you'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
