import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Kaliwa, kanan, diretso — Left, Right, Straight',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You asked 'Saan ang...?' — now somebody is gesturing with their lips (yes, lips!) and rattling off directions. Three little verbs unlock 90% of them: kumaliwa, kumanan, diretso. Learn these and you can navigate any barangay.",
    culturalNote: "Filipinos famously point with their lips — a small pucker towards the direction. Don't be surprised if you hear 'andon' with no hand involved. They also love landmarks: 'kumanan ka sa tapat ng 7-Eleven' (turn right across from 7-Eleven). Street names are almost never used.",
  },

  chunks: [
    {
      id: 'kumaliwa',
      target: 'Kumaliwa',
      native: 'Turn left',
      literal: 'Go-left',
      emoji: '⬅️',
      phonetic: 'koo-mah-LEE-wah',
      audioRef: null,
    },
    {
      id: 'kumanan',
      target: 'Kumanan',
      native: 'Turn right',
      literal: 'Go-right',
      emoji: '➡️',
      phonetic: 'koo-MAH-nahn',
      audioRef: null,
    },
    {
      id: 'diretso',
      target: 'Diretso',
      native: 'Go straight',
      literal: 'Straight',
      emoji: '⬆️',
      phonetic: 'dee-RET-soh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Direction commands (-um- verbs)',
    explanation: "'Kaliwa' = left, 'kanan' = right. Add the 'kum-' prefix and they become commands: 'kumaliwa' (turn left), 'kumanan' (turn right). 'Diretso' is borrowed from Spanish 'derecho' and just means straight ahead.",
    examples: [
      { target: 'Kumaliwa ka', native: 'Turn left (you)' },
      { target: 'Kumanan po kayo', native: 'Turn right (respectful)' },
      { target: 'Diretso lang po', native: 'Just go straight (respectful)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction to its meaning',
      pairs: [
        { left: 'Kumaliwa', right: 'Turn left' },
        { left: 'Kumanan', right: 'Turn right' },
        { left: 'Diretso', right: 'Go straight' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "The driver says 'sa SM, _____ ka' — pointing to the right side of the street",
      sentence: 'Sa SM, _____ ka.',
      options: ['kumanan', 'kumaliwa', 'diretso'],
      correct: 'kumanan',
      context: "He's gesturing right — kumanan.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Go straight (respectful — add "po")',
      correct: ['Diretso po', 'diretso po', 'Diretso lang po', 'diretso lang po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "Turn left at the corner"',
      words: ['sa', 'kanto', 'Kumaliwa'],
      correct: ['Kumaliwa', 'sa', 'kanto'],
      translation: 'Turn left at the corner',
    },
    {
      type: 'multiple_choice',
      instruction: "Your tricycle driver asks where to drop you. You want to go straight to the next corner. What do you say?",
      question: 'Pick the right command',
      options: [
        { text: 'Diretso lang po', correct: true },
        { text: 'Kumanan po', correct: false },
        { text: 'Andon po', correct: false },
      ],
      explanation: "'Diretso lang po' = just go straight, respectful. 'Lang' softens it to 'just'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Turn right',
      correct: ['Kumanan', 'kumanan'],
    },
  ],

  rwenDialogue: {
    intro: "You're in a tricycle in Tagaytay. The driver doesn't know exactly where your hotel is — but you do. Direct him.",
    lines: [
      {
        speaker: 'npc',
        target: 'Saan po tayo, ma\'am/sir?',
        native: "Where to, ma'am/sir?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Diretso lang po, tapos kumaliwa.', native: 'Just go straight, then turn left.', correct: true, feedback: 'Beautiful — clear, polite, sequenced. He nods.' },
          { target: 'Kumanan banyo', native: 'Right bathroom', correct: false, feedback: 'Hmm — "banyo" is bathroom. Wrong word!' },
          { target: 'Saan ang hotel?', native: "Where's the hotel?", correct: false, feedback: "You're asking him! He needs YOU to direct." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, salamat!',
        native: 'Okay, thanks!',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just chained two directions in one breath. The driver trusts you now — that's everything.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Turn left (in Tagalog)', correct: ['Kumaliwa', 'kumaliwa'] },
      { prompt: 'Go straight (in Tagalog)', correct: ['Diretso', 'diretso'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk somewhere today and silently narrate your turns in Tagalog. 'Kumaliwa... diretso... kumanan.' Build the muscle memory.",
    rwenSignoff: "Ingat sa daan — careful on the road. Bukas ulit.",
  },

  phase8: {
    scenario: "You hop in a tricycle in Tagaytay City and the driver — a friendly guy named Mang Edu — asks where you're going. You're staying at a small bed-and-breakfast that's two blocks straight, then a left at the bakery. He doesn't know it. You have to direct him turn-by-turn in Tagalog.",
    rwenRole: "Mang Edu — tricycle driver, ~45, knows Tagaytay's main roads but not every back-street; needs clear sequenced directions ('diretso… tapos kumaliwa') and answers with a cheerful 'Sige po!' when he understands.",
    successCriteria: "User uses at least TWO of {kumaliwa, kumanan, diretso} in sequence (e.g., 'Diretso po, tapos kumaliwa'). 'Po' appears at least once. User does NOT just say 'Saan ang...' — they're directing, not asking.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
