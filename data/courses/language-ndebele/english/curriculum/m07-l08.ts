import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08',
  module: 7,
  lesson: 8,
  title: 'Hwange & Matobo — safari language',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Hwange — that 'hw' is a click softened into a w. The full Ndebele name pulls a true x-click out of you. iHwange is Zimbabwe's largest national park, and Matobo holds the granite hills where King Mzilikazi himself rests. Today: the words you need to walk among them.",
    culturalNote: "iMatobo (also spelled Matopos) means 'bald heads' in isiNdebele — for the rounded granite kopjes that fill the park. King Mzilikazi, founder of the Ndebele nation, is buried there. Visitors to Matobo are expected to be quiet near the burial sites and never to climb on the rocks marked with rock art.",
  },

  chunks: [
    {
      id: 'ihwange',
      target: 'iHwange',
      native: 'Hwange (National Park)',
      emoji: '🦁',
      phonetic: 'ee-hwahn-geh',
      audioRef: null,
    },
    {
      id: 'imatobo',
      target: 'iMatobo',
      native: 'Matobo Hills',
      literal: 'the bald heads',
      emoji: '🪨',
      phonetic: 'ee-mah-toh-boh',
      audioRef: null,
    },
    {
      id: 'indlovu',
      target: 'indlovu',
      native: 'elephant',
      emoji: '🐘',
      phonetic: 'een-dloh-voo',
      audioRef: null,
    },
    {
      id: 'ibhubesi',
      target: 'ibhubesi',
      native: 'lion',
      emoji: '🦁',
      phonetic: 'ee-boo-beh-see',
      audioRef: null,
    },
    {
      id: 'umfula',
      target: 'umfula',
      native: 'river',
      emoji: '🏞️',
      phonetic: 'oom-foo-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Singular and plural for animals',
    explanation: "Many isiNdebele animal nouns shift their prefix to form the plural. Indlovu (elephant) → izindlovu (elephants). Ibhubesi (lion) → amabhubesi (lions). Umfula (river) → imifula (rivers). Watch the prefix change — the noun stem stays the same, but the front of the word tells you 'one' or 'many.'",
    examples: [
      { target: 'indlovu → izindlovu', native: 'elephant → elephants' },
      { target: 'ibhubesi → amabhubesi', native: 'lion → lions' },
      { target: 'umfula → imifula', native: 'river → rivers' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each safari word to its meaning',
      pairs: [
        { left: 'iHwange', right: 'Hwange National Park' },
        { left: 'iMatobo', right: 'Matobo Hills' },
        { left: 'indlovu', right: 'elephant' },
        { left: 'ibhubesi', right: 'lion' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the plural',
      sentence: 'indlovu → ___ (elephants)',
      options: ['izindlovu', 'amandlovu', 'imindlovu'],
      correct: 'izindlovu',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'I am going to Hwange.',
      correct: ['Ngiya eHwange', 'Ngiya eHwange.', 'ngiya eHwange', 'ngiya eHwange.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Why is Matobo a sacred place in Ndebele history?",
      options: [
        { text: "King Mzilikazi, founder of the Ndebele nation, is buried in the granite hills.", correct: true },
        { text: "It's where the first kombi rank was built.", correct: false },
        { text: "It's the geographic centre of Zimbabwe.", correct: false },
      ],
      explanation: "Mzilikazi led the Ndebele people north from Zululand in the 1830s and founded the kingdom that became Matabeleland. His burial site at Matobo is one of the most spiritually significant places in the country.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a Bulawayo tour office, deciding between a Hwange safari and a Matobo day trip.",
    lines: [
      { speaker: 'npc',  target: 'Ufuna ukubona izindlovu kumbe ukuhambela amaqaba akwaMzilikazi?', native: 'Do you want to see elephants or visit the rocks of Mzilikazi?' },
      { speaker: 'rwen', rwenLine: "Two options: Hwange for elephants, Matobo for the rocks and history. Choose." },
      { speaker: 'user', userChoices: [
        { target: 'Ngifuna ukubona izindlovu — ngiya eHwange.', native: "I want to see elephants — I'm going to Hwange.", correct: true, feedback: "Plural izindlovu, place name with e-. Strong sentence." },
        { target: 'Ngiya eMatobo, ngifuna ukubona aMzilikazi.', native: "I'm going to Matobo, I want to see Mzilikazi.", correct: true, feedback: "History over wildlife — and grammatically tight." },
        { target: 'Ngiya eBulawayo.', native: "I'm going to Bulawayo.", correct: false, feedback: "But you're already in Bulawayo. Pick one of the two parks." },
      ]},
      { speaker: 'npc',  target: 'Kuhle. Imota izakulanda kusasa ngehora lesithathu ekuseni.', native: "Good. The car will collect you tomorrow at three in the morning." },
      { speaker: 'rwen', rwenLine: "Game drives leave before dawn — that's when the animals move. Sleep early." },
    ],
  },

  activeRecall: {
    instruction: 'Recall the safari words.',
    prompts: [
      { prompt: 'How do you say "elephant" (singular)?', correct: ['indlovu'] },
      { prompt: 'How do you say "lion" (singular)?', correct: ['ibhubesi'] },
      { prompt: 'What does iMatobo mean literally?', correct: ['bald heads', 'the bald heads', 'bald-heads'] },
    ],
  },

  mission: {
    title: 'Walk through your safari out loud',
    task: "Imagine the morning of a Hwange game drive. Narrate it in isiNdebele as far as you can: 'Ngiya eHwange. Ngifuna ukubona izindlovu lamabhubesi.' Add one more line of your own. Just three sentences — but do it before bed tonight.",
    rwenSignoff: "Animals move at dawn. Words stick at dusk.",
  },

  phase8: {
    scenario: "On a guided morning game drive in Hwange, your Ndebele guide spots elephants at a waterhole. Ask questions, name what you see, and respond when she asks if you want to stay longer.",
    rwenRole: "Hwange safari guide, 40s, lifelong tracker, switches between English and isiNdebele to teach guests",
    successCriteria: "User named at least two animals or features, used a place prefix, and answered one open-ended question.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
