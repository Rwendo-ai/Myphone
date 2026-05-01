import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: 'Where is...? — ...iri kupi?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Wati wasvika muLondon, kana muNew York, kana paaeropoti — chinhu chekutanga chekudikanwa kubvunza ndi 'Where is...?'. Mubvunzo uyu unokupa kibhokisi rekugadzirisa kurasika.",
    culturalNote: "MuZimbabwe, kana wakarasika muHarare, unobvunza mumwe munhu zvakanaka — vanofamba newe. MuLondon kana NYC, vanhu vanofamba nekukurumidza, asi havasi vasiri vanhu — bvunza nehutsika: tanga ne 'Excuse me', uchitevera ne 'Where is the ___?'. Cherechedza: paunenge usingazive, vagari vacho vanozvifarira kubatsirwa kuratidza kuti vanoziva guta ravo.",
  },

  chunks: [
    {
      id: 'where_is_the_bank',
      target: 'Where is the bank?',
      native: 'Bhangi riri kupi?',
      literal: 'Where is the bank?',
      emoji: '🏦',
      phonetic: 'WHAIR-iz-thuh-BANK',
      audioRef: null,
    },
    {
      id: 'excuse_me_toilets',
      target: 'Excuse me, the toilets?',
      native: 'Tichikumbira, dzimba dzemadzimai?',
      literal: 'Excuse-me, the toilets?',
      emoji: '🙏',
      phonetic: 'ek-SKYOOZ-mee-thuh-TOY-lets',
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
    name: 'Locations — asking for a place',
    explanation: "Kuti ubvunze nzvimbo, tanga ne 'Excuse me' (kuratidza tsika), wozotevera ne 'Where is the ___?'. 'The' inonyatso ratidza kuti chinhu icho chiripo, chinozivikanwa pano — bhangi rega rakatarisirwa, toilet imwechete munyika, nezvimwe. Mhinduro inenge ipfupi: 'Over there' (apo) kana 'Down the road' (pasi penzira).",
    examples: [
      { target: 'Where is the bank?',           native: 'Bhangi riri kupi?' },
      { target: 'Excuse me, the toilets?',      native: 'Tichikumbira, dzimba dzemadzimai?' },
      { target: 'Where is the tube station?',   native: 'Chiteshi chetube chiri kupi?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Where is the bank?',      right: 'Bhangi riri kupi?' },
        { left: 'Excuse me, the toilets?', right: 'Tichikumbira, dzimba dzemadzimai?' },
        { left: 'Over there',              right: 'Apo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri muLondon, unoda kutsvaga bhangi',
      prompt: 'Bhangi riri kupi?',
      correct: [
        'Where is the bank?',
        'Where is the bank',
        'where is the bank?',
        'Excuse me, where is the bank?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa mubvunzo — uri kubvunza vagari',
      sentence: 'Excuse me, ____ is the tube station?',
      options: ['Where', 'When', 'Why'],
      correct: 'Where',
      context: "Mubvunzo wenzvimbo unotanga ne 'Where'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mashoko — uri kubvunza pekuwana hotera',
      words: ['the', 'is', 'Where', 'hotel'],
      correct: ['Where', 'is', 'the', 'hotel'],
      translation: 'Hotera iri kupi?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — vagari vakuratidza nzvimbo',
      prompt: 'Apo',
      correct: ['Over there', 'Over there.', 'over there', "It's over there", "It's over there."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wakarasika, kumbira mubvunzo nehutsika',
      prompt: 'Tichikumbira, dzimba dzemadzimai?',
      correct: [
        'Excuse me, the toilets?',
        'Excuse me, where are the toilets?',
        'Excuse me, where is the toilet?',
        'Excuse me, the bathroom?',
        'excuse me, the toilets?',
      ],
    },
  ],

  rwenDialogue: {
    intro: "Wakaburuka pa-Underground muOxford Circus, London. Wakarasika — chiteshi chinotevera ndichi nguva yakareba. Bvunza mumwe wevagari.",
    lines: [
      { speaker: 'npc', target: "You alright? You look a bit lost.", native: 'Wakanaka here? Unoita kunge wakarasika.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excuse me, where is the nearest tube station?', native: 'Tichikumbira, chiteshi chetube chiri pedyo chiri kupi?', correct: true,  feedback: 'Wakwanisa — wakatanga ne "Excuse me", wakabvunza zvine hutsika.' },
          { target: 'Tube?',                                          native: 'Tube?',                                          correct: false, feedback: 'Pfupi zvakanyanya — bvunza mubvunzo wakakwana.' },
          { target: 'I am lost help.',                                  native: 'Ndarasika ndibatsire.',                          correct: false, feedback: "Hauna kuti mumwe akubatsire sei. Bvunza zvakananga: 'Where is the ___?'." },
        ],
      },
      { speaker: 'npc', target: "Oh, just down there on the right — Bond Street, two minutes.", native: 'Aa, pasi apo kurudyi — Bond Street, maminitsi maviri.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Where is the ___?' inotanga journey yose. Pasina mubvunzo, hauwane mhinduro.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Where is the bank? (in English)', correct: ['Where is the bank?', 'Where is the bank', 'where is the bank?', 'Excuse me, where is the bank?'] },
      { prompt: 'Over there (in English)',          correct: ['Over there', 'Over there.', 'over there', "It's over there"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti wakarasika muguta resu rechokwadi. Bvunza mumwe pamuromo — 'Excuse me, where is the ___?' — chero kunyange kuri kufambisa muroyi mumusha mako. Edza katatu.",
    rwenSignoff: "Munhu anobvunza haarasiki. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're a Shona-speaking traveller who just exited Oxford Circus tube station in central London. You need to find the nearest Pret A Manger to grab a sandwich, but you're disoriented and don't have data. Stop a passer-by and ask.",
    rwenRole: "James, 38, a London local on his lunch break. Friendly but a bit rushed. Speaks clear British English with a slight Estuary accent. Will give a quick directional answer.",
    successCriteria: "User opens with 'Excuse me', asks 'Where is the ___?' about a tube station, Pret, or coffee shop, follows up by understanding 'down there', 'on the right', or 'two minutes', and thanks him.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
