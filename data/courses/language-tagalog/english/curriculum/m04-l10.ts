import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'Markers in Real Talk',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine lessons of markers, pronouns, demonstratives, and questions. Today we stop dissecting and start TALKING. One real-feeling Tagalog exchange, with all your markers doing their jobs at once. This is where the grammar disappears and conversation starts.",
    culturalNote: "Filipinos test you not on grammar but on flow. If you say 'si Maria', then 'kay Maria', then 'ni Maria' in one chat — they nod and keep going, because you're tracking the marker triplet without thinking. That nod is the goal of this whole module.",
  },

  chunks: [
    {
      id: 'kumusta_ka',
      target: 'Kumusta ka?',
      native: 'How are you?',
      literal: 'How you?',
      emoji: '👋',
      phonetic: 'ku-MUS-ta ka',
      audioRef: null,
    },
    {
      id: 'sino_kasama_mo',
      target: 'Sino kasama mo?',
      native: "Who's with you?",
      literal: 'Who companion-yours?',
      emoji: '🧑‍🤝‍🧑',
      phonetic: 'SI-no ka-SA-ma mo',
      audioRef: null,
    },
    {
      id: 'pupunta_kami_sa',
      target: 'Pupunta kami sa palengke',
      native: "We're going to the market",
      literal: 'Going we to market',
      emoji: '🛍️',
      phonetic: 'pu-PUN-ta ka-MI sa pa-LENG-ke',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full marker fluency',
    explanation: "Real Tagalog mixes ang/ng/sa, si/ni/kay, ko/mo/niya, ito/iyan/iyon, and question words in single sentences. The pattern isn't a rule — it's a rhythm. Once you stop tracking each marker individually, you're fluent in this module.",
    examples: [
      { target: 'Si Maria ang kasama ko ngayon', native: 'Maria is who I am with today' },
      { target: 'Pupunta kami sa bahay ni Tita Glo bukas', native: "We're going to Tita Glo's house tomorrow" },
      { target: 'Ito ang regalo kay Maria', native: "This is the gift for Maria" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Kumusta ka?', right: 'How are you?' },
        { left: 'Sino kasama mo?', right: "Who's with you?" },
        { left: 'Pupunta kami sa palengke', right: "We're going to the market" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Fill in the marker: 'Going to Maria's house'",
      sentence: 'Pupunta ako sa bahay _____ Maria.',
      options: ['ni', 'si', 'kay'],
      correct: 'ni',
      context: "The house belongs to Maria — possession with a name = 'ni'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "We're going to the market",
      correct: ['Pupunta kami sa palengke', 'pupunta kami sa palengke'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'This is the gift for Maria'",
      words: ['Maria', 'kay', 'Ito', 'regalo', 'ang'],
      correct: ['Ito', 'ang', 'regalo', 'kay', 'Maria'],
      translation: 'This is the gift for Maria',
    },
    {
      type: 'multiple_choice',
      instruction: "Three markers in one sentence — which is correct?",
      question: "'Si Juan ang kasama ___ sa bahay ___ Maria.' (Juan is who's with me at Maria's house)",
      options: [
        { text: 'ko / ni', correct: true },
        { text: 'mo / si', correct: false },
        { text: 'niya / kay', correct: false },
      ],
      explanation: "'Kasama ko' = my companion. 'Bahay ni Maria' = Maria's house (possession + name). The marker family stays threaded.",
    },
    {
      type: 'translate',
      instruction: "Type in Tagalog — full sentence",
      prompt: "Who's with you?",
      correct: ['Sino kasama mo?', 'Sino kasama mo', 'sino kasama mo', 'sino kasama mo?'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday morning. You bump into a Filipino friend at a coffee shop. They're with someone you've never met, and they're heading somewhere. A complete marker workout — all in one chat.",
    lines: [
      {
        speaker: 'npc',
        target: 'Uy! Kumusta ka ngayon?',
        native: 'Hey! How are you today?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mabuti, salamat. Sino kasama mo?', native: "Good, thanks. Who's with you?", correct: true, feedback: "Smooth. 'Sino' for the person, 'mo' as the possessor — fully natural." },
          { target: 'Mabuti. Ano kasama ka?', native: 'Good. What is your companion?', correct: false, feedback: "'Ano' is for things, not people. And 'mo' (yours) goes after 'kasama', not 'ka' before." },
          { target: 'Mabuti. Saan kasama mo?', native: 'Good. Where is your companion?', correct: false, feedback: "'Saan' = where. You want WHO. Use 'sino'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ito si Maria, kaibigan ko. Pupunta kami sa palengke ni Tita Glo.',
        native: "This is Maria, my friend. We're going to Tita Glo's market.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ah, kumusta, Maria! Ingat kayo kay Tita Glo!', native: 'Ah, hi Maria! Take care going to Tita Glo!', correct: true, feedback: "Ten lessons in one reply — 'kay' for direction-to-named-person. You're done." },
          { target: 'Ingat kayo sa Tita Glo', native: '(wrong marker for a name)', correct: false, feedback: "Names get 'kay', not 'sa'. The marker swaps when there's a person." },
          { target: 'Ingat kayo ni Tita Glo', native: '(wrong marker — that means \"of Tita Glo\")', correct: false, feedback: "'Ni' is possession. For direction, it's 'kay'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You did it. You held a real Tagalog moment with markers, demonstratives, possessives, and a question word — all threaded together. Module 4: complete.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Who's with you? (in Tagalog)",
        correct: ['Sino kasama mo?', 'Sino kasama mo', 'sino kasama mo', 'sino kasama mo?'],
      },
      {
        prompt: "We're going to the market (in Tagalog)",
        correct: ['Pupunta kami sa palengke', 'pupunta kami sa palengke'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Have one Tagalog exchange today — even just three sentences — that uses at least three different markers. Text a friend. Talk to your lola. The goal: stop thinking about the markers and just LET them happen.",
    rwenSignoff: "Tapos na ang Module 4. You speak with markers now. Magaling ka talaga — see you in Module 5.",
  },

  phase8: {
    scenario: "You're at a Saturday family lunch. Your tita introduces you to a cousin you've never met (Maria), asks where you've been all week, points at unfamiliar food on the table, and wants you to bring something to her neighbor afterward. Every sentence needs markers — ang/ng/sa, si/ni/kay, possessives, demonstratives, and a question or two from you.",
    rwenRole: "Tita Glo — early 60s, hosting Saturday lunch; she's testing your marker fluency without knowing it. She'll switch between asking about you, about Maria, about food on the table, and about errands — forcing you to switch markers fluidly.",
    successCriteria: "User uses at least 5 different marker types across the conversation (e.g., ang, ng, sa, si, ni, kay, ko/mo/niya, ito/iyan/iyon, ano/sino/saan). They self-correct when the marker doesn't match the role (place vs name, possession vs focus). The conversation flows without long pauses to think.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
