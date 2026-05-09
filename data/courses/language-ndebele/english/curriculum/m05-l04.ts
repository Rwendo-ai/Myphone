import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04',
  module: 5,
  lesson: 4,
  title: 'uGogo, uKhulu — Grandparents',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "uGogo. uKhulu. Two of the most-loved words in any Ndebele household. Grandmother and grandfather. They hold the names that came before yours — the clan names, the praise lines, the stories that don't make it into newspapers.",
    culturalNote: "In Ndebele tradition, grandparents are often the primary teachers of language and culture. The phrase 'ekhaya kogogo' (at grandmother's house) carries a specific meaning: the place where children learn isiNdebele properly, sit through long stories, and absorb the rhythm of the village. Cities erode language; uGogo's kitchen restores it.",
  },

  chunks: [
    {
      id: 'ugogo',
      target: 'uGogo',
      native: 'Grandmother',
      literal: 'u- (person prefix) + Gogo. Used for both maternal and paternal grandmothers in modern speech.',
      emoji: '👵🏾',
      phonetic: 'oo-GOH-goh',
      audioRef: null,
    },
    {
      id: 'ukhulu',
      target: 'uKhulu',
      native: 'Grandfather',
      literal: 'u- (person prefix) + Khulu (great/elder). The grand-elder of the family.',
      emoji: '👴🏾',
      phonetic: 'oo-KOO-loo',
      audioRef: null,
    },
    {
      id: 'omkhulu',
      target: 'omkhulu',
      native: 'Big / great / senior (adjective)',
      literal: '-khulu means great or large. uKhulu is literally "the great one" — the elder.',
      emoji: '🌳',
      phonetic: 'om-KOO-loo',
      audioRef: null,
    },
    {
      id: 'abadala',
      target: 'abadala',
      native: 'Elders (plural)',
      literal: 'aba- (plural prefix, people) + -dala (old). Collective term for the elders of the family or community.',
      emoji: '👴🏾👵🏾',
      phonetic: 'ah-bah-DAH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Khulu and Gogo as titles of respect',
    explanation: "uKhulu and uGogo aren't only used for biological grandparents — they're respect titles for any older person in the community. A young man greeting an unrelated elderly woman in a Bulawayo taxi will say 'Sawubona, Gogo'. The terms extend kinship to age itself. Honouring the abadala (elders) is woven into the daily greeting.",
    examples: [
      { target: 'uGogo wami', native: 'My grandmother' },
      { target: 'uKhulu wami', native: 'My grandfather' },
      { target: 'Sawubona, Gogo', native: 'Hello, Grandmother (to any older woman)' },
      { target: 'abadala', native: 'The elders (collective)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its meaning',
      pairs: [
        { left: 'uGogo', right: 'Grandmother' },
        { left: 'uKhulu', right: 'Grandfather' },
        { left: 'abadala', right: 'Elders (plural)' },
        { left: 'omkhulu', right: 'Great / elder (adjective)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'An elderly woman boards your kombi in Bulawayo. Greet her with respect.',
      sentence: 'Sawubona, _____ .',
      options: ['Gogo', 'umntwana', 'Mama'],
      correct: 'Gogo',
      context: 'Any older woman, related or not, can be respectfully addressed as Gogo. It extends kinship to age.',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'My grandfather',
      correct: ['uKhulu wami', 'Ukhulu wami', 'ukhulu wami'],
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the correct meaning",
      question: "Why is the grandfather called uKhulu?",
      options: [
        { text: 'Because -khulu means "great" — he is the great elder of the family', correct: true },
        { text: 'Because uKhulu is a borrowed English word', correct: false },
        { text: 'Because all grandparents are called the same thing', correct: false },
      ],
      explanation: "uKhulu = 'the great one'. The root -khulu means great, large, senior. The grandfather is literally named for his seniority and stature in the family.",
    },
  ],

  rwenDialogue: {
    intro: "Inside a kitchen in a rural homestead, an elderly woman is stirring porridge over a fire. Rwen leads you in.",
    lines: [
      { speaker: 'rwen', rwenLine: "This is uGogo — my father's mother. She has not heard her grandson's foreign friend speak isiNdebele yet. Don't waste this moment." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sawubona, Gogo. Linjani?', native: 'Hello, Grandmother. How are you (plural respectful)?', correct: true, feedback: "Sawubona + kinship title + the plural-respectful 'linjani'. Three things right at once. uGogo's smile reaches her eyes." },
          { target: 'Hello, Granny.', native: 'Hello, Granny (English).', correct: false, feedback: "English here is cold. Use Sawubona + Gogo, and ideally the plural-respectful 'Linjani' (How are you, plural-respectful)." },
          { target: 'Sawubona, Gogo. Unjani?', native: 'Hello, Grandmother. How are you (singular)?', correct: false, feedback: "Almost — but elders take the plural-respectful form. Use 'Linjani?' for an elder, not 'Unjani?'" },
        ],
      },
      { speaker: 'npc', target: 'Hawu! Lomzukulu uyakwazi ukukhuluma. Wozani, dlanini.', native: "Oh my! This grandchild knows how to speak. Come, eat." },
      { speaker: 'rwen', rwenLine: "She just called you umzukulu — grandchild. The kitchen door is open to you now.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Grandmother', correct: ['uGogo', 'ugogo', 'Gogo'] },
      { prompt: 'Grandfather', correct: ['uKhulu', 'ukhulu', 'Khulu'] },
      { prompt: 'Elders (plural)', correct: ['abadala', 'Abadala'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you can call a grandparent (yours or anyone's) today, do — even briefly. If they aren't reachable, sit quietly and bring an elder you've loved to mind. Say 'uGogo wami' or 'uKhulu wami' aloud. The word and the memory anchor each other.",
    rwenSignoff: "uGogo holds the language. uKhulu holds the lineage. Tomorrow, the wider circle — the aunts and uncles who raised you alongside them.",
  },

  phase8: {
    scenario: "You're sitting in uGogo's kitchen on a winter evening. She's serving you sour milk and crumbled isitshwala. She wants to know about YOUR grandparents — are they alive, where do they live, what are they like. You speak to her using respectful elder forms throughout.",
    rwenRole: "uGogo Magdalene — Rwen's paternal grandmother, late 70s, soft-spoken, asks the kind of slow questions an elder asks. She corrects you gently if you slip into informal speech.",
    successCriteria: "User addresses uGogo with respectful plural forms (Linjani, not Unjani), refers to their own grandparents as uGogo wami / uKhulu wami, and stays in isiNdebele for the conversation. Bonus if they pick up on her cues about elderhood.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
