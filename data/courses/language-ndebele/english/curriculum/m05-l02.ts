import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02',
  module: 5,
  lesson: 2,
  title: 'indodana, indodakazi — Children',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Three words for 'child' — and the difference matters. umntwana is the gender-neutral child. indodana is specifically a son. indodakazi is specifically a daughter. The -kazi suffix marks the feminine; you'll see it again and again across isiNdebele.",
    culturalNote: "In Ndebele households, calling someone umntwana is warm — it acknowledges they are still loved as a child, even when grown. A 60-year-old uncle may still call his nephew 'umntwana wami' (my child). The word carries belonging, not age.",
  },

  chunks: [
    {
      id: 'umntwana',
      target: 'umntwana',
      native: 'Child (gender-neutral)',
      literal: 'Class 1 noun: um- (person prefix) + ntwana. The all-purpose word for any child.',
      emoji: '🧒🏾',
      phonetic: 'oom-NTWAH-nah',
      audioRef: null,
    },
    {
      id: 'indodana',
      target: 'indodana',
      native: 'Son',
      literal: 'in- (class 9 prefix) + dodana. Specifically a male child / boy.',
      emoji: '👦🏾',
      phonetic: 'in-doh-DAH-nah',
      audioRef: null,
    },
    {
      id: 'indodakazi',
      target: 'indodakazi',
      native: 'Daughter',
      literal: 'indodana + -kazi (feminine suffix). The -kazi sticker turns it female.',
      emoji: '👧🏾',
      phonetic: 'in-doh-dah-KAH-zee',
      audioRef: null,
    },
    {
      id: 'abantwana',
      target: 'abantwana',
      native: 'Children (plural)',
      literal: 'aba- (class 2 plural prefix) + ntwana. Plural of umntwana.',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ah-bahn-TWAH-nah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The -kazi feminine suffix',
    explanation: "Stick -kazi onto a noun and you mark it as feminine. indodana → indodakazi (son → daughter). inkosi → inkosikazi (chief → woman/wife of the chief). It's a tiny grammatical sticker that does enormous work across Nguni languages.",
    examples: [
      { target: 'indodana', native: 'Son (male child)' },
      { target: 'indodakazi', native: 'Daughter (female child)' },
      { target: 'inkosi', native: 'Chief / king' },
      { target: 'inkosikazi', native: 'Wife of the chief / Mrs.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its meaning',
      pairs: [
        { left: 'umntwana', right: 'Child (any gender)' },
        { left: 'indodana', right: 'Son' },
        { left: 'indodakazi', right: 'Daughter' },
        { left: 'abantwana', right: 'Children (plural)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You meet a friend with her young daughter. She introduces her: "This is my _____."',
      sentence: 'Lo yi_____ yami.',
      options: ['ndodakazi', 'ndodana', 'ntwana'],
      correct: 'ndodakazi',
      context: "Specifically a daughter = indodakazi. The -kazi suffix marks female.",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Children (plural — more than one)',
      correct: ['abantwana', 'Abantwana'],
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the correct word",
      question: "What does the suffix -kazi do in indodakazi?",
      options: [
        { text: 'Marks the noun as feminine — turns "son" into "daughter".', correct: true },
        { text: 'Marks the noun as plural.', correct: false },
        { text: 'Adds a respect / honour meaning.', correct: false },
      ],
      explanation: "-kazi is the feminine suffix in Nguni languages. indodana (son) + -kazi = indodakazi (daughter). You'll see -kazi attached to many other words.",
    },
  ],

  rwenDialogue: {
    intro: "At a family braai in Bulawayo, an aunt is pointing out the children running around the yard.",
    lines: [
      { speaker: 'npc', target: 'Lo yindodana yami. Lo yindodakazi yami.', native: 'This is my son. This is my daughter.' },
      { speaker: 'rwen', rwenLine: "Two children. One son, one daughter. Compliment them both — start with 'bahle' (they are beautiful)." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bahle abantwana bakho!', native: 'Your children are beautiful!', correct: true, feedback: "Plural — abantwana — because you're complimenting both at once. The aunt beams." },
          { target: 'Yikuhle indodana.', native: 'The son is beautiful.', correct: false, feedback: "Half right — but the aunt is showing you BOTH children. Use the plural: 'Bahle abantwana bakho.'" },
          { target: 'Hello kids.', native: 'Hello kids (English).', correct: false, feedback: "English here loses the warmth. Try: 'Bahle abantwana bakho!' (Your children are beautiful!)" },
        ],
      },
      { speaker: 'rwen', rwenLine: "umntwana, abantwana — singular and plural. You'll use both ten times a day.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Child (gender-neutral)', correct: ['umntwana', 'Umntwana'] },
      { prompt: 'Son', correct: ['indodana', 'Indodana'] },
      { prompt: 'Daughter', correct: ['indodakazi', 'Indodakazi'] },
      { prompt: 'Children (plural)', correct: ['abantwana', 'Abantwana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have children, name each one in isiNdebele today: 'indodana yami nguChad', 'indodakazi yami nguEmma'. If you don't, picture the children of someone close to you and label them. The vocabulary settles in when you attach it to real faces.",
    rwenSignoff: "Sons, daughters, children — the next generation. Tomorrow, the brothers and sisters who walk beside you.",
  },

  phase8: {
    scenario: "An auntie at a Bulawayo family lunch is showing you photos on her phone — her son, her daughter, her two grandchildren. She wants you to identify each one in isiNdebele as she swipes through.",
    rwenRole: "Rwen plays Auntie Sibongile, a mid-50s aunt — playful, slightly testing, will smile big when you get the kinship vocab right.",
    successCriteria: "User correctly distinguishes indodana (son) from indodakazi (daughter) when shown each photo, and uses abantwana for the plural 'children' when she asks how many she has.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
