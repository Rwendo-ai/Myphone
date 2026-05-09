import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08',
  module: 1,
  lesson: 8,
  title: 'Distinguishing the Clicks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Now the harder skill: hearing the difference. Producing a click is mechanical — your tongue knows three positions. But hearing one click in a fast sentence and naming it? That takes ear training. Today, listening drills.",
    culturalNote: "Linguists call this 'phonemic awareness' — the ability to sort sounds into mental boxes. Children growing up in Matabeleland develop click awareness by age two; English speakers can absolutely build it as adults, but it takes deliberate practice. The good news: clicks are acoustically very distinct from each other once your brain knows what to listen for.",
  },

  chunks: [
    {
      id: 'c_acoustic',
      target: 'c sounds like:',
      native: 'a thin, sharp tick — high frequency, short',
      emoji: '👂',
      phonetic: '[c-click] — like a tap on a wine glass',
      audioRef: null,
    },
    {
      id: 'q_acoustic',
      target: 'q sounds like:',
      native: 'a deep, hollow pop — louder, more resonant',
      emoji: '👂',
      phonetic: '[q-click] — like a cork from a bottle',
      audioRef: null,
    },
    {
      id: 'x_acoustic',
      target: 'x sounds like:',
      native: 'a wet, sideways clop — softer than q, deeper than c',
      emoji: '👂',
      phonetic: '[x-click] — like a horse on cobblestones',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Telling the clicks apart by ear',
    explanation: "Each click has its own acoustic fingerprint. C is THIN and HIGH (a thin tap). Q is DEEP and LOUD (a hollow pop). X is WET and SIDEWAYS (a clop). When you hear an unfamiliar click word, focus on which of those three impressions it gives you, not which letter it's spelled with.",
    examples: [
      { target: 'thin tap',     native: 'c — dental' },
      { target: 'hollow pop',   native: 'q — palatal' },
      { target: 'sideways clop', native: 'x — lateral' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'You hear a deep, hollow pop in the middle of a word. Which click is it?',
      question: 'Deep, hollow pop — sounds like a cork.',
      options: [
        { text: 'q (palatal)', correct: true },
        { text: 'c (dental)',  correct: false },
        { text: 'x (lateral)', correct: false },
      ],
      explanation: "The q-click is the loudest and most resonant of the three — the cork-pop is its signature.",
    },
    {
      type: 'multiple_choice',
      instruction: 'You hear a thin, sharp tick — almost like a tongue-cluck of disapproval. Which click is it?',
      question: 'Thin, sharp tick — like a tap on glass.',
      options: [
        { text: 'c (dental)',  correct: true },
        { text: 'q (palatal)', correct: false },
        { text: 'x (lateral)', correct: false },
      ],
      explanation: "The c-click is the highest and thinnest — a clean tap rather than a pop or a clop.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match the acoustic impression to the click letter',
      pairs: [
        { left: 'thin tap',     right: 'c' },
        { left: 'hollow pop',   right: 'q' },
        { left: 'sideways clop', right: 'x' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Which click is the LOUDEST of the three?',
      prompt: 'loudest click',
      correct: ['q', 'Q', 'q-click'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen reads you four words from earlier lessons. For each, you decide which click it had.",
    lines: [
      { speaker: 'rwen', rwenLine: "Word one: ucansi. Listen — oo-[c-click]ahn-see. Which click?" },
      { speaker: 'npc',  target: 'ucansi', native: "thin, sharp — c" },
      { speaker: 'rwen', rwenLine: "Word two: iqaqa. ee-[q-click]AH-[q-click]ah. Which click?" },
      { speaker: 'npc',  target: 'iqaqa',  native: "hollow pop, twice — q" },
      { speaker: 'rwen', rwenLine: "Word three: ixoxo. ee-[x-click]OH-[x-click]oh. Which click?" },
      { speaker: 'npc',  target: 'ixoxo',  native: "sideways clop, twice — x" },
      { speaker: 'rwen', rwenLine: "Three words, three clicks, three different sounds. Train this for a week and your ear will lock it in." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'Which click is the LOUDEST of the three (c, q, or x)?',           correct: ['q', 'Q'] },
      { prompt: 'Which click is the THINNEST / sharpest tap?',                     correct: ['c', 'C'] },
      { prompt: 'Which click is the SIDEWAYS one (a horse clop)?',                 correct: ['x', 'X'] },
    ],
  },

  mission: {
    title: "Three minutes of pure listening",
    task: "Find a Ndebele or Zulu song on YouTube — anything by Lovemore Majaivana, Sandra Ndebele, or any isiZulu pop song will do. Listen for three minutes WITHOUT trying to understand. Just count: how many c-clicks, how many q-clicks, how many x-clicks did you catch?",
    rwenSignoff: "Identifying clicks in fast speech is a skill that grows quietly. Don't measure progress in days — measure it in weeks.",
  },

  phase8: {
    scenario: "Rwen reads you six click-containing words from earlier lessons in random order. For each, you have to name the click (c, q, or x).",
    rwenRole: "Quiz host with a stopwatch — fair but quick",
    successCriteria: "User correctly identified the click in at least four of six words.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
