import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03',
  module: 5,
  lesson: 3,
  title: 'umfowethu, udadewethu — Brothers and Sisters',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English flattens it: 'my brother', 'my sister', no further questions. isiNdebele asks more. umfowethu (my brother). udadewethu (my sister). And inside those words is something English doesn't carry — the -ethu ending means 'of us', the family unit. Your brother is OUR brother.",
    culturalNote: "Older or younger matters. omdala = the older one, omncane = the younger one. A Ndebele speaker doesn't just say 'my brother' — they often specify umfowethu omdala (my older brother) because seniority in a sibling line carries respect, voice in family decisions, and ceremonial duties.",
  },

  chunks: [
    {
      id: 'umfowethu',
      target: 'umfowethu',
      native: 'My brother (literally "brother of us")',
      literal: 'umfo (brother) + -ethu (our/of us). The -ethu makes it familial.',
      emoji: '👨🏾‍🤝‍👨🏾',
      phonetic: 'oom-foh-WEH-too',
      audioRef: null,
    },
    {
      id: 'udadewethu',
      target: 'udadewethu',
      native: 'My sister (literally "sister of us")',
      literal: 'udade (sister) + -ethu (our). Same pattern as umfowethu.',
      emoji: '👩🏾‍🤝‍👩🏾',
      phonetic: 'oo-dah-deh-WEH-too',
      audioRef: null,
    },
    {
      id: 'omdala',
      target: 'omdala',
      native: 'The older one (older sibling)',
      literal: 'om- (relative concord, class 1) + -dala (old). Used: umfowethu omdala = my older brother.',
      emoji: '🧓🏾',
      phonetic: 'om-DAH-lah',
      audioRef: null,
    },
    {
      id: 'omncane',
      target: 'omncane',
      native: 'The younger one (younger sibling)',
      literal: 'om- (relative concord) + -ncane (small/young). udadewethu omncane = my younger sister.',
      emoji: '🧒🏾',
      phonetic: 'om-NCAH-neh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sibling order matters: omdala vs omncane',
    explanation: "Stick omdala (older) or omncane (younger) after the kinship term to specify birth order. umfowethu omdala = my older brother. udadewethu omncane = my younger sister. Ndebele family talk almost always specifies — older siblings carry seniority, and the language reflects that.",
    examples: [
      { target: 'umfowethu', native: 'My brother (any age)' },
      { target: 'umfowethu omdala', native: 'My older brother' },
      { target: 'udadewethu omncane', native: 'My younger sister' },
      { target: 'udadewethu omdala', native: 'My older sister' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its meaning',
      pairs: [
        { left: 'umfowethu', right: 'My brother' },
        { left: 'udadewethu', right: 'My sister' },
        { left: 'omdala', right: 'The older one' },
        { left: 'omncane', right: 'The younger one' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re introducing your older sister at a family gathering.',
      sentence: 'Lo ngudadewethu _____ .',
      options: ['omdala', 'omncane', 'wami'],
      correct: 'omdala',
      context: 'Older sister = udadewethu omdala. The seniority marker matters in Ndebele family talk.',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'My younger brother',
      correct: ['umfowethu omncane', 'Umfowethu omncane'],
    },
    {
      type: 'multiple_choice',
      instruction: "What does the -ethu ending in umfowethu mean?",
      question: "Why is it umfowethu and not just umfo?",
      options: [
        { text: '-ethu means "of us / our" — it makes the brother part of the family unit', correct: true },
        { text: '-ethu marks the noun as plural', correct: false },
        { text: '-ethu is just decoration with no meaning', correct: false },
      ],
      explanation: "-ethu is the 1st-person plural possessive: 'our'. umfowethu literally = 'our brother', even when spoken by one person. It binds the sibling into the collective family identity.",
    },
  ],

  rwenDialogue: {
    intro: "Two siblings stand in front of you at a family gathering — clearly close in age. Rwen quietly tells you who's older.",
    lines: [
      { speaker: 'rwen', rwenLine: "The taller one is older — umfowethu omdala. The other is umfowethu omncane. Greet each by birth order — Ndebele elders notice." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sawubona, mfowethu omdala. Sawubona, mfowethu omncane.', native: 'Hello, older brother. Hello, younger brother.', correct: true, feedback: "Both addressed by exact birth order. The older one nods slightly — you respected the order without being told to." },
          { target: 'Sawubona, brothers.', native: 'Hello, brothers (English).', correct: false, feedback: "English flattens what Ndebele keeps precise. Address them as omdala (older) and omncane (younger) — birth order is part of the greeting." },
          { target: 'Sawubona, bafana.', native: 'Hello, boys.', correct: false, feedback: "'Bafana' means boys / young men — too generic and slightly informal. Use the kinship term umfowethu, plus omdala / omncane." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Wenzile kuhle. umfowethu, udadewethu — and always notice who is omdala. That's how Ndebele families work.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My brother', correct: ['umfowethu', 'Umfowethu'] },
      { prompt: 'My sister', correct: ['udadewethu', 'Udadewethu'] },
      { prompt: 'My older brother', correct: ['umfowethu omdala', 'Umfowethu omdala'] },
      { prompt: 'My younger sister', correct: ['udadewethu omncane', 'Udadewethu omncane'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture your siblings (or close friends if you have none). Label each one — umfowethu omdala, udadewethu omncane — and try to remember who falls where in the line. If you're an only child, label your closest friends: Ndebele kinship language stretches easily to chosen family.",
    rwenSignoff: "Older, younger, brother, sister. Tomorrow we go up a generation — to the grandparents who hold the line.",
  },

  phase8: {
    scenario: "You're at a Bulawayo family gathering. Your friend Rwen has lined up his three siblings to introduce you — one older brother, one younger sister, one younger brother. Rwen tells you who's who; you greet each by name AND birth-order title.",
    rwenRole: "Rwen, host and middle child of his family — gently testing whether you can keep older/younger straight, but warmly.",
    successCriteria: "User uses umfowethu omdala for the older brother, udadewethu omncane for the younger sister, and umfowethu omncane for the younger brother — gets birth-order specifiers correct on at least 2 of 3.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
