import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-si-ni',
  module: 4,
  lesson: 2,
  title: 'Si & Ni — Markers for Names',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "When a Tagalog speaker says someone's name, they almost never just say it bare. They put a tiny word in front: 'si Maria', 'ni Maria', 'kay Maria'. Three different markers — three different meanings. Today we meet all three.",
    culturalNote: "Tagalog has a parallel marker set just for personal names: 'si' (focus, like 'ang'), 'ni' (possessive/non-focus, like 'ng'), and 'kay' (location/direction, like 'sa'). Skipping these markers in front of a name sounds like baby talk to native ears — adults always include them.",
  },

  chunks: [
    {
      id: 'si_maria',
      target: 'Si Maria',
      native: 'Maria (as the subject/focus)',
      literal: 'FOCUS-NAME Maria',
      emoji: '👩',
      phonetic: 'see ma-RI-a',
      audioRef: null,
    },
    {
      id: 'ni_maria',
      target: 'Ni Maria',
      native: "Maria's / by Maria",
      literal: 'POSSESS-NAME Maria',
      emoji: '🔑',
      phonetic: 'nee ma-RI-a',
      audioRef: null,
    },
    {
      id: 'kay_maria',
      target: 'Kay Maria',
      native: 'To Maria / at Maria',
      literal: 'TO-NAME Maria',
      emoji: '➡️',
      phonetic: 'kai ma-RI-a',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The si / ni / kay triplet',
    explanation: "These three are the proper-name version of ang/ng/sa. Use 'si' to introduce or focus on a person. Use 'ni' to say something belongs to them or was done by them. Use 'kay' for direction or location involving the person.",
    examples: [
      { target: 'Si Juan ay guro', native: 'Juan is a teacher (focus on Juan)' },
      { target: 'Bahay ni Juan', native: "Juan's house (possession)" },
      { target: 'Pumunta kay Juan', native: 'Go to Juan (direction)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each marker phrase to its job',
      pairs: [
        { left: 'Si Maria', right: 'Maria (subject)' },
        { left: 'Ni Maria', right: "Maria's (possession)" },
        { left: 'Kay Maria', right: 'To Maria (direction)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Introduce your friend Maria',
      sentence: '_____ Maria ang kaibigan ko.',
      options: ['Si', 'Ni', 'Kay'],
      correct: 'Si',
      context: "Maria is the subject — the one being focused on. Use 'si'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Maria's (possession marker + name)",
      correct: ['Ni Maria', 'ni Maria'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'The book of Maria' (Maria's book)",
      words: ['Maria', 'ni', 'libro', 'Ang'],
      correct: ['Ang', 'libro', 'ni', 'Maria'],
      translation: "Maria's book",
    },
    {
      type: 'multiple_choice',
      instruction: "Which marker says 'Give it TO Juan'?",
      question: "Ibigay mo _____ Juan.",
      options: [
        { text: 'kay', correct: true },
        { text: 'si', correct: false },
        { text: 'ni', correct: false },
      ],
      explanation: "'Kay' = direction toward a named person. 'Si' is for subject; 'ni' is for possession.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — focus on Maria as the subject',
      prompt: 'Maria (introducing her as the subject)',
      correct: ['Si Maria', 'si Maria'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a barangay gathering. You want to introduce your friend Maria to someone, then mention something about her.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sino siya?',
        native: 'Who is she?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Si Maria, kaibigan ko', native: "It's Maria, my friend", correct: true, feedback: "Perfect — 'si' to introduce her as the subject." },
          { target: 'Ni Maria, kaibigan ko', native: '(possessive Maria), my friend', correct: false, feedback: "'Ni' is for possession — 'Maria's something'. Use 'si' to introduce." },
          { target: 'Maria, kaibigan ko', native: 'Maria, my friend', correct: false, feedback: "Bare name sounds rough. Tagalog needs 'si' before names in subject position." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, kaibigan ni Maria ka?',
        native: "Ah, you're a friend OF Maria?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how the marker shifted? You said 'si Maria' — they replied 'ni Maria' because now Maria is the possessor. Same name, different marker, different job.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Maria as the subject (Tagalog)",
        correct: ['Si Maria', 'si Maria'],
      },
      {
        prompt: "Maria's / belonging to Maria (Tagalog)",
        correct: ['Ni Maria', 'ni Maria'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'si' three times today when mentioning friends — even in your head. 'Si Mark sent me a meme.' 'Si Lola called.' Train your tongue to never leave a Tagalog name bare.",
    rwenSignoff: "Magaling — see you tomorrow. We're getting comfortable with the marker family.",
  },

  phase8: {
    scenario: "You're introducing your friend Maria to your titas at a family lunch. The titas want to know who she is, whose phone is on the table, and where she went earlier. You'll need all three name markers.",
    rwenRole: "Tita Glo — your warm but nosy aunt; she'll ask you 'sino?' (who?), 'kaninong cellphone?' (whose phone?), and 'saan?' (where to?), giving you a chance to use si/ni/kay.",
    successCriteria: "User correctly uses 'si Maria' to introduce her, then 'ni Maria' to say something is hers, then 'kay Maria' for going to her or giving to her. All three markers must appear.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
