import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-where-is',
  module: 2,
  lesson: 7,
  title: 'Where is...? — ...iri kupi?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Kuti utsvage chinhu kana nzvimbo, bvunza ne 'Where is...?'. Mubvunzo uyu unokupa nzira yekutsvaga toilet, nzvimbo yekubudira, kana keki yawakatenga.",
    culturalNote: "MuChiShona tinobvunza 'Toilet iri kupi?' — chinhu chinotanga, locative ('kupi') inoperera. MuChiNgezi mutsara unotanga ne 'Where' uchitevera ne 'is' nezita rechinhu: 'Where is the toilet?'. Cherechedza kuti chinhu chinoda 'the' pamberi.",
  },

  chunks: [
    {
      id: 'where_is_the_bathroom',
      target: 'Where is the bathroom?',
      native: 'Toilet iri kupi?',
      literal: 'Where is the bathroom?',
      emoji: '🚻',
      phonetic: 'WHAIR-iz-thuh-BATH-room',
      audioRef: null,
    },
    {
      id: 'where_is_the_exit',
      target: 'Where is the exit?',
      native: 'Pekubudira ndepapi?',
      literal: 'Where is the exit?',
      emoji: '🚪',
      phonetic: 'WHAIR-iz-thee-EK-sit',
      audioRef: null,
    },
    {
      id: 'over_there',
      target: 'Over there',
      native: 'Apo',
      literal: 'Over there',
      emoji: '👉',
      phonetic: 'OH-ver-THAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Locative 'where'",
    explanation: "Mubvunzo wenzvimbo unotanga ne 'Where is + the + chinhu?'. 'The' inonyatsoperera kuratidza kuti chinhu ichocho munhu wese anoziva kuti chiripi (e.g. 'the bathroom' — toilet iri muchivakwa ichi). Mhinduro inogona kunge ipfupi: 'Over there' kana 'Down the hall'.",
    examples: [
      { target: 'Where is the bathroom?', native: 'Toilet iri kupi?' },
      { target: 'Where is the exit?',      native: 'Pekubudira ndepapi?' },
      { target: 'Where is room 101?',      native: 'Imba 101 iri kupi?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Where is the bathroom?', right: 'Toilet iri kupi?' },
        { left: 'Where is the exit?',      right: 'Pekubudira ndepapi?' },
        { left: 'Over there',               right: 'Apo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri pamusangano, unoda toilet',
      prompt: 'Toilet iri kupi?',
      correct: [
        'Where is the bathroom?',
        'Where is the toilet?',
        'where is the bathroom?',
        'Where is the bathroom',
        'Where is the restroom?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa mubvunzo wenzvimbo',
      sentence: '____ is the exit?',
      options: ['Where', 'What', 'How'],
      correct: 'Where',
      context: "Mibvunzo yenzvimbo inotanga ne 'Where'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kubvunza pekubudira',
      words: ['the', 'is', 'Where', 'exit'],
      correct: ['Where', 'is', 'the', 'exit'],
      translation: 'Pekubudira ndepapi?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuratidzwa nzvimbo',
      prompt: 'Apo',
      correct: ['Over there', 'Over there.', 'over there', "It's over there", "It's over there."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Coffee shop iri kupi?',
      correct: ['Where is the coffee shop?', 'Where is the coffee shop', 'where is the coffee shop?', 'Where is the cafe?'],
    },
  ],

  rwenDialogue: {
    intro: "Wave pamusangano weChiNgezi muHarare. Unoda toilet. Bvunza usher.",
    lines: [
      { speaker: 'npc', target: "Hi, can I help you?", native: 'Hesi, ndingakubatsira here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excuse me, where is the bathroom?', native: 'Pamusoroi, toilet iri kupi?',     correct: true,  feedback: 'Wakwanisa — wakatanga ne "Excuse me" uye wakabvunza zvakajeka.' },
          { target: 'Toilet?',                              native: 'Toilet?',                          correct: false, feedback: 'Pfupi zvakanyanya — taura mubvunzo wakakwana.' },
          { target: 'I am lost.',                          native: 'Ndarasika.',                       correct: false, feedback: 'Hauna kurasika — uri kungoda toilet. Bvunza zvakananga.' },
        ],
      },
      { speaker: 'npc', target: "Sure — over there, on the right.", native: 'Hongu — apo, kurudyi.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Where is the bathroom?' inokuponesa pose paunenge wakanyaradzwa nemvura yetii.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Where is the bathroom? (in English)', correct: ['Where is the bathroom?', 'Where is the bathroom', 'where is the bathroom?', 'Where is the toilet?', 'Where is the restroom?'] },
      { prompt: 'Over there (in English)',              correct: ['Over there', 'Over there.', 'over there', "It's over there"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Bvunza nzvimbo nhasi — 'Where is the ...?' — kunyange muhope. Edza kuti mutsara uchinzwika seusina kushushikana.",
    rwenSignoff: "Munhu anobvunza haarasiki. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at an English-language tech conference at the Hilton Sandton in Johannesburg. You urgently need to find the bathroom and you're not sure where the registration desk moved to. Find a steward and ask.",
    rwenRole: "Thandi, 29, conference steward. Smiling, helpful, knows the venue inside out. Speaks clear South African English.",
    successCriteria: "User opens with 'Excuse me', asks 'Where is the bathroom?' or 'Where is the registration desk?', understands directional response ('Over there', 'down the hall', 'on the right'), thanks her.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
