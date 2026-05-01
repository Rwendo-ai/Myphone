import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-do-make',
  module: 8,
  lesson: 2,
  title: 'Gumawa & Magluto — Do, Make, Cook',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Tagalog verbs come with prefixes — and there are two big ones: **um-** and **mag-**. Today, gumawa (to do/make) wears um-, and magluto (to cook) wears mag-. Don't memorise rules. Just feel the rhythm.",
    culturalNote: "Most Tagalog verbs use either an um- prefix tucked inside the root (kain → kumain) or a mag- prefix slapped on front (luto → magluto). Both mean the doer is the focus. The choice is mostly idiomatic — learners pick it up by exposure, not by rule.",
  },

  chunks: [
    {
      id: 'gumawa_ng',
      target: 'Gumawa ng proyekto',
      native: 'Make / do a project',
      literal: 'Make of-project',
      emoji: '🛠️',
      phonetic: 'gu-ma-WA nang pro-YEK-to',
      audioRef: null,
    },
    {
      id: 'magluto_ng',
      target: 'Magluto ng adobo',
      native: 'Cook adobo',
      literal: 'Cook of-adobo',
      emoji: '🍲',
      phonetic: 'mag-LU-to nang a-DO-bo',
      audioRef: null,
    },
    {
      id: 'huwag_mag_alala',
      target: "Huwag kang mag-alala",
      native: "Don't worry",
      literal: 'Not you-linker mag-worry',
      emoji: '🤗',
      phonetic: 'hu-WAG kang mag-a-LA-la',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'um- vs mag- (gentle intro)',
    explanation: "Both prefixes mark the doer of the action. **Um-** sneaks inside the root: gawa → g-um-awa = gumawa. **Mag-** sticks on front: luto → magluto. Don't try to predict which — learn each verb as a whole. Your ear will figure out the pattern.",
    examples: [
      { target: 'Kumain ako', native: 'I ate / I eat (um- inside kain)' },
      { target: 'Maglakad tayo', native: "Let's walk (mag- on front of lakad)" },
      { target: 'Gumawa ako ng plano', native: 'I made a plan' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Gumawa ng proyekto', right: 'Make a project' },
        { left: 'Magluto ng adobo', right: 'Cook adobo' },
        { left: "Huwag kang mag-alala", right: "Don't worry" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell your friend not to worry about the bill.',
      sentence: 'Huwag kang _____.',
      options: ['mag-alala', 'gumawa', 'magluto'],
      correct: 'mag-alala',
      context: 'Mag-alala = to worry. The mag- prefix sticks on alala (worry).',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Cook adobo',
      correct: ['Magluto ng adobo', 'magluto ng adobo'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "I made a plan"',
      words: ['ng', 'ako', 'plano', 'Gumawa'],
      correct: ['Gumawa', 'ako', 'ng', 'plano'],
      translation: 'I made a plan',
    },
    {
      type: 'multiple_choice',
      instruction: 'Your friend is freaking out about an exam.',
      question: 'Reassure them in Tagalog.',
      options: [
        { text: "Huwag kang mag-alala", correct: true },
        { text: 'Magluto ng adobo', correct: false },
        { text: 'Gumawa ng proyekto', correct: false },
      ],
      explanation: "Huwag kang mag-alala = Don't worry — the everyday Filipino reassurance.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Make a project',
      correct: ['Gumawa ng proyekto', 'gumawa ng proyekto'],
    },
  ],

  rwenDialogue: {
    intro: "Your kuya texts you, stressed about a deadline. Cheer him up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hindi ko alam kung kaya ko ito.',
        native: "I don't know if I can handle this.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Huwag kang mag-alala, kaya mo yan", native: "Don't worry, you can do it", correct: true, feedback: 'Warm. Tagalog cheering at its best.' },
          { target: 'Magluto ng adobo', native: 'Cook adobo', correct: false, feedback: 'Maybe later. Not the moment.' },
          { target: 'Gumawa', native: 'Make', correct: false, feedback: 'Too vague — what is he making?' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Salamat, talaga.',
        native: 'Thanks, really.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Two prefixes, one feeling: care. Um- and mag- are everywhere — keep noticing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Cook adobo (in Tagalog)', correct: ['Magluto ng adobo', 'magluto ng adobo'] },
      { prompt: "Don't worry (in Tagalog)", correct: ["Huwag kang mag-alala", "huwag kang mag-alala"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one thing you're doing today — cooking, working, building something — and say it out loud in Tagalog. Magluto ako, gumawa ako ng... Anything counts.",
    rwenSignoff: 'Kaya mo yan — you got this.',
  },

  phase8: {
    scenario: "It's Sunday afternoon and your kuya is panicking about a Monday work deliverable while you're also cooking dinner. He messages asking for advice. You'll comfort him with Huwag kang mag-alala, and describe your own Sunday — magluto, gumawa — to make him feel less alone.",
    rwenRole: "Kuya Joel — your older brother, late 20s, hardworking and a chronic over-thinker; relaxes the moment someone says huwag kang mag-alala in Tagalog.",
    successCriteria: "User reassures with Huwag kang mag-alala and describes one task using gumawa or magluto in a complete sentence (e.g. Magluto ako ng adobo). Both prefixes (um- and mag-) appear at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
